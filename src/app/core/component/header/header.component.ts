import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selected;
  showNavbar: boolean = false;
  constructor(private router: Router) {
    this.selected = 'option2';
   }

  ngOnInit(): void {
  }

  toggleNavbar(){
    this.showNavbar = !this.showNavbar;
    //this.router.navigate(['/sideNav']);
  }

}
