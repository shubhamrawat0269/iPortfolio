const p_btn = document.querySelectorAll(".spcl_class");
const images = document.querySelectorAll(".img_overlay");
const header = document.querySelector(".header");
const heroSection = document.getElementById("hero-section")

// sticky navbar logic

const hero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  (enteries) => {
    const ent = enteries[0];
    // console.log(ent);
    if (ent.isIntersecting == false) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  },
  { root: null, threshold: 0 }
);

observer.observe(hero);

// scroll to top functionality start here

const footerDiv = document.querySelector(".section-footer");
let scrollTotop = document.createElement("div");
scrollTotop.classList.add("scrollTop-style");


scrollTotop.innerHTML = `
<i class="fa-solid fa-arrow-up scroll-top fa-2x"></i>`;
footerDiv.after(scrollTotop);


scrollTotop.addEventListener("click", function () {
  heroSection.scrollIntoView({ behavior: "smooth" });
});

// hamburger logic start here

// const icon1 = document.getElementById("ham-menu");
// const icon2 = document.getElementById("cross-menu");
// const menu = document.querySelector(".menu-section");

// icon1.addEventListener("click", function () {
//   menu.classList.add("active");
//   icon1.style.display = "none";
//   icon2.style.display = "block";
// });
// icon2.addEventListener("click", function () {
//   menu.classList.remove("active");
//   icon2.style.display = "none";
//   icon1.style.display = "block";
// });
