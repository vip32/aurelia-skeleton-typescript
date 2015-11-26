import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client'; // aurelia-fetch-client
import 'fetch';

@inject(HttpClient)
export class Users {
  heading = 'Github Users';
  users = [];
  url = 'https://api.github.com/users';

  constructor(private http) {
    // http.configure(config => {
    //   config
    //     .useStandardConfiguration()
    //     .withBaseUrl('https://api.github.com/');
    // });

    this.http = http;
  }

  activate() {
    // return this.http.fetch('users')
    //   .then(response => response.json())
    //   .then(users => this.users = users);
      
    return this.http.get(this.url).then(result => {
            this.users = JSON.parse(result.response);
        });
  }
}