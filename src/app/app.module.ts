import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { SalirComponent } from './components/salir/salir.component';
import { FormEstudianteComponent } from './components/form-estudiante/form-estudiante.component';
import { HttpClientModule } from '@angular/common/http';

const router:Routes=[
  {path:'',component:MainComponent},
  {path:'logout',component:SalirComponent},
  {path:'insertar',component:FormEstudianteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    SalirComponent,
    FormEstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(router),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
