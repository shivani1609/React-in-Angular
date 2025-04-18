import { Component, Inject, ViewChild } from '@angular/core';
import {
  NgFlowchartCanvasDirective,
  NgFlowchartStepComponent,
  NgFlowchartStepRegistry,
  NgFlowchart,
  // Removed NgFlowchartCanvasOptions as it is not exported
} from '@joelwenzel/ng-flowchart';
import { TriggerNodeComponentComponent } from '../trigger-node-component/trigger-node-component.component';
import { ActionNodeComponent } from '../action-node/action-node.component';

@Component({
  selector: 'app-option3',
  standalone: true,
  imports: [],
  templateUrl: './option3.component.html',
  styleUrl: './option3.component.scss'
})
export class Option3Component {
  @ViewChild('canvas', { static: true })
  canvas!: NgFlowchartCanvasDirective;

  canvasConfig = {
    orientation: 'vertical',
    zoom: true
  };

  stepDefs = {
    trigger: TriggerNodeComponentComponent,
    action: ActionNodeComponent
  };

  constructor(@Inject(NgFlowchartStepRegistry) private registry: NgFlowchartStepRegistry) {}

  addNode(type: 'trigger' | 'action') {
    const node: NgFlowchart.Step = {
      type: type,
      data: { label: `${type.toUpperCase()} - ${Date.now()}` },
      // Removed children as it is not a valid property
    };

    // Add node to canvas
    // if (!this.canvas.getRootStep()) {
    //   this.canvas.addStep(node);
    // } else {
    //   this.canvas.getRootStep()?.addChild(node);
    // }
  }
 }
