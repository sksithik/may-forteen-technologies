import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './common/contentful/contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'may-forteen-technologies';
  constructor(
    private contentful: ContentfulService,
  ) {}
  ngOnInit() {
    this.contentful.getItems();
  }
}
