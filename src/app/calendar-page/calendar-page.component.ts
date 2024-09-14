import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css']
})
export class CalendarPageComponent {
  startDate: Date = new Date(2023, 0, 1);  // 1º de Janeiro de 2023
  endDate: Date = new Date(2023, 11, 31);  // 31 de Dezembro de 2023

  updateSelectedDates(event: { start: Date, end: Date }) {
    console.log('Datas selecionadas:', event.start, event.end);
    // Tratar as datas selecionadas aqui
  }
}
