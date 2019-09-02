import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

const { environment } = require('../environments/.env.dev');

import { AppComponent } from './app.component';

import { NavbarModule } from './components/navbar/navbar.module';
import { ContattiModule } from './components/contatti/contatti.module';
import { FooterModule } from './components/footer/footer.module';
import { PreventivoModule } from './components/preventivo/preventivo.module';

import { UpComponent } from './components/up/up.component';
import { SectionComponent } from './components/section/section.component';
import { SectionListComponent } from './components/section-list/section-list.component';

import { FirebaseService } from './services/firebase.service';
import { WINDOW_PROVIDERS } from './services/window.service';

@NgModule({
  declarations: [
    AppComponent,
    UpComponent,
    SectionComponent,
    SectionListComponent
  ],
  imports: [
    BrowserModule.withServerTransition( { appId: 'daudr-web' } ),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FlexLayoutModule,
    NavbarModule,
    ContattiModule,
    FooterModule,
    PreventivoModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [FirebaseService, WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
