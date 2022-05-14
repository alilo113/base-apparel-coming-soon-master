let form = document.getElementById('form');
let email = document.getElementById('email');

form.addEventListener('submit', (e) =>{
    if(email.value == ''){
       document.getElementById('error').innerHTML = "you should type your email";
       document.getElementById('errorIcon').style.visibility = 'visible'
       document.getElementById('email').style.borderColor = 'red';
       e.preventDefault()
   }
})