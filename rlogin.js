const userUrl = `https://neural-innovator-5123.onrender.com/users`;
// let signBtn = document.getElementById('rsbtn');
// let firstNameInput = document.getElementById('fname');
// let lastNameInput = document.getElementById('lname');
// let emailInput = document.getElementById('remail');
// let phoneInput = document.getElementById('rphone');
// let dateOfBirthInput = document.getElementById('rdob');
// let passwordInput = document.getElementById('rpswd');

// async function registerUser() {
//     let userObj = {
//         firstName: firstNameInput.value,
//         lastName: lastNameInput.value,
//         email: emailInput.value,
//         phone: phoneInput.value,
//         dateOfBirth: dateOfBirthInput.value,
//         password: passwordInput.value
//     };
//     if (validate_pswd(userObj.password) === false) {
//         alert('Password must contain at least 6 characters');
//         return;
//     }

//     try {
//         let res = await fetch(userUrl, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(userObj),
//         });

//         if (!res.ok) {
//             throw new Error(`Registration failed. Status: ${res.status}`);
//         }

//         let data = await res.json();
//         console.log(data);
//         successfullyRegistered();

//     } catch (error) {
//         console.error('Error during registration:', error);
//         if (error.response) {
//             console.error('Response text:', await error.response.text());
//         }
//         alert('Registration failed. Please check the console for details.');
//     }

// }

// signBtn.addEventListener('click', function () {
//     registerUser();
// });

// function successfullyRegistered() {
//     alert("Registration successful! Please log in to continue.");
// }

// function validate_pswd(password) {
//     return password.length >= 6;
// }
const signBtn = document.getElementById('rsbtn');
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
const emailInput = document.getElementById('remail');
const phoneInput = document.getElementById('rphone');
const dateOfBirthInput = document.getElementById('rdob');
const passwordInput = document.getElementById('rpswd');

signBtn.addEventListener('click', () => {
    console.log('Clicked!');
  let userFirstName = firstNameInput.value;
  let userLastName = lastNameInput.value;
  let userEmail = emailInput.value;
  let userPhone = phoneInput.value;
  let userDateOfBirth = dateOfBirthInput.value;
  let userPassword = passwordInput.value;

  const userObj = {
    firstName: userFirstName,
    lastName: userLastName,
    email: userEmail,
    phone: userPhone,
    dateOfBirth: userDateOfBirth,
    password: userPassword,
  };

  signUpUser(userObj);
});

function signUpUser(userObj) {
    console.log('Signing up:', userObj);
  fetch(userUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userObj),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Sign-up failed. Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      successfullySignedUp();
    })
    .catch((error) => {
      console.error('Error during sign-up:', error);
      if (error.response) {
        console.error('Response text:', error.response.text());
      }
      alert('Sign-up failed. Please check the console for details.');
    });
}

function successfullySignedUp() {
  alert('Sign-up successful! Please log in to continue.');
}
