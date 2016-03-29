function countWords(inputWords){
  return inputWords.reduce(function(result, word) {
    result[word] =  result[word] || 0;
    result[word] += 1;
    return result;
  }, {});
}


module.exports = countWords;
