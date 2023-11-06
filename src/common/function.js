function downloadDataPPT(url,name) {
    console.log("=++++++方法",url,name);
    url = url.replaceAll('+', '%2B');
    let urlArr = url.split('.')
    axios.get(url, {
        responseType: 'blob'
    }).then((res) => {
        if (res.headers["content-type"]) {
            let blob = new Blob([res.data], {
            type: "application/*" ,
            }); // res就是接口返回的文件流了
            const fileName = name + '.'+ urlArr[urlArr.length - 1];
            const linkNode = document.createElement("a");
            
            console.log(linkNode)
            linkNode.style.display = "none";
            linkNode.href = URL.createObjectURL(blob);
            linkNode.download = fileName;
            document.body.appendChild(linkNode);
            linkNode.click();
            URL.revokeObjectURL(linkNode.href);
            document.body.removeChild(linkNode);
        }
    })
}