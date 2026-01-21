function register(){
localStorage.setItem("logged","true");
alert("تم التسجيل بنجاح");
window.location.href="index.html";
}

function logout(){
localStorage.removeItem("logged");
}