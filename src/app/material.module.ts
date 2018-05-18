import { MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  exports: [CommonModule, MatButtonModule],
  declarations: []
})
export class MaterialModule {}
