import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SafeHtmlPipe } from '../_pipes/safe-html.pipe';
@NgModule({
  declarations: [SafeHtmlPipe],
  imports: [
    CommonModule
  ],
  exports:[TranslateModule, SafeHtmlPipe]
})
export class SharedModule { }
