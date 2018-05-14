//这里是请求外部配置参数
let get = (url) => {
    return new Promise((resolve, reject) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest()
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP")
        }

        xhr.open("get", url, true);
        xhr.onload = () => {
            if (xhr.status == 200 && xhr.readyState == 4) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(null)
            }
        };
        xhr.onerror = () => {
            reject(null)
        };
        xhr.send();
    });
};

export default {
    getConfig() {
        //外部请求文件路径
        return get('/config/app-config.json')
        // return get('/static/app-config.json');
    }
}