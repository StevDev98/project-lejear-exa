import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  ngOninit(){
  }
  goToTables(){
  this.router.navigate(['/material'])
  }
  materialv2(){
    this.router.navigate(['/material-v2'])
    }

  tablaNorm(){
      this.router.navigate(['/tabla'])
      }

}
