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

const games = [
   { element: document.querySelector(".main-cyber"), color: "#ADF217" },
   { element: document.querySelector(".main-cybr-car"), color: "#ADF217" },
   { element: document.querySelector(".main-arena"), color: "#ADF217" },
   { element: document.querySelector(".main-heroes"), color: "#ADF217" },
];
const sections = [
   { element: document.querySelector(".unique-ads"), color: "#118DFF" },
   { element: document.querySelector(".cyberX"), color: "#8F00FF" },
   { element: document.querySelector(".cgbox"), color: "#FF5C00" },
];

function handleScroll() {
   let fill = "#ffffff";
   for (const game of games) {
      const { top, bottom } = game.element.getBoundingClientRect();
      if (top < 0 && bottom >= 0) {
         fill = game.color;
         break;
      }
   }
   if (fill === "#ffffff") {
      for (const section of sections) {
         const { top, bottom } = section.element.getBoundingClientRect();
         if (top < 0 && bottom >= 0) {
            fill = section.color;
            break;
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
