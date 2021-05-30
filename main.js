let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let signIn = document.querySelector(".signup");
let signUp = document.querySelector(".signin");

btnLogin.onclick = ()=>{
    signIn.classList.add("inActive");
    signUp.classList.add("active");
}

btnSignUp.onclick = ()=> {
   signIn.classList.remove("inActive");
   signUp.classList.remove("active");
}

