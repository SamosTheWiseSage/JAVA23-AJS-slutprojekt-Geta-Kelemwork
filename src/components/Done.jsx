function Done({taskDone}) {
  const {assigned, assignment, category, status,id} = taskDone

    function handleButtonDone(event) {
        event.preventDefault();
        const url = `https://java23-ajs-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/assignments/${id}.json`
        const bodyContent = {
                 status: 'Done'
            
     
        };
          
          console.log(bodyContent)
          
          
          const options = {
            method: "PATCH", //Metoden som ska användas
            body: JSON.stringify(bodyContent), //Gör om datan till json
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }//Header-objektet
          };
          
          
          fetch(url, options)
            .then(response => response.json())
            .then(data => console.log(data));
    }
    return ( 
    <div>
      <h1>{assignment}</h1>
      <h1>{assigned}</h1>
      <h1>{category}</h1>
      <h1>{status}</h1>
<button onChange={handleButtonDone}>Done</button>
    </div> );
}

export default Done;