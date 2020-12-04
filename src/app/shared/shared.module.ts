import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { MaterialModule } from '../other-modules/matmodules/material.module';


@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    LoaderComponent
  ]

})
export class SharedModule { }
