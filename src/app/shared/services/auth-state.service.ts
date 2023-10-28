import { Injectable, Signal, signal } from '@angular/core';
interface IUser {
  name: string;
  email: string;
}
interface IAuthState {
  isLoggedIn: Signal<boolean>;
  user?: IUser
}
@Injectable({
  providedIn: 'root'
})
export class AuthStateService implements IAuthState {
  isLoggedIn: Signal<boolean> = signal(false)
  user?: IUser = { email: 'test@example.com', name: 'test' }
  constructor() { }
}
