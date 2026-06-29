import { Component, inject } from '@angular/core';
import { BreadcrumbService } from '../../../services/breadcrumb/breadcrumb';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
})
export class Breadcrumb {
  trail$ = inject(BreadcrumbService).breadcrumbs$;
}
