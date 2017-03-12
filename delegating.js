// Callbacks are used to delegate functionality

// if a function takes a callback,that callback ca do a myriad of things. This allow us to callback to be delegated to a specific task
// Example of code/psedocode of delegating:

function leadBootcamp(language, leader){
	var outcome = leader(language);
	console.log(outcome);
}
function Mike(language){
	var languages = {
		'javascript': 'successful leader',
		'PHP': 'successful leader',
		'Python': 'successful leader',
		'Ruby': 'successful leader',
	}
	if(languages[language]){
		return languages[language];
	}
	else {
		return "maybe not yet";
	}
}
function Charlie(language){
	var languages = {
		'javascript': 'successful leader',
		'PHP': 'successful leader',
		'Python': 'successful leader',
		'Ruby': 'successful leader',
	}
	if(languages[language]){
		return languages[language];
	}
	else {
		return "maybe not yet";
	}
}
function Jimmy(language){
	var languages = {
		'javascript':'successful leader',
	    'PHP':'successful leader',
	    'Python':'successful leader',
	    'Ruby':'successful leader',
	    'iOS':'successful leader',
	    'java_android':'successful leader',
	}
	if(languages[language]){
		return languages[language];
	}
	else {
		return "maybe not yet";
	}
}
leadBootcamp('java_android', Mike);
leadBootcamp('java_android', Charlie);
leadBootcamp('java_android', Jimmy);


















