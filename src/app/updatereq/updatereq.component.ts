import { Component, OnInit } from '@angular/core';
import {MyrequestsComponent} from '../myrequests/myrequests.component';
import {MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {RequestService} from '../services/request.service';

@Component({
  selector: 'app-updatereq',
  templateUrl: './updatereq.component.html',
  styleUrls: ['./updatereq.component.scss']
})
export class UpdatereqComponent implements OnInit {

  constructor(
    private matref: MatDialogRef<UpdatereqComponent>,
    private fb:FormBuilder,
    private reqService: RequestService) { }

  RequestForm:FormGroup;
  Types : Array<String> = ["Money","Medical","Food/Grossery"];
  Request:Object;

  UpdatedRequest : any = this.reqService.UpdatedRequest;
  

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.RequestForm = this.fb.group({
    type:this.UpdatedRequest.type,
    familySituation:['',Validators.required],
    subject:['',Validators.required],
    loading:false,
    reqResponded:false,
    urgent:this.UpdatedRequest.urgent,
    dueDate: ['',Validators.required],
    })
  }

  onSubmit(){
    /*this.UpdatedRequest = {
        type:this.RequestForm.controls['type'].value,
        familySituation:this.RequestForm.controls['familySituation'].value,
        subject: this.RequestForm.controls['subject'].value,
        loading:this.RequestForm.controls['loading'].value,
        reqResponded:this.RequestForm.controls['reqResponded'].value,
        urgent:this.RequestForm.controls['urgent'].value,
        dueDate:this.RequestForm.controls['dueDate'].value}*/
       this.UpdatedRequest.type = this.RequestForm.controls['type'].value;
       this.UpdatedRequest.familySituation = this.RequestForm.controls['familySituation'].value,
       this.UpdatedRequest.loading = this.RequestForm.controls['loading'].value,
       this.UpdatedRequest.reqResponded = this.RequestForm.controls['reqResponded'].value,
       this.UpdatedRequest.urgent = this.RequestForm.controls['urgent'].value,
       this.UpdatedRequest.subject = this.RequestForm.controls['subject'].value,
       this.UpdatedRequest.dueDate = this.RequestForm.controls['dueDate'].value;


        this.reqService.UpdatedRequest = this.UpdatedRequest;
        this.reqService.updateRequest(this.reqService.UpdatedRequest)
          .subscribe(requests =>{ this.matref.close(true);});
  }

}