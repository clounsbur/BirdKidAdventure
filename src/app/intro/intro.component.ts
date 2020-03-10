import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';
import { Player } from '../player';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  name: string;
  character: Player;

  
    
  constructor(private router: Router, private service: MasterService) { }
  nextButton() {
    this.router.navigate(["bus"]);
    
  }
  ngOnInit(): void {
    this.character= this.service.getCharacter();
    this.name = this.service.getName();
    console.log (this.character)
  }

}
