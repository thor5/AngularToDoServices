
import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo'
import { ToDoService } from './../shared/todo.service';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})

export class TodoListComponent implements OnInit {
    todos: Todo[];
     
    constructor( private ToDoService: ToDoService ){
         this.todos = [];
    }

    ngOnInit() {
         this.todos = this.ToDoService.getTodos();
    }

    delete( todo: Todo ){
       this.ToDoService.deleteTodo(todo);
    }

     
    toggle( todo: Todo ){
       this.ToDoService.toggleTodo(todo);
    }
}

