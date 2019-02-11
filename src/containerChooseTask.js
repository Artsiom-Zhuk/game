function containerChooseTask(btn1, btn2, btn3){

    const mainContainer = document.createElement("form");
    mainContainer.setAttribute("id", "idMainContainer");
    mainContainer.classList.add("container-choose-task__form-main-container");

    const containerButtons = document.createElement("div");
    containerButtons.classList.add("container-choose-task__div-container-buttons");
    mainContainer.appendChild(containerButtons);

    containerButtons.appendChild(btn1);
    containerButtons.appendChild(btn2);
    containerButtons.appendChild(btn3);

    return mainContainer;
}
    
export default containerChooseTask;