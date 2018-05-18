import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  imports: [MatButtonModule, FlexLayoutModule],
  exports: [MatButtonModule, FlexLayoutModule],
  declarations: []
})
export class MaterialModule {}
