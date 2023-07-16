// Async Programming
// Callbacks, Promises, Async & Await

const roomName = [
    {name: 'Alok', age: 20},
    {name: 'Arun', age: 21},
    {name: 'Abbas', age: 21}
]

function getData() {
    setTimeout(() => {
        roomName.forEach((value, index) => {
            console.log(value.name);
        })
    },1000)
}

function createData(dataAdd) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            roomName.push(dataAdd);
            let error = false;
            if(!error){
                resolve()
            }
            else {
                reject()
            }
        },2000)
    })
}

async function allData() {
   await createData({name: "Kamlesh", age: 22})
   getData()

}

allData()



