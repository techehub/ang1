import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  myForm : FormGroup
  constructor(private formBuilder : FormBuilder){

  }




  ngOnInit(): void {
    this.myForm= this.formBuilder.group(
    {
    fname : ['', Validators.required],
    lname : ['', Validators.required, Validators.minLength(5), Validators.maxLength(10)],

    }

    )

  }

}
