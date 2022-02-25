import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { TabsService } from '../tabs/tabs.service';

@Component({
  selector: 'app-register-order',
  templateUrl: './register-order.component.html',
  styleUrls: ['./register-order.component.scss']
})
export class RegisterOrderComponent implements OnInit {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  showForm = ''
  form: FormGroup

  typesOfShoes: any[] = [];


  constructor(public formBuilder: FormBuilder, public tabsService: TabsService) {
    this.form = this.formBuilder.group({
      categoria: [''],
      prato: ['']
    })
  }


  ngOnInit() {
  }

  changeForm(value: string) {
    this.form.reset();
    if (value == 'before') {
      this.tabsService.getTabs().subscribe(list => {
        this.typesOfShoes = list;
        this.showForm = value
      })
    } else {
      this.showForm = value
    }
  }

  salvar() {
    console.log(this.form.value)

  }
}
