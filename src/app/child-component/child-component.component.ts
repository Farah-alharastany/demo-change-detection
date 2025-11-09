import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child-default',
  standalone: false,
  template: `
    <h1>Default:</h1>
    <p>Items length: {{ items.length }}</p>
    <p>Last item: {{ items[items.length - 1] }}</p>
  `,
  // We'll toggle this dynamically via module reload or separate child components
})
export class ChildDefaultComponent {
  @Input() items: number[] = [];
}

@Component({
  selector: 'app-child-onpush',
  standalone: false,
  template: `
    <h1>On push:</h1>
    <p>Items length: {{ items.length }}</p>
    <p>Last item: {{ items[items.length - 1] }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildOnPushComponent {
  @Input() items: number[] = [];
}
