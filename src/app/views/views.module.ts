import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { RouterModule } from '@angular/router';
import { ViewsRoutingModule } from './views-routing.module';



@NgModule({
  declarations: [
    ViewsComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    RouterModule
  ]
})
export class ViewsModule { }
