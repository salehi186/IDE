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

export const ServerCall = (url, options,silent) => {
    return new Promise((resolve, reject) => {
        if(!silent) 
            document.getElementById("modalServerLoading").style.display="block";
        fetch(url, options).then(res => {
            if (res.headers.get("Content-Type").indexOf("json") > -1) 
                return res.json();
            
            return res.text();
        }, err => {
            if(!silent) 
            {
                document.getElementById("modalServerLoading").style.display="none";
                alert(err);
            }
            reject(err);
        }).then(res => {
            if(!silent) 
                document.getElementById("modalServerLoading").style.display="none";
            resolve(res);
        }).catch(x=>{
            if(!silent) 
                document.getElementById("modalServerLoading").style.display="none";
        });
    });
}