var marked_js_path="https://cdn.jsdelivr.net/npm/showdown@1.9.1/dist/showdown.min.js",prism_js_path="/content/js/prism.js";function setCookie(e,t,o){var n,i,r=new Date;r.setTime(r.getTime()+31536e6),null==o||""==o?document.cookie=e+"="+encodeURI(t)+";expires="+r.toGMTString()+";path=/":""==(n=getCookie(e))?document.cookie=e+"="+o+"="+encodeURI(t)+";expires="+r.toGMTString()+";path=/":""!=(i=getCookie(e,o))?(n=n.replace(o+"="+i,o+"="+encodeURI(t)),document.cookie=e+"="+n+";expires="+r.toGMTString()+";path=/"):document.cookie=e+"="+n+"&"+o+"="+encodeURI(t)+";expires="+r.toGMTString()+";path=/"}function getCookie(e){for(var t=e+"=",o=decodeURIComponent(document.cookie).split(";"),n=0;n<o.length;n++){for(var i=o[n];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return""}var loadJS=function(e,t,o){var n=document.createElement("script");n.src=e,n.onload=t,o.appendChild(n)};function parseMd(t){var o=new XMLHttpRequest;o.open("GET",t,!0),o.onload=function(e){var i;4===o.readyState&&(200===o.status?(i=document.getElementById(t),loadJS(marked_js_path,function(){var e=new showdown.Converter;i.innerHTML=e.makeHtml(o.responseText);loadJS(prism_js_path,function(){for(var e=i.getElementsByTagName("pre"),t=0;t<e.length;t++)for(var o=e[t].getElementsByTagName("code"),n=0;n<o.length;n++)o[n].classList.add("line-numbers"),Prism.highlightElement(o[n])},document.body)},document.body)):console.error(o.statusText))},o.onerror=function(e){console.error(o.statusText)},o.send(null)}function addLineNumbers(e){for(var t=e.getElementsByTagName("pre"),o=0;o<t.length;o++)for(var n=t[o].getElementsByTagName("code"),i=0;i<n.length;i++)n[i].classList.add("line-numbers")}var darkModeCss="/content/css/prism-onedark.css",lightModeCss="/content/css/prism-github.css";function setColorMode(){""==getCookie("color_mode")?initializeColorMode():"light"==getCookie("color_mode")?setLightMode():"dark"==getCookie("color_mode")&&setDarkMode()}function setDarkMode(){document.getElementsByTagName("html")[0].setAttribute("data-color-mode","dark")}function setLightMode(){document.getElementsByTagName("html")[0].setAttribute("data-color-mode","light")}function initializeColorMode(){setCookie("color_mode","light"),setLightMode()}function switchColorMode(){"light"==getCookie("color_mode")?(setCookie("color_mode","dark"),setDarkMode()):(setCookie("color_mode","light"),setLightMode())}function showGuidance(){""==getCookie("first_visit")&&(setCookie("first_visit","false"),document.getElementById("sidebar").style.width="20rem","light"==getCookie("color_mode")?document.getElementById("sidebar").style.backgroundColor="#282828":"dark"==getCookie("color_mode")&&(document.getElementById("sidebar").style.backgroundColor="#000000"),setTimeout(hideGuidance,3e3))}function hideGuidance(){document.getElementById("sidebar").style.width="",document.getElementById("sidebar").style.backgroundColor=""}function gtag(){dataLayer.push(arguments)}setColorMode(),"true"==getCookie("privacy-notice-dismissed")&&(window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-175297541-1"));