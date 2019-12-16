import { Component } from '@angular/core';
import { HttpDemoService } from './service/http-demo.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  constructor(private serverService : HttpDemoService ){ }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  onSave()
  {
    this.serverService.stroreServer(this.servers).subscribe(
      (response) => console.log(response),
       (error) => console.log(error) 
    );
  }

  getServers()
  {
    this.serverService.getServers().subscribe(
      (servers) => {
        this.servers = servers;
      },
      (error) => console.log(error)
    );
  }
}
