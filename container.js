const p_btn = document.querySelectorAll(".spcl_class");
const images = document.querySelectorAll(".img_overlay");

// portfolio logic section start here
$(".portfolio_buttons").click(function (e) {
  const btn_clicked = e.target;
  // console.log(btn_clicked);
  p_btn.forEach((ele) => ele.classList.remove("btn_active"));
  btn_clicked.classList.add("btn_active");

  const btn_number = btn_clicked.getAttribute("data-btn-num");
  // console.log(btn_number);

  const img_active = document.querySelectorAll(`.p-btn--${btn_number}`);

  images.forEach((curElem) => curElem.classList.add("dnone"));
  img_active.forEach((curElem) => curElem.classList.remove("dnone"));
});

// sticky navbar logic

const hero = document.querySelector(".section_hero");

const observer = new IntersectionObserver(
  (enteries) => {
    const ent = enteries[0];
    // console.log(ent);
    if (ent.isIntersecting == false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  { root: null, threshold: 0 }
);

observer.observe(hero);

// scroll to top functionality start here
const header = document.querySelector(".header");
const footerDiv = document.querySelector(".section-footer");
let scrollTotop = document.createElement("div");
scrollTotop.classList.add("scrollTop-style");

scrollTotop.innerHTML = `
<i class="fa-solid fa-arrow-up scroll-top fa-2x"></i>`;
footerDiv.after(scrollTotop);

scrollTotop.addEventListener("click", function () {
  header.scrollIntoView({ behavior: "smooth" });
});

// hamburger logic start here

const icon1 = document.getElementById("ham-menu");
const icon2 = document.getElementById("cross-menu");
const menu = document.querySelector(".menu-section");

icon1.addEventListener("click", function () {
  menu.classList.add("active");
  icon1.style.display = "none";
  icon2.style.display = "block";
});
icon2.addEventListener("click", function () {
  menu.classList.remove("active");
  icon2.style.display = "none";
  icon1.style.display = "block";
});
