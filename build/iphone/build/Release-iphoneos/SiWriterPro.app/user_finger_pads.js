//  user_finger_pads.js
//  SiWriterPro1.0.0
//
//  Created by Simon Anthony initially 2014-01-25.
//  Copyright 2014 Simon Anthony. All rights reserved.
//

alt("ufp 8",0);
var Height = 0;
var Width = 0;
var Gap = 0;
var LRpos = 0;
var Twist = 0;
var UpDwn = 0;
var LRHL = 1;
var LRHP = 1;

//var LRH=1;

catchError(); 

//setTimeout(function(){  }, 100);   
//var HeightP=-10;defaults();

var	LRHpoffset = 0;
var	LRHloffset = 0;

/*
if (LRposP>4000){LRposP=0;alert(" LRposPvariable out of range");}
if (LRposL>800){LRposL=0;alert(" LRposL variable out of range");}
if (TwistP>800){TwistP=0;alert(" TwistP variable out of range");}
if (TwistL>800){TwistL=0;alert(" TwistL variable out of range");}
*/

alt("ufp line 34 ",0);
setTimeout(function(){  }, 40000); 
alt("ufp line 37 LRposL",LRposL);
if (LRposP>250){alert(" LRposP variable out of range "+LRposP);LRposP=0;do_update();}
if (LRposP<-250){alert(" LRposP variable out of range "+LRposP);LRposP=0;do_update();}
if (LRposL>250) {alert(" LRposL variable out of range "+LRposL);LRposL=0;do_update();}
if (LRposL<-250){alert(" LRposL variable out of range "+LRposL);LRposL=0;do_update();}

if (TwistP>250){alert(" TwistP variable out of range "+TwistP);TwistP=0;do_update();}
if (TwistP<-250){alert(" TwistP variable out of range "+TwistP);TwistP=0;do_update();}

if (TwistL>250){alert(" TwistL variable out of range "+TwistL); TwistL=0;do_update();}
if (TwistL<-250){alert(" TwistL variable out of range "+TwistL);TwistL=0;do_update();}

 
var Hide = true;
//alert("ufp line 51");

var FPPdisplay = false;


//initialise();
do_update();

			//alert("ufp line 59 ");


showvars("UFP 64");
//catchError(); 
function defaults() {//alert(HeightP);
//if (HeightP <0) {
	// Ti.API.info("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  HeightP at default func=" + HeightP);
	HeightP = 190;
	WidthP = 98;
	GapP = -2;
	LRposP = 2;
	TwistP = 0;
	UpDwnP = 140;
	//LRHP = 1;
	LRH = 1;
	HeightL = 195;
	WidthL = 91;
	GapL = -3;
	LRposL = 0;
	TwistL = 0;
	UpDwnL = 305;
//	}
}

var reset = false;

var globalArrayP = [];
var globalArrayL = [];

$(document).ready(function() {
	initTouch(touchStart, touchEnd, touchCancel);
});
//hide_sizers();
adjust_pads();
//;

// Ti.API.info("LRH !!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + LRH);

do_pad_fphelp(FPhelp);

Ti.App.removeEventListener('Do_help_lettersSwitch', function() {
});
			//alert("ufp line 103");

Ti.App.addEventListener('sizer_switch_change', function(e) {
showvars("UFP 108 sizer_switch_change");
	Hide = !e.slider;
	if (Hide) {
		sizers.style.display = "none";
	} else {
		sizers.style.display = "block";
	}
});

///////////////// FROM APP///////////////////////////////////////////
Ti.App.removeEventListener('initialise', function(e) {
});

Ti.App.addEventListener('initialise', function(e) {
	//// Ti.API.info("initialise recieved !!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
	// Ti.API.info("initialise recieved  LRH !!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" + LRH);

	//recover_settings -For Next ENDSrecover_settings -For Next ENDSalert("start app"+start);
	//initialise();
});

