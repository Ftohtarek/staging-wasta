import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LangService } from 'src/app/core/services/lang.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public lang: LangService) {

  }
}
