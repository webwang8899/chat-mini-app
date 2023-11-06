const OSS = require('ali-oss');
import * as commonApi from "@/netword/common";
export default {
    //isTransCode是否转码
    async toUpload(file, isTransCode, callback) {
        let nameType = file.file.name
            .substring(file.file.name.lastIndexOf(".") + 1)
            .toLowerCase();
        //获取oss上传临时凭证
        await commonApi.getTemporaryInfo({fileType: nameType}).then(async res => {
            if(res.status) {
                this.getClient(res.data)
                this.clientData = res.data
                let datas = null
                await this.ossUpload(file, res.data, isTransCode, (data)=>{
                    datas = data
                })
                callback(datas)
            }
        })
    },
    getClient(data) {
        this.client = new OSS({
            // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
            region: data.region,
            // 从STS服务获取的临时访问密钥（AccessKey ID和AccessKey Secret）。
            accessKeyId: data.accessKeyId,
            accessKeySecret: data.accessKeySecret,
            // 从STS服务获取的安全令牌（SecurityToken）。
            stsToken: data.securityToken,
            refreshSTSToken: async () => {
            // 向您搭建的STS服务获取临时访问凭证。
            const info = await fetch(`file/upload/getTemporaryInfo?ios=' + '${new Date().getTime() + Math.floor(Math.random() * 10000)}'+'`);
            return {
                accessKeyId: info.accessKeyId,
                accessKeySecret: info.accessKeySecret,
                stsToken: info.stsToken
            }
            },
            // 刷新临时访问凭证的时间间隔，单位为毫秒。
            refreshSTSTokenInterval: 300000,
            // 填写Bucket名称。
            bucket: data.bucketName
        });
    },
    async ossUpload(file, clientData, isTransCode, callback) {
        //向阿里云oss上传文件
        const options = {
            // 获取分片上传进度、断点和返回值。
            progress: (p, cpt, res) => {
                this.percentage = parseInt(p*100)
                this.abortCheckpoint = cpt;
            },
            checkpoint: this.abortCheckpoint,
            // 设置并发上传的分片数量。
            parallel: 4,
            // 设置分片大小。默认值为1 MB，最小值为100 KB。
            partSize: 1024 * 1024 * 1,
            timeout: 120000,//设置超时时间
            // headers,
            // 自定义元数据，通过HeadObject接口可以获取Object的元数据。
            // meta: { year: 2020, people: "test" },
            // mime: "text/plain",
        };
        this.showProgress = true
        await this.client.multipartUpload(clientData.filePath, file.file, {
            ...options,
        }).then(res => {
            this.abortCheckpoint = {}
            let fileType = file.file.name.substring(file.file.name.lastIndexOf(".") + 1).toLowerCase()
            if(["mp4","wmv","rmvb","flv","avi","mov","asf", "f4v","mp3","wav","wma","ape","flac","ogg","aac"].includes(fileType) && isTransCode){
                this.percentage = 99
                this.transCodeVideo(file, clientData)
            }else{
                let fileData = {
                    filePath: clientData.filePath,
                    fileType: file.file.name.substring(file.file.name.lastIndexOf(".") + 1).toLowerCase(),
                    fileName: file.file.name,
                    url: res.url || clientData.ossPrefix + clientData.filePath,
                    uid: file.file.uid || ''
                }
                this.percentage = 0
                this.showProgress = false
                callback(fileData)
            }
        }).catch(err => {
            // this.clearProgress()
            this.ossUpload(file, clientData)
        })
    },
    clearProgress() {
        this.percentage = 0
        this.showProgress = false
    },
    async transCodeVideo(file, clientData) {
        //阿里云视频转码
        this.show = true
        await commonApi.alicodecMedia({mediaFilePath: clientData.filePath}).then(res => {
            if(res.status){
                let i = setInterval(() => {
                    //每3秒查询一次转码进度
                    commonApi.alicodecPer({jobId: res.data.jobId}).then(res => {
                        if(res.status){
                            if(res.data.percent == 100) {
                                let fileData = {
                                    filePath: res.data.newFilePath,
                                    fileType: file.file.name.substring(file.file.name.lastIndexOf(".") + 1).toLowerCase(),
                                    fileName: file.file.name,
                                    url: res.data.url || res.data.ossPrefix + res.data.newFilePath,
                                    uid: file.file.uid || ''
                                }
                                this.percentage = 0
                                this.showProgress = false
                                this.show = false;
                                clearInterval(i)
                                return fileData
                            }
                        }
                    })
                }, 3000)
            }else{
                this.clearProgress()
                this.show = false;
                this.$message.error('转码失败')
            }
        }).catch(err => {
            this.clearProgress()
            this.$message.error(err)
            this.show = false;
        })
    }
}