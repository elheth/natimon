import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';



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
        indeterminate: false,
        color: 'primary',
        indikatoren: [
          {name:'Kalb', completed: false}, {name:'Mastrind', completed: false}, {name:'Milchkuh', completed: false}
        ]
      },
      {
        id: '1',
        gruppeBegriff: "Schwein",
        completed: false,
        indeterminate: false,
        color: 'primary',
        indikatoren: [
          {name:'Saug', completed: false}, {name:'Zuchstau', completed: false}, {name:'Mastschwein', completed: false}
        ]
      },
      {
        id: '2',
        gruppeBegriff: "Schaf",
        completed: false,
        indeterminate: false,
        color: 'primary',
        indikatoren: [
          {name:'Lamm', completed: false}, {name:'MilchSchaf', completed: false}, {name:'Fleischschaf', completed: false}
        ]
      },
      {
        id: '3',
        gruppeBegriff: "Ziege",
        completed: false,
        indeterminate: false,
        color: 'primary',
        indikatoren: [
          {name:'Lamm', completed: false}, {name:'Milchziege', completed: false}, {name:'Fleischziege', completed: false}
        ]
      },
      {
        id: '4',
        gruppeBegriff: "Huhn",
        completed: false,
        indeterminate: false,
        color: 'primary',
        indikatoren: [
          {name:'Legehenne', completed: false}, {name:'Masthuhn', completed: false}
        ]
      },
      {
        id: '5',
        gruppeBegriff: "Pute",
        completed: false,
        indeterminate: false,
        color: 'primary',
        indikatoren: [
          {name:'pute', completed: false, hidden: true}
        ]
      },
      {
        id: '6',
        gruppeBegriff: "Karpfen",
        completed: false,
        indeterminate: false,
        color: 'primary',
        indikatoren: [
          {name:'karpfen', completed: false, hidden: true}
        ]
      },
      {
        id: '7',
        gruppeBegriff: "Regenbogenforelle",
        completed: false,
        indeterminate: false,
        color: 'primary',
        indikatoren: [
          {name:'regenbogenforelle', completed: false, hidden: true}
        ]
      },

      {
        id: '8',
        gruppeBegriff: "lebensabschnitt",
        completed: false,
        indeterminate: false,
        color: 'primary',
        indikatoren: [
          {name:'Haltung', completed: false}, {name:'Transport', completed: false},{name:'Schlachtung', completed: false}
        ]
      },
      {
        id: '9',
        gruppeBegriff: "dimensionDesTierwohls",
        completed: false,
        indeterminate: false,
        color: 'primary',
        indikatoren: [
          {name:'Gesundheit', completed: false}, {name:'Verhalten', completed: false},{name:'Emotionen', completed: false}
        ]
      },

      {
        id: '10',
        gruppeBegriff: "Indikatorart",
        completed: false,
        indeterminate: false,
        color: 'primary',
        indikatoren: [
          {name:'tierbezogen', completed: false}, {name:'management-/ressourcenbezogen', completed: false}
        ]
      },
    ]
  };

  newTask = {
    gruppeBegriff: 'Sozio-Ökonomie',
    completed: false,
    color: 'primary',
    subtasks: [
      {name:'Gesetz', completed: false}, {name:'Förderung', completed: false}, {name:'Konsum', completed: false}, {name:'Produktion', completed: false}
    ]
  };

allComplete: boolean = false;
selectedTasks = []
selectedTasks2 = []

  ngOnInit(){
  }
 setCheck(completed: boolean, id: number, name: string) {
  let count = 0;

  for (let entry of this.task.indikatorenTierart[id].indikatoren) {
    if (entry.name == name)
      entry.completed = completed;

      if (entry.completed) count++;
  }

    this.task.indikatorenTierart[id].indeterminate =  (count != this.task.indikatorenTierart[id].indikatoren.length) && (count != 0);
    this.task.indikatorenTierart[id].completed = (this.task.indikatorenTierart[id].indikatoren.length == count);
  }

  setAll(completed: boolean, id: number) {
    for (let entry of this.task.indikatorenTierart[id].indikatoren) {
      this.setCheck(completed, id, entry.name)
    }
  }

  berechnung()
  {
    this.selectedTasks = [];
    let newArr = []
    for (let entry of this.task.indikatorenTierart) {

      for (let entry2 of entry.indikatoren)
      {
        if(entry2.completed) {
        this.selectedTasks.push({gruppeBegriff:entry.gruppeBegriff, indikatoren:entry2.name});
      }}
    }
    console.log(this.selectedTasks)
    this.selectedTasks.forEach(function(item) {
      let existing = newArr.filter(function(v, i) {
        return v.gruppeBegriff == item.gruppeBegriff;
      });
      if (existing.length) {
        let existingIndex = newArr.indexOf(existing[0]);
        newArr[existingIndex].indikatoren = newArr[existingIndex].indikatoren.concat(item.indikatoren);
      } else {
        if (typeof item.indikatoren == 'string')
          item.indikatoren = [item.indikatoren];
        newArr.push(item);
      }
    });

    console.log(newArr)
  }




      updateAllComplete() {
        this.allComplete = this.newTask.subtasks != null && this.newTask.subtasks.every(t => t.completed);
      }

      someComplete(): boolean {
        if (this.newTask.subtasks == null) {
          return false;
        }
        return this.newTask.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
      }

      setAll2(completed: boolean) {
        this.allComplete = completed;
        if (this.newTask.subtasks == null) {
          return;
        }
        this.newTask.subtasks.forEach(t => t.completed = completed);
      }

   berechnung2() {
     this.selectedTasks2 = []
     let newArr = []
     for (let el of this.newTask.subtasks) {
        if(el.completed == true)
        {
          this.selectedTasks2.push({gruppeBegriff:this.newTask.gruppeBegriff, indikatoren:el.name})
        }
     }
     console.log(this.selectedTasks2)
     this.selectedTasks2.forEach(function(item) {
      let existing = newArr.filter(function(v, i) {
        return v.gruppeBegriff == item.gruppeBegriff;
      });
      if (existing.length) {
        let existingIndex = newArr.indexOf(existing[0]);
        newArr[existingIndex].indikatoren = newArr[existingIndex].indikatoren.concat(item.indikatoren);
      } else {
        if (typeof item.indikatoren == 'string')
          item.indikatoren = [item.indikatoren];
        newArr.push(item);
      }
    });

    console.log(newArr)
   }
}
