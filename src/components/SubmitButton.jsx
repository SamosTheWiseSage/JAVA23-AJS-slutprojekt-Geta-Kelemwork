
function SubmitButton({setSubmitButton, callBackView}) {
    let newAssignment = '';
    let option = 'ux'

    function handleChange(event){
        newAssignment = event.target.value;
    }
    function handleOptionOne(event) {
        option = event.target.value
        console.log(option)
    }

    function handleSubmit(event){
        event.preventDefault();
        event.target.reset();
        // console.log(newAssignment)

        setSubmitButton( current => {
            const url = 'https://java23-ajs-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/assignments.json'
            const bodyContent = {
           assigned: '', 
           assignment: newAssignment,
           category: option,
           status: 'to do'

            };
              
              console.log(bodyContent)
              //Header-objektet
              const header = {
              //Egenskapsnamnet Content-type behöver citattecken eftersom det innehåller ett bindestreck.
                  "Content-type": "application/json; charset=UTF-8"
              }
              
              
              const options = {
                method: "POST", //Metoden som ska användas
                body: JSON.stringify(bodyContent), //Gör om datan till json
                headers: header //Header-objektet
              };
              
              
              fetch(url, options)
                .then(response => response.json())
                .then(data => callBackView());
        })
    }
    return ( <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Task" required onChange={handleChange}/>
        <select name="" id="" onChange={handleOptionOne}>
            <option value='ux'>ux</option>
            <option value='dev backend'>dev backend</option>
            <option value='dev frontend'>dev frontend</option>
            </select>
        
        <button>add Task</button>
    </form> );
}

export default  SubmitButton;