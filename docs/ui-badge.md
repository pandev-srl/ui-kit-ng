# ui-badge

## Descrizione

Il componente `ui-badge` fornisce un'etichetta/badge personalizzabile con supporto per diversi temi, effetto pulse e stato di caricamento. È ideale per mostrare contatori, stati o etichette informative.

## Selector

`ui-badge`

## @Input Properties

| Property  | Type              | Default     | Description                                                                                                              |
| --------- | ----------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| `title`   | `string \| null`  | `null`      | Testo da mostrare nel badge                                                                                              |
| `pulse`   | `boolean`         | `false`     | Abilita l'effetto pulse/animazione                                                                                       |
| `loading` | `boolean \| null` | `false`     | Mostra stato di caricamento con icona                                                                                    |
| `theme`   | `UiTheme`         | `'primary'` | Tema del badge. Valori possibili: `'primary'`, `'secondary'`, `'accent'`, `'danger'`, `'success'`, `'warning'`, `'info'` |

## @Output Events

Questo componente non emette eventi personalizzati.

## Esempi di Utilizzo

### Badge Base

```html
<ui-badge title="Nuovo"></ui-badge>
```

### Badge con Diversi Temi

```html
<!-- Badge di successo -->
<ui-badge
  title="Completato"
  theme="success"
>
</ui-badge>

<!-- Badge di errore -->
<ui-badge
  title="Errore"
  theme="danger"
>
</ui-badge>

<!-- Badge di avviso -->
<ui-badge
  title="Attenzione"
  theme="warning"
>
</ui-badge>

<!-- Badge informativo -->
<ui-badge
  title="Info"
  theme="info"
>
</ui-badge>
```

### Badge con Effetto Pulse

```html
<ui-badge
  title="Live"
  theme="danger"
  [pulse]="true"
>
</ui-badge>
```

### Badge con Stato di Caricamento

```html
<ui-badge
  title="Caricamento..."
  [loading]="true"
  theme="secondary"
>
</ui-badge>
```

### Badge per Contatori

```html
<div class="notification-icon">
  🔔
  <ui-badge
    [title]="notificationCount.toString()"
    theme="danger"
    [pulse]="hasNewNotifications"
  >
  </ui-badge>
</div>
```

```typescript
export class NotificationComponent {
  notificationCount = 5;
  hasNewNotifications = true;

  markAsRead() {
    this.hasNewNotifications = false;
  }
}
```

### Badge Dinamici

```html
<div class="status-container">
  <span>Stato del servizio:</span>
  <ui-badge
    [title]="serviceStatus.label"
    [theme]="serviceStatus.theme"
    [pulse]="serviceStatus.isActive"
    [loading]="serviceStatus.isLoading"
  >
  </ui-badge>
</div>
```

```typescript
export class ServiceStatusComponent {
  serviceStatus = {
    label: 'Online',
    theme: 'success' as UiTheme,
    isActive: false,
    isLoading: false,
  };

  constructor(private statusService: StatusService) {
    this.checkServiceStatus();
  }

  async checkServiceStatus() {
    this.serviceStatus.isLoading = true;

    try {
      const status = await this.statusService.getStatus();
      this.serviceStatus = {
        label: status.online ? 'Online' : 'Offline',
        theme: status.online ? 'success' : 'danger',
        isActive: status.online,
        isLoading: false,
      };
    } catch (error) {
      this.serviceStatus = {
        label: 'Errore',
        theme: 'warning',
        isActive: false,
        isLoading: false,
      };
    }
  }
}
```

### Badge in Liste

```html
<div class="task-list">
  <div
    *ngFor="let task of tasks"
    class="task-item"
  >
    <span>{{ task.name }}</span>
    <ui-badge
      [title]="task.status"
      [theme]="getTaskTheme(task.priority)"
    >
    </ui-badge>
  </div>
</div>
```

```typescript
export class TaskListComponent {
  tasks = [
    { name: 'Completare progetto', status: 'Urgente', priority: 'high' },
    { name: 'Revisione codice', status: 'Normale', priority: 'medium' },
    { name: 'Aggiornare docs', status: 'Bassa', priority: 'low' },
  ];

  getTaskTheme(priority: string): UiTheme {
    switch (priority) {
      case 'high':
        return 'danger';
      case 'medium':
        return 'warning';
      case 'low':
        return 'info';
      default:
        return 'secondary';
    }
  }
}
```

### Badge per Tag/Etichette

```html
<div class="tag-container">
  <ui-badge
    *ngFor="let tag of tags"
    [title]="tag"
    theme="accent"
  >
  </ui-badge>
</div>
```

```typescript
export class TagsComponent {
  tags = ['Angular', 'TypeScript', 'UI/UX', 'Frontend'];
}
```

### Badge con Condizioni

```html
<!-- Mostra badge solo se ci sono nuovi elementi -->
<div class="menu-item">
  <span>Messaggi</span>
  <ui-badge
    *ngIf="unreadMessages > 0"
    [title]="unreadMessages.toString()"
    theme="danger"
    [pulse]="true"
  >
  </ui-badge>
</div>

<!-- Badge con testo condizionale -->
<ui-badge
  [title]="isOnline ? 'Online' : 'Offline'"
  [theme]="isOnline ? 'success' : 'secondary'"
  [pulse]="isOnline"
>
</ui-badge>
```

```typescript
export class MessagesComponent {
  unreadMessages = 3;
  isOnline = true;

  constructor(private connectionService: ConnectionService) {
    this.connectionService.status$.subscribe((status) => {
      this.isOnline = status.connected;
    });
  }
}
```

## Styling e CSS

Il componente applica automaticamente le classi CSS appropriate:

- `badge-primary`, `badge-secondary`, `badge-accent`, etc. in base al tema
- Le animazioni pulse sono gestite tramite CSS
- Le icone di caricamento utilizzano token di iniezione per la personalizzazione

```css
/* Esempio di personalizzazione del badge */
ui-badge {
  margin: 4px;
}

.notification-icon {
  position: relative;
  display: inline-block;
}

.notification-icon ui-badge {
  position: absolute;
  top: -8px;
  right: -8px;
}
```

## Note Aggiuntive

- **Temi**: Il badge supporta tutti i temi standard del design system
- **Animazioni**: L'effetto pulse attira l'attenzione dell'utente su elementi importanti
- **Loading State**: Mostra un'icona di caricamento personalizzabile
- **Responsivo**: Il badge si adatta alle dimensioni del contenuto
- **Accessibilità**: Include attributi appropriati per screen reader
- **Personalizzazione**: Le icone di caricamento possono essere personalizzate tramite injection token
- **Performance**: Utilizza OnPush change detection per ottimizzare le prestazioni
