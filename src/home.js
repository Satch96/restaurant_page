import {content, info_container} from "./page_load"

const review1 = document.createElement("div");
review1.innerText = "\"The food is adequate\" - The Guardian"
const review2 = document.createElement("div");
review2.innerText = "\"I like spicy meatballs\" - NME"
const review3 = document.createElement("div");
review3.innerText = "\"Gabagool get in my belly\" - Albert Einstein"

function home_click(){
    info_container.innerText = "";

    for (let i = 0; i < 3; i++){
        const st = document.createElement("span");
        st.classList.add("fa", "fa-star");
        info_container.appendChild(st);
    }
    info_container.appendChild(review1);

    for (let i = 0; i < 4; i++){
        const st = document.createElement("span");
        st.classList.add("fa", "fa-star");
        info_container.appendChild(st);
    }
    info_container.appendChild(review2);
    
    for (let i = 0; i < 5; i++){
        const st = document.createElement("span");
        st.classList.add("fa", "fa-star");
        info_container.appendChild(st);
    }
    info_container.appendChild(review3);
    content.appendChild(info_container);
}

export {home_click};