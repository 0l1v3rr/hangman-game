export default class HangmanGame {
  public word: string;
  public guessedLetters: string[];

  // the phase is the count of the wrong letters
  public phase: number;

  public constructor(word: string) {
    this.word = word;
    this.guessedLetters = [];
    this.phase = 0;
  }

  public guessLetter(letter: string): void {
    if (!this.word.includes(letter)) {
      this.phase++;
    }

    if (!this.guessedLetters.includes(letter)) {
      this.guessedLetters.push(letter.toLowerCase());
    }
  }

  public hint(): void {
    let wordLetters = this.word.split("");
    let result: string[] = [];

    // collect the letters that haven't been guessed
    for (const l of wordLetters) {
      if (!this.guessedLetters.includes(l)) {
        result.push(l);
      }
    }

    // select a random letter from the result and add it to the guessed letters
    this.guessedLetters.push(result[Math.floor(Math.random() * result.length)]);
  }

  public giveUp(): void {
    let wordLetters = this.word.split("");

    for (const l of wordLetters) {
      if (!this.guessedLetters.includes(l)) {
        this.guessedLetters.push(l);
      }
    }
  }

  public isGuessed(): boolean {
    if (this.phase >= 6) {
      return false;
    }

    return this.word.split("").every((l) => this.guessedLetters.includes(l));
  }
}
