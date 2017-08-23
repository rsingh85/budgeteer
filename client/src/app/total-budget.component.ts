import { Component } from '@angular/core';

@Component({
  selector: 'app-total-budget',
  templateUrl: './total-budget.component.html',
  styleUrls: ['./total-budget.component.css']
})
export class TotalBudgetComponent {
    private totalBudget = 0;

    updateTotalBudget(): void {
        console.log('Updating total budget to:', this.totalBudget);
    }
}
