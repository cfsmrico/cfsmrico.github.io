import { Routes } from '@angular/router';
import { OneRepMaxComponent } from './one_rm/one_rm.component';
import { TdeeComponent } from './tdee/tdee.component';
import { FfmiComponent } from './ffmi/ffmi.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: OneRepMaxComponent },
  { path: 'onerepmax', component: OneRepMaxComponent },
  { path: '1rm', component: OneRepMaxComponent },
  { path: 'tdee', component: TdeeComponent },
  { path: 'ffmi', component: FfmiComponent },
  { path: 'about', component: AboutComponent },
];

