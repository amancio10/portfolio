import { Component, inject } from '@angular/core';
import { LanguageService } from '../../content/language.service';
import { GITHUB_URL, PROJECTS } from '../../content/site';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly language = inject(LanguageService);
  protected readonly projects = PROJECTS;
  protected readonly githubUrl = GITHUB_URL;
}
