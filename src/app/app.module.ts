import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './shared/components/todo-form/todo-form.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StdFormComponent } from './shared/components/std-form/std-form.component';
import { StdTableComponent } from './shared/components/std-table/std-table.component';
import { StdService } from './shared/service/std.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    StdFormComponent,
    StdTableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [StdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
