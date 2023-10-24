import { Component, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-desktop-navbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './desktop-navbar.component.html',
  styleUrls: ['./desktop-navbar.component.scss']
})
export class DesktopNavbarComponent {

}
