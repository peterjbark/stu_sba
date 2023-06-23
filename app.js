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
            console.log("%cIt's a hit! Hit for " + `${this.firepower}` + " damage. Target has " + target.hull + " remaining hull reinforcements", 'font-size:20px; color:green')
            } else {
                 console.log("%cAttack missed, prepare for imminent damage", 'font-style:italic')
         }
      }
    enemyAttack(accuracy, target){
        let chance = Math.random()
        if (chance < accuracy) {
            target.hull -= this.firepower;
            console.log("%cWe've been hit for " + `${this.firepower}` + " damage. USS Assembly has " + target.hull + " remaining hull reinforcements", 'font-size:20px; color:red')
            } else {
                 console.log("%cEnemy attack missed.", 'font-style:italic')
         }
      }
    }

// Creating USS Assembly and Aliens
const ussa = new Ship(20, 5, .7, "USS Assembly");

let alienArray = [];
let alien = new Ship(3, 4, .6, "Alien");
let alien2 = new Ship(6, 2, .8, "Alien2");
let alien3 = new Ship(6, 4, .7, "Alien2");
let alien4 = new Ship(5, 3, .8, "Alien2");
let alien5 = new Ship(4, 2, .7, "Alien2");

alienArray.push(alien.hull)
alienArray.push(alien2.hull)
alienArray.push(alien3.hull)
alienArray.push(alien4.hull)
alienArray.push(alien5.hull)

// Obtaining class main div and id title div
const main = document.querySelector(".main")
const title = document.querySelector("#title")

// Trying to increment round number with text to clean up code
const roundDisplay = document.querySelector("#roundDisplay")
const roundNum = document.querySelector("#roundNumber")
roundDisplay.innerText = "Let's save the Universe!"
roundNum.innerText = 0;

// Round start false prior to pressing start
let roundStart = false;
roundNum.style.display = "none";
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
        alienStatData.innerText = alienArray[0];
        alienStatDisplay.appendChild(alienStatData)
        ussaStatDisplay.innerText = "USS Assembly HP : ";
        statDisplay.appendChild(ussaStatDisplay);
        ussaStatData.innerText = ussa.hull;
        ussaStatDisplay.appendChild(ussaStatData);
    }
}

// Start button logic
const start = document.querySelector("#start") 
start.onclick = function(){
    roundStart = true;
    roundDisplay.innerText = "Alien"

    roundNum.innerText = 1;

    roundNum.style.display = "inline";
    start.style.display = "none";
    next.style.display = "inline";
    attack.style.display = "inline";
    title.innerText = "🛸🛸Alien Invasion🛸🛸"
    gameRoundStats();
    console.log("%cLet the invasion begin! 🛸🛸" , 'font-size:30px; color: green')
}

// Reset button logic
const reset = document.querySelector("#reset")
reset.onclick = function(){  // Must revert alien hull to original value
    roundStart = false;
    roundNum.innerText = 0;
    start.style.display = "inline";
    next.style.display = "none";
    attack.style.display = "none";
    statDisplay.removeChild(ussaStatDisplay);
    statDisplay.removeChild(alienStatDisplay);
    ussa.hull = 20;
    title.innerText = "🍔 Save the Universe! 🍔"
    console.log("%cGame Reset", 'color: cyan')
}

// Attack button logic
const attack = document.createElement("button")
attack.innerText = "Attack"
attack.style.display = "none"
attack.onclick = function(){
    if (alien.hull > 0){
    ussa.attack(0.7, alien)
        alienAttack()
        if(alien.hull <= 0){
            console.log("%cDead Alien", 'color:red; font-size:15px')
            alienStatData.innerText = "Dead"
            title.innerText = "💥💥Alien Dead 💥💥"
            attack.style.display = "none"
            proceed.style.display = "inline"
            next.style.display = "none";
            return;
        }
    console.log(alien.hull + " Alien HP");
    alienStatData.innerText = alienArray[0];
}
}
main.append(attack)

//Enemy attack logic
function alienAttack(){
    if (alien.hull > 0){
        alien.enemyAttack(0.6, ussa)
        ussaStatData.innerText = ussa.hull;

    }
}

// Skip Round logic
const next = document.querySelector("#skip");
next.style.display = "none"
next.onclick = function (){   //Generate New Alien Ship with HP display
roundNum.innerText ++
console.log("Next round!")
}

// Continue button to proceed to next round
const proceed = document.querySelector("#proceed")
proceed.onclick = function(){
    roundNum.innerText ++
    next.style.display = "inline";
    proceed.style.display = "none";
    attack.style.display = "inline";
    title.innerText = "🛸🛸Alien Invasion🛸🛸"
        for (let i = 0; i < alienArray.length; i++){
            alienStatData.innerText = alienArray[i]
        }
    // Reset Alien HP or generate new Alien, function that iterates to next i in array upon click
}
proceed.style.display = "none";