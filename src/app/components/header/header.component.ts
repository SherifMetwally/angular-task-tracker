import { Component } from '@angular/core';
import {Subscription } from 'rxjs';
import {UiService} from "../../services/ui.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Task Tracker';
  showAddTask: boolean;

  subscription: Subscription;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe(Value => this.showAddTask = Value)
  }
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
