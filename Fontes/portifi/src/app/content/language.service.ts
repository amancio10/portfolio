import { computed, effect, inject, Injectable, signal, DOCUMENT } from '@angular/core';
import { LANGUAGES, Language, TRANSLATIONS } from './translations';

const STORAGE_KEY = 'portfolio.language';
const DEFAULT_LANGUAGE: Language = 'pt-BR';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);

  readonly current = signal<Language>(this.restore());
  readonly t = computed(() => TRANSLATIONS[this.current()]);

  constructor() {
    effect(() => {
      const language = this.current();
      this.document.documentElement.lang = language;
      try {
        localStorage.setItem(STORAGE_KEY, language);
      } catch {
        // Storage can be blocked by the browser; the choice then lasts for this visit only.
      }
    });
  }

  private restore(): Language {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return LANGUAGES.find(({ code }) => code === stored)?.code ?? DEFAULT_LANGUAGE;
    } catch {
      return DEFAULT_LANGUAGE;
    }
  }
}
