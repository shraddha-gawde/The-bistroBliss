const paymentForm = document.getElementById('form');
const nameInput = document.getElementById("name");
const cardNoInput = document.getElementById("cardNo");
const cardExpiryInput = document.getElementById("cardExpiry");
const cardCvvInput = document.getElementById("cardCvv");

// paymentForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     if () {
//       alert("Any of the given fields are empty");
//     } else {
//       if (cardNoInput.value.length < 12) {
//         alert("Card number should be 12 digits");
//       } else {
//         window.alert = "otp.html";
//       }
//     }
//   });

  paymentForm.addEventListener("submit", function (event) {

    event.preventDefault();
    if (!nameInput.value || !cardNoInput.value || !cardExpiryInput.value || !cardCvvInput.value) {

      alert("Any of the Given fields are empty");
    } else {
      window.location.href = "otp.html";
    }
  });

  