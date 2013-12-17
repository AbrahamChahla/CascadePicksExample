/// <reference path="../GeneratedArtifacts/viewModel.js" />

myapp.AddEditMaster.SelectedOne_postRender = function (element, contentItem) {

	// Get our contentItems one time
	var scrn = contentItem.screen;

	var twoContentItem = scrn.findContentItem('SelectedTwo');
	var threeContentItem = scrn.findContentItem('SelectedThree');

	contentItem.dataBind('value', function (e) {
		twoContentItem.value = null;
		threeContentItem.value = null;
	});


};


myapp.AddEditMaster.SelectedTwo_postRender = function (element, contentItem) {

	// Get our contentItems one time
	var scrn = contentItem.screen;

	var threeContentItem = scrn.findContentItem('SelectedThree');

	contentItem.dataBind('value', function (e) {
		threeContentItem.value = null;
	});

};
