import { Component, OnInit } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alertlist',
  templateUrl: './alertlist.component.html',
  styleUrls: ['./alertlist.component.css']
})
export class AlertlistComponent extends BaseListCtl implements OnInit {

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
       super(locator.endpoints.ALERT, locator, route);
     }

}