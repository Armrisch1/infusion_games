// Download modal variables
const openDownloadModalButtons = document.getElementsByName(
  "open_download_modal"
);
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

// Menu open / close variables
const menuOpenBox = document.getElementById("open-logo");
const menuCloseBox = document.getElementById("close-logo");
const menuOpen = document.getElementById("menu_open");
const menuClose = document.getElementById("menu_close");

// Scroll menu change functionality variables
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
  {
    element: document.querySelector(".main-cybr-car2"),
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
    element: document.querySelector(".web-platform"),
    color: "#0d76d9",
    text: "Web3",
  },
  {
    element: document.querySelector(".mobile_cola_image"),
    color: "#118DFF",
    text: "tech",
  },
  {
    element: document.querySelector(".cyberX"),
    color: "#8F00FF",
    text: "web3",
  },
  {
    element: document.querySelector(".mobile_cyberx_image"),
    color: "#8F00FF",
    text: "web3",
  },
  {
    element: document.querySelector(".cgbox"),
    color: "#FF5C00",
    text: "CG",
  },
  {
    element: document.querySelector(".mobile_cyberx_image_sec"),
    color: "#FF5C00",
    text: "CG",
  },
];

// Link divs for lazy dev (:D)
const elementsWithHref = document.querySelectorAll("[data-href]");
const white = "#ffffff";
const year = new Date().getFullYear();

// Load menu background immediately
window.onload = function () {
  document.querySelector(".main-header-list").backgroundImage =
    "url(../assets/images/blackBg.png)";
  document.querySelector("#year").innerText = year;
};

// Handles logo color change during scroll
window.addEventListener("scroll", handleScroll);

// Handles menu open / close functionality
[menuOpen, menuOpenBox].forEach((element) =>
  element.addEventListener("click", () => changeMenuState("open"))
);
[menuClose, menuCloseBox].forEach((element) =>
  element.addEventListener("click", () => changeMenuState("close"))
);

// Attach click event to elements with data-href
elementsWithHref.forEach((element) =>
  element.addEventListener(
    "click",
    () => (window.location.href = element.getAttribute("data-href"))
  )
);

// Open download modal by click
openDownloadModalButtons.forEach((element) => {
  element.addEventListener("click", () => {
    overlay.style.display = "flex";
    modal.style.display = "block";
  });
});

// Close download modal by click
closeModal.addEventListener("click", () => {
  overlay.style.display = "none";
  modal.style.display = "none";
});

// Close modal by overlay click(when click out of modal)
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.style.display = "none";
    modal.style.display = "none";
  }
});

// Attach click events to menu items in tablet and mobile versions, to close menu before scroll.
if (window.matchMedia("(max-width: 1279px)").matches) {
  document.querySelectorAll(".main-menu a").forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".main-menu").style.display = "none";
      window.location.href = element.getAttribute("href");
    });
  });
}

// Functions

/**
 * Changes menu state
 * @param {'open' | 'close'} _case
 */
function changeMenuState(_case) {
  document.querySelector(".main-menu").style.display =
    _case === "close" ? "none" : "flex";
}

/**
 * Handles scroll and changes color of logo.
 */
function handleScroll() {
  let fill = white;

  for (const game of games) {
    const { top, bottom } = game.element.getBoundingClientRect();

    if (top < 150 && bottom >= 150) {
      fill = game.color;
      text.innerText = game.text;
      break;
    }
  }

  if (fill === white) {
    for (const section of sections) {
      const { top, bottom } = section.element.getBoundingClientRect();

      if (top < 150 && bottom >= 150) {
        fill = section.color;
        text.innerText = section.text;
        break;
      }

      text.innerText = "";
    }
  }

  document
    .querySelectorAll(".main-header-list-logo path")
    .forEach((el) => (el.style.fill = fill));
}

//slider ADS-images

let index = 0;
const images = [
  "../assets/images/cola-min.png",
  "../assets/images/neom-min.png",
  "../assets/images/game-min.png",
  "../assets/images/pepsi-min.png",
];

let sliderMainImage = document.querySelector("#slider_main_img");

if (window.matchMedia("(max-width: 1280px)").matches) {
  sliderMainImage = document.querySelector("#slider_main_img_mobile");
  images.pop();
  images.pop();
  images.pop();
  images.pop();
  images.push("../assets/images/cola_with_white_top.jpg");
  images.push("../assets/images/cola_m.png");
  images.push("../assets/images/game_m.png");
  images.push("../assets/images/neom_m.png");
}

function nextImg() {
  if (index <= images.length - 1) {
    sliderMainImage.setAttribute("src", images[index]);
    index++;
  } else {
    index = 0;
    sliderMainImage.setAttribute("src", images[index]);
  }
}

setInterval(nextImg, 10000);

// slider cyber car

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});