/*
---
description:     ProgressBar

authors:
  - David Walsh (http://davidwalsh.name)

license:
  - MIT-style license

requires: [Core/Class.Extras, Core/Fx.Tween]

provides: 
  - ProgressBar
...
*/
var ProgressBar = new Class({

	//implements
	Implements: [Events, Options],

	//options
	options: {
		container: document.body,
		boxElement: 'div.progress-bar-box',
		percentageElement:'div.progress-bar-percentage',
		displayElement:'div.progress-bar-display',
		startPercentage: 0,
		displayText: false,
		speed:10,
		step:1,
		allowMore: false/*,
		onComplete: $empty,
		onChange: $empty*/
	},

	// initialization
	initialize: function(options) {
		//set options
		this.setOptions(options);
		//quick container
		this.options.container = document.id(this.options.container);
		//create elements
		this.createElements();
	},

	// creates the box and percentage elements
	createElements: function() {
		this.box = new Element(this.options.boxElement)
			.inject(this.options.container);
		this.perc = new Element(this.options.percentageElement, {
			style: 'width: 0px;'
		}).inject(this.box).set('tween', { 
			duration: this.options.speed,
			link:'cancel',
			onComplete: this.fxComplete.bind(this)
		});
		if(this.options.displayText) { 
			this.text = new Element(this.options.displayElement)
				.inject(this.container);
		}
		this.set(this.options.startPercentage);
	},

	// calculates width in pixels from percentage
	calculate: function(percentage) {
		return (this.box.getStyle('width').replace('px','') * (percentage / 100)).toInt();
	},

	// animates the change in percentage via fx or immediately
	set: function(to, immediate) {
		var run = false;
		this.to = to.toFloat();
		if(!this.options.allowMore && this.to > 100) 
			this.to = 100;
		this.perc.get('tween').cancel();
		var func = immediate ? 'setStyle' : 'tween';
		this.perc[func]('width', this.calculate(this.to));
		if (immediate) this.fxComplete();
		if(this.options.displayText) this.text.set('text', this.to + '%'); 
		return this;
	},
	
	// fx complete event
	fxComplete: function () {
		this.fireEvent('change',[this.to]);
		if(this.to >= 100) self.fireEvent('complete',[this.to]);
	},

	// steps a pre-determined percentage
	step: function() {
		this.set(this.to + this.options.step);
	},
	
	// use for document.id on an instance of ProgressBar
	toElement: function () {
		return this.box;
	}

});