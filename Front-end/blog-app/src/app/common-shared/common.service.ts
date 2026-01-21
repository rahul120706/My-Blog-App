import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  preComponentDestroyTasks(subscriptions: any, dialog?: any): void {

    if (subscriptions && subscriptions.length) {
      subscriptions.forEach((subscription: any) => {
        if (subscription) {
          subscription.unsubscribe();
        }
      });
    }

    if (dialog) {
      dialog.closeAll();
    }
  }
}
