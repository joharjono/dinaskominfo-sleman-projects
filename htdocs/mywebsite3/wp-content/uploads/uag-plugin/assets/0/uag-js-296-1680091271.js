document.addEventListener("DOMContentLoaded", function(){ var ssLinks = document.querySelectorAll( '.uagb-block-04fd33b5' );
for ( var j = 0; j < ssLinks.length; j++ ) {
	var ssLink = ssLinks[j].querySelectorAll( ".uagb-ss__link" );
	for ( var i = 0; i < ssLink.length; i++ ) {
		ssLink[i].addEventListener( "click", function() {
			var social_url = this.dataset.href;
			var target = "";
			if( social_url == "mailto:?body=" ) {
				target = "_self";
			}
			var  request_url ="";
			if( social_url.indexOf("/pin/create/link/?url=") !== -1) {
				request_url = social_url + encodeURIComponent( window.location.href ) + "&media=" + '';
			}else{
				request_url = social_url + encodeURIComponent( window.location.href );
			}
			window.open( request_url, target );
		});
	}
}
window.addEventListener( 'load', function() {
	UAGBCounter.init( '.uagb-block-26ec6c51', {"layout":"number","heading":"Commercial Projects","numberPrefix":"","numberSuffix":"","startNumber":0,"endNumber":1280,"totalNumber":1420,"decimalPlaces":0,"animationDuration":2000,"thousandSeparator":",","circleSize":230,"circleStokeSize":8,"isFrontend":true} );
});
window.addEventListener( 'load', function() {
	UAGBCounter.init( '.uagb-block-a8a42b73', {"layout":"number","heading":"Residential Projects","numberPrefix":"","numberSuffix":"","startNumber":0,"endNumber":1420,"totalNumber":1420,"decimalPlaces":0,"animationDuration":2000,"thousandSeparator":",","circleSize":230,"circleStokeSize":8,"isFrontend":true} );
});
window.addEventListener( 'load', function() {
	UAGBCounter.init( '.uagb-block-44e87f62', {"layout":"number","heading":"Hard Working Employees","numberPrefix":"","numberSuffix":"+","startNumber":0,"endNumber":100,"totalNumber":1420,"decimalPlaces":0,"animationDuration":2000,"thousandSeparator":",","circleSize":230,"circleStokeSize":8,"isFrontend":true} );
});
window.addEventListener( 'load', function() {
	UAGBCounter.init( '.uagb-block-81282883', {"layout":"number","heading":"Happy Customers","numberPrefix":"","numberSuffix":"","startNumber":0,"endNumber":800,"totalNumber":1420,"decimalPlaces":0,"animationDuration":2000,"thousandSeparator":",","circleSize":230,"circleStokeSize":8,"isFrontend":true} );
});
 });