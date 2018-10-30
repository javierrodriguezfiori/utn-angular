import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  myForm: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.myForm = fb.group({
      'nombre' : ["", Validators.required],
      'email' : [{value: "", disabled: true}, [Validators.email]],
      'newsletter' : [""]
    });
    this.newsletter.valueChanges.subscribe((value:boolean) => {
      if (value) {
        this.email.enable();
      } else {
        this.email.disable();
        this.email.setValue("");
      }
    });
  }

  ngOnInit() {
  }

  get nombre(){
    return this.myForm.get('nombre');
  }

  get email(){
    return this.myForm.get('email');
  }

  get newsletter(){
    return this.myForm.get('newsletter');
  }
}
