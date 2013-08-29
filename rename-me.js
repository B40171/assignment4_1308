//Brent Levan
//SDI 1308
//Project 4
//Library

var myLibrary = function() {
    

//does a string follow a aaa@bbb.ccc pattern like an email address?
function validateEmail(email){
   var index_at= email.indexOf('@')
   if( index_at === -1){
       return false;
   }   

    var name= email.substring(0,index_at);
    var domain=email.substring(index_at+1);
    return domain.indexOf('.') >0;

    }
    
function isAPhoneNumber(entry) {

  if (entry) {
    //parse the value into small subsections
    var openParen = entry.substring(0,1);
    var areaCode = entry.substring(1,4);
    var closeParen = entry.substring(4,5);
    var exchange = entry.substring(5,8);
    var dash = entry.substring(8,9);
    var line = entry.substring(9,13);
    
      if ((openParen != "(")
         || (!isANumber(areaCode,
      "phone number - area code"))
         || (closeParen != ")")
         || (!isANumber(exchange,
      "phone number - exchange"))
         || (dash != "-")
         || (!isANumber(line,
      "phone number - line"))) {
        return true
      } else {
         return false;
      }
      }
   }
    

return {"validateEmail": validateEmail,
        "isAPhoneNumber":isAPhoneNumber
}


}//end myLibrary

var newLib = myLibrary();

console.log("Is this an email address?" + newLib.validateEmail("bnlevan@fullsail.edu"))
console.log("is this a phone number?" + newLib.isAPhoneNumber("123-456-7890"))