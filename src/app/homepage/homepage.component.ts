


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms'
import { MasterService } from '../master.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
name: string;
  buildPlayer(name) {
    this.service.setName(name);
console.log (name)
  this.router.navigate(["/character"]);
}


  constructor(private router: Router,
    private service: MasterService ) { }

  ngOnInit(): void {
  }

}
