
//ps:ALWAYS PUT THE JQUERY SCRIPT TAG BEFORE THE JS FILE IN HTML DUUUHR
//create submit event and a click event on submit
$(document).ready(function() {

$('#submit-btn').on('click',function(){
     $('#entry').submit(updateCity); 
 //recognize the name of city in the input field 
//store city names in a variable 
//update background image to city when variable is entered 
function updateCity(event) {
event.preventDefault();
//recognize value ie city and find image to replace 
var city = $("#city-type").val();
console.log(city);


if (city == "New York City" || city == "NYC" || city == "new york" || city == "nyc" ) {
$('body').removeClass('bodyimage').addClass('nyc');
$("form").trigger("reset");

//can't find solution as to why "New York City" isn't working, the console shows it is being picked up,a 3word string space prob?
}

if (city == "San Francisco" || city == "SF" || city== "SAN FRAN" || city == "Bay Area") {
	$('body').removeClass('bodyimage').addClass('sf');
	$("form").trigger("reset");

}

if (city == "Los Angeles" || city == "LA" || city == "LAX" || city == "L.A." ) {
$('body').removeClass('bodyimage').addClass('la');
$("form").trigger("reset");

}

if (city == "Austin" || city == "ATX" || city =="austin" || city == "AUSTIN" ) {
$('body').removeClass('bodyimage').addClass('austin');
$("form").trigger("reset");

}
	
if (city == "Sydney" || city == "SYD" || city =="sydney" ) {
$('body').removeClass('bodyimage').addClass('sydney');
$("form").trigger("reset");
//SIGH. I don't know how to write the function so that when the user enters sydney, it doesn't 'end' and get stuck here

}

}
});


});

