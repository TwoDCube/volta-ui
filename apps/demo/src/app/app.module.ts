import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonModule, VAppModule } from '@volta/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ButtonModule,
    VAppModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
