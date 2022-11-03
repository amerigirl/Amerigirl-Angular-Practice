import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares: any[] = [];
  xIsNext: boolean = false;
   winner: string = ""; //not sure about this

   
  constructor() { }

  ngOnInit(): void {
    this.newgame();
  }

  newgame() {
    this.squares = Array(9).fill(null);
    this.winner = " ";
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O'; //how is this read aloud?
  }

  makeMove(idx: number) { //idx = index;
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }
  

   this.winner = this.calculateWinner();

  }

  calculateWinner(){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i]; //kinda get, not totally sure

      if(                             //this conditional doesn't quite male sense on line 57
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
  return null;
}
  }
  
