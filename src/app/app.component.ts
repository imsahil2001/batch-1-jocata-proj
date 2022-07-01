import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { runInThisContext } from 'vm';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'official_project';

  constructor(private http: HttpClient, private user: UserService) {}

  // base url to which request has to be send
  submitted: any = false;
  baseUrl: string = '';

  maritalStatusList: any[] = [
    'Married',
    'Unmarried',
    'Divorced',
    'Registered Partner',
    'Widowed',
    'Separated',
  ];
  myReactiveForm: any = {};

  ngOnInit() {
    // reactive form
    this.myReactiveForm = new FormGroup({
      FirstName: new FormControl('', [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      MaritalStatus: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      PhoneNumber: new FormControl('', [
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      CAddress: new FormControl('', [Validators.required]),
      CAddress1: new FormControl('', [Validators.required]),
      PAddress: new FormControl('', [Validators.required]),
      PAddress1: new FormControl('', [Validators.required]),
      CPinCode: new FormControl('', [
        Validators.pattern('^[1-9][0-9]{5}$'),
        Validators.required,
      ]),
      PinCode: new FormControl('', [
        Validators.pattern('^[1-9][0-9]{5}$'),
        Validators.required,
      ]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      DOB: new FormControl('', [
        Validators.required,
        Validators.pattern('^(2|1){1}[0-9]{3}.[0-9]{2}.[0-9]{2}.*$'),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      country: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z]{1,}$'),
      ]),
      passport: new FormControl('', [
        Validators.pattern('^[A-PR-WYa-pr-wy][1-9]\\d\\s?\\d{4}[1-9]$'),
      ]),
      issueddate: new FormControl(null, [Validators.required]),
      expirationdate: new FormControl(null, [Validators.required]),
      issuedby: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z]{1,}$'),
      ]),
      pan: new FormControl(null, [
        Validators.required,
        Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}'),
      ]),
      panname: new FormControl(null, [
        Validators.pattern('^[a-zA-Z][a-zA-Z\\s]+$'),
      ]),
      aadhar: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$'),
      ]),
      aadharname: new FormControl(null, [
        Validators.pattern('^[a-zA-Z][a-zA-Z\\s]+$'),
      ]),
      fromyr: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{4}'),
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
      toyr: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{4}'),
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
      designation: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z]{1,}'),
      ]),
      location: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z]{1,}'),
      ]),
      qualification: new FormControl('', [
        Validators.pattern('[a-zA-Z.{}";_^%$#!~@,-]{1,32}'),
        Validators.required,
      ]),
      major: new FormControl('', [
        Validators.pattern('[a-zA-Z.{}";_^%$#!~@,-]{1,32}'),
        Validators.required,
      ]),
      Membership: new FormControl('', [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      OrgMembership: new FormControl('', [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      date: new FormControl('', [
        Validators.pattern('^(2|1){1}[0-9]{3}.[0-9]{2}.[0-9]{2}.*$'),
        Validators.required,
      ]),
      honour: new FormControl('', [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      honouraward: new FormControl('', [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      grantor: new FormControl('', [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      year: new FormControl('', [
        Validators.pattern('[0-9]{1,4}'),
        Validators.required,
      ]),
      state: new FormControl('', [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      institute: new FormControl('', [Validators.required]),
      yearReceived: new FormControl('', [
        Validators.pattern('[0-9]{1,4}'),
        Validators.required,
      ]),
      emergencyName: new FormControl('', [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      relation: new FormControl('', [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]), //
      phone1: new FormControl('', [
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      phone2: new FormControl('', [
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      address1: new FormControl('', Validators.required),
      address2: new FormControl('', Validators.required),
      pin: new FormControl('', [
        Validators.pattern('[0-9]{6}'),
        Validators.required,
      ]),
      gender: new FormControl('', Validators.required),
      BloodGrp: new FormControl('', [
        Validators.pattern('^(A|B|AB|O)[+-]$'),
        Validators.required,
      ]),
      inquiry: new FormControl('', [
        Validators.pattern('^(?!d+$)(?:[a-zA-Z][a-zA-Z @&$,]*)?$'),
        Validators.required,
      ]),
      Healthinfo: new FormControl('', [
        Validators.pattern('^(?!d+$)(?:[a-zA-Z][a-zA-Z @&$,]*)?$'),
        Validators.required,
      ]),
      illness: new FormControl('', [
        Validators.pattern('^(?!d+$)(?:[a-zA-Z][a-zA-Z @&$,]*)?$'),
        Validators.required,
      ]),
      disability: new FormControl('', [
        Validators.pattern('^(?!d+$)(?:[a-zA-Z][a-zA-Z @&$,]*)?$'),
        Validators.required,
      ]),
    });
  }

  changeMaritalStatus(e: any) {
    this.myReactiveForm.value.MaritalStatus?.setValue(e.target.value);
    console.log(this.myReactiveForm.get('MaritalStatus'));
  }

  // request to server
  onSubmit() {
    // this.ngOnInit();
    this.submitted = true;
    //window.location.reload();
    console.log(this.submitted);
    console.log(this.myReactiveForm.value);

    if (this.myReactiveForm.invalid) {
      return;
    }
    console.log('hello');
    this.user.savePersonalDetails(this.myReactiveForm.value);
  }
}
