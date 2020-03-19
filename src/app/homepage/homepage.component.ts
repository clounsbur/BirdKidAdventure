import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { MasterService } from '../master.service';
import { trigger, state, style, transition, animation, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [
    trigger ('form', [ 
      state ('hidden', style ({ 
        opacity: '0',
      })),
      state ('show', style ({ 
        opacity: '1',
      })),
      state ('dim', style ({ 
        opacity: '.2',
      })),  
        transition('show => dim', animate('1s')),
        transition('hidden => show', animate('1s 100ms ease-in')),
    ]),
  ]
})
export class HomepageComponent implements OnInit {
  show: boolean = false;
  name: string;
  formView= "hidden";
  dimPlayer = 'show'
  showForm() {
    this.formView = 'show';
    this.dimPlayer = 'dim'
  }
  
  buildPlayer(name) {
    this.service.setName(name);

  this.router.navigate(["/character"]);
}


  constructor(private router: Router,
    private service: MasterService ) { }

  ngOnInit(): void {
  }

}
