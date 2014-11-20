var cloudebug = require("com.infinery.cdb");
var cdb = cloudebug.create('1d84ae67-0c60-44df-bdd6-7a4b6fa8bbeb');

cdb.session(
{
connected: function(e)
{
cdb.write('info', 'cloudebug is connected to the server and ready');
}
});

Ti.include('variables.js');
Ti.include('functions.js');
setallvars();
Ti.include('js/mmp_datetime.min.js');
//Ti.include('socialise.js');
// var newrelic = require('ti.newrelic');
// newrelic.start("AA74e486693cef4750c1e890e35e57d02534907bde");


// Ti.API.info(" !!!!!!!!!!!!!!!!!!!!!!! Launched in  " + orientation);

help_WindowSwitcher();
///////////////////// INITIALISE //////////////////////////////////////////////////////////////
webview.removeEventListener('beforeload', function(e) {
});

webview.addEventListener('beforeload', function(e) {
	webview.evalJS("var start='" + start + "';");
	webview.evalJS("var HTMLorientation='" + orientation + "';");
	var FPhelp = Titanium.App.Properties.getString("Master_Setting_Help_Tabs", true);
	webview.evalJS("var FPhelp='" + FPhelp + "';");
	start = 0;
	/* Get stored variable from last time */
	 HeightP = Titanium.App.Properties.getInt("HeightP", 0);
	 HeightL = Titanium.App.Properties.getInt("HeightL", 0);
	 WidthP = Titanium.App.Properties.getInt("WidthP", 0);
	 WidthL = Titanium.App.Properties.getInt("WidthL", 0);
	 GapP = Titanium.App.Properties.getInt("GapP", 0);
	 GapL = Titanium.App.Properties.getInt("GapL", 0);
	 UpDwnP = Titanium.App.Properties.getInt("UpDwnP", 0);
	 UpDwnL = Titanium.App.Properties.getInt("UpDwnL", 0);
	 LRposP = Titanium.App.Properties.getInt("LRposP", 0);
	//alert("app line 44 LRposP="+LRposP);
	 LRposL = Titanium.App.Properties.getInt("LRposL", 0);
	// alert("app line 44 LRposL="+LRposL);
	 TwistP = Titanium.App.Properties.getInt("TwistP", 0);
	 TwistL = Titanium.App.Properties.getInt("TwistL", 0);
	 LRH = Titanium.App.Properties.getInt("LRH", 0);
	 
	showvars("App 51 as sent");
	/* Send variable to web view */
	webview.evalJS("var HeightP='" + HeightP + "';");
	webview.evalJS("var HeightL='" + HeightL + "';");
	webview.evalJS("var WidthP='" + WidthP + "';");
	webview.evalJS("var WidthL='" + WidthL + "';");
	webview.evalJS("var GapP='" + GapP + "';");
	webview.evalJS("var GapL='" + GapL + "';");
	webview.evalJS("var UpDwnP='" + UpDwnP + "';");
	webview.evalJS("var UpDwnL='" + UpDwnL + "';");
	webview.evalJS("var TwistP='" + TwistP + "';");
	webview.evalJS("var TwistL='" + TwistL + "';");
	webview.evalJS("var LRposP='" + LRposP + "';");
	//alert("app line 64 LRH="+LRH);
	webview.evalJS("var LRposL='" + LRposL + "';");
	webview.evalJS("var LRH='" + LRH + "';");
	showvars("App after sending");
});
if (Titanium.Platform.displayCaps.platformWidth < Titanium.Platform.displayCaps.platformHeight) {
	orientation = 'portrait';
} else {
	orientation = 'landscape';
}
/////////////////////////////////////////////////////////////////////////

recover_settings();

/* Listen for variable update from Webview - fingerpads */
Ti.App.removeEventListener("app:HeightPtrigger", function(FHeightP) {});
Ti.App.addEventListener("app:HeightPtrigger", function(FHeightP) {		
	var HeightP = FHeightP.HeightP;
	Titanium.App.Properties.setInt('HeightP', HeightP);
});


Ti.App.removeEventListener("app:HeightLtrigger", function(FHeightL) {});
Ti.App.addEventListener("app:HeightLtrigger", function(FHeightL) {
var HeightL=FHeightL.HeightL;
	Titanium.App.Properties.setInt('HeightL', HeightL);
});

Ti.App.removeEventListener("app:WidthPtrigger", function(FWidthP) {});
Ti.App.addEventListener("app:WidthPtrigger", function(FWidthP) {
	var WidthP=FWidthP.WidthP;
	Titanium.App.Properties.setInt('WidthP', WidthP);
});


