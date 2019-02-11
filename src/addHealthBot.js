import endGame from "./endGame";
import btnExit from "./btnExit";
import btnAgain from "./btnAgain";
import sendResultServer from "./sendResultServer"

let key = 20;

function addHealthBot(){
    
    let idLevel = document.getElementById("idLevel");
    idHealthBot.setAttribute("value",100+key);
  
    if(+idLevel.value%2==0){
        key+=20;
    }

    let helper=+idLevel.value+1;
    idLevel.setAttribute("value",helper);

    if(+helper === 11){
        let idContainerBot = document.getElementById("idContainerBot");
        idContainerBot.style.top = "300px";
        idContainerBot.style.right = "150px";
        idContainerBot.style.transform = "rotate(-90deg)";
        let idNamePlayer = document.getElementById("idNamePlayer").innerHTML;
        let closeLevel = "Позравляю, "+ idNamePlayer + "!" + "<br>"+"Пройдено уровней: 10 из 10!"+"<br>"+"Игра окончена :)";
        sendResultServer(idNamePlayer,"10");
        idHealthBot.setAttribute("value","0");
        idLevel.setAttribute("value","10");
        endGame(closeLevel,btnExit(),btnAgain());
    } 
}

export default addHealthBot;