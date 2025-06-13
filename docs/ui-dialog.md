# ui-dialog

## Descrizione

Il sistema `ui-dialog` fornisce un servizio completo per la gestione di modal e dialog in Angular. Permette di aprire qualsiasi componente Angular in una finestra modale con animazioni, gestione dello z-index e controllo programmatico.

## Servizio

`UiDialogService`

## Utilizzo

Il dialog viene gestito tramite il servizio `UiDialogService` piuttosto che tramite template. Il servizio permette di aprire dinamicamente qualsiasi componente Angular in una finestra modale.

## Metodi del Servizio

### open<T>()

```typescript
open<T>(
  content: Type<T>,
  initialize: ((instance: T, contentRef: ComponentRef<T>) => void) | null,
  options: UiDialogOptions,
  id?: string
): UiDialogRef<T>
```

| Parameter    | Type               | Description                                         |
| ------------ | ------------------ | --------------------------------------------------- |
| `content`    | `Type<T>`          | Componente Angular da mostrare nel dialog           |
| `initialize` | `Function \| null` | Funzione per inizializzare l'istanza del componente |
| `options`    | `UiDialogOptions`  | Opzioni di configurazione del dialog                |
| `id`         | `string`           | ID univoco opzionale per il dialog                  |

### getById()

```typescript
getById(id: string): UiDialogRef<any> | null
```

Recupera un dialog esistente tramite il suo ID.

### close()

```typescript
close(dialogRef: UiDialogRef<any>): void
```

Chiude un dialog specifico.

## Tipi di Dati

### UiDialogOptions

```typescript
interface UiDialogOptions {
  closeOnBackdropClick?: boolean; // Chiude cliccando fuori dal dialog
  viewContainerRef: ViewContainerRef; // Container dove inserire il dialog
}
```

### UiDialogRef<T>

```typescript
abstract class UiDialogRef<T> {
  abstract get id(): string;
  abstract options: UiDialogOptions | null;
  abstract dialogRef: ComponentRef<UiDialogComponent> | null;
  abstract contentRef: ComponentRef<T> | null;
  abstract contentInstance: T | null;
  abstract onHide: Observable<void>;
  abstract hide(): void;
}
```

## Esempi di Utilizzo

### Dialog Base

```typescript
import { Component, ViewContainerRef } from '@angular/core';
import { UiDialogService } from '@your-package/ui-kit';

// Componente da mostrare nel dialog
@Component({
  selector: 'app-confirm-dialog',
  template: `
    <div class="dialog-content">
      <h2>Conferma azione</h2>
      <p>Sei sicuro di voler procedere?</p>
      <div class="dialog-actions">
        <button (click)="onCancel()">Annulla</button>
        <button (click)="onConfirm()">Conferma</button>
      </div>
    </div>
  `,
})
export class ConfirmDialogComponent {
  onConfirm?: () => void;
  onCancel?: () => void;
}

// Componente che apre il dialog
@Component({
  selector: 'app-main',
  template: ` <button (click)="openConfirmDialog()">Apri Dialog</button> `,
})
export class MainComponent {
  constructor(
    private dialogService: UiDialogService,
    private viewContainerRef: ViewContainerRef,
  ) {}

  openConfirmDialog() {
    const dialogRef = this.dialogService.open(
      ConfirmDialogComponent,
      (instance) => {
        instance.onConfirm = () => {
          console.log('Confermato!');
          dialogRef.hide();
        };
        instance.onCancel = () => {
          console.log('Annullato!');
          dialogRef.hide();
        };
      },
      {
        closeOnBackdropClick: true,
        viewContainerRef: this.viewContainerRef,
      },
    );
  }
}
```

### Dialog con Dati

```typescript
// Componente dialog che riceve dati
@Component({
  selector: 'app-user-details-dialog',
  template: `
    <div class="dialog-content">
      <h2>Dettagli Utente</h2>
      <p><strong>Nome:</strong> {{ user?.name }}</p>
      <p><strong>Email:</strong> {{ user?.email }}</p>
      <button (click)="close()">Chiudi</button>
    </div>
  `,
})
export class UserDetailsDialogComponent {
  user: { name: string; email: string } | null = null;

  close() {
    // Il dialogRef viene iniettato automaticamente
  }
}

// Apertura del dialog con dati
export class UserListComponent {
  constructor(
    private dialogService: UiDialogService,
    private viewContainerRef: ViewContainerRef,
  ) {}

  showUserDetails(user: { name: string; email: string }) {
    const dialogRef = this.dialogService.open(
      UserDetailsDialogComponent,
      (instance) => {
        instance.user = user;
      },
      {
        closeOnBackdropClick: true,
        viewContainerRef: this.viewContainerRef,
      },
    );

    // Ascolta quando il dialog viene chiuso
    dialogRef.onHide.subscribe(() => {
      console.log('Dialog chiuso');
    });
  }
}
```

