/*
* Licensed Materials - Property of IBM
* 5725-G92 (C) Copyright IBM Corp. 2006, 2012. All Rights Reserved.
* US Government Users Restricted Rights - Use, duplication or
* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

// Worklight comes with the jQuery 1.8.1 framework bundled inside. If you do not want to use it, please comment out the line below.
window.$ = window.jQuery = WLJQ;

function wlCommonInit(){

	/*
	 * Application is started in offline mode as defined by a connectOnStartup property in initOptions.js file.
	 * In order to begin communicating with Worklight Server you need to either:
	 * 
	 * 1. Change connectOnStartup property in initOptions.js to true. 
	 *    This will make Worklight framework automatically attempt to connect to Worklight Server as a part of application start-up.
	 *    Keep in mind - this may increase application start-up time.
	 *    
	 * 2. Use WL.Client.connect() API once connectivity to a Worklight Server is required. 
	 *    This API needs to be called only once, before any other WL.Client methods that communicate with the Worklight Server.
	 *    Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	
	// Common initialization code goes here
	
	function getWordList(){
		console.log('invoke adapater');
		var invocationData = { adapter:"CustomerDataAdapter",procedure:"getCustomerData",parameters:[]};
		var options = {
			onSuccess:displaySuccess,
			onFailure:displayError
		};
		WL.Logger.debug("About to invoke BeginerWordListAdapter");	
		WL.Client.invokeProcedure(invocationData, options);
		

	}
	
	function displayError(){
		alert('Error');
	}
	
	function displaySuccess(){
		alert('Success');
	}

}
