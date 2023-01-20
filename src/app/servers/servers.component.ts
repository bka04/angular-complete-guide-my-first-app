import { Component } from '@angular/core';

@Component({
  //selector: '[app-servers]',  can use different selectors - attribute
  //selector: '.app-servers',   can use different selectors - class
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  // username = ''; //assignment 2: databinding
  showDetails = false; //assignment 3: databinding
  displayDetailsArray = []; //assignment 3: databinding

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  onUpdateServerName(event: any) {
    this.serverName=event.target.value;
  }

  onDisplayDetails(event: any) {
    this.showDetails = !this.showDetails;
    this.displayDetailsArray.push(Date())
  }
}
