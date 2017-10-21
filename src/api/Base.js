const _perm = JSON.parse(sessionStorage.Permissions
    ?  decodeURIComponent(sessionStorage.Permissions) + '"_":1}'
    : '{}');
export const  permissions =(ID)=>{ 
    return  window.location.host.startsWith("localhost")?true:( _perm[ID]?true:false);
}
  