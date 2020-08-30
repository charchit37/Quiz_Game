import { Component, OnInit,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import {StorageService,LOCAL_STORAGE} from 'ngx-webstorage-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-flag-question',
  templateUrl: './flag-question.component.html',
  styleUrls: ['./flag-question.component.css']
})

export class FlagQuestionComponent implements OnInit {

  FlagGroup: FormGroup;
  flagArr : any = [];
  submitted : boolean = false;
  arrCheckbox : any = [];

  colorArr : any  = [{name:'White',value:'White',checked:false},
             {name:'Yellow',value:'Yellow',checked:false},
             {name:'Saffron',value:'Saffron',checked:false},
             {name:'Green',value:'Green',checked:false}]


  constructor(private fb : FormBuilder,@Inject(LOCAL_STORAGE)private storage : StorageService,private rout : Router) {

    this.FlagGroup = this.fb.group({

      flagColor: this.fb.array([],Validators.required)


    })


   }

  ngOnInit(): void {
  }

 
 /* this is the function which will be triggered on change of the checkbbox */

  onCheckBoxChange(event)
  {

      const flagColor : FormArray = this.FlagGroup.get('flagColor') as FormArray;  //flag array is a type of formarray

      if(event.target.checked)
      {
          flagColor.push(new FormControl(event.target.value));    // if the user has select the value we will push that value into our form  array
          console.log(flagColor.value);
      }
      else
      {
        var i : number = 0;
        flagColor.controls.forEach((element : FormControl) => {
         
            if(element.value == event.target.value)    // // if the user had remove the value we are removing the value from our form array
            {
              flagColor.removeAt(i);  
              return;
              console.log(flagColor.value);
            }
            i++;

          
        })
      }
    

  }

  getCurrentDate()
  {
    var today = new Date();  // this function will give us current date and time

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    var current_date = mm + '/' + dd + '/' + yyyy + ","+time;
    return current_date;  
  }
  

  addFlag()
  {
    this.submitted = true;

    if(this.FlagGroup.invalid)
    {  
      return;
    }
    else
    {
        if(this.storage.get("Que3") === undefined)
        {

            var date = new Date();
            
    
  /* Creating an object and now we will take the answere from the user form value */

            var object1 = {Question_no_3:'What are the colors in a national flag ?',answere:this.FlagGroup.controls['flagColor'].value,currentDate:this.getCurrentDate()}
            console.log(this.FlagGroup.controls['flagColor'].value); 

            this.flagArr.push(object1);     // pushing the object1 intgo array
            this.storage.set("Que3",this.flagArr);   // setting the key and value pair inside the storage class

        }

        else
        {

          var date1 = new Date();

          var data = this.storage.get("Que3");

          var object3 = {Question_no_3:'What are the colors in a national flag ?',answere:this.FlagGroup.controls['flagColor'].value,currentDate:this.getCurrentDate()};

          data.push(object3);

          this.storage.set("Que3",data);

        }

        this.rout.navigateByUrl('/finalPage');


      }
    

  }

  }
  

