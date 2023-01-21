// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fyTPu":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "207a8fdfe82f28a0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"dV6cC":[function(require,module,exports) {
var _papaparseMinJs = require("./papaparse.min.js");
(function() {
    const upload = document.querySelectorAll(".upload");
    const disavowOutput = document.getElementById("disavow-file-output");
    const csvOutput = document.getElementById("csv-file-output");
    const csvOutputTable = csvOutput.querySelector("table");
    const csvOutputThead = csvOutputTable.querySelector("thead");
    const csvOutputTbody = csvOutputTable.querySelector("tbody");
    const copyLinks = document.getElementById("copy-links");
    const downloadLinks = document.getElementById("download-links");
    const clearLinks = document.getElementById("clear-links");
    let csvData = [];
    let checkboxes = [];
    let disavowData = [];
    let isButtonsEnabled = false;
    const renderLinks = function() {
        let output = "";
        disavowData.forEach((item, i)=>{
            if (item) output += `<span class="domain-link" id="domain-${i}">${item}</span><br/>`;
        });
        disavowOutput.innerHTML = output;
        if (disavowOutput.scrollHeight > 300) setTimeout(()=>{
            disavowOutput.scroll({
                top: disavowOutput.scrollHeight,
                behavior: "smooth"
            });
        }, 100);
        updateButtonsState();
    };
    const disavowCallback = function() {
        return true;
    };
    const csvCallback = function(entry, i) {
        const row = document.createElement("tr");
        const isChecked = i > 0 ? csvData[i - 1].isChecked : false;
        let firstCell = `<td><input class="toggle-box" id="toggle-item-${i}" type="checkbox" name="toggle-item" data-index="${i - 1}" ${isChecked ? "checked" : ""}></td>`;
        if (i === 0) firstCell = `<td><input type="checkbox" name="toggle-all" id="toggle-item-${i}"></td>`;
        row.innerHTML += firstCell;
        entry.forEach(function(item, itemIndex) {
            let content = `<td>${item}</td>`;
            if (itemIndex === 0) content = `<td><label for="toggle-item-${i}">${item}</label></td>`;
            row.innerHTML += content;
        });
        if (i === 0) csvOutputThead.append(row);
        else csvOutputTbody.append(row);
    };
    const setCsvData = function(data) {
        csvData = data.filter((item, i)=>i !== 0).map(function(item, i) {
            const isChecked = disavowData.find((domain)=>{
                const prefixIndex = domain.indexOf(":");
                const link = domain.slice(prefixIndex + 1);
                return item.includes(link);
            });
            return {
                isChecked: Boolean(isChecked),
                linkData: item,
                isHead: i === 0
            };
        });
    };
    const setDisavowData = function(element, index) {
        csvData[index].isChecked = element.checked;
        const domainName = `domain:${csvData[index].linkData[0]}`;
        if (element.checked && !disavowData.includes(domainName)) disavowData.push(domainName);
        else if (!element.checked && disavowData.includes(domainName)) {
            const itemIndex = disavowData.findIndex((item)=>item === domainName);
            disavowData.splice(itemIndex, 1);
        }
    };
    const syncData = function(results, type) {
        if (type === "text/plain") {
            if (!checkboxes.length) checkboxes = Array.from(document.querySelectorAll(".toggle-box"));
            results.data.forEach((item)=>{
                if (!disavowData.includes(item[0])) {
                    disavowData.push(item[0]);
                    const domainName = item[0].slice(item[0].indexOf(":") + 1);
                    const isCsvContainsIndex = csvData.findIndex((item)=>item.linkData[0] === domainName);
                    if (csvData.length && isCsvContainsIndex > -1) {
                        csvData[isCsvContainsIndex].isChecked = true;
                        checkboxes[isCsvContainsIndex].checked = true;
                    }
                }
            });
        } else if (type === "text/csv") setCsvData(results.data);
    };
    const updateButtonsState = function() {
        if (!isButtonsEnabled && disavowData.length) {
            copyLinks.removeAttribute("disabled");
            downloadLinks.removeAttribute("disabled");
            clearLinks.removeAttribute("disabled");
            isButtonsEnabled = true;
        } else if (isButtonsEnabled && !disavowData.length) {
            copyLinks.setAttribute("disabled", true);
            downloadLinks.setAttribute("disabled", true);
            clearLinks.setAttribute("disabled", true);
            isButtonsEnabled = false;
        }
    };
    const handleTableClick = function(e) {
        if (e && e.target && e.target.type && e.target.type === "checkbox") {
            if (e.target.name === "toggle-all") {
                if (!checkboxes.length) checkboxes = Array.from(document.querySelectorAll(".toggle-box"));
                checkboxes.forEach((checkbox, i)=>{
                    checkbox.checked = e.target.checked;
                    setDisavowData(e.target, i);
                });
            } else {
                const index = parseInt(e.target.dataset.index);
                setDisavowData(e.target, index);
            }
        }
        renderLinks();
    };
    const handleCopyLinks = function() {
        const text = disavowData.join("\r\n");
        navigator.clipboard.writeText(text).then(()=>{
            alert("Text copied to clipboard");
        }).catch((err)=>{
            alert("Error in copying text: ", err);
        });
    };
    const handleDownloadLinks = function() {
        const text = disavowData.join("\r\n");
        var filename = "disavow.txt";
        var element = document.createElement("a");
        element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
        element.setAttribute("download", filename);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };
    const handleClearLinks = function() {
        disavowData = [];
        renderLinks();
    };
    const handleUploadChange = function(e) {
        const { target  } = e;
        const file = target.files[0];
        const config = {
            complete: function(results, file) {
                syncData(results, file.type);
                let callback = target.id === "disavow-file" ? disavowCallback : csvCallback;
                results.data.forEach(callback);
                renderLinks();
            }
        };
        _papaparseMinJs.parse(file, config);
    };
    upload.forEach((item)=>{
        item.addEventListener("change", handleUploadChange);
    });
    csvOutputTable.addEventListener("click", handleTableClick);
    copyLinks.addEventListener("click", handleCopyLinks);
    downloadLinks.addEventListener("click", handleDownloadLinks);
    clearLinks.addEventListener("click", handleClearLinks);
})();

},{"./papaparse.min.js":"j0DsB"}],"j0DsB":[function(require,module,exports) {
/* @license
Papa Parse
v5.3.2
https://github.com/mholt/PapaParse
License: MIT
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = !function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : module.exports = t();
}(undefined, function s() {
    "use strict";
    var f = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== f ? f : {};
    var n = !f.document && !!f.postMessage, o = n && /blob:/i.test((f.location || {}).protocol), a = {}, h = 0, b = {
        parse: function(e, t) {
            var i = (t = t || {}).dynamicTyping || !1;
            M(i) && (t.dynamicTypingFunction = i, i = {});
            if (t.dynamicTyping = i, t.transform = !!M(t.transform) && t.transform, t.worker && b.WORKERS_SUPPORTED) {
                var r = function() {
                    if (!b.WORKERS_SUPPORTED) return !1;
                    var e = (i = f.URL || f.webkitURL || null, r = s.toString(), b.BLOB_URL || (b.BLOB_URL = i.createObjectURL(new Blob([
                        "(",
                        r,
                        ")();"
                    ], {
                        type: "text/javascript"
                    })))), t = new f.Worker(e);
                    var i, r;
                    return t.onmessage = _, t.id = h++, a[t.id] = t;
                }();
                return r.userStep = t.step, r.userChunk = t.chunk, r.userComplete = t.complete, r.userError = t.error, t.step = M(t.step), t.chunk = M(t.chunk), t.complete = M(t.complete), t.error = M(t.error), delete t.worker, void r.postMessage({
                    input: e,
                    config: t,
                    workerId: r.id
                });
            }
            var n = null;
            b.NODE_STREAM_INPUT, "string" == typeof e ? n = t.download ? new l(t) : new p(t) : !0 === e.readable && M(e.read) && M(e.on) ? n = new g(t) : (f.File && e instanceof File || e instanceof Object) && (n = new c(t));
            return n.stream(e);
        },
        unparse: function(e, t) {
            var n = !1, _ = !0, m = ",", y = "\r\n", s = '"', a = s + s, i = !1, r = null, o = !1;
            !function() {
                if ("object" != typeof t) return;
                "string" != typeof t.delimiter || b.BAD_DELIMITERS.filter(function(e) {
                    return -1 !== t.delimiter.indexOf(e);
                }).length || (m = t.delimiter);
                ("boolean" == typeof t.quotes || "function" == typeof t.quotes || Array.isArray(t.quotes)) && (n = t.quotes);
                "boolean" != typeof t.skipEmptyLines && "string" != typeof t.skipEmptyLines || (i = t.skipEmptyLines);
                "string" == typeof t.newline && (y = t.newline);
                "string" == typeof t.quoteChar && (s = t.quoteChar);
                "boolean" == typeof t.header && (_ = t.header);
                if (Array.isArray(t.columns)) {
                    if (0 === t.columns.length) throw new Error("Option columns is empty");
                    r = t.columns;
                }
                void 0 !== t.escapeChar && (a = t.escapeChar + s);
                ("boolean" == typeof t.escapeFormulae || t.escapeFormulae instanceof RegExp) && (o = t.escapeFormulae instanceof RegExp ? t.escapeFormulae : /^[=+\-@\t\r].*$/);
            }();
            var h = new RegExp(j(s), "g");
            "string" == typeof e && (e = JSON.parse(e));
            if (Array.isArray(e)) {
                if (!e.length || Array.isArray(e[0])) return u(null, e, i);
                if ("object" == typeof e[0]) return u(r || Object.keys(e[0]), e, i);
            } else if ("object" == typeof e) return "string" == typeof e.data && (e.data = JSON.parse(e.data)), Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields || r), e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : "object" == typeof e.data[0] ? Object.keys(e.data[0]) : []), Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [
                e.data
            ])), u(e.fields || [], e.data || [], i);
            throw new Error("Unable to serialize unrecognized input");
            function u(e, t, i) {
                var r = "";
                "string" == typeof e && (e = JSON.parse(e)), "string" == typeof t && (t = JSON.parse(t));
                var n = Array.isArray(e) && 0 < e.length, s = !Array.isArray(t[0]);
                if (n && _) {
                    for(var a = 0; a < e.length; a++)0 < a && (r += m), r += v(e[a], a);
                    0 < t.length && (r += y);
                }
                for(var o = 0; o < t.length; o++){
                    var h = n ? e.length : t[o].length, u = !1, f = n ? 0 === Object.keys(t[o]).length : 0 === t[o].length;
                    if (i && !n && (u = "greedy" === i ? "" === t[o].join("").trim() : 1 === t[o].length && 0 === t[o][0].length), "greedy" === i && n) {
                        for(var d = [], l = 0; l < h; l++){
                            var c = s ? e[l] : l;
                            d.push(t[o][c]);
                        }
                        u = "" === d.join("").trim();
                    }
                    if (!u) {
                        for(var p = 0; p < h; p++){
                            0 < p && !f && (r += m);
                            var g = n && s ? e[p] : p;
                            r += v(t[o][g], p);
                        }
                        o < t.length - 1 && (!i || 0 < h && !f) && (r += y);
                    }
                }
                return r;
            }
            function v(e, t) {
                if (null == e) return "";
                if (e.constructor === Date) return JSON.stringify(e).slice(1, 25);
                var i = !1;
                o && "string" == typeof e && o.test(e) && (e = "'" + e, i = !0);
                var r = e.toString().replace(h, a);
                return (i = i || !0 === n || "function" == typeof n && n(e, t) || Array.isArray(n) && n[t] || function(e, t) {
                    for(var i = 0; i < t.length; i++)if (-1 < e.indexOf(t[i])) return !0;
                    return !1;
                }(r, b.BAD_DELIMITERS) || -1 < r.indexOf(m) || " " === r.charAt(0) || " " === r.charAt(r.length - 1)) ? s + r + s : r;
            }
        }
    };
    if (b.RECORD_SEP = String.fromCharCode(30), b.UNIT_SEP = String.fromCharCode(31), b.BYTE_ORDER_MARK = "\uFEFF", b.BAD_DELIMITERS = [
        "\r",
        "\n",
        '"',
        b.BYTE_ORDER_MARK
    ], b.WORKERS_SUPPORTED = !n && !!f.Worker, b.NODE_STREAM_INPUT = 1, b.LocalChunkSize = 10485760, b.RemoteChunkSize = 5242880, b.DefaultDelimiter = ",", b.Parser = E, b.ParserHandle = i, b.NetworkStreamer = l, b.FileStreamer = c, b.StringStreamer = p, b.ReadableStreamStreamer = g, f.jQuery) {
        var d = f.jQuery;
        d.fn.parse = function(o) {
            var i = o.config || {}, h = [];
            return this.each(function(e) {
                if (!("INPUT" === d(this).prop("tagName").toUpperCase() && "file" === d(this).attr("type").toLowerCase() && f.FileReader) || !this.files || 0 === this.files.length) return !0;
                for(var t = 0; t < this.files.length; t++)h.push({
                    file: this.files[t],
                    inputElem: this,
                    instanceConfig: d.extend({}, i)
                });
            }), e(), this;
            function e() {
                if (0 !== h.length) {
                    var e, t, i, r, n = h[0];
                    if (M(o.before)) {
                        var s = o.before(n.file, n.inputElem);
                        if ("object" == typeof s) {
                            if ("abort" === s.action) return e = "AbortError", t = n.file, i = n.inputElem, r = s.reason, void (M(o.error) && o.error({
                                name: e
                            }, t, i, r));
                            if ("skip" === s.action) return void u();
                            "object" == typeof s.config && (n.instanceConfig = d.extend(n.instanceConfig, s.config));
                        } else if ("skip" === s) return void u();
                    }
                    var a = n.instanceConfig.complete;
                    n.instanceConfig.complete = function(e) {
                        M(a) && a(e, n.file, n.inputElem), u();
                    }, b.parse(n.file, n.instanceConfig);
                } else M(o.complete) && o.complete();
            }
            function u() {
                h.splice(0, 1), e();
            }
        };
    }
    function u(e) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
            data: [],
            errors: [],
            meta: {}
        }, (function(e) {
            var t = w(e);
            t.chunkSize = parseInt(t.chunkSize), e.step || e.chunk || (t.chunkSize = null);
            this._handle = new i(t), (this._handle.streamer = this)._config = t;
        }).call(this, e), this.parseChunk = function(e, t) {
            if (this.isFirstChunk && M(this._config.beforeFirstChunk)) {
                var i = this._config.beforeFirstChunk(e);
                void 0 !== i && (e = i);
            }
            this.isFirstChunk = !1, this._halted = !1;
            var r = this._partialLine + e;
            this._partialLine = "";
            var n = this._handle.parse(r, this._baseIndex, !this._finished);
            if (!this._handle.paused() && !this._handle.aborted()) {
                var s = n.meta.cursor;
                this._finished || (this._partialLine = r.substring(s - this._baseIndex), this._baseIndex = s), n && n.data && (this._rowCount += n.data.length);
                var a = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                if (o) f.postMessage({
                    results: n,
                    workerId: b.WORKER_ID,
                    finished: a
                });
                else if (M(this._config.chunk) && !t) {
                    if (this._config.chunk(n, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
                    n = void 0, this._completeResults = void 0;
                }
                return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(n.data), this._completeResults.errors = this._completeResults.errors.concat(n.errors), this._completeResults.meta = n.meta), this._completed || !a || !M(this._config.complete) || n && n.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), a || n && n.meta.paused || this._nextChunk(), n;
            }
            this._halted = !0;
        }, this._sendError = function(e) {
            M(this._config.error) ? this._config.error(e) : o && this._config.error && f.postMessage({
                workerId: b.WORKER_ID,
                error: e,
                finished: !1
            });
        };
    }
    function l(e) {
        var r;
        (e = e || {}).chunkSize || (e.chunkSize = b.RemoteChunkSize), u.call(this, e), this._nextChunk = n ? function() {
            this._readChunk(), this._chunkLoaded();
        } : function() {
            this._readChunk();
        }, this.stream = function(e) {
            this._input = e, this._nextChunk();
        }, this._readChunk = function() {
            if (this._finished) this._chunkLoaded();
            else {
                if (r = new XMLHttpRequest, this._config.withCredentials && (r.withCredentials = this._config.withCredentials), n || (r.onload = v(this._chunkLoaded, this), r.onerror = v(this._chunkError, this)), r.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !n), this._config.downloadRequestHeaders) {
                    var e = this._config.downloadRequestHeaders;
                    for(var t in e)r.setRequestHeader(t, e[t]);
                }
                if (this._config.chunkSize) {
                    var i = this._start + this._config.chunkSize - 1;
                    r.setRequestHeader("Range", "bytes=" + this._start + "-" + i);
                }
                try {
                    r.send(this._config.downloadRequestBody);
                } catch (e) {
                    this._chunkError(e.message);
                }
                n && 0 === r.status && this._chunkError();
            }
        }, this._chunkLoaded = function() {
            4 === r.readyState && (r.status < 200 || 400 <= r.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : r.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(e) {
                var t = e.getResponseHeader("Content-Range");
                if (null === t) return -1;
                return parseInt(t.substring(t.lastIndexOf("/") + 1));
            }(r), this.parseChunk(r.responseText)));
        }, this._chunkError = function(e) {
            var t = r.statusText || e;
            this._sendError(new Error(t));
        };
    }
    function c(e) {
        var r, n;
        (e = e || {}).chunkSize || (e.chunkSize = b.LocalChunkSize), u.call(this, e);
        var s = "undefined" != typeof FileReader;
        this.stream = function(e) {
            this._input = e, n = e.slice || e.webkitSlice || e.mozSlice, s ? ((r = new FileReader).onload = v(this._chunkLoaded, this), r.onerror = v(this._chunkError, this)) : r = new FileReaderSync, this._nextChunk();
        }, this._nextChunk = function() {
            this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
            var e = this._input;
            if (this._config.chunkSize) {
                var t = Math.min(this._start + this._config.chunkSize, this._input.size);
                e = n.call(e, this._start, t);
            }
            var i = r.readAsText(e, this._config.encoding);
            s || this._chunkLoaded({
                target: {
                    result: i
                }
            });
        }, this._chunkLoaded = function(e) {
            this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(e.target.result);
        }, this._chunkError = function() {
            this._sendError(r.error);
        };
    }
    function p(e) {
        var i;
        u.call(this, e = e || {}), this.stream = function(e) {
            return i = e, this._nextChunk();
        }, this._nextChunk = function() {
            if (!this._finished) {
                var e, t = this._config.chunkSize;
                return t ? (e = i.substring(0, t), i = i.substring(t)) : (e = i, i = ""), this._finished = !i, this.parseChunk(e);
            }
        };
    }
    function g(e) {
        u.call(this, e = e || {});
        var t = [], i = !0, r = !1;
        this.pause = function() {
            u.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
            u.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(e) {
            this._input = e, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
            r && 1 === t.length && (this._finished = !0);
        }, this._nextChunk = function() {
            this._checkIsFinished(), t.length ? this.parseChunk(t.shift()) : i = !0;
        }, this._streamData = v(function(e) {
            try {
                t.push("string" == typeof e ? e : e.toString(this._config.encoding)), i && (i = !1, this._checkIsFinished(), this.parseChunk(t.shift()));
            } catch (e) {
                this._streamError(e);
            }
        }, this), this._streamError = v(function(e) {
            this._streamCleanUp(), this._sendError(e);
        }, this), this._streamEnd = v(function() {
            this._streamCleanUp(), r = !0, this._streamData("");
        }, this), this._streamCleanUp = v(function() {
            this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
    }
    function i(m) {
        var a, o, h, r = Math.pow(2, 53), n = -r, s = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, u = /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/, t = this, i = 0, f = 0, d = !1, e = !1, l = [], c = {
            data: [],
            errors: [],
            meta: {}
        };
        if (M(m.step)) {
            var p = m.step;
            m.step = function(e) {
                if (c = e, _()) g();
                else {
                    if (g(), 0 === c.data.length) return;
                    i += e.data.length, m.preview && i > m.preview ? o.abort() : (c.data = c.data[0], p(c, t));
                }
            };
        }
        function y(e) {
            return "greedy" === m.skipEmptyLines ? "" === e.join("").trim() : 1 === e.length && 0 === e[0].length;
        }
        function g() {
            return c && h && (k("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + b.DefaultDelimiter + "'"), h = !1), m.skipEmptyLines && (c.data = c.data.filter(function(e) {
                return !y(e);
            })), _() && function() {
                if (!c) return;
                function e(e, t) {
                    M(m.transformHeader) && (e = m.transformHeader(e, t)), l.push(e);
                }
                if (Array.isArray(c.data[0])) {
                    for(var t = 0; _() && t < c.data.length; t++)c.data[t].forEach(e);
                    c.data.splice(0, 1);
                } else c.data.forEach(e);
            }(), function() {
                if (!c || !m.header && !m.dynamicTyping && !m.transform) return c;
                function e(e, t) {
                    var i, r = m.header ? {} : [];
                    for(i = 0; i < e.length; i++){
                        var n = i, s = e[i];
                        m.header && (n = i >= l.length ? "__parsed_extra" : l[i]), m.transform && (s = m.transform(s, n)), s = v(n, s), "__parsed_extra" === n ? (r[n] = r[n] || [], r[n].push(s)) : r[n] = s;
                    }
                    return m.header && (i > l.length ? k("FieldMismatch", "TooManyFields", "Too many fields: expected " + l.length + " fields but parsed " + i, f + t) : i < l.length && k("FieldMismatch", "TooFewFields", "Too few fields: expected " + l.length + " fields but parsed " + i, f + t)), r;
                }
                var t = 1;
                !c.data.length || Array.isArray(c.data[0]) ? (c.data = c.data.map(e), t = c.data.length) : c.data = e(c.data, 0);
                m.header && c.meta && (c.meta.fields = l);
                return f += t, c;
            }();
        }
        function _() {
            return m.header && 0 === l.length;
        }
        function v(e, t) {
            var i;
            return i = e, m.dynamicTypingFunction && void 0 === m.dynamicTyping[i] && (m.dynamicTyping[i] = m.dynamicTypingFunction(i)), !0 === (m.dynamicTyping[i] || m.dynamicTyping) ? "true" === t || "TRUE" === t || "false" !== t && "FALSE" !== t && (function(e) {
                if (s.test(e)) {
                    var t = parseFloat(e);
                    if (n < t && t < r) return !0;
                }
                return !1;
            }(t) ? parseFloat(t) : u.test(t) ? new Date(t) : "" === t ? null : t) : t;
        }
        function k(e, t, i, r) {
            var n = {
                type: e,
                code: t,
                message: i
            };
            void 0 !== r && (n.row = r), c.errors.push(n);
        }
        this.parse = function(e, t, i) {
            var r = m.quoteChar || '"';
            if (m.newline || (m.newline = function(e, t) {
                e = e.substring(0, 1048576);
                var i = new RegExp(j(t) + "([^]*?)" + j(t), "gm"), r = (e = e.replace(i, "")).split("\r"), n = e.split("\n"), s = 1 < n.length && n[0].length < r[0].length;
                if (1 === r.length || s) return "\n";
                for(var a = 0, o = 0; o < r.length; o++)"\n" === r[o][0] && a++;
                return a >= r.length / 2 ? "\r\n" : "\r";
            }(e, r)), h = !1, m.delimiter) M(m.delimiter) && (m.delimiter = m.delimiter(e), c.meta.delimiter = m.delimiter);
            else {
                var n = function(e, t, i, r, n) {
                    var s, a, o, h;
                    n = n || [
                        ",",
                        "	",
                        "|",
                        ";",
                        b.RECORD_SEP,
                        b.UNIT_SEP
                    ];
                    for(var u = 0; u < n.length; u++){
                        var f = n[u], d = 0, l = 0, c = 0;
                        o = void 0;
                        for(var p = new E({
                            comments: r,
                            delimiter: f,
                            newline: t,
                            preview: 10
                        }).parse(e), g = 0; g < p.data.length; g++)if (i && y(p.data[g])) c++;
                        else {
                            var _ = p.data[g].length;
                            l += _, void 0 !== o ? 0 < _ && (d += Math.abs(_ - o), o = _) : o = _;
                        }
                        0 < p.data.length && (l /= p.data.length - c), (void 0 === a || d <= a) && (void 0 === h || h < l) && 1.99 < l && (a = d, s = f, h = l);
                    }
                    return {
                        successful: !!(m.delimiter = s),
                        bestDelimiter: s
                    };
                }(e, m.newline, m.skipEmptyLines, m.comments, m.delimitersToGuess);
                n.successful ? m.delimiter = n.bestDelimiter : (h = !0, m.delimiter = b.DefaultDelimiter), c.meta.delimiter = m.delimiter;
            }
            var s = w(m);
            return m.preview && m.header && s.preview++, a = e, o = new E(s), c = o.parse(a, t, i), g(), d ? {
                meta: {
                    paused: !0
                }
            } : c || {
                meta: {
                    paused: !1
                }
            };
        }, this.paused = function() {
            return d;
        }, this.pause = function() {
            d = !0, o.abort(), a = M(m.chunk) ? "" : a.substring(o.getCharIndex());
        }, this.resume = function() {
            t.streamer._halted ? (d = !1, t.streamer.parseChunk(a, !0)) : setTimeout(t.resume, 3);
        }, this.aborted = function() {
            return e;
        }, this.abort = function() {
            e = !0, o.abort(), c.meta.aborted = !0, M(m.complete) && m.complete(c), a = "";
        };
    }
    function j(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function E(e) {
        var S, O = (e = e || {}).delimiter, x = e.newline, I = e.comments, T = e.step, D = e.preview, A = e.fastMode, L = S = void 0 === e.quoteChar || null === e.quoteChar ? '"' : e.quoteChar;
        if (void 0 !== e.escapeChar && (L = e.escapeChar), ("string" != typeof O || -1 < b.BAD_DELIMITERS.indexOf(O)) && (O = ","), I === O) throw new Error("Comment character same as delimiter");
        !0 === I ? I = "#" : ("string" != typeof I || -1 < b.BAD_DELIMITERS.indexOf(I)) && (I = !1), "\n" !== x && "\r" !== x && "\r\n" !== x && (x = "\n");
        var F = 0, z = !1;
        this.parse = function(r, t, i) {
            if ("string" != typeof r) throw new Error("Input must be a string");
            var n = r.length, e = O.length, s = x.length, a = I.length, o = M(T), h = [], u = [], f = [], d = F = 0;
            if (!r) return C();
            if (A || !1 !== A && -1 === r.indexOf(S)) {
                for(var l = r.split(x), c = 0; c < l.length; c++){
                    if (f = l[c], F += f.length, c !== l.length - 1) F += x.length;
                    else if (i) return C();
                    if (!I || f.substring(0, a) !== I) {
                        if (o) {
                            if (h = [], k(f.split(O)), R(), z) return C();
                        } else k(f.split(O));
                        if (D && D <= c) return h = h.slice(0, D), C(!0);
                    }
                }
                return C();
            }
            for(var p = r.indexOf(O, F), g = r.indexOf(x, F), _ = new RegExp(j(L) + j(S), "g"), m = r.indexOf(S, F);;)if (r[F] !== S) {
                if (I && 0 === f.length && r.substring(F, F + a) === I) {
                    if (-1 === g) return C();
                    F = g + s, g = r.indexOf(x, F), p = r.indexOf(O, F);
                } else if (-1 !== p && (p < g || -1 === g)) f.push(r.substring(F, p)), F = p + e, p = r.indexOf(O, F);
                else {
                    if (-1 === g) break;
                    if (f.push(r.substring(F, g)), w(g + s), o && (R(), z)) return C();
                    if (D && h.length >= D) return C(!0);
                }
            } else for(m = F, F++;;){
                if (-1 === (m = r.indexOf(S, m + 1))) return i || u.push({
                    type: "Quotes",
                    code: "MissingQuotes",
                    message: "Quoted field unterminated",
                    row: h.length,
                    index: F
                }), E();
                if (m === n - 1) return E(r.substring(F, m).replace(_, S));
                if (S !== L || r[m + 1] !== L) {
                    if (S === L || 0 === m || r[m - 1] !== L) {
                        -1 !== p && p < m + 1 && (p = r.indexOf(O, m + 1)), -1 !== g && g < m + 1 && (g = r.indexOf(x, m + 1));
                        var y = b(-1 === g ? p : Math.min(p, g));
                        if (r.substr(m + 1 + y, e) === O) {
                            f.push(r.substring(F, m).replace(_, S)), r[F = m + 1 + y + e] !== S && (m = r.indexOf(S, F)), p = r.indexOf(O, F), g = r.indexOf(x, F);
                            break;
                        }
                        var v = b(g);
                        if (r.substring(m + 1 + v, m + 1 + v + s) === x) {
                            if (f.push(r.substring(F, m).replace(_, S)), w(m + 1 + v + s), p = r.indexOf(O, F), m = r.indexOf(S, F), o && (R(), z)) return C();
                            if (D && h.length >= D) return C(!0);
                            break;
                        }
                        u.push({
                            type: "Quotes",
                            code: "InvalidQuotes",
                            message: "Trailing quote on quoted field is malformed",
                            row: h.length,
                            index: F
                        }), m++;
                    }
                } else m++;
            }
            return E();
            function k(e) {
                h.push(e), d = F;
            }
            function b(e) {
                var t = 0;
                if (-1 !== e) {
                    var i = r.substring(m + 1, e);
                    i && "" === i.trim() && (t = i.length);
                }
                return t;
            }
            function E(e) {
                return i || (void 0 === e && (e = r.substring(F)), f.push(e), F = n, k(f), o && R()), C();
            }
            function w(e) {
                F = e, k(f), f = [], g = r.indexOf(x, F);
            }
            function C(e) {
                return {
                    data: h,
                    errors: u,
                    meta: {
                        delimiter: O,
                        linebreak: x,
                        aborted: z,
                        truncated: !!e,
                        cursor: d + (t || 0)
                    }
                };
            }
            function R() {
                T(C()), h = [], u = [];
            }
        }, this.abort = function() {
            z = !0;
        }, this.getCharIndex = function() {
            return F;
        };
    }
    function _(e) {
        var t = e.data, i = a[t.workerId], r = !1;
        if (t.error) i.userError(t.error, t.file);
        else if (t.results && t.results.data) {
            var n = {
                abort: function() {
                    r = !0, m(t.workerId, {
                        data: [],
                        errors: [],
                        meta: {
                            aborted: !0
                        }
                    });
                },
                pause: y,
                resume: y
            };
            if (M(i.userStep)) {
                for(var s = 0; s < t.results.data.length && (i.userStep({
                    data: t.results.data[s],
                    errors: t.results.errors,
                    meta: t.results.meta
                }, n), !r); s++);
                delete t.results;
            } else M(i.userChunk) && (i.userChunk(t.results, n, t.file), delete t.results);
        }
        t.finished && !r && m(t.workerId, t.results);
    }
    function m(e, t) {
        var i = a[e];
        M(i.userComplete) && i.userComplete(t), i.terminate(), delete a[e];
    }
    function y() {
        throw new Error("Not implemented.");
    }
    function w(e) {
        if ("object" != typeof e || null === e) return e;
        var t = Array.isArray(e) ? [] : {};
        for(var i in e)t[i] = w(e[i]);
        return t;
    }
    function v(e, t) {
        return function() {
            e.apply(t, arguments);
        };
    }
    function M(e) {
        return "function" == typeof e;
    }
    return o && (f.onmessage = function(e) {
        var t = e.data;
        void 0 === b.WORKER_ID && t && (b.WORKER_ID = t.workerId);
        if ("string" == typeof t.input) f.postMessage({
            workerId: b.WORKER_ID,
            results: b.parse(t.input, t.config),
            finished: !0
        });
        else if (f.File && t.input instanceof File || t.input instanceof Object) {
            var i = b.parse(t.input, t.config);
            i && f.postMessage({
                workerId: b.WORKER_ID,
                results: i,
                finished: !0
            });
        }
    }), (l.prototype = Object.create(u.prototype)).constructor = l, (c.prototype = Object.create(u.prototype)).constructor = c, (p.prototype = Object.create(p.prototype)).constructor = p, (g.prototype = Object.create(u.prototype)).constructor = g, b;
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["fyTPu","dV6cC"], "dV6cC", "parcelRequire2a67")

//# sourceMappingURL=index.e82f28a0.js.map
