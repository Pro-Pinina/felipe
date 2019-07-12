import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { EscritorioComponent } from './escritorio/escritorio.component';

const routes: Route[]= [
  {path: '',component: InicioComponent},
  {path: 'login', component:LoginComponent},
  {path: 'escritorio', component:EscritorioComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    EscritorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
