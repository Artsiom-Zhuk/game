import modalWindow from './modalWindow';
import clearNode from './clearNode';
import translationTask from './translationTask';
import removeHealthBot from './removeHealthBot';
import removeHealthPlayer from './removeHealthPlayer';

function btnAttackTranslation(){

    const btnAttackTranslation = document.createElement("input");
    btnAttackTranslation.classList.add("btn-attack-translation__input-btn-attack-translation");
    btnAttackTranslation.setAttribute("value", "Перевод слов");
    btnAttackTranslation.setAttribute("type", "button");
    btnAttackTranslation.addEventListener("click", () => {
        const container = document.getElementById('idContainerModalWindow'); 
        const bg = document.getElementById('idBackground'); 
        clearNode(bg); 
        clearNode(container);
        modalWindow(translationTask(removeHealthBot,removeHealthPlayer));
    });

    return btnAttackTranslation;
}

export default btnAttackTranslation;
