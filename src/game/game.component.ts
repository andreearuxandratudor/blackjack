import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CardsService } from 'services/cards.service';
import { GameService } from 'services/game.service';

@Component({
    selector: 'game-component',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    public player = {
        cards: [],
        total: 0
    };
    public dealer = {
        cards: [],
        total: 0
    };

    constructor(private cardsService: CardsService, private gameService: GameService) { }

    ngOnInit() {
        this.player = {
            cards: [],
            total: 0
        };
        this.dealer = {
            cards: [],
            total: 0
        };
        this.player.cards.push(this.cardsService.getCard());
        this.player.cards.push(this.cardsService.getCard());
        this.dealer.cards.push(this.cardsService.getCard());
        this.dealer.cards.push(this.cardsService.getCard());

        this.gameService.startGame(this.player, this.dealer);
    }
}