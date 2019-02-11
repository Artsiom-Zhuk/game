import createBot from './createBot.js';
import modalWindow from './modalWindow.js';
import randomNum from './randomNum';

import containerChooseTask from './containerChooseTask';
import btnAttackArithmetic from './btnAttackArithmetic';
import btnAttackTranslation from './btnAttackTranslation';
import btnHealthArithmetic from './btnHealthArithmetic';
import btnHealthTranslation from './btnHealthTranslation';
import closeModalWindow from "./closeModalWindow";

import {firstname} from './nameBot';
import {surname} from './nameBot';;
import {patronymic} from './nameBot';

function pageGameAction(){

  const idContainerShowPlayer = document.getElementById("idContainerShowCharacter");
  idContainerShowPlayer.style.position = "static";

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("page-game-action__main-container");
  mainContainer.setAttribute("id","idMainContainerGameAction")
  document.body.appendChild(mainContainer);

  const header = document.createElement("div");
  header.classList.add("page-game-action__header");
  mainContainer.appendChild(header);

  const nameAndHealthPlayer = document.createElement("div");
  nameAndHealthPlayer.classList.add("page-game-action__name-and-health-player");
  header.appendChild(nameAndHealthPlayer);

  const healthPlayer = document.createElement("input");
  healthPlayer.setAttribute("type","button");
  healthPlayer.setAttribute("value","100");
  healthPlayer.classList.add("page-game-action__health-player");
  healthPlayer.setAttribute("id","idHealthPlayer");
  nameAndHealthPlayer.appendChild(healthPlayer);
  healthPlayer.addEventListener("click", () => {
    alert("у вас +"+healthPlayer.value+" здоровья!");
  });

  const namePlayer = document.createElement("div");
  namePlayer.setAttribute("id","idNamePlayer");
  namePlayer.classList.add("page-game-action__name-player");
  const idInputName = document.getElementById("idInputName");
  namePlayer.innerHTML = idInputName.value;
  nameAndHealthPlayer.appendChild(namePlayer);

  const level = document.createElement("input");
  level.setAttribute("type","button");
  level.setAttribute("value","1");
  level.classList.add("page-game-action__level");
  level.setAttribute("id","idLevel");
  header.appendChild(level);
  level.addEventListener("click", () => {
    alert("Вы находитесь на "+level.value+" уровне!");
  });

  const nameAndHealthBot = document.createElement("div");
  nameAndHealthBot.classList.add("page-game-action__name-and-health-bot");
  header.appendChild(nameAndHealthBot);

  const nameBot = document.createElement("div");
  nameBot.classList.add("page-game-action__name-bot");
  const indexFirstname = randomNum(0,firstname.length-1);
  const indexSurname = randomNum(0,surname.length-1);    
  const indexPatronymic= randomNum(0,patronymic.length-1);  
  const fullNameBot = firstname[indexFirstname] + surname[indexSurname] + patronymic[indexPatronymic]
  nameBot.innerHTML = fullNameBot;   
  nameAndHealthBot.appendChild(nameBot);                                                                            

  const healthBot = document.createElement("input");
  healthBot.setAttribute("type","button");
  healthBot.setAttribute("value","100");
  healthBot.classList.add("page-game-action__health-bot");
  healthBot.setAttribute("id","idHealthBot");
  nameAndHealthBot.appendChild(healthBot);
  healthBot.addEventListener("click", () => {
    alert("у противника +" +healthBot.value + " здоровья!");
  });

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
    const buttonBack = closeModalWindow();
    const containerButtons = containerChooseTask(buttonAttackArithmetic,buttonAttackTranslation,buttonBack);
    modalWindow(containerButtons);
  });

  const btnHealth = document.createElement("input");
  btnHealth.setAttribute("type", "button");
  btnHealth.setAttribute("value", "Лечиться");
  btnHealth.classList.add("page-game-action__btn-health");
  containerButtons.appendChild(btnHealth);
  btnHealth.addEventListener("click", () => {
    if(healthPlayer.value < 91){
      const buttonHealthArithmetic = btnHealthArithmetic();
      const buttonHealthTranslation = btnHealthTranslation();
      const buttonBack = closeModalWindow();
      const containerButtons = containerChooseTask(buttonHealthArithmetic, buttonHealthTranslation,buttonBack);
      modalWindow(containerButtons);
    } else {
      alert("У вас достаточно здоровья!");
    }
  });

  const containerPlayer = document.createElement("div");
  containerPlayer.setAttribute("id","idContainerPlayer");
  containerPlayer.classList.add("page-game-action__container-player");
  mainContainer.appendChild(containerPlayer);
  containerPlayer.appendChild(idContainerShowPlayer);

  const containerBot = document.createElement("div");
  containerBot.setAttribute("id","idContainerBot");
  containerBot.classList.add("page-game-action__container-bot");
  mainContainer.appendChild(containerBot);
  createBot(containerBot);
}

export default pageGameAction;
