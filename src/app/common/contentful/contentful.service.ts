import { Inject, Injectable } from '@angular/core';
import { CONTENTFUL_CLIENT } from './contentful.injection-token';
import { ContentfulClientApi } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor(@Inject(CONTENTFUL_CLIENT) private contentfulApi: ContentfulClientApi) {}

  getItems = async (): Promise<any> => {
    const entries = await this.contentfulApi.getEntries({ 'include': 10, 'sys.id' : '74PB5i6qz75kRQPnquiOgp' });
    return entries.items;
  }
}
