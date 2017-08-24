import { Component } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {

    public expenses: any[] = [
        {
            name: 'Grocery',
            planned: 80,
            actual: 0
        },
        {
            name: 'Petrol',
            planned: 15,
            actual: 0
        },
        {
            name: 'Mortgage',
            planned: 400,
            actual: 0
        }
    ];

    getPlannedActualDifference(expense: any): number {
      return expense.planned - expense.actual;
    }

    onAddExpense(): void {

    }
}
