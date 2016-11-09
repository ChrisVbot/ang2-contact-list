import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizer'
})

export class CapitalizerPipe implements PipeTransform {
  transform(name: string) {
    return name.replace(/\w\S*/g, (text)=> {
      return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
  }
}