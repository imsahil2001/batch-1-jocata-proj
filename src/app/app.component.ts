import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit  {
  title = 'official_project';
  myReactiveForm:any;

  ngOnInit(){
    this.myReactiveForm =new FormGroup({

     'name':new FormControl('',[Validators.pattern("[A-Za-z]{1,32}"),Validators.required]),
     'email':new FormControl(null),
     
    });
  }
}


