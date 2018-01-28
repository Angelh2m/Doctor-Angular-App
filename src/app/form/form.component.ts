import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// Firebase Service and Schema
import { OrtopedistaFirebaseService } from '../services/ortopedista-firebase.service';
import { Item } from '../interfaces/model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  form: FormGroup;

  item: Item = {
    name: '' ,
    lastName: '',
    phone: '',
    email: '',
    message: '',
  };

   // Success
   sentMessage = false;
   warningMessage = {
      active: false,
      message: `Lo sentimos pero la información proporcionada no es correcta!`
   };

  constructor(
    private itemService: OrtopedistaFirebaseService
  ) {

    this.form = new FormGroup({
      'name': new FormControl('', [
                                    Validators.required,
                                    Validators.minLength(3)
                                  ]),
      'lastName': new FormControl('', [
                                    Validators.required,
                                    Validators.minLength(3)
                                  ]),
      // For more than one validation use []
      // tslint:disable-next-line:max-line-length
      'email': new FormControl('', [
                                    Validators.required,
                                    Validators.pattern('[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
                                    ]),
      'phone': new FormControl('', [
                                    Validators.required,
                                    Validators.minLength(10)
                                    ] ),
      'message': new FormControl('', Validators.required ),

    })

  }

  ngOnInit() {
    // Load everithing from the firebase service
    // this.itemService.getItems().subscribe( items =>{
    //   console.log(items);
    //   // save it in items
    //   this.item = items;
    // })
  }

  saveChanges(){
    // console.log(this.form);
    // console.log(this.form.value);

    // send the item to the service
    if( this.form.valid ){
      this.itemService.addItem(this.item);
      this.sentMessage = true;
      return;
    }

    this.warningMessage.active = true;
    setTimeout( () => {
      this.warningMessage.active = false;
    }, 3000);

  }

}
