var help_BIGwindowSwitch = Ti.UI.createSwitch({
  value:false, // mandatory property for iOS 
  top:670,
  left:20,
  titleOn:"Large Letter Code guide map displayed in writing area",
  titleOff:"Small Letter Code guide map is displayed",
  });

var help_BIGwindowSwitchLbl = Ti.UI.createLabel({
  color:"#000000",
  font: { fontSize:16 },
  text: 'Large Letter code map?',
  top:700,
  left:20,
});




var help_windowSwitch = Ti.UI.createSwitch({
  value:false, // mandatory property for iOS 
  top:740,
  left:20,
  titleOn:"Letter Code guide map displayed in writing area",
  titleOff:"Letter Code guide map is not displayed",
  });

var help_windowSwitchLbl = Ti.UI.createLabel({
  color:"#000000",
  font: { fontSize:16 },
  text: 'Letter code map?',
  top:770,
  left:20,
});


var help_lettersSwitch = Ti.UI.createSwitch({
  value:false, // mandatory property for iOS 
  top:800,
  left:20,
  titleOn:"Letter Code guide hints above finger pads are on",
  titleOff:"Letter Code guide hints above finger pads are off",
  color:"#000000",
});

var help_lettersSwitchLbl = Ti.UI.createLabel({
  color:"#000000",
  font: { fontSize:16 },
  top:830,
  left:20,
  text: 'Finger pad code hints ?',
});



    if (orientation=="portrait"){portrait();}
	if (orientation=="landscape"){landscape();} 



 var btnChoosePhoto = Ti.UI.createButton({
        width: 220,
        height: 35,
  font: { fontSize:16 },
        left:20,
        top:900,
        borderWidth:1,
        borderRadius:16,
        title: 'Select a background photo',
        color: '#000000',
        top: (Ti.Platform.displayCaps.platformHeight / 2),
        visible: true
    });

 var btnTakePhoto = Ti.UI.createButton({
        width: 220,
        height: 35,
  font: { fontSize:16 },
        borderWidth:1,
        borderRadius:16,
        title: 'Take a photo',
        color: '#000000',
        top: (Ti.Platform.displayCaps.platformHeight / 2),
        visible: true
    });