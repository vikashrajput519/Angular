import { Component, OnInit } from '@angular/core';

import { ServersService } from '../../service/servers-service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CanComponentDeactive } from 'src/app/service/can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactive {
  private server: {id: number, name: string, status: string};
  private serverName = '';
  private serverStatus = '';
  allowEdit = false;
  private changedSaved : boolean = false;

  constructor(private serversService: ServersService, private activatedRoute : ActivatedRoute, private router : Router ) { }

  ngOnInit() {

    this.activatedRoute.queryParams
      .subscribe(
        (queryParams: Params) => {
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        }
      );
    this.activatedRoute.fragment.subscribe();

    this.server = this.serversService.getServer(+this.activatedRoute.snapshot.params['id']);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changedSaved = true;
    this.router.navigate(['../'], {relativeTo : this.activatedRoute});
  }

  canDeactive() : Observable<boolean> | Promise<boolean> | boolean {
 if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changedSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
}
