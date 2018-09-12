import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TreeListExampleComponent } from './list/tree-list/example/tree-list-example.component';
import { WelcomeComponent } from './components/welcome.component';

const routes: Routes = [{
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full'
  }, {
    path: 'treelist',
    component: TreeListExampleComponent
  }, {
    path: 'welcome',
    component: WelcomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
