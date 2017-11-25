import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardsService } from 'services/cards.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor() { }

  ngOnInit() {
    
  }
}
