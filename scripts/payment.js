    const BookNowButton = document.getElementById('signUp');
        const otpVerifyButton = document.getElementById('signIn'); // Change variable name
        const fnameInput = document.getElementById("fname");
        const lnameInput = document.getElementById("lname");
        const cardNoInput = document.getElementById("cardNo");
        const cardExpInput = document.getElementById("cardExp");
        const cardCvvInput = document.getElementById("cardCvv");
        const otpInput = document.getElementById('otpInput'); // Corrected ID
        const otpSubmitButton = document.getElementById('otpSubmit'); // Corrected ID
        const main = document.getElementById('rmain');
    
        BookNowButton.addEventListener('click', function (e) {
            e.preventDefault();
            if (!fnameInput.value || !lnameInput.value || !cardNoInput.value || !cardExpInput.value || !cardCvvInput.value) {
                alert("Any of the Given fields are empty");
            } else {
                main.classList.add("right-panel-active");
            }
        });
    
        const diffRoomButton = document.getElementById('diffRoom');
        diffRoomButton.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "room-list.html";
        });
    
        otpSubmitButton.addEventListener('click', () => {
            const serverGeneratedOTP = "1234";
    
            if (otpInput.value === serverGeneratedOTP) {
                setTimeout(() => {
                    window.location.href = "rpopup.html";
                  });     
            } else {
                alert("Invalid OTP. Payment Failed.");
            }
    
            main.classList.add("right-panel-active");
        });
    
        // Event listener for OTP Resend link
        const otpResendLink = document.getElementById('otpResend');
        otpResendLink.addEventListener('click', function (e) {
            e.preventDefault();
            // Implement OTP Resend functionality here
            alert("Resending OTP...");
        });
    
        // Event listener for switching between sign-up and sign-in
        otpVerifyButton.addEventListener('click', function () {
            // e.preventDefault();
            main.classList.remove("right-panel-active");
        });


        // let po = document.getElementById('pop');
        // function openPopUp(){
        //     const serverGeneratedOTP = "1234";
            
        //     if (otpInput.value === serverGeneratedOTP) {
        //         po.classList.add('open-popup');
        //     } else {
        //         alert("Invalid OTP. Payment Failed.");
        //     }
        //     main.classList.add("right-panel-active");
        // }
        // function closePopUp(){
        //     po.classList.remove('open-popup');
        // }

        
        // document.addEventListener('DOMContentLoaded', function() {
        //     const otpInput = document.getElementById('otpInput');
        //     const otpSubmitButton = document.getElementById('otpSubmit');
        //     const pop = document.getElementById('pop');
        //     const main = document.getElementById('rmain'); // Assuming you have a main element
        
        //     otpSubmitButton.addEventListener('click', function() {
        //         const serverGeneratedOTP = "1234";
        
        //         if (otpInput.value === serverGeneratedOTP) {
        //             pop.classList.add('open-popup');
        //         } else {
        //             alert("Invalid OTP. Payment Failed.");
        //         }
        
        //         main.classList.add("right-panel-active");
        //     });
        
        //     document.getElementById('popupOk').addEventListener('click', function() {
        //         pop.classList.remove('open-popup');
        //     });
        // });