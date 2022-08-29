const { getInput, setOutput, setFailed } = require('@actions/core')
const github = require('@actions/github')

try {
  // throw(new Error('error testing'))
  const name = getInput('who-to-greet')
  console.log(`Hello ${name}!`)
  
  const time = new Date()
  setOutput('time', time.toTimeString())
  
  console.log(JSON.stringify(github, null, '\t'))
} catch (error) {
  setFailed(error.message)
}

