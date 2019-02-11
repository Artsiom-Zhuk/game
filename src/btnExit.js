import clearNode from "./clearNode";
import startPage from "./createStartPage";

function btnExit(){

    const btnExit= document.createElement("input");
    btnExit.classList.add("btn-exit__input-btn-exit");
    btnExit.setAttribute("type", "button");
    btnExit.setAttribute("value", "Главное меню");
    btnExit.addEventListener("click", () => {
        let idMainContainerGameAction = document.getElementById("idMainContainerGameAction");
        const container = document.getElementById('idContainerModalWindow'); 
        const bg = document.getElementById('idBackground'); 
        clearNode(bg); 
        clearNode(container);
        clearNode(idMainContainerGameAction);
        startPage();
    });

    return btnExit;
}

export default btnExit;