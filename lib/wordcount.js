var wordcount = function (sentence) {
  var hashword = {};
  words = sentence.toLowerCase().split(' ').filter(String)
  for(i in words) {
    if (hashword[words[i]] == undefined) {
      hashword[words[i]] = 1
    } else {
      hashword[words[i]] += 1
    }
  }
  return hashword;
}

module.exports = wordcount;
