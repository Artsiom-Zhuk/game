function btnAttackTranslation(){

    const btnAttackTranslation = document.createElement("input");
    btnAttackTranslation.classList.add("btn-attack-translation__input-btn-attack-translation");
    btnAttackTranslation.setAttribute("value", "Перевод слов");
    btnAttackTranslation.setAttribute("type", "button");

    btnAttackTranslation.addEventListener("click", () => {

    });

    return btnAttackTranslation;
}

export default btnAttackTranslation;
