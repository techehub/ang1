import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ControlContainer} from '@angular/forms'

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {

  myForm: FormGroup ;
  constructor() { }

  ngOnInit(): void {

    this.myForm= new FormGroup ({

      fname: new FormControl('aaaa', [Validators.required, Validators.minLength(5)]),
      lname: new FormControl('bbbb', [Validators.required, Validators.minLength(10)]),
      homeAddress: new FormGroup({
        street : new FormControl(''),
        address : new FormControl('')
      }),
      businessAddress: new FormGroup({
        company: new FormControl(''),
        street : new FormControl(''),
        address : new FormControl('')
      })
    });
  }

  submitData(){
    console.log (this.myForm)
  }

}
