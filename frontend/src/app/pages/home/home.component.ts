import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, AfterViewInit {
  tracks = [
    { title: 'TITRE', artist: 'ARTISTE' },
    { title: 'TITRE', artist: 'ARTISTE' },
    { title: 'TITRE', artist: 'ARTISTE' }
  ];

  constructor(private el: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initScrollAnimations();
  }

  private initScrollAnimations() {
    const sections = [
      '.hero-title', 
      '.hero-subtitle', 
      '.hero-cta', 
      '.section-title', 
      '.section-about', 
      '.about-text'
    ];

    sections.forEach(selector => {
      gsap.from(this.el.nativeElement.querySelectorAll(selector), {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: selector,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    
    gsap.utils.toArray('.track-item').forEach((item: any) => {
      gsap.from(item, {
        y: 50,               
        opacity: 0,          
        scale: 0.9,          
        duration: 1,         
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 75%',   
          toggleActions: 'play none none reverse',
        }
      });
    });
  }
}
