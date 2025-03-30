import {Inject, Injectable, OnDestroy} from "@angular/core";
import {ISingleSpaRegisterInput, SingleSpaConfigService} from "./single-spa-config-service";


@Injectable()
export class AppService {

  constructor( private singleSpaConfigService: SingleSpaConfigService, @Inject('Window') private window: Window) {
    // init the mfe map in a service bootstrap call later
    this.singleSpaConfigService.mfeMap['app-about-ui'] = 'http://localhost:4201/main.js';
    this.singleSpaConfigService.mfeMap['app-contact-ui'] = 'http://localhost:4202/mfe-app-contact-ui.js';
    (this.window as any).System.addImportMap({
      imports: this.singleSpaConfigService.mfeMap
    });
  }

  mountMfe(singleSpaRegisterInput: ISingleSpaRegisterInput): void {
     if(singleSpaRegisterInput && singleSpaRegisterInput.mfeName){
       this.singleSpaConfigService.registerAndStartMfe(singleSpaRegisterInput);
     }
  }

  destroy(mfeName: string): void {
    this.singleSpaConfigService.unregisterMfe(mfeName);
  }
}
