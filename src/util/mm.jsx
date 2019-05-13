/*
 * @Author: DevZhang 
 * @Date: 2019-05-13 14:39:09 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-05-13 16:06:42
 */


class MUtil {
    // 请求方法
    request(param) {
        return new Promise( (resolve, reject) => {
            $.ajax({
                type: param.type || 'get',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success: res => {
                    // 成功
                    if (res.status === 0) {
                        typeof resolve === 'function' && resolve(res.data, res.msg);
                    }
                    // 跳转登录
                    else if (res.status === 10) {
                        this.doLogin();
                    }
                    else {
                        typeof reject === 'function' && reject(res.data || res.msg);
                    }
                },
                error: error => {
                    typeof reject === 'function' && reject(error.statusText);
                }
            })
        })
    }

    // 登录
    doLogin() {
        // 携带参数并对参数进行处理
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }

    // 获取 URL 参数
    getUrlParam(name) {
        const reg = new RegExp('(^|&)' + name + '=([^&]*)($|&)'),
            queryStr = window.location.search.split('?')[1] || '',
            result = queryStr.match(reg);

        return result ? decodeURIComponent(result[2]) : null;
    }

    // 错误提示语
    errorTips(errMsg) {
        alert(errMsg || '貌似出现了一个小问题');
    }

    // 存储缓存数据
    setStorage(name, data) {
        let dataType = typeof data;
        // JSON类型数据
        if (dataType === 'object') {
            window.localStorage.setItem(name, JSON.stringify(data));
        }
        // 基础类型数据
        else if (['number', 'string', 'boolean'].indexOf(dataType) > 0) {
            window.localStorage.setItem(name, data);
        }
        else {
            alert('该类型不支持本地存储！');
        }
    }

    // 取出缓存数据
    getStorage(name) {
        let data = window.localStorage.getItem(name);

        if (data) {
            return JSON.parse(data);
        } else {
            return '';
        }
    }

    // 删除本地存储数据
    removeStorage(name) {
        window.localStorage.removeItem(name);
    }
}

export default MUtil;