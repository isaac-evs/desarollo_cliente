import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Card {
  imageUrl: string;
  flipped: boolean;
  matched: boolean;
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Memory Game";
  cards: Card[] = [];
  flippedCards: number[] = [];
  attempts = 0;
  gameCompleted = false;
  winMessage = ""; // Variable to hold the win message

  constructor() {
    this.initializeGame();
  }

  initializeGame() {
    const totalFish = 81; // Number of available fish images
    const fishPath = "assets/fish"; // Base path for fish images
    const fishExtension = ".webp"; // File extension for fish images

    // Dynamically create the fish image URLs
    const allFish = Array.from(
      { length: totalFish },
      (_, i) => `${fishPath}${String(i + 1).padStart(5, "0")}${fishExtension}`,
    );

    // Randomly select 6 fish from the pool for the game
    const selectedFish = this.shuffle(allFish).slice(0, 6);

    // Duplicate the selected fish to form pairs, shuffle them
    this.cards = this.shuffle(
      [...selectedFish, ...selectedFish].map(
        (imageUrl): Card => ({
          imageUrl,
          flipped: false,
          matched: false,
        }),
      ),
    );

    this.attempts = 0;
    this.gameCompleted = false;
    this.winMessage = ""; // Reset win message on new game
  }

  shuffle(array: any[]): any[] {
    return array.sort(() => Math.random() - 0.5);
  }

  flipCard(index: number) {
    if (
      this.cards[index].flipped ||
      this.flippedCards.length === 2 ||
      this.cards[index].matched
    ) {
      return;
    }

    this.cards[index].flipped = true;
    this.flippedCards.push(index);

    if (this.flippedCards.length === 2) {
      this.checkMatch();
    }
  }

  checkMatch() {
    this.attempts++;
    const [firstIndex, secondIndex] = this.flippedCards;

    if (this.cards[firstIndex].imageUrl === this.cards[secondIndex].imageUrl) {
      this.cards[firstIndex].matched = true;
      this.cards[secondIndex].matched = true;
      this.flippedCards = [];
      this.checkGameCompletion();
    } else {
      setTimeout(() => {
        this.cards[firstIndex].flipped = false;
        this.cards[secondIndex].flipped = false;
        this.flippedCards = [];
      }, 1000);
    }
  }

  checkGameCompletion() {
    if (this.cards.every((card) => card.matched)) {
      this.gameCompleted = true;
      this.winMessage = "Congratulations! You win! 🎉";
    }
  }

  resetGame() {
    this.initializeGame();
  }
}
