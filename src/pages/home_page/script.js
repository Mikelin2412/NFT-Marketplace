import "./styles.less";
import "../../components/button/script";

const body = document.querySelector("body");
const hideBackground = document.querySelector(".hidden-background");
const burger = document.querySelector(".burger-menu");
const burgerMenu = document.querySelector(".header__container__navigation");

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

const toggleTheme = document.querySelector("#toggle-theme");

const changeTheme = () => {
  toggleTheme.classList.toggle("inverted-color");

  body.classList.toggle("light-mode");

  const header = document.querySelector(".header");
  header.classList.toggle("light-mode");

  const footer = document.querySelector(".footer");
  footer.classList.toggle("light-mode");

  const heroSection = document.querySelector(".hero-section__right-container");
  heroSection.classList.toggle("light-mode");

  const topCreatorsCards = document.querySelectorAll(
    ".top-creators-section__cards-container__card"
  );
  topCreatorsCards.forEach((card) => card.classList.toggle("light-mode"));

  const topCreatorsCardsTitle = document.querySelectorAll(
    ".top-creators-section__cards-container__card__creator-info__sales-block__title"
  );
  topCreatorsCardsTitle.forEach((card) => card.classList.toggle("light-mode"));

  const topCreatorsCardsNumbers = document.querySelectorAll(
    ".top-creators-section__cards-container__card__number"
  );
  topCreatorsCardsNumbers.forEach((card) =>
    card.classList.toggle("light-mode")
  );

  const browseCategoriesCards = document.querySelectorAll(
    ".browse-categories-section__cards-container__card"
  );
  browseCategoriesCards.forEach((card) => card.classList.toggle("light-mode"));

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

  const artistInfo = document.querySelector(
    ".nft-highlight-section__info-container__left-container__artist-info"
  );
  artistInfo.classList.toggle("light-mode");

  const howItWorksCards = document.querySelectorAll(
    ".how-it-works-section__cards-container__card"
  );
  howItWorksCards.forEach((card) => card.classList.toggle("light-mode"));

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

  const headerText = document.querySelectorAll(
    ".header__container__navigation__list__button"
  );
  headerText.forEach((card) => card.classList.toggle("light-mode"));

  const outlinedButtons = document.querySelectorAll(".outlined-button");
  outlinedButtons.forEach((button) => button.classList.toggle("light-mode"));

  const footerCopyright = document.querySelector(
    ".footer__copyright-container"
  );
  footerCopyright.classList.toggle("light-mode");

  const footerCopyrightText = document.querySelector(
    ".footer__copyright-container > span"
  );
  footerCopyrightText.classList.toggle("light-mode");

  const contacts = document.querySelector(
    ".contacts-section__widget"
  );
  contacts.classList.toggle("light-mode");

  const sideMenu = document.querySelector(".header__container__navigation");
  sideMenu.classList.toggle("light-mode");

  const burgerMenu = document.querySelector(".burger-menu");
  burgerMenu.classList.toggle("light-mode");
}

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