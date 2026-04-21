import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EndpointServiceService {

  constructor() { }

  public SERVER_URL = "http://localhost:8084";
  public MESSAGE = this.SERVER_URL + "/Message";
  public USER = this.SERVER_URL + "/User";
  public ROLE = this.SERVER_URL + "/Role";
  public COLLEGE = this.SERVER_URL + "/College";
  public MARKSHEET = this.SERVER_URL + "/Marksheet";
  public STUDENT = this.SERVER_URL + "/Student";
  public SUBJECT = this.SERVER_URL + "/Subject";
  public FACULTY = this.SERVER_URL + "/Faculty";
  public COURSE = this.SERVER_URL + "/Course";
  public ALERT = this.SERVER_URL + "/Alert";
  public ORDER = this.SERVER_URL + "/Order";
  public POLICY = this.SERVER_URL + "/Policy";
  public SPONSOR = this.SERVER_URL + "/Sponsor";
  public PARKING = this.SERVER_URL + "/Parking";
  public PLAN = this.SERVER_URL + "/Plan";
  public STATE = this.SERVER_URL + "/State";
  public HEALTH = this.SERVER_URL + "/Health";
  public LOCATION = this.SERVER_URL + "/Location";
 public PAYMENT = this.SERVER_URL + "/Payment";
  public CREDENTIAL = this.SERVER_URL + "/Credential"
  public MASKING = this.SERVER_URL + "/Masking"
public DATA = this.SERVER_URL + "/Data"

  public TIMETABLE = this.SERVER_URL + "/TimeTable";
  public JASPERREPORT = this.SERVER_URL + "/Jasper";

  public CUSTOMER = this.SERVER_URL + "/Customer";






}
