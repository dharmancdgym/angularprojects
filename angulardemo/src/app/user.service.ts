import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: { username: string, password: string }[] = [];

  register(username: string, password: string) {
    this.users.push({ username, password });
  }

  validate(username: string, password: string): boolean {
    return this.users.some(user => user.username === username && user.password === password);
  }
}
