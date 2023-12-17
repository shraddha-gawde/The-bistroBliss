const userUrl = "https://neural-innovator-5123.onrender.com/users";
const signBtn = document.getElementById('rsbtn');
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
const emailInput = document.getElementById('remail');
const phoneInput = document.getElementById('rphone');
const dateOfBirthInput = document.getElementById('rdob');
const passwordInput = document.getElementById('rpswd');

signBtn.addEventListener('click', () => {
    const userObj = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        phone: parseInt(phoneInput.value),
        dateOfBirth: dateOfBirthInput.value,
        password: passwordInput.value
    };

    if (validatePassword(userObj.password)) {
        registerUser(userObj);
    } else {
        alert('Password must contain at least 6 characters');
    }
});

async function registerUser(userObj) {
    console.log('User Object:', userObj);

    try {
        const res = await fetch(userUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userObj),
        });

        if (!res.ok) {
            throw new Error(`Registration failed. Status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
        successfullyRegistered();

    } catch (error) {
        console.error('Error during registration:', error);
        if (error.response) {
            console.error('Response text:', await error.response.text());
        }
        alert('Registration failed. Please check the console for details.');
    }
}

function successfullyRegistered() {
    alert("Registration successful! Please log in to continue.");
}

function validatePassword(password) {
    return password.length >= 6;
}



async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        return data;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData(userUrl);
async function validateLogin() {
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    
    const userData = await fetchData(userUrl);
    
console.log(passwordInput);

    console.log('Email Input:', emailInput);
    console.log('Password Input:', passwordInput);

    const user = userData.find(user => user.email === emailInput && user.password === passwordInput);

    if (user) {
        window.location.href = "index.html";
    } else {
        alert("Incorrect email or password. Please try again.");
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const sign = document.querySelector('.rbutton1');
    sign.addEventListener('click', validateLogin);
});
