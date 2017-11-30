import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gnome-item',
  templateUrl: './gnome-item.component.html',
  styleUrls: ['./gnome-item.component.css']
})
export class GnomeItemComponent implements OnInit {

  @Input() gnomeItem;

  constructor() { }

  ngOnInit() {
  /*   console.log(this.gnomeItem); */
  }

}
