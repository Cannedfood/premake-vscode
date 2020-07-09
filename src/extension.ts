import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "premake-vscode" is now active!');

	let disposable = vscode.commands.registerCommand('premake-vscode.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from premake-vscode!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
