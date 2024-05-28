function ToDo({task}) {
    let newStatus = ''
    console.log(task)
    const {assigned, assignment, category, status, id} = task
    console.log(assigned,assignment,category,status)
 
    function handleButtonChange(event) {
       newStatus = event.target.value 
    }
    function handleButtonSubmit(event) {
        event.preventDefault();
        const url = `https://java23-ajs-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/assignments/${id}.json`
        const bodyContent = {
                assigned: newStatus,
                 status: 'In Progress'
            
     
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
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }
    return (
         <div>
            <h1>to Do</h1>
            <h3>assigned:{assigned}</h3>
            <h3>assignment:{assignment}</h3>
            <h2 className={category.replace(' ', '-')}>category:{category}</h2>
            <h3>status:{status}</h3> 
            <form onSubmit={handleButtonSubmit}>
            <input type="text" placeholder="" required onChange={handleButtonChange}></input> 
            <button>Assing{">>"}</button>
      </form></div> );
}

export default ToDo;