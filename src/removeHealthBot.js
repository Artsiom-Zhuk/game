import addHealthBot from "./addHealthBot";

function removeHealthBot(){
    let idHealthBot = document.getElementById("idHealthBot");
    idHealthBot.setAttribute("value",+idHealthBot.value - 10);
    if(+idHealthBot.value == 90){
        addHealthBot();
        let idResponseAnswerUser = document.getElementById("idResponseAnswerUser");
        idResponseAnswerUser.style.display = "none";
    }
}

export default removeHealthBot; 