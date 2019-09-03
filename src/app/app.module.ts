import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from '../environments/.env.dev';

import { AppComponent } from './app.component';

import { PreventivoModule } from './components/preventivo/preventivo.module';

import { SectionComponent } from './components/section/section.component';
import { SectionListComponent } from './components/section-list/section-list.component';
import { SectionContactsComponent } from './components/section-contacts/section-contacts.component';
import { SectionMapComponent } from './components/section-map/section-map.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PropicComponent } from './components/navbar/propic/propic.component';
import { FooterComponent } from './components/footer/footer.component';
import { UpComponent } from './components/up/up.component';

import { WINDOW_PROVIDERS } from './services/window.service';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    UpComponent,
    SectionComponent,
    SectionListComponent,
    SectionContactsComponent,
    SectionMapComponent,
    NavbarComponent,
    PropicComponent,
    FooterComponent
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
    PreventivoModule,
    MatCardModule,
    MatToolbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [FirebaseService, WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
