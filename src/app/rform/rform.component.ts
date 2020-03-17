import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ControlContainer, FormBuilder, AbstractControl, ValidatorFn, FormArray} from '@angular/forms'

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {

  errorMessage= { 'required': "Field is Required", 'minLength':'Mininum 5 char', 'age': 'invalid age' }

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

  countries =['india', 'usa', 'china']

  ngOnInit(): void {


  this.myForm= this.fb.group ({
      fname: '' ,
      lname: '' ,
      coutntry : '',
      age : '',
      addressType:[],
      homeAddress: this.fb.group({
        street : '',
        address : ''
      }),
      businessAddress: this.fb.group({
        company: '',
        street : '',
        address : ''
      }),

      contacts: this.fb.array([
        {}
      ]),

      shippingAddresses: this.fb.array([
        this.fb.group({
          address1 : '',
          address2 : '',
          address3 : ''
        })
      ])

    });

    this.myForm.valueChanges.subscribe((data) => {
      this.loopCtrls(this.myForm)
   })

  }

  get contacts() {
    return this.myForm.get('contacts') as FormArray;
  }

  addContact() {
    this.contacts.push(this.fb.control(''));
  }
  get firstname() {
    return this.myForm.get('fname') as FormControl;
  }
  get ageCtl() {
    return this.myForm.get('age') as FormControl;
  }
  get shippingAddress() {
    return this.myForm.get('shippingAddresses') as FormArray;
  }

  addShippingAddress() {
    this.shippingAddress.push(this.fb.group({
      address1:'',
      address2:'',
      address3:''
    }));
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

  countyChaged(){

    console.log ("Changed !!!!")
    console.log (this.myForm.controls.coutntry.value)

    if (this.myForm.controls.coutntry.value=='india'){

      this.myForm.get("fname").setValidators([Validators.required, Validators.minLength(5)])
      this.myForm.get("lname").setValidators([])
      this.myForm.get("age").setValidators([Validators.required, this.customAgeValidator(18) ])

      this.myForm.get("fname").updateValueAndValidity()
      this.myForm.get("lname").updateValueAndValidity()
      this.myForm.get("age").updateValueAndValidity()

      console.log ("India Validator applied")

    }
    else if (this.myForm.controls.coutntry.value=='usa'){
      this.myForm.controls["fname"].setValidators([Validators.required, Validators.minLength(5)])
      this.myForm.controls["lname"].setValidators([Validators.required, Validators.minLength(5)])
      this.myForm.controls["age"].setValidators([Validators.required, this.customAgeValidator(15) ])

      this.myForm.controls["fname"].updateValueAndValidity()
      this.myForm.controls["lname"].updateValueAndValidity()
      this.myForm.controls["age"].updateValueAndValidity()
    }
    else {
      this.myForm.controls["fname"].setValidators([])
      this.myForm.controls["lname"].setValidators([])
      this.myForm.controls["age"].setValidators([])

      this.myForm.controls["fname"].updateValueAndValidity()
      this.myForm.controls["lname"].updateValueAndValidity()
      this.myForm.controls["age"].updateValueAndValidity()
    }
    //this.myForm.updateValueAndValidity()
    console.log (this.myForm)
  }


  remove(i){
    this.shippingAddress.removeAt(i);
  }

  loopCtrls(grp: FormGroup){
    Object.keys(grp.controls).forEach((x) => {
      const actrl  = grp.get(x)
      if(actrl instanceof FormControl){
        if(actrl && actrl.invalid){
          console.log('key:',x,' value:', actrl.value)
          for(const errorkey in actrl.errors){
               actrl.errors[errorkey+"Msg"]=this.errorMessage [errorkey]
          }
      }
      } else {
        this.loopCtrls(<FormGroup>actrl)
      }
    })
  }


}
