import endGame from "./endGame";
import btnExit from "./btnExit";
import btnAgain from "./btnAgain";
import sendResultServer from './sendResultServer';

function removeHealthPlayer(){
    let idHealthPlayer = document.getElementById("idHealthPlayer");
    idHealthPlayer.setAttribute("value",+idHealthPlayer.value - 10);
    
    if(+idHealthPlayer.value == 0){
        let idContainerPlayer = document.getElementById("idContainerPlayer");
        idContainerPlayer.style.top = "300px";
        idContainerPlayer.style.left = "150px";
        idContainerPlayer.style.transform = "rotate(90deg)";
        const idLevel = document.getElementById("idLevel");
        let closeLevel = "Вы проиграли!"+"<br>"+"Пройдено уровней: "+ (idLevel.value-1) + " из 10";
        let idNamePlayer = document.getElementById("idNamePlayer").innerHTML;
        sendResultServer(idNamePlayer,idLevel.value-1);
        endGame(closeLevel,btnExit(),btnAgain());
        let idResponseAnswerUser = document.getElementById("idResponseAnswerUser");
        idResponseAnswerUser.style.display = "none";
    }
}

export default removeHealthPlayer;