Ti.App.removeEventListener("app:LRH", function(e) {
});
Ti.App.addEventListener("app:LRH", function(e) {
	LRH = e.LRH;
});

Ti.App.removeEventListener("app:orientation", function(e) {
});
Ti.App.addEventListener("app:orientation", function(e) {
	HTMLorientation = e.orientation;
	initialise();
	do_update();
});






function initialise() {		


	if (HTMLorientation == "portrait") {
		//appContainer.style.padding = "70px 0px 0px 0px";

		UpDwn = UpDwnP;
		Height = HeightP;
		Gap = GapP;
		Width = WidthP;
		LRpos = LRposP;
		Twist - TwistP;
	}

	if (HTMLorientation == "landscape") {
		//appContainer.style.padding = "170px 0px 0px 0px";
		UpDwn = UpDwnL;
		Height = HeightL;
		Gap = GapL;
		Width = WidthL;
		LRpos = LRposL;
		Twist - TwistL;

	}
}

////////////////////////////////////////////////////////////
function do_update() {
showvars("DO UPDATE 185");
	if (HTMLorientation == 'portrait') {
		UpDwn = UpDwnP;
		Height = HeightP;
		Gap = GapP;
		Width = WidthP;
		LRpos = LRposP + LRHpoffset;
		Twist - TwistP;
		sizerholder.style.top = "72px";
		//alert("ufp line 203 sizerholder ="+ sizerholder.style.top);
		chordKeyboard_id.style.margin = UpDwn + "px 0px 0px 0px";
		//appContainer.style.margin = "0px 0px 0px " + LRposPL + "px";
		document.getElementById("finger_pads").setAttribute("style", "-webkit-transform:translateX(" + LRpos + "px) scale(" + LRH + ",1) rotate(" + TwistP + "deg)");
		do_pad_height();
		do_pad_width();
		do_pad_Gap();
		Ti.App.fireEvent('Handedness', {
			LRH : LRH
		});
		sizerholder.style.left = "10px";
			//alert("ufp line 213 ="+ LRposL);

	}

	if (HTMLorientation == 'landscape') {
		UpDwn = UpDwnL;
		Height = HeightL;
		Gap = GapL;
		Width = WidthL;
		LRpos = LRposL + LRHloffset;
		Twist - TwistL;
		adjust_pads();
		sizerholder.style.top = "270px";
		chordKeyboard_id.style.margin = UpDwn + "px 0px 0px 0px";
		//appContainer.style.margin = "0px 0px 0px " + LRposL + "px";
		document.getElementById("finger_pads").setAttribute("style", "-webkit-transform:translateX(" + LRpos + "px) scale(" + LRH + ",1) rotate(" + TwistL + "deg)");
		do_pad_height();
		do_pad_width();
		do_pad_Gap();
		Ti.App.fireEvent('Handedness', {
			LRH : LRH
		});
		if (LRH == -1) {
			sizerholder.style.left = "-820px";
		} else {
			sizerholder.style.left = "10px";
		}

showvars("UPDATE DONE 235");
	}

	// Ti.API.info("update done");
	//////////////

};

////////////////////send to APP /////////////////////////////////
//Ti.App.fireEvent('app:fromWebView', { message: 'event fired from WebView, handled in Titanium' });
////////////////////////////////////////////////////////////
Ti.App.removeEventListener('sizer_switch_change', function(e) {
});

Ti.App.removeEventListener('help_lettersSwitch_change', function(e) {
});

Ti.App.addEventListener('help_lettersSwitch_change', function(e) {
	FPhelp = e.FPhelp;
	// Ti.API.info('SW- Switch FPhelp: ' + FPhelp);
	do_pad_fphelp(FPhelp);
	catchError();
});

setupKeys();
get_user_settings();
//main loop ! ??
adjust_pads();
drawHelpers();
focusTFC(this);
set_pad_data();
// end loop

