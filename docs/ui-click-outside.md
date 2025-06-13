# ui-click-outside

## Descrizione

La direttiva `ui-click-outside` rileva quando l'utente clicca al di fuori dell'elemento su cui è applicata. È particolarmente utile per chiudere dropdown, modal, menu e altri elementi di interfaccia che devono essere nascosti quando l'utente clicca altrove.

## Selector

`[uiClickOutside]`

## @Input Properties

Questa direttiva non ha proprietà di input.

## @Output Events

| Event          | Type                       | Description                                       |
| -------------- | -------------------------- | ------------------------------------------------- |
| `clickOutside` | `EventEmitter<MouseEvent>` | Emesso quando si clicca al di fuori dell'elemento |

## Esempi di Utilizzo

### Dropdown Base

```html
<div class="dropdown-container">
  <button (click)="toggleDropdown()">Menu</button>

  <div
    *ngIf="isDropdownOpen"
    class="dropdown-menu"
    uiClickOutside
    (clickOutside)="closeDropdown()"
  >
    <ul>
      <li><a href="#">Opzione 1</a></li>
      <li><a href="#">Opzione 2</a></li>
      <li><a href="#">Opzione 3</a></li>
    </ul>
  </div>
</div>
```

```typescript
export class DropdownComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }
}
```

### Modal/Dialog

```html
<div
  *ngIf="isModalOpen"
  class="modal-overlay"
  uiClickOutside
  (clickOutside)="closeModal()"
>
  <div
    class="modal-content"
    (click)="$event.stopPropagation()"
  >
    <h2>Titolo Modal</h2>
    <p>Contenuto del modal...</p>
    <button (click)="closeModal()">Chiudi</button>
  </div>
</div>
```

```typescript
export class ModalComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
```

### Menu Contestuale

```html
<div class="context-menu-container">
  <div
    class="content"
    (contextmenu)="openContextMenu($event)"
  >
    Fai click destro per aprire il menu
  </div>

  <div
    *ngIf="contextMenuVisible"
    class="context-menu"
    [style.left.px]="contextMenuPosition.x"
    [style.top.px]="contextMenuPosition.y"
    uiClickOutside
    (clickOutside)="closeContextMenu()"
  >
    <ul>
      <li (click)="contextMenuAction('copy')">Copia</li>
      <li (click)="contextMenuAction('paste')">Incolla</li>
      <li (click)="contextMenuAction('delete')">Elimina</li>
    </ul>
  </div>
</div>
```

```typescript
export class ContextMenuComponent {
  contextMenuVisible = false;
  contextMenuPosition = { x: 0, y: 0 };

  openContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.contextMenuPosition = {
      x: event.clientX,
      y: event.clientY,
    };
    this.contextMenuVisible = true;
  }

  closeContextMenu() {
    this.contextMenuVisible = false;
  }

  contextMenuAction(action: string) {
    console.log('Azione:', action);
    this.closeContextMenu();
  }
}
```

### Tooltip Personalizzato

```html
<div class="tooltip-container">
  <span
    class="tooltip-trigger"
    (mouseenter)="showTooltip()"
    (mouseleave)="hideTooltip()"
  >
    Hover per tooltip
  </span>

  <div
    *ngIf="tooltipVisible"
    class="custom-tooltip"
    uiClickOutside
    (clickOutside)="hideTooltip()"
  >
    Questo è un tooltip personalizzato che si chiude cliccando fuori
  </div>
</div>
```

```typescript
export class TooltipComponent {
  tooltipVisible = false;

  showTooltip() {
    this.tooltipVisible = true;
  }

  hideTooltip() {
    this.tooltipVisible = false;
  }
}
```

### Sidebar/Pannello Laterale

```html
<div class="layout-container">
  <button (click)="toggleSidebar()">Toggle Sidebar</button>

  <div
    class="sidebar"
    [class.open]="isSidebarOpen"
    uiClickOutside
    (clickOutside)="closeSidebar()"
  >
    <h3>Menu</h3>
    <nav>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </nav>
  </div>

  <main class="main-content">Contenuto principale</main>
</div>
```

