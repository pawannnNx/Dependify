import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  vscode.window.showInformationMessage('Dependify VSCode Extension Activated!');
}

export function deactivate() {}
