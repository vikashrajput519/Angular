import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  private paramSubscription : Subscription;
  
  private user : { id: number, name: string };

  constructor( private activatedRoutes : ActivatedRoute, private userService : UsersService ) {  }
   

  ngOnInit() {

    const id = + this.activatedRoutes.snapshot.params['id'];
    this.user = this.userService.getUserById(id);

    this.paramSubscription = this.activatedRoutes.params.subscribe(
          ( param: Params ) => {
            this.user = this.userService.getUserById(+param['id']);
          }
        );
  }

   ngOnDestroy()
   {
     this.paramSubscription.unsubscribe();
   }
}
