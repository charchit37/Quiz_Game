import { Component, OnInit ,Inject} from '@angular/core';
import {StorageService,LOCAL_STORAGE} from 'ngx-webstorage-service';
import  {History} from  '../history'
import { newArray } from '@angular/compiler/src/util';


@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})

export class HistoryPageComponent implements OnInit {


  /* creating an array (finalArr) of class history type and now we will get all the values from the local storage and we will push into the array */

  finalArr = new  Array<History>();      

  nameArr : any = [];
  question2 : any = [];
  question3 : any = [];

  constructor(@Inject(LOCAL_STORAGE)private storage : StorageService) { }

  ngOnInit(): void {

    this.nameArr = this.storage.get('name');   // geting the name array of object from local storage
    
    this.question2 = this.storage.get('Que2');  // getting the question array of object from local storage
    this.question3 = this.storage.get('Que3');

    for(var i = 0; i < this.nameArr.length; i++)    // we will iterate the loop till name and simultaneously we will push all the values into our finalArr
    {
      var gameName  = "Game"+ (i + 1);
      var name  = this.nameArr[i].name;

      var question2 = this.question2[i].Question_no_2;       
      console.log(question2);

      var answere2 = this.question2[i].Answere;

      var question3 = this.question3[i].Question_no_3;
      var answere3 = this.question3[i].answere;

      var currentDate = this.question3[i].currentDate;
      console.log(currentDate);

       var  obj  = new History(gameName,name,question2,answere2,question3,answere3,currentDate)

       this.finalArr.push(obj);   // pushing the final array of object into our class type array

    }

   
  }  

}
