import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentfulService } from './contentful.service';
import { CONTENTFUL_CLIENT } from './contentful.injection-token';
import { createClient } from 'contentful';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: CONTENTFUL_CLIENT, useFactory: () => createClient(environment.contentful) },
    ContentfulService
  ]
})
export class ContentfulModule { }
