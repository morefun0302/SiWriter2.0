var SiWriter ={};
var y=0;
var start=1;
var orientation="null";
var oldOrientation="";
var saved_email_url_file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'SiWriter_default_email.txt');
var saved_file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'SiWriter.txt'+new Date);
var last_file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'SiWriter.txt'+new Date);
var previous_contents = saved_file.read();
var default_email = saved_email_url_file.read();
var dir = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory);
//contentTyped = previous_contents;
var contentTyped = '_';
var c=0;
var s=0;
var Nums=0;
var Caps=0;
var blockLen=750;
var DEL=0;
var OS_EDIT=0;
var help_windowSwitch= false;
var help_BIGwindowSwitch= false;
var help_windowSwitchSetting= false;
var Master_Setting_Big_Help= false;
var angle={};
var orient="";		
var props = Titanium.App.Properties.listProperties();
var Last_Typed_Word="!?!";
var Review_mode=0;
var code=0;
var codeA=0;
var codeB=0;
var codeC=0;
var codeD=0;
var codeE=0;
var letter_code=0;
var currentTime = new Date();
var clickTime;
var keyMap = [  //The array that holds he key codes that are sent to the screen as inner HTML content
				'_', // nothing pressed.
				'', //1
				'e', //2
				'i', //3
				'o', // 4 //
				'c',//5
				'a',//6
				'd',//7
				's', // 8 //
				'k', //9
				't',//10
				'r',//11
				'n', // 12
				'y',//13
				'.',//14
				'f',//15
				'u', // 16 //
				'h',  //17
				'v', //18
				'l',  // 19 
				'q', // 20//
				'z', //21
				'CR', // 22 
				"'",//23
				'g', // 24 //
				'j', //25
				',', //26
				'w', //27
				'b', // 28 //
				'x',//29
				'm',//30
				'p', // everything pressed (cancel).31
				
				
				'_', // nothing pressed.0 / 32
				'spc', //33
				'E', //
				'I', //
				'O', // 4 //36
				'C',
				'A',//
				'D',//
				'S', // 8 //40
				'K', //
				'T',//
				'R',
				'N', // 12 44
				'Y',//
				'!',//
				'F',//
				'U', // 16 //48
				'H',  //
				'V', //
				'L',  //  
				'Q', // 20//52
				'Z', //
				'CR', //  
				"'",
				'G', // 24 //56
				'J', //
				',', //
				'W', //
				'B', // 28 //60
				'X',
				'M',
				'P', // everything pressed (cancel).63
				
				//NUMBERS
				
				'_', // nothing pressed. 64
				'1', //1
				'€', //2
				'2', //3
				'⋅', // 4 //68
				'0',//5
				'',//6
				'3',//7
				'$', // 8 /72/104
				'', //9
				'∞',//10
				'',//11
				'', // 12  76
				'¥',//13
				'.',//14
				'4',//15
				'', // 16 //80
				'6',  //17
				'÷', //18
				'£',  // 19 
				'', // 20//84
				'¢', //21
				'CR', //22  
				'"',//23
				'§', // 24 //88
				'7', //25
				',', //26
				'9', //27
				'', // 28 //92
				'8',//29
				'',//30
				'5', // everything pressed (cancel).95
				
				//SYMBOLS
				
				'_', // nothing pressed. 96 
				'>:(', // 97
				'=', //98
				'<', //99
				' (-: ', // 4 //100
				'[', //101
				'@',//102
				'(',//103
				'$', // 8 //104
				'/', // 105
				'*',//106
				'&',//107
				'-', // 12  108
				'?',//109
				'.',//110
				'{',//111
				'^', // 16 //112
				'#',  //113
				'\\', //114
				'£',  // 115 
				']', // 20//116
				'%', //117
				'\n', //  118
				" :-0 ",//119
				'>', // 24 //120
				';', //121
				'º', //122
				':', //123
				')', // 28 //124
				'!',//125
				'}',//126
				'+'//127

			];

Ti.include ('KS_email2.js');
Ti.include ('buttons.js');
Ti.include ('file_saver.js');
Ti.include ('help.js');


Titanium.App.Properties.setString("version", Ti.App.version);
Titanium.App.Properties.setString("date_of_build","\r"+new Date);

get_MasterSettings();
CheckEmailaddress();
/*
Ti.Gesture.addEventListener('orientationchange', function (ev) {
  if (Ti.Gesture.isLandscape(ev.orientation)) {
    // Update your UI for landscape orientation
    orientation="landscape";
  } else {
    // Update your UI for portrait orientation
     orientation="portrait";
  }
});
*/
	
