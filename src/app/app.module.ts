import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services
import { AuthService } from '@services/auth.service';

import { ENVIRONMENT } from '@constants/environment';
import { LayoutsModule } from './core/layouts/layouts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    // Firebase
    AngularFireModule.initializeApp(ENVIRONMENT.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
