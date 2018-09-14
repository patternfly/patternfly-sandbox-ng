// import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// App components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DemoComponentsModule } from './components/demo-components.module';
import { NavbarModule } from './navbar/navbar.module';

// Main areas
//  import example modules
import { WelcomeComponent } from './components/welcome.component';
import { TreeListExampleModule } from './list/tree-list/example/tree-list-example.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    DemoComponentsModule,
    FormsModule,
    HttpClientModule,
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
