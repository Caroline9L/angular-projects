import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
	imports: [
		// The AppServerModule should import your AppModule followed
		// by the ServerModule from @angular/platform-server.
		AppModule, //finds our original app
		ServerModule //this is from the package
	],
	// Since the bootstrapped component is not inherited from your
	// imported AppModule, it needs to be repeated here.
	bootstrap: [AppComponent]
})
export class AppServerModule { }