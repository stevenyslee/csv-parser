const CSV = function() {
  
};
  
CSV.prototype.parse = (str = '', delimiter = ",", quoteChar = "\"") => {
  let csv = [];
  let position = 0;
  let inQuote = false;
  let currentStr = '';
  let currentLine = [];

  while (position < str.length) {
    // Quote
    if (str.startsWith(quoteChar, position)) {
      // inQuote and next is quote
      if (inQuote && str.startsWith(quoteChar, position + quoteChar.length)) {
        currentStr += quoteChar;
        position += quoteChar.length + quoteChar.length;
      // inQuote and next is newline
      } else if (inQuote && str.startsWith('\n', position + quoteChar.length)) {
        currentLine.push(currentStr);
        csv.push(currentLine.slice());
        currentStr = '';
        currentLine = [];
        position += quoteChar.length + quoteChar.length;
        inQuote = false;
      // inQuote and next is delimiter
      } else if (inQuote && str.startsWith(delimiter, position + quoteChar.length)) {
        currentLine.push(currentStr);
        currentStr = '';
        position += quoteChar.length + delimiter.length;
        inQuote = false;
      // Start inQuote
      } else if (!inQuote) {
        inQuote = true;
        position += quoteChar.length;
      // End of string
      } else if (inQuote && str[position + 1] === undefined) {
        inQuote = false;
        position += quoteChar.length;
      } else {
        throw 'Argument error: unclosed quote';
      }
    // Newline
    } else if (str.startsWith('\n', position) && !inQuote) {
      currentLine.push(currentStr);
      csv.push(currentLine.slice());
      currentStr = '';
      currentLine = [];
      position++;
    // Delimiter
    } else if (str.startsWith(delimiter, position) && !inQuote) {
      currentLine.push(currentStr);
      currentStr = '';
      position += delimiter.length;
    // Add Char
    } else {
      currentStr += str[position];
      position++;
    }
  }  
    
  // Unbalanced quote
  if (inQuote) {
    throw 'Argument error: unclosed quote';
  }

  currentLine.push(currentStr);
  csv.push(currentLine.slice());

  return csv;
};

module.exports = CSV;
