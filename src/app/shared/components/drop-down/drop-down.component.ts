import { AfterViewInit, Component, ElementRef, Inject, Input, ViewChild, WritableSignal, inject } from '@angular/core';
import { DropdownService } from './drop-down.service';

@Component({
  selector: 'ng-dropDown',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements AfterViewInit {
  trigerEle!: HTMLElement;
  @Input() position: { top: number, left: number } = { top: 0, left: 0 }
  @Input() customStyle: { [key: string]: string } = {};

  @Input() set trigerFor(el: any) {
    this.trigerEle = el.nativeElement ? el.nativeElement : el.el.nativeElement
    this.trigerEle.classList.add('trigger-parent')
    this.trigerEle.addEventListener('click', this.toggle)
  }

  @ViewChild('dropdown') dropdown!: ElementRef<HTMLElement>
  dropdownContainer!: HTMLElement

  constructor(public dropdownService: DropdownService,) { }

  ngAfterViewInit(): void {
    this.dropdownContainer = this.dropdown.nativeElement
    this.calculateAndApplyPosition()
  }


  toggle = () => {
    this.dropdownService.toggleState() ? this.close() : this.open()
  }

  open() {
    document.documentElement.addEventListener('click', this.clickHandler)
    this.dropdownService.setState(true)
    this.dropdownContainer.classList.add('open')
    this.calculateAndApplyPosition()
  }

  close() {
    this.dropdownContainer.classList.remove('open')

    setTimeout(() => {
      this.dropdownService.setState(false)
    }, 200);
    document.documentElement.removeEventListener('click', this.clickHandler)

  }
  clickHandler = (e: Event) => {
    let ele = <HTMLElement>e.target
    if (!ele.closest('[dropdown]') && !ele.closest('.trigger-parent'))
      this.close()
  }
  calculateAndApplyPosition() {
    if (this.trigerEle) {
      const triggerRect = this.trigerEle.getBoundingClientRect();
      const rightPosition = document.documentElement.clientWidth - triggerRect.left - this.trigerEle.offsetWidth + this.position.left
      const topPosition = triggerRect.top + this.trigerEle.clientHeight + this.position.top;

      this.dropdownContainer.style.right = `${rightPosition}px`;
      this.dropdownContainer.style.top = `${topPosition}px`;
    }
  }

}


