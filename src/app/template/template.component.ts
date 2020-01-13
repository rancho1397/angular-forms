import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

public heroPower=["Really Smart","Turbulent Breeze","Super Hot","Weather Changer"]

public form:any;
public submitted:boolean=false;
  constructor() { }

 public onSubmit(form:any){
 
 this.submitted= true;
 
 console.log(this.submitted)

this.form= form;

return form;
 }

  ngOnInit() {
  }

}
