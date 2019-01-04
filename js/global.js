(function($){
	STNTool = {
		url: {},
		shortcodes: {},
		string: {}
	};
	STNTool.string.stripslashes = function(str) {
	  //       discuss at: http://phpjs.org/functions/stripslashes/
	  //      original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  //      improved by: Ates Goral (http://magnetiq.com)
	  //      improved by: marrtins
	  //      improved by: rezna
	  //         fixed by: Mick@el
	  //      bugfixed by: Onno Marsman
	  //      bugfixed by: Brett Zamir (http://brett-zamir.me)
	  //         input by: Rick Waldron
	  //         input by: Brant Messenger (http://www.brantmessenger.com/)
	  // reimplemented by: Brett Zamir (http://brett-zamir.me)
	  //        example 1: stripslashes('Kevin\'s code');
	  //        returns 1: "Kevin's code"
	  //        example 2: stripslashes('Kevin\\\'s code');
	  //        returns 2: "Kevin\'s code"
	
	  return (str + '')
	    .replace(/\\(.?)/g, function(s, n1) {
	      switch (n1) {
	        case '\\':
	          return '\\';
	        case '0':
	          return '\u0000';
	        case '':
	          return '';
	        default:
	          return n1;
	      }
	    });
	};
	STNTool.string.htmlspecialchars = function(string, quote_style, charset, double_encode) {
	  //       discuss at: http://phpjs.org/functions/htmlspecialchars/
	  //      original by: Mirek Slugen
	  //      improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  //      bugfixed by: Nathan
	  //      bugfixed by: Arno
	  //      bugfixed by: Brett Zamir (http://brett-zamir.me)
	  //      bugfixed by: Brett Zamir (http://brett-zamir.me)
	  //       revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  //         input by: Ratheous
	  //         input by: Mailfaker (http://www.weedem.fr/)
	  //         input by: felix
	  // reimplemented by: Brett Zamir (http://brett-zamir.me)
	  //             note: charset argument not supported
	  //        example 1: htmlspecialchars("<a href='test'>Test</a>", 'ENT_QUOTES');
	  //        returns 1: '&lt;a href=&#039;test&#039;&gt;Test&lt;/a&gt;'
	  //        example 2: htmlspecialchars("ab\"c'd", ['ENT_NOQUOTES', 'ENT_QUOTES']);
	  //        returns 2: 'ab"c&#039;d'
	  //        example 3: htmlspecialchars('my "&entity;" is still here', null, null, false);
	  //        returns 3: 'my &quot;&entity;&quot; is still here'
	
	  var optTemp = 0,
	    i = 0,
	    noquotes = false;
	  if (typeof quote_style === 'undefined' || quote_style === null) {
	    quote_style = 2;
	  }
	  string = string.toString();
	  if (double_encode !== false) { // Put this first to avoid double-encoding
	    string = string.replace(/&/g, '&amp;');
	  }
	  string = string.replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;');
	
	  var OPTS = {
	    'ENT_NOQUOTES': 0,
	    'ENT_HTML_QUOTE_SINGLE': 1,
	    'ENT_HTML_QUOTE_DOUBLE': 2,
	    'ENT_COMPAT': 2,
	    'ENT_QUOTES': 3,
	    'ENT_IGNORE': 4
	  };
	  if (quote_style === 0) {
	    noquotes = true;
	  }
	  if (typeof quote_style !== 'number') { // Allow for a single string or an array of string flags
	    quote_style = [].concat(quote_style);
	    for (i = 0; i < quote_style.length; i++) {
	      // Resolve string input to bitwise e.g. 'ENT_IGNORE' becomes 4
	      if (OPTS[quote_style[i]] === 0) {
	        noquotes = true;
	      } else if (OPTS[quote_style[i]]) {
	        optTemp = optTemp | OPTS[quote_style[i]];
	      }
	    }
	    quote_style = optTemp;
	  }
	  if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
	    string = string.replace(/'/g, '&#039;');
	  }
	  if (!noquotes) {
	    string = string.replace(/"/g, '&quot;');
	  }
	
	  return string;
	};
	STNTool.url.getVar = function(url) {
        var vars = {},
            parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
                vars[key] = value;
            });
        return vars;
    };
    
    STNTool.video = {};
    STNTool.video.scale = function(ele, ratio){
    	var new_width = ele.width(),
	        new_height = ele.height();
	        if(!ratio){
	            ratio = 16/9;
	        }
	        if(new_width /(new_height*ratio) < 1){
	            margin_left = ( new_width - Math.ceil(new_height*ratio) ) / 2 ,
	            margin_top = 0 ,
	            new_width = Math.ceil(new_height*ratio) ;
	        }else{
	            margin_left = 0,
	            margin_top = ( new_height - Math.ceil(new_width/ratio) ) / 2 ,
	            new_height = Math.ceil(new_width/ratio) ;
	        }
	    return {
	        new_width: new_width,
	        new_height: new_height,
	        margin_left: margin_left,
	        margin_top: margin_top
	    };
    };
    STNTool.number = {};
    STNTool.number.uid = function (){
    	return (Math.random() + '').replace('0.', '');
    };
    STNTool.scroll = {};
    STNTool.scroll.end = function(el, callback, duration){
    	var duration = (typeof duration != 'undefined') ? duration : 500,
    	uid = STNTool.number.uid();
    	el.scroll(function(){
    		clearTimeout(jQuery.data(this, uid));
		    jQuery.data(this, uid, setTimeout(function() {
		        callback();
		    }, duration));
		}); 
    };
    STNTool.resize = {};
    STNTool.resize.end = function(el, callback, duration){
    	var duration = (typeof duration != 'undefined') ? duration : 500,
    	uid = STNTool.number.uid();
    	el.resize(function(){
       		clearTimeout(jQuery.data(this, uid));
		    jQuery.data(this, uid, setTimeout(function() {
		        callback();
		    }, duration));
		}); 
    };
    STNTool.onEvent = {};
    STNTool.onEvent.end = function(el, events, callback, duration){
    	var duration = (typeof duration != 'undefined') ? duration : 500,
    	uid = STNTool.number.uid();
    	el.on(events, function(){
       		clearTimeout(jQuery.data(this, uid));
		    jQuery.data(this, uid, setTimeout(function() {
		        callback();
		    }, duration));
		}); 
    };
    STNTool.images = {};
    STNTool.images.lazyload = function(){
    	if ($('.st-cs-lazyload').length > 0) {
    		$('.st-cs-lazyload').stlazyload({
	            'threshold': 100,
	            'checkHidden': false
			});	
    	}
    };
    STNTool.images.centerImages = function(imgs, parent, forceresize){
    	if (typeof forceresize != 'undefined') {
    		forceresize = false;
    	}
    	this.center = function(imgs, parent, forceresize){
    		this._center = function(img, parent, forceresize){
    			if (img.length > 0) {
	                img.css('position', 'absolute');
	                ratio = parent.width() / parent.height();
	                iRatio = img.width() / img.height();
	                if (ratio <= iRatio) {
	                    img.css({ 'width' : 'auto', 'height' : '100%', 'top' : 0 }).animate({'left' : ~((img.width()-parent.width())/2)+1 }, { duration: 100, done: function(){ $(this).animate({'opacity': 1}, 300) }});
	                } else {
	                    img.css({ 'width' : '100%', 'height' : 'auto', 'left' : 0 }).animate({'top' : ~((img.height()-parent.height())/2)+1 }, { duration: 100, done: function(){ $(this).animate({'opacity': 1}, 300) }});
	                }   
	            }      
    		}
    		var self = this;
    		$.each(imgs, function(){
	    		var img = $(this);
	    		img.on('ready, load', function(){
	    			self._center(img, parent, forceresize);
		        });
	    		if (typeof forceresize != 'undefined') {
	    			self._center(img, parent, forceresize);
	    		}
	    	});
    	}
    	var self = this;
		self.center(imgs, parent, true);	
		STNTool.resize.end($(window), function(){
			self.center(imgs, parent, true);	
		}, 300);
	};
	STNTool.viewport = {};
    STNTool.viewport.see = function(elem, offset) {
    	var offset = (typeof offset == 'undefined') ? 0 : offset;
        docViewTop = $(window).scrollTop(),
        docViewBottom = docViewTop + $(window).height(),
        elemTop = $(elem).offset().top,
        elemBottom = elemTop + $(elem).height();
        
        if (elemTop >= docViewTop + offset && elemBottom <= docViewBottom - offset ) {
			return 'in';
		} else if (elemTop < docViewTop + offset && elemBottom < docViewBottom && elemBottom > docViewTop + offset){
			return 'top';
		} else if (elemTop > docViewTop + offset && elemTop < docViewBottom && elemBottom > docViewBottom - offset){
			return 'bottom';
		} else {
			return false;
		}
    };
})(jQuery);

(function($){
	$(document).ready(function(){
		STNTool.images.lazyload();
	});
})(jQuery);