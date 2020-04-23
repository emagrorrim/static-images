const sh = require('./utils/sh');

const uploadImageToGithubRepo = () => {
  return sh('git add --all;git commit -m "Add basic auto steps"').then(output => {
    console.log(output);
  });
};



module.exports = uploadImageToGithubRepo;
