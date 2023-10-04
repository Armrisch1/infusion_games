// old mobile menu

const menuOpen = document.getElementById("menu_open");
const menuClose = document.getElementById("menu_close");

menuOpen.addEventListener("click", () => changeMenuState("open"));
menuClose.addEventListener("click", () => changeMenuState("close"));

function changeMenuState(_case) {
   document.querySelector(".mobile_menu").style.display =
      _case === "close" ? "none" : "flex";
}

// change logo color during scroll

const logo = document.querySelector(".main-header-list-logo");
const text = document.querySelector(".headerDesc");

const games = [
   {
      element: document.querySelector(".main-cyber"),
      color: "#ADF217",
      text: "games",
   },
   {
      element: document.querySelector(".main-cybr-car"),
      color: "#ADF217",
      text: "games",
   },
   {
      element: document.querySelector(".main-arena"),
      color: "#ADF217",
      text: "games",
   },
   {
      element: document.querySelector(".main-heroes"),
      color: "#ADF217",
      text: "games",
   },
];
const sections = [
   {
      element: document.querySelector(".unique-ads"),
      color: "#118DFF",
      text: "tech",
   },
   {
      element: document.querySelector(".cyberX"),
      color: "#8F00FF",
      text: "web3",
   },
   {
      element: document.querySelector(".cgbox"),
      color: "#FF5C00",
      text: "CG",
   },
];

function handleScroll() {
   let fill = "#ffffff";
   for (const game of games) {
      const { top, bottom } = game.element.getBoundingClientRect();
      if (top < 150 && bottom >= 150) {
         fill = game.color;
         text.innerText = game.text;
         break;
      }
   }
   if (fill === "#ffffff") {
      for (const section of sections) {
         const { top, bottom } = section.element.getBoundingClientRect();
         if (top < 150 && bottom >= 150) {
            fill = section.color;
            text.innerText = section.text;
            break;
         } else {
            text.innerText = "";
         }
      }
   }
   document.querySelectorAll(".main-header-list-logo path").forEach((el) => {
      el.style.fill = fill;
   });
}

window.addEventListener("scroll", handleScroll);

// main menu

const menuOpenBox = document.getElementById("open-logo");
const menuCloseBox = document.getElementById("close-logo");

function changeMenuState(_case) {
   document.querySelector(".main-menu").style.display =
      _case === "close" ? "none" : "flex";
}

menuOpenBox.addEventListener("click", () => changeMenuState("open"));
menuCloseBox.addEventListener("click", () => changeMenuState("close"));

// Link divs for lazy dev (:D)
const elementsWithHref = document.querySelectorAll("[data-href]");

elementsWithHref.forEach((element) => {
   element.addEventListener(
      "click",
      () => (window.location.href = element.getAttribute("data-href"))
   );
});

// download modal

const openBtn = document.querySelectorAll("#openBtn");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

openBtn.forEach((el) => {
   el.addEventListener("click", () => {
      overlay.style.display = "flex";
      modal.style.display = "block";
   });
});

closeModal.addEventListener("click", () => {
   overlay.style.display = "none";
   modal.style.display = "none";
});

overlay.addEventListener("click", (event) => {
   if (event.target === overlay) {
      overlay.style.display = "none";
      modal.style.display = "none";
   }
});


if(window.matchMedia("(max-width: 767px)").matches){
   document.querySelectorAll(".main-menu a").forEach((el) => {
      el.addEventListener("click", function(e){
         e.preventDefault();
         document.querySelector(".main-menu").style.display = "none";
         window.location.href = el.getAttribute("href");
      });
   });
}

window.onload = function(){
   document.querySelector(".main-header-list").backgroundImage = "url(../assets/images/blackBg.png)";
}