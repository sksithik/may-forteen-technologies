import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentfulModule } from './common/contentful/contentful.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeResolver } from './pages/home/home-resolver.service';
import { CmsRendererComponent } from './common/cmsRenderer/cms-renderer.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CmsRendererComponent,
    BannerComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ContentfulModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [HomeResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
