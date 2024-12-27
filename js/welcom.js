
const userName = localStorage.getItem('userName');
const wel = document.getElementById('welcome');
if (userName) {
    wel.innerHTML = `<h1 class="color ">Welcome, ${userName}!</h1>`;
} else {
    wel.innerHTML = '<p>No user found. Please log in.</p>';
}


function logout(){
    window.location.href = "index.html";
}