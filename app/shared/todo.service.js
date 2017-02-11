"use strict";
var data_1 = require('../shared/data');
var todo_1 = require('../shared/todo');
var ToDoService = (function () {
    function ToDoService() {
        this.todos = data_1.todos;
    }
    ToDoService.prototype.getTodos = function () {
        return this.todos;
    };
    ToDoService.prototype.createTodo = function (title) {
        var todo = new todo_1.Todo(title);
        this.todos.push(todo);
    };
    ToDoService.prototype.deleteTodo = function (todo) {
        var index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    };
    ToDoService.prototype.toggleTodo = function (todo) {
        todo.completed = !todo.completed;
    };
    return ToDoService;
}());
exports.ToDoService = ToDoService;
//# sourceMappingURL=todo.service.js.map