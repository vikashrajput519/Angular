import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountService {

    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>();

    constructor(private logService : LoggingService ) {}
    
    addAccountAdded(name: string, status: string ) {
        this.accounts.push({name : name, status : status});
        this.logService.logStatusChange(status);
    }

    updateStatusChanged(id: number, newStatus: string ) {
        this.accounts[id].status = newStatus;
        this.logService.logStatusChange(newStatus);
    }
}