import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/js/scripts.js';
    setTimeout(() => document.body.appendChild(script), 2000);
  }
}
