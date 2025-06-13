# ui-loading

## Descrizione

Il componente `ui-loading` fornisce un indicatore di caricamento personalizzabile con supporto per icone, testi, modalità fullscreen e overlay. È ideale per mostrare stati di caricamento durante operazioni asincrone.

## Selector

`ui-loading`

## @Input Properties

| Property         | Type             | Default          | Description                                                            |
| ---------------- | ---------------- | ---------------- | ---------------------------------------------------------------------- |
| `uiIcon`         | `string`         | Token di default | Icona da mostrare durante il caricamento                               |
| `uiIconSet`      | `string`         | Token di default | Set di icone da utilizzare (es. FontAwesome)                           |
| `spin`           | `boolean`        | `true`           | Abilita l'animazione di rotazione dell'icona                           |
| `uiIconSize`     | `string`         | `'fa-3x'`        | Dimensione dell'icona (classi CSS)                                     |
| `title`          | `string \| null` | `null`           | Testo da mostrare sotto l'icona                                        |
| `titleSize`      | `UiHeadingSize`  | `'h3'`           | Dimensione del titolo (`'h1'`, `'h2'`, `'h3'`, `'h4'`, `'h5'`, `'h6'`) |
| `filterBackdrop` | `boolean`        | `true`           | Applica un filtro di sfondo semi-trasparente                           |
| `fullscreen`     | `boolean`        | `false`          | Modalità fullscreen che copre tutta la viewport                        |

## @Output Events

Questo componente non emette eventi personalizzati.

## Esempi di Utilizzo

### Loading Base

```html
<ui-loading></ui-loading>
```

### Loading con Titolo

```html
<ui-loading
  title="Caricamento in corso..."
  titleSize="h4"
>
</ui-loading>
```

### Loading Fullscreen

```html
<ui-loading
  [fullscreen]="true"
  title="Elaborazione dati..."
  titleSize="h2"
>
</ui-loading>
```

### Loading Personalizzato

```html
<ui-loading
  uiIcon="fa-sync-alt"
  uiIconSize="fa-2x"
  title="Sincronizzazione..."
  [spin]="true"
  [filterBackdrop]="false"
>
</ui-loading>
```

### Loading Condizionale

```html
<div class="content-container">
  <!-- Contenuto principale -->
  <div
    *ngIf="!isLoading"
    class="main-content"
  >
    <h1>I tuoi dati</h1>
    <p>Contenuto caricato con successo.</p>
  </div>

  <!-- Indicatore di caricamento -->
  <ui-loading
    *ngIf="isLoading"
    title="Caricamento dati..."
    titleSize="h3"
  >
  </ui-loading>
</div>
```

```typescript
export class DataComponent implements OnInit {
  isLoading = true;
  data: any[] = [];

  constructor(private dataService: DataService) {}

  async ngOnInit() {
    await this.loadData();
  }

  async loadData() {
    this.isLoading = true;
    try {
      this.data = await this.dataService.getData();
    } finally {
      this.isLoading = false;
    }
  }
}
```

### Loading per Operazioni Specifiche

```html
<div class="upload-container">
  <input
    type="file"
    (change)="onFileSelected($event)"
    [disabled]="uploading"
  />

  <ui-loading
    *ngIf="uploading"
    uiIcon="fa-cloud-upload-alt"
    title="Upload in corso..."
    [filterBackdrop]="false"
  >
  </ui-loading>

  <div
    *ngIf="uploadComplete"
    class="success-message"
  >
    Upload completato con successo!
  </div>
</div>
```

```typescript
export class FileUploadComponent {
  uploading = false;
  uploadComplete = false;

  constructor(private uploadService: UploadService) {}

  async onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    this.uploading = true;
    this.uploadComplete = false;

    try {
      await this.uploadService.uploadFile(file);
      this.uploadComplete = true;
    } catch (error) {
      console.error('Errore durante upload:', error);
    } finally {
      this.uploading = false;
    }
  }
}
```

### Loading Globale con Servizio

