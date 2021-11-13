import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { MdbModule } from '../mdb/mdb.module';

// Importamos en módulo de ruteo que está en la app
@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, MaterialModule, MdbModule, RouterModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
