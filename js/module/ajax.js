function getData(url, data) {
    return fetch(url, data)
        .then(
            //如果响应成功，成为resolveed状态
            response => {
                //判断响应是否返回成功的状态码
                if (!response.ok) {
                    const error = new Error(`请求失败! 状态码: ${response.status}, 失败信息: ${response.statusText}`);
                    error.response = response;
                    return Promise.reject(error);
                } else {
                    return response.json();
                }
            },
            //如果响应失败，成为rejected状态
            () => {
                const error = new Error('网络错误');
                alert('网络错误！');
                throw error;
            }
        )
}
//处理响应异常的函数   
function handleError(error) {
    //do something to handle error
    console.log(error);
}

