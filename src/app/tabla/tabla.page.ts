import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {
students: any[];

  constructor() { }

  ngOnInit() {
    fetch('./assets/data/students.json').then(res => res.json())
    .then(json => {
      this.students = json;
    });
}
}
