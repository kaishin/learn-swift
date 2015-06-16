var Sprint;!function(){"use strict";var t=function(t,n){for(var e=Sprint(n),i=Object.keys(t),r=i.length,o=0;r>o;o++)for(var s=i[o],u=t[s],f=u.length,h=0;f>h;h++)e.on(s,u[h])},n=function(){var t=["animation-iteration-count","column-count","flex-grow","flex-shrink","font-weight","line-height","opacity","order","orphans","widows","z-index"];return function(n,e){if(a(n,t))return e;var i="string"==typeof e?e:e.toString();return e&&!/\D/.test(i)&&(i+="px"),i}}(),e=function(t){var n=document.createElement("div"),e=/[\w:-]+/.exec(t)[0],i=L[e],r=t.trim();i&&(r=i.intro+r+i.outro),n.insertAdjacentHTML("afterbegin",r);var o=n.lastChild;if(i)for(var s=i.outro.match(/</g).length;s--;)o=o.lastChild;return n.textContent="",o},i={afterbegin:function(t){this.insertBefore(t,this.firstChild)},afterend:function(t){var n=this.parentElement;n&&n.insertBefore(t,this.nextSibling)},beforebegin:function(t){var n=this.parentElement;n&&n.insertBefore(t,this)},beforeend:function(t){this.appendChild(t)}},r=function(n,e){if(!(n.nodeType>1)){var i=u(n);i&&t(i,e);for(var r,o=C("*",n),s=o.length,f=0;s>f;f++){var i=u(o[f]);i&&(r||(r=C("*",e)),t(i,r[f]))}}},o=function(t,n,e,i,r){var o=[],s=this;return this.each(function(){for(var u=t?this.parentElement:this;!(!u||r&&r==u||(!i||s.is(i,u))&&(o.push(u),e)||n);)u=u.parentElement}),Sprint(d(o))},s=function(t){return E(t)[0]},u=function(t){return t.sprintEventListeners},f=function(t,n){return Object.keys(u(t)).filter(function(t){return E(n).every(function(n){return a(n,E(t))})})},h=function(t,e,i){if(null==i){var r=t.get(0);if(!r||r.nodeType>1)return;var o=e[0].toUpperCase()+e.substring(1);if(r==document){var s=m["offset"+o],u=window["inner"+o];return s>u?s:u}return r==window?window["inner"+o]:r.getBoundingClientRect()[e]}var f="function"==typeof i,h=f?"":n(e,i);return t.each(function(t){this==document||this==window||this.nodeType>1||(f&&(h=n(e,i.call(this,t,Sprint(this)[e]()))),this.style[e]=h)})},c=function(t,n){var e=n.length,o=n;if(e>1&&t.indexOf("after")>-1){o=[];for(var s=e;s--;)o.push(n[s])}for(var s=0;e>s;s++){var u=o[s];if("string"==typeof u||"number"==typeof u)this.each(function(){this.insertAdjacentHTML(t,u)});else{if("function"!=typeof u){var f=u instanceof j,h=[],a=function(){return f?u.get():Array.isArray(u)?b(u,!0,!0):u.nodeType?[u]:A(u)}(),l=a.length;if(this.each(function(n){for(var e=document.createDocumentFragment(),o=0;l>o;o++){var s,u=a[o];n?(s=u.cloneNode(!0),r(u,s)):s=u,e.appendChild(s),h.push(s)}i[t].call(this,e)}),f&&(u.dom=h,u.length=h.length),e-1>s)continue;return h}this.each(function(n){var e=u.call(this,n,this.innerHTML);c.call(Sprint(this),t,[e])})}}},a=function(t,n){for(var e=n.length;e--;)if(n[e]===t)return!0;return!1},l=function(t){return/\./.test(t)},p=function(t,n,e){if(null==n)return"add"==t?this:this.removeAttr("class");var i,r,o;return"string"==typeof n&&(i=!0,r=n.trim().split(" "),o=r.length),this.each(function(s,u){if(!(this.nodeType>1)){if(!i){var f=n.call(u,s,u.className);if(!f)return;r=f.trim().split(" "),o=r.length}for(var h=0;o>h;h++){var c=r[h];c&&(null==e?u.classList[t](c):u.classList.toggle(c,e))}}})},v=function(){for(var t=["mozMatchesSelector","webkitMatchesSelector","msMatchesSelector","matches"],n=t.length;n--;){var e=t[n];if(Element.prototype[e])return e}}(),d=function(t){for(var n=[],e=0,i=t.length,r=0;i>r;r++){for(var o=t[r],s=!1,u=0;e>u;u++)if(o===n[u]){s=!0;break}s||(n[e++]=o)}return n},g=function(){var t=function(t,n,e){var i=Object.keys(u(t)).filter(function(t){return s(n)===s(t)}).map(function(n){return u(t)[n]}).reduce(function(t,n){return t.concat(n)}).filter(function(t){return t===e});return i.length<2?!1:!0},n=function(n,e,i){return function(r){i&&i!==r||(n.removeEventListener(e,r),l(e)&&!t(n,e,r)&&n.removeEventListener(s(e),r))}},e=function(t,n){return t.filter(function(t){return n&&n!==t})};return function(t,i){return function(r){u(t)[r].forEach(n(t,r,i)),u(t)[r]=e(u(t)[r],i)}}}(),y=function(t,n){return function(e){f(t,e).forEach(g(t,n))}},m=document.documentElement,b=function(t,n,e){for(var i=t.length,r=i;r--;)if(!t[r]&&0!==t[r]||n&&t[r]instanceof j||e&&("string"==typeof t[r]||"number"==typeof t[r])){for(var o=[],s=0;i>s;s++){var u=t[s];if(u||0===u)if(n&&u instanceof j)for(var f=0;f<u.length;f++)o.push(u.get(f));else o.push(!e||"string"!=typeof u&&"number"!=typeof u?u:document.createTextNode(u))}return o}return t},S=function(){var t;return function(n,e,i){if(!t){var r=m.scrollTop;m.scrollTop=r+1;var o=m.scrollTop;m.scrollTop=r,t=o>r?m:document.body}if(null==i){var s=n.get(0);if(!s)return;return(s==window||s==document)&&(s=t),s[e]}return n.each(function(){var n=this;(n==window||n==document)&&(n=t),n[e]=i})}}(),T=function(t,n,e,i){var r=[],o=n+"ElementSibling";return t.each(function(){for(var n=this;(n=n[o])&&(!i||!t.is(i,n));)(!e||t.is(e,n))&&r.push(n)}),Sprint(d(r))},w=function(t,n,e){var i=n+"ElementSibling";return t.map(function(){var n=this[i];if(n&&(!e||t.is(e,n)))return n},!1)},C=function(t,n){if(n=n||document,/^[\#.]?[\w-]+$/.test(t)){var e=t[0];if("."==e)return A(n.getElementsByClassName(t.slice(1)));if("#"==e){var i=n.getElementById(t.slice(1));return i?[i]:[]}return"body"==t?[document.body]:A(n.getElementsByTagName(t))}return A(n.querySelectorAll(t))},E=function(t){return b(t.split("."))},A=function(t){for(var n=[],e=t.length;e--;)n[e]=t[e];return n},x=function(){var t=function(t,n){var e=Sprint(t).clone(!0).get(0),i=e;if(e&&!(this.nodeType>1)){for(;i.firstChild;)i=i.firstChild;if("inner"==n){for(;this.firstChild;)i.appendChild(this.firstChild);this.appendChild(e)}else{var r="all"==n?this.get(0):this,o=r.parentNode,s=r.nextSibling;"all"==n?this.each(function(){i.appendChild(this)}):i.appendChild(r),o.insertBefore(e,s)}}};return function(n,e){return"function"==typeof n?this.each(function(t){Sprint(this)["inner"==e?"wrapInner":"wrap"](n.call(this,t))}):"all"==e?t.call(this,n,e):this.each(function(){t.call(this,n,e)}),this}}(),L={legend:{intro:"<fieldset>",outro:"</fieldset>"},area:{intro:"<map>",outro:"</map>"},param:{intro:"<object>",outro:"</object>"},thead:{intro:"<table>",outro:"</table>"},tr:{intro:"<table><tbody>",outro:"</tbody></table>"},col:{intro:"<table><tbody></tbody><colgroup>",outro:"</colgroup></table>"},td:{intro:"<table><tbody><tr>",outro:"</tr></tbody></table>"}};["tbody","tfoot","colgroup","caption"].forEach(function(t){L[t]=L.thead}),L.th=L.td;var j=function(t,n){if("string"==typeof t)this.dom="<"==t[0]?[e(t)]:n&&n instanceof j?n.find(t).get():C(t,n);else if(Array.isArray(t))this.dom=b(t);else if(t instanceof NodeList||t instanceof HTMLCollection)this.dom=A(t);else{if(t instanceof j)return t;if("function"==typeof t)return this.ready(t);this.dom=t?[t]:[]}this.length=this.dom.length};j.prototype={add:function(t){for(var n=this.get(),e=Sprint(t),i=e.get(),r=0;r<e.length;r++)n.push(i[r]);return Sprint(d(n))},addClass:function(t){return p.call(this,"add",t)},after:function(){return c.call(this,"afterend",arguments),this},append:function(){return c.call(this,"beforeend",arguments),this},appendTo:function(t){return Sprint(c.call(Sprint(t),"beforeend",[this]))},attr:function(t,n){var e="function"==typeof n;if("string"==typeof n||"number"==typeof n||e)return this.each(function(i){this.nodeType>1||this.setAttribute(t,e?n.call(this,i,this.getAttribute(t)):n)});if("object"==typeof t){var i=Object.keys(t),r=i.length;return this.each(function(){if(!(this.nodeType>1))for(var n=0;r>n;n++){var e=i[n];this.setAttribute(e,t[e])}})}var o=this.get(0);if(o&&!(o.nodeType>1)){var s=o.getAttribute(t);return null==s?void 0:s?s:t}},before:function(){return c.call(this,"beforebegin",arguments),this},children:function(t){var n=[],e=this;return this.each(function(){if(!(this.nodeType>1))for(var i=this.children,r=i.length,o=0;r>o;o++){var s=i[o];(!t||e.is(t,s))&&n.push(s)}}),Sprint(n)},clone:function(t){return this.map(function(){if(this){var n=this.cloneNode(!0);return t&&r(this,n),n}},!1)},closest:function(t,n){return o.call(this,!1,!1,!0,t,n)},css:function(t,e){var i=typeof e,r="string"==i;if(r||"number"==i){var o=r&&/=/.test(e);if(o)var s=parseInt(e[0]+e.slice(2));return this.each(function(){if(!(this.nodeType>1)){if(o)var i=parseInt(getComputedStyle(this).getPropertyValue(t)),r=i+s;this.style[t]=n(t,o?r:e)}})}if("function"==i)return this.each(function(n){if(!(this.nodeType>1)){var i=getComputedStyle(this).getPropertyValue(t);this.style[t]=e.call(this,n,i)}});if("string"==typeof t){var u=this.get(0);if(!u||u.nodeType>1)return;return getComputedStyle(u).getPropertyValue(t)}if(Array.isArray(t)){var u=this.get(0);if(!u||u.nodeType>1)return;for(var f={},h=getComputedStyle(u),c=t.length,a=0;c>a;a++){var l=t[a];f[l]=h.getPropertyValue(l)}return f}var p=Object.keys(t),v=p.length;return this.each(function(){if(!(this.nodeType>1))for(var e=0;v>e;e++){var i=p[e];this.style[i]=n(i,t[i])}})},detach:function(){return this.map(function(){var t=this.parentElement;if(t)return t.removeChild(this),this},!1)},each:function(t){for(var n=this.dom,e=this.length,i=0;e>i;i++){var r=n[i];t.call(r,i,r)}return this},empty:function(){return this.each(function(){this.innerHTML=""})},eq:function(t){return Sprint(this.get(t))},filter:function(t){var n="function"==typeof t,e=this;return this.map(function(i){return this.nodeType>1||!n&&!e.is(t,this)||n&&!t.call(this,i,this)?void 0:this},!1)},find:function(t){if("string"==typeof t){var n=[];return this.each(function(){if(!(this.nodeType>1))for(var e=C(t,this),i=e.length,r=0;i>r;r++)n.push(e[r])}),Sprint(d(n))}for(var e=t.nodeType?[t]:t.get(),i=e.length,r=[],o=0,s=0;s<this.length;s++){var u=this.get(s);if(!(u.nodeType>1))for(var f=0;i>f;f++){var h=e[f];if(u.contains(h)&&(r[o++]=h,!(i>o)))return Sprint(r)}}return Sprint(r)},first:function(){return this.eq(0)},get:function(t){return null==t?this.dom:(0>t&&(t+=this.length),this.dom[t])},has:function(t){if("string"==typeof t)return this.map(function(){return this.nodeType>1||!C(t,this)[0]?void 0:this},!1);for(var n=[],e=this.length;e--;){var i=this.get(e);if(i.contains(t)){n.push(i);break}}return Sprint(n)},hasClass:function(t){for(var n=this.length;n--;){var e=this.get(n);if(e.nodeType>1)return;if(e.classList.contains(t))return!0}return!1},height:function(t){return h(this,"height",t)},html:function(t){if(null==t){var n=this.get(0);if(!n)return;return n.innerHTML}return this.each("function"==typeof t?function(n){var e=t.call(this,n,this.innerHTML);Sprint(this).html(e)}:function(){this.innerHTML=t})},index:function(t){if(this.length){var n,e;t?"string"==typeof t?(n=this.get(0),e=Sprint(t)):(n=t instanceof j?t.get(0):t,e=this):(n=this.get(0),e=this.first().parent().children());for(var i=e.get(),r=i.length;r--;)if(i[r]==n)return r;return-1}},insertAfter:function(t){return Sprint(t).after(this),this},insertBefore:function(t){return Sprint(t).before(this),this},is:function(t,n){var e=n?[n]:this.get(),i=e.length;if("string"==typeof t){for(var r=0;i>r;r++){var o=e[r];if(!(o.nodeType>1)&&o[v](t))return!0}return!1}if("object"==typeof t){var s;s=t instanceof j?t.get():t.length?t:[t];for(var u=s.length,r=0;i>r;r++)for(var f=0;u>f;f++)if(e[r]===s[f])return!0;return!1}if("function"==typeof t){for(var r=0;i>r;r++)if(t.call(this,r,this))return!0;return!1}},last:function(){return this.eq(-1)},map:function(t,n){null==n&&(n=!0);for(var e=this.get(),i=this.length,r=[],o=0;i>o;o++){var s=e[o],u=t.call(s,o,s);if(n&&Array.isArray(u))for(var f=u.length,h=0;f>h;h++)r.push(u[h]);else r.push(u)}return Sprint(r)},next:function(t){return w(this,"next",t)},nextAll:function(t){return T(this,"next",t)},nextUntil:function(t,n){return T(this,"next",n,t)},not:function(t){var n="function"==typeof t,e=this;return this.map(function(i){if(n){if(t.call(this,i,this))return}else if(e.is(t,this))return;return this},!1)},off:function(t,n){return"object"==typeof t?(Object.keys(t).forEach(function(n){this.off(n,t[n])},this),this):(t&&(t=t.trim().split(" ")),this.each(function(){return u(this)?t?void t.forEach(y(this,n)):void Object.keys(u(this)).forEach(g(this)):void 0}))},offset:function(t){if(!t){var n=this.get(0);if(!n||n.nodeType>1)return;var e=n.getBoundingClientRect();return{top:e.top,left:e.left}}return"object"==typeof t?this.each(function(){if(!(this.nodeType>1)){var n=Sprint(this);"static"==n.css("position")?n.css("position","relative"):n.css({top:0,left:0});var e=n.offset();n.css({top:t.top-e.top+"px",left:t.left-e.left+"px"})}}):"function"==typeof t?this.each(function(n){var e=Sprint(this),i=t.call(this,n,e.offset());e.offset(i)}):void 0},offsetParent:function(){var t=[];return this.each(function(){if(!(this.nodeType>1)){for(var n=this;n!=m;){n=n.parentNode;var e=getComputedStyle(n).getPropertyValue("position");if(!e)break;if("static"!=e)return void t.push(n)}t.push(m)}}),Sprint(t)},on:function(t,n){if(n){var e=t.trim().split(" ");return this.each(function(){u(this)||(this.sprintEventListeners={}),e.forEach(function(t){u(this)[t]||(u(this)[t]=[]),u(this)[t].push(n),this.addEventListener(t,n),l(t)&&this.addEventListener(s(t),n)},this)})}return Object.keys(t).forEach(function(n){this.on(n,t[n])},this),this},parent:function(t){return o.call(this,!0,!0,!1,t)},parents:function(t){return o.call(this,!0,!1,!1,t)},position:function(){var t={first:this.offset(),prt:this.parent().offset()};if(t.first)return{top:t.first.top-t.prt.top,left:t.first.left-t.prt.left}},prop:function(t,n){if("object"==typeof t){var e=Object.keys(t),i=e.length;return this.each(function(){for(var n=0;i>n;n++){var r=e[n];this[r]=t[r]}})}if(null==n){var r=this.get(0);if(!r)return;return r[t]}var o="function"==typeof n;return this.each(function(e){this[t]=o?n.call(this,e,this[t]):n})},prepend:function(){return c.call(this,"afterbegin",arguments),this},prependTo:function(t){return Sprint(c.call(Sprint(t),"afterbegin",[this]))},prev:function(t){return w(this,"previous",t)},prevAll:function(t){return T(this,"previous",t)},prevUntil:function(t,n){return T(this,"previous",n,t)},ready:function(t){return this.dom=[document],this.length=1,this.on("DOMContentLoaded",t)},remove:function(t){var n=this;return this.each(function(){var e=this.parentElement;e&&(!t||n.is(t,this))&&e.removeChild(this)})},removeAttr:function(t){if(t){var n=t.trim().split(" "),e=n.length;this.each(function(){if(!(this.nodeType>1))for(var t=0;e>t;t++)this.removeAttribute(n[t])})}return this},removeClass:function(t){return p.call(this,"remove",t)},removeProp:function(t){return this.each(function(){this[t]=void 0})},replaceAll:function(t){return Sprint(t).replaceWith(this),this},replaceWith:function(t){return"function"==typeof t?this.each(function(n){Sprint(this).replaceWith(t.call(this,n,this))}):this.before(t).remove()},scrollLeft:function(t){return S(this,"scrollLeft",t)},scrollTop:function(t){return S(this,"scrollTop",t)},siblings:function(t){var n=[],e=this;return this.each(function(i,r){Sprint(this).parent().children().each(function(){this==r||t&&!e.is(t,this)||n.push(this)})}),Sprint(n)},size:function(){return this.length},slice:function(t,n){var e=this.get(),i=[],r=t>=0?t:t+this.length,o=this.length;for(0>n?o+=n:n>=0&&(o=n>this.length?this.length:n);o>r;r++)i.push(e[r]);return Sprint(i)},text:function(t){if(null==t){var n=[];return this.each(function(){n.push(this.textContent)}),n.join("")}var e="function"==typeof t;return this.each(function(n){this.textContent=e?t.call(this,n,this.textContent):t})},toggleClass:function(t,n){return p.call(this,"toggle",t,n)},trigger:function(t){if(!window.CustomEvent||"function"!=typeof window.CustomEvent){var n=function(t,n){var e;return n=n||{bubbles:!1,cancelable:!1,detail:void 0},e=document.createEvent("CustomEvent"),e.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),e};n.prototype=window.Event.prototype,window.CustomEvent=n}return this.each(function(){f(this,t).forEach(function(t){this.dispatchEvent(new n(t,{bubbles:!0,cancelable:!0}))},this)})},unwrap:function(){return this.parent().each(function(){this!=document.body&&this!=m&&Sprint(this).replaceWith(this.childNodes)}),this},val:function(t){if(null==t){var n=this.get(0);if(!n)return;if(n.multiple){var e=[];return this.first().children(":checked").each(function(){e.push(this.value)}),e}return n.value}if(Array.isArray(t)){var i=this;return this.each(function(){return this.multiple?void i.children().each(function(){this.selected=a(this.value,t)}):void(this.checked=a(this.value,t))})}return this.each("function"==typeof t?function(n){Sprint(this).val(t.call(this,n,this.value))}:function(){this.value=t})},width:function(t){return h(this,"width",t)},wrap:function(t){return x.call(this,t)},wrapAll:function(t){return x.call(this,t,"all")},wrapInner:function(t){return x.call(this,t,"inner")}},Sprint=function(t,n){return new j(t,n)},null==window.$&&(window.$=Sprint)}();