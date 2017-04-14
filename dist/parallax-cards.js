/*
 *  parallax-cards - v1.1.0
 *  
 *  
 *
 *  Made by Chetan Patel
 *  Under MIT License
 */

;( function( $, window, document, undefined ) {

	'use strict';

		var pluginName = 'parallaxCards',
			defaults = {
				tolerance: 30
			};

		// The actual plugin constructor
		function Plugin ( element, options ) {
			this.element = element;
			this.$element = $( this.element );

			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend( Plugin.prototype, {
			init: function() {
				this.onMove = this.onMove.bind(this);
				this.onLeave = this.onLeave.bind(this);
				this.checkSettings();
				this.bindEvents();
			},
			onMove: function (e){
				 this.pageX = e.pageX || e.touches[0].pageX;
				 this.pageY = e.pageY || e.touches[0].pageY;

				 this.relativeX = (this.pageX  - this.$element.offset().left);
				 this.relativeY = (this.pageY - this.$element.offset().top);
				 this.calcX = Math.round( ( this.$element.height()/2 - this.relativeY ) / this.settings.tolerance );
				 this.calcY = Math.round( ( -this.$element.width()/2 + this.relativeX ) / this.settings.tolerance );

				 this.$element.css({
					  '-webkit-transform': 'rotateX(' + this.calcX +'deg) rotateY('+ this.calcY + 'deg)',
					  'transform': 'rotateX(' + this.calcX +'deg) rotateY('+ this.calcY + 'deg)',
					  'will-change': 'transform'
				 });
				 e.preventDefault();
			},
			onLeave: function() {
				 this.$element.css({
					  '-webkit-transform': 'rotateX(0deg) rotateY(0deg)',
					  'transform': 'rotateX(0deg) rotateY(0deg)',
					  'will-change': 'intial'
				 });
			},
			bindEvents: function() {
				window.addEventListener('resize', this.getDimensions);
				this.element.addEventListener('touchmove', this.onMove, false);
				this.element.addEventListener('touchend', this.onLeave, false);

				this.$element.on('mousemove', this.onMove);
				this.$element.on('mouseleave', this.onLeave);
			},
			getDimensions: function() {
				this.$element;
			},
			checkSettings: function() {
				if (this.settings.tolerance < 5){
					this.settings.tolerance = 5;
				}

				if (this.settings.tolerance < 100){
					this.settings.tolerance = 100;
				}
			}
		} );

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function( options ) {
			return this.each( function() {
				if ( !$.data( this, 'plugin_' + pluginName ) ) {
					$.data( this, 'plugin_' +
						pluginName, new Plugin( this, options ) );
				}
			} );
		};

} )( jQuery, window, document );