function adjust_pads() {

	/////////////////     CLOSE      ///////////////////
	/////////////////     CLOSE      ///////////////////
	/////////////////     CLOSE      ///////////////////

	did("close_display").onTouchDown = function(info) {
		//Ti.App.fireEvent('sizer_switched_off');
		Ti.App.fireEvent('sizer_switched_off', {
			slider : false
		});
		// Ti.API.info("sizer_switched_off triggered");

	};

	/////////////////     RESET      ///////////////////
	/////////////////     RESET      ///////////////////
	/////////////////     RESET      ///////////////////

	did("reset_pads").onTouchDown = function(info) {
		var r = confirm("'Do you really want to reset the finger pad positions?'");
		if (r == true) {
			Twist = 0;
			TwistL = 0;
			TwistP = 0;
			LRHP = 1;
			LRHL = 1;
			LRH = 1;
			document.getElementById("finger_pads").setAttribute("style", "-webkit-transform:translateX(" + LRpos + "px) scale(" + LRH + ",1) rotate(" + Twist + "deg)");
			flip_helper_text();
			defaults();
			do_update();
		};

		// Ti.API.info("pad data rest");

	};

	/////////////////       HANDED      ///////////////////
	/////////////////       HANDED      ///////////////////
	/////////////////       HANDED      ///////////////////

	did("Lhanded").onTouchDown = function(info) {
		if (LRH != -1) {
			LRH = -1;
			do_lefthanded(LRH);
			Ti.App.fireEvent('app:LRHtrigger', {LRH: LRH});
			do_update();
		}
	};

	did("Rhanded").onTouchDown = function(info) {
		if (LRH != 1) {
			LRH = 1;
			do_righthanded(LRH);
			Ti.App.fireEvent('app:LRHtrigger', {LRH: LRH});
			do_update();
		}
	};

	/////////////////       TWIST      ///////////////////
	/////////////////       TWIST      ///////////////////
	/////////////////       TWIST      ///////////////////

	did("amountT").onTouchDown = function(info) {
		if (HTMLorientation == 'portrait') {
			TwistP -= 3;
			Twist = TwistP;
			twist(Twist);
			Ti.App.fireEvent('app:TwistPtrigger', {TwistP: TwistP});
		} else {
			TwistL -= 3;
			Twist = TwistL;
			twist(Twist);
			Ti.App.fireEvent('app:TwistLtrigger', {TwistL: TwistL});
		}
	};

	did("DamountT").onTouchDown = function(info) {

		if (HTMLorientation == 'portrait') {
			TwistP += 3;
			Twist = TwistP;
			twist(Twist);
			Ti.App.fireEvent('app:TwistPtrigger', {TwistP: TwistP});

		} else {
			TwistL += 3;
			Twist = TwistL;
			twist(Twist);
			Ti.App.fireEvent('app:TwistLtrigger', {TwistL: TwistL});
		}
	};

	///////////////////////////////////////////////////////

	///////////////// LRpos LEFT RIGHT      ///////////////
	/////////////////       LEFT RIGHT      ///////////////
	/////////////////       LEFT RIGHT      ///////////////

	did("amountP").onTouchDown = function(info) {
		if (HTMLorientation == 'portrait') {
			LRposP += 4;
			LRpos = LRposP + LRHpoffset;
			//alert("ufp line 370 ="+ LRposP);
			Ti.App.fireEvent('app:LRposPtrigger', {LRposP: LRposP});
		} else {
			LRposL += 4;
			LRpos = LRposL + LRHloffset;
			Ti.App.fireEvent('app:LRposLtrigger', {LRposL: LRposL});
		};
		do_pad_LRpos();
	};

	did("DamountP").onTouchDown = function(info) {
		if (HTMLorientation == 'portrait') {
			LRposP -= 4;
			LRpos = LRposP + LRHpoffset;
			Ti.App.fireEvent('app:LRposPtrigger', {LRposP: LRposP});

		} else {
			LRposL -= 4;
			LRpos = LRposL + LRHloffset;
			Ti.App.fireEvent('app:LRposLtrigger', {LRposL: LRposL});

		};
		// Ti.API.info(orientation + "--------------------LRposL =" + LRposL);

		do_pad_LRpos();
		// Ti.API.info(orientation + "--------------------LRposL =" + LRposL);

	};

	///////////////////////////////////////////////////////

	/////////////////     UP Down      ///////////////////
	/////////////////     UP Down      ///////////////////
	/////////////////     UP Down      ///////////////////

	did("amountU").onTouchDown = function(info) {
		if (HTMLorientation == 'portrait') {
			UpDwnP -= 5;
			UpDwn = UpDwnP;
						Ti.App.fireEvent('app:UpDwnPtrigger', {UpDwnP: UpDwnP});

		} else {
			UpDwnL -= 5;
			UpDwn = UpDwnL;
						Ti.App.fireEvent('app:UpDwnLtrigger', {UpDwnL: UpDwnL});

		};
		do_pad_updwn();

	};

	did("DamountU").onTouchDown = function(info) {
		if (HTMLorientation == 'portrait') {
			UpDwnP += 5;
			UpDwn = UpDwnP;
						Ti.App.fireEvent('app:UpDwnPtrigger', {UpDwnP: UpDwnP});

		} else {
			UpDwnL += 5;
			UpDwn = UpDwnL;
						Ti.App.fireEvent('app:UpDwnLtrigger', {UpDwnL: UpDwnL});

		};
		do_pad_updwn();

	};

	///////////////////////////////////////////////////////

	/////////////////       Height      ///////////////////
	/////////////////       Height      ///////////////////
	/////////////////       Height      ///////////////////

	did("amountH").onTouchDown = function(info) {

		if (HTMLorientation == 'portrait') {
			//HeightP= parseInt("HeightP"); ;
			//alert(HeightP);
			HeightP += 4;
			Height = HeightP;
			Ti.App.fireEvent('app:HeightPtrigger', {HeightP: HeightP});

		} else {
			HeightL += 4;
			Height = HeightL;
			Ti.App.fireEvent('app:HeightLtrigger', {HeightL: HeightL});

		};
		do_pad_height();
		do_save_pad_state_hP(Height);
	};
	did("DamountH").onTouchDown = function(info) {
		if (HTMLorientation == 'portrait') {
			HeightP -= 4;
			Height = HeightP;
			Ti.App.fireEvent('app:HeightPtrigger', {HeightP: HeightP});

		} else {
			HeightL -= 4;
			Height = HeightL;
			Ti.App.fireEvent('app:HeightLtrigger', {HeightL: HeightL});
		};
		do_pad_height();
	};

	//////////////////////////////////////////////////////

	/////////////////       Width      ///////////////////
	/////////////////       Width      ///////////////////
	/////////////////       Width      ///////////////////

	did("amountW").onTouchDown = function(info) {
		if (HTMLorientation == 'portrait') {
			WidthP += 2;
			Width = WidthP;
			Ti.App.fireEvent('app:WidthPtrigger', {WidthP: WidthP});
		} else {
			WidthL += 2;
			Width = WidthL;
			Ti.App.fireEvent('app:WidthLtrigger', {WidthL: WidthL});
		};
		do_pad_width();
		do_save_pad_state_wP(Width);
	};

	did("DamountW").onTouchDown = function(info) {
		if (HTMLorientation == 'portrait') {
			WidthP -= 2;
			Width = WidthP;
			Ti.App.fireEvent('app:WidthPtrigger', {WidthP: WidthP});

		} else {
			WidthL -= 2;
			Width = WidthL;
			Ti.App.fireEvent('app:WidthLtrigger', {WidthL: WidthL});
		};
		do_pad_width();
		do_save_pad_state_wL(Width);
	};

	////////////////////////////////////////////////////

	/////////////////       Gap      ///////////////////
	/////////////////       Gap      ///////////////////
	/////////////////       Gap      ///////////////////

	did("amountS").onTouchDown = function(info) {
		if (HTMLorientation == 'portrait') {
			GapP += 1;
			Gap = GapP;
						Ti.App.fireEvent('app:GapPtrigger', {GapP: GapP});

		} else {
			GapL += 1;
			Gap = GapL;
						Ti.App.fireEvent('app:GapLtrigger', {GapL: GapL});

		};
		do_pad_Gap();
		do_save_pad_state_gP(Gap);
	};

	did("DamountS").onTouchDown = function(info) {
		if (HTMLorientation == 'portrait') {
			GapP -= 1;
			Gap = GapP;
						Ti.App.fireEvent('app:GapPtrigger', {GapP: GapP});

		} else {
			GapL -= 1;
			Gap = GapL;
						Ti.App.fireEvent('app:GapLtrigger', {GapL: GapL});

		};
		do_pad_Gap();
		do_save_pad_state_gL(Gap);
	};

	///////////////////////////////////////////////////////
	// Ti.API.info("RESET at end of Pads update//////////////////" + reset);

}

