import { TestBed } from '@angular/core/testing';
import { buildMailto, Contact } from './contact';

const LABELS = { name: 'Nome', email: 'E-mail', defaultSubject: 'Contato pelo portfólio' };

describe('buildMailto', () => {
  it('encodes subject and body so special characters survive', () => {
    const url = new URL(
      buildMailto(
        'a@b.com',
        { name: 'Ana & Cia', email: 'ana@x.com', subject: 'Olá?', message: 'Linha 1\nLinha 2' },
        LABELS,
      ),
    );

    expect(url.protocol).toBe('mailto:');
    expect(url.pathname).toBe('a@b.com');
    expect(url.searchParams.get('subject')).toBe('Olá?');
    expect(url.searchParams.get('body')).toBe(
      'Nome: Ana & Cia\nE-mail: ana@x.com\n\nLinha 1\nLinha 2',
    );
  });

  it('falls back to the default subject', () => {
    const url = new URL(
      buildMailto('a@b.com', { name: 'A', email: 'a@x.com', subject: '', message: 'Oi' }, LABELS),
    );

    expect(url.searchParams.get('subject')).toBe(LABELS.defaultSubject);
  });
});

describe('Contact', () => {
  it('shows validation errors and does not report success for an empty form', async () => {
    const fixture = TestBed.createComponent(Contact);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;

    element.querySelector('form')!.dispatchEvent(new Event('submit', { cancelable: true }));
    await fixture.whenStable();

    expect(element.querySelectorAll('[aria-invalid="true"]').length).toBe(3);
    expect(element.querySelector('[role="status"]')).toBeNull();
  });
});
