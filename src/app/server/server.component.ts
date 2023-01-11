import { Component } from '@angular/core';

@Component( {
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus = 'offline';

  getServerStatus() { //example of a method that can be called in the template (html) file
    return this.serverStatus;
  }
}