import { Component, InjectionToken } from '@angular/core';
import { FirebaseApp, FirebaseAppProvider, FirebaseAppConfigToken, FirebaseAppName } from 'angularfire2';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [
    { provide: FirebaseAppName, useValue: 'asdf' },
    FirebaseAppProvider
  ]
})
export class AppComponent  {
  name = 'Angular 4';

  constructor(public app: FirebaseApp) {
    console.log(app);
  }
}
