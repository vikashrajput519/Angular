import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['Male', 'Female'];
  signUpForms: FormGroup;
  // Reactive Custom validator
  forbiddenUsernames = ['Vikash', 'Archna'];

  ngOnInit() {
    this.signUpForms = new FormGroup({
      'userData': new FormGroup({
        'innerUsername': new FormControl(null, [Validators.required,this.frobiddenNames.bind(this)]),
        'innerEmail': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('Male'),
      'hobbies': new FormArray([])
    });
    this.signUpForms.setValue({
        'userData': {
          'innerUsername' : 'Test',
          'innerEmail': 'innerEmail@test.coms'
        },
        'username': 'Test',
        'email': 'innerEmail@test.coms',
        'gender': 'Male',
        'hobbies': []
      });
  }

  onSubmit() {
    console.log(this.signUpForms);
  }
  onAddHobbies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForms.get('hobbies')).push(control);
  }


  frobiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }
}
