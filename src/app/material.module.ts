import { MatButtonModule } from '@angular/material/button';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';

import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [
    MatButtonModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    FlexLayoutModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: []
})
export class MaterialModule {}
