const minimist = require('minimist');
const handleURL = require('./handleURL');
const handleFile = require('./handleFile');
const uploadImageToGithubRepo = require('./uploadImageToGithubRepo');

const usage = `
usage: upload [parameters]... 

available parameters:
    --url       web image url
    --file      local file path

eg.
    upload --url https://host.com/static/images/image.jpg
    upload --file ~/path-to-your-image/images/image.jpg
`

const upload = async () => {
  try {
    const { file, url } = minimist(process.argv);
    if (!file && !url) {
      console.log(usage);
      console.error('You need to provide at least one between FILE and URL.')
      return;
    }
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
