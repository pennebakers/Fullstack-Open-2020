const { createPortal } = require("react-dom")

//variables
const x = 1
let y = 5

console.log(x,y)
y += 10
console.log(x,y)
y = 'hellocam'
console.log(x, y)

//arrays
const t = [1, -1, 3]
t.push(5)

console.log(t.length)
console.log(t[3])

//calls the function forEach of the items in the array
t.forEach(value => {
    console.log(value)
})

const t2 = t.concat(5)

console.log(t)
console.log(t2)

const t3 = [1, 2, 3]

//maps each value and multiples the value by 2
const m1 = t3.map(value => value * 2)
console.log(m1)

const m2 = t3.map(value => '<li>' + value + '</li>')
console.log(m2)


//Functions
const sums = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sums(1,5)
console.log(result)


const square = p => {
    console.log(p)
    return p * p
}
