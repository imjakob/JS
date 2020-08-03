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
