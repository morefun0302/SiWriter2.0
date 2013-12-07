//Ti.include ('app.js');

function ShowTrailer(){
	trailer=txtViewDesc.value.slice(-12);
		trailer=trailer.slice(0,-1);
		//Ti.API.info('trailer: ' + trailer);
		//aTrailer.value=trailer+Code;
}

function View_Size(){
	Size=txtViewDesc.value.length;
	var remainder = Size % 28;
	Size = ((Size - remainder) / 28)*28;
	Size=Size+35;
		//Ti.API.info("Size="+Size+"-------*---------");
	//txtViewDesc.height = Size;

txtViewDesc.top = 30;
//txtViewDesc.height  = Size;
txtViewDesc.height  = 355+Size;
//view.height = Size;
}

function setup_buttons(){}
/*
	webview.addEventListener('touchstart',function(e){
    startX = e.x;
    startY = e.y;
    Ti.API.info('startX: ' + startX);
    Ti.API.info('startY: ' + startY);

alert('startX: ' + startX);
alert('startY: ' + startY);
	});	
}
*/

function DoOrientation(){

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
 
if (pWidth > pHeight) {
    var oriCurrent = 'landscape';
} else {
    var oriCurrent = 'portrait';    
}
//Ti.API.info('Window orientation: ' + oriCurrent);
//if (pWidth = 768) {alert("ipad mini");}
//if (pHeight = 1004) {alert("ipda mini");}

//if (pWidth = 1004) {alert("ipad mini");}
//if (pHeight = 768) {alert("ipda mini");}
	  	
	if (oriCurrent=="portrait"){portrait();}
	if (oriCurrent=="landscape"){landscape();} 
	var Model=Titanium.Platform.getModel(); 
Ti.API.info("Titanium.Platform = "+Model);	

return oriCurrent;
}




function getOrientation(o) {
    switch (o) {
        case Titanium.UI.PORTRAIT: {return 'portrait';}
        case Titanium.UI.UPSIDE_PORTRAIT: {return 'portrait';}
        case Titanium.UI.LANDSCAPE_LEFT: {return 'landscape';}
        case Titanium.UI.LANDSCAPE_RIGHT: {return 'landscape';}
       // Ti.API.info("getOrientation="+(o)); 

         default :return (o);
    }
}

function portrait(){	
buttonvariablesPortrait();
}

function landscape(){
buttonvariablesLandscape();
}


function recoverSoftKeyText(){}
	/*
		Ti.API.info("ACTIVE CHANGE");
		lenCT=contentTyped.length;
		//Ti.API.info("lenCT="+lenCT);
		contentTyped = contentTyped.substring(0, contentTyped.length-1);//removes carat again
		stub=contentTyped.slice(0,(lenCT-lengthAgendaText));
						
			//Ti.API.info("stub="+stub);
			//txtViewDesc.value=OS_typedText;
			//		contentTyped=stub+SoftKBText;		
	txtViewDesc.value=stub+OS_typedTextL;
		//Ti.API.info("visible on screen now="+txtViewDesc.value)
	contentTyped=stub+OS_typedTextL;
		//Ti.API.info("contentTyped="+contentTyped)
			//contentTyped=contentTyped+OS_typedText
}

*/

function saveCurrentText() {
	saved_file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'SiWriter '+new Date);
    saved_file.write(save); // write to the file  
}

function saveBackgroundImage(image) {
     DoOrientation();
if (oriCurrent="portrait") {
	     var BG_Image_Message = Titanium.UI.createAlertDialog({title:'Background image'});
BG_Image_Message.setMessage('Portrait background updated. \n Use a small file for best results.\n Now, close and re-open SiWriter');
}

if (oriCurrent="landscape") {
	     var BG_Image_Message = Titanium.UI.createAlertDialog({title:'Background image'});
BG_Image_Message.setMessage('Landscape background updated. \n Use a small file for best results.\n Now, close and re-open SiWriter');
}	
    if(writeFile .exists()){
        delete writefile;
		BG_Image_Message.show();
    }
 

    
  writeFile.write(image);
    // Ti.API.info("!!!!!!!!!!!!!!!!!!!!! ImageFile path is: " + writeFile.nativePath);
     //win1.backgroundImage=image;
     DoOrientation();     
}


