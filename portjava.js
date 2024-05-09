// script.js
const loginForm = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const btnAgregar = document.getElementById("btnAgregar")

btnAgregar.addEventListener("click",()=>{
    if(username.value=="Mauren" && password.value=="123"){
        window.location.href="portafolio.html"
    }
})


btnAgregar.addEventListener("click",()=>{
    if(username.value=="fabri" && password.value=="123"){
        window.location.href="portafolio.html"
    }
})