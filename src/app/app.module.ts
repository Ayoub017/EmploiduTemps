import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgendaEmployeComponent } from './agenda-employe/agenda-employe.component';
import { AgendaExterneComponent } from './agenda-externe/agenda-externe.component';
import {RouterModule, Routes} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatOptionModule} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

const routes: Routes = [
  { path: 'client', component: AgendaComponent },
{ path: 'employe', component: AgendaEmployeComponent },
{ path: 'externe', component: AgendaExterneComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    HeaderComponent,
    FooterComponent,
    AgendaEmployeComponent,
    AgendaExterneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    jqxSchedulerModule,
    MatSelectCountryModule.forRoot('fr'),
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatOptionModule,
    FormsModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
