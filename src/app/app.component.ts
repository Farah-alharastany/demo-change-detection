import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  items: number[] = [1, 2, 3];

  add() {
    this.items.push(this.items.length + 1);
    console.log('Added with push');
  }

}
