import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';

import { NavbarModule } from './components/navbar/navbar.module';
import { WhoiamModule } from './components/whoiam/whoiam.module';
import { PortfolioModule } from './components/portfolio/portfolio.module';
import { CompetenzeModule } from './components/competenze/competenze.module';
import { CvModule} from './components/cv/cv.module';
import { ContattiModule } from './components/contatti/contatti.module';
import { FooterModule } from './components/footer/footer.module';
import { PreventivoModule } from './components/preventivo/preventivo.module';

import { AppComponent } from './app.component';
import { UpComponent } from './components/up/up.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SectionComponent } from './components/section/section.component';
import { SectionListComponent } from './components/section-list/section-list.component';
import { MatCardModule } from '@angular/material';

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
    FlexLayoutModule,
    NavbarModule,
    WhoiamModule,
    PortfolioModule,
    CompetenzeModule,
    CvModule,
    ContattiModule,
    FooterModule,
    PreventivoModule,
    MatCardModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
