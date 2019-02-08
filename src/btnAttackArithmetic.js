function btnAttackArithmetic(){
    
    const btnAttackArithmetic = document.createElement("input");
    btnAttackArithmetic.classList.add("btn-attack-arithmetic__input-btn-attack-arithmetic");
    btnAttackArithmetic.setAttribute("value", "Арифметика");
    btnAttackArithmetic.setAttribute("type", "button");

    btnAttackArithmetic.addEventListener("click", () => {

    });
    

    return btnAttackArithmetic;
}

export default btnAttackArithmetic;