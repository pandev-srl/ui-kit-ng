# ui-forms

## Descrizione

Il modulo `ui-forms` fornisce una collezione completa di componenti per la creazione di form in Angular, inclusi input di testo, checkbox, select, textarea e altri elementi di form. Tutti i componenti supportano la validazione Angular, accessibilità e stili personalizzabili.

## Componenti Inclusi

- `ui-input-text` - Input di testo con supporto per diversi tipi
- `ui-input-textarea` - Area di testo multi-riga
- `ui-input-number` - Input numerico
- `ui-checkbox` - Checkbox con stato indeterminato
- `ui-select` - Select dropdown con ricerca e navigazione da tastiera
- `ui-single-file-dropzone` - Componente per upload file drag & drop
- `ui-input-wrapper` - Wrapper per styling degli input
- `ui-control-wrapper` - Wrapper per controlli form
- `ui-field-display` - Componente per visualizzazione read-only

## Proprietà Comuni (@Input)

Tutti i componenti form ereditano queste proprietà dalla classe base:

| Property                  | Type              | Default | Description                        |
| ------------------------- | ----------------- | ------- | ---------------------------------- |
| `id`                      | `string`          | -       | ID univoco per l'elemento          |
| `label`                   | `string \| null`  | `null`  | Etichetta del campo                |
| `disableValidationColors` | `boolean`         | `false` | Disabilita i colori di validazione |
| `optional`                | `boolean \| null` | `null`  | Indica se il campo è opzionale     |
| `hint`                    | `string \| null`  | `null`  | Testo di aiuto per il campo        |
| `autocomplete`            | `string`          | -       | Attributo autocomplete HTML        |

## Eventi Comuni (@Output)

| Event         | Type              | Description                                       |
| ------------- | ----------------- | ------------------------------------------------- |
| `userInput`   | `EventEmitter<T>` | Emesso quando l'utente modifica il valore         |
| `valueChange` | `EventEmitter<T>` | Emesso quando il valore cambia programmaticamente |

---

## ui-input-text

### Selector

`ui-input-text`

### @Input Properties Specifiche

| Property | Type              | Default  | Description                                                                   |
| -------- | ----------------- | -------- | ----------------------------------------------------------------------------- |
| `type`   | `UiInputTextType` | `'text'` | Tipo di input: `'email'`, `'password'`, `'tel'`, `'text'`, `'date'`, `'time'` |

### Esempi di Utilizzo

```html
<!-- Input di testo base -->
<ui-input-text
  label="Nome"
  formControlName="name"
>
</ui-input-text>

<!-- Input email -->
<ui-input-text
  type="email"
  label="Email"
  hint="Inserisci un indirizzo email valido"
  formControlName="email"
>
</ui-input-text>

<!-- Input password -->
<ui-input-text
  type="password"
  label="Password"
  formControlName="password"
>
</ui-input-text>
```

---

## ui-checkbox

### Selector

`ui-checkbox`

### @Input Properties Specifiche

| Property        | Type      | Default | Description                                                 |
| --------------- | --------- | ------- | ----------------------------------------------------------- |
| `indeterminate` | `boolean` | `false` | Abilita lo stato indeterminato (3 stati: true, false, null) |

### Esempi di Utilizzo

```html
<!-- Checkbox semplice -->
<ui-checkbox
  label="Accetto i termini e condizioni"
  formControlName="acceptTerms"
>
</ui-checkbox>

<!-- Checkbox con stato indeterminato -->
<ui-checkbox
  label="Seleziona tutto"
  [indeterminate]="true"
  formControlName="selectAll"
>
</ui-checkbox>
```

```typescript
export class MyComponent {
  form = new FormGroup({
    acceptTerms: new FormControl(false),
    selectAll: new FormControl(null), // null per stato indeterminato
  });
}
```

---

## ui-select

### Selector

`ui-select`

### @Input Properties Specifiche

| Property          | Type                | Default                 | Description                                         |
| ----------------- | ------------------- | ----------------------- | --------------------------------------------------- |
| `autoClose`       | `boolean`           | `true`                  | Chiude automaticamente quando si clicca fuori       |
| `clearable`       | `boolean`           | `false`                 | Mostra il pulsante per cancellare la selezione      |
| `closeOnClick`    | `boolean`           | `true`                  | Chiude il dropdown dopo la selezione                |
| `menuPlacement`   | `'left' \| 'right'` | `'left'`                | Posizionamento del menu dropdown                    |
| `openOnKeyUpDown` | `boolean`           | `true`                  | Apre il dropdown con i tasti freccia                |
| `options`         | `UiFormOption[]`    | `[]`                    | Array di opzioni disponibili                        |
| `prompt`          | `string`            | `'Select an option...'` | Testo mostrato quando nessuna opzione è selezionata |
| `loading`         | `boolean`           | `false`                 | Stato di caricamento                                |
| `opened`          | `boolean`           | `false`                 | Stato aperto/chiuso del dropdown (two-way binding)  |

