// Preloader.......................................................

document.addEventListener("DOMContentLoaded", function () {
  // Function to hide the preloader and show the main content
  function hidePreloader() {
    var preloader = document.getElementById("preloader");
    var content = document.getElementById("landing");

    // Hide the preloader
    preloader.style.display = "none";

    // Show the main content
    content.style.display = "block";

    // Allow scrolling again
    document.body.style.overflow = "auto";
  }

  setTimeout(hidePreloader, 0);
});

// Typing style in content........................................

let tagOne = " Frontend Developer";
let tagTwo = " Web Designer";
let tagThree = " PowerApps Developer";
let tagFour = " Web Developer";
const typingText = document.querySelector(".displayTag");
let index = 0;
let count = true;

function typing(ms) {
  if (index < tagOne.length) {
    typingText.textContent += tagOne[index];
    index++;
    setTimeout(typing, 150);
  }else if(index == tagOne.length){

  }
}
document.addEventListener("DOMContentLoaded", typing);