```typescript
// Servizio per gestire lo stato di loading globale
@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  show() {
    this.loadingSubject.next(true);
  }

  hide() {
    this.loadingSubject.next(false);
  }
}

// Componente principale
@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <!-- Contenuto dell'app -->
      <router-outlet></router-outlet>

      <!-- Loading globale -->
      <ui-loading
        *ngIf="loadingService.loading$ | async"
        [fullscreen]="true"
        title="Caricamento..."
        titleSize="h2"
      >
      </ui-loading>
    </div>
  `,
})
export class AppComponent {
  constructor(public loadingService: LoadingService) {}
}

// Utilizzo negli altri componenti
export class SomeComponent {
  constructor(private loadingService: LoadingService) {}

  async performAction() {
    this.loadingService.show();
    try {
      await this.someAsyncOperation();
    } finally {
      this.loadingService.hide();
    }
  }
}
```

### Loading con Diverse Dimensioni

```html
<!-- Loading piccolo -->
<ui-loading
  uiIconSize="fa-lg"
  title="Caricamento..."
  titleSize="h6"
  [filterBackdrop]="false"
>
</ui-loading>

<!-- Loading medio -->
<ui-loading
  uiIconSize="fa-2x"
  title="Elaborazione..."
  titleSize="h4"
>
</ui-loading>

<!-- Loading grande -->
<ui-loading
  uiIconSize="fa-4x"
  title="Caricamento dati..."
  titleSize="h2"
  [fullscreen]="true"
>
</ui-loading>
```

### Loading con Icone Personalizzate

```html
<!-- Icona di download -->
<ui-loading
  uiIcon="fa-download"
  title="Download in corso..."
  uiIconSize="fa-3x"
>
</ui-loading>

<!-- Icona di elaborazione -->
<ui-loading
  uiIcon="fa-cogs"
  title="Elaborazione..."
  [spin]="true"
>
</ui-loading>

<!-- Icona di ricerca -->
<ui-loading
  uiIcon="fa-search"
  title="Ricerca in corso..."
  [spin]="false"
>
</ui-loading>
```

### Loading in Modal/Dialog

```typescript
// In un dialog component
@Component({
  selector: 'app-data-dialog',
  template: `
    <div class="dialog-content">
      <div
        *ngIf="!loading"
        class="data-display"
      >
        <!-- Contenuto del dialog -->
        <h2>Risultati della ricerca</h2>
        <div *ngFor="let item of searchResults">
          {{ item.name }}
        </div>
      </div>

      <ui-loading
        *ngIf="loading"
        title="Ricerca in corso..."
        titleSize="h4"
        [filterBackdrop]="false"
      >
      </ui-loading>
    </div>
  `,
})
export class DataDialogComponent implements OnInit {
  loading = true;
  searchResults: any[] = [];

  async ngOnInit() {
    await this.performSearch();
  }

  async performSearch() {
    this.loading = true;
    try {
      this.searchResults = await this.searchService.search();
    } finally {
      this.loading = false;
    }
  }
}
```

## Styling e Layout

```css
/* Personalizzazione del loading */
ui-loading {
  display: block;
  text-align: center;
  padding: 2rem;
}

/* Loading fullscreen personalizzato */
ui-loading.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Backdrop personalizzato */
ui-loading.filter-backdrop {
  background: rgba(255, 255, 255, 0.9);
}
```

## Note Aggiuntive

- **Icone**: Utilizza FontAwesome di default ma può essere personalizzato tramite injection token
- **Animazioni**: L'animazione di spin viene applicata automaticamente quando `spin` è `true`
- **Responsive**: Si adatta alle dimensioni del contenitore padre
- **Z-index**: In modalità fullscreen utilizza un z-index elevato per sovrapporsi al contenuto
- **Accessibility**: Include attributi appropriati per screen reader
- **Performance**: Utilizza OnPush change detection per ottimizzare le prestazioni
- **Configurazione**: Icone e set di icone possono essere configurati globalmente tramite injection token
- **Backdrop**: Il filtro backdrop può essere disabilitato per integrazioni più specifiche
