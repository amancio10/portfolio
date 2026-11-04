import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(() => localStorage.clear());

  async function render() {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    return { fixture, element: fixture.nativeElement as HTMLElement };
  }

  function languageButton(element: HTMLElement, name: string) {
    return element.querySelector<HTMLButtonElement>(`#lang-switch button[aria-label="${name}"]`)!;
  }

  it('renders every section in Portuguese by default', async () => {
    const { element } = await render();

    expect(element.querySelector('h1')?.textContent).toContain('Amâncio A. S. Moura');
    for (const id of ['hero', 'stack', 'projects', 'diferencial', 'contact']) {
      expect(element.querySelector(`#${id}`), id).not.toBeNull();
    }
    expect(element.querySelector('#projects h2')?.textContent).toContain('Projetos em Destaque');
    expect(element.querySelectorAll('#projects article').length).toBe(6);
  });

  it('switches language, updates <html lang> and remembers the choice', async () => {
    const { fixture, element } = await render();

    languageButton(element, 'English').click();
    await fixture.whenStable();

    expect(element.querySelector('#projects h2')?.textContent).toContain('Featured Projects');
    expect(languageButton(element, 'English').getAttribute('aria-pressed')).toBe('true');
    expect(document.documentElement.lang).toBe('en');
    expect(localStorage.getItem('portfolio.language')).toBe('en');

    languageButton(element, 'Español').click();
    await fixture.whenStable();

    expect(element.querySelector('#projects h2')?.textContent).toContain('Proyectos Destacados');
  });

  it('restores a saved language and ignores an unknown one', async () => {
    localStorage.setItem('portfolio.language', 'es');
    const { element } = await render();
    expect(element.querySelector('#contact h2')?.textContent).toContain('Hablemos');

    TestBed.resetTestingModule();
    localStorage.setItem('portfolio.language', 'fr');
    const { element: fallback } = await render();
    expect(fallback.querySelector('#contact h2')?.textContent).toContain('Vamos Conversar');
  });
});
