import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!doctype html>
  <html>
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/output.css" rel="stylesheet">
  </head>
  <body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  </body>
  </html>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'oyvind-ai';
}
