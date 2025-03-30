import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {AppService} from "../../app.service";
import {ISingleSpaRegisterInput} from "../../single-spa-config-service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  private readonly mfeName = 'app-contact-ui';

  constructor(private appService: AppService) {
    console.log(`about component ${this.mfeName}`);
    // this.appService.init(this.mfeName);
  }
  ngAfterViewInit(): void {
    const singleSpaRegisterInput: ISingleSpaRegisterInput = {
      mfeName: this.mfeName,
      parentSelector: '#spa-contact-ui'
    };

    this.appService.mountMfe(singleSpaRegisterInput);

  }

  ngOnDestroy(): void {
    console.log('on destroy called');
    this.appService.destroy(this.mfeName);
  }

}
