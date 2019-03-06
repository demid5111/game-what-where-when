import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

import '../../../javascript-winwheel/Winwheel';

const COLORS = {
  INACTIVE_SECTOR: 'gray',
  ACTIVE_SECTOR: 'yellow'
};

@Component({
  selector: 'app-wheel-wrapper',
  templateUrl: './wheel-wrapper.component.html',
  styleUrls: ['./wheel-wrapper.component.scss']
})
export class WheelWrapperComponent implements OnInit, OnChanges {
  audio: any;
  theWheel: any;
  canvas: any;
  sectorColors = [
      'rgba(217,64,121,0.7)',
      'rgba(0, 128, 144, 1)',
      'rgba(138, 196, 199, 1)',
      'rgba(191, 191, 61, 1)',
      'rgba(109, 15, 63, 1)',
      'rgba(180,45,51,0.7)',
      'rgba(228, 231, 140, 1)',
      'rgba(43,151,197,0.7)',
      'rgba(246, 104, 57, 1)',
      'rgba(20,4,104,0.7)',
      'rgba(0, 128, 0, 1)',
      'rgba(210,180,222,0.7)',
      'rgba(255,0,0, 1)'
  ];
  currentSelectedSegmentNumber: number;

  @Input()
  sectorsOpened: any[];

  @Input()
  startRotating: any;

  @Output()
  sectorSelected: EventEmitter<any> =  new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.canvas = document.getElementById('canvas');
    
    this.initializeWheel();

    this.audio = new Audio('kids-music.mp3');

    // Specify click handler for canvas.
    this.canvas.onclick =  (e) => {
      // Call the getSegmentAt function passing the mouse x and y from the event.
      const clickedSegment = this.theWheel.getSegmentAt(e.clientX, e.clientY);
      const segmentNumber = +clickedSegment.text.split(' ')[1];
      
      if (!clickedSegment) {
        return;
      }

      this.sectorSelected.emit(segmentNumber);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    Object.keys(changes).forEach((key) => {
      const val = changes[key];
      if (val.isFirstChange()) {
        return;
      }
      switch (key) {
        case 'sectorsOpened':
          this.disableSectors(val.currentValue);
          return;
        case 'startRotating':
          if (!val.currentValue) {
            return;
          }
          this.startSpin();
        default:
          return;
      }
    });
  }

  disableSectors(val){
    val.forEach((el) => {
      this.sectorColors[el] = COLORS.INACTIVE_SECTOR;
    });
    this.resetSegmentColours();
  }

  startSpin() {  
    // this.audio.play();
    this.currentSelectedSegmentNumber = null;
    this.theWheel.stopAnimation(false);
    this.theWheel.rotationAngle = 0;
    this.resetSegmentColours();
    this.drawTriangle();
    this.theWheel.startAnimation();
  }
 
  // Called when the animation has finished.
  rotatingFinished()
  {
      // Stop and rewind the sound (stops it if still playing).
      // this.audio.pause();
      this.audio.currentTime = 0;
      this.resetAnimation();

      this.currentSelectedSegmentNumber = this.theWheel.getIndicatedSegmentNumber();
 
      this.drawTriangle();
      this.theWheel.draw();
    }

  addNewSegment(text: string, color: string) {
    let newSegment = this.theWheel.addSegment();
    newSegment.text = text;
    newSegment.fillStyle = color; 
    newSegment.textFontFamily = 'Alegreya SC';
    newSegment.textFontWeight = 'lighter';
  }

  resetSegmentColours() {
    this.theWheel.segments.forEach((element, i) => {
      if (!element){
        return;
      }
      element.fillStyle = this.sectorColors[i];
    });
  }
 
  // Resets the segment colours.
  fillWithSegments() {
    this.sectorColors.forEach((color, i) => {
      this.addNewSegment(`Сектор ${i+1}`, color);
    });

    // Render changes.
    this.theWheel.draw();
  }

  resetAnimation() {
    const onRotatingFinished = this.rotatingFinished.bind(this);
    const triangleRendering = this.drawTriangle.bind(this);
    const animation = {
        'type'             : 'spinToStop',
        'duration'         : 6.4,
        'callbackFinished' : onRotatingFinished,
        'callbackAfter' : triangleRendering,
        'spins'        : 5,
        'easing'       : 'Power2.easeInOut',
        'repeat'       : 0,
        'yoyo'         : false
    };
    this.theWheel.animation = animation;
  }

  drawTriangle() {
        // Get the canvas context the wheel uses.
        let ctx = this.theWheel.ctx;
 
        ctx.strokeStyle = 'navy';     // Set line colour.
        ctx.fillStyle   = 'aqua';     // Set fill colour.
        ctx.lineWidth   = 2;
        ctx.beginPath();              // Begin path.
        ctx.moveTo(330, 5);           // Move to initial position.
        ctx.lineTo(270, 5);           // Draw lines to make the shape.
        ctx.lineTo(300, 70);
        ctx.lineTo(330, 5);
        ctx.stroke();                 // Complete the path by stroking (draw lines).
        ctx.fill();                   // Then fill.
  }

  initializeWheel() {
    this.theWheel = new window['Winwheel']({
      'numSegments'   : 0,
      'outerRadius'   : 270,
      'innerRadius'   : 40,
      'textFontSize'  : 41,
      'textMargin'    : 20,
      'textAlignment'  : 'outer', 
      'textOrientation' : 'horizontal',
      'rotationAngle'   : this.getRotationAngle()
    });
    this.resetAnimation();
    this.fillWithSegments();
    this.drawTriangle();
  }

  private getRotationAngle(){
    return (360 / this.sectorColors.length) / 2;
  }
}
