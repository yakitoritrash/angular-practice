import { Routes } from '@angular/router';
import { Dashboard } from './components/features/dashboard/dashboard';
import { Home } from './src/app/components/features/home/home';
import { TaskDetail } from './src/app/components/features/task-detail/task-detail';
import { NotFound } from './src/app/components/errors/not-found/not-found';

export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'tasks',
    component: Dashboard
  },
  {
    path: 'tasks/:id',
    component:TaskDetail
  },
  {
    path: '**',
    component: NotFound
  },
];
