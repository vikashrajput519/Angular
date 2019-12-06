import { Component } from '@angular/core';
import { LoggingService } from '../service/logging.service';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers : [LoggingService ]
})
export class NewAccountComponent {
 // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor( private accountService : AccountService) {
    accountService.statusUpdated.subscribe(
      (status : string) => alert('New Status: '+status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    //console.log('A server status changed, new status: ' + accountStatus);

    this.accountService.addAccountAdded(accountName, accountStatus);
  }
}
