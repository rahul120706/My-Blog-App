import { Component, OnInit } from '@angular/core';
import { LearningProgressService } from '../services/learning-progress.service';

@Component({
  selector: 'app-learning-menu',
  standalone: false, // 👈 Explicitly module-driven
  templateUrl: './learning-menu.component.html',
  styleUrls: ['./learning-menu.component.css']
})
export class LearningMenuComponent {
  // Inject the progress tracker service
  constructor(public progressService: LearningProgressService) {}
}