function sendResultServer(name,score){
  let key = database
  .ref()
  .child('results')
  .push().key;
     database.ref(`results/${key}/name`).set(name);
     database.ref(`results/${key}/score`).set(score);
}

export default sendResultServer;