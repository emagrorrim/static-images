const sh = require('./utils/sh');

const uploadImageToGithubRepo = () => {
  return sh('git add --all;git commit -m "Add basic auto steps"').then(output => {
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
