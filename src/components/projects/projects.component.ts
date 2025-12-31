import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link: string;
  viewProjectIcon: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  projects = signal<Project[]>([
    {
      title: 'Quantum Dashboard',
      description: 'An advanced data visualization platform for quantum computing metrics, built with Angular and D3.js.',
      imageUrl: 'https://picsum.photos/seed/quantum/600/400',
      tags: ['Angular', 'TypeScript', 'D3.js', 'Data Viz'],
      link: '#',
      viewProjectIcon: '<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />'
    },
    {
      title: 'Aether E-Commerce',
      description: 'A headless e-commerce solution with a focus on performance and a minimalist user experience.',
      imageUrl: 'https://picsum.photos/seed/aether/600/400',
      tags: ['Angular', 'Stripe', 'Tailwind CSS', 'Jamstack'],
      link: '#',
      viewProjectIcon: '<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />'
    },
    {
      title: 'Nova AI Assistant',
      description: 'A conversational AI interface that integrates with multiple productivity tools to streamline workflows.',
      imageUrl: 'https://picsum.photos/seed/nova/600/400',
      tags: ['Angular', 'AI/ML', 'Web Sockets', 'UI/UX'],
      link: '#',
      viewProjectIcon: '<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />'
    },
     {
      title: 'Helios Design System',
      description: 'A comprehensive component library and design system to ensure brand consistency across all products.',
      imageUrl: 'https://picsum.photos/seed/helios/600/400',
      tags: ['Design System', 'Component Library', 'Figma', 'Storybook'],
      link: '#',
      viewProjectIcon: '<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />'
    },
  ]);
}
