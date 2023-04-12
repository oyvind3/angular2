import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from "../../ui/gallery/gallery.component";
import { PromptComponent } from "../../ui/prompt/prompt.component";
import { WineGeneratorService } from 'src/app/data-access/wine-generator.service';
import { BehaviorSubject, of, switchMap } from 'rxjs';


@Component({
    selector: 'app-wine-generator',
    standalone: true,
    template: `
  <div>
    <app-prompt (prompted)="prompted($event)"></app-prompt>
    <p *ngIf="prompt$ | async as prompt">Requesting wines from: {{ prompt }}</p>

    
    <app-gallery [wines]="wines$ | async"></app-gallery>

  </div>
  `,
    styles: [],
    imports: [CommonModule, GalleryComponent, PromptComponent]
})
export class WineGeneratorComponent {

  private readonly wineGenerator = inject(WineGeneratorService)

  private readonly prompt$$ = new BehaviorSubject<string>('');
  public readonly prompt$ = this.prompt$$.asObservable();

  public readonly wines$ = this.prompt$.pipe(
    switchMap((value) => {
      if (!value) {
        return of ([]);
      }
      
      return this.wineGenerator.getWines();
    })
  ); 

  public prompted(value: string): void {
    this.prompt$$.next(value);
    console.log(value);
  }
}
