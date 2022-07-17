



const login = document.getElementById("login-form");
const errormsg = document.getElementById("error-msg");
const successmsg = document.getElementById("success-msg");
const btnsubmit  = document.getElementById("btn-submit");

btnsubmit.addEventListener("click", (e)=> {
    e.preventDefault();
    const email = login.email.value;
    const password = login.pwd.value;
    if( email ==="test@gmail.com" && password === "test123"){
        successmsg.classList.remove("visually-hidden");
        errormsg.classList.add("visually-hidden");
    }
    else{
        successmsg.classList.add("visually-hidden");
        errormsg.classList.remove("visually-hidden");
    }

})