//import 'bootstrap';
//import 'bootstrap/css/bootstrap.css!';

import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import AppRouterConfig from 'app.router.config';
import HttpClientConfig from 'paulvanbladel/aurelia-auth/app.httpClient.config';
@inject(Router,HttpClientConfig,AppRouterConfig )
export class App {

  constructor(router, httpClientConfig, appRouterConfig){
    this.router = router;
    this.httpClientConfig = httpClientConfig;
    this.appRouterConfig = appRouterConfig;
  }

  activate(){

    this.httpClientConfig.configure();
    this.appRouterConfig.configure();
  }

  //
  // navigationComplete(navigationInstruction) {
  //   // Enable the materialize "waves" effect on the new page.
  //   Waves.displayEffect()
  //
  //   // Track page-views with google-analytics.
  //   ga('send', 'pageview', '/' + navigationInstruction.fragment);
  // }
}
