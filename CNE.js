var eventArray= [];
function results2() {
  var date = "Date: " + document.getElementById('date').value;
  var eventName = "Activity Name: " + document.getElementById('eventName').value;
  var description = "Description: " + document.getElementById('description').value;
  var event = {dateField : date, eventField :eventName, eventDescription: description};
  var arrayLength = eventArray.length;
  if(arrayLength == 0){
    eventArray = [event];
  }else{
    eventArray[arrayLength] = event;
  }
  var results = "";

  for(var i=0; i <eventArray.length;i++){
    results += eventArray[i].dateField + "<br>" + eventArray[i].eventField + "<br>" + eventArray[i].eventDescription + "<br><br>";
  }

  document.getElementById("entry").innerHTML = results;
  document.getElementById('date').value='';
  document.getElementById('eventName').value='';
  document.getElementById('description').value='';
}
var tripArray=[];
function results1() {
  var tripName = "Trip Name: " + document.getElementById('tripName').value;
  var tripDate = "Trip Date: " + document.getElementById('tripDate').value;
  var location = "Location: " + document.getElementById('location').value;
  var departure = "Time of Departure: " + document.getElementById('departure').value;
  var arrival = "Time of Arrival: " + document.getElementById('arrival').value;
  var trip = {tripNField : tripName, tripDField :tripDate, locationField: location, departureField: departure, arrivalField: arrival};
  var arrayLength = tripArray.length;
  if(arrayLength == 0){
    tripArray = [trip];
  }else{
    tripArray[arrayLength] = trip;
  }
  var results = "";

  for(var i=0; i <tripArray.length;i++){
    results += tripArray[i].tripNField + "<br>" + tripArray[i].tripDField + "<br>" + tripArray[i].locationField + "<br>" + tripArray[i].departureField + "<br>" + tripArray[i].arrivalField+ "<br><br>";
  }

  document.getElementById("tripEntry").innerHTML = results;
  document.getElementById('tripName').value='';
  document.getElementById('tripDate').value='';
  document.getElementById('location').value='';
  document.getElementById('departure').value='';
  document.getElementById('arrival').value='';
}
