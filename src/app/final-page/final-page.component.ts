import { Component, OnInit,Inject} from '@angular/core';
import { Router } from '@angular/router';
import {StorageService,LOCAL_STORAGE} from 'ngx-webstorage-service';


@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.css']
})

export class FinalPageComponent implements OnInit {

  nameArr : any = [];
  question2 : any =[];
  question3 : any =[];


  constructor(private rout : Router,@Inject(LOCAL_STORAGE)private storage : StorageService) { }

  ngOnInit(): void {

    this.nameArr =  this.storage.get('name');   // fetching the name array of object from storage class ands assigning to a global array
    console.log(this.nameArr);

    this.question2 = this.storage.get('Que2');   // fetching the question array from storage classes
   
    this.question3 = this.storage.get('Que3');
  }



  showHistory()
  {
    this.rout.navigateByUrl('/historyPage');

  }

}
