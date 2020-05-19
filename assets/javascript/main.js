let dieRoll = [];
let roll = document.querySelector('#roll');
let die = document.querySelector('#die');
let list = document.getElementById('#dynamicList');
var li = document.createElement("LI");
let total = document.querySelector('#total');
let totalRolls = document.querySelector('#totalRolls');
roll.addEventListener("click", function() {
    let dieValue = die.value;
    for (let i = 0; i < dieValue; i++){
      console.log(dieValue)  
      let math = Math.floor(Math.random() * 6) + 1; 
      dieRoll.push(math);
      total.innerHTML = dieRoll.reduce(function(a,b){
          return a + b
      }, 0)
    }
})

totalRolls.addEventListener("click", function(){
    let dieValue = die.value;
    for (let i = 0; i < dieValue; i++){
      console.log(dieValue)  
      let math = Math.floor(Math.random() * 6) + 1; 
      dieRoll.push(math);
      li.innerHTML = dieRoll.reduce(function(a,b){
          return a,b
      }, 0)
    }
})