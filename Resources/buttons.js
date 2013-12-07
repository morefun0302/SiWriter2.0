Ti.include ('KS_email2.js');
Ti.include ('file_saver.js');
Ti.include ('help.js');

var Button1 = Titanium.UI.createButton({
 title: "test 1",
 width: 100,
 height: 140,
 borderRadius:15,
 backgroundImage:'images/long_thin_button.png',
   top: 800,
   left: 180,
});

var Button2 = Titanium.UI.createButton({
 title: "test 2",
 width: 100,
 height: 140,
 borderRadius:15,
 backgroundImage:'images/long_thin_button.png',
   top: 600,
   left: 220,
});

var Button3 = Titanium.UI.createButton({
 title: "test 3",
 width: 100,
 height: 140,
 borderRadius:15,
 backgroundImage:'images/long_thin_button.png',
   top: 550,
   left: 350,
});

var Button4 = Titanium.UI.createButton({
 title: "test 4",
 width: 100,
 height: 140,
 borderRadius:15,
 backgroundImage:'images/long_thin_button.png',
   top: 550,
   left: 475,
});

var Button5 = Titanium.UI.createButton({
 title: "test 5",
 width: 100,
 height: 140,
 borderRadius:15,
 backgroundImage:'images/long_thin_button.png',
   top: 600,
   left: 600,
});
var smallHelpimages = Ti.UI.createImageView({
  //image:'/images/AllCodes.png',
  borderRadius:10,
});

var top_view = Ti.UI.createView({ /* email window */
	height : 35,

	width : 240,
	borderRadius:7,
	keyboardType : Ti.UI.KEYBOARD_EMAIL,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	backgroundImage:'images/Small_Screen.png',
});

// Create a TextField.
var aTextField = Ti.UI.createTextField({ });
aTextField.value = "Forwarding email"; 


var aTrailer = Ti.UI.createTextField({ 
	left:210,
	top:500,
	width:120,	
 	borderRadius:10,
 	backgroundColor:'#ffffff',
 	opacity:'0.7',
 	paddingTop:8,
 	paddingBottom:4,
 	paddingLeft:6,
 	paddingRight:6,
	editable:false, 
	});
	
aTrailer.value= "Short text view";

var PrivacyTitle = Ti.UI.createLabel({
  color: '#900',
  font: { fontSize:46 },
  shadowColor: '#aaa',
  shadowOffset: {x:5, y:5},
  text: 'SiWriter.co.uk',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  width: Ti.UI.SIZE, height: Ti.UI.SIZE,
  top: 100,
  left:34,
});


var smallHelpView =Ti.UI.createScrollView({
  borderRadius:10,
  width:310,
  contentHeight: 'auto',
  backgroundImage:'images/help_bg.png',
});

var openWebsiteButton = Titanium.UI.createButton({
 title: "Open SiWriter's website",
 width: 240,
 height: 34,
 borderRadius:15,
 backgroundImage:'images/long_thin_button.png',
});

var returnButton = Titanium.UI.createButton({
 title: 'Continue SiWriting',
 width: 240,
 height: 34,

 backgroundImage:'images/long_thin_button.png',
 borderRadius:15,
});


var settingsButton = Titanium.UI.createButton({
 title: 'Settings',
 width: 100,
 height: 34,

 backgroundImage:'images/long_thin_button.png',
 borderRadius:15,
});

settingsButton.font = { fontSize: 18};

var copyButton = Titanium.UI.createButton({
 title: 'Copy',
 width: 80,
 height: 40,
 right: 20,
 top: 40,
 backgroundImage:'images/mini_key.png',
 borderRadius: 20,

});

var ReviewButton = Titanium.UI.createButton({
 title: 'Review',
 width: 80,
 height: 40,

 backgroundImage:'images/mini_key.png',
 borderRadius: 20,
 enabled : false,

});

var clearButton = Titanium.UI.createButton({
 title: 'Clear',
 width: 80,
 height: 40,

 backgroundImage:'images/mini_key.png',
 borderRadius: 20,

});

var saveButton = Titanium.UI.createButton({
 title: 'Save',
 width: 80,
 height: 40,

 backgroundImage:'images/mini_key.png',
 borderRadius: 20,

});

var emailButton = Titanium.UI.createButton({
 title: 'e-mail',
 width: 80,
 height: 40,
 backgroundImage:'images/mini_key.png',
 borderRadius: 20,

});

var facebookButton =  Titanium.UI.createButton({
 title:"Facebook",
 width:80,
 height:40,
 backgroundImage:'images/mini_key.png',
 borderRadius: 20,

});

var pasteButton =  Titanium.UI.createButton({
 title:"Paste",
 width:80,
 height:40,
 backgroundImage:'images/mini_key.png',
 borderRadius: 20,

});


var timeStampButton =  Titanium.UI.createButton({
 title:"Time",
 width:80,
 height:40,
 backgroundImage:'images/smaller_button.png',
 borderRadius: 20,

});


	getOrientation();
	//DoOrientation(); 
help_WindowSwitcher();