function viewLastText() {}
/*
	//previous_contents = saved_file.read();
	txtViewDesc.value=contentTyped;
Review_mode=1;
{}
*/

function copyTextToClipboard() {
	if(txtViewDesc.value==="_"){
		alert("Nothing to copy");
 } else{
 	 	Ti.UI.Clipboard.setText(txtViewDesc.value);
 }

}

function clearTextFromClipboard() {
	var dialog = Ti.UI.createAlertDialog({
    title: 'Do you really want to clear the text ?',
    buttonNames: ['Yes', 'No']
						});

dialog.addEventListener('click', function(e){
   // Ti.API.info('e.index: ' + e.index);
    if(e.index==0){
	txtViewDesc.value="_";
	win1.remove(ReviewButton);
 	//contentTyped="_";
    } 
     
});
 dialog.show();

};



function pasteTextFromClipboard() {
	if(Ti.UI.Clipboard.getText()){
 	txtViewDesc.value = txtViewDesc.value + Ti.UI.Clipboard.getText()+"_";
 	//contentTyped =contentTyped + Ti.UI.Clipboard.getText();
 }else{
 	alert("Nothing to paste");
 }	
}

function timeStamp() {
 	txtViewDesc.value = txtViewDesc.value.substring(0, txtViewDesc.value.length-1)+"\r"+new Date +"\n\n";
 	//txtViewDesc.value=txtViewDesc.value+"\r"+new Date +"\n\n";
 	//txtViewDesc.value=contentTyped;
}

function settingsButtonAction() {
win2.add(returnButton); 
win2.add(openWebsiteButton);
win2.open();
}

function returnButtonAction() {
win2.remove(returnButton); 
win2.remove(openWebsiteButton);
getOrientation();

	Titanium.App.Properties.setString("email_to_setting",aTextField.value);
/*
	Titanium.App.Properties.setString("Master_Setting_Window_Switch",help_windowSwitch.value);
	Titanium.App.Properties.setString("Master_Setting_Big_Help", help_BIGwindowSwitch.value);
	Titanium.App.Properties.setString("Master_Setting_help_tabs",help_lettersSwitch.value);
*/

help_WindowSwitcher();
help_LettersSwitch();
help_bigWindowSwitch();

//.API.info("!!!!!!!!!!email_to!!!!!!!!!!!!NOW SET TO "+aTextField.value);	
//	Titanium.API.info("!!!!!!!!!!help_windowSwitch!!!!!!!!!!!!NOW SET TO "+help_windowSwitch.value);	
//	Titanium.API.info("!!!!!!!!!!Master_Setting_Help_Tabs !!!!!!!!!!!!NOW SET TO "+Master_Setting_Help_Tabs);
//	Titanium.API.info("!!!!!!!!!!help_lettersSwitch!!!!!!!!!!!!!!!!!!!NOW SET TO "+help_lettersSwitch.value);
//	Titanium.API.info("!!!!!!!!!!help_BIGwindowSwitch!!!!!!!!!!!!!!!!!NOW SET TO "+help_BIGwindowSwitch.value);
Ti.App.fireEvent('webviewEvent', {text: "  "}); 

win2.close();
win1.open();
}


function openWebsiteButtonAction() {
Ti.Platform.openURL("http://SiWriter.co.uk");
}

function removeChildrens(objeto) {
    for (i in objeto.children) {
        var child=objeto.children[0];
        removeChildrens(child);
        objeto.remove(child);
        child=null;
    }
}

function help_bigWindowSwitch() {

	//Titanium.App.Properties.setString(Master_Setting_Big_Help,help_BIGwindowSwitch.value);

	if(help_BIGwindowSwitch.value==1) {
	//Titanium.App.Properties.setString(Master_Setting_Big_Help,true);
	smallHelpimages.image='/images/BIGAllCodes2.png';}
	else{
	//Titanium.App.Properties.setString(Master_Setting_Big_Help,false);
	smallHelpimages.image='/images/AllCodes.png';
	}
	
//Ti.API.info('**************************************help_BIGwindowSwitch at line app 186 now is '+help_BIGwindowSwitch.value);
//Ti.API.info('**************************************Master_Setting_Big_Help at app line 187 now is '+Master_Setting_Big_Help);
}

