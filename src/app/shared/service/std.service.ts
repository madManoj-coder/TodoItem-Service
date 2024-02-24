import { Injectable } from "@angular/core";
import { Istd } from "../model/stdInterface";
import { stdArray } from "../const/std";
import { SnackbarService } from "./snackbar.service";


@Injectable({
    providedIn: "root"
})
export class StdService {

    constructor(private _snackbarService : SnackbarService) { }

    stdArr: Array<Istd> = stdArray;

    fetchStds() {
        return this.stdArr;
    }

    onRemove(id: string) {
        // API call to remove student from DB
        // let onConfirm = confirm(`Are you sure you want to delete !!!`)
        // if (onConfirm) {
            let getIndex = this.stdArr.findIndex(ele => ele.id === id);
            this.stdArr.splice(getIndex, 1);
            this._snackbarService.openSnackBar(`Student with id ${id} is removed !!!`)
        // }
    }

    addStd(obj : Istd){
        // API call to store data in DB
        this.stdArr.push(obj);
        this._snackbarService.openSnackBar(`Student ${obj.fname} ${obj.lname} is added successfully !!!`)
    }
}