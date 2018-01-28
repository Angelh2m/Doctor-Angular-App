import { Component, OnInit } from '@angular/core';
import { OrtopedistaFirebaseService } from '../../services/ortopedista-firebase.service';
import { Item } from '../../interfaces/model';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isAdmin: string;

  constructor(
    private patients: OrtopedistaFirebaseService,
    public auth: AuthService
  ) {

    auth.user$.subscribe( x =>{
      console.log(x.email);
      this.isAdmin = x.email;
    });

  }

  patientsList: Item[];

  ngOnInit() {
    this.patients.getItems().subscribe( items =>{
      console.log(items);
      this.patientsList = items;

    });
  }

  deleteItem(event, patient){
    this.patients.deleteItem(patient);
  }


}
