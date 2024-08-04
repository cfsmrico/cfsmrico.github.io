import { Routes } from '@angular/router';
import { TdeeComponent } from './tdee/tdee.component';
import { FfmiComponent } from './ffmi/ffmi.component';

export const routes: Routes = [
  { path: '', component: TdeeComponent },
  { path: 'tdee', component: TdeeComponent },
  { path: 'ffmi', component: FfmiComponent }
];
