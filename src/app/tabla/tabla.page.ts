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
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {
  displayedColumns = ['name'];
  dataSource: task[];
  tasks: Task[];
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    fetch('http://localhost:3000/arbitros').then(res => res.json())
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
