// Point value to the same memoryzone

const functionA = () => {
    const demoArr = []

    functionB(demoArr)

    return demoArr
}

const functionB = (arr = []) => {
    arr.push('Bonjour', 'Hello', 'Hallo')
}

console.log(functionA())

// Recursion Function
/**
 * Call Itself
 */

const countDown = (arr = 0) => {
    if (arr < 1) {
        return []
    } else {
        return [arr, ...countDown(arr - 1)]
    }
}

console.log(countDown(100))

// Set Method

const demoSetMethod1 = () => [2, 2, 3, 4, 1, 1, 4]

console.log(demoSetMethod1())
console.log(new Set(demoSetMethod1()))

// Old School

function nPlus1Params() {
    return [...arguments]

    // Does not work with arrow function :'(
}

console.log(
    nPlus1Params(1, 2, 'Mars', 'Space Race', () => {}, {}, [], null, undefined)
)
