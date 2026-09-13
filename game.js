const tg = window.Telegram.WebApp;

tg.ready();

tg.expand();

let coins = Number(localStorage.getItem("coins")) || 0;

let clickPower = Number(localStorage.getItem("clickPower")) || 1;

let upgradePrice = Number(localStorage.getItem("upgradePrice")) || 10;

let level = Number(localStorage.getItem("level")) || 1;

let miners = Number(localStorage.getItem("miners")) || 0;

let criticalCount = Number(localStorage.getItem("criticalCount")) || 0;

let achievementCrit = localStorage.getItem("achievementCrit") === "true";

let achievement1000 = localStorage.getItem("achievement1000") === "true";

let achievement10Miners = localStorage.getItem("achievement10Miners") === "true";

let achievement10Crits = localStorage.getItem("achievement10Crits") === "true";

let achievementLevel5 = localStorage.getItem("achievementLevel5") === "true";

let button = document.getElementById("hero");

let character = document.getElementById("character");

let text = document.getElementById("coins");

let upgradeButton = document.getElementById("upgradeButton");

let clickPowerText = document.getElementById("clickPower");

let levelText = document.getElementById("level");

let minerCountText = document.getElementById("minerCount");

let buyMinerButton = document.getElementById("buyMinerButton");

let incomeText = document.getElementById("income");

let achievement1000Text = document.getElementById("achievement1000");

let achievement10MinersText = document.getElementById("achievement10Miners");

let achievement10CritsText = document.getElementById("achievement10Crits");

let achievementLevel5Text = document.getElementById("achievementLevel5");

button.onclick = function() {

    let reward = clickPower;

if (Math.random() < 0.10) {

    reward = clickPower * 5;

    criticalCount++;

    if (criticalCount >= 10 && !achievement10Crits) {

    achievement10Crits = true;

    achievement10CritsText.innerHTML =

        "✅ Критик — сделать 10 критических кликов";

    saveGame();

}

    achievementCrit = true;

    saveGame();

    document.getElementById("achievementCrit").innerHTML =

    "✅ Критический удар — сделать 1 критический клик";

    alert("💥 КРИТИЧЕСКИЙ КЛИК! +" + reward + " 🪙");

}

coins = coins + reward;

    if (coins >= 1000 && !achievement1000) {

    achievement1000 = true;

    achievement1000Text.innerHTML =

        "✅ Тысяча — накопить 1 000 монет";

    saveGame();

}

    if (coins >= level * 100) {

    level++;

    if (level >= 5 && !achievementLevel5) {

    achievementLevel5 = true;

    achievementLevel5Text.innerHTML =

        "✅ Высота — достичь 5 уровня";

    saveGame();

}

    levelText.innerHTML = "Уровень: " + level;

}

    text.innerHTML = "🪙 Монеты: " + coins; saveGame();

    character.style.transform = "scale(1.2)";

    setTimeout(function() {

        character.style.transform = "scale(1)";

    }, 100);

};

upgradeButton.onclick = function() {

    if (coins >= upgradePrice) {

        coins = coins - upgradePrice;

        clickPower++;

        upgradePrice = upgradePrice + 10;

        text.innerHTML = "🪙 Монеты: " + coins;

        clickPowerText.innerHTML = clickPower; saveGame();

        upgradeButton.innerHTML =

            "Улучшить клик — " + upgradePrice + " 🪙";

    } else {

        alert("Не хватает монет!");

    }

};

buyMinerButton.onclick = function() {

    if (coins >= 100) {

        coins = coins - 100;

        miners++;

        if (miners >= 10 && !achievement10Miners) {
            
            achievement10Miners = true;
            
            achievement10MinersText.innerHTML =
            
               "✅ Магнат — купить 10 майнеров";
               
            saveGame();

}

        minerCountText.innerHTML = miners;

        text.innerHTML = "🪙 Монеты: " + coins;

        saveGame();

    } else {

        alert("Не хватает монет!");

    }

};

function saveGame(){

    localStorage.setItem("coins", coins);

    localStorage.setItem("clickPower", clickPower);

    localStorage.setItem("upgradePrice", upgradePrice);

    localStorage.setItem("level", level);

    localStorage.setItem("miners", miners);

    localStorage.setItem("criticalCount", criticalCount);

    localStorage.setItem("achievementCrit", achievementCrit);

    localStorage.setItem("achievement1000", achievement1000);

    localStorage.setItem("achievement10Miners", achievement10Miners);
    
    localStorage.setItem("achievement10Crits", achievement10Crits);
    
    localStorage.setItem("achievementLevel5", achievementLevel5);

}

text.innerHTML = "🪙 Монеты: " + coins;

clickPowerText.innerHTML = clickPower;

levelText.innerHTML = "Уровень: " + level;

minerCountText.innerHTML = miners;

upgradeButton.innerHTML =

"Улучшить клик — " + upgradePrice + " 🪙";

setInterval(function() {

    if (miners > 0) {

        coins = coins + miners;

        text.innerHTML = "🪙 Монеты: " + coins;

        incomeText.innerHTML = miners;

        saveGame();

    }

}, 1000);

if (achievementCrit) {

    document.getElementById("achievementCrit").innerHTML =

        "✅ Критический удар — сделать 1 критический клик";

}

if (achievement1000) {

    achievement1000Text.innerHTML =

        "✅ Тысяча — накопить 1 000 монет";

}

if (achievement10Miners) {

    achievement10MinersText.innerHTML =

        "✅ Магнат — купить 10 майнеров";

}

if (achievement10Crits) {

    achievement10CritsText.innerHTML =

        "✅ Критик — сделать 10 критических кликов";

}

if (achievementLevel5) {

    achievementLevel5Text.innerHTML =

        "✅ Высота — достичь 5 уровня";

}