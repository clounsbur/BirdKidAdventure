import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';
import { Player } from '../player';
import { trigger, state, style, transition, animation, animate, keyframes } from '@angular/animations';
@Component({
  selector: 'app-charcterbuild',
  templateUrl: './charcterbuild.component.html',
  styleUrls: ['./charcterbuild.component.css'],
  animations: [
    trigger ('display', [ 
      state ('hidden', style ({ 
        opacity: '0',
       
      })),
      state ('show', style ({ 
        opacity: '1',
        
      })),  
    ]),

  ]
})
export class CharcterbuildComponent implements OnInit {
name: string;
show: boolean = false;
displayText = 'show'
characters : Player [] = [
{ name:this.service.getName(), image: '/assets/boy-sm.png', pronoun: "he", gender: "boy" , posspronoun: "his", bio:
"He is a 2nd grader most of his friend's think he's the bravest kid they know, and he loves to read."},
{ name:this.service.getName(), image:'/assets/girl-sm.png', pronoun: "she", gender: "girl", posspronoun: "her", bio:
"She is a 1st grader who loves spelling, spooky things and solving mysteries"},
{ name:this.service.getName(), image: '/assets/nonbi-sm.png', pronoun: "they", gender: "they", posspronoun: "their", bio: 
"They are a 5th grader who loves adventure and dancing, and who are an awesome friend."}
];

names: string;

  constructor(private router: Router, private service: MasterService) { }
  buildPlayer(name) {
    this.service.setName(name);
    this.displayText = 'hidden';
      this.getName();
    
    
  }

  
showText(names){
  this.names = this.service.getName(); 
  this.show = true
}


  getName() {
    this.name = this.service.getName();
    console.log (this.name)
    
      this.showText(this.names);
   
   console.log(this.showText)
  }
  
  //setPlayer() - navigate to intro - sets character in service - image/name
setPlayer(character) {
  character = this.service.setCharacter(character);
  this.router.navigate(["intro"])
}







  ngOnInit(): void { 
  // this.name = this.service.getName();




    // this.player = this.service.getPlayer();   
  }

}
