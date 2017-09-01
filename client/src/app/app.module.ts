import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TotalBudgetComponent } from './total-budget.component';
import { ExpensesComponent } from './expenses.component';
import { ErrorComponent } from './error.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalBudgetComponent,
    ExpensesComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
