console.log('\'Allo \'Allo!');

console.log("try these functions...")

//CONSTRUCTOR ONE

function SuperHero (name) {
	this.name = name || 'unidentified good guy, aka UGG';
	this.superPower = true;
	this.nemesis = true;
	this.secretLair = false;
	this.lifePoints = 25;
	this.damage = function(name){
		name.lifePoints = name.lifePoints - 5; 
	};
	this.buildLair = function(){
		this.secretLair = true;
	};
}

var slobBoy = new SuperHero ('Slob Boy ?!?')

var shinyGirl = new SuperHero ('Shiny Girl!')

slobBoy.buildLair ()

slobBoy.damage(shinyGirl)

//CONSTRUCTOR TWO

function ThomasTrain(name) {
	this.name = name || 'alien train';
	this.cabose = true;
	this.coaches = 1;
	this.addCoach = function(number){
		this.coaches = this.coaches + number;
	}
}

var Henry = new ThomasTrain ('Henry')

var Toby = new	ThomasTrain ('Toby')

Henry.addCoach(5)

Toby.addCoach (1)

//CONSTRUCTOR THREE

function FamilyUnit(firstName) {
	this.firstName = firstname;
	this.lastName = Heidenreich;
	this.pets = 2;
	this.nearSighted = true;
	this.contacts = false; 
	
}

