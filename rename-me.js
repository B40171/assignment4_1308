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

    var name= email.substr(0,index_at);
    var domain=email.substr(index_at+1);
    return domain.indexOf('.') >0;

    }

return {"validateEmail": validateEmail
}



}//end myLibrary

var newLib = myLibrary();

console.log("Is this an email address?" + newLib.validateEmail("bnlevan@fullsail.edu"))