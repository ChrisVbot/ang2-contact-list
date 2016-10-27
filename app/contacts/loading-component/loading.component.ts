import { Component, Input } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'loading-spinner'
  template: `
    <div [ngSwitch]="loading">
      <div *ngSwitchCase="false">
        <ng-content></ng-content>
      </div>
      <div *ngSwitchCase="true">
        <div class="sk-folding-cube">
          <div class="sk-cube1 sk-cube"></div>
          <div class="sk-cube2 sk-cube"></div>
          <div class="sk-cube4 sk-cube"></div>
          <div class="sk-cube3 sk-cube"></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: [`loading-component.css`]
})

export class SpinnerComponent {
  @Input() loading: boolean;
}