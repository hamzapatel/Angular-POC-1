import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.scss'],
})
export class WellComponent implements OnInit {
  form: FormGroup;
  @Output() addWell = new EventEmitter();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      sourceKey: ['', Validators.required],
    });
  }

  onSubmit() {
    this.addWell.emit(this.form.getRawValue());
    this.form.reset();
    this.form.enable();
  }
}
