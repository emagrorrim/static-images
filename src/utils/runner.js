const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const run = execution => {
  app.listen(port, async () => {
    console.log(`Listening on port ${port}!`);
    try {
      execution(() => {
        process.exit(0);
      });
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  });
};

module.exports = run;
