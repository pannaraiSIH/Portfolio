gsap.registerPlugin(ScrollTrigger);

const menuBtn = document.querySelector(".menu-btn");
const activeMenuBtn = document.querySelector(".menu-btn .line");
const navSite = document.querySelector(".primary-nav__list");
const monsters = document.querySelectorAll(".monsters__list__item");
const hero = document.querySelector(".hero");
const header = document.querySelector(".header");

//mobile nav
menuBtn.addEventListener("click", () => {
  navSite.classList.toggle("show");
  activeMenuBtn.classList.toggle("active");
});

gsap.to(header, {
  scrollTrigger: {
    trigger: header,
    start: () => hero.offsetHeight,
    end: "bottom",
    onEnter: () => header.classList.add("enable"),
    onLeaveBack: () => header.classList.remove("enable"),
  },
});

//monsters
monsters.forEach((monster) => {
  const delayMonster = Math.random() * 1 + 0.5;
  gsap.from(monster, {
    scrollTrigger: {
      trigger: monster,
      start: "top 75%",
      end: "bottom 30%",
      toggleActions: "restart reverse restart reverse",
    },
    scale: 0.5,
    opacity: 0,
    delay: delayMonster,
  });
});
