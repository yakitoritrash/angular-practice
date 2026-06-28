import { Component, Input } from '@angular/core';
import { Task } from '../../../../DataModule/Task';

@Component({
  selector: 'app-stats-bar',
  imports: [],
  templateUrl: './stats-bar.html',
  styleUrl: './stats-bar.scss',
})
export class StatsBar {
  @Input() tasks !: Task[];
}
