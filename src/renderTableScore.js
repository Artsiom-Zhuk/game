import getTableServer from "./getTableServer";
import clearNode from "./clearNode";
import startPage from "./createStartPage";

function renderTableScore(){

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("render-table-score__div-main-container");
    document.body.appendChild(mainContainer);

    const header = document.createElement("div");
    header.setAttribute("id","idHeader");
    header.classList.add("render-table-score__div-header");
    mainContainer.appendChild(header);
    header.innerHTML = "ТАБЛИЦА РЕЗУЛЬТАТОВ";

    const containerBtn = document.createElement("div");
    containerBtn.classList.add("render-table-score__div-container-btn");
    header.appendChild(containerBtn);

    const btnTop = document.createElement("input");
    btnTop.setAttribute("type","button");
    btnTop.setAttribute("value","Наверх");
    btnTop.classList.add("render-table-score__input-btn-top");
    containerBtn.appendChild(btnTop);
    btnTop.addEventListener("click", () => {
        location.href="#idHeader";
    });

    const btnBack = document.createElement("input");
    btnBack.setAttribute("type","button");
    btnBack.setAttribute("value","Назад");
    btnBack.classList.add("render-table-score__input-btn-back");
    containerBtn.appendChild(btnBack);
    btnBack.addEventListener("click", () => {
        clearNode(mainContainer);
        startPage();
    });

    const contanierSearch = document.createElement("div");
    contanierSearch.classList.add("render-table-score__div-contanier-search");
    mainContainer.appendChild(contanierSearch);

    const inputSearch = document.createElement("input");
    inputSearch.setAttribute("placeholder", "Быстрый поиск по имени");
    inputSearch.setAttribute("maxlength", "10");
    inputSearch.classList.add("render-table-score__input-input-search");
    contanierSearch.appendChild(inputSearch);

    const btnClear = document.createElement("input");
    btnClear.setAttribute("type", "button");
    btnClear.setAttribute("value", "Очистить поле");
    btnClear.classList.add("render-table-score__input-btn-clear");
    contanierSearch.appendChild(btnClear);
    btnClear.addEventListener("click", () => {
        inputSearchText = "";
        inputSearch.value = "";
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
          }
        getTableServer(tbody,inputSearchText);
    });

    const headerTable = document.createElement("div");
    headerTable.classList.add("render-table-score__div-header-table");
    mainContainer.appendChild(headerTable);

    const titleName = document.createElement("div");
    titleName.classList.add("render-table-score__div-title-name");
    headerTable.appendChild(titleName);
    titleName.innerHTML = "Имя"

    const titleScore = document.createElement("div");
    titleScore.classList.add("render-table-score__div-title-score");
    headerTable.appendChild(titleScore);
    titleScore.innerHTML = "Кол-во пройденных уровней"

    const tableScore = document.createElement("table");
    tableScore.setAttribute("id","idTableScore");
    tableScore.classList.add("render-table-score__table-table-score");
    mainContainer.appendChild(tableScore);
    
    const tbody = document.createElement("tbody");
    tbody.setAttribute("id","idTbody");
    tbody.classList.add("render-table-score__tbody-tbody");
    tableScore.appendChild(tbody);
    
    let inputSearchText = "";
    getTableServer(tbody,inputSearchText);
      
    inputSearch.addEventListener('input', (event) => {
        inputSearchText = event.target.value;
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
          }
          getTableServer(tbody,inputSearchText);
    });

    return mainContainer;
}

export default renderTableScore;
