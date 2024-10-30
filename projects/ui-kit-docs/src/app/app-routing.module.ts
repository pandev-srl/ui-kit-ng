import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from './containers/test-page/test-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/docs/app',
        pathMatch: 'full',
      },
      {
        path: 'test',
        component: TestPageComponent,
      },
      {
        path: 'docs',
        loadChildren: () => import('@pandev-srl/ui-kit-ng').then((m) => m.UiKitDocsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
