import { Component } from '@angular/core';

@Component({
  selector: 'app-total-budget',
  templateUrl: './total-budget.component.html',
  styleUrls: ['./total-budget.component.css']
})
export class TotalBudgetComponent {
    public totalBudget = 0;

    onTotalBudgetUpdate(): void {
        console.log('Updating total budget to:', this.totalBudget);
    }
}
