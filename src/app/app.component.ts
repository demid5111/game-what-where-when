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
  startAudio = null;
  rotatingAudio = null;
  gongAudio = null;
  thinkingAudio = null;

  constructor(public dialog: MatDialog) {
    
  }

  ngOnInit() {
    this.sectorsOpened = [];
    this.startAudio = new Audio('../assets/audio/intro.mp3');
    this.startAudio.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
    this.startAudio.play();
  }

  public startGame() {
    this.gameStarted = true;
  }

  public onSectorSelected(element) {
    if (this.rotatingAudio) {
      this.rotatingAudio.pause();
      this.rotatingAudio.currentTime = 0;
    }
    this.sectorsOpened = [...this.sectorsOpened, element];
    this.currentQuestion = element-1;
  }

  rotate() {
    if (this.startAudio) {
      this.startAudio.pause();
      this.startAudio.currentTime = 0;
    }

    this.gongAudio = new Audio('../assets/audio/gong.mp3');
    this.gongAudio.play();
    setTimeout(() => {
      this.rotatingAudio = new Audio('../assets/audio/rotating.mp3');
      this.rotatingAudio.play();
      
      this.currentQuestion = null;
      this.startRotating = false;
      setTimeout(() => {
        this.startRotating = true;
      }, 10);
    }, 1500);
  }

  correctAnswer() {
    this.femalesCount += 1;
    if (this.femalesCount === 6) {
      const winningAudio = new Audio('../assets/audio/correct_answer.mp3');
      winningAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
      }, false);
      winningAudio.play();
    }
  }

  incorrectAnswer() {
    this.watchersCount += 1;
  }

  questionAnnounced() {
    this.gongAudio = new Audio('../assets/audio/gong.mp3');
    this.gongAudio.play();
    setTimeout(() => {
      this.gongAudio.pause();
      this.gongAudio.currentTime = 0;
    }, 5000);
  }

  minuteThinking() {
    this.thinkingAudio = new Audio('../assets/audio/thinking.mp3');
    this.thinkingAudio.play();
    setTimeout(() => {
      this.thinkingAudio.pause();
      this.thinkingAudio.currentTime = 0;
    }, 67000);
  }
}
