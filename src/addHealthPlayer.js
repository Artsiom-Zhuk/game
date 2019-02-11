function addHealthPlayer(){
    let idHealthPlayer = document.getElementById("idHealthPlayer");
    idHealthPlayer.setAttribute("value",+idHealthPlayer.value + 10);
}

export default addHealthPlayer;