function help_WindowSwitcher(){

	if (help_windowSwitch.value==true){/******** SHOW HELP ******* ALL SMALL **/
		smallHelpView.show();
		blockLen =300;
	 	if (orientation=="portrait"){view.width = "290";}
	 	if (orientation=="portrait"){view.height = "420";}

		if (orientation=="landscape"){view.height ="280";}
		if (orientation=="landscape"){view.width ="320";}
	}
	
	if (help_windowSwitch.value==false){ /******** HIDE HELP **** ALL BIG *****/
		smallHelpView.hide();
		blockLen =750;
	if (orientation=="portrait"){view.width = "620";}
	if (orientation=="portrait"){view.height = "420";}
	if (orientation=="landscape"){view.height ="700";}
	if (orientation=="landscape"){view.width ="320";} 

	} 


			
//Ti.API.info('************************view.height!!!!!!!!!!!!!!!' + view.height);
//Ti.API.info('************************view.width!!!!!!!!!!!!!!!!' + view.width);
//Ti.API.info('************************oriCurrent!!!!!!!!!!!!!!!' + oriCurrent);
//Ti.API.info('!!!!!!!!!!!!!!!!!!!!!!!!!!!!help window value: ' + help_windowSwitch.value);


	//win1.remove(view);
	//view = Ti.UI.createView();
	//win1.add(view);
}

function help_LettersSwitch(){
//Ti.API.info('!!!!!!!!!!!!!!!!!!!!!!!!!!!!help Switch value: ' + help_lettersSwitch.value);
 	if(help_lettersSwitch.value) { 
	//Ti.App.fireEvent('pageReady',{id:help_lettersSwitch.value});	
	 webview.url = 'Keypad.html';
	}else {
    //Ti.App.fireEvent('pageReady',{id:0});
     webview.url = 'Keypad_no_help.html';
 		}			
  hide=help_lettersSwitch.value;	
  webview.reload();
}	
  
function get_MasterSettings(){
	for (var c=0;c<props.length;c++) {
	var value = Titanium.App.Properties.getString(props[c]);
	if (value==0) {setting=false;}
	if (value==1) {setting=true;}
						//Titanium.API.info("!!!!!!257!!!!!!!!!!!!! is "+props[c]+" = "+value);
	    if (props[c] =="email_to_setting") {  aTextField.value=value;
	    	//alert("settings email="+value);
	    	}
	    
	    if (props[c] =="Master_Setting_Window_Switch") {
	    	help_windowSwitch.value=setting;
	    		}
	    		
	    if (props[c] =="Master_Setting_Big_Help") {
	    	help_BIGwindowSwitch.value=setting;
	    	}
	    	
	    if (props[c] =="Master_Setting_Help_Tabs") {
	    	//help_lettersSwitch.value=value;
	    	help_lettersSwitch.value=setting;
	    	}
	
	   /* if (props[c] =="email_to_setting") {
			    aTextField=email_to_setting.value;
	    	}
	    */	
//if (Master_Setting_Window_Switch.value == 1){help_windowSwitch.value=1;}else{help_windowSwitch.value==0;};
//if (Master_Setting_Big_Help.value==1){help_BIGwindowSwitch.value=1;}else{help_BIGwindowSwitch.value=0;};
//if (Master_Setting_Help_Tabs.value==1){help_lettersSwitch.value=1;}else{help_lettersSwitch.value=0;};
    }

}

function fix_code(code){
	letter_code="0";
	if (code==15) { letter_code= 1;}
	if (code==240) {letter_code= 16;}
	if (code==3840) {letter_code= 32;}
	if (code==61440) {letter_code= 64;}
	if (code==983040) {letter_code= 128;}
	return letter_code;
};

function doSomething(e) {
	// This function will be called by multiple handlers
	// The event object is accessible within this function
	Ti.API.info('The '+e.type+' event happened');
}