var txtViewDesc = Ti.UI.createTextArea({
    value : '',
    top : 20,
    width : "94%",
    backgroundColor : 'transparent',
    font: {fontSize:18},
    //editable: "NO",
   });


var view = Ti.UI.createScrollView({
	backgroundImage:'images/Sized_Screen_lighter.png',
    borderRadius:10,
    top:20,
	left:40,
});

//view.show();

var win1 = Titanium.UI.createWindow({ // top section BG 
   title:'SiWriter 1' + new Date,
   backgroundImage:'images/bg_image.png',
   height:"100%",
   bottom:0,
   });

/////////////////////////////////////HELP WINDOW SETUP//////////////////////////////

var win2 = Titanium.UI.createWindow({ // top section BG 
    title:'SiWriter.co.uk Help',
    backgroundImage:'images/Sized_Screen_lighter.png',
    height: "100%",
    bottom:0,
   });

/////////////////////////////////////////end help window stuff //////////////////////////


//create a webview - of the HTML keypad - NB Background set in HTML file
var webview = Titanium.UI.createWebView({
	backgroundColor:'transparent',
    url: 'Keypad_no_help.html',
    width: "100%",
    height: "550",
    bottom:"-30",
    disableBounce: true,
});

/* var Cloud = require('ti.cloud');*/

var SiWriter_helpView = Titanium.UI.createWebView({
	backgroundColor:'transparent',
    url: 'help.html',
    width: "100%",
    height: "100%",
    bottom:0,
});

DoOrientation();// SETS INITIAL SCREEN DISPLAY positions.
//help_WindowSwitcher();// can do without ?

//removeChildrens(win1);// can do without ?
//removeChildrens(win2);// can do without ?

help_LettersSwitch();
help_bigWindowSwitch();
	
win2.add(SiWriter_helpView);
win2.add(help_windowSwitch);
win2.add(help_BIGwindowSwitch);
win2.add(help_lettersSwitch);
win2.add(help_BIGwindowSwitchLbl);	
win2.add(help_windowSwitchLbl);
win2.add(help_lettersSwitchLbl);
win1.add(smallHelpView);
win2.add(btnChoosePhoto);
win2.add(btnTakePhoto);
////////////////////////////////////////////////////////////////////////////////////////////////
win1.add(webview);
win1.add(view);

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
 
if (pWidth > pHeight) {
    orientation = 'landscape';
} else {
    orientation = 'portrait';    
}

help_WindowSwitcher();
win1.open();
view.show();
win1.add(settingsButton);
win1.add(copyButton);
win1.add(clearButton);
win1.add(emailButton);
				Ti.API.info('orientation at line 183 now is '+orientation);
				//Ti.API.info('orientation at line 185 now is '+orientation);
win1.add(pasteButton);
win1.add(timeStampButton);
top_view.add(aTextField); 
win1.add(top_view);

top_view.add(aTrailer); 
win1.add(aTrailer);
win1.add(Button1);
win1.add(Button2);
win1.add(Button3);
win1.add(Button4);
win1.add(Button5);

if(help_windowSwitch.value==1) {smallHelpView.show(); }else{smallHelpView.hide(); }

help_WindowSwitcher();	
smallHelpView.add(smallHelpimages);



	emailButton.removeEventListener('click', emailCurrentText);
	clearButton.removeEventListener('click', clearTextFromClipboard);
    ReviewButton.removeEventListener('click', viewLastText);
    timeStampButton.removeEventListener('click', timeStamp);	
	copyButton.removeEventListener('click', copyTextToClipboard);
	pasteButton.removeEventListener('click', pasteTextFromClipboard);
	settingsButton.removeEventListener('click', settingsButtonAction);
returnButton.removeEventListener('click', returnButtonAction);
openWebsiteButton.removeEventListener('click', openWebsiteButtonAction);

help_windowSwitch.removeEventListener('change',help_WindowSwitcher);
help_lettersSwitch.removeEventListener('change',help_LettersSwitch);
help_BIGwindowSwitch.removeEventListener('change',help_bigWindowSwitch);

help_windowSwitch.removeEventListener('change',function(e){
					//Ti.API.info('Switch value: ' + help_windowSwitch.value);
});

