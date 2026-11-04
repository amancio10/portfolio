import { Component } from '@angular/core';
import { Contact } from './sections/contact/contact';
import { Differential } from './sections/differential/differential';
import { Footer } from './sections/footer/footer';
import { Hero } from './sections/hero/hero';
import { Navbar } from './sections/navbar/navbar';
import { Projects } from './sections/projects/projects';
import { Stack } from './sections/stack/stack';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Stack, Projects, Differential, Contact, Footer],
  template: `
    <div
      class="pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#0077ff]/15 blur-[140px] rounded-full z-0"
    ></div>
    <div
      class="pointer-events-none fixed top-1/2 -left-48 w-[450px] h-[450px] bg-[#00a2ff]/10 blur-[130px] rounded-full z-0"
    ></div>
    <div
      class="pointer-events-none fixed bottom-10 right-0 w-[500px] h-[500px] bg-[#2563eb]/10 blur-[150px] rounded-full z-0"
    ></div>

    <app-navbar />

    <main class="relative z-10 pt-28 pb-16 px-4 sm:px-6 max-w-7xl mx-auto space-y-20 sm:space-y-28">
      <app-hero class="block" />
      <app-stack class="block" />
      <app-projects class="block" />
      <app-differential class="block" />
      <app-contact class="block" />
    </main>

    <app-footer />
  `,
})
export class App {}
