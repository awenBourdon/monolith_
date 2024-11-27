import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profil/profil.component';
import { TracksComponent } from './pages/tracks/tracks.component';
import { UploadComponent } from './pages/upload/upload.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tracks', component: TracksComponent},
    { path: 'upload', component: UploadComponent},
    { path: 'profile', component: ProfileComponent },
];
