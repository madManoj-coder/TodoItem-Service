import { Injectable } from "@angular/core";
import { Istd } from "../model/stdInterface";
import { stdArray } from "../const/std";


@Injectable({
    providedIn: "root"
})
export class StdService {

    constructor() { }

    stdArr: Array<Istd> = stdArray;

    fetchStds() {
        return this.stdArr;
    }

    onRemove(id: string) {
        let onConfirm = confirm(`Are you sure you want to delete !!!`)
        if (onConfirm) {
            let getIndex = this.stdArr.findIndex(ele => ele.id === id);
            this.stdArr.splice(getIndex, 1);
        }
    }

    addStd(obj : Istd){
        this.stdArr.push(obj);
    }
}