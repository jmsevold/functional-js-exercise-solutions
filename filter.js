function getShortMessages(objList) {
  return objList.map(function(msgObj){
    return msgObj.message;
  }).filter(function(message){
    return message.length < 50;
  })
}
    
module.exports = getShortMessages

// [{message: 'Esse id amet quis eu esse aute officia ipsum.'},
//{message: 'Esse id amet quis eu esse aute officia ipsum.'},
//{message: 'Esse id amet quis eu esse aute officia ipsum.'}]