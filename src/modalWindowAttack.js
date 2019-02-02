function modalWindowAttack() {

    const containerModalWindow = document.createElement("div");
    containerModalWindow.setAttribute("id", "idContainerModalWindow");
    containerModalWindow.classList.add("stContainerModalWindow")
    document.body.appendChild(containerModalWindow);

    const modalWindow = document.createElement("form");
    modalWindow.setAttribute("id", "idModalWindow");
    modalWindow.classList.add("stModalWindow");
    containerModalWindow.appendChild(modalWindow);

    const containerChooseTask = document.createElement("div");
    containerChooseTask.classList.add("containerChooseTask");
    modalWindow.appendChild(containerChooseTask);

    const btnTaskArithmetic = document.createElement("input");
    btnTaskArithmetic.classList.add("stBtnTaskArithmetic");
    btnTaskArithmetic.setAttribute("value", "1");
    btnTaskArithmetic.setAttribute("type", "button");
    btnTaskArithmetic.setAttribute("name", "с1");
    containerChooseTask.appendChild(btnTaskArithmetic);

    const btnTaskTranslate = document.createElement("input");
    btnTaskTranslate.classList.add("stBtnTaskTranslate");
    btnTaskTranslate.setAttribute("value", "2");
    btnTaskTranslate.setAttribute("type", "button");
    btnTaskTranslate.setAttribute("name", "с2");
    containerChooseTask.appendChild(btnTaskTranslate);

    const btnTaskCarModel = document.createElement("input");
    btnTaskCarModel.classList.add("stBtnTaskCarModel");
    btnTaskCarModel.setAttribute("value", "отмена");
    btnTaskCarModel.setAttribute("type", "button");
    btnTaskCarModel.setAttribute("name", "с3");
    containerChooseTask.appendChild(btnTaskCarModel);

    function backgroundDarkening() {
        var coverDiv = document.createElement('div');
        coverDiv.setAttribute("id","cover-div")
        document.body.appendChild(coverDiv);
    }

    function showModalWindow() {
        backgroundDarkening();
        const container = document.getElementById('idContainerModalWindow');
        container.style.display = 'block';
    }

    showModalWindow();
}

export default modalWindowAttack;

// const form = document.getElementById('idModalWindow');
// function hideCover() {
//     document.body.removeChild(document.getElementById('cover-div'));
// }
// function complete(value) {
//     hideCover();
//     container.style.display = 'none';
//     document.onkeydown = null;
//     callback(value);
// }
// form.elements.с1.onclick = function () {
//     complete(null);
// };