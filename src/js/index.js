const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector("#header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(".nav-list ul li a");
const header = document.querySelector("#header .container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

let faqsDesc = document.querySelectorAll(".faqs-desc");
let faqsRow = document.querySelectorAll(".faqs-icon");
let arrow = document.querySelectorAll(".arrow-down");

for (let i = 0; i < faqsRow.length; i++) {
  faqsRow[i].addEventListener("click", () => {
    let focusFaqs = faqsRow[i];
    faqsDesc[i].classList.toggle("active");
    focusFaqs.classList.toggle("active");
    arrow[i].classList.toggle("arrow-active");

    let text = focusFaqs.nextElementSibling;
    if (text.style.display === "block") {
      text.style.display = "none";
    } else {
      text.style.display = "block";
    }
  });
}
