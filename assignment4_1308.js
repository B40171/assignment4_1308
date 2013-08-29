//Brent Levan
//SDI 1308
//Project 4
//Library

var myLibrary = function() {
    

var checkNumeric = function (numString) {
var changeString = parseInt(numString);

   if (!isNaN(changeString)) {
   return true;
   } else {
   return isNaN
   }

}

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
   

var arrayNum = function (getArray) {
var addTotal = 0;

   for (i = 0, a=5; i < getArray.length; i++) {
   var getNumbers = parseInt(getArray[i]);

      if (!isNaN(getNumbers)) {
      addTotal += getNumbers;
      }
      }
      return addTotal;
   } // End of Number Function

       

return {"checkNumeric": checkNumeric,
        "validateEmail": validateEmail,
        "isAPhoneNumber":isAPhoneNumber,
        "arrayNum": arrayNum
}


}//end myLibrary

var newLib = myLibrary();

console.log("Is this a number?" + newLib.checkNumeric("17"))
console.log("Is this an email address?" + newLib.validateEmail("bnlevan@fullsail.edu"))
console.log("is this a phone number?" + newLib.isAPhoneNumber("123-456-7890"))
console.log ("Add the numbers in this array: " + newLib.arrayNum(["soccer", 7, "photography", 17, "bnlevan@fullsail.edu"]));