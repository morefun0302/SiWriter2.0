
require("org.urish.titanium.multitouch");

function delay(){

    // double click prevention
    if (new Date() -clickTime > 100) {    
 	codeA=0;codeB=0;codeC=0;codeD=0;codeE=0;letter_code=0;
 	//alert(new Date() -clickTime);
 	};	
};

win1.multitouch = true;

// Step 3: Add event listeners to the view
	win1.addEventListener('touchstart', function(event) {

	clickTime = new Date();
	for(var point in event.points) {
	
}	
	Button1.addEventListener('touchstart', function(e) {
	codeA=1;
	});
	Button2.addEventListener('touchstart', function(e) {
	codeB=2;
	});
	Button3.addEventListener('touchstart', function(e) {
	codeC=4;
	});
	Button4.addEventListener('touchstart', function(e) {
	codeD=8;
	});
	Button5.addEventListener('touchstart', function(e) {
	codeE=16;
	});     

});

win1.addEventListener('touchmove', function(event) {
	Ti.API.info(event);
	for(var point in event.points) {
		pointViews[point].center = {
			x : event.points[point].x,
			y : event.points[point].y
		};
	}
});

win1.addEventListener('touchend', function(event) {
	Ti.API.info(event);
	for(var point in event.points) {
		window.remove(pointViews[point]);
		delete pointViews[point];

	}
	
    letter_code=codeA+codeB+codeC+codeD+codeE;
	txtViewDesc.value+=keyMap[letter_code]; 
		delay();

});

win1.addEventListener('touchcancel', function(event) {
	Ti.API.info(event);

	for(var point in event.points) {


	}
});






Ti.App.addEventListener('webviewEvent', function(e) {
////***********************///DELETE sensor//
	if (e.text=="\b_") {  DEL=1;
txtViewDesc.value=txtViewDesc.value.substring(0, txtViewDesc.value.length-1);
	e.text="_";	}
//************************/END////DELETE sensor//
View_Size();
txtViewDesc.value=txtViewDesc.value.slice(0,-1);
  }); // end event listener 
win1.addEventListener('touchend', function(e) {
});


