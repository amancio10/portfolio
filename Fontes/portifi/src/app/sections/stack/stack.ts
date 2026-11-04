import { Component, inject } from '@angular/core';
import { LanguageService } from '../../content/language.service';
import { PILLARS, TECH_TILES } from '../../content/site';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.html',
})
export class Stack {
  protected readonly language = inject(LanguageService);
  protected readonly tiles = TECH_TILES;
  protected readonly pillars = PILLARS;
}
