import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'game-what-where-when';
  gameStarted = false;

  public startGame() {
    this.gameStarted = true;
  }
}
