ProgressBar
=========

ProgressBar is a highly customizable MooTools progress bar class that animates to the desired percentage and can be styled in any manner by CSS.

![Screenshot](http://davidwalsh.name/dw-content/progressbar.png)

How to Use
----------

ProgressBar can be initialized at any time but is generally initialized at the top of the document during the page's normal load.  There are no required arguments -- only options.
	
### HTML
	<div id="put-bar-here2"></div>
	
### Javascript
	var pb = new dwProgressBar({
		container: $('put-bar-here2'),
		startPercentage: 10,
		speed:1000,
		boxID: 'box2',
		percentageID: 'perc2',
		displayID: 'text',
		displayText: true,
		step:15,
		onComplete: function() {
			alert('Done!');
		},
		onChange: function() {
			alert('Changed!');
		}
	});

For specific usage and options, please read the documentation or visit [http://davidwalsh.name/js/progressbar](http://davidwalsh.name/js/progressbar)