function do_righthanded(LRH) {
	LRHpoffset = 0;
	LRHloffset = 0;


	// RIGHT HANDED - Default
	blank_helper_text();
	Ti.App.fireEvent('help_switched_off', {
		slider : false
	});
	if (HTMLorientation == 'portrait') {
		document.getElementById("finger_pads").setAttribute("style", "-webkit-transform:translateX(" + LRpos + "px) scale(" + LRH + ",1) rotate(" + TwistP + "deg)");
		LRHP = 1;
		//Right handed Portrait
		LRH = LRHP;
		handed(LRH);
		LRHpoffset = 0;
	} else {
		LRHL = 1;
		//Right handed Landscape
		LRH = LRHL;
		handed(LRH);
		LRHloffset = 0;
	}
	document.getElementById("finger_pads").setAttribute("style", "-webkit-transform:translateX(" + LRpos + "px) scale(" + LRH + ",1) rotate(" + TwistL + "deg)");
	flip_helper_text();	do_save_pad_state_lrh(LRH);
};

function do_lefthanded(LRH) {
	LRHpoffset = -196;
	LRHloffset = -450;

	LRH = -1;
	// LEFT HANDED
	blank_helper_text();
	Ti.App.fireEvent('help_switched_off', {
		slider : false
	});
	if (orientation * -1 != 90) {
		HTMLorientation = "portrait";

		LRHP = -1;
		//alert("HTMLorientation = "+HTMLorientation);
		//LEFT handed Portrait
		LRH = LRHP;
				document.getElementById("finger_pads").setAttribute("style", "-webkit-transform:translateX(" + LRpos + "px) scale(" + LRH + ",1) rotate(" + TwistP + "deg)");
	} else {
		//HTMLorientation="landscape";
		LRHL = -1;
		//LEFT handed Landscape
		LRH = LRHL + LRHloffset;
	}
	document.getElementById("finger_pads").setAttribute("style", "-webkit-transform:translateX(" + LRpos + "px) scale(" + LRH + ",1) rotate(" + TwistL + "deg)");
	document.getElementById("h0").setAttribute("style", "-webkit-transform:scale(-1,1);");
	document.getElementById("h1").setAttribute("style", "-webkit-transform:scale(-1,1);");
	document.getElementById("h2").setAttribute("style", "-webkit-transform:scale(-1,1);");
	document.getElementById("h3").setAttribute("style", "-webkit-transform:scale(-1,1);");
	document.getElementById("h4").setAttribute("style", "-webkit-transform:scale(-1,1);");
	document.getElementById("h5").setAttribute("style", "-webkit-transform:scale(-1,1);");
	document.getElementById("h6").setAttribute("style", "-webkit-transform:scale(-1,1);");
	document.getElementById("h7").setAttribute("style", "-webkit-transform:scale(-1,1);");
	document.getElementById("hsymbols").setAttribute("style", "-webkit-transform:scale(-1,1);");
	document.getElementById("hunums").setAttribute("style", "-webkit-transform:scale(-1,1);");

	do_save_pad_state_lrh(LRH);
};

