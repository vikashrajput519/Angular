import { Component, OnInit } from '@angular/core';

import { ServersService } from '../../service/servers-service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  
  private server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private activatedRouter : ActivatedRoute, private router : Router ) { }

  ngOnInit() {
    const id = + this.activatedRouter.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    
    this.activatedRouter.params.subscribe(
      (parms : Params) => {
        this.server = this.serversService.getServer( +parms['id'] )
      }
    );
  }

  onUpdateServer(id : number ){
    this.router.navigate(['edit'], {relativeTo: this.activatedRouter, queryParamsHandling: 'preserve'});
  }

}
