import createPageGameAction from './createPageGameAction.js';
import clearNode from './clearNode';
import validationRepeatName from "./validationRepeatName";

function pageChooseCharacter() {

  const mainContainer = document.createElement("div");
  mainContainer.setAttribute("id", "idMainContainerChooseCharacter");
  mainContainer.classList.add("page-choose-character__div-main-container");
  document.body.appendChild(mainContainer);

  const header = document.createElement("div");
  header.classList.add("page-choose-character__div-header");
  mainContainer.appendChild(header);
  header.innerHTML = "Cоздайте своего персонажа"

  const containerShowCharacter = document.createElement("div");
  containerShowCharacter.setAttribute("id", "idContainerShowCharacter");
  containerShowCharacter.classList.add("page-choose-character__div-container-show-character");
  mainContainer.appendChild(containerShowCharacter);

  const btnPlay = document.createElement("input");
  btnPlay.setAttribute("type", "button");
  btnPlay.setAttribute("value", "Играть");
  btnPlay.classList.add("page-choose-character__input-btn-play");
  mainContainer.appendChild(btnPlay);

  btnPlay.addEventListener("click", async () => {
      if(inputName.value.trim().length !== 0 && !(await validationRepeatName(inputName.value))){
          createPageGameAction();
          clearNode(mainContainer);
    } else {
      inputName.style.border = "solid red";
      alert("Ошибка! Вы не указали свое имя или имя уже занято!");
    } 
  });
  
  const headCharacter = document.createElement("div");
  headCharacter.classList.add("page-choose-character__div-head");
  containerShowCharacter.appendChild(headCharacter);

  const faceCharacter = document.createElement("div");
  faceCharacter.classList.add("page-choose-character__div-face");
  headCharacter.appendChild(faceCharacter);

  const containerBodyCharacter = document.createElement("div");
  containerBodyCharacter.classList.add(
    "page-choose-character__div-container-body"
  );
  containerShowCharacter.appendChild(containerBodyCharacter);

  const containerLeftArmCharacter = document.createElement("div");
  containerLeftArmCharacter.classList.add("page-choose-character__div-container-left-arm");
  containerBodyCharacter.appendChild(containerLeftArmCharacter);

  const leftArmCharacter = document.createElement("div");
  leftArmCharacter.classList.add("page-choose-character__div-left-arm");
  containerLeftArmCharacter.appendChild(leftArmCharacter);

  const bodyCharacter = document.createElement("div");
  bodyCharacter.classList.add("page-choose-character__div-body-character");
  containerBodyCharacter.appendChild(bodyCharacter);

  const containerRightArmCharacter = document.createElement("div");
  containerRightArmCharacter.classList.add(
    "page-choose-character__div-container-right-arm"
  );
  containerBodyCharacter.appendChild(containerRightArmCharacter);

  const rightArmCharacter = document.createElement("div");
  rightArmCharacter.classList.add("page-choose-character__div-right-arm");
  containerRightArmCharacter.appendChild(rightArmCharacter);

  const containerFeetCharacter = document.createElement("div");
  containerFeetCharacter.classList.add("page-choose-character__div-container-feet");
  containerShowCharacter.appendChild(containerFeetCharacter);

  const containerLeftFootCharacter = document.createElement("div");
  containerLeftFootCharacter.classList.add(
    "page-choose-character__div-container-left-foot"
  );
  containerFeetCharacter.appendChild(containerLeftFootCharacter);

  const leftFoot = document.createElement("div");
  leftFoot.classList.add("page-choose-character__div-left-foot");
  containerLeftFootCharacter.appendChild(leftFoot);

  const containerRightFootCharacter = document.createElement("div");
  containerRightFootCharacter.classList.add(
    "page-choose-character__div-container-right-foot"
  );
  containerFeetCharacter.appendChild(containerRightFootCharacter);

  const rightFoot = document.createElement("div");
  rightFoot.classList.add("page-choose-character__div-right-foot");
  containerRightFootCharacter.appendChild(rightFoot);

  const containerCreateCharacter = document.createElement("div");
  containerCreateCharacter.classList.add("page-choose-character__div-container-create-character");
  mainContainer.appendChild(containerCreateCharacter);

  const containerNameCharacter = document.createElement("div");
  containerNameCharacter.classList.add("page-choose-character__div-container-name-character");
  containerCreateCharacter.appendChild(containerNameCharacter);

  const containerChooseHead = document.createElement("div");
  containerChooseHead.classList.add("page-choose-character__div-container-choose-part-character");
  containerCreateCharacter.appendChild(containerChooseHead);

  const containerChooseBody = document.createElement("div");
  containerChooseBody.classList.add("page-choose-character__div-container-choose-part-character");
  containerCreateCharacter.appendChild(containerChooseBody);

  const containerChooseArms = document.createElement("div");
  containerChooseArms.classList.add("page-choose-character__div-container-choose-part-character");
  containerCreateCharacter.appendChild(containerChooseArms);

  const containerChooseFeet = document.createElement("div");
  containerChooseFeet.classList.add("page-choose-character__div-container-choose-part-character");
  containerCreateCharacter.appendChild(containerChooseFeet);

  const titleName = document.createElement("div");
  titleName.classList.add("page-choose-character__div-title");
  containerNameCharacter.appendChild(titleName);
  titleName.innerHTML = "ИМЯ";

  const containerInputName = document.createElement("div");
  containerInputName.classList.add("page-choose-character__div-container-input-name");
  containerNameCharacter.appendChild(containerInputName);

  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("id", "idInputName");
  inputName.setAttribute("placeholder", "Введите имя");
  inputName.setAttribute("maxlength", "10");
  inputName.classList.add("page-choose-character__input-input-name");
  containerInputName.appendChild(inputName);

  const titleHead = document.createElement("div");
  titleHead.classList.add("page-choose-character__div-title");
  containerChooseHead.appendChild(titleHead);
  titleHead.innerHTML = "ГОЛОВА";

  const containerTypeHeads = document.createElement("div");
  containerTypeHeads.classList.add("page-choose-character__div-container-type-part-character");
  containerChooseHead.appendChild(containerTypeHeads);

  const btnFirstHead = document.createElement("input");
  btnFirstHead.setAttribute("type", "button");
  btnFirstHead.classList.add("page-choose-character__input-btn-first-head");
  containerTypeHeads.appendChild(btnFirstHead);
  btnFirstHead.addEventListener("click", () => {
    headCharacter.style.backgroundImage = "url(image/head-2.png)";
    btnFirstHead.style.backgroundColor = "greenyellow";
    btnSecondHead.style.backgroundColor = "white";
  });

  const btnSecondHead = document.createElement("input");
  btnSecondHead.setAttribute("type", "button");
  btnSecondHead.classList.add("page-choose-character__input-btn-second-head");
  containerTypeHeads.appendChild(btnSecondHead);
  btnSecondHead.addEventListener("click", () => {
    headCharacter.style.backgroundImage = "url(image/head-1.png)";
    btnSecondHead.style.backgroundColor = "greenyellow";
    btnFirstHead.style.backgroundColor = "white";
  });

  const titleBody = document.createElement("div");
  titleBody.classList.add("page-choose-character__div-title");
  containerChooseBody.appendChild(titleBody);
  titleBody.innerHTML = "ТЕЛО";

  var containerTypeBodies = document.createElement("div");
  containerTypeBodies.classList.add("page-choose-character__div-container-type-part-character");
  containerChooseBody.appendChild(containerTypeBodies);

  const btnFirstBody = document.createElement("input");
  btnFirstBody.setAttribute("type", "button");
  btnFirstBody.classList.add("page-choose-character__input-btn-first-body");
  containerTypeBodies.appendChild(btnFirstBody);
  btnFirstBody.addEventListener("click", () => {
    bodyCharacter.style.backgroundImage = "url(image/body-1.png)";
    leftArmCharacter.style.left = "71.5px";
    rightArmCharacter.style.left = "-14px";
    btnFirstBody.style.backgroundColor = "greenyellow";
    btnSecondBody.style.backgroundColor = "white";
  });

  const btnSecondBody = document.createElement("input");
  btnSecondBody.setAttribute("type", "button");
  btnSecondBody.classList.add("page-choose-character__input-btn-second-body");
  containerTypeBodies.appendChild(btnSecondBody);
  btnSecondBody.addEventListener("click", () => {
    bodyCharacter.style.backgroundImage = "url(image/body-2.png)";
    leftArmCharacter.style.left = "66px";
    rightArmCharacter.style.left = "-8.5px";
    btnSecondBody.style.backgroundColor = "greenyellow";
    btnFirstBody.style.backgroundColor = "white";
  });

  const titleArms = document.createElement("div");
  titleArms.classList.add("page-choose-character__div-title");
  containerChooseArms.appendChild(titleArms);
  titleArms.innerHTML = "РУКИ";

  const containerTypeArms = document.createElement("div");
  containerTypeArms.classList.add("page-choose-character__div-container-type-part-character");
  containerChooseArms.appendChild(containerTypeArms);

  const btnFirstArms = document.createElement("input");
  btnFirstArms.setAttribute("type", "button");
  btnFirstArms.classList.add("page-choose-character__input-btn-first-arms");
  containerTypeArms.appendChild(btnFirstArms);
  btnFirstArms.addEventListener("click", () => {
    leftArmCharacter.style.backgroundImage = "url(image/arm-1.png)";
    rightArmCharacter.style.backgroundImage = "url(image/arm-1.png)";
    btnFirstArms.style.backgroundColor = "greenyellow";
    btnSecondArms.style.backgroundColor = "white";
  });

  const btnSecondArms = document.createElement("input");
  btnSecondArms.setAttribute("type", "button");
  btnSecondArms.classList.add("page-choose-character__input-btn-second-arms");
  containerTypeArms.appendChild(btnSecondArms);
  btnSecondArms.addEventListener("click", () => {
    leftArmCharacter.style.backgroundImage = "url(image/arm-2.png)";
    rightArmCharacter.style.backgroundImage = "url(image/arm-2.png)";
    btnSecondArms.style.backgroundColor = "greenyellow";
    btnFirstArms.style.backgroundColor = "white";
  });

  const titleFeet = document.createElement("div");
  titleFeet.classList.add("page-choose-character__div-title");
  containerChooseFeet.appendChild(titleFeet);
  titleFeet.innerHTML = "НОГИ";

  const containerTypeFeet = document.createElement("div");
  containerTypeFeet.classList.add("page-choose-character__div-container-type-part-character");
  containerChooseFeet.appendChild(containerTypeFeet);

  const btnFirstFeet = document.createElement("input");
  btnFirstFeet.setAttribute("type", "button");
  btnFirstFeet.classList.add("page-choose-character__input-btn-first-feet");
  containerTypeFeet.appendChild(btnFirstFeet);
  btnFirstFeet.addEventListener("click", () => {
    leftFoot.style.right = "50px";
    leftFoot.style.top = "-10px";
    leftFoot.style.transform = "rotate(20deg)";
    rightFoot.style.left = "50px";
    rightFoot.style.top = "-10px";
    rightFoot.style.transform = "rotate(-20deg)";
    leftFoot.style.width = "6px";
    btnFirstFeet.style.backgroundColor = "greenyellow";
    btnSecondFeet.style.backgroundColor = "white";
  });

  const btnSecondFeet = document.createElement("input");
  btnSecondFeet.setAttribute("type", "button");
  btnSecondFeet.classList.add("page-choose-character__input-btn-second-feet");
  containerTypeFeet.appendChild(btnSecondFeet);
  btnSecondFeet.addEventListener("click", () => {
    leftFoot.style.right = "10px";
    leftFoot.style.top = "-2px";
    leftFoot.style.transform = "rotate(0deg)";
    rightFoot.style.left = "10px";
    rightFoot.style.top = "-2px";
    rightFoot.style.transform = "rotate(0deg)";
    leftFoot.style.width = "7px";
    btnSecondFeet.style.backgroundColor = "greenyellow";
    btnFirstFeet.style.backgroundColor = "white";
  });
}

export default pageChooseCharacter;