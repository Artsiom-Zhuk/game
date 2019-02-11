import randomNum from "./randomNum";
import {arrayTranslationTask} from "./arrayTranslationTask";
import clearNode from "./clearNode";
import responseAnswerUser from "./responseAnswerUser";

function translationTask(trueAnswer, falseAnswer){

    let example = randomNum(0,arrayTranslationTask.length-1);

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("translation-task__div-main-container");

    const container = document.createElement("div");
    container.classList.add("translation-task__div-container");
    mainContainer.appendChild(container);

    const containerTask = document.createElement("div");
    containerTask.classList.add("translation-task__div-container-task");
    container.appendChild(containerTask);

    const task = document.createElement("div");
    task.classList.add("translation-task__div-task");
    containerTask.appendChild(task);
    task.innerHTML = arrayTranslationTask[example].word;

    const signEquals  = document.createElement("div");
    signEquals.classList.add("translation-task__div-sign-equals");
    containerTask.appendChild(signEquals);
    signEquals.innerHTML = " - ";

    const fieldAnswer = document.createElement("input");
    fieldAnswer.setAttribute("type","text");
    fieldAnswer.setAttribute("maxlength","10");
    fieldAnswer.classList.add("translation-task__input-field-answer");
    containerTask.appendChild(fieldAnswer);

    const containerButton = document.createElement("div");
    containerButton.classList.add("translation-task__div-container-button");
    container.appendChild(containerButton);

    const btnReplay = document.createElement("input");
    btnReplay.classList.add("translation-task__input-btn-replay");
    btnReplay.setAttribute("type", "button");
    btnReplay.setAttribute("value", "Ответить");
    containerButton.appendChild(btnReplay);
    btnReplay.addEventListener("click", () => {
        if(fieldAnswer.value.trim().length){
            if( ~arrayTranslationTask[example].translation.indexOf(fieldAnswer.value.toLowerCase())){
                const bg = document.getElementById('idBackground'); 
                const container = document.getElementById('idContainerModalWindow'); 
                clearNode(container); 
                clearNode(bg);
                trueAnswer();
                responseAnswerUser(idMainContainerGameAction,"Верно!","black","green");
            } else {
                const bg = document.getElementById('idBackground'); 
                const container = document.getElementById('idContainerModalWindow'); 
                clearNode(container); 
                clearNode(bg);
                falseAnswer();
                responseAnswerUser(idMainContainerGameAction,"Упс, ошибочка!","black","red");
            }
        }
    });

    const btnCancel = document.createElement("input");
    btnCancel.classList.add("translation-task__input-btn-cancel");
    btnCancel.setAttribute("type", "button");
    btnCancel.setAttribute("value", "Отмена");
    containerButton.appendChild(btnCancel);
    btnCancel.addEventListener("click", () => {
        const bg = document.getElementById('idBackground'); 
        const container = document.getElementById('idContainerModalWindow'); 
        clearNode(container); 
        clearNode(bg);
    });
    
    return mainContainer;
}

export default translationTask;