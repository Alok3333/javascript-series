const student = [
    {
        name: 'Alok',
        marks: 88
    },
    {
        name: 'Arun',
        marks: 90
    },
    {
        name: 'Krishna',
        marks: 94
    },
    {
        name: 'rahul',
        marks: 55
    },
    {
        name: 'prakash',
        marks: 52
    }
]

// filter() method
const filters = student.filter((detils) => detils.marks < 70 )

console.log(filters);