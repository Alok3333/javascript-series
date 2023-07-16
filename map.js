// map() method

const user = [
    {
        fname: 'Alok',
        lname: 'kumar'
    },
    {
        fname: 'Raja',
        lname: 'kumar'
    },
    {
        fname: 'kamlesh',
        lname: 'yadav'
    },
    {
        fname: 'Arun',
        lname: 'gupta'
    }
]

const full = user.map((users) => {
    return `fullName : ${users.fname} ${users.lname}`
});

console.log(full);