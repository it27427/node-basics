/*
  * Some of File System Module are given below:

  * writeFile() => write a file
  * appendFile() => update a file
  * readFile() => read a file
  * rename() => change name of a file
  * unlink() => delete a file
  * exists() => check if file exists
*/

const fs = require('fs');

// writeFile Module
// fs.writeFile(
//   'demo.txt',
//   'Creating a demo file using writeFile Module',
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('File created successfully!');
//     }
//   }
// );

// appendFile Module
// fs.appendFile(
//   'test.txt',
//   '. Appending this file to test.txt using appendFile Module',
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('File append successfully!');
//     }
//   }
// );

// readFile Module
// fs.readFile('reading.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// rename Module
// fs.rename('user.txt', 'demo.txt', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('File rename successfully!');
//   }
// });

// unlink Module => delete a file
// fs.unlink('delete.txt', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('File deleted successfully!');
//   }
// });

// exists Module => check existing file
// fs.exists('demo.txt', (result) => {
//   if (result) {
//     console.log('File found!');
//   } else {
//     console.log('File not found!');
//   }
// });

// SYNCHRONOS MODULE
if (fs.existsSync('./demo.txt')) {
  console.log('File found!');
} else {
  console.log('File not found!');
}
