import { Component } from '@angular/core';
import { Expense } from './expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {

    // some dummy expenses for development
    public expenses: Expense[] = [
        new Expense('Grocery', 80, 0),
        new Expense('Petrol', 15, 0),
        new Expense('Mortgage', 400, 0)
    ];

    public editingOriginalExpenses: { [id: string]: Expense } = {};

    onAdd(): void {
      // todo
      // validation: can't add an expense which already exists in this.expenses (by name)
    }

    onEdit(expense: Expense): void {
      expense.editing = true;
      // save a copy of the original so that, if required,  we can later cancel the edit
      this.editingOriginalExpenses[expense.name] = Object.assign({}, expense);
    }

    onDelete(expense: Expense): void {
      const indexOfExpenseToDelete =
        this.expenses.findIndex(storedExpense => storedExpense.name === expense.name);

      if (indexOfExpenseToDelete > -1) {
        this.expenses.splice(indexOfExpenseToDelete, 1);
      }
    }

    onSave(expense: Expense): void {
      // todo: save expense on server?
      expense.editing = false;
      // delete the stored original as now saving
      delete this.editingOriginalExpenses[expense.name];
    }

    onCancel(expense: Expense): void {
      expense.editing = false;
      const originalExpense = this.editingOriginalExpenses[expense.name];
      expense.name = originalExpense.name;
      expense.planned = originalExpense.planned;
      expense.actual = originalExpense.actual;
      // delete the stored original as we've reverted the expense from it
      delete this.editingOriginalExpenses[expense.name];
    }
}
