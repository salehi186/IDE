import fetch from 'isomorphic-fetch';

const _perm = JSON.parse(sessionStorage.Permissions
    ? decodeURIComponent(sessionStorage.Permissions) + '"_":1}'
    : '{}');
export const permissions = (ID) => {
    return window
        .location
        .host
        .startsWith("localhost")
        ? true
        : (_perm[ID]
            ? true
            : false);
}

export const ServerCall = (url, options) => {
    return new Promise((resolve, reject) => {
        document.getElementById("modalLoading").style.display="";
        fetch(url, options).then(res => {
            if (res.headers.get("Content-Type").indexOf("json") > -1) 
                return res.json();
            
            return res.text();
        }, err => {
            alert(err);
            reject(err);
            document.getElementById("modalLoading").style.display="none";
        }).then(res => {
            resolve(res);
            document.getElementById("modalLoading").style.display="none";
        });
    });
}