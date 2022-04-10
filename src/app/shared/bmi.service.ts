import { Injectable } from '@angular/core';
import { BmiCalc } from './bmi-calc.model';

@Injectable({
  providedIn: 'root'
})
export class BMIService {

  formData : BmiCalc;

  constructor() { }
}
