import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-anzahl',
  templateUrl: './filter-anzahl.component.html',
  styleUrls: ['./filter-anzahl.component.css'],
})
export class FilterAnzahlComponent implements OnInit {
  filterAnzahl = [{ idFilter: 1, filter: 'Atmungssystem', anzahl: 1 },
  { idFilter: 2, filter: 'Aus-, Fort- und Weiterbildung', anzahl: 1 },
  { idFilter: 3, filter: 'Äußerer Zustand / Integument', anzahl: 1 },
  { idFilter: 4, filter: 'Betäubung und Entblutung', anzahl: 1 },
  {
    idFilter: 5,
    filter: 'Bewegungsapparat inkl. Klauen / Zehen / Ballen',
    anzahl: 1,
  },
  {
    idFilter: 6,
    filter: 'Bodenbeschaffenheit und Einstreu / Lauf- und Liegeflächen',
    anzahl: 1,
  },
  { idFilter: 7, filter: 'Ernährungszustand / Körperkondition', anzahl: 1 },
  { idFilter: 8, filter: 'Flächenangebot / Besatzdichte', anzahl: 1 },
  { idFilter: 9, filter: 'Futter', anzahl: 1 },
  {
    idFilter: 10,
    filter:
      'Haltungssystem / Stalleinrichtung und baulichtechnische Ausstattung',
    anzahl: 1,
  },
  { idFilter: 11, filter: 'Licht, Klima und Umwelt', anzahl: 1 },
  { idFilter: 12, filter: 'Medikamente und Eingriffe am Tier', anzahl: 1 },
  { idFilter: 13, filter: 'Parasiten', anzahl: 1 },
  { idFilter: 14, filter: 'Reproduktion', anzahl: 1 },
  { idFilter: 15, filter: 'Sauberkeit der Tiere', anzahl: 1 },
  { idFilter: 16, filter: 'Sonstiges', anzahl: 1 },
  {
    idFilter: 17,
    filter: 'Stoffwechsel, Kreislauf und Sinnesorgane',
    anzahl: 1,
  },
  { idFilter: 18, filter: 'Tierhandling', anzahl: 1 },
  { idFilter: 19, filter: 'Tierverluste, Nutzungs-/Haltungsdauer', anzahl: 1 },
  { idFilter: 20, filter: 'Verdauungssystem', anzahl: 1 },
  { idFilter: 21, filter: 'Verhaltensbeurteilung', anzahl: 1 },
  { idFilter: 22, filter: 'Wasser', anzahl: 1 },
  { idFilter: 23, filter: 'Weiter Erkrankungen / Befunde', anzahl: 1 },
  {
    idFilter: 24,
    filter: 'Weitere Managementmaßnahmen inkl. Hygiene',
    anzahl: 1,
  },
  { idFilter: 25, filter: 'Weitere Schlachtparameter', anzahl: 1 },
  { idFilter: 26, filter: 'Weitere Transportparameter', anzahl: 1 }];

  constructor() {}

  ngOnInit(): void {}
}
