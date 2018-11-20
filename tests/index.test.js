const CSV = require("./../index.js");

const parser = new CSV();
describe('CSV.parse Method', () => {

  test('parses with linebreak', () => {
    expect(parser.parse("a,b,c\nd,e,f")).toEqual([["a", "b", "c"], ["d", "e", "f"]]);
  });

  test('parses with linebreak and nested quotes', () => {
    expect(parser.parse("one,\"two wraps,\nonto \"\"two\"\" lines\",three\n4,,6")).toEqual([["one", "two wraps,\nonto \"two\" lines", "three"], ["4", "", "6"]]);
  });

  test('parses with custom delimiter', () => {
    expect(parser.parse("each\tword\tis\ta\tnew\tcolumn", "\t", null)).toEqual([["each", "word", "is", "a", "new", "column"]]);
  });

  test('ignores delimiters within quotes', () => {
    expect(parser.parse("|the '\t' won't create new columns because it was|\tin\tquotes", "\t", "|")).toEqual([["the '\t' won't create new columns because it was", "in", "quotes"]]);
  });

  test('will print double quotes', () => {
    expect(parser.parse("|alternate|\t|\"quote\"|\n\n|character|\t|hint: |||", "\t", "|")).toEqual([["alternate", "\"quote\""], [""], ["character", "hint: |"]]);
  });

  test('will prase all values to strings', () => {
    expect(parser.parse("name,date_started,has_contact_info\nDmitry,\"2018-01-01\",true")).toEqual([["name", "date_started", "has_contact_info"],["Dmitry", "2018-01-01", "true"]]);
  });

  test("throws error on unclosed quote", () => {
    expect(() => {parser.parse("\"dog\",\"cat\",\"uhoh")}).toThrow('Argument error: unclosed quote');
  });
});
