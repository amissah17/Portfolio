import './reset.css'
import './index.css'

// importing images from my assets folder
import CSS3 from './assets/css3_icon.svg'
import Portfolio from './assets/Portfolio.png'
import git from './assets/git_icon.svg'
import github from './assets/github_icon.svg'
import github2 from './assets/github_icon(2).svg'
import globe from './assets/globe_icon.svg'
import graphqlIcon from './assets/graphql_icon.svg'
import html5 from "./assets/html5_icon.svg";
import jsIcon from "./assets/js_icon.svg";
import link from "./assets/link_icon.svg";
import linkedin from "./assets/linkedin_icon.svg";
import shortenerImg from "./assets/linkshortnrr.png";
import mail from './assets/mail_icon.svg'
import npm from "./assets/npm_icon.svg";
import react from "./assets/react__icon.svg";
import redux from "./assets/redux_icon.svg";
import sass from "./assets/sass_icon.svg";
import shappd from "./assets/shappd.png";
import twitter from "./assets/twitter_icon.svg";
import heroImg from "./assets/heroImg.svg";
import webpack from "./assets/webpack_icon.svg";

// adding imported images to my html files
document.getElementById("hero__img").src = heroImg

// end of adding images

// mobile and smaller device navigations.
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

//  This is adding an event listener to the hamburger. 
/* Toggles hamburger on smaller devices */
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

/* This is a forEach loop that is iterating over all the nav-links and adding an event listener to each
one. When the nav-link is clicked, the hamburger, nav-menu, and icon are all removed of their active
class. */
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

