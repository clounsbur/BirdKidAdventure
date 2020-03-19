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
        'z-index': '0'
      })),
      state ('show', style ({ 
        opacity: '1',
      })),  
      state ('true', style ({ 
        position: 'top 1%'
       }))
    ]),

  ]
})
export class CharcterbuildComponent implements OnInit {
  name: string;
  // show: boolean = false;

  characters : Player [] = [
  {name:this.service.getName(), image: '/assets/boy-sm.png', pronoun: "he", gender: "boy" , posspronoun: "his", bio:
  "He is a 2nd grader whose friends think he's the bravest kid they know, and who loves to read."},
  {name:this.service.getName(), image:'/assets/girl-sm.png', pronoun: "she", gender: "girl", posspronoun: "her", bio:
  "She is a 1st grader who loves spelling, spooky things and solving mysteries"},
  { name:this.service.getName(), image: '/assets/nonbi-sm.png', pronoun: "they", gender: "they", posspronoun: "their", bio: 
  "They are a 5th grader who loves adventure and dancing, and who is an awesome friend."}
  ];

  constructor(private router: Router, private service: MasterService) { }
  getName() {
    this.name = this.service.getName();
  }
  //setPlayer() - navigate to intro - sets character in service - image/name
  setPlayer(character) {
    character = this.service.setCharacter(character);
    this.router.navigate(["intro"])
  }

  ngOnInit(): void { 
    this.name = this.service.getName();
  }
}
