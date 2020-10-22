import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  router: string;
  constructor(private _router: Router) {
    console.log(_router.url)
    this.router = _router.url;
  }

  ngOnInit(): void {
  }

}
