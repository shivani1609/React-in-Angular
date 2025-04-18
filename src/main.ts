import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
// import { provideAnimations } from '@angular/platform-browser/animations';

// Import React Flow styles
import 'reactflow/dist/style.css';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    // provideAnimations()
  ]
}).catch(err => console.error(err));