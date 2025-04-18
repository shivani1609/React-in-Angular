import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
// import "../../../assets/react-flow-build/assets/index.js"

@Component({
  selector: 'app-flow-diagram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flow-diagram.component.html',
  styleUrl: './flow-diagram.component.scss'
})
export class FlowDiagramComponent implements OnInit, AfterViewInit {
  @ViewChild('reactRoot', {static: true}) reactRoot!: ElementRef;
  scriptElement: HTMLScriptElement | null = null;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  isLoaded = false;
  readonly dataToSend = {
    message: 'Hello from Angular 🎉',
    config: 123456
  };


  ngOnInit(): void {
    console.log('Flow diagram component initialized');
    if(isPlatformBrowser(this.platformId)) {
      window.dispatchEvent(new CustomEvent('angularToReact', {
        detail: this.dataToSend,
      }));
    }
  }

  


  ngAfterViewInit() {
    // Dynamically load the built React app
    if (isPlatformBrowser(this.platformId)) {
        this.scriptElement = document.createElement('script');
      this.scriptElement.src = '../../../assets/react-flow-build/assets/index.js'; 
      this.scriptElement.type = 'module';
      document.body.appendChild(this.scriptElement);

      // Listen for custom events from React
      window.addEventListener('flowSaved', this.handleReactFlowSave);
    }
    

    // window.dispatchEvent(new CustomEvent('angularToReact', {
    //   detail: { someValue: 123 },
    // }));
  }

  

  handleReactFlowSave = (e: any) => {
    console.log('[Angular] Received from React:', e.detail);
    // Handle React event (e.g., update Angular state)
  };

  ngOnDestroy() {
    // Clean up
    if (this.scriptElement) {
      document.body.removeChild(this.scriptElement);
    }
    // window.removeEventListener('flowSaved', this.handleReactFlowSave);
  }

  private async loadReactFlow(): Promise<void> {
    try {
      // Import React and ReactDOM
      const React = await import('react');
      const ReactDOM = await import('react-dom/client');
      
      // Import React Flow
      const ReactFlow = await import('reactflow');
      const { Background, Controls, MiniMap } = ReactFlow;
      
      // Import the React Flow wrapper
      // const { default: ReactFlowWrapper } = await import('../../react-app/flow');
      
      // Create a root and render the React component
      // const root = ReactDOM.createRoot(this.flowContainer.nativeElement);
      // root.render(React.createElement(ReactFlowWrapper));
      
      this.isLoaded = true;
      console.log('React Flow loaded successfully');
    } catch (error) {
      console.error('Failed to load React Flow:', error);
    }
  }
}
