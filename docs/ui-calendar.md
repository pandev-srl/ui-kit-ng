# ui-calendar

## Descrizione

Il componente `ui-calendar` fornisce un calendario completo e interattivo con supporto per eventi, navigazione tra i mesi e personalizzazione del primo giorno della settimana. Utilizza la libreria Luxon per la gestione delle date.

## Selector

`ui-calendar`

## @Input Properties

| Property         | Type              | Default          | Description                                                              |
| ---------------- | ----------------- | ---------------- | ------------------------------------------------------------------------ |
| `refDate`        | `DateTime`        | `DateTime.now()` | Data di riferimento per il calendario (determina mese/anno visualizzato) |
| `initialWeekDay` | `WeekdayNumbers`  | `1`              | Primo giorno della settimana (1 = Lunedì, 7 = Domenica)                  |
| `events`         | `CalendarEvent[]` | `[]`             | Array di eventi da visualizzare nel calendario                           |
| `loading`        | `boolean`         | `false`          | Stato di caricamento del calendario                                      |

## @Output Events

| Event           | Type                          | Description                                                |
| --------------- | ----------------------------- | ---------------------------------------------------------- |
| `refDateChange` | `EventEmitter<DateTime>`      | Emesso quando cambia la data di riferimento del calendario |
| `eventClicked`  | `EventEmitter<CalendarEvent>` | Emesso quando l'utente clicca su un evento                 |

## Tipi di Dati

### CalendarEvent

```typescript
interface CalendarEvent {
  type: any;
  data: any;
  startDateTime: DateTime;
  endDateTime: DateTime;
  allDay: boolean;
  description: string;
  color: {
    dark: CalendarEventColor;
    light: CalendarEventColor;
  };
}

interface CalendarEventColor {
  twClass?: string;
}
```

## Esempi di Utilizzo

### Calendario Base

```html
<ui-calendar></ui-calendar>
```

### Calendario con Data Iniziale

```html
<ui-calendar [refDate]="initialDate"></ui-calendar>
```

```typescript
import { DateTime } from 'luxon';

export class MyComponent {
  initialDate = DateTime.fromISO('2024-06-01');
}
```

### Calendario con Eventi

```html
<ui-calendar
  [events]="calendarEvents"
  [loading]="isLoading"
  (eventClicked)="onEventClick($event)"
  (refDateChange)="onDateChange($event)"
>
</ui-calendar>
```

```typescript
import { DateTime } from 'luxon';
import { CalendarEvent } from '@your-package/ui-kit';

export class MyComponent {
  isLoading = false;

  calendarEvents: CalendarEvent[] = [
    {
      type: 'meeting',
      data: { id: 1, title: 'Riunione team' },
      startDateTime: DateTime.now().startOf('day').plus({ hours: 9 }),
      endDateTime: DateTime.now().startOf('day').plus({ hours: 10 }),
      allDay: false,
      description: 'Riunione settimanale del team',
      color: {
        dark: { twClass: 'bg-blue-600' },
        light: { twClass: 'bg-blue-100' },
      },
    },
    {
      type: 'event',
      data: { id: 2, title: 'Compleanno' },
      startDateTime: DateTime.now().plus({ days: 2 }).startOf('day'),
      endDateTime: DateTime.now().plus({ days: 2 }).endOf('day'),
      allDay: true,
      description: 'Compleanno di Marco',
      color: {
        dark: { twClass: 'bg-green-600' },
        light: { twClass: 'bg-green-100' },
      },
    },
  ];

  onEventClick(event: CalendarEvent) {
    console.log('Evento cliccato:', event);
    // Logica per gestire il click sull'evento
  }

  onDateChange(newDate: DateTime) {
    console.log('Data cambiata:', newDate.toISODate());
    // Logica per gestire il cambio di mese
  }
}
```

### Calendario con Primo Giorno Personalizzato

```html
<!-- Inizia la settimana con Domenica -->
<ui-calendar [initialWeekDay]="7"></ui-calendar>
```

### Calendario con Stato di Caricamento

```html
<ui-calendar
  [events]="events"
  [loading]="loadingEvents"
  [refDate]="currentMonth"
>
</ui-calendar>
```

```typescript
export class MyComponent {
  events: CalendarEvent[] = [];
  loadingEvents = false;
  currentMonth = DateTime.now();

  async loadEventsForMonth(date: DateTime) {
    this.loadingEvents = true;
    try {
      this.events = await this.eventService.getEventsForMonth(date);
    } finally {
      this.loadingEvents = false;
    }
  }
}
```

## Note Aggiuntive

- **Dipendenza Luxon**: Il componente utilizza la libreria Luxon per la gestione delle date. Assicurati di installarla: `npm install luxon`
- **WeekdayNumbers**: I valori vanno da 1 (Lunedì) a 7 (Domenica) secondo lo standard ISO
- **Eventi Multi-giorno**: Gli eventi possono estendersi su più giorni specificando `startDateTime` e `endDateTime` appropriati
- **Colori Personalizzati**: Gli eventi supportano colori diversi per tema chiaro e scuro tramite classi Tailwind CSS
- **Two-way Binding**: Il `refDate` supporta il two-way binding: `[(refDate)]="selectedDate"`
- **Responsive**: Il calendario si adatta automaticamente a dispositivi mobile e desktop
