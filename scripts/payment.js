// // const paymentForm = document.getElementById('form');
// // const nameInput = document.getElementById("name");
// // const cardNoInput = document.getElementById("cardNo");
// // const cardExpiryInput = document.getElementById("cardExpiry");
// // const cardCvvInput = document.getElementById("cardCvv");

// // paymentForm.addEventListener("submit", function (event) {
// //     event.preventDefault();
// //     if () {
// //       alert("Any of the given fields are empty");
// //     } else {
// //       if (cardNoInput.value.length < 12) {
// //         alert("Card number should be 12 digits");
// //       } else {
// //         window.alert = "otp.html";
// //       }
// //     }
// //   });

//   // paymentForm.addEventListener("submit", function (event) {

//   //   event.preventDefault();
//   //   if (!nameInput.value || !cardNoInput.value || !cardExpiryInput.value || !cardCvvInput.value) {

//   //     alert("Any of the Given fields are empty");
//   //   } else {
//   //     window.location.href = "otp.html";
//   //   }
//   // });

  
//   const BookNowButton = document.getElementById('booknow');
//   const signInButton = document.getElementById('signIn');
//   const fnameInput = document.getElementById("fname");
//   const lnameInput = document.getElementById("lname");
//   const cardNoInput = document.getElementById("cardNo");
//   const cardExpInput = document.getElementById("cardExp");
//   const cardCvvInput = document.getElementById("cardCvv");
//   const main = document.getElementById('rmain');
//   BookNowButton.addEventListener('click', function (e) {
//       e.preventDefault();
//       if (!fnameInput.value || !lnameInput.value || !cardNoInput.value || !cardExpInput.value || !cardCvvInput.value) {

//           alert("Any of the Given fields are empty");
//       } else {
//         showOTPPopup();

//       }

//   });

//   const diffRoomButton = document.getElementById('diffRoom');
//   diffRoomButton.addEventListener("click", function (e) {
//       e.preventDefault();
//       window.location.href = "room-list.html";
      
//   });


//   const otpPopup = document.getElementById('otpPopup');

// // Function to show the OTP popup
// function showOTPPopup() {
//     otpPopup.style.display = 'flex';
// }

// // Function to hide the OTP popup
// function hideOTPPopup() {
//     otpPopup.style.display = 'none';
// }

// // Function to verify OTP (customize this function based on your needs)
// function verifyOTP() {
//     const otpInput = document.getElementById('otpInput').value;
//     // Add your OTP verification logic here
  
//     const serverGeneratedOTP = "1234";

//     if (otpInput === serverGeneratedOTP) {
//         alert("Payment Successful");
//     } else {
//         alert("Invalid OTP. Payment Failed.");
//     }
  
//     // For demo purposes, close the OTP popup after clicking "Verify OTP"
//     hideOTPPopup();
// }

// // Add this to your existing Book Now button click event
// // BookNowButton.addEventListener('click', function (e) {
// //     e.preventDefault();
// //     if (!fnameInput.value || !lnameInput.value || !cardNoInput.value || !cardExpInput.value || !cardCvvInput.value) {
// //         alert("Any of the given fields are empty");
// //     } else {
// //         // Show the OTP popup after validating the form
// //         showOTPPopup();
// //     }
// // });
