export class Expense {

  public editing: boolean = false;
  public adding: boolean = false;

  constructor(
    public name: string,
    public planned: number,
    public actual: number
  ) {}

  getPlannedActualDifference(): number {
    return this.planned - this.actual;
  }

  isActualOverPlanned(): boolean {
    return (this.planned - this.actual) < 0;
  }
}
