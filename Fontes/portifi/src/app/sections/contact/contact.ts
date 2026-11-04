import { Component, DOCUMENT, inject, signal } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LanguageService } from '../../content/language.service';
import { CONTACT_EMAIL, GITHUB_URL, GITHUB_USER, LINKEDIN_URL } from '../../content/site';

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function buildMailto(
  recipient: string,
  { name, email, subject, message }: ContactMessage,
  labels: { name: string; email: string; defaultSubject: string },
): string {
  const body = `${labels.name}: ${name}\n${labels.email}: ${email}\n\n${message}`;
  const query = `subject=${encodeURIComponent(subject || labels.defaultSubject)}&body=${encodeURIComponent(body)}`;
  return `mailto:${recipient}?${query}`;
}

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly language = inject(LanguageService);
  protected readonly email = CONTACT_EMAIL;
  protected readonly githubUrl = GITHUB_URL;
  protected readonly githubUser = GITHUB_USER;
  protected readonly linkedinUrl = LINKEDIN_URL;
  protected readonly linkedinHandle = LINKEDIN_URL.replace('https://', '');

  protected readonly form = inject(NonNullableFormBuilder).group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', Validators.required],
  });

  protected readonly submitted = signal(false);
  protected readonly sent = signal(false);

  private readonly document = inject(DOCUMENT);

  protected showError(control: AbstractControl): boolean {
    return control.invalid && (control.touched || this.submitted());
  }

  protected submit(): void {
    this.submitted.set(true);
    this.sent.set(false);

    if (this.form.invalid) {
      return;
    }

    this.document.location.href = buildMailto(
      CONTACT_EMAIL,
      this.form.getRawValue(),
      this.language.t().contact.form,
    );
    this.sent.set(true);
  }
}
