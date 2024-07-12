// Mobile menu

const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobile-nav");
const header = document.querySelector(".header-container");
const logo = document.querySelector("#logo-header");

menuIcon.addEventListener("click", (e) => {
    if(e) {
        mobileMenu.classList.toggle("hide");
        header.classList.toggle("active");
        menuIcon.setAttribute("src", "./images/icon-close.svg");
        logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
    }

    if(!header.classList.contains("active")) {
        menuIcon.setAttribute("src", "./images/icon-hamburger.svg");
        logo.setAttribute("src", "./images/logo-bookmark.svg");       
    }    
})

// Cards toggle 

const cardLink = document.querySelectorAll(".card-link");
const card = document.querySelectorAll(".card");

cardLink.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const cardTarget = e.target.dataset.id;

        for(let i = 0; i < card.length; i++) {
            if(card[i].id === cardTarget) {
                card[i].classList.remove("hide");
                card[i].classList.add("visible");
                cardLink[i].classList.add("active");
            } else {
                card[i].classList.add("hide");
                card[i].classList.remove("visible");
                cardLink[i].classList.remove("active");              
            }
        }
    })
})


// FAQ card 

const FAQTitle = document.querySelectorAll(".title");
const FAQContent = document.querySelectorAll(".faq-content");
const arrowIconFAQ = document.querySelectorAll(".arrow-icon");

FAQTitle.forEach((title, index) => {
    
    title.addEventListener("click", e => {
        if(e) {
            FAQContent[index].classList.toggle("hide");
            arrowIconFAQ[index].classList.toggle("active");
        }  
    })
})


// Form validation

const inputEmail = document.querySelector("input[type='email'");
const form = document.querySelector("form");
const inputError = document.querySelector(".error");
const successMsg = document.querySelector(".success");
const emailPattern = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
let valid = false;

inputEmail.addEventListener("input", e => {
    console.log(inputEmail.value);
    if(emailPattern.test(inputEmail.value)) {
        inputError.classList.add("hide");
        valid = true;
    } else {
        inputError.classList.remove("hide");
    }
})

form.addEventListener("submit", e => {
    e.preventDefault();

    if(valid === true) {
        successMsg.classList.remove("hide");

        setTimeout(() => {
            successMsg.textContent = "Sent";
        }, 3000)

        setTimeout(() => {
            successMsg.classList.add("hide");
            successMsg.textContent = "Sending...";
            form.reset();
            valid = false;
        }, 5000)
    }
})




