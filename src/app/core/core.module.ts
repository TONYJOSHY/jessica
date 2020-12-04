import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './component/header/header.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { MaterialModule } from '../other-modules/matmodules/material.module';
import { FooterComponent } from './component/footer/footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent, SideBarComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule
  ],
  exports: [
    HeaderComponent ,
    SideBarComponent,
    FooterComponent,
    BrowserModule ,
    BrowserAnimationsModule
  ]
})
export class CoreModule { }
