async function getFirebase() {
    const url = `https://java23-ajs-slutprojekt-default-rtdb.europe-west1.firebasedatabase.app/assignments.json`
    const res = await fetch(url)
    // console.log(res)
    const fireBase = await res.json();
    console.log(fireBase)

    const firebaseArray = [];

    for(const key in fireBase){
        console.log(key, fireBase[key])


        firebaseArray.push({...fireBase[key], id: key})
    }
    const firebase2 = {
        done: [],
        todo: [],
        inprogress:[]
    }
    
    firebase2.done = firebaseArray.filter( a => a.status === 'done');
    firebase2.todo = firebaseArray.filter( a => a.status === 'to do');
    firebase2.inprogress = firebaseArray.filter( a => a.status.toLowerCase() === 'in progress');
    
    console.log(firebase2)

    return firebase2;
}
export default getFirebase;