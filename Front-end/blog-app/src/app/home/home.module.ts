import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.model';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
/* CDK Overlay */
import { OverlayModule } from '@angular/cdk/overlay';

/* CDK Portal (for ng-template attachment) */
import { PortalModule } from '@angular/cdk/portal';
import { SharedModule } from '../common-shared/modules/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    MatCardModule,
    MatButton,
    HomeRoutingModule,
    MatIcon,
    MatListModule,
    OverlayModule,
    PortalModule,
  ]
})
export class HomeModule {}