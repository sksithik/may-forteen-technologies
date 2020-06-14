import { InjectionToken } from '@angular/core';
import { ContentfulClientApi } from 'contentful';

export const CONTENTFUL_CLIENT = new InjectionToken<ContentfulClientApi>('app.contentful-client');