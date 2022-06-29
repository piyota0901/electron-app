import { app, BrowserWindow } from "electron";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: "#66066",
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("./index.html");

  let childWin = new BrowserWindow({
    width: 350,
    height: 200,
    parent: win,
    frame: false,
    modal: true,
    webPreferences: {
        nodeIntegration: true
    }
  });
  childWin.loadFile("./child.html")
};

app.whenReady().then(() => {
  createWindow();
});
