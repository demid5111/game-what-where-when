import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WheelWrapperComponent } from './wheel-wrapper/wheel-wrapper.component';
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';
import { MatDialogModule, MatCardModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDialogComponent,
    WheelWrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    QuestionDialogComponent
  ]
})
export class AppModule { }
