// business logic
function Contact(first, last, street, city, state) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Address (street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
}
Contact.prototype.fullInfo = function() {
  return this.firstName + " " + this.lastName + " " + this.street + " " + this.city + " " + this.state;
}

 // user interface logic
 $(document).ready(function() {
   $("form#new-contact").submit(function(event) {
     event.preventDefault();

     var inputtedFirstName = $("input#new-first-name").val();
     var inputtedLastName = $("input#new-last-name").val();
     var inputtedStreet = $("input#new-street").val();
     var inputtedCity = $("input#new-city").val();
     var inputtedState = $("input#new-state").val();

     var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedStreet, inputtedCity, inputtedState);

     $("ul#contacts").append("<li><span class='contact'>" + newContact.fullInfo() + "</span></li>");

     $("input#new-first-name").val("");
     $("input#new-last-name").val("");
     $("input#new-street").val("");
     $("input#new-city").val("");
     $("input#new-state").val("");
   });
 });
