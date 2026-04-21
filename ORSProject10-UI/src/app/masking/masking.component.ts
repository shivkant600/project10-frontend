import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-masking',
  templateUrl: './masking.component.html',
  styleUrls: ['./masking.component.css']
})
export class MaskingComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
          super(locator.endpoints.MASKING, locator, route);
     }
  
     populateForm(form, data) {
      form.id = data.id;
      form.maskCode = data.maskCode;
      form.fieldName = data.fieldName;
       form.maskType = data.maskType;
      form.status = data.status;
      
      
      console.log('Populated Form', form);
     }
  
     parseDate(dateString: string): Date {
      if (dateString) {
        return new Date(dateString);
      }
      return null;
    }
  }