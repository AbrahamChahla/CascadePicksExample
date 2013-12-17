/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.PopupDialog.Button1_execute = function (screen) {

	screen.ButtonSelected = 1;
	screen.showPopup('Popup1');

};
myapp.PopupDialog.Button2_execute = function (screen) {

	screen.ButtonSelected = 2;
	screen.showPopup("Popup1");

};
myapp.PopupDialog.Button3_execute = function (screen) {

	screen.ButtonSelected = 3;
	screen.showPopup("Popup1");

};
myapp.PopupDialog.Button1_canExecute = function (screen) {
	var result = false;

	if (screen.ButtonSelected == null || screen.ButtonSelected === 1) result = true;

	return result;
};
myapp.PopupDialog.Button2_canExecute = function (screen) {
	var result = false;

	if (screen.ButtonSelected == null || screen.ButtonSelected === 2) result = true;

	return result;
};
myapp.PopupDialog.Button3_canExecute = function (screen) {
	var result = false;

	if (screen.ButtonSelected == null || screen.ButtonSelected === 3) result = true;

	return result;
};
myapp.PopupDialog.ResetButtons_execute = function (screen) {

	screen.ButtonSelected = null;

};
myapp.PopupDialog.PopupCancel_execute = function (screen) {

	screen.ButtonSelected = null;
	screen.closePopup("Popup1");

};
myapp.PopupDialog.PopupOk_execute = function (screen) {

	screen.closePopup("Popup1");

};
