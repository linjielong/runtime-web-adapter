!function i(a,u,c){function s(t,e){if(!u[t]){if(!a[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(f)return f(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var r=u[t]={exports:{}};a[t][0].call(r.exports,function(e){return s(a[t][1][e]||e)},r,r.exports,i,a,u,c)}return u[t].exports}for(var f="function"==typeof require&&require,e=0;e<c.length;e++)s(c[e]);return s}({1:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("onShow",i,jsb),r.default.exportTo("onHide",i,jsb),r.default.exportTo("offShow",i,jsb),r.default.exportTo("offHide",i,jsb)},{"../../util":20}],2:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("loadSubpackage",i,jsb)},{"../../util":20}],3:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("env",i,jsb),r.default.exportTo("getSystemInfo",i,jsb),r.default.exportTo("getSystemInfoSync",i,jsb)},{"../../util":20}],4:[function(e,t,o){"use strict";function s(e){for(var t,o=0;o<l.length;o++)if(t=l[o],e.identifier===t.identifier)return o;return-1}function f(e,t){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])}var n=loadRuntime(),l=[],d={touchstart:[],touchmove:[],touchend:[],touchcancel:[]};function r(e,t){for(var o=d[e]||[],n=o.length,r=0;r<n;++r)if(t===o[r])return void o.splice(r,1)}var h=!1,i=n.getSystemInfoSync();window.innerWidth&&i.windowWidth!==window.innerWidth&&(h=!0);function a(c){return function(e){if("function"!=typeof e){var o,t=new TouchEvent(c);"touchstart"===c?e.forEach(function(e){var t;0<=(o=s(e))?f(e,l[o]):(f(e,t={}),l.push(t))}):"touchmove"===c?e.forEach(function(e){0<=(o=s(e))&&f(e,l[o])}):"touchend"!==c&&"touchcancel"!==c||e.forEach(function(e){0<=(o=s(e))&&l.splice(o,1)});var r=[].concat(l),i=[];e.forEach(function(e){for(var t=r.length,o=0;o<t;++o){var n=r[o];if(e.identifier===n.identifier)return void i.push(n)}i.push(e)}),t.touches=r,t.targetTouches=r,t.changedTouches=i,h&&(r.forEach(function(e){e.clientX/=window.devicePixelRatio,e.clientY/=window.devicePixelRatio,e.pageX/=window.devicePixelRatio,e.pageY/=window.devicePixelRatio}),"touchcancel"!==c&&"touchend"!==c||i.forEach(function(e){e.clientX/=window.devicePixelRatio,e.clientY/=window.devicePixelRatio,e.pageX/=window.devicePixelRatio,e.pageY/=window.devicePixelRatio}));for(var n=d[c],a=n.length,u=0;u<a;u++)n[u](t)}else!function(e,t){for(var o=d[e],n=0,r=o.length;n<r;n++)if(t===o[n])return;o.push(t)}(c,e)}}n.onTouchStart?(jsb.onTouchStart=n.onTouchStart,jsb.offTouchStart=n.offTouchStart):(jsb.onTouchStart=a("touchstart"),jsb.offTouchStart=function(e){r("touchstart",e)}),n.onTouchMove?(jsb.onTouchMove=n.onTouchMove,jsb.offTouchMove=n.offTouchMove):(jsb.onTouchMove=a("touchmove"),jsb.offTouchMove=function(e){r("touchmove",e)}),n.onTouchCancel?(jsb.onTouchCancel=n.onTouchCancel,jsb.offTouchCancel=n.offTouchCancel):(jsb.onTouchCancel=a("touchcancel"),jsb.offTouchCancel=function(e){r("touchcancel",e)}),n.onTouchEnd?(jsb.onTouchEnd=n.onTouchEnd,jsb.offTouchEnd=n.offTouchEnd):(jsb.onTouchEnd=a("touchend"),jsb.offTouchEnd=function(e){r("touchend",e)})},{}],5:[function(e,t,o){"use strict";var n,r,i,a=loadRuntime(),u=a.getSystemInfoSync(),c=[];jsb.device=jsb.device||{},a.offAccelerometerChange?(n=[0,0,0],r=function(t){n[0]=.8*n[0]+(1-.8)*t.x,n[1]=.8*n[1]+(1-.8)*t.y,n[2]=.8*n[2]+(1-.8)*t.z,c.forEach(function(e){e({acceleration:{x:t.x-n[0],y:t.y-n[1],z:t.z-n[2]},accelerationIncludingGravity:{x:t.x,y:t.y,z:t.z}})})},i="android"===u.platform.toLowerCase()?function(e){e.x*=-10,e.y*=-10,e.z*=-10,r(e)}:function(e){e.x*=10,e.y*=10,e.z*=10,r(e)},jsb.onAccelerometerChange=function(e){if("function"==typeof e){for(var t=c.length,o=0;o<t;++o)if(e===c[o])return;c.push(e),0===t&&a.onAccelerometerChange(i)}},jsb.offAccelerometerChange=function(e){for(var t=c.length,o=0;o<t;++o)if(e===c[o])return c.splice(o,1),void(1===t&&a.offAccelerometerChange(i))},jsb.stopAccelerometer=a.stopAccelerometer.bind(a),jsb.startAccelerometer=a.startAccelerometer.bind(a),jsb.device.setMotionEnabled=function(e){e?a.startAccelerometer({type:"accelerationIncludingGravity"}):a.stopAccelerometer({})}):(jsb.onAccelerometerChange=function(e){if("function"==typeof e){for(var t=c.length,o=0;o<t;++o)if(e===c[o])return;c.push(e)}},jsb.offAccelerometerChange=function(e){for(var t=c.length,o=0;o<t;++o)if(e===c[o])return void c.splice(o,1)},jsb.device.dispatchDeviceMotionEvent=function(t){c.forEach(function(e){e(t)})},jsb.stopAccelerometer=function(){jsb.device.setMotionEnabled(!1)},jsb.startAccelerometer=function(){jsb.device.setMotionEnabled(!0)})},{}],6:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("getBatteryInfo",i,jsb),r.default.exportTo("getBatteryInfoSync",i,jsb)},{"../../util":20}],7:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("getFileSystemManager",i,jsb)},{"../../util":20}],8:[function(e,t,o){"use strict";window.jsb||(window.jsb={}),e("./base/lifecycle"),e("./base/subpackage"),e("./base/system-info"),e("./base/touch-event"),e("./device/accelerometer"),e("./device/battery"),e("./file/file-system-manager"),e("./interface/keyboard"),e("./interface/window"),e("./media/audio"),e("./media/video"),e("./network/download"),e("./rendering/canvas"),e("./rendering/webgl"),e("./rendering/font"),e("./rendering/frame"),e("./rendering/image")},{"./base/lifecycle":1,"./base/subpackage":2,"./base/system-info":3,"./base/touch-event":4,"./device/accelerometer":5,"./device/battery":6,"./file/file-system-manager":7,"./interface/keyboard":9,"./interface/window":10,"./media/audio":11,"./media/video":12,"./network/download":13,"./rendering/canvas":14,"./rendering/font":15,"./rendering/frame":16,"./rendering/image":17,"./rendering/webgl":18}],9:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("onKeyboardInput",i,jsb),r.default.exportTo("onKeyboardConfirm",i,jsb),r.default.exportTo("onKeyboardComplete",i,jsb),r.default.exportTo("offKeyboardInput",i,jsb),r.default.exportTo("offKeyboardConfirm",i,jsb),r.default.exportTo("offKeyboardComplete",i,jsb),r.default.exportTo("hideKeyboard",i,jsb),r.default.exportTo("showKeyboard",i,jsb),r.default.exportTo("updateKeyboard",i,jsb)},{"../../util":20}],10:[function(e,t,o){"use strict";var n=loadRuntime().onWindowResize;jsb.onWindowResize=function(t){n(function(e){t(e.width||e.windowWidth,e.height||e.windowHeight)})}},{}],11:[function(e,t,o){"use strict";var n=i(e("../../inner-context")),r=i(e("../../util"));function i(e){return e&&e.__esModule?e:{default:e}}var a=loadRuntime();r.default.exportTo("AudioEngine",a,jsb),r.default.exportTo("createInnerAudioContext",a,jsb,function(){a.AudioEngine&&(jsb.createInnerAudioContext=function(){return(0,n.default)(a.AudioEngine)})})},{"../../inner-context":19,"../../util":20}],12:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("createVideo",i,jsb)},{"../../util":20}],13:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("downloadFile",i,jsb)},{"../../util":20}],14:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("createCanvas",i,jsb,function(){document&&"function"==typeof document.createElement&&(jsb.createCanvas=function(){return document.createElement("canvas")})})},{"../../util":20}],15:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("loadFont",i,jsb)},{"../../util":20}],16:[function(e,t,o){"use strict";var n=loadRuntime();jsb.setPreferredFramesPerSecond?jsb.setPreferredFramesPerSecond=jsb.setPreferredFramesPerSecond.bind(jsb):n.setPreferredFramesPerSecond?jsb.setPreferredFramesPerSecond=n.setPreferredFramesPerSecond.bind(n):jsb.setPreferredFramesPerSecond=function(){console.error("The setPreferredFramesPerSecond is not define!")}},{}],17:[function(e,t,o){"use strict";var n,r=(n=e("../../util"))&&n.__esModule?n:{default:n};var i=loadRuntime();r.default.exportTo("loadImageData",i,jsb),r.default.exportTo("createImage",i,jsb,function(){document&&"function"==typeof document.createElement&&(jsb.createImage=function(){return document.createElement("image")})})},{"../../util":20}],18:[function(e,t,o){"use strict";var b,m,g;window.__gl&&(b=window.__gl,m=b.texImage2D,b.texImage2D=function(e,t,o,n,r,i,a,u,c){var s,f,l,d,h,v,p=arguments.length;6===p?(u=r,a=n,(s=i)instanceof HTMLImageElement?(f=console.error,console.error=function(){},m.apply(void 0,arguments),console.error=f,b.texImage2D_image(e,t,s._imageMeta)):s instanceof HTMLCanvasElement?(l=console.error,console.error=function(){},m.apply(void 0,arguments),console.error=l,d=s.getContext("2d"),b.texImage2D_canvas(e,t,o,a,u,d)):s instanceof ImageData?(h=console.error,console.error=function(){},m(e,t,o,s.width,s.height,0,a,u,s.data),console.error=h):console.error("Invalid pixel argument passed to gl.texImage2D!")):9===p?(v=console.error,console.error=function(){},m(e,t,o,n,r,i,a,u,c),console.error=v):console.error("gl.texImage2D: invalid argument count!")},g=b.texSubImage2D,b.texSubImage2D=function(e,t,o,n,r,i,a,u,c){var s,f,l,d,h,v,p=arguments.length;7===p?(s=a,u=i,a=r,s instanceof HTMLImageElement?(f=console.error,console.error=function(){},g.apply(void 0,arguments),console.error=f,b.texSubImage2D_image(e,t,o,n,s._imageMeta)):s instanceof HTMLCanvasElement?(l=console.error,console.error=function(){},g.apply(void 0,arguments),console.error=l,d=s.getContext("2d"),b.texSubImage2D_canvas(e,t,o,n,a,u,d)):s instanceof ImageData?(h=console.error,console.error=function(){},g(e,t,o,n,s.width,s.height,a,u,s.data),console.error=h):console.error("Invalid pixel argument passed to gl.texImage2D!")):9===p?(v=console.error,console.error=function(){},g(e,t,o,n,r,i,a,u,c),console.error=v):console.error(new Error("gl.texImage2D: invalid argument count!").stack)})},{}],19:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){void 0===y&&(y=Object.assign({},t),Object.keys(t).forEach(function(e){"function"==typeof t[e]&&(t[e]=function(){return console.warn("AudioEngine."+e+" is deprecated"),y[e].apply(t,arguments)})}));return new T};function n(e,t,o){var n=j.get(e);if("function"!=typeof o||!n)return-1;for(var r=n[t]||[],i=0,a=r.length;i<a;++i)if(o===r[i])return r.splice(i,1),o.length+1;return 0}function r(e,t,o){var n=j.get(e);if("function"!=typeof o||!n)return-1;var r=n[t];if(r){for(var i=0,a=r.length;i<a;++i)if(o===r[i])return 0;r.push(o)}else r=n[t]=[o];return r.length}function i(e,t,o){var n=2<arguments.length&&void 0!==o?o:[],r=j.get(e);if(r)for(var i=r[t]||[],a=0,u=i.length;a<u;++a)i[a].apply(e,n)}var a="canplayCallbacks",u="endedCallbacks",c="errorCallbacks",s="pauseCallbacks",f="playCallbacks",l="seekedCallbacks",d="seekingCallbacks",h="stopCallbacks",v="timeUpdateCallbacks",p="waitingCallbacks",b=10003,m=-1,g={ERROR:-1,INITIALIZING:0,PLAYING:1,PAUSED:2},y=void 0,j=new WeakMap;function T(){this.startTime=0,this.autoplay=!1,j.set(this,{src:"",volume:1,loop:!1}),Object.defineProperty(this,"loop",{set:function(e){e=!!e;var t,o=j.get(this);o&&("number"==typeof(t=o.audioID)&&0<=t&&y.setLoop(t,e),o.loop=e)},get:function(){var e=j.get(this);return!!e&&e.loop}}),Object.defineProperty(this,"volume",{set:function(e){"number"==typeof e?e<0?e=0:1<e&&(e=1):e=1;var t,o=j.get(this);o&&("number"==typeof(t=o.audioID)&&0<=t&&y.setVolume(t,e),o.volume=e)},get:function(){var e=j.get(this);return e?e.volume:1}}),Object.defineProperty(this,"src",{set:function(e){var t,o,n=j.get(this);n&&(t=n.src,"string"==typeof(n.src=e)&&("number"==typeof(o=n.audioID)&&0<=o&&y.getState(o)===g.PAUSED&&t!==e&&(y.stop(o),n.audioID=-1),this.autoplay&&this.play()))},get:function(){var e=j.get(this);return e?e.src:""}}),Object.defineProperty(this,"duration",{get:function(){var e=j.get(this);if(e){var t=e.audioID;if("number"==typeof t&&0<=t)return y.getDuration(t)}return NaN},set:function(){}}),Object.defineProperty(this,"currentTime",{get:function(){var e=j.get(this);if(e){var t=e.audioID;if("number"==typeof t&&0<=t)return y.getCurrentTime(t)}return 0},set:function(){}}),Object.defineProperty(this,"paused",{get:function(){var e=j.get(this);if(e){var t=e.audioID;if("number"==typeof t&&0<=t)return y.getState(t)===g.PAUSED}return!0},set:function(){}}),Object.defineProperty(this,"buffered",{get:function(){var e=j.get(this);if(e){var t=e.audioID;if("number"==typeof t&&0<=t)return y.getBuffered(t)}return 0},set:function(){}})}var x=T.prototype;x.destroy=function(){var e,t=j.get(this);t&&("number"==typeof(e=t.audioID)&&0<=e&&(y.stop(e),t.audioID=-1,i(this,h)),t[a]=[],t[u]=[],t[c]=[],t[s]=[],t[f]=[],t[l]=[],t[d]=[],t[h]=[],t[v]=[],t[p]=[],clearInterval(t.intervalID))},x.play=function(){var e=j.get(this);if(e){var t,o=e.src,n=e.audioID;if("string"==typeof o&&""!==o){if("number"==typeof n&&0<=n){if(y.getState(n)===g.PAUSED)return y.resume(n),void i(this,f);y.stop(n),e.audioID=-1}-1!==(n=y.play(o,this.loop,this.volume))?(e.audioID=n,"number"==typeof this.startTime&&0<this.startTime&&y.setCurrentTime(n,this.startTime),i(this,p),t=this,y.setCanPlayCallback(n,function(){o===t.src&&(i(t,a),i(t,f))}),y.setWaitingCallback(n,function(){o===t.src&&i(t,p)}),y.setErrorCallback(n,function(){o===t.src&&(e.audioID=-1,i(t,c))}),y.setFinishCallback(n,function(){o===t.src&&(e.audioID=-1,i(t,u))})):i(this,c,[{errMsg:"unknown",errCode:m}])}else i(this,c,[{errMsg:"invalid src",errCode:b}])}},x.pause=function(){var e,t=j.get(this);!t||"number"==typeof(e=t.audioID)&&0<=e&&(y.pause(e),i(this,s))},x.seek=function(e){var t,o=j.get(this);o&&"number"==typeof e&&0<=e&&("number"==typeof(t=o.audioID)&&0<=t&&(y.setCurrentTime(t,e),i(this,d),i(this,l)))},x.stop=function(){var e,t=j.get(this);!t||"number"==typeof(e=t.audioID)&&0<=e&&(y.stop(e),t.audioID=-1,i(this,h))},x.offCanplay=function(e){n(this,a,e)},x.offEnded=function(e){n(this,u,e)},x.offError=function(e){n(this,c,e)},x.offPause=function(e){n(this,s,e)},x.offPlay=function(e){n(this,f,e)},x.offSeeked=function(e){n(this,l,e)},x.offSeeking=function(e){n(this,d,e)},x.offStop=function(e){n(this,h,e)},x.offTimeUpdate=function(e){1===n(this,v,e)&&clearInterval(j.get(this).intervalID)},x.offWaiting=function(e){n(this,p,e)},x.onCanplay=function(e){r(this,a,e)},x.onEnded=function(e){r(this,u,e)},x.onError=function(e){r(this,c,e)},x.onPause=function(e){r(this,s,e)},x.onPlay=function(e){r(this,f,e)},x.onSeeked=function(e){r(this,l,e)},x.onSeeking=function(e){r(this,"seekingCallbacks",e)},x.onStop=function(e){r(this,h,e)},x.onTimeUpdate=function(e){var t,o,n;1===r(this,v,e)&&(t=j.get(this),o=this,n=setInterval(function(){var e,t=j.get(o);t?"number"==typeof(e=t.audioID)&&0<=e&&y.getState(e)===g.PLAYING&&i(o,v):clearInterval(n)},500),t.intervalID=n)},x.onWaiting=function(e){r(this,p,e)}},{}],20:[function(e,t,o){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={exportTo:function(e,t,o,n){var r;"object"===i(t)&&"object"===i(o)?void 0!==(r=t[e])?o[e]="function"==typeof r?r.bind(t):r:(o[e]=function(){return console.error(e+" is not support!"),{}},"function"==typeof n&&n()):console.warn("invalid exportTo: ",e)}};o.default=n},{}]},{},[8]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqc2IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uIGkoYSx1LGMpe2Z1bmN0aW9uIHModCxlKXtpZighdVt0XSl7aWYoIWFbdF0pe3ZhciBvPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWUmJm8pcmV0dXJuIG8odCwhMCk7aWYoZilyZXR1cm4gZih0LCEwKTt2YXIgbj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK3QrXCInXCIpO3Rocm93IG4uY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixufXZhciByPXVbdF09e2V4cG9ydHM6e319O2FbdF1bMF0uY2FsbChyLmV4cG9ydHMsZnVuY3Rpb24oZSl7cmV0dXJuIHMoYVt0XVsxXVtlXXx8ZSl9LHIsci5leHBvcnRzLGksYSx1LGMpfXJldHVybiB1W3RdLmV4cG9ydHN9Zm9yKHZhciBmPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsZT0wO2U8Yy5sZW5ndGg7ZSsrKXMoY1tlXSk7cmV0dXJuIHN9KHsxOltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG4scj0obj1lKFwiLi4vLi4vdXRpbFwiKSkmJm4uX19lc01vZHVsZT9uOntkZWZhdWx0Om59O3ZhciBpPWxvYWRSdW50aW1lKCk7ci5kZWZhdWx0LmV4cG9ydFRvKFwib25TaG93XCIsaSxqc2IpLHIuZGVmYXVsdC5leHBvcnRUbyhcIm9uSGlkZVwiLGksanNiKSxyLmRlZmF1bHQuZXhwb3J0VG8oXCJvZmZTaG93XCIsaSxqc2IpLHIuZGVmYXVsdC5leHBvcnRUbyhcIm9mZkhpZGVcIixpLGpzYil9LHtcIi4uLy4uL3V0aWxcIjoyMH1dLDI6W2Z1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjt2YXIgbixyPShuPWUoXCIuLi8uLi91dGlsXCIpKSYmbi5fX2VzTW9kdWxlP246e2RlZmF1bHQ6bn07dmFyIGk9bG9hZFJ1bnRpbWUoKTtyLmRlZmF1bHQuZXhwb3J0VG8oXCJsb2FkU3VicGFja2FnZVwiLGksanNiKX0se1wiLi4vLi4vdXRpbFwiOjIwfV0sMzpbZnVuY3Rpb24oZSx0LG8pe1widXNlIHN0cmljdFwiO3ZhciBuLHI9KG49ZShcIi4uLy4uL3V0aWxcIikpJiZuLl9fZXNNb2R1bGU/bjp7ZGVmYXVsdDpufTt2YXIgaT1sb2FkUnVudGltZSgpO3IuZGVmYXVsdC5leHBvcnRUbyhcImVudlwiLGksanNiKSxyLmRlZmF1bHQuZXhwb3J0VG8oXCJnZXRTeXN0ZW1JbmZvXCIsaSxqc2IpLHIuZGVmYXVsdC5leHBvcnRUbyhcImdldFN5c3RlbUluZm9TeW5jXCIsaSxqc2IpfSx7XCIuLi8uLi91dGlsXCI6MjB9XSw0OltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcyhlKXtmb3IodmFyIHQsbz0wO288bC5sZW5ndGg7bysrKWlmKHQ9bFtvXSxlLmlkZW50aWZpZXI9PT10LmlkZW50aWZpZXIpcmV0dXJuIG87cmV0dXJuLTF9ZnVuY3Rpb24gZihlLHQpe2Zvcih2YXIgbyBpbiBlKWUuaGFzT3duUHJvcGVydHkobykmJih0W29dPWVbb10pfXZhciBuPWxvYWRSdW50aW1lKCksbD1bXSxkPXt0b3VjaHN0YXJ0OltdLHRvdWNobW92ZTpbXSx0b3VjaGVuZDpbXSx0b3VjaGNhbmNlbDpbXX07ZnVuY3Rpb24gcihlLHQpe2Zvcih2YXIgbz1kW2VdfHxbXSxuPW8ubGVuZ3RoLHI9MDtyPG47KytyKWlmKHQ9PT1vW3JdKXJldHVybiB2b2lkIG8uc3BsaWNlKHIsMSl9dmFyIGg9ITEsaT1uLmdldFN5c3RlbUluZm9TeW5jKCk7d2luZG93LmlubmVyV2lkdGgmJmkud2luZG93V2lkdGghPT13aW5kb3cuaW5uZXJXaWR0aCYmKGg9ITApO2Z1bmN0aW9uIGEoYyl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpe3ZhciBvLHQ9bmV3IFRvdWNoRXZlbnQoYyk7XCJ0b3VjaHN0YXJ0XCI9PT1jP2UuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdDswPD0obz1zKGUpKT9mKGUsbFtvXSk6KGYoZSx0PXt9KSxsLnB1c2godCkpfSk6XCJ0b3VjaG1vdmVcIj09PWM/ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpezA8PShvPXMoZSkpJiZmKGUsbFtvXSl9KTpcInRvdWNoZW5kXCIhPT1jJiZcInRvdWNoY2FuY2VsXCIhPT1jfHxlLmZvckVhY2goZnVuY3Rpb24oZSl7MDw9KG89cyhlKSkmJmwuc3BsaWNlKG8sMSl9KTt2YXIgcj1bXS5jb25jYXQobCksaT1bXTtlLmZvckVhY2goZnVuY3Rpb24oZSl7Zm9yKHZhciB0PXIubGVuZ3RoLG89MDtvPHQ7KytvKXt2YXIgbj1yW29dO2lmKGUuaWRlbnRpZmllcj09PW4uaWRlbnRpZmllcilyZXR1cm4gdm9pZCBpLnB1c2gobil9aS5wdXNoKGUpfSksdC50b3VjaGVzPXIsdC50YXJnZXRUb3VjaGVzPXIsdC5jaGFuZ2VkVG91Y2hlcz1pLGgmJihyLmZvckVhY2goZnVuY3Rpb24oZSl7ZS5jbGllbnRYLz13aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyxlLmNsaWVudFkvPXdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLGUucGFnZVgvPXdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLGUucGFnZVkvPXdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfSksXCJ0b3VjaGNhbmNlbFwiIT09YyYmXCJ0b3VjaGVuZFwiIT09Y3x8aS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UuY2xpZW50WC89d2luZG93LmRldmljZVBpeGVsUmF0aW8sZS5jbGllbnRZLz13aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyxlLnBhZ2VYLz13aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyxlLnBhZ2VZLz13aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb30pKTtmb3IodmFyIG49ZFtjXSxhPW4ubGVuZ3RoLHU9MDt1PGE7dSsrKW5bdV0odCl9ZWxzZSFmdW5jdGlvbihlLHQpe2Zvcih2YXIgbz1kW2VdLG49MCxyPW8ubGVuZ3RoO248cjtuKyspaWYodD09PW9bbl0pcmV0dXJuO28ucHVzaCh0KX0oYyxlKX19bi5vblRvdWNoU3RhcnQ/KGpzYi5vblRvdWNoU3RhcnQ9bi5vblRvdWNoU3RhcnQsanNiLm9mZlRvdWNoU3RhcnQ9bi5vZmZUb3VjaFN0YXJ0KTooanNiLm9uVG91Y2hTdGFydD1hKFwidG91Y2hzdGFydFwiKSxqc2Iub2ZmVG91Y2hTdGFydD1mdW5jdGlvbihlKXtyKFwidG91Y2hzdGFydFwiLGUpfSksbi5vblRvdWNoTW92ZT8oanNiLm9uVG91Y2hNb3ZlPW4ub25Ub3VjaE1vdmUsanNiLm9mZlRvdWNoTW92ZT1uLm9mZlRvdWNoTW92ZSk6KGpzYi5vblRvdWNoTW92ZT1hKFwidG91Y2htb3ZlXCIpLGpzYi5vZmZUb3VjaE1vdmU9ZnVuY3Rpb24oZSl7cihcInRvdWNobW92ZVwiLGUpfSksbi5vblRvdWNoQ2FuY2VsPyhqc2Iub25Ub3VjaENhbmNlbD1uLm9uVG91Y2hDYW5jZWwsanNiLm9mZlRvdWNoQ2FuY2VsPW4ub2ZmVG91Y2hDYW5jZWwpOihqc2Iub25Ub3VjaENhbmNlbD1hKFwidG91Y2hjYW5jZWxcIiksanNiLm9mZlRvdWNoQ2FuY2VsPWZ1bmN0aW9uKGUpe3IoXCJ0b3VjaGNhbmNlbFwiLGUpfSksbi5vblRvdWNoRW5kPyhqc2Iub25Ub3VjaEVuZD1uLm9uVG91Y2hFbmQsanNiLm9mZlRvdWNoRW5kPW4ub2ZmVG91Y2hFbmQpOihqc2Iub25Ub3VjaEVuZD1hKFwidG91Y2hlbmRcIiksanNiLm9mZlRvdWNoRW5kPWZ1bmN0aW9uKGUpe3IoXCJ0b3VjaGVuZFwiLGUpfSl9LHt9XSw1OltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG4scixpLGE9bG9hZFJ1bnRpbWUoKSx1PWEuZ2V0U3lzdGVtSW5mb1N5bmMoKSxjPVtdO2pzYi5kZXZpY2U9anNiLmRldmljZXx8e30sYS5vZmZBY2NlbGVyb21ldGVyQ2hhbmdlPyhuPVswLDAsMF0scj1mdW5jdGlvbih0KXtuWzBdPS44Km5bMF0rKDEtLjgpKnQueCxuWzFdPS44Km5bMV0rKDEtLjgpKnQueSxuWzJdPS44Km5bMl0rKDEtLjgpKnQueixjLmZvckVhY2goZnVuY3Rpb24oZSl7ZSh7YWNjZWxlcmF0aW9uOnt4OnQueC1uWzBdLHk6dC55LW5bMV0sejp0LnotblsyXX0sYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eTp7eDp0LngseTp0Lnksejp0Lnp9fSl9KX0saT1cImFuZHJvaWRcIj09PXUucGxhdGZvcm0udG9Mb3dlckNhc2UoKT9mdW5jdGlvbihlKXtlLngqPS0xMCxlLnkqPS0xMCxlLnoqPS0xMCxyKGUpfTpmdW5jdGlvbihlKXtlLngqPTEwLGUueSo9MTAsZS56Kj0xMCxyKGUpfSxqc2Iub25BY2NlbGVyb21ldGVyQ2hhbmdlPWZ1bmN0aW9uKGUpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpe2Zvcih2YXIgdD1jLmxlbmd0aCxvPTA7bzx0OysrbylpZihlPT09Y1tvXSlyZXR1cm47Yy5wdXNoKGUpLDA9PT10JiZhLm9uQWNjZWxlcm9tZXRlckNoYW5nZShpKX19LGpzYi5vZmZBY2NlbGVyb21ldGVyQ2hhbmdlPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1jLmxlbmd0aCxvPTA7bzx0OysrbylpZihlPT09Y1tvXSlyZXR1cm4gYy5zcGxpY2UobywxKSx2b2lkKDE9PT10JiZhLm9mZkFjY2VsZXJvbWV0ZXJDaGFuZ2UoaSkpfSxqc2Iuc3RvcEFjY2VsZXJvbWV0ZXI9YS5zdG9wQWNjZWxlcm9tZXRlci5iaW5kKGEpLGpzYi5zdGFydEFjY2VsZXJvbWV0ZXI9YS5zdGFydEFjY2VsZXJvbWV0ZXIuYmluZChhKSxqc2IuZGV2aWNlLnNldE1vdGlvbkVuYWJsZWQ9ZnVuY3Rpb24oZSl7ZT9hLnN0YXJ0QWNjZWxlcm9tZXRlcih7dHlwZTpcImFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHlcIn0pOmEuc3RvcEFjY2VsZXJvbWV0ZXIoe30pfSk6KGpzYi5vbkFjY2VsZXJvbWV0ZXJDaGFuZ2U9ZnVuY3Rpb24oZSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZSl7Zm9yKHZhciB0PWMubGVuZ3RoLG89MDtvPHQ7KytvKWlmKGU9PT1jW29dKXJldHVybjtjLnB1c2goZSl9fSxqc2Iub2ZmQWNjZWxlcm9tZXRlckNoYW5nZT1mdW5jdGlvbihlKXtmb3IodmFyIHQ9Yy5sZW5ndGgsbz0wO288dDsrK28paWYoZT09PWNbb10pcmV0dXJuIHZvaWQgYy5zcGxpY2UobywxKX0sanNiLmRldmljZS5kaXNwYXRjaERldmljZU1vdGlvbkV2ZW50PWZ1bmN0aW9uKHQpe2MuZm9yRWFjaChmdW5jdGlvbihlKXtlKHQpfSl9LGpzYi5zdG9wQWNjZWxlcm9tZXRlcj1mdW5jdGlvbigpe2pzYi5kZXZpY2Uuc2V0TW90aW9uRW5hYmxlZCghMSl9LGpzYi5zdGFydEFjY2VsZXJvbWV0ZXI9ZnVuY3Rpb24oKXtqc2IuZGV2aWNlLnNldE1vdGlvbkVuYWJsZWQoITApfSl9LHt9XSw2OltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG4scj0obj1lKFwiLi4vLi4vdXRpbFwiKSkmJm4uX19lc01vZHVsZT9uOntkZWZhdWx0Om59O3ZhciBpPWxvYWRSdW50aW1lKCk7ci5kZWZhdWx0LmV4cG9ydFRvKFwiZ2V0QmF0dGVyeUluZm9cIixpLGpzYiksci5kZWZhdWx0LmV4cG9ydFRvKFwiZ2V0QmF0dGVyeUluZm9TeW5jXCIsaSxqc2IpfSx7XCIuLi8uLi91dGlsXCI6MjB9XSw3OltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG4scj0obj1lKFwiLi4vLi4vdXRpbFwiKSkmJm4uX19lc01vZHVsZT9uOntkZWZhdWx0Om59O3ZhciBpPWxvYWRSdW50aW1lKCk7ci5kZWZhdWx0LmV4cG9ydFRvKFwiZ2V0RmlsZVN5c3RlbU1hbmFnZXJcIixpLGpzYil9LHtcIi4uLy4uL3V0aWxcIjoyMH1dLDg6W2Z1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjt3aW5kb3cuanNifHwod2luZG93LmpzYj17fSksZShcIi4vYmFzZS9saWZlY3ljbGVcIiksZShcIi4vYmFzZS9zdWJwYWNrYWdlXCIpLGUoXCIuL2Jhc2Uvc3lzdGVtLWluZm9cIiksZShcIi4vYmFzZS90b3VjaC1ldmVudFwiKSxlKFwiLi9kZXZpY2UvYWNjZWxlcm9tZXRlclwiKSxlKFwiLi9kZXZpY2UvYmF0dGVyeVwiKSxlKFwiLi9maWxlL2ZpbGUtc3lzdGVtLW1hbmFnZXJcIiksZShcIi4vaW50ZXJmYWNlL2tleWJvYXJkXCIpLGUoXCIuL2ludGVyZmFjZS93aW5kb3dcIiksZShcIi4vbWVkaWEvYXVkaW9cIiksZShcIi4vbWVkaWEvdmlkZW9cIiksZShcIi4vbmV0d29yay9kb3dubG9hZFwiKSxlKFwiLi9yZW5kZXJpbmcvY2FudmFzXCIpLGUoXCIuL3JlbmRlcmluZy93ZWJnbFwiKSxlKFwiLi9yZW5kZXJpbmcvZm9udFwiKSxlKFwiLi9yZW5kZXJpbmcvZnJhbWVcIiksZShcIi4vcmVuZGVyaW5nL2ltYWdlXCIpfSx7XCIuL2Jhc2UvbGlmZWN5Y2xlXCI6MSxcIi4vYmFzZS9zdWJwYWNrYWdlXCI6MixcIi4vYmFzZS9zeXN0ZW0taW5mb1wiOjMsXCIuL2Jhc2UvdG91Y2gtZXZlbnRcIjo0LFwiLi9kZXZpY2UvYWNjZWxlcm9tZXRlclwiOjUsXCIuL2RldmljZS9iYXR0ZXJ5XCI6NixcIi4vZmlsZS9maWxlLXN5c3RlbS1tYW5hZ2VyXCI6NyxcIi4vaW50ZXJmYWNlL2tleWJvYXJkXCI6OSxcIi4vaW50ZXJmYWNlL3dpbmRvd1wiOjEwLFwiLi9tZWRpYS9hdWRpb1wiOjExLFwiLi9tZWRpYS92aWRlb1wiOjEyLFwiLi9uZXR3b3JrL2Rvd25sb2FkXCI6MTMsXCIuL3JlbmRlcmluZy9jYW52YXNcIjoxNCxcIi4vcmVuZGVyaW5nL2ZvbnRcIjoxNSxcIi4vcmVuZGVyaW5nL2ZyYW1lXCI6MTYsXCIuL3JlbmRlcmluZy9pbWFnZVwiOjE3LFwiLi9yZW5kZXJpbmcvd2ViZ2xcIjoxOH1dLDk6W2Z1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjt2YXIgbixyPShuPWUoXCIuLi8uLi91dGlsXCIpKSYmbi5fX2VzTW9kdWxlP246e2RlZmF1bHQ6bn07dmFyIGk9bG9hZFJ1bnRpbWUoKTtyLmRlZmF1bHQuZXhwb3J0VG8oXCJvbktleWJvYXJkSW5wdXRcIixpLGpzYiksci5kZWZhdWx0LmV4cG9ydFRvKFwib25LZXlib2FyZENvbmZpcm1cIixpLGpzYiksci5kZWZhdWx0LmV4cG9ydFRvKFwib25LZXlib2FyZENvbXBsZXRlXCIsaSxqc2IpLHIuZGVmYXVsdC5leHBvcnRUbyhcIm9mZktleWJvYXJkSW5wdXRcIixpLGpzYiksci5kZWZhdWx0LmV4cG9ydFRvKFwib2ZmS2V5Ym9hcmRDb25maXJtXCIsaSxqc2IpLHIuZGVmYXVsdC5leHBvcnRUbyhcIm9mZktleWJvYXJkQ29tcGxldGVcIixpLGpzYiksci5kZWZhdWx0LmV4cG9ydFRvKFwiaGlkZUtleWJvYXJkXCIsaSxqc2IpLHIuZGVmYXVsdC5leHBvcnRUbyhcInNob3dLZXlib2FyZFwiLGksanNiKSxyLmRlZmF1bHQuZXhwb3J0VG8oXCJ1cGRhdGVLZXlib2FyZFwiLGksanNiKX0se1wiLi4vLi4vdXRpbFwiOjIwfV0sMTA6W2Z1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1sb2FkUnVudGltZSgpLm9uV2luZG93UmVzaXplO2pzYi5vbldpbmRvd1Jlc2l6ZT1mdW5jdGlvbih0KXtuKGZ1bmN0aW9uKGUpe3QoZS53aWR0aHx8ZS53aW5kb3dXaWR0aCxlLmhlaWdodHx8ZS53aW5kb3dIZWlnaHQpfSl9fSx7fV0sMTE6W2Z1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1pKGUoXCIuLi8uLi9pbm5lci1jb250ZXh0XCIpKSxyPWkoZShcIi4uLy4uL3V0aWxcIikpO2Z1bmN0aW9uIGkoZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fXZhciBhPWxvYWRSdW50aW1lKCk7ci5kZWZhdWx0LmV4cG9ydFRvKFwiQXVkaW9FbmdpbmVcIixhLGpzYiksci5kZWZhdWx0LmV4cG9ydFRvKFwiY3JlYXRlSW5uZXJBdWRpb0NvbnRleHRcIixhLGpzYixmdW5jdGlvbigpe2EuQXVkaW9FbmdpbmUmJihqc2IuY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4oMCxuLmRlZmF1bHQpKGEuQXVkaW9FbmdpbmUpfSl9KX0se1wiLi4vLi4vaW5uZXItY29udGV4dFwiOjE5LFwiLi4vLi4vdXRpbFwiOjIwfV0sMTI6W2Z1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjt2YXIgbixyPShuPWUoXCIuLi8uLi91dGlsXCIpKSYmbi5fX2VzTW9kdWxlP246e2RlZmF1bHQ6bn07dmFyIGk9bG9hZFJ1bnRpbWUoKTtyLmRlZmF1bHQuZXhwb3J0VG8oXCJjcmVhdGVWaWRlb1wiLGksanNiKX0se1wiLi4vLi4vdXRpbFwiOjIwfV0sMTM6W2Z1bmN0aW9uKGUsdCxvKXtcInVzZSBzdHJpY3RcIjt2YXIgbixyPShuPWUoXCIuLi8uLi91dGlsXCIpKSYmbi5fX2VzTW9kdWxlP246e2RlZmF1bHQ6bn07dmFyIGk9bG9hZFJ1bnRpbWUoKTtyLmRlZmF1bHQuZXhwb3J0VG8oXCJkb3dubG9hZEZpbGVcIixpLGpzYil9LHtcIi4uLy4uL3V0aWxcIjoyMH1dLDE0OltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG4scj0obj1lKFwiLi4vLi4vdXRpbFwiKSkmJm4uX19lc01vZHVsZT9uOntkZWZhdWx0Om59O3ZhciBpPWxvYWRSdW50aW1lKCk7ci5kZWZhdWx0LmV4cG9ydFRvKFwiY3JlYXRlQ2FudmFzXCIsaSxqc2IsZnVuY3Rpb24oKXtkb2N1bWVudCYmXCJmdW5jdGlvblwiPT10eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCYmKGpzYi5jcmVhdGVDYW52YXM9ZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKX0pfSl9LHtcIi4uLy4uL3V0aWxcIjoyMH1dLDE1OltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG4scj0obj1lKFwiLi4vLi4vdXRpbFwiKSkmJm4uX19lc01vZHVsZT9uOntkZWZhdWx0Om59O3ZhciBpPWxvYWRSdW50aW1lKCk7ci5kZWZhdWx0LmV4cG9ydFRvKFwibG9hZEZvbnRcIixpLGpzYil9LHtcIi4uLy4uL3V0aWxcIjoyMH1dLDE2OltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49bG9hZFJ1bnRpbWUoKTtqc2Iuc2V0UHJlZmVycmVkRnJhbWVzUGVyU2Vjb25kP2pzYi5zZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQ9anNiLnNldFByZWZlcnJlZEZyYW1lc1BlclNlY29uZC5iaW5kKGpzYik6bi5zZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQ/anNiLnNldFByZWZlcnJlZEZyYW1lc1BlclNlY29uZD1uLnNldFByZWZlcnJlZEZyYW1lc1BlclNlY29uZC5iaW5kKG4pOmpzYi5zZXRQcmVmZXJyZWRGcmFtZXNQZXJTZWNvbmQ9ZnVuY3Rpb24oKXtjb25zb2xlLmVycm9yKFwiVGhlIHNldFByZWZlcnJlZEZyYW1lc1BlclNlY29uZCBpcyBub3QgZGVmaW5lIVwiKX19LHt9XSwxNzpbZnVuY3Rpb24oZSx0LG8pe1widXNlIHN0cmljdFwiO3ZhciBuLHI9KG49ZShcIi4uLy4uL3V0aWxcIikpJiZuLl9fZXNNb2R1bGU/bjp7ZGVmYXVsdDpufTt2YXIgaT1sb2FkUnVudGltZSgpO3IuZGVmYXVsdC5leHBvcnRUbyhcImxvYWRJbWFnZURhdGFcIixpLGpzYiksci5kZWZhdWx0LmV4cG9ydFRvKFwiY3JlYXRlSW1hZ2VcIixpLGpzYixmdW5jdGlvbigpe2RvY3VtZW50JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50JiYoanNiLmNyZWF0ZUltYWdlPWZ1bmN0aW9uKCl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWFnZVwiKX0pfSl9LHtcIi4uLy4uL3V0aWxcIjoyMH1dLDE4OltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGIsbSxnO3dpbmRvdy5fX2dsJiYoYj13aW5kb3cuX19nbCxtPWIudGV4SW1hZ2UyRCxiLnRleEltYWdlMkQ9ZnVuY3Rpb24oZSx0LG8sbixyLGksYSx1LGMpe3ZhciBzLGYsbCxkLGgsdixwPWFyZ3VtZW50cy5sZW5ndGg7Nj09PXA/KHU9cixhPW4sKHM9aSlpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQ/KGY9Y29uc29sZS5lcnJvcixjb25zb2xlLmVycm9yPWZ1bmN0aW9uKCl7fSxtLmFwcGx5KHZvaWQgMCxhcmd1bWVudHMpLGNvbnNvbGUuZXJyb3I9ZixiLnRleEltYWdlMkRfaW1hZ2UoZSx0LHMuX2ltYWdlTWV0YSkpOnMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudD8obD1jb25zb2xlLmVycm9yLGNvbnNvbGUuZXJyb3I9ZnVuY3Rpb24oKXt9LG0uYXBwbHkodm9pZCAwLGFyZ3VtZW50cyksY29uc29sZS5lcnJvcj1sLGQ9cy5nZXRDb250ZXh0KFwiMmRcIiksYi50ZXhJbWFnZTJEX2NhbnZhcyhlLHQsbyxhLHUsZCkpOnMgaW5zdGFuY2VvZiBJbWFnZURhdGE/KGg9Y29uc29sZS5lcnJvcixjb25zb2xlLmVycm9yPWZ1bmN0aW9uKCl7fSxtKGUsdCxvLHMud2lkdGgscy5oZWlnaHQsMCxhLHUscy5kYXRhKSxjb25zb2xlLmVycm9yPWgpOmNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIHBpeGVsIGFyZ3VtZW50IHBhc3NlZCB0byBnbC50ZXhJbWFnZTJEIVwiKSk6OT09PXA/KHY9Y29uc29sZS5lcnJvcixjb25zb2xlLmVycm9yPWZ1bmN0aW9uKCl7fSxtKGUsdCxvLG4scixpLGEsdSxjKSxjb25zb2xlLmVycm9yPXYpOmNvbnNvbGUuZXJyb3IoXCJnbC50ZXhJbWFnZTJEOiBpbnZhbGlkIGFyZ3VtZW50IGNvdW50IVwiKX0sZz1iLnRleFN1YkltYWdlMkQsYi50ZXhTdWJJbWFnZTJEPWZ1bmN0aW9uKGUsdCxvLG4scixpLGEsdSxjKXt2YXIgcyxmLGwsZCxoLHYscD1hcmd1bWVudHMubGVuZ3RoOzc9PT1wPyhzPWEsdT1pLGE9cixzIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudD8oZj1jb25zb2xlLmVycm9yLGNvbnNvbGUuZXJyb3I9ZnVuY3Rpb24oKXt9LGcuYXBwbHkodm9pZCAwLGFyZ3VtZW50cyksY29uc29sZS5lcnJvcj1mLGIudGV4U3ViSW1hZ2UyRF9pbWFnZShlLHQsbyxuLHMuX2ltYWdlTWV0YSkpOnMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudD8obD1jb25zb2xlLmVycm9yLGNvbnNvbGUuZXJyb3I9ZnVuY3Rpb24oKXt9LGcuYXBwbHkodm9pZCAwLGFyZ3VtZW50cyksY29uc29sZS5lcnJvcj1sLGQ9cy5nZXRDb250ZXh0KFwiMmRcIiksYi50ZXhTdWJJbWFnZTJEX2NhbnZhcyhlLHQsbyxuLGEsdSxkKSk6cyBpbnN0YW5jZW9mIEltYWdlRGF0YT8oaD1jb25zb2xlLmVycm9yLGNvbnNvbGUuZXJyb3I9ZnVuY3Rpb24oKXt9LGcoZSx0LG8sbixzLndpZHRoLHMuaGVpZ2h0LGEsdSxzLmRhdGEpLGNvbnNvbGUuZXJyb3I9aCk6Y29uc29sZS5lcnJvcihcIkludmFsaWQgcGl4ZWwgYXJndW1lbnQgcGFzc2VkIHRvIGdsLnRleEltYWdlMkQhXCIpKTo5PT09cD8odj1jb25zb2xlLmVycm9yLGNvbnNvbGUuZXJyb3I9ZnVuY3Rpb24oKXt9LGcoZSx0LG8sbixyLGksYSx1LGMpLGNvbnNvbGUuZXJyb3I9dik6Y29uc29sZS5lcnJvcihuZXcgRXJyb3IoXCJnbC50ZXhJbWFnZTJEOiBpbnZhbGlkIGFyZ3VtZW50IGNvdW50IVwiKS5zdGFjayl9KX0se31dLDE5OltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksby5kZWZhdWx0PWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXkmJih5PU9iamVjdC5hc3NpZ24oe30sdCksT2JqZWN0LmtleXModCkuZm9yRWFjaChmdW5jdGlvbihlKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0W2VdJiYodFtlXT1mdW5jdGlvbigpe3JldHVybiBjb25zb2xlLndhcm4oXCJBdWRpb0VuZ2luZS5cIitlK1wiIGlzIGRlcHJlY2F0ZWRcIikseVtlXS5hcHBseSh0LGFyZ3VtZW50cyl9KX0pKTtyZXR1cm4gbmV3IFR9O2Z1bmN0aW9uIG4oZSx0LG8pe3ZhciBuPWouZ2V0KGUpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIG98fCFuKXJldHVybi0xO2Zvcih2YXIgcj1uW3RdfHxbXSxpPTAsYT1yLmxlbmd0aDtpPGE7KytpKWlmKG89PT1yW2ldKXJldHVybiByLnNwbGljZShpLDEpLG8ubGVuZ3RoKzE7cmV0dXJuIDB9ZnVuY3Rpb24gcihlLHQsbyl7dmFyIG49ai5nZXQoZSk7aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygb3x8IW4pcmV0dXJuLTE7dmFyIHI9blt0XTtpZihyKXtmb3IodmFyIGk9MCxhPXIubGVuZ3RoO2k8YTsrK2kpaWYobz09PXJbaV0pcmV0dXJuIDA7ci5wdXNoKG8pfWVsc2Ugcj1uW3RdPVtvXTtyZXR1cm4gci5sZW5ndGh9ZnVuY3Rpb24gaShlLHQsbyl7dmFyIG49Mjxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1vP286W10scj1qLmdldChlKTtpZihyKWZvcih2YXIgaT1yW3RdfHxbXSxhPTAsdT1pLmxlbmd0aDthPHU7KythKWlbYV0uYXBwbHkoZSxuKX12YXIgYT1cImNhbnBsYXlDYWxsYmFja3NcIix1PVwiZW5kZWRDYWxsYmFja3NcIixjPVwiZXJyb3JDYWxsYmFja3NcIixzPVwicGF1c2VDYWxsYmFja3NcIixmPVwicGxheUNhbGxiYWNrc1wiLGw9XCJzZWVrZWRDYWxsYmFja3NcIixkPVwic2Vla2luZ0NhbGxiYWNrc1wiLGg9XCJzdG9wQ2FsbGJhY2tzXCIsdj1cInRpbWVVcGRhdGVDYWxsYmFja3NcIixwPVwid2FpdGluZ0NhbGxiYWNrc1wiLGI9MTAwMDMsbT0tMSxnPXtFUlJPUjotMSxJTklUSUFMSVpJTkc6MCxQTEFZSU5HOjEsUEFVU0VEOjJ9LHk9dm9pZCAwLGo9bmV3IFdlYWtNYXA7ZnVuY3Rpb24gVCgpe3RoaXMuc3RhcnRUaW1lPTAsdGhpcy5hdXRvcGxheT0hMSxqLnNldCh0aGlzLHtzcmM6XCJcIix2b2x1bWU6MSxsb29wOiExfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJsb29wXCIse3NldDpmdW5jdGlvbihlKXtlPSEhZTt2YXIgdCxvPWouZ2V0KHRoaXMpO28mJihcIm51bWJlclwiPT10eXBlb2YodD1vLmF1ZGlvSUQpJiYwPD10JiZ5LnNldExvb3AodCxlKSxvLmxvb3A9ZSl9LGdldDpmdW5jdGlvbigpe3ZhciBlPWouZ2V0KHRoaXMpO3JldHVybiEhZSYmZS5sb29wfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwidm9sdW1lXCIse3NldDpmdW5jdGlvbihlKXtcIm51bWJlclwiPT10eXBlb2YgZT9lPDA/ZT0wOjE8ZSYmKGU9MSk6ZT0xO3ZhciB0LG89ai5nZXQodGhpcyk7byYmKFwibnVtYmVyXCI9PXR5cGVvZih0PW8uYXVkaW9JRCkmJjA8PXQmJnkuc2V0Vm9sdW1lKHQsZSksby52b2x1bWU9ZSl9LGdldDpmdW5jdGlvbigpe3ZhciBlPWouZ2V0KHRoaXMpO3JldHVybiBlP2Uudm9sdW1lOjF9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJzcmNcIix7c2V0OmZ1bmN0aW9uKGUpe3ZhciB0LG8sbj1qLmdldCh0aGlzKTtuJiYodD1uLnNyYyxcInN0cmluZ1wiPT10eXBlb2Yobi5zcmM9ZSkmJihcIm51bWJlclwiPT10eXBlb2Yobz1uLmF1ZGlvSUQpJiYwPD1vJiZ5LmdldFN0YXRlKG8pPT09Zy5QQVVTRUQmJnQhPT1lJiYoeS5zdG9wKG8pLG4uYXVkaW9JRD0tMSksdGhpcy5hdXRvcGxheSYmdGhpcy5wbGF5KCkpKX0sZ2V0OmZ1bmN0aW9uKCl7dmFyIGU9ai5nZXQodGhpcyk7cmV0dXJuIGU/ZS5zcmM6XCJcIn19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImR1cmF0aW9uXCIse2dldDpmdW5jdGlvbigpe3ZhciBlPWouZ2V0KHRoaXMpO2lmKGUpe3ZhciB0PWUuYXVkaW9JRDtpZihcIm51bWJlclwiPT10eXBlb2YgdCYmMDw9dClyZXR1cm4geS5nZXREdXJhdGlvbih0KX1yZXR1cm4gTmFOfSxzZXQ6ZnVuY3Rpb24oKXt9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJjdXJyZW50VGltZVwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgZT1qLmdldCh0aGlzKTtpZihlKXt2YXIgdD1lLmF1ZGlvSUQ7aWYoXCJudW1iZXJcIj09dHlwZW9mIHQmJjA8PXQpcmV0dXJuIHkuZ2V0Q3VycmVudFRpbWUodCl9cmV0dXJuIDB9LHNldDpmdW5jdGlvbigpe319KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInBhdXNlZFwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgZT1qLmdldCh0aGlzKTtpZihlKXt2YXIgdD1lLmF1ZGlvSUQ7aWYoXCJudW1iZXJcIj09dHlwZW9mIHQmJjA8PXQpcmV0dXJuIHkuZ2V0U3RhdGUodCk9PT1nLlBBVVNFRH1yZXR1cm4hMH0sc2V0OmZ1bmN0aW9uKCl7fX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiYnVmZmVyZWRcIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIGU9ai5nZXQodGhpcyk7aWYoZSl7dmFyIHQ9ZS5hdWRpb0lEO2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0JiYwPD10KXJldHVybiB5LmdldEJ1ZmZlcmVkKHQpfXJldHVybiAwfSxzZXQ6ZnVuY3Rpb24oKXt9fSl9dmFyIHg9VC5wcm90b3R5cGU7eC5kZXN0cm95PWZ1bmN0aW9uKCl7dmFyIGUsdD1qLmdldCh0aGlzKTt0JiYoXCJudW1iZXJcIj09dHlwZW9mKGU9dC5hdWRpb0lEKSYmMDw9ZSYmKHkuc3RvcChlKSx0LmF1ZGlvSUQ9LTEsaSh0aGlzLGgpKSx0W2FdPVtdLHRbdV09W10sdFtjXT1bXSx0W3NdPVtdLHRbZl09W10sdFtsXT1bXSx0W2RdPVtdLHRbaF09W10sdFt2XT1bXSx0W3BdPVtdLGNsZWFySW50ZXJ2YWwodC5pbnRlcnZhbElEKSl9LHgucGxheT1mdW5jdGlvbigpe3ZhciBlPWouZ2V0KHRoaXMpO2lmKGUpe3ZhciB0LG89ZS5zcmMsbj1lLmF1ZGlvSUQ7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG8mJlwiXCIhPT1vKXtpZihcIm51bWJlclwiPT10eXBlb2YgbiYmMDw9bil7aWYoeS5nZXRTdGF0ZShuKT09PWcuUEFVU0VEKXJldHVybiB5LnJlc3VtZShuKSx2b2lkIGkodGhpcyxmKTt5LnN0b3AobiksZS5hdWRpb0lEPS0xfS0xIT09KG49eS5wbGF5KG8sdGhpcy5sb29wLHRoaXMudm9sdW1lKSk/KGUuYXVkaW9JRD1uLFwibnVtYmVyXCI9PXR5cGVvZiB0aGlzLnN0YXJ0VGltZSYmMDx0aGlzLnN0YXJ0VGltZSYmeS5zZXRDdXJyZW50VGltZShuLHRoaXMuc3RhcnRUaW1lKSxpKHRoaXMscCksdD10aGlzLHkuc2V0Q2FuUGxheUNhbGxiYWNrKG4sZnVuY3Rpb24oKXtvPT09dC5zcmMmJihpKHQsYSksaSh0LGYpKX0pLHkuc2V0V2FpdGluZ0NhbGxiYWNrKG4sZnVuY3Rpb24oKXtvPT09dC5zcmMmJmkodCxwKX0pLHkuc2V0RXJyb3JDYWxsYmFjayhuLGZ1bmN0aW9uKCl7bz09PXQuc3JjJiYoZS5hdWRpb0lEPS0xLGkodCxjKSl9KSx5LnNldEZpbmlzaENhbGxiYWNrKG4sZnVuY3Rpb24oKXtvPT09dC5zcmMmJihlLmF1ZGlvSUQ9LTEsaSh0LHUpKX0pKTppKHRoaXMsYyxbe2Vyck1zZzpcInVua25vd25cIixlcnJDb2RlOm19XSl9ZWxzZSBpKHRoaXMsYyxbe2Vyck1zZzpcImludmFsaWQgc3JjXCIsZXJyQ29kZTpifV0pfX0seC5wYXVzZT1mdW5jdGlvbigpe3ZhciBlLHQ9ai5nZXQodGhpcyk7IXR8fFwibnVtYmVyXCI9PXR5cGVvZihlPXQuYXVkaW9JRCkmJjA8PWUmJih5LnBhdXNlKGUpLGkodGhpcyxzKSl9LHguc2Vlaz1mdW5jdGlvbihlKXt2YXIgdCxvPWouZ2V0KHRoaXMpO28mJlwibnVtYmVyXCI9PXR5cGVvZiBlJiYwPD1lJiYoXCJudW1iZXJcIj09dHlwZW9mKHQ9by5hdWRpb0lEKSYmMDw9dCYmKHkuc2V0Q3VycmVudFRpbWUodCxlKSxpKHRoaXMsZCksaSh0aGlzLGwpKSl9LHguc3RvcD1mdW5jdGlvbigpe3ZhciBlLHQ9ai5nZXQodGhpcyk7IXR8fFwibnVtYmVyXCI9PXR5cGVvZihlPXQuYXVkaW9JRCkmJjA8PWUmJih5LnN0b3AoZSksdC5hdWRpb0lEPS0xLGkodGhpcyxoKSl9LHgub2ZmQ2FucGxheT1mdW5jdGlvbihlKXtuKHRoaXMsYSxlKX0seC5vZmZFbmRlZD1mdW5jdGlvbihlKXtuKHRoaXMsdSxlKX0seC5vZmZFcnJvcj1mdW5jdGlvbihlKXtuKHRoaXMsYyxlKX0seC5vZmZQYXVzZT1mdW5jdGlvbihlKXtuKHRoaXMscyxlKX0seC5vZmZQbGF5PWZ1bmN0aW9uKGUpe24odGhpcyxmLGUpfSx4Lm9mZlNlZWtlZD1mdW5jdGlvbihlKXtuKHRoaXMsbCxlKX0seC5vZmZTZWVraW5nPWZ1bmN0aW9uKGUpe24odGhpcyxkLGUpfSx4Lm9mZlN0b3A9ZnVuY3Rpb24oZSl7bih0aGlzLGgsZSl9LHgub2ZmVGltZVVwZGF0ZT1mdW5jdGlvbihlKXsxPT09bih0aGlzLHYsZSkmJmNsZWFySW50ZXJ2YWwoai5nZXQodGhpcykuaW50ZXJ2YWxJRCl9LHgub2ZmV2FpdGluZz1mdW5jdGlvbihlKXtuKHRoaXMscCxlKX0seC5vbkNhbnBsYXk9ZnVuY3Rpb24oZSl7cih0aGlzLGEsZSl9LHgub25FbmRlZD1mdW5jdGlvbihlKXtyKHRoaXMsdSxlKX0seC5vbkVycm9yPWZ1bmN0aW9uKGUpe3IodGhpcyxjLGUpfSx4Lm9uUGF1c2U9ZnVuY3Rpb24oZSl7cih0aGlzLHMsZSl9LHgub25QbGF5PWZ1bmN0aW9uKGUpe3IodGhpcyxmLGUpfSx4Lm9uU2Vla2VkPWZ1bmN0aW9uKGUpe3IodGhpcyxsLGUpfSx4Lm9uU2Vla2luZz1mdW5jdGlvbihlKXtyKHRoaXMsXCJzZWVraW5nQ2FsbGJhY2tzXCIsZSl9LHgub25TdG9wPWZ1bmN0aW9uKGUpe3IodGhpcyxoLGUpfSx4Lm9uVGltZVVwZGF0ZT1mdW5jdGlvbihlKXt2YXIgdCxvLG47MT09PXIodGhpcyx2LGUpJiYodD1qLmdldCh0aGlzKSxvPXRoaXMsbj1zZXRJbnRlcnZhbChmdW5jdGlvbigpe3ZhciBlLHQ9ai5nZXQobyk7dD9cIm51bWJlclwiPT10eXBlb2YoZT10LmF1ZGlvSUQpJiYwPD1lJiZ5LmdldFN0YXRlKGUpPT09Zy5QTEFZSU5HJiZpKG8sdik6Y2xlYXJJbnRlcnZhbChuKX0sNTAwKSx0LmludGVydmFsSUQ9bil9LHgub25XYWl0aW5nPWZ1bmN0aW9uKGUpe3IodGhpcyxwLGUpfX0se31dLDIwOltmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gaShlKXtyZXR1cm4oaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSkoZSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksby5kZWZhdWx0PXZvaWQgMDt2YXIgbj17ZXhwb3J0VG86ZnVuY3Rpb24oZSx0LG8sbil7dmFyIHI7XCJvYmplY3RcIj09PWkodCkmJlwib2JqZWN0XCI9PT1pKG8pP3ZvaWQgMCE9PShyPXRbZV0pP29bZV09XCJmdW5jdGlvblwiPT10eXBlb2Ygcj9yLmJpbmQodCk6cjoob1tlXT1mdW5jdGlvbigpe3JldHVybiBjb25zb2xlLmVycm9yKGUrXCIgaXMgbm90IHN1cHBvcnQhXCIpLHt9fSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZuKCkpOmNvbnNvbGUud2FybihcImludmFsaWQgZXhwb3J0VG86IFwiLGUpfX07by5kZWZhdWx0PW59LHt9XX0se30sWzhdKTsiXSwiZmlsZSI6ImpzYi5qcyJ9
