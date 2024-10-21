import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkModeActive: boolean = false;

  constructor() { 
    this.loadDarkMode();
  }

  toggleDarkMode() {
    this.isDarkModeActive = !this.isDarkModeActive;
    this.saveDarkMode();
  }

  setDarkMode(status: boolean) {
    this.isDarkModeActive = status;
    this.saveDarkMode();
  }

  getDarkModeStatus(): boolean {
    return this.isDarkModeActive;
  }

  private saveDarkMode() {
    localStorage.setItem('isDarkModeActive', JSON.stringify(this.isDarkModeActive));
  }

  private loadDarkMode() {
    const savedStatus = localStorage.getItem('isDarkModeActive');
    if(savedStatus !== null) {
      this.isDarkModeActive = JSON.parse(savedStatus);
    }
  }
}