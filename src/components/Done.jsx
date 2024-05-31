function Done({taskDone}) {
  const {assigned, assignment, category, status,id} = taskDone

    function handleButtonDone(event) {
        event.preventDefault();
        const url = `https://java23-ajs-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/assignments/${id}.json`
          const options = {
            method: "DELETE", //Metoden som ska användas
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
          };
          
          
          fetch(url, options)
            .then(response => response.json())
            .then(data => console.log(data));
    }
    return ( 
    <div className="done"> 
      <h1>Done</h1>
      <h3>assigned: {assigned}</h3>
      <h3>assignment: {assignment}</h3>
      <h2 className={category.replace(' ', '-')}>category: {category}</h2>
      <h3>status: {status}</h3>
<button onClick={handleButtonDone}>Remove X</button>
    </div> );
}

export default Done;