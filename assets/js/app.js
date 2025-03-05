// Når du er færdig med denne opgave, ser siden ca sådan her ud: https://prnt.sc/LFbMfsiq2ZV8

// 1. Der skal, med brug af javascript, indsættes 3 skills mere, altså nedenstående html. Se mere i punkt 1.1 - 1.6 under
/*
    <div>
        <span>CSS:</span>
        <span>60%</span>
        <meter min="0" max="100" value="60"></meter>
    </div>
*/

// 1.1 Fang .mySkills med en egnet metode
const mySkillsEl = document.querySelector(".mySkills");
// 1.2 Anvend document.createElement() til at skabe en div, to span og et meter tag
const newDiv = document.createElement("div");
const newSpan1 = document.createElement("span");
const newSpan2 = document.createElement("span");
const newMeter = document.createElement("meter");

// 1.3 Anvend document.textContent til at indsætte data i 2*span(se ovenfor for indhold)
newSpan1.textContent = "Javascript";
newSpan2.textContent = " 3%";
// 1.4 Anvend .setAttribute() til at sætte de tre attributter i meter-tagget (min, max og value)
newMeter.setAttribute("min", "0");
newMeter.setAttribute("max", "100");
newMeter.setAttribute("value", "3");
// 1.5 Anvend .append() til at indsætte <div> i .mySkills
mySkillsEl.append(newDiv)
newDiv.append(newSpan1, newSpan2, newMeter)
// 1.6 Anvend .append() til at indsætte 2*span og 1*meter i <div>

// 2. Anvend .cloneNode() til at klone den <li> med "Mit portfolio" og indsætte den to gange nedenfor (Ja, så kommer der til at stå "Mit portfolio" tre gange - pyt med det:) )
const myPortfolioEl = document.querySelector("ul li")
const ulEl = document.querySelector("ul")

const myClone = myPortfolioEl.cloneNode(true)
const myClone2 = myPortfolioEl.cloneNode(true)
const myClone3 = myPortfolioEl.cloneNode(true)
ulEl.append(myClone, myClone2, myClone3)
// 3. I footeren er der en div med class="oval". Anvend .style-objektet til at give den følgende:
// width: 40px, height: 40px, background-color: pink, border-radius: 50%

// 4. Se i dit .css dokument nederst at der er en class kaldet .niceStyling. Anvend .classList.add() til at sætte denne klasse på .oval2
