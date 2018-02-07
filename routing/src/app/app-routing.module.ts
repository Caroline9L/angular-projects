//use this page rather than spelling out all of your paths in app.module.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';




const appRoutes: Routes = [ //we have a lot so they will go into app-routing.module
	{ path: '', component: HomeComponent, pathMatch: 'full' }, //start page. full keeps a '' (nothing) from being matched if this was a redirect (since technically everything starts with nothing)
	{ path: 'users', component: UsersComponent, children: [
			{ path: ':id/:name', component: UserComponent }, // : adds a parameter, id is any name you specify for it. long as it follows the /:__ pattern, as many parameters as needed can be added
		]
	}, //will come up in address bar as localhost:4200/users
	// { path: 'servers', component: ServersComponent },
	// { path: 'servers/:id/edit', component: EditServerComponent },
	// { path: 'servers/:id', component: ServerComponent },

	{ 
		path: 'servers', 
		//canActivate: [AuthGuard], //canActivate will protect this and all the children - only accessable if authguard can be true. Authguard is the service providing the protection -- can have multiples
		canActivateChild: [AuthGuard], //will protect only children, not this level
		component: ServersComponent, 
		children: [ //rather than listing seperately, nest
			{ path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },//need a nested component to load -- router-outlet in html. resolve maps data, stores the data in the object (ie server), & runs it before page load
			{ path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] },
		] }, 
	// { path: 'not-found', component: PageNotFoundComponent },
	{ path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },//data lets us pass info into the page we route to
	{ path: '**', redirectTo: '/not-found' } //**is wild card, should be the very last in this list or everything will be redirected. 
];

@NgModule({
	imports: [
		// RouterModule.forRoot(appRoutes, {useHash: true}) // hash is safety with web routers but not pretty
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})

export class AppRoutingModule {//bundles all the routing functionality

}