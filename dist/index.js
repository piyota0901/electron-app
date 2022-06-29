"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const createWindow = () => {
    const win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: "#66066",
        webPreferences: {
            nodeIntegration: true,
        },
    });
    win.loadFile("./index.html");
    let childWin = new electron_1.BrowserWindow({
        width: 350,
        height: 200,
        parent: win,
        frame: false,
        modal: true,
        webPreferences: {
            nodeIntegration: true
        }
    });
    childWin.loadFile("./child.html");
};
electron_1.app.whenReady().then(() => {
    createWindow();
});
