import { Component, OnInit,Inject} from '@angular/core';
import {Router} from '@angular/router'
import {StorageService,LOCAL_STORAGE} from 'ngx-webstorage-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cricketer-question',
  templateUrl: './cricketer-question.component.html',
  styleUrls: ['./cricketer-question.component.css']
})

export class CricketerQuestionComponent implements OnInit {

  cricketerGroup : FormGroup
  submitted : boolean = false;
  question2 : any = [];

  constructor(private route : Router,private fb : FormBuilder,@Inject(LOCAL_STORAGE)private storage : StorageService) {


    this.cricketerGroup = this.fb.group({

      cricketer : ['',Validators.required]

    })


   }

  ngOnInit(): void {
  }

  addCricketer()
  {
    this.submitted = true;

    if(this.cricketerGroup.invalid)   // any kind of error in the form this function will return false and form will not be submitted
    {
      return;
    }

    else
    {

      if(this.storage.get("Que2") === undefined)
      {

            var obj1  = {Question_no_2:'Who is the best cricketer in the world ?',Answere:this.cricketerGroup.controls['cricketer'].value}
      

            this.question2.push(obj1);   // pushing the obj1 into a global variable of question2
            console.log(this.question2);

            this.storage.set("Que2",this.question2);     // the array of object is stored in a key value of local storage

      }

      else
      {
        console.log(this.storage.get("Que2"));
        var data = this.storage.get("Que2");
        console.log(data);

        var obj3 = {Question_no_2:'Who is the best cricketer in the world?',Answere:this.cricketerGroup.controls['cricketer'].value}

        data.push(obj3);
        this.storage.set("Que2",data);
      }
      

        this.route.navigateByUrl('/flagQue');  // navigating to flagque component if form is submitted successfuly
    }


         
  }


}
