/*
  * Some of File System Module are given below:

  * writeFile() => write a file
  * readFile() => read a file
  * appendFile() => update a file
  * rename() => change name of a file
  * Unlink() => delete a file
  * Exists() => check if file exists
*/

const fs = require('fs');

// writeFile Module
fs.writeFile(
  'demo.txt',
  'Creating a demo file using writeFile Module',
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('File created successfully!');
    }
  }
);
