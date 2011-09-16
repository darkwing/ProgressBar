Class: ProgressBar {#ProgressBar}
===========================================

ProgressBar is a highly customizable MooTools progress bar class that animates to the desired percentage and can be styled in any manner by CSS.

### Implements:

Events, Options




ProgressBar Method: constructor {#ProgressBar:constructor}
---------------------------------------------------------------------


### Syntax:

	var myProgressBar = new ProgressBar(options);

### Arguments:

1. options - (*object*)  Option key -> values for the ProgressBar instance

### Options:

* container - (*string*)  The progress bar's container ID.
* boxElement - (*string*)  The box's element selector that contains the progress bar.
* percentageElement - (*string*) The "percentage" element selector
* displayElement - (*string*)  The "display" element selector.
* startPercentage - (*integer*)  The percentage to start the progress bar at.
* displayText - (*boolean*, defaults to false)  Should the percentage be displayed as text?
* speed - (*integer*, defaults to 10)  The speed at which the progress bar should advance to the next percentage.
* step - (*integer*, defaults to 1)  The amount the progress bar should step each time if no step amount is given.
* allowMore - (*boolean*, defaults to false)  Should the progress bar be allowed to pass 100%?

### Events:

* onComplete -  Fires when the progress bar reaches 100%.
* onChange -  Fires each time the progress bar advances.


ProgressBar Method: set {#ProgressBar:set}
-----------------------------------------------------


### Syntax:

	progressbar.set(20)

### Arguments:

1. to - (*integer*)  Set the progress bar to the desired percentage.

2. immediate - (*boolean*)  If true the progressbar percentage is set by setStyle and is not animated.

ProgressBar Method: step {#ProgressBar:step}
-------------------------------------------------------

### Syntax:

	progressbar.step()
