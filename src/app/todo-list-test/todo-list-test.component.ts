import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list-test',
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './todo-list-test.component.html',
  styleUrl: './todo-list-test.component.scss',
  standalone: true
})
export class TodoListTestComponent {
  todos: string[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo.trim());
      this.newTodo = '';
    }
  }
  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleTodo(index: number) {
    // Implement toggle functionality if needed
  }

  clearTodos() {
    this.todos = [];
  }
  getTodoCount(): number {
    return this.todos.length;
  }

  isTodoListEmpty(): boolean {
    return this.todos.length === 0;
  }

  getTodoList(): string[] {
    return this.todos;
  }

  getNewTodo(): string {
    return this.newTodo;
  }

  setNewTodo(value: string) {
    this.newTodo = value;
  }
}
