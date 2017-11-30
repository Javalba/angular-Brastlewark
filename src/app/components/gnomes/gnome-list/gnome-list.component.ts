import { Component, OnInit, Input } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import * as _ from 'underscore';
import { PagerService } from '../../../services/pager.service';

@Component({
  selector: 'gnome-list',
  templateUrl: './gnome-list.component.html',
  styleUrls: ['./gnome-list.component.css']
})
export class GnomeListComponent implements OnInit {

  @Input() gnomeInfo;
  constructor(private http: Http, private pagerService: PagerService) { }

    // array of all items to be paged
    private allItems: any[];

    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];


  ngOnInit() {
    // set items to json response
    this.allItems = this.gnomeInfo;

    // initialize to page 1
    this.setPage(1);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}

