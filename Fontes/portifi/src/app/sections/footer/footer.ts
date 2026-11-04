import { Component, inject } from '@angular/core';
import { LanguageService } from '../../content/language.service';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="relative z-10 border-t border-blue-500/20 px-4 sm:px-6 py-8">
      <div
        class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center"
      >
        <p class="font-body-sm text-body-sm text-on-surface-variant">
          © {{ year }} Amâncio A. S. Moura. {{ language.t().footer.rights }}
        </p>
        <p class="font-code-stream text-[11px] text-blue-400">
          {{ language.t().footer.builtWith }}
        </p>
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly language = inject(LanguageService);
  protected readonly year = new Date().getFullYear();
}