Ti.App.removeEventListener("app:WidthLtrigger", function(FWidthL) {});
Ti.App.addEventListener("app:WidthLtrigger", function(FWidthL) {
var WidthL=FWidthL.WidthL;
	Titanium.App.Properties.setInt('WidthL', WidthL);
});

Ti.App.removeEventListener("app:GapPtrigger", function(FGapP) {});
Ti.App.addEventListener("app:GapPtrigger", function(FGapP) {
var GapP=FGapP.GapP;
	Titanium.App.Properties.setInt('GapP', GapP);
});

Ti.App.removeEventListener("app:GapLtrigger", function(FGapL) {});
Ti.App.addEventListener("app:GapLtrigger", function(FGapL) {
	var GapL=FGapL.GapL;
	Titanium.App.Properties.setInt('GapL', GapL);
});

Ti.App.removeEventListener("app:UpDwnPtrigger", function(FUpDwnP) {});
Ti.App.addEventListener("app:UpDwnPtrigger", function(FUpDwnP) {
	var UpDwnP=FUpDwnP.UpDwnP;
	Titanium.App.Properties.setInt('UpDwnP', UpDwnP);
});

Ti.App.removeEventListener("app:UpDwnLtrigger", function(FUpDwnL) {});
Ti.App.addEventListener("app:UpDwnLtrigger", function(FUpDwnL) {
	var UpDwnL=FUpDwnL.UpDwnL;
	Titanium.App.Properties.setInt('UpDwnL', UpDwnL);
});
//alert("APP line 113 ="+ LRposP);

Ti.App.removeEventListener("app:LRposPtrigger", function(FLRposP) {});
Ti.App.addEventListener("app:LRposPtrigger", function(FLRposP) {
	//alert("app line 115 LRposP="+FLRposP.LRposP);
	var LRposP=FLRposP.LRposP;
	Titanium.App.Properties.setInt('LRposP', LRposP);
});

Ti.App.removeEventListener("app:LRposLtrigger", function(FLRposL) {});
Ti.App.addEventListener("app:LRposLtrigger", function(FLRposL) {
	if ( typeof LRposL == "string") {
		LRposL = parseInt(LRposL);
		//alert("was a string " + LRposL);
	}
	//alert("was "+LRposL.LRposL);
	var LRposL = FLRposL.LRposL;
	//alert("is "+LRposL);
	Titanium.App.Properties.setInt('LRposL', LRposL);
});

Ti.App.removeEventListener("app:TwistPtrigger", function(FTwistP) {});
Ti.App.addEventListener("app:TwistPtrigger", function(FTwistP) {
		var TwistP = FTwistP.TwistP;
	Titanium.App.Properties.setInt('TwistP', TwistP);
});

Ti.App.removeEventListener("app:TwistLtrigger", function(FTwistL) {});
Ti.App.addEventListener("app:TwistLtrigger", function(FTwistL) {
	var TwistL = FTwistL.TwistL;
	Titanium.App.Properties.setInt('TwistL', TwistL);
});

Ti.App.removeEventListener('Handedness', function(e) {

});
//DoOrientation();

Ti.App.addEventListener('Handedness', function(e) {
	LRH = e.LRH;
Titanium.App.Properties.setInt('LRH', LRH);
	set_orientation_variables(orientation);
});

// SETS INITIAL SCREEN DISPLAY positions.
removeChildrens(win1);
// can do without ?
removeChildrens(win3);
// can do without ?

//help_LettersSwitch();
help_bigWindowSwitch();

win1.add(smallHelpView);

////////////////////////////////////////////////////////////////////////////////////////////////
win1.add(webview);
win1.add(view);

Ti.App.removeEventListener('do_reset', function(e) {
});

Ti.App.addEventListener('do_reset', function(e) {
	getOrientation();
	Titanium.App.Properties.setString("email_to_setting", aTextField.value);
	help_LettersSwitch();
	help_bigWindowSwitch();
	Ti.App.fireEvent('webviewEvent', {
		text : ""
	});

});

help_WindowSwitcher();
win1.open();
view.show();
win1.add(settingsButton);
win1.add(helpButton);
win1.add(clearButton);
win1.add(emailButton);
win1.add(copyButton);
win1.add(pasteButton);
win1.add(timeStampButton);
top_view.add(aTextField);
win1.add(top_view);

top_view.add(aTrailer);
win1.add(aTrailer);
win1.add(version_label);
win1.add(PrivacyTitle);

if (help_windowSwitch.value == 1) {
	smallHelpView.show();
	view.height = 720;
} else {
	smallHelpView.hide();
	view.height = 720;
}

help_WindowSwitcher();
smallHelpView.add(smallHelpimages);

