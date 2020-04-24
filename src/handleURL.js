const downloader = require('image-downloader')
const path = require('path');
const uuid = require('uuid').v5;

const handleURL = async url => {
  if (!url) {
    return;
  }
  const options = {
    url,
    dest: path.resolve(__dirname, `../images/v2/${new Date().getTime()}/${uuid()}`),
  }
  return downloader.image(options)
    .then(({ filename, image }) => {
      console.log('The image is saved to', filename);
    })
};

module.exports = handleURL;
