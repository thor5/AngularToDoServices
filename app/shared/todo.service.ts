import { todos } from '../shared/data';
import { Todo } from '../shared/todo'

export class ToDoService{
    
     todos: Todo[] = todos;

     getTodos(): Todo[] {
         return this.todos;
     }

     createTodo(title: string){
         let todo = new Todo(title);
         this.todos.push(todo);
     }

     deleteTodo(todo: Todo) {
        let index = this.todos.indexOf(todo)

        if (index > -1){
            this.todos.splice(index,1);
        }
     }

     toggleTodo(todo: Todo) {
          todo.completed = !todo.completed;
     }
     
}