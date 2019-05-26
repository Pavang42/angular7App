import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

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
  displayDetails = false;
  displayDetailsLog = [];
  constructor(private datePipe: DatePipe) {
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

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    const date = new Date();
    this.displayDetailsLog.push('Display Details button is clicked at ' + this.datePipe.transform(date, 'yyyy-MM-dd hh:mm:ss'));
  }

  getColor(index) {
    return index >= 4 ? 'blue' : 'white';
  }
}
