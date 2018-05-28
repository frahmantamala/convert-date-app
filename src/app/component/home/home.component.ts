import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  model ={
    name: ''
  };
  
  showFormControls(form: any) {
    return form && form.controls['name'] &&
      form.controls['name'].value; // Dr. IQ
  }
}
