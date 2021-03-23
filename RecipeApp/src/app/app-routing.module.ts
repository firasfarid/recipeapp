import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'screen',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'screen',
    loadChildren: () => import('./screen/screen.module').then( m => m.ScreenPageModule)
  },
  {
    path: 'breakfast',
    loadChildren: () => import('./breakfast/breakfast.module').then( m => m.BreakfastPageModule)
  },
  {
    path: 'lunch',
    loadChildren: () => import('./lunch/lunch.module').then( m => m.LunchPageModule)
  },
  {
    path: 'dinner',
    loadChildren: () => import('./dinner/dinner.module').then( m => m.DinnerPageModule)
  },
  {
    path: 'recipe1',
    loadChildren: () => import('./recipe1/recipe1.module').then( m => m.Recipe1PageModule)
  },
  {
    path: 'recipe2',
    loadChildren: () => import('./recipe2/recipe2.module').then( m => m.Recipe2PageModule)
  },
  {
    path: 'recipe3',
    loadChildren: () => import('./recipe3/recipe3.module').then( m => m.Recipe3PageModule)
  },
  {
    path: 'recipe4',
    loadChildren: () => import('./recipe4/recipe4.module').then( m => m.Recipe4PageModule)
  },
  {
    path: 'recipe5',
    loadChildren: () => import('./recipe5/recipe5.module').then( m => m.Recipe5PageModule)
  },
  {
    path: 'recipe6',
    loadChildren: () => import('./recipe6/recipe6.module').then( m => m.Recipe6PageModule)
  },
  {
    path: 'recipe7',
    loadChildren: () => import('./recipe7/recipe7.module').then( m => m.Recipe7PageModule)
  },
  {
    path: 'recipe8',
    loadChildren: () => import('./recipe8/recipe8.module').then( m => m.Recipe8PageModule)
  },
  {
    path: 'recipe9',
    loadChildren: () => import('./recipe9/recipe9.module').then( m => m.Recipe9PageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
