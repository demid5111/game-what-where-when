import { Component, OnInit, Input } from '@angular/core';

const TASKS = [
    {
        isAudio: true,
        pathToAudio: '../../assets/audio/robot.mp3',
        name: 'Робот',
        motto: 'Бостон дайнемикс',
        description: '',
        img: 'boston_dynamics.jpeg'
    },
    {
        isAudio: false,
        isVideo: false,
        pathToAudio: '',
        pathToVideo: '',
        name: 'Айрон',
        motto: 'менеджер',
        description: '',
        img: 'manager.jpeg'
    },
    {
        isAudio: false,
        isVideo: false,
        pathToAudio: '',
        pathToVideo: '',
        name: 'HAL 9000',
        motto: 'Искуственный интеллект',
        description: '',
        img: 'ai.jpeg'
    },
    {
        isAudio: false,
        isVideo: false,
        pathToAudio: '',
        pathToVideo: '',
        name: 'Серж',
        motto: 'Работник барбершопа',
        description: '',
        img: 'barber.jpeg'
    },
    {
        isAudio: false,
        pathToAudio: '',
        name: 'Майкл',
        motto: 'Баскетболист',
        description: '',
        img: 'basketball.jpeg'
    },
    {
        isAudio: false,
        pathToAudio: '',
        name: 'Петр',
        motto: 'отец',
        description: '',
        img: 'parent.jpeg'
    },
    {
        isAudio: false,
        pathToAudio: '',
        name: 'Леха Штырь',
        motto: 'Четкий парень',
        description: '',
        img: 'gop_stop.jpeg'
    },
    {
        isAudio: false,
        pathToAudio: '',
        name: 'Гоча',
        motto: 'Таксист',
        description: '',
        img: 'akhmet.jpeg'
    },
    {
        isAudio: false,
        pathToAudio: '',
        name: 'Артур',
        motto: 'лучший танцор-бальник 175-ой школы',
        description: '',
        img: 'tanzor.jpeg'
    },
    {
        isAudio: false,
        pathToAudio: '',
        name: 'Стас Пупсиков',
        motto: 'летний школьник',
        description: '',
        img: 'pupsik.jpeg'
    },
    {
        isAudio: false,
        pathToAudio: '',
        name: 'Ахмед',
        motto: 'кмс по вольной борьбе',
        description: '',
        img: 'wrestler.jpeg'
    },
    {
        isAudio: false,
        pathToAudio: '',
        name: 'Харви',
        motto: 'Кинопродюссер',
        description: '',
        img: 'director.jpeg'
    },
    {
        isAudio: false,
        pathToAudio: '',
        name: 'Иван',
        motto: 'Оператор колл-центра',
        description: '',
        img: 'operator.jpeg'
    },
]


@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.scss']
})
export class QuestionDialogComponent implements OnInit {
    tasks: any[];

    @Input()
    currentQuestion: number;

    constructor() { 
        this.tasks = TASKS;
    }

    ngOnInit() {
    }

    listenToAudio() {
        const audio = new Audio(this.tasks[this.currentQuestion].pathToAudio);
        audio.play();
    }

}