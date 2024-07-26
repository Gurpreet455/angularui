import { Injectable } from '@angular/core';

export class Employee {
  ID!: number;

  product!: string;

  model!: string;

  varient!: string;

  ModelDescription!: string;

  quantity!: number;

  action!:string;
}

const employees: Employee[] = [{
  ID: 1,
  product: 'Farmrc',
  model: 'Farm007',
  varient: '34223',
  ModelDescription: 'Tractor ',
  quantity: 2,
  action: 'Edit Delete',
}];

@Injectable()
export class Service {
  getEmployees() {
    return employees;
  }
}

