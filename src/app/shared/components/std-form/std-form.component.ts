import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from '../../const/validation';
import { UuidService } from '../../service/uuid.service';
import { StdService } from '../../service/std.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  constructor(
              private _uuidService : UuidService,
              private _stdService : StdService
            ) { }

  stdForm !: FormGroup;

  ngOnInit(): void {
    this.stdForm = new FormGroup({
      fname : new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.username)]),
      lname : new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.username)]),
      email : new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)]),
      contact : new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.number), Validators.maxLength(10), Validators.minLength(10)])
    })

  }

  onAddStd(){
    if(this.stdForm.valid){
      let obj = {
        ...this.stdForm.value, id : this._uuidService.generateUUID()
      }
      this._stdService.addStd(obj);
      this.stdForm.reset();
    }
  }

}
