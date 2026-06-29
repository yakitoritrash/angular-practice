import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './components/features/dashboard/dashboard';
import { Breadcrumb } from './components/reusable/breadcrumb/breadcrumb';

@Component({
  selector: 'app-root',
  imports: [Dashboard, RouterOutlet, Breadcrumb],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('assignment-2');
}
