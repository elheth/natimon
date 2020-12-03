import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-tierwohl-indikatoren',
  templateUrl: './tierwohl-indikatoren.component.html',
  styleUrls: ['./tierwohl-indikatoren.component.css'],
})
export class TierwohlIndikatorenComponent implements OnInit {
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Primary', completed: false, color: 'primary' },
      { name: 'Accent', completed: false, color: 'accent' },
      { name: 'Warn', completed: false, color: 'warn' },
    ],
  };

  allComplete: boolean = false;

  indikatorenTierart: [
    {
      id: '0';
      gruppeBegriff: 'Rind';
      indikatoren: [
        { name: 'Kalb'; isChecked: false },
        { name: 'Mastrind'; isChecked: false },
        { name: 'Milchkuh'; isChecked: false }
      ];
    },
    {
      id: '1';
      gruppeBegriff: 'Schwein';
      indikatoren: [
        { name: 'Saug'; isChecked: true },
        { name: 'Zuchstau'; isChecked: false },
        { name: 'Mastschwein'; isChecked: true }
      ];
    }
  ];

  constructor() {}

  ngOnInit() {}
  updateAllComplete() {
    this.allComplete =
      this.task.subtasks != null &&
      this.task.subtasks.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t) => (t.completed = completed));
  }
}
