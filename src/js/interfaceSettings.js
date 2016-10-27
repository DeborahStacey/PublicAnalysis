var defaultValues =		'{ "questions":[' +
							'{"region":"region0", "catBreed":"catBreed0", "age":"age0", "weight":"weight0", "gender":"gender0", "height":"height0"}' + ', ' +
							'{"region":"region1", "catBreed":"catBreed1", "age":"age1", "weight":"weight1", "gender":"gender1", "height":"height1"}' + ', ' +
							'{"region":"region2", "catBreed":"catBreed2", "age":"age2", "weight":"weight2", "gender":"gender2", "height":"height2"}' + ', ' +
							'{"region":"region1", "catBreed":"catBreed2", "age":"age2", "weight":"weight2", "gender":"gender1", "height":"height1"}' + ', ' +
							'{"region":"region2", "catBreed":"catBreed2", "age":"age2", "weight":"weight1", "gender":"gender2", "height":"height3"}' + ', ' +
							'{"region":"region2", "catBreed":"catBreed1", "age":"age2", "weight":"weight2", "gender":"gender1", "height":"height2"}' + ', ' +
							'{"region":"region1", "catBreed":"catBreed2", "age":"age3", "weight":"weight1", "gender":"gender3", "height":"height3"}' + ', ' +
							'{"region":"region1", "catBreed":"catBreed3", "age":"age2", "weight":"weight3", "gender":"gender2", "height":"height2"}' + ', ' +
							'{"region":"region2", "catBreed":"catBreed2", "age":"age1", "weight":"weight2", "gender":"gender1", "height":"height1"}' + ', ' +
							'{"region":"region1", "catBreed":"catBreed1", "age":"age2", "weight":"weight1", "gender":"gender3", "height":"height3"}' + ', ' +
							'{"region":"region1", "catBreed":"catBreed2", "age":"age3", "weight":"weight2", "gender":"gender2", "height":"height2"}' +
						']}';
					
	
var requiredFields =	'{ "questions":[' +
							'{"region":"false", "catBreed":"false", "age":"false", "weight":"false", "gender":"false", "height":"false"}' + ', ' +
							'{"region":"true", "catBreed":"true", "age":"true", "weight":"true", "gender":"true", "height":"true"}' + ', ' +
							'{"region":"true", "catBreed":"false", "age":"true", "weight":"true", "gender":"true", "height":"false"}' + ', ' +
							'{"region":"true", "catBreed":"true", "age":"false", "weight":"true", "gender":"false", "height":"true"}' + ', ' +
							'{"region":"false", "catBreed":"false", "age":"true", "weight":"false", "gender":"true", "height":"false"}' + ', ' +
							'{"region":"false", "catBreed":"false", "age":"true", "weight":"false", "gender":"true", "height":"true"}' + ', ' +
							'{"region":"false", "catBreed":"true", "age":"true", "weight":"true", "gender":"true", "height":"false"}' + ', ' +
							'{"region":"false", "catBreed":"false", "age":"true", "weight":"true", "gender":"false", "height":"true"}' + ', ' +
							'{"region":"true", "catBreed":"false", "age":"true", "weight":"true", "gender":"true", "height":"true"}' + ', ' +
							'{"region":"false", "catBreed":"false", "age":"true", "weight":"false", "gender":"true", "height":"false"}' + ', ' +
							'{"region":"false", "catBreed":"true", "age":"false", "weight":"true", "gender":"false", "height":"true"}' +
						']}';
		
						
var saveAs = saveAs||function(e){"use strict";if(typeof e==="undefined"||typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",d=1e3*40,c=function(e){var t=function(){if(typeof e==="string"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e["on"+t[r]];if(typeof o==="function"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,"writestart progress write writeend".split(" "))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");var n=e.open(t,"_blank");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,"_blank");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||"download",n)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||"download";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!==null){define("FileSaver.js",function(){return saveAs})}