import pageChooseCharacter from "./createPageChooseCharacter";
import clearNode from "./clearNode";

function btnAgain(){

    const btnAgain= document.createElement("input");
    btnAgain.classList.add("btn-again__input-btn-again");
    btnAgain.setAttribute("type", "button");
    btnAgain.setAttribute("value", "Играть ещё раз");
    btnAgain.addEventListener("click", () => {
        let idMainContainerGameAction = document.getElementById("idMainContainerGameAction");
        const container = document.getElementById('idContainerModalWindow'); 
        const bg = document.getElementById('idBackground'); 
        clearNode(bg); 
        clearNode(container);
        clearNode(idMainContainerGameAction);
        pageChooseCharacter();
    });

    return btnAgain;
}

export default btnAgain;