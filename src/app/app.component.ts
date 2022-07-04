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

  constructor(private http: HttpClient, private userservice: UserService) { }

  // base url to which request has to be send
  submitted: any = false;
  responsePayload: any = {
    emp_id: '',
  };

  // --------------------------------------------
  //select option list
  maritalStatusList: any[] = [
    'Married',
    'Unmarried',
    'Divorced',
    'Registered Partner',
    'Widowed',
    'Separated',
  ];

  genderList: any[] = [
    'Male',
    'Female',
    'Lesbian',
    'Gay',
    'Bisexual',
    'Transgender',
  ];

  cityList: any[] = [];

  selectedState: any = '';
  stateList: any = [
    {
      id: 1, name: 'Andhra Pradesh'
    }
    ,
    {
      id: 2, name: 'Arunachal Pradesh'
    }
    ,
    {
      id: 3, name: 'Assam'
    }
    ,
    {
      id: 4, name: 'Bihar'
    }
    ,
    {
      id: 5, name: 'Haryana'
    }
    ,
    {
      id: 6, name: 'Punjab'
    }
    ,
  ]




  // --------------------------------------------
  // form group
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

      country: new FormControl({ value: '', disabled: true }),
      passport: new FormControl({ value: '', disabled: true }),
      issueddate: new FormControl({ value: '', disabled: true }),
      expirationdate: new FormControl({ value: '', disabled: true }),
      issuedby: new FormControl({ value: '', disabled: true }),

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
      companyname: new FormControl(null, [
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
        Validators.required,
        Validators.pattern('^(2|1){1}[0-9]{3}.[0-9]{2}.[0-9]{2}.*$'),
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
      city: new FormControl('', [
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

      isInjured: new FormControl(false),
      isIll: new FormControl(false),
      isDisabled: new FormControl(false),
      isMedicalAlert: new FormControl(false),
      BloodGrp: new FormControl('', [
        Validators.pattern('^(A|B|AB|O)[+-]$'),
        Validators.required,
      ]),

      injuryDetails: new FormControl('', [
        Validators.pattern('^(?!d+$)(?:[a-zA-Z][a-zA-Z @&$,]*)?$'),
        Validators.required,
      ]),
      Healthinfo: new FormControl('', [
        Validators.pattern('^(?!d+$)(?:[a-zA-Z][a-zA-Z @&$,]*)?$'),
        Validators.required,
      ]),
      illnessDetails: new FormControl('', [
        Validators.pattern('^(?!d+$)(?:[a-zA-Z][a-zA-Z @&$,]*)?$'),
        Validators.required,
      ]),
      disabilityDetails: new FormControl('', [
        Validators.pattern('^(?!d+$)(?:[a-zA-Z][a-zA-Z @&$,]*)?$'),
        Validators.required,
      ]),
      declarationCheckboxOne: new FormControl('', [Validators.required]),
      declarationCheckboxSecond: new FormControl(false, [Validators.required]),
      beingQualifiedCheckbox: new FormControl('', [Validators.required]),
      otherConsentCheckbox: new FormControl('', [Validators.required]),
    });
  }

  // --------------------------------------------
  // disabled fields
  disabledFields() {
    this.myReactiveForm.controls.country.disable();
  }

  // --------------------------------------------
  // select options change functions
  changeMaritalStatus(e: any) {
    this.myReactiveForm.value.MaritalStatus?.setValue(e.target.value);
    console.log(this.myReactiveForm.get('MaritalStatus'));
  }

  changeGender(e: any) {
    this.myReactiveForm.value.gender?.setValue(e.target.value);
    console.log(this.myReactiveForm.get('gender'));
  }

  // --------------------------------------------
  // enable or disable the passport fields on the basis of the checkbox
  passportClick(e: any) {
    console.log(e.target.checked);
    console.log(`checkbox clicked`);

    if (e.target.checked) {
      //enabling inputs
      this.myReactiveForm.controls.country.enable();
      this.myReactiveForm.controls.passport.enable();
      this.myReactiveForm.controls.issueddate.enable();
      this.myReactiveForm.controls.expirationdate.enable();
      this.myReactiveForm.controls.issuedby.enable();

      // applying validations to inputs
      this.myReactiveForm
        .get('country')
        .setValidators([
          Validators.required,
          Validators.pattern('^[a-zA-Z]{1,}$'),
        ]);
      this.myReactiveForm
        .get('passport')
        .setValidators([
          Validators.pattern('^[A-PR-WYa-pr-wy][1-9]\\d\\s?\\d{4}[1-9]$'),
        ]);
      this.myReactiveForm
        .get('issueddate')
        .setValidators([Validators.required]);
      this.myReactiveForm
        .get('expirationdate')
        .setValidators([Validators.required]);
      this.myReactiveForm
        .get('issuedby')
        .setValidators([
          Validators.required,
          Validators.pattern('^[a-zA-Z]{1,}$'),
        ]);

      // updating the inputs after alteration
      this.myReactiveForm.get('country').updateValueAndValidity();
      this.myReactiveForm.get('passport').updateValueAndValidity();
      this.myReactiveForm.get('issueddate').updateValueAndValidity();
      this.myReactiveForm.get('expirationdate').updateValueAndValidity();
      this.myReactiveForm.get('issuedby').updateValueAndValidity();
    } else {
      //country
      this.myReactiveForm.get('country').clearValidators();
      this.myReactiveForm.controls.country?.setValue('');
      this.myReactiveForm.controls.country.disable();
      this.myReactiveForm.get('country').updateValueAndValidity();

      //passport
      this.myReactiveForm.get('passport').clearValidators();
      this.myReactiveForm.controls.passport?.setValue('');
      this.myReactiveForm.controls.passport.disable();
      this.myReactiveForm.get('passport').updateValueAndValidity();

      //issued date
      this.myReactiveForm.get('issueddate').clearValidators();
      this.myReactiveForm.controls.issueddate?.setValue('');
      this.myReactiveForm.controls.issueddate.disable();
      this.myReactiveForm.get('issueddate').updateValueAndValidity();

      //expiration date
      this.myReactiveForm.get('expirationdate').clearValidators();
      this.myReactiveForm.controls.expirationdate?.setValue('');
      this.myReactiveForm.controls.expirationdate.disable();
      this.myReactiveForm.get('expirationdate').updateValueAndValidity();

      //issued by
      this.myReactiveForm.get('issuedby').clearValidators();
      this.myReactiveForm.controls.issuedby?.setValue('');
      this.myReactiveForm.controls.issuedby.disable();
      this.myReactiveForm.get('issuedby').updateValueAndValidity();
    }
  }

  // --------------------------------------------
  // checkboxes functions
  isInjuredFcn(e: any) {
    console.log(e.target.value);
    this.myReactiveForm.controls.isInjured?.setValue(e.target.value);
  }

  isIllFcn(e: any) {
    console.log(e.target.value);
    this.myReactiveForm.controls.isIll?.setValue(e.target.value);
  }

  isDisabledFcn(e: any) {
    console.log(e.target.value);
    this.myReactiveForm.controls.isDisabled?.setValue(e.target.value);
  }

  isMedicalAlertFcn(e: any) {
    console.log(e.target.value);
    this.myReactiveForm.controls.isMedicalAlert?.setValue(e.target.value);
  }

  // --------------------------------------------
  // request to service layer
  onSubmit() {
    this.submitted = true;

    // if (this.myReactiveForm.invalid) {
    //   return;
    // }

    console.log(this.myReactiveForm.get('declarationCheckboxSecond').value);

    console.log(this.myReactiveForm.value);

    // this.responsePayload = this.userservice.savePersonalDetails(
    //   this.myReactiveForm.value
    // );

    sessionStorage.setItem('emp_id', this.responsePayload.emp_id);
    sessionStorage.setItem('stage', 'PERSONAL_INFO');
  }

  obj: any = {
    country: 'India',
    state: 'Lagos',
  };

  getStates() {
    // console.log(e.target.value);
    console.log(this.selectedState);

    // this.myReactiveForm['state'].setValue(selected.id);

    let headers = new HttpHeaders({
      'X-Powered-By': 'Express',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/json',
      'charset': 'utf-8',
      'Content-Length': '157',
      'ETag': 'W/"9d-laheLqB06/2L4F8Bwm6wiZQbEaE"',
      'Date': 'Sun, 30 May 2021 00:07:39 GMT',
      'Connection': 'keep-alive',
    });

    this.obj.state = this.selectedState;

    let options = { headers: headers };
    this.http
      .post<any>(
        'https://countriesnow.space/api/v0.1/countries/state/cities',
        JSON.stringify(this.obj),
        options
      )
      .subscribe((data: any) => {
        console.log(data.data);
        this.cityList.length = 0;
        this.cityList.push(...data.data);
        console.log(this.cityList);
      });
    // const headers : any = { "X-CSCAPI-KEY : "API_KEY" };
  }
}