function do_pad_fppdisplay() {
	if (FPPDisplay) {
		sizers.style.display = "none";
	}
	if (!FPPDisplay) {
		sizers.style.display = "block";
	}
	do_save_pad_state_fpp(FPPDisplay);
};

function do_pad_fphelp(FPhelp) {

	if (!FPhelp) {
		blank_helper_text();
	}

	if (FPhelp) {
		h0.style.display = "block";
		h1.style.display = "block";
		h2.style.display = "block";
		h3.style.display = "block";
		h4.style.display = "block";
		h5.style.display = "block";
		h6.style.display = "block";
		h7.style.display = "block";
		hsymbols.style.display = "block";
		hunums.style.display = "block";
	}

	// Ti.API.info("ufp line 464 do_pad_fphelp:-" + FPhelp);
	do_save_pad_state_fph(FPhelp);
				if ((FPhelp) === true){
					//alert("False ? FPhelp ="+FPhelp);
				$("#k0").addClass("chordKeywLG");
				$("#k1").addClass("chordKeywLG");
				$("#k2").addClass("chordKeywLG");
				$("#k3").addClass("chordKeywLG");
				$("#k4").addClass("chordKeywLG");
			} else {
				//alert("true ? FPhelp ="+FPhelp);

				$("#k0").removeClass("chordKeywLG");				
				$("#k1").removeClass("chordKeywLG");				
				$("#k2").removeClass("chordKeywLG");				
				$("#k3").removeClass("chordKeywLG");				
				$("#k4").removeClass("chordKeywLG");					
			}	
};

