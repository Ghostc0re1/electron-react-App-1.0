import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example' | 'LOGIN' | 'LOGOUT' | 'GET_PROFILE' | 'SET_PROFILE' | 'SHOW_WELCOME_MESSAGE';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
    // New methods
    sendLoginMessage() {
      ipcRenderer.send('LOGIN');
    },
    sendSignoutMessage() {
      ipcRenderer.send('LOGOUT');
    },
    sendSeeProfileMessage() {
      ipcRenderer.send('GET_PROFILE');
    },
    handleProfileData(func: (event: IpcRendererEvent, ...args: unknown[]) => void) {
      ipcRenderer.on('SET_PROFILE', (event, ...args) => func(event, ...args));
    },
    showWelcomeMessage(func: (event: IpcRendererEvent, ...args: unknown[]) => void) {
      ipcRenderer.on('SHOW_WELCOME_MESSAGE', (event, ...args) => func(event, ...args));
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
