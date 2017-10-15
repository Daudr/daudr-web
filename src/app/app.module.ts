import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';

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

@NgModule({
  declarations: [
    AppComponent,
    UpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    NavbarModule,
    WhoiamModule,
    PortfolioModule,
    CompetenzeModule,
    CvModule,
    ContattiModule,
    FooterModule,
    PreventivoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
