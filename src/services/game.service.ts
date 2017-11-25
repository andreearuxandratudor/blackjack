import { Injectable } from '@angular/core';

let getScore = function (player: any): number {
    let total = 0;
    player.cards.forEach(e => {
        if (!isNaN(parseInt(e[0]))) {
            total += parseInt(e[0]);
        }
        else if (e[0] !== 'A') {
            total += 10;
        }
        else {
            total + 11 > 21 ? total += 1 : total += 11;
        }
    });
    console.log(player)
    return total;
}

@Injectable()
export class GameService {
    startGame(player: any, dealer: any): void {
        player.total = getScore(player);
        dealer.total = getScore(dealer);
        console.log("player: " + player.total);
        console.log("dealer: " + dealer.total);
    }

}