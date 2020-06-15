import { ContentfulService } from 'src/app/common/contentful/contentful.service';
import { Entry } from 'contentful';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class HomeResolver implements Resolve<Entry<any>[]> {
    constructor(private contentfulService: ContentfulService) { }

    resolve(): Observable<Entry<any>[]> | Promise<Entry<any>[]>{
        return this.contentfulService.getPage('home');
    }
}