import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
<<<<<<< HEAD
    HttpClientModule,
=======
    HttpClientModule
>>>>>>> 472c2c402e8e72bd815a3a320bbc9bdf956fbdac
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
