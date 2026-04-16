
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarksheetComponent } from './marksheet/marksheet.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './login/forgotpassword.component';
import { SignUpComponent } from './login/signup.component';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message/message-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { UserListComponent } from './user/user-list.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { CourseComponent } from "./course/course.component";
import { SubjectComponent } from "./subject/subject.component"
import { Subject, from } from 'rxjs';
import { RoleListComponent } from './role/role-list.component';
import { CourseListComponent } from "./course/course-list.component";
import { FacultyComponent } from "./faculty/faculty.component";
import { FacultyListComponent } from "./faculty/faculty-list.component";
import { TimetableComponent } from "./timetable/timetable.component";
import { FileComponent } from './file/file.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { MarksheetmeritListComponent } from "./marksheet/marksheetmerit-list.component";
import { GetmarksheetComponent } from "./marksheet/getmarksheet.component";
import { ChangepasswordComponent } from "./user/changepassword.component";
import { LoaderComponent } from './loader/loader.component';
import { MyprofileComponent } from './user/myprofile.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerlistComponent } from './customer/customer-list.component';
import { AlertComponent } from './alert/alert.component';
import { AlertlistComponent } from './alert/alertlist.component';
import { OrderComponent } from './order/order.component';
import { OrderlistComponent } from './order/orderlist.component';
import { PolicyComponent } from './policy/policy.component';
import { PolicylistComponent } from './policy/policylist.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { SponsorlistComponent } from './sponsor/sponsorlist.component';
import { ParkingComponent } from './parking/parking.component';
import { ParkinglistComponent } from './parking/parkinglist.component';
import { PlanComponent } from './plan/plan.component';
import { PlanlistComponent } from './plan/planlist.component';
import { StateComponent } from './state/state.component';
import { StatelistComponent } from './state/statelist.component';
import { HealthComponent } from './health/health.component';
import { HeathlistComponent } from './health/heathlist.component';
import { LocationComponent } from './location/location.component';
import { LocationlistComponent } from './location/locationlist.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentlistComponent } from './payment/paymentlist.component';
import { CredentialComponent } from './credential/credential.component';
import { CredentiallistComponent } from './credential/credentiallist.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },

    // ***********CUSTOMER*************

    {
        path: 'customer',
        component: CustomerComponent
    },
    {
        path: 'customerlist',
        component: CustomerlistComponent
    },
    {
        path: 'customet/:id',
        component: CustomerComponent
    },

    // ***********PRODUCT*************

    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'productlist',
        component: ProductListComponent
    },
    {
        path: 'product/:id',
        component: ProductComponent
    },

    // ======================================
    {
        path: 'loader',
        component: LoaderComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
    ,
    {
        path: 'login/:userparams',
        component: LoginComponent
    },
    {
        path: 'forgotpassword',
        component: ForgotPasswordComponent
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'message',
        component: MessageComponent,
    },
    {
        path: 'message/:id',
        component: MessageComponent
    },
    {
        path: 'messagelist',
        component: MessageListComponent
    },
    {
        path: 'marksheet',
        component: MarksheetComponent
    },
    {
        path: 'marksheet/:id',
        component: MarksheetComponent
    },
    {
        path: 'marksheetlist',
        component: MarksheetListComponent
    },
    {
        path: 'marksheetmeritlist',
        component: MarksheetmeritListComponent
    },
    {
        path: 'getmarksheet',
        component: GetmarksheetComponent
    },
    {
        path: 'college',
        component: CollegeComponent
    },
    {
        path: 'college/:id',
        component: CollegeComponent
    },
    {
        path: 'collegelist',
        component: CollegeListComponent
    },
    {
        path: 'student',
        component: StudentComponent
    },
    {
        path: 'student/:id',
        component: StudentComponent
    },
    {
        path: 'studentlist',
        component: StudentListComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'user/:id',
        component: UserComponent
    },
    {
        path: 'userlist',
        component: UserListComponent
    },
    {
        path: 'role',
        component: RoleComponent
    },
    {
        path: 'rolelist',
        component: RoleListComponent
    },
    {
        path: 'role/:id',
        component: RoleComponent
    },
    {
        path: 'course',
        component: CourseComponent
    },
    {
        path: 'courselist',
        component: CourseListComponent
    },
    {
        path: 'course/:id',
        component: CourseComponent
    },
    {
        path: 'faculty',
        component: FacultyComponent
    },
    {
        path: 'facultylist',
        component: FacultyListComponent
    },
    {
        path: 'faculty/:id',
        component: FacultyComponent
    },
    {
        path: 'timetable',
        component: TimetableComponent
    },
    {
        path: 'timetablelist',
        component: TimetableListComponent

    },
    {
        path: 'timetable/:id',
        component: TimetableComponent

    },
    {
        path: 'subject',
        component: SubjectComponent

    },
    {
        path: 'subjectlist',
        component: SubjectListComponent

    },
    {
        path: 'subject/:id',
        component: SubjectComponent

    },



     {
        path: 'alert',
        component: AlertComponent
    },
 {
        path: 'alertlist',
        component: AlertlistComponent
    },
 {
        path: 'alert/:id',
        component: AlertComponent
    },




    {
        path: 'order',
        component: OrderComponent
    },
 {
        path: 'orderlist',
        component: OrderlistComponent
    },
 {
        path: 'order/:id',
        component: OrderComponent
    },



     {
        path: 'policy',
        component: PolicyComponent
    },
 {
        path: 'policylist',
        component: PolicylistComponent
    },
 {
        path: 'policy/:id',
        component: PolicyComponent
    },


      {
        path: 'sponsor',
        component: SponsorComponent
    },
 {
        path: 'sponsorlist',
        component: SponsorlistComponent
    },
 {
        path: 'sponsor/:id',
        component: SponsorComponent
    },




    
      {
        path: 'parking',
        component: ParkingComponent
    },
 {
        path: 'parkinglist',
        component: ParkinglistComponent
    },
 {
        path: 'parking/:id',
        component: ParkingComponent
    },



      {
        path: 'plan',
        component: PlanComponent
    },
 {
        path: 'planlist',
        component: PlanlistComponent
    },
 {
        path: 'plan/:id',
        component: PlanComponent
    },




      {
        path: 'state',
        component: StateComponent
    },
 {
        path: 'statelist',
        component: StatelistComponent
    },
 {
        path: 'state/:id',
        component: StateComponent
    },




      {
        path: 'health',
        component: HealthComponent
    },
 {
        path: 'healthlist',
        component: HeathlistComponent
    },
 {
        path: 'health/:id',
        component: HealthComponent
    },


       {
        path: 'location',
        component: LocationComponent
    },
 {
        path: 'locationlist',
        component: LocationlistComponent
    },
 {
        path: 'location/:id',
        component: LocationComponent
    },



      {
        path: 'payment',
        component: PaymentComponent
    },
 {
        path: 'paymentlist',
        component: PaymentlistComponent
    },
 {
        path: 'payment/:id',
        component: PaymentComponent
    },




     {
        path: 'credential',
        component: CredentialComponent
    },
 {
        path: 'credentiallist',
        component: CredentiallistComponent
    },
 {
        path: 'credential/:id',
        component: CredentialComponent
    },





    {
        path: 'myprofile',
        component: MyprofileComponent
    },
    {
        path: 'file',
        component: FileComponent
    },
    {
        path: 'changepassword',
        component: ChangepasswordComponent


    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})


export class AppRoutingModule { }