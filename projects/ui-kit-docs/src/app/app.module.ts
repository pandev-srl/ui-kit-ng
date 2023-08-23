import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { TestPageComponent } from './containers/test-page/test-page.component';
import { UiKitModule } from '@pandev-srl/ui-kit-ng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, TestPageComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, CommonModule, CoreModule, UiKitModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
