import { AfterViewInit, Component, ElementRef, HostBinding, Input, NgZone, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wasta-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements AfterViewInit {
  @Input() customStyle: { [key: string]: string } = {};
  @Input() themes: string = 'solid';

  @Input() set color(value: string) {
    console.log(this.el.nativeElement,value);
    this.el.nativeElement.style.setProperty('--bg-color', `var(--${value})`)
    this.el.nativeElement.style.setProperty('--color', `var(--btn-${value}-color)`)

  }

  constructor(private el: ElementRef<HTMLButtonElement>, private renderer: Renderer2) {

  }

  ngAfterViewInit(): void {
    this.el.nativeElement.firstElementChild?.classList.add('wasta-button')
  }


  addRippleEffect(event: MouseEvent) {
    const ripple = this.renderer.createElement('span');
    const button = <HTMLElement>event.target;

    const size = Math.max(button.offsetWidth, button.offsetHeight);
    const x = event.clientX - button.getBoundingClientRect().left - size / 2;
    const y = event.clientY - button.getBoundingClientRect().top - size / 2;

    this.renderer.setStyle(ripple, 'width', `${size}px`);
    this.renderer.setStyle(ripple, 'height', `${size}px`);
    this.renderer.setStyle(ripple, 'left', `${x}px`);
    this.renderer.setStyle(ripple, 'top', `${y}px`);
    this.renderer.addClass(ripple, 'ripple');
    this.renderer.appendChild(button, ripple);

    ripple.addEventListener('animationend', () => {
      this.renderer.removeChild(button, ripple);
    });
  }

}

