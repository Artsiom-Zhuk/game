import modalWindow from './modalWindow';
import arithmeticTask from './arithmeticTask';
import clearNode from './clearNode';
import addHealthPlayer from './addHealthPlayer';
import removeHealthPlayer from './removeHealthPlayer';

function btnHealthArithmetic(){

    const btnHealthArithmetic = document.createElement("input");
    btnHealthArithmetic.classList.add("btn-health-arithmetic__input-btn-health-arithmetic");
    btnHealthArithmetic.setAttribute("value", "Арифметика");
    btnHealthArithmetic.setAttribute("type", "button");
    btnHealthArithmetic.addEventListener("click", () => {
        const container = document.getElementById('idContainerModalWindow'); 
        const bg = document.getElementById('idBackground'); 
        clearNode(bg); 
        clearNode(container);
        modalWindow(arithmeticTask(addHealthPlayer,removeHealthPlayer));
    });

    return btnHealthArithmetic;
}

export default btnHealthArithmetic;