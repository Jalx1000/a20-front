import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-problem-1',
  standalone: true,
  imports: [CommonModule, BrowserModule],
  templateUrl: './problem-1.component.html',
  styleUrl: './problem-1.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Problem1Component {
  board: string[][] = [];

  constructor() {
    this.createBoard();
  }

  createBoard() {
    for (let row = 0; row < 8; row++) {
      this.board[row] = [];
      for (let col = 0; col < 8; col++) {
        // Alternar color de la casilla
        const isBlack = (row + col) % 2 === 1;
        this.board[row][col] = isBlack ? 'black' : 'white';
      }
    }
  }
}
