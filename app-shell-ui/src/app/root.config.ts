import * as angularCore from '@angular/core';
import * as angularCommon from '@angular/common';
import * as angularRouter from '@angular/router';
import * as rxjs from 'rxjs';
import * as platformBrowserDynamic from '@angular/platform-browser-dynamic';
import * as platformBrowser from '@angular/platform-browser';
import * as singleSpa from 'single-spa';
import * as singleSpaAngular from 'single-spa-angular';
import * as singleSpaAngularInternals from 'single-spa-angular/internals';
import * as react from 'react';
import * as reactDom from 'react-dom';
import * as reactDomClient from 'react-dom/client';

const systemJs: any = (window as any).System;

systemJs.set('app:@angular/core',angularCore);
systemJs.set('app:@angular/common',angularCommon);
systemJs.set('app:@angular/router',angularRouter);
systemJs.set('app:rxjs',rxjs);
systemJs.set('app:@angular/platform-browser-dynamic',platformBrowserDynamic);
systemJs.set('app:@angular/platform-browser',platformBrowser);
systemJs.set('app:single-spa',singleSpa);
systemJs.set('app:single-spa-angular',singleSpaAngular);
systemJs.set('app:single-spa-angular/internals',singleSpaAngularInternals);
systemJs.set('app:react', react);
systemJs.set('app:react-dom', reactDom);
systemJs.set('app:react-dom/client', reactDomClient);
