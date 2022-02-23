import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    './angular-material.theme.scss'
  ]
})
export class AppComponent implements OnInit {
  opened = true;

  ngOnInit() {
    
  }
}