//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
////////////portrait//////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////



function buttonvariablesPortrait(){

writeFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'saved_BGimageP.png');
image = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory+'saved_BGimageP.png');
win1.backgroundImage=image.nativePath;
    
    if(!writeFile .exists()){
		win1.backgroundImage='images/bg_image.png';
    } 
    
btnTakePhoto.top =840;
btnTakePhoto.left =20;

btnChoosePhoto.top =880;
btnChoosePhoto.left =20;


aTrailer.left = 210;
aTrailer.top=500;

 webview.top = 490;
 smallHelpView.top =20;
 smallHelpView.left =350;
 smallHelpView.height = 420;
 smallHelpView.width = 310;
 smallHelpView.contentHeight ='auto';
 smallHelpimages.width=300;

 help_BIGwindowSwitchLbl.left=80;
 help_BIGwindowSwitchLbl.top=690;
 help_BIGwindowSwitch.top=680;
 help_BIGwindowSwitch.left=20;

 help_windowSwitchLbl.left=80;
 help_windowSwitchLbl.top=750;
 help_windowSwitch.top=740;
 help_windowSwitch.left=20;

 help_lettersSwitchLbl.left=80;
 help_lettersSwitchLbl.top=810;
 help_lettersSwitch.top=800;
 help_lettersSwitch.left=20;

 openWebsiteButton.left = 460;
 openWebsiteButton.top =930;

 returnButton.left = 50;
 returnButton.top = 930;

 settingsButton.left = 648;
 settingsButton.top = 450;
 
 ReviewButton.right = 20;
 ReviewButton.top= 100;

 pasteButton.right = 20;
 pasteButton.top = 300;

 clearButton.right= 20;
 clearButton.top= 160;

//buttonvariablesPortrait.saveButton.right= 20;
//buttonvariablesPortrait.saveButton.top= 160;

 emailButton.right = 20;
 emailButton.top = 220;

 timeStampButton.right =20;
 timeStampButton.top = 380;

////Display Screen view///

 //view.width ="620";
 //view.height = "420";
 view.left = "40";

help_WindowSwitcher();


 txtViewDesc.width = "94%";
 //txtViewDesc.height = "400";
 //view.height = "400";	
 webview.width= "100%";
 webview.height = "550";
 webview.left ="0";
 webview.background = "url(images/Sized_AgendA_bg_bottom.png)";
 webview.bottom="-15";

 top_view.top = "450";
 top_view.left = "400";
}


/////////////////Landscape/////////////////////
/////////////////Landscape/////////////////////
/////////////////Landscape/////////////////////
/////////////////Landscape/////////////////////
/////////////////Landscape/////////////////////
/////////////////Landscape/////////////////////
/////////////////Landscape/////////////////////
/////////////////Landscape/////////////////////


function buttonvariablesLandscape(){

btnTakePhoto.top =410;
btnTakePhoto.left =20;

btnChoosePhoto.top =460;
btnChoosePhoto.left =20;

aTrailer.left = 360;
aTrailer.top = 450;


writeFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'saved_BGimageL.png');
image = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory+'saved_BGimageL.png');
win1.backgroundImage=image.nativePath;
    if(!writeFile .exists()){
		win1.backgroundImage='images/bg_image.png';
    } 

webview.top = 210;
webview.bottom = -20;
smallHelpView.top = 310;
smallHelpView.left = 20;
smallHelpView.width = 310;
smallHelpView.height = 420;
smallHelpView.contentHeight = 'auto';
smallHelpimages.width = 300;

help_BIGwindowSwitchLbl.top = 590;
help_BIGwindowSwitch.top = 550;
help_BIGwindowSwitch.left = 20;

help_windowSwitchLbl.top = 650;
help_windowSwitch.top = 620;
help_windowSwitch.left = 20;

help_lettersSwitchLbl.top = 710;
help_lettersSwitch.top = 680;
help_lettersSwitch.left = 20;

openWebsiteButton.left = 600;
openWebsiteButton.top = 680;

returnButton.left = 220;
returnButton.top = 680;

settingsButton.left = 370;
settingsButton.top = 43;

if(ReviewButton){ReviewButton.right = 140;}
if(ReviewButton){ReviewButton.top = 40;}

pasteButton.right = 140;
pasteButton.top = 40;

clearButton.right = 246;
clearButton.top = 40;

//buttonvariablesPortrait.saveButton.right= 20;
//buttonvariablesPortrait.saveButton.top= 160;

emailButton.right = 346;
emailButton.top = 40;

timeStampButton.top = 40;
timeStampButton.right = 446;

////Display Screen view///
//view.width = 310;
view.left = 20;
//view.height = 700;

help_WindowSwitcher();

txtViewDesc.width = "94%";
//txtViewDesc.height = 680;

view.height = 680;

webview.width = 720;
webview.left = 330;
webview.height = 550;
webview.left = 290;
webview.background = "none";
webview.background = "transparent";
webview.bottom = -15;

top_view.top = 100;
top_view.left = 760;
help_WindowSwitcher();
}
