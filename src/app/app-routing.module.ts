import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SozioOkonomieComponent } from './components/sozio-okonomie/sozio-okonomie.component';
import { TierwohlIndikatorenComponent } from './components/tierwohl-indikatoren/tierwohl-indikatoren.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path: 'indikatoren', component: TierwohlIndikatorenComponent},
  {path: 'soziookonomie', component: SozioOkonomieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
