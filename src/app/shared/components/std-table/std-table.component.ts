import { Component, OnInit } from '@angular/core';
import { StdService } from '../../service/std.service';
import { Istd } from '../../model/stdInterface';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {

  constructor(private _stdService : StdService) { }

  studentArr !: Array<Istd> 
  
  ngOnInit(): void {
    this.studentArr = this._stdService.fetchStds();
  }

  onDelete(id : string){
    this._stdService.onRemove(id)
  }




}
