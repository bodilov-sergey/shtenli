/*
 * External dependencies
 */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import "animate.css";

/*
 * Internal dependencies
 */
import "./styles/style.scss";
import nav from "./components/nav";
import highlightingLink from "./components/highlightingLink";
import form from "./components/form";
import priceSwitch from "./components/priceSwitch";
import swiperInit from "./components/swiperInit";
import calculatorPrice from "./components/calculatorPrice";

document.addEventListener("DOMContentLoaded", () => {
    nav();
    highlightingLink();
    form();
    priceSwitch();
    swiperInit();
    calculatorPrice();
});
