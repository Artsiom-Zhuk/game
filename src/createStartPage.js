import createPageChooseCharacter from './createPageChooseCharacter.js';
import clearNode from './clearNode.js';

function createStartPage(){

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("create-start-page__div-main-container");
    document.body.appendChild(mainContainer);

    const startMenu = document.createElement("div");
    startMenu.classList.add("create-start-page__div-start-menu");
    mainContainer.appendChild(startMenu);

    const btnNewGame = document.createElement("input");
    btnNewGame.classList.add("create-start-page__input-btn-new-game");
    btnNewGame.setAttribute("type", "button");
    btnNewGame.setAttribute("value", "Новая игра");
    startMenu.appendChild(btnNewGame);
    btnNewGame.addEventListener("click", () => {
        clearNode(mainContainer);
        createPageChooseCharacter();
      });

    const btnResult = document.createElement("input");
    btnResult.classList.add("create-start-page__input-btn-result");
    btnResult.setAttribute("type", "button");
    btnResult.setAttribute("value", "Результаты");
    startMenu.appendChild(btnResult);
    btnResult.addEventListener("click", () => {
        alert("Result");
    });

    const btnAbout = document.createElement("input");
    btnAbout.classList.add("create-start-page__input-btn-about");
    btnAbout.setAttribute("type", "button");
    btnAbout.setAttribute("value", "О игре");
    startMenu.appendChild(btnAbout);
    btnAbout.addEventListener("click", () => {
        alert("About");
    });
}

export default createStartPage;