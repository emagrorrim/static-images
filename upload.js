const minimist = require('minimist');

const upload = () => {
  const argvMap = minimist(process.argv);
  console.log(argvMap);
};

upload();
