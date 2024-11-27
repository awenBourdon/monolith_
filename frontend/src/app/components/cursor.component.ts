import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      #cursorElement 
      class="custom-cursor"
      [style.backgroundColor]="cursorColor"
      [style.cursor]="'none'"
    ></div>
  `,
  styles: [`
    .custom-cursor {
      width: 20px;
      height: 20px;
      border-radius: 0;
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      transition: background-color 0.3s ease;
    }
  `]
})
export class CustomCursorComponent implements OnInit, OnDestroy {
  private cursorElement: HTMLDivElement | null = null;
  cursorColor: string = 'transparent';

  ngOnInit() {
    
    document.body.style.cursor = 'none';

    
    window.addEventListener('mousemove', this.onMouseMove);
    this.updateCursorColor();
  }

  ngOnDestroy() {
    
    document.body.style.cursor = 'auto';
    window.removeEventListener('mousemove', this.onMouseMove);
  }

  private onMouseMove = (event: MouseEvent) => {
    this.updateCursorPosition(event);
    this.updateCursorColor();
  }

  private updateCursorPosition(event: MouseEvent) {
    const cursor = this.getCursorElement();
    if (cursor) {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    }
  }

  private getCursorElement(): HTMLDivElement {
    if (!this.cursorElement) {
      this.cursorElement = document.querySelector('.custom-cursor') as HTMLDivElement;
    }
    return this.cursorElement;
  }

  private updateCursorColor() {
    try {
      
      const elementsUnderCursor = document.elementsFromPoint(
        window.innerWidth / 2, 
        window.innerHeight / 2
      );

      
      let backgroundColor = window.getComputedStyle(elementsUnderCursor[0] || document.body).backgroundColor;

      
      if (backgroundColor === 'transparent' || backgroundColor === 'rgba(0, 0, 0, 0)') {
        backgroundColor = window.getComputedStyle(document.body).backgroundColor;
      }

      
      const rgb = this.parseRGB(backgroundColor);
      
      
      if (rgb) {
        this.cursorColor = `rgb(${255 - rgb[0]}, ${255 - rgb[1]}, ${255 - rgb[2]})`;
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la couleur du curseur', error);
      this.cursorColor = 'black';
    }
  }

  private parseRGB(color: string): number[] | null {
    
    const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    const rgbaMatch = color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/);
    
    if (rgbMatch) {
      return [
        parseInt(rgbMatch[1], 10),
        parseInt(rgbMatch[2], 10),
        parseInt(rgbMatch[3], 10)
      ];
    }

    if (rgbaMatch) {
      return [
        parseInt(rgbaMatch[1], 10),
        parseInt(rgbaMatch[2], 10),
        parseInt(rgbaMatch[3], 10)
      ];
    }

    return null;
  }
}
