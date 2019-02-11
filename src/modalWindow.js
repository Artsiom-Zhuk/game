function modalWindow(child) {

    const mainConatiner = document.createElement("div");
    mainConatiner.setAttribute("id", "idContainerModalWindow");
    mainConatiner.classList.add("modal-window__div-main-conatiner")
    document.body.appendChild(mainConatiner);

    var background = document.createElement('div');
    background.setAttribute("id","idBackground");
    background.classList.add("modal-window__div-background")
    document.body.appendChild(background);

    const container = document.getElementById('idContainerModalWindow');
    container.style.display = 'block';

    mainConatiner.appendChild(child);
}

export default modalWindow;
