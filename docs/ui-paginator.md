# ui-paginator

## Descrizione

Il componente `ui-paginator` fornisce un sistema di paginazione completo e responsivo con navigazione tra le pagine, informazioni sui risultati e supporto per dispositivi mobile e desktop.

## Selector

`ui-paginator`

## @Input Properties

| Property            | Type                | Default                       | Description                                                 |
| ------------------- | ------------------- | ----------------------------- | ----------------------------------------------------------- |
| `pagination`        | `UiPagination`      | Oggetto con valori di default | Oggetto contenente le informazioni di paginazione           |
| `descriptionLabels` | `DescriptionLabels` | Etichette di default          | Etichette personalizzabili per la descrizione dei risultati |

## @Output Events

| Event        | Type                   | Description                          |
| ------------ | ---------------------- | ------------------------------------ |
| `changePage` | `EventEmitter<number>` | Emesso quando l'utente cambia pagina |

## Tipi di Dati

### UiPagination

```typescript
interface UiPagination {
  currentPage: number; // Pagina corrente (1-based)
  numberOfPages: number; // Numero totale di pagine
  itemsPerPage: number; // Numero di elementi per pagina
  itemsCount: number; // Numero totale di elementi
}
```

### DescriptionLabels

```typescript
interface DescriptionLabels {
  showing: string; // Testo "Showing" (default: "Showing")
  to: string; // Testo "to" (default: "to")
  of: string; // Testo "of" (default: "of")
  items: string; // Testo "items" (default: "items")
}
```

## Esempi di Utilizzo

### Paginatore Base

```html
<ui-paginator
  [pagination]="paginationData"
  (changePage)="onPageChange($event)"
>
</ui-paginator>
```

```typescript
export class MyComponent {
  paginationData: UiPagination = {
    currentPage: 1,
    numberOfPages: 10,
    itemsPerPage: 20,
    itemsCount: 200,
  };

  onPageChange(page: number) {
    this.paginationData.currentPage = page;
    this.loadData(page);
  }

  loadData(page: number) {
    // Logica per caricare i dati della pagina
    console.log(`Caricamento pagina ${page}`);
  }
}
```

### Paginatore con Etichette Personalizzate

```html
<ui-paginator
  [pagination]="paginationData"
  [descriptionLabels]="customLabels"
  (changePage)="onPageChange($event)"
>
</ui-paginator>
```

```typescript
export class MyComponent {
  paginationData: UiPagination = {
    currentPage: 3,
    numberOfPages: 15,
    itemsPerPage: 10,
    itemsCount: 147,
  };

  customLabels = {
    showing: 'Visualizzando',
    to: 'a',
    of: 'di',
    items: 'elementi',
  };

  onPageChange(page: number) {
    this.paginationData = {
      ...this.paginationData,
      currentPage: page,
    };
    this.refreshData();
  }

  refreshData() {
    // Aggiorna i dati basandosi sulla pagina corrente
  }
}
```

### Integrazione con Servizio API

```typescript
export class DataTableComponent {
  paginationData: UiPagination = {
    currentPage: 1,
    numberOfPages: 1,
    itemsPerPage: 25,
    itemsCount: 0,
  };

  items: any[] = [];
  loading = false;

  constructor(private dataService: DataService) {
    this.loadData();
  }

  async onPageChange(page: number) {
    this.paginationData.currentPage = page;
    await this.loadData();
  }

  async loadData() {
    this.loading = true;
    try {
      const response = await this.dataService.getData({
        page: this.paginationData.currentPage,
        limit: this.paginationData.itemsPerPage,
      });

      this.items = response.data;
      this.paginationData = {
        currentPage: response.currentPage,
        numberOfPages: response.totalPages,
        itemsPerPage: response.limit,
        itemsCount: response.totalItems,
      };
    } finally {
      this.loading = false;
    }
  }
}
```

### Template Completo

```html
<div class="data-container">
  <!-- Tabella dati -->
  <div
    class="data-table"
    *ngIf="!loading"
  >
    <div
      *ngFor="let item of items"
      class="data-row"
    >
      {{ item.name }}
    </div>
  </div>

  <!-- Loading state -->
  <div
    *ngIf="loading"
    class="loading"
  >
    Caricamento in corso...
  </div>

  <!-- Paginatore -->
  <ui-paginator
    [pagination]="paginationData"
    [descriptionLabels]="{
      showing: 'Mostrando',
      to: 'a',
      of: 'di',
      items: 'risultati'
    }"
    (changePage)="onPageChange($event)"
  >
  </ui-paginator>
</div>
```

## Funzionalità Avanzate

### Controllo Programmatico

```typescript
export class AdvancedPaginatorComponent {
  paginationData: UiPagination = {
    currentPage: 1,
    numberOfPages: 20,
    itemsPerPage: 15,
    itemsCount: 300,
  };

  // Vai alla prima pagina
  goToFirstPage() {
    if (this.paginationData.currentPage !== 1) {
      this.onPageChange(1);
    }
  }

  // Vai all'ultima pagina
  goToLastPage() {
    if (this.paginationData.currentPage !== this.paginationData.numberOfPages) {
      this.onPageChange(this.paginationData.numberOfPages);
    }
  }

  // Vai alla pagina precedente
  goToPreviousPage() {
    if (this.paginationData.currentPage > 1) {
      this.onPageChange(this.paginationData.currentPage - 1);
    }
  }

  // Vai alla pagina successiva
  goToNextPage() {
    if (this.paginationData.currentPage < this.paginationData.numberOfPages) {
      this.onPageChange(this.paginationData.currentPage + 1);
    }
  }

  onPageChange(page: number) {
    this.paginationData.currentPage = page;
    // Logica di caricamento dati
  }
}
```

## Note Aggiuntive

- **Responsive Design**: Il componente si adatta automaticamente a schermi mobile e desktop
- **Pagine 1-based**: La numerazione delle pagine inizia da 1, non da 0
- **Calcoli Automatici**: Il componente calcola automaticamente gli indici "from" e "to" per la descrizione
- **Navigazione Intelligente**: Include logica per mostrare/nascondere pulsanti di navigazione quando appropriato
- **Breakpoint Awareness**: Utilizza il servizio `BreakpointObserver` per adattare l'interfaccia
- **Algoritmo di Paginazione**: Implementa un algoritmo intelligente per mostrare i numeri di pagina con ellipsis quando necessario
