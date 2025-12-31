import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Skill {
  name: string;
  icon: string; // SVG path data
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  private sanitizer = inject(DomSanitizer);

  skills = signal<Skill[]>([
    { name: 'Angular', icon: '<path d="M12 2L2 4.5l1.5 12.5L12 22l8.5-5L22 4.5 12 2zm0 2.44L19.5 6.5 18.5 16 12 19.44 5.5 16 4.5 6.5 12 4.44zM12 7.5l-5 2v5l5 2 5-2v-5l-5-2zm0 1.39L14.67 10 12 11.11 9.33 10 12 8.89zM11 12h2v3h-2v-3z"/>' },
    { name: 'TypeScript', icon: '<path fill-rule="evenodd" d="M4.75 2.75a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h14.5a.75.75 0 00.75-.75V3.5a.75.75 0 00-.75-.75H4.75zM5.5 4.25v11.5h13V4.25h-13zM12 12.5l-2.25-2.25H8v.75h1.25l1.75 1.75-1.75 1.75H8v.75h1.75L12 12.5zm4 .75h-3v-1.5h3v1.5z" clip-rule="evenodd" />' },
    { name: 'JavaScript', icon: '<path fill-rule="evenodd" d="M18 11.25a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zM15.75 12a.75.75 0 00-1.5 0v3a.75.75 0 001.5 0v-3zM10.5 15a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75zm2.25.75a.75.75 0 000-1.5h-3a.75.75 0 000 1.5h3zM4.75 2.75a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h14.5a.75.75 0 00.75-.75V3.5a.75.75 0 00-.75-.75H4.75zM5.5 4.25v11.5h13V4.25h-13z" clip-rule="evenodd" />' },
    { name: 'Tailwind CSS', icon: '<path d="M12.001 4.529c1.332 0 2.404.33 3.208.991.804.66.993 1.57.488 2.715-.504 1.146-1.59 2.11-3.26 2.89-1.67.78-3.902 1.168-6.68 1.168v2.68H4.76V4.53h7.24zm-2.18 5.438c1.06 0 1.94-.176 2.648-.528.708-.352 1.062-.843 1.062-1.472 0-.63-.354-1.11-1.062-1.44-.708-.33-1.59-.496-2.648-.496H6.8v3.936h3.02z"/>' },
    { name: 'NgRx', icon: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.08c-2.03 0-3.83-.8-5.2-2.08l1.41-1.41c1.08.98 2.45 1.59 4.04 1.59 2.97 0 5.4-2.43 5.4-5.4s-2.43-5.4-5.4-5.4c-1.59 0-2.96.61-4.04 1.59l-1.41-1.41C7.17 4.88 8.97 4 11 4c3.86 0 7 3.14 7 7s-3.14 7-7 7.08z"/>' },
    { name: 'Node.js', icon: '<path d="M9 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3H9z"/>' },
    { name: 'Figma', icon: '<path d="M15 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-6 2C7.34 8 6 9.34 6 11s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-6 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-6-8C1.34 14 0 15.34 0 17s1.34 3 3 3c1.31 0 2.42-.84 2.83-2H3v-2h2.83c-.41-1.16-1.52-2-2.83-2z"/>' },
    { name: 'Git', icon: '<path d="M20.2 7.8l-2.6-2.6c-.8-.8-2-.8-2.8 0L10 10.4V4c0-1.1-.9-2-2-2s-2 .9-2 2v6.4l-4.8-4.8c-.8-.8-2-.8-2.8 0s-.8 2 0 2.8l10 10c.4.4.9.6 1.4.6s1-.2 1.4-.6l10-10c.8-.8.8-2 0-2.8z"/>' },
  ]);

  getSafeSvg(svgPath: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgPath);
  }
}
