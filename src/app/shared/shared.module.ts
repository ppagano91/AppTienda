import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { LoadSpinnerComponent } from './components/load-spinner/load-spinner.component';

@NgModule({
  declarations: [LoadSpinnerComponent],
  imports: [CommonModule, MaterialModule],
  exports: [LoadSpinnerComponent],
})
export class SharedModule {}
