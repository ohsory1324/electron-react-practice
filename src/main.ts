import { app, BrowserWindow } from 'electron';
import { spawn, ChildProcess } from 'child_process';

let webServer: ChildProcess;
let initialized = false;

function createWindow() {
  console.log('initializing...');
  webServer = spawn('yarn', ['start-web']);
  webServer.stdout.on('data', (data) => {
    const parsed = data.toString();
    if (!initialized && parsed.includes('Compiled successfully.')) {
      console.log('built successfully.');
      const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
        },
      });
      win.loadURL('http://localhost:8080');
      initialized = true;
    }
  });
}

app.on('ready', createWindow);
app.on('quit', () => {
  console.log('quit');
  webServer.kill();
});