function do_save_pad_state_fph(FPhelp) {
	Ti.App.fireEvent('FPhelp', {
		FPhelp : FPhelp
	});
	// Ti.API.info("fphelp variable sent as fired event by User_FingerPads.js  " + FPhelp);
}

function do_save_pad_state_hP(HeightP) {
	Ti.App.fireEvent('HeightP', {
		HeightP : HeightP
	});
	// Ti.API.info("heightP variable sent as fired event by User_FingerPads.js  " + HeightP);
}



function do_save_pad_state_wP(WidthP) {
	Ti.App.fireEvent('WidthP', {
		WidthP : WidthP
	});
	// Ti.API.info("widthp variable sent as fired event by User_FingerPads.js  " + WidthP);
}

function do_save_pad_state_wL(WidthL) {
	Ti.App.fireEvent('WidthL', {
		WidthL : WidthL
	});
	// Ti.API.info("widthL variable sent as fired event by User_FingerPads.js  " + WidthL);
}

function do_save_pad_state_gP(GapP) {
	Ti.App.fireEvent('GapP', {
		GapP : GapP
	});
	// Ti.API.info("GapP variable sent as fired event by User_FingerPads.js  " + GapP);
}

function do_save_pad_state_gL(GapL) {
	Ti.App.fireEvent('GapL', {
		GapL : GapL
	});
	// Ti.API.info("GapL variable sent as fired event by User_FingerPads.js  " + GapL);
}

function do_save_pad_state_fpp(FPPDisplay) {
	Ti.App.fireEvent('FPPDisplay', {
		FPPDisplay : FPPDisplay
	});
}

function do_save_pad_state_pP(LRposP) {
	Ti.App.fireEvent('LRposP', {
		LRposP : LRpos
	});
	// Ti.API.info("LRposP variable sent as fired event by User_FingerPads.js  " + LRposP);
}

