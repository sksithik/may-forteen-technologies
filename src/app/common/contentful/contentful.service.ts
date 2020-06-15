import { Inject, Injectable } from '@angular/core';
import { CONTENTFUL_CLIENT } from './contentful.injection-token';
import { ContentfulClientApi, Entry } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor(@Inject(CONTENTFUL_CLIENT) private contentfulApi: ContentfulClientApi) {}

  getPage (pagePath?: string): Promise<Entry<any>[]> {
    const queryObject = {
      'include': 1,
      'content_type': 'page',
      'fields.pageUrl': pagePath
    }
    return this.contentfulApi.getEntries(queryObject).then(res => res.items);
  }
}
