import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from "../../ui/gallery/gallery.component";
import { PromptComponent } from "../../ui/prompt/prompt.component";

@Component({
    selector: 'app-wine-generator',
    standalone: true,
    template: `
  <div>
    <app-gallery></app-gallery>
    <app-prompt></app-prompt>
  </div>
  `,
    styles: [],
    imports: [CommonModule, GalleryComponent, PromptComponent]
})
export class WineGeneratorComponent {

}
