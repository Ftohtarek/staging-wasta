import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DeviceModeService } from 'src/app/shared/services/device-mode.service';
import { ComponentBuilderService } from 'src/app/shared/services/component-builder.service';
import { Observable } from 'rxjs';
import { DesktopNavbarComponent } from '../navbar/desktop-navbar/desktop-navbar.component';
import { MobileNavbarComponent } from '../navbar/mobile-navbar/mobile-navbar.component';
import { appRoutes } from 'src/app/helper/route-config.routes';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {
  @ViewChild('navbar', { read: ViewContainerRef }) navbarRef!: ViewContainerRef;

  constructor(private deviceMode: DeviceModeService, private componentBuilder: ComponentBuilderService) {

  }
  ngAfterViewInit(): void {
    this.buildNavbar();
    console.log(appRoutes.checkout);
    console.log(appRoutes.test);

  }

  buildNavbar() {
    this.deviceMode.layoutSwitcher({
      desktop: () => this.componentBuilder.bulidSync(this.navbarRef, import('../navbar/desktop-navbar/desktop-navbar.component').then(m => m.DesktopNavbarComponent)),
      mobile: () => this.componentBuilder.bulidSync(this.navbarRef, import('../navbar/mobile-navbar/mobile-navbar.component').then(m => m.MobileNavbarComponent)),
      tablet: () => this.componentBuilder.bulidSync(this.navbarRef, import('../navbar/desktop-navbar/desktop-navbar.component').then(m => m.DesktopNavbarComponent)),
    })
  }

}