function do_save_pad_state_pL(LRposL) {
	Ti.App.fireEvent('LRposL', {
		LRposL : LRposL
	});
	// Ti.API.info("LRposL variable sent as fired event by User_FingerPads.js  " + LRposL);
}

function do_save_pad_state_lrh(LRH) {
}

// Ti.App.fireEvent('Handedness', {
// LRH : LRH
// });
// // Ti.API.info("LRH SEEN AT BUTTONS fired event by User_FingerPads.js  " + LRH);
// }

function do_save_pad_state_t(Twist) {
	Ti.App.fireEvent('Twist', {
		Twist : Twist
	});
	// Ti.API.info("Twist variable sent as fired event by User_FingerPads.js  " + Twist);
}

function do_save_pad_state_uP(UpDwnP) {
	Ti.App.fireEvent('UpDwnP', {
		UpDwnP : UpDwnP
	});
	// Ti.API.info("UpDwnP variable sent as fired event by User_FingerPads.js  " + UpDwnP);
}

function do_save_pad_state_uL(UpDwnL) {
	Ti.App.fireEvent('UpDwnL', {
		UpDwnL : UpDwnL
	});
	// Ti.API.info("UpDwnL variable sent as fired event by User_FingerPads.js  " + UpDwnL);
}

function get_user_settings() {
	// Ti.API.info("get_user_settings CALLED");

	// Ti.API.info("get_user_settings ENDED OK");

}

function do_pad_LRpos() {
	if (HTMLorientation === 'portrait') {
		Twist = TwistP;
		LRpos = LRposP + LRHpoffset;
	}
	if (HTMLorientation === 'landscape') {
		Twist = TwistL;
		LRpos = LRposL + LRHloffset;

	}


	document.getElementById("finger_pads").setAttribute("style", "-webkit-transform:translateX(" + LRpos + "px) scale(" + LRH + ",1) rotate(" + Twist + "deg)");

};

function do_pad_Gap() {

	k0.style.margin = "0px 0px 0px " + Gap + "px";
	k1.style.margin = "0px 0px 0px " + Gap + "px";
	k2.style.margin = "0px 0px 0px " + Gap + "px";
	k3.style.margin = "0px 0px 0px " + Gap + "px";
	k4.style.margin = "0px 0px 0px " + Gap + "px";
	k5.style.margin = "0px 0px 0px " + Gap + "px";
	k6.style.margin = "0px 0px 0px " + Gap + "px";

}

function do_pad_width() {
	k0.style.width = Width + "px";
	k1.style.width = Width + "px";
	k2.style.width = Width + "px";
	k3.style.width = Width + "px";
	k4.style.width = Width + "px";
	k5.style.width = (2 * Width) + "px";
	k6.style.width = Width + "px";
	k7.style.width = Width + "px";
	UpperNums.style.width = Width + "px";
	Symbols.style.width = Width + "px";
}

function do_pad_height() {
	k0.style.height = Height + "px";
	k1.style.height = Height + "px";
	k2.style.height = Height + "px";
	k3.style.height = Height + "px";
	k4.style.height = Height + "px";
	k5.style.height = (Height * 0.25) + "px";
	k6.style.height = Height + "px";
	k7.style.height = (Height * 0.5) + "px";
	UpperNums.style.height = (Height * 0.5) + "px";
	Symbols.style.height = (Height * 0.5) + "px";


	if (Height < 0) {

	}
}

function do_pad_updwn() {

	if (HTMLorientation == 'portrait') {
		UpDwn = UpDwnP;
		chordKeyboard_id.style.margin = UpDwn + "px 0px 0px 0px";
	}
	if (HTMLorientation == 'landscape') {
		UpDwn = UpDwnL;
		chordKeyboard_id.style.margin = UpDwn + "px 0px 0px 0px";
	}

}

