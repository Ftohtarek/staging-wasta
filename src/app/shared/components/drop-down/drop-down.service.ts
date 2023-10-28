import { Injectable, WritableSignal, signal } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  toggleState: WritableSignal<boolean> = signal(false)
  setState(val: boolean) {
    this.toggleState.update(() => val)
  }
}
