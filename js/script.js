// Business (or back-end) logic:
function account(firstname,initdep){
    this.firstname=firstname;
    this.initdep=initdep;
};


// var deposit = function(initdep, deposit) {
//     return initdep + deposit;
//   };
//   var withdraw = function(initdep, deposit) {
//     return initdep - deposit;
//   };






  // User interface (or front-end) logic:
$(document).ready(function() {
    $("form#account").submit(function(event) {
      event.preventDefault();
      var deposit = parseInt($("#add1").val());
      var number2 = parseInt($("#add2").val());
      var balance = add(initdep, deposit);
      $("#output").text(balance);
    });
  });
  