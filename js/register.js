
let username = document.getElementById("name");
let password = document.getElementById('password-register');
let email = document.getElementById('email-register');
let form = document.getElementById('form-register');
let pragraph = document.getElementById('pragraph');
// localStorage.clear();

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if(localStorage.getItem('users') != null){
        var users = JSON.parse(localStorage.getItem('users'));
    } else {
        var users = [];
    }

    var user = {
        user_nam: username.value,
        pass: password.value,
        mail: email.value,
    };
   
    function validatePassword(pass) {
        const minLength = 8; 
        const hasUppercase = /[A-Z]/.test(pass); 
        const hasLowercase = /[a-z]/.test(pass); 
        const hasNumber = /[0-9]/.test(pass); 
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pass); 

        return (
            pass.length >= minLength &&
            hasUppercase &&
            hasLowercase &&
            hasNumber &&
            hasSpecialChar
        );
    }

    if (validatePassword(user.pass)) {
        if (users.length == 0) {
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            let str = `Registration successful`;
            pragraph.innerHTML = str;
            // window.location.href = "login.html";
        } else if (users.length == 1) {
            users.push(user);
            if (users[0].mail == users[1].mail) {
                alert("This email already has an account");
                users.pop(user);
            } else {
                localStorage.setItem("users", JSON.stringify(users));
                users.push(user);
                let str = `Registration successful`;
                pragraph.innerHTML = str;
                window.location.href = "login.html";
            }
        } else if (users.length >= 2) {
            users.push(user);
            var x = 0;
            for (var i = 0; i < users.length - 1; i++) {
                if (users[i].user_nam == users[users.length - 1].user_nam) {
                    x++;
                }
            }

            if (x == 0) {
                localStorage.setItem("users", JSON.stringify(users));
                users.push(user);
                let str = `Registration successful`;
                pragraph.innerHTML = str;
            } else {
                alert("The email already has an account");
                users.pop(user);
            }
        }
    } else {
        alert("Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.");
    }
});
