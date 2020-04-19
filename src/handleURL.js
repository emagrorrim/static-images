const downloader = require('image-downloader')
const path = require('path');

const handleURL = async url => {
  if (!url) {
    return;
  }
  const options = {
    url,
    dest: path.resolve(__dirname, '../images'),
  }
  return downloader.image(options)
    .then(({ filename, image }) => {
      console.log('The image is saved to', filename);
    })
    .catch(console.error)
};

module.exports = handleURL;
