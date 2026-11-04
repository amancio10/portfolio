import { Component, inject } from '@angular/core';
import { LanguageService } from '../../content/language.service';
import { GITHUB_URL, GITHUB_USER, LINKEDIN_URL } from '../../content/site';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly language = inject(LanguageService);
  protected readonly githubUrl = GITHUB_URL;
  protected readonly githubUser = GITHUB_USER;
  protected readonly linkedinUrl = LINKEDIN_URL;
}
