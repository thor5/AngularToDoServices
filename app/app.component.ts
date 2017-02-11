import {Component} from '@angular/core';
import { todos } from './shared/data';
import { Todo } from './shared/todo';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
 
export class AppComponent{
    title : string = 'Angular 2Do';
    // todos: Todo[] = todos;

    // create( title: string ){
    //     const todo = new Todo(title);
    //     this.todos.push(todo);
    // }
}