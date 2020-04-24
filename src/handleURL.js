const downloader = require('image-downloader')
const path = require('path');
const uuid = require('uuid').v4;
const sh = require('./utils/sh');

const handleURL = async url => {
  if (!url) {
    return;
  }
  const timestamp = new Date().getTime();
  const imageUUID = uuid();
  const imageFormat = extractFormat(url);
  const dir = path.resolve(__dirname, `../images/v2/${timestamp}`);
  const name = `${imageUUID}.${imageFormat}`;
  await sh(`mkdir -p ${dir}`);
  const options = {
    url,
    dest: path.resolve(__dirname, `${dir}/${name}`),
    extractFilename: false,
  }
  return downloader.image(options)
    .then(({ filename, image }) => {
      console.log('The image is saved to', filename);
      console.log('The image is at ', `https://raw.githubusercontent.com/emagrorrim/static-images/master/images/v2/${timestamp}/${name}`);
    })
};

const extractFormat = url => {
  const components = url.split('.');
  return components[components.length - 1]
}

module.exports = handleURL;
