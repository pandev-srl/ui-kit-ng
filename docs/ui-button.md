# ui-button

## Descrizione

Il componente `ui-button` fornisce un pulsante personalizzabile con supporto per diversi temi, dimensioni, stili e stati di caricamento. È implementato come direttiva di attributo e può essere applicato a qualsiasi elemento button o input.

## Selector

`[ui-button]`

## @Input Properties

| Property      | Type            | Default          | Description                                                                                                                 |
| ------------- | --------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `theme`       | `UiTheme`       | `'primary'`      | Tema del pulsante. Valori possibili: `'primary'`, `'secondary'`, `'accent'`, `'danger'`, `'success'`, `'warning'`, `'info'` |
| `buttonStyle` | `UiButtonStyle` | `'solid'`        | Stile del pulsante. Valori possibili: `'solid'`, `'outline'`, `'inline'`                                                    |
| `size`        | `UiButtonSize`  | `'md'`           | Dimensione del pulsante. Valori possibili: `'xl'`, `'lg'`, `'md'`, `'sm'`, `'xs'`                                           |
| `spinnerIcon` | `string`        | Token di default | Icona mostrata durante il caricamento                                                                                       |
| `disable`     | `boolean`       | `false`          | Disabilita il pulsante                                                                                                      |
| `isLoading`   | `boolean`       | `false`          | Mostra stato di caricamento e disabilita il pulsante                                                                        |

## @Output Events

Questo componente non emette eventi personalizzati.

## Esempi di Utilizzo

### Pulsante Base

```html
<button ui-button>Click me</button>
```

### Pulsante con Tema e Dimensione

```html
<button
  ui-button
  theme="success"
  size="lg"
>
  Large Success Button
</button>
```

### Pulsante Outline

```html
<button
  ui-button
  theme="danger"
  buttonStyle="outline"
>
  Outline Danger
</button>
```

### Pulsante con Stato di Caricamento

```html
<button
  ui-button
  [isLoading]="loading"
  theme="primary"
>
  {{ loading ? 'Loading...' : 'Submit' }}
</button>
```

```typescript
export class MyComponent {
  loading = false;

  onSubmit() {
    this.loading = true;
    // Simula operazione asincrona
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
```

### Pulsante Disabilitato

```html
<button
  ui-button
  [disable]="isDisabled"
  theme="secondary"
>
  Disabled Button
</button>
```

### Combinazione di Stili

```html
<!-- Pulsante piccolo inline -->
<button
  ui-button
  theme="info"
  buttonStyle="inline"
  size="sm"
>
  Small Info Link
</button>

<!-- Pulsante extra large di pericolo -->
<button
  ui-button
  theme="danger"
  size="xl"
>
  Delete All
</button>
```

## Note Aggiuntive

- Il componente applica automaticamente le classi CSS appropriate basate sui valori degli @Input
- Quando `isLoading` è `true`, il pulsante viene automaticamente disabilitato
- Quando `disable` è `true`, il pulsante viene disabilitato
- Il componente supporta l'iniezione di un'icona di spinner personalizzata tramite il token `UI_BUTTON_DEFAULT_SPINNER_ICON`
- Può essere applicato sia a elementi `<button>` che `<input type="button">` o `<input type="submit">`
