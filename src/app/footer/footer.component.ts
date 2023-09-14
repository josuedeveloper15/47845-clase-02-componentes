import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <footer style="margin-left: 200px;">footer works!</footer> `,
  // styleUrls: ['./footer.component.scss'],
  styles: [
    `
      footer {
        height: var(--footer-height);
        background-color: orange;
      }
    `,
  ],
})
export class FooterComponent {}
