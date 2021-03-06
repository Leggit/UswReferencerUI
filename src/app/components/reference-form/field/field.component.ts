import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IField } from 'src/app/models/reference.model';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() field!: IField;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.field.uuid].valid; }

  constructor() { }

  ngOnInit(): void {
    this.setDefaultValue();
  }

  setDefaultValue() {
    if(this.field.type.toLocaleLowerCase() === "date") {
      var today = new Date();
      var value = today.toISOString().split('T')[0];
      this.form.controls[this.field.uuid].setValue(value)
    }
  }
}
