export function getDisciplines(clan) {
    class Discipline {
        constructor(name, level) {
           this._name = name,
           this._level = level
        }
        get name() {
            return this._name;
        }
        set name(str) {
            this._name = str;
        }
        get level() {
            return this._level;
        }
        set level(num) {
            this._level = num;
          } 
    };
    
    let animalism = new Discipline('Animalism', 0);
    let auspex = new Discipline('Auspex', 0);
    let celerity = new Discipline('Celerity', 0);
    let dominate = new Discipline('Dominate', 0);
    let fortitude = new Discipline('Fortitude', 0);
    let obfuscate = new Discipline('Obfuscate', 0);
    let oblivion = new Discipline('Oblivion', 0);
    let potence = new Discipline('Potence', 0);
    let presence = new Discipline('Presence', 0);
    let protean = new Discipline('Protean', 0);
    let bloodSorcery = new Discipline('Blood Sorcery', 0);

 switch(clan) {
    case 'Banu Haqim':
        return [bloodSorcery, celerity, obfuscate];
    case 'Brujah':
        return [celerity, potence, presence];
    case 'Gangrel':
        return [animalism, fortitude, protean];
    case 'Hecata':
        return [auspex, fortitude, oblivion];
    case 'Hecata(Cappadocian)':
        return [auspex, fortitude, oblivion];
    case 'Hecata(Giovanni)':
        return [dominate, fortitude, oblivion];
    case 'Hecata(Dunsirn)':
        return [dominate, fortitude, oblivion];
    case 'Hecata(Lamiae)':
        return [fortitude, potence, oblivion];
    case 'Hecata(Nagaraja)':
        return [auspex, dominate, oblivion];
    case 'Hecata(Samedi)':
        return [fortitude, obfuscate, oblivion];
    case 'Hecata(Children of Tenochtitlan)':
        return [auspex, fortitude, oblivion];
    case 'Hecata(Putanesca)':
        return [dominate, fortitude, oblivion];                             
    case 'Lasombra':
        return [dominate, oblivion, potence];
    case 'Malkavian':
        return [auspex, dominate, obfuscate];
    case 'Nosferatu':
        return [animalism, obfuscate, potence];
    case 'The Ministry':
        return [obfuscate, presence, protean];
    case 'Ravnos':
        return [animalism, fortitude, obfuscate];
    case 'Salubri':
        return [auspex, fortitude, obfuscate];
    case 'Toreador':
        return [auspex, celerity, presence];
    case 'Tremere':
        return [auspex, dominate, bloodSorcery];
    case 'Tzimisce':
        return [animalism, auspex, protean];
    case 'Ventrue':
        return [dominate, fortitude, presence];                          
 };
};

