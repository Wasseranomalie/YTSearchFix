// http://codetonics.com/javascript/detect-document-ready/
function ready(){
	if(document.readyState != 'loading')
		selectSearch();
	else
		document.addEventListener("DOMContentLoaded", selectSearch())
}

ready();

function selectSearch() {
	var searchbar = document.getElementsByName('search_query')[0];
	searchbar.focus();
	searchbar.select();
}

window.addEventListener("yt-navigate-finish", function(event) {
    selectSearch();
});