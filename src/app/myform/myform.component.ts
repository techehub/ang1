import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  firstname: string= "aaaa";
  lastname :string="bbbb";

  constructor() { }

  ngOnInit(): void {
  }

}
