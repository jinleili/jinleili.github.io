var backgroundColor = "#353535";

function getBrowser()  {
  var userAgent = navigator.userAgent.toLowerCase();
   if (/msie/.test(userAgent)) {
        return "IE";
   }
   if (/firefox/.test(userAgent)) {
        return "Firefox";
   }
   if (/opera/.test(userAgent)) {
        return "Opera";
   }
   if ( /chrome/.test(userAgent)) {
        return "Chrome";
   }
   if (/safari/.test(userAgent)) {
        return "Safari";
   }
}

function valueAdapter(v) {
  var browser = getBrowser();
  if (browser === "Safari") {
    return v;
  }
  else {
    return v/2.0;
  }
}

Request = {
  QueryString : function(item){
    var svalue = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)","i"));
    return svalue ? svalue[1] : svalue;
  }
}
