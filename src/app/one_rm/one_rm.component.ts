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

interface Estimate {
  percentage: number;
  weight: number;
  reps: number;
}

@Component({
  selector: 'app-onerepmax',
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
  templateUrl: './one_rm.component.html',
  styleUrl: './one_rm.component.css'
})
export class OneRepMaxComponent {
  weight: number = 1;
  reps: number = 1;
  oneRepMax: number = 0;
  estimates: Estimate[] = [];

  genEstimate(weight: number, reps: number) {
    return weight / (1.0278 - 0.0278 * reps);
  }

  // The Brzycki formula for calculating one-rep max (1RM) is 1RM = W / (1.0278 - 0.0278 × R), where W is the weight lifted and R is the number of reps
  calc1RM() {
    this.oneRepMax = this.genEstimate(this.weight, this.reps);

    this.estimates = [];
    this.estimates.push({percentage: 1, weight: this.oneRepMax * 1, reps: 1});
    this.estimates.push({percentage: .95, weight: this.oneRepMax * .95, reps: 2});
    this.estimates.push({percentage: .90, weight: this.oneRepMax * .90, reps: 3});
    this.estimates.push({percentage: .88, weight: this.oneRepMax * .88, reps: 4});
    this.estimates.push({percentage: .86, weight: this.oneRepMax * .86, reps: 5});
    this.estimates.push({percentage: .83, weight: this.oneRepMax * .83, reps: 6});
    this.estimates.push({percentage: .80, weight: this.oneRepMax * .80, reps: 7});
    this.estimates.push({percentage: .78, weight: this.oneRepMax * .78, reps: 8});
    this.estimates.push({percentage: .76, weight: this.oneRepMax * .76, reps: 9});
    this.estimates.push({percentage: .75, weight: this.oneRepMax * .75, reps: 10});
  }
};
