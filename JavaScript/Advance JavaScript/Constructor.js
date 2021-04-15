class Player{
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
  introduce(){
    console.log(`Hi I am ${this.name}, ${this.type}`)
  }
}
class Wizard extends Player{
  constructor(name, type){
    super(name, type)
    console.log('wizard', this);
  }
  play(){
    console.log(`WEEE I am a ${this.type}`);
  }
}

const wizard1 = new Wizard('shelly', 'Healer');
const wizard2 = new Wizard('shawn', 'Dark magic');