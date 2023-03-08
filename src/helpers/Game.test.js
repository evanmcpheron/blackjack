const { Game } = require("./Game");

describe("Game class controller", () => {
  let game;

  const winningHand = [
    { number: "K", suit: "C" },
    { number: "K", suit: "D" },
    { number: "A", suit: "S" },
  ];
  const losingDealer = [
    { number: "K", suit: "C" },
    { number: "K", suit: "D" },
    { number: "K", suit: "D" },
  ];
  const neverBust = [
    { number: 2, suit: "C" },
    { number: 2, suit: "D" },
  ];

  describe("startNewGame()", () => {
    beforeEach(() => {
      game = new Game();
      game.startNewGame("new");
    });

    it("should start a new game with the correct data", () => {
      expect(game.deck.length).toEqual(49);
      expect(game.dealer.cards.length).toEqual(2);
      expect(game.player.cards.length).toEqual(2);
    });

    it("should continue the game", () => {
      game.startNewGame("continue");
      expect(game.message).toBeNull();

      //this makes the assumption that the player lost all of their funds
      game.wallet = 0;
      game.startNewGame("continue");
      expect(game.message).toEqual(
        "Game over! You are broke! Please start a new game."
      );
    });
  });
  describe("hit(betAmount)", () => {
    beforeEach(() => {
      game = new Game();
      game.startNewGame("new");
    });

    it("should add a card to the players hand", () => {
      //Testing to make sure the player cards increases by one
      expect(game.player.cards.length).toEqual(2);
      //REMINDER: starting wallet amount is 100
      game.hit(10);
      expect(game.bet).toEqual(10);
      expect(game.wallet).toEqual(90);

      expect(game.player.cards.length).toEqual(3);
    });

    it("should not allow you to proceed if you bet more than you have", () => {
      //REMINDER: starting wallet amount is 100
      game.hit(101);
      expect(game.message).toEqual("You can't bet more than you have.");
    });

    it("should bust player if they go over 21", () => {
      //REMINDER: starting wallet amount is 100

      //Coercing players hand for more consistent testing results
      game.player.cards = winningHand;
      game.hit(10);
      expect(game.gameOver).toBeTruthy();
      expect(game.message).toEqual("BUST!");
    });

    it("should throw an error message if there is no bet", () => {
      //REMINDER: starting wallet amount is 100
      game.hit(0);
      expect(game.message).toEqual("Please place bet.");
    });

    it("should let you continue playing if you didn't bust or get 21", () => {
      //setting cards so no matter what is picked next the player won't bust
      game.player.cards = neverBust;
      game.hit(20);
      expect(game.gameOver).not.toBeTruthy();
    });

    it("should end the game if gameOver is true", () => {
      //setting cards so no matter what is picked next the player won't bust
      game.gameOver = true;
      game.hit(20);
      expect(game.message).toEqual("Game over! Please start a new game.");
    });
  });
  describe("stay(betAmount)", () => {
    beforeEach(() => {
      game = new Game();
      game.startNewGame("new");
      game.deck = new Array(40).fill({ number: "A", suit: "H" });
    });

    it("should not allow you to proceed if you bet more than you have", () => {
      //REMINDER: starting wallet amount is 100
      game.stay(101);
      expect(game.message).toEqual("You can't bet more than you have.");
    });

    it("should throw an error message if there is no bet", () => {
      //REMINDER: starting wallet amount is 100
      game.stay(0);
      expect(game.message).toEqual("Please place bet.");
    });

    it("should stay and end the current round if there is a bet", () => {
      //REMINDER: starting wallet amount is 100

      game.player.cards = winningHand;
      game.dealer.cards = losingDealer;

      game.stay(20);
      expect(game.gameOver).toBeTruthy();
    });

    it("should have the dealer draw after you stay", () => {
      game.dealer.cards = [
        { number: 2, suit: "D" },
        { number: 2, suit: "S" },
      ];
      game.stay(20);
    });

    it("Should look for a winner if noone busts", () => {
      game.player = {
        cards: [
          { number: 10, suit: "D" },
          {
            number: 10,
            suit: "S",
          },
        ],
        count: 20,
      };
      game.dealer.cards = [{ number: 7, suit: "D" }];
      console.log(game.dealer, game.player);

      game.stay(20);
      console.log(game.dealer, game.player);
      expect(game.message).toEqual("You win!");
    });
  });
});
