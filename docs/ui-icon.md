# ui-icon

## Descrizione

La direttiva `ui-icon` fornisce un sistema unificato per la gestione delle icone nell'applicazione. Supporta diversi set di icone (FontAwesome, Material Icons, etc.) e applica automaticamente le classi CSS appropriate.

## Selector

`[uiIcon]`

## @Input Properties

| Property  | Type             | Default          | Description                                                 |
| --------- | ---------------- | ---------------- | ----------------------------------------------------------- |
| `uiIcon`  | `string`         | `''`             | Nome dell'icona da mostrare                                 |
| `iconSet` | `string \| null` | Token di default | Set di icone da utilizzare (sovrascrive il default globale) |

## @Output Events

Questa direttiva non emette eventi personalizzati.

## Esempi di Utilizzo

### Icona Base

```html
<i uiIcon="fa-home"></i>
```

### Icona con Set Personalizzato

```html
<i
  uiIcon="home"
  iconSet="material-icons"
></i>
```

### Icone in Elementi Diversi

```html
<!-- In uno span -->
<span uiIcon="fa-user"></span>

<!-- In un div -->
<div uiIcon="fa-star"></div>

<!-- In un elemento personalizzato -->
<custom-element uiIcon="fa-settings"></custom-element>
```

### Icone con FontAwesome

```html
<!-- Icone solid -->
<i uiIcon="fa-solid fa-home"></i>

<!-- Icone regular -->
<i uiIcon="fa-regular fa-heart"></i>

<!-- Icone brand -->
<i uiIcon="fa-brands fa-github"></i>

<!-- Con dimensioni -->
<i uiIcon="fa-home fa-lg"></i>
<i uiIcon="fa-home fa-2x"></i>
<i uiIcon="fa-home fa-3x"></i>
```

### Icone Dinamiche

```html
<i [uiIcon]="currentIcon"></i>
```

```typescript
export class IconComponent {
  currentIcon = 'fa-home';

  changeIcon(iconName: string) {
    this.currentIcon = iconName;
  }
}
```

### Icone Condizionali

```html
<i [uiIcon]="isActive ? 'fa-check' : 'fa-times'"></i>

<i [uiIcon]="getStatusIcon(status)"></i>
```

```typescript
export class StatusComponent {
  isActive = true;
  status = 'success';

  getStatusIcon(status: string): string {
    switch (status) {
      case 'success':
        return 'fa-check-circle';
      case 'error':
        return 'fa-times-circle';
      case 'warning':
        return 'fa-exclamation-triangle';
      case 'info':
        return 'fa-info-circle';
      default:
        return 'fa-question-circle';
    }
  }
}
```

### Icone in Pulsanti

```html
<button ui-button>
  <i uiIcon="fa-save"></i>
  Salva
</button>

<button ui-button>
  <i uiIcon="fa-download"></i>
  Download
</button>

<!-- Solo icona -->
<button ui-button>
  <i uiIcon="fa-edit"></i>
</button>
```

### Icone in Liste

```html
<ul class="menu-list">
  <li *ngFor="let item of menuItems">
    <a href="#">
      <i [uiIcon]="item.icon"></i>
      {{ item.label }}
    </a>
  </li>
</ul>
```

```typescript
export class MenuComponent {
  menuItems = [
    { label: 'Dashboard', icon: 'fa-dashboard' },
    { label: 'Utenti', icon: 'fa-users' },
    { label: 'Impostazioni', icon: 'fa-cog' },
    { label: 'Logout', icon: 'fa-sign-out' },
  ];
}
```

### Icone con Animazioni

```html
<!-- Icona che ruota -->
<i uiIcon="fa-spinner fa-spin"></i>

<!-- Icona che pulsa -->
<i uiIcon="fa-circle fa-pulse"></i>

<!-- Icona che si anima al click -->
<i
  [uiIcon]="spinnerIcon"
  [class.fa-spin]="isLoading"
  (click)="startLoading()"
>
</i>
```

```typescript
export class AnimatedIconComponent {
  spinnerIcon = 'fa-refresh';
  isLoading = false;

  startLoading() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
```

