import { Component, OnInit } from '@angular/core';
import { TaskService } from './../services/task.service';
import { Task } from './../interfaces/task';
export interface task {
  userId: string;
  id?: string,
  title: string,
  completed: string
}
@Component({
  selector: 'app-material-v2',
  templateUrl: './material-v2.page.html',
  styleUrls: ['./material-v2.page.scss'],
})
export class MaterialV2Page implements OnInit {
  displayedColumns = ['name','pj','pg','pe','pp','gf','gc','masmenos','pts'];
  dataSource: task[];
  tasks: Task[];
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    fetch('http://localhost:3000/users').then(res => res.json())
      .then(json => {
        this.dataSource = json;

        this.taskService.getAllTasks()
        .subscribe(tasks => {
          this.tasks = tasks;
          console.log(tasks);
        })
      });
  }
}
