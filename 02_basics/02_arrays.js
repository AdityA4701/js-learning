const marvel_heros = [1 , 2 , 3 , 4 , 5]
const dc_heros = [10, 11, 12, 13]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)


//spread operator
// const all_new = [...marvel_heros, ...dc_heros]
// console.log(all_new)

console.log(Array.isArray("Aditya"))
console.log(Array.from("Aditya"))
console.log(Array.from({name: "Aditya"})) // interesting

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3))