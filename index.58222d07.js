var e,t={};
/* @license
Papa Parse
v5.3.2
https://github.com/mholt/PapaParse
License: MIT
*/e=function e(){var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},i=!t.document&&!!t.postMessage,n=i&&/blob:/i.test((t.location||{}).protocol),r={},s=0,a={parse:function(i,n){var o=(n=n||{}).dynamicTyping||!1;if(b(o)&&(n.dynamicTypingFunction=o,o={}),n.dynamicTyping=o,n.transform=!!b(n.transform)&&n.transform,n.worker&&a.WORKERS_SUPPORTED){var u=function(){if(!a.WORKERS_SUPPORTED)return!1;var i,n,o=(i=t.URL||t.webkitURL||null,n=e.toString(),a.BLOB_URL||(a.BLOB_URL=i.createObjectURL(new Blob(["(",n,")();"],{type:"text/javascript"})))),u=new t.Worker(o);return u.onmessage=m,u.id=s++,r[u.id]=u}();return u.userStep=n.step,u.userChunk=n.chunk,u.userComplete=n.complete,u.userError=n.error,n.step=b(n.step),n.chunk=b(n.chunk),n.complete=b(n.complete),n.error=b(n.error),delete n.worker,void u.postMessage({input:i,config:n,workerId:u.id})}var f=null;return a.NODE_STREAM_INPUT,"string"==typeof i?f=n.download?new h(n):new c(n):!0===i.readable&&b(i.read)&&b(i.on)?f=new l(n):(t.File&&i instanceof File||i instanceof Object)&&(f=new d(n)),f.stream(i)},unparse:function(e,t){var i=!1,n=!0,r=",",s="\r\n",o='"',u=o+o,h=!1,d=null,c=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(r=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(i=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(h=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(n=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");d=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+o),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(c=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}}();var l=new RegExp(p(o),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return f(null,e,h);if("object"==typeof e[0])return f(d||Object.keys(e[0]),e,h)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||d),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),f(e.fields||[],e.data||[],h);throw new Error("Unable to serialize unrecognized input");function f(e,t,i){var a="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(o&&n){for(var h=0;h<e.length;h++)0<h&&(a+=r),a+=g(e[h],h);0<t.length&&(a+=s)}for(var d=0;d<t.length;d++){var c=o?e.length:t[d].length,l=!1,f=o?0===Object.keys(t[d]).length:0===t[d].length;if(i&&!o&&(l="greedy"===i?""===t[d].join("").trim():1===t[d].length&&0===t[d][0].length),"greedy"===i&&o){for(var p=[],m=0;m<c;m++){var _=u?e[m]:m;p.push(t[d][_])}l=""===p.join("").trim()}if(!l){for(var y=0;y<c;y++){0<y&&!f&&(a+=r);var v=o&&u?e[y]:y;a+=g(t[d][v],y)}d<t.length-1&&(!i||0<c&&!f)&&(a+=s)}}return a}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var n=!1;c&&"string"==typeof e&&c.test(e)&&(e="'"+e,n=!0);var s=e.toString().replace(l,u);return(n=n||!0===i||"function"==typeof i&&i(e,t)||Array.isArray(i)&&i[t]||function(e,t){for(var i=0;i<t.length;i++)if(-1<e.indexOf(t[i]))return!0;return!1}(s,a.BAD_DELIMITERS)||-1<s.indexOf(r)||" "===s.charAt(0)||" "===s.charAt(s.length-1))?o+s+o:s}}};if(a.RECORD_SEP=String.fromCharCode(30),a.UNIT_SEP=String.fromCharCode(31),a.BYTE_ORDER_MARK="\ufeff",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!i&&!!t.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=g,a.ParserHandle=f,a.NetworkStreamer=h,a.FileStreamer=d,a.StringStreamer=c,a.ReadableStreamStreamer=l,t.jQuery){var o=t.jQuery;o.fn.parse=function(e){var i=e.config||{},n=[];return this.each((function(e){if("INPUT"!==o(this).prop("tagName").toUpperCase()||"file"!==o(this).attr("type").toLowerCase()||!t.FileReader||!this.files||0===this.files.length)return!0;for(var r=0;r<this.files.length;r++)n.push({file:this.files[r],inputElem:this,instanceConfig:o.extend({},i)})})),r(),this;function r(){if(0!==n.length){var t,i,r,u=n[0];if(b(e.before)){var h=e.before(u.file,u.inputElem);if("object"==typeof h){if("abort"===h.action)return t=u.file,i=u.inputElem,r=h.reason,void(b(e.error)&&e.error({name:"AbortError"},t,i,r));if("skip"===h.action)return void s();"object"==typeof h.config&&(u.instanceConfig=o.extend(u.instanceConfig,h.config))}else if("skip"===h)return void s()}var d=u.instanceConfig.complete;u.instanceConfig.complete=function(e){b(d)&&d(e,u.file,u.inputElem),s()},a.parse(u.file,u.instanceConfig)}else b(e.complete)&&e.complete()}function s(){n.splice(0,1),r()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=v(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new f(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,i){if(this.isFirstChunk&&b(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);void 0!==r&&(e=r)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var o=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=o.meta.cursor;this._finished||(this._partialLine=s.substring(u-this._baseIndex),this._baseIndex=u),o&&o.data&&(this._rowCount+=o.data.length);var h=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(n)t.postMessage({results:o,workerId:a.WORKER_ID,finished:h});else if(b(this._config.chunk)&&!i){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);o=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!h||!b(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),h||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(e){b(this._config.error)?this._config.error(e):n&&this._config.error&&t.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function h(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),u.call(this,e),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),i||(t.onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var n in e)t.setRequestHeader(n,e[n])}if(this._config.chunkSize){var r=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+r)}try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}i&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){var i=t.statusText||e;this._sendError(new Error(i))}}function d(e){var t,i;(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),u.call(this,e);var n="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,i=e.slice||e.webkitSlice||e.mozSlice,n?((t=new FileReader).onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var r=Math.min(this._start+this._config.chunkSize,this._input.size);e=i.call(e,this._start,r)}var s=t.readAsText(e,this._config.encoding);n||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function c(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,i=this._config.chunkSize;return i?(e=t.substring(0,i),t=t.substring(i)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function l(e){u.call(this,e=e||{});var t=[],i=!0,n=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=k((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=k((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=k((function(){this._streamCleanUp(),n=!0,this._streamData("")}),this),this._streamCleanUp=k((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function f(e){var t,i,n,r=Math.pow(2,53),s=-r,o=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/,h=this,d=0,c=0,l=!1,f=!1,m=[],_={data:[],errors:[],meta:{}};if(b(e.step)){var y=e.step;e.step=function(t){if(_=t,w())E();else{if(E(),0===_.data.length)return;d+=t.data.length,e.preview&&d>e.preview?i.abort():(_.data=_.data[0],y(_,h))}}}function k(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function E(){return _&&n&&(R("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),n=!1),e.skipEmptyLines&&(_.data=_.data.filter((function(e){return!k(e)}))),w()&&function(){if(_)if(Array.isArray(_.data[0])){for(var t=0;w()&&t<_.data.length;t++)_.data[t].forEach(i);_.data.splice(0,1)}else _.data.forEach(i);function i(t,i){b(e.transformHeader)&&(t=e.transformHeader(t,i)),m.push(t)}}(),function(){if(!_||!e.header&&!e.dynamicTyping&&!e.transform)return _;function t(t,i){var n,r=e.header?{}:[];for(n=0;n<t.length;n++){var s=n,a=t[n];e.header&&(s=n>=m.length?"__parsed_extra":m[n]),e.transform&&(a=e.transform(a,s)),a=C(s,a),"__parsed_extra"===s?(r[s]=r[s]||[],r[s].push(a)):r[s]=a}return e.header&&(n>m.length?R("FieldMismatch","TooManyFields","Too many fields: expected "+m.length+" fields but parsed "+n,c+i):n<m.length&&R("FieldMismatch","TooFewFields","Too few fields: expected "+m.length+" fields but parsed "+n,c+i)),r}var i=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(t),i=_.data.length):_.data=t(_.data,0),e.header&&_.meta&&(_.meta.fields=m),c+=i,_}()}function w(){return e.header&&0===m.length}function C(t,i){var n;return n=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[n]&&(e.dynamicTyping[n]=e.dynamicTypingFunction(n)),!0===(e.dynamicTyping[n]||e.dynamicTyping)?"true"===i||"TRUE"===i||"false"!==i&&"FALSE"!==i&&(function(e){if(o.test(e)){var t=parseFloat(e);if(s<t&&t<r)return!0}return!1}(i)?parseFloat(i):u.test(i)?new Date(i):""===i?null:i):i}function R(e,t,i,n){var r={type:e,code:t,message:i};void 0!==n&&(r.row=n),_.errors.push(r)}this.parse=function(r,s,o){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var i=new RegExp(p(t)+"([^]*?)"+p(t),"gm"),n=(e=e.replace(i,"")).split("\r"),r=e.split("\n"),s=1<r.length&&r[0].length<n[0].length;if(1===n.length||s)return"\n";for(var a=0,o=0;o<n.length;o++)"\n"===n[o][0]&&a++;return a>=n.length/2?"\r\n":"\r"}(r,u)),n=!1,e.delimiter)b(e.delimiter)&&(e.delimiter=e.delimiter(r),_.meta.delimiter=e.delimiter);else{var h=function(t,i,n,r,s){var o,u,h,d;s=s||[",","\t","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var c=0;c<s.length;c++){var l=s[c],f=0,p=0,m=0;h=void 0;for(var _=new g({comments:r,delimiter:l,newline:i,preview:10}).parse(t),y=0;y<_.data.length;y++)if(n&&k(_.data[y]))m++;else{var v=_.data[y].length;p+=v,void 0!==h?0<v&&(f+=Math.abs(v-h),h=v):h=v}0<_.data.length&&(p/=_.data.length-m),(void 0===u||f<=u)&&(void 0===d||d<p)&&1.99<p&&(u=f,o=l,d=p)}return{successful:!!(e.delimiter=o),bestDelimiter:o}}(r,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);h.successful?e.delimiter=h.bestDelimiter:(n=!0,e.delimiter=a.DefaultDelimiter),_.meta.delimiter=e.delimiter}var d=v(e);return e.preview&&e.header&&d.preview++,t=r,i=new g(d),_=i.parse(t,s,o),E(),l?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return l},this.pause=function(){l=!0,i.abort(),t=b(e.chunk)?"":t.substring(i.getCharIndex())},this.resume=function(){h.streamer._halted?(l=!1,h.streamer.parseChunk(t,!0)):setTimeout(h.resume,3)},this.aborted=function(){return f},this.abort=function(){f=!0,i.abort(),_.meta.aborted=!0,b(e.complete)&&e.complete(_),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t,i=(e=e||{}).delimiter,n=e.newline,r=e.comments,s=e.step,o=e.preview,u=e.fastMode,h=t=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(h=e.escapeChar),("string"!=typeof i||-1<a.BAD_DELIMITERS.indexOf(i))&&(i=","),r===i)throw new Error("Comment character same as delimiter");!0===r?r="#":("string"!=typeof r||-1<a.BAD_DELIMITERS.indexOf(r))&&(r=!1),"\n"!==n&&"\r"!==n&&"\r\n"!==n&&(n="\n");var d=0,c=!1;this.parse=function(e,a,l){if("string"!=typeof e)throw new Error("Input must be a string");var f=e.length,g=i.length,m=n.length,_=r.length,y=b(s),v=[],k=[],E=[],w=d=0;if(!e)return j();if(u||!1!==u&&-1===e.indexOf(t)){for(var C=e.split(n),R=0;R<C.length;R++){if(E=C[R],d+=E.length,R!==C.length-1)d+=n.length;else if(l)return j();if(!r||E.substring(0,_)!==r){if(y){if(v=[],L(E.split(i)),z(),c)return j()}else L(E.split(i));if(o&&o<=R)return v=v.slice(0,o),j(!0)}}return j()}for(var x=e.indexOf(i,d),S=e.indexOf(n,d),O=new RegExp(p(h)+p(t),"g"),A=e.indexOf(t,d);;)if(e[d]!==t)if(r&&0===E.length&&e.substring(d,d+_)===r){if(-1===S)return j();d=S+m,S=e.indexOf(n,d),x=e.indexOf(i,d)}else if(-1!==x&&(x<S||-1===S))E.push(e.substring(d,x)),d=x+g,x=e.indexOf(i,d);else{if(-1===S)break;if(E.push(e.substring(d,S)),M(S+m),y&&(z(),c))return j();if(o&&v.length>=o)return j(!0)}else for(A=d,d++;;){if(-1===(A=e.indexOf(t,A+1)))return l||k.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:v.length,index:d}),F();if(A===f-1)return F(e.substring(d,A).replace(O,t));if(t!==h||e[A+1]!==h){if(t===h||0===A||e[A-1]!==h){-1!==x&&x<A+1&&(x=e.indexOf(i,A+1)),-1!==S&&S<A+1&&(S=e.indexOf(n,A+1));var I=D(-1===S?x:Math.min(x,S));if(e.substr(A+1+I,g)===i){E.push(e.substring(d,A).replace(O,t)),e[d=A+1+I+g]!==t&&(A=e.indexOf(t,d)),x=e.indexOf(i,d),S=e.indexOf(n,d);break}var T=D(S);if(e.substring(A+1+T,A+1+T+m)===n){if(E.push(e.substring(d,A).replace(O,t)),M(A+1+T+m),x=e.indexOf(i,d),A=e.indexOf(t,d),y&&(z(),c))return j();if(o&&v.length>=o)return j(!0);break}k.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:v.length,index:d}),A++}}else A++}return F();function L(e){v.push(e),w=d}function D(t){var i=0;if(-1!==t){var n=e.substring(A+1,t);n&&""===n.trim()&&(i=n.length)}return i}function F(t){return l||(void 0===t&&(t=e.substring(d)),E.push(t),d=f,L(E),y&&z()),j()}function M(t){d=t,L(E),E=[],S=e.indexOf(n,d)}function j(e){return{data:v,errors:k,meta:{delimiter:i,linebreak:n,aborted:c,truncated:!!e,cursor:w+(a||0)}}}function z(){s(j()),v=[],k=[]}},this.abort=function(){c=!0},this.getCharIndex=function(){return d}}function m(e){var t=e.data,i=r[t.workerId],n=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){n=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(b(i.userStep)){for(var a=0;a<t.results.data.length&&(i.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},s),!n);a++);delete t.results}else b(i.userChunk)&&(i.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!n&&_(t.workerId,t.results)}function _(e,t){var i=r[e];b(i.userComplete)&&i.userComplete(t),i.terminate(),delete r[e]}function y(){throw new Error("Not implemented.")}function v(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var i in e)t[i]=v(e[i]);return t}function k(e,t){return function(){e.apply(t,arguments)}}function b(e){return"function"==typeof e}return n&&(t.onmessage=function(e){var i=e.data;if(void 0===a.WORKER_ID&&i&&(a.WORKER_ID=i.workerId),"string"==typeof i.input)t.postMessage({workerId:a.WORKER_ID,results:a.parse(i.input,i.config),finished:!0});else if(t.File&&i.input instanceof File||i.input instanceof Object){var n=a.parse(i.input,i.config);n&&t.postMessage({workerId:a.WORKER_ID,results:n,finished:!0})}}),(h.prototype=Object.create(u.prototype)).constructor=h,(d.prototype=Object.create(u.prototype)).constructor=d,(c.prototype=Object.create(c.prototype)).constructor=c,(l.prototype=Object.create(u.prototype)).constructor=l,a},"function"==typeof define&&define.amd?define([],e):t=e();!function(){const e=document.querySelectorAll(".upload"),i=document.getElementById("disavow-file-output"),n=document.getElementById("csv-file-output").querySelector("table"),r=n.querySelector("thead"),s=n.querySelector("tbody"),a=document.getElementById("copy-links"),o=document.getElementById("download-links"),u=document.getElementById("clear-links");let h=[],d=[],c=[],l=!1;const f=function(){let e="";c.forEach(((t,i)=>{t&&(e+=`<span class="domain-link" id="domain-${i}">${t}</span><br/>`)})),i.innerHTML=e,i.scrollHeight>300&&setTimeout((()=>{i.scroll({top:i.scrollHeight,behavior:"smooth"})}),100),y()},p=function(){return!0},g=function(e,t){const i=document.createElement("tr"),n=t>0&&h[t-1].isChecked;let a=`<td><input class="toggle-box" id="toggle-item-${t}" type="checkbox" name="toggle-item" data-index="${t-1}" ${n?"checked":""}></td>`;0===t&&(a=`<td><input type="checkbox" name="toggle-all" id="toggle-item-${t}"></td>`),i.innerHTML+=a,e.forEach((function(e,n){let r=`<td>${e}</td>`;0===n&&(r=`<td><label for="toggle-item-${t}">${e}</label></td>`),i.innerHTML+=r})),0===t?r.append(i):s.append(i)},m=function(e,t){h[t].isChecked=e.checked;const i=`domain:${h[t].linkData[0]}`;if(e.checked&&!c.includes(i))c.push(i);else if(!e.checked&&c.includes(i)){const e=c.findIndex((e=>e===i));c.splice(e,1)}},_=function(e,t){var i;"text/plain"===t?(d.length||(d=Array.from(document.querySelectorAll(".toggle-box"))),e.data.forEach((e=>{if(!c.includes(e[0])){c.push(e[0]);const t=e[0].slice(e[0].indexOf(":")+1),i=h.findIndex((e=>e.linkData[0]===t));h.length&&i>-1&&(h[i].isChecked=!0,d[i].checked=!0)}}))):"text/csv"===t&&(i=e.data,h=i.filter(((e,t)=>0!==t)).map((function(e,t){const i=c.find((t=>{const i=t.indexOf(":"),n=t.slice(i+1);return e.includes(n)}));return{isChecked:Boolean(i),linkData:e,isHead:0===t}})))},y=function(){!l&&c.length?(a.removeAttribute("disabled"),o.removeAttribute("disabled"),u.removeAttribute("disabled"),l=!0):l&&!c.length&&(a.setAttribute("disabled",!0),o.setAttribute("disabled",!0),u.setAttribute("disabled",!0),l=!1)},v=function(e){const{target:i}=e,n=i.files[0],r={complete:function(e,t){_(e,t.type);let n="disavow-file"===i.id?p:g;e.data.forEach(n),f()}};t.parse(n,r)};e.forEach((e=>{e.addEventListener("change",v)})),n.addEventListener("click",(function(e){if(e&&e.target&&e.target.type&&"checkbox"===e.target.type)if("toggle-all"===e.target.name)d.length||(d=Array.from(document.querySelectorAll(".toggle-box"))),d.forEach(((t,i)=>{t.checked=e.target.checked,m(e.target,i)}));else{const t=parseInt(e.target.dataset.index);m(e.target,t)}f()})),a.addEventListener("click",(function(){const e=c.join("\r\n");navigator.clipboard.writeText(e).then((()=>{alert("Text copied to clipboard")})).catch((e=>{alert("Error in copying text: ",e)}))})),o.addEventListener("click",(function(){const e=c.join("\r\n");var t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(e)),t.setAttribute("download","disavow.txt"),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)})),u.addEventListener("click",(function(){c=[],f()}))}();
//# sourceMappingURL=index.58222d07.js.map
