import { Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { OngComponent } from './Pages/ong/ong.component';
import { MapaComponent } from './Pages/mapa/mapa.component';
import { BienalComponent } from './Pages/bienal/bienal.component';
import { ArtistasComponent } from './Pages/artistas/artistas.component';
import { InicioEngComponent } from './Pages/inicio-eng/inicio-eng.component';
import { HomeComponent } from './Pages/Home/home.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    { path: 'inicio', component: InicioComponent },
    { path: 'ong', component: OngComponent },
    { path: 'mapa', component: MapaComponent },
    { path: 'bienal', component: BienalComponent },
    { path: 'artistas', component: ArtistasComponent },
    {path:'inicio_eng',component:InicioEngComponent},
    {path:'**', component: InicioComponent}
];


