import { v4 as uuid } from "uuid";
export class Player {
  constructor() {
    this.id = uuid();
    this.cards = [];
    this.count = 0;
    this.wallet = 0;
    this.bet = 0;
    this.gameOver = false;
    this.message = null;
    this.isDealer = false;
  }

  hit() {}

  stay() {}

  getCount() {}
}
