import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { dbzpagesComponent } from './pages/dbz.pages.component';

@NgModule({
  declarations: [dbzpagesComponent],
  imports: [CommonModule],
  exports: [dbzpagesComponent],
})
export class DbzModule {}
