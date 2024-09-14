import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Necessário para ngModel

import { AppComponent } from './app.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DateSelectorComponent,
    CalendarPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Importando o FormsModule para usar ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
