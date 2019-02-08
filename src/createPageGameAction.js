import createBot from './createBot.js';
import modalWindow from './modalWindow.js';

import containerChooseTask from './containerChooseTask';
import btnAttackArithmetic from './btnAttackArithmetic';
import btnAttackTranslation from './btnAttackTranslation';
import btnHealthArithmetic from './btnHealthArithmetic';
import btnHealthTranslation from './btnHealthTranslation';

function pageGameAction(){

  let currentLevel = 1;
  let currentHealtPlayer = 100;
  let currentHealtBot = 100;

  const idContainerShowPlayer = document.getElementById("idContainerShowCharacter");
  idContainerShowPlayer.style.position = "static";

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("page-game-action__main-container");
  document.body.appendChild(mainContainer);

  const header = document.createElement("div");
  header.classList.add("page-game-action__header");
  mainContainer.appendChild(header);

  const nameAndHealthPlayer = document.createElement("div");
  nameAndHealthPlayer.classList.add("page-game-action__name-and-health-player");
  header.appendChild(nameAndHealthPlayer);

  const healthPlayer = document.createElement("div");
  healthPlayer.classList.add("page-game-action__health-player");
  nameAndHealthPlayer.appendChild(healthPlayer);
  healthPlayer.innerHTML = "+ " + currentHealtPlayer;

  const namePlayer = document.createElement("div");
  namePlayer.classList.add("page-game-action__name-player");
  nameAndHealthPlayer.appendChild(namePlayer);
  
  const level = document.createElement("div");
  level.classList.add("page-game-action__level");
  header.appendChild(level);
  level.innerHTML = "Уровень " + currentLevel;

  const nameAndHealthBot = document.createElement("div");
  nameAndHealthBot.classList.add("page-game-action__name-and-health-bot");
  header.appendChild(nameAndHealthBot);

  const nameBot = document.createElement("div");
  nameBot.classList.add("page-game-action__name-bot");
  nameAndHealthBot.appendChild(nameBot);

  const healthBot = document.createElement("div");
  healthBot.classList.add("page-game-action__health-bot");
  nameAndHealthBot.appendChild(healthBot);
  healthBot.innerHTML = "+ " + currentHealtBot;

  const ground = document.createElement("div");
  ground.classList.add("page-game-action__ground");
  mainContainer.appendChild(ground);

  const containerButtons = document.createElement("div");
  containerButtons.classList.add("page-game-action__container-buttons");
  mainContainer.appendChild(containerButtons);

  const btnAttack = document.createElement("input");
  btnAttack.setAttribute("type", "button");
  btnAttack.setAttribute("value", "Атаковать");
  btnAttack.classList.add("page-game-action__btn-attack");
  containerButtons.appendChild(btnAttack);
  btnAttack.addEventListener("click", () => {
    const buttonAttackArithmetic = btnAttackArithmetic();
    const buttonAttackTranslation = btnAttackTranslation();
    const containerButtons = containerChooseTask(buttonAttackArithmetic,buttonAttackTranslation);
    modalWindow(containerButtons);
  });

  const btnHealth = document.createElement("input");
  btnHealth.setAttribute("type", "button");
  btnHealth.setAttribute("value", "Лечиться");
  btnHealth.classList.add("page-game-action__btn-health");
  containerButtons.appendChild(btnHealth);
  btnHealth.addEventListener("click", () => {
    const buttonHealthArithmetic = btnHealthArithmetic();
    const buttonHealthTranslation = btnHealthTranslation();
    const containerButtons = containerChooseTask(buttonHealthArithmetic, buttonHealthTranslation);
    modalWindow(containerButtons);
  });

  const containerPlayer = document.createElement("div");
  containerPlayer.classList.add("page-game-action__container-player");
  mainContainer.appendChild(containerPlayer);
  containerPlayer.appendChild(idContainerShowPlayer);

  const containerBot = document.createElement("div");
  containerBot.classList.add("page-game-action__container-bot");
  mainContainer.appendChild(containerBot);
  createBot(containerBot);
}

export default pageGameAction;