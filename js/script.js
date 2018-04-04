/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var calculateDays = function () {
    "use strict";
    var event, dt, year, date, today, oneDay, days;
    
    event = $("event").value;
    dt = $("date").value;
    
    if (event.length === 0 || dt.length === 0 ) {
        $("message").innerHTML = "Please enter both an event name and a date";
        return;
         }
    if (dt.indexOf("/") === -1){
        $("message").innerHTML = "please enter date in MM/DD/YYYY format";
        return;
        
    }
     year = dt.substring(dt.length - 4);
    if (isNaN(year)) {
        $("mesage").innerHTML = "please enter date in MM/DD/YYYY format";
        return;
    }
    
    date = new Date(dt);
    if (date === "Invalid Date") {
         $("mesage").innerHTML = "please enter date in MM/DD/YYYY format";
        return;
    }
    
    today = new Date();
    oneDay = 24 * 60 * 60 * 1000;
    days = (date.getTime() - today.getTime()) / oneDay;
    days = Math.ceil(days);
    
    if(days === 0) {
        $("message").innerHTML = "Today is ".concat(event.toLowerCase()) + "! " + date.toDateString();
    }
     if (days < 0){
        $("message").innerHTML = "event".concat(event.toLowerCase()) + "happened " + Math.abs(days) + " days in the past!";
     }
    if (days > 0){
        $("message").innerHTML = Math.abs(days) + " until ".concat(event.toLowerCase()) + "occurs" + date.toDateString();
     }
};
 window.addEventListener("load", function () {
   "use strict";
    $("countdown").addEventListener("click", calculateDays);
     $("event").focus();
        
   
 });
