const CSV = require("./index.js");

const parser = new CSV();

console.log(parser.parse("a,b,c\nd,e,f"));
console.log([["a", "b", "c"], ["d", "e", "f"]]);

console.log(parser.parse("one,\"two wraps,\nonto \"\"two\"\" lines\",three\n4,,6"));
console.log([["one", "two wraps,\nonto \"two\" lines", "three"], ["4", "", "6"]]);

console.log(parser.parse("each\tword\tis\ta\tnew\tcolumn", "\t", null));
console.log([["each", "word", "is", "a", "new", "column"]]);

console.log(parser.parse("|the '\t' won't create new columns because it was|\tin\tquotes", "\t", "|"));
console.log([["the '\t' won't create new columns because it was", "in", "quotes"]]);

console.log(parser.parse("|alternate|\t|\"quote\"|\n\n|character|\t|hint: |||", "\t", "|"));
console.log([["alternate", "\"quote\""], [""], ["character", "hint: |"]]);

console.log(parser.parse("name, date_started, has_contact_info\nDmitry, \"2018-01-01\", true"));
console.log([["name", "date_started", "has_contact_info"],["Dmitry", "2018-01-01", "true"]]);

console.log(parser.parse("\"dog\",\"cat\",\"uhoh"));