function flip_helper_text() {
	document.getElementById("h0").setAttribute("style", "-webkit-transform:scale(1,1);");
	document.getElementById("h1").setAttribute("style", "-webkit-transform:scale(1,1);");
	document.getElementById("h2").setAttribute("style", "-webkit-transform:scale(1,1);");
	document.getElementById("h3").setAttribute("style", "-webkit-transform:scale(1,1);");
	document.getElementById("h4").setAttribute("style", "-webkit-transform:scale(1,1);");
	document.getElementById("h5").setAttribute("style", "-webkit-transform:scale(1,1);");
	document.getElementById("h6").setAttribute("style", "-webkit-transform:scale(1,1);");
	document.getElementById("h7").setAttribute("style", "-webkit-transform:scale(1,1);");
	document.getElementById("hsymbols").setAttribute("style", "-webkit-transform:scale(1,1);");
	document.getElementById("hunums").setAttribute("style", "-webkit-transform:scale(1,1);");
}

function blank_helper_text() {
	h0.style.display = "none";
	h1.style.display = "none";
	h2.style.display = "none";
	h3.style.display = "none";
	h4.style.display = "none";
	h5.style.display = "none";
	h6.style.display = "none";
	h7.style.display = "none";
	hsymbols.style.display = "none";
	hunums.style.display = "none";
}

function catchError(){
showvars("ufp 869 catch error");

/* Ensure correct variable type - ie, not a string ! */

if (typeof HeightP === "string") {HeightP= parseInt(HeightP);}//alert("was a string "+HeightP);}
if (typeof HeightL === "string") {HeightL= parseInt(HeightL); }//alert("was a string "+HeightL);}
if (typeof WidthL === "string") {WidthL= parseInt(WidthL);}//alert("was a string "+WidthL);}
if (typeof WidthP === "string") {WidthP= parseInt(WidthP); }//alert("was a string "+WidthP);}
if (typeof GapP === "string") {GapP= parseInt(GapP);}//alert("was a string "+GapP);}
if (typeof GapL === "string") {GapL= parseInt(GapL); }//alert("was a string "+GapP);}
if (typeof GapP === "string") {GapP= parseInt(GapP);}// alert("was a string "+GapP);}
if (typeof GapL === "string") {GapL= parseInt(GapL); }//alert("was a string "+GapP);}
if (typeof UpDwnP === "string") {UpDwnP= parseInt(UpDwnP);}// alert("was a string "+UpDwnP);}
//alert(typeof UpDwnL);
if (typeof UpDwnL === "int") {UpDwnL= parseInt(UpDwnL);}// alert("UpDwnL was a string "+UpDwnL);}
if (typeof TwistP === "string") {TwistP= parseInt(TwistP);}// alert("was a string "+TwistP);}
if (typeof TwistL === "string") {TwistL= parseInt(TwistL);}// alert("was a string "+TwistL);}
//alert(typeof LRposP);
if (typeof LRposP === "string") {LRposP = parseInt(LRposP);}// alert("LRposP was a string "+LRposP);}
if (typeof LRposL === "string") {LRposL = parseInt(LRposL); }//alert("was a string "+LRposL);}
if (HeightP===0){defaults();}
 }
 
 
 function showvars(LN){
 Ti.API.info(LN+"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
var recovered1 = "UFP HeightP "+HeightP +" HeightL="+HeightL+" WidthP="+WidthP+" WidthL="+WidthL+" GapP="+GapP+" GapL="+GapL;
var recovered2= " UpDwnP="+UpDwnP+" UpDwnL="+UpDwnL+" LRposP="+LRposP+" LRposL="+LRposL+" TwistP="+TwistP+" TwistL="+TwistP+" LRH="+LRH+" LRHpoffset="+LRHpoffset+" LRHloffset="+LRHloffset;
Ti.API.info(recovered1);
Ti.API.info(recovered2);
}

function alt(LN,v){}/*

	alert(LN+"="+v);
}*/

