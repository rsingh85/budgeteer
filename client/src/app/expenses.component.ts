import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Expense } from './expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {
  @Input() totalBudget: number;
  @Output() errorHappened = new EventEmitter<string>();

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
    const expense = new Expense('', 0, 0);
    expense.adding = true;

    this.expenses.push(expense);
  }

  onEdit(expenseToEdit: Expense): void {
    expenseToEdit.editing = true;
    // save a copy of the original so that, if required,  we can later cancel the edit
    this.editingOriginalExpenses[expenseToEdit.name] = Object.assign({}, expenseToEdit);
  }

  onDelete(expenseToDelete: Expense): void {
    const indexOfExpenseToDelete =
      this.expenses.findIndex(expense => expense.name === expenseToDelete.name);

    if (indexOfExpenseToDelete > -1) {
      this.expenses.splice(indexOfExpenseToDelete, 1);
    }
  }

  onSave(expenseToSave: Expense): void {

    const expenseNameAlreadyInUse =
      this.expenses.some(expense =>
          expense !== expenseToSave &&
          expense.name.toLowerCase() === expenseToSave.name.toLowerCase()
      );

    if (expenseNameAlreadyInUse) {
      this.errorHappened.emit(`The expense name ${expenseToSave.name} is already in use, please change it.`);
      return;
    }

    if (expenseToSave.editing) {
      expenseToSave.editing = false;
      delete this.editingOriginalExpenses[expenseToSave.name];
    } else if (expenseToSave.adding) {
      expenseToSave.adding = false;
    }
  }

  onCancel(expense: Expense): void {
    if (expense.editing) {
      expense.editing = false;

      const originalExpense = this.editingOriginalExpenses[expense.name];
      expense.name = originalExpense.name;
      expense.planned = originalExpense.planned;
      expense.actual = originalExpense.actual;

      delete this.editingOriginalExpenses[expense.name];
    } else if (expense.adding) {
      this.expenses.splice(this.expenses.length - 1, 1);
    }
  }

  isAddingExpenseAlready(): boolean {
    return this.expenses.some(expense => expense.adding);
  }

  getBudgetSurplus(): number {
    let totalPlannedExpenses = 0;

    this.expenses
      .forEach(expense => totalPlannedExpenses += expense.planned);

    const budgetSurplus = this.totalBudget - totalPlannedExpenses;

    return budgetSurplus;
  }
}
