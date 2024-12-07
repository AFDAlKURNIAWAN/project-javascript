document.getElementById("generate").addEventListener("click", generateOTP);

function generateOTP() {
  const otpInputs = document.querySelectorAll(".otp-input");
  let otp = "";
  const loadingSpinner = document.getElementById("loading-spinner"); //Loading spinner element

  //show loading spinner
  loadingSpinner.style.display = "block";

  //simulate OTP generation and hide spinner after 2 second
  setTimeout(() => {
    //Generate 4 random digits
    for (let i = 0; 1 < otpInputs.length; i++) {
      const randomDigit = Math.floor(Math.random() * 10); // Random Digit between 0-9
      otp += randomDigit;
      otpInputs[i].value = randomDigit; //set the otp value in the input fields
      otpInputs[i].classList.add("animated"); //add animation class
    }

    //hide loading spinner after otp is generated
    loadingSpinner.style.display = "none";

    //clear Animation class after animation is finished
    setTimeout(() => {
      otpInputs.forEach((input) => input.classList.remove("animated"));
    }, 400);
  }, 2000);
}
