let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toISOString())

console.log(typeof myDate)

const newDate = new Date()

newDate.toLocaleString('default', {
    weekday:"long"
})
console.log(newDate.toLocaleString())