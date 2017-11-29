import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gnome-list',
  templateUrl: './gnome-list.component.html',
  styleUrls: ['./gnome-list.component.css']
})
export class GnomeListComponent implements OnInit {

  @Input() gnomeInfo;
  constructor() { }

  ngOnInit() {}

}
