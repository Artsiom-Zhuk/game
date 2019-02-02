function createPageForChooseCharacter() {
  const mainContainer = document.createElement("div");
  mainContainer.setAttribute("id", "idMainContainerChooseCharacter");
  mainContainer.classList.add("stMainContainer");
  document.body.appendChild(mainContainer);

  const header = document.createElement("div");
  header.classList.add("stHeader");
  mainContainer.appendChild(header);
  header.innerHTML = "Cоздайте своего персонажа"

  const containerForShowCharacter = document.createElement("div");
  containerForShowCharacter.setAttribute("id", "idContainerForShowCharacter");
  containerForShowCharacter.classList.add("stContainerForShowCharacter");
  mainContainer.appendChild(containerForShowCharacter);

  const btnPlay = document.createElement("input");
  btnPlay.setAttribute("type", "button");
  btnPlay.setAttribute("value", "Играть");
  btnPlay.classList.add("stBtnPlay");
  mainContainer.appendChild(btnPlay);

  btnPlay.addEventListener("click", () => {
    alert("name");
  });
  
  const containerForHeadCharacter = document.createElement("div");
  containerForHeadCharacter.classList.add("stHeadCharacter");
  containerForShowCharacter.appendChild(containerForHeadCharacter);

  const faceCharacter = document.createElement("div");
  faceCharacter.classList.add("stFaceCharacter");
  containerForHeadCharacter.appendChild(faceCharacter);

  const containerForBodyArmsCharacter = document.createElement("div");
  containerForBodyArmsCharacter.classList.add(
    "stContainerForBodyArmsCharacter"
  );
  containerForShowCharacter.appendChild(containerForBodyArmsCharacter);

  const containerForLeftArmCharacter = document.createElement("div");
  containerForLeftArmCharacter.classList.add("stContainerForLeftArmCharacter");
  containerForBodyArmsCharacter.appendChild(containerForLeftArmCharacter);

  const leftArmCharacter = document.createElement("div");
  leftArmCharacter.classList.add("stLeftArmCharacter");
  containerForLeftArmCharacter.appendChild(leftArmCharacter);

  const containerForBodyCharacter = document.createElement("div");
  containerForBodyCharacter.classList.add("stContainerForBodyCharacter");
  containerForBodyArmsCharacter.appendChild(containerForBodyCharacter);

  const containerForRightArmCharacter = document.createElement("div");
  containerForRightArmCharacter.classList.add(
    "stContainerForRightArmCharacter"
  );
  containerForBodyArmsCharacter.appendChild(containerForRightArmCharacter);

  const rightArmCharacter = document.createElement("div");
  rightArmCharacter.classList.add("stRightArmCharacter");
  containerForRightArmCharacter.appendChild(rightArmCharacter);

  const containerForFeetCharacter = document.createElement("div");
  containerForFeetCharacter.classList.add("stContainerForFeetCharacter");
  containerForShowCharacter.appendChild(containerForFeetCharacter);

  const containerForLeftFootCharacter = document.createElement("div");
  containerForLeftFootCharacter.classList.add(
    "stContainerForLeftFootCharacter"
  );
  containerForFeetCharacter.appendChild(containerForLeftFootCharacter);

  const leftFoot = document.createElement("div");
  leftFoot.classList.add("stLeftFoot");
  containerForLeftFootCharacter.appendChild(leftFoot);

  const containerForRightFootCharacter = document.createElement("div");
  containerForRightFootCharacter.classList.add(
    "stContainerForRightFootCharacter"
  );
  containerForFeetCharacter.appendChild(containerForRightFootCharacter);

  const rightFoot = document.createElement("div");
  rightFoot.classList.add("stRightFoot");
  containerForRightFootCharacter.appendChild(rightFoot);

  const containerForCreateCharacter = document.createElement("div");
  containerForCreateCharacter.classList.add("stContainerForCreateCharacter");
  mainContainer.appendChild(containerForCreateCharacter);

  const containerForNameCharacter = document.createElement("div");
  containerForNameCharacter.classList.add("stContainerForNameCharacter");
  containerForCreateCharacter.appendChild(containerForNameCharacter);

  const containerForChooseHead = document.createElement("div");
  containerForChooseHead.classList.add("stContainerForChooseHead");
  containerForCreateCharacter.appendChild(containerForChooseHead);

  const containerForChooseBody = document.createElement("div");
  containerForChooseBody.classList.add("stContainerForChooseBody");
  containerForCreateCharacter.appendChild(containerForChooseBody);

  const containerForChooseArms = document.createElement("div");
  containerForChooseArms.classList.add("stContainerForChooseArms");
  containerForCreateCharacter.appendChild(containerForChooseArms);

  const containerForChooseFeet = document.createElement("div");
  containerForChooseFeet.classList.add("stContainerForChooseFeet");
  containerForCreateCharacter.appendChild(containerForChooseFeet);

  const containerTitleName = document.createElement("div");
  containerTitleName.classList.add("stContainerTitleName");
  containerForNameCharacter.appendChild(containerTitleName);
  containerTitleName.innerHTML = "ИМЯ";

  const containerForInputName = document.createElement("div");
  containerForInputName.classList.add("stContainerForInputName");
  containerForNameCharacter.appendChild(containerForInputName);

  const inputName = document.createElement("input");
  inputName.setAttribute("type", "text");
  inputName.setAttribute("placeholder", "Введите имя");
  inputName.setAttribute("maxlength", "6");
  inputName.classList.add("stInputName");
  containerForInputName.appendChild(inputName);

  const containerTitleHead = document.createElement("div");
  containerTitleHead.classList.add("stContainerTitleHead");
  containerForChooseHead.appendChild(containerTitleHead);
  containerTitleHead.innerHTML = "ГОЛОВА";

  const containerForTypeHeads = document.createElement("div");
  containerForTypeHeads.classList.add("stContainerForTypeHeads");
  containerForChooseHead.appendChild(containerForTypeHeads);

  const btnForChooseFirstHead = document.createElement("input");
  btnForChooseFirstHead.setAttribute("type", "button");
  btnForChooseFirstHead.classList.add("stBtnForChooseFirstHead");
  containerForTypeHeads.appendChild(btnForChooseFirstHead);
  btnForChooseFirstHead.addEventListener("click", () => {
    containerForHeadCharacter.style.backgroundImage = "url(image/head-2.png)";
    btnForChooseFirstHead.style.backgroundColor = "greenyellow";
    btnForChooseSecondHead.style.backgroundColor = "white";
  });

  const btnForChooseSecondHead = document.createElement("input");
  btnForChooseSecondHead.setAttribute("type", "button");
  btnForChooseSecondHead.classList.add("stBtnForChooseSecondHead");
  containerForTypeHeads.appendChild(btnForChooseSecondHead);
  btnForChooseSecondHead.addEventListener("click", () => {
    containerForHeadCharacter.style.backgroundImage = "url(image/head-1.png)";
    btnForChooseSecondHead.style.backgroundColor = "greenyellow";
    btnForChooseFirstHead.style.backgroundColor = "white";
  });

  const containerTitleBody = document.createElement("div");
  containerTitleBody.classList.add("stContainerTitleBody");
  containerForChooseBody.appendChild(containerTitleBody);
  containerTitleBody.innerHTML = "ТЕЛО";

  var containerFotTypeBodies = document.createElement("div");
  containerFotTypeBodies.classList.add("stContainerForTypeBodies");
  containerForChooseBody.appendChild(containerFotTypeBodies);

  const btnForChooseFirstBody = document.createElement("input");
  btnForChooseFirstBody.setAttribute("type", "button");
  btnForChooseFirstBody.classList.add("stBtnForChooseFirstBody");
  containerFotTypeBodies.appendChild(btnForChooseFirstBody);
  btnForChooseFirstBody.addEventListener("click", () => {
    containerForBodyCharacter.style.backgroundImage = "url(image/body-1.png)";
    leftArmCharacter.style.left = "71.5px";
    rightArmCharacter.style.left = "-14px";
    btnForChooseFirstBody.style.backgroundColor = "greenyellow";
    btnForChooseSecondBody.style.backgroundColor = "white";
  });

  const btnForChooseSecondBody = document.createElement("input");
  btnForChooseSecondBody.setAttribute("type", "button");
  btnForChooseSecondBody.classList.add("stBtnForChooseSecondBody");
  containerFotTypeBodies.appendChild(btnForChooseSecondBody);
  btnForChooseSecondBody.addEventListener("click", () => {
    containerForBodyCharacter.style.backgroundImage = "url(image/body-2.png)";
    leftArmCharacter.style.left = "66px";
    rightArmCharacter.style.left = "-8.5px";
    btnForChooseSecondBody.style.backgroundColor = "greenyellow";
    btnForChooseFirstBody.style.backgroundColor = "white";
  });

  const containerTitleArms = document.createElement("div");
  containerTitleArms.classList.add("stContainerTitleArms");
  containerForChooseArms.appendChild(containerTitleArms);
  containerTitleArms.innerHTML = "РУКИ";

  const containerFotTypeArms = document.createElement("div");
  containerFotTypeArms.classList.add("stContainerForTypeArms");
  containerForChooseArms.appendChild(containerFotTypeArms);

  const btnForChooseFirstArms = document.createElement("input");
  btnForChooseFirstArms.setAttribute("type", "button");
  btnForChooseFirstArms.classList.add("stBtnForChooseFirstArms");
  containerFotTypeArms.appendChild(btnForChooseFirstArms);
  btnForChooseFirstArms.addEventListener("click", () => {
    leftArmCharacter.style.backgroundImage = "url(image/arm-1.png)";
    rightArmCharacter.style.backgroundImage = "url(image/arm-1.png)";
    btnForChooseFirstArms.style.backgroundColor = "greenyellow";
    btnForChooseSecondArms.style.backgroundColor = "white";
  });

  const btnForChooseSecondArms = document.createElement("input");
  btnForChooseSecondArms.setAttribute("type", "button");
  btnForChooseSecondArms.classList.add("stBtnForChooseSecondArms");
  containerFotTypeArms.appendChild(btnForChooseSecondArms);
  btnForChooseSecondArms.addEventListener("click", () => {
    leftArmCharacter.style.backgroundImage = "url(image/arm-2.png)";
    rightArmCharacter.style.backgroundImage = "url(image/arm-2.png)";
    btnForChooseSecondArms.style.backgroundColor = "greenyellow";
    btnForChooseFirstArms.style.backgroundColor = "white";
  });

  const containerTitleFeet = document.createElement("div");
  containerTitleFeet.classList.add("stVontainerTitleFeet");
  containerForChooseFeet.appendChild(containerTitleFeet);
  containerTitleFeet.innerHTML = "НОГИ";

  const containerFotTypeFeet = document.createElement("div");
  containerFotTypeFeet.classList.add("stContainerForTypeFeet");
  containerForChooseFeet.appendChild(containerFotTypeFeet);

  const btnForChooseFirstFeet = document.createElement("input");
  btnForChooseFirstFeet.setAttribute("type", "button");
  btnForChooseFirstFeet.classList.add("stBtnForChooseFirstFeet");
  containerFotTypeFeet.appendChild(btnForChooseFirstFeet);
  btnForChooseFirstFeet.addEventListener("click", () => {
    leftFoot.style.right = "50px";
    leftFoot.style.top = "-10px";
    leftFoot.style.transform = "rotate(20deg)";
    rightFoot.style.left = "50px";
    rightFoot.style.top = "-10px";
    rightFoot.style.transform = "rotate(-20deg)";
    leftFoot.style.width = "6px";
    btnForChooseFirstFeet.style.backgroundColor = "greenyellow";
    btnForChooseSecondFeet.style.backgroundColor = "white";
  });

  const btnForChooseSecondFeet = document.createElement("input");
  btnForChooseSecondFeet.setAttribute("type", "button");
  btnForChooseSecondFeet.classList.add("stBtnForChooseSecondFeet");
  containerFotTypeFeet.appendChild(btnForChooseSecondFeet);
  btnForChooseSecondFeet.addEventListener("click", () => {
    leftFoot.style.right = "10px";
    leftFoot.style.top = "-2px";
    leftFoot.style.transform = "rotate(0deg)";
    rightFoot.style.left = "10px";
    rightFoot.style.top = "-2px";
    rightFoot.style.transform = "rotate(0deg)";
    leftFoot.style.width = "7px";
    btnForChooseSecondFeet.style.backgroundColor = "greenyellow";
    btnForChooseFirstFeet.style.backgroundColor = "white";
  });
}

export default createPageForChooseCharacter;