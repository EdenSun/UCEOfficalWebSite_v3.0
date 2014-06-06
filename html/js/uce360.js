/*var Common = (function($){
	function init(){
		bindEvent();
	}
	
	function bindEvent(){
		
	}
	
	return function(){
		this.init = function(){
			init();
		}
	}
})(jQuery);
*/

var UCE = {};
$(document).ready(function(){
	UCE.initSwitchList();
	
});

UCE.initSwitchList = function(){
	$('.switch-list > li a').bind(
		'click',
		function(){
			var curHashVal = $(this).attr('href').substring(1);
			
			$('.switch-box').each(function(i,n){
				if( $(n).hasClass(curHashVal) ){
					$(n).removeClass('hide');
				}else{
					if( !$(n).hasClass('hide') ){
						$(n).addClass('hide');
					}
				}
			});
			
			return false;
		}
	);
}