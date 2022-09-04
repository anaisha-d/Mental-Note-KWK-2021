// animation for fonts
document.documentElement.style.setProperty('--animate-duration', '2s');

// drop-down text
function changeVisibility(){
  document.getElementById("helpfulWebsites").style.display="block";
}



    
var button = $('.randomGenerator');
console.log(button.val())
var tipContainer = $('.tip');


button.on("click", randomGenerator);

 
//Function to be run when button is clicked  
function randomGenerator() {
  console.log("you clicked the button")
  //Array with random messages
   var tip = ["best tempuratures for sleep is between 60 and 67 degrees!", "creativity and overall well-being are linked", "showing love leads to a healthier, happier life", "laughing can reduce anxiety!", "yawning may help with alertness and cooling down your brain!", "warm baths with some epsom salt may reduce stress", "spending time with animals increases your oxytocin level, which stimulates happiness feelings!", "according to research, forgiveness is linked to better mental health and satisfaction", "smiling can lower your heart rate and be calming", "try something outside of your comfort zone, to boost adventure and excitement within your life!"];

   console.log(tip.length);
  
  //Create a random number that is between 0 and the number of items in the array
   
    
    var random = Math.random() * tip.length
    
    console.log(random)
  
    
  //Use Math.floor to make that random number a whole number and assign it to the variable named index
    var index = Math.floor(random)
    console.log(index)

    tipContainer.append(`<p> ${tip[index]}!</p>`) 

  //append a message the includes what the user said was their sign AND one of the messages and pictures from the two arrays. 

}



