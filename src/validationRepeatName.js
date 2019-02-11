async function validationRepeatName(inputName1){
    const result = await database
    .ref()
    .once('value')
    .then((e) => {
        const data = e.val();
        for (const key in data.results) {
            const name = data.results[key].name;
            if (~name.indexOf(inputName1)){
                return true;
            } 
        }
        return false
    });
    return result;
}

export default validationRepeatName;

