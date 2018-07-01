// import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// App components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DemoComponentsModule } from './components/demo-components.module';
import { NavbarModule } from './navbar/navbar.module';

// Main areas
//  import example modules
import { TreeListExampleModule } from '../app/list/tree-list/example/tree-list-example.module';
import { WelcomeComponent } from './components/welcome.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    DemoComponentsModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    TreeListExampleModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
