import { Component, ViewChild } from '@angular/core';
import { ErrorComponent } from "./error.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('error') errorComponent: ErrorComponent;

  title = 'Budgeteer';
  totalBudget = 0;

  onTotalBudgetChanged(newTotalBudget: number): void {
    this.totalBudget = newTotalBudget;
  }

  onErrorHappened(error: string): void {
    this.errorComponent.show(error);
  }
}
