import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TextboxComponent } from '../textbox/textbox.component';
import { DynamicDirective } from './directive/dynamic.directive';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @ViewChild(DynamicDirective, { static: true }) dynamicDir!: DynamicDirective;
  components = ['Textbox', 'Button'];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (this.components[event.previousIndex] === 'Textbox') {
      const componentFactoryText =
        this.componentFactoryResolver.resolveComponentFactory(TextboxComponent);
      const viewContainerRef = this.dynamicDir.viewContainerRef;
      const componentRef =
        viewContainerRef.createComponent<any>(componentFactoryText);
    } else if (this.components[event.previousIndex] === 'Button') {
      const componentFactoryBtn =
        this.componentFactoryResolver.resolveComponentFactory(ButtonComponent);
      const viewContainerRef = this.dynamicDir.viewContainerRef;
      const componentRef =
        viewContainerRef.createComponent<any>(componentFactoryBtn);
    }
  }
}
