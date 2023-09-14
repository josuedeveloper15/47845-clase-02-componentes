import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <footer>footer works!</footer> `,
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
