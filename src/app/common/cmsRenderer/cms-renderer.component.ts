import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'contentful';

@Component({
  selector: 'app-cms-renderer',
  templateUrl: './cms-renderer.component.html',
  styleUrls: ['./cms-renderer.component.scss']
})
export class CmsRendererComponent implements OnInit {
  @Input('contentfulData') contentfulData: Entry<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
