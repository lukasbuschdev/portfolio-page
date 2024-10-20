import { Routes } from '@angular/router';
import { MenuComponent } from './header/menu/menu.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main-content', pathMatch: 'full' },
  { path: 'main-content', component: MainContentComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'privacy', component: PrivacyComponent },
];