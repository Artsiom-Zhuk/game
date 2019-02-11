import pageChooseCharacter from './createPageChooseCharacter.js';
import clearNode from './clearNode.js';
import renderTableScore from "./renderTableScore";
import pageAboutGame from "./pageAboutGame";

function startPage(){

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("start-page__div-main-container");
    document.body.appendChild(mainContainer);

    const titleGame = document.createElement("div");
    titleGame.classList.add("start-page__div-title-game");
    mainContainer.appendChild(titleGame);
    titleGame.innerHTML = "<h1>Way of the Samurai</h1>";
    
    const startMenu = document.createElement("div");
    startMenu.classList.add("start-page__div-start-menu");
    mainContainer.appendChild(startMenu);

    const btnNewGame = document.createElement("input");
    btnNewGame.classList.add("start-page__input-btn-new-game");
    btnNewGame.setAttribute("type", "button");
    btnNewGame.setAttribute("value", "Новая игра");
    startMenu.appendChild(btnNewGame);
    btnNewGame.addEventListener("click", () => {
        clearNode(mainContainer);
        pageChooseCharacter();
      });

    const btnResult = document.createElement("input");
    btnResult.classList.add("start-page__input-btn-result");
    btnResult.setAttribute("type", "button");
    btnResult.setAttribute("value", "Результаты");
    startMenu.appendChild(btnResult);
    btnResult.addEventListener("click", () => {
        clearNode(mainContainer);
        renderTableScore();
    });

    const btnAbout = document.createElement("input");
    btnAbout.classList.add("start-page__input-btn-about");
    btnAbout.setAttribute("type", "button");
    btnAbout.setAttribute("value", "О игре");
    startMenu.appendChild(btnAbout);
    btnAbout.addEventListener("click", () => {
        clearNode(mainContainer);
        pageAboutGame();
    });
}

export default startPage;