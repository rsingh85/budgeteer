export class Expense {

  public editing: boolean = false;

  constructor(
    public name: string,
    public planned: number,
    public actual: number
  ) {}

  getPlannedActualDifference(expense: any): number {
    return this.planned - this.actual;
  }
}
