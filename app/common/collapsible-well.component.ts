import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    templateUrl:'app/common/collapsible-well.component.html'
})

export class CollapsibleComponent  {
    @Input() title: string;
    visible: boolean = true;

    toggleContent() {
        this.visible = !this.visible
    }
}