import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'mail' },
    { title: 'Task', url: '/tasks-management', icon: 'grid' },
    { title: 'Time', url: '/time-management', icon: 'stopwatch' },
    { title: 'Notes', url: '/notes-management', icon: 'documents' },
    { title: 'Finance', url: '/finance-management', icon: 'cash' },
  ];

  menuType: string = 'overlay';

  constructor(
    private navCtrl: NavController,
  ) {}

  goToConfig(
  ) {
    this.navCtrl.navigateForward('/config');
  }
}
