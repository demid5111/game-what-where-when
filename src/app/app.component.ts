import { Component, OnInit } from '@angular/core';
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'game-what-where-when';
  gameStarted = false;
  openedSectors: number[];
  watchersCount = 0;
  femalesCount = 0;

  constructor(public dialog: MatDialog) {
    
  }

  ngOnInit() {
    this.openedSectors = [];
  }

  public startGame() {
    this.gameStarted = true;
  }

  public onSectorSelected(element) {
    this.openedSectors.push(element);

    // let dialogRef = this.dialog.open(QuestionDialogComponent, {
    //   height: '500px',
    //   width: '600px',
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`); // Pizza!
    // });
    
    // dialogRef.close('Pizza!');
  }
}
