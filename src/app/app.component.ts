import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListTestComponent } from './todo-list-test/todo-list-test.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoListTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'to-do-app';
}
