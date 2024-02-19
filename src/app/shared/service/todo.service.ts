import { Injectable, OnInit } from "@angular/core";
import { ITodo } from "../model/todoInter";
import { todoArr } from "../const/todo";

@Injectable({
    providedIn: "root"
})
export class todoService implements OnInit {
    todosArr: Array<ITodo> = todoArr
    constructor() {

    }

    ngOnInit(): void {

    }

    fetchData() {
        return this.todosArr
    }

    addTodo(obj: ITodo) {
        this.todosArr.push(obj);
    }

    onRemove(id: string) {
        console.log(id);
        let getConfirm = confirm(`Are you sure you want to delete`)
        if (getConfirm) {
            let findTodo = this.todosArr.findIndex(todo => todo.id === id)
            console.log(findTodo);
            this.todosArr.splice(findTodo, 1)
            // let filterTodo = this.todosArr.filter(todo => todo.id === id)
            // console.log(filterTodo);
            
        }

    }

}