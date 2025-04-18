import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'option1', 
    loadComponent: () => import('./components/option1/option1.component').then(m => m.Option1Component),
    title: 'Option 1'
  },
  { 
    path: 'option2', 
    loadComponent: () => import('./components/option2/option2.component').then(m => m.Option2Component),
    title: 'Option 2'
  },
  { 
    path: 'option3', 
    loadComponent: () => import('./components/option3/option3.component').then(m => m.Option3Component),
    title: 'Option 3'
  },
  { 
    path: 'flow-diagram', 
    loadComponent: () => import('./components/flow-diagram/flow-diagram.component').then(m => m.FlowDiagramComponent),
    title: 'Flow Diagram'
  },
  { 
    path: '', 
    redirectTo: 'option1', 
    pathMatch: 'full' 
  }
];
