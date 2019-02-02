import randomNum from './randomNum.js';


function createCharacterComputer(parent) {

    let randomHead = randomNum(1, 2);
    let randomBody = randomNum(1, 2);
    let randomArms = randomNum(1, 2);
    let randomFeet = randomNum(1, 2);

    const containerForHeadCharacterComp = document.createElement("div");
    containerForHeadCharacterComp.classList.add("stHeadCharacterComp");
    containerForHeadCharacterComp.style.backgroundImage = "url(./image/head-" + randomHead + ".png)";
    parent.appendChild(containerForHeadCharacterComp);

    const faceCharacterComp = document.createElement("div");
    faceCharacterComp.classList.add("stFaceCharacterComp");
    containerForHeadCharacterComp.appendChild(faceCharacterComp);

    const containerForBodyArmsCharacterComp = document.createElement("div");
    containerForBodyArmsCharacterComp.classList.add(
        "stContainerForBodyArmsCharacterComp"
    );
    parent.appendChild(containerForBodyArmsCharacterComp);

    const containerForLeftArmCharacterComp = document.createElement("div");
    containerForLeftArmCharacterComp.classList.add("stContainerForLeftArmCharacterComp");
    containerForBodyArmsCharacterComp.appendChild(containerForLeftArmCharacterComp);

    const leftArmCharacterComp = document.createElement("div");
    leftArmCharacterComp.classList.add("stLeftArmCharacterComp");
    if (randomBody === 2) {
        leftArmCharacterComp.style.left = "66px"; ///
    }
    leftArmCharacterComp.style.backgroundImage = "url(./image/arm-" + randomArms + ".png)";
    containerForLeftArmCharacterComp.appendChild(leftArmCharacterComp);

    const containerForBodyCharacterComp = document.createElement("div");
    containerForBodyCharacterComp.classList.add("stContainerForBodyCharacterComp");
    containerForBodyCharacterComp.style.backgroundImage = "url(./image/body-" + randomBody + ".png)";
    containerForBodyArmsCharacterComp.appendChild(containerForBodyCharacterComp);

    const containerForRightArmCharacterComp = document.createElement("div");
    containerForRightArmCharacterComp.classList.add(
        "stContainerForRightArmCharacterComp"
    );
    containerForBodyArmsCharacterComp.appendChild(containerForRightArmCharacterComp);

    const rightArmCharacterComp = document.createElement("div");
    rightArmCharacterComp.classList.add("stRightArmCharacterComp");
    if (randomBody === 2) {
        rightArmCharacterComp.style.left = "-8.5px";
    }
    rightArmCharacterComp.style.backgroundImage = "url(./image/arm-" + randomArms + ".png)";
    containerForRightArmCharacterComp.appendChild(rightArmCharacterComp);

    const containerForFeetCharacterComp = document.createElement("div");
    containerForFeetCharacterComp.classList.add("stContainerForFeetCharacterComp");
    parent.appendChild(containerForFeetCharacterComp);

    const containerForLeftFootCharacterComp = document.createElement("div");
    containerForLeftFootCharacterComp.classList.add(
        "stContainerForLeftFootCharacterComp"
    );
    containerForFeetCharacterComp.appendChild(containerForLeftFootCharacterComp);

    const leftFootComp = document.createElement("div");
    leftFootComp.classList.add("stLeftFootComp");
    if (randomFeet == 1) {
        leftFootComp.style.right = "10px";
        leftFootComp.style.top = "-2px";
        leftFootComp.style.transform = "rotate(0deg)";
        leftFootComp.style.width = "7px";

    }
    containerForLeftFootCharacterComp.appendChild(leftFootComp);

    const containerForRightFootCharacterComp = document.createElement("div");
    containerForRightFootCharacterComp.classList.add(
        "stContainerForRightFootCharacterComp"
    );
    containerForFeetCharacterComp.appendChild(containerForRightFootCharacterComp);

    const rightFootComp = document.createElement("div");
    rightFootComp.classList.add("stRightFootComp");
    if (randomFeet == 1) {
        rightFootComp.style.left = "10px";
        rightFootComp.style.top = "-2px";
        rightFootComp.style.transform = "rotate(0deg)";
    }
    containerForRightFootCharacterComp.appendChild(rightFootComp);
}

export default createCharacterComputer;