# ui-heading

## Descrizione

Il componente `ui-heading` fornisce titoli e intestazioni stilizzati con controllo delle dimensioni semantiche. Applica le classi CSS appropriate mantenendo la semantica HTML corretta.

## Selector

`ui-heading`

## @Input Properties

| Property | Type            | Default | Description                                                                             |
| -------- | --------------- | ------- | --------------------------------------------------------------------------------------- |
| `size`   | `UiHeadingSize` | `'h1'`  | Dimensione del titolo. Valori possibili: `'h1'`, `'h2'`, `'h3'`, `'h4'`, `'h5'`, `'h6'` |

## @Output Events

Questo componente non emette eventi personalizzati.

## Esempi di Utilizzo

### Heading Base

```html
<ui-heading>Titolo Principale</ui-heading>
```

### Heading con Diverse Dimensioni

```html
<!-- Titolo principale -->
<ui-heading size="h1">Titolo Principale</ui-heading>

<!-- Sottotitolo -->
<ui-heading size="h2">Sottotitolo</ui-heading>

<!-- Sezione -->
<ui-heading size="h3">Titolo di Sezione</ui-heading>

<!-- Sottosezione -->
<ui-heading size="h4">Sottosezione</ui-heading>

<!-- Paragrafo importante -->
<ui-heading size="h5">Paragrafo Importante</ui-heading>

<!-- Dettaglio -->
<ui-heading size="h6">Dettaglio</ui-heading>
```

### Utilizzo in Layout

```html
<div class="page-container">
  <ui-heading size="h1">Dashboard</ui-heading>

  <section class="stats-section">
    <ui-heading size="h2">Statistiche</ui-heading>
    <div class="stats-grid">
      <!-- Contenuto statistiche -->
    </div>
  </section>

  <section class="reports-section">
    <ui-heading size="h2">Report</ui-heading>

    <div class="report-item">
      <ui-heading size="h3">Report Vendite</ui-heading>
      <ui-heading size="h4">Ultimo aggiornamento</ui-heading>
      <!-- Contenuto report -->
    </div>
  </section>
</div>
```

### Heading Dinamici

```html
<ui-heading [size]="getHeadingSize(level)"> {{ title }} </ui-heading>
```

```typescript
export class DynamicHeadingComponent {
  title = 'Titolo Dinamico';
  level = 2;

  getHeadingSize(level: number): UiHeadingSize {
    return `h${Math.min(Math.max(level, 1), 6)}` as UiHeadingSize;
  }
}
```

### Heading in Card/Panel

```html
<div class="card">
  <div class="card-header">
    <ui-heading size="h3">Impostazioni Account</ui-heading>
  </div>
  <div class="card-body">
    <ui-heading size="h4">Informazioni Personali</ui-heading>
    <form>
      <!-- Form fields -->
    </form>

    <ui-heading size="h4">Preferenze</ui-heading>
    <!-- Preference controls -->
  </div>
</div>
```

### Heading con Struttura Gerarchica

```html
<article class="documentation">
  <ui-heading size="h1">Guida Utente</ui-heading>

  <section>
    <ui-heading size="h2">Introduzione</ui-heading>
    <p>Contenuto introduttivo...</p>

    <ui-heading size="h3">Prerequisiti</ui-heading>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </section>

  <section>
    <ui-heading size="h2">Configurazione</ui-heading>

    <ui-heading size="h3">Installazione</ui-heading>
    <p>Istruzioni di installazione...</p>

    <ui-heading size="h4">Dipendenze</ui-heading>
    <p>Lista delle dipendenze...</p>

    <ui-heading size="h3">Configurazione Iniziale</ui-heading>
    <p>Passi per la configurazione...</p>
  </section>
</article>
```

### Heading in Liste e Tabelle

```html
<div class="content-list">
  <div
    *ngFor="let section of sections"
    class="list-section"
  >
    <ui-heading [size]="section.headingSize"> {{ section.title }} </ui-heading>
    <div class="section-content">{{ section.content }}</div>
  </div>
</div>
```

```typescript
export class ContentListComponent {
  sections = [
    {
      title: 'Sezione Principale',
      headingSize: 'h2' as UiHeadingSize,
      content: 'Contenuto della sezione principale...',
    },
    {
      title: 'Sotto-sezione',
      headingSize: 'h3' as UiHeadingSize,
      content: 'Contenuto della sotto-sezione...',
    },
    {
      title: 'Dettaglio',
      headingSize: 'h4' as UiHeadingSize,
      content: 'Contenuto di dettaglio...',
    },
  ];
}
```

### Heading con Contenuto Misto

```html
<div class="page-header">
  <ui-heading size="h1">
    <i class="fa fa-dashboard"></i>
    Dashboard Amministratore
  </ui-heading>
</div>

<div class="section-header">
  <ui-heading size="h2">
    Utenti Attivi
    <span class="badge">{{ activeUsersCount }}</span>
  </ui-heading>
</div>
```

### Responsive Headings

```html
<!-- Heading che cambia dimensione in base alla viewport -->
<ui-heading [size]="isSmallScreen ? 'h3' : 'h1'"> Titolo Responsivo </ui-heading>
```

```typescript
export class ResponsiveHeadingComponent {
  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(['(max-width: 768px)']).subscribe((result) => {
      this.isSmallScreen = result.matches;
    });
  }
}
```

## Styling e CSS

Il componente applica automaticamente le classi CSS appropriate:

```css
/* Le classi h1-h6 vengono applicate automaticamente */
ui-heading.h1 {
  /* Stili per h1 */
}

ui-heading.h2 {
  /* Stili per h2 */
}

/* etc... */

/* Personalizzazione esempio */
ui-heading {
  display: block;
  margin-bottom: 1rem;
}

.page-header ui-heading {
  color: var(--primary-color);
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 0.5rem;
}
```

## Best Practices

### Gerarchia Semantica

```html
<!-- CORRETTO: Gerarchia ordinata -->
<ui-heading size="h1">Titolo Pagina</ui-heading>
<ui-heading size="h2">Sezione</ui-heading>
<ui-heading size="h3">Sottosezione</ui-heading>

<!-- EVITARE: Saltare livelli -->
<ui-heading size="h1">Titolo Pagina</ui-heading>
<ui-heading size="h4">Sezione</ui-heading>
<!-- Salta h2 e h3 -->
```

### Accessibilità

```html
<!-- Aggiungere ID per navigazione -->
<ui-heading
  size="h2"
  id="sezione-importante"
>
  Sezione Importante
</ui-heading>

<!-- Utilizzare aria-level se necessario -->
<ui-heading
  size="h3"
  role="heading"
  aria-level="3"
>
  Sottosezione
</ui-heading>
```

## Note Aggiuntive

- **Semantica**: Il componente mantiene la corretta gerarchia semantica HTML
- **CSS Classes**: Applica automaticamente le classi h1-h6 per lo styling
- **Responsive**: Può essere utilizzato con logica responsive per adattare le dimensioni
- **Accessibility**: Mantiene la struttura corretta per screen reader e navigazione
- **Performance**: Utilizza OnPush change detection per ottimizzare le prestazioni
- **Flexibility**: Accetta qualsiasi contenuto HTML al suo interno
- **Styling**: Le classi CSS vengono applicate tramite HostBinding per massima flessibilità
