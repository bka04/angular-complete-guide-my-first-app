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
  username = ''; //assignment 2: databinding

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  onUpdateServerName(event: any) {
    this.serverName=event.target.value;
  }
}
