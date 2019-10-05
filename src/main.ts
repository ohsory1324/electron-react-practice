import { app, BrowserWindow } from 'electron';
import { spawn, ChildProcess } from 'child_process';

let webServer: ChildProcess;
let initialized = false;
let win: BrowserWindow;

function createWindow() {
  console.log('initialize');
  webServer = spawn('yarn', ['start-web']);
  webServer.stdout.on('data', (data) => {
    const parsed = data.toString();
    if (parsed.includes('Compiled successfully.')) {
      console.log('build');
      if (!initialized) {
        win = new BrowserWindow({
          width: 800,
          height: 600,
          webPreferences: {
            nodeIntegration: true,
          },
        });
        initialized = true;
      }
      win.loadURL('http://localhost:8080');
    }
  });
}

app.on('ready', createWindow);
app.on('quit', () => {
  console.log('quit');
  webServer.kill();
});
