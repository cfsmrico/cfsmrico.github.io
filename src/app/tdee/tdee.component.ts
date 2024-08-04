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

interface ActivityLevel {
  label: string;
  level: number;
}

@Component({
  selector: 'app-tdee',
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
  templateUrl: './tdee.component.html',
  styleUrl: './tdee.component.css'
})
export class TdeeComponent {
  unitSystemOptions = ['Metric', 'Imperial'];
  unitSystem = 'Metric';
  sexOptions = ['Male', 'Female'];
  sex = 'Male';
  activityLevelOptions: ActivityLevel[] = [
    {label: 'Basal Metabolic Rate (BMR)', level: 1},
    {label: 'Sedentary: little or no exercise', level: 1.2},
    {label: 'Light: exercise 1-3 times/week', level: 1.375},
    {label: 'Moderate: exercise 4-5 times/week', level: 1.465},
    {label: 'Active: daily exercise or intense exercise 3-4 times/week', level: 1.55},
    {label: 'Very Active: intense exercise 6-7 times/week', level: 1.725},
    {label: 'Extra Active: very intense exercise daily, or physical job', level: 1.9}
  ];
  activityLevel: ActivityLevel = {label: 'Active: daily exercise or intense exercise 3-4 times/week', level: 1.55};
  weight: number = 0;
  weightKg: number = 90;
  weightLbs: number = 200;
  height: number = 181;
  feet: number = 6;
  inches: number = 0;
  age: number = 42;
  bodyfat: number = 14;
  tdee: number = 0;
  useBodyfat: boolean = true;

  calcTDEE() {
    var lbm = 0;
    var bmr = 0;

    if (this.unitSystem == 'Metric') {
      this.weight = this.weightKg;
    } else {
      this.weight = this.weightLbs;
      this.convertToMetric();
    }

    if (this.useBodyfat) {
      lbm = (1 - (this.bodyfat / 100)) * this.weight;
      bmr = 370 + (21.6 * lbm);
    } else {
      let s = 5;

      if (this.sex == 'Female') {
        s = -151;
      }

      bmr = (10 * this.weight + 6.25 * this.height - 5 * this.age) + s;

    }

    this.tdee = bmr * this.activityLevel.level;
  }

  // convers Imperial units to Metric
  convertToMetric() {
    this.weight = this.weight * 0.45359237
    let totalInches = this.feet * 12 + this.inches;
    this.height = totalInches * 2.54;
  }
};
