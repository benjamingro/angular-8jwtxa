import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

const config = {
  apiKey: "AIzaSyD6E9OYBX72KCRcnwPAzDjVy8MmDbbEgfw",
  authDomain: "stackblitzfire.firebaseapp.com",
  databaseURL: "https://stackblitzfire.firebaseio.com",
  storageBucket: "stackblitzfire.appspot.com",
  messagingSenderId: "42917465053"
};

const config2 = {
  apiKey: "AIzaSyAWIMkDzUu4b0nD60BrglQX5Sq0_8hnT5Y",
  authDomain: "ember-test-69699.firebaseapp.com",
  databaseURL: "https://ember-test-69699.firebaseio.com",
  projectId: "ember-test-69699",
  storageBucket: "ember-test-69699.appspot.com",
  messagingSenderId: "39112982274"
};

@NgModule({
  imports:      [ 
    BrowserModule,
    AngularFireModule.initializeApp(config, 'asdf'),
    AngularFireModule.initializeApp(config2, 'jhlk'),
    AngularFireDatabaseModule
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [  ]
})
export class AppModule { }
