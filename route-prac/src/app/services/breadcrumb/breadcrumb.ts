import { inject, Injectable } from '@angular/core';
import { BreadCrumb } from '../../../DataModule/BreadCrumb';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class BreadcrumbService {
  breadcrumbs$ = new BehaviorSubject<BreadCrumb[]>([]);
  router = inject(Router);
  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let url = event.urlAfterRedirects.split("/").filter((word) => word.length !== 0)
        let newCrumbs: BreadCrumb[] = [{
          label: "Home", url: '/home'
        }];
        let currentUrl = '';
        for (let segment of url) {
          if (segment === "home") continue;
          currentUrl += "/" + segment;
          let crumbObj = {
            label: segment, url: currentUrl
          }
          newCrumbs.push(crumbObj);
        }
        this.breadcrumbs$.next(newCrumbs);
      }
    })
  }

}
