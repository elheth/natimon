import { ApplicationRef, Component, ComponentFactoryResolver, Injector, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ApiService } from 'src/app/shared/api.service';
import { Filter } from 'src/app/shared/Filter.model';
import { IndikatorTyp } from 'src/app/shared/IndikatorTyp';
import { UserIndikatoren } from 'src/app/shared/UserIndikatoren.model';
import { UserIndikatorTierart } from 'src/app/shared/UserIndikatorTierart.model';

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
        indikatorTyp: IndikatorTyp.tier,
        gruppeBegriff: "Rind",
        checked: false,
        indeterminate: false,
        indikatoren: [
          {name:'Kalb', checked: false}, {name:'Mastrind', checked: false}, {name:'Milchkuh', checked: false}
        ]
      },
      {
        id: '1',
        indikatorTyp: IndikatorTyp.tier,
        gruppeBegriff: "Schwein",
        checked: false,
        indeterminate: false,
        indikatoren: [
          {name:'Saug', checked: false}, {name:'Zuchstau', checked: false}, {name:'Mastschwein', checked: false}
        ]
      },
      {
        id: '2',
        indikatorTyp: IndikatorTyp.tier,
        gruppeBegriff: "Schaf",
        checked: false,
        indeterminate: false,
        indikatoren: [
          {name:'Lamm', checked: false}, {name:'MilchSchaf', checked: false}, {name:'Fleischschaf', checked: false}
        ]
      },
      {
        id: '3',
        indikatorTyp: IndikatorTyp.tier,
        gruppeBegriff: "Ziege",
        checked: false,
        indeterminate: false,
        indikatoren: [
          {name:'Lamm', checked: false}, {name:'Milchziege', checked: false}, {name:'Fleischziege', checked: false}
        ]
      },
      {
        id: '4',
        indikatorTyp: IndikatorTyp.tier,
        gruppeBegriff: "Huhn",
        checked: false,
        indeterminate: false,
        indikatoren: [
          {name:'Legehenne', checked: false}, {name:'Masthuhn', checked: false}
        ]
      },
      {
        id: '5',
        indikatorTyp: IndikatorTyp.tier,
        gruppeBegriff: "Pute",
        checked: false,
        indeterminate: false,
        indikatoren: []
      },
      {
        id: '6',
        indikatorTyp: IndikatorTyp.tier,
        gruppeBegriff: "Karpfen",
        checked: false,
        indeterminate: false,
        indikatoren: []
      },
      {
        id: '7',
        indikatorTyp: IndikatorTyp.tier,
        gruppeBegriff: "Regenbogenforelle",
        checked: false,
        indeterminate: false,
        indikatoren: []
      },

      {
        id: '8',
        indikatorTyp: IndikatorTyp.lebensabschnitt,
        gruppeBegriff: "lebensabschnitt",
        checked: false,
        indeterminate: false,
        indikatoren: [
          {name:'Haltung', checked: false}, {name:'Transport', checked: false},{name:'Schlachtung', checked: false}
        ]
      },
      {
        id: '9',
        indikatorTyp: IndikatorTyp.dimensionDesTierwohls,
        gruppeBegriff: "dimensionDesTierwohls",
        checked: false,
        indeterminate: false,
        indikatoren: [
          {name:'Gesundheit', checked: false}, {name:'Verhalten', checked: false},{name:'Emotionen', checked: false}
        ]
      },

      {
        id: '10',
        indikatorTyp: IndikatorTyp.indikatorart,
        gruppeBegriff: "Indikatorart",
        checked: false,
        indeterminate: false,
        indikatoren: [
          {name:'tierbezogen', checked: false}, {name:'management-/ressourcenbezogen', checked: false}
        ]
      },
    ]
  };

  newTask = {
    gruppeBegriff: 'Sozio-Ökonomie',
    checked: false,
    indeterminate: false,
    subtasks: [
      {name:'Gesetz', checked: false}, {name:'Förderung', checked: false}, {name:'Konsum', checked: false}, {name:'Produktion', checked: false}
    ]
  };

allComplete: boolean = false;
filter: Filter[];

selectedTasks2 = []

