function repeat(operation, num) {
  var i = 0;
  while(i < num){
    operation();
    i += 1;
  }
}
    

module.exports = repeat