emailButton.removeEventListener('click', emailCurrentText);
clearButton.removeEventListener('click', clearTextFromClipboard);
ReviewButton.removeEventListener('click', viewLastText);
timeStampButton.removeEventListener('click', timeStamp);
copyButton.removeEventListener('click', copyTextToClipboard);
pasteButton.removeEventListener('click', pasteTextFromClipboard);
openWebsiteButton.removeEventListener('click', openWebsiteButtonAction);

help_BIGwindowSwitch.removeEventListener('change', help_bigWindowSwitch);

emailButton.addEventListener('click', emailCurrentText);
clearButton.addEventListener('click', clearTextFromClipboard);
ReviewButton.addEventListener('click', viewLastText);
timeStampButton.addEventListener('click', timeStamp);
copyButton.addEventListener('click', copyTextToClipboard);
pasteButton.addEventListener('click', pasteTextFromClipboard);
openWebsiteButton.addEventListener('click', openWebsiteButtonAction);

help_BIGwindowSwitch.addEventListener('change', help_bigWindowSwitch);

helpButton.removeEventListener('click', function() {
});

var a = Titanium.UI.createAnimation();
a.height = Ti.UI.FILL;
a.width = Ti.UI.FILL;
a.duration = 300;

helpButton.addEventListener('click', function() {
	win3.add(Continue_Siwriting);
	win3.add(SiWriter_help_win);
	a.height = Ti.UI.FILL;
	a.width = Ti.UI.FILL;
	a.duration = 300;
	win3.open(a);
});

close.removeEventListener('click', function() {
});
close.addEventListener('click', function() {
	win3.remove(Continue_Siwriting);
	win3.remove(SiWriter_help_win);
	a.height = 0;
	a.width = Ti.UI.FILL;
	;
	win3.close(a);
	help_WindowSwitcher();

});

get_MasterSettings();

//**********************ORIENTATION CHANGE SENSOR************************//
Ti.Gesture.removeEventListener('orientationchange', function(e) {
});

Ti.Gesture.addEventListener('orientationchange', function(e) {
	orientation = getOrientation(e.orientation);

	Ti.App.fireEvent('app:orientation', {
		orientation : orientation
	});

	set_orientation_variables(orientation);
	return orientation;
});
//******************END***ORIENTATION CHANGE SENSOR*********************//

CheckEmailaddress();
//getEmail();
if (aTextField.value == "") {
	aTextField.value = "Set a default email";
};

//the screen*********************************************************
view.add(txtViewDesc);
//the screen*********************************************************
view.show();

var copy = "";

/////////////////////////////////////////TEXT MANAGEMENT////////////////////////////////////////
/////////////////////////////////////////TEXT MANAGEMENT////////////////////////////////////////
/////////////////////////////////////////TEXT MANAGEMENT////////////////////////////////////////

Ti.App.removeEventListener('webviewEvent', function(e) {
});

Ti.App.addEventListener('webviewEvent', function(e) {

	////***********************///DELETE sensor//

	if (e.text == "\b_") {
		e.text = "";
		contentTyped = contentTyped.slice(0, -1);
		whole_sentance = whole_sentance.slice(0, -1);
		trailer = trailer.slice(0, -1);
		txtViewDesc.value = contentTyped + "_";
	}
	//************************/END////DELETE sensor//
	//////////////////////MAGIC BIT////add apple keyboard text and allows full editing//////////////////////
	if (contentTyped.length != txtViewDesc.value.length - 1) {( contentTyped = txtViewDesc.value);
	};

	////////////////END MAGIC BIT///////////////////////////
	if (speech_slider.value == true) {
		if (word_sentance_slider.value == true) {
			whole_sentance = whole_sentance + e.text;
		}
	}
	contentTyped = contentTyped + e.text;

	if (!Titanium.App.keyboardVisible) {
		txtViewDesc.value = contentTyped + "_";
	}

	trailer = trailer.slice(-23) + e.text;
	aTrailer.value = trailer + "_";

	if (speech_slider.value == true) {
		if (word_sentance_slider.value == true) {
			ws = "sentance";
		} else {
			ws = "word";
		}

		do_speech(ws, e.text, whole_sentance);
	}

	switch(e.text) {
	case ".":
	case "!":
	case "?":
		whole_sentance = "";

	};

});

//////////////////////////////////////END TEXT MANAGEMENT////////////////////////////////////////
//////////////////////////////////////END TEXT MANAGEMENT////////////////////////////////////////
//////////////////////////////////////END TEXT MANAGEMENT////////////////////////////////////////

settingsButton.removeEventListener('click', function() {
});

