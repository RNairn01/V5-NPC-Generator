import { determineClan, setGeneration, randomTalent, weak, average, adept, formiddable, deadly } from './determineNPCstats.js';
import { NPC, Ghoul, Vampire, Hunter } from './generateNPC.js';
import { getDisciplines, randomDiscipline } from './disciplines.js';
import { getRandomName } from './names.js';

let template = '';
let charToGen = 'vampire';
let npcName = '';
let npcTalents = [];
let npcTrueFaith = 0;
let npcGeneration = 13;
let npcClan = 'Banu Haqim';
let npcDisciplines = getDisciplines(npcClan);
let physicalPool;
let socialPool;
let mentalPool;

const updateButton = document.getElementById('update-button');
const fullRandomButton = document.getElementById('full-random-button');
const randomTalent1 = document.getElementById('random-talent-1');
const randomTalent2 = document.getElementById('random-talent-2');
const randomClanButton = document.getElementById('random-clan');
const randomDiscLevel1 = document.getElementById('random-level-1');
const randomDiscLevel2 = document.getElementById('random-level-2');
const randomDiscLevel3 = document.getElementById('random-level-3');
const clanButton = document.getElementById('clan');
const charButton = document.getElementById('char-to-gen');
const trueFaithButton = document.getElementById('random-faith');
const saveButton = document.getElementById('save-button');
const randomNameButton = document.getElementById('random-name-button');
let char; 



function formChanged() {

 
 charToGen = document.getElementById("char-to-gen").value;
 fullRandomButton.addEventListener('click', function() {fullRandom(charToGen)});
 enableDisable();

 npcName = document.getElementById("npc-name").value; //TODO: Add random name generation

 //sets npc dice pools based on selection
 getPools(); //TODO: Implement a more functional version of this
 
 //set talents equal to talents either inputted or randomly chosen
 npcTalents = [document.getElementById("npc-talent-1").value, document.getElementById("npc-talent-2").value];

//sets NPC generation or determines it randomly
 npcGeneration = setGeneration(); 
 
//sets clan equal to user input or picks random clan if requested
 npcClan = document.getElementById("clan").value;

//sets default disciplines based on clan choice and then handles discipline customization
 setDisciplines(); //TODO: Implement a more functional version of this

npcTrueFaith = document.getElementById('true-faith-input').value;

//Sets type of character to be generated
 char = generateChar(npcName, physicalPool, socialPool, mentalPool, npcTalents, npcDisciplines, npcGeneration, npcClan, npcTrueFaith); 
 console.log(char);
 removeOutput();
 updateButton.addEventListener('click', function() {displayOutput(char)});
};

function getPools() {
  let physicalValue = document.getElementById("physical-pool").value
  let socialValue = document.getElementById("social-pool").value;
  let mentalValue = document.getElementById("mental-pool").value;
  

 
  switch (physicalValue) {
    case 'weak':
      physicalPool = weak();
      break;
    case 'average':
      physicalPool = average();
      break;
     case 'adept':
       physicalPool = adept();
       break;
     case 'formiddable':
       physicalPool = formiddable();
       break;
     case 'deadly':
       physicalPool = deadly();
       break;    
  };
  switch (socialValue) {
    case 'weak':
       socialPool = weak();
       break;
    case 'average':
       socialPool = average();
       break;
     case 'adept':
       socialPool = adept();
       break;
     case 'formiddable':
       socialPool = formiddable();
       break;
     case 'deadly':
       socialPool = deadly();
       break;    
  };  
  switch (mentalValue) {
   case 'weak':
      mentalPool = weak();
      break;
   case 'average':
      mentalPool = average();
      break;
    case 'adept':
      mentalPool = adept();
      break;
    case 'formiddable':
      mentalPool = formiddable();
      break;
    case 'deadly':
      mentalPool = deadly();
      break;    
 };
}; 

function setDisciplines() { 
  npcDisciplines = getDisciplines(npcClan);
  npcDisciplines[0].name = document.getElementById('npc-discipline-1').value;
  npcDisciplines[0].level = parseInt(document.getElementById('npc-discipline-1-level').value);
  npcDisciplines[1].name = document.getElementById('npc-discipline-2').value;
  npcDisciplines[1].level = parseInt(document.getElementById('npc-discipline-2-level').value);
  npcDisciplines[2].name = document.getElementById('npc-discipline-3').value;
  npcDisciplines[2].level = parseInt(document.getElementById('npc-discipline-3-level').value);
};  

