import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkModeActive: boolean = false;

  constructor() { 
    this.loadDarkMode();
  }

  /**
   * Toggles the dark mode status between active and inactive.
   * Calls `saveDarkMode` to persist the updated status in local storage.
   */
  toggleDarkMode(): void {
    this.isDarkModeActive = !this.isDarkModeActive;
    this.saveDarkMode();
  }

  /**
   * Sets the dark mode status to the specified boolean value.
   * @param {boolean} status - The desired dark mode status (true for active, false for inactive).
   * Calls `saveDarkMode` to persist the updated status in local storage.
   */
  setDarkMode(status: boolean): void {
    this.isDarkModeActive = status;
    this.saveDarkMode();
  }

  /**
   * Retrieves the current status of dark mode.
   * @returns {boolean} - The current dark mode status.
   */
  getDarkModeStatus(): boolean {
    return this.isDarkModeActive;
  }

  /**
   * Saves the current dark mode status to local storage.
   * The status is stored as a JSON string under the key 'isDarkModeActive'.
   * @private
   */
  private saveDarkMode(): void {
    localStorage.setItem('isDarkModeActive', JSON.stringify(this.isDarkModeActive));
  }

  /**
   * Loads the dark mode status from local storage and updates `isDarkModeActive`.
   * If no status is found in local storage, dark mode remains unchanged.
   * @private
   */
  private loadDarkMode(): void {
    const savedStatus = localStorage.getItem('isDarkModeActive');
    if (savedStatus !== null) {
      this.isDarkModeActive = JSON.parse(savedStatus);
    }
  }
}