# ui-action-messages

## Descrizione

Il componente `ui-action-messages` fornisce un modo semplice per visualizzare una lista di messaggi utilizzando il sistema di alert interno. È ideale per mostrare errori di validazione, messaggi di conferma o notifiche multiple.

## Selector

`ui-action-messages`

## @Input Properties

| Property   | Type       | Default    | Description                                                                                                                         |
| ---------- | ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `theme`    | `UiTheme`  | `'danger'` | Tema per tutti i messaggi. Valori possibili: `'primary'`, `'secondary'`, `'accent'`, `'danger'`, `'success'`, `'warning'`, `'info'` |
| `messages` | `string[]` | `[]`       | Array di messaggi da visualizzare                                                                                                   |

## @Output Events

Questo componente non emette eventi personalizzati.

## Esempi di Utilizzo

### Messaggi di Errore

```html
<ui-action-messages
  theme="danger"
  [messages]="errorMessages"
>
</ui-action-messages>
```

```typescript
export class ErrorComponent {
  errorMessages = [
    'Il campo email è obbligatorio',
    'La password deve contenere almeno 8 caratteri',
    'I termini e condizioni devono essere accettati',
  ];
}
```

### Messaggi di Successo

```html
<ui-action-messages
  theme="success"
  [messages]="successMessages"
>
</ui-action-messages>
```

```typescript
export class SuccessComponent {
  successMessages = ['Profilo aggiornato con successo', 'Email di conferma inviata', 'Preferenze salvate'];
}
```

### Messaggi di Avviso

```html
<ui-action-messages
  theme="warning"
  [messages]="warningMessages"
>
</ui-action-messages>
```

```typescript
export class WarningComponent {
  warningMessages = [
    'Alcuni campi potrebbero essere mancanti',
    'La sessione scadrà tra 5 minuti',
    'Connessione instabile rilevata',
  ];
}
```

### Messaggi Informativi

```html
<ui-action-messages
  theme="info"
  [messages]="infoMessages"
>
</ui-action-messages>
```

```typescript
export class InfoComponent {
  infoMessages = [
    'Nuove funzionalità disponibili',
    'Aggiornamento del sistema programmato per stasera',
    'Consulta la guida utente per maggiori informazioni',
  ];
}
```

### Integrazione con Form

```html
<form
  [formGroup]="userForm"
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

  <ui-input-text
    type="password"
    label="Password"
    formControlName="password"
  ></ui-input-text>

  <!-- Mostra errori di validazione -->
  <ui-action-messages
    *ngIf="formErrors.length > 0"
    theme="danger"
    [messages]="formErrors"
  >
  </ui-action-messages>

  <!-- Mostra messaggi di successo -->
  <ui-action-messages
    *ngIf="successMessages.length > 0"
    theme="success"
    [messages]="successMessages"
  >
  </ui-action-messages>

  <button type="submit">Registrati</button>
</form>
```

```typescript
export class FormComponent {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  formErrors: string[] = [];
  successMessages: string[] = [];

  onSubmit() {
    this.formErrors = [];
    this.successMessages = [];

    if (this.userForm.invalid) {
      this.formErrors = this.getFormErrors();
      return;
    }

    // Simula invio form
    this.submitForm()
      .then(() => {
        this.successMessages = ['Registrazione completata con successo!'];
      })
      .catch((error) => {
        this.formErrors = ['Errore durante la registrazione. Riprova.'];
      });
  }

  private getFormErrors(): string[] {
    const errors: string[] = [];

    if (this.userForm.get('name')?.hasError('required')) {
      errors.push('Il nome è obbligatorio');
    }

    if (this.userForm.get('email')?.hasError('required')) {
      errors.push("L'email è obbligatoria");
    } else if (this.userForm.get('email')?.hasError('email')) {
      errors.push('Inserisci un indirizzo email valido');
    }

    if (this.userForm.get('password')?.hasError('required')) {
      errors.push('La password è obbligatoria');
    } else if (this.userForm.get('password')?.hasError('minlength')) {
      errors.push('La password deve contenere almeno 8 caratteri');
    }

    return errors;
  }

  private async submitForm(): Promise<void> {
    // Logica di invio form
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }
}
```

### Messaggi Dinamici

