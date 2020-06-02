import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    TopHeaderComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    TopHeaderComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }