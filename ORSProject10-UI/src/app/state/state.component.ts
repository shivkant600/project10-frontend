import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
          super(locator.endpoints.STATE, locator, route);
     }
  
     populateForm(form, data) {
      form.id = data.id;
      form.stateCode = data.stateCode;
      form.stateName = data.stateName;
       form.countryName = data.countryName;
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