constructor(
  private apiService: ApiService
) {}

  ngOnInit(){

    this.apiService.refTierwohlIndikatoren = this;
  }

 setCheck(checked: boolean, id: number, name: string) {
  let count = 0;

  for (let entry of this.task.indikatorenTierart[id].indikatoren) {
    if (entry.name == name)
      entry.checked = checked;

      if (entry.checked) count++;
  }

    this.task.indikatorenTierart[id].indeterminate =  (count != this.task.indikatorenTierart[id].indikatoren.length) && (count != 0);
    this.task.indikatorenTierart[id].checked = (this.task.indikatorenTierart[id].indikatoren.length == count);
  }

  setAll(checked: boolean, id: number) {
    this.task.indikatorenTierart[id].checked = checked;
    this.task.indikatorenTierart[id].indeterminate = checked;

    for (let entry of this.task.indikatorenTierart[id].indikatoren) {
      this.setCheck(checked, id, entry.name)
    }
  }

  sendTierwohlIndikatoren(){
    let userIndikatoren: UserIndikatoren = new UserIndikatoren;
    for (let entry of this.task.indikatorenTierart) {

      if (!entry.checked && !entry.indeterminate) continue;

      switch (+entry.indikatorTyp) { // das Forum sagt, dass das + Notwendig ist um daraus eine Zahl zu machen, sonst funktioniert das nicht sauber.
        case IndikatorTyp.indikatorart:
          if (userIndikatoren.indikatorart == null) userIndikatoren.indikatorart = [];
          for (let entry2 of entry.indikatoren)
            if (entry2.checked) userIndikatoren.indikatorart.push(entry2.name);
          break;
        case IndikatorTyp.dimensionDesTierwohls:
          if (userIndikatoren.dimensionDesTierwohls == null) userIndikatoren.dimensionDesTierwohls = [];
          for (let entry2 of entry.indikatoren)
            if (entry2.checked) userIndikatoren.dimensionDesTierwohls.push(entry2.name);
          break;
        case IndikatorTyp.lebensabschnitt:
          if (userIndikatoren.lebensabschnitt == null) userIndikatoren.lebensabschnitt = [];
          for (let entry2 of entry.indikatoren)
            if (entry2.checked) userIndikatoren.lebensabschnitt.push(entry2.name);
          break;
        case IndikatorTyp.tier:
          let indikatorenTierart: UserIndikatorTierart = new UserIndikatorTierart;
          indikatorenTierart.gruppeBegriff = entry.gruppeBegriff;
          if (userIndikatoren.indikatorenTierart == null) userIndikatoren.indikatorenTierart = [];
          if (entry.indikatoren.length != 0) indikatorenTierart.indikatoren = [];
          for (let entry2 of entry.indikatoren)
            if (entry2.checked) indikatorenTierart.indikatoren.push(entry2.name);
            userIndikatoren.indikatorenTierart.push(indikatorenTierart);
          break;
      }
    }
    console.log(userIndikatoren);
    console.log(this.filter);
    //this.apiService.postUserIndikatoren(userIndikatoren);
    this.apiService.postDataToWebservice(userIndikatoren).subscribe(response => console.log(response))
      console.log('ende')
  }

      updateAllComplete() {
        this.allComplete = this.newTask.subtasks != null && this.newTask.subtasks.every(t => t.checked);
      }

      someComplete(): boolean {
        if (this.newTask.subtasks == null) {
          return false;
        }
        return this.newTask.subtasks.filter(t => t.checked).length > 0 && !this.allComplete;
      }

      setAll2(checked: boolean) {
        this.allComplete = checked;
        if (this.newTask.subtasks == null) {
          return;
        }
        this.newTask.subtasks.forEach(t => t.checked = checked);
      }

   berechnung2() {
     this.selectedTasks2 = []
     for (let el of this.newTask.subtasks) {
        if(el.checked == true)
        {
          this.selectedTasks2.push({gruppeBegriff:this.newTask.gruppeBegriff, indikatoren:el.name})
        }
     }
     console.log(this.selectedTasks2)
  //   this.onFormate(this.selectedTasks2)

   }

   private onFormate(element:[{gruppeBegriff, indikatoren}]) {
     let newArr = []
     element.forEach(function(item) {
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
