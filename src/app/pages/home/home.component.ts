import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ActivatedRoute, Router, Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public contentfulData: Entry<any>[];
  name: String;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(
      (contentfulData: Entry<any>[]) => {
        this.contentfulData = contentfulData['contentfulData'];
      }
    )
  }

}
