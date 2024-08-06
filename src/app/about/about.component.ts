import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule} from 'primeng/table';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    SelectButtonModule,
    ButtonModule,
    DropdownModule,
    InputNumberModule,
    FloatLabelModule,
    CardModule,
    PanelModule,
    CheckboxModule,
    TableModule,
    NgIf
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

};