function defaultDisciplines(clan) {
  document.getElementById('npc-discipline-1').value = getDisciplines(clan)[0].name;
  document.getElementById('npc-discipline-2').value = getDisciplines(clan)[1].name;
  document.getElementById('npc-discipline-3').value = getDisciplines(clan)[2].name;
  };

function generateChar(npcName, physicalPool, socialPool, mentalPool, npcTalents, npcDisciplines, npcGeneration, npcClan, npcTrueFaith) {
  if (charToGen === 'mortal') {
    return new NPC(npcName, physicalPool, socialPool, mentalPool, npcTalents);
    
  };
  
  if (charToGen === 'ghoul') {
    return new Ghoul(npcName, physicalPool, socialPool, mentalPool, npcTalents, npcDisciplines);
    
  };
  
  if (charToGen === 'vampire') {
    return new Vampire(npcName, physicalPool, socialPool, mentalPool, npcTalents, npcDisciplines, npcGeneration, npcClan);
    
  };
  
  if (charToGen === 'hunter') {
    return new Hunter(npcName, physicalPool, socialPool, mentalPool, npcTalents, npcTrueFaith);
    
  };
};

function enableDisable() {
const vampNodes = document.getElementById("vampire-generator").getElementsByTagName('*');
const hunterNodes = document.getElementById("true-faith").getElementsByTagName('*');
const ghoulNodes = document.getElementById("ghoul-allowed").getElementsByTagName('*');

if (charToGen !== 'hunter') {
  for (var node of hunterNodes) {
  node.disabled = true;
  node.hidden = true;
};
};

if (charToGen !== 'vampire') {
  for (var node of vampNodes) {
  node.disabled = true;
  node.hidden = true;
  };

   if (charToGen === 'ghoul') {
    document.getElementById('npc-disciplines').disabled = false;
    document.getElementById('npc-disciplines').hidden = false;
    document.getElementById('ghoul-allowed').disabled = false;
    document.getElementById('ghoul-allowed').hidden = false;
    for (var node of ghoulNodes) {
      node.disabled = false;
      node.hidden = false;
    };
    document.getElementById('npc-discipline-2').value = 'none';
    document.getElementById('npc-discipline-3').value = 'none';
  };

  if (charToGen === 'hunter') {
    for (var node of hunterNodes) {
    node.disabled = false;
    node.hidden = false;
    };
   };
 }; 

if (charToGen === 'vampire') {
  for (var node of vampNodes) {
    node.disabled = false;
   node.hidden = false;
  };
 };
};

function displayOutput(character) {
  document.getElementById("name-output").innerHTML = `<span class="output-prefix">Name - </span><span class="output-main">${character.name}</span>`;
  document.getElementById("health-output").innerHTML = `<span class="output-prefix">Health - </span><span class="output-main output-number">${character.health}</span>`;
  document.getElementById("physical-dice-output").innerHTML = `<span class="output-prefix">Physical Dice Pool - </span><span class="output-main output-number">${character.physical}</span>`;
  document.getElementById("social-dice-output").innerHTML = `<span class="output-prefix">Social Dice Pool - </span><span class="output-main output-number">${character.social}</span>`;
  document.getElementById("mental-dice-output").innerHTML = `<span class="output-prefix">Mental Dice Pool - </span><span class="output-main output-number">${character.mental}</span>`;
  
  if (character.talents.some(e => e != "")) {
    if (character.talents.every(e => e != "")) {
    document.getElementById("talents-output").innerHTML = `<span class="output-prefix">Talents - </span><span class="output-main">${character.talents[0]} | ${character.talents[1]}</span>`;
    } else document.getElementById("talents-output").innerHTML = `<span class="output-prefix">Talents - </span><span class="output-main">${character.talents.filter(e => e != "")[0]}</span>`;
  }
  if (character instanceof Hunter) {
    document.getElementById("true-faith-output").innerHTML = `<span class="output-prefix">True Faith - </span><span class="output-main">${character.trueFaith}`;
  } 
  if (character instanceof Vampire) {
    document.getElementById("clan-output").innerHTML = `<span class="output-prefix">Clan - </span><span class="output-main">${character.clan}</span>`;
    document.getElementById("discipline-output").innerHTML = `<span class="output-prefix">Disciplines - </span><span class="output-main">${character.disciplines[0].name} ${character.disciplines[0].level} | ${character.disciplines[1].name} ${character.disciplines[1].level} | ${character.disciplines[2].name} ${character.disciplines[2].level}</span>`;
    document.getElementById("generation-output").innerHTML = `<span class="output-prefix">Generation - </span><span class="output-main output-number">${character.generation}</span>`;
  } else if (character instanceof Ghoul) {
    document.getElementById("discipline-output").innerHTML = `<span class="output-prefix">Discipline - </span><span class="output-main">${character.disciplines[0].name} ${character.disciplines[0].level}</span>`
  }
};

