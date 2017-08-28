import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-total-budget',
  templateUrl: './total-budget.component.html',
  styleUrls: ['./total-budget.component.css']
})
export class TotalBudgetComponent {
  @Output() totalBudgetChanged = new EventEmitter<number>();

  public totalBudget = 0;

  onTotalBudgetUpdate(): void {
      this.totalBudgetChanged.emit(this.totalBudget);
  }
}
