import modalWindow from "./modalWindow";

function endGame(res,btn1,btn2){

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("end-game__div-main-container");

    const container = document.createElement("div");
    container.classList.add("end-game__div-container");
    mainContainer.appendChild(container);

    const result = document.createElement("div");
    result.classList.add("end-game__div-result");
    container.appendChild(result);

    result.innerHTML = res;

    const containerButton = document.createElement("div");
    containerButton.classList.add("end-game__div-container-button");
    container.appendChild(containerButton);

    containerButton.appendChild(btn1);
    containerButton.appendChild(btn2);

    return modalWindow(mainContainer);
}

export default endGame;