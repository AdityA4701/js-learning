const myArr = [0, 1, 2, 3 , 4, 5]

// console.log(myArr[3])

myArr.push(8)
myArr.pop()

myArr.unshift(3)
myArr.shift()

// console.log(myArr.includes(2))

// const newArr = myArr.join()


// console.log(myArr)
// console.log(newArr)


// slice , splice

console.log("A " ,myArr)
console.log(myArr.slice(1,3))
console.log("B " , myArr)
console.log(myArr.splice(1,3))
console.log("C ", myArr)
