import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'game-what-where-when';
  gameStarted = false;
  sectorsOpened: number[];
  watchersCount = 0;
  femalesCount = 0;
  currentQuestion = null;
  startRotating = false;

  constructor(public dialog: MatDialog) {
    
  }

  ngOnInit() {
    this.sectorsOpened = [];
  }

  public startGame() {
    this.gameStarted = true;
  }

  public onSectorSelected(element) {
    this.sectorsOpened = [...this.sectorsOpened, element];
    this.currentQuestion = element-1;
  }

  rotate() {
    this.currentQuestion = null;
    this.startRotating = false;
    setTimeout(() => {
      this.startRotating = true;
    }, 10);
  }

  correctAnswer() {
    this.femalesCount += 1;
  }

  incorrectAnswer() {
    this.watchersCount += 1;
  }
}
