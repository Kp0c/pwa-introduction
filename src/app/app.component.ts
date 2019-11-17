import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { TodosService } from './services/todos.service';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodosService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }
}
