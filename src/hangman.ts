import words from "./words.json";

const getRandomWord = (): string => {
  return words[Math.floor(Math.random() * words.length)];
};

export default class HangmanGame {
  word: string;
  guessedLetters: string[];

  // the phase is the count of the wrong letters
  phase: number;

  constructor() {
    this.word = getRandomWord();
    this.guessedLetters = [];
    this.phase = 0;
  }

  newGame(): void {
    this.word = getRandomWord();
    this.guessedLetters = [];
    this.phase = 0;
  }

  guessLetter(letter: string): void {
    if (!this.word.includes(letter)) {
      this.phase++;
    }
    this.guessedLetters.push(letter.toLowerCase());
  }

  isGuessed(): boolean {
    if (this.phase >= 6) {
      return false;
    }

    return this.word.split("").every((l) => this.guessedLetters.includes(l));
  }
}
