import { determineClan, setGeneration, randomTalent, weak, average, adept, formiddable, deadly } from './determineNPCstats.js';
import { NPC, Ghoul, Vampire, Hunter } from './generateNPC.js';
import { getDisciplines } from './disciplines.js';

let template = '';
let charToGen = 'vampire';
let npcName = '';
let npcTalents = [];
let npcTrueFaith = 0;
let npcGeneration = 13;
let npcClan = 'Banu Haqim';
let npcDisciplines = getDisciplines(npcClan);
let physicalPool;
let mentalPool;
let socialPool;
const updateButton = document.getElementById('update-button');
const randomTalent1 = document.getElementById('random-talent-1');
const randomTalent2 = document.getElementById('random-talent-2');
const randomClanButton = document.getElementById('random-clan');
const randomDiscLevel1 = document.getElementById('random-level-1');
const randomDiscLevel2 = document.getElementById('random-level-2');
const randomDiscLevel3 = document.getElementById('random-level-3');
const clanButton = document.getElementById('clan');
const charButton = document.getElementById('char-to-gen');
const trueFaithButton = document.getElementById('random-faith');
let char; 



function formChanged() {

 
 charToGen = document.getElementById("char-to-gen").value;
 enableDisable();
 npcName = document.getElementById("npc-name").value;

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
 char = generateChar(npcName, physicalPool, mentalPool, socialPool, npcTalents, npcDisciplines, npcGeneration, npcClan, npcTrueFaith); 
 console.log(char);
};

function getPools() {
  let physicalValue = document.getElementById("physical-pool").value
  let mentalValue = document.getElementById("mental-pool").value;
  let socialValue = document.getElementById("social-pool").value;

 
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
  }; 





function setDisciplines() { 
  npcDisciplines = getDisciplines(npcClan);
  function defaultDisciplines() {
    document.getElementById('npc-discipline-1').value = getDisciplines(npcClan)[0].name;
    document.getElementById('npc-discipline-2').value = getDisciplines(npcClan)[1].name;
    document.getElementById('npc-discipline-3').value = getDisciplines(npcClan)[2].name;
    };
    clanButton.addEventListener('click', defaultDisciplines); //TODO: change this so it sets the disciplines after input is selected rather than on click
    randomClanButton.addEventListener('click', defaultDisciplines);
    npcDisciplines[0].name = document.getElementById('npc-discipline-1').value;
    npcDisciplines[0].level = parseInt(document.getElementById('npc-discipline-1-level').value);
    npcDisciplines[1].name = document.getElementById('npc-discipline-2').value;
    npcDisciplines[1].level = parseInt(document.getElementById('npc-discipline-2-level').value);
    npcDisciplines[2].name = document.getElementById('npc-discipline-3').value;
    npcDisciplines[2].level = parseInt(document.getElementById('npc-discipline-3-level').value);
};  

function generateChar(npcName, physicalPool, mentalPool, socialPool, npcTalents, npcDisciplines, npcGeneration, npcClan, npcTrueFaith) {
  if (charToGen === 'mortal') {
    return new NPC(npcName, physicalPool, mentalPool, socialPool, npcTalents);
    
  };
  
  if (charToGen === 'ghoul') {
    return new Ghoul(npcName, physicalPool, mentalPool, socialPool, npcTalents, npcDisciplines);
    
  };
  
  if (charToGen === 'vampire') {
    return new Vampire(npcName, physicalPool, mentalPool, socialPool, npcTalents, npcDisciplines, npcGeneration, npcClan);
    
  };
  
  if (charToGen === 'hunter') {
    return new Hunter(npcName, physicalPool, mentalPool, socialPool, npcTalents, npcTrueFaith);
    
  };
};



function enableDisable() {
const vampNodes = document.getElementById("vampire-generator").getElementsByTagName('*');
const hunterNodes = document.getElementById("true-faith").getElementsByTagName('*');
const ghoulNodes = document.getElementById("ghoul-allowed").getElementsByTagName('*');

if (charToGen !== 'hunter') {
  for (var node of hunterNodes) {
  node.disabled = true;
};
};

if (charToGen !== 'vampire') {
  for (var node of vampNodes) {
  node.disabled = true;
  };

   if (charToGen === 'ghoul') {
    for (var node of ghoulNodes) {
      node.disabled = false;
    };
    document.getElementById('npc-discipline-2').value = 'none';
    document.getElementById('npc-discipline-3').value = 'none';
  };

  if (charToGen === 'hunter') {
    for (var node of hunterNodes) {
    node.disabled = false;
    };
   };
 }; 

if (charToGen === 'vampire') {
  for (var node of vampNodes) {
    node.disabled = false;
  };
 };
};


updateButton.addEventListener('click', formChanged);
clanButton.addEventListener('click', formChanged);
charButton.addEventListener('click', formChanged);
randomTalent1.addEventListener('click', function() {document.getElementById('npc-talent-1').value = randomTalent()});
randomTalent2.addEventListener('click', function() {document.getElementById('npc-talent-2').value = randomTalent()});
randomClanButton.addEventListener('click', function() {document.getElementById('clan').value = determineClan()});
randomClanButton.addEventListener('click', formChanged);
randomDiscLevel1.addEventListener('click', function() {document.getElementById('npc-discipline-1-level').value = randomInt(0,5)});
randomDiscLevel2.addEventListener('click', function() {document.getElementById('npc-discipline-2-level').value = randomInt(0,5)});
randomDiscLevel3.addEventListener('click', function() {document.getElementById('npc-discipline-3-level').value = randomInt(0,5)});
trueFaithButton.addEventListener('click', function() {document.getElementById('true-faith-input').value = randomInt(0,5)});

document.addEventListener("DOMContentLoaded", formChanged)


export function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