```html
<div class="action-panel">
  <button (click)="performAction('save')">Salva</button>
  <button (click)="performAction('delete')">Elimina</button>
  <button (click)="performAction('export')">Esporta</button>

  <ui-action-messages
    *ngIf="actionMessages.length > 0"
    [theme]="messageTheme"
    [messages]="actionMessages"
  >
  </ui-action-messages>
</div>
```

```typescript
export class ActionComponent {
  actionMessages: string[] = [];
  messageTheme: UiTheme = 'info';

  async performAction(action: string) {
    this.actionMessages = [];

    try {
      switch (action) {
        case 'save':
          await this.saveData();
          this.showSuccess(['Dati salvati con successo']);
          break;
        case 'delete':
          await this.deleteData();
          this.showSuccess(['Elemento eliminato']);
          break;
        case 'export':
          await this.exportData();
          this.showSuccess(['Esportazione completata']);
          break;
      }
    } catch (error) {
      this.showError(["Errore durante l'operazione", 'Riprova più tardi']);
    }
  }

  private showSuccess(messages: string[]) {
    this.messageTheme = 'success';
    this.actionMessages = messages;
    this.clearMessagesAfterDelay();
  }

  private showError(messages: string[]) {
    this.messageTheme = 'danger';
    this.actionMessages = messages;
    this.clearMessagesAfterDelay();
  }

  private clearMessagesAfterDelay() {
    setTimeout(() => {
      this.actionMessages = [];
    }, 5000);
  }

  private async saveData(): Promise<void> {
    // Logica di salvataggio
  }

  private async deleteData(): Promise<void> {
    // Logica di eliminazione
  }

  private async exportData(): Promise<void> {
    // Logica di esportazione
  }
}
```

### Messaggi da API

```typescript
export class ApiMessagesComponent {
  messages: string[] = [];
  messageTheme: UiTheme = 'info';

  constructor(private apiService: ApiService) {}

  async loadData() {
    try {
      const response = await this.apiService.getData();

      if (response.warnings && response.warnings.length > 0) {
        this.messageTheme = 'warning';
        this.messages = response.warnings;
      } else {
        this.messageTheme = 'success';
        this.messages = ['Dati caricati con successo'];
      }
    } catch (error: any) {
      this.messageTheme = 'danger';
      this.messages = error.messages || ['Errore durante il caricamento'];
    }
  }
}
```

### Messaggi Condizionali

```html
<!-- Mostra solo se ci sono messaggi -->
<ui-action-messages
  *ngIf="hasMessages"
  [theme]="currentTheme"
  [messages]="currentMessages"
>
</ui-action-messages>

<!-- Mostra diversi tipi di messaggi -->
<div class="message-container">
  <ui-action-messages
    *ngIf="errors.length > 0"
    theme="danger"
    [messages]="errors"
  >
  </ui-action-messages>

  <ui-action-messages
    *ngIf="warnings.length > 0"
    theme="warning"
    [messages]="warnings"
  >
  </ui-action-messages>

  <ui-action-messages
    *ngIf="successes.length > 0"
    theme="success"
    [messages]="successes"
  >
  </ui-action-messages>
</div>
```

```typescript
export class ConditionalMessagesComponent {
  errors: string[] = [];
  warnings: string[] = [];
  successes: string[] = [];

  get hasMessages(): boolean {
    return this.currentMessages.length > 0;
  }

  get currentMessages(): string[] {
    return [...this.errors, ...this.warnings, ...this.successes];
  }

  get currentTheme(): UiTheme {
    if (this.errors.length > 0) return 'danger';
    if (this.warnings.length > 0) return 'warning';
    if (this.successes.length > 0) return 'success';
    return 'info';
  }
}
```

## Note Aggiuntive

- **Standalone Component**: È un componente standalone che può essere importato direttamente
- **Basato su ui-alert**: Utilizza internamente il componente ui-alert per la visualizzazione
- **Responsive**: Si adatta automaticamente alle dimensioni del contenitore
- **Temi Unificati**: Tutti i messaggi nell'array utilizzano lo stesso tema
- **Array Vuoto**: Se l'array messages è vuoto, non viene visualizzato nulla
- **Performance**: Utilizza OnPush change detection per ottimizzare le prestazioni
- **Accessibility**: Eredita le caratteristiche di accessibilità dal componente ui-alert
- **Simplicity**: Progettato per essere semplice da usare con il minimo setup richiesto
