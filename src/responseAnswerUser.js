import clearNode from "./clearNode";

function responseAnswerUser(parent,text,background,color){

    const container  = document.createElement("div");
    container.setAttribute("id","idResponseAnswerUser");
    container.classList.add("response-answer-user__div-main-container");
    container.innerHTML = text;
    container.style.backgroundColor = background;
    container.style.color = color;
    parent.appendChild(container);
    setTimeout(()=>{
        clearNode(container);
    },1500)
}

export default responseAnswerUser;