let dieRoll = [];
let roll = document.querySelector('#roll');
let die = document.querySelector('#die');
let total = document.querySelector('#total');
let totalRolls = document.querySelector('#totalRolls');
roll.addEventListener("click", function() {
    let dieValue = die.value
    let math = Math.floor(Math.random() * 6) + 1;
    let i = 0
    for (i; i <= dieValue; i++){
        console.log (dieValue)
    }
})

totalRolls.addEventListener("click", function(){

})