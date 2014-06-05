var IndexModel = (function($){
	function init(){
		bindEvent();
	}
	
	function bindEvent(){
		$('.item-wrap').bind(
			'mouseenter',
			function(){
				var $this = $(this);
				
				$this.children('.overlay').fadeIn(300);
				
			}
		).bind(
			'mouseleave',
			function(){
				var $this = $(this);
				$this.children('.overlay').fadeOut(300);
			}
		);
	}
	
	return function(){
		this.init = function(){
			init();
		}
	}
})(jQuery);