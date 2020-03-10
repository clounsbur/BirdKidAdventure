import { Injectable } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { Player } from './player';
@Injectable({
  providedIn: 'root'
})
export class MasterService {
name:string;
character:  Player;



  setName(name: string) {
    this.name = name;
    console.log(this.name)
  }
  getName(): any{
    return this.name;
    
  }
  setCharacter(character) {
this.character = character
console.log (character)



 console.log (character)}
  getCharacter() {
    return this.character;
  }




 







  constructor() { }
}
