import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userinformationfrom: FormGroup | any;
  hobbies: any;
  userinformationArry: any = [];
  searchItem: any;
  constructor(private formbuilder: FormBuilder) {
    this.userinformationfrom = this.formbuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      hobbies: this.formbuilder.array([this.createhobby()]),
      checked: ['', Validators.required]

    })
  }
  createhobby() {
    return this.formbuilder.group({
      hobby: ['']
    })
  }
  addtoarryhobby() {
    this.hobbies = this.userinformationfrom.get('hobbies') as FormArray
    this.hobbies.push(this.createhobby())
  }
  deletearryhobby(index: any) {
    let hobbiesArray = this.userinformationfrom.get('hobbies') as FormArray
    hobbiesArray.removeAt(index)
  }

  deleteData(index: any) {
    this.userinformationArry.splice(index, 1)
  }
  ngOnInit(): void {
  }
  addinformarion() {

    console.log(this.userinformationfrom.value)
    let d = this.userinformationfrom.value
    this.userinformationArry.push(d)
    console.log(this.userinformationArry, "fdgfdg")
  }
  createdata() {
    let hobbiesArray = this.userinformationfrom.get('hobbies') as FormArray
    let index = hobbiesArray.length
    while (index > 0) {
      hobbiesArray.removeAt(index)
      index--;
    }
  }
  validate(event: any) {
    if (event.target.checked == false) {
      this.userinformationfrom.invalid
      console.log("dfnkd", this.userinformationfrom)
    }
  }
  resetForm() {
    this.userinformationfrom.reset()
    this.createdata()
  }
}
