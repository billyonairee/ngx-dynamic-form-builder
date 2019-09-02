import { Component, Input } from '@angular/core';
import { DynamicFormGroup, DynamicFormBuilder } from 'ngx-dynamic-form-builder'
import { Company } from './../model/company'
import { Validators } from '@angular/forms'
import { Subscription } from 'rxjs'


@Component({
  selector: 'app-company-panel',
  templateUrl: './company-panel.component.html',
  styleUrls: ['./company-panel.component.scss']
})
export class CompanyPanelComponent {

  form: DynamicFormGroup<Company>;

  @Input()
  item = new Company({
    'id': 11,
    'name': '123456789012345'
  });

  // @Input()
  // strings = Company

  fb = new DynamicFormBuilder();

  savedItem: Company;

  errorChangeSubscription: Subscription;

  constructor() {
    this.form = this.fb.group(Company, {
      name: ""
    });

    this.errorChangeSubscription = this.form.customValidateErrors.subscribe((allErrors) => {
      console.log(`Errors changed: ${allErrors}`);
    })
  }

  ngOnDestroy() {
    if (this.errorChangeSubscription != null && this.errorChangeSubscription.closed === false) {
      this.errorChangeSubscription.unsubscribe();
    }
  }

  onLoadClick(): void {
    this.savedItem = undefined;
    this.form.object = this.item;
    this.form.validateAllFormFields();
  }

  onClearClick(): void {
    this.savedItem = undefined;
    this.form.object = new Company();
    this.form.validateAllFormFields();
  }

  onSaveClick(): void {
    this.form.validateAllFormFields();
    if (this.form.valid) {
      this.savedItem = this.form.object;
    }
  }


}
