import { Directive, ElementRef, Inject, Input, Output, Signal, WritableSignal, computed, effect } from '@angular/core';
import { DropdownService as DropdownService } from './drop-down.service';

@Directive({
  selector: '[dropDownActive]'
})
export class DropDownActiveDirective {

  constructor(private el: ElementRef<any>, private dropdownService: DropdownService) {
    effect(() => {
      this.dropdownService.toggleState()
      this.toggleClass();
    })

  }
  @Input() dropDownActive: string = 'test'

  toggleClass() {
    if (this.el.nativeElement)
      this.dropdownService.toggleState() ?
        this.el.nativeElement.classList.add(this.dropDownActive) :
        this.el.nativeElement.classList.remove(this.dropDownActive)
  }
}
