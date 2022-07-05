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
  emp_id: any = 0;

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



  selectedState: any = '';





  // --------------------------------------------
  // form group
  myReactiveForm: any = {};
  requestPayLoad: any = {};

  ngOnInit() {
    // reactive form
    this.myReactiveForm = new FormGroup({
      FirstName: new FormControl(null, [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      MaritalStatus: new FormControl(null, [Validators.required]),
      LastName: new FormControl(null, [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      MiddleName: new FormControl(null, [
        Validators.pattern('[A-Za-z]{1,32}'),
      ]),
      PhoneNumber: new FormControl(null, [
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      CAddress: new FormControl(null, [Validators.required]),
      CAddress1: new FormControl(null, [Validators.required]),
      PAddress: new FormControl(null, [Validators.required]),
      PAddress1: new FormControl(null, [Validators.required]),
      CPinCode: new FormControl(null, [
        Validators.pattern('^[1-9][0-9]{5}$'),
        Validators.required,
      ]),
      PinCode: new FormControl(null, [
        Validators.pattern('^[1-9][0-9]{5}$'),
        Validators.required,
      ]),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      DOB: new FormControl(null, [
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

      country: new FormControl({ value: null, disabled: true }),
      passport: new FormControl({ value: null, disabled: true }),
      issueddate: new FormControl({ value: null, disabled: true }),
      expirationdate: new FormControl({ value: null, disabled: true }),
      issuedby: new FormControl({ value: null, disabled: true }),

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
      fromyr: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]{4}'),
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
      toyr: new FormControl(null, [
        Validators.required,
        Validators.pattern('[0-9]{4}'),
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
      designation: new FormControl(null, [
        Validators.required,
        Validators.pattern('[A-Za-z]{1,}'),
      ]),
      location: new FormControl(null, [
        Validators.required,
        Validators.pattern('[A-Za-z]{1,}'),
      ]),
      qualification: new FormControl(null, [
        Validators.pattern('[a-zA-Z.{}";_^%$#!~@,-]{1,32}'),
        Validators.required,
      ]),
      major: new FormControl(null, [
        Validators.pattern('[a-zA-Z.{}";_^%$#!~@,-]{1,32}'),
        Validators.required,
      ]),
      Membership: new FormControl(null, [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      OrgMembership: new FormControl(null, [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      membershipdate: new FormControl(null, [
        Validators.required,
        Validators.pattern('^(2|1){1}[0-9]{3}.[0-9]{2}.[0-9]{2}.*$'),
      ]),
      honour: new FormControl(null, [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      honouraward: new FormControl(null, [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      grantor: new FormControl(null, [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      year: new FormControl(null, [
        Validators.pattern('[0-9]{1,4}'),
        Validators.required,
      ]),
      currentstate: new FormControl(null, [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      currentcity: new FormControl(null, [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      permanentstate: new FormControl(null, [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      permanentcity: new FormControl(null, [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      institute: new FormControl(null, [Validators.required]),
      yearReceived: new FormControl(null, [
        Validators.pattern('[0-9]{1,4}'),
        Validators.required,
      ]),
      emergencyName: new FormControl(null, [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      relation: new FormControl(null, [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]), //
      emergencyphone1: new FormControl(null, [
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      emergencyphone2: new FormControl(null, [
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      emergencystate: new FormControl(null, [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      qualificationstate: new FormControl(null, [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      emergencycity: new FormControl(null, [
        Validators.pattern('[A-Za-z]{1,32}'),
        Validators.required,
      ]),
      address1: new FormControl(null, Validators.required),
      address2: new FormControl(null, Validators.required),
      pin: new FormControl(null, [
        Validators.pattern('[0-9]{6}'),
        Validators.required,
      ]),
      gender: new FormControl(null, Validators.required),

      isInjured: new FormControl(false),
      isIll: new FormControl(false),
      isDisabled: new FormControl(false),
      isMedicalAlert: new FormControl(false),
      BloodGrp: new FormControl(null, [
        Validators.pattern('^(A|B|AB|O)[+-]$'),
        Validators.required,
      ]),

      injuryDetails: new FormControl(null, [
        Validators.pattern('^(?!d+$)(?:[a-zA-Z][a-zA-Z @&$,]*)?$'),
        Validators.required,
      ]),
      Healthinfo: new FormControl(null, [
        Validators.pattern('^(?!d+$)(?:[a-zA-Z][a-zA-Z @&$,]*)?$'),
        Validators.required,
      ]),
      illnessDetails: new FormControl(null, [
        Validators.pattern('^(?!d+$)(?:[a-zA-Z][a-zA-Z @&$,]*)?$'),
        Validators.required,
      ]),
      disabilityDetails: new FormControl(null, [
        Validators.pattern('^(?!d+$)(?:[a-zA-Z][a-zA-Z @&$,]*)?$'),
        Validators.required,
      ]),
      declarationCheckboxOne: new FormControl(false, [Validators.required]),
      declarationCheckboxSecond: new FormControl(false, [Validators.required]),
      beingQualifiedCheckbox: new FormControl(false, [Validators.required]),
      otherConsentCheckbox: new FormControl(false, [Validators.required]),
    });
  }

  // --------------------------------------------
  // Request Payload




  // --------------------------------------------
  // disabled fields
  disabledFields() {
    this.myReactiveForm.controls.country.disable();
  }

  // --------------------------------------------
  // select options change functions
  changeMaritalStatus(e: any) {
    this.myReactiveForm.value.MaritalStatus?.setValue(e.target.value);
  }

  changeGender(e: any) {
    this.myReactiveForm.value.gender?.setValue(e.target.value);
  }

  // --------------------------------------------
  // enable or disable the passport fields on the basis of the checkbox
  passportClick(e: any) {
    console.log(`passport checkbox clicked`);

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
          Validators.required,
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
      this.myReactiveForm.controls.country?.setValue(null);
      this.myReactiveForm.controls.country.disable();
      this.myReactiveForm.get('country').updateValueAndValidity();

      //passport
      this.myReactiveForm.get('passport').clearValidators();
      this.myReactiveForm.controls.passport?.setValue(null);
      this.myReactiveForm.controls.passport.disable();
      this.myReactiveForm.get('passport').updateValueAndValidity();

      //issued date
      this.myReactiveForm.get('issueddate').clearValidators();
      this.myReactiveForm.controls.issueddate?.setValue(null);
      this.myReactiveForm.controls.issueddate.disable();
      this.myReactiveForm.get('issueddate').updateValueAndValidity();

      //expiration date
      this.myReactiveForm.get('expirationdate').clearValidators();
      this.myReactiveForm.controls.expirationdate?.setValue(null);
      this.myReactiveForm.controls.expirationdate.disable();
      this.myReactiveForm.get('expirationdate').updateValueAndValidity();

      //issued by
      this.myReactiveForm.get('issuedby').clearValidators();
      this.myReactiveForm.controls.issuedby?.setValue(null);
      this.myReactiveForm.controls.issuedby.disable();
      this.myReactiveForm.get('issuedby').updateValueAndValidity();
    }
  }

  // --------------------------------------------
  // checkboxes functions
  isInjuredFcn(e: any) {

    this.myReactiveForm.controls.isInjured?.setValue(e.target.value);
  }

  isIllFcn(e: any) {

    this.myReactiveForm.controls.isIll?.setValue(e.target.value);
  }

  isDisabledFcn(e: any) {

    this.myReactiveForm.controls.isDisabled?.setValue(e.target.value);
  }

  isMedicalAlertFcn(e: any) {

    this.myReactiveForm.controls.isMedicalAlert?.setValue(e.target.value);
  }

  // --------------------------------------------
  // request to service layer
  onSubmit() {
    if (sessionStorage.getItem('emp_id') == null) {


      this.makePayLoad();
      console.log(this.requestPayLoad);
      this.submitted = true;

      // if form is invalid it wont get submit
      if (this.myReactiveForm.invalid) {
        return;
      }
      console.log('submitted');

      // sending payload to backend
      this.emp_id = this.userservice.savePersonalDetails(
        this.requestPayLoad
      );

      // setting session storage 
      sessionStorage.setItem('emp_id', this.emp_id);
      sessionStorage.setItem('stage', 'PERSONAL_INFO');
    }
  }

  onSubmitAndContinue() {
    if (sessionStorage.getItem('emp_id') == null) {
      this.onSubmit();
    }
  }


  //request payload is made from formGroup 
  makePayLoad() {
    this.requestPayLoad = {
      empId: "1",
      fname: this.myReactiveForm.get('FirstName')?.value,
      mname: this.myReactiveForm.get('MiddleName')?.value,
      lname: this.myReactiveForm.get('LastName')?.value,
      dob: this.myReactiveForm.get('DOB')?.value,
      phno: this.myReactiveForm.get('PhoneNumber')?.value,
      maritalstatus: this.myReactiveForm.get('MaritalStatus')?.value,
      emailid: this.myReactiveForm.get('Email')?.value,
      addresses: [
        {
          address1: this.myReactiveForm.get('CAddress')?.value,
          address2: this.myReactiveForm.get('CAddress1')?.value,
          city: this.myReactiveForm.get('currentstate')?.value,
          state: this.myReactiveForm.get('currentcity')?.value,
          pincode: this.myReactiveForm.get('CPinCode')?.value,
          addressType: 'current'
        },
        {
          address1: this.myReactiveForm.get('PAddress')?.value,
          address2: this.myReactiveForm.get('PAddress1')?.value,
          city: this.myReactiveForm.get('permanentcity')?.value,
          state: this.myReactiveForm.get('permanentstate')?.value,
          pincode: this.myReactiveForm.get('PinCode')?.value,
          addressType: 'permanent'
        }
      ],

      emergencyname: this.myReactiveForm.get('emergencyName')?.value,
      emergencyrelation: this.myReactiveForm.get('relation')?.value,
      emergencyph1: this.myReactiveForm.get('emergencyphone1')?.value,
      emergencyph2: this.myReactiveForm.get('emergencyphone2')?.value,
      emergencyaddr1: this.myReactiveForm.get('address1')?.value,
      emergencyaddr2: this.myReactiveForm.get('address2')?.value,
      emergencycity: this.myReactiveForm.get('emergencycity')?.value,
      emergencystate: this.myReactiveForm.get('emergencystate')?.value,
      emergencypincode: this.myReactiveForm.get('pin')?.value,
      citizenshipcountry: this.myReactiveForm.get('country')?.value,
      passportnumber: this.myReactiveForm.get('passport')?.value,
      passportissuedate: this.myReactiveForm.get('issueddate')?.value,
      passportexpirydate: this.myReactiveForm.get('expirationdate')?.value,
      passportissuedby: this.myReactiveForm.get('issuedby')?.value,
      pannumber: this.myReactiveForm.get('pan')?.value,
      nameonpan: this.myReactiveForm.get('panname')?.value,
      aadharnumber: this.myReactiveForm.get('aadhar')?.value,
      nameonaadhar: this.myReactiveForm.get('aadharname')?.value,
      qualifications: [
        {
          qualification: this.myReactiveForm.get('qualification')?.value,
          major: this.myReactiveForm.get('major')?.value,
          institute: this.myReactiveForm.get('institute')?.value,
          yearofcompletion: this.myReactiveForm.get('year')?.value,
          stateorcountry: this.myReactiveForm.get('qualificationstate')?.value
        }
      ],
      memberships: [
        {
          membership: this.myReactiveForm.get('Membership')?.value,
          membership_title: this.myReactiveForm.get('OrgMembership')?.value,
          membership_date: this.myReactiveForm.get('membershipdate')?.value
        }
      ],
      honors: [
        {
          honours: this.myReactiveForm.get('honour')?.value,
          honor_title: this.myReactiveForm.get('honouraward')?.value,
          granter: this.myReactiveForm.get('grantor')?.value,
          receivedyear: this.myReactiveForm.get('yearReceived')?.value
        }
      ],
      previousemploymentdetails: [
        {
          from: this.myReactiveForm.get('fromyr')?.value,
          to: this.myReactiveForm.get('toyr')?.value,
          location: this.myReactiveForm.get('location')?.value,
          designation: this.myReactiveForm.get('designation')?.value,
          companyname: this.myReactiveForm.get('companyname')?.value
        }
      ],
      gender: this.myReactiveForm.get('gender')?.value,
      bloodgroup: this.myReactiveForm.get('BloodGrp')?.value,
      islivingwithinjury: this.myReactiveForm.get('isInjured')?.value,
      injurydetails: this.myReactiveForm.get('injuryDetails')?.value,
      islivingwithillness: this.myReactiveForm.get('isIll')?.value,
      illnessdetails: this.myReactiveForm.get('illnessDetails')?.value,
      islivingwithdisability: this.myReactiveForm.get('isDisabled')?.value,
      disabilitydetails: this.myReactiveForm.get('disabilityDetails')?.value,
      allergytomedicines: this.myReactiveForm.get('Healthinfo')?.value,
      medicalalert: this.myReactiveForm.get('isMedicalAlert')?.value
    }
  }
}


