import { Component, OnInit } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
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

  task = {
    indikatorenTierart: [
      {
        id: '0',
        gruppeBegriff: "Rind",
        completed: false,
        indikatoren: [
          {name:'Kalb', completed: false}, {name:'Mastrind', completed: false}, {name:'Milchkuh', completed: false}
        ]
      },
      {
        id: '1',
        gruppeBegriff: "Schwein",
        completed: false,
        indikatoren: [
          {name:'Saug', completed: false}, {name:'Zuchstau', completed: false}, {name:'Mastschwein', completed: false}
        ]
      }

    ]
  };

  allComplete: boolean = false;
 selectedTasks = []


 updateAllComplete(id) {
    this.allComplete = this.task.indikatorenTierart[id].indikatoren != null && this.task.indikatorenTierart[id].indikatoren.every(t => t.completed);

  }

  someComplete(id): boolean {
    if (this.task.indikatorenTierart[id].indikatoren == null) {
      return false;
    }
    return this.task.indikatorenTierart[id].indikatoren.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean, id, subtask) {
   /*  console.log(id)
    console.log(subtask) */

    this.allComplete = completed;
    if (this.task.indikatorenTierart[id].indikatoren == null) {
      return;
    }
   this.task.indikatorenTierart[id].indikatoren.forEach(t => t.completed = completed);
    if(completed == true) {
     this.selectedTasks.push(subtask)
   }
   for (let index = 0; index < this.task.indikatorenTierart[id].indikatoren.length; index++) {
     let element = this.task.indikatorenTierart[id].indikatoren[index].completed;
     console.log(element)

   }
   console.log(this.selectedTasks) 


  }

 /*  indikatorenTierart: [
    {
      id: '0',
      gruppeBegriff: "Rind",
      indikatoren: [
        {name:'Kalb', completed: false}, {name:'Mastrind', completed: false}, {name:'Milchkuh', completed: false}
      ]
    },
    {
      id: '1',
      gruppeBegriff: "Schwein",
      indikatoren: [
        {name:'Saug', completed: true}, {name:'Zuchstau', completed: false}, {name:'Mastschwein', completed: true}
      ]
    }

  ]
 */


ngOnInit(){

}






}