### Icone con Diversi Set

```html
<!-- FontAwesome (default) -->
<i uiIcon="fa-home"></i>

<!-- Material Icons -->
<i
  uiIcon="home"
  iconSet="material-icons"
></i>

<!-- Bootstrap Icons -->
<i
  uiIcon="house"
  iconSet="bi"
></i>

<!-- Feather Icons -->
<i
  uiIcon="home"
  iconSet="feather"
></i>
```

### Icone in Form

```html
<div class="form-group">
  <label>
    <i uiIcon="fa-user"></i>
    Nome utente
  </label>
  <input
    type="text"
    class="form-control"
  />
</div>

<div class="form-group">
  <label>
    <i uiIcon="fa-envelope"></i>
    Email
  </label>
  <input
    type="email"
    class="form-control"
  />
</div>
```

### Icone in Notifiche/Alert

```html
<div class="alert alert-success">
  <i uiIcon="fa-check-circle"></i>
  Operazione completata con successo
</div>

<div class="alert alert-danger">
  <i uiIcon="fa-exclamation-triangle"></i>
  Si è verificato un errore
</div>
```

### Icone in Card/Panel

```html
<div class="card">
  <div class="card-header">
    <i uiIcon="fa-chart-bar"></i>
    Statistiche
  </div>
  <div class="card-body">
    <!-- Contenuto card -->
  </div>
</div>
```

### Icone Responsive

```html
<!-- Mostra icone diverse su mobile/desktop -->
<i [uiIcon]="isMobile ? 'fa-bars' : 'fa-list'"></i>
```

```typescript
export class ResponsiveIconComponent {
  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(['(max-width: 768px)']).subscribe((result) => {
      this.isMobile = result.matches;
    });
  }
}
```

## Configurazione Globale

### Impostazione del Set di Icone di Default

```typescript
// In app.module.ts o nel modulo appropriato
import { UI_DEFAULT_ICON_SET } from '@your-package/ui-kit';

@NgModule({
  providers: [
    {
      provide: UI_DEFAULT_ICON_SET,
      useValue: 'fa', // FontAwesome
    },
    // oppure
    // {
    //   provide: UI_DEFAULT_ICON_SET,
    //   useValue: 'material-icons' // Material Icons
    // }
  ],
})
export class AppModule {}
```

## Set di Icone Supportati

### FontAwesome

```html
<i uiIcon="fa-solid fa-home"></i>
<i uiIcon="fa-regular fa-heart"></i>
<i uiIcon="fa-brands fa-github"></i>
```

### Material Icons

```html
<i
  uiIcon="home"
  iconSet="material-icons"
></i>
<i
  uiIcon="favorite"
  iconSet="material-icons"
></i>
<i
  uiIcon="settings"
  iconSet="material-icons"
></i>
```

### Bootstrap Icons

```html
<i
  uiIcon="house"
  iconSet="bi"
></i>
<i
  uiIcon="heart"
  iconSet="bi"
></i>
<i
  uiIcon="gear"
  iconSet="bi"
></i>
```

## Styling

```css
/* Personalizzazione generale delle icone */
[uiIcon] {
  display: inline-block;
}

/* Dimensioni personalizzate */
.icon-small {
  font-size: 0.8em;
}

.icon-large {
  font-size: 1.5em;
}

/* Colori personalizzati */
.icon-primary {
  color: var(--primary-color);
}

.icon-success {
  color: var(--success-color);
}

.icon-danger {
  color: var(--danger-color);
}
```

## Note Aggiuntive

- **Flessibilità**: Supporta qualsiasi set di icone che utilizza classi CSS
- **Performance**: La direttiva è leggera e utilizza solo HostBinding per le classi
- **Configurabile**: Il set di icone di default può essere configurato globalmente
- **Compatibilità**: Funziona con qualsiasi elemento HTML
- **Dynamic**: Supporta cambiamenti dinamici di icone e set di icone
- **CSS Classes**: Applica automaticamente le classi appropriate per il set di icone selezionato
- **Injection Token**: Utilizza un token di iniezione per massima configurabilità
