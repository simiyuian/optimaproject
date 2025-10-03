// Function to ease retrieval of DOM elements
const elem = x => {
  return document.querySelector(x);
};

//Loading Screen Function
var loading_screen = elem(".loading_screen");
setTimeout(() => {
  loading_screen.classList.add("loaded");

  var animatedElem = document.querySelectorAll(".animate__animated");

  animatedElem.forEach(e => {
    e.style.animationPlayState = "running";
  });
}, 5500); //5.5 seconds

// Mobile Menu Functionality
var menu_part = elem("nav.menu_part"),
  menu_btn = elem(".menu_btn p");

const handleMenuToggle = () => {
  menu_part.classList.toggle("active");
  menu_btn.innerHTML =
    menu_btn.innerHTML == `<i class="fa-solid fa-bars"></i>`
      ? `<i class="fa-solid fa-times"></i>`
      : `<i class="fa-solid fa-bars"></i>`;
};

// document.addEventListener("click", e => {
//   if (!menu_part.contains(e.target) && e.target.className !== "fa-solid fa-bars") {
//     console.log("outside");

//   } else {
//     console.log("inside");
//     menu_part.classList.remove("active");
//   }
// });

//Animation function
reveal = () => {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

window.addEventListener("scroll", reveal);

reveal();
