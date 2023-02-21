const { stdin } = require('process')
let readLine = require('readline')

// creating readline interface
const rlInterface = readLine.createInterface(process.stdin, process.stdout)

// ask the user questions
rlInterface.question('Please enter your name: ', (name) => {
    console.log(`Hello ${name}`)

    // close the readline interface
    rlInterface.close()
})



// node readFromLine