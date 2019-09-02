import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <app-company-panel></app-company-panel>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-form-builder';
}