help_lettersSwitch.removeEventListener('change',function(e){
 					//Ti.API.info('Switch value: ' + help_lettersSwitch.value);
});

	

	emailButton.addEventListener('click', emailCurrentText);
	clearButton.addEventListener('click', clearTextFromClipboard);
    ReviewButton.addEventListener('click', viewLastText);
    timeStampButton.addEventListener('click', timeStamp);
	copyButton.addEventListener('click', copyTextToClipboard);
	pasteButton.addEventListener('click', pasteTextFromClipboard);
	settingsButton.addEventListener('click', settingsButtonAction);

returnButton.addEventListener('click', returnButtonAction);
openWebsiteButton.addEventListener('click', openWebsiteButtonAction);

help_windowSwitch.addEventListener('change',help_WindowSwitcher);
help_BIGwindowSwitch.addEventListener('change',help_bigWindowSwitch);
help_lettersSwitch.addEventListener('change',help_LettersSwitch);

help_windowSwitch.addEventListener('change',function(e){
      help_WindowSwitcher();
});

help_BIGwindowSwitch.addEventListener('change',function(e){
	if(help_BIGwindowSwitch.value==1) {
	smallHelpimages.image='/images/BIGAllCodes2.png';}
	else{
	smallHelpimages.image='/images/AllCodes.png';
	}
	//Ti.API.info('****************** help_BIGwindowSwitch at line 1229 now is '+help_BIGwindowSwitch.value);
});

//**********************ORIENTATION CHANGE SENSOR************************//
	Ti.Gesture.addEventListener('orientationchange',function(e){
								
		orientation = getOrientation(e.orientation);		    
		if (orientation=="portrait"){portrait();}
		if (orientation=="landscape"){landscape();}  
				//  Ti.API.info('-- Line 285 ---------------------------------------------------------orientation: ' + orientation);
				  return orientation;
});
//******************END***ORIENTATION CHANGE SENSOR*********************//

help_lettersSwitch.addEventListener('change',function(e,hide){
 						// Ti.API.info('Switch value: ' + help_lettersSwitch.value);

 if(help_lettersSwitch.value)
		{ 
	    	webview.url = 'Keypad.html';
		}
	else {
    	 	webview.url = 'Keypad_no_help.html';
		}
			
  hide=help_lettersSwitch.value;	
  webview.reload();
});

CheckEmailaddress();
//getEmail();
if (aTextField.value==""){aTextField.value="Set a default email";};

//the screen*********************************************************
view.add(txtViewDesc);
//the screen*********************************************************
view.show();

var copy ="";

if(start==1){
		Ti.App.fireEvent('orientationchange',{id:0});
	start=0;
setup_buttons();
};

/////////////////////////////////////////TEXT MANAGEMENT//////////////////////////////////////// 
		Ti.include ('newtext.js');
	
		trailer=txtViewDesc.value.slice(-11);
		trailer=trailer.slice(0,-1);
		aTrailer.value=trailer;



/////////////////////////////////////////TEXT MANAGEMENT//////////////////////////////////////// 

				//aTextField.value=Titanium.App.Properties.getString(email_to_setting);

btnChoosePhoto.addEventListener('click', function(e){
       Titanium.Media.openPhotoGallery({
           success:function(event)
           {
               Ti.API.debug('Our type was: '+event.mediaType);
               if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
               {
                   image=event.media;
                   saveBackgroundImage(image);
               }
           },
           cancel:function()
           {
           },
           error:function(err)
           {
               Ti.API.error(err);
           },
           mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
       });
   });
   

btnTakePhoto.addEventListener('click', function(e){
  	        Titanium.Media.showCamera({
            //we got something
            success:function(event)
            {
                //getting media
                var image = event.media;
                 
                //checking if it is photo
                if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
                {
                    //we may create image view with contents from image variable
                    //or simply save path to image
                    Ti.App.Properties.setString("image", image.nativePath);
                    saveBackgroundImage(image);
                }
            },
            cancel:function()
            {
                //do somehting if user cancels operation
            },
            error:function(error)
            {
                //error happend, create alert
                var a = Titanium.UI.createAlertDialog({title:'Camera'});
                //set message
                if (error.code == Titanium.Media.NO_CAMERA)
                {
                    a.setMessage('Device does not have camera');
                }
                else
                {
                    a.setMessage('Unexpected error: ' + error.code);
                }
 
                // show alert
                a.show();
            },
            allowImageEditing:true,
            saveToPhotoGallery:true
        });
  	
 });