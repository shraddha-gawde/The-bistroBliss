function register(){
    firstName = document.getElementById('fname').value
    lastName = document.getElementById('lname').value
    email = document.getElementById('remail').value
    phone = document.getElementById('rphone').value
    dateOfBirth = document.getElementById('rdob').value
    password = document.getElementById('rpswd').value
}
if (validate_pswd(password)==false){
    alert('Password must contains atleast 6 digits');
}
function validate_pswd(password){
    if (password<6){
        return false;
    }else{
        return true;
    }
}

auth.createUserWithEmail(email, password){
    .than(function(){
       var user = auth.currentUser
    })
    .catch(function(error){
        var error_code  = error.code
        var errror_massage = error.massage
        alert(errror_massage);
    })
}
