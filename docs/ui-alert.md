# ui-alert

## Descrizione

Il componente `ui-alert` fornisce un sistema di messaggi di avviso personalizzabile con supporto per diversi temi, icone e contenuti. È ideale per mostrare informazioni, avvisi, errori e messaggi di successo agli utenti.

## Selector

`ui-alert`

## @Input Properties

| Property      | Type             | Default     | Description                                                                                                               |
| ------------- | ---------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| `theme`       | `UiTheme`        | `'primary'` | Tema dell'alert. Valori possibili: `'primary'`, `'secondary'`, `'accent'`, `'danger'`, `'success'`, `'warning'`, `'info'` |
| `title`       | `string \| null` | `null`      | Titolo dell'alert                                                                                                         |
| `description` | `string \| null` | `null`      | Descrizione/contenuto dell'alert                                                                                          |
| `icon`        | `string \| null` | `null`      | Icona personalizzata. Se non specificata, viene utilizzata l'icona di default del tema                                    |

## @Output Events

Questo componente non emette eventi personalizzati.

## Esempi di Utilizzo

### Alert Base

```html
<ui-alert
  title="Informazione"
  description="Questo è un messaggio informativo."
>
</ui-alert>
```

### Alert di Successo

```html
<ui-alert
  theme="success"
  title="Operazione completata"
  description="I dati sono stati salvati correttamente."
>
</ui-alert>
```

### Alert di Errore

```html
<ui-alert
  theme="danger"
  title="Errore"
  description="Si è verificato un errore durante il salvataggio."
>
</ui-alert>
```

### Alert di Avviso

```html
<ui-alert
  theme="warning"
  title="Attenzione"
  description="Questa azione non può essere annullata."
>
</ui-alert>
```

### Alert con Icona Personalizzata

```html
<ui-alert
  theme="info"
  title="Suggerimento"
  description="Puoi utilizzare i tasti di scelta rapida per velocizzare il lavoro."
  icon="fa-lightbulb"
>
</ui-alert>
```

### Alert Solo con Descrizione

```html
<ui-alert
  theme="secondary"
  description="Messaggio senza titolo."
>
</ui-alert>
```

### Alert con Binding Dinamico

```html
<ui-alert
  [theme]="alertTheme"
  [title]="alertTitle"
  [description]="alertMessage"
>
</ui-alert>
```

```typescript
export class MyComponent {
  alertTheme: UiTheme = 'info';
  alertTitle = "Stato dell'applicazione";
  alertMessage = 'Tutto funziona correttamente.';

  showError() {
    this.alertTheme = 'danger';
    this.alertTitle = 'Errore di connessione';
    this.alertMessage = 'Impossibile connettersi al server.';
  }

  showSuccess() {
    this.alertTheme = 'success';
    this.alertTitle = 'Successo';
    this.alertMessage = 'Operazione completata con successo.';
  }
}
```

## Note Aggiuntive

- **Icone di Default**: Ogni tema ha un'icona di default associata:

  - `danger`: `fa-times-circle`
  - `success`: `fa-check-circle`
  - `warning`: `fa-exclamation-circle`
  - `info`: `fa-info-circle`
  - `primary`, `secondary`, `accent`: nessuna icona di default

- Se viene specificato un valore per `icon`, questo sovrascrive l'icona di default del tema
- Il componente applica automaticamente le classi CSS appropriate basate sul tema selezionato
- Sia `title` che `description` sono opzionali, permettendo flessibilità nella struttura del contenuto
- Le icone utilizzano Font Awesome come sistema di riferimento
