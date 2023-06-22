// Class to create Alien and USS Assembly Objects
class Ship {
    constructor(hull, firepower, accuracy, name){
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    this.name = name;
    }
    attack(accuracy, target){
        let chance = Math.random()
        if (chance < accuracy) {
            target.hull -= this.firepower;
            console.log("It's a hit! Hit for " + `${this.firepower}` + " damage. Target has " + target.hull + " remaining hull reinforcements")
            }else {
                 console.log("Attack missed, prepare for imminent damage")
         }
      }
    }

const main = document.querySelector(".main")
const title = document.querySelector("#title")

// Trying to increment round number with text to clean up code
const roundDisplay = document.querySelector("#roundDisplay")
const roundNum = document.querySelector("#roundNumber")
roundDisplay.innerText = "Round"
roundNum.innerText = 0;

// Creating continue button to proceed to next round
const proceed = document.querySelector("#proceed")
proceed.onclick = function(){
    roundNum.innerText ++
    next.style.display = "inline";
    proceed.style.display = "none";
    attack.style.display = "inline";
    title.innerText = "🛸🛸Alien Invasion🛸🛸"
    // Reset Alien HP or generate new Alien
}
proceed.style.display = "none";

// Round start false prior to pressing start
let roundStart = false;

// Attack button logic
const attack = document.createElement("button")
attack.innerText = "Attack"
attack.style.display = "none"
attack.onclick = function(){
    if (alien.hull > 0){
    ussa.attack(0.7, alien)
    // Implement function that checks for target.hull = 0, then if statement is met call the else if on line 50;
    console.log(alien.hull + " Alien HP");
    alienStatData.innerText = alien.hull;
        }else if(alien.hull <= 0) { // Fix so that once 0 is reached, "Dead" is shown without having to call function again line 47
        console.log("Dead Alien")
        alienStatData.innerText = "Dead"
        title.innerText = "💥💥Alien Dead 💥💥"
        attack.style.display = "none"
        proceed.style.display = "inline"
        next.style.display = "none";

    }
}
main.append(attack)

// Start button logic
const start = document.querySelector("#start") 
start.onclick = function(){
    roundStart = true;
    roundNum.innerText = 1;
    start.style.display = "none";
    next.style.display = "inline";
    attack.style.display = "inline";
    title.innerText = "🛸🛸Alien Invasion🛸🛸"
    gameRoundStats();
    console.log("Let the invasion begin!")
}

// Reset button logic
const reset = document.querySelector("#reset")
reset.onclick = function(){  // Must revert alien hull to original value
    roundStart = false;
    roundNum.innerText = 0;
    start.style.display = "inline";
    next.style.display = "none";
    attack.style.display = "none";
    statDisplay.removeChild(alienStatDisplay);
    ussa.hull = 20;
    title.innerText = "🍔 Save the Universe! 🍔"
    console.log("Game Reset")
}

// Skip Round logic
const next = document.querySelector("#skip");
next.style.display = "none"
next.onclick = function (){   //Generate New Alien Ship with HP display
roundNum.innerText ++
console.log("Next round!")
}

// Creating USS Assembly and Aliens
const ussa = new Ship(20, 5, .7, "USS Assembly");
let alien = new Ship(10, 2, .6, "Alien")

// Display for USS Assembly and Alien Stats
const statDisplay = document.querySelector("#stats");
const alienStatDisplay = document.createElement("div");
let alienStatData = document.createElement("div");
const ussaStatDisplay = document.createElement("div");
let ussaStatData = document.createElement("div")

// Function to append data to display upon clicking start button
function gameRoundStats(){
    if (roundStart = true){
        alienStatDisplay.innerText = "Alien HP : ";
        statDisplay.appendChild(alienStatDisplay)
        alienStatData.innerText = alien.hull;
        alienStatDisplay.appendChild(alienStatData)
        ussaStatDisplay.innerText = "USS Assembly HP : ";
        statDisplay.appendChild(ussaStatDisplay);
        ussaStatData.innerText = ussa.hull;
        ussaStatDisplay.appendChild(ussaStatData);
    }
}