import { Component, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { DropDownComponent } from 'src/app/shared/components/drop-down/drop-down.component';
import { DropDownModule } from 'src/app/shared/components/drop-down/drop-down.module';

@Component({
  selector: 'app-desktop-navbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent, DropDownModule],
  templateUrl: './desktop-navbar.component.html',
  styleUrls: ['./desktop-navbar.component.scss']
})
export class DesktopNavbarComponent {
  state:any
}
