let dieRoll = [];
let roll = document.querySelector('#roll');
let die = document.querySelector('#die');
let total = document.querySelector('#total');
let totalRolls = document.querySelector('#totalRolls');
let listItem = document.createElement("li");
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
    let diceValue = die.value
    for (let i = 0; i < diceValue; i++){
        console.log(diceValue)  
        let maths = Math.floor(Math.random() * 6) + 1; 
        let str = '<ol>'
        dieRoll.push(maths);
        listItem.innerHTML = dieRoll.forEach(function(a,b){
            str += '<li>' + a,b + '<li>';
        })
    }
})