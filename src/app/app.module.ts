import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CardsService } from 'services/cards.service';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from 'game/game.component';
import { HomeComponent } from 'home/home.component';
import { GameService } from 'services/game.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: '**', redirectTo: '/home'}
]

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CardsService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
