import {content, info_container} from "./page_load"

const email = document.createElement("div");
email.innerText = "Email: pizzahut@hutmail.com"
email.classList.add("top");

const phone = document.createElement("div");
phone.innerText = "Phone: 0118 999 118";
phone.classList.add("top");

function contact_click(){
    
    info_container.innerText = "";
    info_container.appendChild(email);
    info_container.appendChild(phone);
    content.appendChild(info_container);
}

export {contact_click};