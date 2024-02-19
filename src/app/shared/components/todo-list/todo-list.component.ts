import { Component, OnInit } from '@angular/core';
import { todoService } from '../../service/todo.service';
import { ITodo } from '../../model/todoInter';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private _todoForm : todoService) { }
  todos !: Array<ITodo>;

  ngOnInit(): void {
    this.todos = this._todoForm.fetchData(); 
  }

  onDelete(id : string){
    this._todoForm.onRemove(id)
  }

}
