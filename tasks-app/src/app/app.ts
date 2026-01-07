import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Email } from './email/email';
import { Evell } from './evell/evell';
import { Areengaged } from './areengaged/areengaged';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Email],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('שליחת מייל עדכון '); 
}
