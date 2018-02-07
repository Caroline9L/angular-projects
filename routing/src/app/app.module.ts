import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';



// const appRoutes: Routes = [ //we have a lot so they will go into app-routing.module
//   { path: '', component: HomeComponent }, //start page
//   { path: 'users', component: UsersComponent, children: [
//     { path: ':id/:name', component: UserComponent }, // : adds a parameter, id is any name you specify for it. long as it follows the /:__ pattern, as many parameters as needed can be added
//   ] }, //will come up in address bar as localhost:4200/users
//   // { path: 'servers', component: ServersComponent },
//   // { path: 'servers/:id/edit', component: EditServerComponent },
//   // { path: 'servers/:id', component: ServerComponent },

//   { path: 'servers', component: ServersComponent, children: [ //rather than listing seperately, nest
//     { path: ':id/edit', component: EditServerComponent },//need a nested component to load -- router-outlet in html
//     { path: ':id', component: ServerComponent },
//   ] },
//   { path: 'not-found', component: PageNotFoundComponent },
//   { path: '**', redirectTo: '/not-found', pathMatch: 'full' } //**is wild card, should be the very last in this list or everything will be redirected. full keeps a '' (nothing) from being matched

// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // RouterModule.forRoot(appRoutes)
    AppRoutingModule
  ],
  providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
