import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  constructor(private router: Router) { }

  navigateToOption1() {
    this.router.navigate(['/option1']);
  }
}
