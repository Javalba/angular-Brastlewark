import { GnomeService } from './../../../services/gnome.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gnome-wrapper',
  templateUrl: './gnome-wrapper.component.html',
  styleUrls: ['./gnome-wrapper.component.css']
})
export class GnomeWrapperComponent implements OnInit {

  gnomeInfo: any;

  constructor(private gnomeService: GnomeService) { }

  ngOnInit() {
     this.gnomeService.getGnomeInfo().subscribe((res)=>{
      this.gnomeInfo= res.Brastlewark;
      console.log("res-->");
      console.log(res.Brastlewark);
    });
  }
}
