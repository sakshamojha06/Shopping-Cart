import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ConfirmationService {
  private confirmationResolver: ((confirmed: boolean) => void) | null = null;
  readonly message = signal<string | null>(null);

  confirm(message: string): Promise<boolean> {
    this.finish(false);
    this.message.set(message);

    return new Promise(resolve => {
      this.confirmationResolver = resolve;
    });
  }

  finish(confirmed: boolean): void {
    const resolver = this.confirmationResolver;
    this.confirmationResolver = null;
    this.message.set(null);
    resolver?.(confirmed);
  }
}
