import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css']
})
export class DateSelectorComponent {
  @Input() startDate: Date = new Date();
  @Input() endDate: Date = new Date();
  
  @Output() onSelect = new EventEmitter<{ start: Date, end: Date }>();

  // Método para emitir o evento quando as datas forem selecionadas
  selectDates() {
    this.onSelect.emit({ start: this.startDate, end: this.endDate });
  }
}
