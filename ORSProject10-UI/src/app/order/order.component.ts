import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent extends BaseCtl {

   constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
            super(locator.endpoints.ORDER, locator, route);
       }
 populateForm(form, data) {
      form.id = data.id;
      form.orderCode = data.orderCode;
      form.customerName = data.customerName;
       form.totalAmount = data.totalAmount;
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
