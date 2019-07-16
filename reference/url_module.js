const url = require('url');

const myUrl = new URL(
	'http://mywebsite.com:8080/hello.html?id=100&status=active'
);

// Get Serialized URL
console.log(myUrl.toString());
console.log(myUrl.href);

// Host (root domain)
console.log(myUrl.host);

// Hostname - does not get port
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query params
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop thru params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
