const downloader = require('image-downloader')
const path = require('path');
const uuid = require('uuid').v4;
const sh = require('./utils/sh');

const handleURL = async url => {
  if (!url) {
    return;
  }
  const dir = path.resolve(__dirname, `../images/v2/${new Date().getTime()}`)
  await sh(`mkdir -p ${dir}`);
  const options = {
    url,
    dest: path.resolve(__dirname, `${dir}/${uuid()}.${extractFormat(url)}`),
    extractFilename: false,
  }
  return downloader.image(options)
    .then(({ filename, image }) => {
      console.log('The image is saved to', filename);
    })
};

const extractFormat = url => {
  const components = url.split('.');
  return components[components.length - 1]
}

module.exports = handleURL;
