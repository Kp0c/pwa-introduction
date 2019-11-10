import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new awesome app 4';
  updateCheckText = '';

  constructor(private update: SwUpdate) {}

  updateCheck(): void {
    this.update
        .checkForUpdate()
        .then(() => this.updateCheckText = 'resolved')
        .catch(err => this.updateCheckText = `rejected: ${err.message}`);
  }
}
