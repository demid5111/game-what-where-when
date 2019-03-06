import { Component, OnInit } from '@angular/core';

const TASKS = [
    {
        isAudio: true,
        pathToAudio: '',
        name: 'Boston Dynamics',
        motto: 'always AI',
        description: 'OMG, cannot talk',
        img: 'boston_dynamics.jpeg'
    },
    {
        isAudio: false,
        isVideo: false,
        pathToAudio: '',
        pathToVideo: '',
        name: 'Boston Dynamics',
        motto: 'always AI',
        description: 'OMG, cannot talk',
        img: 'manager.jpeg'
    },
    {
        isAudio: false,
        isVideo: false,
        pathToAudio: '',
        pathToVideo: '',
        name: 'Boston Dynamics',
        motto: 'always AI',
        description: 'OMG, cannot talk',
        img: 'ai.jpeg'
    },
    {
        isAudio: false,
        isVideo: false,
        pathToAudio: '',
        pathToVideo: '',
        name: 'Boston Dynamics',
        motto: 'always AI',
        description: 'OMG, cannot talk',
        img: 'barber.jpeg'
    },
    {
        isAudio: true,
        pathToAudio: '',
        name: 'Boston Dynamics',
        motto: 'always AI',
        description: 'OMG, cannot talk',
        img: 'basketball.jpeg'
    },
    {
        isAudio: true,
        pathToAudio: '',
        name: 'Boston Dynamics',
        motto: 'always AI',
        description: 'OMG, cannot talk',
        img: 'parent.jpeg'
    },
    {
        isAudio: true,
        pathToAudio: '',
        name: 'Boston Dynamics',
        motto: 'always AI',
        description: 'OMG, cannot talk',
        img: 'gop_stop.jpeg'
    },
    {
        isAudio: true,
        pathToAudio: '',
        name: 'Boston Dynamics',
        motto: 'always AI',
        description: 'OMG, cannot talk',
        img: 'akhmet.jpeg'
    },
    {
        isAudio: true,
        pathToAudio: '',
        name: 'Boston Dynamics',
        motto: 'always AI',
        description: 'OMG, cannot talk',
        img: 'tanzor.jpeg'
    },
    {
        isAudio: true,
        pathToAudio: '',
        name: 'Boston Dynamics',
        motto: 'always AI',
        description: 'OMG, cannot talk',
        img: 'pupsik.jpeg'
    },
    {
        isAudio: true,
        pathToAudio: '',
        name: 'Boston Dynamics',
        motto: 'always AI',
        description: 'OMG, cannot talk',
        img: 'wrestler.jpeg'
    },
]


@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.scss']
})
export class QuestionDialogComponent implements OnInit {
    currentQuestion = 0;
    tasks: any[];

    constructor() { 
        this.tasks = TASKS;
    }

    ngOnInit() {
    }

    listenToAudio() {
        console.log('listening to the audio' + this.currentQuestion);
    }

}