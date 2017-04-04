import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';
import {ArtistComponent} from './components/artists/artist.component';
import {AlbumComponent} from './components/album/album.component';
import { SpotifyService } from './services/spotify.service';

const appRoutes: Routes = [
    {path:'',component: SearchComponent},
    {path: 'about',component: AboutComponent},
    {path: 'artist/:id',component: ArtistComponent},
    {path: 'album/:id',component: AlbumComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);