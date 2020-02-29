import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AdMobFree } from '@ionic-native/admob-free/ngx'; 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { AppComponent } from './app.component';
import { AddShoppingPage} from './add-shopping/add-shopping';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, AddShoppingPage,],
  entryComponents: [AddShoppingPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
   AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule],
  providers: [
    StatusBar,
    SplashScreen,
    AdMobFree,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
