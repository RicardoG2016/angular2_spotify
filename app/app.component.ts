import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import {HTTP_PROVIDERS} from '@angular/http';
import { HttpModule } from '@angular/http';


@Component({
  moduleId:module.id;
  selector: 'my-app',
  templateUrl: 'app.component.html',
  precompile: 'SearchComponent, AboutComponent',
})
export class AppComponent  { }
