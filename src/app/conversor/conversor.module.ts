import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ConversorComponent, HttpClientModule],
  imports: [CommonModule],
  exports: [ConversorComponent],
  providers: [MoedaService, ConversorService],
})
export class ConversorModule {}
