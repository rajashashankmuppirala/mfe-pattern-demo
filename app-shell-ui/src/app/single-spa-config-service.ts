import { Inject, Injectable } from '@angular/core';
import { getAppStatus, getMountedApps, registerApplication, start, unregisterApplication } from 'single-spa';

export interface ISingleSpaRegisterInput {
  mfeName: string;
  parentSelector?: any;
  additionalProps?: any;
}

@Injectable()
export class SingleSpaConfigService {
  isSingleSpaStarted = false;
  mfeMap: any = {};

  constructor(@Inject('Window') private window: Window) {
    console.log('SingleSpaConfigService init');
  }

  registerAndStartMfe(singleSpaRegisterInput: ISingleSpaRegisterInput){
    if(this.mfeMap){
      if(singleSpaRegisterInput && singleSpaRegisterInput.mfeName && getAppStatus(singleSpaRegisterInput.mfeName) !== 'MOUNTED'){
        const mfeUrl = this.mfeMap[singleSpaRegisterInput.mfeName];
        if(mfeUrl){

          const mfeProps = {
            parentSelector: singleSpaRegisterInput.parentSelector
          }

          setTimeout(() => {
            registerApplication({
              name: singleSpaRegisterInput.mfeName,
              app:() => (this.window as any).System.import(singleSpaRegisterInput.mfeName),
              activeWhen:() => { return true },
              customProps: mfeProps
            });
            if(!this.isSingleSpaStarted){
              this.isSingleSpaStarted = true;
              start();
            }

          });
        } else {
          console.log(`couldnt find mfe url for ${singleSpaRegisterInput.mfeName}`);
        }
      }
    }
  }

  unregisterMfe(mfeName: string): void{
    const mountedApps = getMountedApps();
    console.log(JSON.stringify(mountedApps));
    if(mountedApps && mountedApps.includes(mfeName)){
      unregisterApplication(mfeName).then(() => {
        console.log(`mfe ${mfeName} unregistered`);
      });
    }
  }

}
