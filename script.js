
/*
Had some issues traversing the DOM to get elements. The variables above where I try to target a specific 
div returned undefined or null. What I have in this solution is a general outline of how I'd approach this
assignment if I had those issues resolved. 
*/

window.addEventListener('load', function() {
   const form = document.querySelector("missionTarget")
   const pilotName = document.querySelector('input[name=pilotName]')
   const coPilotName = document.querySelector('input[name=copilotName]')
   const fuelLevel = document.querySelector('input[name=fuelLevel')
   const cargoMass = document.querySelector('input[name=cargoMass')
  
   const button = document.getElementById('formSubmit')
  
   button.addEventListener('click', function (event) {
   if(pilotName && coPilotName && fuelLevel && cargoMass) {
   if (isNan(pilotName) && isNan(coPilotName)) {
   // If pilot Name and copilot name are not a number continue. If not send alert. 
   } else {
   event.preventDefault()
  
   alert("Fields need to be text for pilot name and copilot name and a number for fuel level and cargo mass.")
  
   };
   if (!isNan(fuelLevel)&& !isNan(cargoMass)){
   // If fuelLevel and cargoMass are a number continue if not send alert. 
   } else {
   event.preventDefault()
  
   alert("Fields need to be text for pilot name and copilot name and a number for fuel level and cargo mass.")
   };
   } else {
   event.preventDefault()
   alert("All fields must be filled before submit.")
   };
   });
   
  });