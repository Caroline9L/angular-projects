import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()

export class ServerService {
	constructor(private http: Http){} //http is built in service from ng that allows requests to server
	storeServers(servers: any[]) {
		const headers = new Headers({'Content-Type': 'application/json'}); //optional to include custom headers -- this one is the default
		// return this.http.post('https://udemy-ng-http-6125e.firebaseio.com/data.json', servers); // Post to add info to DB. In firebase, post appends while put replaces existing info.  This command only creates an observable -- doesn't actually send the info. We will subscribe in app.comp. add the data.json so it knows we're working in the db
		// return this.http.post('https://udemy-ng-http-6125e.firebaseio.com/data.json', 
		// 	servers,
		// 	{headers: headers}); // 3rd argument passes the custom header -- headers and your var. name
		return this.http.put('https://udemy-ng-http-6125e.firebaseio.com/data.json',
			servers,
			{ headers: headers });
	}
	// getServers() { //this will reach out to the db and get our data
	// 	return this.http.get('https://udemy-ng-http-6125e.firebaseio.com/data.json'); 

	getServers() { //this will reach out to the db and get our data
		return this.http.get('https://udemy-ng-http-6125e.firebaseio.com/data.json') 
			.map(//will wrap transformed data into an observable -- from rxjs/rx
				(response: Response)=> {
					const data = response.json();
					for (const server of data) {
						server.name = 'FETCHED_' + server.name; //this will change the servername
					}
					return data;
				}
			)
			.catch(//catches errors
				(error: Response) => {
					return Observable.throw('Something went wrong'); //needed to create observable to display
				}
			); 
	}

	getAppName() {
		return this.http.get('https://udemy-ng-http-6125e.firebaseio.com/data/appName.json')
			.map(
				(response: Response) => {
					return response.json();
				}
			);
	}

}