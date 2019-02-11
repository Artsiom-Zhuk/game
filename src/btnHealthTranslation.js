import modalWindow from './modalWindow';
import clearNode from './clearNode';
import translationTask from './translationTask';
import addHealthPlayer from './addHealthPlayer';
import removeHealthPlayer from './removeHealthPlayer';

function btnHealthTranslation(){

    const btnHealthTranslation = document.createElement("input");
    btnHealthTranslation.classList.add("btn-health-translation__input-btn-health-translation");
    btnHealthTranslation.setAttribute("value", "Перевод слов");
    btnHealthTranslation.setAttribute("type", "button");
    btnHealthTranslation.addEventListener("click", () => {
        const container = document.getElementById('idContainerModalWindow'); 
        const bg = document.getElementById('idBackground'); 
        clearNode(bg); 
        clearNode(container);
        modalWindow(translationTask(addHealthPlayer,removeHealthPlayer));
    });

    return btnHealthTranslation;
}

export default btnHealthTranslation;