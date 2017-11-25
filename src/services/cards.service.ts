import { Injectable } from '@angular/core';

const colors = ['h', 'c', 's', 'd'];
const cards = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

let existingCards = [];

let cardExists = function (card: string): boolean {   
    return existingCards.indexOf(card) !== -1 ? true : false;
}

@Injectable()
export class CardsService {
    getCard(): string {
        let card = cards[Math.floor(Math.random() * 13)] + colors[Math.floor(Math.random() * 4)];
        if (!cardExists(card)) {
            existingCards.push(card);
            console.log(existingCards);
            return card;
        } else {
            this.getCard();
        }
    }

    resetExistingCards(): void {
        existingCards = [];
    }

}