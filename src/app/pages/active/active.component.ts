import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entry } from 'contentful';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
  public contentfulData: Entry<any>[];
  name: String;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (contentfulData: Entry<any>[]) => {
        this.contentfulData = contentfulData['contentfulData'];
        if (this.contentfulData.length === 0) {
          this.router.navigate(['page-not-found'])
        };
      }
    )
  }

}
