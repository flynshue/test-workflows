const core = require('@actions/core');
const github = require('@actions/github');
const { v4: uuidv4 } = require('uuid');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
  const gitSha = github.context.payload["sha"]
  console.log("git sha:" + gitSha)
} catch (error) {
  core.setFailed(error.message);
}

// const tagVersion = uuidv4().substring(0,4);
// console.log(tagVersion);