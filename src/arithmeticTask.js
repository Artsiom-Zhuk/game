import {arrayArithmeticTasks1} from "./arrayArithmeticTasks";
import {arrayArithmeticTasks2} from "./arrayArithmeticTasks";
import {arrayArithmeticTasks3} from "./arrayArithmeticTasks";
import {arrayArithmeticTasks4} from "./arrayArithmeticTasks";
import {arrayArithmeticTasks5} from "./arrayArithmeticTasks";
import randomNum from "./randomNum";
import clearNode from "./clearNode";
import responseAnswerUser from "./responseAnswerUser";

function arithmeticTask(trueAnswer, falseAnswer) {

    let idMainContainerGameAction = document.getElementById("idMainContainerGameAction");
    const idLevel = document.getElementById("idLevel");
    let currentArray;

    switch(+idLevel.value){
        case 1:
        case 2:
        case 3:
            currentArray = arrayArithmeticTasks1;
            break;
        case 4:
        case 5:
            currentArray = arrayArithmeticTasks2;
            break;
        case 6:
        case 7:
            currentArray = arrayArithmeticTasks3;
            break;
        case 8:
        case 9:
            currentArray = arrayArithmeticTasks4;
            break;
        case 10:
            currentArray = arrayArithmeticTasks5;
            break;
    }

    let example = randomNum(0,currentArray.length-1);

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("arithmetic-task__div-main-container");

    const container = document.createElement("div");
    container.classList.add("arithmetic-task__div-container");
    mainContainer.appendChild(container);

    const containerTask = document.createElement("div");
    containerTask.classList.add("arithmetic-task__div-container-task");
    container.appendChild(containerTask);

    const task = document.createElement("div");
    task.classList.add("arithmetic-task__div-task");
    containerTask.appendChild(task);
    task.innerHTML = currentArray[example][0];

    const signEquals  = document.createElement("div");
    signEquals.classList.add("arithmetic-task__div-sign-equals");
    containerTask.appendChild(signEquals);
    signEquals.innerHTML = "="

    const fieldAnswer = document.createElement("input");
    fieldAnswer.setAttribute("type","text");
    fieldAnswer.setAttribute("maxlength","3");
    fieldAnswer.classList.add("arithmetic-task__input-field-answer");
    containerTask.appendChild(fieldAnswer);

    const containerButton = document.createElement("div");
    containerButton.classList.add("arithmetic-task__div-container-button");
    container.appendChild(containerButton);

    const btnReplay = document.createElement("input");
    btnReplay.classList.add("arithmetic-task__input-btn-replay");
    btnReplay.setAttribute("type", "button");
    btnReplay.setAttribute("value", "Ответить");
    containerButton.appendChild(btnReplay);
    btnReplay.addEventListener("click", () => {
        if(fieldAnswer.value.trim().length){
            if(currentArray[example][1] === +fieldAnswer.value){
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
    btnCancel.classList.add("arithmetic-task__input-btn-cancel");
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

export default arithmeticTask;