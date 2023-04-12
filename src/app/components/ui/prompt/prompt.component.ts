import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-prompt',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  template: `
  <form [formGroup]="form" (ngSubmit)="onSubmit()"  class="stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt:6">
    <div class="relative flex h-full flex-1 md:flex-col">
      <div class="flex flex-col w-full py-2 pl-3 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
        <textarea
        [formControl]="form.controls.prompt"
        (keyup.enter)="onSubmit()"
        tabindex="0" data-id="root" style="max-height: 200px; height: 24px; overflow-y: hidden;" rows="1" placeholder="Send a message..." class="m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent pl-2 md:pl-0"></textarea>
        <button class="absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40" type="submit">
          <svg stroke="currentColor" fill="currentColor" stroke-width="2" viewBox="0 0 20 20" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button></div><div class="flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"></div></div>
        </form>
  `,
})
export class PromptComponent {

  @Output() public readonly prompted = new EventEmitter<string>();

  public readonly form = new FormGroup({
    prompt: new FormControl<string | null>(null, [Validators.required]),
  });


  public onSubmit(): void {
    if (this.form.valid && this.form.value.prompt) {
      this.prompted.emit(this.form.value.prompt);
      this.form.reset();
    }
    }
}
