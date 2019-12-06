import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../service/logging.service';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers : [LoggingService ]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private accountService : AccountService ){}
  onSetTo( status: string ) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    //console.log('A server status changed, new status: ' + status);

    this.accountService.updateStatusChanged(this.id , status);
    //this.logService.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);
  }
}
