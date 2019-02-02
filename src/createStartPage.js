import createPageForChooseCharacter from './createPageForChooseCharacter.js';
import clearNode from './clearNode.js';

function createStartPage(){

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("stContainer");
    document.body.appendChild(mainContainer);

    const startMenu = document.createElement("div");
    startMenu.classList.add("stStartMenu");
    mainContainer.appendChild(startMenu);

    const btnNewGame = document.createElement("input");
    btnNewGame.classList.add("stBtnNewGame");
    btnNewGame.setAttribute("type", "button");
    btnNewGame.setAttribute("value", "Новая игра");
    startMenu.appendChild(btnNewGame);
    btnNewGame.addEventListener("click", () => {
        clearNode(mainContainer);
        createPageForChooseCharacter();
      });

    const btnResult = document.createElement("input");
    btnResult.classList.add("stBtnResult");
    btnResult.setAttribute("type", "button");
    btnResult.setAttribute("value", "Результаты");
    startMenu.appendChild(btnResult);
    btnResult.addEventListener("click", () => {
        alert("Result");
    });

    const btnAbout = document.createElement("input");
    btnAbout.classList.add("stBtnAbout");
    btnAbout.setAttribute("type", "button");
    btnAbout.setAttribute("value", "О игре");
    startMenu.appendChild(btnAbout);
    btnAbout.addEventListener("click", () => {
        alert("About");
    });
}

export default createStartPage;