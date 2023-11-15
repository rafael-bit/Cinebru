import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/Header/header.component';
import { FooterComponent } from './core/Footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FilmeComponent } from './pages/filmes/filmes.component';
import { FilmeService } from './pages/filmes/filmes.service';
import { FilterPipe } from './pages/filmes/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    BrowserModule, FormsModule,
    RouterModule, RoutingModule,
    BrowserAnimationsModule, NgbModule,
    HttpClientModule
  ],
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, FilmeComponent, FilterPipe],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {
}
