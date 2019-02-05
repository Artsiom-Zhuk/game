import createBot from './createBot.js';
import modalWindowAttack from './modalWindowAttack.js';

function createPageGameAction(){

  let nowLevel = 1;
  let nowHealtPlayer = 100;
  let nowHealtBot = 100;

  const idContainerForShowCharacterPlayer = document.getElementById("idContainerShowCharacter");
   idContainerForShowCharacterPlayer.style.position = "static";

    const gameActionContainer = document.createElement("div");
    gameActionContainer.classList.add("stGameActionContainer");
    document.body.appendChild(gameActionContainer);

    const headerContainer = document.createElement("div");
    headerContainer.classList.add("stHeaderContainer");
    gameActionContainer.appendChild(headerContainer);


    const nameHealthPlayer = document.createElement("div");
    nameHealthPlayer.classList.add("stNameHealthPlayer");
    headerContainer.appendChild(nameHealthPlayer);

    const healthPlayer = document.createElement("div");
    healthPlayer.classList.add("stHealthPlayer");
    nameHealthPlayer.appendChild(healthPlayer);
    healthPlayer.innerHTML = "+ " + nowHealtPlayer;

    const namePlayer = document.createElement("div");
    namePlayer.classList.add("stNamePlayer");
    nameHealthPlayer.appendChild(namePlayer);
    // namePlayer.innerHTML = "";


    const level = document.createElement("div");
    level.classList.add("stLevel");
    headerContainer.appendChild(level);
    level.innerHTML = "Уровень " + nowLevel;

    const nameHealthBot = document.createElement("div");
    nameHealthBot.classList.add("stNameHealthBot");
    headerContainer.appendChild(nameHealthBot);

    const nameBot = document.createElement("div");
    nameBot.classList.add("stNameBot");
    nameHealthBot.appendChild(nameBot);

    const healthBot = document.createElement("div");
    healthBot.classList.add("stHealthBot");
    nameHealthBot.appendChild(healthBot);
    healthBot.innerHTML = "+ " + nowHealtBot;

    const ground = document.createElement("div");
    ground.classList.add("stGround");
    gameActionContainer.appendChild(ground);

    const containerForBtn = document.createElement("div");
    containerForBtn.classList.add("stContainerForBtn");
    gameActionContainer.appendChild(containerForBtn);

    const btnAttack = document.createElement("input");
    btnAttack.setAttribute("type", "button");
    btnAttack.setAttribute("value", "Атаковать");
    btnAttack.classList.add("stBtnAttack");
    containerForBtn.appendChild(btnAttack);
    btnAttack.addEventListener("click", () => {
      modalWindowAttack();
    });

    const btnHealth = document.createElement("input");
    btnHealth.setAttribute("type", "button");
    btnHealth.setAttribute("value", "Лечиться");
    btnHealth.classList.add("stBtnHealth");
    containerForBtn.appendChild(btnHealth);
    btnHealth.addEventListener("click", () => {
      alert("health");
    });

    const characterPlayer = document.createElement("div");
    characterPlayer.classList.add("stCharacterPlayer");
    gameActionContainer.appendChild(characterPlayer);
    characterPlayer.appendChild(idContainerForShowCharacterPlayer);

    const characterComputer = document.createElement("div");
    characterComputer.classList.add("stCharacterComputer");
    gameActionContainer.appendChild(characterComputer);
    createBot(characterComputer);
}

export default createPageGameAction;