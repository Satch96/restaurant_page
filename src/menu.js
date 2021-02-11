import {content, info_container} from "./page_load"

const pizza = document.createElement("div");
pizza.innerText = "Pizza Margherita - £10.99"
pizza.classList.add("top")
const meatball = document.createElement("div");
meatball.classList.add("top")
meatball.innerText = "Spicy Meatballs - £8.99"
const gabagool = document.createElement("div");
gabagool.classList.add("top")
gabagool.innerText = "Gabagool - £79.99"

function menu_click(){
    info_container.innerText = "";
    info_container.appendChild(pizza);
    info_container.appendChild(meatball);
    info_container.appendChild(gabagool);
    content.appendChild(info_container);
}

export {menu_click};