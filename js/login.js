//s-1 add click function
document.getElementById('btn-submit').addEventListener('click', function(){
    //s-2 get the email
    //use .value to get text from an input field
    const emailField=document.getElementById('user-email');
    const email=emailField.value;
//s-3 get password
const passwordField=document.getElementById('user-password');
    const password=passwordField.value;
//DANGER !!!!!!!!!!!!do not check or verify email password in the client side


if(email ==='asd@qwe' && password === '123'){
    console.log('valid')
    location.href='bank.html'
}
else{
    alert('bhair hoooo')
}
})