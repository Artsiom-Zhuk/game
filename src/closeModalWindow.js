import clearNode from './clearNode';

function closeModalWindow(){
    const btnCloseModalWindow = document.createElement("input");
    btnCloseModalWindow.classList.add("close-modal-window__input-btn-close-modal-window");
    btnCloseModalWindow.setAttribute("value", "Назад");
    btnCloseModalWindow.setAttribute("type", "button");
    btnCloseModalWindow.addEventListener("click", () => {
      const container = document.getElementById('idContainerModalWindow'); 
      const bg = document.getElementById('idBackground'); 
      clearNode(bg); 
      clearNode(container);
    });
    
    return btnCloseModalWindow;
}

export default closeModalWindow;