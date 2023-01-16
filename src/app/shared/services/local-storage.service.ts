import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  #storage = window.localStorage;

  set(key: string, value: any) {
    this.#storage.setItem(
      key,
      typeof value === 'object' && value !== null
        ? JSON.stringify(value)
        : value + ''
    );
  }

  remove(key: string) {
    this.#storage.removeItem(key);
  }

  get<T>(key: string): T | null {
    const value = this.#storage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  }
}
