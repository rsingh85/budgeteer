import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Budgeteer';
  totalBudget = 0;

  onTotalBudgetChanged(newTotalBudget: number): void {
    this.totalBudget = newTotalBudget;
  }
}
