import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentfulModule } from './common/contentful/contentful.module';

import { ContentResolver } from './service/content-resolver.service';
import { CmsRendererComponent } from './common/cmsRenderer/cms-renderer.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ActiveComponent } from './pages/active/active.component';
import { CopyBlockComponent } from './components/copy-block/copy-block.component';

@NgModule({
  declarations: [
    AppComponent,
    CmsRendererComponent,
    BannerComponent,
    NavigationComponent,
    ActiveComponent,
    CopyBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ContentfulModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [ContentResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