```typescript
export class SidebarComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }
}
```

### Search Box con Suggerimenti

```html
<div class="search-container">
  <input
    type="text"
    placeholder="Cerca..."
    [(ngModel)]="searchTerm"
    (input)="onSearchInput()"
    (focus)="showSuggestions()"
  />

  <div
    *ngIf="suggestionsVisible && suggestions.length > 0"
    class="suggestions-dropdown"
    uiClickOutside
    (clickOutside)="hideSuggestions()"
  >
    <ul>
      <li
        *ngFor="let suggestion of suggestions"
        (click)="selectSuggestion(suggestion)"
      >
        {{ suggestion }}
      </li>
    </ul>
  </div>
</div>
```

```typescript
export class SearchComponent {
  searchTerm = '';
  suggestions: string[] = [];
  suggestionsVisible = false;

  onSearchInput() {
    // Logica per filtrare i suggerimenti
    this.suggestions = this.filterSuggestions(this.searchTerm);
    this.suggestionsVisible = this.suggestions.length > 0;
  }

  showSuggestions() {
    if (this.suggestions.length > 0) {
      this.suggestionsVisible = true;
    }
  }

  hideSuggestions() {
    this.suggestionsVisible = false;
  }

  selectSuggestion(suggestion: string) {
    this.searchTerm = suggestion;
    this.hideSuggestions();
  }

  private filterSuggestions(term: string): string[] {
    // Implementa la logica di filtro
    return [];
  }
}
```

### Popup/Overlay

```html
<div class="popup-trigger">
  <button (click)="showPopup()">Mostra Popup</button>

  <div
    *ngIf="popupVisible"
    class="popup-overlay"
  >
    <div
      class="popup-content"
      uiClickOutside
      (clickOutside)="closePopup()"
    >
      <h3>Popup</h3>
      <p>Contenuto del popup...</p>
      <button (click)="closePopup()">Chiudi</button>
    </div>
  </div>
</div>
```

### Con Preventivo dell'Evento

```html
<div
  class="dropdown"
  uiClickOutside
  (clickOutside)="onClickOutside($event)"
>
  <!-- Contenuto dropdown -->
</div>
```

```typescript
export class PreventComponent {
  onClickOutside(event: MouseEvent) {
    // Puoi accedere all'evento per operazioni avanzate
    console.log('Click outside at:', event.clientX, event.clientY);

    // Puoi anche prevenire la chiusura in certe condizioni
    if (this.shouldKeepOpen()) {
      event.preventDefault();
      return;
    }

    this.closeElement();
  }

  private shouldKeepOpen(): boolean {
    // Logica per determinare se mantenere aperto
    return false;
  }

  private closeElement() {
    // Logica di chiusura
  }
}
```

## Styling CSS

```css
/* Dropdown */
.dropdown-menu {
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
}

/* Context Menu */
.context-menu {
  position: fixed;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  z-index: 10000;
}

/* Sidebar */
.sidebar {
  position: fixed;
  left: -300px;
  top: 0;
  width: 300px;
  height: 100%;
  background: #f5f5f5;
  transition: left 0.3s ease;
  z-index: 1000;
}

.sidebar.open {
  left: 0;
}
```

## Note Aggiuntive

- **Event Listening**: La direttiva ascolta gli eventi click sul document
- **Performance**: Utilizza un singolo listener globale per efficienza
- **Boundary Check**: Verifica che l'elemento target sia effettivamente nel DOM
- **Flexibility**: Può essere applicata a qualsiasi elemento HTML
- **Event Object**: Fornisce l'oggetto MouseEvent completo per operazioni avanzate
- **Compatibility**: Funziona con tutti i browser moderni
- **Memory Safe**: Il listener viene automaticamente rimosso quando la direttiva viene distrutta
- **Nested Elements**: Funziona correttamente con elementi annidati
