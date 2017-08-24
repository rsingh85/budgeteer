import { Component } from '@angular/core';
import { Expense } from './expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {

    public expenses: Expense[] = [
        new Expense('Grocery', 80, 0),
        new Expense('Petrol', 15, 0),
        new Expense('Mortgage', 400, 0)
    ];

    onAddExpense(): void {
      // todo
    }
}
