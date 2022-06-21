const core = require('@actions/core');
const github = require('@actions/github');

try {
  const context = github.context
  gitSha = context.sha.substring(0, 4)
  console.log(`git sha: ${gitSha}`)
  core.setOutput('version', gitSha)
} catch (error) {
  core.setFailed(error.message);
}