import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

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
    BrowserModule.withServerTransition( { appId: 'daudr-web' } ),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
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
