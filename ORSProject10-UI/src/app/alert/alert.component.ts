import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
          super(locator.endpoints.ALERT, locator, route);
     }
  
     populateForm(form, data) {
      form.id = data.id;
      form.alertCode = data.alertCode;
      form.alertType = data.alertType;
       form.alertTime = data.alertTime;
      form.alertStatus = data.alertStatus;
      
      
      console.log('Populated Form', form);
     }
  
     parseDate(dateString: string): Date {
      if (dateString) {
        return new Date(dateString);
      }
      return null;
    }
  }