import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';
import { todoService } from '../../service/todo.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(
    private _uuidService: UuidService,
    private _todoService: todoService
  ) { }

  addForm !: FormGroup;

  ngOnInit(): void {
    this.addForm = new FormGroup({
      todoItem: new FormControl()
    })
  }

  onTodoAdd() {
    if (this.addForm.valid) {
      console.log(this.addForm.value);
      let obj = { ...this.addForm.value, id: this._uuidService.generateUUID() }
      console.log(obj);
      this._todoService.addTodo(obj)
      this.addForm.reset();
    }
  }



}
