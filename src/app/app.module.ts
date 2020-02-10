import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {Angulartics2Module} from 'angulartics2';
import {AngularFireModule} from '@angular/fire';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FormsModule} from '@angular/forms';
import {MarkdownModule} from 'ngx-markdown';

export const firebaseKey = {
  apiKey: 'AIzaSyASG7KxDO2z5AH9r0jlUmwiw68Ap8kG20c',
  authDomain: 'ngx-auth-firebaseui.firebaseapp.com',
  databaseURL: 'https://ngx-auth-firebaseui.firebaseio.com',
  projectId: 'ngx-auth-firebaseui',
  storageBucket: 'ngx-auth-firebaseui.appspot.com',
  messagingSenderId: '520699629648'
};

export function firebaseAppNameFactory() {
  return `you_app_name`;
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    Angulartics2Module.forRoot(),
    AngularFireModule.initializeApp(firebaseKey),
    NgxAuthFirebaseUIModule.forRoot(firebaseKey, firebaseAppNameFactory,
      {
        enableFirestoreSync: true,
        toastMessageOnAuthSuccess: true,
        toastMessageOnAuthError: true,
        authGuardFallbackURL: 'examples/logged-out',
        authGuardLoggedInURL: 'examples/logged-in',
      }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    MarkdownModule.forRoot({loader: HttpClient}),
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }