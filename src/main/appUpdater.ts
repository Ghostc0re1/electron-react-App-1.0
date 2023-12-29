// appUpdater.ts
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';

export class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    this.checkForUpdates();
  }

  private checkForUpdates() {
    autoUpdater.checkForUpdatesAndNotify();
    autoUpdater.on('update-available', () => {
      log.info('Update available.');
    });
    autoUpdater.on('update-downloaded', () => {
      log.info('Update downloaded; will install in 5 seconds');
      setTimeout(() => autoUpdater.quitAndInstall(), 5000);
    });
    // Add more listeners as per your requirement
  }
}
