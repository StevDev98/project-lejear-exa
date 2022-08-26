import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './../interfaces/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private api = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) { }

  getAllTasks() {
    const path = `${this.api}/users/`;
    return this.http.get<Task[]>(path);
  }

  getTask(id: string) {
    const path = `${this.api}/users/${id}`;
    return this.http.get<Task>(path);
  }

}
