import { Component, inject } from '@angular/core';
import { LanguageService } from '../../content/language.service';
import { DIFFERENTIAL_STYLES } from '../../content/site';

@Component({
  selector: 'app-differential',
  templateUrl: './differential.html',
})
export class Differential {
  protected readonly language = inject(LanguageService);
  protected readonly styles = DIFFERENTIAL_STYLES;
}
