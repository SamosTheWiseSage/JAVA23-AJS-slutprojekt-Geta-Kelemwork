function InProgress({taskInProgress, callBackView,setStatus}) { 
    const {assigned, assignment, category, status,id} = taskInProgress


    function handleChangeButton(event) {
        event.preventDefault();
        const url = `https://java23-ajs-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/assignments/${id}.json`
        const bodyContent = {
                 status: 'Done'
        };
          
          console.log(bodyContent)
          
          
          const options = {
            method: "PATCH", 
            body: JSON.stringify(bodyContent), 
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
          };
          
          
          fetch(url, options)
            .then(response => response.json())
            .then(data => callBackView() )
            .catch(error => setStatus('error'));

    }
  
    return ( <div className="In-progress">
        <h1>In Progress</h1>
        <h3>assigned: {assigned}</h3>
        <h3>assignment: {assignment}</h3>
        <h2 className={category.replace(' ', '-')}>category: {category}</h2>
        <h3>status: {status}</h3>
        <button onClick={handleChangeButton}>Done!</button>
        </div> );
}

export default InProgress;