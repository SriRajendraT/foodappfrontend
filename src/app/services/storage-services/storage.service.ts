import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class StorageService {

    constructor() { }
    get(key: string): string | null {
      return localStorage.getItem(key);
    }
  
    set(key: string, value: string): void {
      localStorage.setItem(key, value);
    }
  
    remove(key: string): void {
      localStorage.removeItem(key);
    }
  }