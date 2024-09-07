"use strict";
exports.__esModule = true;
exports.deactivate = exports.activate = void 0;
var vscode = require("vscode");
function activate(context) {
    vscode.window.showInformationMessage('Dependify VSCode Extension Activated!');
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
