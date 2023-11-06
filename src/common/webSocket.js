
import store from '../store/index';
var websocket = null
var serverTimeoutObj = null // 心跳倒计时
var timeout = 10 * 1000 // 10秒一次心跳
var timeoutObj = null // 心跳心跳倒计时
var timeoutnum = null // 断开 重连倒计时
var lockReconnect = false // 防止
var messageJsonText = {}
function initWebSocket() {
  // ${store.state.webSocketURL
  // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https
  websocket = new WebSocket(`${store.state.webSocketURL}/?token=${window.localStorage.getItem("token")}&uid=${store.state.userInfo.dataId}&clientType=H5`);
  websocket.onopen = websocketonopen;
  websocket.onerror = websocketonerror;
  websocket.onmessage = setOnmessageMessage;
  websocket.onclose = websocketclose;
  // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
  window.onbeforeunload = onbeforeunload

}

function start() {
  //清除延时器 
  timeoutObj && clearInterval(timeoutObj);
  serverTimeoutObj && clearTimeout(serverTimeoutObj);
  var timeoutObj = setInterval(() => {
    if (websocket && websocket.readyState == 1) {
      console.log("ping");
      websocket.send("ping"); //发送消息，服务端返回信息，即表示连接良好，可以在socket的onmessage事件重置心跳机制函数
    } else {
      reconnect();
    }
    //定义一个延时器等待服务器响应，若超时，则关闭连接，重新请求server建立socket连接
    serverTimeoutObj = setTimeout(() => {
      //websocket.close();
    }, timeout);
  }, timeout);
}

function reset() {
  // 重置心跳 
  // 清除时间
  clearInterval(timeoutObj);
  clearTimeout(serverTimeoutObj);
  // 重启心跳 
  start();
}
// 重新连接
function reconnect() {
  if (lockReconnect) return;
  lockReconnect = true;
  //没连接上会一直重连，设置延迟避免请求过多
  timeoutnum && clearTimeout(timeoutnum);
  timeoutnum = setTimeout(() => {
    initWebSocket();
    lockReconnect = false;
  }, 10000);
}
async function setOnmessageMessage(event) {
  console.log(event, event.data, "获得消息");
  if (event && event.data == 'pong') {
    return
  } else if (event && event.data == 'close') {
    websocket.close();
    clearTimeout(timeoutObj);
    clearTimeout(serverTimeoutObj);
    window.localStorage.clear();
    window.location.reload();
  } else if (JSON.parse(event.data).msType == '2') {
    messageJsonText = JSON.parse(JSON.parse(event.data).messageJsonText);
    window.localStorage.setItem('messageJsonText', JSON.stringify(messageJsonText))
    store.dispatch("getPreemAnswerShow", true);
  } else if (JSON.parse(event.data).msType == '6') {//快速测验随时显示
    messageJsonText = JSON.parse(JSON.parse(event.data).messageJsonText);
    // console.log("messageJsonText", messageJsonText,messageJsonText.quizId);
    window.localStorage.setItem('MyTypeContent', JSON.stringify(messageJsonText))
    store.commit("MyAnswerIdShow", JSON.parse(localStorage.getItem('MyTypeContent')).quizId);
  }
  reset();
  // 自定义全局监听事件
  window.dispatchEvent(
    new CustomEvent("onmessageWS", {
      detail: {
        data: event.data,
      },
    })
  );
  // //发现消息进入    开始处理前端触发逻辑
  // if (event.data === 'success' || event.data === 'heartBath') return
  if (JSON.parse(event.data).msType == '2') return
}

function websocketonopen() {
  //开启心跳
  start();
  console.log(
    "WebSocket连接成功!!!" + new Date() + "----" + websocket.readyState
  );
}

function websocketonerror(e) {
  console.log("WebSocket连接发生错误" + e);
}

function websocketclose(e) {
  websocket.close();
  clearTimeout(timeoutObj);
  clearTimeout(serverTimeoutObj);
  console.log("WebSocket连接关闭");
}

function websocketsend(messsage) {
  websocket.send(messsage);
}

function closeWebSocket() {
  // 关闭websocket
  websocket.close();
}
export {
  initWebSocket
}