import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from  '@angular/forms';
import {Router} from '@angular/router';
import {StorageService,LOCAL_STORAGE} from 'ngx-webstorage-service';

@Component({
  selector: 'app-user-profile-question',
  templateUrl: './user-profile-question.component.html',
  styleUrls: ['./user-profile-question.component.css']
})
export class UserProfileQuestionComponent implements OnInit {

Profile : FormGroup;      // profile is the formgroup type and referring to our form 
submitted = false;        // this is a type of flag which is used for validation purpose
Name : any = [];

  constructor(private fb: FormBuilder,private rout : Router,@Inject(LOCAL_STORAGE)private storage : StorageService) {

    this.Profile = this.fb.group({

      name : ['',Validators.required]    // form control instance




    })


   }

  ngOnInit(): void {
  }

addProfile()
  {
    this.submitted = true;

  /* this is the condition for validation if there is any kind of error in our form field the form will be not submitted */
  
    if(this.Profile.invalid)  
    {
        return;
    }
    else
    {

  /* Intially there will be no key value present in storage class so the control will enter into if condition and will set the key and value */

      if (this.storage.get("name") === undefined) {            

        console.log(this.Profile.controls['name'].value); 
     
        var  obj  = {"name":this.Profile.controls['name'].value};  
  
        this.Name.push(obj);        
        this.storage.set("name",this.Name);  // pushing our array into name key inside local storage 
      }
      else
      {

  /* so if the key is present we will directly push our object value inside our existing key */

          var brr  = this.storage.get("name");
          var   obj  = {"name":this.Profile.controls['name'].value};
          brr.push(obj);
          this.storage.set("name",brr);

      }

      this.rout.navigateByUrl('/cricketerQue');   // if the form is successfuly submitted we will rout to our cricketerque component
    }

  }

}
