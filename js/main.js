anime({
	targets: 'div.box',
	translateY: [
    { value: 250, duration: 300 },
    { value: 0, duration: 700 }
  	],
  	rotate: '1turn',
  	easing: 'easeInOutSine',
  	opacity: 1,
  	delay: function(el,i,l){return i * 300},
});



