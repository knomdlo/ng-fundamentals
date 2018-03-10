import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
        <h4 class="well-tite">{{title}}</h4>
        <ng-content *ngIf= "visible"></ng-content>
    </div>
    `
})

export class CollapsibleComponent  {
    @Input() title: string;
    visible: boolean = true;

    toggleContent() {
        this.visible = !this.visible
    }
}