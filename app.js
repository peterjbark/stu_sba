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
            alienStatData.innerText = currentAlien;
            return target
            } else {
                 console.log("%cAttack missed, prepare for imminent damage", 'font-style:italic')
         }
      }
    enemyAttack(accuracy, target){
        let chance = Math.random()
        if (chance < accuracy) {
            target.hull -= this.firepower;
            console.log("%cWe've been hit for " + `${this.firepower}` + " damage. USS Assembly has " + target.hull + " remaining hull reinforcements", 'font-size:20px; color:red')
            ussaStatData.innerText = currentHealth;

            } else {
                 console.log("%cEnemy attack missed.", 'font-style:italic')
         }
      }
    }

// Creating USS Assembly and Aliens
const ussa = new Ship(20, 1, .7, "USS Assembly");
let currentHealth = ussa.hull


let alien1 = new Ship("3", "4", .6, "Alien 1");
let alien2 = new Ship("6", "2", .8, "Alien 2");
let alien3 = new Ship('6', '4', .7, "Alien 3");
let alien4 = new Ship('5', '3', .8, "Alien 4");
let alien5 = new Ship('4', '2', .7, "Alien 5");
let alien6 = new Ship('5', '3', .6, "Alien 6")

let alienHulls = [alien1,alien2,alien3,alien4,alien5,alien6];
let currentAlien = alienHulls[0].hull;
console.log(currentAlien)

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
        alienStatData.innerText = currentAlien;
        alienStatDisplay.appendChild(alienStatData)
        ussaStatDisplay.innerText = "USS Assembly HP : ";
        statDisplay.appendChild(ussaStatDisplay);
        ussaStatData.innerText = currentHealth;
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
    roundNum.style.display="none"
    start.style.display = "inline";
    proceed.style.display = "none";
    attack.style.display = "none";
    statDisplay.removeChild(ussaStatDisplay);
    statDisplay.removeChild(alienStatDisplay);
    ussa.hull = 20;
    roundDisplay.innerText = "Let's save the Universe!"
    title.innerText = "🍔 Save the Universe! 🍔"
    console.log("%cGame Reset", 'color: cyan')
}

// Attack button logic
const attack = document.createElement("button")
attack.innerText = "Attack"
attack.style.display = "none"

attack.addEventListener ('click', function(){
    const ussaAttack = ussa.attack(0.7, alienHulls[0])
    if (currentAlien > 0){
        ussaAttack;
        alienStatData.innerText = currentAlien;
        alienAttack()
        ussaStatData.innerText = ussa.hull;
     } else (currentAlien  <= 0)
            console.log("%cDead Alien", 'color:red; font-size:15px')
            alienStatData.innerText = "Dead"
            title.innerText = "💥💥Alien Dead 💥💥"
            attack.style.display = "none"
            proceed.style.display = "inline"
                return;
        })
main.append(attack)

// Enemy attack logic
function alienAttack(){
    if (alienHulls[0].accuracy > 0){
        alienHulls[0].enemyAttack(alienHulls[0].accuracy, ussa)
        return currentHealth
     } else{
        console.log("Dead alien can't attack")
    }
}

// Game Over 
function gameOver(){
    if (roundNum === 7){
        console.log("yay")
        // alienStatDisplay.style.display = "none";
        // ussaStatDisplay.style.display = "none";
        // roundDisplay.style.display = "none";

        // const yay = document.createElement("div")
        // yay.innerText = "Congratulations you beat the game and saved the universe!"
        // main.appendChild(yay)
    }
}

// Continue button to proceed to next round
const proceed = document.querySelector("#proceed")
proceed.onclick = function(){
    alienHulls.shift();
    roundNum.innerText ++;
    alienStatData.innerText = alienHulls[0].hull;
    proceed.style.display = "none";
    attack.style.display = "inline";
    title.innerText = "🛸🛸Alien Invasion🛸🛸"
    gameOver();
    // Reset Alien HP or generate new Alien, function that iterates to next i in array upon click
}
proceed.style.display = "none";

