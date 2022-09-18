import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormsComponent } from './components/forms/forms.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';

@NgModule({
  declarations: [AppComponent, FormsComponent, AccountDetailsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
