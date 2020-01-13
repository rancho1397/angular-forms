import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  public heroPower=["Really Smart","Turbulent Breeze","Super Hot","Weather Changer"]
  public submitted:boolean=false
   form= this.fb.group({
  
   name :['',Validators.required],
  ego:['',Validators.required],
   heroPower:['',Validators.required]
  })
  

  
  onSubmit() {
   this.submitted=true;
   
    console.log(this.form.value);
  }

  constructor(public fb:FormBuilder) {
 
   }

  ngOnInit() {
  }

}
