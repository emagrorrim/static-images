const minimist = require('minimist');
const handleURL = require('./handleURL');
const handleFile = require('./handleFile');
const uploadImageToGithubRepo = require('./uploadImageToGithubRepo');

const upload = async () => {
  try {
    const { file, url } = minimist(process.argv);
    await handleURL(url);
    await handleFile(file);
    await uploadImageToGithubRepo();

    console.log('Images Uploaded.');
    process.exit(0);
  } catch(error) {
    console.log(error);
    process.exit(1);
  }
};

upload();
