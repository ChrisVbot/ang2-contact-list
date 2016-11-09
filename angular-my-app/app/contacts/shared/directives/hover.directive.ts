import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: `[myHover]`,
  host: {
    '(mouseenter)':'onHover()',
    '(mouseleave)':'offHover()'
  }
})

export class HoverDirective {
  constructor (private el: ElementRef, private renderer: Renderer){}

  private hoverChange(newColor: string){
    this.renderer.setElementStyle(this.el.nativeElement, 'background', newColor)
  }

  onHover(): void {
    let newColor = this.colorRandomizer();
    this.hoverChange(newColor);
  }

  offHover(): void {
    this.hoverChange(null);
  }

  colorRandomizer() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i=0 ; i < 6 ; i += 1){
      color+=letters[Math.floor(Math.random()*16)]
    }
    return color;
  }  

}





