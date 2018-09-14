import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TabsetConfig, TabsModule } from 'ngx-bootstrap/tabs';
import { TreeModule } from 'angular-tree-component';

import { ActionModule } from 'patternfly-ng/action';
import { TreeListBasicExampleComponent } from './tree-list-basic-example.component';
import { TreeListDndExampleComponent } from './tree-list-dnd-example.component';
import { TreeListExampleComponent } from './tree-list-example.component';
import { TreeListModule } from 'patternfly-sandbox-ng';
import { DemoComponentsModule } from '../../../components/demo-components.module';


@NgModule({
  declarations: [
    TreeListBasicExampleComponent,
    TreeListDndExampleComponent,
    TreeListExampleComponent
  ],
  imports: [
    ActionModule,
    CommonModule,
    DemoComponentsModule,
    FormsModule,
    TabsModule.forRoot(),
    TreeListModule,
    TreeModule
  ],
  providers: [TabsetConfig]
})
export class TreeListExampleModule {
  constructor() {}
}
