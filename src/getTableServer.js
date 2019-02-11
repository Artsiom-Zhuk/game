function getTableServer(parrent,inputValue){
    database
    .ref()
    .once('value')
    .then((e) => {
      const data = e.val();
      for (const key in data.results) {
        const name = data.results[key].name;
        const score = data.results[key].score
        if (~name.indexOf(inputValue)){
            const tdName = document.createElement('td');
            const tdResult = document.createElement('td');
            const tr = document.createElement('tr');
            tdName.innerHTML = name;
            tdResult.innerHTML = score;
            tr.appendChild(tdName);
            tr.appendChild(tdResult);
            parrent.appendChild(tr);
        }
    }});
}

export default getTableServer;