settingsButton.addEventListener('click', function() {
	if (setbutton == 0) {
		setbutton = 1;
		win1.add(toolbar);
		//win1.add(Continue_Siwriting_main);
		win1.add(bottomtoolbar);
		if (speech_slider.value) {
			win1.add(speech_toolbar);
		} else {
			win1.remove(speech_toolbar);
		}
		return;
	}

	if (setbutton == 1) {
		setbutton = 0;
		win1.remove(toolbar);
		win1.remove(bottomtoolbar);
		win1.remove(speech_toolbar);
	}

});

speech_slider.addEventListener('change', function() {
	if (speech_slider.value) {
		win1.add(speech_toolbar);
	} else {
		win1.remove(speech_toolbar);
	}
});

btnChoosePhoto.removeEventListener('click', function(e) {
});

btnChoosePhoto.addEventListener('click', function(e) {
	Titanium.Media.openPhotoGallery({
		success : function(event) {
			Ti.API.debug('Our type was: ' + event.mediaType);
			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				image = event.media;
				saveBackgroundImage(image);
			}
		},
		cancel : function() {
		},
		error : function(err) {
			Ti.API.error(err);
		},
		mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO]
	});
});

btnTakePhoto.removeEventListener('click', function(e) {
});

btnTakePhoto.addEventListener('click', function(e) {
	Titanium.Media.showCamera({
		//we got something
		success : function(event) {
			//getting media
			var image = event.media;

			//checking if it is photo
			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				//we may create image view with contents from image variable
				//or simply save path to image
				Ti.App.Properties.setString("image", image.nativePath);
				saveBackgroundImage(image);
			}
		},
		cancel : function() {
			//do somehting if user cancels operation
		},
		error : function(error) {
			//error happend, create alert
			var a = Titanium.UI.createAlertDialog({
				title : 'Camera'
			});
			//set message
			if (error.code == Titanium.Media.NO_CAMERA) {
				a.setMessage('Device does not have camera');
			} else {
				a.setMessage('Unexpected error: ' + error.code);
			}
			// show alert
			a.show();
		},
		allowImageEditing : true,
		saveToPhotoGallery : true
	});
});

help_BIGwindowSwitch.addEventListener('change', function(e) {
	//help_BIGwindowSwitch.value=!help_BIGwindowSwitch.value;
	if (help_BIGwindowSwitch.value == 1) {
		smallHelpimages.image = '/images/BIGAllCodes2.png';
	} else {
		smallHelpimages.image = '/images/AllCodes.png';
	}
	// Ti.API.info('****************** help_BIGwindowSwitch at line 200 now is ' + help_BIGwindowSwitch.value);
});

Ti.App.addEventListener('sizer_switched_off', function(e) {
	sizer_switch_slider.value = false;
});

sizer_switch_slider.removeEventListener('change', function() {
});

Ti.App.addEventListener('help_switched_off', function(e) {
	help_lettersSwitch.value = false;
});

sizer_switch_slider.addEventListener('change', function(e) {
	// Ti.API.info('sizer_switch slide value ' + sizer_switch_slider.value);
	Ti.App.fireEvent('sizer_switch_change', {
		slider : sizer_switch_slider.value
	});

});

//// Ti.API.info("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

HBWS = Titanium.App.Properties.getString("Master_Setting_Big_Help");
// Ti.API.info("Titanium.App.Properties.getString(Master_Setting_Big_Help); from app is " + HBWS);
help_BIGwindowSwitch.value = HBWS;

HelpWS = Titanium.App.Properties.getString("Master_Setting_Window_Switch");
// Ti.API.info("Titanium.App.Properties.getString(Master_Setting_Window_Switch); from app is " + HelpWS);
help_windowSwitch.value = HelpWS;

//help_windowSwitch.value=true;

help_lettersSwitch.removeEventListener('change', function(e, FPhelp) {
});

help_lettersSwitch.addEventListener('change', function(e) {
	//// Ti.API.info('xxxxxxxxxxxhelp_lettersSwitch = ' + help_lettersSwitch.value);
	Ti.App.fireEvent('help_lettersSwitch_change', {
		FPhelp : help_lettersSwitch.value
	});
	// Ti.API.info('help_lettersSwitch = ' + help_lettersSwitch.value);
});

help_windowSwitch.removeEventListener('change', help_WindowSwitcher);

help_windowSwitch.addEventListener('change', function(e) {
	// Ti.API.info("help_windowSwitch.value= " + help_windowSwitch.value);

	if (help_windowSwitch.value == 1) {
		smallHelpView.show();
		view.height = 720;
	} else {
		smallHelpView.hide();
		view.height = 720;
	}
	help_WindowSwitcher();
});

Ti.include('text_to_speech.js');


