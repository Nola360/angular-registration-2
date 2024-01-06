import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationModule } from './registration/registration.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RegistrationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
