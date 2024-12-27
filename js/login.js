
let mail=document.getElementById("email-login");
let password=document.getElementById('password-login');
pragraph=document.getElementById('pragraph');
// let wel=document.getElementById('welcome');



 function adduser(){
    let users = JSON.parse(localStorage.getItem('users'));

  let user = {
  mail:mail.value,
  password :password.value,}

  let found = false;

for (let i = 0; i < users.length; i++) {
    let str=``;
    if (user.mail === users[i].mail && user.password === users[i].pass) {
        let nm = users[i].user_nam;
        localStorage.setItem('userName', nm);
 
        window.location.href = "welcome.html";
       
        found = true;
        break; 
    }
}

if (!found) {
    let str=`incorrect email oe password`;
    pragraph.innerHTML=str;
}
 }


  

  



 
 