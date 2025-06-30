import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListTestComponent } from './todo-list-test.component';

describe('TodoListTestComponent', () => {
  let component: TodoListTestComponent;
  let fixture: ComponentFixture<TodoListTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
