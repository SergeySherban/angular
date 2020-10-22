import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { FeaturesComponent } from './components/main-container/features/features.component';
import { BenefitsComponent } from './components/main-container/benefits/benefits.component';
import { AboutUsComponent } from './components/main-container/about-us/about-us.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'main'}, // ''
  {
    path: 'main', component: MainContainerComponent, // <router-iutlet>
      children: [ 
        {path: '', pathMatch: 'full', redirectTo: 'features'}, // main/
      { path: 'features', component: FeaturesComponent }, // main/features
      { path: 'benefits', component: BenefitsComponent },
      { path: 'about-us', component: AboutUsComponent }
    ]
  },
  {path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
