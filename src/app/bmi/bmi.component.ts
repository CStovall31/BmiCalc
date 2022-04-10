import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BMIService } from '../shared/bmi.service';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent implements OnInit {

  ht: number;
  wt: number;
  BMI: number;

  constructor(public service: BMIService) { }

  ngOnInit(): void {
    this.restForm();
  }

  restForm(form?: NgForm){
    if(form != null){
      form.resetForm()
    }
    this.service.formData = {
      Height: null,
      Weight: null,
    }
  }

  onSubmit(form : NgForm){
    this.ht = form.value.Height

    this.wt = form.value.Weight

    this.BMI_calc(this.ht, this.wt)
    this.restForm()
  }

  BMI_calc(ht:number, wt: number){

    this.ht = this.ht * 0.025
    this.ht = this.ht * this.ht
    this.wt = this.wt * 0.45

    this.BMI = Math.round((this.wt/this.ht) * 10 ) /10

    return this.BMI

  }

}
