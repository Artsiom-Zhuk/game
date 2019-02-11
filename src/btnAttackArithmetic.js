import modalWindow from './modalWindow';
import arithmeticTask from './arithmeticTask';
import clearNode from './clearNode';
import removeHealthBot from './removeHealthBot';
import removeHealthPlayer from './removeHealthPlayer';

function btnAttackArithmetic(){
    
  const btnAttackArithmetic = document.createElement("input");
  btnAttackArithmetic.classList.add("btn-attack-arithmetic__input-btn-attack-arithmetic");
  btnAttackArithmetic.setAttribute("value", "Арифметика");
  btnAttackArithmetic.setAttribute("type", "button");

  btnAttackArithmetic.addEventListener("click", () => {
    const container = document.getElementById('idContainerModalWindow'); 
    const bg = document.getElementById('idBackground'); 
    clearNode(bg); 
    clearNode(container);
    modalWindow(arithmeticTask(removeHealthBot,removeHealthPlayer));
  });
  
  return btnAttackArithmetic;
}

export default btnAttackArithmetic;