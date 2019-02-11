import clearNode from "./clearNode";
import startPage from "./createStartPage";
import {arrayStrings} from "./arrayStrings";

function pageAboutGame(){
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("page-about-game__div-main-container");
    document.body.appendChild(mainContainer);

    const container = document.createElement("div");
    container.classList.add("container__div-container");
    mainContainer.appendChild(container);

    const containerInfo = document.createElement("div");
    containerInfo.classList.add("container__div-container-info");
    container.appendChild(containerInfo);

    const title = document.createElement("div");
    title.classList.add("container__div-title");
    containerInfo.appendChild(title);
    title.innerHTML = "О игре";

    const info = document.createElement("div");
    info.classList.add("container__div-info");
    containerInfo.appendChild(info);
    info.innerHTML = arrayStrings[0];

    const containerBtn = document.createElement("div");
    containerBtn.classList.add("container__div-container-btn");
    container.appendChild(containerBtn);

    const btnExit = document.createElement("input");
    btnExit.classList.add("start-page__input-btn-exit");
    btnExit.setAttribute("type", "button");
    btnExit.setAttribute("value", "Назад");
    containerBtn.appendChild(btnExit);
    btnExit.addEventListener("click", () => {
        clearNode(mainContainer);
        startPage();
      });
}


export default pageAboutGame;