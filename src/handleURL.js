const downloader = require('image-downloader')
const path = require('path');
const fetch = require('node-fetch');

const handleURL = async url => {
  if (!url) {
    return;
  }
  const options = {
    url,
    dest: path.resolve(__dirname, '../images/v1'),
  }
  return downloader.image(options)
    .then(({ filename, image }) => {
      console.log('The image is saved to', filename);
    })
};

module.exports = handleURL;
