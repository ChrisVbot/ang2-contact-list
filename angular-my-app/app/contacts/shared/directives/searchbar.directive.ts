import { Directive, ElementRef, HostListener, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[myInput]'
})

export class SearchBarDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer){}

  private changeWidth(newWidth: string){
    this.renderer.setElementStyle(this.el.nativeElement, 'width', newWidth)
  }

  ngOnInit(): void {
    this.setInitialWidth();
  }

  setInitialWidth(): void {
    this.renderer.setElementStyle(this.el.nativeElement, 'width', '250px')
  }

  @HostListener('click') onMouseClick(): void{
    this.changeWidth('500px');
  }

  @HostListener('blur') onLoseFocus(): void {
    this.setInitialWidth();
  }


}