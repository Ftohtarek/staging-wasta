import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DropDownActiveDirective } from './drop-down-active.directive';
import { DropDownComponent } from './drop-down.component';
import { DropdownService } from './drop-down.service';

@NgModule({
  declarations: [
    DropDownComponent,
    DropDownActiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropDownComponent,
    DropDownActiveDirective
  ],
  providers: [DropdownService]
})
export class DropDownModule { };


