import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent extends BaseCtl {

   constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
            super(locator.endpoints.SPONSOR, locator, route);
       }
 populateForm(form, data) {
      form.id = data.id;
      form.sponsorName = data.sponsorName;
      form.contribution = data.contribution;
       form.contactPerson = data.contactPerson;
      
      
      
      console.log('Populated Form', form);
     }
  
     parseDate(dateString: string): Date {
      if (dateString) {
        return new Date(dateString);
      }
      return null;
    }
}
