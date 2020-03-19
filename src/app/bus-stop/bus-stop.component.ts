import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';

import { Player } from '../player';
import { trigger, state, style, transition, animation, animate, keyframes } from '@angular/animations';
// import { BrowserTransferStateModule } from '@angular/platform-browser';
@Component({
  selector: 'app-bus-stop',
  templateUrl: './bus-stop.component.html',
  styleUrls: ['./bus-stop.component.css'],
  animations: [
    // create trigger
    trigger ("busStop", [ 
      state ('drive', style ({  
        position: 'absolute',
        top: '-40%',
        left: '-55%',
        width: '60%',
        height: 'auto',
      })),
      state ("stop", style ({
        position: 'absolute',
        top: '-40%',
        left: '48%',
        width: '60%',
        height: 'auto'
      })),
      state ('tree', style ({ 
        width: '15%',
        position: 'absolute',
        left: '1%',
        top: '-138%'
      })),
    
      state ('sky', style ({     
        width: '2%',
        position: 'absolute',
        left: '90%',
        top: '-250%'
      })),
      transition('tree <=> sky',  
      animate('6s')

    ),
      transition('drive => stop', animate('9s 2s ease-out')
      ), 
  ]),

  trigger ("hightlighted", [ 
    state ('off', style ({ 
      position: 'absolute',
      // display: 'none',
      width : '40%',
      backgroundColor: 'white',
      border: '1px solid black',
      left: '35%',
      top: '27%',
      "z-index": "-1", 
    })),
    state ('on', style ({  
      position: 'absolute',
      display: 'flex',
      width : '40%',
      backgroundColor: 'white',
      border: '1px solid black',
      left: '35%',
      top: '27%',
      "z-index": "-1" 
    })),
    state ('poop', style ({
      opacity: '0',
      padding: '0 0 0 35%',
      height: '10%',
      position: 'absolute',
      top: '-100%',
      left: '16%'
      })),
    state ('fall', style ({
      'z-index': '4',
      opacity: '1',
      padding: '0 0 0 35%',
      height: '10%',
      position: 'absolute',
      left: '47%',
      top: '82%'
      })),
    transition('poop => fall', animate('2s 3s')),
    transition('off => on', [
      animate('2s 1800ms', keyframes([
        style({ "z-index": '3' }),
        style({ backgroundColor: 'red', 
                border: '2px solid yellow',
                transform: 'scale(1.2)'}),
        style({ backgroundColor: 'white',
                border: '2px solid red',
                transform: 'scale(1)'}),
        style({ backgroundColor: 'red',
                border: '2px solid yellow',
                transform: 'scale(1.2)'})
      ])),  
    transition('begin => end', animate('0s 3s')),
    
    ]),
  ]),
  trigger ('text', [ 
    state ('hidden', style ({ 
      opacity: '0',
      
    
    })),
    state ('show', style ({ 
      opacity: '1',
      
      
    })),  
  ]), 
  ],
})



export class BusStopComponent implements OnInit {
  name:string;
  isHidden: boolean = true;
  busDrive = 'drive'
  character: Player;
  poopFall = 'poop'
  fly = 'tree'
  highlight = "off"
  textAppear= 'hidden'
  displayCharacter:boolean = false;
  constructor(private router: Router, private service: MasterService) { }



hightLight(){
  setTimeout (() => {
    this.highlight = 'on';
    this.poopFall = 'fall';
 },1000);
}  

showText() {
  setTimeout (() => {
    this.textAppear = 'show';
    this.displayCharacter = true
 },3000);
    

    }
    driveBus(){
      this.busDrive = 'stop'
      this.fly = 'sky'
      this.hightLight()
      this.showText()
       
      
      }  
   
  ngOnInit(): void {
    this.name = this.service.getName();
    this.character = this.service.getCharacter();
    // this.driveBus();
   
// console.log(this.character)
  }
}
