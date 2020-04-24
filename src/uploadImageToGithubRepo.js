const path = require('path');
const sh = require('./utils/sh');

const command = `
  git add --all; \
  git commit -m "Add image"; \
  git push origin $(sh ${path.resolve(__dirname, './scripts/git_current_branch.sh')});
`

const uploadImageToGithubRepo = () => {
  return sh(command).then(output => {
    if (output && output.stdout) {
      console.log(output.stdout);
    }
    if (output && output.stderr) {
      console.error(output.stderr);
    }
    if (!output.stderr && !output.stdout) {
      console.log(output);
    }
  });
};

module.exports = uploadImageToGithubRepo;
