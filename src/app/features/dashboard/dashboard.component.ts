import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard-container">
      <h1>Dashboard MedGo</h1>
      <p>Bem-vindo ao sistema MedGo!</p>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 20px;
    }
  `],
  standalone: false
})
export class DashboardComponent {}
