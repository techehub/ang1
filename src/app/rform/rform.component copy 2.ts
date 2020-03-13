import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ControlContainer, FormBuilder, AbstractControl, ValidatorFn} from '@angular/forms'

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {

  myForm: FormGroup ;
  constructor(private fb:FormBuilder) { }

   customAgeValidator(val):ValidatorFn{
      return function (control: FormControl): { [key: string]: boolean } | null {
      if (control.value < val){
        return {age: true}
      }
      return null;
    }
  }

  ageValidator  (control: FormControl): { [key: string]: boolean } | null {
    if (control.value < 18){
      return {age: true}
    }
    return null;
  }

  addressTypes = [
    "home",
    "office"
   ]

  ngOnInit(): void {
    this.myForm= this.fb.group ({
      fname: ['aaaa', [Validators.required, Validators.minLength(5)]],
      lname: ['bbbb', [Validators.required, Validators.minLength(10)]],
      age : ['', this.customAgeValidator(20)],
      addressType:[],
      homeAddress: this.fb.group({
        street : '',
        address : ''
      }),
      businessAddress: this.fb.group({
        company: '',
        street : '',
        address : ''
      })
    });
  }

  isHome(){
    return this.myForm.controls.addressType.value=='home';
  }

  isOffice(){
    return this.myForm.controls.addressType.value=='office';
  }

  submitData(){
    console.log (this.myForm)
  }

}
