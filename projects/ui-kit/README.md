# @pandev-srl/ui-kit-ng

Una libreria di componenti UI per Angular che fornisce un set completo di elementi interfaccia utente moderni e personalizzabili.

## Caratteristiche principali

- ✅ Compatibile con Angular 16-18
- 🎨 Stili SCSS modulari e personalizzabili
- 📱 Design responsive e mobile-first
- 🔧 TypeScript con tipizzazione completa
- 📚 Documentazione integrata con esempi interattivi
- 🎯 Tree-shakeable per bundle ottimizzati

## Componenti disponibili

- **ui-alert**: Messaggi di notifica e avvisi
- **ui-badge**: Badge e etichette
- **ui-button**: Pulsanti con diverse varianti
- **ui-calendar**: Calendario con vista mensile
- **ui-data-display**: Visualizzazione dati strutturati
- **ui-dialog**: Finestre modali e dialog
- **ui-dropdown**: Menu a tendina
- **ui-forms**: Componenti per form e input
- **ui-heading**: Titoli e intestazioni
- **ui-icon**: Icone FontAwesome
- **ui-layout**: Layout responsive e drawer
- **ui-loading**: Indicatori di caricamento
- **ui-paginator**: Paginazione per tabelle
- **ui-panel**: Pannelli contenitore
- **ui-stat**: Statistiche e metriche
- **ui-table**: Tabelle avanzate

## Installazione

### 1. Installazione del pacchetto

```bash
npm install @pandev-srl/ui-kit-ng
```

oppure con Yarn:

```bash
yarn add @pandev-srl/ui-kit-ng
```

### 2. Installazione delle peer dependencies

```bash
npm install @angular/common @angular/core luxon uuid
npm install --save-dev @types/luxon @types/uuid
```

### 3. Configurazione del modulo

#### Opzione 1: Importazione selettiva (consigliata)

Per bundle più leggeri, importa solo i moduli dei componenti che utilizzi effettivamente:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiButtonModule, UiAlertModule, UiDialogModule } from '@pandev-srl/ui-kit-ng';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiButtonModule,
    UiAlertModule,
    UiDialogModule,
    // ... altri moduli necessari
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

**Moduli disponibili per l'importazione selettiva:**

- `UiActionMessagesModule` - Messaggi di azione
- `UiAlertModule` - Alert e notifiche
- `UiBadgeModule` - Badge e etichette
- `UiButtonModule` - Pulsanti
- `UiCalendarModule` - Calendario
- `UiClickOutsideModule` - Direttiva click outside
- `UiDataDisplayModule` - Visualizzazione dati
- `UiDialogModule` - Dialog e modali
- `UiDropdownModule` - Menu dropdown
- `UiFormsModule` - Componenti form
- `UiHeadingModule` - Titoli
- `UiIconModule` - Icone
- `UiLayoutModule` - Layout e contenitori
- `UiLoadingModule` - Indicatori di caricamento
- `UiPaginatorModule` - Paginazione
- `UiPanelModule` - Pannelli
- `UiStatModule` - Statistiche
- `UiTableModule` - Tabelle

#### Opzione 2: Importazione completa

Se utilizzi molti componenti della libreria, puoi importare il modulo principale:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiKitModule } from '@pandev-srl/ui-kit-ng';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiKitModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

> **💡 Tip:** L'importazione selettiva (Opzione 1) è consigliata per ottimizzare le dimensioni del bundle finale grazie al tree-shaking di Angular.

### 4. Import degli stili

Aggiungi gli stili SCSS al tuo `angular.json`:

```json
{
  "styles": ["node_modules/@pandev-srl/ui-kit-ng/scss/ui-kit.scss", "src/styles.scss"]
}
```

Oppure importa direttamente nel tuo `styles.scss`:

```scss
@import '@pandev-srl/ui-kit-ng/scss/ui-kit';
```

### 5. Configurazione FontAwesome (opzionale)

Se utilizzi componenti con icone, installa e configura FontAwesome Pro:

```bash
npm install @fortawesome/fontawesome-pro
```

Poi aggiungi gli stili FontAwesome nel tuo `styles.scss`:

```scss
// Importa FontAwesome Pro
@import '@fortawesome/fontawesome-pro/scss/fontawesome';
@import '@fortawesome/fontawesome-pro/scss/solid';
@import '@fortawesome/fontawesome-pro/scss/regular';
@import '@fortawesome/fontawesome-pro/scss/light';

// Importa gli stili della libreria UI Kit
@import '@pandev-srl/ui-kit-ng/scss/ui-kit';
```

> **📝 Nota:** Puoi importare solo i set di icone che utilizzi effettivamente (solid, regular, light, thin, duotone) per ridurre le dimensioni del bundle.

