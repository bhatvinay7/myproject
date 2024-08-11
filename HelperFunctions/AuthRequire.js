function authRequire(state){
   state ? localStorage.setItem("login",true):localStorage.setItem("login",false);
    
    return localStorage.getItem("login");
}
export {authRequire}