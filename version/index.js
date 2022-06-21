const core = require('@actions/core');
const github = require('@actions/github');

try {
  const context = github.context;
  let gitSourceRef = context.sha.substring(0, 4);
  makeTagVersion(gitSourceRef)
  core.setOutput('version', gitSourceRef);
} catch (error) {
  core.setFailed(error.message);
}

function makeTagVersion(gitSourceRef) {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  return version = `v${year}-${month}-${day}-${gitSourceRef}`
}
