import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="angular-widget-container">
      <h2>Angular Widget</h2>
      <p>This is running inside React!</p>
      <button (click)="count = count + 1">Count: {{count}}</button>
    </div>
  `,
  styles: [`
    .angular-widget-container {
      border: 2px solid red;
      padding: 1rem;
      border-radius: 8px;
    }
    h2 { color: red; }
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'angular-widget';
  count = 0;
}
