import { Component, OnInit } from '@angular/core';
export interface IStudent {
  name: string;
  pj: string;
  pe: string
}
@Component({
  selector: 'app-material',
  templateUrl: './material.page.html',
  styleUrls: ['./material.page.scss'],
})
export class MaterialPage implements OnInit {
  displayedColumns = ['name','pj','pe','pp','gf','gc','masmenos','pts'];
  dataSource: IStudent[];
  constructor() { }

  ngOnInit() {
    fetch('./assets/data/students.json').then(res => res.json())
      .then(json => {
        this.dataSource = json;
      });
  }

}
