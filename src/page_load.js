import { contact_click } from "./contact";
import {menu_click} from "./menu";
import {home_click} from "./home";

export const content = document.getElementById("content");
export const info_container = document.createElement("div");
info_container.classList.add("info");
export function page_load(){
    
    const title = document.createElement("h1");
    title.innerText = "Pizza Hut"
    
    const about = document.createElement("p");
    about.innerText = "We do tasty pizzas, spicy meatballs and gabagool"

    home_click();
    
    //create tabs
    const tab_container = document.createElement("div");
    tab_container.classList.add("tab_container");
    const home = document.createElement("span");
    home.classList.add("tab")
    const menu = document.createElement("span");
    menu.classList.add("tab")
    const contact = document.createElement("span");
    contact.classList.add("tab");
    home.innerText = "Home";
    menu.innerText = "Menu";
    contact.innerText = "Contact";

    content.appendChild(title);
    content.appendChild(about);
    content.appendChild(tab_container);
    tab_container.appendChild(home);
    tab_container.appendChild(menu);
    tab_container.appendChild(contact);
    
    content.appendChild(info_container);
    
    menu.addEventListener("click", ()=>{
        menu_click();
    })

    contact.addEventListener("click", ()=>{
        contact_click();
    })

    home.addEventListener("click", ()=>{
        home_click();
    })


}
