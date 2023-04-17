function scuberGreetingForFeet(ride){
  // Write your code here!
  let result;
  if(ride<=400){
    result = "This one is on me!";
  }
  if(ride>=400 && ride<=2000){
    result = "That will be twenty bucks.";
  }
  if(ride>2000){
    result = "I will gladly take your thirty bucks.";
  }
  if(ride>2500 ){
    result="No can do.";
  }
  return result; 
}

function ternaryCheckCity(city){
  // Write your code here!
  let result; 
  if(city == 'NYC'){
    result = "Ok, sounds good.";
  }
  if(city != 'NYC'){
    result = "No go.";
  }
  return result;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let result;
  
  if(tip == 'not as generous'){
    result = 'Thank you.';
  }
  else if(tip == 'generous'){
    result = 'Thank you so much.';
  }
  else{
    result = 'Bye.';
  }
  return result; 
}