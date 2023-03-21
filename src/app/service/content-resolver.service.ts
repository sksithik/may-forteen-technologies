import { ContentfulService } from 'src/app/common/contentful/contentful.service';
import { Entry } from 'contentful';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ContentResolver implements Resolve<Entry<any>[]> {
    constructor(private contentfulService: ContentfulService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Entry<any>[]> | Promise<Entry<any>[]> {
        const currentRoute = this.getUrl(route.url);
        return this.contentfulService.getPage(currentRoute);
    }
    getUrl(urlSegment) {
        const path = urlSegment.map(url => url.path)
        return path.join('/');
    }
}