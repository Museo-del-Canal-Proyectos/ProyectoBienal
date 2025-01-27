import { Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { OngComponent } from './Pages/ong/ong.component';
import { MapaComponent } from './Pages/mapa/mapa.component';
import { BienalComponent } from './Pages/bienal/bienal.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'ong', component: OngComponent },
    { path: 'mapa', component: MapaComponent },
    { path: 'bienal', component: BienalComponent },
    {path:'**', component: InicioComponent}
];