function removeOutput() {
  document.getElementById("name-output").innerHTML = ``;
  document.getElementById("health-output").innerHTML = ``;
  document.getElementById("physical-dice-output").innerHTML = ``;
  document.getElementById("social-dice-output").innerHTML = ``;
  document.getElementById("mental-dice-output").innerHTML = ``;
  document.getElementById("talents-output").innerHTML = ``;
  document.getElementById("true-faith-output").innerHTML = ``;
  document.getElementById("clan-output").innerHTML = ``;
  document.getElementById("discipline-output").innerHTML = ``;
  document.getElementById("generation-output").innerHTML = ``;
};

function fullRandom(npcType) {
  //get random name
  getRandomName();

  //get random pool selections
  let randomPool = () => {
    const rand = randomInt(0,4)
    switch(rand) {
      case 0:
        return 'weak';
      case 1:
        return 'average';
      case 2:
        return 'adept';
      case 3:
        return 'formiddable';
      case 4:
        return 'deadly';
    }
  };
  //populate dice pools
  document.getElementById("physical-pool").value = randomPool();
  document.getElementById("social-pool").value = randomPool();
  document.getElementById("mental-pool").value = randomPool();
  //populate random talents
  document.getElementById('npc-talent-1').value = randomTalent();
  document.getElementById('npc-talent-2').value = randomTalent();
  //populate true faith
  if(charToGen === 'hunter') {
    document.getElementById('true-faith-input').value = randomInt(0,5);
  } else document.getElementById('true-faith-input').value = 0;
  //populate ghoul discipline
  if(charToGen === 'ghoul') {
    document.getElementById('npc-discipline-1').value = randomDiscipline().name;
    document.getElementById('npc-discipline-1-level').value = randomInt(0,1);
  };
  //populate vampire stats
  if(charToGen === 'vampire') {
    document.getElementById('clan').value = determineClan();
    defaultDisciplines(document.getElementById('clan').value);
    document.getElementById('npc-discipline-1-level').value = randomInt(0,5);
    document.getElementById('npc-discipline-2-level').value = randomInt(0,5);
    document.getElementById('npc-discipline-3-level').value = randomInt(0,5);
    document.getElementById("npc-gen-option").value = randomInt(4,13);
  }


};

function saveImage(node, name) {
  domtoimage.toBlob(document.getElementById(node))
    .then(function (blob) {
        window.saveAs(blob, name + '.png');
    });
};

//TODO: Clean up this button nightmare
updateButton.addEventListener('click', formChanged);
fullRandomButton.addEventListener('click', formChanged);
clanButton.addEventListener('click', formChanged);
charButton.addEventListener('click', formChanged);
randomNameButton.addEventListener('click', getRandomName);
randomTalent1.addEventListener('click', function() {document.getElementById('npc-talent-1').value = randomTalent()});
randomTalent2.addEventListener('click', function() {document.getElementById('npc-talent-2').value = randomTalent()});
randomClanButton.addEventListener('click', function() {document.getElementById('clan').value = determineClan()});
randomClanButton.addEventListener('click', formChanged);
randomDiscLevel1.addEventListener('click', function() {document.getElementById('npc-discipline-1-level').value = randomInt(0,5)});
randomDiscLevel2.addEventListener('click', function() {document.getElementById('npc-discipline-2-level').value = randomInt(0,5)});
randomDiscLevel3.addEventListener('click', function() {document.getElementById('npc-discipline-3-level').value = randomInt(0,5)});
trueFaithButton.addEventListener('click', function() {document.getElementById('true-faith-input').value = randomInt(0,5)});
clanButton.addEventListener('click', function() {defaultDisciplines(npcClan)});
randomClanButton.addEventListener('click', function() {defaultDisciplines(npcClan)});
saveButton.addEventListener('click', function() {saveImage('save-box', 'NPC')}); 

document.addEventListener("DOMContentLoaded", formChanged)


export function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

