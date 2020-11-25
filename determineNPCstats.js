import { randomInt } from './main.js';

export const weak = () => randomInt(1,3);
export const average = () => randomInt(3,5);
export const adept = () => randomInt(5,6);
export const formiddable = () => randomInt(6,8);
export const deadly = () => randomInt(8,10);

export function determineClan() {
    let clanInt = randomInt(0,13);
    let clan;

    switch(clanInt) {  //determines clan randomly
        case 0: 
          clan = 'Banu Haqim';
          break;
        case 1: 
          clan = 'Brujah';
          break;
        case 2: 
          clan = 'Gangrel';
          break;
        case 3: 
          clan = 'Hecata';
          break;
        case 4: 
          clan = 'Lasombra';
          break;
        case 5: 
          clan = 'Malkavian';
          break;
        case 6: 
          clan = 'Nosferatu';
          break;
        case 7: 
          clan = 'The Ministry';
          break;
        case 8: 
          clan = 'Ravnos';
          break;
        case 9: 
          clan = 'Salubri';
          break;
        case 10: 
          clan = 'Toreador';
          break;
        case 11: 
          clan = 'Tremere';
          break;
        case 12: 
          clan = 'Tzimisce';
          break;  
        case 13: 
          clan = 'Ventrue';
          break;                                                                                                       
    };

    if (clan === 'Hecata') { //determines hecata subclan 
        let random = randomInt(1,12);

        switch(random) {
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            case 5:
                clan += '(Cappadocian)';
                break;
            case 6:
                clan += '(Giovanni)';
                break;
            case 7:
                clan += '(Dunsirn)';
                break;  
            case 8:
                clan += '(Lamiae)';
                break;
            case 9:
                clan += '(Nagaraja)';
                break;
            case 10:
                clan += '(Samedi)';
                break;
            case 11:
                clan += '(Children of Tenochtitlan)';
                break;
            case 12:
                clan += '(Putanesca)';
                break;                                                                                            
        }
    }

    return clan;
};

export function determineGen() {
    let percentage = randomInt(1,100);

    if (percentage <= 40) return 13;
    if (percentage <= 70) return 12;
    if (percentage <= 90) return 11;
    else return 10;
};

export function setGeneration() {
  if (document.getElementById("npc-gen-option").value === "randomAll") return randomInt(4,13);
  else if(document.getElementById("npc-gen-option").value === "randomHigh") return determineGen();
  else return parseInt(document.getElementById("npc-gen-option").value);
};

export function randomTalent() {
    const talentsPhysical = ['Athletics','Brawl','Craft','Drive','Firearms','Larceny','Melee','Stealth','Survival'];
    const talentsSocial = ['Animal Ken','Etiquette','Insight','Intimidation','Leadership','Performance','Persuasion','Streetwise','Subterfuge'];
    const talentsMental = ['Academics','Awareness','Finance','Investigation','Medicine','Occult','Politics','Science','Technology'];
    
    let talentPool = randomInt(0,2);
    let talent;
    switch (talentPool) {
        case 0:
            talent = talentsPhysical[randomInt(0,talentsPhysical.length-1)];
            break;
        case 1:
            talent = talentsSocial[randomInt(0,talentsSocial.length-1)];
            break;
        case 2:
            talent = talentsMental[randomInt(0,talentsMental.length-1)];
            break;                        
    }
    return talent;
};

