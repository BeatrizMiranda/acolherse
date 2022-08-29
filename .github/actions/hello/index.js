const { getInput, setOutput, setFailed } = require('@actions/core')
const github = require('@actions/github')

try {
  const name = getInput('who-to-greet')
  console.log(`Hello ${name}!`)
  
  const time = new Date()
  setOutput('time', time.toTimeString())
  
  console.log(JSON.stringify(github, null, '\t'))
} catch (error) {
  setFailed(error.message)
}