### @Output Events Specifici

| Event          | Type                    | Description                                 |
| -------------- | ----------------------- | ------------------------------------------- |
| `openedChange` | `EventEmitter<boolean>` | Emesso quando cambia lo stato aperto/chiuso |

### Tipi di Dati

```typescript
interface UiFormOption {
  label: string; // Testo mostrato all'utente
  value: any; // Valore associato all'opzione
}
```

### Esempi di Utilizzo

```html
<!-- Select base -->
<ui-select
  label="Paese"
  [options]="countries"
  formControlName="country"
>
</ui-select>

<!-- Select con ricerca e clear -->
<ui-select
  label="Città"
  [options]="cities"
  [clearable]="true"
  [loading]="loadingCities"
  prompt="Seleziona una città..."
  formControlName="city"
>
</ui-select>

<!-- Select con two-way binding per stato aperto -->
<ui-select
  label="Categoria"
  [options]="categories"
  [(opened)]="categoryDropdownOpen"
  formControlName="category"
>
</ui-select>
```

```typescript
export class MyComponent {
  countries: UiFormOption[] = [
    { label: 'Italia', value: 'IT' },
    { label: 'Francia', value: 'FR' },
    { label: 'Germania', value: 'DE' },
  ];

  cities: UiFormOption[] = [];
  loadingCities = false;
  categoryDropdownOpen = false;

  form = new FormGroup({
    country: new FormControl(null),
    city: new FormControl(null),
    category: new FormControl(null),
  });

  async loadCities(countryCode: string) {
    this.loadingCities = true;
    try {
      this.cities = await this.locationService.getCitiesByCountry(countryCode);
    } finally {
      this.loadingCities = false;
    }
  }
}
```

---

## ui-input-textarea

### Selector

`ui-input-textarea`

### Esempi di Utilizzo

```html
<ui-input-textarea
  label="Descrizione"
  hint="Inserisci una descrizione dettagliata"
  formControlName="description"
>
</ui-input-textarea>
```

---

## ui-input-number

### Selector

`ui-input-number`

### Esempi di Utilizzo

```html
<ui-input-number
  label="Età"
  formControlName="age"
>
</ui-input-number>
```

---

## Esempio Completo di Form

```html
<form
  [formGroup]="userForm"
  (ngSubmit)="onSubmit()"
>
  <ui-input-text
    label="Nome"
    formControlName="firstName"
  >
  </ui-input-text>

  <ui-input-text
    label="Cognome"
    formControlName="lastName"
  >
  </ui-input-text>

  <ui-input-text
    type="email"
    label="Email"
    hint="Ti invieremo le comunicazioni a questo indirizzo"
    formControlName="email"
  >
  </ui-input-text>

  <ui-select
    label="Paese"
    [options]="countries"
    [clearable]="true"
    formControlName="country"
  >
  </ui-select>

  <ui-input-number
    label="Età"
    formControlName="age"
  >
  </ui-input-number>

  <ui-input-textarea
    label="Biografia"
    [optional]="true"
    formControlName="bio"
  >
  </ui-input-textarea>

  <ui-checkbox
    label="Accetto i termini e condizioni"
    formControlName="acceptTerms"
  >
  </ui-checkbox>

  <ui-checkbox
    label="Desidero ricevere newsletter"
    [optional]="true"
    formControlName="newsletter"
  >
  </ui-checkbox>

  <button
    type="submit"
    [disabled]="userForm.invalid"
  >
    Registrati
  </button>
</form>
```

```typescript
export class UserFormComponent {
  countries: UiFormOption[] = [
    { label: 'Italia', value: 'IT' },
    { label: 'Francia', value: 'FR' },
    { label: 'Germania', value: 'DE' },
  ];

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    country: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(18)]),
    bio: new FormControl(''),
    acceptTerms: new FormControl(false, [Validators.requiredTrue]),
    newsletter: new FormControl(false),
  });

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
    }
  }
}
```

## Note Aggiuntive

- **Validazione**: Tutti i componenti supportano la validazione Angular standard
- **Accessibilità**: I componenti includono supporto completo per screen reader e navigazione da tastiera
- **Styling**: Utilizzano un sistema di classi CSS per la validazione (`is-valid`, `is-invalid`, `is-pending`)
- **Control Value Accessor**: Tutti i componenti implementano l'interfaccia Angular per l'integrazione con Reactive Forms
- **Keyboard Navigation**: I componenti select supportano navigazione completa da tastiera e ricerca rapida
- **Icons**: Utilizzano token di iniezione per personalizzare le icone di validazione e controlli
