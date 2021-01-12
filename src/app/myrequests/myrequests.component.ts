import { Component, OnInit ,OnDestroy} from '@angular/core';
import {RequestService} from '../services/request.service';
import {request} from '../datastructure/request';
import {UsersService} from '../services/users.service';
import {user} from '../datastructure/user';
import { flyInOut, expand } from '../animations';
import {MatDialog} from '@angular/material/dialog';
import {UpdatereqComponent} from '../updatereq/updatereq.component';

@Component({
  selector: 'app-myrequests',
  templateUrl: './myrequests.component.html',
  styleUrls: ['./myrequests.component.scss'],
  animations: [
    flyInOut(),
    expand()
  ]
})
export class MyrequestsComponent implements OnInit {
  NowComment:Boolean = false;
  CurrentUser: user;
  Myrequests:request[];

  constructor(private requestService: RequestService,
  private userService : UsersService,
  private dialog:MatDialog) { }

  ngOnInit(){
   this.requestService.getMyRequests()
   .subscribe(myrequests=>this.Myrequests = myrequests);

   this.userService.getCurrentUser()
   .subscribe(currentus=>this.CurrentUser = currentus);
  }
  ngOnDestroy(){
  }

  deleteRequest(id:any){
    this.requestService.deleteRequest(id)
      .subscribe(deleted=>this.Myrequests = deleted);
      this.NowComment = true;
  }

  saveReq(req:request){
    this.requestService.UpdatedRequest = req;
    const Loginref = this.dialog.open(UpdatereqComponent, {width: '900px', height: '670px'});
    Loginref.afterClosed()
        .subscribe(result => {
          console.log(result);
        });
  }
}

/*this.requestService.updateRequest(this.requestService.UpdatedRequest)
          .subscribe(requests =>{ this.Myrequests = requests ; console.log(requests)})*/


//<img mat-card-image src="https://image.api.playstation.com/vulcan/ap/rnd/202009/3021/ONwZGjz4oxlLUpqBPu6nx8tl.png">