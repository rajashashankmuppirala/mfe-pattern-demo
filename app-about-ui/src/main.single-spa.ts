import {enableProdMode, getPlatform, NgZone, PlatformRef} from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);

    const platform = getPlatform();

    if((window as any).ngZone){
      return (platform as PlatformRef).bootstrapModule(AppModule, { ngZone: (window as any).ngZone});
    } else {
      return (platform as PlatformRef).bootstrapModule(AppModule);
    }


  },
  template: '<about-app-root />',
  Router,
  NavigationStart,
  NgZone,
  domElementGetter: (props: any) => {
    return props?.parentSelector ? document.querySelector(props.parentSelector): document.body;
  }
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
