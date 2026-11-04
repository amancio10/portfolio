import { afterNextRender, Component, DestroyRef, DOCUMENT, inject, signal } from '@angular/core';
import { LanguageService } from '../../content/language.service';
import { LINKEDIN_URL, SECTION_IDS, SectionId } from '../../content/site';
import { LANGUAGES } from '../../content/translations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly language = inject(LanguageService);
  protected readonly languages = LANGUAGES;
  protected readonly sections = SECTION_IDS;
  protected readonly linkedinUrl = LINKEDIN_URL;
  protected readonly activeSection = signal<SectionId>('hero');

  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => this.observeSections());
  }

  private observeSections(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    // The margins shrink the viewport to a thin band, so only one section is active at a time.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id as SectionId);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    for (const id of SECTION_IDS) {
      const section = this.document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    }

    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
