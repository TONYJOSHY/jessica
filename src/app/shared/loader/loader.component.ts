import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  selected;
  constructor() {
    this.selected = 'option2';
   }

  ngOnInit(): void {
  }

}
