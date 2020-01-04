
function getCookieVal(name) {
	var items = document.cookie.split(";");
	for (var i in items) {
		var cookie = $.trim(items[i]);
		var eqIdx = cookie.indexOf("=");
		var key = cookie.substring(0, eqIdx);
		if (name == $.trim(key)) {
			return $.trim(cookie.substring(eqIdx+1));
		}
	}
	return null;
}


function setLanguageToCookie(lang) {
	setCookie("lang=" + lang + "; path=/;");
}


function getLangSetting(){
  var lang = getCookieVal("lang");
  if( lang == null) lang='CH';
  setLanguageToCookie(lang);
  return lang;
}

