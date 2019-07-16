const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
	if (err) throw err;
	console.log('Folder created');
});

// Creaete and wright to a file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err => {
	if (err) throw err;
	console.log('File created and written to...');

	// Append file
	fs.appendFile(
		path.join(__dirname, '/test', 'hello.txt'),
		', Node is the best!',
		err => {
			if (err) throw err;
			console.log('File updated...');
		}
	);
});

// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
	if (err) throw err;
	console.log('File read', data);
});

// Rename file
fs.rename(
	path.join(__dirname, '/test', 'hello.txt'),
	path.join(__dirname, '/test', 'helloWorld.txt'),
	err => {
		if (err) throw err;
		console.log('File renamed');
	}
);
