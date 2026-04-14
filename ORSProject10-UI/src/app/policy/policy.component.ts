import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent extends BaseCtl{

  constructor(public locator: ServiceLocatorService, public route : ActivatedRoute) { 
    super(locator.endpoints.POLICY,locator,route)
  }

 populateForm(form, data) {
      form.id = data.id;
      form.policyName = data.policyName;
      form.amount = data.amount;
       form.startDate = data.startDate;
      
      
      
      console.log('Populated Form', form);
     }
  
     parseDate(dateString: string): Date {
      if (dateString) {
        return new Date(dateString);
      }
      return null;
    }
}
