import "./styles.less";
import "../../components/button/script";

document
  .querySelectorAll(".marketplace-section-menu__category-block")
  .forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelectorAll(".marketplace-section-menu__category-block")
        .forEach((t) => {
          t.classList.remove("active-tab");
        });

      tab.classList.add("active-tab");
    });
  });

const body = document.querySelector("body");
const toggleTheme = document.querySelector("#toggle-theme");
const hideBackground = document.querySelector(".hidden-background");
const burger = document.querySelector(".burger-menu");
const burgerMenu = document.querySelector(".header__container__navigation");

const changeTheme = () => {
  toggleTheme.classList.toggle("inverted-color");

  body.classList.toggle("light-mode");

  const sideMenu = document.querySelector(".header__container__navigation");
  sideMenu.classList.toggle("light-mode");

  const burgerMenu = document.querySelector(".burger-menu");
  burgerMenu.classList.toggle("light-mode");

  // Header
  const header = document.querySelector(".header");
  header.classList.toggle("light-mode");

  const headerText = document.querySelectorAll(
    ".header__container__navigation__list__button"
  );
  headerText.forEach((card) => card.classList.toggle("light-mode"));

  const outlinedButtons = document.querySelectorAll(".outlined-button");
  outlinedButtons.forEach((button) => button.classList.toggle("light-mode"));

  // Footer
  const footer = document.querySelector(".footer");
  footer.classList.toggle("light-mode");

  const footerMarketplaceInfo = document.querySelectorAll(
    ".footer__info-container__marketplace-info-block > p"
  );
  footerMarketplaceInfo.forEach((card) => card.classList.toggle("light-mode"));

  const footerExploreInfo = document.querySelectorAll(
    ".footer__info-container__explore-block > p"
  );
  footerExploreInfo.forEach((card) => card.classList.toggle("light-mode"));

  const footerSubscribeInfo = document.querySelectorAll(
    ".footer__info-container__subscribe-block > p"
  );
  footerSubscribeInfo.forEach((card) => card.classList.toggle("light-mode"));

  const footerCopyright = document.querySelector(
    ".footer__copyright-container"
  );
  footerCopyright.classList.toggle("light-mode");

  const footerCopyrightText = document.querySelector(
    ".footer__copyright-container > span"
  );
  footerCopyrightText.classList.toggle("light-mode");

  // Other
  const nftCards = document.querySelectorAll(".nft-card-block");
  nftCards.forEach((card) => card.classList.toggle("light-mode"));

  const nftCardsTitles = document.querySelectorAll(
    ".nft-card-block__description-container__additional-info__highest-bid__title"
  );
  nftCardsTitles.forEach((card) => card.classList.toggle("light-mode"));

  const nftCardsPriceTitles = document.querySelectorAll(
    ".nft-card-block__description-container__additional-info__price__title"
  );
  nftCardsPriceTitles.forEach((card) => card.classList.toggle("light-mode"));

  const marketplaceSection = document.querySelector(".marketplace-section");
  marketplaceSection.classList.toggle("light-mode");

  const marketplaceSectionMenu = document.querySelector(
    ".marketplace-section-menu"
  );
  marketplaceSectionMenu.classList.toggle("light-mode");

  const marketplaceSectionTabText = document.querySelectorAll(
    ".marketplace-section-menu__category-block > h5"
  );
  marketplaceSectionTabText.forEach((card) =>
    card.classList.toggle("light-mode")
  );

  const marketplaceSectionTabNumber = document.querySelectorAll(
    ".marketplace-section-menu__category-block__value"
  );
  marketplaceSectionTabNumber.forEach((number) =>
    number.classList.toggle("light-mode")
  );
};

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "light") {
    changeTheme();
  }
});

toggleTheme.addEventListener("click", () => {
  localStorage.getItem("theme") === "light"
    ? localStorage.setItem("theme", "dark")
    : localStorage.setItem("theme", "light");
  changeTheme();
});

burger.addEventListener("click", () => {
  if (burger.classList.contains("active")) {
    burger.classList.remove("active");
    burgerMenu.classList.remove("active");
    hideBackground.classList.remove("active");
    body.style.overflow = "auto";
  } else {
    burger.classList.add("active");
    burgerMenu.classList.add("active");
    hideBackground.classList.add("active");
    body.style.overflow = "hidden";
  }
});

hideBackground.addEventListener("click", () => {
  hideBackground.classList.remove("active");
  burger.classList.remove("active");
  burgerMenu.classList.remove("active");
  body.style.overflow = "auto";
});

const burgerItems = document
  .querySelectorAll(".header__container__navigation__list > li")
  .forEach((elem) => {
    elem.addEventListener("click", () => {
      burger.classList.remove("active");
      burgerMenu.classList.remove("active");
      hideBackground.classList.remove("active");
      body.style.overflow = "auto";
    });
  });
