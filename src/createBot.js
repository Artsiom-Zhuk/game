import randomNum from './randomNum.js';

function createBot(parent) {

    let randomHeadBot = randomNum(1, 2);
    let randomBodyBot = randomNum(1, 2);
    let randomArmsBot = randomNum(1, 2);
    let randomFeetBot = randomNum(1, 2);

    const containerHeadBot = document.createElement("div");
    containerHeadBot.classList.add("create-bot__container-head-bot");
    containerHeadBot.style.backgroundImage = "url(./image/head-" + randomHeadBot + ".png)";
    parent.appendChild(containerHeadBot);

    const faceBot = document.createElement("div");
    faceBot.classList.add("create-bot__face-bot");
    containerHeadBot.appendChild(faceBot);

    const containerBodyBot = document.createElement("div");
    containerBodyBot.classList.add(
        "create-bot__container-body-bot"
    );
    parent.appendChild(containerBodyBot);

    const containerLeftArmBot = document.createElement("div");
    containerLeftArmBot.classList.add("create-bot__container-left-arm-bot");
    containerBodyBot.appendChild(containerLeftArmBot);

    const leftArmBot = document.createElement("div");
    leftArmBot.classList.add("create-bot__left-arm-bot");
    if (randomBodyBot === 2) {
        leftArmBot.style.left = "66px";
    }
    leftArmBot.style.backgroundImage = "url(./image/arm-" + randomArmsBot + ".png)";
    containerLeftArmBot.appendChild(leftArmBot);

    const bodyBot = document.createElement("div");
    bodyBot.classList.add("create-bot__body-bot");
    bodyBot.style.backgroundImage = "url(./image/body-" + randomBodyBot + ".png)";
    containerBodyBot.appendChild(bodyBot);

    const containerRightArmBot = document.createElement("div");
    containerRightArmBot.classList.add(
        "create-bot__container-right-arm-bot"
    );
    containerBodyBot.appendChild(containerRightArmBot);

    const rightArmBot = document.createElement("div");
    rightArmBot.classList.add("create-bot__right-arm-bot");
    if (randomBodyBot === 2) {
        rightArmBot.style.left = "-8.5px";
    }
    rightArmBot.style.backgroundImage = "url(./image/arm-" + randomArmsBot + ".png)";
    containerRightArmBot.appendChild(rightArmBot);

    const containerFeetBot = document.createElement("div");
    containerFeetBot.classList.add("create-bot__container-feet-bot");
    parent.appendChild(containerFeetBot);

    const containerLeftFootBot = document.createElement("div");
    containerLeftFootBot.classList.add(
        "create-bot__container-left-foot-bot"
    );
    containerFeetBot.appendChild(containerLeftFootBot);

    const leftFootBot = document.createElement("div");
    leftFootBot.classList.add("create-bot__left-foot-bot");
    if (randomFeetBot == 1) {
        leftFootBot.style.right = "10px";
        leftFootBot.style.top = "-2px";
        leftFootBot.style.transform = "rotate(0deg)";
        leftFootBot.style.width = "7px";
    }
    containerLeftFootBot.appendChild(leftFootBot);

    const containerRightFootBot = document.createElement("div");
    containerRightFootBot.classList.add(
        "create-bot__container-right-foot-bot"
    );
    containerFeetBot.appendChild(containerRightFootBot);

    const rightFootBot= document.createElement("div");
    rightFootBot.classList.add("create-bot__right-foot-bot");
    if (randomFeetBot == 1) {
        rightFootBot.style.left = "10px";
        rightFootBot.style.top = "-2px";
        rightFootBot.style.transform = "rotate(0deg)";
    }
    containerRightFootBot.appendChild(rightFootBot);
}

export default createBot;