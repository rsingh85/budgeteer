import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})

export class ErrorComponent {
  public error: string;
  public showError = false;

  show(error: string): void {

    const DISPLAY_SECONDS = 4 * 1000;

    this.error = error;
    this.showError = true;

    setTimeout(
      () => this.showError = false,
      DISPLAY_SECONDS
    );
  }
}
