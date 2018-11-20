CSV Parser for Node.js
========================================

Install
-------

CSV Parser can be installed by downloading [index.js](https://github.com/stevenyslee/csv-parser) to your project source.

    $ npm install


## Get Started

To use the module, require the index.js file to your project and create a new instance

    const CSV = require("./index.js");
    const parser = new CSV();

## Usage

```js
/**
 * Parse CSV file contents
 * @param {string} [contents=] - The contents of the CSV file
 * @param {string} [delimiter=,] - The CSV file delimiter
 * @param {string} [quote=\"] - The CSV file quotes
 */
CSV.prototype.parse = function(contents, delimiter, quote) {
    // ...
};

```


### Example 

```js
const CSV = require("./index.js");
const parser = new CSV();

let result = parser.parse("a,b,c\nd,e,f");

console.log(result); // [["a", "b", "c"], ["d", "e", "f"]]

```

## Testing

CSV parser uses Jest Test Suite. Tests can be added at [index.test.js](https://github.com/stevenyslee/csv-parser/tree/master/tests) and run using:

    $ npm run test

![alt text](https://github.com/stevenyslee/csv-parser/blob/master/tests/img.png)

