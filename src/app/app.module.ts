import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyMoviesPage } from '../pages/my-movies/my-movies';
import { MovieDetailsPage } from '../pages/movie-details/movie-details';
import { MovieListPage } from '../pages/movie-list/movie-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MyMoviesPage,
    MovieDetailsPage,
    MovieListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MyMoviesPage,
    MovieDetailsPage,
    MovieListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
