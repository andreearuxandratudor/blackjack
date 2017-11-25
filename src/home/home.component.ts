import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app works!';

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  navigateToGame(): void {
    this.router.navigateByUrl('/game');
  }

}
