import { Component, inject } from '@angular/core';
import { ConfirmationService } from '../../services/confirmation';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-feedback',
  standalone: true,
  templateUrl: './feedback.html',
  styleUrl: './feedback.css'
})
export class Feedback {
  readonly confirmationService = inject(ConfirmationService);
  readonly notificationService = inject(NotificationService);
}
