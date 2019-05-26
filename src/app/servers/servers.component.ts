import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = 'No Server was created!';
  serverName = 'Testserver';
  username = '';
  enteredUserName = '';
  serverEntered = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
   }

  ngOnInit() {
  }

  onServerCreation() {
    this.serverCreationStatus = 'Server was created!';
    this.serverEntered = true;
  }

  updateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  addUserName() {
    if (this.username !== '') {
      this.enteredUserName = this.username;
      this.username = '';
    }
  }
}