### Dialog con Form

```typescript
@Component({
  selector: 'app-edit-dialog',
  template: `
    <div class="dialog-content">
      <h2>Modifica Elemento</h2>
      <form
        [formGroup]="form"
        (ngSubmit)="onSubmit()"
      >
        <ui-input-text
          label="Nome"
          formControlName="name"
        ></ui-input-text>

        <ui-input-text
          type="email"
          label="Email"
          formControlName="email"
        ></ui-input-text>

        <div class="dialog-actions">
          <button
            type="button"
            (click)="cancel()"
          >
            Annulla
          </button>
          <button
            type="submit"
            [disabled]="form.invalid"
          >
            Salva
          </button>
        </div>
      </form>
    </div>
  `,
})
export class EditDialogComponent implements OnInit {
  form!: FormGroup;
  initialData: any = null;
  onSave?: (data: any) => void;
  onCancel?: () => void;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.initialData?.name || '', Validators.required],
      email: [this.initialData?.email || '', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.form.valid && this.onSave) {
      this.onSave(this.form.value);
    }
  }

  cancel() {
    if (this.onCancel) {
      this.onCancel();
    }
  }
}

// Utilizzo
export class DataComponent {
  openEditDialog(item: any) {
    const dialogRef = this.dialogService.open(
      EditDialogComponent,
      (instance) => {
        instance.initialData = item;
        instance.onSave = (data) => {
          console.log('Salvato:', data);
          // Logica di salvataggio
          dialogRef.hide();
        };
        instance.onCancel = () => {
          dialogRef.hide();
        };
      },
      {
        closeOnBackdropClick: false, // Non chiudere cliccando fuori
        viewContainerRef: this.viewContainerRef,
      },
    );
  }
}
```

### Gestione di Dialog Multipli

```typescript
export class MultiDialogComponent {
  private openDialogs: UiDialogRef<any>[] = [];

  constructor(
    private dialogService: UiDialogService,
    private viewContainerRef: ViewContainerRef,
  ) {}

  openDialog(componentType: any, id: string) {
    const dialogRef = this.dialogService.open(
      componentType,
      null,
      {
        closeOnBackdropClick: true,
        viewContainerRef: this.viewContainerRef,
      },
      id,
    );

    this.openDialogs.push(dialogRef);

    dialogRef.onHide.subscribe(() => {
      const index = this.openDialogs.indexOf(dialogRef);
      if (index > -1) {
        this.openDialogs.splice(index, 1);
      }
    });

    return dialogRef;
  }

  closeAllDialogs() {
    this.openDialogs.forEach((dialog) => dialog.hide());
    this.openDialogs = [];
  }

  getDialogById(id: string) {
    return this.dialogService.getById(id);
  }
}
```

### Iniezione del DialogRef nel Componente

```typescript
// Il componente può ricevere automaticamente il riferimento al dialog
@Component({
  selector: 'app-auto-close-dialog',
  template: `
    <div class="dialog-content">
      <h2>Dialog Auto-Close</h2>
      <p>Questo dialog si chiuderà automaticamente tra {{ countdown }} secondi</p>
    </div>
  `,
})
export class AutoCloseDialogComponent implements OnInit, OnDestroy {
  countdown = 5;
  private timer?: number;

  constructor(private dialogRef: UiDialogRef<AutoCloseDialogComponent>) {}

  ngOnInit() {
    this.timer = window.setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.dialogRef.hide();
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
```

## Note Aggiuntive

- **Z-Index Automatico**: I dialog vengono automaticamente posizionati con z-index crescente
- **Body Overflow**: Il servizio gestisce automaticamente l'overflow del body quando i dialog sono aperti
- **Animazioni**: Include animazioni di fade-in/fade-out per apertura e chiusura
- **Memory Management**: I dialog vengono automaticamente puliti quando chiusi
- **Multiple Dialogs**: Supporta più dialog aperti contemporaneamente
- **ViewContainerRef**: Richiede un ViewContainerRef per determinare dove inserire il dialog nel DOM
- **Component Injection**: Il UiDialogRef viene automaticamente iniettato nei componenti del dialog
- **Observable onHide**: Permette di ascoltare quando un dialog viene chiuso
