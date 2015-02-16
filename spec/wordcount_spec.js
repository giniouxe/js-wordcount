var wordcount = require("../lib/wordcount.js")

describe("Test wordcound", function(){
  it("no word", function() {
      expect(wordcount("")).toEqual({});
    });
    it("one word", function() {
      expect(wordcount("salut")).toEqual({"salut": 1});
    });
    it("two words", function() {
      expect(wordcount("salut yannick")).toEqual({"salut": 1,"yannick": 1});
    });
    it("two identical words among three", function() {
      expect(wordcount("salut salut yannick")).toEqual({"salut": 2,"yannick": 1});
    });
    it("with a Cap", function() {
      expect(wordcount("salut Yaf yaf")).toEqual({"salut": 1,"yaf": 2});
    });
});
