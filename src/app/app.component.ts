import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    MenubarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'FitCalcs';
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: '1RM',
        icon: 'pi pi-trophy',
        url: '1rm'
      },
      {
        label: 'TDEE',
        icon: 'pi pi-asterisk',
        url: 'tdee'
      },
      {
        label: 'FFMI',
        icon: 'pi pi-star',
        url: 'ffmi'
      },
      {
        label: 'About',
        icon: 'pi pi-home',
        url: 'about'
      },
    ]
  }
}
