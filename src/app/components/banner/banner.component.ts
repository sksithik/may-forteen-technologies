import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'contentful';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input('contentfulData') contentfulData: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.contentfulData);
  }

}
