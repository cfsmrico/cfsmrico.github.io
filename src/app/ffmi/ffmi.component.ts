import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule, formatNumber, NgIf } from '@angular/common';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-ffmi',
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
    NgIf
  ],
  templateUrl: './ffmi.component.html',
  styleUrl: './ffmi.component.css'
})
export class FfmiComponent {
  unitSystemOptions = ['Metric', 'Imperial'];
  unitSystem = 'Metric';
  weight: number = 0;
  weightKg: number = 90;
  weightLbs: number = 200;
  height: number = 181;
  feet: number = 5;
  inches: number = 11;
  bodyfat: number = 13;
  ffmi: number = 0;
  totalBodyFat: number = 0;
  fatFreeMass: number = 0;
  fatMassIndex: number = 0;
  normalizedFfmi: number = 0;

  modelChanged() {
    this.calc();
  }

  calc() {
    if (this.unitSystem == 'Metric') {
      this.weight = this.weightKg;
    } else {
      this.weight = this.weightLbs;
      this.convertToMetric();
    }

     this.totalBodyFat = this.weight * (this.bodyfat / 100);
     this.fatFreeMass = this.weight * (1 - (this.bodyfat / 100));
     this.fatMassIndex = this.totalBodyFat / ((this.height / 100)^2);
     this.ffmi = this.fatFreeMass / ((this.height / 100)^2);
     this.normalizedFfmi = this.ffmi + 6.1 * (1.8 - (this.height / 100));
  }

  // convers Imperial units to Metric
  convertToMetric() {
    this.weight = this.weight * 0.45359237
    let totalInches = this.feet * 12 + this.inches;
    this.height = totalInches * 2.54;
  }
};
