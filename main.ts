// //Objective:
// Design a basic Sports Management System where various athletes from different sports can be managed, tracked, and their performances recorded.
 
// 1. Abstract Class - Athlete
 
// Properties:
 
// - athleteID (e.g., "A123")
// - name
// - age
// - nationality
//   Methods:
// - abstract void train(): Simulates the athlete's training session.
// - abstract void compete(): Simulates the athlete's competition.
 
// 2. Interface - Endurance
 
// Methods:
 
// - void enduranceTraining(): A method to simulate endurance-specific training.
// - void checkEnduranceLevel(): A method to check the athlete's endurance capability.
 
// 3. Class - Sprinter (Inherits from Athlete)
 
// Additional properties:
 
// - best100mTime
// - best200mTime
//   Implements the train and compete methods specific to sprinting.
 
// 4. Class - MarathonRunner (Inherits from Athlete and Implements Endurance)
 
// Additional properties:
 
// - bestMarathonTime
// - Implements the train and compete methods specific to marathon running.
// - Implements the enduranceTraining and checkEnduranceLevel methods from the Endurance interface.
 
// 5. Class - Swimmer (Inherits from Athlete)
 
// Additional properties:
 
// - preferredStroke (e.g., "Freestyle", "Butterfly")
// - best100mFreestyleTime
// - Implements the train and compete methods specific to swimming.
 
// 6. Class - Competition
 
// Properties:
 
// - competitionID
// - date
// - location
// - athletes: List of Athlete objects participating in the competition.
//   Methods:
// - registerAthlete(Athlete athlete): Registers an athlete for the competition.
// - startCompetition(): Initiates the competition for the registered athletes.


abstract class Athlete  {
athleteID: string;
name: string;
age: number;
nationality: string;

constructor (athleteID: string, name: string, age: number, nationality: string) {

this.athleteID = athleteID
this.name = name 
this.age = age 
this.nationality = nationality
}

abstract train() : void;

abstract compete() : void;

interface endurance {
enduranceTraining(): void;
checkEnduranceLevel(): void;
}



class Sprinter extends Athlete {

    best100mTime: number;
    best200mTime: number;

constructor(
    athleteID: string,
    name: string,
    age: number,
    nationality: string,
    best100mTime: number,
    best200mTime: number
  ) {
  
    super(athleteID, name, age, nationality);
    this.best100mTime = best100mTime;
    this.best200mTime = best200mTime;
  }


  train(): void {
    console.log(`${this.name} training for sprint, for better speed`);
  }

compete() : void {
    console.log(`${this.name} takes sport in sprint competitions`)
}



class MarathonRunner extends Athlete 