## Utilizzo base

### Esempio con ui-button

```typescript
// component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ui-button
      [variant]="'primary'"
      [size]="'medium'"
      (click)="handleClick()"
    >
      Click me
    </ui-button>
  `,
})
export class ExampleComponent {
  handleClick() {
    console.log('Button clicked!');
  }
}
```

### Esempio con ui-alert

```typescript
// component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-alerts',
  template: `
    <ui-alert
      [type]="'success'"
      [dismissible]="true"
      (dismissed)="onDismissed()"
    >
      Operazione completata con successo!
    </ui-alert>
  `,
})
export class AlertsComponent {
  onDismissed() {
    console.log('Alert dismissed');
  }
}
```

## Sviluppo

### Prerequisiti

- Node.js (versione 18 o superiore)
- Angular CLI (`npm install -g @angular/cli`)
- Yarn (consigliato per la gestione delle dipendenze)

### Setup dell'ambiente di sviluppo

1. **Clona il repository:**

```bash
git clone <repository-url>
cd pi-ui-kit-ng
```

2. **Installa le dipendenze:**

```bash
yarn install
```

3. **Avvia l'ambiente di sviluppo:**

```bash
# Avvia la documentazione in modalità development
yarn docs:start

# In un altro terminale, avvia il watch della libreria
yarn ui:watch
```

### Script disponibili

#### Per la libreria UI Kit:

```bash
# Build della libreria
yarn ui:build

# Build in modalità watch (ricompila automaticamente)
yarn ui:watch

# Lint del codice
yarn ui:lint

# Genera un nuovo componente
yarn ui:ng generate component component-name
```

#### Per la documentazione:

```bash
# Avvia il server di sviluppo della documentazione
yarn docs:start

# Build della documentazione per produzione
yarn docs:build

# Lint della documentazione
yarn docs:lint
```

#### Generali:

```bash
# Lint di tutto il progetto
yarn lint

# Formattazione del codice con Prettier
yarn prettify
```

### Struttura del progetto

```
pi-ui-kit-ng/
├── projects/
│   ├── ui-kit/                 # Libreria principale
│   │   ├── src/
│   │   │   ├── lib/           # Componenti e servizi
│   │   │   ├── scss/          # Stili SCSS
│   │   │   └── public-api.ts  # API pubblica
│   │   └── package.json       # Configurazione libreria
│   └── ui-kit-docs/           # App di documentazione
│       └── src/
├── angular.json               # Configurazione Angular
├── package.json              # Dipendenze principali
└── tsconfig.json            # Configurazione TypeScript
```

### Aggiungere un nuovo componente

1. **Genera il componente:**

```bash
yarn ui:ng generate component ui-new-component --project ui-kit
```

2. **Crea il modulo del componente:**

```bash
yarn ui:ng generate module ui-new-component --project ui-kit
```

3. **Aggiungi gli stili SCSS:**

```bash
mkdir projects/ui-kit/src/scss/components/ui-new-component
touch projects/ui-kit/src/scss/components/ui-new-component/_index.scss
```

4. **Esporta il componente:**
   Aggiungi l'export in `projects/ui-kit/src/lib/index.ts`

5. **Importa gli stili:**
   Aggiungi l'import in `projects/ui-kit/src/scss/ui-kit.scss`

### Testing

Esegui i test con:

```bash
yarn test ui-kit
```

### Build e pubblicazione

1. **Build della libreria:**

```bash
yarn ui:build
```

2. **Naviga nella directory di build:**

```bash
cd dist/ui-kit
```

3. **Pubblica su npm:**

```bash
npm publish
```

## Personalizzazione del tema

I componenti supportano la personalizzazione tramite variabili SCSS. Crea un file di override delle variabili:

```scss
// custom-theme.scss
$primary-color: #your-primary-color;
$secondary-color: #your-secondary-color;

@import '@pandev-srl/ui-kit-ng/scss/ui-kit';
```

## Documentazione

La libreria include un'app di documentazione completa con esempi interattivi. Per visualizzarla:

```bash
yarn docs:start
```

La documentazione sarà disponibile su `http://localhost:4200`

## Supporto

- **Versioni Angular supportate**: 16.x, 17.x, 18.x
- **Browser supportati**: Chrome, Firefox, Safari, Edge (versioni moderne)
- **Node.js**: 18.x o superiore

## Contribuire

1. Fork del repository
2. Crea un branch per la tua feature (`git checkout -b feature/amazing-feature`)
3. Commit delle modifiche (`git commit -m 'Add amazing feature'`)
4. Push del branch (`git push origin feature/amazing-feature`)
5. Apri una Pull Request

## Licenza

Questo progetto è distribuito sotto licenza MIT.
