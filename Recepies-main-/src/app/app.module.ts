import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { ReceipeItemComponent } from './recepies/receipe-list/receipe-item/receipe-item.component';
import { ReceipeListComponent } from './recepies/receipe-list/receipe-list.component';
import { ReceipeDetailComponent } from './recepies/receipe-detail/receipe-detail.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    ReceipeDetailComponent,
    ReceipeItemComponent,
    ReceipeListComponent,
    ReceipeListComponent,
    ShoppingListComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
