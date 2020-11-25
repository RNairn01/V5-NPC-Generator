export class NPC {
    constructor(name, physical, social, mental, talents) {
        this.name = name,
        this.physical = physical,
        this.social = social,
        this.mental = mental,
        this.health = Math.round(3 + (physical / 2)),
        this.talents = talents
    }
};

export class Ghoul extends NPC {
    constructor(name, physical, social, mental, talents, disciplines) {
        super(name, physical, social, mental, talents),
        this.disciplines = disciplines
    }
};

export class Vampire extends NPC {
    constructor(name, physical, social, mental, talents, disciplines, generation, clan) {
        super(name, physical, social, mental, talents),
        this.disciplines = disciplines,
        this.generation = generation,
        this.clan = clan
    }
};

export class Hunter extends NPC {
    constructor(name, physical, social, mental, talents, trueFaith) {
        super(name, physical, social, mental, talents),
        this.trueFaith = trueFaith
    }
};