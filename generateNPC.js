export class NPC {
    constructor(name, physical, mental, social, talents) {
        this.name = name,
        this.physical = physical,
        this.mental = mental,
        this.social = social,
        this.health = Math.round(3 + (physical / 2)),
        this.talents = talents
    }
};

export class Ghoul extends NPC {
    constructor(name, physical, mental, social, talents, disciplines) {
        super(name, physical, mental, social, talents),
        this.disciplines = disciplines
    }
};

export class Vampire extends NPC {
    constructor(name, physical, mental, social, talents, disciplines, generation, clan) {
        super(name, physical, mental, social, talents),
        this.disciplines = disciplines,
        this.generation = generation,
        this.clan = clan
    }
};

export class Hunter extends NPC {
    constructor(name, physical, mental, social, talents, trueFaith) {
        super(name, physical, mental, social, talents),
        this.trueFaith = trueFaith
    }
};

/*export function generateChar(npcName, physicalPool, mentalPool, socialPool, npcTalents, npcDisciplines, npcGeneration, npcClan, npcTrueFaith) {
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
  };*/