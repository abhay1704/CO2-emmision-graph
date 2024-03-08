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
})({"7uCb0":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "af599da5850bd9e5";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1GgH0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _timeScrollerViewJs = require("./timeScrollerView.js");
var _timeScrollerViewJsDefault = parcelHelpers.interopDefault(_timeScrollerViewJs);
var _barGraphViewJs = require("./barGraphView.js");
var _barGraphViewJsDefault = parcelHelpers.interopDefault(_barGraphViewJs);
var _navBarViewJs = require("./navBarView.js");
var _navBarViewJsDefault = parcelHelpers.interopDefault(_navBarViewJs);
var _configJs = require("./config.js");
const initialPlot = async function(container, height, width, category = "Accumulative") {
    (0, _viewJsDefault.default).rendorSpinner();
    try {
        await _modelJs.loadData();
        plotMap(container, height, width, category);
        (0, _navBarViewJsDefault.default).navVisible();
    } catch (error) {
        console.log(error);
        (0, _viewJsDefault.default).rendorError("Failed to fetch geojson data.");
    }
};
const plotMap = async function(container, height, width, category, year = _modelJs.state.year) {
    (0, _viewJsDefault.default).rendorSpinner();
    try {
        _modelJs.state.year = year;
        const data = getData(year, category);
        const layout = {
            mapbox: {
                center: {
                    lon: 17.0,
                    lat: 25.0
                },
                zoom: 1.5,
                style: "open-street-map",
                fillOpacity: 1
            },
            // autosize:true,
            light: {
                anchor: "viewport",
                color: "white",
                intensity: 1
            },
            margin: {
                t: 0,
                l: 0,
                r: 0,
                b: 0
            },
            width: parseFloat(width),
            height: parseFloat(height),
            hovermode: "closest",
            // Remove the coloraxis from the layout:
            coloraxis: {
                showscale: false
            },
            hoverlabel: {
                bgcolor: "white",
                font_family: "Public Sans",
                align: "left"
            }
        };
        const config = {
            displayModeBar: false,
            responsive: true,
            showlegend: false
        };
        (0, _viewJsDefault.default).clear();
        const plot = await Plotly.newPlot(container, data, layout, config);
        // plot.update_layout((coloraxis_showscale = false));
        console.log(width, height);
        controlClick(plot);
    } catch (error) {
        console.log(error);
        (0, _viewJsDefault.default).rendorError("Unable to render Graph");
    }
};
function controlClick(plot) {
    const year = _modelJs.state.year;
    plot.on("plotly_click", (d)=>{
        (0, _barGraphViewJsDefault.default).rendorSpinner();
        try {
            const countryCode = d.points[0].location;
            const currCountry = {
                name: d.points[0].text,
                perCapita: d.points[0].custom_data,
                netEmmision: d.points[0].z
            };
            const dataCO2 = _modelJs.state.annualCO2;
            const coal = Math.round(dataCO2["Coal"][year][countryCode] * 10, 2);
            const oil = Math.round(dataCO2["Oil"][year][countryCode] * 10, 2);
            const other = Math.round(dataCO2["Other"][year][countryCode] * 10, 2);
            const gas = Math.round(dataCO2["Gas"][year][countryCode] * 10, 2);
            const data = {
                Coal: coal,
                Oil: oil,
                Gas: gas,
                Other: other
            };
            const trace = [
                {
                    x: Object.keys(data),
                    y: Object.values(data),
                    text: Object.values(data).map(String),
                    type: "bar",
                    marker: {
                        color: "rgb(55, 83, 109)"
                    }
                }
            ];
            var layout = {
                title: `Per Capita CO2 emmisions in ${year}`,
                showlegend: false,
                yaxis: {
                    title: {
                        text: "CO2 emmision Per Capita(in Quintal)",
                        font: {
                            family: "Courier New, monospace",
                            size: 18,
                            color: "#7f7f7f"
                        }
                    }
                }
            };
            const config = {
                staticPlot: true
            };
            (0, _barGraphViewJsDefault.default).rendorGraph(currCountry, Plotly, [
                trace,
                layout,
                config
            ]);
        } catch (error) {
            (0, _barGraphViewJsDefault.default).rendorError("Data not Available. Try  between 2010 to 2021");
        }
    });
}
function getData(year, category) {
    try {
        console.log(year, category);
        const countriesCO2 = _modelJs.state.annualCO2[category][year];
        const pc = _modelJs.state.annualCO2["Total"][year];
        const percapita = pc ? Object.keys(countriesCO2).map((x)=>pc[x] || 0) : undefined;
        const countrynames = Object.keys(countriesCO2).map((x)=>_modelJs.state.code_to_name[x]);
        // console.log(model.state.geojson['CH']);
        const data = [
            {
                type: "choroplethmapbox",
                z: Object.values(countriesCO2),
                locations: Object.keys(countriesCO2),
                geojson: _modelJs.state.geojson,
                customdata: percapita,
                zmin: 0,
                // zmax: max,
                // zauto: false,
                colorbar: {
                    title: "",
                    thickness: 20
                },
                marker: {
                    line: {
                        color: "transparent",
                        opacity: 1,
                        width: 0.1
                    }
                },
                text: countrynames,
                autocolorscale: false,
                colorscale: "Greys",
                hovertemplate: `${(0, _viewJsDefault.default).generateHoverMarkup("%{z}", "%{text}", percapita ? "%{customdata}" : undefined, year)}`
            }
        ];
        return data;
    } catch (error) {
        throw error;
    }
}
function init() {
    (0, _viewJsDefault.default).addMapRendorer(initialPlot);
    (0, _timeScrollerViewJsDefault.default).addHandlerPloter(plotMap);
    (0, _navBarViewJsDefault.default).addCategoryHandler(plotMap);
}
init(); // if (module.hot) {
 //   module.hot.accept();
 // }
 /*
  TODO #1: scroller for year controller ✅
  TODO #2: Spinner while dataloading ✅
  TODO #3: Onclicked to any country - countries detailed graph ✅
  TODO #4: dropdown hover and click handling ✅
  TODO #5: datasource refrence & footer ✅
  TODO #6: Error Handling= {bar graph default = 2021 with error} ✅
  TODO #7: Color Correction🥲
  TODO #8: Optimize data loading
  TODO #9: Make Responsive
*/ 

},{"./model.js":"Py0LO","./view.js":"2GA9o","./timeScrollerView.js":"6J37z","./barGraphView.js":"9cZS3","./navBarView.js":"aJxmJ","./config.js":"4Wc5b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Py0LO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadData", ()=>loadData);
parcelHelpers.export(exports, "getCountry", ()=>getCountry);
var _annualCo2Json = require("../json/annualCo2.json");
var _annualCo2JsonDefault = parcelHelpers.interopDefault(_annualCo2Json);
var _helper = require("./helper");
var _config = require("./config");
var _codeToNameJson = require("../json/code_to_name.json");
var _codeToNameJsonDefault = parcelHelpers.interopDefault(_codeToNameJson);
const state = {
    geojson: {},
    annualCO2: {},
    year: "2021",
    code_to_name: {},
    currCountry: {}
};
const loadData = async function() {
    try {
        state.annualCO2 = (0, _annualCo2JsonDefault.default);
        state.code_to_name = (0, _codeToNameJsonDefault.default);
        state.geojson = await (0, _helper.fetchGeoJSON)((0, _config.GEOJSON_URL));
    } catch (error) {
        throw error;
    }
};
const getCountry = async function(lat, lng) {
    try {
        const res = await (0, _helper.getJSON)(`${API_GEOCODE}?q=${lat}%2C${lng}&key=${API_KEY}`);
        const data = {
            code: res.results[0].components["ISO_3166-1_alpha-3"],
            name: res.results[0].components.country
        };
        state.currCountry = data;
    } catch (error) {
        throw error;
    }
};

},{"../json/annualCo2.json":"huWPT","./helper":"6fitd","./config":"4Wc5b","../json/code_to_name.json":"fWIrw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"huWPT":[function(require,module,exports) {
module.exports = JSON.parse('{"Total":{"1950":{"ABW":10.556983,"AFG":0.011266,"AGO":0.041728,"AIA":0,"ALB":0.236891,"AND":0,"ARE":0,"ARG":1.758235,"ARM":1.069913,"ATG":0,"AUS":6.694085,"AUT":3.012245,"AZE":2.833828,"BDI":0.003901,"BEL":8.842688,"BEN":0,"BES":12.626747,"BFA":0,"BGD":0.024996,"BGR":1.047521,"BHR":11.791206,"BHS":0.673166,"BIH":0.989078,"BLR":2.384042,"BLZ":0.265062,"BMU":1.183781,"BOL":0.160038,"BRA":0.364358,"BRB":0.348044,"BRN":8.577596,"BTN":0,"BWA":0,"CAF":0,"CAN":11.215381,"CHE":2.180617,"CHL":1.275849,"CHN":0.144923,"CIV":0,"CMR":0.032261,"COD":0.12033,"COG":0,"COK":0,"COL":0.63705,"COM":0,"CPV":0.554554,"CRI":0.301314,"CUB":0.945669,"CUW":61.08064,"CYP":0.54149,"CZE":6.488288,"DEU":7.196341,"DJI":0.17634,"DMA":0,"DNK":5.152148,"DOM":0.14602,"DZA":0.419475,"ECU":0.210272,"EGY":0.483833,"ERI":0,"ESP":1.176907,"EST":6.215672,"ETH":0.004964,"FIN":1.632758,"FJI":0.392179,"FRA":4.837894,"FRO":1.273227,"FSM":0,"GAB":0,"GBR":10.004824,"GEO":0.78353,"GHA":0.125559,"GIN":0,"GLP":0.28936,"GMB":0.047773,"GNB":0.013485,"GNQ":0.048555,"GRC":0.538228,"GRD":0.095144,"GRL":4.279078,"GTM":0.199698,"GUF":0.313189,"GUY":0.622773,"HKG":0.665871,"HND":0.192851,"HRV":0.742708,"HTI":0.034979,"HUN":1.969437,"IDN":0.141309,"IND":0.171146,"IRL":3.346226,"IRN":4.997248,"IRQ":0.291442,"ISL":5.188419,"ISR":1.299871,"ITA":0.893056,"JAM":0.192641,"JOR":0.392823,"JPN":1.215617,"KAZ":6.784443,"KEN":0.157372,"KGZ":2.211377,"KHM":0,"KIR":0,"KNA":0,"KOR":0.108619,"KSV":0,"KWT":2.502439,"LAO":0,"LBN":1.120464,"LBR":0.052006,"LBY":0.126381,"LCA":0.042263,"LIE":0,"LKA":0.204735,"LSO":0,"LTU":2.727729,"LUX":25.015055,"LVA":2.35409,"MAC":0,"MAR":0.286136,"MDA":2.948995,"MDG":0.076907,"MDV":0,"MEX":1.105343,"MHL":0,"MKD":1.555362,"MLI":0,"MLT":0.841078,"MMR":0.045253,"MNE":0.653381,"MNG":0.365809,"MOZ":0.152214,"MRT":0,"MSR":0,"MTQ":0.236903,"MUS":0.383524,"MWI":0.079516,"MYS":0.611991,"MYT":0,"NAM":0,"NCL":3.442531,"NER":0,"NGA":0.06069,"NIC":0.143162,"NIU":0,"NLD":5.081091,"NOR":2.569677,"NPL":0.003054,"NRU":0,"NZL":4.482643,"OMN":0,"PAK":0.142056,"PAN":0.608242,"PER":0.591489,"PHL":0.195139,"PLW":0,"PNG":0.035622,"POL":4.523595,"PRI":0,"PRK":0.070288,"PRT":0.667493,"PRY":0.041393,"PSE":0,"PYF":0,"QAT":14.482213,"REU":0.10288,"ROU":1.184446,"RUS":4.045953,"RWA":0.007824,"SAU":1.663787,"SDN":0.081377,"SEN":0,"SGP":1.901192,"SHN":0,"SLB":0,"SLE":0.078745,"SLV":0.122558,"SOM":0.021523,"SPM":3.276548,"SRB":1.287158,"SSD":0.018366,"STP":0,"SUR":1.085546,"SVK":5.343794,"SVN":1.519866,"SWE":4.085131,"SWZ":0.013488,"SXM":500.005475,"SYC":0,"SYR":0.116765,"TCA":0,"TCD":0,"TGO":0.018339,"THA":0.046817,"TJK":1.447979,"TKM":4.662013,"TLS":0,"TON":0.14706,"TTO":3.626627,"TUN":0.33814,"TUR":0.452297,"TUV":0,"TWN":0.496328,"TZA":0.065288,"UGA":0.018477,"UKR":3.529966,"URY":1.098256,"USA":17.139592,"UZB":2.749666,"VCT":0.05954,"VEN":6.973671,"VGB":0,"VNM":0.058929,"VUT":0,"WLF":0,"WSM":0.04166,"YEM":0.012439,"ZAF":4.678921,"ZMB":1.005063,"ZWE":1.139175},"1951":{"ABW":16.056313,"AFG":0.012098,"AGO":0.054522,"AIA":0,"ALB":0.31259,"AND":0,"ARE":0,"ARG":2.014618,"ARM":1.126603,"ATG":0,"AUS":7.010756,"AUT":3.356803,"AZE":3.005427,"BDI":0.003818,"BEL":10.334558,"BEN":0,"BES":19.854419,"BFA":0,"BGD":0.030243,"BGR":1.129451,"BHR":9.772372,"BHS":0.795609,"BIH":0.92082,"BLR":2.59205,"BLZ":0.360124,"BMU":1.561599,"BOL":0.147125,"BRA":0.389619,"BRB":0.510235,"BRN":5.880414,"BTN":0,"BWA":0,"CAF":0,"CAN":11.549142,"CHE":2.590175,"CHL":1.479043,"CHN":0.184452,"CIV":0,"CMR":0.041808,"COD":0.139242,"COG":0,"COK":0,"COL":0.67547,"COM":0,"CPV":0.410905,"CRI":0.317877,"CUB":1.069639,"CUW":93.174025,"CYP":0.562822,"CZE":6.852481,"DEU":8.145513,"DJI":0.398775,"DMA":0.072753,"DNK":5.098498,"DOM":0.146074,"DZA":0.445567,"ECU":0.19461,"EGY":0.488686,"ERI":0,"ESP":1.174001,"EST":6.651367,"ETH":0.003439,"FIN":1.97081,"FJI":0.421634,"FRA":5.424976,"FRO":1.265471,"FSM":0,"GAB":0,"GBR":10.846074,"GEO":0.838706,"GHA":0.167749,"GIN":0,"GLP":0.301368,"GMB":0.046584,"GNB":0.006668,"GNQ":0.047756,"GRC":0.589027,"GRD":0.141962,"GRL":4.191687,"GTM":0.20004,"GUF":0.463856,"GUY":0.667116,"HKG":0.750133,"HND":0.217247,"HRV":0.696641,"HTI":0.039949,"HUN":2.354372,"IDN":0.132223,"IND":0.175441,"IRL":3.592372,"IRN":0.401501,"IRQ":0.419942,"ISL":4.435286,"ISR":2.181788,"ITA":1.044309,"JAM":0.359217,"JOR":0.343041,"JPN":1.440857,"KAZ":7.106612,"KEN":0.235741,"KGZ":2.348284,"KHM":0,"KIR":0,"KNA":0,"KOR":0.145343,"KSV":0,"KWT":0.743186,"LAO":0,"LBN":1.04959,"LBR":0.047109,"LBY":0.147477,"LCA":0.125896,"LIE":0,"LKA":0.191058,"LSO":0,"LTU":2.925705,"LUX":30.21086,"LVA":2.521547,"MAC":0,"MAR":0.318441,"MDA":3.117511,"MDG":0.060597,"MDV":0,"MEX":1.231622,"MHL":0,"MKD":1.436639,"MLI":0,"MLT":0.860129,"MMR":0.050734,"MNE":0.607378,"MNG":0.36961,"MOZ":0.154996,"MRT":0,"MSR":0,"MTQ":0.339378,"MUS":0.257547,"MWI":0.086179,"MYS":0.853177,"MYT":0,"NAM":0,"NCL":4.344374,"NER":0,"NGA":0.044467,"NIC":0.147061,"NIU":0,"NLD":5.375179,"NOR":2.874687,"NPL":0.003416,"NRU":0,"NZL":4.185219,"OMN":0,"PAK":0.173034,"PAN":0.634744,"PER":0.604336,"PHL":0.184074,"PLW":0,"PNG":0.03957,"POL":4.8384,"PRI":0,"PRK":0.094335,"PRT":0.636694,"PRY":0.030946,"PSE":0,"PYF":0,"QAT":15.477783,"REU":0.113278,"ROU":1.354584,"RUS":4.318734,"RWA":0.007567,"SAU":0,"SDN":0.103719,"SEN":0,"SGP":2.693944,"SHN":0,"SLB":0,"SLE":0.047004,"SLV":0.144449,"SOM":0.020925,"SPM":4.870182,"SRB":1.205719,"SSD":0.023796,"STP":0.059049,"SUR":1.166641,"SVK":5.597695,"SVN":1.425287,"SWE":4.730439,"SWZ":0.013153,"SXM":731.854547,"SYC":0,"SYR":0.105169,"TCA":0,"TCD":0,"TGO":0.018046,"THA":0.052147,"TJK":1.51292,"TKM":4.950962,"TLS":0,"TON":0.142879,"TTO":3.77812,"TUN":0.374797,"TUR":0.473257,"TUV":0,"TWN":0.618573,"TZA":0.057054,"UGA":0.023559,"UKR":3.777177,"URY":1.162288,"USA":17.388702,"UZB":2.897476,"VCT":0.057787,"VEN":8.265787,"VGB":0,"VNM":0.050149,"VUT":0,"WLF":0,"WSM":0.040753,"YEM":0.008427,"ZAF":4.88866,"ZMB":1.077405,"ZWE":1.216739},"1952":{"ABW":8.931865,"AFG":0.011946,"AGO":0.066776,"AIA":0,"ALB":0.2816,"AND":0,"ARE":0,"ARG":2.039981,"ARM":1.172388,"ATG":0,"AUS":6.973567,"AUT":3.186074,"AZE":3.148468,"BDI":0.006945,"BEL":9.598433,"BEN":0,"BES":11.368219,"BFA":0,"BGD":0.031261,"BGR":1.292719,"BHR":10.397898,"BHS":0.909622,"BIH":0.908314,"BLR":2.777289,"BLZ":0.349138,"BMU":2.802849,"BOL":0.16091,"BRA":0.43528,"BRB":0.400676,"BRN":5.968531,"BTN":0,"BWA":0,"CAF":0,"CAN":11.004526,"CHE":2.332805,"CHL":1.540612,"CHN":0.226566,"CIV":0,"CMR":0.063405,"COD":0.162703,"COG":0,"COK":0,"COL":0.695108,"COM":0,"CPV":0.193384,"CRI":0.38342,"CUB":1.018066,"CUW":52.477657,"CYP":0.6191,"CZE":7.262538,"DEU":8.628649,"DJI":0.386486,"DMA":0.144983,"DNK":5.287473,"DOM":0.234133,"DZA":0.408457,"ECU":0.24084,"EGY":0.49271,"ERI":0,"ESP":1.323815,"EST":7.035671,"ETH":0.005347,"FIN":2.115706,"FJI":0.494247,"FRA":5.340272,"FRO":1.720511,"FSM":0,"GAB":0,"GBR":10.472577,"GEO":0.887431,"GHA":0.161605,"GIN":0,"GLP":0.293796,"GMB":0.034049,"GNB":0.019855,"GNQ":0.046978,"GRC":0.61006,"GRD":0.140267,"GRL":4.385488,"GTM":0.196766,"GUF":0.457847,"GUY":0.76549,"HKG":0.706179,"HND":0.217865,"HRV":0.692115,"HTI":0.043636,"HUN":2.862871,"IDN":0.175289,"IND":0.180769,"IRL":3.283901,"IRN":0.232336,"IRQ":0.330474,"ISL":5.257349,"ISR":2.626003,"ITA":1.076656,"JAM":0.380466,"JOR":0.384862,"JPN":1.500268,"KAZ":7.359103,"KEN":0.262875,"KGZ":2.463773,"KHM":0,"KIR":0,"KNA":0,"KOR":0.169777,"KSV":0,"KWT":0,"LAO":0,"LBN":0.822764,"LBR":0.057738,"LBY":0.14242,"LCA":0.083724,"LIE":0,"LKA":0.23504,"LSO":0,"LTU":3.102178,"LUX":31.332183,"LVA":2.670008,"MAC":0,"MAR":0.377516,"MDA":3.253469,"MDG":0.074164,"MDV":0,"MEX":1.280456,"MHL":0,"MKD":1.410747,"MLI":0,"MLT":0.793628,"MMR":0.061548,"MNE":0.596523,"MNG":0.373213,"MOZ":0.176448,"MRT":0,"MSR":0,"MTQ":0.376365,"MUS":0.31638,"MWI":0.095189,"MYS":1.015569,"MYT":0,"NAM":0,"NCL":7.151702,"NER":0,"NGA":0.056443,"NIC":0.194852,"NIU":0,"NLD":5.280439,"NOR":2.909801,"NPL":0.003346,"NRU":0,"NZL":4.662526,"OMN":0,"PAK":0.179908,"PAN":0.800684,"PER":0.638646,"PHL":0.200871,"PLW":0,"PNG":0.052393,"POL":4.981312,"PRI":0,"PRK":0.086992,"PRT":0.627682,"PRY":0.065143,"PSE":0,"PYF":0,"QAT":7.487931,"REU":0.122795,"ROU":1.582499,"RUS":4.553073,"RWA":0.013595,"SAU":0,"SDN":0.10576,"SEN":0,"SGP":3.139214,"SHN":0,"SLB":0.03352,"SLE":0.087449,"SLV":0.170112,"SOM":0.02036,"SPM":7.220495,"SRB":1.197887,"SSD":0.024637,"STP":0.058138,"SUR":1.291443,"SVK":5.874945,"SVN":1.416449,"SWE":4.848825,"SWZ":0.012831,"SXM":397.282759,"SYC":0,"SYR":0.128462,"TCA":0,"TCD":0,"TGO":0.030433,"THA":0.059585,"TJK":1.565454,"TKM":5.190823,"TLS":0,"TON":0.138691,"TTO":4.094358,"TUN":0.385321,"TUR":0.474033,"TUV":0,"TWN":0.774674,"TZA":0.066947,"UGA":0.023526,"UKR":3.993152,"URY":1.382707,"USA":16.68099,"UZB":3.020427,"VCT":0.168171,"VEN":8.484917,"VGB":0,"VNM":0.071175,"VUT":0,"WLF":0,"WSM":0.079702,"YEM":0.012073,"ZAF":5.203211,"ZMB":1.178045,"ZWE":1.32635},"1953":{"ABW":9.967981,"AFG":0.013685,"AGO":0.057722,"AIA":0,"ALB":0.30289,"AND":0,"ARE":0,"ARG":1.948386,"ARM":1.204186,"ATG":0,"AUS":6.739257,"AUT":3.132601,"AZE":3.254259,"BDI":0.006284,"BEL":9.424464,"BEN":0,"BES":12.975252,"BFA":0,"BGD":0.031136,"BGR":1.437805,"BHR":7.835831,"BHS":0.929317,"BIH":0.884816,"BLR":2.93181,"BLZ":0.38751,"BMU":2.391832,"BOL":0.166169,"BRA":0.427245,"BRB":0.493512,"BRN":6.023681,"BTN":0,"BWA":0,"CAF":0,"CAN":10.777969,"CHE":2.119364,"CHL":1.480989,"CHN":0.231707,"CIV":0,"CMR":0.044592,"COD":0.175072,"COG":0,"COK":0,"COL":0.842884,"COM":0,"CPV":0.095654,"CRI":0.412528,"CUB":0.983132,"CUW":59.216768,"CYP":0.708675,"CZE":7.46558,"DEU":8.796514,"DJI":0.427956,"DMA":0.072112,"DNK":5.306932,"DOM":0.23663,"DZA":0.409244,"ECU":0.215254,"EGY":0.475688,"ERI":0,"ESP":1.359646,"EST":7.35921,"ETH":0.009696,"FIN":1.827648,"FJI":0.517062,"FRA":5.007515,"FRO":2.632348,"FSM":0,"GAB":0,"GBR":10.649033,"GEO":0.927229,"GHA":0.184022,"GIN":0,"GLP":0.286252,"GMB":0.033171,"GNB":0.01315,"GNQ":0.046213,"GRC":0.613696,"GRD":0.138174,"GRL":4.862348,"GTM":0.202247,"GUF":0.45125,"GUY":0.99383,"HKG":0.760058,"HND":0.196609,"HRV":0.681977,"HTI":0.046086,"HUN":3.310978,"IDN":0.17626,"IND":0.18022,"IRL":3.268896,"IRN":0.212494,"IRQ":0.415067,"ISL":6.076769,"ISR":2.784998,"ITA":1.181018,"JAM":0.407377,"JOR":0.392367,"JPN":1.6554,"KAZ":7.535096,"KEN":0.243969,"KGZ":2.553587,"KHM":0,"KIR":0,"KNA":0,"KOR":0.22497,"KSV":0,"KWT":0,"LAO":0,"LBN":0.849449,"LBR":0.060352,"LBY":0.211889,"LCA":0.125229,"LIE":0,"LKA":0.245777,"LSO":0,"LTU":3.248199,"LUX":28.67767,"LVA":2.794677,"MAC":0,"MAR":0.430129,"MDA":3.350748,"MDG":0.059454,"MDV":0,"MEX":1.23085,"MHL":0,"MKD":1.37154,"MLI":0,"MLT":0.741231,"MMR":0.069559,"MNE":0.579894,"MNG":0.371995,"MOZ":0.175419,"MRT":0,"MSR":0,"MTQ":0.367021,"MUS":0.327868,"MWI":0.101795,"MYS":1.009926,"MYT":0,"NAM":0,"NCL":5.932942,"NER":0,"NGA":0.061924,"NIC":0.196834,"NIU":0,"NLD":5.264625,"NOR":2.910451,"NPL":0.0041,"NRU":0,"NZL":4.173154,"OMN":0,"PAK":0.179973,"PAN":0.776196,"PER":0.660223,"PHL":0.19137,"PLW":0,"PNG":0.057806,"POL":5.319175,"PRI":0,"PRK":0.171027,"PRT":0.691546,"PRY":0.075075,"PSE":0,"PYF":0,"QAT":13.672662,"REU":0.078892,"ROU":1.797243,"RUS":4.74058,"RWA":0.012145,"SAU":0.141047,"SDN":0.112564,"SEN":0,"SGP":3.030868,"SHN":0,"SLB":0.032785,"SLE":0.081055,"SLV":0.178749,"SOM":0.019827,"SPM":6.33773,"SRB":1.175148,"SSD":0.026593,"STP":0.057372,"SUR":1.458858,"SVK":5.975278,"SVN":1.392136,"SWE":4.539597,"SWZ":0.012521,"SXM":435.306205,"SYC":0,"SYR":0.135072,"TCA":0,"TCD":0,"TGO":0.019954,"THA":0.074744,"TJK":1.60211,"TKM":5.363517,"TLS":0,"TON":0.134523,"TTO":4.184527,"TUN":0.360579,"TUR":0.571372,"TUV":0,"TWN":0.755026,"TZA":0.063847,"UGA":0.033434,"UKR":4.170402,"URY":1.519078,"USA":16.808948,"UZB":3.107943,"VCT":0.108701,"VEN":7.677488,"VGB":0,"VNM":0.065255,"VUT":0,"WLF":0,"WSM":0.077981,"YEM":0.014116,"ZAF":5.095444,"ZMB":1.247645,"ZWE":1.401264},"1954":{"ABW":19.459806,"AFG":0.013511,"AGO":0.071726,"AIA":0,"ALB":0.356215,"AND":0,"ARE":0,"ARG":2.000645,"ARM":1.274767,"ATG":0,"AUS":7.534797,"AUT":3.531247,"AZE":3.465467,"BDI":0.002567,"BEL":9.756725,"BEN":0,"BES":25.488146,"BFA":0,"BGD":0.030927,"BGR":1.531251,"BHR":7.977692,"BHS":0.943146,"BIH":1.034529,"BLR":3.187515,"BLZ":0.376727,"BMU":2.177121,"BOL":0.238857,"BRA":0.487865,"BRB":0.504125,"BRN":5.926161,"BTN":0,"BWA":0,"CAF":0,"CAN":10.635354,"CHE":2.549766,"CHL":1.545091,"CHN":0.272703,"CIV":0,"CMR":0.050264,"COD":0.210957,"COG":0,"COK":0,"COL":0.732746,"COM":0,"CPV":0.113632,"CRI":0.374808,"CUB":0.925639,"CUW":116.708398,"CYP":0.843819,"CZE":7.913517,"DEU":9.289287,"DJI":0.466323,"DMA":0.071543,"DNK":5.820494,"DOM":0.23175,"DZA":0.414751,"ECU":0.246031,"EGY":0.501886,"ERI":0,"ESP":1.376337,"EST":7.951928,"ETH":0.014048,"FIN":2.185659,"FJI":0.471343,"FRA":5.241519,"FRO":2.399326,"FSM":0,"GAB":0,"GBR":10.849723,"GEO":0.99918,"GHA":0.175937,"GIN":0,"GLP":0.309927,"GMB":0.043075,"GNB":0.013071,"GNQ":0.12123,"GRC":0.631111,"GRD":0.135734,"GRL":4.0144,"GTM":0.214717,"GUF":0.591875,"GUY":1.010344,"HKG":0.755568,"HND":0.216228,"HRV":0.805934,"HTI":0.062102,"HUN":3.504458,"IDN":0.19423,"IND":0.185804,"IRL":3.132046,"IRN":0.05663,"IRQ":0.487464,"ISL":5.0591,"ISR":2.869087,"ITA":1.357583,"JAM":0.515933,"JOR":0.434832,"JPN":1.599834,"KAZ":7.968189,"KEN":0.266795,"KGZ":2.731532,"KHM":0,"KIR":0,"KNA":0,"KOR":0.24069,"KSV":0,"KWT":8.201946,"LAO":0,"LBN":0.864057,"LBR":0.103425,"LBY":0.250824,"LCA":0.083193,"LIE":0,"LKA":0.20805,"LSO":0,"LTU":3.507999,"LUX":28.935029,"LVA":3.019321,"MAC":0.1109,"MAR":0.359747,"MDA":3.558956,"MDG":0.066418,"MDV":0,"MEX":1.184646,"MHL":0,"MKD":1.609224,"MLI":0,"MLT":0.96858,"MMR":0.076423,"MNE":0.680396,"MNG":0.586627,"MOZ":0.183216,"MRT":0,"MSR":0,"MTQ":0.357607,"MUS":0.320499,"MWI":0.109766,"MYS":1.06037,"MYT":0,"NAM":0,"NCL":7.582826,"NER":0,"NGA":0.064171,"NIC":0.210758,"NIU":0,"NLD":5.492504,"NOR":2.910949,"NPL":0.004424,"NRU":0,"NZL":4.325218,"OMN":0,"PAK":0.179438,"PAN":0.667753,"PER":0.726305,"PHL":0.241988,"PLW":0,"PNG":0.056362,"POL":5.541364,"PRI":0,"PRK":0.46901,"PRT":0.671716,"PRY":0.111172,"PSE":0,"PYF":0,"QAT":21.953582,"REU":0.126562,"ROU":1.942176,"RUS":5.095527,"RWA":0.004899,"SAU":0.356124,"SDN":0.107323,"SEN":0,"SGP":3.126545,"SHN":0,"SLB":0.032015,"SLE":0.059136,"SLV":0.196074,"SOM":0.019319,"SPM":7.040137,"SRB":1.386611,"SSD":0.025689,"STP":0.056706,"SUR":1.531188,"SVK":6.264189,"SVN":1.642924,"SWE":4.779145,"SWZ":0.012221,"SXM":834.192642,"SYC":0,"SYR":0.148709,"TCA":0,"TCD":0,"TGO":0.022076,"THA":0.090842,"TJK":1.693675,"TKM":5.703755,"TLS":0,"TON":0.130391,"TTO":3.930766,"TUN":0.360949,"TUR":0.577319,"TUV":0,"TWN":0.729033,"TZA":0.063438,"UGA":0.034216,"UKR":4.494596,"URY":1.59923,"USA":15.735586,"UZB":3.294446,"VCT":0.105312,"VEN":7.888825,"VGB":0,"VNM":0.097065,"VUT":0,"WLF":0,"WSM":0.114501,"YEM":0.889206,"ZAF":5.183674,"ZMB":1.332475,"ZWE":1.493658},"1955":{"ABW":15.543941,"AFG":0.019304,"AGO":0.083784,"AIA":0,"ALB":0.456072,"AND":0,"ARE":0,"ARG":2.11543,"ARM":1.400759,"ATG":0,"AUS":7.673764,"AUT":4.184984,"AZE":3.828014,"BDI":0.003021,"BEL":10.415619,"BEN":0,"BES":20.673992,"BFA":0,"BGD":0.031124,"BGR":1.608369,"BHR":10.405309,"BHS":1.387218,"BIH":1.160917,"BLR":3.592571,"BLZ":0.366464,"BMU":2.808667,"BOL":0.277108,"BRA":0.542634,"BRB":0.564139,"BRN":4.674996,"BTN":0,"BWA":0,"CAF":0,"CAN":10.771196,"CHE":2.721527,"CHL":1.583597,"CHN":0.315788,"CIV":0,"CMR":0.050201,"COD":0.248384,"COG":0,"COK":0,"COL":0.883921,"COM":0,"CPV":0.112514,"CRI":0.309685,"CUB":1.033091,"CUW":93.999611,"CYP":0.843758,"CZE":8.154486,"DEU":10.158266,"DJI":0.501938,"DMA":0.070604,"DNK":6.114199,"DOM":0.327844,"DZA":0.449761,"ECU":0.297718,"EGY":0.446363,"ERI":0,"ESP":1.384132,"EST":8.921223,"ETH":0.011523,"FIN":2.579558,"FJI":0.501052,"FRA":5.487722,"FRO":3.079279,"FSM":0,"GAB":0,"GBR":11.270069,"GEO":1.118062,"GHA":0.201648,"GIN":0,"GLP":0.3323,"GMB":0.041949,"GNB":0.019499,"GNQ":0.149064,"GRC":0.730797,"GRD":0.132985,"GRL":7.942499,"GTM":0.257194,"GUF":0.575739,"GUY":1.068916,"HKG":0.754534,"HND":0.242699,"HRV":0.914131,"HTI":0.075396,"HUN":3.634672,"IDN":0.268118,"IND":0.197672,"IRL":4.058654,"IRN":0.837841,"IRQ":0.639859,"ISL":5.783979,"ISR":3.077066,"ITA":1.522234,"JAM":0.634414,"JOR":0.612047,"JPN":1.574809,"KAZ":8.745781,"KEN":0.302697,"KGZ":3.030606,"KHM":0.020805,"KIR":0,"KNA":0,"KOR":0.291947,"KSV":0,"KWT":10.065824,"LAO":0.013546,"LBN":1.041754,"LBR":0.057827,"LBY":0.349753,"LCA":0.124255,"LIE":0,"LKA":0.190083,"LSO":0,"LTU":3.934716,"LUX":32.354811,"LVA":3.386081,"MAC":0.112302,"MAR":0.347075,"MDA":3.921411,"MDG":0.068071,"MDV":0,"MEX":1.261027,"MHL":0,"MKD":1.819874,"MLI":0,"MLT":1.053017,"MMR":0.072807,"MNE":0.767843,"MNG":0.698114,"MOZ":0.217353,"MRT":0,"MSR":0,"MTQ":0.433256,"MUS":0.214856,"MWI":0.126883,"MYS":1.094849,"MYT":0,"NAM":0,"NCL":9.999057,"NER":0,"NGA":0.066032,"NIC":0.254574,"NIU":0,"NLD":5.663728,"NOR":3.328517,"NPL":0.004735,"NRU":0,"NZL":4.387173,"OMN":0,"PAK":0.181292,"PAN":0.728755,"PER":0.693868,"PHL":0.287285,"PLW":0,"PNG":0.073917,"POL":5.690291,"PRI":0,"PRK":0.708945,"PRT":0.745506,"PRY":0.112988,"PSE":0,"PYF":0.590373,"QAT":14.570113,"REU":0.133741,"ROU":2.107235,"RUS":5.686675,"RWA":0.005692,"SAU":0.590224,"SDN":0.118112,"SEN":0,"SGP":3.197191,"SHN":0,"SLB":0.093697,"SLE":0.085782,"SLV":0.188442,"SOM":0.026069,"SPM":7.752857,"SRB":1.573242,"SSD":0.028641,"STP":0.05611,"SUR":1.371107,"SVK":6.381584,"SVN":1.861044,"SWE":5.381838,"SWZ":0.011932,"SXM":651.545792,"SYC":0,"SYR":0.41214,"TCA":0,"TCD":0,"TGO":0.026536,"THA":0.102388,"TJK":1.860112,"TKM":6.291679,"TLS":0,"TON":0.126293,"TTO":3.665411,"TUN":0.401444,"TUR":0.571732,"TUV":0,"TWN":0.779827,"TZA":0.063827,"UGA":0.039929,"UKR":5.026256,"URY":1.656409,"USA":16.932928,"UZB":3.629378,"VCT":0.10203,"VEN":8.849197,"VGB":0,"VNM":0.12467,"VUT":0,"WLF":0,"WSM":0.112121,"YEM":0.4879,"ZAF":5.682846,"ZMB":1.525818,"ZWE":1.707993},"1956":{"ABW":19.421923,"AFG":0.022652,"AGO":0.099881,"AIA":0,"ALB":0.55896,"AND":0,"ARE":0,"ARG":2.327586,"ARM":1.488097,"ATG":0,"AUS":7.744539,"AUT":4.057256,"AZE":4.086706,"BDI":0.003456,"BEL":10.896849,"BEN":0,"BES":26.77006,"BFA":0,"BGD":0.035992,"BGR":1.707072,"BHR":7.582269,"BHS":1.450273,"BIH":1.30092,"BLR":3.91081,"BLZ":0.356611,"BMU":3.420843,"BOL":0.323363,"BRA":0.566301,"BRB":0.560943,"BRN":4.351416,"BTN":0,"BWA":0,"CAF":0,"CAN":11.74008,"CHE":3.367767,"CHL":1.581627,"CHN":0.350203,"CIV":0,"CMR":0.050085,"COD":0.227765,"COG":0,"COK":0,"COL":0.905676,"COM":0,"CPV":0.148446,"CRI":0.415305,"CUB":0.872494,"CUW":118.296711,"CYP":1.240732,"CZE":8.68619,"DEU":10.719963,"DJI":0.388898,"DMA":0.069196,"DNK":5.913668,"DOM":0.341222,"DZA":0.476938,"ECU":0.31366,"EGY":0.40658,"ERI":0,"ESP":1.443348,"EST":9.684284,"ETH":0.012008,"FIN":2.841457,"FJI":0.548395,"FRA":6.114086,"FRO":3.5124,"FSM":0,"GAB":0,"GBR":11.168914,"GEO":1.20975,"GHA":0.177251,"GIN":0,"GLP":0.367987,"GMB":0.051066,"GNB":0.019398,"GNQ":0.146625,"GRC":0.763393,"GRD":0.129943,"GRL":5.251599,"GTM":0.267158,"GUF":0.553955,"GUY":1.099558,"HKG":0.813792,"HND":0.245668,"HRV":1.036762,"HTI":0.072947,"HUN":3.365342,"IDN":0.273797,"IND":0.200307,"IRL":3.806446,"IRN":1.179755,"IRQ":0.975972,"ISL":5.892102,"ISR":2.948761,"ITA":1.724569,"JAM":0.802448,"JOR":0.677138,"JPN":1.76481,"KAZ":9.275292,"KEN":0.328158,"KGZ":3.247636,"KHM":0.02611,"KIR":0,"KNA":0,"KOR":0.331891,"KSV":0,"KWT":5.100163,"LAO":0.030257,"LBN":1.17676,"LBR":0.045946,"LBY":0.261916,"LCA":0.123628,"LIE":0,"LKA":0.158728,"LSO":0,"LTU":4.269529,"LUX":33.745037,"LVA":3.673401,"MAC":0.133084,"MAR":0.334092,"MDA":4.176064,"MDG":0.069587,"MDV":0,"MEX":1.303415,"MHL":0,"MKD":2.056251,"MLI":0,"MLT":0.902845,"MMR":0.083067,"MNE":0.865513,"MNG":0.79691,"MOZ":0.242485,"MRT":0,"MSR":0,"MTQ":0.438353,"MUS":0.359491,"MWI":0.135468,"MYS":1.083919,"MYT":0,"NAM":0,"NCL":16.272618,"NER":0,"NGA":0.07237,"NIC":0.237814,"NIU":0,"NLD":5.967583,"NOR":3.452739,"NPL":0.005036,"NRU":0,"NZL":4.425101,"OMN":0,"PAK":0.210392,"PAN":0.632958,"PER":0.695253,"PHL":0.25967,"PLW":0,"PNG":0.071962,"POL":6.033539,"PRI":0,"PRK":0.849436,"PRT":0.822624,"PRY":0.114669,"PSE":0,"PYF":0.572217,"QAT":17.017771,"REU":0.151928,"ROU":2.308077,"RUS":6.134746,"RWA":0.006431,"SAU":0.441861,"SDN":0.110974,"SEN":0,"SGP":3.073656,"SHN":0,"SLB":0.091381,"SLE":0.082884,"SLV":0.210167,"SOM":0.026823,"SPM":6.937934,"SRB":1.783693,"SSD":0.027253,"STP":0.111167,"SUR":1.452958,"SVK":6.721648,"SVN":2.10634,"SWE":5.931992,"SWZ":0.011652,"SXM":796.626925,"SYC":0,"SYR":0.488573,"TCA":0,"TCD":0,"TGO":0.026097,"THA":0.109982,"TJK":1.976035,"TKM":6.708807,"TLS":0,"TON":0.122247,"TTO":3.770596,"TUN":0.385385,"TUR":0.586711,"TUV":0,"TWN":0.803246,"TZA":0.073525,"UGA":0.038817,"UKR":5.433825,"URY":1.677502,"USA":17.432252,"UZB":3.873291,"VCT":0.098813,"VEN":9.260324,"VGB":0,"VNM":0.100167,"VUT":0,"WLF":0,"WSM":0.10959,"YEM":0.450293,"ZAF":5.837393,"ZMB":1.614575,"ZWE":1.805696},"1957":{"ABW":12.824627,"AFG":0.035702,"AGO":0.121207,"AIA":0,"ALB":0.971628,"AND":0,"ARE":0,"ARG":2.458599,"ARM":1.574772,"ATG":0.420787,"AUS":7.726555,"AUT":4.189156,"AZE":4.345946,"BDI":0.003874,"BEL":10.802442,"BEN":0,"BES":18.272127,"BFA":0,"BGD":0.036269,"BGR":1.875458,"BHR":5.245307,"BHS":1.758632,"BIH":1.385227,"BLR":4.242142,"BLZ":0.347089,"BMU":3.463655,"BOL":0.287775,"BRA":0.539658,"BRB":0.590818,"BRN":4.049961,"BTN":0,"BWA":0,"CAF":0,"CAN":10.979631,"CHE":3.448798,"CHL":1.534366,"CHN":0.406006,"CIV":0,"CMR":0.052976,"COD":0.233549,"COG":0,"COK":0,"COL":0.952643,"COM":0,"CPV":0.091664,"CRI":0.382471,"CUB":2.02899,"CUW":78.556082,"CYP":1.477355,"CZE":9.01493,"DEU":10.838651,"DJI":0.5648,"DMA":0.067457,"DNK":5.544251,"DOM":0.34592,"DZA":0.517327,"ECU":0.266363,"EGY":0.47518,"ERI":0,"ESP":1.697691,"EST":10.501913,"ETH":0.015724,"FIN":2.830623,"FJI":0.45137,"FRA":6.266428,"FRO":2.909802,"FSM":0,"GAB":0,"GBR":11.042718,"GEO":1.304402,"GHA":0.206092,"GIN":0,"GLP":0.430161,"GMB":0.059672,"GNB":0.019301,"GNQ":0.129796,"GRC":0.819553,"GRD":0.126674,"GRL":5.69527,"GTM":0.261717,"GUF":0.5325,"GUY":1.034154,"HKG":0.866005,"HND":0.302125,"HRV":1.115806,"HTI":0.0686,"HUN":3.908046,"IDN":0.274347,"IND":0.219783,"IRL":3.404829,"IRN":1.100657,"IRQ":0.893187,"ISL":5.849695,"ISR":3.061955,"ITA":1.789509,"JAM":1.011237,"JOR":0.696196,"JPN":2.047817,"KAZ":9.81146,"KEN":0.326557,"KGZ":3.469427,"KHM":0.031147,"KIR":0,"KNA":0,"KOR":0.349633,"KSV":0,"KWT":9.846198,"LAO":0.02957,"LBN":1.251697,"LBR":0.079457,"LBY":0.240383,"LCA":0.122905,"LIE":0,"LKA":0.254205,"LSO":0,"LTU":4.616499,"LUX":35.090124,"LVA":3.976332,"MAC":0.154927,"MAR":0.281918,"MDA":4.438921,"MDG":0.067071,"MDV":0,"MEX":1.482506,"MHL":0,"MKD":2.207071,"MLI":0,"MLT":0.936386,"MMR":0.103092,"MNE":0.926857,"MNG":0.857306,"MOZ":0.272459,"MRT":0,"MSR":0,"MTQ":0.590658,"MUS":0.35068,"MWI":0.136452,"MYS":0.489451,"MYT":0,"NAM":0,"NCL":14.473956,"NER":0,"NGA":0.075071,"NIC":0.255439,"NIU":0,"NLD":5.8308,"NOR":3.252096,"NPL":0.005705,"NRU":0,"NZL":4.609925,"OMN":0,"PAK":0.212684,"PAN":0.739751,"PER":0.714756,"PHL":0.267268,"PLW":0,"PNG":0.080042,"POL":6.364223,"PRI":0,"PRK":1.045058,"PRT":0.889573,"PRY":0.120348,"PSE":0,"PYF":0.649456,"QAT":10.085492,"REU":0.179791,"ROU":2.568069,"RUS":6.607428,"RWA":0.007118,"SAU":0.552198,"SDN":0.138488,"SEN":0,"SGP":1.234678,"SHN":0,"SLB":0.089096,"SLE":0.176714,"SLV":0.232021,"SOM":0.027527,"SPM":8.445935,"SRB":1.923895,"SSD":0.034449,"STP":0.165385,"SUR":1.542317,"SVK":6.894944,"SVN":2.262212,"SWE":5.278952,"SWZ":0.011382,"SXM":514.521581,"SYC":0,"SYR":0.46977,"TCA":0,"TCD":0,"TGO":0.030328,"THA":0.119459,"TJK":2.093815,"TKM":7.121745,"TLS":0,"TON":0.118542,"TTO":3.268354,"TUN":0.384658,"TUR":0.632754,"TUV":0,"TWN":0.825771,"TZA":0.082621,"UGA":0.03981,"UKR":5.862019,"URY":1.823924,"USA":16.985847,"UZB":4.118669,"VCT":0.095602,"VEN":9.53914,"VGB":0,"VNM":0.096225,"VUT":0,"WLF":0,"WSM":0.142171,"YEM":0.562055,"ZAF":5.851874,"ZMB":1.612506,"ZWE":1.802418},"1958":{"ABW":10.871757,"AFG":0.039569,"AGO":0.114328,"AIA":0,"ALB":0.750455,"AND":0,"ARE":0,"ARG":2.243804,"ARM":1.624697,"ATG":0.550326,"AUS":7.876495,"AUT":4.019994,"AZE":4.50266,"BDI":0.003802,"BEL":9.756151,"BEN":0.050985,"BES":15.948442,"BFA":0.000788,"BGD":0.039716,"BGR":2.016539,"BHR":8.651422,"BHS":1.719545,"BIH":1.338932,"BLR":4.48215,"BLZ":0.464621,"BMU":3.592333,"BOL":0.257367,"BRA":0.568173,"BRB":0.652155,"BRN":4.156633,"BTN":0,"BWA":0,"CAF":0,"CAN":10.644016,"CHE":3.133588,"CHL":1.594937,"CHN":0.814886,"CIV":0.143884,"CMR":0.056458,"COD":0.200832,"COG":0,"COK":0,"COL":0.946891,"COM":0,"CPV":0.072291,"CRI":0.357148,"CUB":2.579932,"CUW":66.847433,"CYP":1.359221,"CZE":9.79804,"DEU":10.485392,"DJI":0.592475,"DMA":0.130923,"DNK":5.925365,"DOM":0.34522,"DZA":0.476881,"ECU":0.30273,"EGY":0.532376,"ERI":0,"ESP":1.87132,"EST":11.125654,"ETH":0.015307,"FIN":2.432691,"FJI":0.466411,"FRA":5.95444,"FRO":3.531141,"FSM":0,"GAB":0,"GBR":10.70645,"GEO":1.370839,"GHA":0.210373,"GIN":0.048511,"GLP":0.418899,"GMB":0.06777,"GNB":0.019206,"GNQ":0.184391,"GRC":0.888138,"GRD":0.16438,"GRL":7.703744,"GTM":0.291434,"GUF":0.639464,"GUY":0.855259,"HKG":0.831199,"HND":0.299027,"HRV":1.091344,"HTI":0.073145,"HUN":3.972088,"IDN":0.264932,"IND":0.224764,"IRL":3.155031,"IRN":1.243089,"IRQ":0.980767,"ISL":6.480324,"ISR":3.155416,"ITA":1.790262,"JAM":0.844862,"JOR":0.692557,"JPN":1.954876,"KAZ":10.12121,"KEN":0.289001,"KGZ":3.610503,"KHM":0.037343,"KIR":0,"KNA":0,"KOR":0.371383,"KSV":0,"KWT":15.009124,"LAO":0.036124,"LBN":1.166772,"LBR":0.148593,"LBY":0.263348,"LCA":0.122079,"LIE":0,"LKA":0.208895,"LSO":0,"LTU":4.865616,"LUX":32.474813,"LVA":4.19612,"MAC":0.158194,"MAR":0.293283,"MDA":4.604565,"MDG":0.077549,"MDV":0,"MEX":1.580104,"MHL":0,"MKD":2.149567,"MLI":0,"MLT":0.983328,"MMR":0.115896,"MNE":0.900829,"MNG":1.240404,"MOZ":0.27607,"MRT":0,"MSR":0,"MTQ":0.51299,"MUS":0.324855,"MWI":0.119198,"MYS":0.518855,"MYT":0,"NAM":0,"NCL":9.732252,"NER":0.007777,"NGA":0.086132,"NIC":0.356614,"NIU":0,"NLD":5.958876,"NOR":3.174617,"NPL":0.005979,"NRU":0,"NZL":4.452104,"OMN":0,"PAK":0.233443,"PAN":0.87441,"PER":0.767841,"PHL":0.28742,"PLW":0,"PNG":0.077895,"POL":6.182992,"PRI":0,"PRK":1.407511,"PRT":0.858577,"PRY":0.133808,"PSE":0,"PYF":0.634231,"QAT":5.226819,"REU":0.183759,"ROU":2.752598,"RUS":6.944634,"RWA":0.006896,"SAU":0.509825,"SDN":0.150371,"SEN":0.11468,"SGP":1.563138,"SHN":0,"SLB":0.086791,"SLE":0.093654,"SLV":0.226295,"SOM":0.030878,"SPM":8.346241,"SRB":1.883838,"SSD":0.037933,"STP":0.109386,"SUR":1.272227,"SVK":7.409021,"SVN":2.207327,"SWE":5.68273,"SWZ":0.011119,"SXM":425.812227,"SYC":0,"SYR":0.49928,"TCA":0,"TCD":0,"TGO":0.029823,"THA":0.120042,"TJK":2.162566,"TKM":7.365975,"TLS":0,"TON":0.115175,"TTO":4.313606,"TUN":0.350612,"TUR":0.616543,"TUV":0,"TWN":0.933018,"TZA":0.084575,"UGA":0.040714,"UKR":6.168853,"URY":1.614921,"USA":16.145486,"UZB":4.270203,"VCT":0.138688,"VEN":7.187149,"VGB":0,"VNM":0.162797,"VUT":0,"WLF":0,"WSM":0.103362,"YEM":0.352028,"ZAF":6.13044,"ZMB":1.397039,"ZWE":1.561347},"1959":{"ABW":13.561777,"AFG":0.045414,"AGO":0.117381,"AIA":0,"ALB":0.872085,"AND":0,"ARE":0.087046,"ARG":2.444443,"ARM":1.64922,"ATG":0.539826,"AUS":8.316192,"AUT":3.9794,"AZE":4.587395,"BDI":0.014457,"BEL":9.758679,"BEN":0.041426,"BES":20.404993,"BFA":0.001554,"BGD":0.037547,"BGR":2.508998,"BHR":8.479891,"BHS":2.381551,"BIH":1.505362,"BLR":4.659544,"BLZ":0.452544,"BMU":3.274748,"BOL":0.261237,"BRA":0.55046,"BRB":0.649185,"BRN":4.023592,"BTN":0,"BWA":0,"CAF":0.059939,"CAN":10.52681,"CHE":3.154269,"CHL":1.593188,"CHN":1.104223,"CIV":0.152471,"CMR":0.055375,"COD":0.181095,"COG":0.181588,"COK":0,"COL":1.05757,"COM":0.057476,"CPV":0.088723,"CRI":0.296382,"CUB":2.200305,"CUW":83.535759,"CYP":1.448035,"CZE":9.769168,"DEU":10.413414,"DJI":0.441313,"DMA":0.190104,"DNK":5.720043,"DOM":0.348904,"DZA":0.506699,"ECU":0.287905,"EGY":0.482311,"ERI":0,"ESP":1.727299,"EST":11.629061,"ETH":0.015876,"FIN":3.08419,"FJI":0.508216,"FRA":5.802627,"FRO":2.936856,"FSM":0,"GAB":0.043294,"GBR":10.463034,"GEO":1.417006,"GHA":0.197711,"GIN":0.045575,"GLP":0.530116,"GMB":0.047111,"GNB":0.025484,"GNQ":0.181301,"GRC":0.96139,"GRD":0.159862,"GRL":7.621425,"GTM":0.310946,"GUF":0.736507,"GUY":0.998318,"HKG":0.905669,"HND":0.290385,"HRV":1.241862,"HTI":0.066009,"HUN":4.217287,"IDN":0.277314,"IND":0.232731,"IRL":4.360663,"IRN":1.227975,"IRQ":1.055563,"ISL":7.198286,"ISR":3.068587,"ITA":1.91133,"JAM":1.13346,"JOR":0.816862,"JPN":2.058434,"KAZ":10.283937,"KEN":0.29537,"KGZ":3.693687,"KHM":0.039215,"KIR":0,"KNA":0,"KOR":0.448208,"KSV":0,"KWT":13.841072,"LAO":0.037077,"LBN":1.401748,"LBR":0.12871,"LBY":0.313433,"LCA":0.12122,"LIE":0,"LKA":0.215166,"LSO":0,"LTU":5.047405,"LUX":33.342325,"LVA":4.359453,"MAC":0.202297,"MAR":0.294161,"MDA":4.709826,"MDG":0.075587,"MDV":0,"MEX":1.656848,"MHL":0,"MKD":2.435061,"MLI":0.009029,"MLT":1.152577,"MMR":0.130677,"MNE":1.018481,"MNG":1.422291,"MOZ":0.268812,"MRT":0.040388,"MSR":0,"MTQ":0.579973,"MUS":0.338782,"MWI":0.129965,"MYS":0.418686,"MYT":0,"NAM":0,"NCL":7.507528,"NER":0.006474,"NGA":0.080932,"NIC":0.27634,"NIU":0,"NLD":5.917774,"NOR":3.32319,"NPL":0.006608,"NRU":0,"NZL":4.419351,"OMN":0,"PAK":0.221236,"PAN":0.910007,"PER":0.730396,"PHL":0.263148,"PLW":0,"PNG":0.083399,"POL":6.524678,"PRI":0,"PRK":1.743929,"PRT":0.901702,"PRY":0.16434,"PSE":0,"PYF":0.353852,"QAT":5.392518,"REU":0.197646,"ROU":2.770038,"RUS":7.196029,"RWA":0.025912,"SAU":0.459223,"SDN":0.15489,"SEN":0.12184,"SGP":1.169701,"SHN":0,"SLB":0.084508,"SLE":0.103574,"SLV":0.22333,"SOM":0.031426,"SPM":6.738047,"SRB":2.145094,"SSD":0.039676,"STP":0.108512,"SUR":1.41328,"SVK":7.297774,"SVN":2.50639,"SWE":5.690235,"SWZ":0.010864,"SXM":518.382362,"SYC":0,"SYR":0.497678,"TCA":0,"TCD":0.020964,"TGO":0.03384,"THA":0.128528,"TJK":2.197125,"TKM":7.489906,"TLS":0,"TON":0.111881,"TTO":3.737832,"TUN":0.38202,"TUR":0.642248,"TUV":0,"TWN":1.035672,"TZA":0.070576,"UGA":0.055896,"UKR":6.393546,"URY":1.757807,"USA":16.33884,"UZB":4.346649,"VCT":0.134075,"VEN":8.283319,"VGB":0,"VNM":0.208018,"VUT":0,"WLF":0,"WSM":0.133466,"YEM":0.477885,"ZAF":5.869172,"ZMB":1.510846,"ZWE":1.688912},"1960":{"ABW":11.327293,"AFG":0.048001,"AGO":0.10247,"AIA":0,"ALB":1.181769,"AND":0,"ARE":0.082383,"ARG":2.39632,"ARM":1.658013,"ATG":0.662065,"AUS":8.566338,"AUT":4.368729,"AZE":4.625251,"BDI":0.013264,"BEL":9.980331,"BEN":0.064171,"BES":17.358126,"BFA":0.009192,"BGD":0.04389,"BGR":2.822021,"BHR":3.57984,"BHS":3.584,"BIH":1.612845,"BLR":4.794373,"BLZ":0.481035,"BMU":3.748917,"BOL":0.270744,"BRA":0.640993,"BRB":0.74052,"BRN":3.906733,"BTN":0,"BWA":0,"CAF":0.052351,"CAN":10.760642,"CHE":3.659446,"CHL":1.655216,"CHN":1.221088,"CIV":0.124483,"CMR":0.052981,"COD":0.151769,"COG":0.211713,"COK":0,"COL":1.044799,"COM":0.056412,"CPV":0.104619,"CRI":0.364685,"CUB":1.883357,"CUW":70.316973,"CYP":1.513221,"CZE":10.383568,"DEU":11.140283,"DJI":0.468978,"DMA":0.185116,"DNK":6.49308,"DOM":0.315308,"DZA":0.539852,"ECU":0.381447,"EGY":0.593047,"ERI":0,"ESP":1.606596,"EST":12.000443,"ETH":0.016174,"FIN":3.405496,"FJI":0.483256,"FRA":6.485837,"FRO":1.716461,"FSM":0,"GAB":0.256953,"GBR":11.115083,"GEO":1.449705,"GHA":0.211522,"GIN":0.116687,"GLP":0.568829,"GMB":0.04584,"GNB":0.031699,"GNQ":0.082229,"GRC":1.105482,"GRD":0.234441,"GRL":6.95754,"GTM":0.327996,"GUF":0.706313,"GUY":1.153027,"HKG":0.947962,"HND":0.296064,"HRV":1.346721,"HTI":0.073205,"HUN":4.540728,"IDN":0.241961,"IND":0.249633,"IRL":3.973059,"IRN":1.746643,"IRQ":1.165354,"ISL":6.906165,"ISR":3.395998,"ITA":2.205334,"JAM":0.894096,"JOR":0.876408,"JPN":2.461229,"KAZ":10.347401,"KEN":0.312735,"KGZ":3.731681,"KHM":0.042315,"KIR":0,"KNA":0,"KOR":0.485721,"KSV":0,"KWT":25.529172,"LAO":0.037977,"LBN":1.432632,"LBR":0.14501,"LBY":0.485286,"LCA":0.159976,"LIE":0,"LKA":0.230652,"LSO":0,"LTU":5.183735,"LUX":36.629326,"LVA":4.482699,"MAC":0.289785,"MAR":0.308927,"MDA":4.777651,"MDG":0.07872,"MDV":0,"MEX":1.738508,"MHL":0,"MKD":2.62953,"MLI":0.022614,"MLT":1.009253,"MMR":0.124989,"MNE":1.097654,"MNG":1.322618,"MOZ":0.277298,"MRT":0.043698,"MSR":0,"MTQ":0.581002,"MUS":0.265318,"MWI":0.121054,"MYS":0.536325,"MYT":0,"NAM":0,"NCL":10.599242,"NER":0.008381,"NGA":0.075747,"NIC":0.29679,"NIU":0,"NLD":6.389703,"NOR":3.653981,"NPL":0.007928,"NRU":0,"NZL":4.842865,"OMN":0,"PAK":0.259529,"PAN":0.883915,"PER":0.80264,"PHL":0.292242,"PLW":0,"PNG":0.090416,"POL":6.763054,"PRI":0,"PRK":2.040933,"PRT":0.924688,"PRY":0.160464,"PSE":0,"PYF":0.431816,"QAT":4.83364,"REU":0.200222,"ROU":2.892735,"RUS":7.388349,"RWA":0.023541,"SAU":0.642017,"SDN":0.149618,"SEN":0.252776,"SGP":0.869614,"SHN":0,"SLB":0.082374,"SLE":0.310467,"SLV":0.222665,"SOM":0.029356,"SPM":7.439594,"SRB":2.325631,"SSD":0.038931,"STP":0.161557,"SUR":1.610873,"SVK":7.670073,"SVN":2.712938,"SWE":6.562286,"SWZ":0.095565,"SXM":416.089612,"SYC":0,"SYR":0.698091,"TCA":0,"TCD":0.018146,"TGO":0.039938,"THA":0.139473,"TJK":2.209271,"TKM":7.538776,"TLS":0,"TON":0.163018,"TTO":3.044333,"TUN":0.410945,"TUR":0.610612,"TUV":0,"TWN":1.081102,"TZA":0.082456,"UGA":0.055274,"UKR":6.560335,"URY":1.706007,"USA":16.444399,"UZB":4.374762,"VCT":0.130638,"VEN":6.98998,"VGB":0,"VNM":0.228737,"VUT":0,"WLF":0,"WSM":0.129316,"YEM":0.655129,"ZAF":5.922573,"ZMB":1.396171,"ZWE":1.561387},"1961":{"ABW":11.566762,"AFG":0.055835,"AGO":0.083382,"AIA":0,"ALB":1.287977,"AND":0,"ARE":0.077966,"ARG":2.4722,"ARM":1.65332,"ATG":0.846866,"AUS":8.614547,"AUT":4.491474,"AZE":4.619913,"BDI":0.016952,"BEL":10.110553,"BEN":0.050266,"BES":17.836799,"BFA":0.018876,"BGD":0.044146,"BGR":3.255606,"BHR":10.598982,"BHS":4.541292,"BIH":1.658611,"BLR":4.884563,"BLZ":0.390797,"BMU":4.100632,"BOL":0.274892,"BRA":0.65211,"BRB":0.830953,"BRN":3.395585,"BTN":0,"BWA":0,"CAF":0.051414,"CAN":10.616398,"CHE":3.746487,"CHL":1.738694,"CHN":0.870845,"CIV":0.143767,"CMR":0.054252,"COD":0.15028,"COG":0.246875,"COK":0,"COL":1.124449,"COM":0.055343,"CPV":0.102214,"CRI":0.351667,"CUB":1.640261,"CUW":72.372051,"CYP":1.453194,"CZE":11.233041,"DEU":11.34226,"DJI":0.492528,"DMA":0.182002,"DNK":6.871642,"DOM":0.301793,"DZA":0.522125,"ECU":0.346047,"EGY":0.615035,"ERI":0,"ESP":1.745477,"EST":12.223506,"ETH":0.015288,"FIN":3.344525,"FJI":0.406587,"FRA":6.841927,"FRO":3.285433,"FSM":0,"GAB":0.317487,"GBR":11.13509,"GEO":1.46983,"GHA":0.189152,"GIN":0.172008,"GLP":0.61932,"GMB":0.053515,"GNB":0.050269,"GNQ":0.080745,"GRC":1.15035,"GRD":0.192647,"GRL":8.766861,"GTM":0.333258,"GUF":0.676764,"GUY":1.251219,"HKG":1.042819,"HND":0.34407,"HRV":1.401258,"HTI":0.074619,"HUN":4.880376,"IDN":0.286308,"IND":0.263841,"IRL":4.400634,"IRN":1.660725,"IRQ":1.199499,"ISL":6.097434,"ISR":3.56008,"ITA":2.49685,"JAM":1.278989,"JOR":1.095923,"JPN":2.965608,"KAZ":10.317315,"KEN":0.298055,"KGZ":3.725521,"KHM":0.050452,"KIR":0.151797,"KNA":0,"KOR":0.544162,"KSV":0,"KWT":29.359718,"LAO":0.052315,"LBN":1.44527,"LBR":0.138382,"LBY":0.807747,"LCA":0.197497,"LIE":0,"LKA":0.232831,"LSO":0,"LTU":5.276157,"LUX":36.580728,"LVA":4.56408,"MAC":0.38963,"MAR":0.312155,"MDA":4.807696,"MDG":0.068266,"MDV":0,"MEX":1.742551,"MHL":0,"MKD":2.721333,"MLI":0.021631,"MLT":0.869483,"MMR":0.116664,"MNE":1.135451,"MNG":1.376488,"MOZ":0.380178,"MRT":0.055279,"MSR":0,"MTQ":0.5824,"MUS":0.269551,"MWI":0.100674,"MYS":0.58019,"MYT":0,"NAM":0,"NCL":10.552167,"NER":0.015256,"NGA":0.08962,"NIC":0.303824,"NIU":0,"NLD":6.509521,"NOR":3.694045,"NPL":0.007777,"NRU":0,"NZL":4.834286,"OMN":0,"PAK":0.262417,"PAN":0.949679,"PER":0.82397,"PHL":0.296926,"PLW":0,"PNG":0.098994,"POL":6.927884,"PRI":0,"PRK":2.217646,"PRT":1.020358,"PRY":0.18683,"PSE":0,"PYF":0.674452,"QAT":4.019247,"REU":0.222018,"ROU":2.991802,"RUS":7.514389,"RWA":0.030031,"SAU":0.828676,"SDN":0.147993,"SEN":0.241356,"SGP":1.262191,"SHN":0,"SLB":0.10715,"SLE":0.123643,"SLV":0.203673,"SOM":0.029853,"SPM":9.677367,"SRB":2.414045,"SSD":0.039111,"STP":0.159988,"SUR":1.542215,"SVK":8.204999,"SVN":2.819644,"SWE":6.475252,"SWZ":0.01038,"SXM":397.858579,"SYC":0,"SYR":0.644199,"TCA":0,"TCD":0.016613,"TGO":0.054563,"THA":0.151121,"TJK":2.200676,"TKM":7.52212,"TLS":0,"TON":0.158407,"TTO":5.315358,"TUN":0.41656,"TUR":0.613726,"TUV":0,"TWN":1.101707,"TZA":0.068049,"UGA":0.051852,"UKR":6.670776,"URY":1.607386,"USA":16.119921,"UZB":4.360032,"VCT":0.128312,"VEN":6.137363,"VGB":0,"VNM":0.237296,"VUT":0,"WLF":0,"WSM":0.156822,"YEM":0.471734,"ZAF":6.010775,"ZMB":1.152051,"ZWE":1.289181},"1962":{"ABW":12.507362,"AFG":0.076775,"AGO":0.213556,"AIA":0,"ALB":1.34651,"AND":0,"ARE":0.123055,"ARG":2.551818,"ARM":1.680087,"ATG":1.799607,"AUS":8.852126,"AUT":4.750335,"AZE":4.69746,"BDI":0.015228,"BEL":10.619156,"BEN":0.052276,"BES":19.245227,"BFA":0.017113,"BGD":0.047076,"BGR":3.81854,"BHR":9.172734,"BHS":5.743811,"BIH":1.670801,"BLR":5.06804,"BLZ":0.723749,"BMU":3.58676,"BOL":0.284408,"BRA":0.690549,"BRB":1.107802,"BRN":3.94369,"BTN":0,"BWA":0,"CAF":0.042054,"CAN":11.115183,"CHE":4.327669,"CHL":1.968788,"CHN":0.691556,"CIV":0.146623,"CMR":0.054575,"COD":0.13502,"COG":0.214106,"COK":0,"COL":1.163451,"COM":0.054274,"CPV":0.082581,"CRI":0.379811,"CUB":1.868768,"CUW":78.311957,"CYP":1.504956,"CZE":11.941046,"DEU":11.903437,"DJI":0.511501,"DMA":0.179537,"DNK":7.940149,"DOM":0.352473,"DZA":0.480632,"ECU":0.31974,"EGY":0.651961,"ERI":0,"ESP":1.931426,"EST":12.675221,"ETH":0.017308,"FIN":3.737675,"FJI":0.539712,"FRA":7.138632,"FRO":3.353488,"FSM":0,"GAB":0.167257,"GBR":11.148759,"GEO":1.517046,"GHA":0.196757,"GIN":0.181071,"GLP":0.644459,"GMB":0.060733,"GNB":0.068266,"GNQ":0.079224,"GRC":1.188275,"GRD":0.267022,"GRL":7.609115,"GTM":0.317706,"GUF":0.647636,"GUY":1.120706,"HKG":1.105149,"HND":0.317582,"HRV":1.427131,"HTI":0.07504,"HUN":5.022364,"IDN":0.246128,"IND":0.283886,"IRL":4.659232,"IRN":1.655755,"IRQ":1.205699,"ISL":6.566026,"ISR":3.833742,"ITA":2.915639,"JAM":1.257298,"JOR":1.120197,"JPN":3.042182,"KAZ":10.480087,"KEN":0.313505,"KGZ":3.780748,"KHM":0.053167,"KIR":0.222025,"KNA":0,"KOR":0.633814,"KSV":0,"KWT":37.755118,"LAO":0.059373,"LBN":1.491025,"LBR":0.211724,"LBY":0.682604,"LCA":0.195261,"LIE":0,"LKA":0.249417,"LSO":0,"LTU":5.474704,"LUX":36.081309,"LVA":4.732898,"MAC":0.512065,"MAR":0.247883,"MDA":4.935389,"MDG":0.074049,"MDV":0,"MEX":1.647836,"MHL":0,"MKD":2.762313,"MLI":0.025339,"MLT":0.983032,"MMR":0.126861,"MNE":1.150271,"MNG":1.885778,"MOZ":0.281171,"MRT":0.070307,"MSR":0.307202,"MTQ":0.572609,"MUS":0.356168,"MWI":0.09492,"MYS":0.573813,"MYT":0,"NAM":0,"NCL":6.494884,"NER":0.017772,"NGA":0.089168,"NIC":0.346757,"NIU":0,"NLD":7.055721,"NOR":3.863665,"NPL":0.008319,"NRU":0,"NZL":4.503979,"OMN":0,"PAK":0.281756,"PAN":0.994989,"PER":0.92286,"PHL":0.342408,"PLW":0,"PNG":0.095006,"POL":7.155383,"PRI":0,"PRK":2.519386,"PRT":1.043171,"PRY":0.197041,"PSE":0,"PYF":0.533943,"QAT":4.222414,"REU":0.23349,"ROU":3.399663,"RUS":7.790186,"RWA":0.026992,"SAU":1.401821,"SDN":0.153826,"SEN":0.234635,"SGP":1.468929,"SHN":0,"SLB":0.104496,"SLE":0.136848,"SLV":0.22066,"SOM":0.035151,"SPM":6.684776,"SRB":2.452389,"SSD":0.041298,"STP":0.158113,"SUR":1.715766,"SVK":8.639843,"SVN":2.868576,"SWE":6.761843,"SWZ":0,"SXM":397.932064,"SYC":0,"SYR":0.653703,"TCA":0,"TCD":0.026768,"TGO":0.05152,"THA":0.177988,"TJK":2.231066,"TKM":7.641141,"TLS":0,"TON":0.153975,"TTO":8.204114,"TUN":0.418965,"TUR":0.744121,"TUV":0,"TWN":1.202542,"TZA":0.07194,"UGA":0.053099,"UKR":6.910294,"URY":1.54561,"USA":16.457443,"UZB":4.415655,"VCT":0.12608,"VEN":6.17496,"VGB":0.46368,"VNM":0.270391,"VUT":0.589317,"WLF":0,"WSM":0.15246,"YEM":0.675053,"ZAF":6.037205,"ZMB":1.078011,"ZWE":1.207217},"1963":{"ABW":11.815359,"AFG":0.077176,"AGO":0.205314,"AIA":0,"ALB":1.101846,"AND":0,"ARE":0.14002,"ARG":2.341913,"ARM":1.746961,"ATG":1.458548,"AUS":9.245287,"AUT":5.149789,"AZE":4.882737,"BDI":0.016157,"BEL":11.377463,"BEN":0.045833,"BES":18.068274,"BFA":0.017592,"BGD":0.052515,"BGR":4.239444,"BHR":6.639932,"BHS":5.331403,"BIH":1.825821,"BLR":5.377575,"BLZ":0.63005,"BMU":3.342024,"BOL":0.307306,"BRA":0.69425,"BRB":0.80775,"BRN":3.61639,"BTN":0,"BWA":0,"CAF":0.041256,"CAN":11.117533,"CHE":5.104831,"CHL":2.002885,"CHN":0.6679,"CIV":0.149859,"CMR":0.055356,"COD":0.138799,"COG":0.20523,"COK":0,"COL":1.233678,"COM":0.053218,"CPV":0.063922,"CRI":0.400959,"CUB":1.683728,"CUW":73.924111,"CYP":1.622921,"CZE":12.520071,"DEU":12.640987,"DJI":0.675253,"DMA":0.236269,"DNK":8.688218,"DOM":0.343392,"DZA":0.452749,"ECU":0.356417,"EGY":0.736063,"ERI":0,"ESP":1.871475,"EST":13.436258,"ETH":0.017963,"FIN":4.273922,"FJI":0.547875,"FRA":7.173753,"FRO":3.520588,"FSM":0,"GAB":0.137591,"GBR":11.276442,"GEO":1.600187,"GHA":0.230896,"GIN":0.187748,"GLP":0.695584,"GMB":0.067512,"GNB":0.079946,"GNQ":0.090623,"GRC":1.432894,"GRD":0.151277,"GRL":9.180401,"GTM":0.339596,"GUF":0.722255,"GUY":0.991701,"HKG":1.23985,"HND":0.313346,"HRV":1.576398,"HTI":0.06039,"HUN":5.576313,"IDN":0.237208,"IND":0.298042,"IRL":4.761643,"IRN":1.775862,"IRQ":1.212975,"ISL":7.019566,"ISR":3.795358,"ITA":3.254986,"JAM":1.405892,"JOR":1.2456,"JPN":3.340323,"KAZ":10.888188,"KEN":0.32802,"KGZ":3.918626,"KHM":0.065676,"KIR":0.360772,"KNA":0,"KOR":0.75551,"KSV":0,"KWT":40.457062,"LAO":0.064472,"LBN":1.53326,"LBR":0.290326,"LBY":0.916713,"LCA":0.231686,"LIE":0,"LKA":0.240696,"LSO":0,"LTU":5.809177,"LUX":35.411652,"LVA":5.017017,"MAC":0.548792,"MAR":0.31069,"MDA":5.186192,"MDG":0.084147,"MDV":0,"MEX":1.658046,"MHL":0,"MKD":3.043468,"MLI":0.031572,"MLT":1.232729,"MMR":0.113478,"MNE":1.263951,"MNG":1.488229,"MOZ":0.230118,"MRT":0.096496,"MSR":0.308886,"MTQ":0.684117,"MUS":0.28757,"MWI":0.089044,"MYS":0.679302,"MYT":0,"NAM":0,"NCL":6.909042,"NER":0.023004,"NGA":0.111739,"NIC":0.429819,"NIU":0,"NLD":7.621795,"NOR":4.081292,"NPL":0.009175,"NRU":0,"NZL":4.809607,"OMN":0,"PAK":0.316274,"PAN":0.959166,"PER":0.919956,"PHL":0.369537,"PLW":0,"PNG":0.120457,"POL":7.54693,"PRI":0,"PRK":2.631337,"PRT":1.123924,"PRY":0.201192,"PSE":0,"PYF":0.717158,"QAT":120.383435,"REU":0.280821,"ROU":3.675837,"RUS":8.26633,"RWA":0.026407,"SAU":1.50137,"SDN":0.168732,"SEN":0.241481,"SGP":1.873099,"SHN":0,"SLB":0.101875,"SLE":0.152494,"SLV":0.37299,"SOM":0.033071,"SPM":7.333867,"SRB":2.702118,"SSD":0.046026,"STP":0.104281,"SUR":1.774885,"SVK":9.005245,"SVN":3.164268,"SWE":7.246634,"SWZ":0,"SXM":347.229158,"SYC":0.159429,"SYR":0.714787,"TCA":0,"TCD":0.028533,"TGO":0.061183,"THA":0.191028,"TJK":2.311101,"TKM":7.933356,"TLS":0,"TON":0.149671,"TTO":1.868705,"TUN":0.448687,"TUR":0.75902,"TUV":0,"TWN":1.238395,"TZA":0.073212,"UGA":0.051997,"UKR":7.323078,"URY":1.645036,"USA":16.931977,"UZB":4.57156,"VCT":0.165347,"VEN":6.197796,"VGB":0.462685,"VNM":0.256437,"VUT":0.468409,"WLF":0,"WSM":0.178129,"YEM":0.497687,"ZAF":6.081579,"ZMB":1.003821,"ZWE":1.125049},"1964":{"ABW":11.349227,"AFG":0.089632,"AGO":0.21556,"AIA":0,"ALB":1.0337,"AND":0,"ARE":0.110825,"ARG":2.564437,"ARM":1.804322,"ATG":1.561435,"AUS":9.780775,"AUT":5.385155,"AZE":5.03857,"BDI":0.015703,"BEL":11.07474,"BEN":0.053208,"BES":17.179512,"BFA":0.021654,"BGD":0.052393,"BGR":5.235941,"BHR":8.561711,"BHS":7.814562,"BIH":2.033516,"BLR":5.665063,"BLZ":0.828047,"BMU":4.381251,"BOL":0.367291,"BRA":0.687627,"BRB":0.758067,"BRN":3.311358,"BTN":0,"BWA":0,"CAF":0.040448,"CAN":12.292959,"CHE":4.858483,"CHL":1.983575,"CHN":0.653763,"CIV":0.176359,"CMR":0.060669,"COD":0.11635,"COG":0.227777,"COK":0,"COL":1.22228,"COM":0.052178,"CPV":0.123762,"CRI":0.43469,"CUB":1.806946,"CUW":70.84727,"CYP":1.633044,"CZE":12.974875,"DEU":12.846404,"DJI":0.818612,"DMA":0.233216,"DNK":9.145142,"DOM":0.465449,"DZA":0.463338,"ECU":0.413306,"EGY":0.848954,"ERI":0,"ESP":2.026097,"EST":14.121775,"ETH":0.016887,"FIN":5.017567,"FJI":0.933418,"FRA":7.742792,"FRO":3.373567,"FSM":0,"GAB":0.352941,"GBR":11.285723,"GEO":1.675034,"GHA":0.215806,"GIN":0.185359,"GLP":0.7222,"GMB":0.065667,"GNB":0.099282,"GNQ":0.088793,"GRC":1.54678,"GRD":0.225216,"GRL":8.468716,"GTM":0.383849,"GUF":0.788402,"GUY":1.019767,"HKG":1.200669,"HND":0.309065,"HRV":1.774675,"HTI":0.071541,"HUN":6.163743,"IDN":0.226747,"IND":0.285218,"IRL":5.010179,"IRN":1.984209,"IRQ":1.133329,"ISL":6.915048,"ISR":4.046788,"ITA":3.445662,"JAM":2.354679,"JOR":1.205354,"JPN":3.650259,"KAZ":11.234588,"KEN":0.312051,"KGZ":4.030966,"KHM":0.055808,"KIR":0.351685,"KNA":0,"KOR":0.777254,"KSV":0,"KWT":54.352517,"LAO":0.074052,"LBN":1.606084,"LBR":0.385316,"LBY":0.401418,"LCA":0.229124,"LIE":0,"LKA":0.210819,"LSO":0,"LTU":6.111927,"LUX":37.674467,"LVA":5.273867,"MAC":0.636806,"MAR":0.338466,"MDA":5.417413,"MDG":0.085873,"MDV":0,"MEX":1.795141,"MHL":0,"MKD":3.408312,"MLI":0.031142,"MLT":1.511125,"MMR":0.120373,"MNE":1.4151,"MNG":1.851885,"MOZ":0.290486,"MRT":0.125021,"MSR":0.621175,"MTQ":0.757467,"MUS":0.414524,"MWI":0.082609,"MYS":0.837423,"MYT":0,"NAM":0,"NCL":11.917902,"NER":0.024197,"NGA":0.148736,"NIC":0.469454,"NIU":0,"NLD":7.986299,"NOR":4.376658,"NPL":0.013653,"NRU":5.345004,"NZL":5.053545,"OMN":0.018925,"PAK":0.317273,"PAN":0.976507,"PER":1.070832,"PHL":0.40176,"PLW":0,"PNG":0.122953,"POL":7.853126,"PRI":0,"PRK":2.785386,"PRT":1.236017,"PRY":0.206741,"PSE":0,"PYF":0.692831,"QAT":108.969147,"REU":0.298976,"ROU":3.789418,"RUS":8.709674,"RWA":0.011227,"SAU":1.4684,"SDN":0.181008,"SEN":0.251732,"SGP":1.987339,"SHN":0,"SLB":0.124112,"SLE":0.122989,"SLV":0.397635,"SOM":0.042583,"SPM":9.389316,"SRB":3.032733,"SSD":0.050085,"STP":0.154834,"SUR":1.948383,"SVK":9.274935,"SVN":3.555715,"SWE":7.848344,"SWZ":0.029039,"SXM":308.375901,"SYC":0.155839,"SYR":0.838247,"TCA":0,"TCD":0.030222,"TGO":0.074411,"THA":0.248897,"TJK":2.374537,"TKM":8.171942,"TLS":0,"TON":0.145505,"TTO":4.151008,"TUN":0.627301,"TUR":0.859214,"TUV":0,"TWN":1.338552,"TZA":0.091522,"UGA":0.05729,"UKR":7.701342,"URY":1.716468,"USA":17.430369,"UZB":4.695194,"VCT":0.203436,"VEN":6.034362,"VGB":0.921877,"VNM":0.322873,"VUT":0.859228,"WLF":0,"WSM":0.20262,"YEM":0.607825,"ZAF":6.426135,"ZMB":0.924417,"ZWE":1.036827},"1965":{"ABW":10.077694,"AFG":0.105269,"AGO":0.20677,"AIA":0,"ALB":1.080789,"AND":0,"ARE":0.126492,"ARG":2.666444,"ARM":1.860922,"ATG":2.518677,"AUS":10.638962,"AUT":5.246374,"AZE":5.194158,"BDI":0.011751,"BEL":11.191014,"BEN":0.05491,"BES":15.047897,"BFA":0.01989,"BGD":0.053356,"BGR":5.611732,"BHR":6.359397,"BHS":9.081015,"BIH":2.058502,"BLR":5.95955,"BLZ":0.803831,"BMU":3.81391,"BOL":0.366742,"BRA":0.664164,"BRB":0.863228,"BRN":3.096261,"BTN":0,"BWA":0,"CAF":0.047554,"CAN":12.794936,"CHE":5.178196,"CHL":1.973032,"CHN":0.69115,"CIV":0.260963,"CMR":0.054734,"COD":0.141558,"COG":0.203318,"COK":0,"COL":1.250764,"COM":0.068187,"CPV":0.104804,"CRI":0.52779,"CUB":1.80897,"CUW":62.674661,"CYP":1.862993,"CZE":12.594356,"DEU":12.626699,"DJI":1.11161,"DMA":0.22992,"DNK":9.312496,"DOM":0.399448,"DZA":0.532138,"ECU":0.426061,"EGY":0.895874,"ERI":0,"ESP":2.211647,"EST":14.810124,"ETH":0.026063,"FIN":5.542694,"FJI":0.73403,"FRA":7.546327,"FRO":3.729929,"FSM":0,"GAB":0.394817,"GBR":11.471817,"GEO":1.750187,"GHA":0.217657,"GIN":0.181052,"GLP":0.676197,"GMB":0.063873,"GNB":0.114175,"GNQ":0.099359,"GRC":1.99372,"GRD":0.22381,"GRL":8.936817,"GTM":0.416053,"GUF":0.94079,"GUY":1.656728,"HKG":1.333283,"HND":0.312355,"HRV":1.814732,"HTI":0.071106,"HUN":6.038361,"IDN":0.243859,"IND":0.307334,"IRL":4.809082,"IRN":2.177741,"IRQ":2.332747,"ISL":7.25675,"ISR":5.475797,"ITA":3.683535,"JAM":1.710714,"JOR":1.298992,"JPN":3.885353,"KAZ":11.582405,"KEN":0.26164,"KGZ":4.141411,"KHM":0.061158,"KIR":0.205673,"KNA":0,"KOR":0.856025,"KSV":0,"KWT":68.8747,"LAO":0.075453,"LBN":1.586627,"LBR":0.432628,"LBY":0.596991,"LCA":0.264347,"LIE":0,"LKA":0.240688,"LSO":0,"LTU":6.414957,"LUX":36.971262,"LVA":5.534259,"MAC":0.630281,"MAR":0.317922,"MDA":5.657616,"MDG":0.096321,"MDV":0,"MEX":1.758807,"MHL":0,"MKD":3.464938,"MLI":0.034552,"MLT":1.448084,"MMR":0.11222,"MNE":1.439346,"MNG":1.725266,"MOZ":0.266251,"MRT":0.166956,"MSR":0.312495,"MTQ":0.78233,"MUS":0.400871,"MWI":0.085095,"MYS":0.921814,"MYT":0,"NAM":0,"NCL":12.985918,"NER":0.022598,"NGA":0.235352,"NIC":0.374342,"NIU":0,"NLD":8.178991,"NOR":4.40174,"NPL":0.015983,"NRU":5.681599,"NZL":5.187129,"OMN":0.043192,"PAK":0.324635,"PAN":1.16531,"PER":1.014425,"PHL":0.42568,"PLW":0,"PNG":0.136853,"POL":7.909948,"PRI":0,"PRK":3.374203,"PRT":1.301532,"PRY":0.256389,"PSE":0,"PYF":0.854045,"QAT":96.963805,"REU":0.351309,"ROU":4.113439,"RUS":9.165809,"RWA":0.014224,"SAU":0.846821,"SDN":0.228908,"SEN":0.448709,"SGP":1.303613,"SHN":0,"SLB":0.169299,"SLE":0.11193,"SLV":0.327173,"SOM":0.040367,"SPM":7.822981,"SRB":3.091964,"SSD":0.064254,"STP":0.153241,"SUR":2.476377,"SVK":8.948925,"SVN":3.627545,"SWE":8.066557,"SWZ":0.207583,"SXM":253.397376,"SYC":0.152276,"SYR":0.684044,"TCA":0,"TCD":0.031848,"TGO":0.072459,"THA":0.24047,"TJK":2.434225,"TKM":8.397815,"TLS":0,"TON":0.141493,"TTO":5.591091,"TUN":0.551987,"TUR":0.87182,"TUV":0,"TWN":1.365252,"TZA":0.099865,"UGA":0.070903,"UKR":8.088265,"URY":2.057989,"USA":17.920337,"UZB":4.804865,"VCT":0.160184,"VEN":6.268449,"VGB":0.913944,"VNM":0.350982,"VUT":0.63784,"WLF":0,"WSM":0.225843,"YEM":0.644188,"ZAF":6.678415,"ZMB":1.069501,"ZWE":1.171357},"1966":{"ABW":9.342804,"AFG":0.111535,"AGO":0.268266,"AIA":0,"ALB":1.231271,"AND":0,"ARE":0.14053,"ARG":2.815352,"ARM":1.913398,"ATG":5.742473,"AUS":10.370281,"AUT":5.355698,"AZE":5.341685,"BDI":0.014916,"BEL":11.102416,"BEN":0.040731,"BES":13.723507,"BFA":0.019568,"BGD":0.052706,"BGR":5.863112,"BHR":3.258624,"BHS":7.215506,"BIH":2.008646,"BLR":6.247328,"BLZ":0.745942,"BMU":4.186733,"BOL":0.401715,"BRA":0.736559,"BRB":1.121504,"BRN":4.360471,"BTN":0,"BWA":0,"CAF":0.044615,"CAN":12.918044,"CHE":5.320407,"CHL":2.049028,"CHN":0.739566,"CIV":0.265121,"CMR":0.059081,"COD":0.133906,"COG":0.247784,"COK":0,"COL":1.24787,"COM":0.083512,"CPV":0.087156,"CRI":0.599817,"CUB":1.843081,"CUW":57.802146,"CYP":1.994503,"CZE":12.487142,"DEU":12.417619,"DJI":1.212041,"DMA":0.226424,"DNK":10.440826,"DOM":0.418765,"DZA":0.667613,"ECU":0.439743,"EGY":0.839276,"ERI":0,"ESP":2.390992,"EST":15.474933,"ETH":0.032469,"FIN":6.4361,"FJI":0.668076,"FRA":7.813593,"FRO":3.78091,"FSM":0,"GAB":0.685663,"GBR":11.328244,"GEO":1.818458,"GHA":0.179553,"GIN":0.183351,"GLP":0.822431,"GMB":0.069901,"GNB":0.115629,"GNQ":0.085063,"GRC":2.185355,"GRD":0.297005,"GRL":9.722969,"GTM":0.356289,"GUF":1.078652,"GUY":1.778853,"HKG":1.400824,"HND":0.325584,"HRV":1.786355,"HTI":0.069829,"HUN":6.06415,"IDN":0.225712,"IND":0.31189,"IRL":5.26503,"IRN":2.523884,"IRQ":3.235499,"ISL":7.643004,"ISR":5.503298,"ITA":4.124357,"JAM":1.987794,"JOR":1.348374,"JPN":4.172967,"KAZ":11.904384,"KEN":0.273405,"KGZ":4.241172,"KHM":0.069799,"KIR":0.201955,"KNA":0,"KOR":1.004826,"KSV":0,"KWT":62.113885,"LAO":0.096308,"LBN":1.688504,"LBR":0.463441,"LBY":1.509967,"LCA":0.298718,"LIE":0,"LKA":0.235381,"LSO":0,"LTU":6.707227,"LUX":34.852323,"LVA":5.786889,"MAC":0.691537,"MAR":0.39739,"MDA":5.889831,"MDG":0.097483,"MDV":0,"MEX":1.829873,"MHL":0,"MKD":3.390257,"MLI":0.032812,"MLT":1.2819,"MMR":0.112899,"MNE":1.410274,"MNG":1.675247,"MOZ":0.276242,"MRT":0.180493,"MSR":0.628851,"MTQ":0.853029,"MUS":0.354827,"MWI":0.102251,"MYS":1.052906,"MYT":0,"NAM":0,"NCL":15.490216,"NER":0.032477,"NGA":0.252708,"NIC":0.446344,"NIU":0,"NLD":8.33341,"NOR":5.206413,"NPL":0.016611,"NRU":5.476831,"NZL":5.215505,"OMN":0.048247,"PAK":0.321916,"PAN":1.225901,"PER":1.091776,"PHL":0.477799,"PLW":0,"PNG":0.150013,"POL":8.012453,"PRI":0,"PRK":3.540594,"PRT":1.332504,"PRY":0.233539,"PSE":0,"PYF":1.182155,"QAT":85.808432,"REU":0.411,"ROU":4.374828,"RUS":9.611624,"RWA":0.012766,"SAU":1.238553,"SDN":0.241793,"SEN":0.442464,"SGP":0.25116,"SHN":0,"SLB":0.164924,"SLE":0.116918,"SLV":0.399157,"SOM":0.041516,"SPM":8.400459,"SRB":3.036338,"SSD":0.069065,"STP":0.151474,"SUR":3.298396,"SVK":8.820699,"SVN":3.562179,"SWE":9.273354,"SWZ":0.505239,"SXM":217.603701,"SYC":0.148689,"SYR":0.886129,"TCA":0,"TCD":0.024796,"TGO":0.095373,"THA":0.296873,"TJK":2.48552,"TKM":8.598553,"TLS":0,"TON":0.137755,"TTO":4.298246,"TUN":0.63347,"TUR":0.979267,"TUV":0,"TWN":1.439903,"TZA":0.11435,"UGA":0.080433,"UKR":8.461817,"URY":1.994375,"USA":18.617542,"UZB":4.897581,"VCT":0.19708,"VEN":5.691319,"VGB":1.350534,"VNM":0.499662,"VUT":0.999987,"WLF":0,"WSM":0.192877,"YEM":0.555915,"ZAF":6.479857,"ZMB":0.926026,"ZWE":1.316528},"1967":{"ABW":11.463988,"AFG":0.128058,"AGO":0.170196,"AIA":0,"ALB":1.255599,"AND":0,"ARE":4.785689,"ARG":2.877178,"ARM":1.951581,"ATG":9.157473,"AUS":10.935982,"AUT":5.411819,"AZE":5.454301,"BDI":0.014546,"BEL":11.283071,"BEN":0.050249,"BES":16.463809,"BFA":0.019246,"BGD":0.054282,"BGR":6.584079,"BHR":4.899256,"BHS":10.752394,"BIH":1.999899,"BLR":6.489501,"BLZ":1.085279,"BMU":4.324448,"BOL":0.440109,"BRA":0.73791,"BRB":1.409007,"BRN":3.737886,"BTN":0,"BWA":0,"CAF":0.04744,"CAN":13.800291,"CHE":5.42684,"CHL":2.062812,"CHN":0.60476,"CIV":0.279891,"CMR":0.076652,"COD":0.123906,"COG":0.252233,"COK":0,"COL":1.276204,"COM":0.081669,"CPV":0.070286,"CRI":0.513024,"CUB":1.875456,"CUW":70.247444,"CYP":2.170266,"CZE":12.433392,"DEU":12.13148,"DJI":0.725736,"DMA":0.334307,"DNK":10.140468,"DOM":0.381352,"DZA":0.653758,"ECU":0.457524,"EGY":0.606321,"ERI":0,"ESP":2.632821,"EST":16.00834,"ETH":0.041186,"FIN":6.205137,"FJI":0.718166,"FRA":8.22804,"FRO":4.526615,"FSM":0,"GAB":1.791636,"GBR":10.788926,"GEO":1.868938,"GHA":0.181949,"GIN":0.181788,"GLP":0.930706,"GMB":0.067973,"GNB":0.083072,"GNQ":0.083172,"GRC":2.289744,"GRD":0.370187,"GRL":10.096836,"GTM":0.394482,"GUF":1.638255,"GUY":1.959376,"HKG":1.608661,"HND":0.343573,"HRV":1.794332,"HTI":0.058654,"HUN":5.757992,"IDN":0.230942,"IND":0.30567,"IRL":5.68723,"IRN":2.597484,"IRQ":2.076394,"ISL":7.261955,"ISR":5.251941,"ITA":4.477144,"JAM":2.158045,"JOR":1.116393,"JPN":4.81944,"KAZ":12.127201,"KEN":0.264525,"KGZ":4.304925,"KHM":0.060435,"KIR":0.399782,"KNA":0,"KOR":1.149723,"KSV":0,"KWT":40.919371,"LAO":0.12792,"LBN":1.617934,"LBR":0.451816,"LBY":10.397187,"LCA":0.332228,"LIE":0,"LKA":0.254523,"LSO":0,"LTU":6.950681,"LUX":33.825036,"LVA":5.994467,"MAC":0.732309,"MAR":0.383299,"MDA":6.077707,"MDG":0.138123,"MDV":0,"MEX":1.971343,"MHL":0,"MKD":3.379283,"MLI":0.037956,"MLT":1.625133,"MMR":0.142132,"MNE":1.408961,"MNG":1.79483,"MOZ":0.238094,"MRT":0.193032,"MSR":0.632378,"MTQ":0.923511,"MUS":0.631102,"MWI":0.085252,"MYS":1.056931,"MYT":0,"NAM":0,"NCL":14.69988,"NER":0.030695,"NGA":0.24612,"NIC":0.486928,"NIU":0,"NLD":8.482344,"NOR":5.101082,"NPL":0.018139,"NRU":7.790644,"NZL":5.00029,"OMN":0.21794,"PAK":0.33271,"PAN":1.21898,"PER":1.092833,"PHL":0.526012,"PLW":0,"PNG":0.187724,"POL":8.154182,"PRI":0,"PRK":3.790644,"PRT":1.399132,"PRY":0.216664,"PSE":0,"PYF":1.313571,"QAT":80.99102,"REU":0.476908,"ROU":4.756368,"RUS":9.986252,"RWA":0.011355,"SAU":4.736174,"SDN":0.282783,"SEN":0.174878,"SGP":1.4466,"SHN":0,"SLB":0.20653,"SLE":0.09648,"SLV":0.344976,"SOM":0.066003,"SPM":9.662083,"SRB":3.040822,"SSD":0.082295,"STP":0.149421,"SUR":3.881311,"SVK":8.733692,"SVN":3.566211,"SWE":8.744495,"SWZ":0.554558,"SXM":246.354569,"SYC":0.145043,"SYR":0.804292,"TCA":0,"TCD":0.03387,"TGO":0.101093,"THA":0.369987,"TJK":2.51481,"TKM":8.731652,"TLS":0,"TON":0.179333,"TTO":4.849094,"TUN":0.661448,"TUR":1.013705,"TUV":0,"TWN":1.578544,"TZA":0.142401,"UGA":0.086143,"UKR":8.765016,"URY":1.785881,"USA":19.121758,"UZB":4.952952,"VCT":0.194105,"VEN":6.359739,"VGB":0.439487,"VNM":0.584539,"VUT":1.062551,"WLF":0,"WSM":0.188933,"YEM":0.479288,"ZAF":6.553438,"ZMB":1.227192,"ZWE":1.118231},"1968":{"ABW":10.669242,"AFG":0.119381,"AGO":0.284506,"AIA":0,"ALB":1.397978,"AND":0,"ARE":5.815546,"ARG":2.985735,"ARM":1.958436,"ATG":15.788567,"AUS":11.18267,"AUT":5.705184,"AZE":5.486514,"BDI":0.016394,"BEL":12.393724,"BEN":0.053043,"BES":14.897267,"BFA":0.018921,"BGD":0.060405,"BGR":7.046869,"BHR":5.231778,"BHS":9.83776,"BIH":2.110451,"BLR":6.629294,"BLZ":0.893464,"BMU":4.456888,"BOL":0.495784,"BRA":0.840813,"BRB":1.832725,"BRN":3.491968,"BTN":0,"BWA":0,"CAF":0.092747,"CAN":14.627744,"CHE":5.929485,"CHL":2.233813,"CHN":0.634962,"CIV":0.316331,"CMR":0.082523,"COD":0.176947,"COG":0.342422,"COK":0,"COL":1.337162,"COM":0.079662,"CPV":0.108691,"CRI":0.59008,"CUB":1.873566,"CUW":64.479012,"CYP":2.564939,"CZE":12.986558,"DEU":12.683064,"DJI":0.947081,"DMA":0.328782,"DNK":10.94404,"DOM":0.554806,"DZA":0.686093,"ECU":0.534299,"EGY":0.688838,"ERI":0,"ESP":2.925944,"EST":16.276677,"ETH":0.064418,"FIN":7.191662,"FJI":0.781661,"FRA":8.424515,"FRO":4.868456,"FSM":0,"GAB":3.417368,"GBR":10.993232,"GEO":1.888914,"GHA":0.209246,"GIN":0.183771,"GLP":0.886868,"GMB":0.073405,"GNB":0.106754,"GNQ":0.092958,"GRC":2.616117,"GRD":0.406881,"GRL":12.685319,"GTM":0.414153,"GUF":1.916972,"GUY":1.939142,"HKG":1.616563,"HND":0.466355,"HRV":1.908902,"HTI":0.058403,"HUN":5.963607,"IDN":0.252547,"IND":0.32632,"IRL":6.139229,"IRN":3.063391,"IRQ":2.151092,"ISL":7.908954,"ISR":5.137782,"ITA":4.73162,"JAM":2.140212,"JOR":1.100486,"JPN":5.465051,"KAZ":12.161317,"KEN":0.265258,"KGZ":4.30009,"KHM":0.07045,"KIR":0.594044,"KNA":0,"KOR":1.191085,"KSV":0,"KWT":33.987216,"LAO":0.066068,"LBN":1.632556,"LBR":0.635369,"LBY":16.551903,"LCA":0.36494,"LIE":0,"LKA":0.27333,"LSO":0,"LTU":7.08216,"LUX":36.371806,"LVA":6.107103,"MAC":0.723585,"MAR":0.387867,"MDA":6.172008,"MDG":0.145453,"MDV":0,"MEX":1.990387,"MHL":0,"MKD":3.565166,"MLI":0.033121,"MLT":2.004484,"MMR":0.112379,"MNE":1.49111,"MNG":2.015782,"MOZ":0.345485,"MRT":0.221978,"MSR":0.635946,"MTQ":0.950392,"MUS":0.793193,"MWI":0.088147,"MYS":1.072182,"MYT":0,"NAM":0,"NCL":17.829511,"NER":0.036471,"NGA":0.124523,"NIC":0.537113,"NIU":0,"NLD":8.91363,"NOR":5.532505,"NPL":0.02112,"NRU":7.575064,"NZL":4.887901,"OMN":0.252936,"PAK":0.371348,"PAN":1.409113,"PER":1.127957,"PHL":0.625202,"PLW":0,"PNG":0.211323,"POL":8.61424,"PRI":0,"PRK":4.169085,"PRT":1.472801,"PRY":0.256231,"PSE":0,"PYF":1.401122,"QAT":76.059255,"REU":0.475361,"ROU":5.128254,"RUS":10.21026,"RWA":0.015008,"SAU":5.188454,"SDN":0.26737,"SEN":0.02383,"SGP":2.57875,"SHN":0.653236,"SLB":0.223451,"SLE":0.135736,"SLV":0.365873,"SOM":0.043564,"SPM":7.487275,"SRB":3.226226,"SSD":0.079234,"STP":0.196096,"SUR":4.081785,"SVK":9.078307,"SVN":3.781201,"SWE":9.776798,"SWZ":0.662421,"SXM":210.937961,"SYC":0.141445,"SYR":1.006974,"TCA":0,"TCD":0.035323,"TGO":0.09525,"THA":0.505087,"TJK":2.502328,"TKM":8.725561,"TLS":0,"TON":0.175668,"TTO":4.171614,"TUN":0.750749,"TUR":1.070281,"TUV":0,"TWN":1.691572,"TZA":0.129658,"UGA":0.101206,"UKR":8.932563,"URY":1.771107,"USA":19.622215,"UZB":4.92992,"VCT":0.229579,"VEN":6.143933,"VGB":1.694531,"VNM":0.587887,"VUT":0.761635,"WLF":0,"WSM":0.212169,"YEM":1.785917,"ZAF":6.553454,"ZMB":1.133643,"ZWE":1.305199},"1969":{"ABW":13.996378,"AFG":0.089688,"AGO":0.469452,"AIA":0,"ALB":1.434332,"AND":0,"ARE":80.973415,"ARG":3.291103,"ARM":1.991902,"ATG":19.716231,"AUS":11.584591,"AUT":6.000331,"AZE":5.597115,"BDI":0.021399,"BEL":12.874319,"BEN":0.068054,"BES":18.977499,"BFA":0.021921,"BGD":0.056923,"BGR":7.789069,"BHR":5.867243,"BHS":10.077082,"BIH":2.160722,"BLR":6.860396,"BLZ":1.147471,"BMU":3.869212,"BOL":0.567565,"BRA":0.892549,"BRB":1.994996,"BRN":3.806768,"BTN":0,"BWA":0,"CAF":0.092437,"CAN":14.601126,"CHE":6.199806,"CHL":2.333344,"CHN":0.758248,"CIV":0.359766,"CMR":0.090926,"COD":0.186285,"COG":0.370265,"COK":0.547792,"COL":1.373868,"COM":0.077626,"CPV":0.131337,"CRI":0.634661,"CUB":1.979791,"CUW":83.355051,"CYP":2.622092,"CZE":13.768747,"DEU":13.485032,"DJI":0.622439,"DMA":0.269384,"DNK":12.120238,"DOM":0.609049,"DZA":0.834849,"ECU":0.598441,"EGY":0.578444,"ERI":0,"ESP":2.889351,"EST":16.766867,"ETH":0.060531,"FIN":8.194977,"FJI":0.835949,"FRA":8.852616,"FRO":5.590803,"FSM":0,"GAB":2.450488,"GBR":11.338446,"GEO":1.934507,"GHA":0.195539,"GIN":0.180319,"GLP":0.984467,"GMB":0.092726,"GNB":0.099721,"GNQ":0.137897,"GRC":2.983092,"GRD":0.481253,"GRL":9.221058,"GTM":0.429162,"GUF":1.863724,"GUY":1.963838,"HKG":1.988389,"HND":0.435188,"HRV":1.970364,"HTI":0.068506,"HUN":6.065315,"IDN":0.297481,"IND":0.325342,"IRL":6.339811,"IRN":3.003896,"IRQ":2.384924,"ISL":6.214775,"ISR":5.294611,"ITA":5.087799,"JAM":2.325773,"JOR":1.198005,"JPN":6.274759,"KAZ":12.38412,"KEN":0.283206,"KGZ":4.356519,"KHM":0.196909,"KIR":0.195157,"KNA":0,"KOR":1.330791,"KSV":0,"KWT":36.08062,"LAO":0.122035,"LBN":1.869383,"LBR":0.891458,"LBY":19.069022,"LCA":0.613041,"LIE":0,"LKA":0.356052,"LSO":0,"LTU":7.308299,"LUX":38.968544,"LVA":6.304564,"MAC":0.701052,"MAR":0.391034,"MDA":6.35307,"MDG":0.131738,"MDV":0,"MEX":2.097454,"MHL":0,"MKD":3.644482,"MLI":0.026596,"MLT":2.060918,"MMR":0.120504,"MNE":1.530434,"MNG":2.125191,"MOZ":0.393987,"MRT":0.252381,"MSR":0.64,"MTQ":1.01348,"MUS":0.699445,"MWI":0.084371,"MYS":0.908174,"MYT":0,"NAM":0,"NCL":14.59542,"NER":0.041919,"NGA":0.222585,"NIC":0.543226,"NIU":0,"NLD":8.989972,"NOR":5.768329,"NPL":0.03265,"NRU":10.133989,"NZL":5.116744,"OMN":0.35878,"PAK":0.35046,"PAN":1.391571,"PER":1.156771,"PHL":0.625856,"PLW":0,"PNG":0.229102,"POL":9.093199,"PRI":0,"PRK":4.387351,"PRT":1.664297,"PRY":0.220855,"PSE":0,"PYF":1.416623,"QAT":68.56852,"REU":0.481261,"ROU":5.657925,"RUS":10.578538,"RWA":0.015518,"SAU":6.034542,"SDN":0.349436,"SEN":0.115577,"SGP":3.397594,"SHN":0,"SLB":0.217578,"SLE":0.398012,"SLV":0.337086,"SOM":0.04447,"SPM":6.041774,"SRB":3.318968,"SSD":0.105438,"STP":0.192693,"SUR":4.13625,"SVK":9.578625,"SVN":3.889378,"SWE":10.81991,"SWZ":0.704998,"SXM":255.053263,"SYC":0.138009,"SYR":1.183472,"TCA":0,"TCD":0.044843,"TGO":0.114042,"THA":0.417966,"TJK":2.52315,"TKM":8.835334,"TLS":0,"TON":0.129322,"TTO":3.986319,"TUN":0.783717,"TUR":1.116085,"TUV":0,"TWN":1.79863,"TZA":0.136293,"UGA":0.117466,"UKR":9.231544,"URY":2.014953,"USA":20.394011,"UZB":4.973156,"VCT":0.301794,"VEN":6.260202,"VGB":2.009433,"VNM":0.659638,"VUT":0.521257,"WLF":0,"WSM":0.20869,"YEM":0.700521,"ZAF":6.595164,"ZMB":1.026901,"ZWE":1.336967},"1970":{"ABW":15.713488,"AFG":0.155343,"AGO":0.593382,"AIA":0,"ALB":1.608567,"AND":0,"ARE":51.109459,"ARG":3.466371,"ARM":2.046575,"ATG":7.155695,"AUS":11.709359,"AUT":6.782272,"AZE":5.769196,"BDI":0.017808,"BEL":13.032045,"BEN":0.093313,"BES":20.670571,"BFA":0.025464,"BGD":0.056309,"BGR":7.127383,"BHR":11.639586,"BHS":14.340336,"BIH":2.790117,"BLR":7.16895,"BLZ":1.000058,"BMU":4.36702,"BOL":0.541623,"BRA":0.967597,"BRB":1.775863,"BRN":61.52326,"BTN":0.012259,"BWA":0,"CAF":0.101022,"CAN":15.917142,"CHE":6.510733,"CHL":2.508615,"CHN":0.982272,"CIV":0.409409,"CMR":0.098782,"COD":0.134463,"COG":0.409154,"COK":0.536981,"COL":1.357078,"COM":0.120949,"CPV":0.127342,"CRI":0.672891,"CUB":2.10314,"CUW":92.162897,"CYP":2.657115,"CZE":15.763958,"DEU":13.10464,"DJI":0.964351,"DMA":0.372277,"DNK":12.602028,"DOM":0.693738,"DZA":1.091552,"ECU":0.693141,"EGY":0.622564,"ERI":0,"ESP":3.455385,"EST":17.466633,"ETH":0.058348,"FIN":8.760227,"FJI":0.985627,"FRA":9.113549,"FRO":6.676385,"FSM":0,"GAB":3.484896,"GBR":11.726423,"GEO":2.007976,"GHA":0.295833,"GIN":0.187436,"GLP":0.955396,"GMB":0.090087,"GNB":0.117662,"GNQ":0.1156,"GRC":2.823468,"GRD":0.445047,"GRL":8.387023,"GTM":0.421117,"GUF":2.207039,"GUY":2.239148,"HKG":2.121959,"HND":0.498798,"HRV":2.566348,"HTI":0.08214,"HUN":6.779649,"IDN":0.310613,"IND":0.325959,"IRL":6.601816,"IRN":3.226306,"IRQ":2.434302,"ISL":6.789817,"ISR":5.695771,"ITA":5.557804,"JAM":2.683346,"JOR":0.998915,"JPN":7.285014,"KAZ":12.792559,"KEN":0.268299,"KGZ":4.467297,"KHM":0.172044,"KIR":0.38275,"KNA":0,"KOR":1.647683,"KSV":0,"KWT":31.168276,"LAO":0.213654,"LBN":1.654522,"LBR":0.991134,"LBY":16.920957,"LCA":0.639752,"LIE":0,"LKA":0.290027,"LSO":0,"LTU":7.6128,"LUX":40.476438,"LVA":6.575152,"MAC":0.82975,"MAR":0.476748,"MDA":6.611399,"MDG":0.14619,"MDV":0,"MEX":2.265903,"MHL":0,"MKD":4.695657,"MLI":0.032748,"MLT":2.102583,"MMR":0.169047,"MNE":1.981075,"MNG":2.200004,"MOZ":0.354375,"MRT":0.382007,"MSR":1.285389,"MTQ":1.111228,"MUS":0.600283,"MWI":0.098174,"MYS":1.415212,"MYT":0,"NAM":0,"NCL":21.558379,"NER":0.046268,"NGA":0.387264,"NIC":0.5738,"NIU":0.706654,"NLD":10.876416,"NOR":7.219304,"NPL":0.018172,"NRU":9.898244,"NZL":5.021133,"OMN":0.349632,"PAK":0.345827,"PAN":1.451722,"PER":1.309935,"PHL":0.661173,"PLW":0,"PNG":0.278216,"POL":9.363172,"PRI":0,"PRK":4.899441,"PRT":1.754621,"PRY":0.308635,"PSE":0,"PYF":1.647216,"QAT":64.076334,"REU":0.672613,"ROU":6.022375,"RUS":11.074222,"RWA":0.015046,"SAU":7.41073,"SDN":0.393331,"SEN":0.299255,"SGP":8.648957,"SHN":0,"SLB":0.233196,"SLE":0.308569,"SLV":0.394659,"SOM":0.058097,"SPM":6.617302,"SRB":4.304193,"SSD":0.120866,"STP":0.188907,"SUR":4.233798,"SVK":10.910154,"SVN":5.047259,"SWE":11.49607,"SWZ":0.82734,"SXM":264.07308,"SYC":0.539032,"SYR":1.052337,"TCA":0,"TCD":0.033969,"TGO":0.125058,"THA":0.428941,"TJK":2.571805,"TKM":9.026098,"TLS":0,"TON":0.296564,"TTO":9.091361,"TUN":0.740726,"TUR":1.198032,"TUV":0,"TWN":1.920997,"TZA":0.129633,"UGA":0.139848,"UKR":9.651058,"URY":2.055648,"USA":21.662866,"UZB":5.058809,"VCT":0.297708,"VEN":6.55978,"VGB":1.912118,"VNM":0.671924,"VUT":0.463163,"WLF":0,"WSM":0.205308,"YEM":0.366742,"ZAF":6.688847,"ZMB":0.879535,"ZWE":1.567223},"1971":{"ABW":13.743216,"AFG":0.171893,"AGO":0.551296,"AIA":0,"ALB":1.8194,"AND":0,"ARE":61.440143,"ARG":3.667828,"ARM":2.128303,"ATG":6.562152,"AUS":11.746309,"AUT":6.943897,"AZE":6.010909,"BDI":0.020457,"BEL":12.555922,"BEN":0.094911,"BES":17.537166,"BFA":0.026319,"BGD":0.052735,"BGR":7.427669,"BHR":13.149616,"BHS":36.455912,"BIH":2.9729,"BLR":7.554153,"BLZ":1.160897,"BMU":4.393536,"BOL":0.652466,"BRA":1.033496,"BRB":1.995659,"BRN":54.167568,"BTN":0.011864,"BWA":0,"CAF":0.086774,"CAN":16.094503,"CHE":6.741226,"CHL":2.709756,"CHN":1.078176,"CIV":0.42926,"CMR":0.122097,"COD":0.142842,"COG":0.475759,"COK":0.527194,"COL":1.414662,"COM":0.117688,"CPV":0.124735,"CRI":0.801384,"CUB":2.170318,"CUW":79.376856,"CYP":2.922866,"CZE":16.500445,"DEU":13.211289,"DJI":1.04533,"DMA":0.369408,"DNK":11.513624,"DOM":0.764961,"DZA":1.321699,"ECU":0.664381,"EGY":0.647216,"ERI":0,"ESP":3.763402,"EST":18.365171,"ETH":0.063556,"FIN":8.788602,"FJI":1.02095,"FRA":9.680496,"FRO":6.694218,"FSM":0,"GAB":4.663436,"GBR":11.818837,"GEO":2.116989,"GHA":0.25157,"GIN":0.189249,"GLP":1.065343,"GMB":0.100971,"GNB":0.123263,"GNQ":0.211417,"GRC":3.235676,"GRD":0.483402,"GRL":10.090406,"GTM":0.435722,"GUF":2.144751,"GUY":2.099128,"HKG":2.271404,"HND":0.463404,"HRV":2.754392,"HTI":0.084496,"HUN":6.689333,"IDN":0.329161,"IND":0.336779,"IRL":7.569274,"IRN":3.471645,"IRQ":2.839199,"ISL":7.140701,"ISR":5.373033,"ITA":5.799251,"JAM":3.047074,"JOR":1.01107,"JPN":7.459023,"KAZ":13.369433,"KEN":0.309209,"KGZ":4.631026,"KHM":0.03283,"KIR":0.50076,"KNA":0,"KOR":1.758384,"KSV":0,"KWT":31.578188,"LAO":0.15374,"LBN":2.170492,"LBR":1.01479,"LBY":11.044311,"LCA":0.664395,"LIE":0,"LKA":0.252355,"LSO":0,"LTU":8.0108,"LUX":38.582254,"LVA":6.920467,"MAC":0.909283,"MAR":0.522174,"MDA":6.942774,"MDG":0.149935,"MDV":0.028835,"MEX":2.431454,"MHL":0,"MKD":4.993768,"MLI":0.036359,"MLT":2.093056,"MMR":0.182679,"MNE":2.114308,"MNG":2.283841,"MOZ":0.41877,"MRT":0.345373,"MSR":1.284375,"MTQ":1.635504,"MUS":0.469737,"MWI":0.105789,"MYS":1.57901,"MYT":0,"NAM":0,"NCL":20.884164,"NER":0.048095,"NGA":0.567433,"NIC":0.596096,"NIU":0.721686,"NLD":10.667264,"NOR":6.960453,"NPL":0.015488,"NRU":12.973739,"NZL":5.245593,"OMN":3.037362,"PAK":0.319335,"PAN":1.667858,"PER":1.336311,"PHL":0.717085,"PLW":0,"PNG":0.323381,"POL":9.565078,"PRI":0,"PRK":6.985803,"PRT":1.882151,"PRY":0.257112,"PSE":0,"PYF":1.860386,"QAT":68.704574,"REU":0.682442,"ROU":6.238766,"RUS":11.695676,"RWA":0.015512,"SAU":9.341856,"SDN":0.391136,"SEN":0.300322,"SGP":7.765361,"SHN":0,"SLB":0.268707,"SLE":0.2833,"SLV":0.40691,"SOM":0.048938,"SPM":8.460391,"SRB":4.606368,"SSD":0.122074,"STP":0.138742,"SUR":4.373547,"SVK":11.357982,"SVN":5.393747,"SWE":10.467025,"SWZ":0.877917,"SXM":213.587617,"SYC":0.592093,"SYR":1.357215,"TCA":0,"TCD":0.04014,"TGO":0.138983,"THA":0.521685,"TJK":2.64853,"TKM":9.32457,"TLS":0,"TON":0.208409,"TTO":8.095348,"TUN":0.811956,"TUR":1.310182,"TUV":0,"TWN":2.058253,"TZA":0.174671,"UGA":0.135427,"UKR":10.172292,"URY":2.068063,"USA":21.514514,"UZB":5.225104,"VCT":0.294005,"VEN":5.339307,"VGB":2.240293,"VNM":0.570958,"VUT":0.652858,"WLF":0,"WSM":0.252578,"YEM":0.280635,"ZAF":7.311895,"ZMB":0.860624,"ZWE":1.628199},"1972":{"ABW":13.317187,"AFG":0.135588,"AGO":0.707105,"AIA":0,"ALB":2.296368,"AND":0,"ARE":59.72695,"ARG":3.659347,"ARM":2.193622,"ATG":5.776768,"AUS":11.829474,"AUT":7.434447,"AZE":6.213528,"BDI":0.020474,"BEL":13.467388,"BEN":0.123046,"BES":16.628064,"BFA":0.027771,"BGD":0.050556,"BGR":7.595145,"BHR":15.129599,"BHS":34.259773,"BIH":2.755842,"BLR":7.8927,"BLZ":1.259872,"BMU":4.793356,"BOL":0.744324,"BRA":1.123719,"BRB":2.061826,"BRN":65.698678,"BTN":0.011481,"BWA":0.035085,"CAF":0.078261,"CAN":17.135627,"CHE":6.854318,"CHL":2.773364,"CHN":1.122624,"CIV":0.453406,"CMR":0.126347,"COD":0.14183,"COG":0.446506,"COK":0.529505,"COL":1.435067,"COM":0.114416,"CPV":0.17272,"CRI":0.900676,"CUB":2.265974,"CUW":76.329841,"CYP":3.715045,"CZE":16.591865,"DEU":13.243055,"DJI":1.15308,"DMA":0.367082,"DNK":11.964089,"DOM":0.988161,"DZA":1.961436,"ECU":0.702371,"EGY":0.701196,"ERI":0,"ESP":4.192831,"EST":19.148867,"ETH":0.047044,"FIN":9.505968,"FJI":1.055916,"FRA":9.997738,"FRO":5.966212,"FSM":0,"GAB":4.398291,"GBR":11.560067,"GEO":2.213748,"GHA":0.258408,"GIN":0.19023,"GLP":1.175823,"GMB":0.117655,"GNB":0.110667,"GNQ":0.287973,"GRC":3.653073,"GRD":0.484927,"GRL":11.710282,"GTM":0.47116,"GUF":2.083298,"GUY":2.161879,"HKG":2.246811,"HND":0.518637,"HRV":2.569017,"HTI":0.080715,"HUN":6.682484,"IDN":0.356418,"IND":0.348358,"IRL":7.311358,"IRN":3.520746,"IRQ":2.809517,"ISL":7.088412,"ISR":5.412098,"ITA":6.078987,"JAM":3.280068,"JOR":1.122485,"JPN":7.874395,"KAZ":13.87062,"KEN":0.31372,"KGZ":4.767933,"KHM":0.013538,"KIR":0.430292,"KNA":0,"KOR":1.77318,"KSV":0,"KWT":30.217069,"LAO":0.173526,"LBN":2.255961,"LBR":0.976997,"LBY":7.56163,"LCA":0.722771,"LIE":0,"LKA":0.273947,"LSO":0,"LTU":8.360461,"LUX":38.988775,"LVA":7.225166,"MAC":0.92827,"MAR":0.499186,"MDA":7.230909,"MDG":0.182354,"MDV":0.027972,"MEX":2.470354,"MHL":0,"MKD":4.618649,"MLI":0.038677,"MLT":2.660519,"MMR":0.171417,"MNE":1.960517,"MNG":2.401976,"MOZ":0.37195,"MRT":0.375203,"MSR":1.280671,"MTQ":2.394998,"MUS":0.806561,"MWI":0.112133,"MYS":1.657217,"MYT":0,"NAM":0,"NCL":14.096272,"NER":0.051295,"NGA":0.711447,"NIC":0.616306,"NIU":0.744413,"NLD":11.820271,"NOR":7.473849,"NPL":0.020492,"NRU":11.178846,"NZL":5.542715,"OMN":2.949643,"PAK":0.302402,"PAN":1.745985,"PER":1.269761,"PHL":0.670076,"PLW":0,"PNG":0.485595,"POL":9.991279,"PRI":0,"PRK":5.676233,"PRT":2.072542,"PRY":0.283069,"PSE":0,"PYF":1.709482,"QAT":72.640915,"REU":0.7073,"ROU":6.488721,"RUS":12.236371,"RWA":0.015947,"SAU":10.451963,"SDN":0.408632,"SEN":0.313641,"SGP":10.189786,"SHN":0,"SLB":0.302184,"SLE":0.23482,"SLV":0.441594,"SOM":0.059848,"SPM":12.157876,"SRB":4.28582,"SSD":0.129193,"STP":0.135981,"SUR":4.386664,"SVK":11.364829,"SVN":5.005092,"SWE":10.434367,"SWZ":0.815072,"SXM":193.059953,"SYC":0.770665,"SYR":1.14593,"TCA":0,"TCD":0.031616,"TGO":0.173746,"THA":0.575126,"TJK":2.705424,"TKM":9.548865,"TLS":0,"TON":0.24625,"TTO":8.129577,"TUN":0.889329,"TUR":1.4446,"TUV":0,"TWN":2.296892,"TZA":0.148295,"UGA":0.126625,"UKR":10.618479,"URY":2.151432,"USA":22.281481,"UZB":5.341517,"VCT":0.363337,"VEN":5.182893,"VGB":2.219037,"VNM":0.52464,"VUT":0.672025,"WLF":0,"WSM":0.24869,"YEM":0.207171,"ZAF":7.239004,"ZMB":0.897832,"ZWE":1.48492},"1973":{"ABW":14.646026,"AFG":0.141288,"AGO":0.740878,"AIA":0,"ALB":2.097417,"AND":0,"ARE":69.314164,"ARG":3.75595,"ARM":2.23977,"ATG":5.115493,"AUS":12.641423,"AUT":7.913416,"AZE":6.367562,"BDI":0.020518,"BEL":14.251587,"BEN":0.11807,"BES":18.136795,"BFA":0.028529,"BGD":0.06395,"BGR":7.850272,"BHR":21.501543,"BHS":40.621115,"BIH":3.257461,"BLR":8.170919,"BLZ":1.155153,"BMU":8.030685,"BOL":0.70467,"BRA":1.270435,"BRB":1.961977,"BRN":66.906437,"BTN":0.01111,"BWA":0.078047,"CAF":0.073417,"CAN":16.943947,"CHE":7.325199,"CHL":2.676298,"CHN":1.14364,"CIV":0.459656,"CMR":0.128154,"COD":0.145932,"COG":0.796382,"COK":0.544779,"COL":1.50162,"COM":0.111145,"CPV":0.207989,"CRI":1.018525,"CUB":2.406488,"CUW":84.200641,"CYP":3.847414,"CZE":16.576103,"DEU":13.801619,"DJI":1.012457,"DMA":0.36466,"DNK":11.824117,"DOM":1.228356,"DZA":2.588678,"ECU":0.782073,"EGY":0.640102,"ERI":0,"ESP":4.440274,"EST":19.788121,"ETH":0.057043,"FIN":10.56974,"FJI":1.130297,"FRA":10.396503,"FRO":6.360791,"FSM":0,"GAB":8.357054,"GBR":11.74322,"GEO":2.293484,"GHA":0.256449,"GIN":0.180513,"GLP":1.263978,"GMB":0.10786,"GNB":0.182227,"GNQ":0.098346,"GRC":4.284508,"GRD":0.561469,"GRL":11.611133,"GTM":0.497636,"GUF":2.312401,"GUY":2.469892,"HKG":2.192915,"HND":0.494349,"HRV":3.060016,"HTI":0.085193,"HUN":7.008275,"IDN":0.393701,"IND":0.350768,"IRL":7.461197,"IRN":4.179063,"IRQ":2.815702,"ISL":8.240304,"ISR":5.992386,"ITA":6.497827,"JAM":4.26169,"JOR":1.244512,"JPN":8.335792,"KAZ":14.245648,"KEN":0.306699,"KGZ":4.867742,"KHM":0.012833,"KIR":0.60464,"KNA":0,"KOR":2.10546,"KSV":0,"KWT":24.9583,"LAO":0.179535,"LBN":2.749872,"LBR":0.935049,"LBY":6.992934,"LCA":0.745583,"LIE":0,"LKA":0.279754,"LSO":0,"LTU":8.649799,"LUX":40.595422,"LVA":7.478244,"MAC":0.901815,"MAR":0.582954,"MDA":7.461447,"MDG":0.147657,"MDV":0.027153,"MEX":2.608421,"MHL":0,"MKD":5.441493,"MLI":0.041407,"MLT":2.549329,"MMR":0.140803,"MNE":2.316546,"MNG":2.475985,"MOZ":0.390078,"MRT":0.382115,"MSR":1.2771,"MTQ":2.897937,"MUS":0.783297,"MWI":0.114332,"MYS":1.582361,"MYT":0,"NAM":0,"NCL":20.59633,"NER":0.065119,"NGA":0.831004,"NIC":0.681228,"NIU":0.776436,"NLD":12.289198,"NOR":7.698558,"NPL":0.031596,"NRU":12.05608,"NZL":6.106189,"OMN":2.896614,"PAK":0.311243,"PAN":1.966028,"PER":1.343996,"PHL":0.779615,"PLW":0,"PNG":0.503224,"POL":10.086861,"PRI":0,"PRK":6.034512,"PRT":2.226519,"PRY":0.335805,"PSE":0,"PYF":1.595685,"QAT":76.08184,"REU":0.768671,"ROU":7.017805,"RUS":12.682219,"RWA":0.016344,"SAU":13.409059,"SDN":0.398611,"SEN":0.324533,"SGP":9.542041,"SHN":0,"SLB":0.353032,"SLE":0.183055,"SLV":0.505466,"SOM":0.065586,"SPM":6.916767,"SRB":5.076977,"SSD":0.127477,"STP":0.177709,"SUR":5.315159,"SVK":11.30234,"SVN":5.928459,"SWE":10.70126,"SWZ":0.769895,"SXM":199.683825,"SYC":0.816189,"SYR":1.125953,"TCA":0,"TCD":0.041201,"TGO":0.172168,"THA":0.626258,"TJK":2.738012,"TKM":9.69115,"TLS":0,"TON":0.283056,"TTO":9.146854,"TUN":0.882812,"TUR":1.559631,"TUV":0,"TWN":2.525747,"TZA":0.21045,"UGA":0.105547,"UKR":10.991045,"URY":2.033512,"USA":23.081082,"UZB":5.41095,"VCT":0.395432,"VEN":5.346793,"VGB":2.560192,"VNM":0.558413,"VUT":0.574373,"WLF":0,"WSM":0.244941,"YEM":0.367986,"ZAF":7.109694,"ZMB":0.985468,"ZWE":1.622846},"1974":{"ABW":13.128493,"AFG":0.161177,"AGO":0.715384,"AIA":0,"ALB":1.679208,"AND":0,"ARE":63.62686,"ARG":3.751731,"ARM":2.277341,"ATG":6.675512,"AUS":12.556315,"AUT":7.541653,"AZE":6.502422,"BDI":0.025027,"BEL":13.842363,"BEN":0.123196,"BES":16.202275,"BFA":0.034094,"BGD":0.063786,"BGR":8.073902,"BHR":19.956383,"BHS":37.31538,"BIH":3.238733,"BLR":8.425461,"BLZ":1.196455,"BMU":8.348913,"BOL":0.70066,"BRA":1.343315,"BRB":1.997047,"BRN":52.996151,"BTN":0.01075,"BWA":0.127154,"CAF":0.050723,"CAN":17.079149,"CHE":6.532984,"CHL":2.470769,"CHN":1.143136,"CIV":0.495141,"CMR":0.135344,"COD":0.149885,"COG":1.027129,"COK":0.562682,"COL":1.589424,"COM":0.107876,"CPV":0.218614,"CRI":0.925109,"CUB":2.43151,"CUW":76.026638,"CYP":2.973805,"CZE":16.66518,"DEU":13.517167,"DJI":1.014646,"DMA":0.413883,"DNK":10.934934,"DOM":1.287427,"DZA":2.10357,"ECU":0.880256,"EGY":0.687817,"ERI":0,"ESP":4.88724,"EST":20.368098,"ETH":0.055139,"FIN":9.936599,"FJI":1.183454,"FRA":9.981798,"FRO":7.475876,"FSM":0,"GAB":8.396029,"GBR":10.975319,"GEO":2.366922,"GHA":0.295671,"GIN":0.185752,"GLP":1.191703,"GMB":0.104703,"GNB":0.164522,"GNQ":0.176543,"GRC":4.130928,"GRD":0.375687,"GRL":11.457774,"GTM":0.506851,"GUF":1.960144,"GUY":2.105916,"HKG":2.456322,"HND":0.495242,"HRV":3.060228,"HTI":0.093843,"HUN":7.074106,"IDN":0.400378,"IND":0.354019,"IRL":7.489561,"IRN":4.507697,"IRQ":2.749185,"ISL":8.075395,"ISR":5.862773,"ITA":6.543351,"JAM":3.845454,"JOR":1.217621,"JPN":8.229577,"KAZ":14.569503,"KEN":0.374354,"KGZ":4.954888,"KHM":0.00689,"KIR":0.541007,"KNA":0,"KOR":2.139069,"KSV":0,"KWT":18.741785,"LAO":0.099468,"LBN":2.692056,"LBR":1.058686,"LBY":4.28438,"LCA":0.66776,"LIE":0,"LKA":0.218307,"LSO":0,"LTU":8.915224,"LUX":41.048885,"LVA":7.711637,"MAC":1.081656,"MAR":0.656625,"MDA":7.668688,"MDG":0.158423,"MDV":0.02637,"MEX":2.717094,"MHL":0,"MKD":5.390007,"MLI":0.046266,"MLT":2.341848,"MMR":0.156995,"MNE":2.301394,"MNG":2.592123,"MOZ":0.334478,"MRT":0.382526,"MSR":1.27377,"MTQ":3.174724,"MUS":0.789853,"MWI":0.106977,"MYS":1.680138,"MYT":0,"NAM":0,"NCL":21.149128,"NER":0.055684,"NGA":1.017619,"NIC":0.703557,"NIU":0.814403,"NLD":11.797852,"NOR":6.949028,"NPL":0.031181,"NRU":13.941375,"NZL":6.16534,"OMN":3.092676,"PAK":0.323321,"PAN":1.784808,"PER":1.416278,"PHL":0.736737,"PLW":0,"PNG":0.580436,"POL":10.311202,"PRI":0,"PRK":6.181876,"PRT":2.27377,"PRY":0.359144,"PSE":0,"PYF":1.597175,"QAT":58.44168,"REU":0.836363,"ROU":7.215068,"RUS":13.088041,"RWA":0.016706,"SAU":13.189259,"SDN":0.401928,"SEN":0.376466,"SGP":9.729278,"SHN":0,"SLB":0.343223,"SLE":0.173496,"SLV":0.494483,"SOM":0.079926,"SPM":7.440853,"SRB":5.055645,"SSD":0.130301,"STP":0.217606,"SUR":4.05808,"SVK":11.316642,"SVN":5.897465,"SWE":9.742626,"SWZ":0.62965,"SXM":168.755335,"SYC":0.921823,"SYR":1.33258,"TCA":0,"TCD":0.037551,"TGO":0.159353,"THA":0.604092,"TJK":2.7598,"TKM":9.799873,"TLS":0,"TON":0.238938,"TTO":9.65311,"TUN":0.960472,"TUR":1.567763,"TUV":0,"TWN":2.419967,"TZA":0.146986,"UGA":0.104099,"UKR":11.337634,"URY":1.989426,"USA":22.080899,"UZB":5.459172,"VCT":0.320308,"VEN":5.865606,"VGB":2.527893,"VNM":0.415219,"VUT":0.630509,"WLF":0,"WSM":0.288807,"YEM":0.29433,"ZAF":7.040083,"ZMB":0.87641,"ZWE":1.532476},"1975":{"ABW":9.399849,"AFG":0.174493,"AGO":0.6269,"AIA":0,"ALB":1.732438,"AND":0,"ARE":57.13179,"ARG":3.665459,"ARM":2.343055,"ATG":11.043211,"AUS":12.653276,"AUT":7.155103,"AZE":6.724498,"BDI":0.020523,"BEL":12.477482,"BEN":0.131217,"BES":11.550451,"BFA":0.035814,"BGD":0.065016,"BGR":8.229594,"BHR":20.163077,"BHS":40.846433,"BIH":3.346425,"BLR":8.796138,"BLZ":1.344577,"BMU":8.59997,"BOL":0.790787,"BRA":1.37882,"BRB":2.298434,"BRN":44.31601,"BTN":0.010401,"BWA":0.256706,"CAF":0.044919,"CAN":17.150003,"CHE":6.161204,"CHL":2.156548,"CHN":1.292955,"CIV":0.581623,"CMR":0.156884,"COD":0.140235,"COG":0.676458,"COK":0.776971,"COL":1.530057,"COM":0.117756,"CPV":0.252793,"CRI":0.964011,"CUB":2.841982,"CUW":54.893228,"CYP":3.086638,"CZE":17.32229,"DEU":12.767828,"DJI":0.948577,"DMA":0.411108,"DNK":11.020693,"DOM":1.240133,"DZA":2.035093,"ECU":1.035059,"EGY":0.801017,"ERI":0,"ESP":5.06296,"EST":21.236273,"ETH":0.03747,"FIN":9.769068,"FJI":1.081238,"FRA":9.19354,"FRO":8.567912,"FSM":0,"GAB":8.086496,"GBR":10.721182,"GEO":2.472684,"GHA":0.268528,"GIN":0.183679,"GLP":1.240589,"GMB":0.161407,"GNB":0.172192,"GNQ":0.219895,"GRC":4.391589,"GRD":0.490218,"GRL":10.287319,"GTM":0.567507,"GUF":2.157396,"GUY":2.447286,"HKG":2.47303,"HND":0.513912,"HRV":3.179605,"HTI":0.094257,"HUN":7.152679,"IDN":0.41103,"IND":0.375622,"IRL":6.981724,"IRN":4.236968,"IRQ":2.850864,"ISL":7.398872,"ISR":5.76741,"ITA":6.190375,"JAM":4.084016,"JOR":1.319387,"JPN":7.726164,"KAZ":15.087418,"KEN":0.363936,"KGZ":5.110853,"KHM":0.00708,"KIR":0.543486,"KNA":0,"KOR":2.27287,"KSV":0,"KWT":15.340299,"LAO":0.083916,"LBN":2.327661,"LBR":0.887494,"LBY":5.047652,"LCA":0.690099,"LIE":0,"LKA":0.211741,"LSO":0,"LTU":9.300956,"LUX":33.545451,"LVA":8.053452,"MAC":1.201949,"MAR":0.638686,"MDA":7.979682,"MDG":0.219215,"MDV":0.0512,"MEX":2.796623,"MHL":0,"MKD":5.54589,"MLI":0.050924,"MLT":2.086384,"MMR":0.151031,"MNE":2.375384,"MNG":2.729081,"MOZ":0.297044,"MRT":0.391033,"MSR":0.953091,"MTQ":2.741356,"MUS":0.664088,"MWI":0.109544,"MYS":1.673717,"MYT":0,"NAM":0,"NCL":18.505884,"NER":0.062434,"NGA":0.753392,"NIC":0.674218,"NIU":0.85808,"NLD":11.162601,"NOR":7.638664,"NPL":0.025257,"NRU":14.250868,"NZL":5.902351,"OMN":9.211269,"PAK":0.340362,"PAN":2.109204,"PER":1.42002,"PHL":0.766196,"PLW":0,"PNG":0.548067,"POL":11.055535,"PRI":0,"PRK":6.435576,"PRT":2.311843,"PRY":0.308136,"PSE":0,"PYF":1.519756,"QAT":56.128024,"REU":0.938055,"ROU":7.653631,"RUS":13.667861,"RWA":0.038946,"SAU":10.54263,"SDN":0.287624,"SEN":0.510705,"SGP":10.689556,"SHN":0,"SLB":0.296301,"SLE":0.171455,"SLV":0.516456,"SOM":0.118717,"SPM":5.543116,"SRB":5.229007,"SSD":0.094862,"STP":0.212932,"SUR":5.148061,"SVK":11.721382,"SVN":6.09448,"SWE":9.819566,"SWZ":0.66156,"SXM":114.058717,"SYC":0.961948,"SYR":1.490063,"TCA":0,"TCD":0.044857,"TGO":0.124094,"THA":0.592448,"TJK":2.815221,"TKM":10.037495,"TLS":0,"TON":0.352771,"TTO":9.120627,"TUN":0.96049,"TUR":1.648939,"TUV":0,"TWN":2.625342,"TZA":0.14046,"UGA":0.096206,"UKR":11.846419,"URY":2.076085,"USA":21.196241,"UZB":5.57581,"VCT":0.317446,"VEN":4.838234,"VGB":2.494456,"VNM":0.463521,"VUT":0.538771,"WLF":0,"WSM":0.377579,"YEM":0.276088,"ZAF":7.17672,"ZMB":0.82661,"ZWE":1.363096},"1976":{"ABW":19.922657,"AFG":0.159422,"AGO":0.451375,"AIA":0,"ALB":1.823139,"AND":0,"ARE":64.504224,"ARG":3.792262,"ARM":2.378873,"ATG":6.298484,"AUS":12.400209,"AUT":7.69534,"AZE":6.87214,"BDI":0.022954,"BEL":13.268236,"BEN":0.075179,"BES":24.272249,"BFA":0.03331,"BGD":0.072739,"BGR":8.196015,"BHR":21.895295,"BHS":31.331981,"BIH":3.421421,"BLR":9.069882,"BLZ":1.317679,"BMU":8.787065,"BOL":0.872334,"BRA":1.384664,"BRB":2.139161,"BRN":36.470411,"BTN":0.010063,"BWA":0.774464,"CAF":0.055315,"CAN":17.019039,"CHE":6.416518,"CHL":2.223682,"CHN":1.319618,"CIV":0.554523,"CMR":0.143323,"COD":0.143939,"COG":0.741416,"COK":0.804567,"COL":1.588246,"COM":0.139552,"CPV":0.238685,"CRI":0.960467,"CUB":2.832773,"CUW":116.95949,"CYP":3.833884,"CZE":17.883625,"DEU":13.920135,"DJI":0.862855,"DMA":0.408541,"DNK":11.834106,"DOM":1.207635,"DZA":2.371506,"ECU":1.10901,"EGY":0.868885,"ERI":0,"ESP":5.471806,"EST":21.879143,"ETH":0.035531,"FIN":10.834466,"FJI":0.823375,"FRA":9.936065,"FRO":8.032348,"FSM":0,"GAB":8.404483,"GBR":10.63796,"GEO":2.549697,"GHA":0.230906,"GIN":0.190328,"GLP":1.509839,"GMB":0.156558,"GNB":0.135894,"GNQ":0.225681,"GRC":4.797918,"GRD":0.492163,"GRL":4.43503,"GTM":0.521054,"GUF":4.848613,"GUY":2.324179,"HKG":2.739796,"HND":0.530939,"HRV":3.268322,"HTI":0.128713,"HUN":7.547533,"IDN":0.45932,"IND":0.38395,"IRL":6.954173,"IRN":4.623351,"IRQ":4.061513,"ISL":7.724673,"ISR":5.621704,"ITA":6.604129,"JAM":3.585076,"JOR":1.513821,"JPN":7.98368,"KAZ":15.434289,"KEN":0.325917,"KGZ":5.206692,"KHM":0.007552,"KIR":0.546775,"KNA":0,"KOR":2.553866,"KSV":0,"KWT":15.790844,"LAO":0.072755,"LBN":1.929386,"LBR":0.858665,"LBY":7.410788,"LCA":0.743002,"LIE":0,"LKA":0.201203,"LSO":0,"LTU":9.577301,"LUX":33.33014,"LVA":8.309309,"MAC":1.024953,"MAR":0.647069,"MDA":8.200216,"MDG":0.124728,"MDV":0.074538,"MEX":3.039402,"MHL":0,"MKD":5.643555,"MLI":0.049982,"MLT":2.366734,"MMR":0.158131,"MNE":2.425442,"MNG":2.871013,"MOZ":0.255052,"MRT":0.385079,"MSR":0.951441,"MTQ":2.573673,"MUS":0.687891,"MWI":0.10697,"MYS":2.006505,"MYT":0,"NAM":0,"NCL":16.978539,"NER":0.060683,"NGA":0.853557,"NIC":0.75393,"NIU":0.904022,"NLD":12.291384,"NOR":8.282486,"NPL":0.019805,"NRU":14.042157,"NZL":6.153987,"OMN":10.09724,"PAK":0.32448,"PAN":2.027357,"PER":1.415343,"PHL":0.806596,"PLW":0,"PNG":0.550401,"POL":11.630796,"PRI":0,"PRK":6.477292,"PRT":2.392851,"PRY":0.370142,"PSE":0,"PYF":1.827482,"QAT":49.172454,"REU":1.204973,"ROU":8.134031,"RUS":14.097085,"RWA":0.057543,"SAU":12.195314,"SDN":0.244444,"SEN":0.341561,"SGP":12.970149,"SHN":0,"SLB":0.305211,"SLE":0.144777,"SLV":0.529588,"SOM":0.110754,"SPM":7.957234,"SRB":5.349229,"SSD":0.082037,"STP":0.332796,"SUR":5.129417,"SVK":12.054666,"SVN":6.22859,"SWE":10.699759,"SWZ":0.634541,"SXM":227.86075,"SYC":1.296345,"SYR":1.770553,"TCA":0,"TCD":0.044006,"TGO":0.125476,"THA":0.681788,"TJK":2.834713,"TKM":10.155297,"TLS":0,"TON":0.308804,"TTO":14.902012,"TUN":0.985062,"TUR":1.811299,"TUV":0,"TWN":3.327242,"TZA":0.165448,"UGA":0.081807,"UKR":12.238951,"URY":2.036283,"USA":22.261743,"UZB":5.623724,"VCT":0.31493,"VEN":4.221803,"VGB":2.459532,"VNM":0.288572,"VUT":0.417387,"WLF":0,"WSM":0.278039,"YEM":0.316771,"ZAF":7.284851,"ZMB":0.79127,"ZWE":1.726187},"1977":{"ABW":10.359714,"AFG":0.187918,"AGO":0.46959,"AIA":0,"ALB":2.060456,"AND":0,"ARE":54.821652,"ARG":3.769827,"ARM":2.403353,"ATG":7.257482,"AUS":13.217813,"AUT":7.400349,"AZE":6.997103,"BDI":0.025189,"BEL":12.895414,"BEN":0.083685,"BES":12.471308,"BFA":0.038829,"BGD":0.074033,"BGR":8.4826,"BHR":23.668545,"BHS":46.114587,"BIH":3.297311,"BLR":9.312867,"BLZ":1.452869,"BMU":8.502751,"BOL":0.834252,"BRA":1.420028,"BRB":2.362801,"BRN":37.464916,"BTN":0.019469,"BWA":0.967116,"CAF":0.054755,"CAN":17.195241,"CHE":6.533855,"CHL":2.097911,"CHN":1.42251,"CIV":0.546445,"CMR":0.199959,"COD":0.143342,"COG":0.281321,"COK":1.63974,"COL":1.605347,"COM":0.135179,"CPV":0.260539,"CRI":1.171542,"CUB":3.036864,"CUW":60.945861,"CYP":4.112311,"CZE":18.314599,"DEU":13.456807,"DJI":0.781783,"DMA":0.355521,"DNK":12.133991,"DOM":1.043587,"DZA":2.442188,"ECU":0.995409,"EGY":0.931925,"ERI":0,"ESP":5.335871,"EST":22.438791,"ETH":0.031066,"FIN":10.580238,"FJI":1.275891,"FRA":9.57947,"FRO":9.804585,"FSM":0,"GAB":9.075002,"GBR":10.745194,"GEO":2.617536,"GHA":0.27634,"GIN":0.190544,"GLP":1.587411,"GMB":0.174226,"GNB":0.137414,"GNQ":0.229526,"GRC":5.193803,"GRD":0.494472,"GRL":14.511912,"GTM":0.58646,"GUF":5.763052,"GUY":2.492785,"HKG":3.044844,"HND":0.579286,"HRV":3.164273,"HTI":0.132263,"HUN":7.810136,"IDN":0.59782,"IND":0.397373,"IRL":7.241526,"IRN":4.694621,"IRQ":3.518458,"ISL":8.574914,"ISR":5.581426,"ITA":6.368729,"JAM":3.621015,"JOR":1.572706,"JPN":8.131974,"KAZ":15.712426,"KEN":0.345413,"KGZ":5.280464,"KHM":0.007886,"KIR":0.367048,"KNA":0,"KOR":2.857112,"KSV":0,"KWT":13.791747,"LAO":0.073849,"LBN":1.557578,"LBR":0.832175,"LBY":7.94642,"LCA":0.603337,"LIE":0,"LKA":0.205596,"LSO":0,"LTU":9.821598,"LUX":30.574811,"LVA":8.538755,"MAC":1.249066,"MAR":0.69341,"MDA":8.395748,"MDG":0.103183,"MDV":0.096553,"MEX":3.09005,"MHL":0,"MKD":5.410143,"MLI":0.059618,"MLT":2.471649,"MMR":0.163705,"MNE":2.333631,"MNG":3.15463,"MOZ":0.261149,"MRT":0.403183,"MSR":2.220029,"MTQ":2.574143,"MUS":0.702628,"MWI":0.113349,"MYS":1.851296,"MYT":0,"NAM":0,"NCL":14.919244,"NER":0.064811,"NGA":0.758446,"NIC":0.932349,"NIU":0.936127,"NLD":11.807937,"NOR":8.243267,"NPL":0.02312,"NRU":15.264615,"NZL":6.466822,"OMN":9.814391,"PAK":0.335673,"PAN":1.895319,"PER":1.435841,"PHL":0.821478,"PLW":0,"PNG":0.541267,"POL":12.093051,"PRI":0,"PRK":6.596403,"PRT":2.389786,"PRY":0.404228,"PSE":0,"PYF":1.844209,"QAT":43.648911,"REU":1.223035,"ROU":8.214363,"RUS":14.4748,"RWA":0.055918,"SAU":13.485725,"SDN":0.237565,"SEN":0.421479,"SGP":12.046206,"SHN":0,"SLB":0.382152,"SLE":0.161705,"SLV":0.536023,"SOM":0.179515,"SPM":6.080319,"SRB":5.15649,"SSD":0.081188,"STP":0.32461,"SUR":4.918294,"SVK":12.292018,"SVN":5.994971,"SWE":10.37361,"SWZ":0.628313,"SXM":111.420112,"SYC":1.334135,"SYR":1.822367,"TCA":0,"TCD":0.04668,"TGO":0.175496,"THA":0.743845,"TJK":2.842015,"TKM":10.236529,"TLS":0,"TON":0.305821,"TTO":14.93886,"TUN":1.107655,"TUR":1.960117,"TUV":0,"TWN":3.559972,"TZA":0.115019,"UGA":0.064836,"UKR":12.599671,"URY":1.938467,"USA":22.696185,"UZB":5.646768,"VCT":0.312572,"VEN":4.557746,"VGB":2.771034,"VNM":0.308526,"VUT":0.471605,"WLF":0,"WSM":0.456966,"YEM":0.356723,"ZAF":7.343227,"ZMB":0.713682,"ZWE":1.438765},"1978":{"ABW":8.78371,"AFG":0.166421,"AGO":0.694814,"AIA":0,"ALB":2.291043,"AND":0,"ARE":55.578573,"ARG":3.777931,"ARM":2.428056,"ATG":7.632265,"AUS":14.058459,"AUT":7.569391,"AZE":7.130968,"BDI":0.025398,"BEL":13.821166,"BEN":0.099737,"BES":10.447249,"BFA":0.052918,"BGD":0.074798,"BGR":9.065044,"BHR":23.451407,"BHS":30.681643,"BIH":3.653233,"BLR":9.568714,"BLZ":1.555973,"BMU":7.950021,"BOL":0.915061,"BRA":1.512666,"BRB":2.510699,"BRN":54.114794,"BTN":0.028252,"BWA":0.979202,"CAF":0.061945,"CAN":17.340651,"CHE":6.713378,"CHL":2.05053,"CHN":1.562891,"CIV":0.625193,"CMR":0.248738,"COD":0.140953,"COG":0.184541,"COK":1.645909,"COL":1.66113,"COM":0.095188,"CPV":0.66908,"CRI":1.273743,"CUB":3.151207,"CUW":51.790858,"CYP":4.284831,"CZE":18.386303,"DEU":13.822354,"DJI":0.723786,"DMA":0.353873,"DNK":11.958751,"DOM":0.98815,"DZA":3.542025,"ECU":1.349255,"EGY":0.944305,"ERI":0,"ESP":5.411948,"EST":23.019294,"ETH":0.039946,"FIN":10.90502,"FJI":1.155592,"FRA":9.944518,"FRO":9.516883,"FSM":0,"GAB":10.60875,"GBR":10.752227,"GEO":2.688437,"GHA":0.264926,"GIN":0.187587,"GLP":1.58976,"GMB":0.206891,"GNB":0.129156,"GNQ":0.257013,"GRC":5.248404,"GRD":0.535387,"GRL":7.882897,"GTM":0.619232,"GUF":5.350207,"GUY":2.674317,"HKG":3.29519,"HND":0.574431,"HRV":3.521824,"HTI":0.138273,"HUN":8.248036,"IDN":0.665044,"IND":0.394961,"IRL":7.133303,"IRN":4.50368,"IRQ":3.291267,"ISL":8.588952,"ISR":5.827991,"ITA":6.644482,"JAM":4.379683,"JOR":1.7531,"JPN":7.785112,"KAZ":15.992925,"KEN":0.351071,"KGZ":5.353582,"KHM":0.00799,"KIR":0.369696,"KNA":0,"KOR":3.030253,"KSV":0,"KWT":15.779091,"LAO":0.072636,"LBN":1.726416,"LBR":0.825517,"LBY":7.905253,"LCA":0.842679,"LIE":0,"LKA":0.238334,"LSO":0,"LTU":10.080781,"LUX":32.904606,"LVA":8.779027,"MAC":1.682729,"MAR":0.695491,"MDA":8.602454,"MDG":0.12051,"MDV":0.1409,"MEX":3.463855,"MHL":0,"MKD":5.958719,"MLI":0.055839,"MLT":2.853182,"MMR":0.159887,"MNE":2.580711,"MNG":3.567005,"MOZ":0.266811,"MRT":0.409749,"MSR":2.221953,"MTQ":2.192317,"MUS":0.680691,"MWI":0.11506,"MYS":1.854324,"MYT":0,"NAM":0,"NCL":10.610377,"NER":0.07173,"NGA":0.702617,"NIC":0.839835,"NIU":0.957158,"NLD":12.172061,"NOR":8.044322,"NPL":0.022096,"NRU":15.062193,"NZL":5.734109,"OMN":8.53428,"PAK":0.348319,"PAN":1.518012,"PER":1.34704,"PHL":0.814549,"PLW":0,"PNG":0.56197,"POL":12.356221,"PRI":0,"PRK":6.193472,"PRT":2.357922,"PRY":0.4971,"PSE":0,"PYF":2.025692,"QAT":43.177211,"REU":1.33633,"ROU":8.860062,"RUS":14.868151,"RWA":0.058809,"SAU":12.488332,"SDN":0.205596,"SEN":0.482144,"SGP":13.973109,"SHN":0,"SLB":0.285472,"SLE":0.219715,"SLV":0.54788,"SOM":0.116568,"SPM":5.443381,"SRB":5.714192,"SSD":0.071625,"STP":0.355886,"SUR":6.263301,"SVK":12.281138,"SVN":6.637455,"SWE":9.597104,"SWZ":0.784812,"SXM":88.96007,"SYC":1.202663,"SYR":1.826835,"TCA":0,"TCD":0.04502,"TGO":0.131955,"THA":0.793057,"TJK":2.851586,"TKM":10.328869,"TLS":0,"TON":0.380766,"TTO":13.96343,"TUN":1.195539,"TUR":1.813901,"TUV":0,"TWN":4.062695,"TZA":0.121534,"UGA":0.054729,"UKR":12.983841,"URY":1.95818,"USA":22.679131,"UZB":5.678517,"VCT":0.344893,"VEN":4.772256,"VGB":2.732544,"VNM":0.303496,"VUT":0.522565,"WLF":0,"WSM":0.610712,"YEM":0.360071,"ZAF":7.224445,"ZMB":0.643785,"ZWE":1.416886},"1979":{"ABW":9.174458,"AFG":0.171931,"AGO":0.682462,"AIA":0,"ALB":2.625335,"AND":0,"ARE":40.229374,"ARG":4.010161,"ARM":2.401584,"ATG":6.294851,"AUS":14.108998,"AUT":8.124741,"AZE":7.089499,"BDI":0.026567,"BEL":14.243383,"BEN":0.098168,"BES":10.786727,"BFA":0.060253,"BGD":0.080732,"BGR":8.794757,"BHR":23.440503,"BHS":31.517015,"BIH":3.940944,"BLR":9.582223,"BLZ":1.472596,"BMU":8.636336,"BOL":0.843094,"BRA":1.566481,"BRB":2.381352,"BRN":40.858561,"BTN":0.054678,"BWA":1.053887,"CAF":0.04292,"CAN":18.236694,"CHE":6.333617,"CHL":2.1872,"CHN":1.57561,"CIV":0.67769,"CMR":0.220218,"COD":0.14439,"COG":0.194652,"COK":1.446343,"COL":1.730573,"COM":0.069105,"CPV":0.79349,"CRI":1.18377,"CUB":3.241482,"CUW":54.219628,"CYP":4.534533,"CZE":17.825776,"DEU":14.347403,"DJI":1.197718,"DMA":0.453166,"DNK":12.301834,"DOM":1.206141,"DZA":2.507051,"ECU":1.532405,"EGY":1.006029,"ERI":0,"ESP":5.451793,"EST":23.053215,"ETH":0.053055,"FIN":11.383407,"FJI":1.330117,"FRA":9.96027,"FRO":11.292147,"FSM":0,"GAB":9.239758,"GBR":11.454919,"GEO":2.691934,"GHA":0.230054,"GIN":0.193505,"GLP":1.616369,"GMB":0.210831,"GNB":0.133788,"GNQ":0.227391,"GRC":5.52727,"GRD":0.500115,"GRL":11.486586,"GTM":0.686458,"GUF":8.503676,"GUY":1.963325,"HKG":3.250247,"HND":0.524966,"HRV":3.813436,"HTI":0.135449,"HUN":8.041709,"IDN":0.657509,"IND":0.405557,"IRL":8.17529,"IRN":4.380659,"IRQ":3.991519,"ISL":8.780138,"ISR":5.676163,"ITA":6.870891,"JAM":4.048279,"JOR":1.766486,"JPN":8.162268,"KAZ":15.874414,"KEN":0.320849,"KGZ":5.289408,"KHM":0.004844,"KIR":0.429076,"KNA":0,"KOR":3.520974,"KSV":0,"KWT":12.481845,"LAO":0.069117,"LBN":1.993411,"LBR":1.035367,"LBY":9.203815,"LCA":1.257494,"LIE":0,"LKA":0.259463,"LSO":0,"LTU":10.077743,"LUX":33.511061,"LVA":8.797145,"MAC":1.685764,"MAR":0.826924,"MDA":8.594249,"MDG":0.130027,"MDV":0.182827,"MEX":3.641779,"MHL":0,"MKD":6.386873,"MLI":0.059283,"MLT":2.73854,"MMR":0.154959,"MNE":2.778508,"MNG":3.78735,"MOZ":0.236755,"MRT":0.413088,"MSR":2.226582,"MTQ":2.132949,"MUS":0.701592,"MWI":0.105295,"MYS":2.120848,"MYT":0,"NAM":0,"NCL":11.159615,"NER":0.080007,"NGA":0.992018,"NIC":0.531765,"NIU":0.981516,"NLD":13.319318,"NOR":8.509921,"NPL":0.033623,"NRU":14.972845,"NZL":5.24876,"OMN":8.00994,"PAK":0.36346,"PAN":1.663768,"PER":1.302364,"PHL":0.806524,"PLW":0,"PNG":0.59021,"POL":12.541325,"PRI":0,"PRK":6.222807,"PRT":2.566091,"PRY":0.441893,"PSE":0,"PYF":1.77928,"QAT":55.08527,"REU":1.682367,"ROU":8.897016,"RUS":14.898668,"RWA":0.058487,"SAU":14.25374,"SDN":0.204523,"SEN":0.519032,"SGP":15.019669,"SHN":0,"SLB":0.486833,"SLE":0.205404,"SLV":0.536138,"SOM":0.090096,"SPM":6.020375,"SRB":6.167114,"SSD":0.072613,"STP":0.347054,"SUR":6.075779,"SVK":11.845545,"SVN":7.152589,"SWE":10.230019,"SWZ":0.771913,"SXM":87.725811,"SYC":1.869908,"SYR":2.614261,"TCA":0,"TCD":0.045769,"TGO":0.500256,"THA":0.812389,"TJK":2.790809,"TKM":10.159136,"TLS":0,"TON":0.417632,"TTO":15.020164,"TUN":1.363778,"TUR":1.737491,"TUV":0,"TWN":4.258069,"TZA":0.110318,"UGA":0.05156,"UKR":13.038131,"URY":2.129524,"USA":22.718443,"UZB":5.575209,"VCT":0.274246,"VEN":5.169373,"VGB":2.695108,"VNM":0.313511,"VUT":0.540019,"WLF":0,"WSM":0.51546,"YEM":0.361631,"ZAF":7.619858,"ZMB":0.647609,"ZWE":1.417051},"1980":{"ABW":9.402004,"AFG":0.140655,"AGO":0.640375,"AIA":0,"ALB":1.757801,"AND":0,"ARE":36.313269,"ARG":3.87717,"ARM":2.465295,"ATG":2.202161,"AUS":14.9957,"AUT":6.892946,"AZE":7.268338,"BDI":0.033982,"BEL":13.718179,"BEN":0.125152,"BES":10.927686,"BFA":0.062362,"BGD":0.090519,"BGR":8.601933,"BHR":21.735722,"BHS":35.62929,"BIH":3.843193,"BLR":9.893185,"BLZ":1.312782,"BMU":8.139942,"BOL":0.812221,"BRA":1.51667,"BRB":2.658685,"BRN":36.59691,"BTN":0.052941,"BWA":1.050116,"CAF":0.043993,"CAN":18.066895,"CHE":6.407641,"CHL":2.187799,"CHN":1.521313,"CIV":0.67069,"CMR":0.456103,"COD":0.130483,"COG":0.221691,"COK":1.660642,"COL":1.687573,"COM":0.145074,"CPV":0.381145,"CRI":1.014148,"CUB":3.198459,"CUW":55.699021,"CYP":4.79982,"CZE":17.982116,"DEU":14.142083,"DJI":1.07392,"DMA":0.502069,"DNK":11.774406,"DOM":1.116614,"DZA":3.544219,"ECU":1.647913,"EGY":1.032629,"ERI":0,"ESP":5.705586,"EST":23.827458,"ETH":0.052009,"FIN":12.164512,"FJI":1.229354,"FRA":9.515466,"FRO":9.786779,"FSM":0,"GAB":8.84374,"GBR":10.280014,"GEO":2.778013,"GHA":0.21475,"GIN":0.193788,"GLP":1.600507,"GMB":0.219253,"GNB":0.176268,"GNQ":0.207512,"GRC":5.4677,"GRD":0.502246,"GRL":11.261246,"GTM":0.642924,"GUF":5.592637,"GUY":2.297722,"HKG":3.334352,"HND":0.539429,"HRV":3.730457,"HTI":0.131949,"HUN":8.095275,"IDN":0.640267,"IND":0.418627,"IRL":7.74655,"IRN":3.128033,"IRQ":3.322125,"ISL":8.156583,"ISR":5.603956,"ITA":6.860227,"JAM":3.954658,"JOR":2.118187,"JPN":8.032944,"KAZ":16.240735,"KEN":0.380026,"KGZ":5.388955,"KHM":0.046103,"KIR":0.482002,"KNA":0,"KOR":3.524303,"KSV":0,"KWT":16.478129,"LAO":0.056668,"LBN":1.987298,"LBR":1.054544,"LBY":9.039179,"LCA":0.933826,"LIE":0,"LKA":0.226759,"LSO":0,"LTU":10.388031,"LUX":30.443539,"LVA":9.086782,"MAC":2.15062,"MAR":0.80381,"MDA":8.853579,"MDG":0.180366,"MDV":0.266655,"MEX":3.954554,"MHL":0,"MKD":6.189246,"MLI":0.053081,"MLT":3.064436,"MMR":0.164609,"MNE":2.704418,"MNG":4.037724,"MOZ":0.280235,"MRT":0.418272,"MSR":1.279776,"MTQ":2.074671,"MUS":0.617788,"MWI":0.112965,"MYS":2.121158,"MYT":0,"NAM":0,"NCL":13.449642,"NER":0.092363,"NGA":0.932609,"NIC":0.612217,"NIU":1.007424,"NLD":12.500137,"NOR":7.786056,"NPL":0.034697,"NRU":16.316437,"NZL":5.553843,"OMN":5.938242,"PAK":0.396055,"PAN":1.587958,"PER":1.375723,"PHL":0.76144,"PLW":0,"PNG":0.588876,"POL":13.04365,"PRI":0,"PRK":6.347191,"PRT":2.736107,"PRY":0.482466,"PSE":0,"PYF":1.791786,"QAT":47.149725,"REU":1.474436,"ROU":8.867665,"RUS":15.40119,"RWA":0.094261,"SAU":16.638345,"SDN":0.205537,"SEN":0.584943,"SGP":12.676643,"SHN":0,"SLB":0.43905,"SLE":0.180617,"SLV":0.470046,"SOM":0.138048,"SPM":6.000655,"SRB":6.022328,"SSD":0.074388,"STP":0.414608,"SUR":6.316558,"SVK":11.882184,"SVN":6.963237,"SWE":8.627975,"SWZ":0.777407,"SXM":85.110831,"SYC":1.45909,"SYR":2.329115,"TCA":0,"TCD":0.047377,"TGO":0.279916,"THA":0.868375,"TJK":2.818645,"TKM":10.300914,"TLS":0,"TON":0.41676,"TTO":15.001467,"TUN":1.438903,"TUR":1.705916,"TUV":0,"TWN":4.613996,"TZA":0.097092,"UGA":0.047126,"UKR":13.488654,"URY":1.969871,"USA":21.549341,"UZB":5.648459,"VCT":0.340901,"VEN":5.959104,"VGB":2.638581,"VNM":0.316964,"VUT":0.527167,"WLF":0,"WSM":0.466596,"YEM":0.359972,"ZAF":7.745088,"ZMB":0.615908,"ZWE":1.363695},"1981":{"ABW":8.905754,"AFG":0.177358,"AGO":0.610184,"AIA":0,"ALB":2.452763,"AND":0,"ARE":33.419019,"ARG":3.581481,"ARM":2.397409,"ATG":1.632799,"AUS":15.414103,"AUT":7.379138,"AZE":7.035908,"BDI":0.035084,"BEL":12.553712,"BEN":0.098258,"BES":10.274191,"BFA":0.078179,"BGD":0.091534,"BGR":8.919929,"BHR":22.570543,"BHS":12.276228,"BIH":4.146941,"BLR":9.648085,"BLZ":1.231481,"BMU":7.204704,"BOL":0.815461,"BRA":1.363079,"BRB":2.690267,"BRN":10.608854,"BTN":0.059836,"BWA":1.025289,"CAF":0.055538,"CAN":17.312759,"CHE":6.10863,"CHL":2.09141,"CHN":1.480545,"CIV":0.448352,"CMR":0.602457,"COD":0.136771,"COG":0.251651,"COK":3.756023,"COL":1.652369,"COM":0.140929,"CPV":0.102526,"CRI":0.901214,"CUB":3.322666,"CUW":52.994721,"CYP":4.504932,"CZE":17.760735,"DEU":13.497204,"DJI":0.880263,"DMA":0.502386,"DNK":10.098157,"DOM":1.042478,"DZA":2.394767,"ECU":1.993726,"EGY":1.133701,"ERI":0,"ESP":5.458252,"EST":23.233682,"ETH":0.051928,"FIN":10.709318,"FJI":1.630524,"FRA":8.504249,"FRO":10.081398,"FSM":0,"GAB":8.536871,"GBR":9.939641,"GEO":2.708284,"GHA":0.248086,"GIN":0.195223,"GLP":2.106807,"GMB":0.212092,"GNB":0.169116,"GNQ":0.234437,"GRC":5.321738,"GRD":0.615656,"GRL":10.402729,"GTM":0.551178,"GUF":4.679707,"GUY":2.30737,"HKG":3.666326,"HND":0.464057,"HRV":4.034455,"HTI":0.131754,"HUN":8.084925,"IDN":0.661213,"IND":0.441829,"IRL":7.609584,"IRN":2.791658,"IRQ":2.267783,"ISL":7.570966,"ISR":5.506683,"ITA":6.638613,"JAM":3.419311,"JOR":2.525381,"JPN":7.828947,"KAZ":15.661975,"KEN":0.385623,"KGZ":5.182118,"KHM":0.047207,"KIR":0.473729,"KNA":1.279538,"KOR":3.603999,"KSV":0,"KWT":15.981695,"LAO":0.044564,"LBN":1.930564,"LBR":0.972485,"LBY":9.212026,"LCA":0.768822,"LIE":0,"LKA":0.263543,"LSO":0,"LTU":10.127133,"LUX":26.026505,"LVA":8.864462,"MAC":2.151004,"MAR":0.777807,"MDA":8.61586,"MDG":0.111275,"MDV":0.280745,"MEX":4.097819,"MHL":0,"MKD":6.637722,"MLI":0.052421,"MLT":3.39605,"MMR":0.164848,"MNE":2.919762,"MNG":3.803236,"MOZ":0.212975,"MRT":0.4084,"MSR":1.611399,"MTQ":2.090843,"MUS":0.559155,"MWI":0.092263,"MYS":2.276342,"MYT":0,"NAM":0,"NCL":9.254759,"NER":0.107409,"NGA":0.875426,"NIC":0.628331,"NIU":1.037079,"NLD":11.54295,"NOR":7.767304,"NPL":0.028378,"NRU":16.197634,"NZL":5.239779,"OMN":5.589894,"PAK":0.406227,"PAN":1.65879,"PER":1.339857,"PHL":0.695022,"PLW":0,"PNG":0.609304,"POL":11.408214,"PRI":0,"PRK":6.273303,"PRT":2.739288,"PRY":0.437251,"PSE":0,"PYF":1.95249,"QAT":43.544421,"REU":1.402132,"ROU":8.891761,"RUS":15.026922,"RWA":0.110419,"SAU":16.417033,"SDN":0.191329,"SEN":0.560465,"SGP":10.48513,"SHN":1.13542,"SLB":0.560599,"SLE":0.201476,"SLV":0.399794,"SOM":0.046302,"SPM":6.616976,"SRB":6.521884,"SSD":0.070563,"STP":0.44336,"SUR":5.396497,"SVK":11.663586,"SVN":7.510718,"SWE":8.333267,"SWZ":0.707577,"SXM":75.568267,"SYC":1.500501,"SYR":2.883058,"TCA":0,"TCD":0.047366,"TGO":0.241462,"THA":0.803027,"TJK":2.690341,"TKM":9.872817,"TLS":0,"TON":0.491832,"TTO":15.089224,"TUN":1.453156,"TUR":1.760398,"TUV":0,"TWN":4.078784,"TZA":0.105919,"UGA":0.038857,"UKR":13.170448,"URY":1.805738,"USA":20.767941,"UZB":5.416225,"VCT":0.33866,"VEN":5.869618,"VGB":3.832636,"VNM":0.326,"VUT":0.42433,"WLF":0,"WSM":0.462988,"YEM":0.443424,"ZAF":8.503257,"ZMB":0.569401,"ZWE":1.252961},"1982":{"ABW":9.878136,"AFG":0.207625,"AGO":0.518062,"AIA":0,"ALB":2.402886,"AND":0,"ARE":31.470296,"ARG":3.573376,"ARM":2.417002,"ATG":4.493569,"AUS":15.419471,"AUT":7.074791,"AZE":7.065434,"BDI":0.034234,"BEL":11.879662,"BEN":0.109152,"BES":11.392849,"BFA":0.078566,"BGD":0.096576,"BGR":10.015532,"BHR":25.140881,"BHS":9.72743,"BIH":3.775367,"BLR":9.766158,"BLZ":1.129907,"BMU":7.282417,"BOL":0.72405,"BRA":1.333787,"BRB":2.522528,"BRN":13.281816,"BTN":0.074572,"BWA":1.074477,"CAF":0.057908,"CAN":16.51115,"CHE":5.724615,"CHL":1.733646,"CHN":1.585211,"CIV":0.620759,"CMR":0.698121,"COD":0.107975,"COG":0.702594,"COK":2.947368,"COL":1.666812,"COM":0.137247,"CPV":0.112283,"CRI":0.81176,"CUB":3.484487,"CUW":59.243202,"CYP":4.534735,"CZE":17.568631,"DEU":13.087595,"DJI":0.980203,"DMA":0.554953,"DNK":10.472154,"DOM":1.047965,"DZA":1.958642,"ECU":2.243789,"EGY":1.224405,"ERI":0,"ESP":5.492015,"EST":23.520351,"ETH":0.039607,"FIN":8.903607,"FJI":1.233625,"FRA":8.10823,"FRO":10.370437,"FSM":0,"GAB":8.287413,"GBR":9.711941,"GEO":2.739356,"GHA":0.240639,"GIN":0.189906,"GLP":2.010568,"GMB":0.209842,"GNB":0.166423,"GNQ":0.232089,"GRC":5.40558,"GRD":0.645244,"GRL":10.062601,"GTM":0.491872,"GUF":4.960153,"GUY":1.799951,"HKG":3.79778,"HND":0.435669,"HRV":3.686226,"HTI":0.139052,"HUN":8.127244,"IDN":0.680184,"IND":0.446234,"IRL":7.40791,"IRN":3.241668,"IRQ":2.099468,"ISL":6.811467,"ISR":6.127883,"ITA":6.483583,"JAM":2.825064,"JOR":2.599659,"JPN":7.535028,"KAZ":15.693005,"KEN":0.266134,"KGZ":5.172932,"KHM":0.050922,"KIR":0.40726,"KNA":1.541151,"KOR":3.572834,"KSV":0,"KWT":12.759399,"LAO":0.045618,"LBN":1.862923,"LBR":0.29176,"LBY":9.36013,"LCA":0.900074,"LIE":0,"LKA":0.28933,"LSO":0,"LTU":10.233832,"LUX":24.448459,"LVA":8.972603,"MAC":1.884157,"MAR":0.814808,"MDA":8.693482,"MDG":0.106994,"MDV":0.272927,"MEX":4.301145,"MHL":0,"MKD":6.026233,"MLI":0.047442,"MLT":3.861747,"MMR":0.160596,"MNE":2.669333,"MNG":3.767156,"MOZ":0.212062,"MRT":0.552466,"MSR":1.621526,"MTQ":2.382124,"MUS":0.510039,"MWI":0.087164,"MYS":2.201126,"MYT":0,"NAM":0,"NCL":8.303026,"NER":0.113624,"NGA":0.845008,"NIC":0.604455,"NIU":1.078916,"NLD":9.337028,"NOR":7.522845,"NPL":0.02706,"NRU":16.237748,"NZL":5.73504,"OMN":5.034254,"PAK":0.423436,"PAN":1.599088,"PER":1.284403,"PHL":0.683933,"PLW":0,"PNG":0.601368,"POL":11.632667,"PRI":0,"PRK":6.317779,"PRT":2.927972,"PRY":0.418992,"PSE":0,"PYF":1.933476,"QAT":39.458072,"REU":1.523742,"ROU":8.746974,"RUS":15.217704,"RWA":0.107595,"SAU":14.096162,"SDN":0.193002,"SEN":0.505389,"SGP":11.319916,"SHN":0.562308,"SLB":0.483165,"SLE":0.157661,"SLV":0.380899,"SOM":0.12066,"SPM":6.6235,"SRB":5.96744,"SSD":0.072425,"STP":0.471926,"SUR":4.957928,"SVK":11.468823,"SVN":6.849328,"SWE":7.46419,"SWZ":0.687247,"SXM":76.966854,"SYC":1.268488,"SYR":2.561778,"TCA":0,"TCD":0.044385,"TGO":0.27052,"THA":0.782213,"TJK":2.665146,"TKM":9.814193,"TLS":0,"TON":0.453601,"TTO":15.905799,"TUN":1.3728,"TUR":1.876171,"TUV":0,"TWN":4.032811,"TZA":0.104796,"UGA":0.039243,"UKR":13.370917,"URY":1.629247,"USA":19.505387,"UZB":5.387572,"VCT":0.36985,"VEN":5.799095,"VGB":3.08184,"VNM":0.329695,"VUT":0.41452,"WLF":0,"WSM":0.395194,"YEM":0.601036,"ZAF":9.039699,"ZMB":0.576405,"ZWE":1.125067},"1983":{"ABW":5.031558,"AFG":0.253225,"AGO":0.549822,"AIA":0,"ALB":2.471188,"AND":0,"ARE":28.459317,"ARG":3.579071,"ARM":2.425702,"ATG":1.288405,"AUS":14.612533,"AUT":6.835228,"AZE":7.058335,"BDI":0.043411,"BEL":10.257083,"BEN":0.096945,"BES":5.812343,"BFA":0.078815,"BGD":0.089936,"BGR":10.055488,"BHR":20.312709,"BHS":8.51434,"BIH":4.029134,"BLR":9.838186,"BLZ":1.103523,"BMU":8.229197,"BOL":0.698971,"BRA":1.262423,"BRB":2.671168,"BRN":13.171282,"BTN":0.064276,"BWA":0.970649,"CAF":0.058739,"CAN":16.101215,"CHE":6.235624,"CHL":1.725677,"CHN":1.646106,"CIV":0.486715,"CMR":0.709308,"COD":0.137837,"COG":0.585317,"COK":2.986145,"COL":1.754835,"COM":0.133746,"CPV":0.110705,"CRI":0.796487,"CUB":3.086818,"CUW":30.464462,"CYP":4.454347,"CZE":17.583345,"DEU":13.041849,"DJI":0.946574,"DMA":0.557694,"DNK":9.790137,"DOM":1.279538,"DZA":2.538615,"ECU":2.217245,"EGY":1.203296,"ERI":0,"ESP":5.329747,"EST":23.693065,"ETH":0.047986,"FIN":8.539055,"FJI":1.022106,"FRA":7.754081,"FRO":10.9094,"FSM":0,"GAB":6.791521,"GBR":9.654329,"GEO":2.757571,"GHA":0.280267,"GIN":0.180347,"GLP":2.127493,"GMB":0.202644,"GNB":0.163798,"GNQ":0.184971,"GRC":5.685696,"GRD":0.634446,"GRL":6.977839,"GTM":0.420645,"GUF":4.975943,"GUY":1.600469,"HKG":3.981645,"HND":0.477659,"HRV":3.950065,"HTI":0.147727,"HUN":8.366138,"IDN":0.662406,"IND":0.472227,"IRL":7.408408,"IRN":3.397496,"IRQ":2.580906,"ISL":6.504969,"ISR":5.958399,"ITA":6.331475,"JAM":2.886491,"JOR":2.902811,"JPN":7.35355,"KAZ":15.632334,"KEN":0.254278,"KGZ":5.136289,"KHM":0.053241,"KIR":0.342852,"KNA":1.204131,"KOR":3.723337,"KSV":0,"KWT":12.408335,"LAO":0.050661,"LBN":2.234381,"LBR":0.334977,"LBY":8.805377,"LCA":0.798754,"LIE":0,"LKA":0.31005,"LSO":0,"LTU":10.299138,"LUX":22.88756,"LVA":9.039904,"MAC":2.559611,"MAR":0.828027,"MDA":8.736434,"MDG":0.066775,"MDV":0.286028,"MEX":3.850786,"MHL":0,"MKD":6.436041,"MLI":0.052979,"MLT":2.906529,"MMR":0.162424,"MNE":2.863065,"MNG":3.817049,"MOZ":0.160686,"MRT":0.569738,"MSR":1.957265,"MTQ":2.713572,"MUS":0.598429,"MWI":0.080992,"MYS":2.66205,"MYT":0,"NAM":0,"NCL":7.47041,"NER":0.142145,"NGA":0.752414,"NIC":0.557017,"NIU":1.136476,"NLD":9.558852,"NOR":7.750297,"NPL":0.029414,"NRU":15.906027,"NZL":5.589769,"OMN":6.247463,"PAK":0.439416,"PAN":1.658172,"PER":1.083176,"PHL":0.674824,"PLW":0,"PNG":0.607769,"POL":11.523488,"PRI":0,"PRK":6.667771,"PRT":3.007056,"PRY":0.421119,"PSE":0,"PYF":2.353414,"QAT":34.02156,"REU":1.562005,"ROU":8.932269,"RUS":15.323305,"RWA":0.118811,"SAU":13.69289,"SDN":0.190617,"SEN":0.423115,"SGP":13.021566,"SHN":0.557347,"SLB":0.551839,"SLE":0.192101,"SLV":0.402024,"SOM":0.152107,"SPM":5.380323,"SRB":6.405402,"SSD":0.07224,"STP":0.535412,"SUR":3.616301,"SVK":11.407451,"SVN":7.341507,"SWE":6.973976,"SWZ":0.413629,"SXM":35.808518,"SYC":1.479651,"SYR":2.823915,"TCA":0,"TCD":0.042226,"TGO":0.199456,"THA":0.857725,"TJK":2.628008,"TKM":9.709001,"TLS":0,"TON":0.491148,"TTO":13.895604,"TUN":1.586422,"TUR":1.909824,"TUV":0,"TWN":4.381198,"TZA":0.103743,"UGA":0.04312,"UKR":13.508021,"URY":1.27069,"USA":19.225551,"UZB":5.332127,"VCT":0.434266,"VEN":5.627512,"VGB":3.272757,"VNM":0.337997,"VUT":0.433633,"WLF":0,"WSM":0.395055,"YEM":0.613984,"ZAF":9.160535,"ZMB":0.518317,"ZWE":1.28604},"1984":{"ABW":12.468315,"AFG":0.275442,"AGO":0.518403,"AIA":0,"ALB":2.49891,"AND":0,"ARE":35.278261,"ARG":3.568377,"ARM":2.423355,"ATG":2.242281,"AUS":15.171372,"AUT":7.172534,"AZE":7.008687,"BDI":0.0454,"BEL":10.63103,"BEN":0.104423,"BES":14.402612,"BFA":0.060031,"BGD":0.097046,"BGR":9.737125,"BHR":21.9464,"BHS":7.687584,"BIH":4.212834,"BLR":9.857612,"BLZ":1.07818,"BMU":8.032031,"BOL":0.644496,"BRA":1.247875,"BRB":2.903445,"BRN":8.926095,"BTN":0.109102,"BWA":0.950026,"CAF":0.059529,"CAN":16.609331,"CHE":6.074521,"CHL":1.81078,"CHN":1.766785,"CIV":0.533525,"CMR":0.636576,"COD":0.131582,"COG":0.569257,"COK":1.298907,"COL":1.697566,"COM":0.130262,"CPV":0.251204,"CRI":0.734719,"CUB":3.236855,"CUW":76.148382,"CYP":4.49445,"CZE":18.172156,"DEU":13.320402,"DJI":0.92042,"DMA":0.61121,"DNK":9.93036,"DOM":1.176431,"DZA":3.316261,"ECU":2.348393,"EGY":1.30873,"ERI":0,"ESP":5.156994,"EST":23.740889,"ETH":0.042096,"FIN":8.633617,"FJI":0.812328,"FRA":7.511978,"FRO":11.040301,"FSM":0,"GAB":7.174634,"GBR":9.353447,"GEO":2.761212,"GHA":0.192398,"GIN":0.181095,"GLP":2.254917,"GMB":0.208788,"GNB":0.181916,"GNQ":0.225165,"GRC":5.778514,"GRD":0.625269,"GRL":10.789164,"GTM":0.440611,"GUF":4.334667,"GUY":1.808375,"HKG":4.166962,"HND":0.459267,"HRV":4.14455,"HTI":0.147575,"HUN":8.558934,"IDN":0.692779,"IND":0.473931,"IRL":7.318807,"IRN":3.284437,"IRQ":2.58639,"ISL":7.550771,"ISR":5.763668,"ITA":6.439412,"JAM":2.270489,"JOR":3.135766,"JPN":7.778403,"KAZ":15.485833,"KEN":0.226794,"KGZ":5.08199,"KHM":0.057524,"KIR":0.336466,"KNA":1.210382,"KOR":3.951875,"KSV":0,"KWT":15.592867,"LAO":0.05033,"LBN":2.122036,"LBR":0.319858,"LBY":7.932624,"LCA":0.869543,"LIE":0,"LKA":0.242689,"LSO":0,"LTU":10.309042,"LUX":24.616575,"LVA":9.06151,"MAC":2.185754,"MAR":0.808774,"MDA":8.729502,"MDG":0.086507,"MDV":0.317938,"MEX":3.764456,"MHL":0,"MKD":6.738683,"MLI":0.054149,"MLT":3.938351,"MMR":0.1811,"MNE":3.006819,"MNG":3.432642,"MOZ":0.121587,"MRT":0.514268,"MSR":1.968481,"MTQ":4.022117,"MUS":0.619151,"MWI":0.075342,"MYS":2.369151,"MYT":0,"NAM":0,"NCL":7.668994,"NER":0.142095,"NGA":0.853307,"NIC":0.50239,"NIU":1.206057,"NLD":9.976013,"NOR":8.180438,"NPL":0.040919,"NRU":15.332431,"NZL":5.949105,"OMN":6.324852,"PAK":0.452719,"PAN":1.335156,"PER":1.069835,"PHL":0.576125,"PLW":0,"PNG":0.605877,"POL":11.727432,"PRI":0,"PRK":7.070651,"PRT":2.88665,"PRY":0.433415,"PSE":0,"PYF":2.520743,"QAT":35.314718,"REU":1.695428,"ROU":8.404912,"RUS":15.346234,"RWA":0.104656,"SAU":12.632643,"SDN":0.167048,"SEN":0.51786,"SGP":12.18142,"SHN":0.553725,"SLB":0.533367,"SLE":0.167896,"SLV":0.332126,"SOM":0.112181,"SPM":5.928803,"SRB":6.7346,"SSD":0.063371,"STP":0.490885,"SUR":4.056359,"SVK":11.720689,"SVN":7.711699,"SWE":6.845789,"SWZ":0.492282,"SXM":81.50211,"SYC":1.468951,"SYR":3.225824,"TCA":0,"TCD":0.043933,"TGO":0.214891,"THA":0.90894,"TJK":2.576321,"TKM":9.548773,"TLS":0,"TON":0.49094,"TTO":14.774808,"TUN":1.578277,"TUR":1.972821,"TUV":0,"TWN":4.40874,"TZA":0.107378,"UGA":0.039706,"UKR":13.574793,"URY":1.142907,"USA":20.029282,"UZB":5.246446,"VCT":0.597776,"VEN":5.485849,"VGB":3.160354,"VNM":0.299539,"VUT":0.423183,"WLF":0,"WSM":0.395445,"YEM":0.667908,"ZAF":9.631073,"ZMB":0.432246,"ZWE":1.176348},"1985":{"ABW":14.524826,"AFG":0.333081,"AGO":0.468989,"AIA":0,"ALB":2.484938,"AND":0,"ARE":35.992199,"ARG":3.319299,"ARM":2.588574,"ATG":3.830279,"AUS":15.266299,"AUT":7.189302,"AZE":7.43148,"BDI":0.046651,"BEL":10.526202,"BEN":0.155304,"BES":16.72768,"BFA":0.059695,"BGD":0.106182,"BGR":10.005672,"BHR":23.4496,"BHS":6.138077,"BIH":4.264281,"BLR":10.557066,"BLZ":1.165765,"BMU":8.104008,"BOL":0.643595,"BRA":1.312947,"BRB":3.27908,"BRN":11.678929,"BTN":0.128554,"BWA":1.016791,"CAF":0.063146,"CAN":16.317906,"CHE":6.148683,"CHL":1.726681,"CHN":1.884557,"CIV":0.700876,"CMR":0.659981,"COD":0.11727,"COG":0.618274,"COK":1.319805,"COL":1.639469,"COM":0.126799,"CPV":0.247951,"CRI":0.809123,"CUB":3.207794,"CUW":89.223465,"CYP":4.298413,"CZE":17.918267,"DEU":13.448403,"DJI":0.896092,"DMA":0.665289,"DNK":11.732765,"DOM":1.128353,"DZA":3.280594,"ECU":2.091207,"EGY":1.27523,"ERI":0,"ESP":5.196814,"EST":25.446324,"ETH":0.044649,"FIN":10.10757,"FJI":0.787659,"FRA":7.35322,"FRO":11.335688,"FSM":0,"GAB":7.35397,"GBR":9.879895,"GEO":2.95443,"GHA":0.241855,"GIN":0.179502,"GLP":2.252602,"GMB":0.201187,"GNB":0.191324,"GNQ":0.174301,"GRC":6.074296,"GRD":0.619313,"GRL":9.569635,"GTM":0.440843,"GUF":4.214837,"GUY":1.835151,"HKG":4.228152,"HND":0.42977,"HRV":4.204285,"HTI":0.148829,"HUN":8.140983,"IDN":0.733435,"IND":0.509576,"IRL":7.630224,"IRN":3.382053,"IRQ":2.805436,"ISL":6.716844,"ISR":5.884506,"ITA":6.514926,"JAM":2.199685,"JOR":3.060708,"JPN":7.533092,"KAZ":16.41777,"KEN":0.191031,"KGZ":5.388626,"KHM":0.056628,"KIR":0.329556,"KNA":1.21716,"KOR":4.092811,"KSV":0,"KWT":15.389391,"LAO":0.054839,"LBN":2.406426,"LBR":0.31972,"LBY":8.414643,"LCA":0.966019,"LIE":0,"LKA":0.243381,"LSO":0,"LTU":11.019218,"LUX":25.205182,"LVA":9.714574,"MAC":2.547098,"MAR":0.79166,"MDA":9.315575,"MDG":0.102258,"MDV":0.346417,"MEX":3.838157,"MHL":0,"MKD":6.829928,"MLI":0.049512,"MLT":3.431871,"MMR":0.181001,"MNE":3.052972,"MNG":4.687058,"MOZ":0.089506,"MRT":0.375576,"MSR":2.307928,"MTQ":3.183547,"MUS":0.689387,"MWI":0.07258,"MYS":2.40465,"MYT":0,"NAM":0,"NCL":9.085392,"NER":0.138349,"NGA":0.833113,"NIC":0.527456,"NIU":1.286517,"NLD":10.125585,"NOR":7.789432,"NPL":0.03854,"NRU":14.985685,"NZL":6.687752,"OMN":6.368592,"PAK":0.48201,"PAN":1.241138,"PER":0.985213,"PHL":0.508991,"PLW":0,"PNG":0.616409,"POL":11.955834,"PRI":0,"PRK":7.466031,"PRT":2.713809,"PRY":0.437787,"PSE":0,"PYF":3.144846,"QAT":33.831349,"REU":1.656842,"ROU":8.608382,"RUS":16.434157,"RWA":0.098225,"SAU":13.376099,"SDN":0.19062,"SEN":0.406475,"SGP":12.061489,"SHN":0.550977,"SLB":0.542016,"SLE":0.176876,"SLV":0.403001,"SOM":0.129305,"SPM":5.295648,"SRB":6.848904,"SSD":0.072019,"STP":0.515538,"SUR":4.121838,"SVK":11.492167,"SVN":7.836702,"SWE":7.433213,"SWZ":0.625968,"SXM":87.438517,"SYC":2.214615,"SYR":2.788121,"TCA":0,"TCD":0.036141,"TGO":0.197521,"THA":0.944594,"TJK":2.698723,"TKM":10.022603,"TLS":0,"TON":0.490773,"TTO":17.272328,"TUN":1.587853,"TUR":2.148671,"TUV":0,"TWN":4.342687,"TZA":0.103586,"UGA":0.041021,"UKR":14.599636,"URY":1.085842,"USA":19.785905,"UZB":5.508357,"VCT":0.594666,"VEN":5.805353,"VGB":3.607938,"VNM":0.352733,"VUT":0.9083,"WLF":0,"WSM":0.462079,"YEM":0.776789,"ZAF":9.595049,"ZMB":0.408697,"ZWE":1.175271},"1986":{"ABW":2.781219,"AFG":0.299915,"AGO":0.448469,"AIA":0,"ALB":2.512552,"AND":0,"ARE":32.021639,"ARG":3.387211,"ARM":2.445942,"ATG":3.850167,"AUS":14.971195,"AUT":7.100142,"AZE":7.609279,"BDI":0.046511,"BEL":10.352819,"BEN":0.137102,"BES":3.182214,"BFA":0.058479,"BGD":0.116064,"BGR":10.253176,"BHR":24.440448,"BHS":5.624472,"BIH":4.42296,"BLR":11.900448,"BLZ":1.227243,"BMU":7.524958,"BOL":0.577076,"BRA":1.407967,"BRB":3.543009,"BRN":9.996423,"BTN":0.110107,"BWA":0.904144,"CAF":0.062399,"CAN":15.49651,"CHE":6.495947,"CHL":1.759028,"CHN":1.952376,"CIV":0.540922,"CMR":0.1971,"COD":0.105458,"COG":0.499973,"COK":1.332848,"COL":1.627307,"COM":0.113887,"CPV":0.170284,"CRI":0.905081,"CUB":3.277497,"CUW":17.124198,"CYP":4.850476,"CZE":18.039431,"DEU":13.463068,"DJI":0.889475,"DMA":0.668848,"DNK":11.506721,"DOM":1.239038,"DZA":3.324821,"ECU":1.601044,"EGY":1.446648,"ERI":0,"ESP":4.900459,"EST":25.275734,"ETH":0.052955,"FIN":10.819948,"FJI":0.805332,"FRA":7.050416,"FRO":10.67084,"FSM":0,"GAB":5.623692,"GBR":10.023534,"GEO":2.896125,"GHA":0.216892,"GIN":0.175726,"GLP":2.349915,"GMB":0.181349,"GNB":0.200411,"GNQ":0.202902,"GRC":5.86455,"GRD":0.653683,"GRL":6.0695,"GTM":0.449744,"GUF":3.978025,"GUY":1.358789,"HKG":4.647167,"HND":0.404152,"HRV":4.36871,"HTI":0.130229,"HUN":7.923339,"IDN":0.722298,"IND":0.534304,"IRL":8.120873,"IRN":3.017658,"IRQ":2.924753,"ISL":7.315283,"ISR":6.134056,"ITA":6.412318,"JAM":1.963484,"JOR":3.182532,"JPN":7.495338,"KAZ":16.414003,"KEN":0.202023,"KGZ":5.29966,"KHM":0.056433,"KIR":0.268362,"KNA":1.399508,"KOR":4.216759,"KSV":0,"KWT":17.900712,"LAO":0.054269,"LBN":2.260709,"LBR":0.313496,"LBY":8.919608,"LCA":0.978444,"LIE":0,"LKA":0.224311,"LSO":0,"LTU":9.730672,"LUX":24.747146,"LVA":8.838112,"MAC":2.923948,"MAR":0.818594,"MDA":8.998023,"MDG":0.107391,"MDV":0.408711,"MEX":3.849323,"MHL":0,"MKD":7.092486,"MLI":0.045547,"MLT":4.214592,"MMR":0.179822,"MNE":3.172649,"MNG":4.870848,"MOZ":0.07569,"MRT":0.207857,"MSR":2.647877,"MTQ":3.598297,"MUS":0.768749,"MWI":0.069338,"MYS":2.577451,"MYT":0,"NAM":0,"NCL":8.604716,"NER":0.121342,"NGA":0.853014,"NIC":0.585548,"NIU":1.367164,"NLD":9.869048,"NOR":8.363995,"NPL":0.038859,"NRU":18.906532,"NZL":6.992164,"OMN":6.806545,"PAK":0.48757,"PAN":1.217091,"PER":1.077526,"PHL":0.517284,"PLW":0,"PNG":0.585547,"POL":12.06964,"PRI":0,"PRK":7.996481,"PRT":3.018784,"PRY":0.455068,"PSE":0,"PYF":3.164603,"QAT":34.700525,"REU":1.763577,"ROU":8.927191,"RUS":16.305869,"RWA":0.091913,"SAU":15.174552,"SDN":0.195268,"SEN":0.392861,"SGP":12.401539,"SHN":0.548585,"SLB":0.53708,"SLE":0.175433,"SLV":0.395812,"SOM":0.133649,"SPM":7.599234,"SRB":7.133279,"SSD":0.073374,"STP":0.470752,"SUR":4.47771,"SVK":11.508684,"SVN":8.154979,"SWE":7.371769,"SWZ":0.627268,"SXM":15.435211,"SYC":2.413172,"SYR":2.848765,"TCA":0,"TCD":0.03651,"TGO":0.246532,"THA":0.946182,"TJK":2.528627,"TKM":10.73052,"TLS":0,"TON":0.490657,"TTO":14.267736,"TUN":1.562421,"TUR":2.30205,"TUV":0,"TWN":4.773525,"TZA":0.097649,"UGA":0.04532,"UKR":14.497252,"URY":1.040682,"USA":19.634184,"UZB":5.139536,"VCT":0.592093,"VEN":6.116153,"VGB":4.024605,"VNM":0.336235,"VUT":0.429518,"WLF":0,"WSM":0.484525,"YEM":0.714498,"ZAF":9.475849,"ZMB":0.415845,"ZWE":1.454743},"1987":{"ABW":6.935733,"AFG":0.301647,"AGO":0.541051,"AIA":0,"ALB":2.300132,"AND":0,"ARE":30.109831,"ARG":3.68006,"ARM":2.436889,"ATG":4.270197,"AUS":15.73574,"AUT":7.576735,"AZE":7.088051,"BDI":0.048306,"BEL":10.362265,"BEN":0.101027,"BES":2.80552,"BFA":0.061248,"BGD":0.117422,"BGR":10.295023,"BHR":24.478236,"BHS":5.561549,"BIH":4.291712,"BLR":10.88104,"BLZ":1.328623,"BMU":10.140401,"BOL":0.602243,"BRA":1.441272,"BRB":3.638255,"BRN":13.949317,"BTN":0.199585,"BWA":1.014808,"CAF":0.099459,"CAN":16.302299,"CHE":6.143408,"CHL":1.76196,"CHN":2.058381,"CIV":0.689266,"CMR":0.176635,"COD":0.116648,"COG":0.603152,"COK":1.327777,"COL":1.637876,"COM":0.120014,"CPV":0.231155,"CRI":0.931364,"CUB":3.285907,"CUW":15.2429,"CYP":5.542831,"CZE":17.825659,"DEU":13.22104,"DJI":0.85874,"DMA":0.672692,"DNK":11.392436,"DOM":1.447437,"DZA":3.55648,"ECU":1.54401,"EGY":1.41203,"ERI":0,"ESP":4.897541,"EST":24.48445,"ETH":0.059609,"FIN":11.664912,"FJI":0.625343,"FRA":6.969121,"FRO":10.721518,"FSM":0,"GAB":4.430289,"GBR":10.059908,"GEO":2.904217,"GHA":0.228053,"GIN":0.170586,"GLP":2.462968,"GMB":0.194321,"GNB":0.209167,"GNQ":0.238513,"GRC":6.239451,"GRD":0.728437,"GRL":4.322666,"GTM":0.468184,"GUF":4.283974,"GUY":1.712764,"HKG":5.034593,"HND":0.46154,"HRV":4.245667,"HTI":0.138099,"HUN":8.036577,"IDN":0.718464,"IND":0.558213,"IRL":8.602424,"IRN":3.137276,"IRQ":3.143977,"ISL":7.499271,"ISR":6.135252,"ITA":6.710243,"JAM":2.302428,"JOR":3.153228,"JPN":7.381521,"KAZ":15.96603,"KEN":0.243076,"KGZ":5.069788,"KHM":0.054669,"KIR":0.3143,"KNA":1.320614,"KOR":4.371118,"KSV":0,"KWT":15.317652,"LAO":0.053669,"LBN":2.262064,"LBR":0.319696,"LBY":8.269112,"LCA":1.071502,"LIE":0,"LKA":0.24336,"LSO":0,"LTU":9.657618,"LUX":23.783108,"LVA":7.188998,"MAC":3.113968,"MAR":0.855023,"MDA":8.539708,"MDG":0.117755,"MDV":0.394642,"MEX":3.945948,"MHL":0,"MKD":6.889611,"MLI":0.042187,"MLT":5.220005,"MMR":0.129296,"MNE":3.081334,"MNG":5.185509,"MOZ":0.075338,"MRT":1.751744,"MSR":2.659891,"MTQ":4.307074,"MUS":0.884815,"MWI":0.065177,"MYS":2.54958,"MYT":0,"NAM":0,"NCL":8.759074,"NER":0.130642,"NGA":0.670396,"NIC":0.616772,"NIU":1.408148,"NLD":10.322129,"NOR":7.948401,"NPL":0.046964,"NRU":17.987441,"NZL":7.324027,"OMN":6.131535,"PAK":0.508278,"PAN":1.384081,"PER":1.24296,"PHL":0.565979,"PLW":0,"PNG":0.648263,"POL":12.315493,"PRI":0,"PRK":8.823332,"PRT":3.113544,"PRY":0.501903,"PSE":0,"PYF":3.108303,"QAT":28.864585,"REU":1.884201,"ROU":9.341992,"RUS":16.226122,"RWA":0.090771,"SAU":13.516651,"SDN":0.151315,"SEN":0.350887,"SGP":11.301515,"SHN":0.547601,"SLB":0.544951,"SLE":0.126221,"SLV":0.476494,"SOM":0.138718,"SPM":8.142222,"SRB":6.947943,"SSD":0.056987,"STP":0.4596,"SUR":4.426632,"SVK":11.317325,"SVN":7.920842,"SWE":7.074514,"SWZ":0.574712,"SXM":12.685504,"SYC":2.924946,"SYR":3.186112,"TCA":0,"TCD":0.037325,"TGO":0.26093,"THA":1.061706,"TJK":2.383124,"TKM":10.603728,"TLS":0,"TON":0.564317,"TTO":14.202103,"TUN":1.481191,"TUR":2.506182,"TUV":0,"TWN":4.911309,"TZA":0.098239,"UGA":0.048113,"UKR":14.323123,"URY":1.15815,"USA":20.119187,"UZB":5.123539,"VCT":0.688414,"VEN":6.037603,"VGB":4.412269,"VNM":0.371972,"VUT":0.340336,"WLF":0,"WSM":0.48334,"YEM":0.723982,"ZAF":9.099413,"ZMB":0.376842,"ZWE":1.635152},"1988":{"ABW":9.51141,"AFG":0.275139,"AGO":0.456527,"AIA":0,"ALB":2.246147,"AND":0,"ARE":28.565743,"ARG":3.830954,"ARM":2.761149,"ATG":4.466756,"AUS":15.78613,"AUT":6.980339,"AZE":7.101781,"BDI":0.043091,"BEL":10.056752,"BEN":0.105151,"BES":2.739732,"BFA":0.06386,"BGD":0.131255,"BGR":9.836481,"BHR":25.122345,"BHS":5.908498,"BIH":4.405538,"BLR":11.108814,"BLZ":1.425216,"BMU":11.365245,"BOL":0.630031,"BRA":1.425572,"BRB":3.651183,"BRN":23.245836,"BTN":0.207768,"BWA":1.031276,"CAF":0.086869,"CAN":16.993027,"CHE":6.167823,"CHL":2.058039,"CHN":2.173954,"CIV":0.797287,"CMR":0.20019,"COD":0.117866,"COG":0.662547,"COK":1.313654,"COL":1.664199,"COM":0.125704,"CPV":0.207455,"CRI":0.968169,"CUB":3.416304,"CUW":15.036468,"CYP":5.476896,"CZE":17.528568,"DEU":13.112341,"DJI":0.721653,"DMA":0.780715,"DNK":10.751293,"DOM":1.425148,"DZA":3.452872,"ECU":1.722062,"EGY":1.368538,"ERI":0,"ESP":5.09152,"EST":24.366514,"ETH":0.059312,"FIN":10.524096,"FJI":0.71924,"FRA":6.896099,"FRO":11.235674,"FSM":0,"GAB":4.643603,"GBR":10.013472,"GEO":2.99409,"GHA":0.232502,"GIN":0.17164,"GLP":2.658659,"GMB":0.190667,"GNB":0.229223,"GNQ":0.246198,"GRC":6.625554,"GRD":0.953813,"GRL":9.966337,"GTM":0.473863,"GUF":5.009979,"GUY":1.850237,"HKG":5.16886,"HND":0.515887,"HRV":4.367825,"HTI":0.151644,"HUN":7.480622,"IDN":0.755408,"IND":0.589751,"IRL":8.542991,"IRN":3.360899,"IRQ":3.951614,"ISL":7.366921,"ISR":6.549065,"ITA":6.810591,"JAM":1.921809,"JOR":2.906715,"JPN":8.025064,"KAZ":16.655897,"KEN":0.216865,"KGZ":5.019364,"KHM":0.054496,"KIR":0.306696,"KNA":1.596089,"KOR":4.907212,"KSV":0,"KWT":15.416981,"LAO":0.052151,"LBN":2.124773,"LBR":0.331682,"LBY":8.991615,"LCA":1.189096,"LIE":0,"LKA":0.206074,"LSO":0,"LTU":9.70313,"LUX":24.367838,"LVA":7.007328,"MAC":2.969791,"MAR":0.88239,"MDA":8.810435,"MDG":0.114734,"MDV":0.451146,"MEX":3.87448,"MHL":0,"MKD":7.078273,"MLI":0.044448,"MLT":5.611934,"MMR":0.105141,"MNE":3.161648,"MNG":5.542018,"MOZ":0.077658,"MRT":1.670657,"MSR":2.674209,"MTQ":4.490295,"MUS":0.802112,"MWI":0.061361,"MYS":2.594263,"MYT":0,"NAM":0,"NCL":8.858225,"NER":0.12538,"NGA":0.779416,"NIC":0.555384,"NIU":1.418506,"NLD":9.863135,"NOR":8.474758,"NPL":0.052133,"NRU":17.46309,"NZL":7.674705,"OMN":6.477986,"PAK":0.533561,"PAN":1.241434,"PER":1.183238,"PHL":0.637973,"PLW":0,"PNG":0.597448,"POL":11.748362,"PRI":0,"PRK":9.864132,"PRT":3.249182,"PRY":0.557621,"PSE":0,"PYF":2.851433,"QAT":28.867868,"REU":2.121056,"ROU":9.341116,"RUS":16.638233,"RWA":0.099556,"SAU":13.745809,"SDN":0.216574,"SEN":0.381072,"SGP":12.248084,"SHN":1.097663,"SLB":0.51634,"SLE":0.112913,"SLV":0.470573,"SOM":0.140166,"SPM":10.432142,"SRB":7.154123,"SSD":0.083776,"STP":0.415953,"SUR":4.659802,"SVK":11.080286,"SVN":8.180691,"SWE":6.781317,"SWZ":0.548839,"SXM":11.593342,"SYC":2.843371,"SYR":3.146323,"TCA":0,"TCD":0.012028,"TGO":0.263712,"THA":1.226177,"TJK":2.494589,"TKM":10.549329,"TLS":0,"TON":0.71081,"TTO":12.7211,"TUN":1.533916,"TUR":2.385947,"TUV":0,"TWN":5.595535,"TZA":0.091437,"UGA":0.052329,"UKR":14.157585,"URY":1.555018,"USA":20.844942,"UZB":5.157658,"VCT":0.588458,"VEN":6.156756,"VGB":4.519427,"VNM":0.360297,"VUT":0.459506,"WLF":0,"WSM":0.503261,"YEM":0.770973,"ZAF":9.163396,"ZMB":0.426225,"ZWE":1.675191},"1989":{"ABW":10.039755,"AFG":0.259047,"AGO":0.430329,"AIA":0,"ALB":2.737864,"AND":0,"ARE":30.240498,"ARG":3.638072,"ARM":2.730637,"ATG":4.491043,"AUS":16.520441,"AUT":7.04732,"AZE":7.015991,"BDI":0.049774,"BEL":10.74673,"BEN":0.114498,"BES":5.166831,"BFA":0.092267,"BGD":0.12758,"BGR":9.822581,"BHR":23.417147,"BHS":7.328193,"BIH":4.374446,"BLR":10.503864,"BLZ":1.681345,"BMU":13.665178,"BOL":0.714973,"BRA":1.428649,"BRB":3.820874,"BRN":24.987625,"BTN":0.114456,"BWA":1.097789,"CAF":0.091462,"CAN":16.990099,"CHE":5.931063,"CHL":2.43763,"CHN":2.17174,"CIV":0.721105,"CMR":0.683339,"COD":0.124964,"COG":0.644896,"COK":1.298984,"COL":1.653748,"COM":0.122254,"CPV":0.225068,"CRI":0.952694,"CUB":3.39303,"CUW":28.67275,"CYP":5.696734,"CZE":16.723835,"DEU":12.783045,"DJI":0.74531,"DMA":0.837785,"DNK":9.507109,"DOM":1.469607,"DZA":3.206502,"ECU":1.973883,"EGY":1.289402,"ERI":0,"ESP":5.788956,"EST":24.828593,"ETH":0.060484,"FIN":10.564648,"FJI":0.80911,"FRA":7.11552,"FRO":12.190187,"FSM":0,"GAB":6.019247,"GBR":10.189486,"GEO":2.974103,"GHA":0.218903,"GIN":0.170178,"GLP":2.791684,"GMB":0.179584,"GNB":0.240892,"GNQ":0.261469,"GRC":7.171069,"GRD":1.033943,"GRL":8.547434,"GTM":0.473798,"GUF":6.164891,"GUY":1.571891,"HKG":5.239477,"HND":0.545472,"HRV":4.346653,"HTI":0.15081,"HUN":7.301716,"IDN":0.735815,"IND":0.634558,"IRL":8.630028,"IRN":3.545508,"IRQ":4.141691,"ISL":7.494633,"ISR":6.727173,"ITA":7.136855,"JAM":2.833147,"JOR":2.742338,"JPN":8.288119,"KAZ":15.836018,"KEN":0.227288,"KGZ":4.803729,"KHM":0.052581,"KIR":0.299363,"KNA":1.608899,"KOR":5.130208,"KSV":0,"KWT":16.186169,"LAO":0.055045,"LBN":2.189978,"LBR":0.263038,"LBY":8.975338,"LCA":1.173882,"LIE":0,"LKA":0.202878,"LSO":0,"LTU":9.750458,"LUX":26.12098,"LVA":6.65749,"MAC":3.052102,"MAR":0.938403,"MDA":8.548566,"MDG":0.080248,"MDV":0.571615,"MEX":4.031724,"MHL":0,"MKD":7.030739,"MLI":0.047399,"MLT":5.993711,"MMR":0.112063,"MNE":3.133669,"MNG":4.931577,"MOZ":0.079047,"MRT":1.43371,"MSR":2.690655,"MTQ":3.858852,"MUS":0.976422,"MWI":0.060841,"MYS":2.942623,"MYT":0,"NAM":0,"NCL":9.468439,"NER":0.127914,"NGA":0.454146,"NIC":0.355572,"NIU":1.43125,"NLD":10.886316,"NOR":8.098726,"NPL":0.046673,"NRU":16.930153,"NZL":7.634996,"OMN":5.826512,"PAK":0.540131,"PAN":1.046586,"PER":1.006372,"PHL":0.647069,"PLW":0,"PNG":0.540239,"POL":11.12773,"PRI":0,"PRK":10.209766,"PRT":4.073946,"PRY":0.562707,"PSE":0,"PYF":2.625112,"QAT":33.479746,"REU":2.149263,"ROU":9.373316,"RUS":16.321434,"RWA":0.095807,"SAU":13.249585,"SDN":0.16559,"SEN":0.500131,"SGP":13.919924,"SHN":1.10295,"SLB":0.512513,"SLE":0.089857,"SLV":0.483273,"SOM":0.135326,"SPM":16.23548,"SRB":7.118849,"SSD":0.066449,"STP":0.405569,"SUR":4.534626,"SVK":10.533557,"SVN":8.11277,"SWE":6.52803,"SWZ":0.527895,"SXM":20.527144,"SYC":3.333608,"SYR":2.847848,"TCA":0,"TCD":0.018092,"TGO":0.272124,"THA":1.414199,"TJK":2.392533,"TKM":10.393158,"TLS":0,"TON":0.707631,"TTO":12.82033,"TUN":1.591548,"TUR":2.580796,"TUV":0,"TWN":6.034312,"TZA":0.084693,"UGA":0.047009,"UKR":13.276248,"URY":1.566434,"USA":20.951413,"UZB":5.177115,"VCT":0.685043,"VEN":5.632656,"VGB":4.370287,"VNM":0.265753,"VUT":0.423207,"WLF":0,"WSM":0.50196,"YEM":0.771813,"ZAF":8.811033,"ZMB":0.343066,"ZWE":1.636511},"1990":{"ABW":7.415875,"AFG":0.189281,"AGO":0.4303,"AIA":6.16835,"ALB":1.675415,"AND":7.592152,"ARE":27.21035,"ARG":3.434042,"ARM":2.515063,"ATG":3.47145,"AUS":16.315938,"AUT":8.093169,"AZE":6.909932,"BDI":0.038085,"BEL":12.078108,"BEN":0.112858,"BES":5.479222,"BFA":0.063799,"BGD":0.131422,"BGR":8.747849,"BHR":23.976315,"BHS":7.472054,"BIH":4.319349,"BLR":10.389298,"BLZ":1.705689,"BMU":8.734435,"BOL":1.410174,"BRA":1.450887,"BRB":4.133696,"BRN":23.626707,"BTN":0.229639,"BWA":2.012986,"CAF":0.065214,"CAN":16.567775,"CHE":6.579544,"CHL":2.465086,"CHN":2.153806,"CIV":0.401453,"CMR":0.227881,"COD":0.118068,"COG":0.422526,"COK":2.567774,"COL":1.745255,"COM":0.152979,"CPV":0.492469,"CRI":0.92235,"CUB":2.789998,"CUW":30.770578,"CYP":5.901353,"CZE":15.940946,"DEU":13.254082,"DJI":0.476114,"DMA":0.843741,"DNK":10.415702,"DOM":1.253473,"DZA":3.007187,"ECU":1.574936,"EGY":1.314656,"ERI":0,"ESP":5.948293,"EST":23.507242,"ETH":0.062377,"FIN":11.413581,"FJI":1.026639,"FRA":6.973989,"FRO":14.816824,"FSM":0,"GAB":4.562154,"GBR":10.521595,"GEO":2.957882,"GHA":0.245412,"GIN":0.157997,"GLP":3.407935,"GMB":0.190134,"GNB":0.176886,"GNQ":0.133795,"GRC":8.099007,"GRD":1.072784,"GRL":11.232324,"GTM":0.547316,"GUF":6.321482,"GUY":1.510491,"HKG":4.649712,"HND":0.495654,"HRV":4.715053,"HTI":0.143675,"HUN":7.05721,"IDN":0.794885,"IND":0.664019,"IRL":9.452191,"IRN":3.762862,"IRQ":2.778117,"ISL":8.688983,"ISR":7.458352,"ITA":7.744476,"JAM":3.146769,"JOR":3.009959,"JPN":9.36344,"KAZ":16.528665,"KEN":0.245538,"KGZ":4.396677,"KHM":0.141448,"KIR":0.292636,"KNA":2.614824,"KOR":5.677938,"KSV":0,"KWT":22.572201,"LAO":0.118894,"LBN":2.189441,"LBR":0.211394,"LBY":8.617873,"LCA":1.261664,"LIE":6.917116,"LKA":0.222669,"LSO":0.81875,"LTU":9.447749,"LUX":31.01069,"LVA":7.310724,"MAC":2.950224,"MAR":0.907499,"MDA":8.154617,"MDG":0.078234,"MDV":0.765515,"MEX":3.879597,"MHL":0,"MKD":6.938951,"MLI":0.047204,"MLT":6.5524,"MMR":0.10563,"MNE":3.08209,"MNG":4.529892,"MOZ":0.074322,"MRT":0.425574,"MSR":2.712818,"MTQ":4.587014,"MUS":1.340869,"MWI":0.076827,"MYS":3.098087,"MYT":0.723044,"NAM":0,"NCL":8.892699,"NER":0.071892,"NGA":0.408104,"NIC":0.483452,"NIU":2.893012,"NLD":10.827154,"NOR":8.274402,"NPL":0.036777,"NRU":12.979371,"NZL":7.506502,"OMN":6.219059,"PAK":0.587687,"PAN":1.074299,"PER":0.967963,"PHL":0.671706,"PLW":0,"PNG":0.557425,"POL":9.899408,"PRI":0,"PRK":5.691425,"PRT":4.529181,"PRY":0.526124,"PSE":0.40527,"PYF":2.082913,"QAT":25.836184,"REU":1.912576,"ROU":7.595993,"RUS":17.126807,"RWA":0.071567,"SAU":13.027184,"SDN":0.226111,"SEN":0.416508,"SGP":14.405216,"SHN":1.108959,"SLB":0.452107,"SLE":0.11944,"SLV":0.461149,"SOM":0.104428,"SPM":14.484503,"SRB":7.067046,"SSD":0.091329,"STP":0.395802,"SUR":4.209189,"SVK":11.683449,"SVN":7.600537,"SWE":6.735769,"SWZ":1.12407,"SXM":20.488295,"SYC":2.114134,"SYR":2.985361,"TCA":5.319669,"TCD":0.064765,"TGO":0.252233,"THA":1.56994,"TJK":2.224887,"TKM":8.415618,"TLS":0,"TON":0.853586,"TTO":13.407755,"TUN":1.555219,"TUR":2.791844,"TUV":1.197125,"TWN":6.027298,"TZA":0.080604,"UGA":0.043263,"UKR":13.681577,"URY":1.272786,"USA":20.648255,"UZB":5.023147,"VCT":0.716598,"VEN":6.168074,"VGB":4.22309,"VNM":0.318305,"VUT":0.43711,"WLF":1.361677,"WSM":0.52285,"YEM":0.711783,"ZAF":7.847274,"ZMB":0.313165,"ZWE":1.537647},"1991":{"ABW":7.828598,"AFG":0.178155,"AGO":0.414113,"AIA":5.952884,"ALB":1.299249,"AND":7.336725,"ARE":28.218434,"ARG":3.549404,"ARM":2.010145,"ATG":3.339598,"AUS":16.184767,"AUT":8.476922,"AZE":6.627126,"BDI":0.042568,"BEL":12.352208,"BEN":0.117069,"BES":4.330355,"BFA":0.066902,"BGD":0.134947,"BGR":7.053354,"BHR":22.144599,"BHS":7.233552,"BIH":3.050445,"BLR":9.951756,"BLZ":2.181163,"BMU":9.306563,"BOL":1.448637,"BRA":1.496017,"BRB":4.63373,"BRN":19.66009,"BTN":0.30905,"BWA":1.90819,"CAF":0.065743,"CAN":16.060949,"CHE":6.788921,"CHL":2.282114,"CHN":2.226241,"CIV":0.348352,"CMR":0.226567,"COD":0.084222,"COG":0.441476,"COK":2.540328,"COL":1.702723,"COM":0.149119,"CPV":0.442368,"CRI":1.014972,"CUB":2.535998,"CUW":24.621406,"CYP":6.43602,"CZE":14.449585,"DEU":12.704246,"DJI":0.454706,"DMA":0.847891,"DNK":12.44591,"DOM":1.310492,"DZA":3.015502,"ECU":1.511955,"EGY":1.318793,"ERI":0,"ESP":6.181858,"EST":21.805084,"ETH":0.059244,"FIN":11.007253,"FJI":0.834614,"FRA":7.385745,"FRO":14.011023,"FSM":0,"GAB":4.476956,"GBR":10.62445,"GEO":2.982221,"GHA":0.26568,"GIN":0.155073,"GLP":3.572643,"GMB":0.182602,"GNB":0.176959,"GNQ":0.136506,"GRC":8.026476,"GRD":1.101867,"GRL":10.954615,"GTM":0.530693,"GUF":6.849649,"GUY":1.487077,"HKG":4.805153,"HND":0.486246,"HRV":3.50654,"HTI":0.138145,"HUN":6.714019,"IDN":0.943374,"IND":0.692245,"IRL":9.60804,"IRN":3.825324,"IRQ":2.531911,"ISL":8.125511,"ISR":7.313339,"ITA":7.73128,"JAM":3.213689,"JOR":2.701278,"JPN":9.428065,"KAZ":15.858132,"KEN":0.196877,"KGZ":3.580871,"KHM":0.140872,"KIR":0.286952,"KNA":2.620887,"KOR":6.196994,"KSV":0,"KWT":11.135823,"LAO":0.123035,"LBN":2.213183,"LBR":0.191253,"LBY":9.815783,"LCA":1.295256,"LIE":7.073819,"LKA":0.237603,"LSO":0.835136,"LTU":9.97779,"LUX":32.202855,"LVA":6.688929,"MAC":3.012975,"MAR":0.947978,"MDA":6.576874,"MDG":0.082498,"MDV":0.662882,"MEX":3.96073,"MHL":0,"MKD":4.92713,"MLI":0.046679,"MLT":6.070759,"MMR":0.101705,"MNE":2.168225,"MNG":5.43608,"MOZ":0.069964,"MRT":0.420252,"MSR":2.773394,"MTQ":4.191238,"MUS":1.376996,"MWI":0.079192,"MYS":3.651187,"MYT":0.770289,"NAM":0.745422,"NCL":9.677623,"NER":0.065873,"NGA":0.429227,"NIC":0.459023,"NIU":2.934722,"NLD":11.313353,"NOR":7.868582,"NPL":0.050982,"NRU":12.580893,"NZL":7.520279,"OMN":6.118038,"PAK":0.566066,"PAN":1.240782,"PER":0.919182,"PHL":0.689595,"PLW":0,"PNG":0.543496,"POL":9.794605,"PRI":0,"PRK":5.342941,"PRT":4.720577,"PRY":0.504666,"PSE":0.398788,"PYF":2.023802,"QAT":38.074499,"REU":2.466922,"ROU":6.212778,"RUS":16.203734,"RWA":0.063072,"SAU":17.32561,"SDN":0.208191,"SEN":0.435785,"SGP":14.175219,"SHN":1.115882,"SLB":0.47178,"SLE":0.133064,"SLV":0.577674,"SOM":0.105097,"SPM":16.153677,"SRB":5.020387,"SSD":0.083503,"STP":0.386988,"SUR":4.863544,"SVK":10.091196,"SVN":7.022947,"SWE":6.743006,"SWZ":0.980128,"SXM":15.266292,"SYC":2.399978,"SYR":3.301509,"TCA":5.052153,"TCD":0.06367,"TGO":0.263095,"THA":1.694872,"TJK":1.752809,"TKM":8.540125,"TLS":0,"TON":0.888153,"TTO":13.295599,"TUN":1.781745,"TUR":2.858593,"TUV":0.783408,"TWN":6.432018,"TZA":0.083867,"UGA":0.042913,"UKR":12.241188,"URY":1.444063,"USA":20.134295,"UZB":4.875584,"VCT":0.747225,"VEN":5.68827,"VGB":4.554382,"VNM":0.312696,"VUT":0.426383,"WLF":1.347257,"WSM":0.564691,"YEM":0.656842,"ZAF":7.969178,"ZMB":0.302242,"ZWE":1.493719},"1992":{"ABW":7.673353,"AFG":0.122916,"AGO":0.408822,"AIA":6.184314,"ALB":0.761899,"AND":7.099907,"ARE":27.292416,"ARG":3.611462,"ARM":1.640187,"ATG":3.229991,"AUS":16.293502,"AUT":7.683372,"AZE":7.349459,"BDI":0.037641,"BEL":12.228685,"BEN":0.122934,"BES":3.535458,"BFA":0.065657,"BGD":0.138219,"BGR":6.617757,"BHR":19.610753,"BHS":6.627017,"BIH":3.514888,"BLR":8.923616,"BLZ":1.867629,"BMU":7.915778,"BOL":1.489535,"BRA":1.498395,"BRB":3.74096,"BRN":18.781209,"BTN":0.374967,"BWA":1.954897,"CAF":0.06491,"CAN":16.359691,"CHE":6.695084,"CHL":2.320248,"CHN":2.306772,"CIV":0.29938,"CMR":0.223628,"COD":0.07326,"COG":0.511378,"COK":2.51879,"COL":1.811916,"COM":0.153681,"CPV":0.470055,"CRI":1.126411,"CUB":1.909645,"CUW":20.36979,"CYP":6.808094,"CZE":14.13163,"DEU":12.03842,"DJI":0.482108,"DMA":0.848246,"DNK":11.282227,"DOM":1.402681,"DZA":2.986481,"ECU":2.012024,"EGY":1.332573,"ERI":0,"ESP":6.375635,"EST":15.855102,"ETH":0.056463,"FIN":10.762348,"FJI":0.928133,"FRA":7.151238,"FRO":14.096903,"FSM":1.317563,"GAB":4.739459,"GBR":10.326096,"GEO":2.915816,"GHA":0.225455,"GIN":0.154986,"GLP":3.551061,"GMB":0.175536,"GNB":0.175516,"GNQ":0.131553,"GRC":8.109611,"GRD":1.160412,"GRL":10.695302,"GTM":0.618089,"GUF":6.666437,"GUY":1.39675,"HKG":5.479409,"HND":0.524496,"HRV":3.41215,"HTI":0.123307,"HUN":5.986931,"IDN":1.057596,"IND":0.722197,"IRL":9.493149,"IRN":3.822253,"IRQ":3.203004,"ISL":8.583735,"ISR":8.284953,"ITA":7.729909,"JAM":3.166357,"JOR":3.099185,"JPN":9.478141,"KAZ":14.387715,"KEN":0.219113,"KGZ":2.461701,"KHM":0.138745,"KIR":0.329238,"KNA":2.687531,"KOR":6.708737,"KSV":0,"KWT":18.29433,"LAO":0.129952,"LBN":2.597024,"LBR":0.189023,"LBY":8.329791,"LCA":1.451386,"LIE":6.996061,"LKA":0.28973,"LSO":0.853649,"LTU":5.58559,"LUX":31.185757,"LVA":5.330071,"MAC":2.902704,"MAR":0.973863,"MDA":4.667078,"MDG":0.077702,"MDV":0.965275,"MEX":3.915375,"MHL":1.602499,"MKD":5.443284,"MLI":0.049677,"MLT":6.163495,"MMR":0.117414,"MNE":2.363162,"MNG":4.892753,"MOZ":0.07514,"MRT":0.421419,"MSR":2.899881,"MTQ":4.518296,"MUS":1.526238,"MWI":0.076976,"MYS":3.938153,"MYT":0.775634,"NAM":0.787101,"NCL":8.458347,"NER":0.05933,"NGA":0.461812,"NIC":0.535922,"NIU":2.981286,"NLD":11.221618,"NOR":8.037919,"NPL":0.059556,"NRU":11.93721,"NZL":7.973508,"OMN":5.990578,"PAK":0.588477,"PAN":1.609895,"PER":0.910555,"PHL":0.748221,"PLW":12.362909,"PNG":0.529674,"POL":9.535348,"PRI":0,"PRK":4.57004,"PRT":5.107851,"PRY":0.603205,"PSE":0.396537,"PYF":1.885211,"QAT":56.823125,"REU":2.611357,"ROU":5.767735,"RUS":13.216354,"RWA":0.062619,"SAU":18.295717,"SDN":0.183162,"SEN":0.429201,"SGP":14.695811,"SHN":1.124271,"SLB":0.468766,"SLE":0.074105,"SLV":0.59738,"SOM":0.105901,"SPM":14.943373,"SRB":5.49937,"SSD":0.073311,"STP":0.379091,"SUR":4.839929,"SVK":9.220143,"SVN":6.971898,"SWE":6.676746,"SWZ":0.899005,"SXM":11.965639,"SYC":2.378005,"SYR":3.235058,"TCA":5.067773,"TCD":0.064526,"TGO":0.25096,"THA":1.842827,"TJK":1.29205,"TKM":8.148542,"TLS":0,"TON":0.70135,"TTO":14.860159,"TUN":1.691668,"TUR":2.913952,"TUV":0.774139,"TWN":6.786011,"TZA":0.078953,"UGA":0.042431,"UKR":11.375081,"URY":1.630731,"USA":20.281035,"UZB":5.140987,"VCT":0.744308,"VEN":5.100214,"VGB":5.114834,"VNM":0.307592,"VUT":0.392793,"WLF":1.332557,"WSM":0.582618,"YEM":0.684066,"ZAF":7.215516,"ZMB":0.300296,"ZWE":1.570592},"1993":{"ABW":8.962521,"AFG":0.106182,"AGO":0.440886,"AIA":7.230786,"ALB":0.708332,"AND":6.937048,"ARE":29.490413,"ARG":3.461271,"ARM":0.744802,"ATG":3.283653,"AUS":16.383765,"AUT":7.674692,"AZE":6.253931,"BDI":0.040893,"BEL":12.089394,"BEN":0.141499,"BES":5.412099,"BFA":0.063673,"BGD":0.141625,"BGR":6.784696,"BHR":25.461367,"BHS":6.052331,"BIH":3.190625,"BLR":7.686841,"BLZ":1.943546,"BMU":9.169513,"BOL":1.53096,"BRA":1.541938,"BRB":4.216717,"BRN":17.43763,"BTN":0.330425,"BWA":2.184976,"CAF":0.064049,"CAN":16.196069,"CHE":6.287645,"CHL":2.425519,"CHN":2.443147,"CIV":0.382456,"CMR":0.229507,"COD":0.067263,"COG":0.447328,"COK":2.711911,"COL":1.829793,"COM":0.158164,"CPV":0.439588,"CRI":1.142575,"CUB":1.828511,"CUW":31.64717,"CYP":6.974593,"CZE":13.579827,"DEU":11.86271,"DJI":0.491546,"DMA":0.900519,"DNK":11.674983,"DOM":1.479493,"DZA":2.995649,"ECU":2.163738,"EGY":1.503335,"ERI":0,"ESP":6.121146,"EST":12.921694,"ETH":0.055652,"FIN":11.114615,"FJI":0.923276,"FRA":6.802012,"FRO":12.918574,"FSM":1.347694,"GAB":4.669365,"GBR":10.054433,"GEO":1.933823,"GHA":0.258928,"GIN":0.154441,"GLP":3.864945,"GMB":0.178761,"GNB":0.17336,"GNQ":0.133816,"GRC":7.97893,"GRD":1.183405,"GRL":9.7959,"GTM":0.567316,"GUF":6.828883,"GUY":1.397558,"HKG":5.710828,"HND":0.534994,"HRV":3.507464,"HTI":0.09314,"HUN":6.120179,"IDN":1.121893,"IND":0.731148,"IRL":9.509086,"IRN":3.942854,"IRQ":3.271684,"ISL":9.068553,"ISR":8.485426,"ITA":7.589396,"JAM":3.253662,"JOR":2.888857,"JPN":9.396468,"KAZ":12.836731,"KEN":0.244751,"KGZ":1.886195,"KHM":0.135206,"KIR":0.370602,"KNA":2.740464,"KOR":7.348162,"KSV":0,"KWT":29.709782,"LAO":0.129645,"LBN":2.711563,"LBR":0.199097,"LBY":8.51674,"LCA":1.578088,"LIE":7.164948,"LKA":0.279117,"LSO":0.8667,"LTU":4.316649,"LUX":31.144083,"LVA":4.51762,"MAC":3.098951,"MAR":1.037669,"MDA":3.526237,"MDG":0.077301,"MDV":0.8048,"MEX":3.901596,"MHL":1.721805,"MKD":5.069692,"MLI":0.052891,"MLT":7.649482,"MMR":0.126902,"MNE":2.05482,"MNG":4.049236,"MOZ":0.083882,"MRT":0.414379,"MSR":3.070284,"MTQ":4.771054,"MUS":1.564856,"MWI":0.085051,"MYS":4.552141,"MYT":0.82105,"NAM":0.919741,"NCL":9.582897,"NER":0.065467,"NGA":0.43604,"NIC":0.504209,"NIU":3.033113,"NLD":11.160258,"NOR":8.348531,"NPL":0.065703,"NRU":11.107373,"NZL":7.7681,"OMN":6.38301,"PAK":0.614718,"PAN":1.451562,"PER":1.015773,"PHL":0.740411,"PLW":12.079121,"PNG":0.51055,"POL":9.53692,"PRI":0,"PRK":4.114338,"PRT":4.952272,"PRY":0.664379,"PSE":0.387581,"PYF":1.916232,"QAT":63.13149,"REU":2.558979,"ROU":5.381587,"RUS":12.531724,"RWA":0.061096,"SAU":19.087393,"SDN":0.123914,"SEN":0.431731,"SGP":14.894992,"SHN":1.700758,"SLB":0.486345,"SLE":0.075059,"SLV":0.706021,"SOM":0.09673,"SPM":11.457161,"SRB":4.787658,"SSD":0.04992,"STP":0.371597,"SUR":4.824533,"SVK":8.709084,"SVN":7.153328,"SWE":6.647851,"SWZ":0.745519,"SXM":18.193662,"SYC":2.508215,"SYR":3.34058,"TCA":4.812609,"TCD":0.062503,"TGO":0.262066,"THA":2.104102,"TJK":0.904297,"TKM":6.825014,"TLS":0,"TON":0.847023,"TTO":13.455597,"TUN":1.821575,"TUR":2.986835,"TUV":0.769991,"TWN":7.280274,"TZA":0.085217,"UGA":0.040973,"UKR":9.853518,"URY":1.399614,"USA":20.381667,"UZB":5.234885,"VCT":0.902932,"VEN":5.855174,"VGB":5.217206,"VNM":0.321076,"VUT":0.383198,"WLF":1.317986,"WSM":0.598686,"YEM":0.575487,"ZAF":7.533028,"ZMB":0.298154,"ZWE":1.486497},"1994":{"ABW":8.827734,"AFG":0.094065,"AGO":0.287068,"AIA":7.049166,"ALB":0.584034,"AND":6.663237,"ARE":31.173909,"ARG":3.544031,"ARM":0.80426,"ATG":3.223044,"AUS":16.494706,"AUT":7.692873,"AZE":5.362381,"BDI":0.041976,"BEL":12.393784,"BEN":0.153886,"BES":5.141057,"BFA":0.063903,"BGD":0.151693,"BGR":6.598212,"BHR":24.870384,"BHS":6.01949,"BIH":0.851853,"BLR":6.479889,"BLZ":1.883558,"BMU":8.987836,"BOL":1.635634,"BRA":1.577844,"BRB":2.821812,"BRN":16.064946,"BTN":0.386724,"BWA":2.015324,"CAF":0.065514,"CAN":16.518519,"CHE":6.10404,"CHL":2.640035,"CHN":2.567743,"CIV":0.299443,"CMR":0.22112,"COD":0.040909,"COG":0.66258,"COK":2.69778,"COL":1.892328,"COM":0.15477,"CPV":0.437868,"CRI":1.49029,"CUB":1.963986,"CUW":30.599771,"CYP":7.108199,"CZE":12.854316,"DEU":11.615574,"DJI":0.470138,"DMA":0.953091,"DNK":12.409013,"DOM":1.527259,"DZA":3.083633,"ECU":1.19316,"EGY":1.346948,"ERI":0.364178,"ESP":6.405349,"EST":13.583918,"ETH":0.039504,"FIN":12.131825,"FJI":0.914357,"FRA":6.673221,"FRO":13.035009,"FSM":1.41384,"GAB":4.000447,"GBR":9.933511,"GEO":1.214076,"GHA":0.29863,"GIN":0.154893,"GLP":4.117872,"GMB":0.173191,"GNB":0.168132,"GNQ":0.142491,"GRC":8.117487,"GRD":1.385,"GRL":8.899731,"GTM":0.668769,"GUF":5.843095,"GUY":1.94554,"HKG":5.038218,"HND":0.571568,"HRV":3.331106,"HTI":0.024472,"HUN":5.974083,"IDN":1.119996,"IND":0.757746,"IRL":9.787736,"IRN":4.39805,"IRQ":3.510912,"ISL":8.797609,"ISR":8.879908,"ITA":7.485377,"JAM":3.2963,"JOR":3.09702,"JPN":9.810747,"KAZ":11.00681,"KEN":0.245732,"KGZ":1.356704,"KHM":0.134002,"KIR":0.365195,"KNA":2.878789,"KOR":7.875317,"KSV":0,"KWT":33.651559,"LAO":0.13192,"LBN":2.857617,"LBR":0.198845,"LBY":9.426783,"LCA":1.727831,"LIE":6.605284,"LKA":0.301759,"LSO":0.87638,"LTU":4.190778,"LUX":28.709554,"LVA":3.978589,"MAC":3.270259,"MAR":1.073364,"MDA":2.772325,"MDG":0.092841,"MDV":0.784517,"MEX":3.980416,"MHL":1.690851,"MKD":5.313606,"MLI":0.056467,"MLT":6.994684,"MMR":0.146348,"MNE":1.991626,"MNG":3.417223,"MOZ":0.072396,"MRT":0.413056,"MSR":3.680768,"MTQ":5.037918,"MUS":1.41493,"MWI":0.088089,"MYS":4.626697,"MYT":0.844802,"NAM":1.008603,"NCL":10.094955,"NER":0.06107,"NGA":0.331273,"NIC":0.544393,"NIU":3.085474,"NLD":11.126604,"NOR":8.740438,"NPL":0.074304,"NRU":10.698851,"NZL":7.7053,"OMN":7.055467,"PAK":0.650069,"PAN":1.56958,"PER":0.990645,"PHL":0.800033,"PLW":11.798211,"PNG":0.489719,"POL":9.394603,"PRI":0,"PRK":3.690546,"PRT":5.017034,"PRY":0.757299,"PSE":0.384586,"PYF":1.947207,"QAT":60.526001,"REU":2.652562,"ROU":5.326007,"RUS":11.065992,"RWA":0.068639,"SAU":17.86517,"SDN":0.166712,"SEN":0.455857,"SGP":17.473887,"SHN":1.716963,"SLB":0.502599,"SLE":0.080668,"SLV":0.792665,"SOM":0.090436,"SPM":10.86392,"SRB":4.647471,"SSD":0.066983,"STP":0.364532,"SUR":4.787862,"SVK":8.195519,"SVN":7.349675,"SWE":6.899393,"SWZ":1.129469,"SXM":17.491027,"SYC":2.728922,"SYR":3.317626,"TCA":4.833773,"TCD":0.061687,"TGO":0.245975,"THA":2.285578,"TJK":0.405772,"TKM":8.091657,"TLS":0,"TON":0.918471,"TTO":13.081529,"TUN":1.725573,"TUR":2.87361,"TUV":0.766607,"TWN":7.568905,"TZA":0.069704,"UGA":0.035189,"UKR":8.143091,"URY":1.263471,"USA":20.457946,"UZB":4.785343,"VCT":1.061153,"VEN":5.985498,"VGB":5.733295,"VNM":0.360944,"VUT":0.373967,"WLF":1.304286,"WSM":0.550319,"YEM":0.577505,"ZAF":7.825033,"ZMB":0.282416,"ZWE":1.601827},"1995":{"ABW":9.177833,"AFG":0.086323,"AGO":0.786997,"AIA":6.869284,"ALB":0.636064,"AND":6.754132,"ARE":28.764432,"ARG":3.656054,"ARM":1.033225,"ATG":3.267698,"AUS":16.941788,"AUT":8.055957,"AZE":4.222076,"BDI":0.040143,"BEL":12.47455,"BEN":0.158152,"BES":5.035112,"BFA":0.060282,"BGD":0.178632,"BGR":6.8358,"BHR":24.124093,"BHS":6.140222,"BIH":0.90708,"BLR":5.821775,"BLZ":1.853996,"BMU":8.934331,"BOL":1.584818,"BRA":1.643136,"BRB":3.075205,"BRN":15.99877,"BTN":0.447862,"BWA":1.972478,"CAF":0.063737,"CAN":16.776937,"CHE":6.169001,"CHL":2.848912,"CHN":2.756577,"CIV":0.427663,"CMR":0.242492,"COD":0.048598,"COG":0.432462,"COK":2.685763,"COL":1.634007,"COM":0.159054,"CPV":0.480954,"CRI":1.343678,"CUB":2.089846,"CUW":30.58204,"CYP":6.811206,"CZE":12.764832,"DEU":11.570215,"DJI":0.494648,"DMA":1.164839,"DNK":11.769256,"DOM":1.919625,"DZA":3.335253,"ECU":1.962192,"EGY":1.478806,"ERI":0.381411,"ESP":6.720591,"EST":12.435796,"ETH":0.0436,"FIN":11.37748,"FJI":0.929884,"FRA":6.726916,"FRO":13.048373,"FSM":1.627293,"GAB":4.105342,"GBR":9.773095,"GEO":0.469544,"GHA":0.295524,"GIN":0.156012,"GLP":4.262215,"GMB":0.174033,"GNB":0.163978,"GNQ":0.150287,"GRC":8.106245,"GRD":1.443629,"GRL":9.574102,"GTM":0.683054,"GUF":5.277113,"GUY":2.086224,"HKG":5.007649,"HND":0.65996,"HRV":3.498506,"HTI":0.114811,"HUN":5.944641,"IDN":1.122412,"IND":0.789656,"IRL":10.01625,"IRN":4.46719,"IRQ":3.536389,"ISL":9.188427,"ISR":9.101651,"ITA":7.907623,"JAM":3.655658,"JOR":2.962648,"JPN":9.884957,"KAZ":10.775146,"KEN":0.275529,"KGZ":0.981536,"KHM":0.137238,"KIR":0.35974,"KNA":3.013866,"KOR":8.452006,"KSV":0,"KWT":32.980235,"LAO":0.136156,"LBN":3.094913,"LBR":0.197625,"LBY":9.653356,"LCA":1.803765,"LIE":6.610606,"LKA":0.31986,"LSO":0.88281,"LTU":4.02735,"LUX":22.450794,"LVA":3.553792,"MAC":3.103824,"MAR":1.080876,"MDA":2.55656,"MDG":0.092847,"MDV":0.964928,"MEX":3.685653,"MHL":1.734369,"MKD":5.361283,"MLI":0.059993,"MLT":6.388442,"MMR":0.161083,"MNE":2.099996,"MNG":3.363064,"MOZ":0.071113,"MRT":0.426379,"MSR":3.953009,"MTQ":5.017121,"MUS":1.575871,"MWI":0.089269,"MYS":5.657958,"MYT":0.882557,"NAM":1.008794,"NCL":10.331104,"NER":0.057257,"NGA":0.308878,"NIC":0.58346,"NIU":3.132963,"NLD":11.154518,"NOR":8.833461,"NPL":0.103513,"NRU":10.300116,"NZL":7.622294,"OMN":7.234916,"PAK":0.628125,"PAN":1.344948,"PER":1.008981,"PHL":0.865703,"PLW":11.49724,"PNG":0.446051,"POL":9.449832,"PRI":0,"PRK":3.398719,"PRT":5.424644,"PRY":0.855174,"PSE":0.360374,"PYF":1.868047,"QAT":60.757618,"REU":2.89248,"ROU":5.573243,"RUS":10.897812,"RWA":0.079967,"SAU":13.892906,"SDN":0.167573,"SEN":0.397341,"SGP":11.441099,"SHN":1.732661,"SLB":0.507819,"SLE":0.053382,"SLV":0.869552,"SOM":0.081695,"SPM":10.857143,"SRB":4.903354,"SSD":0.067159,"STP":0.357928,"SUR":4.742459,"SVK":8.250907,"SVN":7.711383,"SWE":6.805401,"SWZ":1.114293,"SXM":17.384975,"SYC":2.647434,"SYR":2.878422,"TCA":4.610026,"TCD":0.061165,"TGO":0.2745,"THA":2.625624,"TJK":0.413321,"TKM":8.028519,"TLS":0,"TON":0.952859,"TTO":12.586025,"TUN":1.672774,"TUR":3.060118,"TUV":1.146792,"TWN":7.87106,"TZA":0.079643,"UGA":0.044751,"UKR":7.635233,"URY":1.420438,"USA":20.43133,"UZB":4.458558,"VCT":1.123198,"VEN":6.010516,"VGB":6.219305,"VNM":0.38906,"VUT":0.386561,"WLF":1.291961,"WSM":0.649415,"YEM":0.642853,"ZAF":8.220289,"ZMB":0.246693,"ZWE":1.366958},"1996":{"ABW":9.134971,"AFG":0.080092,"AGO":0.724726,"AIA":7.058299,"ALB":0.616724,"AND":7.082732,"ARE":28.286991,"ARG":3.807982,"ARM":0.78676,"ATG":3.412132,"AUS":17.125455,"AUT":8.465276,"AZE":3.930295,"BDI":0.040776,"BEL":12.789888,"BEN":0.190818,"BES":4.659931,"BFA":0.066348,"BGD":0.179291,"BGR":6.963331,"BHR":24.638212,"BHS":5.947798,"BIH":1.084896,"BLR":5.9153,"BLZ":1.466717,"BMU":8.817112,"BOL":1.578851,"BRA":1.742448,"BRB":3.129887,"BRN":15.48454,"BTN":0.527768,"BWA":1.741488,"CAF":0.06318,"CAN":17.149197,"CHE":6.238948,"CHL":3.257582,"CHN":2.852102,"CIV":0.495264,"CMR":0.264736,"COD":0.052384,"COG":0.475531,"COK":2.882122,"COL":1.631632,"COM":0.163079,"CPV":0.513474,"CRI":1.28175,"CUB":2.12833,"CUW":28.925317,"CYP":7.072589,"CZE":13.112755,"DEU":11.792007,"DJI":0.454697,"DMA":1.05948,"DNK":14.244384,"DOM":2.057377,"DZA":3.339227,"ECU":2.040295,"EGY":1.427109,"ERI":0.396842,"ESP":6.376789,"EST":13.272954,"ETH":0.047082,"FIN":12.494943,"FJI":0.994864,"FRA":6.96548,"FRO":13.614029,"FSM":1.653653,"GAB":4.131914,"GBR":10.102875,"GEO":0.851414,"GHA":0.30647,"GIN":0.160712,"GLP":4.442642,"GMB":0.171875,"GNB":0.160617,"GNQ":0.220127,"GRC":8.248478,"GRD":1.467753,"GRL":10.663724,"GTM":0.618034,"GUF":4.195675,"GUY":2.192844,"HKG":4.564425,"HND":0.648454,"HRV":3.644931,"HTI":0.131083,"HUN":6.114004,"IDN":1.250134,"IND":0.839232,"IRL":10.388715,"IRN":4.485343,"IRQ":3.201726,"ISL":9.339634,"ISR":9.253596,"ITA":7.803821,"JAM":3.824725,"JOR":2.999868,"JPN":9.961701,"KAZ":10.081641,"KEN":0.331512,"KGZ":1.21377,"KHM":0.135648,"KIR":0.353873,"KNA":3.060631,"KOR":9.221568,"KSV":0,"KWT":29.30377,"LAO":0.148673,"LBN":3.161133,"LBR":0.197276,"LBY":9.235231,"LCA":1.90376,"LIE":6.572434,"LKA":0.380438,"LSO":0.888311,"LTU":4.23787,"LUX":22.269046,"LVA":3.63475,"MAC":3.480056,"MAR":1.093538,"MDA":2.638053,"MDG":0.093631,"MDV":1.097085,"MEX":3.775293,"MHL":1.706236,"MKD":5.859163,"MLI":0.063767,"MLT":6.620141,"MMR":0.16587,"MNE":2.453372,"MNG":3.366696,"MOZ":0.067901,"MRT":0.437481,"MSR":4.74919,"MTQ":4.883309,"MUS":1.662412,"MWI":0.087101,"MYS":5.483187,"MYT":0.895709,"NAM":1.043643,"NCL":10.700954,"NER":0.063252,"NGA":0.33156,"NIC":0.591649,"NIU":3.186087,"NLD":11.677511,"NOR":9.488053,"NPL":0.103265,"NRU":9.917061,"NZL":7.859697,"OMN":6.734862,"PAK":0.681598,"PAN":1.604403,"PER":0.97258,"PHL":0.863416,"PLW":11.158132,"PNG":0.457053,"POL":9.832396,"PRI":0,"PRK":2.931393,"PRT":5.136504,"PRY":0.789277,"PSE":0.379265,"PYF":1.853896,"QAT":59.83461,"REU":3.13579,"ROU":5.751465,"RUS":10.700509,"RWA":0.0691,"SAU":13.306082,"SDN":0.168785,"SEN":0.414336,"SGP":13.147376,"SHN":1.748648,"SLB":0.512489,"SLE":0.070796,"SLV":0.761495,"SOM":0.076002,"SPM":10.86053,"SRB":5.732779,"SSD":0.067594,"STP":0.351756,"SUR":4.6921,"SVK":8.215958,"SVN":8.037168,"SWE":7.230309,"SWZ":0.809132,"SXM":16.358879,"SYC":3.103852,"SYR":2.877323,"TCA":4.404403,"TCD":0.060555,"TGO":0.284571,"THA":2.900076,"TJK":0.467857,"TKM":7.115571,"TLS":0,"TON":0.767943,"TTO":15.812013,"TUN":1.758209,"TUR":3.310171,"TUV":0.76246,"TWN":8.179876,"TZA":0.081138,"UGA":0.047911,"UKR":6.942628,"URY":1.675172,"USA":20.88014,"UZB":4.497841,"VCT":1.154117,"VEN":5.419893,"VGB":6.47064,"VNM":0.456412,"VUT":0.482343,"WLF":1.538311,"WSM":0.704962,"YEM":0.63357,"ZAF":8.141431,"ZMB":0.206469,"ZWE":1.333751},"1997":{"ABW":9.265411,"AFG":0.073313,"AGO":0.494089,"AIA":6.870904,"ALB":0.474229,"AND":7.194088,"ARE":26.619694,"ARG":3.843019,"ARM":0.999334,"ATG":3.601337,"AUS":17.396973,"AUT":8.442677,"AZE":3.725249,"BDI":0.042059,"BEL":12.209263,"BEN":0.191635,"BES":4.823551,"BFA":0.07378,"BGD":0.189495,"BGR":6.71428,"BHR":26.49053,"BHS":5.185836,"BIH":2.06677,"BLR":5.921437,"BLZ":1.788824,"BMU":8.69962,"BOL":1.330811,"BRA":1.821151,"BRB":3.37445,"BRN":15.745555,"BTN":0.686501,"BWA":1.72865,"CAF":0.062506,"CAN":17.462915,"CHE":6.074149,"CHL":3.74314,"CHN":2.83581,"CIV":0.457284,"CMR":0.226478,"COD":0.041842,"COG":0.668072,"COK":2.917695,"COL":1.729503,"COM":0.166864,"CPV":0.527495,"CRI":1.314691,"CUB":2.255745,"CUW":30.639537,"CYP":7.033196,"CZE":12.728243,"DEU":11.430683,"DJI":0.493811,"DMA":1.166862,"DNK":12.405543,"DOM":2.11847,"DZA":2.95171,"ECU":1.518743,"EGY":1.604819,"ERI":0.352801,"ESP":6.659769,"EST":13.14435,"ETH":0.048669,"FIN":12.197834,"FJI":0.949927,"FRA":6.811022,"FRO":13.257759,"FSM":1.747384,"GAB":4.047121,"GBR":9.660192,"GEO":0.953929,"GHA":0.339654,"GIN":0.164447,"GLP":4.42548,"GMB":0.169707,"GNB":0.173359,"GNQ":0.502191,"GRC":8.625214,"GRD":1.596832,"GRL":11.01466,"GTM":0.687904,"GUF":3.765775,"GUY":2.391851,"HKG":4.734647,"HND":0.652712,"HRV":3.93911,"HTI":0.17035,"HUN":5.990885,"IDN":1.3557,"IND":0.856934,"IRL":10.660271,"IRN":4.274062,"IRQ":3.048683,"ISL":9.61685,"ISR":9.553021,"ITA":7.900708,"JAM":3.940653,"JOR":2.973184,"JPN":9.879864,"KAZ":9.744753,"KEN":0.286259,"KGZ":1.176491,"KHM":0.128206,"KIR":0.347678,"KNA":3.273227,"KOR":9.681602,"KSV":0,"KWT":31.037004,"LAO":0.15385,"LBN":3.675838,"LBR":0.190289,"LBY":9.282539,"LCA":1.885574,"LIE":6.87367,"LKA":0.407623,"LSO":0.897156,"LTU":4.112795,"LUX":20.443941,"LVA":3.473463,"MAC":3.613272,"MAR":1.094187,"MDA":1.661742,"MDG":0.109827,"MDV":1.225691,"MEX":3.956134,"MHL":1.679514,"MKD":5.277811,"MLI":0.070146,"MLT":6.575286,"MMR":0.16931,"MNE":2.635383,"MNG":3.197244,"MOZ":0.07083,"MRT":0.433613,"MSR":4.664875,"MTQ":4.725646,"MUS":1.686188,"MWI":0.08943,"MYS":5.745379,"MYT":0.888938,"NAM":1.045162,"NCL":8.720186,"NER":0.061563,"NGA":0.360386,"NIC":0.636129,"NIU":3.246788,"NLD":11.164034,"NOR":9.473518,"NPL":0.113599,"NRU":9.899836,"NZL":8.283872,"OMN":6.790147,"PAK":0.66361,"PAN":1.637229,"PER":1.075686,"PHL":0.963461,"PLW":10.813576,"PNG":0.519267,"POL":9.571919,"PRI":0,"PRK":2.789575,"PRT":5.398958,"PRY":0.85673,"PSE":0.303702,"PYF":1.900701,"QAT":66.817851,"REU":3.467322,"ROU":5.292296,"RUS":10.015,"RWA":0.062938,"SAU":10.823724,"SDN":0.20201,"SEN":0.351583,"SGP":15.087034,"SHN":1.766067,"SLB":0.516771,"SLE":0.050738,"SLV":0.926933,"SOM":0.069639,"SPM":7.449484,"SRB":6.159985,"SSD":0.080465,"STP":0.346022,"SUR":4.646801,"SVK":8.217838,"SVN":8.295617,"SWE":6.633315,"SWZ":1.15386,"SXM":17.237748,"SYC":3.590702,"SYR":3.004368,"TCA":5.102755,"TCD":0.060486,"TGO":0.191394,"THA":2.986716,"TJK":0.351489,"TKM":7.002468,"TLS":0,"TON":0.982813,"TTO":15.597062,"TUN":1.752178,"TUR":3.460286,"TUV":0.760955,"TWN":8.754853,"TZA":0.088856,"UGA":0.048542,"UKR":6.781884,"URY":1.69909,"USA":20.895594,"UZB":4.465732,"VCT":1.154258,"VEN":5.794134,"VGB":6.306708,"VNM":0.585297,"VUT":0.471133,"WLF":1.527728,"WSM":0.697737,"YEM":0.661414,"ZAF":8.502076,"ZMB":0.257753,"ZWE":1.224388},"1998":{"ABW":9.555806,"AFG":0.069134,"AGO":0.472993,"AIA":7.387097,"ALB":0.542888,"AND":7.531924,"ARE":27.620313,"ARG":3.848733,"ARM":1.048344,"ATG":3.736097,"AUS":17.959464,"AUT":8.387597,"AZE":3.93799,"BDI":0.041282,"BEL":12.780282,"BEN":0.169171,"BES":0.2633,"BFA":0.076684,"BGD":0.186552,"BGR":6.457227,"BHR":27.311216,"BHS":6.308068,"BIH":2.563899,"BLR":5.800014,"BLZ":1.645409,"BMU":8.585186,"BOL":1.318507,"BRA":1.855469,"BRB":4.170274,"BRN":16.113946,"BTN":0.661148,"BWA":2.018222,"CAF":0.061839,"CAN":17.570172,"CHE":6.27764,"CHL":3.78662,"CHN":2.695186,"CIV":0.415172,"CMR":0.21908,"COD":0.036071,"COG":0.121004,"COK":3.005566,"COL":1.717188,"COM":0.177533,"CPV":0.549333,"CRI":1.369674,"CUB":2.201785,"CUW":1.713279,"CYP":7.225793,"CZE":12.220314,"DEU":11.319463,"DJI":0.553618,"DMA":1.116133,"DNK":11.55653,"DOM":2.14778,"DZA":3.562981,"ECU":1.82902,"EGY":1.774622,"ERI":0.25236,"ESP":6.842628,"EST":12.005971,"ETH":0.049851,"FIN":11.516631,"FJI":0.913205,"FRA":7.121762,"FRO":13.883428,"FSM":1.808879,"GAB":4.096607,"GBR":9.728953,"GEO":1.093123,"GHA":0.333693,"GIN":0.170535,"GLP":5.303742,"GMB":0.178311,"GNB":0.145437,"GNQ":0.41892,"GRC":9.015222,"GRD":1.656045,"GRL":10.634553,"GTM":0.772476,"GUF":4.285933,"GUY":2.416206,"HKG":5.946325,"HND":0.762551,"HRV":4.080193,"HTI":0.15318,"HUN":5.960809,"IDN":1.022226,"IND":0.858549,"IRL":11.066229,"IRN":4.814003,"IRQ":3.127575,"ISL":9.583842,"ISR":9.542504,"ITA":8.113035,"JAM":3.762384,"JOR":2.942172,"JPN":9.542121,"KAZ":9.617147,"KEN":0.339636,"KGZ":1.229529,"KHM":0.160764,"KIR":0.341612,"KNA":3.396428,"KOR":8.174061,"KSV":0,"KWT":28.33696,"LAO":0.156295,"LBN":3.897424,"LBR":0.183402,"LBY":9.196541,"LCA":2.055605,"LIE":7.121426,"LKA":0.416788,"LSO":0.907863,"LTU":4.373355,"LUX":18.12186,"LVA":3.373169,"MAC":3.718456,"MAR":1.11116,"MDA":1.48014,"MDG":0.112164,"MDV":1.097343,"MEX":4.098006,"MHL":1.72297,"MKD":6.245484,"MLI":0.087973,"MLT":6.404308,"MMR":0.18052,"MNE":2.772632,"MNG":3.168835,"MOZ":0.065702,"MRT":0.419482,"MSR":4.573568,"MTQ":4.149327,"MUS":1.815319,"MWI":0.085632,"MYS":5.237719,"MYT":0.837938,"NAM":1.046885,"NCL":8.507473,"NER":0.064248,"NGA":0.323471,"NIC":0.682016,"NIU":3.320344,"NLD":11.159808,"NOR":9.448118,"NPL":0.093798,"NRU":9.533391,"NZL":7.836797,"OMN":7.150329,"PAK":0.664994,"PAN":2.045183,"PER":1.069356,"PHL":0.916241,"PLW":10.495226,"PNG":0.556855,"POL":8.842245,"PRI":0,"PRK":2.551695,"PRT":5.820325,"PRY":0.890415,"PSE":0.495417,"PYF":1.855518,"QAT":54.598803,"REU":3.508826,"ROU":4.710876,"RUS":9.917491,"RWA":0.06084,"SAU":10.122811,"SDN":0.171213,"SEN":0.359937,"SGP":12.262951,"SHN":1.784416,"SLB":0.529655,"SLE":0.054343,"SLV":0.97385,"SOM":0.063667,"SPM":8.66467,"SRB":6.497029,"SSD":0.068419,"STP":0.34074,"SUR":4.557572,"SVK":8.159375,"SVN":8.066714,"SWE":6.670707,"SWZ":1.155528,"SXM":0.958789,"SYC":3.727029,"SYR":3.209973,"TCA":5.100992,"TCD":0.059885,"TGO":0.272819,"THA":2.619847,"TJK":0.405514,"TKM":7.226771,"TLS":0,"TON":0.867707,"TTO":14.933514,"TUN":1.840267,"TUR":3.407173,"TUV":1.140959,"TWN":9.134161,"TZA":0.076041,"UGA":0.053633,"UKR":6.605105,"URY":1.728258,"USA":20.799134,"UZB":4.885188,"VCT":1.412132,"VEN":7.096885,"VGB":6.337439,"VNM":0.606669,"VUT":0.440269,"WLF":1.517184,"WSM":0.792172,"YEM":0.685169,"ZAF":8.222435,"ZMB":0.243102,"ZWE":1.223649},"1999":{"ABW":9.321653,"AFG":0.056671,"AGO":0.575287,"AIA":7.518,"ALB":0.930784,"AND":7.812962,"ARE":25.033797,"ARG":4.018362,"ARM":0.951187,"ATG":3.821785,"AUS":18.269805,"AUT":8.215235,"AZE":3.526508,"BDI":0.040908,"BEL":12.196935,"BEN":0.215352,"BES":1.951023,"BFA":0.079386,"BGD":0.197823,"BGR":5.682086,"BHR":25.990287,"BHS":6.349353,"BIH":2.488133,"BLR":5.623197,"BLZ":1.495619,"BMU":8.4118,"BOL":1.242248,"BRA":1.886351,"BRB":4.400391,"BRN":11.629079,"BTN":0.651413,"BWA":1.867136,"CAF":0.063149,"CAN":17.896966,"CHE":6.222965,"CHL":4.012159,"CHN":2.829973,"CIV":0.363364,"CMR":0.203886,"COD":0.027896,"COG":0.120244,"COK":3.108848,"COL":1.419235,"COM":0.180958,"CPV":0.643769,"CRI":1.393788,"CUB":2.210199,"CUW":13.017622,"CYP":7.380781,"CZE":11.373624,"DEU":10.978242,"DJI":0.534801,"DMA":1.173367,"DNK":11.025194,"DOM":2.118709,"DZA":3.020759,"ECU":1.721264,"EGY":1.78086,"ERI":0.261175,"ESP":7.392838,"EST":11.368171,"ETH":0.047547,"FIN":11.396186,"FJI":0.918687,"FRA":7.063711,"FRO":13.94173,"FSM":1.708174,"GAB":3.859229,"GBR":9.57871,"GEO":0.980994,"GHA":0.332196,"GIN":0.175247,"GLP":5.185518,"GMB":0.196778,"GNB":0.160958,"GNQ":0.620895,"GRC":8.908136,"GRD":1.817886,"GRL":10.595872,"GTM":0.768162,"GUF":3.310758,"GUY":2.416842,"HKG":6.406088,"HND":0.726307,"HRV":4.348168,"HTI":0.154881,"HUN":6.027586,"IDN":1.138328,"IND":0.913936,"IRL":11.408921,"IRN":5.886047,"IRQ":3.009203,"ISL":10.197794,"ISR":9.135009,"ITA":8.190787,"JAM":3.835573,"JOR":2.881703,"JPN":9.812611,"KAZ":8.109572,"KEN":0.334685,"KGZ":0.952768,"KHM":0.159197,"KIR":0.335804,"KNA":3.596564,"KOR":8.824875,"KSV":0,"KWT":28.668307,"LAO":0.158395,"LBN":3.865787,"LBR":0.140082,"LBY":8.90758,"LCA":2.106865,"LIE":6.946693,"LKA":0.456156,"LSO":0.91497,"LTU":3.710287,"LUX":18.930695,"LVA":3.18079,"MAC":3.564822,"MAR":1.13517,"MDA":1.088431,"MDG":0.115547,"MDV":1.515079,"MEX":4.053742,"MHL":1.633466,"MKD":5.764553,"MLI":0.08894,"MLT":6.545287,"MMR":0.19826,"MNE":1.912284,"MNG":3.083232,"MOZ":0.067387,"MRT":0.418046,"MSR":6.35339,"MTQ":4.453116,"MUS":2.01223,"MWI":0.084027,"MYS":4.841214,"MYT":0.98412,"NAM":0.935431,"NCL":9.467221,"NER":0.060774,"NGA":0.33073,"NIC":0.712329,"NIU":3.421102,"NLD":10.746854,"NOR":9.555052,"NPL":0.132173,"NRU":8.822113,"NZL":8.208071,"OMN":8.888944,"PAK":0.663948,"PAN":1.910297,"PER":1.111281,"PHL":0.894123,"PLW":10.209288,"PNG":0.459258,"POL":8.592171,"PRI":0,"PRK":2.764116,"PRT":6.537401,"PRY":0.870652,"PSE":0.448901,"PYF":2.018888,"QAT":50.14759,"REU":3.811601,"ROU":4.009125,"RUS":10.134326,"RWA":0.062752,"SAU":10.756268,"SDN":0.181212,"SEN":0.380183,"SGP":12.40399,"SHN":1.804037,"SLB":0.515651,"SLE":0.043393,"SLV":0.943281,"SOM":0.058558,"SPM":8.733513,"SRB":4.49647,"SSD":0.072289,"STP":0.335891,"SUR":4.512098,"SVK":8.007169,"SVN":7.759479,"SWE":6.332086,"SWZ":1.216092,"SXM":7.240594,"SYC":3.857674,"SYR":3.255865,"TCA":5.50089,"TCD":0.059675,"TGO":0.380127,"THA":2.726985,"TJK":0.406684,"TKM":8.354799,"TLS":0,"TON":1.077837,"TTO":16.927939,"TUN":1.851099,"TUR":3.289638,"TUV":0.380083,"TWN":9.420909,"TZA":0.073396,"UGA":0.053899,"UKR":6.045774,"URY":2.037906,"USA":20.812016,"UZB":4.948203,"VCT":1.446379,"VEN":7.200024,"VGB":6.173389,"VNM":0.6002,"VUT":0.449614,"WLF":1.756592,"WSM":0.744017,"YEM":0.75762,"ZAF":8.0813,"ZMB":0.184758,"ZWE":1.342366},"2000":{"ABW":26.688096,"AFG":0.053581,"AGO":0.580458,"AIA":7.96017,"ALB":0.95063,"AND":7.927016,"ARE":34.129981,"ARG":3.840177,"ARM":1.101904,"ATG":3.905403,"AUS":18.384487,"AUT":8.257958,"AZE":3.602577,"BDI":0.042985,"BEL":12.345606,"BEN":0.210478,"BES":5.11747,"BFA":0.086655,"BGD":0.205309,"BGR":5.614481,"BHR":26.416889,"BHS":6.234168,"BIH":3.278548,"BLR":5.353295,"BLZ":1.646015,"BMU":8.418048,"BOL":0.985553,"BRA":1.934246,"BRB":4.351262,"BRN":13.748531,"BTN":0.652028,"BWA":2.187387,"CAF":0.06238,"CAN":18.469011,"CHE":6.073797,"CHL":3.784281,"CHN":2.883053,"CIV":0.384728,"CMR":0.221712,"COD":0.018363,"COG":0.153394,"COK":3.226772,"COL":1.434621,"COM":0.191133,"CPV":0.647645,"CRI":1.355519,"CUB":2.320906,"CUW":34.986908,"CYP":7.51122,"CZE":12.423993,"DEU":11.027999,"DJI":0.493779,"DMA":1.501068,"DNK":10.168438,"DOM":2.223638,"DZA":2.671715,"ECU":1.628496,"EGY":1.966471,"ERI":0.252597,"ESP":7.650024,"EST":11.096455,"ETH":0.05166,"FIN":11.013837,"FJI":0.97879,"FRA":6.934727,"FRO":15.086115,"FSM":1.607176,"GAB":3.667561,"GBR":9.669215,"GEO":1.055148,"GHA":0.310248,"GIN":0.178872,"GLP":5.089232,"GMB":0.19116,"GNB":0.119072,"GNQ":0.898646,"GRC":9.328877,"GRD":1.773475,"GRL":11.880695,"GTM":0.832042,"GUF":3.107248,"GUY":2.302517,"HKG":5.984493,"HND":0.755853,"HRV":4.322914,"HTI":0.195467,"HUN":5.720921,"IDN":1.291914,"IND":0.923058,"IRL":12.005762,"IRN":5.632055,"IRQ":2.91185,"ISL":10.38556,"ISR":9.730225,"ITA":8.25903,"JAM":3.948384,"JOR":3.006266,"JPN":9.97284,"KAZ":9.679133,"KEN":0.33679,"KGZ":0.932589,"KHM":0.162961,"KIR":0.371243,"KNA":3.788038,"KOR":9.403589,"KSV":0,"KWT":27.590748,"LAO":0.176841,"LBN":3.579622,"LBR":0.142796,"LBY":9.217614,"LCA":2.18232,"LIE":6.566342,"LKA":0.539726,"LSO":0.925794,"LTU":3.299333,"LUX":19.994039,"LVA":2.959824,"MAC":3.775168,"MAR":1.162659,"MDA":0.840384,"MDG":0.115144,"MDV":1.59526,"MEX":4.046719,"MHL":1.824432,"MKD":5.886316,"MLI":0.094867,"MLT":6.280514,"MMR":0.223535,"MNE":2.401367,"MNG":3.032202,"MOZ":0.074398,"MRT":0.413304,"MSR":4.991826,"MTQ":4.609645,"MUS":2.211785,"MWI":0.077073,"MYS":5.500206,"MYT":1.031973,"NAM":0.882192,"NCL":10.022948,"NER":0.059704,"NGA":0.64161,"NIC":0.726364,"NIU":3.533269,"NLD":10.760474,"NOR":9.384347,"NPL":0.123676,"NRU":8.121037,"NZL":8.364146,"OMN":9.186539,"PAK":0.682904,"PAN":1.908362,"PER":1.129413,"PHL":0.928032,"PLW":10.587448,"PNG":0.483585,"POL":8.251497,"PRI":0,"PRK":2.959933,"PRT":6.37685,"PRY":0.703798,"PSE":0.528604,"PYF":2.27789,"QAT":52.654852,"REU":4.116021,"ROU":4.227592,"RUS":10.066304,"RWA":0.063519,"SAU":13.754045,"SDN":0.192229,"SEN":0.402096,"SGP":11.938546,"SHN":1.824701,"SLB":0.519803,"SLE":0.071936,"SLV":0.951748,"SOM":0.055035,"SPM":8.759962,"SRB":5.664785,"SSD":0.075202,"STP":0.331436,"SUR":4.576944,"SVK":7.650792,"SVN":7.586249,"SWE":6.187622,"SWZ":1.173338,"SXM":19.356344,"SYC":3.935848,"SYR":3.095553,"TCA":5.864277,"TCD":0.059003,"TGO":0.265847,"THA":2.747106,"TJK":0.356107,"TKM":8.199849,"TLS":0,"TON":0.928472,"TTO":18.158843,"TUN":1.988377,"TUR":3.585174,"TUV":0.760324,"TWN":10.226887,"TZA":0.074624,"UGA":0.056654,"UKR":5.837221,"URY":1.600139,"USA":21.304467,"UZB":4.854216,"VCT":1.287726,"VEN":6.217111,"VGB":6.196578,"VNM":0.665825,"VUT":0.438748,"WLF":1.742036,"WSM":0.776575,"YEM":0.778031,"ZAF":8.075818,"ZMB":0.180375,"ZWE":1.167603},"2001":{"ABW":26.543406,"AFG":0.0543,"AGO":0.57084,"AIA":8.397743,"ALB":1.021259,"AND":7.725627,"ARE":29.121364,"ARG":3.575298,"ARM":1.12753,"ATG":3.894037,"AUS":18.554121,"AUT":8.725469,"AZE":3.476363,"BDI":0.031734,"BEL":12.228216,"BEN":0.234206,"BES":5.108239,"BFA":0.080907,"BGD":0.235701,"BGR":6.095957,"BHR":19.277921,"BHS":5.902398,"BIH":3.161627,"BLR":5.293782,"BLZ":1.801725,"BMU":8.54259,"BOL":0.934269,"BRA":1.942441,"BRB":4.469965,"BRN":12.881872,"BTN":0.611725,"BWA":2.183515,"CAF":0.06385,"CAN":18.023474,"CHE":6.239616,"CHL":3.385618,"CHN":2.92576,"CIV":0.42896,"CMR":0.214664,"COD":0.015363,"COG":0.185784,"COK":2.635282,"COL":1.404163,"COM":0.193989,"CPV":0.74702,"CRI":1.39804,"CUB":2.263722,"CUW":35.827668,"CYP":7.251623,"CZE":12.417066,"DEU":11.239028,"DJI":0.478648,"DMA":1.612842,"DNK":10.42697,"DOM":2.208387,"DZA":2.685178,"ECU":1.785845,"EGY":1.70606,"ERI":0.254413,"ESP":7.655547,"EST":11.455597,"ETH":0.061789,"FIN":12.049675,"FJI":1.193287,"FRA":6.974761,"FRO":16.479879,"FSM":1.472827,"GAB":3.652187,"GBR":9.780857,"GEO":0.900552,"GHA":0.333428,"GIN":0.184811,"GLP":5.407729,"GMB":0.203081,"GNB":0.119474,"GNQ":4.121089,"GRC":9.515908,"GRD":1.79914,"GRL":10.961689,"GTM":0.852119,"GUF":3.284586,"GUY":2.295398,"HKG":5.557813,"HND":0.82846,"HRV":4.612029,"HTI":0.172855,"HUN":5.891971,"IDN":1.397163,"IND":0.919146,"IRL":12.433374,"IRN":5.920554,"IRQ":3.325618,"ISL":10.010365,"ISR":10.103198,"ITA":8.256306,"JAM":4.028499,"JOR":3.023161,"JPN":9.837338,"KAZ":9.311723,"KEN":0.290463,"KGZ":0.775162,"KHM":0.182336,"KIR":0.323779,"KNA":3.824468,"KOR":9.680924,"KSV":0,"KWT":28.86285,"LAO":0.192527,"LBN":3.737949,"LBR":0.148598,"LBY":9.185645,"LCA":2.235899,"LIE":6.431899,"LKA":0.545783,"LSO":0.938231,"LTU":3.546789,"LUX":20.866925,"LVA":3.177419,"MAC":3.838204,"MAR":1.272229,"MDA":0.901461,"MDG":0.103871,"MDV":1.606771,"MEX":4.132007,"MHL":1.885432,"MKD":5.808129,"MLI":0.100268,"MLT":6.583891,"MMR":0.191931,"MNE":2.633645,"MNG":3.156174,"MOZ":0.085287,"MRT":0.424531,"MSR":5.452381,"MTQ":4.704731,"MUS":2.335468,"MWI":0.06876,"MYS":5.691327,"MYT":1.03734,"NAM":1.083567,"NCL":8.304204,"NER":0.054258,"NGA":0.687411,"NIC":0.755234,"NIU":3.643958,"NLD":11.025625,"NOR":9.642409,"NPL":0.129671,"NRU":7.778443,"NZL":8.838801,"OMN":8.467247,"PAK":0.67283,"PAN":2.271491,"PER":0.998743,"PHL":0.882926,"PLW":10.902562,"PNG":0.562605,"POL":8.117608,"PRI":0,"PRK":3.047928,"PRT":6.289851,"PRY":0.709101,"PSE":0.417436,"PYF":2.672051,"QAT":60.712473,"REU":4.197561,"ROU":4.502834,"RUS":10.35804,"RWA":0.063519,"SAU":13.428824,"SDN":0.21587,"SEN":0.428465,"SGP":11.937925,"SHN":1.84926,"SLB":0.532467,"SLE":0.089015,"SLV":0.978173,"SOM":0.055339,"SPM":8.77815,"SRB":6.227484,"SSD":0.082741,"STP":0.350723,"SUR":4.84789,"SVK":8.038925,"SVN":8.223291,"SWE":6.274423,"SWZ":1.051988,"SXM":19.767401,"SYC":4.23834,"SYR":2.877813,"TCA":5.801614,"TCD":0.058787,"TGO":0.225232,"THA":2.927458,"TJK":0.356947,"TKM":6.939149,"TLS":0,"TON":0.85201,"TTO":19.849112,"TUN":2.055562,"TUR":3.280726,"TUV":1.142501,"TWN":10.295335,"TZA":0.085863,"UGA":0.057225,"UKR":6.270054,"URY":1.523943,"USA":20.709631,"UZB":4.855204,"VCT":1.579852,"VEN":6.912124,"VGB":6.208065,"VNM":0.747378,"VUT":0.446299,"WLF":1.726905,"WSM":0.829451,"YEM":0.836674,"ZAF":7.863059,"ZMB":0.185009,"ZWE":1.050184},"2002":{"ABW":26.547543,"AFG":0.063856,"AGO":0.719229,"AIA":8.24083,"ALB":1.200003,"AND":7.498765,"ARE":23.034168,"ARG":3.283417,"ARM":0.990904,"ATG":4.271779,"AUS":18.56355,"AUT":8.906261,"AZE":3.540409,"BDI":0.031962,"BEL":12.250463,"BEN":0.283923,"BES":4.753514,"BFA":0.079266,"BGD":0.238417,"BGR":5.78766,"BHR":21.204737,"BHS":6.099317,"BIH":3.375707,"BLR":5.31249,"BLZ":1.688961,"BMU":8.962616,"BOL":0.930011,"BRA":1.926925,"BRB":4.501953,"BRN":12.242754,"BTN":0.647782,"BWA":2.214569,"CAF":0.061523,"CAN":18.00791,"CHE":5.973199,"CHL":3.470857,"CHN":3.210536,"CIV":0.393462,"CMR":0.208957,"COD":0.016455,"COG":0.147389,"COK":1.950492,"COL":1.370207,"COM":0.190066,"CPV":0.805222,"CRI":1.514909,"CUB":2.285007,"CUW":34.357247,"CYP":7.316196,"CZE":12.106352,"DEU":11.04386,"DJI":0.506097,"DMA":1.502915,"DNK":10.328454,"DOM":2.381909,"DZA":2.827124,"ECU":1.893807,"EGY":1.690765,"ERI":0.235777,"ESP":8.046026,"EST":11.153329,"ETH":0.062354,"FIN":12.506445,"FJI":0.98294,"FRA":6.868307,"FRO":15.497234,"FSM":1.341382,"GAB":3.386645,"GBR":9.43925,"GEO":0.825375,"GHA":0.348424,"GIN":0.189227,"GLP":5.677968,"GMB":0.194967,"GNB":0.119694,"GNQ":10.319827,"GRC":9.462389,"GRD":1.895797,"GRL":10.248764,"GTM":0.872399,"GUF":2.848171,"GUY":2.255294,"HKG":5.765215,"HND":0.846917,"HRV":4.882914,"HTI":0.20611,"HUN":5.814188,"IDN":1.412072,"IND":0.930677,"IRL":11.833214,"IRN":5.905919,"IRQ":3.287794,"ISL":10.363116,"ISR":9.328964,"ITA":8.37015,"JAM":3.867186,"JOR":3.112565,"JPN":10.049841,"KAZ":10.429081,"KEN":0.238538,"KGZ":0.978954,"KHM":0.17559,"KIR":0.475844,"KNA":4.276673,"KOR":10.060401,"KSV":0,"KWT":28.319849,"LAO":0.207946,"LBN":3.653016,"LBR":0.141158,"LBY":8.914571,"LCA":2.219247,"LIE":6.530089,"LKA":0.572874,"LSO":0.953816,"LTU":3.612027,"LUX":22.389311,"LVA":3.232923,"MAC":3.373391,"MAR":1.273173,"MDA":0.976877,"MDG":0.071587,"MDV":2.030792,"MEX":4.082239,"MHL":2.017029,"MKD":5.263345,"MLI":0.101159,"MLT":6.64144,"MMR":0.199781,"MNE":2.791443,"MNG":3.285702,"MOZ":0.082218,"MRT":0.442791,"MSR":10.352532,"MTQ":4.796151,"MUS":2.336818,"MWI":0.071801,"MYS":5.596708,"MYT":1.086635,"NAM":0.946788,"NCL":10.383023,"NER":0.055852,"NGA":0.727747,"NIC":0.758661,"NIU":3.729262,"NLD":10.934004,"NOR":9.384727,"NPL":0.102493,"NRU":7.433485,"NZL":8.74802,"OMN":10.498523,"PAK":0.691547,"PAN":1.865144,"PER":0.988128,"PHL":0.863085,"PLW":10.705355,"PNG":0.591329,"POL":7.933514,"PRI":0,"PRK":2.903816,"PRT":6.676626,"PRY":0.729643,"PSE":0.348743,"PYF":2.644038,"QAT":57.071531,"REU":4.165859,"ROU":4.5423,"RUS":10.340812,"RWA":0.061975,"SAU":14.396496,"SDN":0.269053,"SEN":0.435807,"SGP":11.275009,"SHN":1.878653,"SLB":0.544609,"SLE":0.097657,"SLV":1.00975,"SOM":0.062292,"SPM":9.393366,"SRB":6.607805,"SSD":0.100854,"STP":0.391241,"SUR":3.147511,"SVK":7.806386,"SVN":8.350017,"SWE":6.362482,"SWZ":1.028617,"SXM":18.949512,"SYC":4.222581,"SYR":2.239535,"TCA":7.293135,"TCD":0.057623,"TGO":0.250395,"THA":3.069618,"TJK":0.286963,"TKM":5.92144,"TLS":0.177231,"TON":0.988324,"TTO":21.242156,"TUN":2.036616,"TUR":3.351306,"TUV":1.143928,"TWN":10.576505,"TZA":0.095881,"UGA":0.056614,"UKR":6.162887,"URY":1.378448,"USA":20.643986,"UZB":4.985268,"VCT":1.647104,"VEN":7.609139,"VGB":6.368283,"VNM":0.849423,"VUT":0.41693,"WLF":1.711236,"WSM":0.863827,"YEM":0.791142,"ZAF":7.475734,"ZMB":0.186604,"ZWE":0.99259},"2003":{"ABW":27.627922,"AFG":0.068871,"AGO":0.495961,"AIA":8.735695,"ALB":1.391371,"AND":7.238069,"ARE":27.696426,"ARG":3.517175,"ARM":1.120443,"ATG":4.505207,"AUS":18.746105,"AUT":9.539408,"AZE":3.618814,"BDI":0.023498,"BEL":12.328289,"BEN":0.312565,"BES":4.559808,"BFA":0.082463,"BGD":0.245117,"BGR":6.382175,"BHR":21.547525,"BHS":6.115868,"BIH":3.431872,"BLR":5.472745,"BLZ":1.637709,"BMU":8.974067,"BOL":1.098731,"BRA":1.887129,"BRB":4.655216,"BRN":12.62598,"BTN":0.567937,"BWA":2.093871,"CAF":0.055504,"CAN":18.384422,"CHE":6.090488,"CHL":3.459474,"CHN":3.745477,"CIV":0.283338,"CMR":0.226159,"COD":0.019493,"COG":0.236446,"COK":2.187173,"COL":1.390578,"COM":0.237784,"CPV":0.862407,"CRI":1.571534,"CUB":2.316478,"CUW":33.965454,"CYP":7.57415,"CZE":12.439322,"DEU":11.071456,"DJI":0.522513,"DMA":1.7131,"DNK":11.238168,"DOM":2.392978,"DZA":2.840302,"ECU":2.010859,"EGY":1.928071,"ERI":0.26776,"ESP":8.004824,"EST":12.606318,"ETH":0.066562,"FIN":13.937172,"FJI":1.152596,"FRA":6.906858,"FRO":15.462525,"FSM":1.441939,"GAB":3.347481,"GBR":9.582912,"GEO":0.929657,"GHA":0.348742,"GIN":0.193804,"GLP":5.799304,"GMB":0.189486,"GNB":0.147601,"GNQ":10.08239,"GRC":9.816557,"GRD":1.988008,"GRL":11.454267,"GTM":0.831148,"GUF":3.48134,"GUY":2.442468,"HKG":6.273521,"HND":0.928477,"HRV":5.203886,"HTI":0.192934,"HUN":6.103558,"IDN":1.526095,"IND":0.947477,"IRL":11.540165,"IRN":6.087359,"IRQ":3.353875,"ISL":10.269706,"ISR":9.637973,"ITA":8.636659,"JAM":4.023746,"JOR":3.14711,"JPN":10.099357,"KAZ":11.534491,"KEN":0.195073,"KGZ":1.059732,"KHM":0.185955,"KIR":0.505101,"KNA":4.261291,"KOR":10.206467,"KSV":0,"KWT":28.372081,"LAO":0.214616,"LBN":4.113168,"LBR":0.150502,"LBY":8.925989,"LCA":2.314621,"LIE":6.745721,"LKA":0.567422,"LSO":0.96884,"LTU":3.658153,"LUX":23.17303,"LVA":3.367352,"MAC":3.311228,"MAR":1.232925,"MDA":1.075791,"MDG":0.094845,"MDV":1.70117,"MEX":4.273751,"MHL":1.949902,"MKD":5.420438,"MLI":0.100935,"MLT":7.275486,"MMR":0.211919,"MNE":2.987571,"MNG":3.151643,"MOZ":0.096708,"MRT":0.447306,"MSR":7.918738,"MTQ":5.224808,"MUS":2.462643,"MWI":0.074733,"MYS":6.326801,"MYT":1.069045,"NAM":0.983226,"NCL":11.613684,"NER":0.058483,"NGA":0.751263,"NIC":0.814427,"NIU":1.900415,"NLD":11.099329,"NOR":9.633821,"NPL":0.109426,"NRU":6.37587,"NZL":9.015424,"OMN":13.171382,"PAK":0.704059,"PAN":1.914128,"PER":0.948839,"PHL":0.846551,"PLW":10.689738,"PNG":0.647263,"POL":8.275799,"PRI":0,"PRK":2.949293,"PRT":6.162109,"PRY":0.753091,"PSE":0.377856,"PYF":2.812325,"QAT":55.175783,"REU":3.875056,"ROU":4.787612,"RUS":10.59212,"RWA":0.059419,"SAU":14.103895,"SDN":0.293897,"SEN":0.472232,"SGP":11.697473,"SHN":1.91265,"SLB":0.556095,"SLE":0.099973,"SLV":1.067697,"SOM":0.060827,"SPM":10.043212,"SRB":7.077502,"SSD":0.107739,"STP":0.428923,"SUR":3.052457,"SVK":7.869522,"SVN":8.178969,"SWE":6.401993,"SWZ":0.948186,"SXM":18.776042,"SYC":4.076371,"SYR":3.042456,"TCA":7.247435,"TCD":0.080879,"TGO":0.332915,"THA":3.176233,"TJK":0.310357,"TKM":7.893791,"TLS":0.173964,"TON":1.122958,"TTO":23.826911,"TUN":2.052786,"TUR":3.539595,"TUV":1.136947,"TWN":10.994269,"TZA":0.098764,"UGA":0.057399,"UKR":6.448788,"URY":1.367556,"USA":20.665068,"UZB":4.861284,"VCT":1.749266,"VEN":7.426006,"VGB":6.667273,"VNM":0.933377,"VUT":0.406604,"WLF":1.70634,"WSM":0.840546,"YEM":0.846083,"ZAF":8.400884,"ZMB":0.191402,"ZWE":0.87858},"2004":{"ABW":27.967672,"AFG":0.052529,"AGO":0.996244,"AIA":10.131724,"ALB":1.363761,"AND":7.286756,"ARE":27.997071,"ARG":4.061243,"ARM":1.204013,"ATG":4.641441,"AUS":19.21304,"AUT":9.506331,"AZE":3.749,"BDI":0.027787,"BEL":12.316075,"BEN":0.32853,"BES":4.587726,"BFA":0.08182,"BGD":0.258992,"BGR":6.304051,"BHR":21.457176,"BHS":5.96981,"BIH":3.732314,"BLR":5.825521,"BLZ":1.440675,"BMU":9.285559,"BOL":1.087256,"BRA":1.956637,"BRB":4.728106,"BRN":13.519132,"BTN":0.44744,"BWA":2.095026,"CAF":0.053422,"CAN":18.162386,"CHE":6.128891,"CHL":3.684992,"CHN":4.028136,"CIV":0.395544,"CMR":0.229115,"COD":0.020969,"COG":0.241991,"COK":3.636604,"COL":1.310241,"COM":0.252188,"CPV":0.835837,"CRI":1.608747,"CUB":2.246821,"CUW":35.151508,"CYP":7.660303,"CZE":12.498543,"DEU":10.910219,"DJI":0.496967,"DMA":2.083822,"DNK":10.174272,"DOM":1.916725,"DZA":2.702333,"ECU":2.126822,"EGY":1.923873,"ERI":0.278316,"ESP":8.25956,"EST":12.728479,"ETH":0.068506,"FIN":13.186161,"FJI":1.492328,"FRA":6.883891,"FRO":15.575569,"FSM":1.282291,"GAB":3.286895,"GBR":9.557824,"GEO":1.071862,"GHA":0.32654,"GIN":0.196672,"GLP":6.293178,"GMB":0.197719,"GNB":0.149606,"GNQ":12.055855,"GRC":9.850147,"GRD":1.873553,"GRL":11.253171,"GTM":0.869898,"GUF":3.274834,"GUY":2.53446,"HKG":6.010615,"HND":0.974369,"HRV":5.151044,"HTI":0.184344,"HUN":5.956669,"IDN":1.52428,"IND":0.989662,"IRL":11.450226,"IRN":6.401797,"IRQ":4.078943,"ISL":10.603797,"ISR":8.896204,"ITA":8.668467,"JAM":3.969267,"JOR":3.374777,"JPN":10.049845,"KAZ":12.067076,"KEN":0.213813,"KGZ":1.13059,"KHM":0.187755,"KIR":0.495012,"KNA":4.562301,"KOR":10.295776,"KSV":0,"KWT":29.30554,"LAO":0.222338,"LBN":3.761569,"LBR":0.175014,"LBY":8.901689,"LCA":2.453985,"LIE":6.687779,"LKA":0.623248,"LSO":0.998408,"LTU":3.882236,"LUX":25.83967,"LVA":3.415564,"MAC":3.605988,"MAR":1.405966,"MDA":1.139963,"MDG":0.098063,"MDV":2.207119,"MEX":4.221976,"MHL":2.153908,"MKD":5.349835,"MLI":0.110334,"MLT":6.898184,"MMR":0.26433,"MNE":3.227087,"MNG":3.349594,"MOZ":0.094645,"MRT":0.470035,"MSR":10.230241,"MTQ":5.663908,"MUS":2.470251,"MWI":0.073501,"MYS":6.754049,"MYT":1.142911,"NAM":1.01641,"NCL":10.538123,"NER":0.060541,"NGA":0.721611,"NIC":0.812784,"NIU":1.937599,"NLD":11.168892,"NOR":9.648155,"NPL":0.099308,"NRU":6.381422,"NZL":8.780374,"OMN":11.176214,"PAK":0.759593,"PAN":1.760846,"PER":1.136742,"PHL":0.860107,"PLW":10.859296,"PNG":0.712636,"POL":8.405945,"PRI":0,"PRK":2.994788,"PRT":6.416704,"PRY":0.749827,"PSE":0.634294,"PYF":2.715781,"QAT":54.902998,"REU":3.992126,"ROU":4.796291,"RUS":10.680396,"RWA":0.058664,"SAU":16.676025,"SDN":0.363173,"SEN":0.489613,"SGP":10.97295,"SHN":1.949628,"SLB":0.582469,"SLE":0.094028,"SLV":1.036145,"SOM":0.058668,"SPM":9.516883,"SRB":7.651497,"SSD":0.130104,"STP":0.464689,"SUR":3.047142,"SVK":7.959216,"SVN":8.365963,"SWE":6.295116,"SWZ":0.938549,"SXM":19.505923,"SYC":4.368341,"SYR":2.786149,"TCA":7.049543,"TCD":0.077751,"TGO":0.313362,"THA":3.375,"TJK":0.376476,"TKM":9.636622,"TLS":0.185913,"TON":1.046498,"TTO":23.932148,"TUN":2.130406,"TUR":3.609773,"TUV":1.122664,"TWN":11.358934,"TZA":0.110328,"UGA":0.059216,"UKR":6.564912,"URY":1.679287,"USA":20.813086,"UZB":4.769147,"VCT":1.952259,"VEN":5.767664,"VGB":7.097337,"VNM":1.065996,"VUT":0.275979,"WLF":1.726789,"WSM":0.876681,"YEM":0.899372,"ZAF":9.247539,"ZMB":0.18807,"ZWE":0.775326},"2005":{"ABW":28.774362,"AFG":0.077403,"AGO":0.977124,"AIA":10.573879,"ALB":1.405185,"AND":7.206274,"ARE":26.740916,"ARG":4.131869,"ARM":1.436106,"ATG":4.679262,"AUS":19.143302,"AUT":9.611982,"AZE":3.960892,"BDI":0.020827,"BEL":11.946054,"BEN":0.30551,"BES":4.363773,"BFA":0.080864,"BGD":0.267376,"BGR":6.481506,"BHR":21.957636,"BHS":5.478028,"BIH":3.919106,"BLR":5.969735,"BLZ":1.502844,"BMU":9.25326,"BOL":1.190629,"BRA":1.950622,"BRB":4.89523,"BRN":13.278512,"BTN":0.570573,"BWA":2.162232,"CAF":0.051362,"CAN":17.837569,"CHE":6.162611,"CHL":3.766635,"CHN":4.503496,"CIV":0.395174,"CMR":0.207887,"COD":0.025553,"COG":0.271205,"COK":4.354417,"COL":1.422508,"COM":0.2411,"CPV":0.907028,"CRI":1.557826,"CUB":2.173383,"CUW":34.323898,"CYP":7.673323,"CZE":12.226379,"DEU":10.667155,"DJI":0.498317,"DMA":2.080787,"DNK":9.479704,"DOM":1.957553,"DZA":3.23069,"ECU":2.176433,"EGY":2.087171,"ERI":0.271549,"ESP":8.47116,"EST":12.630298,"ETH":0.063975,"FIN":10.874294,"FJI":1.172583,"FRA":6.877628,"FRO":14.94705,"FSM":1.05686,"GAB":3.331776,"GBR":9.445231,"GEO":1.26669,"GHA":0.302391,"GIN":0.199633,"GLP":5.929357,"GMB":0.194193,"GNB":0.154026,"GNQ":9.296374,"GRC":10.247852,"GRD":1.960709,"GRL":11.322255,"GTM":0.922062,"GUF":2.964761,"GUY":2.131721,"HKG":6.304072,"HND":0.90353,"HRV":5.269888,"HTI":0.18924,"HUN":5.983633,"IDN":1.525266,"IND":1.026231,"IRL":11.685046,"IRN":6.599392,"IRQ":3.929248,"ISL":9.993781,"ISR":8.418692,"ITA":8.629837,"JAM":3.891323,"JOR":3.598956,"JPN":10.098716,"KAZ":12.802424,"KEN":0.232635,"KGZ":1.061901,"KHM":0.209386,"KIR":0.63453,"KNA":4.234478,"KOR":10.413296,"KSV":0,"KWT":31.835763,"LAO":0.228433,"LBN":3.586051,"LBR":0.199176,"LBY":9.761689,"LCA":2.348349,"LIE":6.617528,"LKA":0.606654,"LSO":1.017251,"LTU":4.184756,"LUX":26.003176,"LVA":3.497502,"MAC":3.741844,"MAR":1.467564,"MDA":1.233961,"MDG":0.091877,"MDV":1.957201,"MEX":4.400442,"MHL":2.090362,"MKD":5.377913,"MLI":0.11036,"MLT":6.44715,"MMR":0.24141,"MNE":2.76648,"MNG":3.327182,"MOZ":0.087561,"MRT":0.476798,"MSR":8.58811,"MTQ":6.117664,"MUS":2.618291,"MWI":0.070936,"MYS":6.99491,"MYT":1.204014,"NAM":1.177862,"NCL":11.603567,"NER":0.051145,"NGA":0.752774,"NIC":0.782834,"NIU":1.974138,"NLD":10.879298,"NOR":9.3739,"NPL":0.11363,"NRU":6.036829,"NZL":9.055421,"OMN":11.715767,"PAK":0.772442,"PAN":2.108777,"PER":1.312179,"PHL":0.849422,"PLW":11.085674,"PNG":0.674299,"POL":8.383716,"PRI":0,"PRK":3.11233,"PRT":6.625097,"PRY":0.690154,"PSE":0.77394,"PYF":2.892703,"QAT":59.726062,"REU":4.444625,"ROU":4.752538,"RUS":10.842018,"RWA":0.056969,"SAU":16.225122,"SDN":0.339468,"SEN":0.504728,"SGP":9.280941,"SHN":1.986985,"SLB":0.584738,"SLE":0.074784,"SLV":1.043044,"SOM":0.056707,"SPM":10.1861,"SRB":6.5936,"SSD":0.119021,"STP":0.475903,"SUR":3.077215,"SVK":7.958878,"SVN":8.445984,"SWE":5.973006,"SWZ":0.946862,"SXM":19.14257,"SYC":4.43692,"SYR":2.684177,"TCA":7.940321,"TCD":0.076539,"TGO":0.30142,"THA":3.4535,"TJK":0.352062,"TKM":9.299874,"TLS":0.18144,"TON":1.07527,"TTO":27.715134,"TUN":2.14363,"TUR":3.853718,"TUV":0.739306,"TWN":11.688736,"TZA":0.135891,"UGA":0.072207,"UKR":6.673406,"URY":1.726114,"USA":20.676284,"UZB":4.386946,"VCT":1.962104,"VEN":6.142874,"VGB":7.640805,"VNM":1.13894,"VUT":0.269372,"WLF":2.014155,"WSM":0.893535,"YEM":0.928412,"ZAF":8.48541,"ZMB":0.19391,"ZWE":0.87515},"2006":{"ABW":28.39805,"AFG":0.084869,"AGO":1.096185,"AIA":11.593996,"ALB":1.302102,"AND":6.8054,"ARE":24.849687,"ARG":4.423073,"ARM":1.454357,"ATG":4.755795,"AUS":19.171531,"AUT":9.289873,"AZE":4.462742,"BDI":0.023922,"BEL":11.705635,"BEN":0.398816,"BES":4.369977,"BFA":0.09475,"BGD":0.292291,"BGR":6.681897,"BHR":20.001575,"BHS":5.257083,"BIH":4.284488,"BLR":6.252705,"BLZ":1.535502,"BMU":10.338961,"BOL":1.211671,"BRA":1.953552,"BRB":4.965517,"BRN":12.707753,"BTN":0.556081,"BWA":2.142886,"CAF":0.052899,"CAN":17.473665,"CHE":6.070005,"CHL":3.914967,"CHN":4.941642,"CIV":0.351209,"CMR":0.211391,"COD":0.026587,"COG":0.295665,"COK":4.098164,"COL":1.449622,"COM":0.272683,"CPV":0.976804,"CRI":1.600377,"CUB":2.192865,"CUW":35.198467,"CYP":7.755461,"CZE":12.282229,"DEU":10.815009,"DJI":0.484526,"DMA":2.078729,"DNK":10.899411,"DOM":2.058551,"DZA":2.996938,"ECU":2.076677,"EGY":2.183056,"ERI":0.1906,"ESP":8.129161,"EST":12.21818,"ETH":0.066735,"FIN":12.982801,"FJI":1.298668,"FRA":6.672161,"FRO":14.030178,"FSM":1.029764,"GAB":2.75765,"GBR":9.338998,"GEO":1.549801,"GHA":0.396539,"GIN":0.202626,"GLP":5.836186,"GMB":0.203402,"GNB":0.152873,"GNQ":7.850694,"GRC":10.122331,"GRD":2.079792,"GRL":11.657144,"GTM":0.907858,"GUF":2.445309,"GUY":1.990551,"HKG":6.021728,"HND":0.993933,"HRV":5.330985,"HTI":0.189077,"HUN":5.929486,"IDN":1.495727,"IND":1.073585,"IRL":11.241284,"IRN":7.066125,"IRQ":3.389133,"ISL":10.34192,"ISR":9.096643,"ITA":8.503296,"JAM":4.304339,"JOR":3.378525,"JPN":9.910887,"KAZ":13.907071,"KEN":0.252826,"KGZ":1.03285,"KHM":0.222377,"KIR":0.658973,"KNA":4.299185,"KOR":10.478356,"KSV":0,"KWT":31.052455,"LAO":0.29552,"LBN":3.134068,"LBR":0.194691,"LBY":8.915531,"LCA":2.465117,"LIE":6.62446,"LKA":0.593464,"LSO":1.030557,"LTU":4.343779,"LUX":25.233396,"LVA":3.770489,"MAC":3.226952,"MAR":1.499996,"MDA":1.275696,"MDG":0.086168,"MDV":2.412359,"MEX":4.458598,"MHL":2.230519,"MKD":5.206179,"MLI":0.112688,"MLT":6.472951,"MMR":0.265744,"MNE":3.261162,"MNG":3.595624,"MOZ":0.092382,"MRT":0.461385,"MSR":8.519129,"MTQ":6.021695,"MUS":2.868007,"MWI":0.069878,"MYS":6.74422,"MYT":1.276248,"NAM":1.176725,"NCL":11.018958,"NER":0.04786,"NGA":0.677677,"NIC":0.798956,"NIU":1.998909,"NLD":10.54119,"NOR":9.423982,"NPL":0.092631,"NRU":4.271226,"NZL":8.930707,"OMN":15.248749,"PAK":0.806148,"PAN":2.233598,"PER":1.001785,"PHL":0.756794,"PLW":11.57898,"PNG":0.64178,"POL":8.750772,"PRI":0,"PRK":3.142885,"PRT":6.157458,"PRY":0.706219,"PSE":0.624189,"PYF":2.838957,"QAT":62.259216,"REU":4.641312,"ROU":4.934637,"RUS":11.289669,"RWA":0.055493,"SAU":16.991458,"SDN":0.362104,"SEN":0.392634,"SGP":10.357662,"SHN":2.025802,"SLB":0.58662,"SLE":0.099644,"SLV":1.113246,"SOM":0.055037,"SPM":10.852723,"SRB":7.804996,"SSD":0.124375,"STP":0.508505,"SUR":3.330428,"SVK":7.913381,"SVN":8.531277,"SWE":5.91837,"SWZ":0.941723,"SXM":19.750327,"SYC":4.417347,"SYR":2.719302,"TCA":8.602993,"TCD":0.076351,"TGO":0.255438,"THA":3.485257,"TJK":0.376224,"TKM":9.461773,"TLS":0.372087,"TON":1.207647,"TTO":30.803824,"TUN":2.155932,"TUR":4.055478,"TUV":1.095912,"TWN":12.072538,"TZA":0.144961,"UGA":0.082833,"UKR":7.138761,"URY":1.985712,"USA":20.207175,"UZB":4.438518,"VCT":1.940068,"VEN":5.909518,"VGB":7.531966,"VNM":1.17479,"VUT":0.21367,"WLF":2.05554,"WSM":0.90933,"YEM":0.959874,"ZAF":9.02282,"ZMB":0.186368,"ZWE":0.840637},"2007":{"ABW":29.149369,"AFG":0.108091,"AGO":1.194531,"AIA":11.99489,"ALB":1.326901,"AND":6.89039,"ARE":22.692414,"ARG":4.369678,"ARM":1.697584,"ATG":4.958837,"AUS":19.184298,"AUT":8.934209,"AZE":3.43069,"BDI":0.025366,"BEL":11.308469,"BEN":0.454564,"BES":4.731459,"BFA":0.107799,"BGD":0.295847,"BGR":7.220797,"BHR":25.728305,"BHS":5.234783,"BIH":4.359998,"BLR":6.128458,"BLZ":1.602837,"BMU":11.545,"BOL":1.307313,"BRA":2.047249,"BRB":5.020498,"BRN":21.940583,"BTN":0.547801,"BWA":2.149621,"CAF":0.052755,"CAN":18.060601,"CHE":5.750373,"CHL":4.284992,"CHN":5.280773,"CIV":0.329835,"CMR":0.312467,"COD":0.02814,"COG":0.306142,"COK":3.544206,"COL":1.3896,"COM":0.172242,"CPV":1.001781,"CRI":1.792952,"CUB":2.150891,"CUW":38.985769,"CYP":7.919728,"CZE":12.417492,"DEU":10.485129,"DJI":0.533595,"DMA":2.663759,"DNK":9.983928,"DOM":2.126408,"DZA":3.18981,"ECU":2.363591,"EGY":2.26113,"ERI":0.192525,"ESP":8.155138,"EST":14.8939,"ETH":0.071218,"FIN":12.623135,"FJI":1.217702,"FRA":6.467708,"FRO":14.243543,"FSM":1.204251,"GAB":2.638835,"GBR":9.134187,"GEO":1.629438,"GHA":0.405713,"GIN":0.206091,"GLP":6.210296,"GMB":0.197226,"GNB":0.159132,"GNQ":5.885175,"GRC":10.327347,"GRD":2.131663,"GRL":11.517872,"GTM":0.886709,"GUF":2.821757,"GUY":2.353806,"HKG":6.223339,"HND":1.036842,"HRV":5.643555,"HTI":0.188137,"HUN":5.831358,"IDN":1.653147,"IND":1.140592,"IRL":10.932603,"IRN":7.088823,"IRQ":2.134247,"ISL":11.170932,"ISR":9.033354,"ITA":8.346018,"JAM":3.979397,"JOR":3.311445,"JPN":10.182005,"KAZ":14.127635,"KEN":0.250827,"KGZ":1.231205,"KHM":0.253095,"KIR":0.574756,"KNA":4.598022,"KOR":10.819208,"KSV":0,"KWT":29.86925,"LAO":0.303804,"LBN":2.858047,"LBR":0.17208,"LBY":8.196815,"LCA":2.537184,"LIE":5.712487,"LKA":0.605215,"LSO":1.045556,"LTU":4.835585,"LUX":23.585195,"LVA":3.969159,"MAC":2.644923,"MAR":1.566077,"MDA":1.284177,"MDG":0.086526,"MDV":2.400399,"MEX":4.430043,"MHL":2.305341,"MKD":4.503748,"MLI":0.126983,"MLT":6.628069,"MMR":0.264172,"MNE":3.252776,"MNG":4.589206,"MOZ":0.102858,"MRT":0.519361,"MSR":8.451248,"MTQ":5.43674,"MUS":2.901016,"MWI":0.071833,"MYS":6.734508,"MYT":1.306685,"NAM":1.125708,"NCL":11.73687,"NER":0.04806,"NGA":0.635695,"NIC":0.811542,"NIU":2.010977,"NLD":10.485729,"NOR":9.696412,"NPL":0.096218,"NRU":4.282458,"NZL":8.625066,"OMN":16.874391,"PAK":0.854213,"PAN":2.14174,"PER":1.212189,"PHL":0.790106,"PLW":13.054632,"PNG":0.883566,"POL":8.741306,"PRI":0,"PRK":2.606205,"PRT":5.909526,"PRY":0.72298,"PSE":0.624812,"PYF":2.765999,"QAT":51.06011,"REU":4.785546,"ROU":5.200804,"RUS":11.309476,"RWA":0.056932,"SAU":14.640385,"SDN":0.413731,"SEN":0.420493,"SGP":10.118465,"SHN":2.068888,"SLB":0.595396,"SLE":0.082051,"SLV":1.1326,"SOM":0.054706,"SPM":10.875989,"SRB":7.676341,"SSD":0.139371,"STP":0.49617,"SUR":3.326825,"SVK":7.61721,"SVN":8.571848,"SWE":5.799912,"SWZ":0.959934,"SXM":22.010787,"SYC":4.563147,"SYR":3.174368,"TCA":9.624486,"TCD":0.079617,"TGO":0.250805,"THA":3.542298,"TJK":0.448932,"TKM":9.305542,"TLS":0.388196,"TON":1.065136,"TTO":32.663631,"TUN":2.238507,"TUR":4.449882,"TUV":1.083062,"TWN":12.195809,"TZA":0.136872,"UGA":0.091462,"UKR":7.262555,"URY":1.78676,"USA":20.265635,"UZB":4.390429,"VCT":2.115932,"VEN":5.446814,"VGB":7.417887,"VNM":1.184041,"VUT":0.433239,"WLF":2.099112,"WSM":0.942555,"YEM":0.915091,"ZAF":9.298462,"ZMB":0.18499,"ZWE":0.789937},"2008":{"ABW":27.107229,"AFG":0.160989,"AGO":1.174941,"AIA":11.800786,"ALB":1.48967,"AND":7.081822,"ARE":22.031284,"ARG":4.670683,"ARM":1.86859,"ATG":5.017309,"AUS":19.024637,"AUT":8.83076,"AZE":3.938994,"BDI":0.025229,"BEL":11.203391,"BEN":0.440017,"BES":4.38079,"BFA":0.114065,"BGD":0.311515,"BGR":7.045829,"BHR":26.731666,"BHS":5.281969,"BIH":5.06129,"BLR":6.419853,"BLZ":1.426423,"BMU":10.25211,"BOL":1.374715,"BRA":2.141657,"BRB":5.913635,"BRN":23.380666,"BTN":0.58208,"BWA":2.243317,"CAF":0.036909,"CAN":17.356522,"CHE":5.853481,"CHL":4.249036,"CHN":5.636008,"CIV":0.325597,"CMR":0.28897,"COD":0.029085,"COG":0.325213,"COK":3.421528,"COL":1.521159,"COM":0.174623,"CPV":0.918987,"CRI":1.774785,"CUB":2.492617,"CUW":36.899904,"CYP":7.979977,"CZE":11.842875,"DEU":10.521235,"DJI":0.564404,"DMA":2.397139,"DNK":9.314651,"DOM":2.135036,"DZA":3.153985,"ECU":2.039972,"EGY":2.322911,"ERI":0.13619,"ESP":7.335389,"EST":13.380767,"ETH":0.076077,"FIN":11.032776,"FJI":0.919339,"FRA":6.331354,"FRO":13.017868,"FSM":1.011186,"GAB":2.601807,"GBR":8.825938,"GEO":1.368356,"GHA":0.366905,"GIN":0.204184,"GLP":6.078219,"GMB":0.199246,"GNB":0.152622,"GNQ":6.131395,"GRC":10.031078,"GRD":2.247693,"GRL":11.979178,"GTM":0.779227,"GUF":2.66665,"GUY":2.264038,"HKG":6.069004,"HND":1.053214,"HRV":5.370232,"HTI":0.183874,"HUN":5.711383,"IDN":1.539458,"IND":1.211135,"IRL":10.637711,"IRN":7.292087,"IRQ":3.141974,"ISL":11.963984,"ISR":9.609155,"ITA":8.085689,"JAM":3.975711,"JOR":3.123533,"JPN":9.622919,"KAZ":14.022857,"KEN":0.252917,"KGZ":1.411861,"KHM":0.277305,"KIR":0.634361,"KNA":4.584273,"KOR":11.005493,"KSV":4.096011,"KWT":31.044675,"LAO":0.347358,"LBN":3.563657,"LBR":0.140278,"LBY":8.604285,"LCA":2.52126,"LIE":6.201403,"LKA":0.590925,"LSO":1.065216,"LTU":4.715399,"LUX":22.889217,"LVA":3.812244,"MAC":2.140066,"MAR":1.623806,"MDA":1.361439,"MDG":0.08677,"MDV":2.501521,"MEX":4.494525,"MHL":2.382934,"MKD":4.455684,"MLI":0.134462,"MLT":6.627691,"MMR":0.199666,"MNE":4.125486,"MNG":4.524792,"MOZ":0.099788,"MRT":0.548466,"MSR":9.894474,"MTQ":5.46976,"MUS":2.952606,"MWI":0.078292,"MYS":7.301295,"MYT":1.439195,"NAM":1.326447,"NCL":11.253629,"NER":0.05189,"NGA":0.621936,"NIC":0.767528,"NIU":4.024163,"NLD":10.622414,"NOR":9.393636,"NPL":0.124687,"NRU":4.292492,"NZL":8.804496,"OMN":17.386823,"PAK":0.827839,"PAN":2.098431,"PER":1.416721,"PHL":0.847107,"PLW":10.741493,"PNG":0.671409,"POL":8.57893,"PRI":0,"PRK":2.874223,"PRT":5.680656,"PRY":0.757811,"PSE":0.538708,"PYF":2.833952,"QAT":44.490524,"REU":4.902147,"ROU":5.139059,"RUS":11.510299,"RWA":0.053958,"SAU":15.75722,"SDN":0.425199,"SEN":0.399252,"SGP":12.398861,"SHN":2.089734,"SLB":0.596464,"SLE":0.083015,"SLV":1.055473,"SOM":0.052504,"SPM":10.884965,"SRB":6.704591,"SSD":0.140426,"STP":0.484311,"SUR":3.624451,"SVK":7.685218,"SVN":8.986289,"SWE":5.533532,"SWZ":0.937961,"SXM":20.962402,"SYC":4.618625,"SYR":3.114302,"TCA":9.620305,"TCD":0.090125,"TGO":0.244722,"THA":3.463452,"TJK":0.395381,"TKM":11.110972,"TLS":0.337218,"TON":1.130737,"TTO":31.659693,"TUN":2.278307,"TUR":4.354026,"TUV":1.070093,"TWN":11.591933,"TZA":0.137971,"UGA":0.091105,"UKR":7.067205,"URY":2.458429,"USA":19.362012,"UZB":4.450755,"VCT":1.992821,"VEN":6.03892,"VGB":7.29573,"VNM":1.323955,"VUT":0.407195,"WLF":1.608782,"WSM":0.840599,"YEM":0.944115,"ZAF":9.789217,"ZMB":0.198633,"ZWE":0.61513},"2009":{"ABW":26.479539,"AFG":0.233406,"AGO":1.224692,"AIA":11.320871,"ALB":1.503665,"AND":6.995396,"ARE":20.706499,"ARG":4.398479,"ARM":1.471962,"ATG":5.244564,"AUS":18.792625,"AUT":8.066544,"AZE":3.493169,"BDI":0.019352,"BEL":9.973966,"BEN":0.460563,"BES":4.318983,"BFA":0.116867,"BGD":0.335009,"BGR":6.000523,"BHR":23.822968,"BHS":5.296049,"BIH":5.296137,"BLR":6.208194,"BLZ":1.644404,"BMU":7.518507,"BOL":1.418558,"BRA":2.003804,"BRB":5.833459,"BRN":19.845044,"BTN":0.529115,"BWA":1.881625,"CAF":0.035319,"CAN":16.192443,"CHE":5.629205,"CHL":3.914855,"CHN":5.889315,"CIV":0.266679,"CMR":0.34132,"COD":0.026358,"COG":0.404991,"COK":3.304076,"COL":1.637335,"COM":0.211003,"CPV":1.009018,"CRI":1.697904,"CUB":2.516693,"CUW":37.174397,"CYP":7.625506,"CZE":11.036138,"DEU":9.720576,"DJI":0.508266,"DMA":2.343699,"DNK":8.83953,"DOM":2.050222,"DZA":3.414727,"ECU":2.204688,"EGY":2.376224,"ERI":0.161262,"ESP":6.421439,"EST":10.820594,"ETH":0.074387,"FIN":10.471438,"FJI":0.817038,"FRA":5.975608,"FRO":11.878172,"FSM":1.358698,"GAB":2.559865,"GBR":7.938318,"GEO":1.591519,"GHA":0.300496,"GIN":0.210597,"GLP":5.9175,"GMB":0.198991,"GNB":0.153547,"GNQ":5.164143,"GRC":9.436017,"GRD":2.232391,"GRL":10.505528,"GTM":0.802421,"GUF":3.431753,"GUY":2.540997,"HKG":5.860715,"HND":0.970172,"HRV":4.975766,"HTI":0.194057,"HUN":5.141994,"IDN":1.668002,"IND":1.316904,"IRL":9.373613,"IRN":7.521591,"IRQ":3.399544,"ISL":11.667863,"ISR":8.869942,"ITA":7.130191,"JAM":2.914261,"JOR":3.146776,"JPN":9.080565,"KAZ":13.477149,"KEN":0.296463,"KGZ":1.244275,"KHM":0.321925,"KIR":0.51851,"KNA":4.726642,"KOR":11.06898,"KSV":4.523266,"KWT":31.104779,"LAO":0.428168,"LBN":4.232879,"LBR":0.120532,"LBY":8.352166,"LCA":2.504738,"LIE":5.756823,"LKA":0.631986,"LSO":1.103302,"LTU":4.101028,"LUX":21.369049,"LVA":3.506621,"MAC":3.481678,"MAR":1.58724,"MDA":1.210701,"MDG":0.080806,"MDV":2.529887,"MEX":4.285507,"MHL":2.461217,"MKD":4.111462,"MLI":0.125524,"MLT":6.083351,"MMR":0.207345,"MNE":2.664487,"MNG":4.884808,"MOZ":0.108706,"MRT":0.589969,"MSR":9.026483,"MTQ":5.837533,"MUS":2.897149,"MWI":0.076437,"MYS":7.113141,"MYT":1.423756,"NAM":1.335959,"NCL":11.412154,"NER":0.059951,"NGA":0.478206,"NIC":0.770294,"NIU":2.018733,"NLD":10.252007,"NOR":8.95076,"NPL":0.152787,"NRU":3.93863,"NZL":8.045918,"OMN":16.116625,"PAK":0.817464,"PAN":2.377038,"PER":1.769005,"PHL":0.822962,"PLW":10.509721,"PNG":0.691585,"POL":8.218549,"PRI":0,"PRK":2.174887,"PRT":5.401343,"PRY":0.794641,"PSE":0.53559,"PYF":2.829614,"QAT":42.599432,"REU":4.929824,"ROU":4.251006,"RUS":10.752071,"RWA":0.055583,"SAU":16.354712,"SDN":0.430643,"SEN":0.431132,"SGP":8.607362,"SHN":2.079849,"SLB":0.603918,"SLE":0.080189,"SLV":1.036326,"SOM":0.050915,"SPM":10.893954,"SRB":5.969679,"SSD":0.139846,"STP":0.514237,"SUR":3.693362,"SVK":6.981365,"SVN":7.921489,"SWE":5.098307,"SWZ":0.967129,"SXM":21.248359,"SYC":4.830056,"SYR":2.820435,"TCA":9.614779,"TCD":0.09434,"TGO":0.428348,"THA":3.640306,"TJK":0.327233,"TKM":9.683471,"TLS":0.392004,"TON":1.231091,"TTO":31.559086,"TUN":2.255224,"TUR":4.379599,"TUV":1.056111,"TWN":10.957477,"TZA":0.131281,"UGA":0.095497,"UKR":6.04608,"URY":2.376316,"USA":17.772331,"UZB":3.762726,"VCT":2.535178,"VEN":5.986074,"VGB":7.045112,"VNM":1.427367,"VUT":0.504454,"WLF":2.188769,"WSM":0.872489,"YEM":1.00923,"ZAF":9.388231,"ZMB":0.220778,"ZWE":0.650622},"2010":{"ABW":24.97659,"AFG":0.296733,"AGO":1.235417,"AIA":11.404798,"ALB":1.642022,"AND":7.223591,"ARE":21.295276,"ARG":4.543372,"ARM":1.443424,"ATG":5.30178,"AUS":18.397758,"AUT":8.610293,"AZE":3.316252,"BDI":0.032519,"BEL":10.531203,"BEN":0.495398,"BES":2.870244,"BFA":0.126351,"BGD":0.363846,"BGR":6.303636,"BHR":23.957117,"BHS":5.094451,"BIH":5.548469,"BLR":6.416851,"BLZ":1.672145,"BMU":9.586332,"BOL":1.51609,"BRA":2.242226,"BRB":5.329266,"BRN":20.352832,"BTN":0.658699,"BWA":2.169218,"CAF":0.036168,"CAN":16.387061,"CHE":5.758528,"CHL":4.193735,"CHN":6.391268,"CIV":0.287117,"CMR":0.335146,"COD":0.029551,"COG":0.442052,"COK":3.831745,"COL":1.702031,"COM":0.245747,"CPV":1.068525,"CRI":1.620995,"CUB":3.029101,"CUW":25.225516,"CYP":7.172522,"CZE":11.226466,"DEU":10.237197,"DJI":0.562037,"DMA":2.504661,"DNK":8.864171,"DOM":2.102493,"DZA":3.285695,"ECU":2.32332,"EGY":2.301844,"ERI":0.157999,"ESP":6.104053,"EST":14.271136,"ETH":0.071011,"FIN":11.948074,"FJI":1.206032,"FRA":6.031677,"FRO":13.018137,"FSM":0.953564,"GAB":2.79541,"GBR":8.156537,"GEO":1.618013,"GHA":0.379658,"GIN":0.241871,"GLP":6.218392,"GMB":0.219393,"GNB":0.151963,"GNQ":6.199707,"GRC":8.823279,"GRD":2.281185,"GRL":12.046529,"GTM":0.763088,"GUF":3.119333,"GUY":2.522903,"HKG":5.617,"HND":0.946241,"HRV":4.810669,"HTI":0.217094,"HUN":5.213742,"IDN":1.850474,"IND":1.351343,"IRL":9.237005,"IRN":7.559279,"IRQ":3.520431,"ISL":11.361126,"ISR":9.318062,"ITA":7.290197,"JAM":2.808188,"JOR":2.974254,"JPN":9.484829,"KAZ":14.853571,"KEN":0.282883,"KGZ":1.15139,"KHM":0.353544,"KIR":0.54284,"KNA":4.637681,"KOR":12.175826,"KSV":4.670542,"KWT":30.330093,"LAO":0.475141,"LBN":4.002681,"LBR":0.188286,"LBY":9.342715,"LCA":2.850861,"LIE":5.311764,"LKA":0.631442,"LSO":1.124878,"LTU":4.442985,"LUX":22.091948,"LVA":4.070412,"MAC":2.215637,"MAR":1.674586,"MDA":1.313393,"MDG":0.086137,"MDV":2.584028,"MEX":4.121324,"MHL":2.537966,"MKD":4.05978,"MLI":0.134487,"MLT":6.182926,"MMR":0.264808,"MNE":3.837932,"MNG":5.096102,"MOZ":0.11418,"MRT":0.597905,"MSR":11.872013,"MTQ":5.858489,"MUS":3.049217,"MWI":0.06965,"MYS":7.519228,"MYT":1.411676,"NAM":1.35266,"NCL":13.604595,"NER":0.07029,"NGA":0.697808,"NIC":0.762986,"NIU":2.022075,"NLD":10.924081,"NOR":9.344258,"NPL":0.177615,"NRU":4.293331,"NZL":8.009291,"OMN":17.459009,"PAK":0.791489,"PAN":2.503603,"PER":1.956014,"PHL":0.876538,"PLW":11.264725,"PNG":0.614591,"POL":8.677201,"PRI":0,"PRK":2.029095,"PRT":5.005605,"PRY":0.870537,"PSE":0.509363,"PYF":3.253584,"QAT":41.972586,"REU":5.042738,"ROU":4.161877,"RUS":11.352681,"RWA":0.055621,"SAU":17.602244,"SDN":0.426723,"SEN":0.547672,"SGP":10.664335,"SHN":2.065777,"SLB":0.610221,"SLE":0.084247,"SLV":1.033463,"SOM":0.050878,"SPM":10.897555,"SRB":5.970464,"SSD":0.135186,"STP":0.543149,"SUR":4.346836,"SVK":7.116552,"SVN":8.000596,"SWE":5.679907,"SWZ":0.906073,"SXM":14.51612,"SYC":4.797628,"SYR":2.718135,"TCA":9.490951,"TCD":0.097339,"TGO":0.394972,"THA":3.83454,"TJK":0.332785,"TKM":10.840995,"TLS":0.417402,"TON":1.091867,"TTO":33.296139,"TUN":2.487474,"TUR":4.317713,"TUV":1.041896,"TWN":11.703289,"TZA":0.153549,"UGA":0.110372,"UKR":6.438074,"URY":1.878501,"USA":18.257408,"UZB":3.640037,"VCT":2.011198,"VEN":6.410723,"VGB":7.180142,"VNM":1.585443,"VUT":0.492608,"WLF":2.230406,"WSM":0.94107,"YEM":0.935606,"ZAF":8.937099,"ZMB":0.226238,"ZWE":0.681789},"2011":{"ABW":24.670721,"AFG":0.40474,"AGO":1.250241,"AIA":10.711041,"ALB":1.832234,"AND":6.957586,"ARE":22.505741,"ARG":4.58262,"ARM":1.696456,"ATG":5.111831,"AUS":18.062717,"AUT":8.329335,"AZE":3.523416,"BDI":0.037452,"BEL":9.585851,"BEN":0.460574,"BES":3.547788,"BFA":0.128349,"BGD":0.376513,"BGR":7.04943,"BHR":23.486665,"BHS":5.593671,"BIH":6.347953,"BLR":6.315825,"BLZ":1.678908,"BMU":6.978169,"BOL":1.642569,"BRA":2.334078,"BRB":5.504914,"BRN":23.772297,"BTN":0.935652,"BWA":1.887878,"CAF":0.039489,"CAN":16.520857,"CHE":5.180802,"CHL":4.545612,"CHN":7.021286,"CIV":0.294134,"CMR":0.318871,"COD":0.035533,"COG":0.488596,"COK":4.124036,"COL":1.679135,"COM":0.213255,"CPV":1.166877,"CRI":1.562165,"CUB":2.604818,"CUW":31.723579,"CYP":6.802461,"CZE":10.973864,"DEU":9.934635,"DJI":0.504537,"DMA":2.238631,"DNK":7.935435,"DOM":2.152512,"DZA":3.278487,"ECU":2.454328,"EGY":2.38819,"ERI":0.173288,"ESP":6.101796,"EST":14.301497,"ETH":0.080621,"FIN":10.511401,"FJI":1.117325,"FRA":5.648761,"FRO":11.737279,"FSM":1.086767,"GAB":2.78152,"GBR":7.422031,"GEO":2.042181,"GHA":0.428377,"GIN":0.246408,"GLP":6.210385,"GMB":0.22187,"GNB":0.150293,"GNQ":8.239765,"GRC":8.587696,"GRD":2.199969,"GRL":12.886121,"GTM":0.757565,"GUF":3.046794,"GUY":2.633917,"HKG":6.013593,"HND":1.02758,"HRV":4.745029,"HTI":0.228333,"HUN":5.04271,"IDN":2.042901,"IND":1.414156,"IRL":8.374161,"IRN":7.562403,"IRQ":4.177957,"ISL":10.943442,"ISR":9.195314,"ITA":7.067881,"JAM":3.006226,"JOR":2.987879,"JPN":9.882525,"KAZ":14.054855,"KEN":0.303232,"KGZ":1.360419,"KHM":0.361928,"KIR":0.500223,"KNA":4.851348,"KOR":12.679365,"KSV":4.620375,"KWT":27.438774,"LAO":0.494068,"LBN":4.016631,"LBR":0.202827,"LBY":7.952714,"LCA":2.830823,"LIE":4.884965,"LKA":0.713631,"LSO":1.503233,"LTU":4.610889,"LUX":21.425763,"LVA":3.760661,"MAC":2.563214,"MAR":1.667522,"MDA":1.375466,"MDG":0.106226,"MDV":2.63224,"MEX":4.241461,"MHL":2.628457,"MKD":4.385411,"MLI":0.142085,"MLT":6.084453,"MMR":0.302022,"MNE":3.810215,"MNG":7.787299,"MOZ":0.130748,"MRT":0.611317,"MSR":7.385608,"MTQ":5.890472,"MUS":3.045177,"MWI":0.075279,"MYS":7.435325,"MYT":1.373813,"NAM":1.304715,"NCL":13.291957,"NER":0.076508,"NGA":0.783064,"NIC":0.808727,"NIU":4.046383,"NLD":10.074541,"NOR":9.042182,"NPL":0.19146,"NRU":3.919479,"NZL":7.820988,"OMN":17.182652,"PAK":0.778695,"PAN":2.698241,"PER":1.659697,"PHL":0.869258,"PLW":11.851754,"PNG":0.669292,"POL":8.656909,"PRI":0,"PRK":1.460063,"PRT":4.903211,"PRY":0.889592,"PSE":0.549455,"PYF":3.108296,"QAT":44.146406,"REU":5.000594,"ROU":4.537744,"RUS":11.713346,"RWA":0.061173,"SAU":16.505586,"SDN":0.407235,"SEN":0.607247,"SGP":5.908778,"SHN":2.052278,"SLB":0.622003,"SLE":0.107498,"SLV":1.058992,"SOM":0.050086,"SPM":10.910174,"SRB":6.42404,"SSD":0.125081,"STP":0.531745,"SUR":4.432292,"SVK":7.03074,"SVN":7.920093,"SWE":5.218459,"SWZ":0.911549,"SXM":18.365665,"SYC":4.334616,"SYR":2.542139,"TCA":9.155244,"TCD":0.104767,"TGO":0.371024,"THA":3.768999,"TJK":0.30068,"TKM":11.599525,"TLS":0.355544,"TON":0.95336,"TTO":32.87284,"TUN":2.313705,"TUR":4.608933,"TUV":1.02729,"TWN":11.938044,"TZA":0.167001,"UGA":0.114852,"UKR":6.765866,"URY":2.276464,"USA":17.671368,"UZB":3.898604,"VCT":1.988685,"VEN":6.047017,"VGB":7.206924,"VNM":1.711698,"VUT":0.524899,"WLF":1.988217,"WSM":0.970344,"YEM":0.79253,"ZAF":8.881488,"ZMB":0.236395,"ZWE":0.795591},"2012":{"ABW":13.204638,"AFG":0.329389,"AGO":1.013963,"AIA":10.62029,"ALB":1.676949,"AND":6.862293,"ARE":23.239834,"ARG":4.559746,"ARM":1.972348,"ATG":5.223898,"AUS":17.86907,"AUT":7.979692,"AZE":3.455071,"BDI":0.038709,"BEL":9.278791,"BEN":0.439635,"BES":3.929681,"BFA":0.15303,"BGD":0.399155,"BGR":6.45522,"BHR":22.139051,"BHS":6.051348,"BIH":6.023931,"BLR":6.452123,"BLZ":1.337072,"BMU":5.764632,"BOL":1.680835,"BRA":2.491823,"BRB":5.282892,"BRN":23.362092,"BTN":1.071521,"BWA":2.333664,"CAF":0.039915,"CAN":16.379141,"CHE":5.284444,"CHL":4.591274,"CHN":7.156126,"CIV":0.387993,"CMR":0.361503,"COD":0.033188,"COG":1.064979,"COK":4.274667,"COL":1.752972,"COM":0.224801,"CPV":0.940254,"CRI":1.532765,"CUB":2.638412,"CUW":35.601239,"CYP":6.280744,"CZE":10.587003,"DEU":9.978385,"DJI":0.51065,"DMA":2.39345,"DNK":7.11859,"DOM":2.118932,"DZA":3.64123,"ECU":2.415982,"EGY":2.342532,"ERI":0.185872,"ESP":5.975371,"EST":13.453594,"ETH":0.08585,"FIN":9.447177,"FJI":1.061727,"FRA":5.658864,"FRO":12.190114,"FSM":1.151009,"GAB":3.065166,"GBR":7.639657,"GEO":2.169744,"GHA":0.53547,"GIN":0.224485,"GLP":6.154409,"GMB":0.216887,"GNB":0.148536,"GNQ":5.781233,"GRC":8.335975,"GRD":2.339154,"GRL":10.293272,"GTM":0.765231,"GUF":2.947357,"GUY":2.634852,"HKG":5.908447,"HND":1.048441,"HRV":4.406553,"HTI":0.223987,"HUN":4.712445,"IDN":2.06198,"IND":1.539909,"IRL":8.374792,"IRN":7.609039,"IRQ":4.537404,"ISL":10.875697,"ISR":9.850342,"ITA":6.707027,"JAM":2.867157,"JOR":3.302139,"JPN":10.216229,"KAZ":14.26205,"KEN":0.273689,"KGZ":1.775299,"KHM":0.377098,"KIR":0.459567,"KNA":4.606198,"KOR":12.651422,"KSV":4.34685,"KWT":29.978251,"LAO":0.522059,"LBN":4.312588,"LBR":0.222231,"LBY":9.417373,"LCA":2.835979,"LIE":5.076714,"LKA":0.751677,"LSO":1.505032,"LTU":4.68426,"LUX":20.482064,"LVA":3.661511,"MAC":2.227511,"MAR":1.707641,"MDA":1.358831,"MDG":0.119489,"MDV":2.864723,"MEX":4.332987,"MHL":2.596939,"MKD":4.160547,"MLI":0.147539,"MLT":6.341387,"MMR":0.235414,"MNE":3.495857,"MNG":12.534196,"MOZ":0.124746,"MRT":0.673128,"MSR":8.101307,"MTQ":5.874763,"MUS":3.076208,"MWI":0.072655,"MYS":7.191042,"MYT":1.323202,"NAM":1.547913,"NCL":13.408855,"NER":0.10325,"NGA":0.641278,"NIC":0.754446,"NIU":4.041919,"NLD":9.811489,"NOR":8.826361,"NPL":0.200151,"NRU":4.209881,"NZL":8.150289,"OMN":17.737837,"PAK":0.76598,"PAN":2.601454,"PER":1.529724,"PHL":0.904075,"PLW":12.454252,"PNG":0.63148,"POL":8.458965,"PRI":0,"PRK":1.509382,"PRT":4.74808,"PRY":0.873376,"PSE":0.526196,"PYF":3.055635,"QAT":49.233732,"REU":4.923313,"ROU":4.481239,"RUS":11.798259,"RWA":0.066277,"SAU":18.390562,"SDN":0.432694,"SEN":0.556395,"SGP":8.981252,"SHN":2.039711,"SLB":0.613073,"SLE":0.122519,"SLV":1.05041,"SOM":0.048891,"SPM":10.942758,"SRB":5.762369,"SSD":0.124283,"STP":0.617342,"SUR":3.913745,"SVK":6.638661,"SVN":7.61615,"SWE":4.909862,"SWZ":1.051619,"SXM":19.811605,"SYC":4.459432,"SYR":2.11466,"TCA":8.79424,"TCD":0.09988,"TGO":0.319871,"THA":4.003597,"TJK":0.368687,"TKM":12.665529,"TLS":0.502414,"TON":0.98841,"TTO":32.282321,"TUN":2.428411,"TUR":4.727614,"TUV":1.012714,"TWN":11.73949,"TZA":0.18959,"UGA":0.105825,"UKR":6.694594,"URY":2.548636,"USA":16.8812,"UZB":4.028557,"VCT":2.135692,"VEN":5.962682,"VGB":7.090532,"VNM":1.616695,"VUT":0.441423,"WLF":2.02415,"WSM":0.943167,"YEM":0.776246,"ZAF":8.635882,"ZMB":0.282532,"ZWE":0.848359},"2013":{"ABW":8.369362,"AFG":0.293283,"AGO":0.94537,"AIA":8.558248,"ALB":1.831465,"AND":6.674233,"ARE":23.510235,"ARG":4.471467,"ARM":1.907711,"ATG":5.216719,"AUS":17.215785,"AUT":7.990935,"AZE":3.490072,"BDI":0.039213,"BEL":9.246515,"BEN":0.442923,"BES":3.830023,"BFA":0.162382,"BGD":0.401214,"BGR":5.74319,"BHR":24.695505,"BHS":7.011622,"BIH":6.026453,"BLR":6.616928,"BLZ":1.275588,"BMU":8.423519,"BOL":1.767524,"BRA":2.639368,"BRB":5.191121,"BRN":18.523258,"BTN":1.169973,"BWA":2.554057,"CAF":0.024414,"CAN":16.330663,"CHE":5.339486,"CHL":4.668028,"CHN":7.235162,"CIV":0.4308,"CMR":0.362852,"COD":0.048156,"COG":1.220425,"COK":4.294709,"COL":1.905463,"COM":0.261941,"CPV":0.916102,"CRI":1.592708,"CUB":2.484187,"CUW":33.125439,"CYP":5.641952,"CZE":10.148924,"DEU":10.176318,"DJI":0.572872,"DMA":2.449091,"DNK":7.4258,"DOM":2.093813,"DZA":3.704844,"ECU":2.522102,"EGY":2.264122,"ERI":0.18833,"ESP":5.430986,"EST":14.945504,"ETH":0.100748,"FIN":9.506337,"FJI":1.135156,"FRA":5.662309,"FRO":13.394357,"FSM":1.248221,"GAB":3.115727,"GBR":7.427593,"GEO":2.11635,"GHA":0.520967,"GIN":0.190898,"GLP":6.054583,"GMB":0.200024,"GNB":0.144596,"GNQ":6.58888,"GRC":7.486667,"GRD":2.60047,"GRL":10.005812,"GTM":0.830705,"GUF":2.822678,"GUY":2.549142,"HKG":6.072076,"HND":1.045113,"HRV":4.277748,"HTI":0.263736,"HUN":4.407594,"IDN":1.930918,"IND":1.578007,"IRL":8.124453,"IRN":7.621215,"IRQ":4.646069,"ISL":10.740192,"ISR":8.165906,"ITA":6.129395,"JAM":3.062332,"JOR":3.095359,"JPN":10.303726,"KAZ":14.496518,"KEN":0.288122,"KGZ":1.688645,"KHM":0.37579,"KIR":0.452701,"KNA":4.679046,"KOR":12.666729,"KSV":4.43371,"KWT":22.959788,"LAO":0.645558,"LBN":3.902794,"LBR":0.197471,"LBY":7.260948,"LCA":2.800998,"LIE":5.231345,"LKA":0.694644,"LSO":1.125379,"LTU":4.410548,"LUX":19.013092,"LVA":3.627117,"MAC":2.040935,"MAR":1.674571,"MDA":1.434016,"MDG":0.135984,"MDV":2.724721,"MEX":4.22442,"MHL":2.711326,"MKD":3.696741,"MLI":0.161338,"MLT":5.437838,"MMR":0.251186,"MNE":3.392668,"MNG":15.281441,"MOZ":0.141844,"MRT":0.579452,"MSR":9.507385,"MTQ":5.804234,"MUS":3.151056,"MWI":0.07258,"MYS":8.036101,"MYT":1.258004,"NAM":1.164761,"NCL":13.924798,"NER":0.111002,"NGA":0.665959,"NIC":0.752594,"NIU":4.015342,"NLD":9.762913,"NOR":8.775618,"NPL":0.227081,"NRU":4.454086,"NZL":7.918181,"OMN":17.096376,"PAK":0.737929,"PAN":2.751048,"PER":1.432277,"PHL":0.963247,"PLW":12.758663,"PNG":0.658486,"POL":8.357247,"PRI":0,"PRK":1.080466,"PRT":4.602543,"PRY":0.861213,"PSE":0.569222,"PYF":3.052994,"QAT":41.262349,"REU":4.810492,"ROU":3.933388,"RUS":11.341706,"RWA":0.070467,"SAU":17.297343,"SDN":0.472562,"SEN":0.57759,"SGP":9.288327,"SHN":2.027296,"SLB":0.641742,"SLE":0.144669,"SLV":0.985261,"SOM":0.049034,"SPM":10.982848,"SRB":5.890185,"SSD":0.129985,"STP":0.624039,"SUR":5.035247,"SVK":6.568288,"SVN":7.302409,"SWE":4.700141,"SWZ":1.251564,"SXM":18.953232,"SYC":4.280993,"SYR":1.582336,"TCA":8.507233,"TCD":0.112353,"TGO":0.231143,"THA":4.173187,"TJK":0.357261,"TKM":12.6992,"TLS":0.457387,"TON":1.06065,"TTO":31.805878,"TUN":2.440702,"TUR":4.533433,"TUV":1.006778,"TWN":11.735666,"TZA":0.201213,"UGA":0.10644,"UKR":6.560808,"URY":2.215905,"USA":17.161404,"UZB":3.747326,"VCT":2.045975,"VEN":6.650141,"VGB":7.032139,"VNM":1.678544,"VUT":0.403197,"WLF":1.7638,"WSM":0.971256,"YEM":1.006537,"ZAF":8.513039,"ZMB":0.28987,"ZWE":0.861011},"2014":{"ABW":8.417785,"AFG":0.280299,"AGO":0.926986,"AIA":9.860623,"ALB":2.080252,"AND":6.445931,"ARE":22.828712,"ARG":4.399316,"ARM":1.939186,"ATG":5.173517,"AUS":16.785681,"AUT":7.507548,"AZE":3.525852,"BDI":0.035751,"BEL":8.668641,"BEN":0.45182,"BES":3.733806,"BFA":0.160237,"BGD":0.42324,"BGR":6.140184,"BHR":23.567176,"BHS":6.24271,"BIH":5.407846,"BLR":6.565978,"BLZ":1.331097,"BMU":10.583411,"BOL":1.893897,"BRA":2.742072,"BRB":4.690827,"BRN":21.194912,"BTN":1.288072,"BWA":3.030542,"CAF":0.02596,"CAN":16.095071,"CHE":4.791724,"CHL":4.386803,"CHN":7.218233,"CIV":0.430658,"CMR":0.393349,"COD":0.060905,"COG":1.106113,"COK":4.318815,"COL":2.096454,"COM":0.225599,"CPV":0.892389,"CRI":1.599473,"CUB":2.436303,"CUW":38.139182,"CYP":5.906691,"CZE":9.91034,"DEU":9.678314,"DJI":0.39259,"DMA":2.535238,"DNK":6.65016,"DOM":2.120246,"DZA":3.903048,"ECU":2.740405,"EGY":2.373615,"ERI":0.189983,"ESP":5.497935,"EST":14.347679,"ETH":0.120471,"FIN":8.714887,"FJI":1.288619,"FRA":5.144127,"FRO":12.322955,"FSM":1.243469,"GAB":3.238368,"GBR":6.774484,"GEO":2.368343,"GHA":0.531103,"GIN":0.191066,"GLP":6.051511,"GMB":0.230986,"GNB":0.149224,"GNQ":5.923634,"GRC":7.239238,"GRD":1.987726,"GRL":9.308467,"GTM":0.879937,"GUF":2.743627,"GUY":2.625458,"HKG":6.187517,"HND":1.038716,"HRV":4.127377,"HTI":0.259742,"HUN":4.431524,"IDN":1.904111,"IND":1.673244,"IRL":7.973103,"IRN":7.912207,"IRQ":4.542074,"ISL":10.488067,"ISR":7.665757,"ITA":5.792012,"JAM":2.764351,"JOR":2.99131,"JPN":9.918777,"KAZ":16.918967,"KEN":0.302879,"KGZ":1.736274,"KHM":0.449302,"KIR":0.50984,"KNA":4.830233,"KOR":12.448395,"KSV":4.008575,"KWT":20.104171,"LAO":0.664982,"LBN":3.823832,"LBR":0.262836,"LBY":9.938416,"LCA":2.766802,"LIE":4.347077,"LKA":0.83293,"LSO":1.180389,"LTU":4.376763,"LUX":17.67441,"LVA":3.566296,"MAC":2.51345,"MAR":1.669409,"MDA":1.425505,"MDG":0.130404,"MDV":3.156362,"MEX":4.076545,"MHL":2.83417,"MKD":3.543408,"MLI":0.176563,"MLT":5.296079,"MMR":0.310331,"MNE":3.321488,"MNG":10.205968,"MOZ":0.304185,"MRT":0.667785,"MSR":9.430212,"MTQ":5.784728,"MUS":3.255344,"MWI":0.061939,"MYS":8.015587,"MYT":1.207037,"NAM":1.639766,"NCL":17.355063,"NER":0.115921,"NGA":0.685676,"NIC":0.764273,"NIU":5.996727,"NLD":9.298976,"NOR":8.767356,"NPL":0.276429,"NRU":4.688848,"NZL":7.850553,"OMN":16.436077,"PAK":0.751636,"PAN":2.79146,"PER":1.627081,"PHL":1.001563,"PLW":12.353338,"PNG":0.779469,"POL":8.043132,"PRI":0,"PRK":1.21561,"PRT":4.606466,"PRY":0.896155,"PSE":0.647563,"PYF":2.932484,"QAT":41.341252,"REU":4.74876,"ROU":3.923491,"RUS":11.308601,"RWA":0.072759,"SAU":19.076456,"SDN":0.473894,"SEN":0.624493,"SGP":9.380179,"SHN":2.014294,"SLB":0.552015,"SLE":0.155474,"SLV":0.9906,"SOM":0.047351,"SPM":11.012189,"SRB":4.932155,"SSD":0.13593,"STP":0.59367,"SUR":5.065145,"SVK":6.210128,"SVN":6.539139,"SWE":4.460415,"SWZ":0.683421,"SXM":18.554271,"SYC":4.673422,"SYR":1.54049,"TCA":8.79737,"TCD":0.135552,"TGO":0.211556,"THA":4.087709,"TJK":0.552478,"TKM":12.674238,"TLS":0.479326,"TON":1.065256,"TTO":32.324387,"TUN":2.508379,"TUR":4.65826,"TUV":0.672355,"TWN":11.796813,"TZA":0.194791,"UGA":0.11255,"UKR":5.703694,"URY":1.970811,"USA":17.168597,"UZB":3.527477,"VCT":2.364711,"VEN":5.827835,"VGB":7.335335,"VNM":2.01484,"VUT":0.57011,"WLF":1.7863,"WSM":0.998825,"YEM":0.953997,"ZAF":8.621777,"ZMB":0.309863,"ZWE":0.86218},"2015":{"ABW":8.610261,"AFG":0.290076,"AGO":0.907679,"AIA":10.594699,"ALB":1.634751,"AND":6.485769,"ARE":24.265957,"ARG":4.432659,"ARM":1.899998,"ATG":5.336654,"AUS":16.86772,"AUT":7.677111,"AZE":3.516299,"BDI":0.036744,"BEL":8.984619,"BEN":0.487422,"BES":4.112588,"BFA":0.198471,"BGD":0.463521,"BGR":6.602663,"BHR":23.829856,"BHS":5.439593,"BIH":5.238023,"BLR":6.061363,"BLZ":1.78175,"BMU":8.529837,"BOL":1.915423,"BRA":2.579841,"BRB":4.694051,"BRN":16.451554,"BTN":1.298363,"BWA":2.35176,"CAF":0.037253,"CAN":16.072321,"CHE":4.676778,"CHL":4.575038,"CHN":7.079569,"CIV":0.404918,"CMR":0.428055,"COD":0.035505,"COG":1.118068,"COK":4.348347,"COL":2.026165,"COM":0.245867,"CPV":0.889182,"CRI":1.512902,"CUB":2.598671,"CUW":40.837874,"CYP":5.873058,"CZE":9.976974,"DEU":9.693253,"DJI":0.428956,"DMA":2.512206,"DNK":6.204517,"DOM":2.257829,"DZA":4.048424,"ECU":2.54853,"EGY":2.297083,"ERI":0.188989,"ESP":5.861658,"EST":12.054018,"ETH":0.123901,"FIN":8.048072,"FJI":1.354226,"FRA":5.196383,"FRO":12.459521,"FSM":1.305439,"GAB":3.192263,"GBR":6.47704,"GEO":2.587069,"GHA":0.555099,"GIN":0.210839,"GLP":6.172385,"GMB":0.258563,"GNB":0.15566,"GNQ":5.221694,"GRC":6.93348,"GRD":2.186452,"GRL":9.371429,"GTM":0.996924,"GUF":2.724856,"GUY":2.653316,"HKG":5.729845,"HND":1.113344,"HRV":4.189302,"HTI":0.251867,"HUN":4.739161,"IDN":2.080918,"IND":1.71655,"IRL":8.298335,"IRN":7.721906,"IRQ":4.45509,"ISL":10.674359,"ISR":7.859752,"ITA":5.996111,"JAM":2.862432,"JOR":2.691866,"JPN":9.615687,"KAZ":16.891382,"KEN":0.347812,"KGZ":1.737771,"KHM":0.542604,"KIR":0.470923,"KNA":4.906801,"KOR":12.436214,"KSV":4.7385,"KWT":23.651531,"LAO":1.359759,"LBN":4.02169,"LBR":0.260893,"LBY":8.809533,"LCA":2.733036,"LIE":4.277173,"LKA":0.929398,"LSO":1.058459,"LTU":4.494175,"LUX":16.416113,"LVA":3.645714,"MAC":3.248623,"MAR":1.68669,"MDA":1.459015,"MDG":0.129874,"MDV":3.011401,"MEX":3.991013,"MHL":2.892046,"MKD":3.330337,"MLI":0.180567,"MLT":3.647323,"MMR":0.425126,"MNE":3.531268,"MNG":7.853034,"MOZ":0.235176,"MRT":0.760853,"MSR":10.863807,"MTQ":5.887783,"MUS":3.255559,"MWI":0.063246,"MYS":7.586442,"MYT":1.177458,"NAM":1.687167,"NCL":16.734357,"NER":0.10966,"NGA":0.593665,"NIC":0.862248,"NIU":3.967515,"NLD":9.632151,"NOR":8.783598,"NPL":0.250075,"NRU":4.913724,"NZL":7.801417,"OMN":16.073425,"PAK":0.788791,"PAN":2.726351,"PER":1.602894,"PHL":1.091407,"PLW":11.531078,"PNG":0.749001,"POL":8.130484,"PRI":0,"PRK":0.97488,"PRT":5.042749,"PRY":0.978907,"PSE":0.670234,"PYF":2.900691,"QAT":37.823412,"REU":4.782091,"ROU":3.918213,"RUS":11.265164,"RWA":0.083328,"SAU":20.72832,"SDN":0.555118,"SEN":0.685796,"SGP":9.993933,"SHN":1.999636,"SLB":0.478438,"SLE":0.142812,"SLV":1.070085,"SOM":0.045787,"SPM":11.032452,"SRB":5.821855,"SSD":0.170856,"STP":0.601181,"SUR":4.186459,"SVK":6.354242,"SVN":6.561371,"SWE":4.441079,"SWZ":0.7658,"SXM":18.499988,"SYC":5.021201,"SYR":1.488407,"TCA":8.523729,"TCD":0.119153,"TGO":0.249335,"THA":4.117252,"TJK":0.622037,"TKM":12.780054,"TLS":0.455792,"TON":1.104842,"TTO":31.20148,"TUN":2.618661,"TUR":4.825473,"TUV":0.673715,"TWN":11.731644,"TZA":0.20241,"UGA":0.120755,"UKR":4.975797,"URY":1.981307,"USA":16.563306,"UZB":3.350497,"VCT":2.202213,"VEN":5.432512,"VGB":7.236668,"VNM":2.361704,"VUT":0.477156,"WLF":1.80463,"WSM":1.115915,"YEM":0.493873,"ZAF":7.985844,"ZMB":0.311725,"ZWE":0.865772},"2016":{"ABW":8.419856,"AFG":0.261795,"AGO":0.933285,"AIA":10.388713,"ALB":1.607732,"AND":6.465288,"ARE":23.608862,"ARG":4.349166,"ARM":1.815531,"ATG":5.421315,"AUS":16.997412,"AUT":7.693109,"AZE":3.481001,"BDI":0.042871,"BEL":8.80119,"BEN":0.576729,"BES":4.316029,"BFA":0.202536,"BGD":0.476852,"BGR":6.277183,"BHR":22.388014,"BHS":4.996666,"BIH":6.242601,"BLR":5.988239,"BLZ":1.695774,"BMU":9.818228,"BOL":2.01393,"BRA":2.382041,"BRB":4.750262,"BRN":17.917867,"BTN":1.537328,"BWA":2.698588,"CAF":0.040344,"CAN":15.521199,"CHE":4.680021,"CHL":4.658468,"CHN":6.965584,"CIV":0.494877,"CMR":0.419309,"COD":0.024734,"COG":1.120122,"COK":4.17645,"COL":2.073049,"COM":0.28969,"CPV":0.964566,"CRI":1.618387,"CUB":2.491574,"CUW":33.970634,"CYP":6.157052,"CZE":10.131066,"DEU":9.720952,"DJI":0.371493,"DMA":2.562055,"DNK":6.489257,"DOM":2.34095,"DZA":3.935325,"ECU":2.443966,"EGY":2.399037,"ERI":0.191787,"ESP":5.621025,"EST":13.343724,"ETH":0.136262,"FIN":8.585984,"FJI":1.280685,"FRA":5.226494,"FRO":12.731475,"FSM":1.299941,"GAB":3.126105,"GBR":6.083754,"GEO":2.669686,"GHA":0.52657,"GIN":0.229754,"GLP":6.33272,"GMB":0.254576,"GNB":0.165769,"GNQ":5.404438,"GRC":6.638686,"GRD":2.229565,"GRL":9.387726,"GTM":1.039008,"GUF":2.725618,"GUY":3.089415,"HKG":5.831927,"HND":1.027641,"HRV":4.287425,"HTI":0.2781,"HUN":4.80006,"IDN":2.110564,"IND":1.780779,"IRL":8.560508,"IRN":7.608397,"IRQ":5.013467,"ISL":10.382613,"ISR":7.496089,"ITA":5.95793,"JAM":2.912708,"JOR":2.434077,"JPN":9.479893,"KAZ":16.861943,"KEN":0.3631,"KGZ":1.602816,"KHM":0.699008,"KIR":0.463747,"KNA":4.983678,"KOR":12.432553,"KSV":5.058418,"KWT":25.171689,"LAO":2.388224,"LBN":4.227324,"LBR":0.28767,"LBY":8.221552,"LCA":2.762336,"LIE":3.984106,"LKA":1.074589,"LSO":1.032271,"LTU":4.551011,"LUX":15.581073,"LVA":3.653617,"MAC":2.841452,"MAR":1.665111,"MDA":1.52046,"MDG":0.128139,"MDV":3.161875,"MEX":3.948262,"MHL":2.956734,"MKD":3.311184,"MLI":0.178446,"MLT":2.900018,"MMR":0.40739,"MNE":3.182243,"MNG":8.459705,"MOZ":0.294599,"MRT":0.648364,"MSR":5.764405,"MTQ":6.072223,"MUS":3.358426,"MWI":0.068619,"MYS":7.99522,"MYT":1.154621,"NAM":1.743686,"NCL":18.732243,"NER":0.102607,"NGA":0.619876,"NIC":0.846134,"NIU":3.937668,"NLD":9.627258,"NOR":8.548502,"NPL":0.350335,"NRU":4.485092,"NZL":7.316205,"OMN":14.931411,"PAK":0.916949,"PAN":2.592648,"PER":1.696399,"PHL":1.168607,"PLW":11.928154,"PNG":0.765431,"POL":8.418465,"PRI":0,"PRK":1.085952,"PRT":4.881781,"PRY":1.141547,"PSE":0.70389,"PYF":2.958251,"QAT":33.73375,"REU":4.869313,"ROU":3.8899,"RUS":11.196787,"RWA":0.08959,"SAU":19.237928,"SDN":0.508866,"SEN":0.678968,"SGP":6.242087,"SHN":2.659891,"SLB":0.460842,"SLE":0.153524,"SLV":1.055241,"SOM":0.044605,"SPM":11.056496,"SRB":6.010688,"SSD":0.153962,"STP":0.608781,"SUR":4.040173,"SVK":6.428203,"SVN":6.920787,"SWE":4.361961,"SWZ":0.923597,"SXM":17.989455,"SYC":5.504676,"SYR":1.529326,"TCA":8.622078,"TCD":0.138113,"TGO":0.301772,"THA":4.08616,"TJK":0.73769,"TKM":12.518179,"TLS":0.481727,"TON":1.178503,"TTO":27.150535,"TUN":2.556983,"TUR":5.002562,"TUV":0.675267,"TWN":11.854684,"TZA":0.199798,"UGA":0.123587,"UKR":5.219492,"URY":1.910274,"USA":16.050104,"UZB":3.501639,"VCT":2.282155,"VEN":4.956996,"VGB":7.145903,"VNM":2.427878,"VUT":0.517481,"WLF":2.1267,"WSM":1.158681,"YEM":0.372396,"ZAF":8.099157,"ZMB":0.349328,"ZWE":0.728822},"2017":{"ABW":8.444238,"AFG":0.276852,"AGO":0.804541,"AIA":9.516883,"ALB":1.932429,"AND":6.302098,"ARE":23.615904,"ARG":4.242436,"ARM":1.942603,"ATG":5.388294,"AUS":16.850455,"AUT":7.910526,"AZE":3.436113,"BDI":0.047545,"BEL":8.707135,"BEN":0.586728,"BES":4.210457,"BFA":0.227822,"BGD":0.498975,"BGR":6.623075,"BHR":22.538732,"BHS":5.252388,"BIH":6.440698,"BLR":6.104557,"BLZ":1.642817,"BMU":9.959826,"BOL":2.053189,"BRA":2.385616,"BRB":4.321146,"BRN":21.635841,"BTN":1.638922,"BWA":2.946629,"CAF":0.043263,"CAN":15.635476,"CHE":4.517281,"CHL":4.577088,"CHN":7.098687,"CIV":0.483013,"CMR":0.393289,"COD":0.029352,"COG":1.073397,"COK":4.633975,"COL":1.648084,"COM":0.351168,"CPV":1.024706,"CRI":1.641629,"CUB":2.224568,"CUW":26.787248,"CYP":6.226911,"CZE":10.231187,"DEU":9.50829,"DJI":0.376607,"DMA":2.289902,"DNK":6.062149,"DOM":2.255694,"DZA":4.045341,"ECU":2.400172,"EGY":2.55538,"ERI":0.20732,"ESP":5.904435,"EST":14.240447,"ETH":0.143705,"FIN":8.093076,"FJI":1.423309,"FRA":5.26093,"FRO":14.07828,"FSM":1.293996,"GAB":2.937002,"GBR":5.863442,"GEO":2.696924,"GHA":0.461363,"GIN":0.264605,"GLP":6.261727,"GMB":0.249275,"GNB":0.161777,"GNQ":5.419565,"GRC":6.999949,"GRD":2.302859,"GRL":9.69107,"GTM":1.044744,"GUF":2.624126,"GUY":3.038953,"HKG":5.686667,"HND":1.062808,"HRV":4.470875,"HTI":0.285397,"HUN":5.058282,"IDN":2.14464,"IND":1.798018,"IRL":8.189277,"IRN":8.110771,"IRQ":5.343389,"ISL":10.481037,"ISR":7.081456,"ITA":5.878528,"JAM":2.776532,"JOR":2.489242,"JPN":9.382092,"KAZ":17.515408,"KEN":0.347682,"KGZ":1.527148,"KHM":0.789911,"KIR":0.547947,"KNA":5.060668,"KOR":12.70659,"KSV":4.673982,"KWT":23.258194,"LAO":2.812815,"LBN":4.558052,"LBR":0.256004,"LBY":8.377991,"LCA":2.85405,"LIE":4.111204,"LKA":1.070845,"LSO":1.157968,"LTU":4.672772,"LUX":15.531547,"LVA":3.69077,"MAC":3.017909,"MAR":1.730239,"MDA":1.641409,"MDG":0.157393,"MDV":3.203001,"MEX":3.79049,"MHL":3.10594,"MKD":3.553005,"MLI":0.183824,"MLT":3.192676,"MMR":0.451919,"MNE":3.325442,"MNG":11.025526,"MOZ":0.243243,"MRT":0.822094,"MSR":6.237923,"MTQ":6.037517,"MUS":3.503428,"MWI":0.076073,"MYS":7.762197,"MYT":1.091959,"NAM":1.78308,"NCL":18.797885,"NER":0.103578,"NGA":0.582838,"NIC":0.842725,"NIU":3.920813,"NLD":9.443372,"NOR":8.383308,"NPL":0.413276,"NRU":4.704674,"NZL":7.519223,"OMN":15.1083,"PAK":0.998978,"PAN":2.739986,"PER":1.700036,"PHL":1.266179,"PLW":12.119527,"PNG":0.709794,"POL":8.764866,"PRI":0,"PRK":2.027557,"PRT":5.356296,"PRY":1.269587,"PSE":0.69524,"PYF":2.914334,"QAT":36.942875,"REU":4.773178,"ROU":4.06333,"RUS":11.372466,"RWA":0.095476,"SAU":18.823627,"SDN":0.551418,"SEN":0.709875,"SGP":6.445782,"SHN":2.000364,"SLB":0.444029,"SLE":0.137444,"SLV":0.952614,"SOM":0.042891,"SPM":11.071345,"SRB":6.099167,"SSD":0.136477,"STP":0.616432,"SUR":3.593344,"SVK":6.639067,"SVN":6.968205,"SWE":4.245718,"SWZ":0.856023,"SXM":16.883986,"SYC":5.650156,"SYR":1.717992,"TCA":8.828029,"TCD":0.131118,"TGO":0.275053,"THA":4.133733,"TJK":0.880432,"TKM":12.291226,"TLS":0.509857,"TON":1.286041,"TTO":27.267478,"TUN":2.581057,"TUR":5.240849,"TUV":0.676764,"TWN":12.035526,"TZA":0.202659,"UGA":0.133997,"UKR":4.995539,"URY":1.800764,"USA":15.800777,"UZB":3.409875,"VCT":2.04811,"VEN":4.593233,"VGB":5.606919,"VNM":2.478286,"VUT":0.479715,"WLF":2.148794,"WSM":1.182334,"YEM":0.35255,"ZAF":7.757252,"ZMB":0.395586,"ZWE":0.650533},"2018":{"ABW":8.229667,"AFG":0.294876,"AGO":0.728395,"AIA":9.412819,"ALB":1.732368,"AND":6.594057,"ARE":22.999398,"ARG":4.066307,"ARM":2.053823,"ATG":5.438456,"AUS":16.665199,"AUT":7.528656,"AZE":3.405638,"BDI":0.059497,"BEL":8.723658,"BEN":0.622619,"BES":3.961874,"BFA":0.242629,"BGD":0.503982,"BGR":6.128063,"BHR":22.044145,"BHS":6.718904,"BIH":6.492411,"BLR":6.404399,"BLZ":1.582344,"BMU":11.066178,"BOL":2.050414,"BRA":2.270114,"BRB":4.601008,"BRN":21.517344,"BTN":1.770616,"BWA":3.061203,"CAF":0.04315,"CAN":15.778726,"CHE":4.330742,"CHL":4.516692,"CHN":7.306542,"CIV":0.406074,"CMR":0.384175,"COD":0.028385,"COG":1.212306,"COK":4.672115,"COL":1.672725,"COM":0.37758,"CPV":1.019912,"CRI":1.632595,"CUB":1.997767,"CUW":21.54104,"CYP":6.024253,"CZE":10.09417,"DEU":9.100585,"DJI":0.364031,"DMA":2.276323,"DNK":6.021652,"DOM":2.392473,"DZA":4.147961,"ECU":2.247641,"EGY":2.351129,"ERI":0.240992,"ESP":5.771329,"EST":13.565103,"ETH":0.142249,"FIN":8.303288,"FJI":1.475019,"FRA":5.017701,"FRO":14.237504,"FSM":1.288175,"GAB":2.733583,"GBR":5.715981,"GEO":2.667462,"GHA":0.554085,"GIN":0.29359,"GLP":6.237435,"GMB":0.242776,"GNB":0.161791,"GNQ":4.000059,"GRC":6.750697,"GRD":2.526108,"GRL":9.79816,"GTM":1.109233,"GUF":2.540156,"GUY":3.158419,"HKG":5.694087,"HND":1.006986,"HRV":4.260117,"HTI":0.306145,"HUN":5.059483,"IDN":2.260322,"IND":1.899518,"IRL":8.069565,"IRN":8.186843,"IRQ":5.258128,"ISL":10.366893,"ISR":7.125529,"ITA":5.828658,"JAM":2.875856,"JOR":2.386223,"JPN":9.056307,"KAZ":17.899392,"KEN":0.363723,"KGZ":1.784292,"KHM":0.897845,"KIR":0.539436,"KNA":5.139926,"KOR":12.968438,"KSV":4.765449,"KWT":22.47887,"LAO":2.893468,"LBN":4.40322,"LBR":0.221222,"LBY":8.338612,"LCA":2.863015,"LIE":3.744019,"LKA":0.972838,"LSO":1.078521,"LTU":4.760341,"LUX":15.736909,"LVA":4.060364,"MAC":1.908008,"MAR":1.75381,"MDA":1.733206,"MDG":0.142377,"MDV":3.553592,"MEX":3.832385,"MHL":3.186849,"MKD":3.326826,"MLI":0.184337,"MLT":3.146851,"MMR":0.660454,"MNE":3.800619,"MNG":14.322303,"MOZ":0.240614,"MRT":0.858012,"MSR":6.724478,"MTQ":6.044394,"MUS":3.484726,"MWI":0.085484,"MYS":8.243608,"MYT":1.041943,"NAM":1.727129,"NCL":18.764537,"NER":0.079402,"NGA":0.530428,"NIC":0.791088,"NIU":5.825119,"NLD":9.176643,"NOR":8.356613,"NPL":0.520341,"NRU":4.609192,"NZL":7.379218,"OMN":15.769026,"PAK":0.933234,"PAN":2.585103,"PER":1.712929,"PHL":1.306305,"PLW":11.896104,"PNG":0.806341,"POL":8.74963,"PRI":0,"PRK":1.857773,"PRT":5.000965,"PRY":1.320464,"PSE":0.615776,"PYF":2.942468,"QAT":34.42036,"REU":4.702964,"ROU":4.106549,"RUS":11.674741,"RWA":0.102241,"SAU":17.881911,"SDN":0.520591,"SEN":0.727477,"SGP":7.914618,"SHN":2.008772,"SLB":0.439069,"SLE":0.131901,"SLV":1.021224,"SOM":0.041369,"SPM":9.862719,"SRB":5.961991,"SSD":0.144159,"STP":0.62412,"SUR":3.148779,"SVK":6.628357,"SVN":6.898023,"SWE":4.142263,"SWZ":0.890403,"SXM":16.30526,"SYC":5.828227,"SYR":1.563605,"TCA":8.743365,"TCD":0.128603,"TGO":0.274385,"THA":3.966176,"TJK":0.997827,"TKM":12.077698,"TLS":0.502337,"TON":1.289282,"TTO":26.801118,"TUN":2.513771,"TUR":5.102916,"TUV":0.674459,"TWN":11.921133,"TZA":0.20291,"UGA":0.135632,"UKR":5.212386,"URY":1.917388,"USA":16.187923,"UZB":3.58908,"VCT":2.296939,"VEN":3.442401,"VGB":5.314521,"VNM":2.889164,"VUT":0.591568,"WLF":2.170616,"WSM":1.135712,"YEM":0.340175,"ZAF":7.590512,"ZMB":0.415569,"ZWE":0.783639},"2019":{"ABW":8.571203,"AFG":0.293401,"AGO":0.674362,"AIA":10.005722,"ALB":1.721533,"AND":6.287204,"ARE":22.633898,"ARG":3.989486,"ARM":2.227932,"ATG":5.409468,"AUS":16.419679,"AUT":7.650523,"AZE":3.687951,"BDI":0.060455,"BEL":8.638376,"BEN":0.581269,"BES":4.298788,"BFA":0.252788,"BGD":0.553767,"BGR":5.991574,"BHR":25.307178,"BHS":6.26732,"BIH":6.192254,"BLR":6.413033,"BLZ":1.817428,"BMU":9.129568,"BOL":1.973223,"BRA":2.243357,"BRB":4.201212,"BRN":23.941461,"BTN":1.885524,"BWA":2.713149,"CAF":0.043608,"CAN":15.582994,"CHE":4.283446,"CHL":4.830064,"CHN":7.554165,"CIV":0.402909,"CMR":0.368658,"COD":0.02898,"COG":1.317865,"COK":4.925307,"COL":1.921561,"COM":0.393736,"CPV":1.060409,"CRI":1.583943,"CUB":2.018454,"CUW":10.151056,"CYP":5.975717,"CZE":9.586619,"DEU":8.504699,"DJI":0.365554,"DMA":2.359635,"DNK":5.340941,"DOM":2.605949,"DZA":4.203332,"ECU":2.321556,"EGY":2.425141,"ERI":0.24451,"ESP":5.343047,"EST":9.329183,"ETH":0.160337,"FIN":7.675732,"FJI":1.479862,"FRA":4.912857,"FRO":14.321085,"FSM":1.315867,"GAB":2.557201,"GBR":5.462124,"GEO":2.895975,"GHA":0.593436,"GIN":0.34431,"GLP":6.402505,"GMB":0.239507,"GNB":0.163633,"GNQ":2.986403,"GRC":6.218657,"GRD":2.687005,"GRL":9.898558,"GTM":1.155212,"GUF":2.534249,"GUY":3.417995,"HKG":5.589583,"HND":1.127857,"HRV":4.324096,"HTI":0.273529,"HUN":5.038444,"IDN":2.446134,"IND":1.898949,"IRL":7.623676,"IRN":8.120656,"IRQ":4.502709,"ISL":9.829598,"ISR":6.812936,"ITA":5.679641,"JAM":2.7804,"JOR":2.460867,"JPN":8.792438,"KAZ":15.866768,"KEN":0.376382,"KGZ":1.428019,"KHM":1.1121,"KIR":0.530839,"KNA":5.298793,"KOR":12.472095,"KSV":5.037064,"KWT":23.49882,"LAO":2.71714,"LBN":4.566017,"LBR":0.221927,"LBY":10.540809,"LCA":2.892907,"LIE":3.872608,"LKA":1.026349,"LSO":1.073337,"LTU":4.886943,"LUX":15.729279,"LVA":3.990844,"MAC":1.827437,"MAR":1.889785,"MDA":1.765776,"MDG":0.156139,"MDV":3.870924,"MEX":3.774956,"MHL":3.276695,"MKD":3.781543,"MLI":0.187366,"MLT":3.274579,"MMR":0.652507,"MNE":3.92906,"MNG":14.618885,"MOZ":0.235981,"MRT":0.860869,"MSR":4.879911,"MTQ":6.235374,"MUS":3.487965,"MWI":0.084429,"MYS":8.204961,"MYT":1.02561,"NAM":1.678645,"NCL":17.936743,"NER":0.105301,"NGA":0.626175,"NIC":0.783219,"NIU":5.72202,"NLD":8.813598,"NOR":7.999583,"NPL":0.465736,"NRU":4.530168,"NZL":7.485537,"OMN":15.681253,"PAK":0.922828,"PAN":3.170571,"PER":1.757201,"PHL":1.315734,"PLW":12.270596,"PNG":0.825724,"POL":8.273782,"PRI":0,"PRK":2.048663,"PRT":4.627714,"PRY":1.262531,"PSE":0.66508,"PYF":2.921743,"QAT":36.032711,"REU":4.776185,"ROU":3.945389,"RUS":11.612027,"RWA":0.14118,"SAU":18.323466,"SDN":0.507772,"SEN":0.797552,"SGP":5.099641,"SHN":2.690655,"SLB":0.434256,"SLE":0.147984,"SLV":1.181957,"SOM":0.039893,"SPM":11.131139,"SRB":5.991645,"SSD":0.158166,"STP":0.614653,"SUR":4.469209,"SVK":6.193007,"SVN":6.648746,"SWE":3.991313,"SWZ":0.958594,"SXM":16.026803,"SYC":5.686988,"SYR":1.367232,"TCA":8.420056,"TCD":0.119197,"TGO":0.2675,"THA":4.070233,"TJK":1.053033,"TKM":12.139744,"TLS":0.535104,"TON":1.536107,"TTO":26.82198,"TUN":2.465236,"TUR":4.81207,"TUV":0.668857,"TWN":11.502987,"TZA":0.217854,"UGA":0.139975,"UKR":5.022647,"URY":1.89299,"USA":15.730884,"UZB":3.602454,"VCT":2.165072,"VEN":3.075801,"VGB":5.506174,"VNM":3.560416,"VUT":0.529612,"WLF":2.189517,"WSM":1.279517,"YEM":0.402066,"ZAF":8.038352,"ZMB":0.421489,"ZWE":0.723861},"2020":{"ABW":7.308293,"AFG":0.299746,"AGO":0.606541,"AIA":8.430535,"ALB":1.649392,"AND":5.777148,"ARE":21.436228,"ARG":3.758384,"ARM":2.292074,"ATG":4.591351,"AUS":15.579327,"AUT":6.964414,"AZE":3.646883,"BDI":0.053774,"BEL":7.816141,"BEN":0.574526,"BES":3.588496,"BFA":0.250387,"BGD":0.542497,"BGR":5.296774,"BHR":25.450788,"BHS":5.33045,"BIH":6.308132,"BLR":6.081962,"BLZ":1.556447,"BMU":7.768184,"BOL":1.765023,"BRA":2.074642,"BRB":3.639515,"BRN":23.890806,"BTN":1.941335,"BWA":2.457817,"CAF":0.040097,"CAN":14.116709,"CHE":3.963711,"CHL":4.343649,"CHN":7.68895,"CIV":0.408919,"CMR":0.340012,"COD":0.02674,"COG":1.320525,"COK":5.222977,"COL":1.679256,"COM":0.350406,"CPV":1.07284,"CRI":1.382314,"CUB":1.746103,"CUW":8.841855,"CYP":5.874231,"CZE":8.722276,"DEU":7.672972,"DJI":0.333262,"DMA":1.998795,"DNK":4.85475,"DOM":2.39824,"DZA":3.970031,"ECU":1.95908,"EGY":2.194384,"ERI":0.220239,"ESP":4.504277,"EST":7.027757,"ETH":0.14541,"FIN":6.799194,"FJI":1.554512,"FRA":4.342917,"FRO":13.205626,"FSM":1.379782,"GAB":2.483156,"GBR":4.865281,"GEO":2.838778,"GHA":0.610755,"GIN":0.343257,"GLP":5.79076,"GMB":0.238482,"GNB":0.163398,"GNQ":3.125917,"GRC":5.290054,"GRD":2.312416,"GRL":8.932951,"GTM":1.013412,"GUF":2.238665,"GUY":4.002705,"HKG":4.200104,"HND":0.972575,"HRV":4.117908,"HTI":0.231519,"HUN":4.849407,"IDN":2.243032,"IND":1.750956,"IRL":7.107229,"IRN":8.362657,"IRQ":4.077052,"ISL":9.078694,"ISR":6.281264,"ITA":5.080263,"JAM":2.461857,"JOR":2.282258,"JPN":8.321498,"KAZ":14.668899,"KEN":0.351555,"KGZ":1.321225,"KHM":1.140663,"KIR":0.550413,"KNA":4.530767,"KOR":11.527395,"KSV":5.100729,"KWT":22.882707,"LAO":2.79911,"LBN":4.321999,"LBR":0.221595,"LBY":8.801572,"LCA":2.460958,"LIE":3.663848,"LKA":0.999475,"LSO":0.970695,"LTU":4.841086,"LUX":12.843474,"LVA":3.686832,"MAC":1.880563,"MAR":1.764036,"MDA":1.701957,"MDG":0.141738,"MDV":4.006578,"MEX":3.108821,"MHL":3.563031,"MKD":3.149822,"MLI":0.18509,"MLT":3.103816,"MMR":0.675529,"MNE":3.89678,"MNG":15.057725,"MOZ":0.213912,"MRT":0.856995,"MSR":4.171108,"MTQ":5.670077,"MUS":3.242612,"MWI":0.075946,"MYS":7.815705,"MYT":0.894282,"NAM":1.584969,"NCL":18.807735,"NER":0.102384,"NGA":0.624866,"NIC":0.674517,"NIU":5.97381,"NLD":7.906683,"NOR":7.657478,"NPL":0.475133,"NRU":4.710166,"NZL":6.808111,"OMN":15.958578,"PAK":0.925999,"PAN":2.714319,"PER":1.425897,"PHL":1.209203,"PLW":12.910238,"PNG":0.853891,"POL":7.898412,"PRI":0,"PRK":2.139231,"PRT":4.058955,"PRY":1.213722,"PSE":0.601108,"PYF":3.061156,"QAT":33.640499,"REU":4.283633,"ROU":3.813284,"RUS":11.154039,"RWA":0.126413,"SAU":18.367947,"SDN":0.450839,"SEN":0.775358,"SGP":5.06094,"SHN":2.308731,"SLB":0.447581,"SLE":0.147738,"SLV":1.033093,"SOM":0.034968,"SPM":9.534364,"SRB":6.054516,"SSD":0.141316,"STP":0.568961,"SUR":4.295482,"SVK":5.698469,"SVN":6.07574,"SWE":3.521575,"SWZ":0.897834,"SXM":13.482639,"SYC":5.101716,"SYR":1.259343,"TCA":6.994867,"TCD":0.108275,"TGO":0.265759,"THA":3.880599,"TJK":0.988561,"TKM":11.524943,"TLS":0.552826,"TON":1.616566,"TTO":23.552538,"TUN":2.267629,"TUR":4.9139,"TUV":0.698717,"TWN":11.093659,"TZA":0.199243,"UGA":0.124018,"UKR":4.712884,"URY":1.836247,"USA":14.037218,"UZB":3.526737,"VCT":1.853702,"VEN":2.683968,"VGB":4.655555,"VNM":3.403044,"VUT":0.545904,"WLF":2.32255,"WSM":1.331423,"YEM":0.376041,"ZAF":7.411864,"ZMB":0.384656,"ZWE":0.67697},"2021":{"ABW":8.054722,"AFG":0.296119,"AGO":0.619141,"AIA":9.188354,"ALB":1.618066,"AND":5.730292,"ARE":21.792151,"ARG":4.117967,"ARM":2.438591,"ATG":5.027895,"AUS":15.091473,"AUT":7.24333,"AZE":3.732457,"BDI":0.055206,"BEL":8.243806,"BEN":0.596744,"BES":3.871365,"BFA":0.257832,"BGD":0.550177,"BGR":6.180805,"BHR":26.66372,"BHS":5.850522,"BIH":4.147523,"BLR":6.222741,"BLZ":1.72317,"BMU":8.537196,"BOL":1.930686,"BRA":2.281014,"BRB":4.001781,"BRN":23.532003,"BTN":1.957702,"BWA":2.51115,"CAF":0.041651,"CAN":14.300468,"CHE":4.019107,"CHL":4.383426,"CHN":8.045741,"CIV":0.426033,"CMR":0.341829,"COD":0.027183,"COG":1.279064,"COK":5.375721,"COL":1.780076,"COM":0.362904,"CPV":1.135678,"CRI":1.517185,"CUB":1.959542,"CUW":9.686792,"CYP":6.108741,"CZE":9.241807,"DEU":8.089741,"DJI":0.342974,"DMA":2.189268,"DNK":5.052228,"DOM":2.601405,"DZA":3.989977,"ECU":2.321741,"EGY":2.284635,"ERI":0.226666,"ESP":4.920291,"EST":7.864087,"ETH":0.147922,"FIN":6.792338,"FJI":1.590295,"FRA":4.741312,"FRO":13.203997,"FSM":1.405118,"GAB":2.44,"GBR":5.1541,"GEO":2.929711,"GHA":0.649127,"GIN":0.357805,"GLP":5.78478,"GMB":0.248379,"GNB":0.170736,"GNQ":3.196633,"GRC":5.390839,"GRD":2.56167,"GRL":9.079509,"GTM":1.154393,"GUF":2.189895,"GUY":3.837874,"HKG":4.224972,"HND":1.060269,"HRV":4.359818,"HTI":0.251226,"HUN":4.990287,"IDN":2.262175,"IND":1.925088,"IRL":7.528353,"IRN":8.517397,"IRQ":4.262931,"ISL":9.113272,"ISR":6.126761,"ITA":5.548371,"JAM":2.719439,"JOR":2.295755,"JPN":8.565739,"KAZ":14.413251,"KEN":0.374968,"KGZ":1.425929,"KHM":1.14706,"KIR":0.555062,"KNA":4.995041,"KOR":11.886424,"KSV":3.396106,"KWT":24.972098,"LAO":2.798295,"LBN":4.462819,"LBR":0.230149,"LBY":11.064887,"LCA":2.704837,"LIE":3.866656,"LKA":0.954416,"LSO":1.000312,"LTU":4.981189,"LUX":13.067857,"LVA":3.87755,"MAC":1.874101,"MAR":1.903564,"MDA":1.829658,"MDG":0.146784,"MDV":4.06203,"MEX":3.213801,"MHL":3.780319,"MKD":3.257478,"MLI":0.190357,"MLT":3.273205,"MMR":0.674871,"MNE":2.789458,"MNG":15.029627,"MOZ":0.223094,"MRT":0.892337,"MSR":4.681398,"MTQ":5.6946,"MUS":3.442622,"MWI":0.07804,"MYS":7.626434,"MYT":0.864775,"NAM":1.586792,"NCL":19.097542,"NER":0.106876,"NGA":0.641921,"NIC":0.738594,"NIU":6.154972,"NLD":8.058958,"NOR":7.573273,"NPL":0.471885,"NRU":4.764679,"NZL":6.587061,"OMN":17.916536,"PAK":0.991834,"PAN":2.994902,"PER":1.669323,"PHL":1.266802,"PLW":13.229228,"PNG":0.85528,"POL":8.577376,"PRI":0,"PRK":2.170811,"PRT":3.964704,"PRY":1.279359,"PSE":0.602376,"PYF":3.124014,"QAT":35.587357,"REU":4.246802,"ROU":4.104127,"RUS":12.09865,"RWA":0.130333,"SAU":18.702989,"SDN":0.460786,"SEN":0.80572,"SGP":5.471564,"SHN":2.550917,"SLB":0.449141,"SLE":0.154312,"SLV":1.140987,"SOM":0.035766,"SPM":10.544484,"SRB":4.230501,"SSD":0.147192,"STP":0.591547,"SUR":4.556728,"SVK":6.4814,"SVN":5.921143,"SWE":3.424918,"SWZ":0.911889,"SXM":14.711011,"SYC":5.337406,"SYR":1.266193,"TCA":7.562677,"TCD":0.112919,"TGO":0.270916,"THA":3.889545,"TJK":1.060138,"TKM":13.088727,"TLS":0.557426,"TON":1.649345,"TTO":23.677599,"TUN":2.575462,"TUR":5.263368,"TUV":0.7094,"TWN":11.854867,"TZA":0.205366,"UGA":0.126063,"UKR":4.637058,"URY":1.966539,"USA":14.858668,"UZB":3.568847,"VCT":2.047981,"VEN":2.827907,"VGB":5.093802,"VNM":3.344827,"VUT":0.547911,"WLF":2.392571,"WSM":1.344282,"YEM":0.378289,"ZAF":7.339827,"ZMB":0.394194,"ZWE":0.706293}},"Oil":{"2008":{"ABW":27.107229,"AFG":0.108375,"AGO":0.471101,"AIA":11.800786,"ALB":1.286011,"AND":7.081822,"ARE":5.017965,"ARG":2.201378,"ARM":0.34633,"ATG":5.017309,"AUS":5.757192,"AUT":4.26392,"AZE":1.178626,"BDI":0.023458,"BEL":5.160853,"BEN":0.419614,"BES":4.38079,"BFA":0.10222,"BGD":0.068129,"BGR":1.550384,"BHR":5.903487,"BHS":5.27187,"BIH":1.039718,"BLR":1.829943,"BLZ":1.426423,"BMU":10.25211,"BOL":0.763535,"BRA":1.387012,"BRB":5.254733,"BRN":5.344969,"BTN":0.316242,"BWA":1.270422,"CAF":0.036909,"CAN":7.745772,"CHE":4.61032,"CHL":2.853975,"CHN":0.72932,"CIV":0.175558,"CMR":0.230605,"COD":0.025839,"COG":0.303659,"COK":3.421528,"COL":0.763234,"COM":0.174623,"CPV":0.918987,"CRI":1.588684,"CUB":2.191263,"CUW":36.899904,"CYP":7.053403,"CZE":2.205309,"DEU":3.605784,"DJI":0.564404,"DMA":2.397139,"DNK":4.237279,"DOM":1.640594,"DZA":1.080807,"ECU":1.718631,"EGY":1.102088,"ERI":0.130431,"ESP":3.795652,"EST":2.421201,"ETH":0.067236,"FIN":4.693669,"FJI":0.919339,"FRA":3.636547,"FRO":13.017868,"FSM":1.011186,"GAB":1.007614,"GBR":3.057871,"GEO":0.568531,"GHA":0.338444,"GIN":0.204184,"GLP":4.837553,"GMB":0.199246,"GNB":0.152622,"GNQ":1.258666,"GRC":4.76127,"GRD":2.247693,"GRL":11.979178,"GTM":0.623533,"GUF":2.66665,"GUY":2.264038,"HKG":1.660854,"HND":0.934793,"HRV":2.851029,"HTI":0.171429,"HUN":1.719859,"IDN":0.665317,"IND":0.341679,"IRL":5.476633,"IRN":3.190806,"IRQ":2.148863,"ISL":9.157372,"ISR":4.128523,"ITA":3.705249,"JAM":3.817549,"JOR":1.947211,"JPN":4.39474,"KAZ":3.304722,"KEN":0.214677,"KGZ":0.4533,"KHM":0.25068,"KIR":0.634361,"KNA":4.584273,"KOR":3.534983,"KSV":0.910225,"KWT":20.507055,"LAO":0.27409,"LBN":2.985857,"LBR":0.130723,"LBY":5.028337,"LCA":2.52126,"LIE":4.143885,"LKA":0.546196,"LSO":0.222226,"LTU":2.427924,"LUX":15.927854,"LVA":2.079215,"MAC":1.84129,"MAR":0.96977,"MDA":0.533393,"MDG":0.082162,"MDV":2.501521,"MEX":2.629334,"MHL":2.382934,"MKD":1.331261,"MLI":0.134462,"MLT":6.627483,"MMR":0.105944,"MNE":1.731542,"MNG":0.933141,"MOZ":0.080137,"MRT":0.548466,"MSR":9.894474,"MTQ":5.46976,"MUS":1.743416,"MWI":0.060877,"MYS":2.537959,"MYT":1.439195,"NAM":1.22026,"NCL":8.516496,"NER":0.032953,"NGA":0.219841,"NIC":0.730514,"NIU":4.024163,"NLD":3.588017,"NOR":4.966517,"NPL":0.09272,"NRU":4.292492,"NZL":4.426902,"OMN":5.007368,"PAK":0.316934,"PAN":1.888986,"PER":0.743709,"PHL":0.429892,"PLW":10.741493,"PNG":0.630827,"POL":1.745194,"PRI":0,"PRK":0.10976,"PRT":3.240898,"PRY":0.717204,"PSE":0.538708,"PYF":2.833952,"QAT":9.980202,"REU":2.547006,"ROU":1.405494,"RUS":2.391286,"RWA":0.050192,"SAU":10.526336,"SDN":0.422169,"SEN":0.24719,"SGP":9.588785,"SHN":2.089734,"SLB":0.596464,"SLE":0.083015,"SLV":0.969773,"SOM":0.052504,"SPM":10.884965,"SRB":1.330329,"SSD":0.140426,"STP":0.484311,"SUR":3.55463,"SVK":1.789127,"SVN":4.318512,"SWE":3.88143,"SWZ":0.55807,"SXM":20.962402,"SYC":4.618625,"SYR":2.464329,"TCA":9.620305,"TCD":0.090125,"TGO":0.168995,"THA":1.443,"TJK":0.201093,"TKM":3.176852,"TLS":0.193198,"TON":1.130737,"TTO":3.601382,"TUN":1.120943,"TUR":1.218162,"TUV":1.070093,"TWN":3.33828,"TZA":0.096662,"UGA":0.085025,"UKR":0.952839,"URY":2.33055,"USA":7.901432,"UZB":0.471895,"VCT":1.992821,"VEN":3.66048,"VGB":7.29573,"VNM":0.472226,"VUT":0.407195,"WLF":1.608782,"WSM":0.840599,"YEM":0.906223,"ZAF":1.25066,"ZMB":0.157359,"ZWE":0.128395},"2009":{"ABW":26.479539,"AFG":0.16774,"AGO":0.54632,"AIA":11.320871,"ALB":1.165262,"AND":6.995396,"ARE":5.292359,"ARG":2.024892,"ARM":0.321371,"ATG":5.244564,"AUS":5.649227,"AUT":4.125113,"AZE":1.013266,"BDI":0.017669,"BEL":4.741941,"BEN":0.436204,"BES":4.318983,"BFA":0.103013,"BGD":0.068107,"BGR":1.494222,"BHR":3.112738,"BHS":5.286094,"BIH":1.133853,"BLR":2.304393,"BLZ":1.644404,"BMU":7.518507,"BOL":0.763157,"BRA":1.350549,"BRB":5.287219,"BRN":4.494457,"BTN":0.346613,"BWA":1.064985,"CAF":0.035319,"CAN":7.548158,"CHE":4.449441,"CHL":2.66904,"CHN":0.733574,"CIV":0.13201,"CMR":0.288875,"COD":0.022918,"COG":0.370081,"COK":3.304076,"COL":0.806406,"COM":0.211003,"CPV":1.009018,"CRI":1.513576,"CUB":2.22181,"CUW":37.174397,"CYP":6.917374,"CZE":2.112258,"DEU":3.467254,"DJI":0.508266,"DMA":2.343699,"DNK":4.034321,"DOM":1.584467,"DZA":1.275465,"ECU":1.89755,"EGY":1.154596,"ERI":0.155642,"ESP":3.499237,"EST":2.183823,"ETH":0.065626,"FIN":4.531112,"FJI":0.817038,"FRA":3.531311,"FRO":11.878172,"FSM":1.358698,"GAB":0.942551,"GBR":2.896113,"GEO":0.728443,"GHA":0.272273,"GIN":0.210597,"GLP":4.711708,"GMB":0.198991,"GNB":0.153547,"GNQ":1.164739,"GRC":4.534202,"GRD":2.232391,"GRL":10.505528,"GTM":0.706878,"GUF":3.431753,"GUY":2.540997,"HKG":1.249291,"HND":0.860914,"HRV":2.847669,"HTI":0.18187,"HUN":1.714987,"IDN":0.752176,"IND":0.352726,"IRL":4.755828,"IRN":3.13388,"IRQ":2.317623,"ISL":9.083125,"ISR":3.768987,"ITA":3.33668,"JAM":2.722697,"JOR":1.899954,"JPN":4.026496,"KAZ":2.455381,"KEN":0.255707,"KGZ":0.576594,"KHM":0.295307,"KIR":0.51851,"KNA":4.726642,"KOR":3.554544,"KSV":0.93156,"KWT":22.088459,"LAO":0.310364,"LBN":3.598866,"LBR":0.11353,"LBY":5.206065,"LCA":2.504738,"LIE":4.144397,"LKA":0.585668,"LSO":0.251662,"LTU":2.167244,"LUX":14.492556,"LVA":1.914924,"MAC":3.144306,"MAR":0.963829,"MDA":0.52671,"MDG":0.076517,"MDV":2.529887,"MEX":2.456031,"MHL":2.461217,"MKD":1.345346,"MLI":0.125524,"MLT":6.082932,"MMR":0.078863,"MNE":1.369976,"MNG":0.855987,"MOZ":0.087531,"MRT":0.589969,"MSR":9.026483,"MTQ":5.837533,"MUS":1.794973,"MWI":0.060418,"MYS":2.431568,"MYT":1.423756,"NAM":1.286348,"NCL":8.387587,"NER":0.041579,"NGA":0.174033,"NIC":0.733989,"NIU":2.018733,"NLD":3.373504,"NOR":4.811895,"NPL":0.10981,"NRU":3.93863,"NZL":4.214237,"OMN":3.903685,"PAK":0.30669,"PAN":2.190571,"PER":0.81574,"PHL":0.415885,"PLW":10.509721,"PNG":0.650757,"POL":1.761812,"PRI":0,"PRK":0.105382,"PRT":3.041353,"PRY":0.746605,"PSE":0.53559,"PYF":2.829614,"QAT":9.169818,"REU":2.751637,"ROU":1.250617,"RUS":2.243539,"RWA":0.052508,"SAU":11.447445,"SDN":0.42327,"SEN":0.262894,"SGP":5.865465,"SHN":2.079849,"SLB":0.603918,"SLE":0.080189,"SLV":0.957071,"SOM":0.050915,"SPM":10.893954,"SRB":1.320616,"SSD":0.139846,"STP":0.514237,"SUR":3.636947,"SVK":1.67084,"SVN":3.70102,"SWE":3.745894,"SWZ":0.619096,"SXM":21.248359,"SYC":4.830056,"SYR":2.070141,"TCA":9.614779,"TCD":0.09434,"TGO":0.343001,"THA":1.526954,"TJK":0.213896,"TKM":2.944095,"TLS":0.213195,"TON":1.231091,"TTO":3.417698,"TUN":1.071221,"TUR":1.159423,"TUV":1.056111,"TWN":3.154645,"TZA":0.085936,"UGA":0.089114,"UKR":0.930865,"URY":2.214294,"USA":7.391791,"UZB":0.4134,"VCT":2.535178,"VEN":3.706956,"VGB":7.045112,"VNM":0.501156,"VUT":0.504454,"WLF":2.188769,"WSM":0.872489,"YEM":0.936981,"ZAF":1.507108,"ZMB":0.164794,"ZWE":0.129456},"2010":{"ABW":24.97659,"AFG":0.206923,"AGO":0.572241,"AIA":11.404798,"ALB":1.198529,"AND":7.223591,"ARE":6.243483,"ARG":2.193312,"ARM":0.341989,"ATG":5.30178,"AUS":5.656731,"AUT":4.161058,"AZE":0.941267,"BDI":0.030511,"BEL":4.763956,"BEN":0.469748,"BES":2.870244,"BFA":0.112306,"BGD":0.073058,"BGR":1.449121,"BHR":3.389915,"BHS":5.084616,"BIH":1.169828,"BLR":1.677684,"BLZ":1.637786,"BMU":9.586332,"BOL":0.797794,"BRA":1.456964,"BRB":4.841568,"BRN":4.015059,"BTN":0.441436,"BWA":1.169336,"CAF":0.036168,"CAN":7.640688,"CHE":4.476849,"CHL":2.555899,"CHN":0.810398,"CIV":0.143298,"CMR":0.285887,"COD":0.026042,"COG":0.391343,"COK":3.831745,"COL":0.796552,"COM":0.245747,"CPV":1.068525,"CRI":1.511654,"CUB":2.75777,"CUW":25.225516,"CYP":6.586938,"CZE":2.021437,"DEU":3.465516,"DJI":0.562037,"DMA":2.504661,"DNK":3.953533,"DOM":1.598078,"DZA":1.265199,"ECU":2.023719,"EGY":1.080253,"ERI":0.152486,"ESP":3.384951,"EST":2.302773,"ETH":0.06245,"FIN":4.684966,"FJI":1.201971,"FRA":3.454353,"FRO":13.018137,"FSM":0.953564,"GAB":1.14774,"GBR":2.865652,"GEO":0.719613,"GHA":0.316332,"GIN":0.241871,"GLP":5.080386,"GMB":0.219393,"GNB":0.151963,"GNQ":1.121437,"GRC":3.987901,"GRD":2.281185,"GRL":12.046529,"GTM":0.599114,"GUF":3.119333,"GUY":2.522903,"HKG":1.323315,"HND":0.841543,"HRV":2.426553,"HTI":0.205109,"HUN":1.599307,"IDN":0.80189,"IND":0.353352,"IRL":4.480954,"IRN":3.018725,"IRQ":2.509906,"ISL":8.759276,"ISR":3.836267,"ITA":3.239387,"JAM":2.646919,"JOR":2.015627,"JPN":4.072763,"KAZ":3.1365,"KEN":0.233336,"KGZ":0.502451,"KHM":0.321138,"KIR":0.54284,"KNA":4.637681,"KOR":3.608798,"KSV":0.891184,"KWT":20.386704,"LAO":0.301885,"LBN":3.27837,"LBR":0.181379,"LBY":5.861734,"LCA":2.850861,"LIE":3.625895,"LKA":0.588373,"LSO":0.25903,"LTU":2.181701,"LUX":14.97412,"LVA":2.02274,"MAC":1.68151,"MAR":1.062017,"MDA":0.590713,"MDG":0.078418,"MDV":2.584028,"MEX":2.30759,"MHL":2.537966,"MKD":1.310114,"MLI":0.134487,"MLT":6.182332,"MMR":0.151705,"MNE":1.265763,"MNG":0.896165,"MOZ":0.091625,"MRT":0.597905,"MSR":11.872013,"MTQ":5.858489,"MUS":1.824391,"MWI":0.053273,"MYS":2.555051,"MYT":1.411676,"NAM":1.336952,"NCL":8.750646,"NER":0.049741,"NGA":0.364959,"NIC":0.722697,"NIU":2.022075,"NLD":3.428706,"NOR":5.017157,"NPL":0.1179,"NRU":4.293331,"NZL":4.189803,"OMN":4.201596,"PAK":0.319587,"PAN":2.34181,"PER":0.793481,"PHL":0.439548,"PLW":11.264725,"PNG":0.576421,"POL":1.835948,"PRI":0,"PRK":0.104036,"PRT":2.962571,"PRY":0.82698,"PSE":0.509363,"PYF":3.253584,"QAT":8.871842,"REU":2.728416,"ROU":1.189696,"RUS":2.31666,"RWA":0.052577,"SAU":12.227938,"SDN":0.404595,"SEN":0.364934,"SGP":7.776847,"SHN":2.065777,"SLB":0.610221,"SLE":0.084247,"SLV":0.949901,"SOM":0.050878,"SPM":10.897555,"SRB":1.25223,"SSD":0.135186,"STP":0.543149,"SUR":4.294169,"SVK":1.729643,"SVN":3.705756,"SWE":3.903964,"SWZ":0.570859,"SXM":14.51612,"SYC":4.797628,"SYR":1.783647,"TCA":9.490951,"TCD":0.097339,"TGO":0.311101,"THA":1.555185,"TJK":0.221458,"TKM":3.22445,"TLS":0.217185,"TON":1.091867,"TTO":3.289114,"TUN":1.055307,"TUR":1.100109,"TUV":1.041896,"TWN":3.179023,"TZA":0.101069,"UGA":0.100375,"UKR":0.872108,"URY":1.734379,"USA":7.392288,"UZB":0.380418,"VCT":2.011198,"VEN":4.178475,"VGB":7.180142,"VNM":0.564034,"VUT":0.492608,"WLF":2.230406,"WSM":0.94107,"YEM":0.811756,"ZAF":1.051619,"ZMB":0.1671,"ZWE":0.150957},"2011":{"ABW":24.670721,"AFG":0.250788,"AGO":0.591306,"AIA":10.711041,"ALB":1.301058,"AND":6.957586,"ARE":6.25011,"ARG":2.093125,"ARM":0.321494,"ATG":5.111831,"AUS":5.806145,"AUT":3.966668,"AZE":1.096697,"BDI":0.034874,"BEL":4.436323,"BEN":0.436604,"BES":3.547788,"BFA":0.114758,"BGD":0.089203,"BGR":1.351193,"BHR":3.071277,"BHS":5.58396,"BIH":1.180501,"BLR":1.794638,"BLZ":1.645552,"BMU":6.978169,"BOL":0.861165,"BRA":1.533338,"BRB":5.015217,"BRN":4.873093,"BTN":0.513647,"BWA":1.214977,"CAF":0.039489,"CAN":7.623371,"CHE":4.022424,"CHL":2.656861,"CHN":0.828135,"CIV":0.155308,"CMR":0.276652,"COD":0.032342,"COG":0.421212,"COK":4.124036,"COL":0.780001,"COM":0.213255,"CPV":1.166877,"CRI":1.439787,"CUB":2.347468,"CUW":31.723579,"CYP":6.275592,"CZE":1.992829,"DEU":3.329781,"DJI":0.504537,"DMA":2.238631,"DNK":3.750903,"DOM":1.571497,"DZA":1.283941,"ECU":2.15761,"EGY":1.104808,"ERI":0.15421,"ESP":3.152496,"EST":2.377825,"ETH":0.067041,"FIN":4.409993,"FJI":1.117325,"FRA":3.327215,"FRO":11.737279,"FSM":1.086767,"GAB":1.240282,"GBR":2.718749,"GEO":0.708513,"GHA":0.331471,"GIN":0.246408,"GLP":5.073844,"GMB":0.22187,"GNB":0.150293,"GNQ":1.091593,"GRC":3.680313,"GRD":2.199969,"GRL":12.886121,"GTM":0.595539,"GUF":3.046794,"GUY":2.633917,"HKG":1.287314,"HND":0.911485,"HRV":2.402562,"HTI":0.22637,"HUN":1.509927,"IDN":0.855236,"IND":0.364903,"IRL":4.041675,"IRN":2.930126,"IRQ":3.068076,"ISL":8.307145,"ISR":3.753516,"ITA":3.105913,"JAM":2.809872,"JOR":2.566869,"JPN":4.314587,"KAZ":2.39258,"KEN":0.239253,"KGZ":0.655283,"KHM":0.32482,"KIR":0.500223,"KNA":4.851348,"KOR":3.487271,"KSV":0.969281,"KWT":16.601262,"LAO":0.300369,"LBN":3.381446,"LBR":0.195418,"LBY":5.688316,"LCA":2.830823,"LIE":3.404668,"LKA":0.623379,"LSO":0.269719,"LTU":2.10523,"LUX":15.175815,"LVA":1.837339,"MAC":2.014869,"MAR":1.111548,"MDA":0.630859,"MDG":0.084632,"MDV":2.63224,"MEX":2.387306,"MHL":2.628457,"MKD":1.319118,"MLI":0.142085,"MLT":6.083837,"MMR":0.153934,"MNE":1.155843,"MNG":1.096287,"MOZ":0.102084,"MRT":0.611317,"MSR":7.385608,"MTQ":5.890472,"MUS":1.874393,"MWI":0.05281,"MYS":2.458641,"MYT":1.373813,"NAM":1.20281,"NCL":8.723056,"NER":0.053636,"NGA":0.41968,"NIC":0.762697,"NIU":4.046383,"NLD":3.376225,"NOR":4.905441,"NPL":0.121478,"NRU":3.919479,"NZL":4.201347,"OMN":3.882375,"PAK":0.304647,"PAN":2.34037,"PER":0.811164,"PHL":0.404648,"PLW":11.851754,"PNG":0.630363,"POL":1.82622,"PRI":0,"PRK":0.106592,"PRT":2.695682,"PRY":0.853939,"PSE":0.549455,"PYF":3.108296,"QAT":5.611238,"REU":2.705613,"ROU":1.248204,"RUS":2.400296,"RWA":0.057851,"SAU":11.134322,"SDN":0.373854,"SEN":0.392309,"SGP":3.060881,"SHN":2.052278,"SLB":0.622003,"SLE":0.107498,"SLV":0.974351,"SOM":0.050086,"SPM":10.910174,"SRB":1.219744,"SSD":0.125081,"STP":0.531745,"SUR":4.359803,"SVK":1.6404,"SVN":3.706622,"SWE":3.61874,"SWZ":0.572213,"SXM":18.365665,"SYC":4.334616,"SYR":1.744948,"TCA":9.155244,"TCD":0.104705,"TGO":0.276347,"THA":1.562694,"TJK":0.186852,"TKM":3.311454,"TLS":0.220569,"TON":0.95336,"TTO":3.454949,"TUN":0.9764,"TUR":1.135133,"TUV":1.02729,"TWN":3.092015,"TZA":0.107385,"UGA":0.103001,"UKR":0.873847,"URY":2.118781,"USA":7.174033,"UZB":0.342222,"VCT":1.988685,"VEN":3.656424,"VGB":7.206924,"VNM":0.533991,"VUT":0.524899,"WLF":1.988217,"WSM":0.970344,"YEM":0.684458,"ZAF":1.194916,"ZMB":0.185494,"ZWE":0.250347},"2012":{"ABW":13.204638,"AFG":0.215752,"AGO":0.685574,"AIA":10.62029,"ALB":1.090765,"AND":6.862293,"ARE":6.522493,"ARG":2.040108,"ARM":0.308013,"ATG":5.223898,"AUS":5.881579,"AUT":3.872334,"AZE":1.227182,"BDI":0.032973,"BEL":4.307274,"BEN":0.416011,"BES":3.929681,"BFA":0.138307,"BGD":0.097833,"BGR":1.431927,"BHR":1.76156,"BHS":6.041758,"BIH":1.11765,"BLR":1.76284,"BLZ":1.315331,"BMU":5.764632,"BOL":0.903559,"BRA":1.638853,"BRB":4.856289,"BRN":5.080023,"BTN":0.606874,"BWA":1.261517,"CAF":0.039915,"CAN":7.601478,"CHE":4.0861,"CHL":2.604378,"CHN":0.861075,"CIV":0.230553,"CMR":0.245281,"COD":0.030964,"COG":0.526164,"COK":4.274667,"COL":0.849967,"COM":0.224801,"CPV":0.940254,"CRI":1.4156,"CUB":2.368628,"CUW":35.601239,"CYP":5.823011,"CZE":1.943945,"DEU":3.330149,"DJI":0.51065,"DMA":2.39345,"DNK":3.562318,"DOM":1.562633,"DZA":1.302698,"ECU":2.076456,"EGY":1.019563,"ERI":0.158834,"ESP":2.907938,"EST":2.450742,"ETH":0.0652,"FIN":4.371766,"FJI":1.061727,"FRA":3.248322,"FRO":12.190114,"FSM":1.151009,"GAB":1.258767,"GBR":2.668732,"GEO":0.714625,"GHA":0.437627,"GIN":0.224485,"GLP":5.028112,"GMB":0.216887,"GNB":0.148536,"GNQ":1.077434,"GRC":3.310805,"GRD":2.339154,"GRL":10.293272,"GTM":0.589987,"GUF":2.947357,"GUY":2.634852,"HKG":1.327011,"HND":0.918045,"HRV":2.249003,"HTI":0.221104,"HUN":1.445728,"IDN":0.874331,"IND":0.383334,"IRL":3.825346,"IRN":3.196433,"IRQ":3.341203,"ISL":8.273903,"ISR":4.628935,"ITA":2.868903,"JAM":2.673835,"JOR":2.896975,"JPN":4.412301,"KAZ":2.337588,"KEN":0.212336,"KGZ":0.829482,"KHM":0.333775,"KIR":0.459567,"KNA":4.606198,"KOR":3.441524,"KSV":0.895653,"KWT":18.874441,"LAO":0.314678,"LBN":3.730272,"LBR":0.211462,"LBY":5.558542,"LCA":2.835979,"LIE":3.583757,"LKA":0.623274,"LSO":0.288881,"LTU":2.206699,"LUX":14.38543,"LVA":1.816245,"MAC":1.942763,"MAR":1.117106,"MDA":0.59444,"MDG":0.085307,"MDV":2.864723,"MEX":2.506636,"MHL":2.596939,"MKD":1.286209,"MLI":0.147539,"MLT":6.339239,"MMR":0.120643,"MNE":1.117054,"MNG":1.229491,"MOZ":0.094564,"MRT":0.644908,"MSR":8.101307,"MTQ":5.874763,"MUS":1.845156,"MWI":0.052846,"MYS":2.504251,"MYT":1.323202,"NAM":1.318308,"NCL":8.616315,"NER":0.074691,"NGA":0.328428,"NIC":0.714499,"NIU":4.041919,"NLD":3.234897,"NOR":4.839914,"NPL":0.132185,"NRU":4.209881,"NZL":4.116269,"OMN":4.237776,"PAK":0.31462,"PAN":2.134078,"PER":0.863731,"PHL":0.422641,"PLW":12.454252,"PNG":0.587497,"POL":1.741564,"PRI":0,"PRK":0.10173,"PRT":2.434867,"PRY":0.823283,"PSE":0.52541,"PYF":3.055635,"QAT":3.868459,"REU":2.6638,"ROU":1.308239,"RUS":2.449161,"RWA":0.063205,"SAU":12.5308,"SDN":0.375364,"SEN":0.354996,"SGP":5.936436,"SHN":2.039711,"SLB":0.613073,"SLE":0.122519,"SLV":0.962788,"SOM":0.048891,"SPM":10.942758,"SRB":1.171403,"SSD":0.124283,"STP":0.617342,"SUR":3.814266,"SVK":1.686443,"SVN":3.605878,"SWE":3.440485,"SWZ":0.5835,"SXM":19.811605,"SYC":4.459432,"SYR":1.434007,"TCA":8.79424,"TCD":0.080433,"TGO":0.227458,"THA":1.638063,"TJK":0.230886,"TKM":3.402914,"TLS":0.256007,"TON":0.98841,"TTO":3.301854,"TUN":0.968595,"TUR":1.191957,"TUV":1.012714,"TWN":2.951824,"TZA":0.125644,"UGA":0.093328,"UKR":0.847139,"URY":2.413894,"USA":6.934383,"UZB":0.302156,"VCT":2.135692,"VEN":3.615832,"VGB":7.090532,"VNM":0.49505,"VUT":0.441423,"WLF":2.02415,"WSM":0.943167,"YEM":0.584157,"ZAF":0.981685,"ZMB":0.217435,"ZWE":0.278418},"2013":{"ABW":8.369362,"AFG":0.177269,"AGO":0.667023,"AIA":8.558248,"ALB":1.15364,"AND":6.674233,"ARE":6.264746,"ARG":2.063951,"ARM":0.294243,"ATG":5.216719,"AUS":5.892273,"AUT":3.946034,"AZE":1.254936,"BDI":0.033212,"BEL":4.261851,"BEN":0.420115,"BES":3.830023,"BFA":0.149581,"BGD":0.090626,"BGR":1.307306,"BHR":3.461664,"BHS":7.002121,"BIH":1.107032,"BLR":1.93005,"BLZ":1.264958,"BMU":8.423519,"BOL":0.963802,"BRA":1.697081,"BRB":4.764199,"BRN":4.022638,"BTN":0.60568,"BWA":1.300499,"CAF":0.024414,"CAN":7.527404,"CHE":4.1081,"CHL":2.622263,"CHN":0.897189,"CIV":0.257157,"CMR":0.238306,"COD":0.045788,"COG":0.524397,"COK":4.294709,"COL":0.897736,"COM":0.261941,"CPV":0.916102,"CRI":1.469719,"CUB":2.210068,"CUW":33.125439,"CYP":4.984542,"CZE":1.881777,"DEU":3.428009,"DJI":0.512789,"DMA":2.449091,"DNK":3.479652,"DOM":1.490555,"DZA":1.366264,"ECU":2.159997,"EGY":1.013507,"ERI":0.161171,"ESP":2.799502,"EST":2.46836,"ETH":0.074774,"FIN":4.198831,"FJI":1.135156,"FRA":3.211982,"FRO":13.394357,"FSM":1.248221,"GAB":1.359872,"GBR":2.577769,"GEO":0.701633,"GHA":0.429687,"GIN":0.190898,"GLP":4.946554,"GMB":0.200024,"GNB":0.144596,"GNQ":1.027972,"GRC":3.015483,"GRD":2.60047,"GRL":10.005812,"GTM":0.586091,"GUF":2.822678,"GUY":2.549142,"HKG":1.291996,"HND":0.926564,"HRV":2.112894,"HTI":0.259949,"HUN":1.399432,"IDN":0.905764,"IND":0.383882,"IRL":3.848268,"IRN":3.22881,"IRQ":3.453181,"ISL":8.15523,"ISR":2.965827,"ITA":2.639303,"JAM":2.847211,"JOR":2.553672,"JPN":4.2406,"KAZ":2.896053,"KEN":0.22174,"KGZ":0.838557,"KHM":0.32708,"KIR":0.452701,"KNA":4.679046,"KOR":3.365033,"KSV":0.911092,"KWT":12.525764,"LAO":0.348596,"LBN":3.367304,"LBR":0.180415,"LBY":3.611533,"LCA":2.800998,"LIE":3.660562,"LKA":0.564206,"LSO":0.286203,"LTU":2.163596,"LUX":13.825857,"LVA":1.856555,"MAC":1.667212,"MAR":1.093774,"MDA":0.628446,"MDG":0.084346,"MDV":2.724721,"MEX":2.367576,"MHL":2.711326,"MKD":1.253162,"MLI":0.151266,"MLT":5.431987,"MMR":0.13405,"MNE":1.10204,"MNG":1.257003,"MOZ":0.10603,"MRT":0.551123,"MSR":9.507385,"MTQ":5.804234,"MUS":1.856568,"MWI":0.053275,"MYS":2.894091,"MYT":1.258004,"NAM":0.993904,"NCL":9.30602,"NER":0.0825,"NGA":0.356374,"NIC":0.711319,"NIU":4.015342,"NLD":3.122509,"NOR":4.827751,"NPL":0.147328,"NRU":4.454086,"NZL":4.165857,"OMN":3.450228,"PAK":0.297278,"PAN":2.273248,"PER":0.774789,"PHL":0.414395,"PLW":12.758663,"PNG":0.61499,"POL":1.620916,"PRI":0,"PRK":0.109326,"PRT":2.388346,"PRY":0.824234,"PSE":0.569051,"PYF":3.052994,"QAT":5.07276,"REU":2.602757,"ROU":1.224987,"RUS":2.463558,"RWA":0.067307,"SAU":11.415341,"SDN":0.411187,"SEN":0.362914,"SGP":5.736062,"SHN":2.027296,"SLB":0.641742,"SLE":0.144669,"SLV":0.909286,"SOM":0.049034,"SPM":10.982848,"SRB":1.08564,"SSD":0.129985,"STP":0.624039,"SUR":4.924775,"SVK":1.660633,"SVN":3.427347,"SWE":3.262306,"SWZ":0.647023,"SXM":18.953232,"SYC":4.280993,"SYR":1.022772,"TCA":8.507233,"TCD":0.08788,"TGO":0.158806,"THA":1.693089,"TJK":0.225769,"TKM":3.433953,"TLS":0.302822,"TON":1.06065,"TTO":2.675401,"TUN":1.007737,"TUR":1.232196,"TUV":1.006778,"TWN":2.894397,"TZA":0.140026,"UGA":0.096291,"UKR":0.82416,"URY":2.084934,"USA":6.964284,"UZB":0.342993,"VCT":2.045975,"VEN":4.298363,"VGB":7.032139,"VNM":0.486422,"VUT":0.403197,"WLF":1.7638,"WSM":0.971256,"YEM":0.790128,"ZAF":0.958479,"ZMB":0.213563,"ZWE":0.302733},"2014":{"ABW":8.417785,"AFG":0.157862,"AGO":0.644309,"AIA":9.860623,"ALB":1.336873,"AND":6.445931,"ARE":5.883332,"ARG":1.968332,"ARM":0.299015,"ATG":5.173517,"AUS":5.862846,"AUT":3.794012,"AZE":1.194143,"BDI":0.03177,"BEL":4.139089,"BEN":0.40869,"BES":3.733806,"BFA":0.151643,"BGD":0.101213,"BGR":1.451993,"BHR":1.534196,"BHS":6.23328,"BIH":1.146068,"BLR":1.896453,"BLZ":1.320616,"BMU":10.583411,"BOL":1.012912,"BRA":1.753436,"BRB":4.185648,"BRN":4.053953,"BTN":0.58715,"BWA":1.327574,"CAF":0.02596,"CAN":7.249994,"CHE":3.68424,"CHL":2.477501,"CHN":0.90645,"CIV":0.259079,"CMR":0.256978,"COD":0.059175,"COG":0.485505,"COK":4.318815,"COL":1.058823,"COM":0.225599,"CPV":0.892389,"CRI":1.474135,"CUB":2.155004,"CUW":38.139182,"CYP":5.061023,"CZE":1.980751,"DEU":3.30985,"DJI":0.32599,"DMA":2.535238,"DNK":3.377431,"DOM":1.425388,"DZA":1.364411,"ECU":2.356873,"EGY":1.23141,"ERI":0.163167,"ESP":2.822335,"EST":2.505475,"ETH":0.088637,"FIN":3.944059,"FJI":1.288619,"FRA":3.105822,"FRO":12.322955,"FSM":1.243469,"GAB":1.271355,"GBR":2.570661,"GEO":0.750118,"GHA":0.416087,"GIN":0.191066,"GLP":4.944045,"GMB":0.230986,"GNB":0.149224,"GNQ":1.007104,"GRC":3.082977,"GRD":1.987726,"GRL":9.308467,"GTM":0.612775,"GUF":2.743627,"GUY":2.624408,"HKG":1.260442,"HND":0.923241,"HRV":2.098891,"HTI":0.252296,"HUN":1.539401,"IDN":0.860918,"IND":0.391025,"IRL":3.757606,"IRN":3.098985,"IRQ":3.391268,"ISL":8.013158,"ISR":2.570225,"ITA":2.61653,"JAM":2.517193,"JOR":2.58993,"JPN":3.896957,"KAZ":2.319867,"KEN":0.226142,"KGZ":0.756819,"KHM":0.334039,"KIR":0.50984,"KNA":4.830233,"KOR":3.195012,"KSV":0.892397,"KWT":10.027924,"LAO":0.361645,"LBN":3.307581,"LBR":0.237543,"LBY":6.777881,"LCA":2.766802,"LIE":3.051525,"LKA":0.616375,"LSO":0.27455,"LTU":2.273835,"LUX":12.78768,"LVA":1.934675,"MAC":1.952785,"MAR":1.006106,"MDA":0.651946,"MDG":0.085941,"MDV":3.156362,"MEX":2.267464,"MHL":2.83417,"MKD":1.251331,"MLI":0.161993,"MLT":5.290424,"MMR":0.180644,"MNE":1.085982,"MNG":1.172602,"MOZ":0.198265,"MRT":0.650204,"MSR":9.430212,"MTQ":5.784728,"MUS":1.912408,"MWI":0.04336,"MYS":2.898661,"MYT":1.207037,"NAM":1.473602,"NCL":10.843325,"NER":0.086626,"NGA":0.371406,"NIC":0.720563,"NIU":5.996727,"NLD":3.078842,"NOR":4.690417,"NPL":0.166508,"NRU":4.688848,"NZL":4.175913,"OMN":3.560487,"PAK":0.290144,"PAN":2.332874,"PER":0.81865,"PHL":0.42648,"PLW":12.353338,"PNG":0.645864,"POL":1.614463,"PRI":0,"PRK":0.103839,"PRT":2.402803,"PRY":0.853629,"PSE":0.647404,"PYF":2.932484,"QAT":2.059947,"REU":2.569356,"ROU":1.261351,"RUS":2.655885,"RWA":0.068947,"SAU":11.059165,"SDN":0.413402,"SEN":0.404683,"SGP":5.629686,"SHN":2.014294,"SLB":0.552015,"SLE":0.155474,"SLV":0.927576,"SOM":0.047351,"SPM":11.012189,"SRB":1.088909,"SSD":0.13593,"STP":0.59367,"SUR":4.997399,"SVK":1.636001,"SVN":3.347923,"SWE":3.13453,"SWZ":0.634605,"SXM":18.554271,"SYC":4.673422,"SYR":1.019004,"TCA":8.79737,"TCD":0.107536,"TGO":0.141766,"THA":1.687511,"TJK":0.306466,"TKM":3.528034,"TLS":0.368712,"TON":1.065256,"TTO":3.280943,"TUN":1.036971,"TUR":1.26738,"TUV":0.672355,"TWN":2.909829,"TZA":0.126256,"UGA":0.101743,"UKR":0.782774,"URY":1.846226,"USA":6.978915,"UZB":0.331411,"VCT":2.364711,"VEN":3.534435,"VGB":7.335335,"VNM":0.563844,"VUT":0.57011,"WLF":1.7863,"WSM":0.998825,"YEM":0.747763,"ZAF":1.071761,"ZMB":0.23235,"ZWE":0.268323},"2015":{"ABW":8.610261,"AFG":0.196261,"AGO":0.614971,"AIA":10.594699,"ALB":1.157997,"AND":6.485769,"ARE":7.486566,"ARG":2.01017,"ARM":0.277292,"ATG":5.336654,"AUS":5.777834,"AUT":3.818241,"AZE":1.169135,"BDI":0.032449,"BEL":4.284912,"BEN":0.452395,"BES":4.112588,"BFA":0.170524,"BGD":0.093068,"BGR":1.595574,"BHR":2.773267,"BHS":5.430263,"BIH":1.207013,"BLR":1.770817,"BLZ":1.771568,"BMU":8.529837,"BOL":1.039392,"BRA":1.610027,"BRB":4.163591,"BRN":3.903634,"BTN":0.606334,"BWA":1.091229,"CAF":0.037253,"CAN":7.222106,"CHE":3.558102,"CHL":2.481948,"CHN":0.953426,"CIV":0.235087,"CMR":0.269999,"COD":0.033492,"COG":0.43409,"COK":4.348347,"COL":0.979068,"COM":0.245867,"CPV":0.889182,"CRI":1.38544,"CUB":2.313414,"CUW":39.217324,"CYP":5.112319,"CZE":2.028774,"DEU":3.331265,"DJI":0.375045,"DMA":2.512206,"DNK":3.448921,"DOM":1.592346,"DZA":1.405811,"ECU":2.188352,"EGY":1.146324,"ERI":0.165786,"ESP":2.965888,"EST":2.583877,"ETH":0.084885,"FIN":3.883738,"FJI":1.354226,"FRA":3.12097,"FRO":12.459521,"FSM":1.305439,"GAB":1.206572,"GBR":2.618233,"GEO":0.853376,"GHA":0.41068,"GIN":0.210839,"GLP":5.042798,"GMB":0.258563,"GNB":0.15566,"GNQ":0.965662,"GRC":3.237237,"GRD":2.186452,"GRL":9.371429,"GTM":0.653292,"GUF":2.724856,"GUY":2.601091,"HKG":1.379853,"HND":0.999288,"HRV":2.213837,"HTI":0.244527,"HUN":1.679296,"IDN":0.837782,"IND":0.419384,"IRL":3.910738,"IRN":2.776021,"IRQ":3.206548,"ISL":8.171731,"ISR":2.726272,"ITA":2.681811,"JAM":2.617006,"JOR":2.03263,"JPN":3.743617,"KAZ":2.323109,"KEN":0.267165,"KGZ":0.817047,"KHM":0.35719,"KIR":0.470923,"KNA":4.906801,"KOR":3.345347,"KSV":1.110163,"KWT":12.951434,"LAO":0.426831,"LBN":3.549515,"LBR":0.235857,"LBY":5.172985,"LCA":2.733036,"LIE":2.903708,"LKA":0.643961,"LSO":0.288828,"LTU":2.406452,"LUX":11.984285,"LVA":2.041407,"MAC":2.870507,"MAR":0.982653,"MDA":0.698192,"MDG":0.08522,"MDV":3.011401,"MEX":2.154594,"MHL":2.892046,"MKD":1.318584,"MLI":0.167089,"MLT":3.64309,"MMR":0.186958,"MNE":1.173236,"MNG":1.13593,"MOZ":0.131112,"MRT":0.74093,"MSR":10.863807,"MTQ":5.887783,"MUS":1.952202,"MWI":0.04629,"MYS":2.452272,"MYT":1.177458,"NAM":1.539304,"NCL":9.947421,"NER":0.087558,"NGA":0.294162,"NIC":0.8167,"NIU":3.967515,"NLD":3.044908,"NOR":4.602883,"NPL":0.11632,"NRU":4.913724,"NZL":4.219626,"OMN":3.03031,"PAK":0.333698,"PAN":2.296308,"PER":0.81382,"PHL":0.483928,"PLW":11.531078,"PNG":0.639715,"POL":1.704168,"PRI":0,"PRK":0.118244,"PRT":2.474195,"PRY":0.920503,"PSE":0.669953,"PYF":2.900691,"QAT":1.298887,"REU":2.587391,"ROU":1.234263,"RUS":2.805482,"RWA":0.073601,"SAU":12.675261,"SDN":0.490687,"SEN":0.477774,"SGP":6.223188,"SHN":1.999636,"SLB":0.478438,"SLE":0.142812,"SLV":1.007902,"SOM":0.045787,"SPM":11.032452,"SRB":1.128997,"SSD":0.170856,"STP":0.601181,"SUR":4.119394,"SVK":1.779229,"SVN":3.303552,"SWE":3.114455,"SWZ":0.646245,"SXM":18.499988,"SYC":5.021201,"SYR":0.988441,"TCA":8.523729,"TCD":0.081363,"TGO":0.130611,"THA":1.672752,"TJK":0.333557,"TKM":3.48772,"TLS":0.354845,"TON":1.104842,"TTO":3.515508,"TUN":1.211318,"TUR":1.364067,"TUV":0.673715,"TWN":2.862095,"TZA":0.134446,"UGA":0.111453,"UKR":0.677804,"URY":1.847711,"USA":7.040253,"UZB":0.330772,"VCT":2.202213,"VEN":3.214526,"VGB":7.236668,"VNM":0.68576,"VUT":0.477156,"WLF":1.80463,"WSM":1.115915,"YEM":0.338049,"ZAF":0.962221,"ZMB":0.238355,"ZWE":0.254967},"2016":{"ABW":8.419856,"AFG":0.167284,"AGO":0.545929,"AIA":10.388713,"ALB":1.166197,"AND":6.465288,"ARE":7.013703,"ARG":1.936321,"ARM":0.281472,"ATG":5.421315,"AUS":5.677659,"AUT":3.904297,"AZE":1.216773,"BDI":0.035621,"BEL":4.16137,"BEN":0.538858,"BES":4.316029,"BFA":0.169367,"BGD":0.096608,"BGR":1.665462,"BHR":2.632996,"BHS":4.987396,"BIH":1.389399,"BLR":1.783375,"BLZ":1.68574,"BMU":9.818228,"BOL":1.068824,"BRA":1.512809,"BRB":4.234029,"BRN":4.233625,"BTN":0.642196,"BWA":1.178384,"CAF":0.040344,"CAN":7.095249,"CHE":3.530079,"CHL":2.54723,"CHN":0.968577,"CIV":0.290161,"CMR":0.254228,"COD":0.02353,"COG":0.425962,"COK":4.17645,"COL":1.069565,"COM":0.28969,"CPV":0.964566,"CRI":1.492212,"CUB":2.223854,"CUW":32.361159,"CYP":5.406759,"CZE":2.031905,"DEU":3.373968,"DJI":0.322264,"DMA":2.562055,"DNK":3.480477,"DOM":1.695988,"DZA":1.354177,"ECU":2.086126,"EGY":1.151187,"ERI":0.168758,"ESP":3.051127,"EST":2.662554,"ETH":0.092424,"FIN":4.160496,"FJI":1.280685,"FRA":3.070664,"FRO":12.731475,"FSM":1.299941,"GAB":1.225896,"GBR":2.649147,"GEO":1.02795,"GHA":0.418664,"GIN":0.229754,"GLP":5.17379,"GMB":0.254576,"GNB":0.165769,"GNQ":0.882939,"GRC":3.309613,"GRD":2.229565,"GRL":9.387726,"GTM":0.663113,"GUF":2.725618,"GUY":2.88163,"HKG":1.486605,"HND":0.929056,"HRV":2.218277,"HTI":0.270863,"HUN":1.688447,"IDN":0.845287,"IND":0.458052,"IRL":3.997308,"IRN":2.402269,"IRQ":3.683321,"ISL":7.961393,"ISR":2.77691,"ITA":2.595112,"JAM":2.673455,"JOR":1.48904,"JPN":3.629141,"KAZ":2.379213,"KEN":0.281601,"KGZ":0.84929,"KHM":0.412489,"KIR":0.463747,"KNA":4.983678,"KOR":3.586712,"KSV":1.092016,"KWT":14.037095,"LAO":0.456181,"LBN":3.758478,"LBR":0.267826,"LBY":4.066623,"LCA":2.762336,"LIE":2.628715,"LKA":0.768744,"LSO":0.302503,"LTU":2.616867,"LUX":11.460133,"LVA":2.056655,"MAC":2.812219,"MAR":0.987092,"MDA":0.764019,"MDG":0.085631,"MDV":3.161875,"MEX":2.07039,"MHL":2.956734,"MKD":1.352602,"MLI":0.164977,"MLT":2.897563,"MMR":0.209917,"MNE":1.313399,"MNG":0.953022,"MOZ":0.202935,"MRT":0.625754,"MSR":5.764405,"MTQ":6.072223,"MUS":2.033178,"MWI":0.053469,"MYS":2.802994,"MYT":1.154621,"NAM":1.600687,"NCL":10.033297,"NER":0.080384,"NGA":0.320962,"NIC":0.798805,"NIU":3.937668,"NLD":3.106697,"NOR":4.462331,"NPL":0.187988,"NRU":4.485092,"NZL":4.175007,"OMN":2.487473,"PAK":0.405559,"PAN":2.203131,"PER":0.897554,"PHL":0.5106,"PLW":11.928154,"PNG":0.649288,"POL":1.919906,"PRI":0,"PRK":0.125983,"PRT":2.475287,"PRY":1.085137,"PSE":0.703473,"PYF":2.958251,"QAT":0.99677,"REU":2.634583,"ROU":1.334635,"RUS":2.759078,"RWA":0.071248,"SAU":11.019588,"SDN":0.450915,"SEN":0.459014,"SGP":2.411905,"SHN":2.659891,"SLB":0.460842,"SLE":0.153524,"SLV":1.000074,"SOM":0.044605,"SPM":11.056496,"SRB":1.186243,"SSD":0.153962,"STP":0.608781,"SUR":4.013988,"SVK":1.845814,"SVN":3.464167,"SWE":3.051189,"SWZ":0.707984,"SXM":17.989455,"SYC":5.504676,"SYR":1.078281,"TCA":8.622078,"TCD":0.097187,"TGO":0.192869,"THA":1.715266,"TJK":0.318357,"TKM":3.402674,"TLS":0.415901,"TON":1.178503,"TTO":2.760475,"TUN":1.170469,"TUR":1.454558,"TUV":0.675267,"TWN":3.000913,"TZA":0.128101,"UGA":0.113961,"UKR":0.761117,"URY":1.79235,"USA":7.027919,"UZB":0.340742,"VCT":2.282155,"VEN":2.711636,"VGB":7.145903,"VNM":0.648198,"VUT":0.517481,"WLF":2.1267,"WSM":1.158681,"YEM":0.289375,"ZAF":1.044534,"ZMB":0.252227,"ZWE":0.217264},"2017":{"ABW":8.444238,"AFG":0.170436,"AGO":0.483036,"AIA":9.516883,"ALB":1.416589,"AND":6.302098,"ARE":6.88883,"ARG":1.835349,"ARM":0.304689,"ATG":5.388294,"AUS":5.671368,"AUT":3.926838,"AZE":1.24091,"BDI":0.044012,"BEL":4.069848,"BEN":0.544662,"BES":4.210457,"BFA":0.192659,"BGD":0.115626,"BGR":1.717848,"BHR":2.799243,"BHS":5.24319,"BIH":1.421919,"BLR":1.786644,"BLZ":1.633038,"BMU":9.959826,"BOL":1.115503,"BRA":1.517591,"BRB":3.819032,"BRN":4.479134,"BTN":0.683256,"BWA":1.173107,"CAF":0.043263,"CAN":7.123722,"CHE":3.386255,"CHL":2.475329,"CHN":1.014402,"CIV":0.30376,"CMR":0.225609,"COD":0.025214,"COG":0.371756,"COK":4.633975,"COL":0.75008,"COM":0.351168,"CPV":1.024706,"CRI":1.498223,"CUB":1.98772,"CUW":25.97616,"CYP":5.439979,"CZE":2.104534,"DEU":3.378917,"DJI":0.317006,"DMA":2.289902,"DNK":3.491075,"DOM":1.544676,"DZA":1.3445,"ECU":2.05334,"EGY":1.169435,"ERI":0.183365,"ESP":3.060514,"EST":2.710959,"ETH":0.097189,"FIN":4.017097,"FJI":1.423309,"FRA":3.050226,"FRO":14.07828,"FSM":1.293996,"GAB":1.127357,"GBR":2.646653,"GEO":0.935452,"GHA":0.312665,"GIN":0.264605,"GLP":5.11579,"GMB":0.249275,"GNB":0.161777,"GNQ":0.785489,"GRC":3.2767,"GRD":2.302859,"GRL":9.69107,"GTM":0.72048,"GUF":2.624126,"GUY":2.832302,"HKG":1.587083,"HND":0.967903,"HRV":2.388201,"HTI":0.27826,"HUN":1.784948,"IDN":0.863786,"IND":0.466024,"IRL":3.914479,"IRN":2.71059,"IRQ":3.896932,"ISL":8.02785,"ISR":2.566952,"ITA":2.479459,"JAM":2.499745,"JOR":1.486348,"JPN":3.543649,"KAZ":2.464462,"KEN":0.273279,"KGZ":0.782929,"KHM":0.416377,"KIR":0.547947,"KNA":5.060668,"KOR":3.482968,"KSV":1.250486,"KWT":12.353963,"LAO":0.458575,"LBN":4.084871,"LBR":0.23298,"LBY":4.106752,"LCA":2.85405,"LIE":2.699679,"LKA":0.754715,"LSO":0.302152,"LTU":2.673033,"LUX":11.528339,"LVA":2.187689,"MAC":2.491064,"MAR":1.036659,"MDA":0.802957,"MDG":0.098707,"MDV":3.203001,"MEX":2.001313,"MHL":3.10594,"MKD":1.360135,"MLI":0.17038,"MLT":2.040123,"MMR":0.219048,"MNE":1.42519,"MNG":1.21409,"MOZ":0.153257,"MRT":0.804139,"MSR":6.237923,"MTQ":6.037517,"MUS":2.125262,"MWI":0.059789,"MYS":2.541684,"MYT":1.091959,"NAM":1.574358,"NCL":9.019902,"NER":0.083743,"NGA":0.302272,"NIC":0.796063,"NIU":3.920813,"NLD":3.076221,"NOR":4.300647,"NPL":0.22569,"NRU":4.704674,"NZL":4.290042,"OMN":2.854092,"PAK":0.394923,"PAN":2.501889,"PER":1.01234,"PHL":0.522661,"PLW":12.119527,"PNG":0.596946,"POL":2.169276,"PRI":0,"PRK":0.114884,"PRT":2.517383,"PRY":1.205498,"PSE":0.69524,"PYF":2.914334,"QAT":3.339931,"REU":2.582568,"ROU":1.44273,"RUS":2.84283,"RWA":0.076394,"SAU":10.752529,"SDN":0.495478,"SEN":0.478855,"SGP":2.278683,"SHN":2.000364,"SLB":0.444029,"SLE":0.137444,"SLV":0.896351,"SOM":0.042891,"SPM":11.071345,"SRB":1.188399,"SSD":0.136477,"STP":0.616432,"SUR":3.554503,"SVK":1.863442,"SVN":3.484087,"SWE":2.933163,"SWZ":0.716004,"SXM":16.883986,"SYC":5.650156,"SYR":1.19937,"TCA":8.828029,"TCD":0.093022,"TGO":0.177769,"THA":1.760396,"TJK":0.265599,"TKM":3.350501,"TLS":0.442072,"TON":1.286041,"TTO":3.458982,"TUN":1.211833,"TUR":1.471138,"TUV":0.676764,"TWN":2.934671,"TZA":0.120794,"UGA":0.124638,"UKR":0.791409,"URY":1.670224,"USA":7.018608,"UZB":0.347881,"VCT":2.04811,"VEN":2.518056,"VGB":5.606919,"VNM":0.663274,"VUT":0.479715,"WLF":2.148794,"WSM":1.182334,"YEM":0.274851,"ZAF":0.999484,"ZMB":0.236089,"ZWE":0.218747},"2018":{"ABW":8.229667,"AFG":0.18047,"AGO":0.475601,"AIA":9.412819,"ALB":1.157651,"AND":6.594057,"ARE":6.788012,"ARG":1.67499,"ARM":0.291926,"ATG":5.438456,"AUS":5.753275,"AUT":3.855559,"AZE":1.165693,"BDI":0.05454,"BEL":3.99298,"BEN":0.586697,"BES":3.961874,"BFA":0.205006,"BGD":0.11965,"BGR":1.764093,"BHR":2.473312,"BHS":6.709788,"BIH":1.364476,"BLR":1.874861,"BLZ":1.572754,"BMU":11.066178,"BOL":1.110857,"BRA":1.430318,"BRB":4.085938,"BRN":4.388911,"BTN":0.74321,"BWA":1.174795,"CAF":0.04315,"CAN":7.208382,"CHE":3.261487,"CHL":2.490063,"CHN":1.058857,"CIV":0.248138,"CMR":0.202608,"COD":0.023722,"COG":0.368649,"COK":4.672115,"COL":0.789801,"COM":0.37758,"CPV":1.019912,"CRI":1.486466,"CUB":1.766661,"CUW":20.985142,"CYP":5.267536,"CZE":2.123696,"DEU":3.199455,"DJI":0.298056,"DMA":2.276323,"DNK":3.483738,"DOM":1.688794,"DZA":1.309946,"ECU":1.938409,"EGY":0.992247,"ERI":0.209501,"ESP":3.067432,"EST":2.64972,"ETH":0.099726,"FIN":4.007055,"FJI":1.475019,"FRA":2.945701,"FRO":14.237504,"FSM":1.288175,"GAB":1.08649,"GBR":2.605439,"GEO":0.906208,"GHA":0.370628,"GIN":0.29359,"GLP":5.095943,"GMB":0.242776,"GNB":0.161791,"GNQ":0.722023,"GRC":3.18252,"GRD":2.526108,"GRL":9.79816,"GTM":0.747431,"GUF":2.540156,"GUY":2.952604,"HKG":1.537777,"HND":0.921879,"HRV":2.303941,"HTI":0.299104,"HUN":1.898428,"IDN":0.833157,"IND":0.478589,"IRL":4.034278,"IRN":2.749319,"IRQ":3.56365,"ISL":7.886053,"ISR":2.657448,"ITA":2.550184,"JAM":2.613946,"JOR":1.402216,"JPN":3.42567,"KAZ":2.640337,"KEN":0.280135,"KGZ":0.910776,"KHM":0.451334,"KIR":0.539436,"KNA":5.139926,"KOR":3.437376,"KSV":1.257787,"KWT":11.995994,"LAO":0.465753,"LBN":3.946711,"LBR":0.196337,"LBY":4.003492,"LCA":2.863015,"LIE":2.443381,"LKA":0.666445,"LSO":0.313388,"LTU":2.80893,"LUX":11.915452,"LVA":2.253832,"MAC":1.63303,"MAR":0.996229,"MDA":0.848991,"MDG":0.093079,"MDV":3.553592,"MEX":1.885479,"MHL":3.186849,"MKD":1.342525,"MLI":0.170924,"MLT":1.76162,"MMR":0.396663,"MNE":1.54926,"MNG":1.249516,"MOZ":0.151501,"MRT":0.858012,"MSR":6.724478,"MTQ":6.044394,"MUS":2.175125,"MWI":0.067823,"MYS":2.558412,"MYT":1.041943,"NAM":1.515447,"NCL":9.883762,"NER":0.061345,"NGA":0.244233,"NIC":0.750976,"NIU":5.825119,"NLD":3.10133,"NOR":4.369315,"NPL":0.247679,"NRU":4.609192,"NZL":4.243848,"OMN":2.887404,"PAK":0.301465,"PAN":2.169377,"PER":1.031211,"PHL":0.528699,"PLW":11.896104,"PNG":0.714009,"POL":2.248373,"PRI":0,"PRK":0.113472,"PRT":2.479536,"PRY":1.256111,"PSE":0.615299,"PYF":2.942468,"QAT":1.639491,"REU":2.544578,"ROU":1.465321,"RUS":2.688019,"RWA":0.081865,"SAU":9.694946,"SDN":0.467258,"SEN":0.44627,"SGP":4.021264,"SHN":2.008772,"SLB":0.439069,"SLE":0.131901,"SLV":0.953312,"SOM":0.041369,"SPM":9.862719,"SRB":1.206084,"SSD":0.144159,"STP":0.62412,"SUR":3.110341,"SVK":1.878953,"SVN":3.478907,"SWE":2.870702,"SWZ":0.751474,"SXM":16.30526,"SYC":5.828227,"SYR":1.102225,"TCA":8.743365,"TCD":0.093219,"TGO":0.165745,"THA":1.647302,"TJK":0.320985,"TKM":3.320823,"TLS":0.394901,"TON":1.289282,"TTO":2.612779,"TUN":1.151425,"TUR":1.42094,"TUV":0.674459,"TWN":2.907881,"TZA":0.119614,"UGA":0.127707,"UKR":0.792284,"URY":1.789746,"USA":7.121344,"UZB":0.36042,"VCT":2.296939,"VEN":1.449721,"VGB":5.314521,"VNM":0.735006,"VUT":0.591568,"WLF":2.170616,"WSM":1.135712,"YEM":0.272148,"ZAF":1.14201,"ZMB":0.201936,"ZWE":0.269709},"2019":{"ABW":8.571203,"AFG":0.181177,"AGO":0.429439,"AIA":10.005722,"ALB":1.197159,"AND":6.287204,"ARE":6.567223,"ARG":1.672753,"ARM":0.370219,"ATG":5.409468,"AUS":5.642777,"AUT":3.838689,"AZE":1.182227,"BDI":0.053997,"BEL":3.930573,"BEN":0.519023,"BES":4.298788,"BFA":0.2121,"BGD":0.101383,"BGR":1.856303,"BHR":2.508568,"BHS":6.258263,"BIH":1.393334,"BLR":1.86444,"BLZ":1.817428,"BMU":9.129568,"BOL":1.082962,"BRA":1.427564,"BRB":3.713955,"BRN":8.163635,"BTN":0.744775,"BWA":1.168854,"CAF":0.043608,"CAN":7.177703,"CHE":3.205528,"CHL":2.522247,"CHN":1.09696,"CIV":0.236536,"CMR":0.195974,"COD":0.023963,"COG":0.363403,"COK":4.925307,"COL":0.951753,"COM":0.393736,"CPV":1.060409,"CRI":1.439072,"CUB":1.798182,"CUW":10.151056,"CYP":5.257423,"CZE":2.134146,"DEU":3.258166,"DJI":0.293395,"DMA":2.359635,"DNK":3.398762,"DOM":1.879495,"DZA":1.385251,"ECU":2.009458,"EGY":0.960659,"ERI":0.2135,"ESP":2.996325,"EST":2.498305,"ETH":0.115478,"FIN":3.908552,"FJI":1.479862,"FRA":2.914578,"FRO":14.321085,"FSM":1.315867,"GAB":0.832518,"GBR":2.530682,"GEO":0.951269,"GHA":0.381327,"GIN":0.34431,"GLP":5.230805,"GMB":0.239507,"GNB":0.163633,"GNQ":0.719574,"GRC":3.210075,"GRD":2.687005,"GRL":9.898558,"GTM":0.804068,"GUF":2.534249,"GUY":3.215592,"HKG":1.550429,"HND":1.049293,"HRV":2.25715,"HTI":0.266582,"HUN":1.981575,"IDN":0.824181,"IND":0.487315,"IRL":3.991934,"IRN":2.650078,"IRQ":2.742125,"ISL":7.462608,"ISR":2.46752,"ITA":2.479841,"JAM":2.398419,"JOR":1.488041,"JPN":3.305946,"KAZ":2.61598,"KEN":0.299138,"KGZ":0.705145,"KHM":0.510906,"KIR":0.530839,"KNA":5.298793,"KOR":3.39352,"KSV":1.3244,"KWT":12.49659,"LAO":0.463331,"LBN":4.088639,"LBR":0.1955,"LBY":6.410938,"LCA":2.892907,"LIE":2.565594,"LKA":0.683901,"LSO":0.32266,"LTU":2.875572,"LUX":11.929398,"LVA":2.253323,"MAC":1.44097,"MAR":1.001069,"MDA":0.885523,"MDG":0.102023,"MDV":3.870924,"MEX":1.933857,"MHL":3.276695,"MKD":1.462705,"MLI":0.168526,"MLT":1.868084,"MMR":0.371718,"MNE":1.621609,"MNG":1.548498,"MOZ":0.143847,"MRT":0.860869,"MSR":4.879911,"MTQ":6.235374,"MUS":2.283854,"MWI":0.068007,"MYS":2.412136,"MYT":1.02561,"NAM":1.445147,"NCL":9.128736,"NER":0.084682,"NGA":0.337953,"NIC":0.748313,"NIU":5.72202,"NLD":3.052419,"NOR":4.103974,"NPL":0.216415,"NRU":4.530168,"NZL":4.216917,"OMN":2.811703,"PAK":0.290553,"PAN":2.105323,"PER":1.0593,"PHL":0.50195,"PLW":12.270596,"PNG":0.733761,"POL":2.2902,"PRI":0,"PRK":0.123332,"PRT":2.541583,"PRY":1.200156,"PSE":0.664923,"PYF":2.921743,"QAT":3.71068,"REU":2.584195,"ROU":1.521071,"RUS":2.73371,"RWA":0.119853,"SAU":10.382984,"SDN":0.459694,"SEN":0.498136,"SGP":1.202928,"SHN":2.690655,"SLB":0.434256,"SLE":0.147984,"SLV":1.108532,"SOM":0.039893,"SPM":11.131139,"SRB":1.246077,"SSD":0.158166,"STP":0.614653,"SUR":4.431167,"SVK":1.892091,"SVN":3.33975,"SWE":2.795639,"SWZ":0.786298,"SXM":16.026803,"SYC":5.686988,"SYR":0.915897,"TCA":8.420056,"TCD":0.089289,"TGO":0.142238,"THA":1.696994,"TJK":0.314326,"TKM":3.282977,"TLS":0.472151,"TON":1.536107,"TTO":2.46122,"TUN":1.117039,"TUR":1.375871,"TUV":0.668857,"TWN":2.753439,"TZA":0.112847,"UGA":0.12643,"UKR":0.870383,"URY":1.759035,"USA":7.055616,"UZB":0.372311,"VCT":2.165072,"VEN":1.199725,"VGB":5.506174,"VNM":0.796989,"VUT":0.529612,"WLF":2.189517,"WSM":1.279517,"YEM":0.320923,"ZAF":0.998142,"ZMB":0.241488,"ZWE":0.238148},"2020":{"ABW":7.308293,"AFG":0.185254,"AGO":0.39198,"AIA":8.430535,"ALB":1.122339,"AND":5.777148,"ARE":5.811253,"ARG":1.574577,"ARM":0.327806,"ATG":4.591351,"AUS":5.277601,"AUT":3.447875,"AZE":1.054768,"BDI":0.047592,"BEL":3.416304,"BEN":0.515422,"BES":3.588496,"BFA":0.210778,"BGD":0.09511,"BGR":1.739669,"BHR":2.344683,"BHS":5.318157,"BIH":1.319667,"BLR":1.858074,"BLZ":1.552782,"BMU":7.768184,"BOL":1.040544,"BRA":1.318454,"BRB":3.165187,"BRN":8.544315,"BTN":0.780912,"BWA":1.095969,"CAF":0.040097,"CAN":6.291544,"CHE":2.929779,"CHL":2.351882,"CHN":1.14232,"CIV":0.235649,"CMR":0.179877,"COD":0.021882,"COG":0.335117,"COK":5.222977,"COL":0.787472,"COM":0.350406,"CPV":1.07284,"CRI":1.238534,"CUB":1.537217,"CUW":8.841855,"CYP":5.090074,"CZE":2.006404,"DEU":3.016765,"DJI":0.262172,"DMA":1.998795,"DNK":3.191264,"DOM":1.587534,"DZA":1.25519,"ECU":1.649169,"EGY":0.840884,"ERI":0.189726,"ESP":2.539568,"EST":2.340689,"ETH":0.101977,"FIN":3.642148,"FJI":1.554512,"FRA":2.550423,"FRO":13.205626,"FSM":1.379782,"GAB":0.768704,"GBR":2.147063,"GEO":0.890791,"GHA":0.381506,"GIN":0.343257,"GLP":4.731013,"GMB":0.238482,"GNB":0.163398,"GNQ":0.660337,"GRC":2.955721,"GRD":2.312416,"GRL":8.932951,"GTM":0.686973,"GUF":2.238665,"GUY":3.137406,"HKG":1.128397,"HND":0.895275,"HRV":2.019383,"HTI":0.224662,"HUN":1.781729,"IDN":0.745165,"IND":0.43226,"IRL":3.666845,"IRN":2.562442,"IRQ":2.422963,"ISL":6.76371,"ISR":2.17364,"ITA":2.139199,"JAM":2.041974,"JOR":1.346317,"JPN":3.096795,"KAZ":2.111182,"KEN":0.265877,"KGZ":0.611259,"KHM":0.533,"KIR":0.550413,"KNA":4.530767,"KOR":3.183892,"KSV":1.251109,"KWT":12.187947,"LAO":0.481836,"LBN":3.858163,"LBR":0.195699,"LBY":5.56184,"LCA":2.460958,"LIE":2.411888,"LKA":0.638132,"LSO":0.304474,"LTU":2.84417,"LUX":9.42457,"LVA":2.19821,"MAC":1.492421,"MAR":0.893866,"MDA":0.785608,"MDG":0.090192,"MDV":4.006578,"MEX":1.513339,"MHL":3.563031,"MKD":1.395252,"MLI":0.166833,"MLT":1.674806,"MMR":0.389505,"MNE":1.51979,"MNG":1.603476,"MOZ":0.126738,"MRT":0.856995,"MSR":4.171108,"MTQ":5.670077,"MUS":2.069052,"MWI":0.0602,"MYS":2.124009,"MYT":0.894282,"NAM":1.357539,"NCL":9.600004,"NER":0.083216,"NGA":0.336915,"NIC":0.640086,"NIU":5.97381,"NLD":2.762084,"NOR":3.937962,"NPL":0.224391,"NRU":4.710166,"NZL":3.778624,"OMN":2.493781,"PAK":0.288963,"PAN":1.799388,"PER":0.807803,"PHL":0.418905,"PLW":12.910238,"PNG":0.757969,"POL":2.225741,"PRI":0,"PRK":0.129612,"PRT":2.254302,"PRY":1.152541,"PSE":0.601108,"PYF":3.061156,"QAT":2.949179,"REU":2.317696,"ROU":1.50295,"RUS":2.615302,"RWA":0.105922,"SAU":10.307343,"SDN":0.405619,"SEN":0.49554,"SGP":1.19698,"SHN":2.308731,"SLB":0.447581,"SLE":0.147738,"SLV":0.959856,"SOM":0.034968,"SPM":9.534364,"SRB":1.172159,"SSD":0.141316,"STP":0.568961,"SUR":4.261121,"SVK":1.761224,"SVN":2.842406,"SWE":2.522632,"SWZ":0.744419,"SXM":13.482639,"SYC":5.101716,"SYR":0.819003,"TCA":6.994867,"TCD":0.081588,"TGO":0.141871,"THA":1.551684,"TJK":0.270855,"TKM":3.190759,"TLS":0.490819,"TON":1.616566,"TTO":2.284778,"TUN":0.972416,"TUR":1.370183,"TUV":0.698717,"TWN":2.639961,"TZA":0.099316,"UGA":0.110917,"UKR":0.795141,"URY":1.711625,"USA":6.100269,"UZB":0.326481,"VCT":1.853702,"VEN":1.03257,"VGB":4.655555,"VNM":0.675848,"VUT":0.545904,"WLF":2.32255,"WSM":1.331423,"YEM":0.289919,"ZAF":0.83334,"ZMB":0.212805,"ZWE":0.211664},"2021":{"ABW":8.054722,"AFG":0.185029,"AGO":0.402904,"AIA":9.188354,"ALB":1.137164,"AND":5.730292,"ARE":6.389958,"ARG":1.773737,"ARM":0.355273,"ATG":5.027895,"AUS":5.368438,"AUT":3.526375,"AZE":1.077332,"BDI":0.04891,"BEL":3.83822,"BEN":0.535575,"BES":3.871365,"BFA":0.219259,"BGD":0.106622,"BGR":1.855755,"BHR":2.426313,"BHS":5.838075,"BIH":1.350757,"BLR":1.773462,"BLZ":1.711186,"BMU":8.537196,"BOL":1.101349,"BRA":1.385677,"BRB":3.480605,"BRN":8.708841,"BTN":0.797382,"BWA":1.099621,"CAF":0.041651,"CAN":6.333628,"CHE":2.924785,"CHL":2.401832,"CHN":1.20159,"CIV":0.245609,"CMR":0.185873,"COD":0.022479,"COG":0.347396,"COK":5.375721,"COL":0.969493,"COM":0.362904,"CPV":1.135678,"CRI":1.374266,"CUB":1.700125,"CUW":9.686792,"CYP":5.221541,"CZE":2.210333,"DEU":2.975721,"DJI":0.272875,"DMA":2.189268,"DNK":3.188446,"DOM":1.730294,"DZA":1.268066,"ECU":1.994683,"EGY":0.88788,"ERI":0.196696,"ESP":2.803142,"EST":2.428487,"ETH":0.104873,"FIN":3.581235,"FJI":1.590295,"FRA":2.785402,"FRO":13.203997,"FSM":1.405118,"GAB":0.798612,"GBR":2.290553,"GEO":0.900633,"GHA":0.399414,"GIN":0.357805,"GLP":4.726128,"GMB":0.248379,"GNB":0.170736,"GNQ":0.684107,"GRC":2.96915,"GRD":2.56167,"GRL":9.079509,"GTM":0.756146,"GUF":2.189895,"GUY":3.329849,"HKG":0.998571,"HND":0.984147,"HRV":2.229111,"HTI":0.244452,"HUN":1.892456,"IDN":0.768025,"IND":0.442003,"IRL":3.697733,"IRN":2.535864,"IRQ":2.683748,"ISL":6.821205,"ISR":2.203413,"ITA":2.393763,"JAM":2.243742,"JOR":1.352621,"JPN":3.17271,"KAZ":2.227889,"KEN":0.275241,"KGZ":0.648636,"KHM":0.541405,"KIR":0.555062,"KNA":4.995041,"KOR":3.308581,"KSV":1.268866,"KWT":12.643539,"LAO":0.488123,"LBN":4.0038,"LBR":0.204781,"LBY":6.581704,"LCA":2.704837,"LIE":2.443113,"LKA":0.605924,"LSO":0.306806,"LTU":3.006061,"LUX":9.581352,"LVA":2.260398,"MAC":1.51066,"MAR":0.975242,"MDA":0.85345,"MDG":0.092927,"MDV":4.06203,"MEX":1.544653,"MHL":3.780319,"MKD":1.608522,"MLI":0.172667,"MLT":1.671925,"MMR":0.397494,"MNE":1.536249,"MNG":1.621541,"MOZ":0.130027,"MRT":0.892337,"MSR":4.681398,"MTQ":5.6946,"MUS":2.182113,"MWI":0.061905,"MYS":2.117796,"MYT":0.864775,"NAM":1.362075,"NCL":9.817779,"NER":0.085654,"NGA":0.351327,"NIC":0.704639,"NIU":6.154972,"NLD":2.738996,"NOR":3.975181,"NPL":0.225331,"NRU":4.764679,"NZL":3.635653,"OMN":2.697747,"PAK":0.324041,"PAN":1.982355,"PER":1.00294,"PHL":0.447164,"PLW":13.229228,"PNG":0.763302,"POL":2.39401,"PRI":0,"PRK":0.132663,"PRT":2.321238,"PRY":1.218865,"PSE":0.602376,"PYF":3.124014,"QAT":3.226295,"REU":2.297768,"ROU":1.645286,"RUS":2.777896,"RWA":0.109183,"SAU":10.28421,"SDN":0.416732,"SEN":0.515504,"SGP":1.166976,"SHN":2.550917,"SLB":0.449141,"SLE":0.154312,"SLV":1.067824,"SOM":0.035766,"SPM":10.544484,"SRB":1.192537,"SSD":0.147192,"STP":0.591547,"SUR":4.520192,"SVK":1.852993,"SVN":3.013811,"SWE":2.537716,"SWZ":0.751829,"SXM":14.711011,"SYC":5.337406,"SYR":0.81765,"TCA":7.562677,"TCD":0.083864,"TGO":0.147997,"THA":1.518872,"TJK":0.285824,"TKM":3.236365,"TLS":0.496403,"TON":1.649345,"TTO":2.016713,"TUN":1.155178,"TUR":1.39616,"TUV":0.7094,"TWN":2.762183,"TZA":0.101726,"UGA":0.113376,"UKR":0.837403,"URY":1.834908,"USA":6.628469,"UZB":0.346405,"VCT":2.047981,"VEN":1.071702,"VGB":5.093802,"VNM":0.621885,"VUT":0.547911,"WLF":2.392571,"WSM":1.344282,"YEM":0.290844,"ZAF":0.880674,"ZMB":0.21833,"ZWE":0.218894}},"Gas":{"2008":{"ABW":0,"AFG":0.01124,"AGO":0.058613,"AIA":0,"ALB":0.004965,"AND":0,"ARE":15.425615,"ARG":2.237678,"ARM":1.381635,"ATG":0,"AUS":2.907908,"AUT":2.095395,"AZE":2.304327,"BDI":0,"BEL":3.327222,"BEN":0,"BES":0,"BFA":0,"BGD":0.221597,"BGR":0.875345,"BHR":20.686955,"BHS":0,"BIH":0.193263,"BLR":3.947217,"BLZ":0,"BMU":0,"BOL":0.509888,"BRA":0.266269,"BRB":0.120953,"BRN":16.882861,"BTN":0,"BWA":0,"CAF":0,"CAN":5.465868,"CHE":0.874707,"CHL":0.28962,"CHN":0.112523,"CIV":0.150039,"CMR":0.037881,"COD":0.000706,"COG":0.011679,"COK":0,"COL":0.399805,"COM":0,"CPV":0,"CRI":0,"CUB":0.197552,"CUW":0,"CYP":0.000491,"CZE":1.666662,"DEU":2.214227,"DJI":0,"DMA":0,"DNK":1.785718,"DOM":0.097343,"DZA":1.491211,"ECU":0.064205,"EGY":0.993628,"ERI":0,"ESP":1.795917,"EST":1.257936,"ETH":0,"FIN":1.573215,"FJI":0,"FRA":1.495122,"FRO":0,"FSM":0,"GAB":0.217553,"GBR":3.282279,"GEO":0.638417,"GHA":0,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":2.351717,"GRC":0.732291,"GRD":0,"GRL":0,"GTM":0,"GUF":0,"GUY":0,"HKG":0.648544,"HND":0,"HRV":1.295746,"HTI":0,"HUN":2.455905,"IDN":0.253484,"IND":0.052246,"IRL":2.419239,"IRN":3.367163,"IRQ":0.521917,"ISL":0.000501,"ISR":0.991861,"ITA":2.822188,"JAM":0,"JOR":0.940185,"JPN":1.596568,"KAZ":1.872875,"KEN":0,"KGZ":0.267454,"KHM":0,"KIR":0,"KNA":0,"KOR":1.568729,"KSV":0,"KWT":10.041367,"LAO":0,"LBN":0,"LBR":0,"LBY":2.0191,"LCA":0,"LIE":2.057213,"LKA":0,"LSO":0,"LTU":1.810055,"LUX":5.30911,"LVA":1.434543,"MAC":0.298775,"MAR":0.03521,"MDA":0.535315,"MDG":0,"MDV":0,"MEX":1.080983,"MHL":0,"MKD":0.107133,"MLI":0,"MLT":0.000048,"MMR":0.07489,"MNE":0,"MNG":0,"MOZ":0.005376,"MRT":0,"MSR":0,"MTQ":0,"MUS":0,"MWI":0,"MYS":2.625507,"MYT":0,"NAM":0,"NCL":0,"NER":0,"NGA":0.13554,"NIC":0,"NIU":0,"NLD":4.933073,"NOR":2.953664,"NPL":0,"NRU":0,"NZL":1.833494,"OMN":10.821885,"PAK":0.353646,"PAN":0,"PER":0.257951,"PHL":0.081634,"PLW":0,"PNG":0.040583,"POL":0.730328,"PRI":0,"PRK":0,"PRT":0.991866,"PRY":0,"PSE":0,"PYF":0,"QAT":28.778701,"REU":0,"ROU":1.511375,"RUS":5.438577,"RWA":0,"SAU":4.561346,"SDN":0,"SEN":0.001852,"SGP":2.80326,"SHN":0,"SLB":0,"SLE":0,"SLV":0,"SOM":0,"SPM":0,"SRB":0.59305,"SSD":0,"STP":0,"SUR":0.013724,"SVK":2.187495,"SVN":0.923102,"SWE":0.208138,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.521599,"TCA":0,"TCD":0,"TGO":0,"THA":0.89548,"TJK":0.135062,"TKM":7.857356,"TLS":0,"TON":0,"TTO":27.785098,"TUN":0.820721,"TUR":1.003191,"TUV":0,"TWN":1.098559,"TZA":0.024529,"UGA":0,"UKR":2.482608,"URY":0.051619,"USA":4.0996,"UZB":3.699308,"VCT":0,"VEN":1.611913,"VGB":0,"VNM":0.162403,"VUT":0,"WLF":0,"WSM":0,"YEM":0,"ZAF":0.160571,"ZMB":0,"ZWE":0},"2009":{"ABW":0,"AFG":0.009906,"AGO":0.057302,"AIA":0,"ALB":0.006251,"AND":0,"ARE":14.196542,"ARG":2.162862,"ARM":1.069178,"ATG":0,"AUS":2.913712,"AUT":2.041939,"AZE":2.060281,"BDI":0,"BEL":3.377534,"BEN":0,"BES":0,"BFA":0,"BGD":0.241583,"BGR":0.661763,"BHR":20.496851,"BHS":0,"BIH":0.11244,"BLR":3.261008,"BLZ":0,"BMU":0,"BOL":0.548394,"BRA":0.210565,"BRB":0.120164,"BRN":14.337223,"BTN":0,"BWA":0,"CAF":0,"CAN":5.209042,"CHE":0.827804,"CHL":0.378928,"CHN":0.122769,"CIV":0.134668,"CMR":0.030518,"COD":0.000684,"COG":0.024959,"COK":0,"COL":0.453515,"COM":0,"CPV":0,"CRI":0,"CUB":0.196462,"CUW":0,"CYP":0.001025,"CZE":1.565539,"DEU":2.060182,"DJI":0,"DMA":0,"DNK":1.703043,"DOM":0.094164,"DZA":1.559666,"ECU":0.07455,"EGY":0.956571,"ERI":0,"ESP":1.58968,"EST":0.917055,"ETH":0,"FIN":1.404509,"FJI":0,"FRA":1.460898,"FRO":0,"FSM":0,"GAB":0.279439,"GBR":3.021534,"GEO":0.644757,"GHA":0.00044,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":1.596254,"GRC":0.599095,"GRD":0,"GRL":0,"GTM":0,"GUF":0,"GUY":0,"HKG":0.729227,"HND":0,"HRV":1.199463,"HTI":0,"HUN":2.134566,"IDN":0.267825,"IND":0.09209,"IRL":2.307138,"IRN":3.512593,"IRQ":0.551371,"ISL":0.000514,"ISR":1.086523,"ITA":2.58608,"JAM":0,"JOR":1.0413,"JPN":1.578063,"KAZ":1.826156,"KEN":0,"KGZ":0.115048,"KHM":0,"KIR":0,"KNA":0,"KOR":1.48537,"KSV":0,"KWT":8.621485,"LAO":0,"LBN":0.019237,"LBR":0,"LBY":1.766271,"LCA":0,"LIE":1.61227,"LKA":0,"LSO":0,"LTU":1.547358,"LUX":5.340344,"LVA":1.329562,"MAC":0.330624,"MAR":0.037734,"MDA":0.500326,"MDG":0,"MDV":0,"MEX":1.111513,"MHL":0,"MKD":0.070161,"MLI":0,"MLT":0.000077,"MMR":0.110632,"MNE":0,"MNG":0,"MOZ":0.006695,"MRT":0,"MSR":0,"MTQ":0,"MUS":0,"MWI":0,"MYS":2.319248,"MYT":0,"NAM":0,"NCL":0,"NER":0,"NGA":0.115281,"NIC":0,"NIU":0,"NLD":4.943009,"NOR":3.061998,"NPL":0,"NRU":0,"NZL":1.73315,"OMN":10.650243,"PAK":0.352345,"PAN":0,"PER":0.323568,"PHL":0.080733,"PLW":0,"PNG":0.040828,"POL":0.707384,"PRI":0,"PRK":0,"PRT":0.917705,"PRY":0,"PSE":0,"PYF":0,"QAT":27.777951,"REU":0,"ROU":1.233112,"RUS":5.105149,"RWA":0,"SAU":4.198631,"SDN":0,"SEN":0.002704,"SGP":2.736047,"SHN":0,"SLB":0,"SLE":0,"SLV":0,"SOM":0,"SPM":0,"SRB":0.415105,"SSD":0,"STP":0,"SUR":0.013571,"SVK":1.931714,"SVN":0.872689,"SWE":0.270192,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.630459,"TCA":0,"TCD":0,"TGO":0,"THA":1.056673,"TJK":0.059361,"TKM":6.658337,"TLS":0,"TON":0,"TTO":27.895949,"TUN":0.84563,"TUR":0.988016,"TUV":0,"TWN":1.062218,"TZA":0.028256,"UGA":0,"UKR":1.9554,"URY":0.036156,"USA":3.992554,"UZB":3.057835,"VCT":0,"VEN":1.543573,"VGB":0,"VNM":0.177771,"VUT":0,"WLF":0,"WSM":0,"YEM":0.030648,"ZAF":0.13755,"ZMB":0,"ZWE":0},"2010":{"ABW":0,"AFG":0.009618,"AGO":0.058651,"AIA":0,"ALB":0.008803,"AND":0,"ARE":13.778602,"ARG":2.11504,"ARM":1.002339,"ATG":0,"AUS":2.918548,"AUT":2.245575,"AZE":1.945205,"BDI":0,"BEL":3.709206,"BEN":0,"BES":0,"BFA":0,"BGD":0.265491,"BGR":0.70755,"BHR":20.212709,"BHS":0,"BIH":0.120155,"BLR":4.06442,"BLZ":0.034359,"BMU":0,"BOL":0.601034,"BRA":0.280356,"BRB":0.106701,"BRN":15.468152,"BTN":0,"BWA":0,"CAF":0,"CAN":5.249597,"CHE":0.915172,"CHL":0.601426,"CHN":0.148039,"CIV":0.143819,"CMR":0.02986,"COD":0.000663,"COG":0.043758,"COK":0,"COL":0.49062,"COM":0,"CPV":0,"CRI":0,"CUB":0.182402,"CUW":0,"CYP":0.000653,"CZE":1.758134,"DEU":2.262569,"DJI":0,"DMA":0,"DNK":1.90409,"DOM":0.149949,"DZA":1.488379,"ECU":0.077234,"EGY":0.939201,"ERI":0,"ESP":1.581589,"EST":0.997289,"ETH":0,"FIN":1.54244,"FJI":0.004061,"FRA":1.537932,"FRO":0,"FSM":0,"GAB":0.361881,"GBR":3.217447,"GEO":0.605086,"GHA":0.031662,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":2.785182,"GRC":0.649464,"GRD":0,"GRL":0,"GTM":0,"GUF":0,"GUY":0,"HKG":0.908238,"HND":0,"HRV":1.307588,"HTI":0,"HUN":2.294781,"IDN":0.302152,"IND":0.108208,"IRL":2.511881,"IRN":3.677935,"IRQ":0.473925,"ISL":0.000417,"ISR":1.375416,"ITA":2.747244,"JAM":0,"JOR":0.755398,"JPN":1.665359,"KAZ":2.057487,"KEN":0,"KGZ":0.102896,"KHM":0,"KIR":0,"KNA":0,"KOR":1.875344,"KSV":0,"KWT":9.557863,"LAO":0,"LBN":0.096811,"LBR":0,"LBY":2.032926,"LCA":0,"LIE":1.685714,"LKA":0,"LSO":0,"LTU":1.804252,"LUX":5.604953,"LVA":1.614523,"MAC":0.534127,"MAR":0.040178,"MDA":0.538913,"MDG":0,"MDV":0,"MEX":1.102986,"MHL":0,"MKD":0.104949,"MLI":0,"MLT":0.000077,"MMR":0.083827,"MNE":0,"MNG":0,"MOZ":0.006669,"MRT":0,"MSR":0,"MTQ":0,"MUS":0,"MWI":0,"MYS":2.117429,"MYT":0,"NAM":0,"NCL":0,"NER":0,"NGA":0.125478,"NIC":0,"NIU":0,"NLD":5.508742,"NOR":3.075828,"NPL":0,"NRU":0,"NZL":1.928584,"OMN":11.83439,"PAK":0.324618,"PAN":0,"PER":0.430335,"PHL":0.074684,"PLW":0,"PNG":0.03817,"POL":0.754837,"PRI":0,"PRK":0,"PRT":0.9903,"PRY":0,"PSE":0,"PYF":0,"QAT":31.161568,"REU":0,"ROU":1.35251,"RUS":5.533014,"RWA":0,"SAU":4.660611,"SDN":0,"SEN":0.003801,"SGP":2.877554,"SHN":0,"SLB":0,"SLE":0,"SLV":0,"SOM":0,"SPM":0,"SRB":0.554313,"SSD":0,"STP":0,"SUR":0.013419,"SVK":2.047538,"SVN":0.914761,"SWE":0.369778,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.799476,"TCA":0,"TCD":0,"TGO":0,"THA":1.186206,"TJK":0.048143,"TKM":7.533221,"TLS":0,"TON":0,"TTO":29.786485,"TUN":1.068086,"TUR":0.97895,"TUV":0,"TWN":1.330458,"TZA":0.032634,"UGA":0,"UKR":2.193113,"URY":0.044808,"USA":4.147126,"UZB":2.9774,"VCT":0,"VEN":1.66057,"VGB":0,"VNM":0.206483,"VUT":0,"WLF":0,"WSM":0,"YEM":0.078629,"ZAF":0.171225,"ZMB":0,"ZWE":0},"2011":{"ABW":0,"AFG":0.010523,"AGO":0.057847,"AIA":0,"ALB":0.010105,"AND":0,"ARE":15.179632,"ARG":2.229907,"ARM":1.282223,"ATG":0,"AUS":2.973543,"AUT":2.113063,"AZE":2.032863,"BDI":0,"BEL":3.156266,"BEN":0,"BES":0,"BFA":0,"BGD":0.263803,"BGR":0.815118,"BHR":20.035849,"BHS":0,"BIH":0.138998,"BLR":3.850635,"BLZ":0.033356,"BMU":0,"BOL":0.650455,"BRA":0.267934,"BRB":0.11941,"BRN":18.150902,"BTN":0,"BWA":0,"CAF":0,"CAN":5.689471,"CHE":0.804323,"CHL":0.608477,"CHN":0.181262,"CIV":0.138826,"CMR":0.020785,"COD":0.00064,"COG":0.061543,"COK":0,"COL":0.464604,"COM":0,"CPV":0,"CRI":0,"CUB":0.17319,"CUW":0,"CYP":0.000793,"CZE":1.60291,"DEU":2.068331,"DJI":0,"DMA":0,"DNK":1.611054,"DOM":0.169471,"DZA":1.552138,"ECU":0.06877,"EGY":1.039005,"ERI":0,"ESP":1.456483,"EST":0.896627,"ETH":0,"FIN":1.345997,"FJI":0,"FRA":1.398498,"FRO":0,"FSM":0,"GAB":0.392756,"GBR":2.658322,"GEO":0.903138,"GHA":0.06042,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":2.759393,"GRC":0.800654,"GRD":0,"GRL":0,"GTM":0,"GUF":0,"GUY":0,"HKG":0.734295,"HND":0,"HRV":1.278614,"HTI":0,"HUN":2.197817,"IDN":0.330042,"IND":0.10843,"IRL":2.167459,"IRN":3.841387,"IRQ":0.429567,"ISL":0.000505,"ISR":1.252482,"ITA":2.548904,"JAM":0,"JOR":0.280856,"JPN":1.936786,"KAZ":2.292247,"KEN":0,"KGZ":0.114823,"KHM":0,"KIR":0,"KNA":0,"KOR":2.003522,"KSV":0,"KWT":10.451395,"LAO":0,"LBN":0,"LBR":0,"LBY":1.643081,"LCA":0,"LIE":1.480143,"LKA":0,"LSO":0,"LTU":1.987309,"LUX":4.7554,"LVA":1.43251,"MAC":0.250254,"MAR":0.049776,"MDA":0.533019,"MDG":0,"MDV":0,"MEX":1.14504,"MHL":0,"MKD":0.120555,"MLI":0,"MLT":0.000101,"MMR":0.110374,"MNE":0,"MNG":0,"MOZ":0.00771,"MRT":0,"MSR":0,"MTQ":0,"MUS":0,"MWI":0,"MYS":2.219846,"MYT":0,"NAM":0,"NCL":0,"NER":0,"NGA":0.16924,"NIC":0,"NIU":0,"NLD":4.773733,"NOR":2.898521,"NPL":0,"NRU":0,"NZL":1.740579,"OMN":12.197833,"PAK":0.332117,"PAN":0,"PER":0.395762,"PHL":0.079188,"PLW":0,"PNG":0.038929,"POL":0.759305,"PRI":0,"PRK":0,"PRT":0.994705,"PRY":0,"PSE":0,"PYF":0,"QAT":36.959432,"REU":0,"ROU":1.403884,"RUS":5.689421,"RWA":0.000346,"SAU":4.630592,"SDN":0,"SEN":0.002847,"SGP":2.841652,"SHN":0,"SLB":0,"SLE":0,"SLV":0,"SOM":0,"SPM":0,"SRB":0.571169,"SSD":0,"STP":0,"SUR":0.013272,"SVK":1.92949,"SVN":0.847565,"SWE":0.291016,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.662455,"TCA":0,"TCD":0,"TGO":0.002172,"THA":1.025941,"TJK":0.047537,"TKM":8.150483,"TLS":0,"TON":0,"TTO":29.190316,"TUN":1.021235,"TUR":1.16008,"TUV":0,"TWN":1.468937,"TZA":0.035032,"UGA":0,"UKR":2.280783,"URY":0.043619,"USA":4.175125,"UZB":3.27393,"VCT":0,"VEN":1.645492,"VGB":0,"VNM":0.184259,"VUT":0,"WLF":0,"WSM":0,"YEM":0.051057,"ZAF":0.167818,"ZMB":0,"ZWE":0},"2012":{"ABW":0,"AFG":0.010102,"AGO":0.05644,"AIA":0,"ALB":0.010135,"AND":0,"ARE":15.303862,"ARG":2.273561,"ARM":1.566467,"ATG":0,"AUS":2.978784,"AUT":2.010308,"AZE":2.090883,"BDI":0,"BEL":3.165421,"BEN":0,"BES":0,"BFA":0,"BGD":0.274275,"BGR":0.769094,"BHR":19.912508,"BHS":0,"BIH":0.130609,"BLR":3.797966,"BLZ":0.021741,"BMU":0,"BOL":0.665707,"BRA":0.317018,"BRB":0.132324,"BRN":17.491851,"BTN":0,"BWA":0,"CAF":0,"CAN":5.71236,"CHE":0.870303,"CHL":0.565627,"CHN":0.203137,"CIV":0.14832,"CMR":0.024215,"COD":0,"COG":0.086397,"COK":0,"COL":0.500169,"COM":0,"CPV":0,"CRI":0,"CUB":0.175598,"CUW":0,"CYP":0.000475,"CZE":1.581572,"DEU":2.060961,"DJI":0,"DMA":0,"DNK":1.502236,"DOM":0.198343,"DZA":1.720706,"ECU":0.090394,"EGY":1.018398,"ERI":0,"ESP":1.39266,"EST":0.96389,"ETH":0,"FIN":1.193512,"FJI":0,"FRA":1.43661,"FRO":0,"FSM":0,"GAB":0.389001,"GBR":2.47991,"GEO":0.991037,"GHA":0.029875,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":3.658978,"GRC":0.738263,"GRD":0,"GRL":0,"GTM":0,"GUF":0,"GUY":0,"HKG":0.675155,"HND":0,"HRV":1.199292,"HTI":0,"HUN":1.972542,"IDN":0.319963,"IND":0.098553,"IRL":2.086331,"IRN":3.779834,"IRQ":0.388424,"ISL":0.000128,"ISR":0.634114,"ITA":2.45412,"JAM":0,"JOR":0.209285,"JPN":2.010286,"KAZ":2.013822,"KEN":0,"KGZ":0.145078,"KHM":0,"KIR":0,"KNA":0,"KOR":2.147035,"KSV":0,"KWT":10.231076,"LAO":0,"LBN":0,"LBR":0,"LBY":1.82455,"LCA":0,"LIE":1.492948,"LKA":0,"LSO":0,"LTU":1.938176,"LUX":4.711902,"LVA":1.359772,"MAC":0,"MAR":0.071852,"MDA":0.520266,"MDG":0,"MDV":0,"MEX":1.172524,"MHL":0,"MKD":0.123909,"MLI":0,"MLT":0.000026,"MMR":0.071233,"MNE":0,"MNG":0,"MOZ":0.007032,"MRT":0,"MSR":0,"MTQ":0,"MUS":0,"MWI":0,"MYS":2.23495,"MYT":0,"NAM":0,"NCL":0,"NER":0,"NGA":0.169761,"NIC":0,"NIU":0,"NLD":4.534615,"NOR":2.805508,"NPL":0,"NRU":0,"NZL":1.891698,"OMN":11.776436,"PAK":0.317393,"PAN":0,"PER":0.435129,"PHL":0.074601,"PLW":0,"PNG":0.03241,"POL":0.791141,"PRI":0,"PRK":0,"PRT":0.864552,"PRY":0,"PSE":0,"PYF":0,"QAT":42.854914,"REU":0,"ROU":1.399058,"RUS":5.604534,"RWA":0.000338,"SAU":4.918216,"SDN":0,"SEN":0.004154,"SGP":3.024389,"SHN":0,"SLB":0,"SLE":0,"SLV":0,"SOM":0,"SPM":0,"SRB":0.505822,"SSD":0,"STP":0,"SUR":0.01313,"SVK":1.859889,"SVN":0.813783,"SWE":0.250249,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.529163,"TCA":0,"TCD":0,"TGO":0.004761,"THA":1.164679,"TJK":0.034035,"TKM":8.255591,"TLS":0,"TON":0,"TTO":28.369304,"TUN":1.087948,"TUR":1.156967,"TUV":0,"TWN":1.550045,"TZA":0.03889,"UGA":0,"UKR":2.132374,"URY":0.031533,"USA":4.333102,"UZB":3.329921,"VCT":0,"VEN":1.687877,"VGB":0,"VNM":0.201081,"VUT":0,"WLF":0,"WSM":0,"YEM":0.057857,"ZAF":0.174151,"ZMB":0,"ZWE":0},"2013":{"ABW":0,"AFG":0.009409,"AGO":0.029287,"AIA":0,"ALB":0.011422,"AND":0,"ARE":15.586506,"ARG":2.154797,"ARM":1.522991,"ATG":0,"AUS":3.013507,"AUT":1.926094,"AZE":2.073521,"BDI":0,"BEL":3.1774,"BEN":0.002133,"BES":0,"BFA":0,"BGD":0.28132,"BGR":0.754758,"BHR":20.749655,"BHS":0,"BIH":0.103309,"BLR":3.807576,"BLZ":0.01063,"BMU":0,"BOL":0.683802,"BRA":0.370331,"BRB":0.158807,"BRN":13.660949,"BTN":0,"BWA":0,"CAF":0,"CAN":5.833395,"CHE":0.904265,"CHL":0.530689,"CHN":0.232634,"CIV":0.166818,"CMR":0.0271,"COD":0,"COG":0.119906,"COK":0,"COL":0.48314,"COM":0,"CPV":0,"CRI":0,"CUB":0.180585,"CUW":0,"CYP":0.000677,"CZE":1.600276,"DEU":2.087841,"DJI":0,"DMA":0,"DNK":1.411373,"DOM":0.200568,"DZA":1.722341,"ECU":0.101137,"EGY":0.968107,"ERI":0,"ESP":1.26808,"EST":0.919692,"ETH":0,"FIN":1.114911,"FJI":0,"FRA":1.441571,"FRO":0,"FSM":0,"GAB":0.369824,"GBR":2.451269,"GEO":0.931963,"GHA":0.02183,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":4.538981,"GRC":0.672112,"GRD":0,"GRL":0,"GTM":0,"GUF":0,"GUY":0,"HKG":0.651773,"HND":0,"HRV":1.139934,"HTI":0,"HUN":1.858073,"IDN":0.255663,"IND":0.08573,"IRL":1.975821,"IRN":3.759084,"IRQ":0.368025,"ISL":0.000192,"ISR":1.461573,"ITA":2.283121,"JAM":0,"JOR":0.242844,"JPN":2.008874,"KAZ":1.771746,"KEN":0,"KGZ":0.109544,"KHM":0,"KIR":0,"KNA":0,"KOR":2.226244,"KSV":0,"KWT":9.479228,"LAO":0,"LBN":0,"LBR":0,"LBY":2.21749,"LCA":0,"LIE":1.570773,"LKA":0,"LSO":0,"LTU":1.622888,"LUX":3.894986,"LVA":1.343198,"MAC":0,"MAR":0.069479,"MDA":0.504044,"MDG":0,"MDV":0,"MEX":1.213027,"MHL":0,"MKD":0.141177,"MLI":0,"MLT":0.000026,"MMR":0.082976,"MNE":0,"MNG":0,"MOZ":0.014089,"MRT":0,"MSR":0,"MTQ":0,"MUS":0,"MWI":0,"MYS":2.730194,"MYT":0,"NAM":0,"NCL":0,"NER":0,"NGA":0.163854,"NIC":0,"NIU":0,"NLD":4.561911,"NOR":2.736254,"NPL":0,"NRU":0,"NZL":1.881274,"OMN":11.956758,"PAK":0.310321,"PAN":0,"PER":0.394957,"PHL":0.067584,"PLW":0,"PNG":0.031549,"POL":0.797879,"PRI":0,"PRK":0,"PRT":0.774732,"PRY":0,"PSE":0,"PYF":0,"QAT":33.941412,"REU":0,"ROU":1.252851,"RUS":5.421442,"RWA":0.000332,"SAU":4.866169,"SDN":0,"SEN":0.006201,"SGP":3.344922,"SHN":0,"SLB":0,"SLE":0,"SLV":0,"SOM":0,"SPM":0,"SRB":0.56461,"SSD":0,"STP":0,"SUR":0.012994,"SVK":1.890361,"SVN":0.792591,"SWE":0.245568,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.457273,"TCA":0,"TCD":0,"TGO":0.005672,"THA":1.244948,"TJK":0.000899,"TKM":8.321619,"TLS":0,"TON":0,"TTO":28.506246,"TUN":1.072909,"TUR":1.132106,"TUV":0,"TWN":1.524263,"TZA":0.037925,"UGA":0,"UKR":1.991961,"URY":0.029258,"USA":4.416019,"UZB":2.947416,"VCT":0,"VEN":1.625824,"VGB":0,"VNM":0.207371,"VUT":0,"WLF":0,"WSM":0,"YEM":0.074546,"ZAF":0.174176,"ZMB":0,"ZWE":0},"2014":{"ABW":0,"AFG":0.008291,"AGO":0.021337,"AIA":0,"ALB":0.020313,"AND":0,"ARE":15.09107,"ARG":2.168032,"ARM":1.554625,"ATG":0,"AUS":3.059624,"AUT":1.748963,"AZE":2.176161,"BDI":0,"BEL":2.773948,"BEN":0.005178,"BES":0,"BFA":0,"BGD":0.294523,"BGR":0.758179,"BHR":21.624054,"BHS":0,"BIH":0.097472,"BLR":3.774983,"BLZ":0.010481,"BMU":0,"BOL":0.750455,"BRA":0.399518,"BRB":0.145243,"BRN":16.250989,"BTN":0,"BWA":0,"CAF":0,"CAN":5.96424,"CHE":0.776214,"CHL":0.469024,"CHN":0.267271,"CIV":0.164434,"CMR":0.038119,"COD":0.000048,"COG":0.105834,"COK":0,"COL":0.503056,"COM":0,"CPV":0,"CRI":0,"CUB":0.203375,"CUW":0,"CYP":0.000346,"CZE":1.43695,"DEU":1.860166,"DJI":0,"DMA":0,"DNK":1.206313,"DOM":0.194922,"DZA":1.904826,"ECU":0.102173,"EGY":0.85467,"ERI":0,"ESP":1.16847,"EST":0.777463,"ETH":0,"FIN":0.987372,"FJI":0,"FRA":1.200982,"FRO":0,"FSM":0,"GAB":0.518235,"GBR":2.23073,"GEO":1.142158,"GHA":0.045351,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":3.960521,"GRC":0.511742,"GRD":0,"GRL":0,"GTM":0,"GUF":0,"GUY":0,"HKG":0.631965,"HND":0,"HRV":1.004925,"HTI":0,"HUN":1.734943,"IDN":0.243593,"IND":0.083739,"IRL":1.902972,"IRN":4.189593,"IRQ":0.343793,"ISL":0.000453,"ISR":1.586121,"ITA":2.015646,"JAM":0,"JOR":0.071519,"JPN":2.028201,"KAZ":2.467375,"KEN":0,"KGZ":0.088852,"KHM":0,"KIR":0,"KNA":0,"KOR":2.006512,"KSV":0,"KWT":9.113284,"LAO":0,"LBN":0,"LBR":0,"LBY":1.821255,"LCA":0,"LIE":1.295542,"LKA":0,"LSO":0,"LTU":1.547598,"LUX":3.607585,"LVA":1.217465,"MAC":0.188001,"MAR":0.065576,"MDA":0.52463,"MDG":0,"MDV":0,"MEX":1.166282,"MHL":0,"MKD":0.120086,"MLI":0,"MLT":0.000052,"MMR":0.094555,"MNE":0,"MNG":0,"MOZ":0.050938,"MRT":0,"MSR":0,"MTQ":0,"MUS":0,"MWI":0,"MYS":2.69754,"MYT":0,"NAM":0,"NCL":0,"NER":0,"NGA":0.182159,"NIC":0,"NIU":0,"NLD":3.952509,"NOR":2.850374,"NPL":0,"NRU":0,"NZL":1.905475,"OMN":11.215169,"PAK":0.308284,"PAN":0,"PER":0.54464,"PHL":0.069935,"PLW":0,"PNG":0.068829,"POL":0.763664,"PRI":0,"PRK":0,"PRT":0.734278,"PRY":0,"PSE":0,"PYF":0,"QAT":37.256081,"REU":0,"ROU":1.203724,"RUS":5.355741,"RWA":0.000647,"SAU":6.974237,"SDN":0,"SEN":0.005245,"SGP":3.449243,"SHN":0,"SLB":0,"SLE":0,"SLV":0,"SOM":0,"SPM":0,"SRB":0.488115,"SSD":0,"STP":0,"SUR":0.012863,"SVK":1.565721,"SVN":0.717259,"SWE":0.211552,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.452647,"TCA":0,"TCD":0,"TGO":0.010054,"THA":1.237693,"TJK":0.000879,"TKM":8.289877,"TLS":0,"TON":0,"TTO":28.470199,"TUN":1.054921,"TUR":1.197468,"TUV":0,"TWN":1.604857,"TZA":0.03425,"UGA":0,"UKR":1.664173,"URY":0.027007,"USA":4.456114,"UZB":2.772585,"VCT":0,"VEN":1.544957,"VGB":0,"VNM":0.214815,"VUT":0,"WLF":0,"WSM":0,"YEM":0.066802,"ZAF":0.165226,"ZMB":0,"ZWE":0},"2015":{"ABW":0,"AFG":0.008358,"AGO":0.051193,"AIA":0,"ALB":0.021609,"AND":0,"ARE":15.045039,"ARG":2.162296,"ARM":1.537825,"ATG":0,"AUS":3.024496,"AUT":1.847531,"AZE":2.223846,"BDI":0,"BEL":3.006733,"BEN":0.005366,"BES":0,"BFA":0,"BGD":0.308827,"BGR":0.811547,"BHR":20.730914,"BHS":0,"BIH":0.115399,"BLR":3.500465,"BLZ":0.010181,"BMU":0,"BOL":0.742376,"BRA":0.392151,"BRB":0.144935,"BRN":11.606575,"BTN":0,"BWA":0.001588,"CAF":0,"CAN":5.974916,"CHE":0.818663,"CHL":0.509922,"CHN":0.27269,"CIV":0.163505,"CMR":0.040938,"COD":0.000047,"COG":0.193894,"COK":0,"COL":0.490253,"COM":0,"CPV":0,"CRI":0,"CUB":0.210692,"CUW":1.620551,"CYP":0.000335,"CZE":1.511689,"DEU":1.918475,"DJI":0,"DMA":0,"DNK":1.217242,"DOM":0.194687,"DZA":1.991967,"ECU":0.094782,"EGY":0.861112,"ERI":0,"ESP":1.220071,"EST":0.696031,"ETH":0,"FIN":0.862026,"FJI":0,"FRA":1.275527,"FRO":0,"FSM":0,"GAB":0.502136,"GBR":2.267548,"GEO":1.259652,"GHA":0.084522,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":3.44918,"GRC":0.55843,"GRD":0,"GRL":0,"GTM":0,"GUF":0,"GUY":0,"HKG":0.821871,"HND":0,"HRV":1.048455,"HTI":0,"HUN":1.851823,"IDN":0.363781,"IND":0.080787,"IRL":1.90499,"IRN":4.361967,"IRQ":0.343916,"ISL":0.000549,"ISR":1.721422,"ITA":2.204049,"JAM":0,"JOR":0.421808,"JPN":1.936557,"KAZ":2.951801,"KEN":0,"KGZ":0.088581,"KHM":0,"KIR":0,"KNA":0,"KOR":1.815668,"KSV":0,"KWT":9.994803,"LAO":0,"LBN":0,"LBR":0,"LBY":2.530579,"LCA":0,"LIE":1.373455,"LKA":0,"LSO":0,"LTU":1.568528,"LUX":3.213259,"LVA":1.258041,"MAC":0.005955,"MAR":0.066982,"MDA":0.512752,"MDG":0,"MDV":0,"MEX":1.231602,"MHL":0,"MKD":0.109448,"MLI":0,"MLT":0.000051,"MMR":0.210728,"MNE":0,"MNG":0,"MOZ":0.064873,"MRT":0,"MSR":0,"MTQ":0,"MUS":0,"MWI":0,"MYS":2.485175,"MYT":0,"NAM":0,"NCL":0,"NER":0,"NGA":0.176354,"NIC":0,"NIU":0,"NLD":3.881676,"NOR":2.987464,"NPL":0,"NRU":0,"NZL":1.809144,"OMN":11.510282,"PAK":0.305285,"PAN":0,"PER":0.528947,"PHL":0.064652,"PLW":0,"PNG":0.093318,"POL":0.794592,"PRI":0,"PRK":0,"PRT":0.878956,"PRY":0,"PSE":0,"PYF":0,"QAT":34.664804,"REU":0,"ROU":1.178925,"RUS":5.092322,"RWA":0.004106,"SAU":7.023501,"SDN":0,"SEN":0.003318,"SGP":3.460785,"SHN":0,"SLB":0,"SLE":0,"SLV":0,"SOM":0,"SPM":0,"SRB":0.532583,"SSD":0,"STP":0,"SUR":0.012734,"SVK":1.606419,"SVN":0.758545,"SWE":0.200511,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.415141,"TCA":0,"TCD":0,"TGO":0.009784,"THA":1.228971,"TJK":0.00086,"TKM":8.473082,"TLS":0,"TON":0,"TTO":27.163008,"TUN":1.001136,"TUR":1.210825,"TUV":0,"TWN":1.73661,"TZA":0.031868,"UGA":0,"UKR":1.45717,"URY":0.027996,"USA":4.547004,"UZB":2.647719,"VCT":0,"VEN":1.520971,"VGB":0,"VNM":0.221963,"VUT":0,"WLF":0,"WSM":0,"YEM":0.066428,"ZAF":0.178359,"ZMB":0,"ZWE":0},"2016":{"ABW":0,"AFG":0.0092,"AGO":0.051275,"AIA":0,"ALB":0.055957,"AND":0,"ARE":14.9998,"ARG":2.205327,"ARM":1.479008,"ATG":0,"AUS":3.101987,"AUT":1.915753,"AZE":2.155889,"BDI":0,"BEL":3.037532,"BEN":0.000325,"BES":0,"BFA":0,"BGD":0.335135,"BGR":0.819599,"BHR":19.275715,"BHS":0,"BIH":0.121046,"BLR":3.490374,"BLZ":0.010034,"BMU":0,"BOL":0.812436,"BRA":0.336778,"BRB":0.144641,"BRN":12.537382,"BTN":0,"BWA":0,"CAF":0,"CAN":5.766957,"CHE":0.851211,"CHL":0.550293,"CHN":0.300827,"CIV":0.197224,"CMR":0.042629,"COD":0,"COG":0.216866,"COK":0,"COL":0.460751,"COM":0,"CPV":0,"CRI":0,"CUB":0.200612,"CUW":1.609474,"CYP":0.000329,"CZE":1.615633,"DEU":2.058363,"DJI":0,"DMA":0,"DNK":1.229201,"DOM":0.181676,"DZA":1.950381,"ECU":0.10074,"EGY":0.950296,"ERI":0,"ESP":1.241625,"EST":0.799239,"ETH":0,"FIN":0.765597,"FJI":0,"FRA":1.391367,"FRO":0,"FSM":0,"GAB":0.490007,"GBR":2.524431,"GEO":1.183405,"GHA":0.048226,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":3.901174,"GRC":0.73603,"GRD":0,"GRL":0,"GTM":0,"GUF":0,"GUY":0,"HKG":0.838648,"HND":0,"HRV":1.119647,"HTI":0,"HUN":1.973012,"IDN":0.348237,"IND":0.084879,"IRL":2.101546,"IRN":4.569937,"IRQ":0.369165,"ISL":0.000239,"ISR":1.922821,"ITA":2.341903,"JAM":0.006537,"JOR":0.700573,"JPN":1.981166,"KAZ":3.026858,"KEN":0,"KGZ":0.090713,"KHM":0,"KIR":0,"KNA":0,"KOR":1.883756,"KSV":0,"KWT":10.275284,"LAO":0,"LBN":0,"LBR":0,"LBY":3.20466,"LCA":0,"LIE":1.355382,"LKA":0,"LSO":0,"LTU":1.414109,"LUX":2.882922,"LVA":1.321116,"MAC":0.029233,"MAR":0.067316,"MDA":0.535496,"MDG":0,"MDV":0,"MEX":1.246347,"MHL":0,"MKD":0.171897,"MLI":0,"MLT":0.000025,"MMR":0.15569,"MNE":0,"MNG":0,"MOZ":0.05543,"MRT":0,"MSR":0,"MTQ":0,"MUS":0,"MWI":0,"MYS":2.332187,"MYT":0,"NAM":0,"NCL":0,"NER":0,"NGA":0.182514,"NIC":0,"NIU":0,"NLD":4.026284,"NOR":2.891576,"NPL":0,"NRU":0,"NZL":1.691021,"OMN":10.971207,"PAK":0.329218,"PAN":0,"PER":0.548865,"PHL":0.072773,"PLW":0,"PNG":0.096343,"POL":0.841366,"PRI":0,"PRK":0,"PRT":0.950375,"PRY":0,"PSE":0,"PYF":0,"QAT":31.131419,"REU":0,"ROU":1.180244,"RUS":5.167064,"RWA":0.007063,"SAU":7.237878,"SDN":0,"SEN":0.002981,"SGP":3.50945,"SHN":0,"SLB":0,"SLE":0,"SLV":0,"SOM":0,"SPM":0,"SRB":0.577475,"SSD":0,"STP":0,"SUR":0.012623,"SVK":1.629342,"SVN":0.80567,"SWE":0.227682,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.366704,"TCA":0,"TCD":0,"TGO":0.00191,"THA":1.197324,"TJK":0.000839,"TKM":8.325625,"TLS":0,"TON":0,"TTO":23.959024,"TUN":1.021221,"TUR":1.133703,"TUV":0,"TWN":1.791095,"TZA":0.02923,"UGA":0,"UKR":1.430815,"URY":0.031143,"USA":4.528322,"UZB":2.765779,"VCT":0,"VEN":1.586029,"VGB":0,"VNM":0.218715,"VUT":0,"WLF":0,"WSM":0,"YEM":0.033669,"ZAF":0.138514,"ZMB":0,"ZWE":0},"2017":{"ABW":0,"AFG":0.008429,"AGO":0.052027,"AIA":0,"ALB":0.058495,"AND":0,"ARE":14.986416,"ARG":2.189145,"ARM":1.564582,"ATG":0,"AUS":3.099259,"AUT":2.043153,"AZE":2.074367,"BDI":0,"BEL":3.077016,"BEN":0.006322,"BES":0,"BFA":0,"BGD":0.331684,"BGR":0.840747,"BHR":19.212413,"BHS":0,"BIH":0.133138,"BLR":3.569172,"BLZ":0.009779,"BMU":0,"BOL":0.806584,"BRA":0.339022,"BRB":0.157486,"BRN":15.855795,"BTN":0,"BWA":0,"CAF":0,"CAN":5.870196,"CHE":0.838451,"CHL":0.541341,"CHN":0.344868,"CIV":0.173556,"CMR":0.045963,"COD":0,"COG":0.222778,"COK":0,"COL":0.464672,"COM":0,"CPV":0,"CRI":0,"CUB":0.178087,"CUW":0.811088,"CYP":0.000346,"CZE":1.681995,"DEU":2.074596,"DJI":0,"DMA":0,"DNK":1.16473,"DOM":0.205819,"DZA":2.00192,"ECU":0.092157,"EGY":1.065011,"ERI":0,"ESP":1.343378,"EST":0.700239,"ETH":0,"FIN":0.705554,"FJI":0,"FRA":1.389643,"FRO":0,"FSM":0,"GAB":0.422545,"GBR":2.447557,"GEO":1.246298,"GHA":0.078075,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":4.238104,"GRC":0.89187,"GRD":0,"GRL":0,"GTM":0,"GUF":0,"GUY":0,"HKG":0.833317,"HND":0,"HRV":1.295695,"HTI":0,"HUN":2.092773,"IDN":0.318862,"IND":0.087817,"IRL":2.127395,"IRN":4.727577,"IRQ":0.485221,"ISL":0.000139,"ISR":2.00867,"ITA":2.479136,"JAM":0.071757,"JOR":0.786215,"JPN":1.939742,"KAZ":3.426252,"KEN":0,"KGZ":0.094574,"KHM":0,"KIR":0,"KNA":0,"KOR":1.958015,"KSV":0,"KWT":10.255886,"LAO":0,"LBN":0,"LBR":0,"LBY":2.845831,"LCA":0,"LIE":1.411515,"LKA":0,"LSO":0,"LTU":1.473099,"LUX":2.778724,"LVA":1.176229,"MAC":0.526846,"MAR":0.066003,"MDA":0.5426,"MDG":0,"MDV":0,"MEX":1.16617,"MHL":0,"MKD":0.220328,"MLI":0,"MLT":1.15192,"MMR":0.161869,"MNE":0,"MNG":0,"MOZ":0.05643,"MRT":0,"MSR":0,"MTQ":0,"MUS":0,"MWI":0,"MYS":2.202502,"MYT":0,"NAM":0,"NCL":0,"NER":0,"NGA":0.167525,"NIC":0,"NIU":0,"NLD":4.110491,"NOR":2.937815,"NPL":0,"NRU":0,"NZL":1.794636,"OMN":10.853038,"PAK":0.343343,"PAN":0,"PER":0.457425,"PHL":0.070542,"PLW":0,"PNG":0.102506,"POL":0.885733,"PRI":0,"PRK":0,"PRT":1.193814,"PRY":0,"PSE":0,"PYF":0,"QAT":32.11306,"REU":0,"ROU":1.238251,"RUS":5.34357,"RWA":0.00689,"SAU":7.241969,"SDN":0,"SEN":0.002417,"SGP":3.496523,"SHN":0,"SLB":0,"SLE":0,"SLV":0,"SOM":0,"SPM":0,"SRB":0.648932,"SSD":0,"STP":0,"SUR":0.012472,"SVK":1.72625,"SVN":0.835533,"SWE":0.180611,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.36151,"TCA":0,"TCD":0,"TGO":0,"THA":1.162417,"TJK":0.000411,"TKM":8.185952,"TLS":0,"TON":0,"TTO":23.382817,"TUN":1.053026,"TUR":1.277743,"TUV":0,"TWN":1.962717,"TZA":0.026373,"UGA":0,"UKR":1.492592,"URY":0.035332,"USA":4.428231,"UZB":2.687962,"VCT":0,"VEN":1.564779,"VGB":0,"VNM":0.190114,"VUT":0,"WLF":0,"WSM":0,"YEM":0.019641,"ZAF":0.129569,"ZMB":0,"ZWE":0},"2018":{"ABW":0,"AFG":0.00799,"AGO":0.051426,"AIA":0,"ALB":0.052215,"AND":0,"ARE":14.613066,"ARG":2.164272,"ARM":1.64951,"ATG":0,"AUS":3.180032,"AUT":1.92517,"AZE":2.096442,"BDI":0,"BEL":3.153067,"BEN":0.003069,"BES":0,"BFA":0,"BGD":0.326112,"BGR":0.812233,"BHR":19.099192,"BHS":0,"BIH":0.133645,"BLR":3.790441,"BLZ":0.00959,"BMU":0,"BOL":0.8056,"BRA":0.320779,"BRB":0.197071,"BRN":16.179891,"BTN":0,"BWA":0,"CAF":0,"CAN":6.263775,"CHE":0.785151,"CHL":0.533711,"CHN":0.406027,"CIV":0.154116,"CMR":0.05818,"COD":0,"COG":0.246887,"COK":0,"COL":0.47582,"COM":0,"CPV":0,"CRI":0,"CUB":0.16428,"CUW":0.555898,"CYP":0.000183,"CZE":1.579714,"DEU":2.045299,"DJI":0,"DMA":0,"DNK":1.123461,"DOM":0.202846,"DZA":2.120033,"ECU":0.079888,"EGY":0.989951,"ERI":0,"ESP":1.32293,"EST":0.746268,"ETH":0,"FIN":0.799873,"FJI":0,"FRA":1.318802,"FRO":0,"FSM":0,"GAB":0.401166,"GBR":2.430799,"GEO":1.24033,"GHA":0.109455,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":2.866138,"GRC":0.853147,"GRD":0,"GRL":0,"GTM":0,"GUF":0,"GUY":0,"HKG":0.810026,"HND":0,"HRV":1.211972,"HTI":0,"HUN":2.030007,"IDN":0.315082,"IND":0.092185,"IRL":2.192292,"IRN":4.778185,"IRQ":0.751112,"ISL":0.00009,"ISR":2.114086,"ITA":2.39943,"JAM":0.066456,"JOR":0.752075,"JPN":1.853009,"KAZ":3.699082,"KEN":0,"KGZ":0.103029,"KHM":0,"KIR":0,"KNA":0,"KOR":2.267409,"KSV":0,"KWT":9.836817,"LAO":0,"LBN":0,"LBR":0,"LBY":2.70708,"LCA":0,"LIE":1.300629,"LKA":0,"LSO":0,"LTU":1.373054,"LUX":2.646612,"LVA":1.396823,"MAC":0.274978,"MAR":0.058848,"MDA":0.597093,"MDG":0,"MDV":0,"MEX":1.337801,"MHL":0,"MKD":0.20294,"MLI":0,"MLT":1.384791,"MMR":0.154115,"MNE":0,"MNG":0,"MOZ":0.054944,"MRT":0,"MSR":0,"MTQ":0,"MUS":0,"MWI":0,"MYS":2.600707,"MYT":0,"NAM":0,"NCL":0,"NER":0,"NGA":0.17309,"NIC":0,"NIU":0,"NLD":4.04123,"NOR":2.879533,"NPL":0,"NRU":0,"NZL":1.632466,"OMN":11.468149,"PAK":0.344887,"PAN":0.120472,"PER":0.464233,"PHL":0.077418,"PLW":0,"PNG":0.082869,"POL":0.889982,"PRI":0,"PRK":0,"PRT":1.100676,"PRY":0,"PSE":0,"PYF":0,"QAT":31.497296,"REU":0,"ROU":1.296068,"RUS":5.667024,"RWA":0.007602,"SAU":7.345341,"SDN":0,"SEN":0.001412,"SGP":3.539871,"SHN":0,"SLB":0,"SLE":0,"SLV":0,"SOM":0,"SPM":0,"SRB":0.65652,"SSD":0,"STP":0,"SUR":0.018514,"SVK":1.718268,"SVN":0.816933,"SWE":0.186342,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.353068,"TCA":0,"TCD":0,"TGO":0.010928,"THA":1.142572,"TJK":0.012037,"TKM":8.055879,"TLS":0,"TON":0,"TTO":23.775558,"TUN":1.054398,"TUR":1.153031,"TUV":0,"TWN":2.047654,"TZA":0.024528,"UGA":0,"UKR":1.507232,"URY":0.033143,"USA":4.873608,"UZB":2.768868,"VCT":0,"VEN":1.398248,"VGB":0,"VNM":0.195487,"VUT":0,"WLF":0,"WSM":0,"YEM":0.006426,"ZAF":0.159046,"ZMB":0,"ZWE":0},"2019":{"ABW":0,"AFG":0.006502,"AGO":0.075084,"AIA":0,"ALB":0.045897,"AND":0,"ARE":14.453508,"ARG":2.136715,"ARM":1.732884,"ATG":0,"AUS":3.22172,"AUT":2.003686,"AZE":2.357292,"BDI":0,"BEL":3.144868,"BEN":0.008645,"BES":0,"BFA":0,"BGD":0.352671,"BGR":0.743668,"BHR":22.172503,"BHS":0,"BIH":0.127559,"BLR":3.786235,"BLZ":0,"BMU":0,"BOL":0.752878,"BRA":0.316935,"BRB":0.170005,"BRN":13.63394,"BTN":0,"BWA":0,"CAF":0,"CAN":6.181943,"CHE":0.802149,"CHL":0.632967,"CHN":0.443201,"CIV":0.162829,"CMR":0.051445,"COD":0,"COG":0.338432,"COK":0,"COL":0.472357,"COM":0,"CPV":0,"CRI":0,"CUB":0.161263,"CUW":0,"CYP":0.000184,"CZE":1.647717,"DEU":2.074357,"DJI":0,"DMA":0,"DNK":1.038093,"DOM":0.22694,"DZA":2.136732,"ECU":0.069933,"EGY":1.141086,"ERI":0,"ESP":1.511792,"EST":0.689046,"ETH":0,"FIN":0.780621,"FJI":0,"FRA":1.340943,"FRO":0,"FSM":0,"GAB":0.40973,"GBR":2.385805,"GEO":1.406013,"GHA":0.130209,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":1.922795,"GRC":0.945541,"GRD":0,"GRL":0,"GTM":0,"GUF":0,"GUY":0,"HKG":0.838757,"HND":0,"HRV":1.269931,"HTI":0,"HUN":2.043535,"IDN":0.326098,"IND":0.093034,"IRL":2.213208,"IRN":4.886201,"IRQ":0.824242,"ISL":0.00063,"ISR":2.08741,"ITA":2.457116,"JAM":0.168059,"JOR":0.734603,"JPN":1.782551,"KAZ":2.689467,"KEN":0,"KGZ":0.097921,"KHM":0,"KIR":0,"KNA":0,"KOR":2.192626,"KSV":0,"KWT":10.417538,"LAO":0,"LBN":0,"LBR":0,"LBY":2.415675,"LCA":0,"LIE":1.307004,"LKA":0,"LSO":0,"LTU":1.43243,"LUX":2.593754,"LVA":1.329665,"MAC":0.386467,"MAR":0.055206,"MDA":0.557726,"MDG":0,"MDV":0,"MEX":1.255934,"MHL":0,"MKD":0.23743,"MLI":0,"MLT":1.40611,"MMR":0.150456,"MNE":0,"MNG":0,"MOZ":0.057103,"MRT":0,"MSR":0,"MTQ":0,"MUS":0,"MWI":0,"MYS":2.752243,"MYT":0,"NAM":0,"NCL":0,"NER":0,"NGA":0.172671,"NIC":0,"NIU":0,"NLD":4.173986,"NOR":2.813428,"NPL":0,"NRU":0,"NZL":1.661642,"OMN":11.464159,"PAK":0.335776,"PAN":0.367912,"PER":0.477634,"PHL":0.076677,"PLW":0,"PNG":0.085241,"POL":0.921992,"PRI":0,"PRK":0,"PRT":1.18154,"PRY":0,"PSE":0,"PYF":0,"QAT":31.144656,"REU":0,"ROU":1.18613,"RUS":5.515648,"RWA":0.007151,"SAU":7.143536,"SDN":0,"SEN":0.001831,"SGP":3.560692,"SHN":0,"SLB":0,"SLE":0,"SLV":0,"SOM":0,"SPM":0,"SRB":0.616355,"SSD":0,"STP":0,"SUR":0.018336,"SVK":1.717967,"SVN":0.829677,"SWE":0.173119,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.325778,"TCA":0,"TCD":0,"TGO":0.023114,"THA":1.175913,"TJK":0.029824,"TKM":8.199113,"TLS":0,"TON":0,"TTO":23.95893,"TUN":1.042225,"TUR":0.995918,"TUV":0,"TWN":1.974532,"TZA":0.031271,"UGA":0,"UKR":1.3693,"URY":0.048119,"USA":5.007181,"UZB":2.80161,"VCT":0,"VEN":1.189986,"VGB":0,"VNM":0.197401,"VUT":0,"WLF":0,"WSM":0,"YEM":0.00627,"ZAF":0.156748,"ZMB":0,"ZWE":0},"2020":{"ABW":0,"AFG":0.006447,"AGO":0.075982,"AIA":0,"ALB":0.045757,"AND":0,"ARE":14.060411,"ARG":2.003119,"ARM":1.838826,"ATG":0,"AUS":3.290666,"AUT":1.894629,"AZE":2.460449,"BDI":0,"BEL":3.101308,"BEN":0.008995,"BES":0,"BFA":0,"BGD":0.337185,"BGR":0.768244,"BHR":22.389554,"BHS":0,"BIH":0.128474,"BLR":3.491142,"BLZ":0,"BMU":0,"BOL":0.610233,"BRA":0.276863,"BRB":0.157655,"BRN":13.837468,"BTN":0,"BWA":0,"CAF":0,"CAN":5.904646,"CHE":0.769703,"CHL":0.597774,"CHN":0.482747,"CIV":0.169955,"CMR":0.052351,"COD":0,"COG":0.346005,"COK":0,"COL":0.474573,"COM":0,"CPV":0,"CRI":0,"CUB":0.15001,"CUW":0,"CYP":0.000178,"CZE":1.655196,"DEU":2.011642,"DJI":0,"DMA":0,"DNK":0.822584,"DOM":0.208582,"DZA":2.032334,"ECU":0.058576,"EGY":1.107604,"ERI":0,"ESP":1.358016,"EST":0.608951,"ETH":0,"FIN":0.788731,"FJI":0,"FRA":1.241329,"FRO":0,"FSM":0,"GAB":0.419437,"GBR":2.228173,"GEO":1.400091,"GHA":0.136483,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":1.956264,"GRC":1.050424,"GRD":0,"GRL":0,"GTM":0,"GUF":0,"GUY":0,"HKG":1.329956,"HND":0,"HRV":1.347157,"HTI":0,"HUN":2.142995,"IDN":0.275735,"IND":0.091404,"IRL":2.214222,"IRN":5.198539,"IRQ":0.763479,"ISL":0.000547,"ISR":2.152067,"ITA":2.366376,"JAM":0.155693,"JOR":0.718054,"JPN":1.777359,"KAZ":1.697027,"KEN":0,"KGZ":0.101726,"KHM":0,"KIR":0,"KNA":0,"KOR":2.249691,"KSV":0,"KWT":10.095835,"LAO":0,"LBN":0,"LBR":0,"LBY":2.296229,"LCA":0,"LIE":1.251954,"LKA":0,"LSO":0,"LTU":1.50416,"LUX":2.330852,"LVA":1.108575,"MAC":0.388142,"MAR":0.042621,"MDA":0.592979,"MDG":0,"MDV":0,"MEX":1.186719,"MHL":0,"MKD":0.271563,"MLI":0,"MLT":1.42864,"MMR":0.152879,"MNE":0,"MNG":0,"MOZ":0.053235,"MRT":0,"MSR":0,"MTQ":0,"MUS":0,"MWI":0,"MYS":2.304511,"MYT":0,"NAM":0,"NCL":0,"NER":0,"NGA":0.180351,"NIC":0,"NIU":0,"NLD":4.053271,"NOR":2.661232,"NPL":0,"NRU":0,"NZL":1.550426,"OMN":12.041041,"PAK":0.305565,"PAN":0.268954,"PER":0.408776,"PHL":0.068764,"PLW":0,"PNG":0.085386,"POL":0.956695,"PRI":0,"PRK":0,"PRT":1.164543,"PRY":0,"PSE":0,"PYF":0,"QAT":29.435718,"REU":0,"ROU":1.291942,"RUS":5.361872,"RWA":0.006687,"SAU":7.231387,"SDN":0,"SEN":0.001909,"SGP":3.54847,"SHN":0,"SLB":0,"SLE":0,"SLV":0,"SOM":0,"SPM":0,"SRB":0.616548,"SSD":0,"STP":0,"SUR":0.014874,"SVK":1.702124,"SVN":0.826265,"SWE":0.139503,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.314726,"TCA":0,"TCD":0,"TGO":0.024154,"THA":1.07902,"TJK":0.030799,"TKM":7.589088,"TLS":0,"TON":0,"TTO":20.846939,"TUN":0.994089,"TUR":1.096054,"TUV":0,"TWN":2.108571,"TZA":0.029121,"UGA":0,"UKR":1.384079,"URY":0.039498,"USA":4.92251,"UZB":2.691333,"VCT":0,"VEN":1.020079,"VGB":0,"VNM":0.175673,"VUT":0,"WLF":0,"WSM":0,"YEM":0.006119,"ZAF":0.144281,"ZMB":0,"ZWE":0},"2021":{"ABW":0,"AFG":0.005956,"AGO":0.085536,"AIA":0,"ALB":0.052631,"AND":0,"ARE":13.90118,"ARG":2.083353,"ARM":1.956629,"ATG":0,"AUS":2.979896,"AUT":1.999475,"AZE":2.523936,"BDI":0,"BEL":3.08121,"BEN":0.009465,"BES":0,"BFA":0,"BGD":0.346862,"BGR":0.880323,"BHR":23.642933,"BHS":0,"BIH":0.149283,"BLR":3.76403,"BLZ":0,"BMU":0,"BOL":0.705627,"BRA":0.35448,"BRB":0.205075,"BRN":13.046933,"BTN":0,"BWA":0,"CAF":0,"CAN":6.169093,"CHE":0.831828,"CHL":0.595372,"CHN":0.542724,"CIV":0.17939,"CMR":0.059246,"COD":0,"COG":0.392831,"COK":0,"COL":0.451441,"COM":0,"CPV":0,"CRI":0,"CUB":0.196253,"CUW":0,"CYP":0.000177,"CZE":1.777341,"DEU":2.079931,"DJI":0,"DMA":0,"DNK":0.816214,"DOM":0.26892,"DZA":2.100412,"ECU":0.057668,"EGY":1.156058,"ERI":0,"ESP":1.413211,"EST":0.688327,"ETH":0,"FIN":0.770695,"FJI":0,"FRA":1.326183,"FRO":0,"FSM":0,"GAB":0.477242,"GBR":2.3612,"GEO":1.606986,"GHA":0.144707,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":2.219633,"GRC":1.163427,"GRD":0,"GRL":0,"GTM":0,"GUF":0,"GUY":0,"HKG":1.299107,"HND":0,"HRV":1.308067,"HTI":0,"HUN":2.277324,"IDN":0.270637,"IND":0.09481,"IRL":2.105999,"IRN":5.311369,"IRQ":0.690132,"ISL":0.000541,"ISR":2.185248,"ITA":2.548195,"JAM":0.202368,"JOR":0.736172,"JPN":1.777711,"KAZ":1.457571,"KEN":0,"KGZ":0.105982,"KHM":0,"KIR":0,"KNA":0,"KOR":2.446255,"KSV":0,"KWT":11.721402,"LAO":0,"LBN":0,"LBR":0,"LBY":2.567193,"LCA":0,"LIE":1.423536,"LKA":0,"LSO":0,"LTU":1.436983,"LUX":2.457908,"LVA":1.21184,"MAC":0.363442,"MAR":0.042446,"MDA":0.632462,"MDG":0,"MDV":0,"MEX":1.24346,"MHL":0,"MKD":0.343675,"MLI":0,"MLT":1.600917,"MMR":0.144323,"MNE":0,"MNG":0,"MOZ":0.059981,"MRT":0,"MSR":0,"MTQ":0,"MUS":0,"MWI":0,"MYS":2.44245,"MYT":0,"NAM":0,"NCL":0,"NER":0,"NGA":0.190456,"NIC":0,"NIU":0,"NLD":3.890066,"NOR":2.345509,"NPL":0,"NRU":0,"NZL":1.297904,"OMN":13.787812,"PAK":0.326313,"PAN":0.209475,"PER":0.4544,"PHL":0.057877,"PLW":0,"PNG":0.079542,"POL":1.059067,"PRI":0,"PRK":0,"PRT":1.132036,"PRY":0,"PSE":0,"PYF":0,"QAT":31.072901,"REU":0,"ROU":1.319795,"RUS":6.030566,"RWA":0.00757,"SAU":7.512159,"SDN":0,"SEN":0.002011,"SGP":3.740957,"SHN":0,"SLB":0,"SLE":0,"SLV":0,"SOM":0,"SPM":0,"SRB":0.712093,"SSD":0,"STP":0,"SUR":0.017238,"SVK":1.908065,"SVN":0.869544,"SWE":0.141789,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.320633,"TCA":0,"TCD":0,"TGO":0.025517,"THA":1.080827,"TJK":0.031909,"TKM":9.265475,"TLS":0,"TON":0,"TTO":21.305957,"TUN":1.115694,"TUR":1.349392,"TUV":0,"TWN":2.308715,"TZA":0.032757,"UGA":0,"UKR":1.242234,"URY":0.046259,"USA":4.857715,"UZB":2.822092,"VCT":0,"VEN":1.146074,"VGB":0,"VNM":0.140346,"VUT":0,"WLF":0,"WSM":0,"YEM":0.006264,"ZAF":0.138634,"ZMB":0,"ZWE":0}},"Coal":{"2008":{"ABW":0,"AFG":0.040797,"AGO":0,"AIA":0,"ALB":0.034757,"AND":0,"ARE":0.197132,"ARG":0.096254,"ARM":0.002456,"ATG":0,"AUS":9.632563,"AUT":2.046396,"AZE":0.001628,"BDI":0.00177,"BEL":2.168327,"BEN":0,"BES":0,"BFA":0,"BGD":0.016982,"BGR":4.233574,"BHR":0,"BHS":0.010099,"BIH":3.696156,"BLR":0.268468,"BLZ":0,"BMU":0,"BOL":0,"BRA":0.287096,"BRB":0,"BRN":0,"BTN":0.166161,"BWA":0.972895,"CAF":0,"CAN":3.39064,"CHE":0.089142,"CHL":1.004323,"CHN":4.307334,"CIV":0,"CMR":0,"COD":0,"COG":0,"COK":0,"COL":0.24577,"COM":0,"CPV":0,"CRI":0.000814,"CUB":0.008123,"CUW":0,"CYP":0.101282,"CZE":7.578909,"DEU":4.386012,"DJI":0,"DMA":0,"DNK":2.931938,"DOM":0.221619,"DZA":0.08702,"ECU":0,"EGY":0.034042,"ERI":0,"ESP":1.290812,"EST":9.215975,"ETH":0.000478,"FIN":4.455487,"FJI":0,"FRA":0.90996,"FRO":0,"FSM":0,"GAB":0,"GBR":2.254847,"GEO":0.117106,"GHA":0,"GIN":0,"GLP":1.240666,"GMB":0,"GNB":0,"GNQ":0,"GRC":3.908863,"GRD":0,"GRL":0,"GTM":0.084658,"GUF":0,"GUY":0,"HKG":3.682356,"HND":0.038441,"HRV":0.648416,"HTI":0,"HUN":1.303313,"IDN":0.512088,"IND":0.754761,"IRL":2.166002,"IRN":0.079908,"IRQ":0,"ISL":2.011909,"ISR":4.181871,"ITA":1.150522,"JAM":0.047297,"JOR":0,"JPN":3.328378,"KAZ":7.493338,"KEN":0.010472,"KGZ":0.597314,"KHM":0,"KIR":0,"KNA":0,"KOR":5.228273,"KSV":3.057786,"KWT":0,"LAO":0.048369,"LBN":0.102702,"LBR":0,"LBY":0,"LCA":0,"LIE":0.000294,"LKA":0.010837,"LSO":0.84299,"LTU":0.269001,"LUX":0.727825,"LVA":0.204751,"MAC":0,"MAR":0.446375,"MDA":0.085535,"MDG":0.001608,"MDV":0,"MEX":0.37183,"MHL":0,"MKD":2.845175,"MLI":0,"MLT":0.000048,"MMR":0.013309,"MNE":2.393944,"MNG":3.544823,"MOZ":0.001176,"MRT":0,"MSR":0,"MTQ":0,"MUS":1.20919,"MWI":0.010852,"MYS":1.374937,"MYT":0,"NAM":0.106188,"NCL":2.530368,"NER":0.017543,"NGA":0.000553,"NIC":0,"NIU":0,"NLD":1.945198,"NOR":0.685183,"NPL":0.027775,"NRU":0,"NZL":1.944602,"OMN":0,"PAK":0.101703,"PAN":0,"PER":0.117655,"PHL":0.278952,"PLW":0,"PNG":0,"POL":5.723146,"PRI":0,"PRK":2.664327,"PRT":0.930845,"PRY":0,"PSE":0,"PYF":0,"QAT":0,"REU":2.355141,"ROU":1.92087,"RUS":3.144315,"RWA":0,"SAU":0,"SDN":0,"SEN":0.050302,"SGP":0.006815,"SHN":0,"SLB":0,"SLE":0,"SLV":0.000603,"SOM":0,"SPM":0,"SRB":4.595423,"SSD":0,"STP":0,"SUR":0,"SVK":3.16994,"SVN":3.283999,"SWE":1.123299,"SWZ":0.379891,"SXM":0,"SYC":0,"SYR":0.000512,"TCA":0,"TCD":0,"TGO":0,"THA":0.836217,"TJK":0.046521,"TKM":0,"TLS":0,"TON":0,"TTO":0,"TUN":0,"TUR":1.722757,"TUV":0,"TWN":6.751195,"TZA":0.00094,"UGA":0,"UKR":3.357147,"URY":0.001098,"USA":6.988945,"UZB":0.177605,"VCT":0,"VEN":0.018363,"VGB":0,"VNM":0.509852,"VUT":0,"WLF":0,"WSM":0,"YEM":0.005497,"ZAF":8.272326,"ZMB":0.024516,"ZWE":0.474476},"2009":{"ABW":0,"AFG":0.055289,"AGO":0,"AIA":0,"ALB":0.13253,"AND":0,"ARE":0.130189,"ARG":0.079432,"ARM":0,"ATG":0,"AUS":9.512553,"AUT":1.538168,"AZE":0.001607,"BDI":0.001683,"BEL":1.403749,"BEN":0,"BES":0,"BFA":0,"BGD":0.020554,"BGR":3.572952,"BHR":0,"BHS":0.009955,"BIH":3.950534,"BLR":0.27436,"BLZ":0,"BMU":0,"BOL":0,"BRA":0.224073,"BRB":0,"BRN":0,"BTN":0.084027,"BWA":0.769653,"CAF":0,"CAN":2.779637,"CHE":0.082267,"CHL":0.797904,"CHN":4.501818,"CIV":0,"CMR":0,"COD":0,"COG":0,"COK":0,"COL":0.266321,"COM":0,"CPV":0,"CRI":0.002409,"CUB":0.007794,"CUW":0,"CYP":0.052962,"CZE":7.03214,"DEU":3.912161,"DJI":0,"DMA":0,"DNK":2.856168,"DOM":0.213768,"DZA":0.045285,"ECU":0,"EGY":0.031454,"ERI":0,"ESP":0.972246,"EST":7.508124,"ETH":0.001268,"FIN":4.288167,"FJI":0,"FRA":0.727705,"FRO":0,"FSM":0,"GAB":0,"GBR":1.828679,"GEO":0.132185,"GHA":0,"GIN":0,"GLP":1.205792,"GMB":0,"GNB":0,"GNQ":0,"GRC":3.82099,"GRD":0,"GRL":0,"GTM":0.05396,"GUF":0,"GUY":0,"HKG":3.821726,"HND":0.032329,"HRV":0.46303,"HTI":0,"HUN":1.117948,"IDN":0.532299,"IND":0.804116,"IRL":1.912248,"IRN":0.059109,"IRQ":0,"ISL":1.950341,"ISR":3.762371,"ITA":0.879538,"JAM":0.049797,"JOR":0,"JPN":3.210124,"KAZ":7.972506,"KEN":0.009077,"KGZ":0.508242,"KHM":0.002072,"KIR":0,"KNA":0,"KOR":5.400396,"KSV":3.483669,"KWT":0,"LAO":0.056537,"LBN":0.101366,"LBR":0,"LBY":0,"LCA":0,"LIE":0.000146,"LKA":0.010912,"LSO":0.85164,"LTU":0.216617,"LUX":0.681625,"LVA":0.170445,"MAC":0.006747,"MAR":0.410962,"MDA":0.092834,"MDG":0.001735,"MDV":0,"MEX":0.367524,"MHL":0,"MKD":2.525813,"MLI":0,"MLT":0.000077,"MMR":0.012409,"MNE":1.294511,"MNG":3.991401,"MOZ":0.001143,"MRT":0,"MSR":0,"MTQ":0,"MUS":1.102176,"MWI":0.00977,"MYS":1.651171,"MYT":0,"NAM":0.049611,"NCL":2.819596,"NER":0.017363,"NGA":0.000585,"NIC":0,"NIU":0,"NLD":1.778692,"NOR":0.48712,"NPL":0.026029,"NRU":0,"NZL":1.467962,"OMN":0,"PAK":0.097361,"PAN":0,"PER":0.10533,"PHL":0.265338,"PLW":0,"PNG":0,"POL":5.422695,"PRI":0,"PRK":1.974384,"PRT":1.014995,"PRY":0,"PSE":0,"PYF":0,"QAT":0,"REU":2.178187,"ROU":1.543633,"RUS":2.912594,"RWA":0,"SAU":0,"SDN":0,"SEN":0.060691,"SGP":0.005849,"SHN":0,"SLB":0,"SLE":0,"SLV":0.000601,"SOM":0,"SPM":0,"SRB":4.093387,"SSD":0,"STP":0,"SUR":0,"SVK":2.973971,"SVN":3.002166,"SWE":0.794507,"SWZ":0.348033,"SXM":0,"SYC":0,"SYR":0.000504,"TCA":0,"TCD":0,"TGO":0,"THA":0.781226,"TJK":0.041209,"TKM":0,"TLS":0,"TON":0,"TTO":0,"TUN":0,"TUR":1.804847,"TUV":0,"TWN":6.373145,"TZA":0,"UGA":0,"UKR":2.978612,"URY":0.001096,"USA":6.07,"UZB":0.188359,"VCT":0,"VEN":0.030395,"VGB":0,"VNM":0.525983,"VUT":0,"WLF":0,"WSM":0,"YEM":0.009911,"ZAF":7.634709,"ZMB":0.030538,"ZWE":0.499907},"2010":{"ABW":0,"AFG":0.079676,"AGO":0,"AIA":0,"ALB":0.147144,"AND":0,"ARE":0.292022,"ARG":0.097082,"ARM":0.001244,"ATG":0,"AUS":9.107349,"AUT":1.853564,"AZE":0.00238,"BDI":0.002007,"BEL":1.611167,"BEN":0,"BES":0,"BFA":0,"BGD":0.020715,"BGR":3.859021,"BHR":0,"BHS":0.009835,"BIH":4.164086,"BLR":0.298062,"BLZ":0,"BMU":0,"BOL":0,"BRA":0.288705,"BRB":0,"BRN":0,"BTN":0.109061,"BWA":0.951949,"CAF":0,"CAN":2.819713,"CHE":0.08295,"CHL":0.971849,"CHN":4.872301,"CIV":0,"CMR":0,"COD":0,"COG":0,"COK":0,"COL":0.300618,"COM":0,"CPV":0,"CRI":0.000793,"CUB":0.006816,"CUW":0,"CYP":0.062678,"CZE":7.124183,"DEU":4.222116,"DJI":0,"DMA":0,"DNK":2.765524,"DOM":0.18931,"DZA":0.033927,"ECU":0,"EGY":0.047283,"ERI":0,"ESP":0.78055,"EST":10.709782,"ETH":0.001478,"FIN":5.433374,"FJI":0,"FRA":0.786063,"FRO":0,"FSM":0,"GAB":0,"GBR":1.880661,"GEO":0.208058,"GHA":0,"GIN":0,"GLP":1.138006,"GMB":0,"GNB":0,"GNQ":0,"GRC":3.739412,"GRD":0,"GRL":0,"GTM":0.088431,"GUF":0,"GUY":0,"HKG":3.307261,"HND":0.032951,"HRV":0.626779,"HTI":0,"HUN":1.168744,"IDN":0.625642,"IND":0.818936,"IRL":1.862466,"IRN":0.072284,"IRQ":0,"ISL":1.966861,"ISR":3.830267,"ITA":0.973181,"JAM":0.041547,"JOR":0,"JPN":3.481327,"KAZ":8.43968,"KEN":0.015091,"KGZ":0.489088,"KHM":0.006637,"KIR":0,"KNA":0,"KOR":6.044498,"KSV":3.689421,"KWT":0,"LAO":0.100821,"LBN":0.112946,"LBR":0,"LBY":0,"LCA":0,"LIE":0.000145,"LKA":0.010991,"LSO":0.865848,"LTU":0.268508,"LUX":0.643878,"LVA":0.216672,"MAC":0,"MAR":0.407313,"MDA":0.088657,"MDG":0.00488,"MDV":0,"MEX":0.453684,"MHL":0,"MKD":2.494289,"MLI":0,"MLT":0.000077,"MMR":0.024926,"MNE":2.572169,"MNG":4.136459,"MOZ":0.001112,"MRT":0,"MSR":0,"MTQ":0,"MUS":1.224826,"MWI":0.011451,"MYS":1.926942,"MYT":0,"NAM":0.015708,"NCL":4.620341,"NER":0.019808,"NGA":0.000637,"NIC":0,"NIU":0,"NLD":1.830734,"NOR":0.630381,"NPL":0.040604,"NRU":0,"NZL":1.255793,"OMN":0,"PAK":0.089615,"PAN":0,"PER":0.112943,"PHL":0.29831,"PLW":0,"PNG":0,"POL":5.723895,"PRI":0,"PRK":1.827975,"PRT":0.608167,"PRY":0,"PSE":0,"PYF":0,"QAT":0,"REU":2.314323,"ROU":1.402864,"RUS":2.909306,"RWA":0,"SAU":0,"SDN":0,"SEN":0.053804,"SGP":0.009935,"SHN":0,"SLB":0,"SLE":0,"SLV":0.000599,"SOM":0,"SPM":0,"SRB":4.026666,"SSD":0,"STP":0,"SUR":0,"SVK":2.974201,"SVN":3.054299,"SWE":1.102393,"SWZ":0.335214,"SXM":0,"SYC":0,"SYR":0.000492,"TCA":0,"TCD":0,"TGO":0,"THA":0.82238,"TJK":0.044292,"TKM":0,"TLS":0,"TON":0,"TTO":0,"TUN":0.005044,"TUR":1.770822,"TUV":0,"TWN":6.820548,"TZA":0,"UGA":0,"UKR":3.183263,"URY":0.001093,"USA":6.372406,"UZB":0.180029,"VCT":0,"VEN":0.026285,"VGB":0,"VNM":0.542992,"VUT":0,"WLF":0,"WSM":0,"YEM":0.018213,"ZAF":7.61683,"ZMB":0.027629,"ZWE":0.506805},"2011":{"ABW":0,"AFG":0.142931,"AGO":0,"AIA":0,"ALB":0.184422,"AND":0,"ARE":0.195263,"ARG":0.11375,"ARM":0.002502,"ATG":0,"AUS":8.593472,"AUT":1.885235,"AZE":0.001958,"BDI":0.001162,"BEL":1.523308,"BEN":0,"BES":0,"BFA":0,"BGD":0.01888,"BGR":4.571808,"BHR":0,"BHS":0.009711,"BIH":4.938333,"BLR":0.306491,"BLZ":0,"BMU":0,"BOL":0.000352,"BRA":0.314314,"BRB":0,"BRN":0,"BTN":0.133548,"BWA":0.670213,"CAF":0,"CAN":2.526624,"CHE":0.076883,"CHL":1.213968,"CHN":5.386346,"CIV":0,"CMR":0,"COD":0,"COG":0,"COK":0,"COL":0.304237,"COM":0,"CPV":0,"CRI":0.00548,"CUB":0.000973,"CUW":0,"CYP":0.026701,"CZE":7.025634,"DEU":4.233402,"DJI":0,"DMA":0,"DNK":2.316163,"DOM":0.253837,"DZA":0.028675,"ECU":0,"EGY":0.019059,"ERI":0,"ESP":1.160202,"EST":10.683403,"ETH":0.004908,"FIN":4.468882,"FJI":0,"FRA":0.668573,"FRO":0,"FSM":0,"GAB":0,"GBR":1.851105,"GEO":0.281871,"GHA":0,"GIN":0,"GLP":1.136541,"GMB":0,"GNB":0,"GNQ":0,"GRC":3.823777,"GRD":0,"GRL":0,"GTM":0.086947,"GUF":0,"GUY":0,"HKG":3.910962,"HND":0.038669,"HRV":0.642141,"HTI":0,"HUN":1.201091,"IDN":0.733635,"IND":0.866562,"IRL":1.828794,"IRN":0.069591,"IRQ":0,"ISL":2.002825,"ISR":3.887605,"ITA":1.090179,"JAM":0.077385,"JOR":0,"JPN":3.362903,"KAZ":8.158347,"KEN":0.023805,"KGZ":0.516044,"KHM":0.007542,"KIR":0,"KNA":0,"KOR":6.511488,"KSV":3.561497,"KWT":0,"LAO":0.117064,"LBN":0.12419,"LBR":0,"LBY":0,"LCA":0,"LIE":0.000144,"LKA":0.054276,"LSO":1.233514,"LTU":0.313847,"LUX":0.607642,"LVA":0.213011,"MAC":0,"MAR":0.348431,"MDA":0.092743,"MDG":0.018171,"MDV":0,"MEX":0.490942,"MHL":0,"MKD":2.774515,"MLI":0,"MLT":0.000101,"MMR":0.033406,"MNE":2.654372,"MNG":6.633806,"MOZ":0.005243,"MRT":0,"MSR":0,"MTQ":0,"MUS":1.170784,"MWI":0.016156,"MYS":1.903209,"MYT":0,"NAM":0.032648,"NCL":4.361528,"NER":0.021412,"NGA":0.000509,"NIC":0,"NIU":0,"NLD":1.77361,"NOR":0.649755,"NPL":0.040851,"NRU":0,"NZL":1.263159,"OMN":0,"PAK":0.086433,"PAN":0.170786,"PER":0.10615,"PHL":0.321962,"PLW":0,"PNG":0,"POL":5.654433,"PRI":0,"PRK":1.255002,"PRT":0.81843,"PRY":0.000627,"PSE":0,"PYF":0,"QAT":0,"REU":2.29498,"ROU":1.646153,"RUS":2.984267,"RWA":0,"SAU":0,"SDN":0,"SEN":0.073166,"SGP":0.006244,"SHN":0,"SLB":0,"SLE":0,"SLV":0.000597,"SOM":0,"SPM":0,"SRB":4.497715,"SSD":0,"STP":0,"SUR":0,"SVK":3.01764,"SVN":3.063022,"SWE":1.003081,"SWZ":0.339336,"SXM":0,"SYC":0,"SYR":0.000484,"TCA":0,"TCD":0,"TGO":0,"THA":0.915402,"TJK":0.047537,"TKM":0,"TLS":0,"TON":0,"TTO":0,"TUN":0.003985,"TUR":1.823312,"TUV":0,"TWN":6.963275,"TZA":0.004655,"UGA":0,"UKR":3.380196,"URY":0.00109,"USA":5.967157,"UZB":0.186368,"VCT":0,"VEN":0.026697,"VGB":0,"VNM":0.674,"VUT":0,"WLF":0,"WSM":0,"YEM":0.018122,"ZAF":7.430308,"ZMB":0.018729,"ZWE":0.515883},"2012":{"ABW":0,"AFG":0.102585,"AGO":0,"AIA":0,"ALB":0.216633,"AND":0,"ARE":0.605524,"ARG":0.11939,"ARM":0.002514,"ATG":0,"AUS":8.321354,"AUT":1.742326,"AZE":0.001545,"BDI":0.002964,"BEL":1.366868,"BEN":0,"BES":0,"BFA":0,"BGD":0.022501,"BGR":3.928378,"BHR":0,"BHS":0.00959,"BIH":4.689943,"BLR":0.516235,"BLZ":0,"BMU":0,"BOL":0,"BRA":0.305116,"BRB":0,"BRN":0,"BTN":0.192177,"BWA":1.069511,"CAF":0,"CAN":2.347695,"CHE":0.06981,"CHL":1.353744,"CHN":5.462477,"CIV":0,"CMR":0,"COD":0,"COG":0,"COK":0,"COL":0.252085,"COM":0,"CPV":0,"CRI":0.002321,"CUB":0.001296,"CUW":0,"CYP":0.001039,"CZE":6.73089,"DEU":4.289666,"DJI":0,"DMA":0,"DNK":1.799363,"DOM":0.197977,"DZA":0.027828,"ECU":0,"EGY":0.019758,"ERI":0,"ESP":1.352827,"EST":9.527781,"ETH":0.006287,"FIN":3.618951,"FJI":0,"FRA":0.739918,"FRO":0,"FSM":0,"GAB":0,"GBR":2.319518,"GEO":0.31012,"GHA":0,"GIN":0,"GLP":1.126297,"GMB":0,"GNB":0,"GNQ":0,"GRC":3.945494,"GRD":0,"GRL":0,"GTM":0.100027,"GUF":0,"GUY":0,"HKG":3.818956,"HND":0.043339,"HRV":0.573409,"HTI":0,"HUN":1.154564,"IDN":0.748019,"IND":0.976554,"IRL":2.107895,"IRN":0.053403,"IRQ":0,"ISL":2.053011,"ISR":4.290644,"ITA":1.112458,"JAM":0.070364,"JOR":0,"JPN":3.519754,"KAZ":8.69243,"KEN":0.020781,"KGZ":0.713029,"KHM":0.010407,"KIR":0,"KNA":0,"KOR":6.386523,"KSV":3.337976,"KWT":0,"LAO":0.120467,"LBN":0.120993,"LBR":0,"LBY":0,"LCA":0,"LIE":0,"LKA":0.09133,"LSO":1.216151,"LTU":0.310256,"LUX":0.538234,"LVA":0.194856,"MAC":0,"MAR":0.343657,"MDA":0.118052,"MDG":0.030353,"MDV":0,"MEX":0.425227,"MHL":0,"MKD":2.631755,"MLI":0,"MLT":0.000026,"MMR":0.033938,"MNE":2.378804,"MNG":11.243872,"MOZ":0.001646,"MRT":0,"MSR":0,"MTQ":0,"MUS":1.231052,"MWI":0.013919,"MYS":2.018521,"MYT":0,"NAM":0.126923,"NCL":4.618777,"NER":0.021428,"NGA":0.000754,"NIC":0,"NIU":0,"NLD":1.899114,"NOR":0.635817,"NPL":0.030432,"NRU":0,"NZL":1.553774,"OMN":0,"PAK":0.07268,"PAN":0.228338,"PER":0.097421,"PHL":0.330959,"PLW":0,"PNG":0,"POL":5.54136,"PRI":0,"PRK":1.309972,"PRT":1.059646,"PRY":0.000619,"PSE":0,"PYF":0,"QAT":0,"REU":2.259513,"ROU":1.523554,"RUS":3.082585,"RWA":0,"SAU":0,"SDN":0,"SEN":0.06175,"SGP":0.020426,"SHN":0,"SLB":0,"SLE":0,"SLV":0.000595,"SOM":0,"SPM":0,"SRB":3.966938,"SSD":0,"STP":0,"SUR":0,"SVK":2.69536,"SVN":2.895682,"SWE":0.906962,"SWZ":0.468119,"SXM":0,"SYC":0,"SYR":0.000162,"TCA":0,"TCD":0,"TGO":0,"THA":0.915351,"TJK":0.088307,"TKM":0,"TLS":0,"TON":0,"TTO":0,"TUN":0,"TUR":1.881186,"TUV":0,"TWN":6.832796,"TZA":0.004372,"UGA":0,"UKR":3.501313,"URY":0.002175,"USA":5.237633,"UZB":0.185416,"VCT":0,"VEN":0.027104,"VGB":0,"VNM":0.585723,"VUT":0,"WLF":0,"WSM":0,"YEM":0.018028,"ZAF":7.391492,"ZMB":0.023607,"ZWE":0.527282},"2013":{"ABW":0,"AFG":0.105478,"AGO":0,"AIA":0,"ALB":0.275402,"AND":0,"ARE":0.767812,"ARG":0.114184,"ARM":0.001263,"ATG":0,"AUS":7.630177,"AUT":1.76428,"AZE":0.001143,"BDI":0.002166,"BEL":1.380822,"BEN":0,"BES":0,"BFA":0,"BGD":0.024333,"BGR":3.364438,"BHR":0,"BHS":0.009501,"BIH":4.722862,"BLR":0.499208,"BLZ":0,"BMU":0,"BOL":0.000341,"BRA":0.325221,"BRB":0,"BRN":0,"BTN":0.265298,"BWA":1.250925,"CAF":0,"CAN":2.25219,"CHE":0.072302,"CHL":1.450395,"CHN":5.445427,"CIV":0,"CMR":0,"COD":0,"COG":0,"COK":0,"COL":0.385038,"COM":0,"CPV":0,"CRI":0.004588,"CUB":0.003236,"CUW":0,"CYP":0.00103,"CZE":6.357729,"DEU":4.369332,"DJI":0,"DMA":0,"DNK":2.267377,"DOM":0.240249,"DZA":0.019091,"ECU":0,"EGY":0.018207,"ERI":0,"ESP":1.055512,"EST":11.025999,"ETH":0.00796,"FIN":3.926935,"FJI":0,"FRA":0.78024,"FRO":0,"FSM":0,"GAB":0,"GBR":2.21542,"GEO":0.318396,"GHA":0,"GIN":0,"GLP":1.108028,"GMB":0,"GNB":0,"GNQ":0,"GRC":3.41662,"GRD":0,"GRL":0,"GTM":0.167964,"GUF":0,"GUY":0,"HKG":4.035668,"HND":0.041299,"HRV":0.621508,"HTI":0,"HUN":1.027423,"IDN":0.648381,"IND":1.022358,"IRL":1.904307,"IRN":0.05249,"IRQ":0,"ISL":2.03998,"ISR":3.457602,"ITA":0.958041,"JAM":0.084597,"JOR":0.108089,"JPN":3.768955,"KAZ":8.471365,"KEN":0.022419,"KGZ":0.625234,"KHM":0.014901,"KIR":0,"KNA":0,"KOR":6.400299,"KSV":3.402898,"KWT":0,"LAO":0.172078,"LBN":0.088393,"LBR":0,"LBY":0,"LCA":0,"LIE":0,"LKA":0.095537,"LSO":0.839176,"LTU":0.360448,"LUX":0.508548,"LVA":0.148233,"MAC":0,"MAR":0.331677,"MDA":0.161937,"MDG":0.047842,"MDV":0,"MEX":0.426095,"MHL":0,"MKD":2.168197,"MLI":0,"MLT":0.000026,"MMR":0.022571,"MNE":2.290628,"MNG":13.985445,"MOZ":0.001452,"MRT":0,"MSR":0,"MTQ":0,"MUS":1.294488,"MWI":0.013719,"MYS":1.924328,"MYT":0,"NAM":0.048199,"NCL":4.454163,"NER":0.018268,"NGA":0.000671,"NIC":0,"NIU":0,"NLD":1.923454,"NOR":0.648104,"NPL":0.038003,"NRU":0,"NZL":1.351047,"OMN":0,"PAK":0.066522,"PAN":0.236817,"PER":0.112217,"PHL":0.401459,"PLW":0,"PNG":0,"POL":5.551129,"PRI":0,"PRK":0.87021,"PRT":0.975285,"PRY":0,"PSE":0,"PYF":0,"QAT":0,"REU":2.207735,"ROU":1.229027,"RUS":2.815167,"RWA":0,"SAU":0,"SDN":0,"SEN":0.059857,"SGP":0.207344,"SHN":0,"SLB":0,"SLE":0,"SLV":0.000592,"SOM":0,"SPM":0,"SRB":4.134827,"SSD":0,"STP":0,"SUR":0,"SVK":2.636519,"SVN":2.770064,"SWE":0.906141,"SWZ":0.604541,"SXM":0,"SYC":0,"SYR":0.00017,"TCA":0,"TCD":0,"TGO":0,"THA":0.951734,"TJK":0.107487,"TKM":0,"TLS":0,"TON":0,"TTO":0,"TUN":0,"TUR":1.637868,"TUV":0,"TWN":6.891168,"TZA":0.004611,"UGA":0,"UKR":3.535542,"URY":0.003251,"USA":5.386357,"UZB":0.267424,"VCT":0,"VEN":0.026647,"VGB":0,"VNM":0.626374,"VUT":0,"WLF":0,"WSM":0,"YEM":0.018331,"ZAF":7.288606,"ZMB":0.030062,"ZWE":0.524107},"2014":{"ABW":0,"AFG":0.113271,"AGO":0,"AIA":0,"ALB":0.356753,"AND":0,"ARE":0.846755,"ARG":0.129283,"ARM":0.001267,"ATG":0,"AUS":7.163756,"AUT":1.615015,"AZE":0.000752,"BDI":0.001396,"BEL":1.323778,"BEN":0.017604,"BES":0,"BFA":0,"BGD":0.022484,"BGR":3.605919,"BHR":0,"BHS":0.00943,"BIH":4.07434,"BLR":0.478068,"BLZ":0,"BMU":0,"BOL":0.001342,"BRA":0.3393,"BRB":0,"BRN":0,"BTN":0.343333,"BWA":1.700397,"CAF":0,"CAN":2.165979,"CHE":0.073697,"CHL":1.378899,"CHN":5.360325,"CIV":0,"CMR":0,"COD":0,"COG":0,"COK":0,"COL":0.386668,"COM":0,"CPV":0,"CRI":0.005294,"CUB":0.000323,"CUW":0,"CYP":0.007772,"CZE":6.168917,"DEU":4.212742,"DJI":0,"DMA":0,"DNK":1.795068,"DOM":0.310735,"DZA":0.014085,"ECU":0,"EGY":0.015638,"ERI":0,"ESP":1.165235,"EST":10.704943,"ETH":0.010763,"FIN":3.538443,"FJI":0,"FRA":0.617584,"FRO":0,"FSM":0,"GAB":0,"GBR":1.782111,"GEO":0.310527,"GHA":0,"GIN":0,"GLP":1.107466,"GMB":0,"GNB":0,"GNQ":0,"GRC":3.242867,"GRD":0,"GRL":0,"GTM":0.178143,"GUF":0,"GUY":0,"HKG":4.19649,"HND":0.042951,"HRV":0.599826,"HTI":0,"HUN":1.032132,"IDN":0.677456,"IND":1.107178,"IRL":1.870833,"IRN":0.044906,"IRQ":0,"ISL":1.908062,"ISR":3.217906,"ITA":0.925639,"JAM":0.098688,"JOR":0.151926,"JPN":3.709964,"KAZ":10.814832,"KEN":0.027188,"KGZ":0.774464,"KHM":0.081702,"KIR":0,"KNA":0,"KOR":6.552941,"KSV":3.011068,"KWT":0,"LAO":0.177814,"LBN":0.099858,"LBR":0,"LBY":0,"LCA":0,"LIE":0,"LKA":0.182687,"LSO":0.905839,"LTU":0.308029,"LUX":0.498722,"LVA":0.12055,"MAC":0,"MAR":0.44673,"MDA":0.109755,"MDG":0.042063,"MDV":0,"MEX":0.412137,"MHL":0,"MKD":2.050164,"MLI":0,"MLT":0.000052,"MMR":0.02267,"MNE":2.235506,"MNG":8.961759,"MOZ":0.031661,"MRT":0,"MSR":0,"MTQ":0,"MUS":1.342936,"MWI":0.01223,"MYS":1.89066,"MYT":0,"NAM":0.031006,"NCL":6.367681,"NER":0.020049,"NGA":0.000674,"NIC":0,"NIU":0,"NLD":2.111408,"NOR":0.686464,"NPL":0.066844,"NRU":0,"NZL":1.205543,"OMN":0,"PAK":0.090486,"PAN":0.24026,"PER":0.10043,"PHL":0.421707,"PLW":0,"PNG":0,"POL":5.261469,"PRI":0,"PRK":1.010391,"PRT":0.992278,"PRY":0,"PSE":0,"PYF":0,"QAT":0,"REU":2.179403,"ROU":1.221706,"RUS":2.731364,"RWA":0,"SAU":0,"SDN":0,"SEN":0.078681,"SGP":0.30125,"SHN":0,"SLB":0,"SLE":0,"SLV":0.00059,"SOM":0,"SPM":0,"SRB":3.264299,"SSD":0,"STP":0,"SUR":0,"SVK":2.598648,"SVN":2.171352,"SWE":0.832607,"SWZ":0.048816,"SXM":0,"SYC":0,"SYR":0.000183,"TCA":0,"TCD":0,"TGO":0,"THA":0.869994,"TJK":0.177636,"TKM":0,"TLS":0,"TON":0,"TTO":0,"TUN":0,"TUR":1.66818,"TUV":0,"TWN":6.907241,"TZA":0.012835,"UGA":0,"UKR":3.064865,"URY":0.00108,"USA":5.311143,"UZB":0.244045,"VCT":0,"VEN":0.024756,"VGB":0,"VNM":0.855725,"VUT":0,"WLF":0,"WSM":0,"YEM":0.017823,"ZAF":7.294118,"ZMB":0.030732,"ZWE":0.55806},"2015":{"ABW":0,"AFG":0.084236,"AGO":0,"AIA":0,"ALB":0.111859,"AND":0,"ARE":0.729344,"ARG":0.126377,"ARM":0.001272,"ATG":0,"AUS":7.312634,"AUT":1.663073,"AZE":0.001115,"BDI":0.000683,"BEL":1.283578,"BEN":0.010061,"BES":0,"BFA":0,"BGD":0.054532,"BGR":3.787013,"BHR":0,"BHS":0.00933,"BIH":3.827925,"BLR":0.422047,"BLZ":0,"BMU":0,"BOL":0.001322,"BRA":0.338478,"BRB":0,"BRN":0,"BTN":0.285913,"BWA":1.256422,"CAF":0,"CAN":2.185675,"CHE":0.067924,"CHL":1.520334,"CHN":5.214105,"CIV":0,"CMR":0,"COD":0,"COG":0,"COK":0,"COL":0.406293,"COM":0,"CPV":0,"CRI":0.000748,"CUB":0.001939,"CUW":0,"CYP":0.01237,"CZE":6.109557,"DEU":4.15505,"DJI":0,"DMA":0,"DNK":1.275575,"DOM":0.277772,"DZA":0.012694,"ECU":0,"EGY":0.01376,"ERI":0,"ESP":1.331878,"EST":8.567277,"ETH":0.010655,"FIN":3.073394,"FJI":0,"FRA":0.591458,"FRO":0,"FSM":0,"GAB":0,"GBR":1.403586,"GEO":0.294502,"GHA":0,"GIN":0,"GLP":1.129587,"GMB":0,"GNB":0,"GNQ":0,"GRC":2.771338,"GRD":0,"GRL":0,"GTM":0.250738,"GUF":0,"GUY":0,"HKG":3.42859,"HND":0.03628,"HRV":0.558491,"HTI":0,"HUN":1.068342,"IDN":0.763494,"IND":1.124423,"IRL":2.004247,"IRN":0.052592,"IRQ":0,"ISL":1.997163,"ISR":3.133062,"ITA":0.880962,"JAM":0.09576,"JOR":0.071781,"JPN":3.660722,"KAZ":10.27341,"KEN":0.028226,"KGZ":0.733422,"KHM":0.143066,"KIR":0,"KNA":0,"KOR":6.577414,"KSV":3.497117,"KWT":0,"LAO":0.758691,"LBN":0.097914,"LBR":0,"LBY":0,"LCA":0,"LIE":0,"LKA":0.244533,"LSO":0.769631,"LTU":0.248295,"LUX":0.506174,"LVA":0.0955,"MAC":0,"MAR":0.485674,"MDA":0.112828,"MDG":0.042315,"MDV":0,"MEX":0.36716,"MHL":0,"MKD":1.777222,"MLI":0,"MLT":0.000051,"MMR":0.018005,"MNE":2.358032,"MNG":6.643769,"MOZ":0.015979,"MRT":0,"MSR":0,"MTQ":0,"MUS":1.303357,"MWI":0.013411,"MYS":2.134564,"MYT":0,"NAM":0.00321,"NCL":6.635926,"NER":0.016201,"NGA":0.000677,"NIC":0,"NIU":0,"NLD":2.555336,"NOR":0.660533,"NPL":0.079713,"NRU":0,"NZL":1.191489,"OMN":0,"PAK":0.085448,"PAN":0.237038,"PER":0.100564,"PHL":0.450535,"PLW":0,"PNG":0,"POL":5.230377,"PRI":0,"PRK":0.755454,"PRT":1.213164,"PRY":0.001778,"PSE":0,"PYF":0,"QAT":0,"REU":2.194701,"ROU":1.239914,"RUS":2.862128,"RWA":0,"SAU":0,"SDN":0,"SEN":0.080139,"SGP":0.30996,"SHN":0,"SLB":0,"SLE":0,"SLV":0.000588,"SOM":0,"SPM":0,"SRB":4.065266,"SSD":0,"STP":0,"SUR":0,"SVK":2.565869,"SVN":2.217993,"SWE":0.827682,"SWZ":0.119555,"SXM":0,"SYC":0,"SYR":0.000191,"TCA":0,"TCD":0,"TGO":0,"THA":0.919253,"TJK":0.206324,"TKM":0,"TLS":0,"TON":0,"TTO":0,"TUN":0,"TUR":1.742634,"TUV":0,"TWN":6.776057,"TZA":0.01297,"UGA":0,"UKR":2.654205,"URY":0.001077,"USA":4.556271,"UZB":0.193562,"VCT":0,"VEN":0.016322,"VGB":0,"VNM":1.061011,"VUT":0,"WLF":0,"WSM":0,"YEM":0.014519,"ZAF":6.74748,"ZMB":0.030443,"ZWE":0.569469},"2016":{"ABW":0,"AFG":0.083113,"AGO":0,"AIA":0,"ALB":0.066131,"AND":0,"ARE":0.776041,"ARG":0.09599,"ARM":0.001279,"ATG":0,"AUS":7.420722,"AUT":1.526339,"AZE":0.000367,"BDI":0.003696,"BEL":1.196756,"BEN":0.018873,"BES":0,"BFA":0,"BGD":0.038019,"BGR":3.333782,"BHR":0,"BHS":0.00927,"BIH":4.639752,"BLR":0.380261,"BLZ":0,"BMU":0,"BOL":0.001301,"BRA":0.308573,"BRB":0,"BRN":0,"BTN":0.416692,"BWA":1.517733,"CAF":0,"CAN":2.035169,"CHE":0.063115,"CHL":1.493449,"CHN":5.044194,"CIV":0,"CMR":0,"COD":0,"COG":0,"COK":0,"COL":0.407809,"COM":0,"CPV":0,"CRI":0.000741,"CUB":0.000646,"CUW":0,"CYP":0.001629,"CZE":6.146589,"DEU":4.00145,"DJI":0,"DMA":0,"DNK":1.474205,"DOM":0.272862,"DZA":0,"ECU":0,"EGY":0.01612,"ERI":0,"ESP":0.982871,"EST":9.691006,"ETH":0.013293,"FIN":3.395367,"FJI":0,"FRA":0.559378,"FRO":0,"FSM":0,"GAB":0,"GBR":0.728421,"GEO":0.27399,"GHA":0,"GIN":0,"GLP":1.158929,"GMB":0,"GNB":0,"GNQ":0,"GRC":2.194799,"GRD":0,"GRL":0,"GTM":0.289395,"GUF":0,"GUY":0,"HKG":3.412244,"HND":0.015885,"HRV":0.606386,"HTI":0,"HUN":0.99533,"IDN":0.787962,"IND":1.142947,"IRL":1.952011,"IRN":0.041431,"IRQ":0,"ISL":1.966454,"ISR":2.553284,"ITA":0.807719,"JAM":0.091512,"JOR":0.085687,"JPN":3.595065,"KAZ":10.124257,"KEN":0.027234,"KGZ":0.578369,"KHM":0.195575,"KIR":0,"KNA":0,"KOR":6.250194,"KSV":3.807411,"KWT":0,"LAO":1.743379,"LBN":0.100109,"LBR":0,"LBY":0,"LCA":0,"LIE":0,"LKA":0.257844,"LSO":0.729767,"LTU":0.255246,"LUX":0.504489,"LVA":0.08394,"MAC":0,"MAR":0.462445,"MDA":0.086407,"MDG":0.040229,"MDV":0,"MEX":0.39188,"MHL":0,"MKD":1.628679,"MLI":0,"MLT":0.000025,"MMR":0.021677,"MNE":1.868845,"MNG":7.437924,"MOZ":0.001852,"MRT":0,"MSR":0,"MTQ":0,"MUS":1.325247,"MWI":0.011788,"MYS":2.253506,"MYT":0,"NAM":0.029964,"NCL":8.548318,"NER":0.017163,"NGA":0.000738,"NIC":0,"NIU":0,"NLD":2.339789,"NOR":0.677846,"NPL":0.093863,"NRU":0,"NZL":0.956505,"OMN":0,"PAK":0.112187,"PAN":0.206572,"PER":0.103206,"PHL":0.490931,"PLW":0,"PNG":0,"POL":5.24495,"PRI":0,"PRK":0.8536,"PRT":1.048283,"PRY":0.000585,"PSE":0,"PYF":0,"QAT":0,"REU":2.23473,"ROU":1.110761,"RUS":2.771655,"RWA":0.000614,"SAU":0,"SDN":0,"SEN":0.081718,"SGP":0.320732,"SHN":0,"SLB":0,"SLE":0,"SLV":0.000586,"SOM":0,"SPM":0,"SRB":4.145985,"SSD":0,"STP":0,"SUR":0,"SVK":2.54613,"SVN":2.375046,"SWE":0.803974,"SWZ":0.215613,"SXM":0,"SYC":0,"SYR":0.000193,"TCA":0,"TCD":0,"TGO":0,"THA":0.837032,"TJK":0.342266,"TKM":0,"TLS":0,"TON":0,"TTO":0,"TUN":0,"TUR":1.87154,"TUV":0,"TWN":6.75931,"TZA":0.01347,"UGA":0,"UKR":2.828863,"URY":0.001074,"USA":4.119057,"UZB":0.225531,"VCT":0,"VEN":0.018236,"VGB":0,"VNM":1.147438,"VUT":0,"WLF":0,"WSM":0,"YEM":0.011014,"ZAF":6.814503,"ZMB":0.050882,"ZWE":0.479653},"2017":{"ABW":0,"AFG":0.096731,"AGO":0,"AIA":0,"ALB":0.095372,"AND":0,"ARE":0.890321,"ARG":0.09714,"ARM":0.001286,"ATG":0,"AUS":7.194136,"AUT":1.593994,"AZE":0.000364,"BDI":0.001971,"BEL":1.168967,"BEN":0.017386,"BES":0,"BFA":0,"BGD":0.044203,"BGR":3.59125,"BHR":0,"BHS":0.009199,"BIH":4.784465,"BLR":0.399908,"BLZ":0,"BMU":0,"BOL":0.002243,"BRA":0.322879,"BRB":0,"BRN":0,"BTN":0.503962,"BWA":1.771102,"CAF":0,"CAN":1.988497,"CHE":0.059897,"CHL":1.51013,"CHN":5.079373,"CIV":0,"CMR":0,"COD":0,"COG":0,"COK":0,"COL":0.30373,"COM":0,"CPV":0,"CRI":0.003669,"CUB":0.001293,"CUW":0,"CYP":0.009676,"CZE":6.104261,"DEU":3.761154,"DJI":0,"DMA":0,"DNK":1.089858,"DOM":0.313891,"DZA":0.019328,"ECU":0,"EGY":0.063929,"ERI":0,"ESP":1.150449,"EST":10.532481,"ETH":0.014257,"FIN":3.102142,"FJI":0,"FRA":0.620315,"FRO":0,"FSM":0,"GAB":0,"GBR":0.592279,"GEO":0.30696,"GHA":0,"GIN":0,"GLP":1.145937,"GMB":0,"GNB":0,"GNQ":0,"GRC":2.43348,"GRD":0,"GRL":0,"GTM":0.235814,"GUF":0,"GUY":0,"HKG":3.18546,"HND":0.00038,"HRV":0.370012,"HTI":0,"HUN":1.026428,"IDN":0.835895,"IND":1.152705,"IRL":1.649198,"IRN":0.055715,"IRQ":0,"ISL":2.017334,"ISR":2.266644,"ITA":0.700615,"JAM":0.076975,"JOR":0.056671,"JPN":3.619716,"KAZ":10.262832,"KEN":0.025082,"KGZ":0.553677,"KHM":0.228209,"KIR":0,"KNA":0,"KOR":6.555194,"KSV":3.235183,"KWT":0,"LAO":2.139492,"LBN":0.102557,"LBR":0,"LBY":0,"LCA":0,"LIE":0,"LKA":0.26611,"LSO":0.855816,"LTU":0.275797,"LUX":0.473888,"LVA":0.085557,"MAC":0,"MAR":0.475015,"MDA":0.126722,"MDG":0.055724,"MDV":0,"MEX":0.395067,"MHL":0,"MKD":1.805995,"MLI":0,"MLT":0.000025,"MMR":0.029711,"MNE":1.900253,"MNG":9.712723,"MOZ":0.000898,"MRT":0,"MSR":0,"MTQ":0,"MUS":1.378166,"MWI":0.011711,"MYS":2.458378,"MYT":0,"NAM":0.03719,"NCL":9.638409,"NER":0.015533,"NGA":0.000701,"NIC":0,"NIU":0,"NLD":2.094014,"NOR":0.690265,"NPL":0.106344,"NRU":0,"NZL":0.983785,"OMN":0,"PAK":0.189384,"PAN":0.056373,"PER":0.088912,"PHL":0.577412,"PLW":0,"PNG":0,"POL":5.283756,"PRI":0,"PRK":1.810422,"PRT":1.203639,"PRY":0.000577,"PSE":0,"PYF":0,"QAT":0,"REU":2.19061,"ROU":1.108657,"RUS":2.645015,"RWA":0.000599,"SAU":0,"SDN":0,"SEN":0.094997,"SGP":0.670575,"SHN":0,"SLB":0,"SLE":0,"SLV":0.000584,"SOM":0,"SPM":0,"SRB":4.155716,"SSD":0,"STP":0,"SUR":0,"SVK":2.626085,"SVN":2.338318,"SWE":0.842477,"SWZ":0.140019,"SXM":0,"SYC":0,"SYR":0.000193,"TCA":0,"TCD":0,"TGO":0,"THA":0.885262,"TJK":0.443759,"TKM":0,"TLS":0,"TON":0,"TTO":0,"TUN":0,"TUR":1.923962,"TUV":0,"TWN":6.871645,"TZA":0.026568,"UGA":0,"UKR":2.521122,"URY":0.001071,"USA":3.9676,"UZB":0.209325,"VCT":0,"VEN":0.01019,"VGB":0,"VNM":1.15089,"VUT":0,"WLF":0,"WSM":0,"YEM":0.010247,"ZAF":6.530899,"ZMB":0.109991,"ZWE":0.400001},"2018":{"ABW":0,"AFG":0.104866,"AGO":0,"AIA":0,"ALB":0.164287,"AND":0,"ARE":0.796701,"ARG":0.098087,"ARM":0.001292,"ATG":0,"AUS":6.780453,"AUT":1.390778,"AZE":0.000361,"BDI":0.001585,"BEL":1.167562,"BEN":0,"BES":0,"BFA":0,"BGD":0.049964,"BGR":3.103544,"BHR":0,"BHS":0.009117,"BIH":4.882366,"BLR":0.408726,"BLZ":0,"BMU":0,"BOL":0.001894,"BRA":0.313279,"BRB":0,"BRN":0,"BTN":0.556209,"BWA":1.886249,"CAF":0,"CAN":1.641559,"CHE":0.056252,"CHL":1.446348,"CHN":5.163049,"CIV":0,"CMR":0,"COD":0,"COG":0,"COK":0,"COL":0.278312,"COM":0,"CPV":0,"CRI":0,"CUB":0.001294,"CUW":0,"CYP":0.044182,"CZE":6.032838,"DEU":3.566771,"DJI":0,"DMA":0,"DNK":1.103162,"DOM":0.30529,"DZA":0.031722,"ECU":0,"EGY":0.125382,"ERI":0,"ESP":1.027229,"EST":9.87993,"ETH":0.010025,"FIN":3.249484,"FJI":0,"FRA":0.543988,"FRO":0,"FSM":0,"GAB":0,"GBR":0.50096,"GEO":0.320524,"GHA":0,"GIN":0,"GLP":1.141491,"GMB":0,"GNB":0,"GNQ":0,"GRC":2.337101,"GRD":0,"GRL":0,"GTM":0.274145,"GUF":0,"GUY":0,"HKG":3.262633,"HND":0,"HRV":0.348175,"HTI":0,"HUN":0.966311,"IDN":0.98186,"IND":1.225417,"IRL":1.314335,"IRN":0.057474,"IRQ":0,"ISL":2.025887,"ISR":2.143984,"ITA":0.658418,"JAM":0.082093,"JOR":0.075663,"JPN":3.500543,"KAZ":10.291659,"KEN":0.036814,"KGZ":0.649377,"KHM":0.239614,"KIR":0,"KNA":0,"KOR":6.586068,"KSV":3.312672,"KWT":0,"LAO":2.169905,"LBN":0.105287,"LBR":0,"LBY":0,"LCA":0,"LIE":0,"LKA":0.256155,"LSO":0.765133,"LTU":0.298627,"LUX":0.439529,"LVA":0.101795,"MAC":0,"MAR":0.543296,"MDA":0.097961,"MDG":0.046267,"MDV":0,"MEX":0.381516,"MHL":0,"MKD":1.611377,"MLI":0,"MLT":0.000024,"MMR":0.061716,"MNE":2.251359,"MNG":12.940998,"MOZ":0.002118,"MRT":0,"MSR":0,"MTQ":0,"MUS":1.309601,"MWI":0.012767,"MYS":2.597201,"MYT":0,"NAM":0.010661,"NCL":8.765573,"NER":0.014444,"NGA":0.000646,"NIC":0,"NIU":0,"NLD":1.882014,"NOR":0.663891,"NPL":0.152181,"NRU":0,"NZL":1.084898,"OMN":0,"PAK":0.213355,"PAN":0.139818,"PER":0.077713,"PHL":0.597815,"PLW":0,"PNG":0,"POL":5.161461,"PRI":0,"PRK":1.657494,"PRT":1.009599,"PRY":0.001707,"PSE":0,"PYF":0,"QAT":0,"REU":2.158386,"ROU":1.055481,"RUS":2.721498,"RWA":0.00117,"SAU":0,"SDN":0,"SEN":0.145149,"SGP":0.353483,"SHN":0,"SLB":0,"SLE":0,"SLV":0.000584,"SOM":0,"SPM":0,"SRB":3.982492,"SSD":0,"STP":0,"SUR":0,"SVK":2.608226,"SVN":2.275529,"SWE":0.791797,"SWZ":0.138928,"SXM":0,"SYC":0,"SYR":0.00019,"TCA":0,"TCD":0,"TGO":0,"THA":0.851829,"TJK":0.459008,"TKM":0,"TLS":0,"TON":0,"TTO":0,"TUN":0,"TUR":1.968848,"TUV":0,"TWN":6.693304,"TZA":0.02869,"UGA":0,"UKR":2.712088,"URY":0.001069,"USA":3.782144,"UZB":0.29764,"VCT":0,"VEN":0.004177,"VGB":0,"VNM":1.420792,"VUT":0,"WLF":0,"WSM":0,"YEM":0.010115,"ZAF":6.193131,"ZMB":0.153866,"ZWE":0.476859},"2019":{"ABW":0,"AFG":0.104708,"AGO":0,"AIA":0,"ALB":0.112194,"AND":0,"ARE":0.813979,"ARG":0.047903,"ARM":0.003897,"ATG":0,"AUS":6.486179,"AUT":1.464565,"AZE":0.000358,"BDI":0.004011,"BEL":1.146097,"BEN":0.022061,"BES":0,"BFA":0,"BGD":0.090647,"BGR":2.944635,"BHR":0,"BHS":0.009057,"BIH":4.562677,"BLR":0.423781,"BLZ":0,"BMU":0,"BOL":0.002178,"BRA":0.292223,"BRB":0,"BRN":0.828074,"BTN":0.549033,"BWA":1.544295,"CAF":0,"CAN":1.554416,"CHE":0.050329,"CHL":1.629087,"CHN":5.305119,"CIV":0,"CMR":0,"COD":0,"COG":0,"COK":0,"COL":0.367137,"COM":0,"CPV":0,"CRI":0,"CUB":0.000324,"CUW":0,"CYP":0.055379,"CZE":5.452037,"DEU":2.887455,"DJI":0,"DMA":0,"DNK":0.619126,"DOM":0.300005,"DZA":0.025653,"ECU":0,"EGY":0.095851,"ERI":0,"ESP":0.501205,"EST":5.859459,"ETH":0.010565,"FIN":2.762942,"FJI":0,"FRA":0.454883,"FRO":0,"FSM":0,"GAB":0,"GBR":0.367074,"GEO":0.258465,"GHA":0,"GIN":0,"GLP":1.1717,"GMB":0,"GNB":0,"GNQ":0,"GRC":1.690381,"GRD":0,"GRL":0,"GTM":0.263667,"GUF":0,"GUY":0,"HKG":3.118944,"HND":0,"HRV":0.406207,"HTI":0,"HUN":0.837731,"IDN":1.169958,"IND":1.212956,"IRL":0.927961,"IRN":0.043089,"IRQ":0,"ISL":1.895957,"ISR":2.092518,"ITA":0.513293,"JAM":0.095103,"JOR":0.073289,"JPN":3.436238,"KAZ":9.392327,"KEN":0.031863,"KGZ":0.501192,"KHM":0.272634,"KIR":0,"KNA":0,"KOR":6.208152,"KSV":3.523773,"KWT":0,"LAO":1.969665,"LBN":0.108363,"LBR":0,"LBY":0,"LCA":0,"LIE":0,"LKA":0.272646,"LSO":0.750677,"LTU":0.281089,"LUX":0.442609,"LVA":0.086722,"MAC":0,"MAR":0.695773,"MDA":0.117912,"MDG":0.050878,"MDV":0,"MEX":0.361897,"MHL":0,"MKD":1.915035,"MLI":0,"MLT":0.000022,"MMR":0.074122,"MNE":2.307451,"MNG":12.919646,"MOZ":0.001573,"MRT":0,"MSR":0,"MTQ":0,"MUS":1.204111,"MWI":0.011431,"MYS":2.593079,"MYT":0,"NAM":0.020966,"NCL":8.70504,"NER":0.013931,"NGA":0.000721,"NIC":0,"NIU":0,"NLD":1.457556,"NOR":0.663167,"NPL":0.118819,"NRU":0,"NZL":1.207043,"OMN":0,"PAK":0.225294,"PAN":0.562689,"PER":0.078359,"PHL":0.62991,"PLW":0,"PNG":0,"POL":4.622457,"PRI":0,"PRK":1.842298,"PRT":0.489787,"PRY":0.000561,"PSE":0,"PYF":0,"QAT":0,"REU":2.19199,"ROU":0.937765,"RUS":2.678461,"RWA":0.00143,"SAU":0,"SDN":0,"SEN":0.130486,"SGP":0.33602,"SHN":0,"SLB":0,"SLE":0,"SLV":0.000583,"SOM":0,"SPM":0,"SRB":3.999626,"SSD":0,"STP":0,"SUR":0,"SVK":2.159631,"SVN":2.144189,"SWE":0.788095,"SWZ":0.172296,"SXM":0,"SYC":0,"SYR":0.000182,"TCA":0,"TCD":0,"TGO":0,"THA":0.876244,"TJK":0.488952,"TKM":0,"TLS":0,"TON":0,"TTO":0,"TUN":0,"TUR":1.976146,"TUV":0,"TWN":6.500221,"TZA":0.031577,"UGA":0,"UKR":2.579566,"URY":0.001069,"USA":3.202695,"UZB":0.251096,"VCT":0,"VEN":0.005691,"VGB":0,"VNM":1.998842,"VUT":0,"WLF":0,"WSM":0,"YEM":0.011263,"ZAF":6.788868,"ZMB":0.127718,"ZWE":0.448616},"2020":{"ABW":0,"AFG":0.106488,"AGO":0,"AIA":0,"ALB":0.115611,"AND":0,"ARE":0.771883,"ARG":0.058674,"ARM":0.003863,"ATG":0,"AUS":6.082697,"AUT":1.279033,"AZE":0.000357,"BDI":0.003803,"BEL":0.921254,"BEN":0.019449,"BES":0,"BFA":0,"BGD":0.101231,"BGR":2.378158,"BHR":0,"BHS":0.012293,"BIH":4.749921,"BLR":0.392108,"BLZ":0,"BMU":0,"BOL":0.000754,"BRA":0.263798,"BRB":0,"BRN":0.86202,"BTN":0.572572,"BWA":1.361848,"CAF":0,"CAN":1.267792,"CHE":0.04797,"CHL":1.34979,"CHN":5.337608,"CIV":0,"CMR":0,"COD":0,"COG":0,"COK":0,"COL":0.303833,"COM":0,"CPV":0,"CRI":0,"CUB":0.000442,"CUW":0,"CYP":0.05499,"CZE":4.733362,"DEU":2.368416,"DJI":0,"DMA":0,"DNK":0.539483,"DOM":0.404752,"DZA":0.025282,"ECU":0,"EGY":0.035862,"ERI":0,"ESP":0.301919,"EST":4.013374,"ETH":0.010037,"FIN":2.14699,"FJI":0,"FRA":0.369525,"FRO":0,"FSM":0,"GAB":0,"GBR":0.340137,"GEO":0.266031,"GHA":0,"GIN":0,"GLP":1.059747,"GMB":0,"GNB":0,"GNQ":0,"GRC":0.963556,"GRD":0,"GRL":0,"GTM":0.240423,"GUF":0,"GUY":0,"HKG":1.660352,"HND":0,"HRV":0.347544,"HTI":0,"HUN":0.763083,"IDN":1.105422,"IND":1.137264,"IRL":0.759739,"IRN":0.042848,"IRQ":0,"ISL":1.820641,"ISR":1.792894,"ITA":0.37428,"JAM":0.129329,"JOR":0.05646,"JPN":3.188692,"KAZ":9.537287,"KEN":0.030467,"KGZ":0.486429,"KHM":0.282892,"KIR":0,"KNA":0,"KOR":5.456362,"KSV":3.658821,"KWT":0,"LAO":2.037298,"LBN":0.087067,"LBR":0,"LBY":0,"LCA":0,"LIE":0,"LKA":0.291752,"LSO":0.666222,"LTU":0.220404,"LUX":0.376735,"LVA":0.051935,"MAC":0,"MAR":0.691254,"MDA":0.117121,"MDG":0.048388,"MDV":0,"MEX":0.15882,"MHL":0,"MKD":1.316388,"MLI":0,"MLT":0,"MMR":0.077251,"MNE":2.37699,"MNG":13.306289,"MOZ":0.001491,"MRT":0,"MSR":0,"MTQ":0,"MUS":1.17356,"MWI":0.010886,"MYS":2.848153,"MYT":0,"NAM":0.018523,"NCL":9.105133,"NER":0.012153,"NGA":0.000638,"NIC":0,"NIU":0,"NLD":0.974772,"NOR":0.669611,"NPL":0.122534,"NRU":0,"NZL":1.137228,"OMN":0,"PAK":0.251809,"PAN":0.513271,"PER":0.068139,"PHL":0.616145,"PLW":0,"PNG":0,"POL":4.273786,"PRI":0,"PRK":1.925678,"PRT":0.236056,"PRY":0.000194,"PSE":0,"PYF":0,"QAT":0,"REU":1.965938,"ROU":0.732148,"RUS":2.518647,"RWA":0.00136,"SAU":0,"SDN":0,"SEN":0.115237,"SGP":0.315491,"SHN":0,"SLB":0,"SLE":0,"SLV":0.000539,"SOM":0,"SPM":0,"SRB":4.135405,"SSD":0,"STP":0,"SUR":0,"SVK":1.824551,"SVN":2.074313,"SWE":0.642557,"SWZ":0.153415,"SXM":0,"SYC":0,"SYR":0.000139,"TCA":0,"TCD":0,"TGO":0,"THA":0.934656,"TJK":0.471728,"TKM":0,"TLS":0,"TON":0,"TTO":0,"TUN":0,"TUR":1.88542,"TUV":0,"TWN":6.055988,"TZA":0.029898,"UGA":0,"UKR":2.326331,"URY":0.000375,"USA":2.616442,"UZB":0.338472,"VCT":0,"VEN":0.002292,"VGB":0,"VNM":1.989463,"VUT":0,"WLF":0,"WSM":0,"YEM":0.008663,"ZAF":6.347073,"ZMB":0.12108,"ZWE":0.428954},"2021":{"ABW":0,"AFG":0.104828,"AGO":0,"AIA":0,"ALB":0.061096,"AND":0,"ARE":0.714923,"ARG":0.106371,"ARM":0.004473,"ATG":0,"AUS":5.823767,"AUT":1.375153,"AZE":0.000355,"BDI":0.003981,"BEL":0.948716,"BEN":0.021878,"BES":0,"BFA":0,"BGD":0.087702,"BGR":3.028459,"BHR":0,"BHS":0.012448,"BIH":2.535815,"BLR":0.342635,"BLZ":0,"BMU":0,"BOL":0.001096,"BRA":0.318346,"BRB":0,"BRN":0.865973,"BTN":0.576234,"BWA":1.411529,"CAF":0,"CAN":1.149576,"CHE":0.047549,"CHL":1.343286,"CHN":5.579649,"CIV":0,"CMR":0,"COD":0,"COG":0,"COK":0,"COL":0.233234,"COM":0,"CPV":0,"CRI":0,"CUB":0.000451,"CUW":0,"CYP":0.161931,"CZE":4.92619,"DEU":2.760161,"DJI":0,"DMA":0,"DNK":0.747621,"DOM":0.406918,"DZA":0.024798,"ECU":0,"EGY":0.057004,"ERI":0,"ESP":0.39117,"EST":4.682493,"ETH":0.010513,"FIN":2.22024,"FJI":0,"FRA":0.4475,"FRO":0,"FSM":0,"GAB":0,"GBR":0.352101,"GEO":0.140289,"GHA":0,"GIN":0,"GLP":1.058653,"GMB":0,"GNB":0,"GNQ":0,"GRC":0.935858,"GRD":0,"GRL":0,"GTM":0.314538,"GUF":0,"GUY":0,"HKG":1.845824,"HND":0,"HRV":0.415163,"HTI":0,"HUN":0.658229,"IDN":1.107397,"IND":1.280448,"IRL":1.261978,"IRN":0.042423,"IRQ":0,"ISL":1.802619,"ISR":1.57791,"ITA":0.405125,"JAM":0.131081,"JOR":0.048664,"JPN":3.360982,"KAZ":9.419363,"KEN":0.032122,"KGZ":0.551421,"KHM":0.283217,"KIR":0,"KNA":0,"KOR":5.477669,"KSV":1.935442,"KWT":0,"LAO":2.03418,"LBN":0.077514,"LBR":0,"LBY":0,"LCA":0,"LIE":0,"LKA":0.279086,"LSO":0.693505,"LTU":0.262508,"LUX":0.327207,"LVA":0.073149,"MAC":0,"MAR":0.751007,"MDA":0.135924,"MDG":0.050775,"MDV":0,"MEX":0.1528,"MHL":0,"MKD":1.13805,"MLI":0,"MLT":0,"MMR":0.077701,"MNE":1.253209,"MNG":13.262538,"MOZ":0.001558,"MRT":0,"MSR":0,"MTQ":0,"MUS":1.26051,"MWI":0.011401,"MYS":2.555403,"MYT":0,"NAM":0.019199,"NCL":9.177665,"NER":0.013543,"NGA":0.00072,"NIC":0,"NIU":0,"NLD":1.314206,"NOR":0.773197,"NPL":0.121277,"NRU":0,"NZL":1.316243,"OMN":0,"PAK":0.259101,"PAN":0.6721,"PER":0.073547,"PHL":0.657815,"PLW":0,"PNG":0,"POL":4.68579,"PRI":0,"PRK":1.942642,"PRT":0.107059,"PRY":0.000282,"PSE":0,"PYF":0,"QAT":0,"REU":1.949034,"ROU":0.851123,"RUS":2.620399,"RWA":0.001428,"SAU":0,"SDN":0,"SEN":0.12978,"SGP":0.563631,"SHN":0,"SLB":0,"SLE":0,"SLV":0.000713,"SOM":0,"SPM":0,"SRB":2.194432,"SSD":0,"STP":0,"SUR":0,"SVK":2.30909,"SVN":1.705311,"SWE":0.530563,"SWZ":0.160061,"SXM":0,"SYC":0,"SYR":0.000119,"TCA":0,"TCD":0,"TGO":0,"THA":0.986674,"TJK":0.531791,"TKM":0,"TLS":0,"TON":0,"TTO":0,"TUN":0,"TUR":1.917565,"TUV":0,"TWN":6.491521,"TZA":0.031188,"UGA":0,"UKR":2.339223,"URY":0.000552,"USA":2.974205,"UZB":0.237196,"VCT":0,"VEN":0.001283,"VGB":0,"VNM":2.016234,"VUT":0,"WLF":0,"WSM":0,"YEM":0.007456,"ZAF":6.234256,"ZMB":0.126514,"ZWE":0.451784}},"Other":{"2010":{"ABW":0,"AFG":0.000516000000000072,"AGO":0.604525,"AIA":0,"ALB":0.2875460000000003,"AND":0,"ARE":0.9811690000000013,"ARG":0.13793799999999923,"ARM":0.09785200000000005,"ATG":0,"AUS":0.7151299999999985,"AUT":0.35009600000000063,"AZE":0.4274,"BDI":0.000001000000000001,"BEL":0.4468739999999993,"BEN":0.025650000000000006,"BES":0,"BFA":0.014044999999999988,"BGD":0.0045820000000000305,"BGR":0.2879440000000004,"BHR":0.3544930000000015,"BHS":8.881784197001252e-16,"BIH":0.09439999999999937,"BLR":0.37668500000000016,"BLZ":0,"BMU":0,"BOL":0.11726199999999998,"BRA":0.2162010000000003,"BRB":0.3809969999999998,"BRN":0.8696209999999986,"BTN":0.10820200000000002,"BWA":0.047933,"CAF":0,"CAN":0.6770630000000004,"CHE":0.28355700000000006,"CHL":0.06456100000000031,"CHN":0.56053,"CIV":0,"CMR":0.019399,"COD":0.0028460000000000013,"COG":0.006950999999999985,"COK":0,"COL":0.11424100000000004,"COM":0,"CPV":0,"CRI":0.10854799999999987,"CUB":0.08211299999999966,"CUW":0,"CYP":0.5222530000000001,"CZE":0.3227119999999992,"DEU":0.28699600000000025,"DJI":0,"DMA":0,"DNK":0.24102400000000124,"DOM":0.16515599999999986,"DZA":0.49819000000000013,"ECU":0.2223670000000002,"EGY":0.23510700000000018,"ERI":0.00551299999999999,"ESP":0.35696300000000036,"EST":0.2612919999999992,"ETH":0.007083000000000006,"FIN":0.28729400000000105,"FJI":0,"FRA":0.2533290000000008,"FRO":0,"FSM":0,"GAB":1.2857889999999998,"GBR":0.19277700000000042,"GEO":0.085256,"GHA":0.03166399999999997,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":2.293088,"GRC":0.44650199999999884,"GRD":0,"GRL":0,"GTM":0.07554299999999992,"GUF":0,"GUY":0,"HKG":0.07818599999999964,"HND":0.071747,"HRV":0.44974899999999973,"HTI":0.011984999999999996,"HUN":0.15090999999999966,"IDN":0.12078999999999995,"IND":0.0708470000000001,"IRL":0.38170400000000093,"IRN":0.7903350000000007,"IRQ":0.5366,"ISL":0.6345720000000004,"ISR":0.27611199999999947,"ITA":0.3303850000000006,"JAM":0.11972199999999988,"JOR":0.20322900000000033,"JPN":0.2653799999999986,"KAZ":1.2199040000000014,"KEN":0.034456000000000014,"KGZ":0.05695499999999987,"KHM":0.025769000000000042,"KIR":0,"KNA":0,"KOR":0.6471860000000014,"KSV":0.08993699999999993,"KWT":0.38552600000000226,"LAO":0.07243499999999997,"LBN":0.514554,"LBR":0.0069069999999999965,"LBY":1.448055,"LCA":0,"LIE":0.000010000000000509601,"LKA":0.03207799999999994,"LSO":2.220446049250313e-16,"LTU":0.18852400000000014,"LUX":0.8689969999999967,"LVA":0.21647700000000025,"MAC":0,"MAR":0.16507799999999984,"MDA":0.09511000000000003,"MDG":0.002839000000000008,"MDV":0,"MEX":0.2570640000000006,"MHL":0,"MKD":0.15042799999999978,"MLI":0,"MLT":0.000440000000000218,"MMR":0.004349999999999965,"MNE":-4.440892098500626e-16,"MNG":0.06347799999999992,"MOZ":0.01477400000000001,"MRT":0,"MSR":0,"MTQ":0,"MUS":0,"MWI":0.004926,"MYS":0.9198059999999995,"MYT":0,"NAM":0,"NCL":0.23360800000000026,"NER":0.0007410000000000055,"NGA":0.20673399999999997,"NIC":0.04028900000000002,"NIU":0,"NLD":0.1558989999999998,"NOR":0.6208919999999996,"NPL":0.01911099999999999,"NRU":0,"NZL":0.6351109999999993,"OMN":1.423022999999997,"PAK":0.05766899999999997,"PAN":0.16179299999999985,"PER":0.6192549999999999,"PHL":0.06399599999999994,"PLW":0,"PNG":0,"POL":0.362521000000001,"PRI":0,"PRK":0.09708399999999995,"PRT":0.44456700000000016,"PRY":0.04355699999999996,"PSE":0,"PYF":0,"QAT":1.9391760000000033,"REU":-0.000001000000000139778,"ROU":0.2168069999999993,"RUS":0.5937009999999994,"RWA":0.003043999999999998,"SAU":0.7136949999999977,"SDN":0.022128000000000037,"SEN":0.12513300000000005,"SGP":-0.0000010000000010279564,"SHN":0,"SLB":0,"SLE":0,"SLV":0.08296300000000001,"SOM":0,"SPM":0,"SRB":0.13725499999999968,"SSD":0,"STP":0,"SUR":0.03924799999999973,"SVK":0.3651700000000009,"SVN":0.32577999999999996,"SWE":0.3037719999999995,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.1345200000000002,"TCA":0,"TCD":0,"TGO":0.08387099999999997,"THA":0.27076900000000004,"TJK":0.01889200000000002,"TKM":0.08332399999999929,"TLS":0.200217,"TON":0,"TTO":0.22053999999999974,"TUN":0.3590370000000003,"TUR":0.46783200000000047,"TUV":0,"TWN":0.37326000000000015,"TZA":0.019845999999999975,"UGA":0.009996999999999992,"UKR":0.1895900000000008,"URY":0.09822100000000011,"USA":0.3455880000000029,"UZB":0.10218999999999978,"VCT":0,"VEN":0.5453930000000007,"VGB":0,"VNM":0.2719339999999999,"VUT":0,"WLF":0,"WSM":0,"YEM":0.027008000000000032,"ZAF":0.09742499999999943,"ZMB":0.03150900000000001,"ZWE":0.02402700000000002},"2011":{"ABW":0,"AFG":0.0004979999999999984,"AGO":0.601088,"AIA":0,"ALB":0.33664899999999975,"AND":0,"ARE":0.8807359999999989,"ARG":0.14583800000000124,"ARM":0.09023700000000012,"ATG":0,"AUS":0.6895570000000006,"AUT":0.36436900000000083,"AZE":0.3918980000000003,"BDI":0.0014159999999999937,"BEL":0.46995399999999954,"BEN":0.02396999999999999,"BES":0,"BFA":0.013590999999999992,"BGD":0.004626999999999937,"BGR":0.3113109999999999,"BHR":0.3795390000000012,"BHS":-8.881784197001252e-16,"BIH":0.0901209999999999,"BLR":0.3640610000000004,"BLZ":2.220446049250313e-16,"BMU":0,"BOL":0.13059700000000007,"BRA":0.2184919999999999,"BRB":0.37028700000000025,"BRN":0.7483019999999989,"BTN":0.2884570000000001,"BWA":0.0026880000000000237,"CAF":0,"CAN":0.6813909999999996,"CHE":0.2771720000000002,"CHL":0.06630599999999998,"CHN":0.6255430000000004,"CIV":0,"CMR":0.02143400000000001,"COD":0.0025509999999999977,"COG":0.005840999999999985,"COK":0,"COL":0.130293,"COM":0,"CPV":0,"CRI":0.11689800000000017,"CUB":0.08318699999999968,"CUW":0,"CYP":0.49937500000000057,"CZE":0.35249100000000055,"DEU":0.30312100000000086,"DJI":0,"DMA":0,"DNK":0.2573150000000002,"DOM":0.15770700000000026,"DZA":0.4137330000000006,"ECU":0.22794800000000004,"EGY":0.22531800000000013,"ERI":0.019077999999999984,"ESP":0.33261500000000055,"EST":0.3436419999999991,"ETH":0.008672,"FIN":0.28652899999999804,"FJI":0,"FRA":0.25447500000000023,"FRO":0,"FSM":0,"GAB":1.148482,"GBR":0.1938550000000001,"GEO":0.14865899999999987,"GHA":0.03648600000000002,"GIN":0,"GLP":-8.881784197001252e-16,"GMB":0,"GNB":0,"GNQ":4.3887789999999995,"GRC":0.28295199999999987,"GRD":0,"GRL":0,"GTM":0.075079,"GUF":0,"GUY":0,"HKG":0.08102199999999993,"HND":0.077426,"HRV":0.4217120000000003,"HTI":0.0019630000000000203,"HUN":0.13387499999999974,"IDN":0.12398799999999999,"IND":0.07426099999999991,"IRL":0.3362330000000018,"IRN":0.7212989999999992,"IRQ":0.6803140000000001,"ISL":0.632966999999999,"ISR":0.3017109999999992,"ITA":0.3228850000000003,"JAM":0.11896899999999988,"JOR":0.1401539999999999,"JPN":0.26824899999999907,"KAZ":1.2116810000000005,"KEN":0.04017399999999999,"KGZ":0.07426900000000014,"KHM":0.029566000000000037,"KIR":0,"KNA":0,"KOR":0.6770840000000007,"KSV":0.08959700000000037,"KWT":0.38611700000000226,"LAO":0.07663500000000001,"LBN":0.5109950000000003,"LBR":0.007408999999999999,"LBY":0.6213169999999995,"LCA":0,"LIE":0.000010000000000509601,"LKA":0.03597600000000001,"LSO":0,"LTU":0.20450299999999988,"LUX":0.8869059999999998,"LVA":0.2778010000000002,"MAC":0.2980909999999999,"MAR":0.157767,"MDA":0.11884500000000009,"MDG":0.0034229999999999955,"MDV":0,"MEX":0.21817299999999928,"MHL":0,"MKD":0.17122300000000035,"MLI":0,"MLT":0.0004140000000001365,"MMR":0.004308000000000034,"MNE":0,"MNG":0.05720599999999987,"MOZ":0.015711000000000017,"MRT":0,"MSR":0,"MTQ":0,"MUS":0,"MWI":0.006312999999999999,"MYS":0.8536289999999989,"MYT":0,"NAM":0.06925700000000012,"NCL":0.20737300000000047,"NER":0.001460000000000003,"NGA":0.193635,"NIC":0.046030000000000015,"NIU":0,"NLD":0.15097300000000047,"NOR":0.5884649999999993,"NPL":0.02913099999999999,"NRU":0,"NZL":0.6159029999999994,"OMN":1.102444000000002,"PAK":0.05549800000000005,"PAN":0.18708499999999972,"PER":0.34662100000000007,"PHL":0.06345999999999996,"PLW":0,"PNG":0,"POL":0.41695100000000096,"PRI":0,"PRK":0.09846900000000014,"PRT":0.39439399999999925,"PRY":0.035026,"PSE":0,"PYF":0,"QAT":1.5757359999999991,"REU":0.000001000000000139778,"ROU":0.23950300000000002,"RUS":0.6393620000000002,"RWA":0.0029759999999999995,"SAU":0.7406720000000018,"SDN":0.033380999999999994,"SEN":0.13892499999999997,"SGP":0.000001000000000139778,"SHN":0,"SLB":0,"SLE":0,"SLV":0.08404400000000001,"SOM":0,"SPM":0,"SRB":0.13541199999999964,"SSD":0,"STP":0,"SUR":0.0592170000000003,"SVK":0.44320999999999966,"SVN":0.3028839999999997,"SWE":0.3056220000000005,"SWZ":1.1102230246251565e-16,"SXM":0,"SYC":0,"SYR":0.13425200000000004,"TCA":0,"TCD":0.00006199999999999262,"TGO":0.092505,"THA":0.2649619999999997,"TJK":0.018753999999999993,"TKM":0.13758800000000093,"TLS":0.13497500000000004,"TON":0,"TTO":0.22757499999999453,"TUN":0.31208500000000017,"TUR":0.4904080000000004,"TUV":0,"TWN":0.4138169999999999,"TZA":0.01992900000000003,"UGA":0.011851,"UKR":0.23103999999999925,"URY":0.11297399999999991,"USA":0.3550530000000016,"UZB":0.09608400000000028,"VCT":0,"VEN":0.7184039999999996,"VGB":0,"VNM":0.31944799999999973,"VUT":0,"WLF":0,"WSM":0,"YEM":0.038892999999999955,"ZAF":0.08844599999999936,"ZMB":0.032172000000000006,"ZWE":0.02936100000000008},"2012":{"ABW":0,"AFG":0.0009500000000000064,"AGO":0.2719489999999999,"AIA":0,"ALB":0.35941599999999996,"AND":0,"ARE":0.8079549999999998,"ARG":0.12668699999999955,"ARM":0.09535399999999994,"ATG":0,"AUS":0.6873530000000017,"AUT":0.35472399999999915,"AZE":0.13546099999999983,"BDI":0.0027719999999999967,"BEL":0.43922799999999995,"BEN":0.02362399999999998,"BES":0,"BFA":0.014722999999999986,"BGD":0.0045459999999999945,"BGR":0.32582100000000036,"BHR":0.46498300000000015,"BHS":0,"BIH":0.08572899999999972,"BLR":0.3750819999999999,"BLZ":0,"BMU":0,"BOL":0.11156900000000003,"BRA":0.23083600000000004,"BRB":0.2942790000000004,"BRN":0.7902179999999994,"BTN":0.27247,"BWA":0.0026360000000003048,"CAF":0,"CAN":0.7176080000000002,"CHE":0.25823099999999943,"CHL":0.06752499999999984,"CHN":0.6294370000000011,"CIV":0.009119999999999961,"CMR":0.092007,"COD":0.0022240000000000038,"COG":0.452418,"COK":0,"COL":0.15075099999999986,"COM":0,"CPV":0,"CRI":0.11484399999999995,"CUB":0.09289000000000014,"CUW":0,"CYP":0.4562190000000008,"CZE":0.3305959999999999,"DEU":0.29760899999999957,"DJI":0,"DMA":0,"DNK":0.25467300000000126,"DOM":0.1599790000000001,"DZA":0.589998,"ECU":0.24913200000000035,"EGY":0.28481299999999976,"ERI":0.027038000000000006,"ESP":0.3219459999999996,"EST":0.5111810000000023,"ETH":0.014363,"FIN":0.26294799999999974,"FJI":0,"FRA":0.23401400000000017,"FRO":0,"FSM":0,"GAB":1.4173980000000002,"GBR":0.17149700000000045,"GEO":0.15396200000000038,"GHA":0.06796800000000003,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":1.0448210000000007,"GRC":0.3414129999999993,"GRD":0,"GRL":0,"GTM":0.07521699999999998,"GUF":0,"GUY":0,"HKG":0.08732499999999987,"HND":0.08705699999999994,"HRV":0.384849,"HTI":0.0028829999999999967,"HUN":0.13961100000000037,"IDN":0.11966700000000019,"IND":0.08146799999999987,"IRL":0.3552199999999992,"IRN":0.5793689999999998,"IRQ":0.8077770000000002,"ISL":0.5486550000000001,"ISR":0.2966489999999986,"ITA":0.27154599999999984,"JAM":0.12295800000000012,"JOR":0.19587900000000014,"JPN":0.27388800000000124,"KAZ":1.218210000000001,"KEN":0.040572000000000025,"KGZ":0.08770999999999995,"KHM":0.032916,"KIR":0,"KNA":0,"KOR":0.6763399999999997,"KSV":0.11322100000000024,"KWT":0.8727340000000012,"LAO":0.08691400000000005,"LBN":0.46132300000000015,"LBR":0.010769,"LBY":2.034281,"LCA":0,"LIE":0.000009000000000369823,"LKA":0.03707300000000002,"LSO":0,"LTU":0.22912900000000036,"LUX":0.8464980000000004,"LVA":0.29063799999999995,"MAC":0.2847479999999998,"MAR":0.17502600000000013,"MDA":0.12607299999999988,"MDG":0.003828999999999999,"MDV":0,"MEX":0.22860000000000102,"MHL":0,"MKD":0.11867400000000039,"MLI":0,"MLT":0.0020959999999998757,"MMR":0.009600000000000025,"MNE":-0.000001000000000139778,"MNG":0.06083300000000058,"MOZ":0.02150400000000001,"MRT":0.028219999999999912,"MSR":0,"MTQ":0,"MUS":-4.440892098500626e-16,"MWI":0.005890000000000006,"MYS":0.43332000000000104,"MYT":0,"NAM":0.10268199999999994,"NCL":0.173763000000001,"NER":0.0071309999999999985,"NGA":0.14233500000000004,"NIC":0.039946999999999955,"NIU":0,"NLD":0.14286300000000018,"NOR":0.545122000000001,"NPL":0.037533999999999984,"NRU":0,"NZL":0.5885480000000012,"OMN":1.7236249999999984,"PAK":0.06128700000000009,"PAN":0.23903799999999986,"PER":0.1334430000000002,"PHL":0.075874,"PLW":0,"PNG":0.011572999999999944,"POL":0.38489999999999824,"PRI":0,"PRK":0.09767999999999999,"PRT":0.38901499999999967,"PRY":0.04947400000000002,"PSE":0.0007859999999999534,"PYF":0,"QAT":2.510359000000001,"REU":0,"ROU":0.25038800000000094,"RUS":0.6619789999999988,"RWA":0.0027340000000000003,"SAU":0.9415459999999989,"SDN":0.05733000000000005,"SEN":0.13549500000000003,"SGP":9.999999992515995e-7,"SHN":0,"SLB":0,"SLE":0,"SLV":0.08702700000000008,"SOM":0,"SPM":0,"SRB":0.11820599999999981,"SSD":0,"STP":0,"SUR":0.08634900000000023,"SVK":0.39696900000000035,"SVN":0.3008069999999998,"SWE":0.3121660000000004,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.15132800000000013,"TCA":0,"TCD":0.019446999999999992,"TGO":0.08765200000000004,"THA":0.28550399999999954,"TJK":0.015459,"TKM":1.0070239999999977,"TLS":0.24640700000000004,"TON":0,"TTO":0.6111630000000048,"TUN":0.3718680000000001,"TUR":0.49750400000000017,"TUV":0,"TWN":0.40482500000000066,"TZA":0.020684000000000008,"UGA":0.012497000000000008,"UKR":0.21376799999999996,"URY":0.10103400000000029,"USA":0.37608200000000025,"UZB":0.21106399999999992,"VCT":0,"VEN":0.631869,"VGB":0,"VNM":0.33484099999999994,"VUT":0,"WLF":0,"WSM":0,"YEM":0.11620399999999986,"ZAF":0.08855400000000024,"ZMB":0.04149000000000003,"ZWE":0.04265899999999989},"2013":{"ABW":0,"AFG":0.0011269999999999891,"AGO":0.24906000000000006,"AIA":0,"ALB":0.39100099999999993,"AND":0,"ARE":0.8911710000000035,"ARG":0.13853500000000007,"ARM":0.0892139999999999,"ATG":0,"AUS":0.6798280000000005,"AUT":0.35452700000000004,"AZE":0.16047199999999995,"BDI":0.003834999999999998,"BEL":0.42644199999999977,"BEN":0.020675,"BES":0,"BFA":0.012801000000000007,"BGD":0.004935000000000023,"BGR":0.3166880000000001,"BHR":0.4841860000000011,"BHS":0,"BIH":0.09324999999999939,"BLR":0.3800939999999988,"BLZ":0,"BMU":0,"BOL":0.1195790000000001,"BRA":0.24673500000000015,"BRB":0.2681149999999999,"BRN":0.8396709999999992,"BTN":0.2989949999999999,"BWA":0.0026329999999998854,"CAF":0,"CAN":0.7176740000000006,"CHE":0.25481900000000035,"CHL":0.06468099999999932,"CHN":0.6599120000000003,"CIV":0.0068250000000000255,"CMR":0.09744600000000003,"COD":0.002367999999999995,"COG":0.5761220000000001,"COK":0,"COL":0.13954899999999992,"COM":0,"CPV":0,"CRI":0.11840099999999998,"CUB":0.09029799999999977,"CUW":0,"CYP":0.6557029999999999,"CZE":0.3091419999999996,"DEU":0.29113599999999984,"DJI":0.060083,"DMA":0,"DNK":0.26739799999999914,"DOM":0.16244099999999984,"DZA":0.5971480000000002,"ECU":0.26096799999999964,"EGY":0.2643009999999999,"ERI":0.02715899999999999,"ESP":0.30789199999999983,"EST":0.5314529999999991,"ETH":0.018014000000000016,"FIN":0.26566000000000045,"FJI":0,"FRA":0.22851599999999994,"FRO":0,"FSM":0,"GAB":1.3860310000000002,"GBR":0.18313500000000005,"GEO":0.16435800000000045,"GHA":0.06944999999999996,"GIN":0,"GLP":0.000001000000000139778,"GMB":0,"GNB":0,"GNQ":1.0219269999999998,"GRC":0.3824519999999998,"GRD":0,"GRL":0,"GTM":0.07665,"GUF":0,"GUY":0,"HKG":0.09263899999999925,"HND":0.07724999999999993,"HRV":0.4034119999999999,"HTI":0.0037870000000000403,"HUN":0.12266599999999972,"IDN":0.12111000000000005,"IND":0.0860369999999997,"IRL":0.39605700000000077,"IRN":0.5808309999999999,"IRQ":0.8248630000000001,"ISL":0.5447900000000008,"ISR":0.2809039999999996,"ITA":0.24893000000000054,"JAM":0.13052399999999986,"JOR":0.1907540000000001,"JPN":0.2852969999999999,"KAZ":1.357353999999999,"KEN":0.043963,"KGZ":0.11531000000000002,"KHM":0.033809000000000033,"KIR":0,"KNA":0,"KOR":0.6751529999999999,"KSV":0.11971999999999916,"KWT":0.9547959999999982,"LAO":0.12488399999999988,"LBN":0.4470970000000003,"LBR":0.017056000000000016,"LBY":1.4319249999999997,"LCA":0,"LIE":0.000010000000000509601,"LKA":0.03490100000000007,"LSO":-2.220446049250313e-16,"LTU":0.26361599999999985,"LUX":0.7837010000000006,"LVA":0.27913100000000046,"MAC":0.37372300000000025,"MAR":0.17964099999999994,"MDA":0.13958899999999996,"MDG":0.003795999999999994,"MDV":0,"MEX":0.2177220000000002,"MHL":0,"MKD":0.13420499999999969,"MLI":0.010071999999999998,"MLT":0.0057989999999996655,"MMR":0.011589000000000016,"MNE":4.440892098500626e-16,"MNG":0.03899299999999961,"MOZ":0.020273,"MRT":0.028328999999999938,"MSR":0,"MTQ":0,"MUS":0,"MWI":0.005586000000000008,"MYS":0.4874879999999999,"MYT":0,"NAM":0.12265799999999993,"NCL":0.16461499999999774,"NER":0.010234000000000007,"NGA":0.14505999999999997,"NIC":0.04127499999999995,"NIU":0,"NLD":0.1550389999999986,"NOR":0.5635089999999998,"NPL":0.04175000000000001,"NRU":0,"NZL":0.5200029999999991,"OMN":1.6893899999999995,"PAK":0.06380799999999998,"PAN":0.24098299999999995,"PER":0.15031400000000006,"PHL":0.07980899999999991,"PLW":0,"PNG":0.01194699999999993,"POL":0.38732299999999853,"PRI":0,"PRK":0.10092999999999985,"PRT":0.4641799999999998,"PRY":0.036978999999999984,"PSE":0.00017100000000003224,"PYF":0,"QAT":2.2481769999999983,"REU":0,"ROU":0.22652299999999936,"RUS":0.6415389999999999,"RWA":0.002827999999999997,"SAU":1.0158330000000007,"SDN":0.06137499999999996,"SEN":0.14861800000000003,"SGP":-0.0000010000000010279564,"SHN":0,"SLB":0,"SLE":0,"SLV":0.07538299999999998,"SOM":0,"SPM":0,"SRB":0.10510800000000042,"SSD":0,"STP":0,"SUR":0.09747799999999973,"SVK":0.38077499999999986,"SVN":0.31240699999999944,"SWE":0.2861260000000003,"SWZ":-2.220446049250313e-16,"SXM":0,"SYC":0,"SYR":0.1021209999999999,"TCA":0,"TCD":0.024472999999999995,"TGO":0.06666499999999997,"THA":0.28341600000000033,"TJK":0.023106000000000015,"TKM":0.9436279999999986,"TLS":0.154565,"TON":0,"TTO":0.6242309999999982,"TUN":0.36005600000000015,"TUR":0.5312629999999992,"TUV":0,"TWN":0.4258380000000006,"TZA":0.018650999999999973,"UGA":0.010149000000000005,"UKR":0.20914499999999947,"URY":0.0984619999999996,"USA":0.3947439999999993,"UZB":0.18949300000000013,"VCT":0,"VEN":0.6993070000000001,"VGB":0,"VNM":0.35837699999999995,"VUT":0,"WLF":0,"WSM":0,"YEM":0.12353199999999998,"ZAF":0.0917779999999997,"ZMB":0.04624500000000001,"ZWE":0.03417099999999995},"2014":{"ABW":0,"AFG":0.0008750000000000147,"AGO":0.2613399999999999,"AIA":0,"ALB":0.36631300000000033,"AND":0,"ARE":1.0075549999999964,"ARG":0.13366899999999937,"ARM":0.08427900000000021,"ATG":0,"AUS":0.6994550000000004,"AUT":0.34955800000000004,"AZE":0.15479600000000016,"BDI":0.002584999999999997,"BEL":0.43182599999999915,"BEN":0.020347999999999977,"BES":0,"BFA":0.00859399999999999,"BGD":0.0050200000000000244,"BGR":0.3240929999999995,"BHR":0.40892599999999746,"BHS":0,"BIH":0.08996599999999955,"BLR":0.416474,"BLZ":0,"BMU":0,"BOL":0.12918799999999986,"BRA":0.24981799999999987,"BRB":0.35993600000000026,"BRN":0.8899699999999982,"BTN":0.35758900000000016,"BWA":0.002571000000000101,"CAF":0,"CAN":0.7148579999999995,"CHE":0.25757299999999983,"CHL":0.06137899999999963,"CHN":0.6841869999999997,"CIV":0.007144999999999957,"CMR":0.098252,"COD":0.001682000000000003,"COG":0.5147739999999998,"COK":0,"COL":0.147907,"COM":0,"CPV":0,"CRI":0.12004400000000004,"CUB":0.07760100000000048,"CUW":0,"CYP":0.8375500000000002,"CZE":0.3237219999999983,"DEU":0.2955559999999995,"DJI":0.06659999999999999,"DMA":0,"DNK":0.2713479999999997,"DOM":0.18920099999999973,"DZA":0.619726,"ECU":0.2813589999999997,"EGY":0.27189700000000006,"ERI":0.026816000000000006,"ESP":0.34189500000000006,"EST":0.3597979999999996,"ETH":0.021071000000000006,"FIN":0.24501299999999837,"FJI":0,"FRA":0.21973900000000057,"FRO":0,"FSM":0,"GAB":1.448778,"GBR":0.19098200000000087,"GEO":0.16554000000000002,"GHA":0.06966499999999998,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":0.9560089999999999,"GRC":0.40165200000000034,"GRD":0,"GRL":0,"GTM":0.08901899999999996,"GUF":0,"GUY":0.0010500000000002174,"HKG":0.09862000000000037,"HND":0.07252400000000003,"HRV":0.42373499999999975,"HTI":0.007445999999999953,"HUN":0.1250479999999996,"IDN":0.12214400000000025,"IND":0.091302,"IRL":0.44169199999999975,"IRN":0.5787230000000001,"IRQ":0.8070130000000004,"ISL":0.566393999999999,"ISR":0.2915049999999999,"ITA":0.234197,"JAM":0.1484700000000001,"JOR":0.17793500000000018,"JPN":0.2836550000000013,"KAZ":1.3168930000000003,"KEN":0.04954900000000001,"KGZ":0.11613899999999999,"KHM":0.03356100000000001,"KIR":0,"KNA":0,"KOR":0.6939299999999999,"KSV":0.1051100000000007,"KWT":0.962963000000002,"LAO":0.12552299999999994,"LBN":0.4163929999999998,"LBR":0.02529300000000001,"LBY":1.3392800000000005,"LCA":0,"LIE":0.000009999999999621423,"LKA":0.03386800000000001,"LSO":0,"LTU":0.24730100000000022,"LUX":0.7804230000000025,"LVA":0.2936059999999996,"MAC":0.37266400000000033,"MAR":0.15099699999999983,"MDA":0.1391739999999999,"MDG":0.0023999999999999855,"MDV":0,"MEX":0.23066200000000014,"MHL":0,"MKD":0.12182700000000013,"MLI":0.01457,"MLT":0.0055509999999996396,"MMR":0.012462000000000029,"MNE":0,"MNG":0.0716070000000002,"MOZ":0.02332099999999998,"MRT":0.017580999999999958,"MSR":0,"MTQ":0,"MUS":0,"MWI":0.0063490000000000005,"MYS":0.5287259999999989,"MYT":0,"NAM":0.1351579999999999,"NCL":0.1440570000000001,"NER":0.009246000000000004,"NGA":0.13143700000000003,"NIC":0.04371000000000003,"NIU":0,"NLD":0.15621699999999983,"NOR":0.5401009999999999,"NPL":0.043076999999999976,"NRU":0,"NZL":0.5636219999999987,"OMN":1.6604210000000013,"PAK":0.06272200000000006,"PAN":0.2183259999999998,"PER":0.16336099999999987,"PHL":0.08344099999999988,"PLW":0,"PNG":0.06477599999999994,"POL":0.4035359999999999,"PRI":0,"PRK":0.10138000000000003,"PRT":0.47710700000000017,"PRY":0.042526000000000064,"PSE":0.00015900000000002024,"PYF":0,"QAT":2.0252239999999944,"REU":0.000001000000000139778,"ROU":0.23670999999999998,"RUS":0.5656110000000005,"RWA":0.003165000000000015,"SAU":1.0430540000000015,"SDN":0.06049199999999999,"SEN":0.13588399999999995,"SGP":0,"SHN":0,"SLB":0,"SLE":0,"SLV":0.0624340000000001,"SOM":0,"SPM":0,"SRB":0.0908319999999998,"SSD":0,"STP":0,"SUR":0.05488300000000024,"SVK":0.40975800000000007,"SVN":0.3026049999999989,"SWE":0.2817259999999999,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.06865599999999983,"TCA":0,"TCD":0.028016,"TGO":0.059735999999999984,"THA":0.2925110000000002,"TJK":0.06749700000000003,"TKM":0.8563270000000003,"TLS":0.11061399999999999,"TON":0,"TTO":0.573245,"TUN":0.41648700000000005,"TUR":0.5252320000000008,"TUV":0,"TWN":0.37488600000000005,"TZA":0.02144999999999997,"UGA":0.010806999999999997,"UKR":0.19188199999999966,"URY":0.0964980000000002,"USA":0.42242499999999694,"UZB":0.17943600000000037,"VCT":0,"VEN":0.723687,"VGB":0,"VNM":0.3804560000000001,"VUT":0,"WLF":0,"WSM":0,"YEM":0.12160899999999997,"ZAF":0.09067199999999964,"ZMB":0.04678100000000002,"ZWE":0.03579699999999997},"2015":{"ABW":0,"AFG":0.0012210000000000276,"AGO":0.24151499999999992,"AIA":0,"ALB":0.3432860000000002,"AND":0,"ARE":1.0050080000000001,"ARG":0.13381600000000038,"ARM":0.08360900000000027,"ATG":0,"AUS":0.752755999999998,"AUT":0.34826599999999974,"AZE":0.12220300000000028,"BDI":0.003611999999999997,"BEL":0.4093959999999992,"BEN":0.019600000000000062,"BES":0,"BFA":0.027947,"BGD":0.007093999999999989,"BGR":0.4085289999999997,"BHR":0.3256750000000004,"BHS":0,"BIH":0.08768599999999971,"BLR":0.36803399999999975,"BLZ":9.999999999177334e-7,"BMU":0,"BOL":0.13233300000000003,"BRA":0.23918499999999998,"BRB":0.38552499999999945,"BRN":0.9413450000000019,"BTN":0.4061159999999999,"BWA":0.0025210000000002175,"CAF":0,"CAN":0.6896239999999985,"CHE":0.2320890000000002,"CHL":0.06283399999999961,"CHN":0.639348,"CIV":0.006325999999999998,"CMR":0.117118,"COD":0.0019660000000000025,"COG":0.4900840000000001,"COK":0,"COL":0.1505510000000001,"COM":0,"CPV":0,"CRI":0.126714,"CUB":0.07262600000000008,"CUW":-9.999999974752427e-7,"CYP":0.7480340000000005,"CZE":0.32695400000000063,"DEU":0.28846300000000014,"DJI":0.05391099999999999,"DMA":0,"DNK":0.2627790000000001,"DOM":0.19302399999999986,"DZA":0.6379519999999999,"ECU":0.26539599999999997,"EGY":0.27588700000000044,"ERI":0.023203,"ESP":0.34382100000000015,"EST":0.20683299999999782,"ETH":0.028360999999999997,"FIN":0.22891399999999962,"FJI":0,"FRA":0.2084279999999996,"FRO":0,"FSM":0,"GAB":1.483555,"GBR":0.1876730000000002,"GEO":0.17953900000000012,"GHA":0.059897000000000034,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":0.8068520000000001,"GRC":0.36647500000000033,"GRD":0,"GRL":0,"GTM":0.09289400000000003,"GUF":0,"GUY":0.052224999999999966,"HKG":0.09953099999999981,"HND":0.07777599999999985,"HRV":0.36851900000000004,"HTI":0.007340000000000013,"HUN":0.13970000000000038,"IDN":0.11586099999999977,"IND":0.09195600000000015,"IRL":0.47836000000000034,"IRN":0.531326,"IRQ":0.9046259999999999,"ISL":0.5049160000000015,"ISR":0.27899600000000024,"ITA":0.22928899999999963,"JAM":0.1496660000000003,"JOR":0.16564699999999988,"JPN":0.2747909999999987,"KAZ":1.3430619999999998,"KEN":0.05242100000000005,"KGZ":0.09872099999999984,"KHM":0.04234799999999994,"KIR":0,"KNA":0,"KOR":0.6977849999999997,"KSV":0.13122000000000078,"KWT":0.7052939999999985,"LAO":0.17423699999999998,"LBN":0.3742610000000006,"LBR":0.025035999999999975,"LBY":1.105969,"LCA":0,"LIE":0.000010000000000509601,"LKA":0.04090399999999994,"LSO":0,"LTU":0.27090000000000103,"LUX":0.712394999999999,"LVA":0.25076600000000004,"MAC":0.37216099999999974,"MAR":0.151381,"MDA":0.135243,"MDG":0.00233899999999998,"MDV":0,"MEX":0.237657,"MHL":0,"MKD":0.12508300000000006,"MLI":0.013478000000000018,"MLT":0.004131000000000107,"MMR":0.009435000000000027,"MNE":0,"MNG":0.07333500000000015,"MOZ":0.023211999999999983,"MRT":0.019923000000000024,"MSR":0,"MTQ":0,"MUS":0,"MWI":0.0035449999999999995,"MYS":0.5144310000000001,"MYT":0,"NAM":0.14465300000000014,"NCL":0.15100999999999942,"NER":0.0059010000000000035,"NGA":0.12247200000000003,"NIC":0.04554800000000003,"NIU":0,"NLD":0.15023099999999978,"NOR":0.5327179999999991,"NPL":0.05404199999999998,"NRU":0,"NZL":0.5811580000000003,"OMN":1.5328330000000001,"PAK":0.06436000000000008,"PAN":0.19300500000000032,"PER":0.15956300000000012,"PHL":0.09229199999999993,"PLW":0,"PNG":0.015967999999999982,"POL":0.40134699999999945,"PRI":0,"PRK":0.101182,"PRT":0.47643400000000025,"PRY":0.056626000000000065,"PSE":0.0002809999999999757,"PYF":0,"QAT":1.8597210000000004,"REU":-0.000001000000000139778,"ROU":0.26511100000000054,"RUS":0.5052319999999995,"RWA":0.005621000000000001,"SAU":1.029557999999998,"SDN":0.06443100000000002,"SEN":0.12456500000000004,"SGP":0,"SHN":0,"SLB":0,"SLE":0,"SLV":0.061594999999999844,"SOM":0,"SPM":0,"SRB":0.09500900000000012,"SSD":0,"STP":0,"SUR":0.05433100000000035,"SVK":0.4027250000000002,"SVN":0.2812810000000008,"SWE":0.2984309999999999,"SWZ":1.1102230246251565e-16,"SXM":0,"SYC":0,"SYR":0.08463399999999988,"TCA":0,"TCD":0.03778999999999999,"TGO":0.10894000000000001,"THA":0.29627599999999976,"TJK":0.08129599999999992,"TKM":0.8192520000000005,"TLS":0.10094699999999995,"TON":0,"TTO":0.5229639999999982,"TUN":0.40620699999999976,"TUR":0.5079469999999997,"TUV":0,"TWN":0.3568819999999988,"TZA":0.02312599999999998,"UGA":0.009302000000000005,"UKR":0.18661799999999928,"URY":0.10452299999999992,"USA":0.4197780000000009,"UZB":0.17844399999999982,"VCT":0,"VEN":0.6806929999999998,"VGB":0,"VNM":0.39297000000000004,"VUT":0,"WLF":0,"WSM":0,"YEM":0.07487700000000003,"ZAF":0.09778399999999987,"ZMB":0.04292699999999994,"ZWE":0.04133600000000004},"2016":{"ABW":0,"AFG":0.0021980000000000333,"AGO":0.3360810000000001,"AIA":0,"ALB":0.31944700000000004,"AND":0,"ARE":0.8193179999999991,"ARG":0.11152800000000074,"ARM":0.05377199999999993,"ATG":0,"AUS":0.7970440000000032,"AUT":0.3467199999999995,"AZE":0.10797200000000018,"BDI":0.0035540000000000016,"BEL":0.4055319999999991,"BEN":0.01867300000000005,"BES":0,"BFA":0.033169000000000004,"BGD":0.007089999999999985,"BGR":0.45834000000000064,"BHR":0.47930299999999804,"BHS":0,"BIH":0.09240400000000015,"BLR":0.33422899999999967,"BLZ":-2.220446049250313e-16,"BMU":0,"BOL":0.13136900000000007,"BRA":0.223881,"BRB":0.3715920000000006,"BRN":1.1468600000000038,"BTN":0.47844,"BWA":0.00247099999999989,"CAF":0,"CAN":0.623823999999999,"CHE":0.23561600000000027,"CHL":0.06749600000000022,"CHN":0.651986,"CIV":0.007491999999999999,"CMR":0.12245199999999995,"COD":0.0012040000000000002,"COG":0.4772940000000001,"COK":0,"COL":0.13492400000000027,"COM":0,"CPV":0,"CRI":0.12543399999999982,"CUB":0.06646199999999958,"CUW":9.999999974752427e-7,"CYP":0.748335,"CZE":0.336939000000001,"DEU":0.28717100000000073,"DJI":0.04922900000000002,"DMA":0,"DNK":0.3053740000000005,"DOM":0.1904239999999997,"DZA":0.6307670000000001,"ECU":0.2570999999999999,"EGY":0.28143399999999996,"ERI":0.02302900000000002,"ESP":0.345402,"EST":0.190925,"ETH":0.03054499999999999,"FIN":0.26452399999999976,"FJI":0,"FRA":0.2050850000000004,"FRO":0,"FSM":0,"GAB":1.4102019999999997,"GBR":0.1817549999999999,"GEO":0.18434099999999987,"GHA":0.05968000000000001,"GIN":0,"GLP":9.999999992515995e-7,"GMB":0,"GNB":0,"GNQ":0.6203249999999993,"GRC":0.39824400000000004,"GRD":0,"GRL":0,"GTM":0.08650000000000002,"GUF":0,"GUY":0.2077849999999999,"HKG":0.0944300000000009,"HND":0.0827,"HRV":0.3431149999999996,"HTI":0.0072369999999999934,"HUN":0.14327100000000037,"IDN":0.12907800000000003,"IND":0.0949009999999999,"IRL":0.5096430000000005,"IRN":0.59476,"IRQ":0.9609810000000003,"ISL":0.4545269999999988,"ISR":0.243074,"ITA":0.21319600000000083,"JAM":0.1412040000000001,"JOR":0.15877699999999972,"JPN":0.274521,"KAZ":1.3316149999999993,"KEN":0.05426500000000001,"KGZ":0.08444399999999996,"KHM":0.09094400000000002,"KIR":0,"KNA":0,"KOR":0.7118909999999996,"KSV":0.15899099999999944,"KWT":0.8593100000000007,"LAO":0.18866400000000016,"LBN":0.3687370000000003,"LBR":0.019843999999999973,"LBY":0.9502690000000005,"LCA":0,"LIE":0.000008999999999925734,"LKA":0.04800099999999996,"LSO":9.999999999177334e-7,"LTU":0.2647890000000004,"LUX":0.733528999999999,"LVA":0.1919059999999999,"MAC":0,"MAR":0.148258,"MDA":0.13453800000000005,"MDG":0.0022790000000000032,"MDV":0,"MEX":0.23964499999999989,"MHL":0,"MKD":0.15800599999999987,"MLI":0.013468999999999981,"MLT":0.0024050000000004346,"MMR":0.020105999999999957,"MNE":-9.999999996956888e-7,"MNG":0.06875900000000001,"MOZ":0.03438199999999997,"MRT":0.02261000000000002,"MSR":0,"MTQ":0,"MUS":0.000001000000000139778,"MWI":0.00336199999999999,"MYS":0.6065330000000007,"MYT":0,"NAM":0.113035,"NCL":0.1506280000000011,"NER":0.005060000000000009,"NGA":0.11566199999999993,"NIC":0.047329000000000065,"NIU":0,"NLD":0.15448799999999885,"NOR":0.516748999999999,"NPL":0.06848400000000004,"NRU":0,"NZL":0.4936720000000001,"OMN":1.4727310000000013,"PAK":0.06998499999999996,"PAN":0.18294500000000014,"PER":0.14677399999999996,"PHL":0.0943029999999998,"PLW":0,"PNG":0.01980000000000004,"POL":0.41224299999999836,"PRI":0,"PRK":0.10636899999999994,"PRT":0.40783599999999964,"PRY":0.055825000000000014,"PSE":0.0004170000000000007,"PYF":0,"QAT":1.6055610000000016,"REU":0,"ROU":0.2642599999999997,"RUS":0.49898999999999916,"RWA":0.010664999999999994,"SAU":0.9804619999999993,"SDN":0.05795100000000003,"SEN":0.13525500000000001,"SGP":0,"SHN":0,"SLB":0,"SLE":0,"SLV":0.05458100000000021,"SOM":0,"SPM":0,"SRB":0.10098500000000055,"SSD":0,"STP":0,"SUR":0.013562000000000296,"SVK":0.406917,"SVN":0.2759039999999997,"SWE":0.27911600000000014,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.08414799999999989,"TCA":0,"TCD":0.04092600000000002,"TGO":0.10699299999999998,"THA":0.336538,"TJK":0.07622799999999996,"TKM":0.7898800000000001,"TLS":0.065826,"TON":0,"TTO":0.4310360000000024,"TUN":0.36529299999999987,"TUR":0.5427609999999996,"TUV":0,"TWN":0.30336600000000047,"TZA":0.028996999999999995,"UGA":0.009625999999999996,"UKR":0.19869700000000012,"URY":0.08570699999999998,"USA":0.3748060000000013,"UZB":0.1695869999999995,"VCT":0,"VEN":0.641095,"VGB":0,"VNM":0.4135270000000002,"VUT":0,"WLF":0,"WSM":0,"YEM":0.03833799999999998,"ZAF":0.10160599999999942,"ZMB":0.046219000000000066,"ZWE":0.03190499999999996},"2017":{"ABW":0,"AFG":0.0012559999999999794,"AGO":0.2694779999999999,"AIA":0,"ALB":0.3619729999999999,"AND":0,"ARE":0.8503369999999997,"ARG":0.12080199999999941,"ARM":0.07204600000000028,"ATG":0,"AUS":0.8856919999999988,"AUT":0.3465409999999993,"AZE":0.12047200000000036,"BDI":0.001561999999999994,"BEL":0.3913039999999981,"BEN":0.018357999999999985,"BES":0,"BFA":0.035163,"BGD":0.007462000000000024,"BGR":0.47323000000000004,"BHR":0.5270759999999974,"BHS":-0.000001000000000139778,"BIH":0.1011760000000006,"BLR":0.34883299999999995,"BLZ":0,"BMU":0,"BOL":0.12885900000000028,"BRA":0.20612400000000042,"BRB":0.3446279999999997,"BRN":1.3009119999999967,"BTN":0.4517039999999999,"BWA":0.002420000000000311,"CAF":0,"CAN":0.6530609999999992,"CHE":0.23267799999999994,"CHL":0.05028800000000011,"CHN":0.6600439999999992,"CIV":0.005697000000000063,"CMR":0.12171700000000002,"COD":0.004137999999999999,"COG":0.4788629999999999,"COK":0,"COL":0.12960200000000022,"COM":0,"CPV":0,"CRI":0.139737,"CUB":0.057468000000000075,"CUW":0,"CYP":0.77691,"CZE":0.34039700000000117,"DEU":0.2936230000000002,"DJI":0.059601000000000015,"DMA":0,"DNK":0.3164859999999994,"DOM":0.19130800000000026,"DZA":0.6795929999999997,"ECU":0.2546750000000002,"EGY":0.25700499999999993,"ERI":0.023955000000000004,"ESP":0.35009400000000035,"EST":0.29676800000000014,"ETH":0.032258999999999996,"FIN":0.26828300000000027,"FJI":0,"FRA":0.20074600000000054,"FRO":0,"FSM":0,"GAB":1.3871000000000002,"GBR":0.17695300000000014,"GEO":0.2082139999999999,"GHA":0.07062299999999999,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":0.39597200000000043,"GRC":0.3978989999999998,"GRD":0,"GRL":0,"GTM":0.08844999999999992,"GUF":0,"GUY":0.20665099999999992,"HKG":0.08080700000000007,"HND":0.09452499999999997,"HRV":0.41696700000000053,"HTI":0.0071370000000000045,"HUN":0.15413299999999985,"IDN":0.12609699999999968,"IND":0.09147199999999978,"IRL":0.49820500000000045,"IRN":0.6168889999999996,"IRQ":0.9612360000000004,"ISL":0.43571399999999905,"ISR":0.2391899999999998,"ITA":0.21931800000000035,"JAM":0.12805500000000025,"JOR":0.16000799999999993,"JPN":0.2789850000000005,"KAZ":1.3618620000000021,"KEN":0.049321000000000004,"KGZ":0.09596800000000005,"KHM":0.14532500000000004,"KIR":0,"KNA":0,"KOR":0.7104130000000008,"KSV":0.18831299999999995,"KWT":0.6483449999999991,"LAO":0.21474799999999972,"LBN":0.3706240000000003,"LBR":0.023024000000000017,"LBY":1.4254079999999991,"LCA":0,"LIE":0.000009999999999621423,"LKA":0.05001999999999995,"LSO":2.220446049250313e-16,"LTU":0.2508430000000006,"LUX":0.750595999999998,"LVA":0.24129500000000004,"MAC":-0.000001000000000139778,"MAR":0.1525620000000001,"MDA":0.16913,"MDG":0.0029619999999999924,"MDV":0,"MEX":0.22794000000000025,"MHL":0,"MKD":0.166547,"MLI":0.013443999999999984,"MLT":0.000608000000000164,"MMR":0.04129100000000002,"MNE":-0.000001000000000139778,"MNG":0.09871299999999827,"MOZ":0.032657999999999965,"MRT":0.017954999999999943,"MSR":0,"MTQ":0,"MUS":-4.440892098500626e-16,"MWI":0.004572999999999994,"MYS":0.5596329999999989,"MYT":0,"NAM":0.17153200000000002,"NCL":0.1395740000000032,"NER":0.004302,"NGA":0.11233999999999994,"NIC":0.04666199999999998,"NIU":0,"NLD":0.1626460000000005,"NOR":0.45458099999999924,"NPL":0.08124199999999998,"NRU":0,"NZL":0.4507600000000007,"OMN":1.4011700000000005,"PAK":0.07132799999999995,"PAN":0.18172400000000044,"PER":0.141359,"PHL":0.09556399999999976,"PLW":0,"PNG":0.010342000000000073,"POL":0.4261009999999992,"PRI":0,"PRK":0.10225099999999987,"PRT":0.4414600000000002,"PRY":0.06351200000000001,"PSE":0,"PYF":0,"QAT":1.4898840000000035,"REU":0,"ROU":0.2736919999999996,"RUS":0.5410509999999995,"RWA":0.011593000000000006,"SAU":0.8291289999999982,"SDN":0.05593999999999999,"SEN":0.1336060000000001,"SGP":0.000001000000000139778,"SHN":0,"SLB":0,"SLE":0,"SLV":0.05567899999999992,"SOM":0,"SPM":0,"SRB":0.10611999999999977,"SSD":0,"STP":0,"SUR":0.02636900000000031,"SVK":0.4232899999999997,"SVN":0.3102669999999996,"SWE":0.28946700000000014,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.1569189999999998,"TCA":0,"TCD":0.03809600000000002,"TGO":0.09728399999999998,"THA":0.3256580000000002,"TJK":0.170663,"TKM":0.7547730000000001,"TLS":0.06778499999999998,"TON":0,"TTO":0.42567900000000236,"TUN":0.316198,"TUR":0.5680059999999996,"TUV":0,"TWN":0.26649300000000054,"TZA":0.028924000000000005,"UGA":0.009359000000000006,"UKR":0.19041599999999992,"URY":0.09413700000000014,"USA":0.3863379999999985,"UZB":0.1647069999999995,"VCT":0,"VEN":0.5002079999999998,"VGB":0,"VNM":0.474008,"VUT":0,"WLF":0,"WSM":0,"YEM":0.04781099999999994,"ZAF":0.09730000000000061,"ZMB":0.049505999999999994,"ZWE":0.03178500000000006},"2018":{"ABW":0,"AFG":0.0015500000000000513,"AGO":0.201368,"AIA":0,"ALB":0.35821499999999995,"AND":0,"ARE":0.8016190000000023,"ARG":0.12895800000000035,"ARM":0.11109499999999994,"ATG":0,"AUS":0.9514390000000006,"AUT":0.3571489999999997,"AZE":0.1431420000000001,"BDI":0.003372,"BEL":0.4100490000000008,"BEN":0.03285300000000002,"BES":0,"BFA":0.03762300000000002,"BGD":0.008256000000000041,"BGR":0.44819300000000073,"BHR":0.47164100000000175,"BHS":-9.999999992515995e-7,"BIH":0.11192399999999925,"BLR":0.3303709999999995,"BLZ":0,"BMU":0,"BOL":0.13206300000000004,"BRA":0.2057380000000002,"BRB":0.31799900000000036,"BRN":0.9485419999999998,"BTN":0.4711970000000001,"BWA":0.00015900000000002024,"CAF":0,"CAN":0.6650100000000005,"CHE":0.2278520000000004,"CHL":0.04657,"CHN":0.6786089999999998,"CIV":0.00381999999999999,"CMR":0.12338699999999997,"COD":0.0046630000000000005,"COG":0.5967700000000001,"COK":0,"COL":0.12879200000000002,"COM":0,"CPV":0,"CRI":0.14612899999999995,"CUB":0.06553200000000015,"CUW":0,"CYP":0.7123520000000001,"CZE":0.3579220000000003,"DEU":0.289060000000001,"DJI":0.065975,"DMA":0,"DNK":0.31129099999999976,"DOM":0.1955429999999998,"DZA":0.6862599999999999,"ECU":0.22934399999999977,"EGY":0.2435489999999998,"ERI":0.03149100000000002,"ESP":0.3537379999999999,"EST":0.2891849999999998,"ETH":0.032498,"FIN":0.24687600000000032,"FJI":0,"FRA":0.20920999999999967,"FRO":0,"FSM":0,"GAB":1.245927,"GBR":0.17878300000000014,"GEO":0.20040000000000013,"GHA":0.07400200000000001,"GIN":0,"GLP":9.999999992515995e-7,"GMB":0,"GNB":0,"GNQ":0.4118980000000003,"GRC":0.37792899999999907,"GRD":0,"GRL":0,"GTM":0.08765699999999987,"GUF":0,"GUY":0.20581499999999986,"HKG":0.0836509999999997,"HND":0.08510699999999993,"HRV":0.39602899999999996,"HTI":0.0070410000000000195,"HUN":0.16473700000000058,"IDN":0.13022299999999998,"IND":0.10332700000000017,"IRL":0.5286600000000012,"IRN":0.6018650000000001,"IRQ":0.9433660000000001,"ISL":0.4548629999999978,"ISR":0.21001099999999973,"ITA":0.22062599999999932,"JAM":0.11336100000000027,"JOR":0.15626900000000044,"JPN":0.2770849999999996,"KAZ":1.2683140000000002,"KEN":0.04677399999999998,"KGZ":0.12111000000000005,"KHM":0.206897,"KIR":0,"KNA":0,"KOR":0.6775850000000023,"KSV":0.19499000000000066,"KWT":0.646059000000001,"LAO":0.2578100000000001,"LBN":0.3512219999999999,"LBR":0.02488499999999999,"LBY":1.6280400000000004,"LCA":0,"LIE":0.000008999999999925734,"LKA":0.050238000000000005,"LSO":2.220446049250313e-16,"LTU":0.2797300000000007,"LUX":0.735316000000001,"LVA":0.3079139999999998,"MAC":0,"MAR":0.15543700000000005,"MDA":0.18916100000000013,"MDG":0.003031000000000006,"MDV":0,"MEX":0.22758900000000004,"MHL":0,"MKD":0.1699839999999999,"MLI":0.013413000000000008,"MLT":0.00041599999999997195,"MMR":0.04796,"MNE":0,"MNG":0.1317889999999995,"MOZ":0.032050999999999996,"MRT":0,"MSR":0,"MTQ":0,"MUS":0,"MWI":0.0048940000000000095,"MYS":0.4872879999999995,"MYT":0,"NAM":0.2010209999999999,"NCL":0.11520200000000003,"NER":0.003613000000000005,"NGA":0.11245900000000003,"NIC":0.040112000000000037,"NIU":0,"NLD":0.1520690000000009,"NOR":0.4438739999999992,"NPL":0.12048100000000006,"NRU":0,"NZL":0.4180060000000001,"OMN":1.4134729999999998,"PAK":0.07352700000000001,"PAN":0.15543600000000035,"PER":0.139772,"PHL":0.10237300000000005,"PLW":0,"PNG":0.009463,"POL":0.44981399999999994,"PRI":0,"PRK":0.08680699999999986,"PRT":0.4111539999999998,"PRY":0.0626460000000002,"PSE":0.0004769999999999497,"PYF":0,"QAT":1.283573000000004,"REU":0,"ROU":0.289679,"RUS":0.5981999999999985,"RWA":0.011604000000000003,"SAU":0.8416239999999995,"SDN":0.05333300000000002,"SEN":0.13464600000000004,"SGP":0,"SHN":0,"SLB":0,"SLE":0,"SLV":0.06732799999999983,"SOM":0,"SPM":0,"SRB":0.11689500000000042,"SSD":0,"STP":0,"SUR":0.019924000000000053,"SVK":0.4229099999999999,"SVN":0.32665399999999956,"SWE":0.2934219999999996,"SWZ":0.0000010000000000287557,"SXM":0,"SYC":0,"SYR":0.10812200000000005,"TCA":0,"TCD":0.035384,"TGO":0.097712,"THA":0.3244729999999998,"TJK":0.205797,"TKM":0.7009960000000017,"TLS":0.10743600000000003,"TON":0,"TTO":0.41278099999999895,"TUN":0.30794800000000055,"TUR":0.5600969999999998,"TUV":0,"TWN":0.2722939999999987,"TZA":0.03007800000000002,"UGA":0.007925000000000015,"UKR":0.20078200000000024,"URY":0.09343000000000012,"USA":0.41082700000000116,"UZB":0.1621520000000003,"VCT":0,"VEN":0.590255,"VGB":0,"VNM":0.5378790000000002,"VUT":0,"WLF":0,"WSM":0,"YEM":0.05148600000000003,"ZAF":0.09632500000000022,"ZMB":0.059767000000000015,"ZWE":0.037071000000000076},"2019":{"ABW":0,"AFG":0.0010140000000000149,"AGO":0.16983899999999996,"AIA":0,"ALB":0.3662829999999999,"AND":0,"ARE":0.7991880000000009,"ARG":0.1321150000000002,"ARM":0.12093200000000026,"ATG":0,"AUS":1.0690029999999986,"AUT":0.34358299999999886,"AZE":0.14807399999999982,"BDI":0.002446999999999998,"BEL":0.41683800000000026,"BEN":0.03154000000000001,"BES":0,"BFA":0.040688,"BGD":0.009066000000000018,"BGR":0.44696800000000003,"BHR":0.6261070000000011,"BHS":-8.881784197001252e-16,"BIH":0.10868400000000022,"BLR":0.3385770000000008,"BLZ":0,"BMU":0,"BOL":0.1352049999999998,"BRA":0.2066349999999999,"BRB":0.31725199999999987,"BRN":1.3158119999999975,"BTN":0.5917160000000001,"BWA":0,"CAF":0,"CAN":0.6689319999999981,"CHE":0.22543999999999986,"CHL":0.045763,"CHN":0.7088849999999995,"CIV":0.003544000000000047,"CMR":0.12123899999999999,"COD":0.005016999999999997,"COG":0.6160300000000001,"COK":0,"COL":0.13031400000000004,"COM":0,"CPV":0,"CRI":0.1448710000000002,"CUB":0.05868500000000032,"CUW":0,"CYP":0.662731,"CZE":0.35271900000000045,"DEU":0.28472099999999934,"DJI":0.07215899999999997,"DMA":0,"DNK":0.28496000000000077,"DOM":0.19950899999999994,"DZA":0.6556959999999998,"ECU":0.2421650000000004,"EGY":0.22754499999999966,"ERI":0.03101000000000001,"ESP":0.33372500000000027,"EST":0.28237299999999976,"ETH":0.03429400000000002,"FIN":0.22361699999999995,"FJI":0,"FRA":0.20245300000000022,"FRO":0,"FSM":0,"GAB":1.314953,"GBR":0.17856300000000047,"GEO":0.2802279999999997,"GHA":0.08189999999999997,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":0.3440340000000002,"GRC":0.37265999999999977,"GRD":0,"GRL":0,"GTM":0.08747700000000003,"GUF":0,"GUY":0.2024029999999999,"HKG":0.08145300000000066,"HND":0.07856400000000008,"HRV":0.3908079999999998,"HTI":0.0069470000000000365,"HUN":0.17560300000000062,"IDN":0.1258969999999997,"IND":0.10564400000000007,"IRL":0.4905729999999995,"IRN":0.5412879999999998,"IRQ":0.9363420000000002,"ISL":0.470403000000001,"ISR":0.16548799999999897,"ITA":0.22939100000000057,"JAM":0.11881900000000023,"JOR":0.16493400000000014,"JPN":0.2677030000000009,"KAZ":1.1689940000000014,"KEN":0.045381000000000005,"KGZ":0.12376100000000001,"KHM":0.3285600000000002,"KIR":0,"KNA":0,"KOR":0.6777969999999982,"KSV":0.18889099999999992,"KWT":0.5846920000000004,"LAO":0.28414399999999995,"LBN":0.369015000000001,"LBR":0.026427000000000006,"LBY":1.7141959999999994,"LCA":0,"LIE":0.000010000000000065512,"LKA":0.06980199999999992,"LSO":0,"LTU":0.2978519999999998,"LUX":0.7635179999999995,"LVA":0.3211339999999998,"MAC":-2.220446049250313e-16,"MAR":0.137737,"MDA":0.204615,"MDG":0.003237999999999991,"MDV":0,"MEX":0.22326800000000002,"MHL":0,"MKD":0.1663730000000001,"MLI":0.018839999999999996,"MLT":0.00036300000000011323,"MMR":0.0562109999999999,"MNE":4.440892098500626e-16,"MNG":0.150741,"MOZ":0.03345799999999999,"MRT":0,"MSR":0,"MTQ":0,"MUS":0,"MWI":0.004991000000000009,"MYS":0.4475030000000011,"MYT":0,"NAM":0.21253199999999994,"NCL":0.10296699999999959,"NER":0.006688000000000013,"NGA":0.1148300000000001,"NIC":0.03490599999999999,"NIU":0,"NLD":0.12963700000000067,"NOR":0.41901400000000066,"NPL":0.130502,"NRU":0,"NZL":0.39993500000000015,"OMN":1.4053909999999998,"PAK":0.07120499999999996,"PAN":0.13464700000000018,"PER":0.14190799999999992,"PHL":0.10719699999999999,"PLW":0,"PNG":0.006722000000000006,"POL":0.4391330000000009,"PRI":0,"PRK":0.08303299999999991,"PRT":0.4148040000000002,"PRY":0.061814000000000036,"PSE":0.00015699999999996272,"PYF":0,"QAT":1.1773749999999978,"REU":0,"ROU":0.3004229999999999,"RUS":0.6842079999999999,"RWA":0.012746000000000007,"SAU":0.7969459999999984,"SDN":0.04807800000000001,"SEN":0.167099,"SGP":0.0000010000000010279564,"SHN":0,"SLB":0,"SLE":0,"SLV":0.07284199999999985,"SOM":0,"SPM":0,"SRB":0.1295869999999999,"SSD":0,"STP":0,"SUR":0.019706000000000223,"SVK":0.4233180000000001,"SVN":0.33513000000000037,"SWE":0.23446000000000033,"SWZ":-1.1102230246251565e-16,"SXM":0,"SYC":0,"SYR":0.12537500000000024,"TCA":0,"TCD":0.029908000000000004,"TGO":0.10214800000000002,"THA":0.32108200000000053,"TJK":0.2199310000000001,"TKM":0.6576540000000008,"TLS":0.06295300000000004,"TON":0,"TTO":0.40183000000000035,"TUN":0.30597200000000013,"TUR":0.46413500000000063,"TUV":0,"TWN":0.27479499999999923,"TZA":0.042159,"UGA":0.013545000000000001,"UKR":0.20339800000000086,"URY":0.08476700000000004,"USA":0.4653919999999996,"UZB":0.17743699999999984,"VCT":0,"VEN":0.6803989999999995,"VGB":0,"VNM":0.5671840000000001,"VUT":0,"WLF":0,"WSM":0,"YEM":0.06360999999999994,"ZAF":0.09459399999999984,"ZMB":0.05228299999999997,"ZWE":0.037096999999999936},"2020":{"ABW":0,"AFG":0.001556999999999975,"AGO":0.138579,"AIA":0,"ALB":0.36568500000000004,"AND":0,"ARE":0.7926810000000017,"ARG":0.12201400000000051,"ARM":0.1215790000000001,"ATG":0,"AUS":0.9283630000000009,"AUT":0.34287699999999965,"AZE":0.1313089999999999,"BDI":0.002378999999999999,"BEL":0.377275,"BEN":0.03065999999999991,"BES":0,"BFA":0.03960900000000003,"BGD":0.008971000000000062,"BGR":0.4107030000000007,"BHR":0.716550999999999,"BHS":0,"BIH":0.11007000000000033,"BLR":0.34063799999999933,"BLZ":0.0036649999999998073,"BMU":0,"BOL":0.11349200000000015,"BRA":0.2155269999999998,"BRB":0.31667299999999976,"BRN":0.6470030000000015,"BTN":0.5878510000000001,"BWA":0,"CAF":0,"CAN":0.6527270000000005,"CHE":0.21625900000000042,"CHL":0.044203000000000436,"CHN":0.7262749999999993,"CIV":0.0033150000000000124,"CMR":0.10778399999999996,"COD":0.004858000000000001,"COG":0.6394029999999999,"COK":0,"COL":0.11337799999999998,"COM":0,"CPV":0,"CRI":0.14378000000000002,"CUB":0.058433999999999875,"CUW":0,"CYP":0.7289889999999994,"CZE":0.3273140000000012,"DEU":0.2761490000000002,"DJI":0.07108999999999999,"DMA":0,"DNK":0.301419000000001,"DOM":0.1973720000000001,"DZA":0.657225,"ECU":0.25133499999999986,"EGY":0.21003399999999983,"ERI":0.030512999999999985,"ESP":0.3047740000000001,"EST":0.06474300000000088,"ETH":0.03339600000000001,"FIN":0.22132500000000022,"FJI":0,"FRA":0.1816399999999998,"FRO":0,"FSM":0,"GAB":1.295015,"GBR":0.14990799999999993,"GEO":0.28186500000000025,"GHA":0.09276600000000002,"GIN":0,"GLP":0,"GMB":0,"GNB":0,"GNQ":0.5093159999999997,"GRC":0.3203529999999999,"GRD":0,"GRL":0,"GTM":0.08601600000000009,"GUF":0,"GUY":0.8652989999999998,"HKG":0.08139899999999933,"HND":0.07729999999999992,"HRV":0.4038240000000002,"HTI":0.006857000000000002,"HUN":0.16160000000000085,"IDN":0.11670999999999987,"IND":0.09002799999999977,"IRL":0.4664230000000007,"IRN":0.5588280000000001,"IRQ":0.8906099999999997,"ISL":0.49379600000000146,"ISR":0.16266300000000022,"ITA":0.20040800000000036,"JAM":0.13486100000000034,"JOR":0.1614270000000002,"JPN":0.25865199999999966,"KAZ":1.3234030000000008,"KEN":0.05521100000000001,"KGZ":0.12181100000000011,"KHM":0.3247709999999999,"KIR":0,"KNA":0,"KOR":0.6374499999999994,"KSV":0.19079900000000016,"KWT":0.5989250000000013,"LAO":0.27997600000000045,"LBN":0.37676900000000035,"LBR":0.025895999999999975,"LBY":0.9435029999999998,"LCA":0,"LIE":0.000006000000000394579,"LKA":0.06959099999999996,"LSO":-0.0000010000000000287557,"LTU":0.2723519999999997,"LUX":0.7113170000000011,"LVA":0.32811199999999996,"MAC":0,"MAR":0.13629499999999983,"MDA":0.2062489999999999,"MDG":0.003158000000000022,"MDV":0,"MEX":0.24994299999999958,"MHL":0,"MKD":0.1666190000000003,"MLI":0.018256999999999995,"MLT":0.0003700000000002035,"MMR":0.05589400000000011,"MNE":0,"MNG":0.14795999999999943,"MOZ":0.032448000000000005,"MRT":0,"MSR":0,"MTQ":0,"MUS":-4.440892098500626e-16,"MWI":0.004860000000000003,"MYS":0.5390319999999997,"MYT":0,"NAM":0.20890699999999995,"NCL":0.10259800000000041,"NER":0.007015000000000007,"NGA":0.106962,"NIC":0.03443099999999999,"NIU":0,"NLD":0.1165560000000001,"NOR":0.3886729999999998,"NPL":0.128208,"NRU":0,"NZL":0.3418329999999994,"OMN":1.4237559999999991,"PAK":0.07966200000000012,"PAN":0.1327060000000002,"PER":0.14117899999999994,"PHL":0.10538899999999995,"PLW":0,"PNG":0.01053599999999999,"POL":0.4421900000000001,"PRI":0,"PRK":0.08394100000000027,"PRT":0.4040539999999999,"PRY":0.0609869999999999,"PSE":0,"PYF":0,"QAT":1.255601999999996,"REU":-0.000001000000000139778,"ROU":0.28624399999999994,"RUS":0.6582179999999997,"RWA":0.012443999999999997,"SAU":0.8292169999999999,"SDN":0.04521999999999998,"SEN":0.16267200000000004,"SGP":-9.999999992515995e-7,"SHN":0,"SLB":0,"SLE":0,"SLV":0.07269800000000004,"SOM":0,"SPM":0,"SRB":0.13040399999999863,"SSD":0,"STP":0,"SUR":0.01948699999999981,"SVK":0.41057000000000077,"SVN":0.33275599999999983,"SWE":0.21688299999999971,"SWZ":0,"SXM":0,"SYC":0,"SYR":0.12547500000000023,"TCA":0,"TCD":0.026687000000000002,"TGO":0.09973400000000002,"THA":0.31523900000000005,"TJK":0.215179,"TKM":0.7450960000000002,"TLS":0.062007000000000034,"TON":0,"TTO":0.4208210000000001,"TUN":0.30112399999999995,"TUR":0.5622429999999996,"TUV":0,"TWN":0.2891390000000005,"TZA":0.040908,"UGA":0.013101000000000002,"UKR":0.20733299999999932,"URY":0.08474899999999996,"USA":0.39799700000000016,"UZB":0.17045099999999946,"VCT":0,"VEN":0.6290270000000002,"VGB":0,"VNM":0.5620600000000002,"VUT":0,"WLF":0,"WSM":0,"YEM":0.07134000000000007,"ZAF":0.08716999999999953,"ZMB":0.05077100000000001,"ZWE":0.03635199999999994},"2021":{"ABW":0,"AFG":0.00030600000000002847,"AGO":0.13070100000000007,"AIA":0,"ALB":0.3671749999999998,"AND":0,"ARE":0.7860900000000015,"ARG":0.15450600000000048,"ARM":0.12221600000000032,"ATG":0,"AUS":0.9193719999999992,"AUT":0.34232700000000005,"AZE":0.13083400000000012,"BDI":0.0023149999999999976,"BEL":0.375659999999999,"BEN":0.02982600000000013,"BES":0,"BFA":0.038572999999999996,"BGD":0.008991000000000082,"BGR":0.4162680000000005,"BHR":0.5944740000000017,"BHS":-0.000001000000000139778,"BIH":0.11166799999999988,"BLR":0.3426140000000002,"BLZ":0.011983999999999995,"BMU":0,"BOL":0.122614,"BRA":0.2225109999999999,"BRB":0.3161010000000002,"BRN":0.9102560000000004,"BTN":0.5840859999999999,"BWA":4.440892098500626e-16,"CAF":0,"CAN":0.6481709999999996,"CHE":0.21494500000000016,"CHL":0.042936000000000085,"CHN":0.7217779999999996,"CIV":0.0010339999999999794,"CMR":0.09670999999999999,"COD":0.004704,"COG":0.538837,"COK":0,"COL":0.12590800000000013,"COM":0,"CPV":0,"CRI":0.14291900000000002,"CUB":0.0627129999999998,"CUW":0,"CYP":0.7250920000000001,"CZE":0.32794299999999943,"DEU":0.2739279999999997,"DJI":0.07009900000000002,"DMA":0,"DNK":0.2999470000000013,"DOM":0.19527300000000025,"DZA":0.5967010000000004,"ECU":0.26939,"EGY":0.18369300000000033,"ERI":0.029969999999999997,"ESP":0.31276800000000016,"EST":0.06477999999999895,"ETH":0.03253600000000001,"FIN":0.22016800000000014,"FJI":0,"FRA":0.18222700000000014,"FRO":0,"FSM":0,"GAB":1.164146,"GBR":0.1502459999999992,"GEO":0.281803,"GHA":0.10500600000000004,"GIN":0,"GLP":-0.0000010000000010279564,"GMB":0,"GNB":0,"GNQ":0.29289299999999985,"GRC":0.3224040000000006,"GRD":0,"GRL":0,"GTM":0.08370900000000003,"GUF":0,"GUY":0.508025,"HKG":0.08147000000000038,"HND":0.07612199999999991,"HRV":0.40747699999999965,"HTI":0.006774000000000002,"HUN":0.1622780000000006,"IDN":0.11611599999999989,"IND":0.1078269999999999,"IRL":0.4626429999999999,"IRN":0.6277410000000003,"IRQ":0.8890510000000003,"ISL":0.4889069999999993,"ISR":0.16019000000000005,"ITA":0.2012880000000008,"JAM":0.14224799999999993,"JOR":0.15829800000000027,"JPN":0.25433600000000034,"KAZ":1.308428000000001,"KEN":0.06760500000000003,"KGZ":0.11988999999999983,"KHM":0.322438,"KIR":0,"KNA":0,"KOR":0.6539190000000001,"KSV":0.1917979999999999,"KWT":0.6071569999999973,"LAO":0.275992,"LBN":0.38150499999999976,"LBR":0.025368,"LBY":1.9159900000000007,"LCA":0,"LIE":0.000007000000000090267,"LKA":0.06940599999999997,"LSO":0.000001000000000139778,"LTU":0.2756369999999997,"LUX":0.70139,"LVA":0.332163,"MAC":-9.999999999177334e-7,"MAR":0.1348689999999999,"MDA":0.20782200000000017,"MDG":0.0030820000000000014,"MDV":0,"MEX":0.272888,"MHL":0,"MKD":0.16723100000000013,"MLI":0.01769000000000001,"MLT":0.00036300000000011323,"MMR":0.055352999999999986,"MNE":4.440892098500626e-16,"MNG":0.1455479999999998,"MOZ":0.03152799999999997,"MRT":0,"MSR":0,"MTQ":0,"MUS":-0.000001000000000139778,"MWI":0.004734000000000002,"MYS":0.5107850000000003,"MYT":0,"NAM":0.2055180000000001,"NCL":0.10209800000000158,"NER":0.007679000000000005,"NGA":0.0994179999999999,"NIC":0.03395499999999996,"NIU":0,"NLD":0.11569000000000074,"NOR":0.47938600000000076,"NPL":0.12527699999999997,"NRU":0,"NZL":0.3372609999999998,"OMN":1.4309769999999986,"PAK":0.08237899999999987,"PAN":0.1309720000000003,"PER":0.138436,"PHL":0.10394599999999987,"PLW":0,"PNG":0.012436000000000003,"POL":0.43850899999999804,"PRI":0,"PRK":0.09550599999999987,"PRT":0.40437099999999937,"PRY":0.06021199999999993,"PSE":0,"PYF":0,"QAT":1.2881609999999952,"REU":0,"ROU":0.28792300000000015,"RUS":0.669788999999998,"RWA":0.01215200000000001,"SAU":0.9066200000000002,"SDN":0.04405399999999998,"SEN":0.15842500000000004,"SGP":0,"SHN":0,"SLB":0,"SLE":0,"SLV":0.0724499999999999,"SOM":0,"SPM":0,"SRB":0.1314390000000003,"SSD":0,"STP":0,"SUR":0.019298000000000037,"SVK":0.4112520000000002,"SVN":0.3324769999999999,"SWE":0.21484999999999976,"SWZ":-0.0000010000000000287557,"SXM":0,"SYC":0,"SYR":0.127791,"TCA":0,"TCD":0.02905500000000001,"TGO":0.09740199999999999,"THA":0.303172,"TJK":0.21061399999999997,"TKM":0.586886999999999,"TLS":0.061022999999999994,"TON":0,"TTO":0.35492900000000205,"TUN":0.30459000000000014,"TUR":0.6002510000000001,"TUV":0,"TWN":0.29244800000000204,"TZA":0.03969500000000001,"UGA":0.012687000000000004,"UKR":0.21819799999999923,"URY":0.0848199999999999,"USA":0.3982790000000005,"UZB":0.16315400000000002,"VCT":0,"VEN":0.6088480000000005,"VGB":0,"VNM":0.5663620000000003,"VUT":0,"WLF":0,"WSM":0,"YEM":0.07372499999999998,"ZAF":0.08626299999999976,"ZMB":0.049350000000000005,"ZWE":0.03561499999999995}},"Accumulative":{"1970":{"ABW":928761,"AFG":1670397,"AGO":3577917,"AIA":0,"ALB":3739486,"AND":0,"ARE":15234912,"ARG":82648000,"ARM":5180804,"ATA":0,"ATG":461664,"AUS":147861020,"AUT":50631700,"AZE":31105304,"BDI":62288,"BEL":125490456,"BEN":282128,"BES":187352,"BFA":142896,"BGD":3803195,"BGR":61173972,"BHR":2590448,"BHS":2568770,"BIH":10905834,"BLR":65798090,"BLZ":120912,"BMU":227168,"BOL":2483717,"BRA":93488200,"BRB":428688,"BRN":8203696.5,"BTN":3664,"BWA":0,"CAF":208848,"CAN":341177200,"CHE":40244320,"CHL":24635802,"CHN":807952640,"CIV":2242368,"CMR":637417,"COD":2709666,"COG":571584,"COK":10992,"COL":28370052,"COM":29312,"CPV":36581,"CRI":1248681,"CUB":18654088,"CUW":13978085,"CXR":69616,"CYP":1702690,"CZE":154419700,"DEU":1026022340,"DJI":139232,"DMA":25648,"DNK":62039320,"DOM":3105081,"DZA":15058960,"ECU":4278215,"EGY":21654010,"ERI":0,"ESP":116766490,"EST":23870596,"ETH":1651721,"FIN":40355044,"FJI":520050,"FRA":460424580,"FRO":256480.02,"FSM":0,"GAB":2081152,"GBR":652577400,"GEO":9639578,"GHA":2621641,"GIN":791424,"GMB":47632,"GNB":69616,"GNQ":36640,"GRC":24126176,"GRD":43968,"GRL":381056,"GTM":2296437,"GUY":1579184,"HKG":8392500,"HND":1388032,"HRV":11796174,"HTI":384482,"HUN":69934550,"IDN":35791384,"IND":181722640,"IRL":19393740,"IRN":91787460,"IRQ":23883784,"ISL":1388300,"ISR":16559357,"ITA":296364540,"JAM":4988584,"JOR":1555684,"JPN":767963140,"KAZ":157081230,"KEN":3078215,"KGZ":13578134,"KHM":1172331,"KIR":21984,"KNA":0,"KOR":53716350,"KWT":25021456,"LAO":571584,"LBN":3940725,"LBR":1450587,"LBY":32305104,"LCA":65952,"LIE":111005,"LKA":3593077,"LSO":0,"LTU":24328818,"LUX":13735355,"LVA":15644642,"MAC":205184,"MAR":7282020,"MDA":24593414,"MDG":970663,"MDV":0,"MEX":113950680,"MHL":0,"MKD":6067497,"MLI":201520,"MLT":663184,"MMR":4612293,"MNE":1076106,"MNG":2846542,"MOZ":2980891,"MRT":428688,"MSR":14656,"MUS":498304,"MWI":454069,"MYS":14585889,"NAM":0,"NCL":2392592,"NER":216057,"NGA":21519958,"NIC":1402807,"NIU":3664,"NLD":141803300,"NOR":27978744,"NPL":227168,"NRU":65952,"NZL":14179986,"OMN":234496,"OWID_KOS":0,"PAK":20504408,"PAN":2201083,"PER":17765824,"PHL":24751418,"PLW":135568,"PNG":692496,"POL":304143400,"PRK":73476320,"PRT":15236482,"PRY":743435,"PSE":0,"PYF":194192,"QAT":7561456,"ROU":119981480,"RUS":1440532200,"RWA":58624,"SAU":45251332,"SDN":4446688,"SEN":1307067,"SGP":17832688,"SHN":0,"SLB":40304,"SLE":857376,"SLV":1428306,"SOM":216176,"SPM":36640,"SRB":31721422,"SSD":403983,"STP":14656,"SUR":1608496,"SVK":49345176,"SVN":9001363,"SWE":92287020,"SWZ":366400,"SXM":1547690,"SYC":29312,"SYR":6649929,"TCA":0,"TCD":124576,"TGO":274800,"THA":15352543,"TJK":7702683,"TKM":19631972,"TLS":0,"TON":25648,"TTO":8990356,"TUN":3738743,"TUR":42579228,"TUV":0,"TWN":28734026,"TZA":1765365,"UGA":1442843,"UKR":456820030,"URY":5735803,"USA":4339686000,"UZB":60562076,"VCT":29312,"VEN":74489416,"VGB":18320,"VNM":28172980,"VUT":40304,"WLF":0,"WSM":29312,"YEM":2509840,"ZAF":149618180,"ZMB":3765879,"ZWE":8154132},"1971":{"ABW":808321,"AFG":1893554,"AGO":3405383,"AIA":0,"ALB":4348023,"AND":0,"ARE":21166928,"ARG":88847130,"ARM":5507856,"ATA":0,"ATG":425024,"AUS":151116060,"AUT":52069100,"AZE":33029782,"BDI":73280,"BEL":121370504,"BEN":293120,"BES":163056,"BFA":150224,"BGD":3605832,"BGR":64221556,"BHR":3037456,"BHS":6723746,"BIH":11753372,"BLR":69832370,"BLZ":142896,"BMU":230832,"BOL":3058935,"BRA":102337050,"BRB":483648,"BRN":7511200,"BTN":3664,"BWA":0,"CAF":183200,"CAN":352287420,"CHE":41888012,"CHL":27055770,"CHN":909209700,"CIV":2454880,"CMR":809179,"COD":2958670,"COG":685168,"COK":10992,"COL":30281416,"COM":29312,"CPV":36610,"CRI":1527026,"CUB":19588660,"CUW":12165427,"CXR":84272,"CYP":1883533,"CZE":161977440,"DEU":1037236800,"DJI":161216,"DMA":25648,"DNK":57000676,"DOM":3518697,"DZA":18649530,"ECU":4219443,"EGY":23012404,"ERI":0,"ESP":128458560,"EST":25334468,"ETH":1849458,"FIN":40536760,"FJI":549271,"FRA":493394880,"FRO":260144,"FSM":0,"GAB":2843264,"GBR":660388200,"GEO":10241044,"GHA":2278441,"GIN":813408,"GMB":54960,"GNB":73280,"GNQ":65952,"GRC":27749512,"GRD":47632,"GRL":468992,"GTM":2439303,"GUY":1498576,"HKG":9150591,"HND":1328811,"HRV":12706086,"HTI":402743,"HUN":69203580,"IDN":38955264,"IND":191963680,"IRL":22476182,"IRN":101627830,"IRQ":28831858,"ISL":1472206,"ISR":16218946,"ITA":311049180,"JAM":5747217,"JOR":1654434,"JPN":796544260,"KAZ":166560980,"KEN":3679252,"KGZ":14408229,"KHM":249090,"KIR":29312,"KNA":0,"KOR":58533736,"KWT":27117264,"LAO":421360,"LBN":5300639,"LBR":1523867,"LBY":21628296,"LCA":69616,"LIE":116204,"LKA":3193463,"LSO":0,"LTU":25869234,"LUX":13194012,"LVA":16609823,"MAC":227168,"MAR":8186280.5,"MDA":26105692,"MDG":1025624.06,"MDV":3664,"MEX":126186810,"MHL":0,"MKD":6528464,"MLI":227168,"MLT":659520,"MMR":5099486,"MNE":1159779,"MNG":3032441,"MOZ":3611010,"MRT":399376,"MSR":14656,"MUS":395712,"MWI":501672.03,"MYS":16662594,"NAM":0,"NCL":2418240,"NER":230371,"NGA":32251518,"NIC":1505429,"NIU":3664,"NLD":140666140,"NOR":27166050,"NPL":197856,"NRU":87936,"NZL":15049003,"OMN":2092144,"OWID_KOS":0,"PAK":19440704,"PAN":2600311,"PER":18590718,"PHL":27551672,"PLW":164880,"PNG":824400,"POL":312880800,"PRK":107453010,"PRT":16375692,"PRY":633465,"PSE":0,"PYF":227168,"QAT":9144304,"ROU":125660030,"RUS":1528699000,"RWA":62288,"SAU":59756656,"SDN":4564138,"SEN":1351035,"SGP":16275421,"SHN":0,"SLB":47632,"SLE":802416,"SLV":1508825,"SOM":186864,"SPM":47632,"SRB":34181644,"SSD":414662,"STP":10992,"SUR":1714544,"SVK":51764024,"SVN":9694695,"SWE":84508860,"SWZ":399376,"SXM":1346988,"SYC":32976,"SYR":8874187,"TCA":0,"TCD":150224,"TGO":315104,"THA":19202178,"TJK":8178735.5,"TKM":20862556,"TLS":0,"TON":18320,"TTO":8096400.5,"TUN":4208133,"TUR":47638156,"TUV":0,"TWN":31474938,"TZA":2461495,"UGA":1437743,"UKR":484737280,"URY":5801934,"USA":4365465000,"UZB":64423270,"VCT":29312,"VEN":62500184,"VGB":21984,"VNM":24503596,"VUT":58624,"WLF":0,"WSM":36640,"YEM":1971232,"ZAF":168403490,"ZMB":3786676,"ZWE":8732719},"1972":{"ABW":783783,"AFG":1530347,"AGO":4500532,"AIA":0,"ALB":5637977,"AND":0,"ARE":23434944,"ARG":90066640,"ARM":5802025,"ATA":0,"ATG":373728,"AUS":153598260,"AUT":56071172,"AZE":34768016,"BDI":73280,"BEL":130637680,"BEN":388384,"BES":158107,"BFA":161216,"BGD":3505921,"BGR":66078920,"BHR":3678656,"BHS":6481298,"BIH":11015797,"BLR":73492616,"BLZ":157552,"BMU":252815.98,"BOL":3568142,"BRA":114018824,"BRB":501968.03,"BRN":9453120,"BTN":3664,"BWA":21984,"CAF":168544,"CAN":380791680,"CHE":42915936,"CHL":28138992,"CHN":968645570,"CIV":2711360,"CMR":860357,"COD":3017204,"COG":663184,"COK":10992,"COL":31425178,"COM":29312,"CPV":51266,"CRI":1761314,"CUB":20777370,"CUW":11796125,"CXR":84272,"CYP":2405937,"CZE":163451040,"DEU":1041480960,"DJI":190528,"DMA":25648,"DNK":59575410,"DOM":4668866,"DZA":28322640,"ECU":4589031,"EGY":25474998,"ERI":0,"ESP":144716260,"EST":26662172,"ETH":1406203,"FIN":44106084,"FJI":578555,"FRA":513963550,"FRO":234496,"FSM":0,"GAB":2737008,"GBR":648026300,"GEO":10782319,"GHA":2399888,"GIN":831728,"GMB":65952,"GNB":65952,"GNQ":87936,"GRC":31477310,"GRD":47632,"GRL":553264,"GTM":2706626,"GUY":1560864,"HKG":9275585,"HND":1533102,"HRV":11892040,"HTI":391721,"HUN":69341580,"IDN":43306284,"IND":203035980,"IRL":22036418,"IRN":106015190,"IRQ":29520482,"ISL":1482832,"ISR":16890886,"ITA":328237470,"JAM":6282311,"JOR":1913598,"JPN":852170240,"KAZ":175133170,"KEN":3866229,"KGZ":15158174,"KHM":117348,"KIR":25648,"KNA":0,"KOR":60247064,"KWT":27611904,"LAO":487312,"LBN":5653358,"LBR":1505547,"LBY":15220018,"LCA":76944,"LIE":107524,"LKA":3537879,"LSO":0,"LTU":27270690,"LUX":13493196,"LVA":17485930,"MAC":230832,"MAR":8027626,"MDA":27476432,"MDG":1285797,"MDV":3664,"MEX":132271256,"MHL":0,"MKD":6070654,"MLI":245488,"MLT":839056,"MMR":4894302,"MNE":1087025,"MNG":3275900,"MOZ":3295698,"MRT":447008,"MSR":14656,"MUS":688832,"MWI":545572,"MYS":17900626,"NAM":0,"NCL":1703760,"NER":252013,"NGA":41387604,"NIC":1604357,"NIU":3664,"NLD":157495360,"NOR":29395056,"NPL":267472,"NRU":76944,"NZL":16189594,"OMN":2088480,"OWID_KOS":0,"PAK":18903050,"PAN":2798197,"PER":18147972,"PHL":26409366,"PLW":172208,"PNG":1267744,"POL":329506370,"PRK":89504900,"PRT":18307310,"PRY":713761,"PSE":0,"PYF":216176,"QAT":10775408,"ROU":132207890,"RUS":1608385500,"RWA":65952,"SAU":70281710,"SDN":4926986,"SEN":1453241,"SGP":21720192,"SHN":0,"SLB":54960,"SLE":677840,"SLV":1677221,"SOM":234496,"SPM":69616,"SRB":32038120,"SSD":447616,"STP":10992,"SUR":1743826,"SVK":52245984,"SVN":9071948,"SWE":84703224,"SWZ":381056,"SXM":1306098,"SYC":43968,"SYR":7756279,"TCA":0,"TCD":120912,"TGO":404950,"THA":21759532,"TJK":8610200,"TKM":21968376,"TLS":0,"TON":21984,"TTO":8235512.5,"TUN":4732530,"TUR":53721840,"TUV":0,"TWN":35871510,"TZA":2164473,"UGA":1378383,"UKR":510001100,"URY":6069376,"USA":4573015000,"UZB":67792280,"VCT":36640,"VEN":62514096,"VGB":21984,"VNM":23034844,"VUT":62288,"WLF":0,"WSM":36640,"YEM":1494912,"ZAF":171553580,"ZMB":4061415.2,"ZWE":8215826},"1973":{"ABW":869461,"AFG":1635454,"AGO":4873664,"AIA":0,"ALB":5286406,"AND":0,"ARE":30605392,"ARG":93975900,"ARM":6055597,"ATA":0,"ATG":329760,"AUS":170143800,"AUT":60015524,"AZE":36255064,"BDI":73280,"BEL":138639170,"BEN":381056,"BES":175390,"BFA":168544,"BGD":4549694,"BGR":68717270,"BHR":5517984,"BHS":7862745,"BIH":13158366,"BLR":76619990,"BLZ":146560,"BMU":425024,"BOL":3454469,"BRA":132060776,"BRB":479984,"BRN":9973408,"BTN":3664,"BWA":51296,"CAF":161216,"CAN":381273180,"CHE":46202676,"CHL":27588490,"CHN":1008292600,"CIV":2876240,"CMR":896911,"COD":3189175,"COG":1220112,"COK":10992,"COL":33630756,"COM":29312,"CPV":62229,"CRI":2043412.9,"CUB":22375342,"CUW":13085605,"CXR":69616,"CYP":2503532,"CZE":164108240,"DEU":1085738400,"DJI":179536,"DMA":25648,"DNK":59193932,"DOM":5958980,"DZA":38277400,"ECU":5255879,"EGY":23761076,"ERI":0,"ESP":154957340,"EST":27795136,"ETH":1750887,"FIN":49320160,"FJI":629851,"FRA":538654660,"FRO":252815.98,"FSM":0,"GAB":5309136,"GBR":659577100,"GEO":11246717,"GHA":2439283,"GIN":802416,"GMB":62288,"GNB":109920,"GNQ":29312,"GRC":37131216,"GRD":54960,"GRL":556928,"GTM":2933616,"GUY":1802688,"HKG":9286457,"HND":1506141,"HRV":14224622,"HTI":420914,"HUN":72959710,"IDN":49098096,"IND":209095040,"IRL":22846356,"IRN":129475310,"IRQ":30612708,"ISL":1750026,"ISR":19261170,"ITA":353349120,"JAM":8290351,"JOR":2199568,"JPN":914265200,"KAZ":182406820,"KEN":3914027,"KGZ":15798422,"KHM":128639,"KIR":36640,"KNA":0,"KOR":72974630,"KWT":24222704,"LAO":516623.97,"LBN":7066733,"LBR":1479899,"LBY":14575065,"LCA":80608,"LIE":134562,"LKA":3684292,"LSO":0,"LTU":28480460,"LUX":14175353,"LVA":18236128,"MAC":223504,"MAR":9612593,"MDA":28653530,"MDG":1073256,"MDV":3664,"MEX":144058430,"MHL":0,"MKD":7285454,"MLI":267294,"MLT":806080,"MMR":4106571.2,"MNE":1298547,"MNG":3472096,"MOZ":3558942,"MRT":468992,"MSR":14656,"MUS":677840,"MWI":571115,"MYS":17505126,"NAM":0,"NCL":2597568,"NER":326897,"NGA":49532348,"NIC":1827563,"NIU":3664,"NLD":165259840,"NOR":30491832,"NPL":421360,"NRU":84272,"NZL":18200338,"OMN":2110464,"OWID_KOS":0,"PAK":20008478,"PAN":3237223,"PER":19722846,"PHL":31501326,"PLW":175872,"PNG":1344688,"POL":335589950,"PRK":97325340,"PRT":19945068,"PRY":867438,"PSE":0,"PYF":208848,"QAT":12457184,"ROU":144690800,"RUS":1676311800,"RWA":69616,"SAU":95053576,"SDN":4970518,"SEN":1548683,"SGP":20690608,"SHN":0,"SLB":65952,"SLE":538608,"SLV":1966587,"SOM":263808,"SPM":40304,"SRB":38257840,"SSD":451582,"STP":14656,"SUR":2106562,"SVK":52457424,"SVN":10838289,"SWE":87289530,"SWZ":370064,"SXM":1448872,"SYC":47632,"SYR":7885176,"TCA":0,"TCD":161216,"TGO":411639,"THA":24344560,"TJK":8979680,"TKM":22918512,"TLS":0,"TON":25648,"TTO":9389822,"TUN":4824843,"TUR":59310000,"TUV":0,"TWN":40244864,"TZA":3182738,"UGA":1176441,"UKR":531497630,"URY":5768719,"USA":4785103000,"UZB":70695050,"VCT":40304,"VEN":66432852,"VGB":25648,"VNM":25067894,"VUT":54960,"WLF":0,"WSM":36640,"YEM":2729621,"ZAF":173352220,"ZMB":4585665,"ZWE":9270850},"1974":{"ABW":788077,"AFG":1913152,"AGO":4866398,"AIA":0,"ALB":4341512,"AND":0,"ARE":31301552,"ARG":95480376,"ARM":6295421,"ATA":0,"ATG":428688,"AUS":166182740,"AUT":57294164,"AZE":37656150,"BDI":91600,"BEL":134950100,"BEN":406704,"BES":158973,"BFA":205184,"BGD":4653084,"BGR":71136530,"BHR":5400736,"BHS":7379751,"BIH":13215196,"BLR":79563590,"BLZ":153888,"BMU":443344,"BOL":3512944,"BRA":143015700,"BRB":490976,"BRN":8178048,"BTN":3664,"BWA":87936,"CAF":113584,"CAN":389616930,"CHE":41427070,"CHL":25877990,"CHN":1028099840,"CIV":3242640,"CMR":973762,"COD":3364690,"COG":1623152,"COK":10992,"COL":36394428,"COM":29312,"CPV":65952,"CRI":1904091,"CUB":22888060,"CUW":11860753,"CXR":124576,"CYP":1928765,"CZE":165999570,"DEU":1062726900,"DJI":194192,"DMA":29312,"DNK":55009452,"DOM":6409563,"DZA":31876660,"ECU":6083555,"EGY":26089140,"ERI":0,"ESP":172665700,"EST":28860686,"ETH":1736261,"FIN":46608372,"FJI":670185,"FRA":520659300,"FRO":300448,"FSM":0,"GAB":5448368,"GBR":617183600,"GEO":11684918,"GHA":2881147,"GIN":839056,"GMB":62288,"GNB":102592,"GNQ":51296,"GRC":36061770,"GRD":36640,"GRL":556928,"GTM":3065520,"GUY":1553536,"HKG":10667250,"HND":1553346,"HRV":14279875,"HTI":472091,"HUN":73980630,"IDN":51226504,"IND":215853180,"IRL":23293276,"IRN":143775410,"IRQ":30909492,"ISL":1738479,"ISR":19368960,"ITA":358252930,"JAM":7594310,"JOR":2225305,"JPN":914306240,"KAZ":189215760,"KEN":4943558,"KGZ":16399828,"KHM":73688,"KIR":32976,"KNA":0,"KOR":75550510,"KWT":19312024,"LAO":293120,"LBN":7087861,"LBR":1721723,"LBY":9337575,"LCA":73280,"LIE":109178,"LKA":2929301,"LSO":0,"LTU":29627160,"LUX":14424045,"LVA":18943458,"MAC":267472,"MAR":11098529,"MDA":29764406,"MDG":1186898,"MDV":3664,"MEX":154727330,"MHL":0,"MKD":7305564,"MLI":303934,"MLT":743792,"MMR":4670917,"MNE":1304229,"MNG":3740771,"MOZ":3145504,"MRT":483648,"MSR":14656,"MUS":692496,"MWI":549090,"MYS":19044680,"NAM":0,"NCL":2780709,"NER":288341,"NGA":62235496,"NIC":1948297,"NIU":3664,"NLD":159985140,"NOR":27690220,"NPL":424875,"NRU":98928,"NZL":18759972,"OMN":2333968,"OWID_KOS":0,"PAK":21387398,"PAN":3017531,"PER":21325154,"PHL":30492320,"PLW":194192,"PNG":1586512,"POL":346236580,"PRK":101611500,"PRT":20644926,"PRY":951042,"PSE":0,"PYF":216176,"QAT":10478535,"ROU":150607780,"RUS":1740144300,"RWA":73280,"SAU":98701896,"SDN":5205350,"SEN":1848983,"SGP":21427072,"SHN":0,"SLB":65952,"SLE":520288,"SLV":1970043,"SOM":329760,"SPM":43968,"SRB":38414670,"SSD":472941,"STP":18320,"SUR":1600990,"SVK":53057760,"SVN":10876928,"SWE":79822840,"SWZ":311440,"SXM":1313253,"SYC":54960,"SYR":9654411,"TCA":0,"TCD":150224,"TGO":390468,"THA":24103836,"TJK":9327972,"TKM":23815656,"TLS":0,"TON":21984,"TTO":10042043,"TUN":5393247,"TUR":60928644,"TUV":0,"TWN":39309716,"TZA":2303467,"UGA":1189710,"UKR":551676000,"URY":5677001,"USA":4621099500,"UZB":73430520,"VCT":32976,"VEN":75057576,"VGB":25648,"VNM":19058020,"VUT":62288,"WLF":0,"WSM":43968,"YEM":2245794,"ZAF":176544290,"ZMB":4197161,"ZWE":9047019},"1975":{"ABW":570712,"AFG":2121383,"AGO":4408811,"AIA":0,"ALB":4591172,"AND":0,"ARE":31045072,"ARG":94845480,"ARM":6624855,"ATA":0,"ATG":707152,"AUS":173101520,"AUT":54213684,"AZE":39597612,"BDI":76944,"BEL":121823030,"BEN":443344,"BES":115125,"BFA":219840,"BGD":4856723,"BGR":72922190,"BHR":5748816,"BHS":8246118.5,"BIH":13788474,"BLR":83637470,"BLZ":175872,"BMU":458000,"BOL":4054978.8,"BRA":150326580,"BRB":567920,"BRN":7075184,"BTN":3664,"BWA":186864,"CAF":102592,"CAN":396786780,"CHE":39051350,"CHL":22946672,"CHN":1183215000,"CIV":3986432,"CMR":1160537,"COD":3232786,"COG":1099200,"COK":14656,"COL":35809044,"COM":32976,"CPV":76944,"CRI":2035847,"CUB":27039482,"CUW":8589351,"CXR":135568,"CYP":1990826,"CZE":173668350,"DEU":1002447000,"DJI":197856,"DMA":29312,"DNK":55708652,"DOM":6332680,"DZA":32001206,"ECU":7354905,"EGY":31059912,"ERI":0,"ESP":181053620,"EST":30345080,"ETH":1208526,"FIN":46025676,"FJI":622581,"FRA":482165020,"FRO":348080,"FSM":0,"GAB":5364096,"GBR":603247040,"GEO":12290572,"GHA":2658952,"GIN":842720,"GMB":98928,"GNB":113584,"GNQ":62288,"GRC":38669764,"GRD":47632,"GRL":505631.97,"GTM":3519529,"GUY":1824672,"HKG":11008001,"HND":1660773,"HRV":14892899,"HTI":483024,"HUN":75247880,"IDN":53932536,"IND":234209120,"IRL":22047718,"IRN":139213970,"IRQ":33120258,"ISL":1613472,"ISR":19540482,"ITA":341052450,"JAM":8180667,"JOR":2489202,"JPN":868510700,"KAZ":198758180,"KEN":4969218,"KGZ":17236654,"KHM":73842,"KIR":32976,"KNA":0,"KOR":81665790,"KWT":16812936,"LAO":252815.98,"LBN":6265099,"LBR":1483563,"LBY":11568416,"LCA":76944,"LIE":137461,"LKA":2892985,"LSO":0,"LTU":31192876,"LUX":11863886,"LVA":19922670,"MAC":296784,"MAR":11065450,"MDA":31301744,"MDG":1692530,"MDV":7328,"MEX":164139040,"MHL":0,"MKD":7616156,"MLI":340544,"MLT":666848,"MMR":4582922,"MNE":1360884,"MNG":4054571.2,"MOZ":2882439,"MRT":509296,"MSR":10992,"MUS":589904,"MWI":578272,"MYS":19445158,"NAM":0,"NCL":2527922,"NER":332509,"NGA":47351670,"NIC":1926551,"NIU":3664,"NLD":152525440,"NOR":30602088,"NPL":351714,"NRU":102592,"NZL":18270304,"OMN":7251056,"OWID_KOS":0,"PAK":23187848,"PAN":3659207,"PER":21927228,"PHL":32482444,"PLW":194192,"PNG":1531552,"POL":374780100,"PRK":107623760,"PRT":21275220,"PRY":836487,"PSE":0,"PYF":212512,"QAT":10947378,"ROU":161861600,"RUS":1829144000,"RWA":175872,"SAU":83260890,"SDN":3882219,"SEN":2578000,"SGP":23863632,"SHN":0,"SLB":58624,"SLE":523952,"SLV":2105463,"SOM":501968.03,"SPM":32976,"SRB":40071630,"SSD":352722,"STP":18320,"SUR":2018745,"SVK":55524876,"SVN":11340964,"SWE":80760120,"SWZ":337088,"SXM":951035,"SYC":58624,"SYR":11171188,"TCA":0,"TCD":183200,"TGO":311440,"THA":24236140,"TJK":9809264,"TKM":25052472,"TLS":0,"TON":32976,"TTO":9613296,"TUN":5544025,"TUR":65419330,"TUV":0,"TWN":43454064,"TZA":2281601,"UGA":1128594,"UKR":579866430,"URY":5962407,"USA":4478275000,"UZB":77221030,"VCT":32976,"VEN":63750450,"VGB":25648,"VNM":21771390,"VUT":54960,"WLF":0,"WSM":58624,"YEM":2168850,"ZAF":185001220,"ZMB":4076219,"ZWE":8310912},"1976":{"ABW":1219127,"AFG":1980859,"AGO":3280042,"AIA":0,"ALB":4947198,"AND":0,"ARE":39617012,"ARG":99699160,"ARM":6881780,"ATA":0,"ATG":403040,"AUS":169803060,"AUT":58203790,"AZE":41125860,"BDI":87936,"BEL":129677600,"BEN":260144,"BES":245925,"BFA":208848,"BGD":5555798,"BGR":72964820,"BHR":6569552,"BHS":6457396,"BIH":14230517,"BLR":86817990,"BLZ":175872,"BMU":468992,"BOL":4574829,"BRA":154606980,"BRB":531280,"BRN":6019952,"BTN":3664,"BWA":593568,"CAF":128240.01,"CAN":398962240,"CHE":40437372,"CHL":24028882,"CHN":1226421200,"CIV":3960784,"CMR":1088970,"COD":3404885,"COG":1234768,"COK":14656,"COL":37979736,"COM":40304,"CPV":73280,"CRI":2081855,"CUB":27197066,"CUW":18348160,"CXR":124576,"CYP":2487684,"CZE":180410800,"DEU":1090840400,"DJI":197856,"DMA":29312,"DNK":60056950,"DOM":6322353,"DZA":39131068,"ECU":8100596.5,"EGY":34450452,"ERI":0,"ESP":197745940,"EST":31512066,"ETH":1174729,"FIN":51198464,"FJI":482997,"FRA":523447400,"FRO":329760,"FSM":0,"GAB":5703786,"GBR":598526000,"GEO":12762136,"GHA":2333216,"GIN":886688,"GMB":98928,"GNB":95264,"GNQ":62288,"GRC":42655544,"GRD":47632,"GRL":219840,"GTM":3304906,"GUY":1751392,"HKG":12490384,"HND":1770583,"HRV":15367100,"HTI":672182,"HUN":79841640,"IDN":61788250,"IND":244749380,"IRL":22293362,"IRN":156459100,"IRQ":48735490,"ISL":1701313,"ISR":19496744,"ITA":365795460,"JAM":7275862,"JOR":2944596,"JPN":907144500,"KAZ":206220850,"KEN":4602715,"KGZ":17884906,"KHM":73996,"KIR":32976,"KNA":0,"KOR":93104550,"KWT":18456196,"LAO":223504,"LBN":5924023,"LBR":1475601,"LBY":17887864,"LCA":84272,"LIE":133671,"LKA":2798767,"LSO":0,"LTU":32413060,"LUX":11861830,"LVA":20690306,"MAC":252815.98,"MAR":11489691,"MDA":32503678,"MDG":992234,"MDV":10992,"MEX":183739580,"MHL":0,"MKD":7849950,"MLI":340257,"MLT":762112,"MMR":4892791,"MNE":1404615,"MNG":4390020,"MOZ":2555417,"MRT":516623.97,"MSR":10992,"MUS":619216,"MWI":581989,"MYS":23897642,"NAM":0,"NCL":2388422,"NER":330710,"NGA":55189580,"NIC":2222175,"NIU":3664,"NLD":169130820,"NOR":33332158,"NPL":281839,"NRU":102592,"NZL":19248512,"OMN":8320944,"OWID_KOS":0,"PAK":22788524,"PAN":3606744,"PER":22400364,"PHL":35066230,"PLW":113584,"PNG":1571856,"POL":398118750,"PRK":110030860,"PRT":22325776,"PRY":1029965.06,"PSE":0,"PYF":263808,"QAT":10374896,"ROU":174274560,"RUS":1899591300,"RWA":267472,"SAU":101459590,"SDN":3438346,"SEN":1769696,"SGP":29337648,"SHN":0,"SLB":62288,"SLE":450672,"SLV":2206733,"SOM":479984,"SPM":47632,"SRB":41345856,"SSD":312446,"STP":29312,"SUR":1996528,"SVK":57697750,"SVN":11695449,"SWE":88240856,"SWZ":333424,"SXM":2031555.9,"SYC":80608,"SYR":13737146,"TCA":0,"TCD":183200,"TGO":322432,"THA":28554744,"TJK":10184882,"TKM":26013896,"TLS":0,"TON":29312,"TTO":15910818,"TUN":5844832,"TUR":73359400,"TUV":0,"TWN":56100036,"TZA":2785968,"UGA":985384,"UKR":602172350,"URY":5887086,"USA":4747817500,"UZB":80200420,"VCT":32976,"VEN":57273444,"VGB":25648,"VNM":13898657,"VUT":43968,"WLF":0,"WSM":43968,"YEM":2564260,"ZAF":192905020,"ZMB":4019392,"ZWE":10854930},"1977":{"ABW":636760,"AFG":2384175,"AGO":3527511,"AIA":0,"ALB":5717343,"AND":0,"ARE":38751290,"ARG":100705870,"ARM":7118719,"ATA":0,"ATG":465328,"AUS":181914660,"AUT":55993692,"AZE":42529732,"BDI":98928,"BEL":126199330,"BEN":296784,"BES":128448.99,"BFA":249152,"BGD":5784754,"BGR":75795864,"BHR":7463568,"BHS":9708689,"BIH":13837574,"BLR":89745016,"BLZ":197856,"BMU":454336,"BOL":4474857,"BRA":162363360,"BRB":589904,"BRN":6390016,"BTN":7328,"BWA":780432,"CAF":128240.01,"CAN":407790430,"CHE":41038076,"CHL":23016912,"CHN":1340831100,"CIV":4052384,"CMR":1559048,"COD":3476971,"COG":479984,"COK":29312,"COL":39240976,"COM":40304,"CPV":80608,"CRI":2607419,"CUB":29374202,"CUW":9583390,"CXR":91600,"CYP":2699378,"CZE":185792430,"DEU":1052608500,"DJI":197856,"DMA":25648,"DNK":61765400,"DOM":5598920,"DZA":41844910,"ECU":7472201,"EGY":37815064,"ERI":0,"ESP":194829090,"EST":32583110,"ETH":1046785.94,"FIN":50136984,"FJI":764627,"FRA":506948320,"FRO":406704,"FSM":0,"GAB":6306500,"GBR":604361700,"GEO":13195060,"GHA":2892642,"GIN":901344,"GMB":113584,"GNB":102592,"GNQ":62288,"GRC":46657156,"GRD":47632,"GRL":721808,"GTM":3804453,"GUY":1897952,"HKG":14203904,"HND":1993395,"HRV":14936330,"HTI":704144,"HUN":83005470,"IDN":82416410,"IND":258961730,"IRL":23568720,"IRN":163731950,"IRQ":43629544,"ISL":1902662,"ISR":19765916,"ITA":354417630,"JAM":7440922,"JOR":3153933,"JPN":933237700,"KAZ":213041490,"KEN":5049444,"KGZ":18479706,"KHM":74150,"KIR":21984,"KNA":0,"KOR":105459704,"KWT":17201412,"LAO":230832,"LBN":5385509,"LBR":1471362,"LBY":20198250,"LCA":69616,"LIE":152279,"LKA":2911038,"LSO":0,"LTU":33544392,"LUX":10953946,"LVA":21397154,"MAC":307776,"MAR":12624541,"MDA":33612228,"MDG":845601,"MDV":14656,"MEX":192394240,"MHL":0,"MKD":7610586,"MLI":413473,"MLT":802416,"MMR":5165654,"MNE":1365953,"MNG":4960706,"MOZ":2706439,"MRT":556928,"MSR":25648,"MUS":641200,"MWI":636859,"MYS":22620840,"NAM":0,"NCL":2138972,"NER":363259,"NGA":50504644,"NIC":2833110,"NIU":3664,"NLD":163605650,"NOR":33309498,"NPL":336399,"NRU":113584,"NZL":20313414,"OMN":8500480,"OWID_KOS":0,"PAK":24319874,"PAN":3455443,"PER":23295968,"PHL":36676136,"PLW":183200,"PNG":1579184,"POL":417954940,"PRK":113665180,"PRT":22604974,"PRY":1153033,"PSE":0,"PYF":274800,"QAT":9916029,"ROU":177832510,"RUS":1964203600,"RWA":267472,"SAU":118070470,"SDN":3484414,"SEN":2237336,"SGP":27611904,"SHN":0,"SLB":80608,"SLE":512960.03,"SLV":2281687,"SOM":798752,"SPM":36640,"SRB":40192630,"SSD":316718,"STP":29312,"SUR":1897527,"SVK":59437460,"SVN":11359634,"SWE":85740390,"SWZ":340752,"SXM":1061098,"SYC":84272,"SYR":14632356,"TCA":0,"TCD":197856,"TGO":461664,"THA":31869152,"TJK":10530749,"TKM":26897174,"TLS":0,"TON":29312,"TTO":16159260,"TUN":6754190,"TUR":81120720,"TUV":0,"TWN":61129988,"TZA":2007622,"UGA":801967,"UKR":622605800,"URY":5639634,"USA":4889665500,"UZB":82917670,"VCT":32976,"VEN":63650064,"VGB":29312,"VNM":15246793,"VUT":51296,"WLF":0,"WSM":73280,"YEM":2977991,"ZAF":199734600,"ZMB":3734905,"ZWE":9284411},"1978":{"ABW":542289,"AFG":2153300,"AGO":5399808,"AIA":0,"ALB":6491245,"AND":0,"ARE":44753588,"ARG":102555590,"ARM":7368149,"ATA":0,"ATG":490976,"AUS":191051580,"AUT":57226484,"AZE":44002090,"BDI":102592,"BEL":135450270,"BEN":362736,"BES":109392,"BFA":348080,"BGD":5984423,"BGR":81207090,"BHR":7760352,"BHS":6597044,"BIH":15462132,"BLR":92827690,"BLZ":216176,"BMU":425024,"BOL":5020144,"BRA":177117180,"BRB":630208,"BRN":9533728,"BTN":10992,"BWA":831728,"CAF":146560,"CAN":415528670,"CHE":42170260,"CHL":22842010,"CHN":1492777900,"CIV":4814496,"CMR":1993205,"COD":3525975,"COG":322432,"COK":29312,"COL":41534244,"COM":29312,"CPV":208542,"CRI":2912043,"CUB":30661204,"CUW":8161576.5,"CXR":91600,"CYP":2845021,"CZE":187464370,"DEU":1079132500,"DJI":201520,"DMA":25648,"DNK":61028310,"DOM":5430324,"DZA":62455264,"ECU":10406424,"EGY":39261004,"ERI":0,"ESP":199513870,"EST":33697296,"ETH":1368501,"FIN":51825016,"FJI":709084,"FRA":528755420,"FRO":399376,"FSM":0,"GAB":7554862,"GBR":604713500,"GEO":13649930,"GHA":2866842,"GIN":901344,"GMB":139232,"GNB":102592,"GNQ":69616,"GRC":47678116,"GRD":51296,"GRL":392048,"GTM":4117133.2,"GUY":2055504.1,"HKG":15714096,"HND":2039442,"HRV":16698116,"HTI":750641,"HUN":87964170,"IDN":93938110,"IND":263149570,"IRL":23579640,"IRN":162103940,"IRQ":42193084,"ISL":1920842,"ISR":21031664,"ITA":371273820,"JAM":9111866,"JOR":3627347,"JPN":901590100,"KAZ":220155300,"KEN":5317180,"KGZ":19101680,"KHM":51442,"KIR":21984,"KNA":0,"KOR":113119300,"KWT":20971580,"LAO":230832,"LBN":5495880,"LBR":1503152,"LBY":21155382,"LCA":98928,"LIE":151892,"LKA":3435544,"LSO":0,"LTU":34739052,"LUX":11880833,"LVA":22136552,"MAC":414032,"MAR":12991673,"MDA":34763532,"MDG":1017215.94,"MDV":21984,"MEX":222116240,"MHL":0,"MKD":8520547,"MLI":394948,"MLT":934320,"MMR":5146074,"MNE":1526447,"MNG":5763810,"MOZ":2865849,"MRT":582576,"MSR":25648,"MUS":630208,"MWI":669734,"MYS":23260444,"NAM":0,"NCL":1541285,"NER":413413,"NGA":48222930,"NIC":2627462,"NIU":3664,"NLD":169793040,"NOR":32624622,"NPL":328981,"NRU":113584,"NZL":18024024,"OMN":7789664,"OWID_KOS":0,"PAK":26050556,"PAN":2834604,"PER":22412698,"PHL":37380250,"PLW":109920,"PNG":1674448,"POL":430870050,"PRK":108212930,"PRT":22584778,"PRY":1453705,"PSE":0,"PYF":311440,"QAT":10519005,"ROU":193243920,"RUS":2031659800,"RWA":289456,"SAU":115024584,"SDN":3146820,"SEN":2619597,"SGP":32463040,"SHN":0,"SLB":62288,"SLE":710816,"SLV":2381372,"SOM":556928,"SPM":32976,"SRB":44896356,"SSD":286206,"STP":32976,"SUR":2391861,"SVK":59973316,"SVN":12692229,"SWE":79476490,"SWZ":439680,"SXM":903671,"SYC":76944,"SYR":15181394,"TCA":0,"TCD":194192,"TGO":355408,"THA":34741212,"TJK":10894571,"TKM":27827508,"TLS":0,"TON":36640,"TTO":15311864,"TUN":7488590,"TUR":76713870,"TUV":0,"TWN":71027624,"TZA":2197332,"UGA":695171,"UKR":643918500,"URY":5729321,"USA":4941423000,"UZB":85776620,"VCT":36640,"VEN":68591440,"VGB":29312,"VNM":15387687,"VUT":58624,"WLF":0,"WSM":98928,"YEM":3102122,"ZAF":201875890,"ZMB":3470873,"ZWE":9279682},"1979":{"ABW":568871,"AFG":2232754,"AGO":5489191,"AIA":0,"ALB":7583971,"AND":0,"ARE":36546456,"ARG":110616140,"ARM":7428925,"ATA":0,"ATG":406704,"AUS":192321940,"AUT":61321330,"AZE":44370444,"BDI":109920,"BEL":139786510,"BEN":366400,"BES":114754,"BFA":406704,"BGD":6612648,"BGR":78927900,"BHR":8126752,"BHS":6915653,"BIH":16817004,"BLR":93562220,"BLZ":208848,"BMU":461664,"BOL":4730077,"BRA":187787150,"BRB":600896,"BRN":7434256,"BTN":21984,"BWA":941648,"CAF":102592,"CAN":441676770,"CHE":39864964,"CHL":24729658,"CHN":1525661200,"CIV":5419056,"CMR":1815342,"COD":3740105,"COG":348080,"COK":25648,"COL":44266890,"COM":21984,"CPV":249152,"CRI":2780982,"CUB":31684546,"CUW":8561654,"CXR":98928,"CYP":3045443,"CZE":182557390,"DEU":1117888300,"DJI":362736,"DMA":32976,"DNK":62907830,"DOM":6785586,"DZA":45545550,"ECU":12140464,"EGY":42889508,"ERI":0,"ESP":202746540,"EST":33973840,"ETH":1844135,"FIN":54237020,"FJI":836456,"FRA":532113000,"FRO":479984,"FSM":0,"GAB":6746761,"GBR":644512800,"GEO":13760871,"GHA":2594790,"GIN":945312,"GMB":146560,"GNB":109920,"GNQ":62288,"GRC":50818708,"GRD":47632,"GRL":571584,"GTM":4678019,"GUY":1520560,"HKG":15837647,"HND":1922810,"HRV":18167018,"HTI":749901,"HUN":85987710,"IDN":95137000,"IND":276284740,"IRL":27402738,"IRN":162982480,"IRQ":52823090,"ISL":1983021,"ISR":20864376,"ITA":385255520,"JAM":8529469,"JOR":3776884,"JPN":953071360,"KAZ":221821620,"KEN":5032252,"KGZ":19242126,"KHM":29312,"KIR":25648,"KNA":0,"KOR":132874240,"KWT":17627686,"LAO":223504,"LBN":5785207,"LBR":1941899,"LBY":25926382,"LCA":150224,"LIE":130670.99,"LKA":3809016,"LSO":0,"LTU":35035710,"LUX":12162236,"LVA":22318814,"MAC":414032,"MAR":15850193,"MDA":35039240,"MDG":1130237,"MDV":29312,"MEX":240258750,"MHL":0,"MKD":9283465,"MLI":427912,"MLT":905008,"MMR":5086024,"MNE":1660313,"MNG":6277336,"MOZ":2634568,"MRT":604560,"MSR":25648,"MUS":659520,"MWI":636722,"MYS":27305936,"NAM":0,"NCL":1639872,"NER":475987,"NGA":70185580,"NIC":1709257,"NIU":3664,"NLD":187007060,"NOR":34625172,"NPL":512359.97,"NRU":113584,"NZL":16494432,"OMN":7716384,"OWID_KOS":0,"PAK":28134454,"PAN":3180816,"PER":22217276,"PHL":38031020,"PLW":124576,"PNG":1795360,"POL":441308640,"PRK":110262984,"PRT":24855616,"PRY":1325419,"PSE":0,"PYF":282128,"QAT":14342442,"ROU":195323570,"RUS":2048510000,"RWA":296784,"SAU":138004740,"SDN":3266850,"SEN":2888139,"SGP":35419820,"SHN":0,"SLB":109920,"SLE":677840,"SLV":2376721,"SOM":487312,"SPM":36640,"SRB":48815910,"SSD":297190,"STP":32976,"SUR":2292768,"SVK":58409988,"SVN":13803454,"SWE":84868580,"SWZ":447008,"SXM":947969,"SYC":120912,"SYR":22484598,"TCA":0,"TCD":201520,"TGO":1381328,"THA":36362616,"TJK":10982300,"TKM":28053340,"TLS":0,"TON":40304,"TTO":16707079,"TUN":8770340,"TUR":75037840,"TUV":0,"TWN":75765810,"TZA":2062789.9,"UGA":670871,"UKR":649262340,"URY":6262352,"USA":5008641500,"UZB":86464610,"VCT":29312,"VEN":76447390,"VGB":29312,"VNM":16249706,"VUT":62288,"WLF":0,"WSM":84272,"YEM":3218488,"ZAF":218667170,"ZMB":3596470,"ZWE":9431655},"1980":{"ABW":585435,"AFG":1756302,"AGO":5334352,"AIA":0,"ALB":5170837,"AND":0,"ARE":36823400,"ARG":108656130,"ARM":7719751,"ATA":0,"ATG":142896,"AUS":204370200,"AUT":52024932,"AZE":46109770,"BDI":146560,"BEL":134835790,"BEN":479826,"BES":118095,"BFA":432352,"BGD":7597219,"BGR":77250580,"BHR":7881264,"BHS":7972125,"BIH":16534994,"BLR":97202570,"BLZ":190528,"BMU":436016,"BOL":4658973,"BRA":186190690,"BRB":674176,"BRN":6877328,"BTN":21984,"BWA":985616,"CAF":106256,"CAN":442846850,"CHE":40490604,"CHL":25099940,"CHN":1494495900,"CIV":5569280,"CMR":3885945,"COD":3485020,"COG":405529,"COK":29312,"COL":44174240,"COM":47632,"CPV":120912,"CRI":2448461,"CUB":31374024,"CUW":8810933,"CXR":98928,"CYP":3260647,"CZE":184677390,"DEU":1100066000,"DJI":348080,"DMA":36640,"DNK":60286204,"DOM":6427009,"DZA":66416464,"ECU":13407168,"EGY":45176028,"ERI":0,"ESP":213911900,"EST":35313856,"ETH":1817483,"FIN":58139290,"FJI":792420,"FRA":511046700,"FRO":421360,"FSM":0,"GAB":6624651,"GBR":579035400,"GEO":14295843,"GHA":2483492,"GIN":963632,"GMB":157552,"GNB":146560,"GNQ":58624,"GRC":50888696,"GRD":47632,"GRL":564256,"GTM":4492606,"GUY":1788032,"HKG":16600216,"HND":2037957,"HRV":17856868,"HTI":745071,"HUN":86608750,"IDN":94872870,"IND":291711100,"IRL":26271548,"IRN":120493920,"IRQ":45358190,"ISL":1861846,"ISR":20984618,"ITA":386433020,"JAM":8445355,"JOR":4695815,"JPN":944868600,"KAZ":230434880,"KEN":6189277,"KGZ":19988408,"KHM":285792,"KIR":29312,"KNA":0,"KOR":134524430,"KWT":24616182,"LAO":186864,"LBN":5889758,"LBR":2037558.1,"LBY":26780556,"LCA":113584,"LIE":157827,"LKA":3388599,"LSO":0,"LTU":36422224,"LUX":11073563,"LVA":23196282,"MAC":527616,"MAR":15817737,"MDA":36412664,"MDG":1613940,"MDV":43968,"MEX":267743840,"MHL":0,"MKD":9108163,"MLI":391343,"MLT":1022256,"MMR":5508783,"MNE":1632626,"MNG":6855166,"MOZ":3198489,"MRT":630208,"MSR":14656,"MUS":589904,"MWI":710076,"MYS":28032596,"NAM":0,"NCL":1998603,"NER":566275,"NGA":68035180,"NIC":2022342.9,"NIU":3664,"NLD":176631780,"NOR":31777006,"NPL":541295,"NRU":124576,"NZL":17478874,"OMN":6041936,"OWID_KOS":0,"PAK":31931550,"PAN":3107614,"PER":24064700,"PHL":36868560,"PLW":157552,"PNG":1828336,"POL":463329060,"PRK":114082190,"PRT":26773498,"PRY":1485470,"PSE":0,"PYF":293120,"QAT":13081691,"ROU":195806610,"RUS":2129110400,"RWA":494640,"SAU":169240420,"SDN":3427041,"SEN":3336441,"SGP":30433184,"SHN":0,"SLB":102592,"SLE":608224,"SLV":2119434,"SOM":813408,"SPM":36640,"SRB":47981216,"SSD":311836,"STP":40304,"SUR":2369417,"SVK":59100590,"SVN":13558960,"SWE":71713690,"SWZ":465328,"SXM":975569,"SYC":95264,"SYR":20726688,"TCA":0,"TCD":208848,"TGO":794433,"THA":39717524,"TJK":11411372,"TKM":29141752,"TLS":0,"TON":40304,"TTO":16919436,"TUN":9495551,"TUR":75212270,"TUV":0,"TWN":83514630,"TZA":1873642,"UGA":626023,"UKR":674859700,"URY":5818505,"USA":4808556000,"UZB":89785944,"VCT":36640,"VEN":90640600,"VGB":29312,"VNM":16789038,"VUT":62288,"WLF":0,"WSM":76944,"YEM":3313518,"ZAF":228197800,"ZMB":3523262,"ZWE":9613952},"1981":{"ABW":557625,"AFG":1978463,"AGO":5266774,"AIA":0,"ALB":7339622,"AND":0,"ARE":36766936,"ARG":101968540,"ARM":7585534,"ATA":0,"ATG":106256,"AUS":213809920,"AUT":55832892,"AZE":45261570,"BDI":157552,"BEL":123573624,"BEN":387291,"BES":112485,"BFA":556928,"BGD":7886136,"BGR":80086800,"BHR":8518800,"BHS":2798440,"BIH":17995784,"BLR":95372456,"BLZ":183200,"BMU":388384,"BOL":4781038,"BRA":171324430,"BRB":685168,"BRN":2059168.1,"BTN":55349,"BWA":1007599.94,"CAF":135568,"CAN":429629730,"CHE":38812388,"CHL":24347124,"CHN":1476487800,"CIV":3865520,"CMR":5319124,"COD":3755424,"COG":470724,"COK":65952,"COL":44260324,"COM":47632,"CPV":32976,"CRI":2236213,"CUB":32723480,"CUW":8392390,"CXR":102592,"CYP":3095654,"CZE":182648460,"DEU":1048523300,"DJI":300448,"DMA":36640,"DNK":51715870,"DOM":6135240,"DZA":46341984,"ECU":16652800,"EGY":50902684,"ERI":0,"ESP":206096210,"EST":34639116,"ETH":1860007,"FIN":51403284,"FJI":1077173,"FRA":459302340,"FRO":439680,"FSM":0,"GAB":6564034,"GBR":560554500,"GEO":14034643,"GHA":2935109,"GIN":989280,"GMB":157552,"GNB":142896,"GNQ":69616,"GRC":50125424,"GRD":58624,"GRL":527616,"GTM":3949467,"GUY":1799024,"HKG":18616656,"HND":1807843,"HRV":19406162,"HTI":758928,"HUN":86352020,"IDN":100297050,"IND":314966180,"IRL":26061508,"IRN":112995830,"IRQ":31901494,"ISL":1748000,"ISR":21017606,"ITA":375300130,"JAM":7408473,"JOR":5825183,"JPN":926835500,"KAZ":225745810,"KEN":6519199,"KGZ":19596334,"KHM":300448,"KIR":29312,"KNA":54960,"KOR":139589740,"KWT":25139622,"LAO":150224,"LBN":5844246,"LBR":1934943,"LBY":28667964,"LCA":95264,"LIE":148220,"LKA":4005570,"LSO":0,"LTU":35804790,"LUX":9485958,"LVA":22769810,"MAC":534944,"MAR":15718117,"MDA":35749420,"MDG":1024539.94,"MDV":47632,"MEX":283707420,"MHL":0,"MKD":9904407,"MLI":394884,"MLT":1143168,"MMR":5622979,"MNE":1776798,"MNG":6614668,"MOZ":2479035,"MRT":633709,"MSR":18320,"MUS":542272,"MWI":603851,"MYS":30877660,"NAM":0,"NCL":1390324,"NER":680342,"NGA":65810500,"NIC":2134854,"NIU":3664,"NLD":164109810,"NOR":31804670,"NPL":453186,"NRU":124576,"NZL":16560961,"OMN":6012624,"OWID_KOS":0,"PAK":34232830,"PAN":3322709,"PER":24026774,"PHL":34528212,"PLW":157552,"PNG":1930928,"POL":408996960,"PRK":114394940,"PRT":27000480,"PRY":1383157,"PSE":0,"PYF":329760,"QAT":12840684,"ROU":197322540,"RUS":2088570500,"RWA":600896,"SAU":175304530,"SDN":3329950,"SEN":3279857,"SGP":25706624,"SHN":7328,"SLB":135568,"SLE":692496,"SLV":1818731,"SOM":274800,"SPM":40304,"SRB":52217696,"SSD":302987,"STP":43968,"SUR":2028322,"SVK":58454590,"SVN":14741727,"SWE":69388504,"SWZ":436016,"SXM":929227,"SYC":98928,"SYR":26534616,"TCA":0,"TCD":208848,"TGO":706484,"THA":37523256,"TJK":11200802,"TKM":28614916,"TLS":0,"TON":47632,"TTO":17242380,"TUN":9839484,"TUR":79185990,"TUV":0,"TWN":75051900,"TZA":2106825,"UGA":527045,"UKR":661774300,"URY":5355957,"USA":4686420500,"UZB":88193500,"VCT":36640,"VEN":91791580,"VGB":43968,"VNM":17695406,"VUT":51296,"WLF":0,"WSM":76944,"YEM":4225439,"ZAF":257075260,"ZMB":3358031,"ZWE":9405387},"1982":{"ABW":623468,"AFG":2094580.9,"AGO":4635179,"AIA":0,"ALB":7307607,"AND":0,"ARE":36752772,"ARG":103351140,"ARM":7729933,"ATA":0,"ATG":293120,"AUS":218000900,"AUT":53565290,"AZE":46118684,"BDI":157552,"BEL":117101900,"BEN":442545,"BES":125768.01,"BFA":575248,"BGD":8552288,"BGR":89844184,"BHR":9830512,"BHS":2258485,"BIH":16530495,"BLR":97143720,"BLZ":172208,"BMU":395712,"BOL":4337867,"BRA":171499700,"BRB":644864,"BRN":2664731,"BTN":62680.996,"BWA":1099200,"CAF":142896,"CAN":414454900,"CHE":36585736,"CHL":20475254,"CHN":1606585000,"CIV":5554624,"CMR":6315888,"COD":3046965,"COG":1343102,"COK":51296,"COL":45679304,"COM":47632,"CPV":36640,"CRI":2070622,"CUB":34527344,"CUW":9383351,"CXR":73280,"CYP":3157205,"CZE":180846050,"DEU":1015733900,"DJI":348080,"DMA":40304,"DNK":53615456,"DOM":6303486,"DZA":39173030,"ECU":19235118,"EGY":56431170,"ERI":0,"ESP":208598540,"EST":35293228,"ETH":1473914,"FIN":42976476,"FJI":835123,"FRA":440364100,"FRO":458000,"FSM":0,"GAB":6543617,"GBR":548240400,"GEO":14298791,"GHA":2952709,"GIN":981952,"GMB":161216,"GNB":142896,"GNQ":73280,"GRC":51508770,"GRD":62288,"GRL":516623.97,"GTM":3606792,"GUY":1403312,"HKG":19622766,"HND":1749493,"HRV":17823326,"HTI":817303,"HUN":86600860,"IDN":105583976,"IND":325380000,"IRL":25566268,"IRN":137770980,"IRQ":30374436,"ISL":1593849,"ISR":23854860,"ITA":366879040,"JAM":6214029,"JOR":6255687,"JPN":897407740,"KAZ":229913120,"KEN":4687430,"KGZ":19957672,"KHM":337088,"KIR":25648,"KNA":65952,"KOR":140781900,"KWT":21090278,"LAO":157552,"LBN":5719422,"LBR":597408,"LBY":30565102,"LCA":113584,"LIE":103794,"LKA":4466889,"LSO":0,"LTU":36490790,"LUX":8924177,"LVA":23198106,"MAC":483648,"MAR":16904630,"MDA":36405870,"MDG":1013337,"MDV":47632,"MEX":303905060,"MHL":0,"MKD":9069873,"MLI":365132,"MLT":1311712,"MMR":5579515,"MNE":1632348,"MNG":6712307,"MOZ":2523930,"MRT":883024,"MSR":18320,"MUS":501968.03,"MWI":593091,"MYS":30641940,"NAM":0,"NCL":1261786,"NER":742202,"NGA":65393570,"NIC":2110702,"NIU":3664,"NLD":133487120,"NOR":30912102,"NPL":442361,"NRU":124576,"NZL":18270238,"OMN":5730496,"OWID_KOS":0,"PAK":37189620,"PAN":3278525,"PER":23600102,"PHL":34838530,"PLW":157552,"PNG":1945584,"POL":420970430,"PRK":116892100,"PRT":28999878,"PRY":1362428,"PSE":0,"PYF":337088,"QAT":12334909,"ROU":194876910,"RUS":2127946800,"RWA":608224,"SAU":157893280,"SDN":3498865,"SEN":3036573,"SGP":28381510,"SHN":3664,"SLB":120912,"SLE":553264,"SLV":1752098,"SOM":718144,"SPM":40304,"SRB":47945060,"SSD":318549,"STP":47632,"SUR":1870567,"SVK":57896280,"SVN":13524234,"SWE":62256744,"SWZ":436016,"SXM":1038949,"SYC":84272,"SYR":24364442,"TCA":0,"TCD":205184,"TGO":817874,"THA":37311810,"TJK":11411028,"TKM":29153128,"TLS":0,"TON":43968,"TTO":18405236,"TUN":9531861,"TUR":86210030,"TUV":0,"TWN":75384830,"TZA":2148300,"UGA":544697,"UKR":674319800,"URY":4853822,"USA":4447298000,"UZB":89875250,"VCT":40304,"VEN":93201040,"VGB":36640,"VNM":18341628,"VUT":51296,"WLF":0,"WSM":65952,"YEM":5933604,"ZAF":280433300,"ZMB":3510781,"ZWE":8779857},"1983":{"ABW":320425,"AFG":2519954,"AGO":5100535,"AIA":0,"ALB":7630809,"AND":0,"ARE":35220452,"ARG":105142040,"ARM":7845646,"ATA":0,"ATG":84272,"AUS":207645390,"AUT":51668240,"AZE":46784470,"BDI":205184,"BEL":101201840,"BEN":404411,"BES":64636.996,"BFA":593568,"BGD":8188282,"BGR":90061304,"BHR":8222016.5,"BHS":2014374,"BIH":17800550,"BLR":98501310,"BLZ":172208,"BMU":450672,"BOL":4278137,"BRA":165899790,"BRB":685168,"BRN":2733344,"BTN":86749,"BWA":1029584.06,"CAF":146560,"CAN":408338500,"CHE":40022812,"CHL":20674070,"CHN":1694216800,"CIV":4517712,"CMR":6554480,"COD":3998000,"COG":1142452,"COK":51296,"COL":49209650,"COM":47632,"CPV":36640,"CRI":2088813.1,"CUB":30820618,"CUW":4822470,"CXR":80608,"CYP":3151348,"CZE":181076180,"DEU":1011604900,"DJI":348080,"DMA":40304,"DNK":50098160,"DOM":7865595,"DZA":52503910,"ECU":19502610,"EGY":56980476,"ERI":0,"ESP":203435150,"EST":35798330,"ETH":1834754,"FIN":41463372,"FJI":708926,"FRA":423247680,"FRO":487312,"FSM":0,"GAB":5508589,"GBR":545485100,"GEO":14503914,"GHA":3559626,"GIN":952640,"GMB":161216,"GNB":142896,"GNQ":62288,"GRC":54789372,"GRD":62288,"GRL":362736,"GTM":3159905,"GUY":1245760,"HKG":20912106,"HND":1976452,"HRV":19193860,"HTI":886028,"HUN":88856200,"IDN":105183850,"IND":352198850,"IRL":25728682,"IRN":149584900,"IRQ":38465140,"ISL":1542530,"ISR":23709024,"ITA":358409100,"JAM":6444906,"JOR":7299946,"JPN":880909440,"KAZ":232964700,"KEN":4654725,"KGZ":20230228,"KHM":366400,"KIR":21984,"KNA":51296,"KOR":149133600,"KWT":21541218,"LAO":179536,"LBN":6942200,"LBR":706518,"LBY":30146018,"LCA":102592,"LIE":130703,"LKA":4854898,"LSO":0,"LTU":37050428,"LUX":8364030,"LVA":23535594,"MAC":681504,"MAR":17626518,"MDA":36939170,"MDG":650391,"MDV":51296,"MEX":277565860,"MHL":0,"MKD":9799298,"MLI":416621,"MLT":996608,"MMR":5753767,"MNE":1757746,"MNG":6969065,"MOZ":1954480,"MRT":937984,"MSR":21984,"MUS":597232,"MWI":574535,"MYS":38048304,"NAM":0,"NCL":1151198,"NER":957925,"NGA":59705244,"NIC":1996688,"NIU":3664,"NLD":137357330,"NOR":31947258,"NPL":492418,"NRU":124576,"NZL":17998090,"OMN":7525856,"OWID_KOS":0,"PAK":40022190,"PAN":3479672,"PER":20392858,"PHL":35239076,"PLW":157552,"PNG":2007872.1,"POL":421023780,"PRK":125163144,"PRT":29901626,"PRY":1407919,"PSE":0,"PYF":421360,"QAT":11242561,"ROU":199659840,"RUS":2158129000,"RWA":696160,"SAU":160836960,"SDN":3571019,"SEN":2611411,"SGP":33397362,"SHN":3664,"SLB":142896,"SLE":688832,"SLV":1885365,"SOM":934320,"SPM":32976,"SRB":51624052,"SSD":325261,"STP":54960,"SUR":1372057,"SVK":57977640,"SVN":14567082,"SWE":58268316,"SWZ":271136,"SXM":533956,"SYC":98928,"SYR":27774502,"TCA":0,"TCD":205184,"TGO":623627,"THA":41745956,"TJK":11574380,"TKM":29572022,"TLS":0,"TON":47632,"TTO":16275545,"TUN":11319278,"TUR":89812184,"TUV":0,"TWN":83138060,"TZA":2196304,"UGA":613545,"UKR":683808060,"URY":3803538,"USA":4429423000,"UZB":91168184,"VCT":47632,"VEN":92907944,"VGB":40304,"VNM":19269692,"VUT":54960,"WLF":0,"WSM":65952,"YEM":6285599,"ZAF":291902080,"ZMB":3260766,"ZWE":10425096},"1984":{"ABW":800142,"AFG":2821540,"AGO":4985847,"AIA":0,"ALB":7825903,"AND":0,"ARE":46155644,"ARG":106451700,"ARM":7919893,"ATA":0,"ATG":146560,"AUS":217516260,"AUT":54214052,"AZE":47209396,"BDI":219840,"BEL":104966536,"BEN":448296,"BES":161406,"BFA":465328,"BGD":9077160,"BGR":87044930,"BHR":9200304,"BHS":1853984,"BIH":18772106,"BLR":99339960,"BLZ":172208,"BMU":443344,"BOL":4029341.2,"BRA":167567460,"BRB":746995,"BRN":1916272,"BTN":108740,"BWA":1044240,"CAF":150224,"CAN":425233340,"CHE":39128720,"CHL":22004668,"CHN":1844828000,"CIV":5133264,"CMR":6052928,"COD":3931640,"COG":1139504,"COK":21984,"COL":48701540,"COM":47632,"CPV":84272,"CRI":1980949,"CUB":32580692,"CUW":12042326,"CXR":0,"CYP":3234557,"CZE":187168030,"DEU":1033244600,"DJI":351744,"DMA":43968,"DNK":50780700,"DOM":7390465,"DZA":70946536,"ECU":21189502,"EGY":63704310,"ERI":0,"ESP":197667200,"EST":36118628,"ETH":1650281,"FIN":42147140,"FJI":577209,"FRA":411961200,"FRO":498304,"FSM":0,"GAB":5979462,"GBR":529108160,"GEO":14634463,"GHA":2499557,"GIN":978288,"GMB":172208,"GNB":161216,"GNQ":80608,"GRC":56284932,"GRD":62288,"GRL":567920,"GTM":3401061,"GUY":1403312,"HKG":22224786,"HND":1957357,"HRV":20244074,"HTI":903151,"HUN":90561280,"IDN":112460230,"IND":361559460,"IRL":25549450,"IRN":149863600,"IRQ":39771004,"ISL":1809746,"ISR":23498480,"ITA":364601060,"JAM":5140603,"JOR":8246872,"JPN":937069900,"KAZ":234837380,"KEN":4314382,"KGZ":20396922,"KHM":410368,"KIR":21984,"KNA":51296,"KOR":160700450,"KWT":28285242,"LAO":183200,"LBN":6713183,"LBR":695432,"LBY":28276210,"LCA":113584,"LIE":136442,"LKA":3852101,"LSO":0,"LTU":37406680,"LUX":9004226,"LVA":23749020,"MAC":604560,"MAR":17645234,"MDA":37273240,"MDG":866372,"MDV":58624,"MEX":276648580,"MHL":0,"MKD":10359361,"MLI":434818,"MLT":1363008,"MMR":6548548,"MNE":1853675,"MNG":6424712,"MOZ":1510863,"MRT":872032,"MSR":21984,"MUS":626544,"MWI":556183,"MYS":34794430,"NAM":0,"NCL":1202153,"NER":986810,"NGA":69405880,"NIC":1846034,"NIU":3664,"NLD":144072860,"NOR":33810250,"NPL":701424,"NRU":124576,"NZL":19336614,"OMN":8053471.5,"OWID_KOS":0,"PAK":42557330,"PAN":2867351,"PER":20632454,"PHL":30831284,"PLW":157552,"PNG":2044512,"POL":432467400,"PRK":134661630,"PRT":28793810,"PRY":1490034,"PSE":0,"PYF":461664,"QAT":12298033,"ROU":188323360,"RUS":2177292800,"RWA":633872,"SAU":155512380,"SDN":3201609,"SEN":3284168,"SGP":31968554,"SHN":3664,"SLB":142896,"SLE":615552,"SLV":1588299,"SOM":714480,"SPM":36640,"SRB":54437460,"SSD":291698,"STP":51296,"SUR":1552032,"SVK":59951800,"SVN":15365117,"SWE":57308090,"SWZ":333424,"SXM":1333358,"SYC":98928,"SYR":32849010,"TCA":0,"TCD":216176,"TGO":694581,"THA":45116800,"TJK":11676708,"TKM":29838292,"TLS":0,"TON":47632,"TTO":17504410,"TUN":11563105,"TUR":94906030,"TUV":0,"TWN":84864936,"TZA":2346983,"UGA":580422,"UKR":689836860,"URY":3438156,"USA":4662174000,"UZB":92012540,"VCT":65952,"VEN":93002890,"VGB":40304,"VNM":17495162,"VUT":54960,"WLF":0,"WSM":65952,"YEM":7096980,"ZAF":315593000,"ZMB":2804441,"ZWE":9879639},"1985":{"ABW":936532,"AFG":3501422,"AGO":4676114,"AIA":0,"ALB":7881540,"AND":0,"ARE":49652536,"ARG":100531220,"ARM":8534360,"ATA":0,"ATG":249152,"AUS":224555890,"AUT":54366320,"AZE":50898268,"BDI":230832,"BEL":104004500,"BEN":686373,"BES":188919,"BFA":476320,"BGD":10189161,"BGR":89221336,"BHR":10185920,"BHS":1509568,"BIH":19148574,"BLR":107063336,"BLZ":190528,"BMU":450672,"BOL":4109758,"BRA":180110740,"BRB":845711,"BRN":2594112,"BTN":119740,"BWA":1157824,"CAF":161216,"CAN":421718700,"CHE":39780900,"CHL":21292234,"CHN":1998083000,"CIV":6983584,"CMR":6470624,"COD":3611908,"COG":1275224,"COK":21984,"COL":48079492,"COM":47632,"CPV":84272,"CRI":2242455,"CUB":32556046,"CUW":14095030,"CXR":0,"CYP":3144994,"CZE":184599820,"DEU":1044117900,"DJI":359072,"DMA":47632,"DNK":59980548,"DOM":7241543,"DZA":72609070,"ECU":19352678,"EGY":63807230,"ERI":0,"ESP":199931400,"EST":38959372,"ETH":1798710,"FIN":49549076,"FJI":572991,"FRA":405137760,"FRO":516623.97,"FSM":0,"GAB":6298543,"GBR":559627300,"GEO":15773987,"GHA":3188232,"GIN":992944,"GMB":172208,"GNB":172208,"GNQ":65952,"GRC":59771930,"GRD":62288,"GRL":509296,"GTM":3496849,"GUY":1417968,"HKG":22881404,"HND":1885699,"HRV":20652906,"HTI":929520,"HUN":85828376,"IDN":121597384,"IND":397592100,"IRL":26749804,"IRN":159856660,"IRQ":44196436,"ISL":1622635,"ISR":24613012,"ITA":368982400,"JAM":5041745,"JOR":8421513,"JPN":912400830,"KAZ":253337520,"KEN":3765424,"KGZ":21992384,"KHM":417696,"KIR":21984,"KNA":51296,"KOR":168757680,"KWT":29070176,"LAO":205184,"LBN":7764934,"LBR":716084,"LBY":31002176,"LCA":128240.01,"LIE":170224,"LKA":3916566,"LSO":0,"LTU":40300924,"LUX":9236842,"LVA":25600436,"MAC":732800,"MAR":17681776,"MDA":40156430,"MDG":1053031,"MDV":65952,"MEX":287370530,"MHL":0,"MKD":10586532,"MLI":405383,"MLT":1198128,"MMR":6675517,"MNE":1890887,"MNG":8997952,"MOZ":1134944,"MRT":655856,"MSR":25648,"MUS":707152,"MWI":556311,"MYS":36329770,"NAM":0,"NCL":1450955,"NER":990022,"NGA":69635960,"NIC":1984836,"NIU":3664,"NLD":146980000,"NOR":32285598,"NPL":676018,"NRU":124576,"NZL":21857954,"OMN":8618546,"OWID_KOS":0,"PAK":46813544,"PAN":2726860,"PER":19454626,"PHL":27899134,"PLW":161216,"PNG":2125120,"POL":444507870,"PRK":144284700,"PRT":27129670,"PRY":1547794,"PSE":0,"PYF":589904,"QAT":12377808,"ROU":193445500,"RUS":2348141300,"RWA":615552,"SAU":172421180,"SDN":3720366,"SEN":2650504,"SGP":32397088,"SHN":3664,"SLB":150224,"SLE":663184,"SLV":1965338,"SOM":857376,"SPM":32976,"SRB":55521676,"SSD":338992,"STP":54960,"SUR":1595856,"SVK":59145252,"SVN":15673831,"SWE":62364010,"SWZ":439680,"SXM":1560639,"SYC":150224,"SYR":29389378,"TCA":0,"TCD":179536,"TGO":659031,"THA":47791670,"TJK":12585604,"TKM":32156776,"TLS":0,"TON":47632,"TTO":20723080,"TUN":11960545,"TUR":105662350,"TUV":0,"TWN":84733960,"TZA":2337900,"UGA":616914,"UKR":744234240,"URY":3283824,"USA":4652632600,"UZB":99179440,"VCT":65952,"VEN":101026510,"VGB":47632,"VNM":21097420,"VUT":120912,"WLF":0,"WSM":76944,"YEM":8573361,"ZAF":323861340,"ZMB":2732732,"ZWE":10213709},"1986":{"ABW":179536,"AFG":3133645,"AGO":4633840,"AIA":0,"ALB":8058077,"AND":0,"ARE":47030090,"ARG":104150060,"ARM":8064167,"ATA":0,"ATG":249152,"AUS":224040290,"AUT":53728532,"AZE":53118396,"BDI":234496,"BEL":102366760,"BEN":624003,"BES":36216,"BFA":479984,"BGD":11405807,"BGR":91172270,"BHR":11002992,"BHS":1410640,"BIH":19997306,"BLR":121551550,"BLZ":205184,"BMU":421360,"BOL":3763680,"BRA":197238400,"BRB":915407,"BRN":2297328,"BTN":112419,"BWA":1066224,"CAF":161216,"CAN":404707940,"CHE":42246576,"CHL":22022452,"CHN":2104213400,"CIV":5576608,"CMR":1993216,"COD":3345663,"COG":1062373,"COK":21984,"COL":48754284,"COM":43968,"CPV":58624,"CRI":2577534,"CUB":33546752,"CUW":2702060,"CXR":0,"CYP":3606067,"CZE":185854500,"DEU":1047471940,"DJI":377392,"DMA":47632,"DNK":58801840,"DOM":8121059.5,"DZA":76080390,"ECU":15194065,"EGY":74392900,"ERI":0,"ESP":189112670,"EST":38727904,"ETH":2195246,"FIN":53214370,"FJI":598086,"FRA":390285000,"FRO":490976,"FSM":0,"GAB":4950761,"GBR":568554000,"GEO":15575122,"GHA":2956670,"GIN":996608,"GMB":161216,"GNB":183200,"GNQ":80608,"GRC":58274420,"GRD":65952,"GRL":326096,"GTM":3664595,"GUY":1044240,"HKG":25525918,"HND":1824977,"HRV":21575448,"HTI":830222,"HUN":83240790,"IDN":122166080,"IND":426309380,"IRL":28550302,"IRN":147603410,"IRQ":47229550,"ISL":1780225,"ISR":26348256,"ITA":363187620,"JAM":4547176,"JOR":9165052,"JPN":912260000,"KAZ":258138510,"KEN":4157065,"KGZ":21708362,"KHM":432352,"KIR":18320,"KNA":58624,"KOR":176297250,"KWT":35230268,"LAO":208848,"LBN":7478448,"LBR":722879,"LBY":33895492,"LCA":131904,"LIE":195139,"LKA":3660301,"LSO":0,"LTU":36309600,"LUX":9111157,"LVA":24091312,"MAC":875696,"MAR":18683950,"MDA":38828024,"MDG":1137097,"MDV":80608,"MEX":293412200,"MHL":0,"MKD":11072174,"MLI":379612,"MLT":1483920,"MMR":6756346,"MNE":1974783,"MNG":9595142,"MOZ":977139,"MRT":373728,"MSR":29312,"MUS":798752,"MWI":552455,"MYS":40101890,"NAM":0,"NCL":1400822,"NER":894383,"NGA":73192180,"NIC":2255542,"NIU":3664,"NLD":144014380,"NOR":34785340,"NPL":697014,"NRU":161216,"NZL":22945982,"OMN":9824880,"OWID_KOS":0,"PAK":49058620,"PAN":2734755,"PER":21775106,"PHL":29024736,"PLW":161216,"PNG":2062832.1,"POL":451848670,"PRK":156835300,"PRT":30221142,"PRY":1654639,"PSE":0,"PYF":608224,"QAT":13266982,"ROU":201069600,"RUS":2348726800,"RWA":597232,"SAU":204603790,"SDN":3883377,"SEN":2636446,"SGP":34100850,"SHN":3664,"SLB":153888,"SLE":674176,"SLV":1967496,"SOM":923328,"SPM":47632,"SRB":57971500,"SSD":353638,"STP":51296,"SUR":1756928,"SVK":59562170,"SVN":16368946,"SWE":62009780,"SWZ":458000,"SXM":299179,"SYC":164880,"SYR":31073248,"TCA":0,"TCD":186864,"TGO":847915,"THA":48768180,"TJK":12041897,"TKM":35516484,"TLS":0,"TON":47632,"TTO":17354846,"TUN":12087189,"TUR":115617870,"TUV":0,"TWN":94333400,"TZA":2277593,"UGA":701855,"UKR":740662850,"URY":3164926,"USA":4663429600,"UZB":95384930,"VCT":65952,"VEN":109239830,"VGB":54960,"VNM":20584666,"VUT":58624,"WLF":0,"WSM":80608,"YEM":8192041.5,"ZAF":330497100,"ZMB":2865572,"ZWE":13068023},"1987":{"ABW":447008,"AFG":3113826,"AGO":5786029,"AIA":0,"ALB":7447081,"AND":0,"ARE":47450350,"ARG":114877224,"ARM":8189549.5,"ATA":3664,"ATG":274800,"AUS":234599840,"AUT":57373910,"AZE":49605304,"BDI":249152,"BEL":102588710,"BEN":473696,"BES":32196.998,"BFA":516623.97,"BGD":11799727,"BGR":91273150,"BHR":11420688,"BHS":1421632,"BIH":19522316,"BLR":112490520,"BLZ":227168,"BMU":571584,"BOL":4011800.8,"BRA":205967680,"BRB":941049,"BRN":3315920,"BTN":160059,"BWA":1238432,"CAF":260144,"CAN":430982050,"CHE":40205244,"CHL":22410162,"CHN":2257738500,"CIV":7349984,"CMR":1842992,"COD":3815863,"COG":1320092,"COK":21984,"COL":50123984,"COM":47632,"CPV":80608,"CRI":2723861,"CUB":33933260,"CUW":2402194,"CXR":0,"CYP":4184954.2,"CZE":183641400,"DEU":1032442900,"DJI":388384,"DMA":47632,"DNK":58242300,"DOM":9687290,"DZA":83883496,"ECU":15022251,"EGY":74613520,"ERI":0,"ESP":189508060,"EST":38528104,"ETH":2554381,"FIN":57533400,"FJI":471995,"FRA":387705100,"FRO":498304,"FSM":0,"GAB":4009482,"GBR":571667600,"GEO":15728214,"GHA":3167546,"GIN":992944,"GMB":179536,"GNB":194192,"GNQ":98928,"GRC":62576332,"GRD":73280,"GRL":234496,"GTM":3918400,"GUY":1308048,"HKG":28085646,"HND":2144191,"HRV":21059756,"HTI":898793,"HUN":84136470,"IDN":123878480,"IND":455343040,"IRL":30226336,"IRN":158562620,"IRQ":52183788,"ISL":1845061,"ISR":27068916,"ITA":380098560,"JAM":5379035,"JOR":9506019,"JPN":902530300,"KAZ":256083440,"KEN":5168547,"KGZ":21202664,"KHM":436016,"KIR":21984,"KNA":54960,"KOR":185358380,"KWT":31377858,"LAO":212512,"LBN":7670364,"LBR":758462,"LBY":32348262,"LCA":146560,"LIE":135113,"LKA":4026917,"LSO":0,"LTU":36069636,"LUX":8812260,"LVA":19834596,"MAC":970960,"MAR":19904884,"MDA":37534180,"MDG":1282418,"MDV":80608,"MEX":306022080,"MHL":0,"MKD":10801121,"MLI":357505,"MLT":1853984,"MMR":4943397,"MNE":1927989,"MNG":10482516,"MOZ":976747,"MRT":3242640,"MSR":29312,"MUS":930656,"MWI":545095,"MYS":40877684,"NAM":0,"NCL":1454488,"NER":992855,"NGA":59024428,"NIC":2430984,"NIU":3664,"NLD":151480370,"NOR":33207004,"NPL":860680,"NRU":157552,"NZL":24165260,"OMN":9401796,"OWID_KOS":0,"PAK":52988504,"PAN":3179553,"PER":25693674,"PHL":32495770,"PLW":161216,"PNG":2333968,"POL":463732640,"PRK":175618660,"PRT":31198344,"PRY":1876639,"PSE":0,"PYF":611888,"QAT":11470526,"ROU":211020750,"RUS":2358149600,"RWA":611419,"SAU":190446880,"SDN":3061183,"SEN":2424574,"SGP":31810848,"SHN":3664,"SLB":161216,"SLE":498304,"SLV":2414492,"SOM":992944,"SPM":51296,"SRB":56581970,"SSD":278883,"STP":51296,"SUR":1756784,"SVK":58863380,"SVN":15955907,"SWE":59694708,"SWZ":436016,"SXM":265977,"SYC":201520,"SYR":35942868,"TCA":0,"TCD":197856,"TGO":924976,"THA":53571300,"TJK":11813448,"TKM":35790644,"TLS":0,"TON":54960,"TTO":17489066,"TUN":11779839,"TUR":128442184,"TUV":0,"TWN":98206200,"TZA":2367510,"UGA":768574,"UKR":733831740,"URY":3542533,"USA":4825711600,"UZB":97499096,"VCT":76944,"VEN":110661140,"VGB":62288,"VNM":23296900,"VUT":47632,"WLF":0,"WSM":80608,"YEM":8626651,"ZAF":328664700,"ZMB":2673762,"ZWE":15170106},"1988":{"ABW":611888,"AFG":2856896,"AGO":5049306,"AIA":0,"ALB":7329222,"AND":0,"ARE":48095596,"ARG":121404740,"ARM":9290236,"ATA":7328,"ATG":285792,"AUS":240737040,"AUT":52937220,"AZE":51012316,"BDI":227168,"BEL":99742824,"BEN":508050.03,"BES":31716.998,"BFA":553264,"BGD":13478441,"BGR":86913330,"BHR":12142559,"BHS":1538880,"BIH":20143922,"BLR":114307260,"BLZ":249152,"BMU":644864,"BOL":4286778,"BRA":207695260,"BRB":944787,"BRN":5712176,"BTN":167395,"BWA":1300720,"CAF":230832,"CAN":455669100,"CHE":40662424,"CHL":26599978,"CHN":2425893600,"CIV":8804592,"CMR":2153961,"COD":3977992,"COG":1492941,"COK":21984,"COL":52017412,"COM":51296,"CPV":73280,"CRI":2905922,"CUB":35616450,"CUW":2366340,"CXR":0,"CYP":4197559,"CZE":180617040,"DEU":1029024200,"DJI":348080,"DMA":54960,"DNK":55013980,"DOM":9739755,"DZA":83708040,"ECU":17168596,"EGY":74309480,"ERI":0,"ESP":197457900,"EST":38564040,"ETH":2640066,"FIN":52058084,"FJI":549765,"FRA":385544860,"FRO":527616,"FSM":0,"GAB":4320706,"GBR":570293760,"GEO":16318989,"GHA":3233287,"GIN":1025920.06,"GMB":183200,"GNB":216176,"GNQ":106256,"GRC":67051870,"GRD":95264,"GRL":545936,"GTM":4075276.8,"GUY":1403312,"HKG":29284780,"HND":2464967,"HRV":21738328,"HTI":1007669,"HUN":78054780,"IDN":132721210,"IND":491692160,"IRL":29883636,"IRN":175142720,"IRQ":67127420,"ISL":1841119,"ISR":29702602,"ITA":385962240,"JAM":4525484,"JOR":9177012,"JPN":985464300,"KAZ":274206850,"KEN":4784129,"KGZ":21511424,"KHM":450672,"KIR":21984,"KNA":65952,"KOR":210953460,"KWT":32825112,"LAO":212512,"LBN":7345655,"LBR":809184,"LBY":36160364,"LCA":164880,"LIE":179013,"LKA":3456638,"LSO":0,"LTU":36789700,"LUX":9099730,"LVA":19407344,"MAC":963632,"MAR":20930808,"MDA":39210884,"MDG":1285795,"MDV":95264,"MEX":305665570,"MHL":0,"MKD":11166347,"MLI":383030,"MLT":2011535.9,"MMR":4086656,"MNE":1989434,"MNG":11492876,"MOZ":1006193.06,"MRT":3184016,"MSR":29312,"MUS":853712,"MWI":541487,"MYS":42869204,"NAM":0,"NCL":1501239,"NER":983004,"NGA":70421350,"NIC":2240026,"NIU":3664,"NLD":145602740,"NOR":35591656,"NPL":975970,"NRU":157552,"NZL":25449338,"OMN":10516576,"OWID_KOS":0,"PAK":57607376,"PAN":2914665,"PER":25018144,"PHL":37484708,"PLW":183200,"PNG":2198400,"POL":444229980,"PRK":199230450,"PRT":32567554,"PRY":2143738,"PSE":0,"PYF":575248,"QAT":11897661,"ROU":211567800,"RUS":2436094000,"RWA":692307,"SAU":202251920,"SDN":4429775,"SEN":2710809,"SGP":35280656,"SHN":7328,"SLB":157552,"SLE":458000,"SLV":2433068,"SOM":1003656,"SPM":65952,"SRB":58375148,"SSD":403373,"STP":47632,"SUR":1873888,"SVK":57893476,"SVN":16536228,"SWE":57425120,"SWZ":436016,"SXM":262007,"SYC":197856,"SYR":36679116,"TCA":0,"TCD":65952,"TGO":963449,"THA":60490628,"TJK":12756665,"TKM":36972620,"TLS":0,"TON":69616,"TTO":15833101,"TUN":12495245,"TUR":124727510,"TUV":0,"TWN":113093380,"TZA":2271686,"UGA":862875,"UKR":727357630,"URY":4785973,"USA":5050543600,"UZB":100721820,"VCT":65952,"VEN":115751750,"VGB":65952,"VNM":23072536,"VUT":65952,"WLF":0,"WSM":84272,"YEM":9550232,"ZAF":342654700,"ZMB":3109022,"ZWE":16029461},"1989":{"ABW":648528,"AFG":2764855,"AGO":4922750,"AIA":0,"ALB":8986169,"AND":0,"ARE":54186136,"ARG":117020424,"ARM":9462471,"ATA":7328,"ATG":285792,"AUS":256836640,"AUT":53696290,"AZE":50643184,"BDI":267472,"BEL":106792080,"BEN":570164,"BES":60375,"BFA":820736,"BGD":13382363,"BGR":86482220,"BHR":11716746,"BHS":1945584,"BIH":20082026,"BLR":109141630,"BLZ":300448,"BMU":780432,"BOL":4968446,"BRA":212071060,"BRB":988686,"BRN":6342384,"BTN":119770,"BWA":1428960,"CAF":249152,"CAN":462885150,"CHE":39419076,"CHL":32017830,"CHN":2463654400,"CIV":8265983.5,"CMR":7577693,"COD":4351992,"COG":1495627,"COK":21984,"COL":52792804,"COM":51296,"CPV":80608,"CRI":2933345,"CUB":35719060,"CUW":4504520,"CXR":0,"CYP":4429735,"CZE":172330690,"DEU":1008792400,"DJI":388384,"DMA":58624,"DNK":48685136,"DOM":10257903,"DZA":79808264,"ECU":20153710,"EGY":71904560,"ERI":0,"ESP":224885400,"EST":39366484,"ETH":2794114,"FIN":52447930,"FJI":625202,"FRA":399619550,"FRO":578912,"FSM":0,"GAB":5757464,"GBR":581576100,"GEO":16196152,"GHA":3073432,"GIN":1044240,"GMB":179536,"GNB":230832,"GNQ":117248,"GRC":73230810,"GRD":102592,"GRL":472656,"GTM":4188155.2,"GUY":1183472,"HKG":30141178,"HND":2680274,"HRV":21670336,"HTI":1023120.06,"HUN":75917200,"IDN":131673520,"IND":540651100,"IRL":30061098,"IRN":190197810,"IRQ":72241820,"ISL":1896457,"ISR":31394252,"ITA":404741950,"JAM":6724091,"JOR":9079754,"JPN":1021681800,"KAZ":264740350,"KEN":5187409,"KGZ":20915994,"KHM":450672,"KIR":21984,"KNA":65952,"KOR":223510380,"KWT":35771644,"LAO":230832,"LBN":7720771,"LBR":659594,"LBY":37068520,"LCA":164880,"LIE":187138,"LKA":3447011,"LSO":0,"LTU":36898080,"LUX":9846277,"LVA":18120868,"MAC":1029584.06,"MAR":22660664,"MDA":38335516,"MDG":925801,"MDV":124576,"MEX":323480320,"MHL":0,"MKD":11138676,"MLI":415882,"MLT":2169088,"MMR":4425299,"MNE":1983362,"MNG":10459013,"MOZ":1034531,"MRT":2802960,"MSR":29312,"MUS":1051568,"MWI":563351,"MYS":50083868,"NAM":0,"NCL":1639517,"NER":1033957.94,"NGA":42119388,"NIC":1468317,"NIU":3664,"NLD":161664220,"NOR":34147852,"NPL":893564,"NRU":157552,"NZL":25453206,"OMN":9985697,"OWID_KOS":0,"PAK":60316616,"PAN":2510273,"PER":21762108,"PHL":38906536,"PLW":227168,"PNG":2033520,"POL":422175100,"PRK":209248820,"PRT":40822224,"PRY":2223418,"PSE":0,"PYF":542272,"QAT":14292370,"ROU":212965860,"RUS":2404973800,"RWA":684247,"SAU":203423890,"SDN":3430803,"SEN":3661877,"SGP":41003824,"SHN":7328,"SLB":161216,"SLE":373728,"SLV":2547246,"SOM":952072,"SPM":102592,"SRB":58189176,"SSD":312751,"STP":47632,"SUR":1851760,"SVK":55249748,"SVN":16455616,"SWE":55520776,"SWZ":436016,"SXM":498752,"SYC":234496,"SYR":34271284,"TCA":0,"TCD":102592,"TGO":1024183.06,"THA":71403816,"TJK":12658985,"TKM":37448250,"TLS":0,"TON":69616,"TTO":16105026,"TUN":13268198,"TUR":137569950,"TUV":0,"TWN":123126424,"TZA":2161598,"UGA":800488,"UKR":683160900,"URY":4852638,"USA":5132206000,"UZB":104046710,"VCT":76944,"VEN":108571080,"VGB":65952,"VNM":17397910,"VUT":62288,"WLF":0,"WSM":84272,"YEM":9935053,"ZAF":340711040,"ZMB":2570005,"ZWE":16113653},"1990":{"ABW":487312,"AFG":2024326.1,"AGO":5089864,"AIA":47632,"ALB":5520602,"AND":406704,"ARE":51703772,"ARG":112079090,"ARM":8947546,"ATA":10992,"ATG":241824,"AUS":278160300,"AUT":62167160,"AZE":51151204,"BDI":208848,"BEL":120292800,"BEN":579346,"BES":64657.004,"BFA":582576,"BGD":14081596,"BGR":76637980,"BHR":11555729,"BHS":2022527.9,"BIH":19886236,"BLR":108345060,"BLZ":311440,"BMU":501968.03,"BOL":10006868,"BRA":218658000,"BRB":1275266,"BRN":5455696,"BTN":185730,"BWA":2700368,"CAF":183200,"CAN":458503070,"CHE":44161000,"CHL":32908116,"CHN":2484854800,"CIV":4781520,"CMR":2604793,"COD":4248965,"COG":1007907.06,"COK":43968,"COL":56897744,"COM":65952,"CPV":179536,"CRI":2913015,"CUB":29648420,"CUW":4823944,"CXR":0,"CYP":4644861,"CZE":164250450,"DEU":1054740600,"DJI":296784,"DMA":58624,"DNK":53476972,"DOM":8936017,"DZA":76737624,"ECU":16457821,"EGY":75217530,"ERI":0,"ESP":230500240,"EST":36919604,"ETH":2986507,"FIN":56915000,"FJI":801220,"FRA":393430700,"FRO":703488,"FSM":0,"GAB":4484725,"GBR":601945100,"GEO":15948386,"GHA":3513776,"GIN":1003936.06,"GMB":197856,"GNB":172208,"GNQ":62288,"GRC":83438040,"GRD":106256,"GRL":624714,"GTM":4972245,"GUY":1128512,"HKG":27147690,"HND":2504658,"HRV":22974684,"HTI":994997,"HUN":73376824,"IDN":155080830,"IND":577996000,"IRL":32944420,"IRN":209943740,"IRQ":49057050,"ISL":2222787,"ISR":35824360,"ITA":438904300,"JAM":7527165,"JOR":10476423,"JPN":1157195500,"KAZ":268173090,"KEN":5819044,"KGZ":18997598,"KHM":1260416,"KIR":21984,"KNA":106256,"KOR":250510830,"KWT":37807036,"LAO":512960.03,"LBN":7868195,"LBR":456132,"LBY":36513784,"LCA":179536,"LIE":198971,"LKA":3830820,"LSO":1472928,"LTU":35737676,"LUX":11815503,"LVA":19662722,"MAC":1033247.94,"MAR":22297998,"MDA":36239530,"MDG":944296,"MDV":172208,"MEX":317042370,"MHL":0,"MKD":11106583,"MLI":422243,"MLT":2427397,"MMR":4235719,"MNE":1962026,"MNG":9791058,"MOZ":1025375.94,"MRT":853712,"MSR":29312,"MUS":1461936,"MWI":740333,"MYS":54269364,"NAM":0,"NCL":1576355,"NER":598802,"NGA":38857280,"NIC":2043946,"NIU":7328,"NLD":162665120,"NOR":35003000,"NPL":721436,"NRU":124576,"NZL":25502508,"OMN":11222441,"OWID_KOS":0,"PAK":67827370,"PAN":2631999,"PER":21400794,"PHL":41349500,"PLW":234496,"PNG":2154432,"POL":376641280,"PRK":118378920,"PRT":45278820,"PRY":2135640,"PSE":861040,"PYF":468992,"QAT":11411196,"ROU":176506900,"RUS":2536247800,"RWA":523863.97,"SAU":208497000,"SDN":4768885,"SEN":3138804,"SGP":43535576,"SHN":7328,"SLB":146560,"SLE":498304,"SLV":2475071,"SOM":782197,"SPM":91600,"SRB":57827508,"SSD":433885,"STP":47632,"SUR":1737368,"SVK":61472836,"SVN":15094546,"SWE":57509900,"SWZ":959968,"SXM":534120,"SYC":150224,"SYR":37045332,"TCA":62288,"TCD":377392,"TGO":977644,"THA":86563260,"TJK":11965114,"TKM":31702526,"TLS":0,"TON":84272,"TTO":16981164,"TUN":13483229,"TUR":151614980,"TUV":3664,"TWN":124184000,"TZA":2112309,"UGA":760855,"UKR":706226900,"URY":3967289,"USA":5120957000,"UZB":103783350,"VCT":80608,"VEN":121823040,"VGB":65952,"VNM":21298646,"VUT":65952,"WLF":18320,"WSM":87936,"YEM":9520184,"ZAF":312930240,"ZMB":2407113,"ZWE":15551593},"1991":{"ABW":531280,"AFG":1914301,"AGO":5064054,"AIA":47632,"ALB":4290226,"AND":406704,"ARE":56673424,"ARG":117505740,"ARM":7307800,"ATA":14656,"ATG":249152,"AUS":279534000,"AUT":65765656,"AZE":49752200,"BDI":238160,"BEL":123362620,"BEN":619650,"BES":51594,"BFA":626544,"BGD":14741983,"BGR":61456344,"BHR":11391223,"BHS":1996880,"BIH":14069425,"BLR":104071656,"BLZ":406704,"BMU":538608,"BOL":10495215,"BRA":229394000,"BRB":1418175,"BRN":7210752,"BTN":185738,"BWA":2634416,"CAF":190528,"CAN":450159600,"CHE":46136910,"CHL":30891810,"CHN":2606096100,"CIV":4308864,"CMR":2668440,"COD":3280404,"COG":1082796,"COK":43968,"COL":56654080,"COM":65952,"CPV":164880,"CRI":3287914,"CUB":27170202,"CUW":3849377,"CXR":0,"CYP":5133205,"CZE":148883260,"DEU":1016870300,"DJI":300448,"DMA":58624,"DNK":64104610,"DOM":9538286,"DZA":78806830,"ECU":16157175,"EGY":77295850,"ERI":0,"ESP":240230740,"EST":34147164,"ETH":2958472,"FIN":55188000,"FJI":655032,"FRA":417775000,"FRO":655856,"FSM":0,"GAB":4521703,"GBR":609412700,"GEO":15872158,"GHA":3901860,"GIN":1025920.06,"GMB":197856,"GNB":175872,"GNQ":65952,"GRC":83407500,"GRD":109920,"GRL":609900,"GTM":4951134,"GUY":1106528,"HKG":28463072,"HND":2526966,"HRV":16985248,"HTI":976137,"HUN":69701940,"IDN":174865010,"IND":615365000,"IRL":33674308,"IRN":221833920,"IRQ":45185440,"ISL":2103614,"ISR":36148456,"ITA":438385660,"JAM":7750991,"JOR":9903911,"JPN":1168897300,"KAZ":261065920,"KEN":4834337,"KGZ":15656505,"KHM":1304384,"KIR":21984,"KNA":106256,"KOR":275688220,"KWT":492841280,"LAO":545936,"LBN":8115152.5,"LBR":374548,"LBY":42619850,"LCA":190528,"LIE":206329,"LKA":4138236,"LSO":1527888,"LTU":37820376,"LUX":12434925,"LVA":17920696,"MAC":1091872,"MAR":23688164,"MDA":29273716,"MDG":1024866,"MDV":153888,"MEX":330133150,"MHL":0,"MKD":7794488,"MLI":425894,"MLT":2271843,"MMR":4137416,"MNE":1388069,"MNG":11959794,"MOZ":941464,"MRT":868368,"MSR":29312,"MUS":1520560,"MWI":787610,"MYS":65785132,"NAM":1055232,"NCL":1758618,"NER":566218,"NGA":41929196,"NIC":1986324,"NIU":7328,"NLD":171110620,"NOR":33458000,"NPL":1026311.06,"NRU":124576,"NZL":26182470,"OMN":11594826,"OWID_KOS":0,"PAK":67477100,"PAN":3104491,"PER":20757894,"PHL":43471884,"PLW":234496,"PNG":2169088,"POL":373622800,"PRK":112819060,"PRT":47097090,"PRY":2103445,"PSE":883024,"PYF":468992,"QAT":17380476,"ROU":142208210,"RUS":2406755600,"RWA":472136,"SAU":288545500,"SDN":4466480,"SEN":3379206,"SGP":44235470,"SHN":7328,"SLB":157552,"SLE":556928,"SLV":3154717,"SOM":703923,"SPM":102592,"SRB":40958150,"SSD":406424,"STP":47632,"SUR":2023142.1,"SVK":53286440,"SVN":13973374,"SWE":57739636,"SWZ":872032,"SXM":426213,"SYC":172208,"SYR":42200812,"TCA":62288,"TCD":384720,"TGO":1049806,"THA":95044850,"TJK":9658038,"TKM":32422294,"TLS":0,"TON":87936,"TTO":16968162,"TUN":16005548,"TUR":158126320,"TUV":3664,"TWN":133604000,"TZA":2255268,"UGA":779805,"UKR":632924160,"URY":4527678,"USA":5062956500,"UZB":102288880,"VCT":84272,"VEN":115052180,"VGB":73280,"VNM":21375534,"VUT":65952,"WLF":18320,"WSM":95264,"YEM":9127376,"ZAF":326026700,"ZMB":2381811,"ZWE":15501544},"1992":{"ABW":538608,"AFG":1482054,"AGO":5164449,"AIA":47632,"ALB":2517116,"AND":406704,"ARE":57757056,"ARG":121230584,"ARM":5723698,"ATA":14656,"ATG":249152,"AUS":284528770,"AUT":60266150,"AZE":56174400,"BDI":216176,"BEL":122488490,"BEN":670946,"BES":42507,"BFA":630208,"BGD":15379904,"BGR":57306464,"BHR":10492517,"BHS":1868640,"BIH":15028713,"BLR":93482970,"BLZ":355408,"BMU":461664,"BOL":11014244,"BRA":233601000,"BRB":1361827,"BRN":6884656,"BTN":215057,"BWA":2777312,"CAF":194192,"CAN":464012830,"CHE":46018556,"CHL":32000644,"CHN":2730787600,"CIV":3843536,"CMR":2712299,"COD":2906756,"COG":1289163,"COK":43968,"COL":61494680,"COM":69616,"CPV":179536,"CRI":3741868,"CUB":20593126,"CUW":3171417,"CXR":0,"CYP":5505656,"CZE":145705800,"DEU":969474200,"DJI":304112,"DMA":58624,"DNK":58326548,"DOM":10418188,"DZA":79883310,"ECU":21959676,"EGY":79939880,"ERI":0,"ESP":248631800,"EST":24421038,"ETH":2936737,"FIN":54265000,"FJI":730309,"FRA":407717280,"FRO":648528,"FSM":135568,"GAB":4916933,"GBR":593845950,"GEO":15276915,"GHA":3242640,"GIN":1058896,"GMB":197856,"GNB":179536,"GNQ":65952,"GRC":84975656,"GRD":117248,"GRL":595807,"GTM":5919209,"GUY":1040576,"HKG":32918560,"HND":2803312,"HRV":16369223,"HTI":888522,"HUN":62348020,"IDN":199418670,"IND":655447040,"IRL":33495316,"IRN":226934900,"IRQ":58889384,"ISL":2250166,"ISR":42082496,"ITA":438770980,"JAM":7708731,"JOR":11984199,"JPN":1178674800,"KAZ":236131070,"KEN":5536456,"KGZ":11041681,"KHM":1348352,"KIR":25648,"KNA":109920,"KOR":299905440,"KWT":29648394,"LAO":592727,"LBN":9726913,"LBR":391658,"LBY":37024420,"LCA":212512,"LIE":206950,"LKA":5106336,"LSO":1586512,"LTU":21168442,"LUX":12202474,"LVA":14194646,"MAC":1080880,"MAR":24736784,"MDA":20978058,"MDG":1002845.06,"MDV":230832,"MEX":332780160,"MHL":76944,"MKD":8394224,"MLI":462522,"MLT":2293597,"MMR":4841915,"MNE":1483274,"MNG":10942613,"MOZ":1027205.94,"MRT":905008,"MSR":29312,"MUS":1707424,"MWI":787089,"MYS":72961016,"NAM":1150496,"NCL":1575469,"NER":524607,"NGA":46265316,"NIC":2372617,"NIU":7328,"NLD":170918110,"NOR":34394000,"NPL":1232929,"NRU":120912,"NZL":28166716,"OMN":11892658,"OWID_KOS":0,"PAK":72014920,"PAN":4112287,"PER":20985784,"PHL":48292790,"PLW":197856,"PNG":2191072,"POL":364510600,"PRK":97981620,"PRT":50920116,"PRY":2579939,"PSE":916000,"PYF":447008,"QAT":26780340,"ROU":132011250,"RUS":1966504700,"RWA":479486,"SAU":316174700,"SDN":3989272,"SEN":3422666,"SGP":47441470,"SHN":7328,"SLB":161216,"SLE":282128,"SLV":3316777,"SOM":666088,"SPM":95264,"SRB":43684256,"SSD":363402,"STP":47632,"SUR":2030452,"SVK":48886840,"SVN":13882582,"SWE":57567240,"SWZ":831728,"SXM":351148,"SYC":172208,"SYR":42561740,"TCA":65952,"TCD":406704,"TGO":1030496,"THA":105513440,"TJK":7308103,"TKM":31994180,"TLS":0,"TON":69616,"TTO":19102764,"TUN":15275014,"TUR":164064880,"TUV":3664,"TWN":142188000,"TZA":2177588,"UGA":797791,"UKR":589282800,"URY":5142888,"USA":5174227500,"UZB":110984330,"VCT":84272,"VEN":105576780,"VGB":80608,"VNM":21466460,"VUT":65952,"WLF":18320,"WSM":98928,"YEM":9873645,"ZAF":301325400,"ZMB":2424693,"ZWE":16713457},"1993":{"ABW":648528,"AFG":1486943,"AGO":5748389,"AIA":54960,"ALB":2337999,"AND":410368,"ARE":65565560,"ARG":117777490,"ARM":2510247,"ATA":14656,"ATG":256480.02,"AUS":288873500,"AUT":60692130,"AZE":48406096,"BDI":227168,"BEL":121423870,"BEN":807422,"BES":65618,"BFA":626544,"BGD":16062897,"BGR":58364024,"BHR":16839962,"BHS":1744064,"BIH":12580576,"BLR":80561816,"BLZ":377392,"BMU":538608,"BOL":11550309,"BRA":244306000,"BRB":1096878,"BRN":6357040,"BTN":181786,"BWA":3195008,"CAF":197856,"CAN":464554180,"CHE":43605820,"CHL":34097850,"CHN":2921651000,"CIV":5092960,"CMR":2865801,"COD":2662330,"COG":1160443,"COK":47632,"COL":63337804,"COM":73280,"CPV":172208,"CRI":3890892,"CUB":19822772,"CUW":4895651,"CXR":0,"CYP":5749300,"CZE":140124030,"DEU":959367200,"DJI":304112,"DMA":62288,"DNK":60573716,"DOM":11208752,"DZA":81943970,"ECU":24088526,"EGY":92277976,"ERI":0,"ESP":240046060,"EST":19438748,"ETH":2993623,"FIN":56314000,"FJI":728647,"FRA":388397980,"FRO":582576,"FSM":142896,"GAB":4974695,"GBR":579612540,"GEO":9915700,"GHA":3817888,"GIN":1088208,"GMB":208848,"GNB":183200,"GNQ":69616,"GRC":84284960,"GRD":120912,"GRL":545942,"GTM":5577778,"GUY":1044240,"HKG":34777844,"HND":2940777,"HRV":16806462,"HTI":684199,"HUN":63558412,"IDN":215108740,"IND":677299260,"IRL":33716364,"IRN":235606900,"IRQ":63129812,"ISL":2400940,"ISR":44234508,"ITA":431176400,"JAM":8000958.5,"JOR":11774286,"JPN":1171686700,"KAZ":208216780,"KEN":6341798,"KGZ":8468166,"KHM":1384992,"KIR":29312,"KNA":113584,"KOR":330173950,"KWT":49129430,"LAO":607425,"LBN":10354905,"LBR":417301,"LBY":38708330,"LCA":234496,"LIE":215034,"LKA":4975431,"LSO":1634144,"LTU":16319714,"LUX":12351908,"LVA":11922756,"MAC":1179808,"MAR":26778886,"MDA":15845813,"MDG":1032120,"MDV":197856,"MEX":338067200,"MHL":84272,"MKD":7599232,"MLI":502812.97,"MLT":2885588,"MMR":5303029,"MNE":1293620,"MNG":9193024,"MOZ":1140326,"MRT":926992,"MSR":29312,"MUS":1773376,"MWI":881995,"MYS":86718630,"NAM":1388656,"NCL":1828244,"NER":598499,"NGA":44814164,"NIC":2282398,"NIU":7328,"NLD":170863250,"NOR":35938000,"NPL":1397333,"NRU":113584,"NZL":27760956,"OMN":13224754,"OWID_KOS":0,"PAK":77175720,"PAN":3784946,"PER":23884756,"PHL":48928836,"PLW":197856,"PNG":2191072,"POL":365174880,"PRK":89581560,"PRT":49434028,"PRY":2914101,"PSE":934320,"PYF":468992,"QAT":30684492,"ROU":122693800,"RUS":1866729100,"RWA":482945,"SAU":340642430,"SDN":2746330,"SEN":3538709,"SGP":49661856,"SHN":10992,"SLB":172208,"SLE":263808,"SLV":3975594,"SOM":625768,"SPM":73280,"SRB":38095730,"SSD":250506.02,"STP":47632,"SUR":2037761.9,"SVK":46351170,"SVN":14246224,"SWE":57560864,"SWZ":710816,"SXM":542059,"SYC":183200,"SYR":45221630,"TCA":65952,"TCD":403040,"TGO":1068807,"THA":121855064,"TJK":5170596,"TKM":27516396,"TLS":0,"TON":84272,"TTO":17411194,"TUN":16616589,"TUR":171138860,"TUV":3664,"TWN":153808000,"TZA":2426036,"UGA":797457,"UKR":510320400,"URY":4439220,"USA":5272850400,"UZB":115617240,"VCT":102592,"VEN":123966330,"VGB":84272,"VNM":22853002,"VUT":65952,"WLF":18320,"WSM":102592,"YEM":8625426,"ZAF":320345300,"ZMB":2466007,"ZWE":16046612},"1994":{"ABW":659520,"AFG":1453829,"AGO":11353248,"AIA":54960,"ALB":1923806,"AND":406704,"ARE":75010504,"ARG":118469420,"ARM":2684702,"ATA":14656,"ATG":267472,"AUS":293700930,"AUT":61066644,"AZE":41944856,"BDI":234496,"BEL":124796744,"BEN":911527,"BES":62909,"BFA":644864,"BGD":17538016,"BGR":56367040,"BHR":14443015,"BHS":1769712,"BIH":3204952,"BLR":67879400,"BLZ":373728,"BMU":531280,"BOL":9638258,"BRA":254002000,"BRB":1163526,"BRN":5552968,"BTN":212410,"BWA":3030128,"CAF":208848,"CAN":479033000,"CHE":42666300,"CHL":37974868,"CHN":3103739000,"CIV":4132991.8,"CMR":4879764,"COD":2750982,"COG":3383880,"COK":47632,"COL":67037376,"COM":73280,"CPV":175872,"CRI":5199850,"CUB":21382318,"CUW":4693567,"CXR":0,"CYP":5991493,"CZE":132668030,"DEU":943184830,"DJI":300448,"DMA":69616,"DNK":64673270,"DOM":11796446,"DZA":88608390,"ECU":14306838,"EGY":88372740,"ERI":743834,"ESP":252300020,"EST":20045086,"ETH":2197201,"FIN":61732000,"FJI":723077,"FRA":381576320,"FRO":575248,"FSM":153888,"GAB":4541731,"GBR":574016900,"GEO":6067844,"GHA":4539696,"GIN":1124848,"GMB":208848,"GNB":183200,"GNQ":1152916,"GRC":86430260,"GRD":142896,"GRL":495907,"GTM":6751174,"GUY":1458272,"HKG":31079292,"HND":3231039,"HRV":16049805,"HTI":183200,"HUN":61888990,"IDN":219371660,"IND":714063740,"IRL":34838450,"IRN":263327400,"IRQ":76436660,"ISL":2349664,"ISR":47474584,"ITA":425428220,"JAM":8188610,"JOR":13249567,"JPN":1226702200,"KAZ":174933440,"KEN":6553312,"KGZ":6144479,"KHM":1481907,"KIR":29312,"KNA":120912,"KOR":355694820,"KWT":57196628,"LAO":634264,"LBN":11110825,"LBR":415256,"LBY":51359944,"LCA":260144,"LIE":201111,"LKA":5435205,"LSO":1674448,"LTU":15767042,"LUX":11542851,"LVA":10371239,"MAC":1271408,"MAR":28123800,"MDA":12426964,"MDG":1152161,"MDV":197856,"MEX":351843100,"MHL":84272,"MKD":7903248,"MLI":548393,"MLT":2658345,"MMR":6173965,"MNE":1256653,"MNG":7864772,"MOZ":1098034,"MRT":956304,"MSR":32976,"MUS":1623152,"MWI":901750,"MYS":88036030,"NAM":1571856,"NCL":1971181,"NER":577016,"NGA":80462200,"NIC":2517961,"NIU":7328,"NLD":171648180,"NOR":37853000,"NPL":1619432,"NRU":109920,"NZL":27899822,"OMN":17384390,"OWID_KOS":0,"PAK":84018296,"PAN":4177258,"PER":24176558,"PHL":54158224,"PLW":197856,"PNG":2185931,"POL":360218400,"PRK":81580344,"PRT":50206744,"PRY":3404286,"PSE":967296,"PYF":479984,"QAT":32343414,"ROU":120904660,"RUS":1647664500,"RWA":462123,"SAU":333643000,"SDN":3826378,"SEN":3836950,"SGP":60085936,"SHN":10992,"SLB":183200,"SLE":274800,"SLV":4512672,"SOM":618425,"SPM":69616,"SRB":37040110,"SSD":344484,"STP":47632,"SUR":2042253,"SVK":43756980,"SVN":14636105,"SWE":60014544,"SWZ":1077216,"SXM":519684.03,"SYC":201520,"SYR":45650096,"TCA":69616,"TCD":412105,"TGO":1006679.06,"THA":136870020,"TJK":2355098,"TKM":34216140,"TLS":0,"TON":91600,"TTO":15349368,"TUN":16135008,"TUR":167565650,"TUV":3664,"TWN":161174000,"TZA":2063123,"UGA":708177,"UKR":419492100,"URY":4030404,"USA":5364279300,"UZB":109784970,"VCT":120912,"VEN":119765340,"VGB":84272,"VNM":27362152,"VUT":65952,"WLF":18320,"WSM":95264,"YEM":9910087,"ZAF":338697570,"ZMB":2393258,"ZWE":17393590},"1995":{"ABW":707152,"AFG":1417327,"AGO":12616650,"AIA":58624,"ALB":2089065.1,"AND":425024,"ARE":72463500,"ARG":125239784,"ARM":3362694,"ATA":3664,"ATG":271136,"AUS":305055580,"AUT":64044060,"AZE":33309350,"BDI":238160,"BEL":125936296,"BEN":956267,"BES":62254,"BFA":624110,"BGD":21041714,"BGR":57908988,"BHR":14823117,"BHS":1839328,"BIH":3402028,"BLR":60905644,"BLZ":377392,"BMU":531280,"BOL":9016550,"BRA":268678000,"BRB":1282955,"BRN":5825335,"BTN":248966,"BWA":3044784,"CAF":208848,"CAN":491825700,"CHE":43407790,"CHL":41562532,"CHN":3361637000,"CIV":6225337,"CMR":5374671,"COD":3096173,"COG":3224670,"COK":47632,"COL":59420744,"COM":76944,"CPV":197856,"CRI":4800770,"CUB":22835124,"CUW":4644676,"CXR":0,"CYP":5861933,"CZE":131622220,"DEU":939897150,"DJI":311440,"DMA":80608,"DNK":61653396,"DOM":15106975,"DZA":96776920,"ECU":23498436,"EGY":98994500,"ERI":822787,"ESP":266034880,"EST":18061320,"ETH":2505953,"FIN":58116000,"FJI":736697,"FRA":386456830,"FRO":571584,"FSM":179536,"GAB":5220396,"GBR":566158900,"GEO":2290286,"GHA":4623968,"GIN":1165152,"GMB":216176,"GNB":183200,"GNQ":1227055,"GRC":86963200,"GRD":150224,"GRL":534331,"GTM":7078550,"GUY":1568192,"HKG":31267054,"HND":3836235,"HRV":16815704,"HTI":875696,"HUN":61601110,"IDN":222410480,"IND":760461630,"IRL":35852984,"IRN":269270080,"IRQ":79695130,"ISL":2469337,"ISR":49865530,"ITA":449430200,"JAM":9173406,"JOR":13208063,"JPN":1239048100,"KAZ":168285920,"KEN":7548754,"KGZ":4506950,"KHM":1555486,"KIR":29312,"KNA":128240.01,"KOR":383665470,"KWT":56127692,"LAO":670900,"LBN":12254741,"LBR":416069,"LBY":54595650,"LCA":274800,"LIE":204202,"LKA":5814277,"LSO":1707424,"LTU":15057343,"LUX":9155929,"LVA":9134976,"MAC":1231104,"MAR":28750270,"MDA":11405406,"MDG":1192441,"MDV":249152,"MEX":331142700,"MHL":87936,"MKD":7925232,"MLI":595200,"MLT":2452126,"MMR":6892622,"MNE":1327336,"MNG":7837062,"MOZ":1130973,"MRT":1014928,"MSR":32976,"MUS":1828336,"MWI":906502,"MYS":110840970,"NAM":1619488,"NCL":2063132,"NER":558136,"NGA":84343390,"NIC":2755058,"NIU":7328,"NLD":173201140,"NOR":38458000,"NPL":2308915,"NRU":106256,"NZL":28003232,"OMN":18734758,"OWID_KOS":0,"PAK":83614360,"PAN":3652970,"PER":25143060,"PHL":59964620,"PLW":197856,"PNG":2059168.1,"POL":362614560,"PRK":76082150,"PRT":54468372,"PRY":3937149,"PSE":945312,"PYF":472656,"QAT":33137150,"ROU":125711860,"RUS":1619727200,"RWA":454761,"SAU":268131870,"SDN":3950587,"SEN":3430121,"SGP":40545824,"SHN":10992,"SLB":190528,"SLE":223504,"SLV":4998356,"SOM":585433,"SPM":69616,"SRB":39140836,"SSD":356079,"STP":47632,"SUR":2060550.9,"SVK":44144950,"SVN":15354245,"SWE":59506170,"SWZ":1062560,"SXM":514271.03,"SYC":197856,"SYR":46082532,"TCA":69616,"TCD":427411,"TGO":1174741,"THA":153650030,"TJK":2445277,"TKM":34569176,"TLS":0,"TON":95264,"TTO":14732517,"TUN":16271666,"TUR":181355250,"TUV":3664,"TWN":168886990,"TZA":2433890,"UGA":925485,"UKR":390072130,"URY":4557192,"USA":5425259500,"UZB":104802930,"VCT":128240.01,"VEN":124730820,"VGB":87936,"VNM":30088820,"VUT":65952,"WLF":18320,"WSM":113584,"YEM":11062451,"ZAF":361693600,"ZMB":2142313,"ZWE":15028392},"1996":{"ABW":725472,"AFG":1370104,"AGO":15248957,"AIA":62288,"ALB":2017508,"AND":454336,"ARE":75412150,"ARG":131134840,"ARM":2500312,"ATA":3664,"ATG":289456,"AUS":311940480,"AUT":67388560,"AZE":31242310,"BDI":241824,"BEL":129478744,"BEN":1183806,"BES":58235,"BFA":704700,"BGD":21492816,"BGR":58460100,"BHR":16018644,"BHS":1813680,"BIH":4239503,"BLR":61734784,"BLZ":307776,"BMU":527616,"BOL":10016150,"BRA":289311000,"BRB":1339005,"BRN":5878721,"BTN":298272,"BWA":2755328,"CAF":212512,"CAN":508196640,"CHE":44099084,"CHL":48226292,"CHN":3508818200,"CIV":7526009,"CMR":5974660,"COD":3472628,"COG":4037411.2,"COK":51296,"COL":59912670,"COM":80608,"CPV":216176,"CRI":4686377,"CUB":23332950,"CUW":4344809,"CXR":0,"CYP":6211888,"CZE":135018670,"DEU":959653300,"DJI":307776,"DMA":73280,"DNK":74899650,"DOM":16484352,"DZA":100039430,"ECU":25299900,"EGY":97950850,"ERI":898479,"ESP":253497860,"EST":19043080,"ETH":2794189,"FIN":64032996,"FJI":792447,"FRA":402893150,"FRO":600896,"FSM":183200,"GAB":5885637,"GBR":586760700,"GEO":4053812,"GHA":4858464,"GIN":1234768,"GMB":219840,"GNB":205184,"GNQ":1355536,"GRC":89114950,"GRD":153888,"GRL":596899,"GTM":6571124,"GUY":1652464,"HKG":28908528,"HND":3875521,"HRV":17343678,"HTI":1018592,"HUN":63158110,"IDN":253065010,"IND":823620700,"IRL":37469268,"IRN":274926140,"IRQ":74709900,"ISL":2523724,"ISR":51935750,"ITA":443656700,"JAM":9687622,"JOR":13825418,"JPN":1251545700,"KAZ":154505020,"KEN":9292462,"KGZ":5651918,"KHM":1631315,"KIR":29312,"KNA":131904,"KOR":420996060,"KWT":51626870,"LAO":749891,"LBN":12752780,"LBR":427462,"LBY":53951944,"LCA":293120,"LIE":205960,"LKA":6970579,"LSO":1736736,"LTU":15739963,"LUX":9207411,"LVA":9212675,"MAC":1406976,"MAR":29524522,"MDA":11687090,"MDG":1245339,"MDV":289456,"MEX":341764670,"MHL":87936,"MKD":9416555,"MLI":646081,"MLT":2533947,"MMR":7187982,"MNE":1552994,"MNG":7935414,"MOZ":1091814,"MRT":1062560,"MSR":36640,"MUS":1949248,"MWI":919530,"MYS":110632800,"NAM":1722080,"NCL":2183915,"NER":638780,"NGA":97889660,"NIC":2847245,"NIU":7328,"NLD":182296540,"NOR":41524000,"NPL":2352779,"NRU":102592,"NZL":29304160,"OMN":18108174,"OWID_KOS":0,"PAK":93538960,"PAN":4446773,"PER":24717086,"PHL":61265050,"PLW":197856,"PNG":2190058,"POL":377285400,"PRK":66291536,"PRT":51761496,"PRY":3718801,"PSE":1036911.94,"PYF":468992,"QAT":34423708,"ROU":129147250,"RUS":1586822100,"RWA":464039,"SAU":263325840,"SDN":4083693,"SEN":3664147,"SGP":48012940,"SHN":10992,"SLB":197856,"SLE":230832,"SLV":4414490,"SOM":575248,"SPM":69616,"SRB":45824660,"SSD":367368,"STP":47632,"SUR":2082514,"SVK":44026132,"SVN":15999412,"SWE":63381056,"SWZ":787760,"SXM":481069,"SYC":234496,"SYR":47127708,"TCA":69616,"TCD":443217,"TGO":1265171,"THA":173565810,"TJK":2823798,"TKM":31654202,"TLS":0,"TON":76944,"TTO":18458328,"TUN":16619228,"TUR":199646700,"TUV":3664,"TWN":176794000,"TZA":2526706,"UGA":1018092.06,"UKR":351769700,"URY":5405165,"USA":5612983000,"UZB":108184184,"VCT":131904,"VEN":118253256,"VGB":98928,"VNM":35481510,"VUT":84272,"WLF":21984,"WSM":124576,"YEM":11302606,"ZAF":363732320,"ZMB":1837995,"ZWE":14908902},"1997":{"ABW":758448,"AFG":1304152,"AGO":15884249,"AIA":62288,"ALB":1543009,"AND":465328,"ARE":72919520,"ARG":136523740,"ARM":3252761,"ATA":3664,"ATG":311440,"AUS":320332770,"AUT":67285130,"AZE":29842898,"BDI":249152,"BEL":123990620,"BEN":1223975,"BES":60943,"BFA":804007,"BGD":23125868,"BGR":55809076,"BHR":17288858,"BHS":1608496,"BIH":8365764.5,"BLR":61588412,"BLZ":388384,"BMU":523952,"BOL":11721163,"BRA":306949000,"BRB":1540428,"BRN":6087246,"BTN":390105,"BWA":2799296,"CAF":216176,"CAN":522577280,"CHE":43035148,"CHL":55941976,"CHN":3515594200,"CIV":7211238,"CMR":5378781,"COD":3089412,"COG":4830572,"COK":51296,"COL":65256204,"COM":84272,"CPV":227168,"CRI":4916182,"CUB":24808970,"CUW":4546893,"CXR":0,"CYP":6298291,"CZE":130941620,"DEU":931486900,"DJI":333424,"DMA":80608,"DNK":65437820,"DOM":17265690,"DZA":88369416,"ECU":19428882,"EGY":111704890,"ERI":808466,"ESP":265832160,"EST":18682882,"ETH":2980158,"FIN":62696000,"FJI":764285,"FRA":395511900,"FRO":589904,"FSM":194192,"GAB":5526934,"GBR":562708160,"GEO":4426263,"GHA":5514320,"GIN":1289728,"GMB":223504,"GNB":201520,"GNQ":1974754,"GRC":93801560,"GRD":168544,"GRL":617858,"GTM":7501859,"GUY":1806352,"HKG":30496980,"HND":4010334,"HRV":18556528,"HTI":1348352,"HUN":61711716,"IDN":279941500,"IND":858011200,"IRL":38804984,"IRN":267357090,"IRQ":76173950,"ISL":2619435,"ISR":54865704,"ITA":449430940,"JAM":10068187,"JOR":14074057,"JPN":1244251100,"KAZ":146425380,"KEN":8210108,"KGZ":5560681,"KHM":1551863,"KIR":29312,"KNA":142896,"KOR":444967600,"KWT":56620856,"LAO":792409,"LBN":15098693,"LBR":446187,"LBY":51778956,"LCA":296784,"LIE":218376,"LKA":7520293,"LSO":1769712,"LTU":15162846,"LUX":8563894,"LVA":8680906,"MAC":1487584,"MAR":29977578,"MDA":7301343,"MDG":1535182,"MDV":329760,"MEX":362680030,"MHL":87936,"MKD":8445520,"MLI":726665,"MLT":2556249,"MMR":7419640,"MNE":1669797,"MNG":7615103,"MOZ":1170237,"MRT":1077216,"MSR":32976,"MUS":1996880,"MWI":914855,"MYS":119628820,"NAM":1769712,"NCL":1817470,"NER":644277,"NGA":95781510,"NIC":3114466,"NIU":7328,"NLD":175285360,"NOR":41625000,"NPL":2641111,"NRU":102592,"NZL":31278306,"OMN":18053502,"OWID_KOS":0,"PAK":93788160,"PAN":4630072,"PER":27747166,"PHL":70069360,"PLW":197856,"PNG":2614798,"POL":367235680,"PRK":63678664,"PRT":54627084,"PRY":4127971.2,"PSE":864704,"PYF":490976,"QAT":42182420,"ROU":118156420,"RUS":1482244500,"RWA":482528,"SAU":221670030,"SDN":5007637,"SEN":3182368,"SGP":56737040,"SHN":10992,"SLB":205184,"SLE":205184,"SLV":5415735,"SOM":534944,"SPM":47632,"SRB":49264636,"SSD":449752,"STP":47632,"SUR":2104476,"SVK":44098212,"SVN":16507023,"SWE":58383136,"SWZ":1143168,"SXM":503444.03,"SYC":274800,"SYR":49256710,"TCA":84272,"TCD":453097,"TGO":878986,"THA":181202720,"TJK":2150084,"TKM":31196074,"TLS":0,"TON":98928,"TTO":18911194,"TUN":17218460,"TUR":212108210,"TUV":3664,"TWN":190557010,"TZA":2824358,"UGA":1061946,"UKR":340514370,"URY":5513665,"USA":5688142300,"UZB":109027840,"VCT":131904,"VEN":129666980,"VGB":102592,"VNM":45502070,"VUT":87936,"WLF":21984,"WSM":124576,"YEM":12171426,"ZAF":385222750,"ZMB":2354102,"ZWE":13911984},"1998":{"ABW":806080,"AFG":1278504,"AGO":16513294,"AIA":65952,"ALB":1754709,"AND":490976,"ARE":80106300,"ARG":139005000,"ARM":3419094,"ATA":3664,"ATG":322432,"AUS":334135550,"AUT":66920028,"AZE":31784872,"BDI":249152,"BEL":130223496,"BEN":1113856,"BES":3364,"BFA":858942,"BGD":23197800,"BGR":53115148,"BHR":18366356,"BHS":1989552,"BIH":10550597,"BLR":60073450,"BLZ":370064,"BMU":520288,"BOL":11252271,"BRA":317359000,"BRB":1572115,"BRN":5595279,"BTN":382195,"BWA":3341568,"CAF":219840,"CAN":530276260,"CHE":44613704,"CHL":57258476,"CHN":3364587500,"CIV":6755485,"CMR":5373172,"COD":2733258,"COG":3869270,"COK":47632,"COL":65798796,"COM":91600,"CPV":241824,"CRI":5234101,"CUB":24293962,"CUW":250975.02,"CXR":0,"CYP":6592488,"CZE":125608820,"DEU":923467000,"DJI":384720,"DMA":76944,"DNK":61238296,"DOM":17788184,"DZA":106536560,"ECU":23090470,"EGY":125025720,"ERI":586169,"ESP":274604900,"EST":16940746,"ETH":3147422,"FIN":59352000,"FJI":743300,"FRA":413964540,"FRO":622880,"FSM":201520,"GAB":6452915,"GBR":568543700,"GEO":4939172,"GHA":5583936,"GIN":1363008,"GMB":241824,"GNB":172208,"GNQ":2302334,"GRC":98621790,"GRD":175872,"GRL":597197,"GTM":8639397,"GUY":1828336,"HKG":38924984,"HND":4810582,"HRV":19011170,"HTI":1234768,"HUN":61312880,"IDN":244522960,"IND":875772350,"IRL":40708970,"IRN":303514200,"IRQ":80837240,"ISL":2638678,"ISR":56009770,"ITA":461646720,"JAM":9694035,"JOR":14253067,"JPN":1204402600,"KAZ":144282670,"KEN":9959645,"KGZ":5900999,"KHM":1962680,"KIR":29312,"KNA":150224,"KOR":378037800,"KWT":52811750,"LAO":820068,"LBN":16286495,"LBR":473047,"LBY":51652640,"LCA":326096,"LIE":229239,"LKA":7735926,"LSO":1802688,"LTU":15997053,"LUX":7663257,"LVA":8306996.5,"MAC":1557200,"MAR":30881156,"MDA":6443838,"MDG":1619053,"MDV":300448,"MEX":381307650,"MHL":91600,"MKD":9647312,"MLI":934320,"MLT":2524936,"MMR":8046166.5,"MNE":1757580,"MNG":7621516,"MOZ":1111895,"MRT":1069888,"MSR":29312,"MUS":2169088,"MWI":901754,"MYS":109781690,"NAM":1817344,"NCL":1810016,"NER":696173,"NGA":86492640,"NIC":3392724,"NIU":7328,"NLD":176237580,"NOR":41818000,"NPL":2223327,"NRU":98928,"NZL":29858208,"OMN":18445326,"OWID_KOS":0,"PAK":96740740,"PAN":5900714,"PER":28062162,"PHL":68263620,"PLW":197856,"PNG":3532541,"POL":339076400,"PRK":58749300,"PRT":59168596,"PRY":4383911,"PSE":1461936,"PYF":487312,"QAT":36887692,"ROU":104860490,"RUS":1465253400,"RWA":481522,"SAU":213156900,"SDN":4359354,"SEN":3333565,"SGP":47412160,"SHN":10992,"SLB":216176,"SLE":219840,"SLV":5731188,"SOM":505631.97,"SPM":54960,"SRB":51882060,"SSD":389947,"STP":47632,"SUR":2104454,"SVK":43827252,"SVN":16039042,"SWE":58801836,"SWZ":1161488,"SXM":27789,"SYC":289456,"SYR":53158420,"TCA":87936,"TCD":463839,"TGO":1289967,"THA":159704050,"TJK":2496671,"TKM":33445510,"TLS":60535,"TON":87936,"TTO":19905198,"TUN":17787744,"TUR":212135040,"TUV":10992,"TWN":200172000,"TZA":2480937,"UGA":1208757,"UKR":328807580,"URY":5638758,"USA":5733281000,"UZB":120974760,"VCT":161216,"VEN":170367140,"VGB":102592,"VNM":47866350,"VUT":84272,"WLF":21984,"WSM":142896,"YEM":12842866,"ZAF":377262460,"ZMB":2278458,"ZWE":14131139},"1999":{"ABW":809744,"AFG":1091640,"AGO":17261278,"AIA":65952,"ALB":2986196,"AND":512960.03,"ARE":77316160,"ARG":147673550,"ARM":3040204,"ATA":3664,"ATG":344416,"AUS":343959200,"AUT":65671310,"AZE":28821594,"BDI":252815.98,"BEL":124681140,"BEN":1461936,"BES":25207,"BFA":915606,"BGD":25074988,"BGR":46318476,"BHR":18314830,"BHS":2033520,"BIH":10333251,"BLR":57965508,"BLZ":348080,"BMU":512960.03,"BOL":10939507,"BRA":327256000,"BRB":1653427,"BRN":5978051,"BTN":385869,"BWA":3158368,"CAF":230832,"CAN":544482050,"CHE":44436972,"CHL":61407950,"CHN":3557274600,"CIV":6091911,"CMR":5219450,"COD":2199437,"COG":3915579,"COK":51296,"COL":55475790,"COM":95264,"CPV":289456,"CRI":5437766,"CUB":24467108,"CUW":1880686,"CXR":0,"CYP":6858746,"CZE":116671890,"DEU":895402100,"DJI":384720,"DMA":80608,"DNK":58652804,"DOM":17821252,"DZA":91449100,"ECU":21976232,"EGY":128221096,"ERI":615453,"ESP":298074660,"EST":15937988,"ETH":3094276,"FIN":58866000,"FJI":756467,"FRA":412369630,"FRO":630208,"FSM":190528,"GAB":6014019,"GBR":561649600,"GEO":4310981,"GHA":5613248,"GIN":1432624,"GMB":274800,"GNB":194192,"GNQ":2511309,"GRC":97934820,"GRD":194192,"GRL":594889,"GTM":8805825,"GUY":1832000,"HKG":42549016,"HND":4704557,"HRV":20022372,"HTI":1271408,"HUN":61806190,"IDN":292000930,"IND":950459800,"IRL":42440180,"IRN":371973920,"IRQ":82042850,"ISL":2841366,"ISR":54756052,"ITA":466393440,"JAM":9958188,"JOR":14266665,"JPN":1241036500,"KAZ":119265290,"KEN":10070618,"KGZ":4642439,"KHM":1894288,"KIR":29312,"KNA":161216,"KOR":410518800,"KWT":54978050,"LAO":845838,"LBN":16429672,"LBR":376138,"LBY":50259920,"LCA":337088,"LIE":226566,"LKA":8516617,"LSO":1824672,"LTU":13449596,"LUX":8117591,"LVA":7718816,"MAC":1516896,"MAR":31985668,"MDA":4684538,"MDG":1762736,"MDV":421360,"MEX":386270270,"MHL":87936,"MKD":8782695,"MLI":970960,"MLT":2572865,"MMR":8933607,"MNE":1211858,"MNG":7487592,"MOZ":1168343,"MRT":1095536,"MSR":36640,"MUS":2425568,"MWI":893264,"MYS":103986550,"NAM":1663456,"NCL":2055504.1,"NER":681558,"NGA":84992160,"NIC":3597173,"NIU":7328,"NLD":170854260,"NOR":42591000,"NPL":3191083,"NRU":91600,"NZL":31465164,"OMN":21985242,"OWID_KOS":0,"PAK":99389330,"PAN":5622234,"PER":29562408,"PHL":68187860,"PLW":197856,"PNG":2552155,"POL":329266200,"PRK":64139916,"PRT":66837456,"PRY":4375923,"PSE":1366672,"PYF":538608,"QAT":36248068,"ROU":89010050,"RUS":1494178800,"RWA":502618,"SAU":231482460,"SDN":4739299,"SEN":3603593,"SGP":49200190,"SHN":10992,"SLB":216176,"SLE":175872,"SLV":5587859,"SOM":487312,"SPM":54960,"SRB":35790748,"SSD":422901,"STP":47632,"SUR":2122753,"SVK":43038092,"SVN":15412484,"SWE":55981610,"SWZ":1238432,"SXM":208234,"SYC":304112,"SYR":55150680,"TCA":98928,"TCD":477245,"TGO":1850434,"THA":167234720,"TJK":2517199,"TKM":39796908,"TLS":152974,"TON":109920,"TTO":22594362,"TUN":18639804,"TUR":207927920,"TUV":10992,"TWN":207808000,"TZA":2458755,"UGA":1254724,"UKR":298578880,"URY":6682218,"USA":5803918000,"UZB":123586570,"VCT":164880,"VEN":143049710,"VGB":113584,"VNM":48548324,"VUT":87936,"WLF":25648,"WSM":135568,"YEM":14687685,"ZAF":374891000,"ZMB":1777604,"ZWE":15727769},"2000":{"ABW":2377936,"AFG":1047127.94,"AGO":15995108,"AIA":76944,"ALB":3024926,"AND":523952,"ARE":111813100,"ARG":142765220,"ARM":3491407,"ATA":3664,"ATG":355408,"AUS":350007680,"AUT":66171724,"AZE":29765310,"BDI":271136,"BEL":126721544,"BEN":1472928,"BES":66885,"BFA":1029710.06,"BGD":26524610,"BGR":45413456,"BHR":19233764,"BHS":2026192,"BIH":13702201,"BLR":54905984,"BLZ":395712,"BMU":516623.97,"BOL":8433878,"BRA":340183000,"BRB":1748824,"BRN":5328739,"BTN":396871,"BWA":3777584,"CAF":234496,"CAN":567096100,"CHE":43614184,"CHL":58502596,"CHN":3649201000,"CIV":6633573,"CMR":5588569,"COD":1704731,"COG":4284250,"COK":51296,"COL":56591360,"COM":102592,"CPV":296784,"CRI":5393873,"CUB":25775496,"CUW":4990174,"CXR":0,"CYP":7104597,"CZE":127235980,"DEU":898938050,"DJI":366400,"DMA":102592,"DNK":54306576,"DOM":18991626,"DZA":85398600,"ECU":20927296,"EGY":143836050,"ERI":604433,"ESP":310071230,"EST":15481725,"ETH":3462855,"FIN":57010000,"FJI":814852,"FRA":406507520,"FRO":688832,"FSM":179536,"GAB":6128187,"GBR":569033660,"GEO":4500388,"GHA":5312800,"GIN":1491248,"GMB":274800,"GNB":146560,"GNQ":2699265,"GRC":102973170,"GRD":190528,"GRL":667765,"GTM":9764762,"GUY":1747728,"HKG":40282788,"HND":5031508,"HRV":19660010,"HTI":1634144,"HUN":58505984,"IDN":281330370,"IND":977526400,"IRL":45249110,"IRN":364302370,"IRQ":83265550,"ISL":2933190,"ISR":59519380,"ITA":470524100,"JAM":10313990,"JOR":15200204,"JPN":1263754800,"KAZ":143380210,"KEN":10408840,"KGZ":4575258,"KHM":1974896,"KIR":36640,"KNA":172208,"KOR":439980670,"KWT":54889610,"LAO":960400,"LBN":15466264,"LBR":398769,"LBY":53238540,"LCA":348080,"LIE":216860,"LKA":10134099,"LSO":1850320,"LTU":11843035,"LUX":8703619,"LVA":7082575,"MAC":1630480,"MAR":33199036,"MDA":3572952,"MDG":1947883,"MDV":450672,"MEX":391725000,"MHL":98928,"MKD":8467603,"MLI":1066224,"MLT":2468153,"MMR":10219368,"MNE":1520843,"MNG":7431864,"MOZ":1321945,"MRT":1113856,"MSR":25648,"MUS":2689376,"MWI":857646,"MYS":122878050,"NAM":1604832,"NCL":2220454,"NER":686970,"NGA":96846750,"NIC":3721323,"NIU":7328,"NLD":172016290,"NOR":42110000,"NPL":3037431,"NRU":84272,"NZL":32245506,"OMN":23890246,"OWID_KOS":0,"PAK":103939510,"PAN":5728391,"PER":28677526,"PHL":72356790,"PLW":208848,"PNG":2937897,"POL":317452220,"PRK":69164936,"PRT":65611372,"PRY":3606132,"PSE":1659792,"PYF":611888,"QAT":40314500,"ROU":93334050,"RUS":1479142400,"RWA":515133.03,"SAU":302328160,"SDN":5276282,"SEN":3902052,"SGP":48394110,"SHN":10992,"SLB":223504,"SLE":271136,"SLV":5670975,"SOM":476320,"SPM":54960,"SRB":44950190,"SSD":459821,"STP":47632,"SUR":2192347,"SVK":41138784,"SVN":15053848,"SWE":54930064,"SWZ":1209120,"SXM":552525,"SYC":315104,"SYR":54171076,"TCA":109920,"TCD":487512,"TGO":1331372,"THA":167352140,"TJK":2233862,"TKM":39361496,"TLS":219860,"TON":95264,"TTO":24366292,"TUN":19554614,"TUR":229936660,"TUV":7328,"TWN":226900000,"TZA":2571821,"UGA":1360870,"UKR":285674200,"URY":5268017,"USA":6010135600,"UZB":123477320,"VCT":146560,"VEN":142834900,"VGB":117248,"VNM":53935468,"VUT":87936,"WLF":25648,"WSM":142896,"YEM":15725321,"ZAF":378306880,"ZMB":1784113,"ZWE":13818202},"2001":{"ABW":2407248,"AFG":1069098,"AGO":15908461,"AIA":84272,"ALB":3220656,"AND":523952,"ARE":101417960,"ARG":134422270,"ARM":3532701,"ATA":3664,"ATG":370064,"AUS":357783400,"AUT":70171320,"AZE":28415460,"BDI":205184,"BEL":126066060,"BEN":1689104,"BES":68108,"BFA":991095,"BGD":31034908,"BGR":48921856,"BHR":15374893,"BHS":1945584,"BIH":13262811,"BLR":54002984,"BLZ":447008,"BMU":527616,"BOL":8742807,"BRA":346165980,"BRB":1651888,"BRN":5189616,"BTN":384229,"BWA":3847200,"CAF":245488,"CAN":559147000,"CHE":45080920,"CHL":52918384,"CHN":3728513500,"CIV":7649681,"CMR":5562424,"COD":1647474,"COG":4177806.8,"COK":47632,"COL":56848172,"COM":106256,"CPV":348080,"CRI":5666567,"CUB":25215884,"CUW":5081438,"CXR":0,"CYP":6978500,"CZE":127144370,"DEU":915242100,"DJI":366400,"DMA":109920,"DNK":55896748,"DOM":19144596,"DZA":86839250,"ECU":23407850,"EGY":127656536,"ERI":626345,"ESP":311808500,"EST":15882095,"ETH":4264586,"FIN":62514000,"FJI":1042053,"FRA":411016480,"FRO":762112,"FSM":164880,"GAB":6480018,"GBR":577970560,"GEO":3724984,"GHA":5968656,"GIN":1560864,"GMB":300448,"GNB":150224,"GNQ":3094681,"GRC":105361864,"GRD":194192,"GRL":618372,"GTM":10233260,"GUY":1744064,"HKG":37801700,"HND":5664895,"HRV":20782298,"HTI":1471293,"HUN":60108984,"IDN":317027200,"IND":990969540,"IRL":47607620,"IRN":386158180,"IRQ":96332264,"ISL":2865427,"ISR":63023570,"ITA":470577400,"JAM":10576440,"JOR":15609517,"JPN":1249162100,"KAZ":138768540,"KEN":9277873,"KGZ":3856740,"KHM":2249696,"KIR":36640,"KNA":175872,"KOR":455630660,"KWT":59050692,"LAO":1062694,"LBN":16406607,"LBR":417418,"LBY":53113610,"LCA":359072,"LIE":214671,"LKA":10326369,"LSO":1875968,"LTU":12593737,"LUX":9205489,"LVA":7497437,"MAC":1685440,"MAR":36805700,"MDA":3786589,"MDG":1743020,"MDV":461664,"MEX":407730600,"MHL":102592,"MKD":8287967.5,"MLI":1161488,"MLT":2736559,"MMR":8855704,"MNE":1667268,"MNG":7803958,"MOZ":1553994,"MRT":1172480,"MSR":25648,"MUS":2861584,"MWI":773253,"MYS":130890050,"NAM":2011535.9,"NCL":1876642,"NER":646045,"NGA":100192216,"NIC":3921750,"NIU":7328,"NLD":177146200,"NOR":43498000,"NPL":3236078,"NRU":80608,"NZL":34378540,"OMN":22404480,"OWID_KOS":0,"PAK":105400680,"PAN":6953090,"PER":25415832,"PHL":70326010,"PLW":216176,"PNG":3335971,"POL":313500540,"PRK":71664470,"PRT":65152490,"PRY":3695507,"PSE":1348352,"PYF":725472,"QAT":45817316,"ROU":98987940,"RUS":1515647100,"RWA":522378.03,"SAU":302702800,"SDN":5999928,"SEN":4258100,"SGP":49200212,"SHN":10992,"SLB":234496,"SLE":370064,"SLV":5857395,"SOM":498304,"SPM":54960,"SRB":49307930,"SSD":529084,"STP":51296,"SUR":2362832,"SVK":43224196,"SVN":16302759,"SWE":55837576,"SWZ":1095536,"SXM":562630,"SYC":344416,"SYR":50951036,"TCA":113584,"TCD":505594,"TGO":1158913,"THA":172266850,"TJK":2287606,"TKM":34034184,"TLS":118844,"TON":87936,"TTO":26756396,"TUN":20429640,"TUR":213581220,"TUV":10992,"TWN":229777000,"TZA":3040810,"UGA":1417088,"UKR":303891300,"URY":5030443,"USA":5907739600,"UZB":126221210,"VCT":179536,"VEN":130533940,"VGB":124576,"VNM":60983830,"VUT":91600,"WLF":25648,"WSM":153888,"YEM":17077302,"ZAF":371623970,"ZMB":1885603,"ZWE":12508722},"2002":{"ABW":2436560,"AFG":1340995,"AGO":16080002,"AIA":84272,"ALB":3748272,"AND":531280,"ARE":84649070,"ARG":124454620,"ARM":3076793,"ATA":3664,"ATG":406704,"AUS":362536540,"AUT":71974936,"AZE":28570334,"BDI":212512,"BEL":126863016,"BEN":2110055,"BES":65661,"BFA":1001313,"BGD":31981244,"BGR":46099350,"BHR":15868013,"BHS":2037184,"BIH":14172601,"BLR":53844144,"BLZ":432352,"BMU":556928,"BOL":10403424,"BRA":347765020,"BRB":1657568,"BRN":4669874,"BTN":416511,"BWA":3975440,"CAF":241824,"CAN":564373800,"CHE":43460932,"CHL":54835572,"CHN":4103042600,"CIV":7450165,"CMR":5350642,"COD":1734284,"COG":2720283,"COK":40304,"COL":55901212,"COM":106256,"CPV":381056,"CRI":6245400,"CUB":25523650,"CUW":4898910,"CXR":0,"CYP":7169426,"CZE":123969960,"DEU":898834560,"DJI":399376,"DMA":102592,"DNK":55554384,"DOM":20949130,"DZA":90692380,"ECU":24827052,"EGY":129155000,"ERI":600625,"ESP":331949760,"EST":15370402,"ETH":4431687,"FIN":65041000,"FJI":879737,"FRA":406431040,"FRO":725472,"FSM":150224,"GAB":6250311,"GBR":560273200,"GEO":3348291,"GHA":6483251,"GIN":1623152,"GMB":296784,"GNB":153888,"GNQ":2761457,"GRC":105000510,"GRD":205184,"GRL":580141,"GTM":10721662,"GUY":1714752,"HKG":39485080,"HND":5945282,"HRV":21887298,"HTI":1785235,"HUN":59086040,"IDN":308485920,"IND":1021664400,"IRL":46081584,"IRN":393409700,"IRQ":96539910,"ISL":2992466,"ISR":59301356,"ITA":478002000,"JAM":10202580,"JOR":16420437,"JPN":1278787100,"KAZ":157524850,"KEN":7890697,"KGZ":4917247,"KHM":2205728,"KIR":36640,"KNA":197856,"KOR":476064900,"KWT":59985636,"LAO":1165768,"LBN":16243744,"LBR":432027,"LBY":52524996,"LCA":359072,"LIE":220018,"LKA":10948020,"LSO":1905280,"LTU":12666029,"LUX":9980627,"LVA":7521355,"MAC":1516896,"MAR":37306284,"MDA":4051736,"MDG":1235809,"MDV":593568,"MEX":410506050,"MHL":109920,"MKD":7833742,"MLI":1209120,"MLT":2747227,"MMR":9328067,"MNE":1766249,"MNG":8196567.5,"MOZ":1537057,"MRT":1249424,"MSR":47632,"MUS":2883568,"MWI":856235,"MYS":132035230,"NAM":1788032,"NCL":2392238,"NER":684661,"NGA":89918616,"NIC":3989804,"NIU":7328,"NLD":176466080,"NOR":42553000,"NPL":2596383,"NRU":76944,"NZL":34541610,"OMN":26841720,"OWID_KOS":0,"PAK":112903880,"PAN":5821097,"PER":25439410,"PHL":70266810,"PLW":212512,"PNG":3662442,"POL":306122780,"PRK":68641600,"PRT":69559704,"PRY":3857264,"PSE":1154160,"PYF":725472,"QAT":45066684,"ROU":99297704,"RUS":1506788000,"RWA":518871,"SAU":331979800,"SDN":7611157,"SEN":4436925,"SGP":47093390,"SHN":10992,"SLB":245488,"SLE":501968.03,"SLV":6069883,"SOM":556928,"SPM":58624,"SRB":52229868,"SSD":674322,"STP":58624,"SUR":1560114,"SVK":41978130,"SVN":16564693,"SWE":56685410,"SWZ":1080880,"SXM":542420,"SYC":348080,"SYR":40349620,"TCA":150224,"TCD":527549,"TGO":1322471,"THA":184665460,"TJK":1877243,"TKM":30130800,"TLS":261882,"TON":102592,"TTO":28701796,"TUN":20680184,"TUR":221225650,"TUV":10992,"TWN":237326000,"TZA":3485616,"UGA":1446221,"UKR":295900900,"URY":4557757,"USA":5946308000,"UZB":132575224,"VCT":186864,"VEN":164152850,"VGB":142896,"VNM":69527790,"VUT":84272,"WLF":25648,"WSM":161216,"YEM":16581434,"ZAF":356523140,"ZMB":1960891,"ZWE":11895839},"2003":{"ABW":2561136,"AFG":1559602,"AGO":17484428,"AIA":87936,"ALB":4303499,"AND":534944,"ARE":106443120,"ARG":133993820,"ARM":3455560,"ATA":3664,"ATG":428688,"AUS":369441730,"AUT":77401896,"AZE":30487584,"BDI":161216,"BEL":128248340,"BEN":2393998,"BES":65705,"BFA":1074545,"BGD":33459294,"BGR":50473676,"BHR":16769491,"BHS":2070159.9,"BIH":14358120,"BLR":55087984,"BLZ":432352,"BMU":560592,"BOL":10968004,"BRA":344645000,"BRB":1699495,"BRN":5597862,"BTN":376217,"BWA":3825216,"CAF":223504,"CAN":581427200,"CHE":44646084,"CHL":55100196,"CHN":4841118700,"CIV":5300525,"CMR":5704622,"COD":2096180,"COG":3258111,"COK":47632,"COL":57378090,"COM":135568,"CPV":414032,"CRI":6582545,"CUB":25942744,"CUW":4902170,"CXR":0,"CYP":7559648,"CZE":127571700,"DEU":899858370,"DJI":421360,"DMA":117248,"DNK":60645450,"DOM":21345008,"DZA":94580616,"ECU":27071580,"EGY":149919400,"ERI":710473,"ESP":336332200,"EST":17263582,"ETH":4870232,"FIN":72654000,"FJI":1037013.06,"FRA":412456700,"FRO":732800,"FSM":161216,"GAB":6746069,"GBR":571618750,"GEO":3731537,"GHA":6684573,"GIN":1700096,"GMB":296784,"GNB":194192,"GNQ":3133436,"GRC":109066730,"GRD":216176,"GRL":649303,"GTM":10447951,"GUY":1857648,"HKG":43202330,"HND":6686778,"HRV":23213128,"HTI":1700183,"HUN":61860748,"IDN":339357470,"IND":1059159550,"IRL":45684108,"IRN":407076740,"IRQ":101266860,"ISL":2985957,"ISR":62414676,"ITA":496005820,"JAM":10667060,"JOR":16982176,"JPN":1287292500,"KAZ":175854720,"KEN":6697443,"KGZ":5375527,"KHM":2377936,"KIR":40304,"KNA":197856,"KOR":485212800,"KWT":62336196,"LAO":1220964,"LBN":18529028,"LBR":464323,"LBY":55477260,"LCA":377392,"LIE":229355,"LKA":10953041,"LSO":1930928,"LTU":12659431,"LUX":10452518,"LVA":7726979,"MAC":1531552,"MAR":36570124,"MDA":4404268,"MDG":1692058,"MDV":505631.97,"MEX":436179740,"MHL":106256,"MKD":8529792,"MLI":1245760,"MLT":2960833,"MMR":9997118,"MNE":1889193,"MNG":7930966,"MOZ":1855517,"MRT":1289728,"MSR":36640,"MUS":3059440,"MWI":918499,"MYS":153384340,"NAM":1883296,"NCL":2725557,"NER":743704,"NGA":100087690,"NIC":4335245,"NIU":3664,"NLD":179896910,"NOR":43900000,"NPL":2810383,"NRU":65952,"NZL":36240990,"OMN":34355936,"OWID_KOS":0,"PAK":117490990,"PAN":6090004,"PER":24675610,"PHL":70286984,"PLW":212512,"PNG":4057107,"POL":318949730,"PRK":70139220,"PRT":64455824,"PRY":4031488,"PSE":1278736,"PYF":780432,"QAT":46514956,"ROU":103817980,"RUS":1537018400,"RWA":509100.03,"SAU":333990700,"SDN":8490251,"SEN":4927512,"SGP":49434690,"SHN":10992,"SLB":256480.02,"SLE":534944,"SLV":6434851,"SOM":560592,"SPM":62288,"SRB":55823540,"SSD":753349,"STP":65952,"SUR":1537767,"SVK":42302730,"SVN":16271549,"SWE":57292210,"SWZ":1003936.06,"SXM":542781,"SYC":340752,"SYR":54977924,"TCA":157552,"TCD":882414,"TGO":1804731,"THA":191087730,"TJK":2070857,"TKM":40567560,"TLS":248530,"TON":117248,"TTO":32391288,"TUN":21142368,"TUR":236765650,"TUV":10992,"TWN":248248000,"TZA":3687241,"UGA":1512745,"UKR":307245380,"URY":4526888,"USA":6010145300,"UZB":130294420,"VCT":197856,"VEN":154262140,"VGB":146560,"VNM":77261570,"VUT":84272,"WLF":25648,"WSM":157552,"YEM":18481570,"ZAF":404409660,"ZMB":2074413,"ZWE":10609583},"2004":{"ABW":2616096,"AFG":1237247,"AGO":17015688,"AIA":102592,"ALB":4176684,"AND":560592,"ARE":111702584,"ARG":156712420,"ARM":3691197,"ATA":7328,"ATG":450672,"AUS":382873440,"AUT":77699210,"AZE":32253040,"BDI":197856,"BEL":128770830,"BEN":2593600,"BES":68938,"BFA":1100145,"BGD":35945412,"BGR":49525776,"BHR":17883504,"BHS":2048176,"BIH":15462454,"BLR":58253532,"BLZ":392048,"BMU":582576,"BOL":11031935,"BRA":361434000,"BRB":1720192,"BRN":5640577,"BTN":307913,"BWA":3894832,"CAF":219840,"CAN":579689400,"CHE":45231410,"CHL":59228428,"CHN":5217351000,"CIV":7386261,"CMR":5698455,"COD":2028165.1,"COG":3548607,"COK":54960,"COL":54646776,"COM":146560,"CPV":425024,"CRI":6841678,"CUB":25221232,"CUW":5143367,"CXR":0,"CYP":7788730,"CZE":128291624,"DEU":885632500,"DJI":406704,"DMA":142896,"DNK":55100010,"DOM":17333192,"DZA":91714220,"ECU":29258108,"EGY":152575700,"ERI":769025,"ESP":353010940,"EST":17327458,"ETH":5158551,"FIN":68939000,"FJI":1340918,"FRA":413663400,"FRO":747456,"FSM":142896,"GAB":6386339,"GBR":573429760,"GEO":4271842,"GHA":6450628,"GIN":1762384,"GMB":318768,"GNB":201520,"GNQ":6137383,"GRC":109485270,"GRD":205184,"GRL":639502,"GTM":11180307,"GUY":1927264,"HKG":41569400,"HND":7194159,"HRV":22884860,"HTI":1651995,"HUN":60251724,"IDN":343021500,"IND":1125096300,"IRL":46166788,"IRN":437678900,"IRQ":112803060,"ISL":3109793,"ISR":58679230,"ITA":501631580,"JAM":10574223,"JOR":18670694,"JPN":1282686000,"KAZ":186355680,"KEN":7589762,"KGZ":5808160,"KHM":2443888,"KIR":40304,"KNA":212512,"KOR":491389440,"KWT":65630652,"LAO":1282484,"LBN":17208414,"LBR":546472,"LBY":56850380,"LCA":403040,"LIE":229391,"LKA":12147363,"LSO":1982224,"LTU":13254169,"LUX":11821717,"LVA":7732137,"MAC":1714752,"MAR":42225556,"MDA":4613424,"MDG":1804376,"MDV":666848,"MEX":438799520,"MHL":117248,"MKD":8225808,"MLI":1406976,"MLT":2849056,"MMR":12565488,"MNE":2041277.9,"MNG":8501100,"MOZ":1863973,"MRT":1384992,"MSR":47632,"MUS":3088752,"MWI":901678,"MYS":169678300,"NAM":1971232,"NCL":2514913,"NER":791815,"NGA":94836950,"NIC":4377836,"NIU":3664,"NLD":181780450,"NOR":44236000,"NPL":2582410,"NRU":65952,"NZL":35835680,"OMN":29023122,"OWID_KOS":164201,"PAK":129623540,"PAN":5710970,"PER":28334134,"PHL":72806056,"PLW":216176,"PNG":4694420,"POL":323794140,"PRK":71721960,"PRT":67303336,"PRY":4061307,"PSE":2194736,"PYF":769440,"QAT":47320412,"ROU":103276920,"RUS":1543957000,"RWA":515760,"SAU":401013200,"SDN":10834315,"SEN":5238223,"SGP":46858896,"SHN":10992,"SLB":274800,"SLE":520288,"SLV":6253812,"SOM":560592,"SPM":58624,"SRB":60166740,"SSD":951984,"STP":73280,"SUR":1555785,"SVK":42792360,"SVN":16704582,"SWE":56516920,"SWZ":1000272.06,"SXM":569487,"SYC":370064,"SYR":51286628,"TCA":161216,"TCD":902531,"TGO":1743929,"THA":207330690,"TJK":2560492,"TKM":49355104,"TLS":496998,"TON":109920,"TTO":32711342,"TUN":22094576,"TUR":244768590,"TUV":10992,"TWN":257882990,"TZA":4221283,"UGA":1607486,"UKR":310625760,"URY":5564822,"USA":6112655000,"UZB":129097550,"VCT":219840,"VEN":142766900,"VGB":153888,"VNM":88939180,"VUT":58624,"WLF":25648,"WSM":164880,"YEM":19977182,"ZAF":449306980,"ZMB":2104131,"ZWE":9428642},"2005":{"ABW":2718688,"AFG":1889507,"AGO":15386819,"AIA":109920,"ALB":4261413,"AND":575248,"ARE":114399416,"ARG":161189180,"ARM":4376169,"ATA":7328,"ATG":479984,"AUS":386205380,"AUT":79097400,"AZE":34193560,"BDI":153888,"BEL":125627920,"BEN":2489730,"BES":68326,"BFA":1122080,"BGD":37676584,"BGR":50598176,"BHR":19804052,"BHS":1905280,"BIH":16045984,"BLR":59310290,"BLZ":421360,"BMU":582576,"BOL":12312617,"BRA":364371000,"BRB":1762496,"BRN":5428519,"BTN":395860,"BWA":4092688,"CAF":216176,"CAN":574763650,"CHE":45778290,"CHL":61127496,"CHN":5882143000,"CIV":7564355,"CMR":5423858,"COD":2288361,"COG":4352130,"COK":62288,"COL":60161604,"COM":142896,"CPV":447008,"CRI":6723403,"CUB":26211820,"CUW":5097735,"CXR":0,"CYP":7957322,"CZE":125690740,"DEU":865470700,"DJI":414032,"DMA":150224,"DNK":51534924,"DOM":17940522,"DZA":110992510,"ECU":30589608,"EGY":168216830,"ERI":768953,"ESP":368338140,"EST":17096810,"ETH":4956129,"FIN":57047000,"FJI":1082308,"FRA":416151140,"FRO":721808,"FSM":117248,"GAB":6223081,"GBR":570338370,"GEO":5013924,"GHA":6113072,"GIN":1824672,"GMB":322432,"GNB":212512,"GNQ":6208019,"GRC":113888960,"GRD":216176,"GRL":643600,"GTM":12109271,"GUY":1619488,"HKG":43730548,"HND":6834857,"HRV":23340032,"HTI":1724339,"HUN":60400730,"IDN":347617020,"IND":1185674200,"IRL":48156200,"IRN":462002780,"IRQ":114019704,"ISL":2978476,"ISR":56524140,"ITA":502346600,"JAM":10416539,"JOR":20436792,"JPN":1290144600,"KAZ":200041980,"KEN":8554943,"KGZ":5519072,"KHM":2773648,"KIR":47632,"KNA":197856,"KOR":498688300,"KWT":74426424,"LAO":1337012,"LBN":16650190,"LBR":650572,"LBY":60668510,"LCA":388384,"LIE":228986,"LKA":11935225,"LSO":2011535.9,"LTU":13862650,"LUX":12079575,"LVA":7811700,"MAC":1828336,"MAR":44660772,"MDA":4937548,"MDG":1741080,"MDV":600896,"MEX":463643940,"MHL":113584,"MKD":8595744,"MLI":1454608,"MLT":2656658,"MMR":11555010,"MNE":1750836,"MNG":8515106,"MOZ":1769698,"MRT":1437338,"MSR":40304,"MUS":3293936,"MWI":848983,"MYS":169967330,"NAM":2311984,"NCL":2809699,"NER":691187,"NGA":101474230,"NIC":4270109,"NIU":3664,"NLD":177859120,"NOR":43263000,"NPL":2986772,"NRU":62288,"NZL":37423410,"OMN":31596678,"OWID_KOS":162488,"PAK":134692300,"PAN":6971338,"PER":30321106,"PHL":73303170,"PLW":219840,"PNG":4980165,"POL":322765060,"PRK":75010216,"PRT":69634616,"PRY":3779891,"PSE":2740672,"PYF":828064,"QAT":47550748,"ROU":101837060,"RUS":1562576900,"RWA":514220,"SAU":402847700,"SDN":10527797,"SEN":5538919,"SGP":41586400,"SHN":10992,"SLB":282128,"SLE":425024,"SLV":6297707,"SOM":564256,"SPM":62288,"SRB":51634110,"SSD":912013,"STP":76944,"SUR":1588520,"SVK":42798508,"SVN":16932386,"SWE":53875336,"SWZ":1014928,"SXM":564435,"SYC":381056,"SYR":50751040,"TCA":190528,"TCD":925702,"TGO":1721591,"THA":214325140,"TJK":2439487,"TKM":47928664,"TLS":321145,"TON":113584,"TTO":38226790,"TUN":22548992,"TUR":264870640,"TUV":10992,"TWN":266459980,"TZA":5355817,"UGA":2017941,"UKR":313530560,"URY":5726669,"USA":6132183000,"UZB":121599860,"VCT":219840,"VEN":148310640,"VGB":164880,"VNM":95845720,"VUT":58624,"WLF":29312,"WSM":168544,"YEM":21661558,"ZAF":416201200,"ZMB":2242543,"ZWE":10698489},"2006":{"ABW":2715024,"AFG":2159318,"AGO":17144838,"AIA":120912,"ALB":3910715,"AND":545936,"ARE":121705080,"ARG":174209920,"ARM":4401590,"ATA":7328,"ATG":516623.97,"AUS":392436350,"AUT":76817416,"AZE":34521828,"BDI":183200,"BEL":123872980,"BEN":3351106,"BES":71210,"BFA":1360129,"BGD":41689170,"BGR":51836628,"BHR":19421150,"BHS":1853984,"BIH":17386820,"BLR":61743588,"BLZ":443344,"BMU":652192,"BOL":12332331,"BRA":368871000,"BRB":1775152,"BRN":7143688,"BTN":393510,"BWA":4132991.8,"CAF":227168,"CAN":568584500,"CHE":45367704,"CHL":64051904,"CHN":6494338000,"CIV":6887238,"CMR":5485919,"COD":2352548,"COG":4785876,"COK":65952,"COL":62304364,"COM":164880,"CPV":494640,"CRI":7006724,"CUB":26818162,"CUW":5312857,"CXR":0,"CYP":8185009,"CZE":126555140,"DEU":877497660,"DJI":414032,"DMA":142896,"DNK":59500240,"DOM":19111932,"DZA":105896180,"ECU":29689756,"EGY":179194160,"ERI":548946,"ESP":359653400,"EST":16444916,"ETH":5318177,"FIN":68371000,"FJI":1202662,"FRA":406309800,"FRO":677840,"FSM":113584,"GAB":5542535,"GBR":567845600,"GEO":6093048,"GHA":8523184,"GIN":1890624,"GMB":348080,"GNB":216176,"GNQ":6181641,"GRC":112419550,"GRD":230832,"GRL":662845,"GTM":12176554,"GUY":1509568,"HKG":41914810,"HND":7698208,"HRV":23546764,"HTI":1752042,"HUN":59709784,"IDN":346633440,"IND":1292484600,"IRL":47604450,"IRN":496070460,"IRQ":98564010,"ISL":3155845,"ISR":62148964,"ITA":496934400,"JAM":11577210,"JOR":20526390,"JPN":1267118500,"KAZ":220574700,"KEN":9565541,"KGZ":5460630,"KHM":2997152,"KIR":47632,"KNA":201520,"KOR":503478180,"KWT":76047150,"LAO":1757335,"LBN":14792376,"LBR":672734,"LBY":55744220,"LCA":410368,"LIE":231121,"LKA":11792541,"LSO":2037184,"LTU":14195783,"LUX":11910985,"LVA":8310876,"MAC":1619488,"MAR":46249416,"MDA":5029747,"MDG":1674711,"MDV":743792,"MEX":474744220,"MHL":120912,"MKD":8650704,"MLI":1535216,"MLT":2667484,"MMR":12813455,"MNE":2062832.1,"MNG":9281176,"MOZ":1915622,"MRT":1550078,"MSR":40304,"MUS":3627360,"MWI":847983,"MYS":170166450,"NAM":2337632,"NCL":2706642,"NER":671102,"NGA":89950140,"NIC":4418076,"NIU":3664,"NLD":172991330,"NOR":43842000,"NPL":2456469,"NRU":43968,"NZL":37329520,"OMN":40166880,"OWID_KOS":160776,"PAK":143550720,"PAN":7524040,"PER":28197278,"PHL":66553704,"PLW":227168,"PNG":5050944,"POL":336572670,"PRK":76170210,"PRT":64842828,"PRY":3908692,"PSE":2264352,"PYF":820736,"QAT":59630004,"ROU":104296040,"RUS":1623002000,"RWA":514417,"SAU":439116930,"SDN":11511440,"SEN":4422390,"SGP":42308210,"SHN":10992,"SLB":289456,"SLE":578912,"SLV":6717812,"SOM":564256,"SPM":65952,"SRB":60838316,"SSD":998668,"STP":84272,"SUR":1738560,"SVK":42563850,"SVN":17178356,"SWE":53738076,"SWZ":1014928,"SXM":588253,"SYC":384720,"SYR":53663740,"TCA":216176,"TCD":960951,"TGO":1500506,"THA":215824670,"TJK":2655168,"TKM":49499596,"TLS":316708,"TON":128240.01,"TTO":42727050,"TUN":22969948,"TUR":282368320,"TUV":10992,"TWN":276159000,"TZA":5876241,"UGA":2383386,"UKR":333061630,"URY":6597095,"USA":6052686000,"UZB":124900550,"VCT":216176,"VEN":155596930,"VGB":179536,"VNM":99652260,"VUT":47632,"WLF":29312,"WSM":172208,"YEM":23790956,"ZAF":446770020,"ZMB":2231118,"ZWE":10365461},"2007":{"ABW":2821280,"AFG":2799909,"AGO":17587936,"AIA":124576,"ALB":3948970,"AND":538608,"ARE":133124510,"ARG":173482060,"ARM":5100210,"ATA":10992,"ATG":534944,"AUS":399676260,"AUT":74117800,"AZE":30036786,"BDI":201520,"BEL":120463270,"BEN":3930960,"BES":80165,"BFA":1590799,"BGD":42642130,"BGR":55683720,"BHR":26771124,"BHS":1872304,"BIH":17474332,"BLR":60218140,"BLZ":476320,"BMU":729136,"BOL":12695380,"BRA":390573000,"BRB":1802221,"BRN":8076697.5,"BTN":393522,"BWA":4228256,"CAF":230832,"CAN":593755260,"CHE":43362896,"CHL":70476430,"CHN":6983576600,"CIV":6653270,"CMR":7409373,"COD":2624244,"COG":4259311,"COK":65952,"COL":60491492,"COM":106256,"CPV":505631.97,"CRI":7960740,"CUB":26204204,"CUW":5981038,"CXR":0,"CYP":8503495,"CZE":128382100,"DEU":850229800,"DJI":461664,"DMA":172208,"DNK":54709350,"DOM":19992930,"DZA":109889440,"ECU":34279184,"EGY":188805040,"ERI":563359,"ESP":367399070,"EST":19942080,"ETH":5839596,"FIN":66760004,"FJI":1140350,"FRA":396198180,"FRO":688832,"FSM":131904,"GAB":5037635,"GBR":559566460,"GEO":6361687,"GHA":8981875,"GIN":1967568,"GMB":348080,"GNB":230832,"GNQ":5723963,"GRC":114545700,"GRD":238160,"GRL":653788,"GTM":12144909,"GUY":1780704,"HKG":43572436,"HND":8216418.5,"HRV":24859720,"HTI":1772405,"HUN":58631348,"IDN":387858050,"IND":1392506000,"IRL":47664090,"IRN":502565400,"IRQ":61086176,"ISL":3495134,"ISR":62799908,"ITA":490653340,"JAM":10749231,"JOR":21436498,"JPN":1302836700,"KAZ":226744690,"KEN":9823632,"KGZ":6522285,"KHM":3471142,"KIR":47632,"KNA":216176,"KOR":521708740,"KWT":77158350,"LAO":1835383,"LBN":13746087,"LBR":625121,"LBY":51595308,"LCA":425024,"LIE":200794,"LKA":12151910,"LSO":2073823.9,"LTU":15475053,"LUX":11306903,"LVA":8638660,"MAC":1363008,"MAR":48912716,"MDA":4978554,"MDG":1735019,"MDV":780432,"MEX":473747900,"MHL":124576,"MKD":9013440,"MLI":1788032,"MLT":2731439,"MMR":12841137,"MNE":2055504.1,"MNG":11957832,"MOZ":2188865,"MRT":1757602,"MSR":40304,"MUS":3685984,"MWI":919470,"MYS":175450780,"NAM":2264352,"NCL":2926788,"NER":709546,"NGA":81940540,"NIC":4550682,"NIU":3664,"NLD":172746750,"NOR":45588000,"NPL":2570341,"NRU":43968,"NZL":36409844,"OMN":45068388,"OWID_KOS":166133,"PAK":155402220,"PAN":7349627,"PER":34305970,"PHL":70795900,"PLW":252815.98,"PNG":6581091,"POL":335920200,"PRK":63478052,"PRT":62354620,"PRY":4041562,"PSE":2322976,"PYF":813408,"QAT":59383044,"ROU":109019590,"RUS":1623781200,"RWA":542177,"SAU":394102820,"SDN":13524735,"SEN":4862531,"SGP":30781264,"SHN":10992,"SLB":300448,"SLE":487312,"SLV":6845580,"SOM":608224,"SPM":65952,"SRB":59554388,"SSD":1173199,"STP":84272,"SUR":1756384,"SVK":40971504,"SVN":17342862,"SWE":52994140,"SWZ":1040576,"SXM":662236,"SYC":403040,"SYR":66660340,"TCA":252815.98,"TCD":1088955,"TGO":1516752,"THA":224082600,"TJK":3227096,"TKM":49182930,"TLS":288067,"TON":113584,"TTO":45582096,"TUN":24591038,"TUR":313693340,"TUV":10992,"TWN":279800000,"TZA":5706146,"UGA":2709990,"UKR":336819550,"URY":5947501,"USA":6130123000,"UZB":123820770,"VCT":234496,"VEN":153962110,"VGB":186864,"VNM":101429540,"VUT":98928,"WLF":29312,"WSM":179536,"YEM":23570650,"ZAF":465044600,"ZMB":2294254,"ZWE":9835161},"2008":{"ABW":2656400,"AFG":4254477,"AGO":18750156,"AIA":124576,"ALB":4397043,"AND":538608,"ARE":153683520,"ARG":187243460,"ARM":5574790,"ATA":0,"ATG":538608,"AUS":404255700,"AUT":73495470,"AZE":33036510,"BDI":208848,"BEL":120170040,"BEN":3918994,"BES":77107,"BFA":1733545,"BGD":45300870,"BGR":54022470,"BHR":29681318,"BHS":1916272,"BIH":19958648,"BLR":62836412,"BLZ":436016,"BMU":648528,"BOL":12965221,"BRA":412638000,"BRB":2081465,"BRN":9165561,"BTN":422152,"BWA":4503056,"CAF":164880,"CAN":576808640,"CHE":44705780,"CHL":70552540,"CHN":7501498000,"CIV":6712605,"CMR":7320619,"COD":2686563,"COG":4270264,"COK":65952,"COL":66963988,"COM":109920,"CPV":468992,"CRI":7989944,"CUB":28108268,"CUW":5752879,"CXR":0,"CYP":8715729,"CZE":122951010,"DEU":852857860,"DJI":498304,"DMA":168544,"DNK":51256330,"DOM":20331836,"DZA":111087410,"ECU":30314430,"EGY":197727730,"ERI":409357,"ESP":335887260,"EST":17822380,"ETH":6417597,"FIN":58621000,"FJI":846043,"FRA":389427330,"FRO":630208,"FSM":109920,"GAB":5378889,"GBR":544932400,"GEO":5308807,"GHA":8324322.5,"GIN":1996880,"GMB":362736,"GNB":227168,"GNQ":5941702,"GRC":111080376,"GRD":252815.98,"GRL":677403,"GTM":10893166,"GUY":1707424,"HKG":42790584,"HND":8532908,"HRV":23594392,"HTI":1760637,"HUN":57326304,"IDN":365718300,"IND":1489437400,"IRL":47362828,"IRN":522557120,"IRQ":93938200,"ISL":3812816,"ISR":67980180,"ITA":479077150,"JAM":10779635,"JOR":20717996,"JPN":1232014200,"KAZ":226830980,"KEN":10232778,"KGZ":7480887,"KHM":3866716,"KIR":47632,"KNA":216176,"KOR":532650750,"KWT":84281064,"LAO":2131341,"LBN":17417774,"LBR":530796,"LBY":53501800,"LCA":425024,"LIE":219536,"LKA":11987291,"LSO":2125120,"LTU":14918748,"LUX":11172490,"LVA":8198938.5,"MAC":1132176,"MAR":51369080,"MDA":5190380,"MDG":1779958,"MDV":842720,"MEX":473107260,"MHL":128240.01,"MKD":8936496,"MLI":1956576,"MLT":2690432,"MMR":9772056,"MNE":2605104,"MNG":11917791,"MOZ":2179933,"MRT":1834436,"MSR":47632,"MUS":3766592,"MWI":998373,"MYS":192847060,"NAM":2704032,"NCL":2848035,"NER":792146,"NGA":87273660,"NIC":4365500,"NIU":7328,"NLD":175710980,"NOR":44675000,"NPL":3351788,"NRU":43968,"NZL":37508388,"OMN":47181390,"OWID_KOS":7362096,"PAK":153921700,"PAN":7334595,"PER":35298628,"PHL":77330616,"PLW":205184,"PNG":5544582,"POL":329567070,"PRK":70329490,"PRT":60027936,"PRY":4277954,"PSE":2051840.1,"PYF":835392,"QAT":61636948,"ROU":107894500,"RUS":1652064500,"RWA":527819,"SAU":440343600,"SDN":14137632,"SEN":4740295,"SGP":46705010,"SHN":10992,"SLB":307776,"SLE":505631.97,"SLV":6404717,"SOM":600896,"SPM":65952,"SRB":51778176,"SSD":1239105,"STP":84272,"SUR":1931568,"SVK":41364304,"SVN":18278460,"SWE":50866884,"SWZ":1022256,"SXM":636974,"SYC":414032,"SYR":67755630,"TCA":263808,"TCD":872463,"TGO":1522778,"THA":224248700,"TJK":2896020,"TKM":59438420,"TLS":285133,"TON":120912,"TTO":44464628,"TUN":25540792,"TUR":310622140,"TUV":10992,"TWN":266594000,"TZA":5911275,"UGA":2779614,"UKR":325983400,"URY":8201628.5,"USA":5915118600,"UZB":128388290,"VCT":219840,"VEN":155505170,"VGB":194192,"VNM":114302696,"VUT":95264,"WLF":21984,"WSM":161216,"YEM":24407098,"ZAF":495170850,"ZMB":2553028,"ZWE":7720094},"2009":{"ABW":2627088,"AFG":6391888,"AGO":20668332,"AIA":124576,"ALB":4406552,"AND":516623.97,"ARE":168013250,"ARG":178110960,"ARM":4363332,"ATA":0,"ATG":556928,"AUS":407477150,"AUT":67315330,"AZE":29102576,"BDI":168544,"BEL":107765100,"BEN":4224517,"BES":78899,"BFA":1828977,"BGD":49148070,"BGR":45759652,"BHR":28098070,"BHS":2154432,"BIH":20537094,"BLR":60577744,"BLZ":516623.97,"BMU":476320,"BOL":13538143,"BRA":389775000,"BRB":2000142.1,"BRN":7744925,"BTN":389881,"BWA":3855444,"CAF":161216,"CAN":544139650,"CHE":43529708,"CHL":65959824,"CHN":7891089400,"CIV":5659943,"CMR":8554963,"COD":2446984,"COG":4943653,"COK":65952,"COL":72460616,"COM":135568,"CPV":520288,"CRI":7747752,"CUB":28396318,"CUW":5886515,"CXR":0,"CYP":8470194,"CZE":114999016,"DEU":788285800,"DJI":443344,"DMA":186864,"DNK":48851416,"DOM":19780666,"DZA":118856330,"ECU":33598600,"EGY":206477900,"ERI":497314,"ESP":296500300,"EST":14417051,"ETH":6453445,"FIN":55906000,"FJI":741810,"FRA":370965630,"FRO":575248,"FSM":146560,"GAB":5304448,"GBR":494107700,"GEO":6135626,"GHA":6868021,"GIN":2110464,"GMB":373728,"GNB":234496,"GNQ":4901532,"GRC":104319840,"GRD":252815.98,"GRL":592500,"GTM":11442047,"GUY":1908944,"HKG":41579400,"HND":8030408,"HRV":21805310,"HTI":1888301,"HUN":51542250,"IDN":398942050,"IND":1612216300,"IRL":42179092,"IRN":536605220,"IRQ":104815390,"ISL":3731080,"ISR":63860948,"ITA":424952670,"JAM":7933788,"JOR":21336692,"JPN":1163057300,"KAZ":224549710,"KEN":12342527,"KGZ":6709287,"KHM":4557086,"KIR":47632,"KNA":223504,"KOR":537819840,"KWT":88716616,"LAO":2667456,"LBN":20957556,"LBR":470687,"LBY":53397104,"LCA":425024,"LIE":205375,"LKA":12944645,"LSO":2216720,"LTU":12830513,"LUX":10630350,"LVA":7456832,"MAC":1890624,"MAR":50859732,"MDA":4539512,"MDG":1706379,"MDV":883024,"MEX":460417340,"MHL":131904,"MKD":8236520,"MLI":1886960,"MLT":2526344,"MMR":10207303,"MNE":1681776,"MNG":13026382,"MOZ":2439006,"MRT":2012298.1,"MSR":43968,"MUS":3707968,"MWI":1013307,"MYS":192119070,"NAM":2762656,"NCL":3035808,"NER":952182,"NGA":77229230,"NIC":4445091,"NIU":3664,"NLD":170336240,"NOR":43081000,"NPL":4129352,"NRU":40304,"NZL":34619916,"OMN":44252450,"OWID_KOS":8109154.5,"PAK":155418860,"PAN":8460693,"PER":39511240,"PHL":76610150,"PLW":197856,"PNG":5264624,"POL":316021220,"PRK":53462004,"PRT":57136404,"PRY":4531500,"PSE":2088480,"PYF":839056,"QAT":65073668,"ROU":88482220,"RUS":1545034400,"RWA":558260,"SAU":473214880,"SDN":14762170,"SEN":5257668,"SGP":45250400,"SHN":10992,"SLB":318768,"SLE":501968.03,"SLV":6312459,"SOM":597232,"SPM":65952,"SRB":45895096,"SSD":1290671,"STP":91600,"SUR":1990704,"SVK":37625676,"SVN":16204107,"SWE":47238908,"SWZ":1058896,"SXM":651770,"SYC":439680,"SYR":62968376,"TCA":274800,"TCD":1216046,"TGO":2740838,"THA":228836240,"TJK":2443974,"TKM":52462364,"TLS":321783,"TON":131904,"TTO":44442092,"TUN":25421650,"TUR":316412300,"TUV":10992,"TWN":252505010,"TZA":5767178,"UGA":2999798,"UKR":277593340,"URY":7946771,"USA":5480725500,"UZB":109227384,"VCT":278464,"VEN":151848180,"VGB":194192,"VNM":124493390,"VUT":120912,"WLF":29312,"WSM":168544,"YEM":26776694,"ZAF":480572480,"ZMB":2940336,"ZWE":8249769},"2010":{"ABW":2506176,"AFG":8364803.5,"AGO":22983320,"AIA":131904,"ALB":4783865,"AND":516623.97,"ARE":184842300,"ARG":185854340,"ARM":4252750,"ATA":0,"ATG":549600,"AUS":405512200,"AUT":72017330,"AZE":27549052,"BDI":296784,"BEL":114604104,"BEN":4679390,"BES":54346,"BFA":2036372,"BGD":53991556,"BGR":47808404,"BHR":29075436,"BHS":2227712,"BIH":21145704,"BLR":62445120,"BLZ":538608,"BMU":608224,"BOL":14718776,"BRA":440269020,"BRB":1845064,"BRN":8017381.5,"BTN":487768,"BWA":4537275,"CAF":168544,"CAN":556062100,"CHE":45043332,"CHL":71347520,"CHN":8620627000,"CIV":6224746,"CMR":8383322,"COD":2736942,"COG":5499943,"COK":73280,"COL":76266460,"COM":161216,"CPV":556928,"CRI":7492647,"CUB":34199816,"CUW":4054720,"CXR":0,"CYP":8101123,"CZE":117490700,"DEU":831129600,"DJI":516623.97,"DMA":172208,"DNK":49189692,"DOM":20553454,"DZA":118353256,"ECU":36276410,"EGY":203607570,"ERI":497337,"ESP":282937100,"EST":18975448,"ETH":6336871,"FIN":64081000,"FJI":1091800,"FRA":376563900,"FRO":630208,"FSM":102592,"GAB":5836069,"GBR":511904580,"GEO":6208043,"GHA":8942513,"GIN":2484192,"GMB":425024,"GNB":238160,"GNQ":6402228,"GRC":97354150,"GRD":260144,"GRL":679400,"GTM":11097682,"GUY":1886960,"HKG":40062904,"HND":7996618,"HRV":21018168,"HTI":2136827,"HUN":52087460,"IDN":445806080,"IND":1677337200,"IRL":41793224,"IRN":552953100,"IRQ":113536270,"ISL":3627419,"ISR":68286904,"ITA":436534300,"JAM":7677295,"JOR":20615326,"JPN":1214707500,"KAZ":248803230,"KEN":12163160,"KGZ":6355656,"KHM":5078142,"KIR":58624,"KNA":219840,"KOR":594339140,"KWT":90869910,"LAO":3004513,"LBN":19996596,"LBR":756900,"LBY":61085580,"LCA":487312,"LIE":190830,"LKA":13050987,"LSO":2275344,"LTU":13803169,"LUX":11197591,"LVA":8555267,"MAC":1234768,"MAR":54365200,"MDA":4830905,"MDG":1871843,"MDV":934320,"MEX":456597400,"MHL":135568,"MKD":8185511.5,"MLI":2088480,"MLT":2602794,"MMR":13121587,"MNE":2421904,"MNG":13772318,"MOZ":2634548,"MRT":2093519.9,"MSR":58624,"MUS":3913152,"MWI":968498,"MYS":199346100,"NAM":2839600,"NCL":3657625,"NER":1159981,"NGA":111426824,"NIC":4467845,"NIU":3664,"NLD":182358960,"NOR":45621000,"NPL":4824304,"NRU":43968,"NZL":34810384,"OMN":51149068,"OWID_KOS":8354687.5,"PAK":153908660,"PAN":9072099,"PER":42505100,"PHL":83063350,"PLW":208848,"PNG":4714717,"POL":334224580,"PRK":50091130,"PRT":52933984,"PRY":5021793,"PSE":2033520,"PYF":923328,"QAT":73421576,"ROU":86094090,"RUS":1632783200,"RWA":580977,"SAU":524604130,"SDN":15026002,"SEN":6862391,"SGP":43048336,"SHN":10992,"SLB":329760,"SLE":542272,"SLV":6318629,"SOM":611888,"SPM":65952,"SRB":45696428,"SSD":1313250,"STP":102592,"SUR":2370056,"SVK":38408616,"SVN":16459730,"SWE":53120372,"SWZ":996608,"SXM":448949,"SYC":443344,"SYR":61721950,"TCA":282128,"TCD":1236006,"TGO":2595698,"THA":241018980,"TJK":2536415,"TKM":59184068,"TLS":313134,"TON":117248,"TTO":47111836,"TUN":28137812,"TUR":316193060,"TUV":10992,"TWN":270148000,"TZA":6922992,"UGA":3569619,"UKR":294365800,"URY":6297960,"USA":5679715300,"UZB":107665944,"VCT":219840,"VEN":189316720,"VGB":212512,"VNM":139563840,"VUT":120912,"WLF":29312,"WSM":183200,"YEM":25713402,"ZAF":462999680,"ZMB":3120300,"ZWE":8754012},"2011":{"ABW":2498848,"AFG":11838316,"AGO":23397032,"AIA":124576,"ALB":5314676,"AND":490976,"ARE":197573140,"ARG":189676100,"ARM":4968878,"ATA":0,"ATG":545936,"AUS":404256770,"AUT":69909256,"AZE":30209808,"BDI":340752,"BEL":105068560,"BEN":4479719,"BES":69331,"BFA":2130933,"BGD":56556344,"BGR":53124756,"BHR":28467646,"BHS":2114128,"BIH":23761290,"BLR":61307590,"BLZ":553264,"BMU":443344,"BOL":15948673,"BRA":462580000,"BRB":1941506,"BRN":9555439,"BTN":732023,"BWA":4028802,"CAF":186864,"CAN":565254000,"CHE":40981070,"CHL":78071464,"CHN":9532409000,"CIV":6523170,"CMR":8105014,"COD":3042265,"COG":5046421,"COK":80608,"COL":76224170,"COM":142896,"CPV":615552,"CRI":7310815,"CUB":29431084,"CUW":5172702,"CXR":0,"CYP":7787636,"CZE":115201990,"DEU":807613950,"DJI":472656,"DMA":153888,"DNK":44236864,"DOM":21317914,"DZA":125094570,"ECU":38263916,"EGY":216917280,"ERI":577818,"ESP":283799330,"EST":18956354,"ETH":7402480,"FIN":56638000,"FJI":998622,"FRA":354089100,"FRO":567920,"FSM":117248,"GAB":5827907,"GBR":469713300,"GEO":7804526,"GHA":10335549,"GIN":2594112,"GMB":443344,"GNB":241824,"GNQ":6094526,"GRC":94505230,"GRD":252815.98,"GRL":726076,"GTM":11237312,"GUY":1960240,"HKG":43149716,"HND":8860314,"HRV":20650176,"HTI":2272898,"HUN":50253124,"IDN":500724540,"IND":1764712400,"IRL":38056364,"IRN":566288830,"IRQ":122937330,"ISL":3504698,"ISR":68594740,"ITA":424739260,"JAM":8255604.5,"JOR":21243760,"JPN":1264631000,"KAZ":238987650,"KEN":13447592,"KGZ":7620172,"KHM":5274698,"KIR":54960,"KNA":230832,"KOR":623442800,"KWT":87916720,"LAO":3170104,"LBN":20264128,"LBR":848052,"LBY":55861524,"LCA":487312,"LIE":176782,"LKA":14886152,"LSO":3063104,"LTU":13960951,"LUX":11102366,"LVA":7811917,"MAC":1293392,"MAR":54867636,"MDA":4944974,"MDG":2373945,"MDV":985616,"MEX":483404740,"MHL":139232,"MKD":8837568,"MLI":2279008,"MLT":2583914,"MMR":15121961,"MNE":2407248,"MNG":21367866,"MOZ":3106628,"MRT":2230241,"MSR":36640,"MUS":3916816,"MWI":1056154,"MYS":203452350,"NAM":2782096,"NCL":3694428,"NER":1316691,"NGA":125429280,"NIC":4805903,"NIU":7328,"NLD":169123820,"NOR":44747000,"NPL":5220429,"NRU":40304,"NZL":34265070,"OMN":56983532,"OWID_KOS":8294465,"PAK":154650900,"PAN":9952930,"PER":42173068,"PHL":83908024,"PLW":216176,"PNG":5298421,"POL":333598750,"PRK":36185884,"PRT":51739810,"PRY":5198721,"PSE":2246032,"PYF":886688,"QAT":81493320,"ROU":92803520,"RUS":1685909500,"RWA":643581,"SAU":502926100,"SDN":14668431,"SEN":7818837,"SGP":34016576,"SHN":10992,"SLB":344416,"SLE":710816,"SLV":6499405,"SOM":611888,"SPM":65952,"SRB":48957080,"SSD":1281212,"STP":98928,"SUR":2755048,"SVK":37988616,"SVN":16358786,"SWE":49210976,"SWZ":1007599.94,"SXM":572735,"SYC":406704,"SYR":58835576,"TCA":282128,"TCD":1272949,"TGO":2503920,"THA":244878160,"TJK":2340736,"TKM":65155076,"TLS":433890,"TON":102592,"TTO":47067340,"TUN":26436428,"TUR":342057300,"TUV":10992,"TWN":276282980,"TZA":7523881,"UGA":3824069,"UKR":308376420,"URY":7652644,"USA":5546116000,"UZB":116756070,"VCT":216176,"VEN":168413150,"VGB":212512,"VNM":152560270,"VUT":135568,"WLF":25648,"WSM":190528,"YEM":22515330,"ZAF":465907840,"ZMB":3372367,"ZWE":10363199},"2012":{"ABW":1348352,"AFG":10035314,"AGO":25940960,"AIA":120912,"ALB":4850060,"AND":487312,"ARE":207392260,"ARG":191292110,"ARM":5748252,"ATA":0,"ATG":556928,"AUS":406579740,"AUT":67282920,"AZE":32773342,"BDI":352023,"BEL":102404520,"BEN":4402539,"BES":84272,"BFA":2618914,"BGD":60707800,"BGR":48289980,"BHR":27118990,"BHS":2051840.1,"BIH":22134174,"BLR":62545264,"BLZ":450672,"BMU":366400,"BOL":17535340,"BRA":498309000,"BRB":1803368,"BRN":9499828,"BTN":835194,"BWA":5076711,"CAF":190528,"CAN":565781760,"CHE":42248652,"CHL":79620824,"CHN":9779355000,"CIV":8540010,"CMR":7603374,"COD":2798720,"COG":5019527,"COK":84272,"COL":80255270,"COM":153888,"CPV":501968.03,"CRI":7260085,"CUB":29838558,"CUW":6287424,"CXR":0,"CYP":7262770,"CZE":111298450,"DEU":812815550,"DJI":487312,"DMA":164880,"DNK":39861260,"DOM":21254754,"DZA":135674290,"ECU":37408784,"EGY":213733500,"ERI":608229,"ESP":278060400,"EST":17771784,"ETH":8108686.5,"FIN":51146000,"FJI":968907,"FRA":356444540,"FRO":589904,"FSM":124576,"GAB":5629798,"GBR":487476770,"GEO":8254474.5,"GHA":12644250,"GIN":2421904,"GMB":447008,"GNB":245488,"GNQ":6900679,"GRC":91392584,"GRD":271136,"GRL":579760,"GTM":11576644,"GUY":1960240,"HKG":42742060,"HND":9218278,"HRV":19081248,"HTI":2264181,"HUN":46818720,"IDN":515954180,"IND":1925699700,"IRL":38227200,"IRN":588364800,"IRQ":133421110,"ISL":3501300,"ISR":74784850,"ITA":404260600,"JAM":7912829,"JOR":23814580,"JPN":1305883500,"KAZ":246345340,"KEN":12505727,"KGZ":10086689,"KHM":5576016,"KIR":51296,"KNA":219840,"KOR":627943040,"KWT":101766056,"LAO":3397982,"LBN":22332032,"LBR":962647,"LBY":55278764,"LCA":490976,"LIE":185325,"LKA":15798102,"LSO":3092416,"LTU":14055952,"LUX":10872003,"LVA":7520586,"MAC":1132176,"MAR":56953540,"MDA":4765682,"MDG":2744214,"MDV":1110192,"MEX":501568830,"MHL":135568,"MKD":8485824,"MLI":2436560,"MLT":2717043,"MMR":11818522,"MNE":2213056,"MNG":34999856,"MOZ":3054738,"MRT":2447571,"MSR":40304,"MUS":3964448,"MWI":1066113,"MYS":212989970,"NAM":3355055,"NCL":3705562,"NER":1844486,"NGA":109065940,"NIC":4549767,"NIU":7328,"NLD":165481760,"NOR":44228000,"NPL":5470253,"NRU":43968,"NZL":35944244,"OMN":62713524,"OWID_KOS":7847775,"PAK":154885580,"PAN":9768100,"PER":45508680,"PHL":88628560,"PLW":223504,"PNG":5068605,"POL":325953300,"PRK":37565140,"PRT":49898550,"PRY":5173286,"PSE":2201692,"PYF":875696,"QAT":93320950,"ROU":91126710,"RUS":1701268400,"RWA":718466,"SAU":566825500,"SDN":15213422,"SEN":7362129,"SGP":50706096,"SHN":10992,"SLB":348080,"SLE":831728,"SLV":6471882,"SOM":608224,"SPM":65952,"SRB":43744160,"SSD":1330032,"STP":109920,"SUR":2492080,"SVK":35913256,"SVN":15759567,"SWE":46712080,"SWZ":1168816,"SXM":696160,"SYC":425024,"SYR":45850204,"TCA":282128,"TCD":1742947,"TGO":2215629,"THA":262347660,"TJK":2933412,"TKM":66938636,"TLS":591295,"TON":106256,"TTO":46175890,"TUN":28455854,"TUR":356107200,"TUV":10992,"TWN":272739000,"TZA":8784956,"UGA":3626987,"UKR":304424100,"URY":8591791,"USA":5344086000,"UZB":118854700,"VCT":230832,"VEN":175719550,"VGB":212512,"VNM":144277150,"VUT":117248,"WLF":25648,"WSM":186864,"YEM":20355792,"ZAF":458954200,"ZMB":4165843,"ZWE":11253769},"2013":{"ABW":861040,"AFG":9250510,"AGO":25709742,"AIA":117248,"ALB":5287465,"AND":476320,"ARE":213335140,"ARG":189537740,"ARM":5535004,"ATA":0,"ATG":556928,"AUS":399288030,"AUT":67776040,"AZE":33555224,"BDI":359072,"BEL":102714744,"BEN":4565975,"BES":84272,"BFA":2863840,"BGD":61798984,"BGR":42586732,"BHR":31157658,"BHS":2029856,"BIH":21801048,"BLR":64125556,"BLZ":439680,"BMU":534944,"BOL":17769010,"BRA":532418020,"BRB":1822085,"BRN":7626055,"BTN":918201,"BWA":5663055,"CAF":117248,"CAN":569539700,"CHE":43182480,"CHL":81736820,"CHN":9956376000,"CIV":9679770,"CMR":7849517,"COD":3921616,"COG":5892286,"COK":84272,"COL":88104664,"COM":183200,"CPV":494640,"CRI":7631517,"CUB":28124912,"CUW":5928352,"CXR":0,"CYP":6582609,"CZE":106732696,"DEU":833804350,"DJI":556690,"DMA":157552,"DNK":41763010,"DOM":21266960,"DZA":140786380,"ECU":39654976,"EGY":211418910,"ERI":569510,"ESP":251940320,"EST":19660420,"ETH":9781029,"FIN":51715000,"FJI":1106116,"FRA":358487460,"FRO":648528,"FSM":135568,"GAB":5926811,"GBR":477611260,"GEO":8012545.5,"GHA":12606324,"GIN":2110464,"GMB":425024,"GNB":245488,"GNQ":8196183,"GRC":81713256,"GRD":304112,"GRL":562963,"GTM":12811682,"GUY":1905280,"HKG":44306892,"HND":9364898,"HRV":18432192,"HTI":2706250,"HUN":43669620,"IDN":489055100,"IND":1995098100,"IRL":37281868,"IRN":597952300,"IRQ":141052560,"ISL":3490100,"ISR":63095308,"ITA":370253540,"JAM":8492241,"JOR":23818202,"JPN":1315192000,"KAZ":255164930,"KEN":13457976,"KGZ":9733813,"KHM":5636730,"KIR":51296,"KNA":223504,"KOR":634580700,"KWT":83723280,"LAO":4261159,"LBN":22163384,"LBR":874265,"LBY":43458372,"LCA":487312,"LIE":192545,"LKA":14510512,"LSO":2333968,"LTU":13154249,"LUX":10338725,"LVA":7369655,"MAC":989280,"MAR":56606420,"MDA":4899358,"MDG":3207590,"MDV":1091872,"MEX":495485200,"MHL":139232,"MKD":7489216,"MLI":2743394,"MLT":2379249,"MMR":12722151,"MNE":2150768,"MNG":43478036,"MOZ":3581790,"MRT":2168855,"MSR":47632,"MUS":4067040,"MWI":1145877,"MYS":241671090,"NAM":2567728,"NCL":3970129,"NER":2078361,"NGA":116344830,"NIC":4605408,"NIU":7328,"NLD":164874200,"NOR":44516000,"NPL":6217840,"NRU":47632,"NZL":35240228,"OMN":65251404,"OWID_KOS":7969366,"PAK":151524600,"PAN":10513283,"PER":43023884,"PHL":96035850,"PLW":227168,"PNG":5429638,"POL":321927040,"PRK":27013626,"PRT":48102730,"PRY":5172147,"PSE":2437297,"PYF":879360,"QAT":82808080,"ROU":79365576,"RUS":1640437400,"RWA":782275,"SAU":544563500,"SDN":17007858,"SEN":7852669,"SGP":54908704,"SHN":10992,"SLB":373728,"SLE":1047904,"SLV":6094472,"SOM":630208,"SPM":65952,"SRB":44569116,"SSD":1443616,"STP":109920,"SUR":3147388,"SVK":35569508,"SVN":15128262,"SWE":45202084,"SWZ":1399648,"SXM":714480,"SYC":414032,"SYR":34042910,"TCA":285792,"TCD":2078496.9,"TGO":1642552,"THA":263753500,"TJK":2906893,"TKM":64339644,"TLS":618736,"TON":113584,"TTO":45823650,"TUN":28333024,"TUR":347331740,"TUV":10992,"TWN":273873000,"TZA":9686995,"UGA":3754530,"UKR":297479000,"URY":7492373,"USA":5480156700,"UZB":112281976,"VCT":219840,"VEN":198427040,"VGB":212512,"VNM":151437980,"VUT":109920,"WLF":21984,"WSM":194192,"YEM":27160398,"ZAF":458628220,"ZMB":4416159,"ZWE":11671374},"2014":{"ABW":872032,"AFG":9170309,"AGO":24767724,"AIA":120912,"ALB":5999650,"AND":461664,"ARE":209983040,"ARG":188396530,"ARM":5604113,"ATA":0,"ATG":567920,"AUS":393049380,"AUT":64175904,"AZE":34348428,"BDI":348080,"BEL":97029240,"BEN":4796000,"BES":84272,"BFA":2911488,"BGD":66008996,"BGR":45161788,"BHR":30899728,"BHS":2136112,"BIH":19311786,"BLR":63648870,"BLZ":468992,"BMU":670512,"BOL":19887892,"BRA":557901000,"BRB":1690056,"BRN":8830992,"BTN":1028223.06,"BWA":6850164,"CAF":124576,"CAN":566353000,"CHE":39228588,"CHL":77589860,"CHN":9998674000,"CIV":9903225,"CMR":8771510,"COD":5067029,"COG":5469577,"COK":80608,"COL":98284140,"COM":161216,"CPV":487312,"CRI":7748309,"CUB":27608264,"CUW":6796720,"CXR":0,"CYP":6950800,"CZE":104256190,"DEU":794738500,"DJI":388306,"DMA":164880,"DNK":37571384,"DOM":21800612,"DZA":151282780,"ECU":43731348,"EGY":226899340,"ERI":569107,"ESP":254179710,"EST":18828278,"ETH":12016546,"FIN":47619000,"FJI":1251551,"FRA":327009470,"FRO":597232,"FSM":135568,"GAB":6369402,"GBR":438807070,"GEO":8938688,"GHA":13252466,"GIN":2165424,"GMB":505631.97,"GNB":260144,"GNQ":7672193,"GRC":78636450,"GRD":234496,"GRL":522611.97,"GTM":13827098,"GUY":1972021,"HKG":45491750,"HND":9481238,"HRV":17681566,"HTI":2704625,"HUN":43791780,"IDN":487889950,"IND":2148343800,"IRL":36853212,"IRN":632673300,"IRQ":137021060,"ISL":3446717,"ISR":60282336,"ITA":350126700,"JAM":7697454,"JOR":25898834,"JPN":1264072000,"KAZ":274289660,"KEN":14531541,"KGZ":10236388,"KHM":6834254,"KIR":58624,"KNA":230832,"KOR":629366460,"KWT":75623540,"LAO":4449693,"LBN":23992028,"LBR":821462,"LBY":60602124,"LCA":483648,"LIE":161259,"LKA":17420012,"LSO":2473200,"LTU":12854897,"LUX":9823495,"LVA":7173207,"MAC":1293392,"MAR":57174916,"MDA":4758816,"MDG":3157868,"MDV":1315376,"MEX":484113700,"MHL":142896,"MKD":7203424,"MLI":3135649,"MLT":2364416,"MMR":15849346,"MNE":2106800,"MNG":29626122,"MOZ":8122090.5,"MRT":2566410,"MSR":47632,"MUS":4206272,"MWI":1040758.94,"MYS":245049710,"NAM":3677997,"NCL":5009068,"NER":2256260,"NGA":122980450,"NIC":4745122,"NIU":10992,"NLD":157467570,"NOR":44958000,"NPL":7591334,"NRU":51296,"NZL":35438010,"OMN":65896628,"OWID_KOS":7132675,"PAK":156529340,"PAN":10855411,"PER":49388348,"PHL":101483620,"PLW":219840,"PNG":6659834,"POL":309582460,"PRK":30543564,"PRT":47885044,"PRY":5458230,"PSE":2836635,"PYF":850048,"QAT":91177600,"ROU":79126890,"RUS":1639959200,"RWA":829804,"SAU":612841900,"SDN":17535624,"SEN":8724360,"SGP":52109410,"SHN":10992,"SLB":329760,"SLE":1128512,"SLV":6151155,"SOM":630208,"SPM":65952,"SRB":37207988,"SSD":1520560,"STP":128240.01,"SUR":3200660,"SVK":33658640,"SVN":13561306,"SWE":43473364,"SWZ":769440,"SXM":725472,"SYC":458000,"SYR":30943050,"TCA":307776,"TCD":2182780,"TGO":1541898,"THA":272487650,"TJK":4600122,"TKM":62799344,"TLS":624261,"TON":113584,"TTO":46891730,"TUN":29692062,"TUR":364028300,"TUV":10992,"TWN":276371000,"TZA":9198410,"UGA":4089666,"UKR":257639000,"URY":6684323,"USA":5528681000,"UZB":107399464,"VCT":252815.98,"VEN":175961380,"VGB":216176,"VNM":181842880,"VUT":157552,"WLF":21984,"WSM":201520,"YEM":26476566,"ZAF":471866000,"ZMB":4876557,"ZWE":11946148},"2015":{"ABW":897680,"AFG":9791093,"AGO":26030358,"AIA":139232,"ALB":4712144,"AND":465328,"ARE":225683650,"ARG":191743840,"ARM":5469323,"ATA":0,"ATG":582576,"AUS":401378370,"AUT":66365640,"AZE":34682950,"BDI":355408,"BEL":101145630,"BEN":5328876,"BES":95264,"BFA":3714985,"BGD":73157550,"BGR":48121012,"BHR":32459652,"BHS":2246032,"BIH":18460492,"BLR":58798910,"BLZ":641200,"BMU":538608,"BOL":19886526,"BRA":529353020,"BRB":1686392,"BRN":6933290,"BTN":1056506,"BWA":5421209,"CAF":179536,"CAN":570680400,"CHE":38725590,"CHL":81782160,"CHN":9866952000,"CIV":9554745,"CMR":9850663,"COD":3276557,"COG":5633314,"COK":80608,"COL":96774220,"COM":179536,"CPV":490976,"CRI":7406021,"CUB":29468648,"CUW":7328000,"CXR":0,"CYP":6971575,"CZE":105022270,"DEU":798084740,"DJI":431641,"DMA":175872,"DNK":35110572,"DOM":23494588,"DZA":160087460,"ECU":41275740,"EGY":224479740,"ERI":554345,"ESP":270767460,"EST":15823998,"ETH":12696406,"FIN":44186000,"FJI":1319945,"FRA":331414430,"FRO":608224,"FSM":142896,"GAB":6475558,"GBR":422460800,"GEO":9756186,"GHA":14568119,"GIN":2451216,"GMB":582576,"GNB":278464,"GNQ":7033487,"GRC":74927624,"GRD":260144,"GRL":525712,"GTM":15951887,"GUY":2003336,"HKG":42399920,"HND":10347979,"HRV":17824704,"HTI":2660657,"HUN":46717404,"IDN":539149250,"IND":2234219500,"IRL":38718548,"IRN":631581200,"IRQ":141986560,"ISL":3543713,"ISR":62939140,"ITA":361935900,"JAM":7998908,"JOR":25549898,"JPN":1223168600,"KAZ":278661280,"KEN":16998498,"KGZ":10264781,"KHM":8365610,"KIR":54960,"KNA":234496,"KOR":634177300,"KWT":93660650,"LAO":9229252,"LBN":25734552,"LBR":467217,"LBY":54550704,"LCA":479984,"LIE":159774,"LKA":19687388,"LSO":2242368,"LTU":13055458,"LUX":9350996,"LVA":7263453,"MAC":1769712,"MAR":58495180,"MDA":4781760,"MDG":3227484,"MDV":1278736,"MEX":479519780,"MHL":142896,"MKD":6756554,"MLI":3281577,"MLT":1665293,"MMR":21887144,"MNE":2238704,"MNG":23282274,"MOZ":6730608,"MRT":3002486,"MSR":54960,"MUS":4209936,"MWI":1082885,"MYS":235505740,"NAM":3851304,"NCL":4876909,"NER":2206060,"NGA":109217160,"NIC":5430953,"NIU":7328,"NLD":163802240,"NOR":45494000,"NPL":6904657,"NRU":54960,"NZL":35812136,"OMN":67376190,"OWID_KOS":8290589.5,"PAK":166432900,"PAN":10788440,"PER":49227884,"PHL":112449144,"PLW":205184,"PNG":6638563,"POL":312715420,"PRK":24623532,"PRT":52203440,"PRY":6047637,"PSE":3005733,"PYF":846384,"QAT":91194280,"ROU":78031910,"RUS":1638675300,"RWA":970183,"SAU":678849300,"SDN":21189514,"SEN":9845416,"SGP":61925264,"SHN":10992,"SLB":293120,"SLE":1084544,"SLV":6667772,"SOM":630208,"SPM":65952,"SRB":43773750,"SSD":1912608,"STP":135568,"SUR":2713354,"SVK":34471936,"SVN":13645485,"SWE":43418744,"SWZ":868368,"SXM":743792,"SYC":498304,"SYR":28603272,"TCA":311440,"TCD":2351698,"TGO":1863341,"THA":277098700,"TJK":5302282,"TKM":64322776,"TLS":589620,"TON":117248,"TTO":45559680,"TUN":31418044,"TUR":384929660,"TUV":10992,"TWN":275868000,"TZA":9723330,"UGA":4525570,"UKR":223787570,"URY":6742026,"USA":5376473000,"UZB":103695920,"VCT":234496,"VEN":165853100,"VGB":227168,"VNM":215461950,"VUT":135568,"WLF":21984,"WSM":227168,"YEM":14083540,"ZAF":446221020,"ZMB":5064975,"ZWE":12254954},"2016":{"ABW":883024,"AFG":9067598,"AGO":23992706,"AIA":139232,"ALB":4631979,"AND":468992,"ARE":226604720,"ARG":189920450,"ARM":5203013,"ATA":0,"ATG":597232,"AUS":410253600,"AUT":67226580,"AZE":34727330,"BDI":428688,"BEL":99623020,"BEN":6494014,"BES":102592,"BFA":3903988,"BGD":76203280,"BGR":45336944,"BHR":31559504,"BHS":2209392,"BIH":21730408,"BLR":58134484,"BLZ":626544,"BMU":619216,"BOL":21239286,"BRA":492748000,"BRB":1693720,"BRN":7632908,"BTN":1261386,"BWA":6348201,"CAF":197856,"CAN":557689700,"CHE":39178640,"CHL":84250500,"CHN":9765029000,"CIV":11982747,"CMR":9958010,"COD":2559416,"COG":5729264,"COK":73280,"COL":99685730,"COM":216176,"CPV":494640,"CRI":7855934,"CUB":28171536,"CUW":6192160,"CXR":0,"CYP":7373670,"CZE":106680870,"DEU":801744600,"DJI":380134,"DMA":172208,"DNK":36916560,"DOM":24644568,"DZA":158481630,"ECU":39357052,"EGY":239385580,"ERI":557483,"ESP":259629390,"EST":17489174,"ETH":14424923,"FIN":47248000,"FJI":1259717,"FRA":334005060,"FRO":630208,"FSM":142896,"GAB":6521700,"GBR":399430140,"GEO":10067680,"GHA":13917313,"GIN":2741192,"GMB":589904,"GNB":304112,"GNQ":7558256,"GRC":71361000,"GRD":267472,"GRL":526596,"GTM":16926494,"GUY":2374679,"HKG":43365784,"HND":9722308,"HRV":18109014,"HTI":2979519,"HUN":47178500,"IDN":540085600,"IND":2354658000,"IRL":40369680,"IRN":633826900,"IRQ":158892590,"ISL":3495520,"ISR":61160656,"ITA":358814000,"JAM":8163432,"JOR":24698330,"JPN":1202454500,"KAZ":277695740,"KEN":18134512,"KGZ":9621676,"KHM":10921712,"KIR":54960,"KNA":238160,"KOR":637914050,"KWT":109126340,"LAO":16458120,"LBN":26441534,"LBR":497121,"LBY":51649400,"LCA":476320,"LIE":149838,"LKA":22986968,"LSO":2213056,"LTU":13121737,"LUX":9094195,"LVA":7211637,"MAC":1780704,"MAR":58457476,"MDA":4903671,"MDG":3267788,"MDV":1436288,"MEX":479789760,"MHL":142896,"MKD":6653824,"MLI":4234638,"MLT":1356298,"MMR":21140418,"MNE":2015199.9,"MNG":25629140,"MOZ":8547341,"MRT":2627103,"MSR":29312,"MUS":4345504,"MWI":1205613,"MYS":236817360,"NAM":4051196,"NCL":5481737,"NER":2145222,"NGA":116932580,"NIC":5406146,"NIU":7328,"NLD":164691310,"NOR":44678000,"NPL":10085127,"NRU":51296,"NZL":34153004,"OMN":65739244,"OWID_KOS":8793497,"PAK":195791500,"PAN":10438870,"PER":52732748,"PHL":121792456,"PLW":212512,"PNG":7035198,"POL":323547000,"PRK":27571904,"PRT":50366708,"PRY":7193354,"PSE":3233556,"PYF":868368,"QAT":87385144,"ROU":76714536,"RUS":1634885000,"RWA":1048333.06,"SAU":697420300,"SDN":20037700,"SEN":10015698,"SGP":40289344,"SHN":14656,"SLB":289456,"SLE":1142807,"SLV":6595795,"SOM":637536,"SPM":65952,"SRB":45039824,"SSD":1703760,"STP":150224,"SUR":2920766,"SVK":34914412,"SVN":14458364,"SWE":43414110,"SWZ":1055232,"SXM":743792,"SYC":553264,"SYR":26936300,"TCA":329760,"TCD":2374447,"TGO":2311978,"THA":284045300,"TJK":5692501,"TKM":64450340,"TLS":642966,"TON":124576,"TTO":39893100,"TUN":30591786,"TUR":405950200,"TUV":10992,"TWN":279730980,"TZA":10213532,"UGA":4795435,"UKR":233961020,"URY":6521229,"USA":5252932000,"UZB":110139080,"VCT":241824,"VEN":152385310,"VGB":230832,"VNM":223203940,"VUT":150224,"WLF":25648,"WSM":238160,"YEM":10007327,"ZAF":456972860,"ZMB":5864282,"ZWE":10533453},"2017":{"ABW":890352,"AFG":9867969,"AGO":22617028,"AIA":128240.01,"ALB":5293048,"AND":465328,"ARE":212490380,"ARG":186898880,"ARM":5540153,"ATA":0,"ATG":604560,"AUS":413655460,"AUT":69608664,"AZE":34607044,"BDI":512960.03,"BEL":99055040,"BEN":6804151,"BES":102592,"BFA":4519039,"BGD":80741780,"BGR":47430590,"BHR":32835182,"BHS":2509840,"BIH":22156174,"BLR":59381852,"BLZ":615552,"BMU":633872,"BOL":22171246,"BRA":497121380,"BRB":1644597,"BRN":9309384,"BTN":1341511,"BWA":7077332,"CAF":216176,"CAN":566651900,"CHE":38172092,"CHL":84138260,"CHN":10011151000,"CIV":12001905,"CMR":9578064,"COD":3102465,"COG":5651375,"COK":80608,"COL":92275010,"COM":267472,"CPV":509296,"CRI":8029008,"CUB":24947550,"CUW":4964720,"CXR":0,"CYP":7503812,"CZE":107776580,"DEU":785985860,"DJI":391759,"DMA":153888,"DNK":34664620,"DOM":24016922,"DZA":165089600,"ECU":39174204,"EGY":260110600,"ERI":557061,"ESP":273592200,"EST":18738382,"ETH":15583688,"FIN":44654000,"FJI":1361855,"FRA":336895900,"FRO":707152,"FSM":142896,"GAB":5879220,"GBR":387367140,"GEO":10172526,"GHA":12437709,"GIN":3238976,"GMB":593568,"GNB":304112,"GNQ":7862125,"GRC":74843450,"GRD":278464,"GRL":543821,"GTM":17320534,"GUY":2326815,"HKG":42431172,"HND":10231486,"HRV":18743996,"HTI":3139196,"HUN":49580330,"IDN":556944200,"IND":2426606800,"IRL":39078276,"IRN":685401300,"IRQ":176963090,"ISL":3612189,"ISR":58841624,"ITA":353418600,"JAM":7797546,"JOR":25813520,"JPN":1186802300,"KAZ":293476480,"KEN":17709414,"KGZ":9360708,"KHM":12475530,"KIR":65952,"KNA":241824,"KOR":654537300,"KWT":103313340,"LAO":19683848,"LBN":27824084,"LBR":890868,"LBY":53437024,"LCA":490976,"LIE":155769,"LKA":22872902,"LSO":2513504,"LTU":13286188,"LUX":9267992,"LVA":7216303,"MAC":1927264,"MAR":61107120,"MDA":5220511,"MDG":4118890.8,"MDV":1513232,"MEX":465620930,"MHL":146560,"MKD":7152128,"MLI":4656420,"MLT":1530839,"MMR":23630088,"MNE":2103136,"MNG":34135348,"MOZ":6905362,"MRT":3419921,"MSR":29312,"MUS":4536032,"MWI":1229673,"MYS":244105580,"NAM":4216153,"NCL":5583765,"NER":2249800,"NGA":112759180,"NIC":5461305,"NIU":7328,"NLD":162202580,"NOR":44165000,"NPL":12429835,"NRU":54960,"NZL":35687180,"OMN":69230730,"OWID_KOS":8022504,"PAK":216158430,"PAN":11223156,"PER":54858950,"PHL":135150080,"PLW":216176,"PNG":6660155,"POL":336765400,"PRK":51735804,"PRT":55106276,"PRY":7932479,"PSE":3268288,"PYF":861040,"QAT":100111260,"ROU":79648910,"RUS":1666121200,"RWA":1155068,"SAU":680853950,"SDN":20493030,"SEN":10760131,"SGP":40014544,"SHN":10992,"SLB":285792,"SLE":1088208,"SLV":5969700,"SOM":637536,"SPM":65952,"SRB":45529550,"SSD":1454608,"STP":139232,"SUR":2426406,"SVK":36114092,"SVN":14616678,"SWE":42456588,"SWZ":985616,"SXM":707152,"SYC":575248,"SYR":28443664,"TCA":351744,"TCD":2344165,"TGO":1991390,"THA":283347620,"TJK":6858048,"TKM":64359890,"TLS":689670,"TON":135568,"TTO":40317892,"TUN":31271626,"TUR":430900860,"TUV":10992,"TWN":285247000,"TZA":11233944,"UGA":5387882,"UKR":223080820,"URY":6162573,"USA":5212162000,"UZB":108930904,"VCT":216176,"VEN":138226900,"VGB":179536,"VNM":229642500,"VUT":142896,"WLF":25648,"WSM":245488,"YEM":9694605,"ZAF":439380130,"ZMB":6850203,"ZWE":9295629},"2018":{"ABW":872032,"AFG":10818048,"AGO":21434458,"AIA":131904,"ALB":4894953,"AND":494640,"ARE":209278510,"ARG":180599310,"ARM":5825786,"ATA":0,"ATG":615552,"AUS":415350720,"AUT":66571892,"AZE":34575828,"BDI":645078,"BEL":99967320,"BEN":7434497,"BES":98928,"BFA":5010070,"BGD":82555700,"BGR":43479636,"BHR":32636948,"BHS":2421904,"BIH":22075036,"BLR":62156932,"BLZ":604560,"BMU":696160,"BOL":22501642,"BRA":477998620,"BRB":1655590,"BRN":9344461,"BTN":1477737,"BWA":7504259,"CAF":219840,"CAN":577066300,"CHE":36867250,"CHL":84438870,"CHN":10353934000,"CIV":10352434,"CMR":9645489,"COD":3375097,"COG":6544945,"COK":80608,"COL":87112040,"COM":293120,"CPV":538608,"CRI":8012376,"CUB":23133148,"CUW":4312528,"CXR":0,"CYP":7321720,"CZE":106358380,"DEU":754811140,"DJI":434878,"DMA":161216,"DNK":34608956,"DOM":25756240,"DZA":171276020,"ECU":38429116,"EGY":243907890,"ERI":623013,"ESP":268600500,"EST":17884834,"ETH":15988957,"FIN":45730000,"FJI":1410107,"FRA":322078560,"FRO":725472,"FSM":142896,"GAB":5473967,"GBR":379729760,"GEO":10062534,"GHA":15193367,"GIN":3162032,"GMB":648528,"GNB":311440,"GNQ":6008448,"GRC":71780900,"GRD":307776,"GRL":544649,"GTM":18500796,"GUY":2502966,"HKG":42600628,"HND":9861259,"HRV":17724152,"HTI":3410161,"HUN":49534410,"IDN":594101400,"IND":2593057800,"IRL":39012556,"IRN":710214800,"IRQ":183753490,"ISL":3668959,"ISR":59985780,"ITA":349826900,"JAM":8086434.5,"JOR":25141976,"JPN":1141668900,"KAZ":307174100,"KEN":18837988,"KGZ":11171519,"KHM":13933845,"KIR":65952,"KNA":245488,"KOR":670168700,"KWT":105547870,"LAO":20558106,"LBN":26160182,"LBR":421768,"LBY":54019470,"LCA":509296,"LIE":142950,"LKA":20096860,"LSO":2370608,"LTU":13434746,"LUX":9573905,"LVA":7863008,"MAC":1242096,"MAR":62309240,"MDA":5445450,"MDG":3791318,"MDV":1740400,"MEX":470285860,"MHL":146560,"MKD":6671957,"MLI":4908662,"MLT":1546735,"MMR":34016840,"MNE":2399920,"MNG":45315650,"MOZ":7010169,"MRT":3664324,"MSR":29312,"MUS":4459088,"MWI":1723025,"MYS":262207180,"NAM":4154920,"NCL":5913008,"NER":1803409,"NGA":105599590,"NIC":5199214,"NIU":10992,"NLD":158133890,"NOR":44405000,"NPL":14798718,"NRU":54960,"NZL":35704196,"OMN":66135436,"OWID_KOS":8044655,"PAK":205060930,"PAN":10755982,"PER":55848252,"PHL":141517820,"PLW":212512,"PNG":7606856,"POL":336080900,"PRK":47629852,"PRT":51372730,"PRY":8400541,"PSE":2959135,"PYF":875696,"QAT":95463944,"ROU":80279690,"RUS":1712494300,"RWA":1287400,"SAU":686896300,"SDN":21754658,"SEN":11330392,"SGP":50035584,"SHN":10992,"SLB":289456,"SLE":1029186.94,"SLV":6262603,"SOM":637536,"SPM":58624,"SRB":44320356,"SSD":1736736,"STP":139232,"SUR":2089318,"SVK":36105530,"SVN":14519854,"SWE":42036584,"SWZ":1033247.94,"SXM":688832,"SYC":600896,"SYR":32424630,"TCA":362736,"TCD":2383510,"TGO":2165189,"THA":288346340,"TJK":8060483,"TKM":63760204,"TLS":617024,"TON":135568,"TTO":40327880,"TUN":31134054,"TUR":422058620,"TUV":10992,"TWN":283416000,"TZA":11837862,"UGA":5523001,"UKR":231663820,"URY":6570970,"USA":5377797000,"UZB":102288104,"VCT":241824,"VEN":100734470,"VGB":161216,"VNM":257722290,"VUT":179536,"WLF":25648,"WSM":238160,"YEM":11591975,"ZAF":435237200,"ZMB":7419369,"ZWE":10714598},"2019":{"ABW":890352,"AFG":11081621,"AGO":19222174,"AIA":146560,"ALB":4826944,"AND":483648,"ARE":219556580,"ARG":178511620,"ARM":6284110,"ATA":0,"ATG":641200,"AUS":415811260,"AUT":67956160,"AZE":37737896,"BDI":688832,"BEL":99470264,"BEN":7116143,"BES":109920,"BFA":5507514,"BGD":100791880,"BGR":42232710,"BHR":37583132,"BHS":2454880,"BIH":20810378,"BLR":62096344,"BLZ":707152,"BMU":593568,"BOL":22605112,"BRA":473464400,"BRB":1666716,"BRN":10732756,"BTN":1458625,"BWA":6782064,"CAF":227168,"CAN":578587700,"CHE":36726916,"CHL":91977096,"CHN":10721042000,"CIV":10535081,"CMR":9591827,"COD":3592173,"COG":7290182,"COK":84272,"COL":94497930,"COM":311440,"CPV":560592,"CRI":7698382,"CUB":22618818,"CUW":2242368,"CXR":0,"CYP":7342336,"CZE":101032690,"DEU":707491400,"DJI":448617,"DMA":172208,"DNK":30950284,"DOM":28374692,"DZA":178577220,"ECU":40065172,"EGY":256140160,"ERI":648089,"ESP":250660800,"EST":12323983,"ETH":16674992,"FIN":42454000,"FJI":1408048,"FRA":315449730,"FRO":740128,"FSM":146560,"GAB":5426023,"GBR":364753280,"GEO":10886591,"GHA":16418402,"GIN":3920951,"GMB":710816,"GNB":322432,"GNQ":4637975,"GRC":65759484,"GRD":329760,"GRL":555414,"GTM":19501706,"GUY":2755782,"HKG":41900196,"HND":11218794,"HRV":17857446,"HTI":3091473,"HUN":49310484,"IDN":650905900,"IND":2612888000,"IRL":37325750,"IRN":694666500,"IRQ":189606500,"ISL":3558741,"ISR":58659188,"ITA":340402530,"JAM":7823415,"JOR":24728612,"JPN":1104539800,"KAZ":275289760,"KEN":19799186,"KGZ":9046309,"KHM":18219576,"KIR":65952,"KNA":252815.98,"KOR":646102200,"KWT":108893460,"LAO":19534332,"LBN":25661360,"LBR":1019598,"LBY":70527430,"LCA":501968.03,"LIE":149022,"LKA":21232160,"LSO":2388928,"LTU":13677775,"LUX":9769623,"LVA":7650647,"MAC":1212784,"MAR":68743120,"MDA":5495003,"MDG":4256360,"MDV":1952912,"MEX":468322140,"MHL":146560,"MKD":7646768,"MLI":5832595,"MLT":1648764,"MMR":33616924,"MNE":2476864,"MNG":47254524,"MOZ":7101099,"MRT":3773920,"MSR":21984,"MUS":4521376,"MWI":1636507,"MYS":267494290,"NAM":4111065,"NCL":5672867,"NER":2513365,"NGA":127337630,"NIC":5222552,"NIU":7328,"NLD":152509390,"NOR":42793000,"NPL":13574890,"NRU":54960,"NZL":36878936,"OMN":59221740,"OWID_KOS":8389661,"PAK":206061230,"PAN":13380774,"PER":58365044,"PHL":144159980,"PLW":219840,"PNG":7817134,"POL":317682530,"PRK":52764220,"PRT":47494044,"PRY":8136721.5,"PSE":3265402,"PYF":875696,"QAT":101018984,"ROU":76885224,"RUS":1705030900,"RWA":1372734,"SAU":707125250,"SDN":21772508,"SEN":12713021,"SGP":33778416,"SHN":14656,"SLB":293120,"SLE":1003936.06,"SLV":7549650,"SOM":637536,"SPM":65952,"SRB":44278484,"SSD":1780704,"STP":142896,"SUR":2635797,"SVK":33778548,"SVN":14039442,"SWE":41006040,"SWZ":1121184,"SXM":688832,"SYC":593568,"SYR":28677104,"TCA":362736,"TCD":2303133,"TGO":2414997,"THA":281870340,"TJK":8856778,"TKM":65324644,"TLS":675431,"TON":161216,"TTO":40782852,"TUN":30353464,"TUR":402692260,"TUV":10992,"TWN":273954020,"TZA":13743298,"UGA":5731925,"UKR":221943170,"URY":6489942,"USA":5262145000,"UZB":108429080,"VCT":227168,"VEN":87611624,"VGB":164880,"VNM":341788800,"VUT":164880,"WLF":25648,"WSM":271136,"YEM":11837194,"ZAF":465429250,"ZMB":7750827,"ZWE":9775428},"2020":{"ABW":890352,"AFG":11888066,"AGO":16764786,"AIA":142896,"ALB":5018921,"AND":373728,"ARE":216768320,"ARG":166879580,"ARM":6799022,"ATA":0,"ATG":619216,"AUS":396685200,"AUT":62121252,"AZE":36149228,"BDI":735766,"BEL":91101384,"BEN":7744662,"BES":113584,"BFA":5194114,"BGD":93614960,"BGR":36533612,"BHR":37395950,"BHS":2183744,"BIH":20831812,"BLR":59055548,"BLZ":613332,"BMU":458000,"BOL":18326306,"BRA":444504320,"BRB":1233549,"BRN":11101930,"BTN":919762,"BWA":5550960,"CAF":238160,"CAN":522845280,"CHE":34235224,"CHL":80178160,"CHN":10914012000,"CIV":11018607,"CMR":9701611,"COD":3709719,"COG":7391505,"COK":65952,"COL":89731320,"COM":381056,"CPV":516623.97,"CRI":6763180,"CUB":21277102,"CUW":1806352,"CXR":0,"CYP":6910908,"CZE":91697370,"DEU":647252300,"DJI":382454,"DMA":157552,"DNK":28299676,"DOM":23501650,"DZA":169892770,"ECU":32909420,"EGY":227637950,"ERI":640911,"ESP":213625420,"EST":9238881,"ETH":17810122,"FIN":37735000,"FJI":1040951.94,"FRA":281539040,"FRO":758448,"FSM":146560,"GAB":5928799,"GBR":326263200,"GEO":10574546,"GHA":19168242,"GIN":4499392,"GMB":699824,"GNB":296784,"GNQ":5524802,"GRC":55619772,"GRD":289456,"GRL":537154,"GTM":17336898,"GUY":3188380,"HKG":33497124,"HND":9526111,"HRV":16870528,"HTI":2512561,"HUN":47335468,"IDN":605984600,"IND":2421552000,"IRL":35123776,"IRN":679007200,"IRQ":159840260,"ISL":3339561,"ISR":55697504,"ITA":303281280,"JAM":6462606,"JOR":21128764,"JPN":1039795900,"KAZ":255486480,"KEN":21982360,"KGZ":8348849.5,"KHM":19034220,"KIR":65952,"KNA":230832,"KOR":597634300,"KWT":97712410,"LAO":19674886,"LBN":22279648,"LBR":769421,"LBY":47068096,"LCA":483648,"LIE":141929,"LKA":20624664,"LSO":2172752,"LTU":13538674,"LUX":8067690,"LVA":6999913,"MAC":1033247.94,"MAR":64560784,"MDA":5241230,"MDG":3963948,"MDV":1648800,"MEX":442289100,"MHL":146560,"MKD":6954272,"MLI":6418546,"MLT":1597200,"MMR":34609780,"MNE":2407248,"MNG":37076764,"MOZ":6376114,"MRT":4118336.2,"MSR":21984,"MUS":3806896,"MWI":1870757,"MYS":269248670,"NAM":3681840,"NCL":5109173,"NER":2816703,"NGA":123822170,"NIC":4748407,"NIU":7328,"NLD":136684620,"NOR":41231000,"NPL":14902414,"NRU":51296,"NZL":34237324,"OMN":65428856,"OWID_KOS":8451382,"PAK":200602800,"PAN":10324345,"PER":46965196,"PHL":132851040,"PLW":212512,"PNG":7723852,"POL":302437100,"PRK":49814344,"PRT":41695200,"PRY":7366268,"PSE":3326912,"PYF":846384,"QAT":102501230,"ROU":74026536,"RUS":1632929300,"RWA":1371813,"SAU":610772900,"SDN":20527464,"SEN":10820952,"SGP":54813440,"SHN":18320,"SLB":289456,"SLE":1025920.06,"SLV":6594499,"SOM":597232,"SPM":62288,"SRB":45169760,"SSD":1692768,"STP":139232,"SUR":2917944,"SVK":31096626,"SVN":12854907,"SWE":36686484,"SWZ":1091872,"SXM":652192,"SYC":608224,"SYR":26312742,"TCA":359072,"TCD":2279219,"TGO":2381218,"THA":271852000,"TJK":9298944,"TKM":67697480,"TLS":646494,"TON":183200,"TTO":35029664,"TUN":28493462,"TUR":412926880,"TUV":10992,"TWN":271788800,"TZA":14168675,"UGA":5538408,"UKR":206823860,"URY":6477168,"USA":4714628000,"UZB":109631970,"VCT":245488,"VEN":61956236,"VGB":161216,"VNM":363342660,"VUT":201520,"WLF":25648,"WSM":241824,"YEM":10883986,"ZAF":434828640,"ZMB":8144346,"ZWE":7849639},"2021":{"ABW":857967,"AFG":12283148,"AGO":17505714,"AIA":137698,"ALB":4903652,"AND":363046,"ARE":237248980,"ARG":189744130,"ARM":7064143,"ATA":0,"ATG":596693,"AUS":386606940,"AUT":66018630,"AZE":38333620,"BDI":800000,"BEL":95668080,"BEN":8312495,"BES":109453,"BFA":5878726,"BGD":98760296,"BGR":42281884,"BHR":38122464,"BHS":2100671,"BIH":19937964,"BLR":60938200,"BLZ":702059,"BMU":441341,"BOL":21725994,"BRA":497206340,"BRB":1226393,"BRN":11301837,"BTN":1062180,"BWA":6136440,"CAF":249235,"CAN":537173760,"CHE":35787340,"CHL":89036664,"CHN":11336233000,"CIV":11729395,"CMR":10297741,"COD":3940681,"COG":7255881,"COK":68819,"COL":95765200,"COM":415130,"CPV":558858,"CRI":7655385,"CUB":20940420,"CUW":1740648,"CXR":0,"CYP":7029358,"CZE":96665224,"DEU":678798900,"DJI":454836,"DMA":151821,"DNK":29608300,"DOM":23784850,"DZA":180225200,"ECU":39731668,"EGY":246884400,"ERI":700427,"ESP":230269460,"EST":10419918,"ETH":18919488,"FIN":37947000,"FJI":1085736,"FRA":306775740,"FRO":736770,"FSM":152931,"GAB":5880372,"GBR":347465060,"GEO":11056113,"GHA":20966088,"GIN":4867216,"GMB":757034,"GNB":321046,"GNQ":5629140,"GRC":57556330,"GRD":329842,"GRL":566715,"GTM":19683010,"GUY":3563899,"HKG":32775524,"HND":10834858,"HRV":17410628,"HTI":2425400,"HUN":48563856,"IDN":615923400,"IND":2674221800,"IRL":37547284,"IRN":688076300,"IRQ":168586340,"ISL":3510051,"ISR":54849148,"ITA":337229900,"JAM":6608377,"JOR":22667308,"JPN":1062129300,"KAZ":255142930,"KEN":24457572,"KGZ":9433804,"KHM":20130392,"KIR":68819,"KNA":222436,"KOR":616075000,"KWT":103282790,"LAO":23366972,"LBN":23471840,"LBR":865255,"LBY":63925804,"LCA":466056,"LIE":145884,"LKA":20118602,"LSO":2480521,"LTU":13829675,"LUX":8429713,"LVA":7240496,"MAC":1068793,"MAR":72640950,"MDA":5596952,"MDG":4266675,"MDV":1720469,"MEX":468791360,"MHL":152931,"MKD":7688865,"MLI":6928157,"MLT":1606727,"MMR":35619332,"MNE":2304752,"MNG":38256660,"MOZ":7190322,"MRT":4455008,"MSR":21184,"MUS":4090829.8,"MWI":2078419.9,"MYS":278861220,"NAM":3732342,"NCL":4536780,"NER":3038976,"NGA":131113260,"NIC":5384107,"NIU":7647,"NLD":139906940,"NOR":41028000,"NPL":15628272,"NRU":53526,"NZL":34318004,"OMN":70868430,"OWID_KOS":8088310,"PAK":223450130,"PAN":11707582,"PER":56470120,"PHL":142753780,"PLW":221749,"PNG":7946207,"POL":331077150,"PRK":51336290,"PRT":39938332,"PRY":9264423,"PSE":3427691,"PYF":883174,"QAT":107218140,"ROU":77190584,"RUS":1711993300,"RWA":1553445,"SAU":631437300,"SDN":22185106,"SEN":11540229,"SGP":55830696,"SHN":17654,"SLB":302038,"SLE":1109789,"SLV":7487630,"SOM":650636,"SPM":60022,"SRB":43905810,"SSD":1844134,"STP":145706,"SUR":3682585,"SVK":35166804,"SVN":13059966,"SWE":38524788,"SWZ":1131434,"SXM":628469,"SYC":662611,"SYR":27217022,"TCA":346011,"TCD":2466556,"TGO":2555860,"THA":267219020,"TJK":9980379,"TKM":69974744,"TLS":663697,"TON":191163,"TTO":35532470,"TUN":35244284,"TUR":452702800,"TUV":11470,"TWN":291201400,"TZA":15417177,"UGA":6052755,"UKR":210153310,"URY":8102205.5,"USA":5032213000,"UZB":116387944,"VCT":236559,"VEN":71613200,"VGB":155352,"VNM":352553020,"VUT":210280,"WLF":26763,"WSM":252335.02,"YEM":11587916,"ZAF":425627700,"ZMB":8663157,"ZWE":8396158},"2022":{"ABW":865874,"AFG":12147948,"AGO":16070269,"AIA":138967,"ALB":4954730,"AND":368645,"ARE":243895220,"ARG":192864430,"ARM":6407760,"ATA":0,"ATG":602192,"AUS":392279260,"AUT":61488424,"AZE":38062656,"BDI":798451,"BEL":89605360,"BEN":8432160,"BES":110461,"BFA":5962168,"BGD":102103340,"BGR":46147496,"BHR":37795670,"BHS":2120000,"BIH":19735710,"BLR":58801130,"BLZ":725231,"BMU":445408,"BOL":21493740,"BRA":483477300,"BRB":1232837,"BRN":10753688,"BTN":1055528,"BWA":7467293,"CAF":226226,"CAN":547943900,"CHE":35380164,"CHL":84377720,"CHN":11396777000,"CIV":11734159,"CMR":9572651,"COD":3601595,"COG":7431930,"COK":68043,"COL":99717870,"COM":412760,"CPV":568778,"CRI":7888694,"CUB":20921022,"CUW":1756690,"CXR":0,"CYP":7029358,"CZE":97969300,"DEU":665604700,"DJI":453036,"DMA":153220,"DNK":29059308,"DOM":23637946,"DZA":176345140,"ECU":41613410,"EGY":258951660,"ERI":696826,"ESP":245613820,"EST":10311845,"ETH":19073260,"FIN":36163000,"FJI":1073925,"FRA":297533920,"FRO":748133,"FSM":151206,"GAB":5705554,"GBR":318654370,"GEO":11092909,"GHA":20806944,"GIN":4953613,"GMB":770472,"GNB":326745,"GNQ":5076202,"GRC":59662764,"GRD":340416,"GRL":591718,"GTM":19193244,"GUY":3537124,"HKG":30568888,"HND":11159723,"HRV":17526086,"HTI":2446681,"HUN":44353616,"IDN":728883260,"IND":2829644300,"IRL":38784012,"IRN":690635260,"IRQ":179080800,"ISL":3542503,"ISR":56118090,"ITA":338097280,"JAM":6487594,"JOR":22912578,"JPN":1053797800,"KAZ":271178270,"KEN":24851922,"KGZ":9449704,"KHM":19955042,"KIR":68043,"KNA":224486,"KOR":600999360,"KWT":109190000,"LAO":23193406,"LBN":23904522,"LBR":876934,"LBY":62961304,"LCA":470351,"LIE":149934,"LKA":17327094,"LSO":3134694,"LTU":12667216,"LUX":7524108,"LVA":6591454,"MAC":1051646,"MAR":68411810,"MDA":5422021,"MDG":4403593,"MDV":1701072,"MEX":511971970,"MHL":151206,"MKD":7588422,"MLI":7038757,"MLT":1655127,"MMR":34922210,"MNE":2292498,"MNG":37894484,"MOZ":8003215,"MRT":4534088,"MSR":21380,"MUS":4249021,"MWI":2094072.1,"MYS":291071360,"NAM":3952970,"NCL":5115215,"NER":3058157,"NGA":128759470,"NIC":5550354,"NIU":7560,"NLD":125358230,"NOR":40808000,"NPL":15499952,"NRU":52922,"NZL":32211814,"OMN":71986390,"OWID_KOS":8017524.5,"PAK":200199900,"PAN":11899901,"PER":60921110,"PHL":150395980,"PLW":219249,"PNG":7823140,"POL":323117300,"PRK":50871636,"PRT":41605030,"PRY":9018049,"PSE":3496896,"PYF":873217,"QAT":101340350,"ROU":73521290,"RUS":1652177300,"RWA":1547760,"SAU":662549400,"SDN":22013348,"SEN":11668435,"SGP":53252430,"SHN":17816,"SLB":298633,"SLE":1129488,"SLV":7714380,"SOM":646921,"SPM":60576,"SRB":43506644,"SSD":1833605,"STP":132255,"SUR":3586520,"SVK":34151680,"SVN":12714800,"SWE":38050544,"SWZ":1265046,"SXM":634261,"SYC":658828,"SYR":27635256,"TCA":349200,"TCD":2369204,"TGO":2575560,"THA":270746370,"TJK":10017384,"TKM":70958350,"TLS":668892,"TON":189008,"TTO":34331736,"TUN":35576780,"TUR":435684600,"TUV":11340,"TWN":277900930,"TZA":15569999,"UGA":6021782,"UKR":141253000,"URY":7893098,"USA":5057303600,"UZB":120610190,"VCT":238739,"VEN":76892000,"VGB":156784,"VNM":343606620,"VUT":207909,"WLF":26461,"WSM":249491,"YEM":11356347,"ZAF":404053980,"ZMB":8921889,"ZWE":8855981}}}');

},{}],"6fitd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
parcelHelpers.export(exports, "fetchGeoJSON", ()=>fetchGeoJSON) // export async function compressGeoJSON(geojsonData, outputFile) {
 //   try {
 //     const compressedData = Pako.deflate(JSON.stringify(geojsonData));
 //     const blob = new Blob([compressedData], { type: "application/gzip" });
 //     await new Promise((resolve, reject) => {
 //       //     const fileSaver = window.saveAs || window.webkitSaveAs || window.mozSaveAs;
 //       //     if (!fileSaver) {
 //       //       reject(new Error("Browser doesn't support file saving"));
 //       //     } else {
 //       //       fileSaver(blob, outputFile);
 //       //       resolve();
 //       //     }
 //       const url = URL.createObjectURL(blob);
 //       document.getElementById("graph").insertAdjacentHTML(
 //         "beforeend",
 //         `
 //             <a href=${url}> Downmload File </a>
 //         `
 //       );
 //     });
 //     console.log("GeoJSON compressed and saved as", outputFile);
 //   } catch (error) {
 //     console.error("Error compressing GeoJSON:", error);
 //   }
 // }
;
var _pako = require("pako");
var _pakoDefault = parcelHelpers.interopDefault(_pako);
const timer = function(time) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject(new Error("Taking too much time to Fetch Data"));
        }, time * 1000);
    });
};
const getJSON = async function(url) {
    try {
        const data = await Promise.race([
            fetch(url),
            timer(3)
        ]);
        const dataJSON = await data.json();
        if (dataJSON.status != 200) throw new Error("Error Recieving Data");
        return dataJSON;
    } catch (error) {
        throw error;
    }
};
async function fetchGeoJSON(url) {
    try {
        const fetchPromise = fetch(url, {
            headers: {
                Accept: "application/json"
            },
            responseType: "arraybuffer"
        });
        const response = await Promise.race([
            fetchPromise,
            timer(3)
        ]);
        if (!response.ok) throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
        const buffer = await response.arrayBuffer();
        const decompressedData = (0, _pakoDefault.default).inflate(buffer, {
            to: "string"
        }); // Assuming it's gzip
        return JSON.parse(decompressedData);
    } catch (error) {
        throw error;
    }
}

},{"pako":"afBDp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"afBDp":[function(require,module,exports) {
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */ // (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
/* eslint-disable space-unary-ops */ /* Public constants ==========================================================*/ /* ===========================================================================*/ //const Z_FILTERED          = 1;
//const Z_HUFFMAN_ONLY      = 2;
//const Z_RLE               = 3;
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Deflate", ()=>Deflate_1);
parcelHelpers.export(exports, "Inflate", ()=>Inflate_1);
parcelHelpers.export(exports, "constants", ()=>constants_1);
parcelHelpers.export(exports, "default", ()=>pako);
parcelHelpers.export(exports, "deflate", ()=>deflate_1);
parcelHelpers.export(exports, "deflateRaw", ()=>deflateRaw_1);
parcelHelpers.export(exports, "gzip", ()=>gzip_1);
parcelHelpers.export(exports, "inflate", ()=>inflate_1);
parcelHelpers.export(exports, "inflateRaw", ()=>inflateRaw_1);
parcelHelpers.export(exports, "ungzip", ()=>ungzip_1);
const Z_FIXED$1 = 4;
//const Z_DEFAULT_STRATEGY  = 0;
/* Possible values of the data_type field (though see inflate()) */ const Z_BINARY = 0;
const Z_TEXT = 1;
//const Z_ASCII             = 1; // = Z_TEXT
const Z_UNKNOWN$1 = 2;
/*============================================================================*/ function zero$1(buf) {
    let len = buf.length;
    while(--len >= 0)buf[len] = 0;
}
// From zutil.h
const STORED_BLOCK = 0;
const STATIC_TREES = 1;
const DYN_TREES = 2;
/* The three kinds of block type */ const MIN_MATCH$1 = 3;
const MAX_MATCH$1 = 258;
/* The minimum and maximum match lengths */ // From deflate.h
/* ===========================================================================
 * Internal compression state.
 */ const LENGTH_CODES$1 = 29;
/* number of length codes, not counting the special END_BLOCK code */ const LITERALS$1 = 256;
/* number of literal bytes 0..255 */ const L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1;
/* number of Literal or Length codes, including the END_BLOCK code */ const D_CODES$1 = 30;
/* number of distance codes */ const BL_CODES$1 = 19;
/* number of codes used to transfer the bit lengths */ const HEAP_SIZE$1 = 2 * L_CODES$1 + 1;
/* maximum heap size */ const MAX_BITS$1 = 15;
/* All codes must not exceed MAX_BITS bits */ const Buf_size = 16;
/* size of bit buffer in bi_buf */ /* ===========================================================================
 * Constants
 */ const MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */ const END_BLOCK = 256;
/* end of block literal code */ const REP_3_6 = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */ const REPZ_3_10 = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */ const REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */ /* eslint-disable comma-spacing,array-bracket-spacing */ const extra_lbits = /* extra bits for each length code */ new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0
]);
const extra_dbits = /* extra bits for each distance code */ new Uint8Array([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13
]);
const extra_blbits = /* extra bits for each bit length code */ new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    3,
    7
]);
const bl_order = new Uint8Array([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
]);
/* eslint-enable comma-spacing,array-bracket-spacing */ /* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */ /* ===========================================================================
 * Local data. These are initialized only once.
 */ // We pre-fill arrays with 0 to avoid uninitialized gaps
const DIST_CODE_LEN = 512; /* see definition of array dist_code below */ 
// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
const static_ltree = new Array((L_CODES$1 + 2) * 2);
zero$1(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */ const static_dtree = new Array(D_CODES$1 * 2);
zero$1(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */ const _dist_code = new Array(DIST_CODE_LEN);
zero$1(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */ const _length_code = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
zero$1(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */ const base_length = new Array(LENGTH_CODES$1);
zero$1(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */ const base_dist = new Array(D_CODES$1);
zero$1(base_dist);
/* First normalized distance for each code (0 = distance of 1) */ function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
    this.static_tree = static_tree; /* static tree or NULL */ 
    this.extra_bits = extra_bits; /* extra bits for each code or NULL */ 
    this.extra_base = extra_base; /* base index for extra_bits */ 
    this.elems = elems; /* max number of elements in the tree */ 
    this.max_length = max_length; /* max bit length for the codes */ 
    // show if `static_tree` has data or dummy - needed for monomorphic objects
    this.has_stree = static_tree && static_tree.length;
}
let static_l_desc;
let static_d_desc;
let static_bl_desc;
function TreeDesc(dyn_tree, stat_desc) {
    this.dyn_tree = dyn_tree; /* the dynamic tree */ 
    this.max_code = 0; /* largest code with non zero frequency */ 
    this.stat_desc = stat_desc; /* the corresponding static tree */ 
}
const d_code = (dist)=>{
    return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
};
/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */ const put_short = (s, w)=>{
    //    put_byte(s, (uch)((w) & 0xff));
    //    put_byte(s, (uch)((ush)(w) >> 8));
    s.pending_buf[s.pending++] = w & 0xff;
    s.pending_buf[s.pending++] = w >>> 8 & 0xff;
};
/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */ const send_bits = (s, value, length)=>{
    if (s.bi_valid > Buf_size - length) {
        s.bi_buf |= value << s.bi_valid & 0xffff;
        put_short(s, s.bi_buf);
        s.bi_buf = value >> Buf_size - s.bi_valid;
        s.bi_valid += length - Buf_size;
    } else {
        s.bi_buf |= value << s.bi_valid & 0xffff;
        s.bi_valid += length;
    }
};
const send_code = (s, c, tree)=>{
    send_bits(s, tree[c * 2], tree[c * 2 + 1]);
};
/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */ const bi_reverse = (code, len)=>{
    let res = 0;
    do {
        res |= code & 1;
        code >>>= 1;
        res <<= 1;
    }while (--len > 0);
    return res >>> 1;
};
/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */ const bi_flush = (s)=>{
    if (s.bi_valid === 16) {
        put_short(s, s.bi_buf);
        s.bi_buf = 0;
        s.bi_valid = 0;
    } else if (s.bi_valid >= 8) {
        s.pending_buf[s.pending++] = s.bi_buf & 0xff;
        s.bi_buf >>= 8;
        s.bi_valid -= 8;
    }
};
/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */ const gen_bitlen = (s, desc)=>{
    //    deflate_state *s;
    //    tree_desc *desc;    /* the tree descriptor */
    const tree = desc.dyn_tree;
    const max_code = desc.max_code;
    const stree = desc.stat_desc.static_tree;
    const has_stree = desc.stat_desc.has_stree;
    const extra = desc.stat_desc.extra_bits;
    const base = desc.stat_desc.extra_base;
    const max_length = desc.stat_desc.max_length;
    let h; /* heap index */ 
    let n, m; /* iterate over the tree elements */ 
    let bits; /* bit length */ 
    let xbits; /* extra bits */ 
    let f; /* frequency */ 
    let overflow = 0; /* number of elements with bit length too large */ 
    for(bits = 0; bits <= MAX_BITS$1; bits++)s.bl_count[bits] = 0;
    /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */ tree[s.heap[s.heap_max] * 2 + 1] = 0; /* root of the heap */ 
    for(h = s.heap_max + 1; h < HEAP_SIZE$1; h++){
        n = s.heap[h];
        bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
        if (bits > max_length) {
            bits = max_length;
            overflow++;
        }
        tree[n * 2 + 1] = bits;
        /* We overwrite tree[n].Dad which is no longer needed */ if (n > max_code) continue;
         /* not a leaf node */ 
        s.bl_count[bits]++;
        xbits = 0;
        if (n >= base) xbits = extra[n - base];
        f = tree[n * 2] /*.Freq*/ ;
        s.opt_len += f * (bits + xbits);
        if (has_stree) s.static_len += f * (stree[n * 2 + 1] + xbits);
    }
    if (overflow === 0) return;
    // Tracev((stderr,"\nbit length overflow\n"));
    /* This happens for example on obj2 and pic of the Calgary corpus */ /* Find the first bit length which could increase: */ do {
        bits = max_length - 1;
        while(s.bl_count[bits] === 0)bits--;
        s.bl_count[bits]--; /* move one leaf down the tree */ 
        s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */ 
        s.bl_count[max_length]--;
        /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */ overflow -= 2;
    }while (overflow > 0);
    /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */ for(bits = max_length; bits !== 0; bits--){
        n = s.bl_count[bits];
        while(n !== 0){
            m = s.heap[--h];
            if (m > max_code) continue;
            if (tree[m * 2 + 1] !== bits) {
                // Tracev((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
                s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2] /*.Freq*/ ;
                tree[m * 2 + 1] = bits;
            }
            n--;
        }
    }
};
/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */ const gen_codes = (tree, max_code, bl_count)=>{
    //    ct_data *tree;             /* the tree to decorate */
    //    int max_code;              /* largest code with non zero frequency */
    //    ushf *bl_count;            /* number of codes at each bit length */
    const next_code = new Array(MAX_BITS$1 + 1); /* next code value for each bit length */ 
    let code = 0; /* running code value */ 
    let bits; /* bit index */ 
    let n; /* code index */ 
    /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */ for(bits = 1; bits <= MAX_BITS$1; bits++){
        code = code + bl_count[bits - 1] << 1;
        next_code[bits] = code;
    }
    /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */ //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
    //        "inconsistent bit counts");
    //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));
    for(n = 0; n <= max_code; n++){
        let len = tree[n * 2 + 1] /*.Len*/ ;
        if (len === 0) continue;
        /* Now reverse the bits */ tree[n * 2] = bi_reverse(next_code[len]++, len);
    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
    }
};
/* ===========================================================================
 * Initialize the various 'constant' tables.
 */ const tr_static_init = ()=>{
    let n; /* iterates over tree elements */ 
    let bits; /* bit counter */ 
    let length; /* length value */ 
    let code; /* code value */ 
    let dist; /* distance index */ 
    const bl_count = new Array(MAX_BITS$1 + 1);
    /* number of codes at each bit length for an optimal tree */ // do check in _tr_init()
    //if (static_init_done) return;
    /* For some embedded targets, global variables are not initialized: */ /*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/ /* Initialize the mapping length (0..255) -> length code (0..28) */ length = 0;
    for(code = 0; code < LENGTH_CODES$1 - 1; code++){
        base_length[code] = length;
        for(n = 0; n < 1 << extra_lbits[code]; n++)_length_code[length++] = code;
    }
    //Assert (length == 256, "tr_static_init: length != 256");
    /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */ _length_code[length - 1] = code;
    /* Initialize the mapping dist (0..32K) -> dist code (0..29) */ dist = 0;
    for(code = 0; code < 16; code++){
        base_dist[code] = dist;
        for(n = 0; n < 1 << extra_dbits[code]; n++)_dist_code[dist++] = code;
    }
    //Assert (dist == 256, "tr_static_init: dist != 256");
    dist >>= 7; /* from now on, all distances are divided by 128 */ 
    for(; code < D_CODES$1; code++){
        base_dist[code] = dist << 7;
        for(n = 0; n < 1 << extra_dbits[code] - 7; n++)_dist_code[256 + dist++] = code;
    }
    //Assert (dist == 256, "tr_static_init: 256+dist != 512");
    /* Construct the codes of the static literal tree */ for(bits = 0; bits <= MAX_BITS$1; bits++)bl_count[bits] = 0;
    n = 0;
    while(n <= 143){
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
    }
    while(n <= 255){
        static_ltree[n * 2 + 1] = 9;
        n++;
        bl_count[9]++;
    }
    while(n <= 279){
        static_ltree[n * 2 + 1] = 7;
        n++;
        bl_count[7]++;
    }
    while(n <= 287){
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
    }
    /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */ gen_codes(static_ltree, L_CODES$1 + 1, bl_count);
    /* The static distance tree is trivial: */ for(n = 0; n < D_CODES$1; n++){
        static_dtree[n * 2 + 1] = 5;
        static_dtree[n * 2] = bi_reverse(n, 5);
    }
    // Now data ready and we can init static trees
    static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1);
    static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES$1, MAX_BITS$1);
    static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES$1, MAX_BL_BITS);
//static_init_done = true;
};
/* ===========================================================================
 * Initialize a new block.
 */ const init_block = (s)=>{
    let n; /* iterates over tree elements */ 
    /* Initialize the trees. */ for(n = 0; n < L_CODES$1; n++)s.dyn_ltree[n * 2] = 0;
    for(n = 0; n < D_CODES$1; n++)s.dyn_dtree[n * 2] = 0;
    for(n = 0; n < BL_CODES$1; n++)s.bl_tree[n * 2] = 0;
    s.dyn_ltree[END_BLOCK * 2] = 1;
    s.opt_len = s.static_len = 0;
    s.sym_next = s.matches = 0;
};
/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */ const bi_windup = (s)=>{
    if (s.bi_valid > 8) put_short(s, s.bi_buf);
    else if (s.bi_valid > 0) //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
    s.bi_buf = 0;
    s.bi_valid = 0;
};
/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */ const smaller = (tree, n, m, depth)=>{
    const _n2 = n * 2;
    const _m2 = m * 2;
    return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
};
/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */ const pqdownheap = (s, tree, k)=>{
    //    deflate_state *s;
    //    ct_data *tree;  /* the tree to restore */
    //    int k;               /* node to move down */
    const v = s.heap[k];
    let j = k << 1; /* left son of k */ 
    while(j <= s.heap_len){
        /* Set j to the smallest of the two sons: */ if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) j++;
        /* Exit if v is smaller than both sons */ if (smaller(tree, v, s.heap[j], s.depth)) break;
        /* Exchange v with the smallest son */ s.heap[k] = s.heap[j];
        k = j;
        /* And continue down the tree, setting j to the left son of k */ j <<= 1;
    }
    s.heap[k] = v;
};
// inlined manually
// const SMALLEST = 1;
/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */ const compress_block = (s, ltree, dtree)=>{
    //    deflate_state *s;
    //    const ct_data *ltree; /* literal tree */
    //    const ct_data *dtree; /* distance tree */
    let dist; /* distance of matched string */ 
    let lc; /* match length or unmatched char (if dist == 0) */ 
    let sx = 0; /* running index in sym_buf */ 
    let code; /* the code to send */ 
    let extra; /* number of extra bits to send */ 
    if (s.sym_next !== 0) do {
        dist = s.pending_buf[s.sym_buf + sx++] & 0xff;
        dist += (s.pending_buf[s.sym_buf + sx++] & 0xff) << 8;
        lc = s.pending_buf[s.sym_buf + sx++];
        if (dist === 0) send_code(s, lc, ltree); /* send a literal byte */ 
        else {
            /* Here, lc is the match length - MIN_MATCH */ code = _length_code[lc];
            send_code(s, code + LITERALS$1 + 1, ltree); /* send the length code */ 
            extra = extra_lbits[code];
            if (extra !== 0) {
                lc -= base_length[code];
                send_bits(s, lc, extra); /* send the extra length bits */ 
            }
            dist--; /* dist is now the match distance - 1 */ 
            code = d_code(dist);
            //Assert (code < D_CODES, "bad d_code");
            send_code(s, code, dtree); /* send the distance code */ 
            extra = extra_dbits[code];
            if (extra !== 0) {
                dist -= base_dist[code];
                send_bits(s, dist, extra); /* send the extra distance bits */ 
            }
        } /* literal or match pair ? */ 
    /* Check that the overlay between pending_buf and sym_buf is ok: */ //Assert(s->pending < s->lit_bufsize + sx, "pendingBuf overflow");
    }while (sx < s.sym_next);
    send_code(s, END_BLOCK, ltree);
};
/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */ const build_tree = (s, desc)=>{
    //    deflate_state *s;
    //    tree_desc *desc; /* the tree descriptor */
    const tree = desc.dyn_tree;
    const stree = desc.stat_desc.static_tree;
    const has_stree = desc.stat_desc.has_stree;
    const elems = desc.stat_desc.elems;
    let n, m; /* iterate over heap elements */ 
    let max_code = -1; /* largest code with non zero frequency */ 
    let node; /* new node being created */ 
    /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */ s.heap_len = 0;
    s.heap_max = HEAP_SIZE$1;
    for(n = 0; n < elems; n++)if (tree[n * 2] !== 0) {
        s.heap[++s.heap_len] = max_code = n;
        s.depth[n] = 0;
    } else tree[n * 2 + 1] = 0;
    /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */ while(s.heap_len < 2){
        node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
        tree[node * 2] = 1;
        s.depth[node] = 0;
        s.opt_len--;
        if (has_stree) s.static_len -= stree[node * 2 + 1] /*.Len*/ ;
    /* node is 0 or 1 so it does not have extra bits */ }
    desc.max_code = max_code;
    /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */ for(n = s.heap_len >> 1 /*int /2*/ ; n >= 1; n--)pqdownheap(s, tree, n);
    /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */ node = elems; /* next internal node of the tree */ 
    do {
        //pqremove(s, tree, n);  /* n = node of least frequency */
        /*** pqremove ***/ n = s.heap[1 /*SMALLEST*/ ];
        s.heap[1 /*SMALLEST*/ ] = s.heap[s.heap_len--];
        pqdownheap(s, tree, 1 /*SMALLEST*/ );
        /***/ m = s.heap[1 /*SMALLEST*/ ]; /* m = node of next least frequency */ 
        s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */ 
        s.heap[--s.heap_max] = m;
        /* Create a new node father of n and m */ tree[node * 2] = tree[n * 2] + tree[m * 2] /*.Freq*/ ;
        s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
        tree[n * 2 + 1] = tree[m * 2 + 1] = node;
        /* and insert the new node in the heap */ s.heap[1 /*SMALLEST*/ ] = node++;
        pqdownheap(s, tree, 1 /*SMALLEST*/ );
    }while (s.heap_len >= 2);
    s.heap[--s.heap_max] = s.heap[1 /*SMALLEST*/ ];
    /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */ gen_bitlen(s, desc);
    /* The field len is now set, we can generate the bit codes */ gen_codes(tree, max_code, s.bl_count);
};
/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */ const scan_tree = (s, tree, max_code)=>{
    //    deflate_state *s;
    //    ct_data *tree;   /* the tree to be scanned */
    //    int max_code;    /* and its largest code of non zero frequency */
    let n; /* iterates over all tree elements */ 
    let prevlen = -1; /* last emitted length */ 
    let curlen; /* length of current code */ 
    let nextlen = tree[1] /*.Len*/ ; /* length of next code */ 
    let count = 0; /* repeat count of the current code */ 
    let max_count = 7; /* max repeat count */ 
    let min_count = 4; /* min repeat count */ 
    if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
    }
    tree[(max_code + 1) * 2 + 1] = 0xffff; /* guard */ 
    for(n = 0; n <= max_code; n++){
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1] /*.Len*/ ;
        if (++count < max_count && curlen === nextlen) continue;
        else if (count < min_count) s.bl_tree[curlen * 2] += count;
        else if (curlen !== 0) {
            if (curlen !== prevlen) s.bl_tree[curlen * 2]++;
            s.bl_tree[REP_3_6 * 2]++;
        } else if (count <= 10) s.bl_tree[REPZ_3_10 * 2]++;
        else s.bl_tree[REPZ_11_138 * 2]++;
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
        } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
        } else {
            max_count = 7;
            min_count = 4;
        }
    }
};
/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */ const send_tree = (s, tree, max_code)=>{
    //    deflate_state *s;
    //    ct_data *tree; /* the tree to be scanned */
    //    int max_code;       /* and its largest code of non zero frequency */
    let n; /* iterates over all tree elements */ 
    let prevlen = -1; /* last emitted length */ 
    let curlen; /* length of current code */ 
    let nextlen = tree[1] /*.Len*/ ; /* length of next code */ 
    let count = 0; /* repeat count of the current code */ 
    let max_count = 7; /* max repeat count */ 
    let min_count = 4; /* min repeat count */ 
    /* tree[max_code+1].Len = -1; */ /* guard already set */ if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
    }
    for(n = 0; n <= max_code; n++){
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1] /*.Len*/ ;
        if (++count < max_count && curlen === nextlen) continue;
        else if (count < min_count) do send_code(s, curlen, s.bl_tree);
        while (--count !== 0);
        else if (curlen !== 0) {
            if (curlen !== prevlen) {
                send_code(s, curlen, s.bl_tree);
                count--;
            }
            //Assert(count >= 3 && count <= 6, " 3_6?");
            send_code(s, REP_3_6, s.bl_tree);
            send_bits(s, count - 3, 2);
        } else if (count <= 10) {
            send_code(s, REPZ_3_10, s.bl_tree);
            send_bits(s, count - 3, 3);
        } else {
            send_code(s, REPZ_11_138, s.bl_tree);
            send_bits(s, count - 11, 7);
        }
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
        } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
        } else {
            max_count = 7;
            min_count = 4;
        }
    }
};
/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */ const build_bl_tree = (s)=>{
    let max_blindex; /* index of last bit length code of non zero freq */ 
    /* Determine the bit length frequencies for literal and distance trees */ scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
    scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
    /* Build the bit length tree: */ build_tree(s, s.bl_desc);
    /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */ /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */ for(max_blindex = BL_CODES$1 - 1; max_blindex >= 3; max_blindex--){
        if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) break;
    }
    /* Update opt_len to include the bit length tree and counts */ s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
    //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
    //        s->opt_len, s->static_len));
    return max_blindex;
};
/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */ const send_all_trees = (s, lcodes, dcodes, blcodes)=>{
    //    deflate_state *s;
    //    int lcodes, dcodes, blcodes; /* number of codes for each tree */
    let rank; /* index in bl_order */ 
    //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
    //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
    //        "too many codes");
    //Tracev((stderr, "\nbl counts: "));
    send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */ 
    send_bits(s, dcodes - 1, 5);
    send_bits(s, blcodes - 4, 4); /* not -3 as stated in appnote.txt */ 
    for(rank = 0; rank < blcodes; rank++)//Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
    //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));
    send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */ 
    //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));
    send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */ 
//Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
};
/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "block list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "allow list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */ const detect_data_type = (s)=>{
    /* block_mask is the bit mask of block-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */ let block_mask = 0xf3ffc07f;
    let n;
    /* Check for non-textual ("block-listed") bytes. */ for(n = 0; n <= 31; n++, block_mask >>>= 1){
        if (block_mask & 1 && s.dyn_ltree[n * 2] !== 0) return Z_BINARY;
    }
    /* Check for textual ("allow-listed") bytes. */ if (s.dyn_ltree[18] !== 0 || s.dyn_ltree[20] !== 0 || s.dyn_ltree[26] !== 0) return Z_TEXT;
    for(n = 32; n < LITERALS$1; n++){
        if (s.dyn_ltree[n * 2] !== 0) return Z_TEXT;
    }
    /* There are no "block-listed" or "allow-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */ return Z_BINARY;
};
let static_init_done = false;
/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */ const _tr_init$1 = (s)=>{
    if (!static_init_done) {
        tr_static_init();
        static_init_done = true;
    }
    s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
    s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
    s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
    s.bi_buf = 0;
    s.bi_valid = 0;
    /* Initialize the first block of the first file: */ init_block(s);
};
/* ===========================================================================
 * Send a stored block
 */ const _tr_stored_block$1 = (s, buf, stored_len, last)=>{
    //DeflateState *s;
    //charf *buf;       /* input block */
    //ulg stored_len;   /* length of input block */
    //int last;         /* one if this is the last block for a file */
    send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3); /* send block type */ 
    bi_windup(s); /* align on byte boundary */ 
    put_short(s, stored_len);
    put_short(s, ~stored_len);
    if (stored_len) s.pending_buf.set(s.window.subarray(buf, buf + stored_len), s.pending);
    s.pending += stored_len;
};
/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */ const _tr_align$1 = (s)=>{
    send_bits(s, STATIC_TREES << 1, 3);
    send_code(s, END_BLOCK, static_ltree);
    bi_flush(s);
};
/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and write out the encoded block.
 */ const _tr_flush_block$1 = (s, buf, stored_len, last)=>{
    //DeflateState *s;
    //charf *buf;       /* input block, or NULL if too old */
    //ulg stored_len;   /* length of input block */
    //int last;         /* one if this is the last block for a file */
    let opt_lenb, static_lenb; /* opt_len and static_len in bytes */ 
    let max_blindex = 0; /* index of last bit length code of non zero freq */ 
    /* Build the Huffman trees unless a stored block is forced */ if (s.level > 0) {
        /* Check if the file is binary or text */ if (s.strm.data_type === Z_UNKNOWN$1) s.strm.data_type = detect_data_type(s);
        /* Construct the literal and distance trees */ build_tree(s, s.l_desc);
        // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
        //        s->static_len));
        build_tree(s, s.d_desc);
        // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
        //        s->static_len));
        /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */ /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */ max_blindex = build_bl_tree(s);
        /* Determine the best encoding. Compute the block lengths in bytes. */ opt_lenb = s.opt_len + 3 + 7 >>> 3;
        static_lenb = s.static_len + 3 + 7 >>> 3;
        // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
        //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
        //        s->sym_next / 3));
        if (static_lenb <= opt_lenb) opt_lenb = static_lenb;
    } else // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */ 
    if (stored_len + 4 <= opt_lenb && buf !== -1) /* 4: two words for the lengths */ /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */ _tr_stored_block$1(s, buf, stored_len, last);
    else if (s.strategy === Z_FIXED$1 || static_lenb === opt_lenb) {
        send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
        compress_block(s, static_ltree, static_dtree);
    } else {
        send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
        send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
        compress_block(s, s.dyn_ltree, s.dyn_dtree);
    }
    // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
    /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */ init_block(s);
    if (last) bi_windup(s);
// Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
//       s->compressed_len-7*last));
};
/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */ const _tr_tally$1 = (s, dist, lc)=>{
    //    deflate_state *s;
    //    unsigned dist;  /* distance of matched string */
    //    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
    s.pending_buf[s.sym_buf + s.sym_next++] = dist;
    s.pending_buf[s.sym_buf + s.sym_next++] = dist >> 8;
    s.pending_buf[s.sym_buf + s.sym_next++] = lc;
    if (dist === 0) /* lc is the unmatched char */ s.dyn_ltree[lc * 2]++;
    else {
        s.matches++;
        /* Here, lc is the match length - MIN_MATCH */ dist--; /* dist = match distance - 1 */ 
        //Assert((ush)dist < (ush)MAX_DIST(s) &&
        //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
        //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");
        s.dyn_ltree[(_length_code[lc] + LITERALS$1 + 1) * 2]++;
        s.dyn_dtree[d_code(dist) * 2]++;
    }
    return s.sym_next === s.sym_end;
};
var _tr_init_1 = _tr_init$1;
var _tr_stored_block_1 = _tr_stored_block$1;
var _tr_flush_block_1 = _tr_flush_block$1;
var _tr_tally_1 = _tr_tally$1;
var _tr_align_1 = _tr_align$1;
var trees = {
    _tr_init: _tr_init_1,
    _tr_stored_block: _tr_stored_block_1,
    _tr_flush_block: _tr_flush_block_1,
    _tr_tally: _tr_tally_1,
    _tr_align: _tr_align_1
};
// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const adler32 = (adler, buf, len, pos)=>{
    let s1 = adler & 0xffff | 0, s2 = adler >>> 16 & 0xffff | 0, n = 0;
    while(len !== 0){
        // Set limit ~ twice less than 5552, to keep
        // s2 in 31-bits, because we force signed ints.
        // in other case %= will fail.
        n = len > 2000 ? 2000 : len;
        len -= n;
        do {
            s1 = s1 + buf[pos++] | 0;
            s2 = s2 + s1 | 0;
        }while (--n);
        s1 %= 65521;
        s2 %= 65521;
    }
    return s1 | s2 << 16 | 0;
};
var adler32_1 = adler32;
// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
// Use ordinary array, since untyped makes no boost here
const makeTable = ()=>{
    let c, table = [];
    for(var n = 0; n < 256; n++){
        c = n;
        for(var k = 0; k < 8; k++)c = c & 1 ? 0xEDB88320 ^ c >>> 1 : c >>> 1;
        table[n] = c;
    }
    return table;
};
// Create table on load. Just 255 signed longs. Not a problem.
const crcTable = new Uint32Array(makeTable());
const crc32 = (crc, buf, len, pos)=>{
    const t = crcTable;
    const end = pos + len;
    crc ^= -1;
    for(let i = pos; i < end; i++)crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 0xFF];
    return crc ^ -1; // >>> 0;
};
var crc32_1 = crc32;
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
var messages = {
    2: "need dictionary",
    /* Z_NEED_DICT       2  */ 1: "stream end",
    /* Z_STREAM_END      1  */ 0: "",
    /* Z_OK              0  */ "-1": "file error",
    /* Z_ERRNO         (-1) */ "-2": "stream error",
    /* Z_STREAM_ERROR  (-2) */ "-3": "data error",
    /* Z_DATA_ERROR    (-3) */ "-4": "insufficient memory",
    /* Z_MEM_ERROR     (-4) */ "-5": "buffer error",
    /* Z_BUF_ERROR     (-5) */ "-6": "incompatible version" /* Z_VERSION_ERROR (-6) */ 
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
var constants$2 = {
    /* Allowed flush values; see deflate() and inflate() below for details */ Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */ Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_MEM_ERROR: -4,
    Z_BUF_ERROR: -5,
    //Z_VERSION_ERROR: -6,
    /* compression levels */ Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    /* Possible values of the data_type field (though see inflate()) */ Z_BINARY: 0,
    Z_TEXT: 1,
    //Z_ASCII:                1, // = Z_TEXT (deprecated)
    Z_UNKNOWN: 2,
    /* The deflate compression method */ Z_DEFLATED: 8
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = trees;
/* Public constants ==========================================================*/ /* ===========================================================================*/ const { Z_NO_FLUSH: Z_NO_FLUSH$2, Z_PARTIAL_FLUSH, Z_FULL_FLUSH: Z_FULL_FLUSH$1, Z_FINISH: Z_FINISH$3, Z_BLOCK: Z_BLOCK$1, Z_OK: Z_OK$3, Z_STREAM_END: Z_STREAM_END$3, Z_STREAM_ERROR: Z_STREAM_ERROR$2, Z_DATA_ERROR: Z_DATA_ERROR$2, Z_BUF_ERROR: Z_BUF_ERROR$1, Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1, Z_FILTERED, Z_HUFFMAN_ONLY, Z_RLE, Z_FIXED, Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1, Z_UNKNOWN, Z_DEFLATED: Z_DEFLATED$2 } = constants$2;
/*============================================================================*/ const MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */ const MAX_WBITS$1 = 15;
/* 32K LZ77 window */ const DEF_MEM_LEVEL = 8;
const LENGTH_CODES = 29;
/* number of length codes, not counting the special END_BLOCK code */ const LITERALS = 256;
/* number of literal bytes 0..255 */ const L_CODES = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */ const D_CODES = 30;
/* number of distance codes */ const BL_CODES = 19;
/* number of codes used to transfer the bit lengths */ const HEAP_SIZE = 2 * L_CODES + 1;
/* maximum heap size */ const MAX_BITS = 15;
/* All codes must not exceed MAX_BITS bits */ const MIN_MATCH = 3;
const MAX_MATCH = 258;
const MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
const PRESET_DICT = 0x20;
const INIT_STATE = 42; /* zlib header -> BUSY_STATE */ 
//#ifdef GZIP
const GZIP_STATE = 57; /* gzip header -> BUSY_STATE | EXTRA_STATE */ 
//#endif
const EXTRA_STATE = 69; /* gzip extra block -> NAME_STATE */ 
const NAME_STATE = 73; /* gzip file name -> COMMENT_STATE */ 
const COMMENT_STATE = 91; /* gzip comment -> HCRC_STATE */ 
const HCRC_STATE = 103; /* gzip header CRC -> BUSY_STATE */ 
const BUSY_STATE = 113; /* deflate -> FINISH_STATE */ 
const FINISH_STATE = 666; /* stream complete */ 
const BS_NEED_MORE = 1; /* block not completed, need more input or more output */ 
const BS_BLOCK_DONE = 2; /* block flush performed */ 
const BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */ 
const BS_FINISH_DONE = 4; /* finish done, accept no more input or output */ 
const OS_CODE = 0x03; // Unix :) . Don't detect, use this default.
const err = (strm, errorCode)=>{
    strm.msg = messages[errorCode];
    return errorCode;
};
const rank = (f)=>{
    return f * 2 - (f > 4 ? 9 : 0);
};
const zero = (buf)=>{
    let len = buf.length;
    while(--len >= 0)buf[len] = 0;
};
/* ===========================================================================
 * Slide the hash table when sliding the window down (could be avoided with 32
 * bit values at the expense of memory usage). We slide even when level == 0 to
 * keep the hash table consistent if we switch back to level > 0 later.
 */ const slide_hash = (s)=>{
    let n, m;
    let p;
    let wsize = s.w_size;
    n = s.hash_size;
    p = n;
    do {
        m = s.head[--p];
        s.head[p] = m >= wsize ? m - wsize : 0;
    }while (--n);
    n = wsize;
    //#ifndef FASTEST
    p = n;
    do {
        m = s.prev[--p];
        s.prev[p] = m >= wsize ? m - wsize : 0;
    /* If n is not on any hash chain, prev[n] is garbage but
     * its value will never be used.
     */ }while (--n);
//#endif
};
/* eslint-disable new-cap */ let HASH_ZLIB = (s, prev, data)=>(prev << s.hash_shift ^ data) & s.hash_mask;
// This hash causes less collisions, https://github.com/nodeca/pako/issues/135
// But breaks binary compatibility
//let HASH_FAST = (s, prev, data) => ((prev << 8) + (prev >> 8) + (data << 4)) & s.hash_mask;
let HASH = HASH_ZLIB;
/* =========================================================================
 * Flush as much pending output as possible. All deflate() output, except for
 * some deflate_stored() output, goes through this function so some
 * applications may wish to modify it to avoid allocating a large
 * strm->next_out buffer and copying into it. (See also read_buf()).
 */ const flush_pending = (strm)=>{
    const s = strm.state;
    //_tr_flush_bits(s);
    let len = s.pending;
    if (len > strm.avail_out) len = strm.avail_out;
    if (len === 0) return;
    strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
    strm.next_out += len;
    s.pending_out += len;
    strm.total_out += len;
    strm.avail_out -= len;
    s.pending -= len;
    if (s.pending === 0) s.pending_out = 0;
};
const flush_block_only = (s, last)=>{
    _tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
    s.block_start = s.strstart;
    flush_pending(s.strm);
};
const put_byte = (s, b)=>{
    s.pending_buf[s.pending++] = b;
};
/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */ const putShortMSB = (s, b)=>{
    //  put_byte(s, (Byte)(b >> 8));
    //  put_byte(s, (Byte)(b & 0xff));
    s.pending_buf[s.pending++] = b >>> 8 & 0xff;
    s.pending_buf[s.pending++] = b & 0xff;
};
/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */ const read_buf = (strm, buf, start, size)=>{
    let len = strm.avail_in;
    if (len > size) len = size;
    if (len === 0) return 0;
    strm.avail_in -= len;
    // zmemcpy(buf, strm->next_in, len);
    buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
    if (strm.state.wrap === 1) strm.adler = adler32_1(strm.adler, buf, len, start);
    else if (strm.state.wrap === 2) strm.adler = crc32_1(strm.adler, buf, len, start);
    strm.next_in += len;
    strm.total_in += len;
    return len;
};
/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */ const longest_match = (s, cur_match)=>{
    let chain_length = s.max_chain_length; /* max hash chain length */ 
    let scan = s.strstart; /* current string */ 
    let match; /* matched string */ 
    let len; /* length of current match */ 
    let best_len = s.prev_length; /* best match length so far */ 
    let nice_match = s.nice_match; /* stop if match long enough */ 
    const limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0 /*NIL*/ ;
    const _win = s.window; // shortcut
    const wmask = s.w_mask;
    const prev = s.prev;
    /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */ const strend = s.strstart + MAX_MATCH;
    let scan_end1 = _win[scan + best_len - 1];
    let scan_end = _win[scan + best_len];
    /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */ // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");
    /* Do not waste too much time if we already have a good match: */ if (s.prev_length >= s.good_match) chain_length >>= 2;
    /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */ if (nice_match > s.lookahead) nice_match = s.lookahead;
    // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");
    do {
        // Assert(cur_match < s->strstart, "no future");
        match = cur_match;
        /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */ if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) continue;
        /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */ scan += 2;
        match++;
        // Assert(*scan == *match, "match[2]?");
        /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */ do ;
        while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
        // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");
        len = MAX_MATCH - (strend - scan);
        scan = strend - MAX_MATCH;
        if (len > best_len) {
            s.match_start = cur_match;
            best_len = len;
            if (len >= nice_match) break;
            scan_end1 = _win[scan + best_len - 1];
            scan_end = _win[scan + best_len];
        }
    }while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
    if (best_len <= s.lookahead) return best_len;
    return s.lookahead;
};
/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */ const fill_window = (s)=>{
    const _w_size = s.w_size;
    let n, more, str;
    //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");
    do {
        more = s.window_size - s.lookahead - s.strstart;
        // JS ints have 32 bit, block below not needed
        /* Deal with !@#$% 64K limit: */ //if (sizeof(int) <= 2) {
        //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
        //        more = wsize;
        //
        //  } else if (more == (unsigned)(-1)) {
        //        /* Very unlikely, but possible on 16 bit machine if
        //         * strstart == 0 && lookahead == 1 (input done a byte at time)
        //         */
        //        more--;
        //    }
        //}
        /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */ if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
            s.window.set(s.window.subarray(_w_size, _w_size + _w_size - more), 0);
            s.match_start -= _w_size;
            s.strstart -= _w_size;
            /* we now have strstart >= MAX_DIST */ s.block_start -= _w_size;
            if (s.insert > s.strstart) s.insert = s.strstart;
            slide_hash(s);
            more += _w_size;
        }
        if (s.strm.avail_in === 0) break;
        /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */ //Assert(more >= 2, "more < 2");
        n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
        s.lookahead += n;
        /* Initialize the hash value now that we have some input: */ if (s.lookahead + s.insert >= MIN_MATCH) {
            str = s.strstart - s.insert;
            s.ins_h = s.window[str];
            /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */ s.ins_h = HASH(s, s.ins_h, s.window[str + 1]);
            //#if MIN_MATCH != 3
            //        Call update_hash() MIN_MATCH-3 more times
            //#endif
            while(s.insert){
                /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */ s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
                s.prev[str & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = str;
                str++;
                s.insert--;
                if (s.lookahead + s.insert < MIN_MATCH) break;
            }
        }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */ }while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
/* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */ //  if (s.high_water < s.window_size) {
//    const curr = s.strstart + s.lookahead;
//    let init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
};
/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 *
 * In case deflateParams() is used to later switch to a non-zero compression
 * level, s->matches (otherwise unused when storing) keeps track of the number
 * of hash table slides to perform. If s->matches is 1, then one hash table
 * slide will be done when switching. If s->matches is 2, the maximum value
 * allowed here, then the hash table will be cleared, since two or more slides
 * is the same as a clear.
 *
 * deflate_stored() is written to minimize the number of times an input byte is
 * copied. It is most efficient with large input and output buffers, which
 * maximizes the opportunites to have a single copy from next_in to next_out.
 */ const deflate_stored = (s, flush)=>{
    /* Smallest worthy block size when not flushing or finishing. By default
   * this is 32K. This can be as small as 507 bytes for memLevel == 1. For
   * large input and output buffers, the stored block size will be larger.
   */ let min_block = s.pending_buf_size - 5 > s.w_size ? s.w_size : s.pending_buf_size - 5;
    /* Copy as many min_block or larger stored blocks directly to next_out as
   * possible. If flushing, copy the remaining available input to next_out as
   * stored blocks, if there is enough space.
   */ let len, left, have, last = 0;
    let used = s.strm.avail_in;
    do {
        /* Set len to the maximum size block that we can copy directly with the
     * available input data and output space. Set left to how much of that
     * would be copied from what's left in the window.
     */ len = 65535 /* MAX_STORED */ ; /* maximum deflate stored block length */ 
        have = s.bi_valid + 42 >> 3; /* number of header bytes */ 
        if (s.strm.avail_out < have) break;
        /* maximum stored block length that will fit in avail_out: */ have = s.strm.avail_out - have;
        left = s.strstart - s.block_start; /* bytes left in window */ 
        if (len > left + s.strm.avail_in) len = left + s.strm.avail_in; /* limit len to the input */ 
        if (len > have) len = have; /* limit len to the output */ 
        /* If the stored block would be less than min_block in length, or if
     * unable to copy all of the available input when flushing, then try
     * copying to the window and the pending buffer instead. Also don't
     * write an empty block when flushing -- deflate() does that.
     */ if (len < min_block && (len === 0 && flush !== Z_FINISH$3 || flush === Z_NO_FLUSH$2 || len !== left + s.strm.avail_in)) break;
        /* Make a dummy stored block in pending to get the header bytes,
     * including any pending bits. This also updates the debugging counts.
     */ last = flush === Z_FINISH$3 && len === left + s.strm.avail_in ? 1 : 0;
        _tr_stored_block(s, 0, 0, last);
        /* Replace the lengths in the dummy stored block with len. */ s.pending_buf[s.pending - 4] = len;
        s.pending_buf[s.pending - 3] = len >> 8;
        s.pending_buf[s.pending - 2] = ~len;
        s.pending_buf[s.pending - 1] = ~len >> 8;
        /* Write the stored block header bytes. */ flush_pending(s.strm);
        //#ifdef ZLIB_DEBUG
        //    /* Update debugging counts for the data about to be copied. */
        //    s->compressed_len += len << 3;
        //    s->bits_sent += len << 3;
        //#endif
        /* Copy uncompressed bytes from the window to next_out. */ if (left) {
            if (left > len) left = len;
            //zmemcpy(s->strm->next_out, s->window + s->block_start, left);
            s.strm.output.set(s.window.subarray(s.block_start, s.block_start + left), s.strm.next_out);
            s.strm.next_out += left;
            s.strm.avail_out -= left;
            s.strm.total_out += left;
            s.block_start += left;
            len -= left;
        }
        /* Copy uncompressed bytes directly from next_in to next_out, updating
     * the check value.
     */ if (len) {
            read_buf(s.strm, s.strm.output, s.strm.next_out, len);
            s.strm.next_out += len;
            s.strm.avail_out -= len;
            s.strm.total_out += len;
        }
    }while (last === 0);
    /* Update the sliding window with the last s->w_size bytes of the copied
   * data, or append all of the copied data to the existing window if less
   * than s->w_size bytes were copied. Also update the number of bytes to
   * insert in the hash tables, in the event that deflateParams() switches to
   * a non-zero compression level.
   */ used -= s.strm.avail_in; /* number of input bytes directly copied */ 
    if (used) {
        /* If any input was used, then no unused input remains in the window,
     * therefore s->block_start == s->strstart.
     */ if (used >= s.w_size) {
            s.matches = 2; /* clear hash */ 
            //zmemcpy(s->window, s->strm->next_in - s->w_size, s->w_size);
            s.window.set(s.strm.input.subarray(s.strm.next_in - s.w_size, s.strm.next_in), 0);
            s.strstart = s.w_size;
            s.insert = s.strstart;
        } else {
            if (s.window_size - s.strstart <= used) {
                /* Slide the window down. */ s.strstart -= s.w_size;
                //zmemcpy(s->window, s->window + s->w_size, s->strstart);
                s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
                if (s.matches < 2) s.matches++; /* add a pending slide_hash() */ 
                if (s.insert > s.strstart) s.insert = s.strstart;
            }
            //zmemcpy(s->window + s->strstart, s->strm->next_in - used, used);
            s.window.set(s.strm.input.subarray(s.strm.next_in - used, s.strm.next_in), s.strstart);
            s.strstart += used;
            s.insert += used > s.w_size - s.insert ? s.w_size - s.insert : used;
        }
        s.block_start = s.strstart;
    }
    if (s.high_water < s.strstart) s.high_water = s.strstart;
    /* If the last block was written to next_out, then done. */ if (last) return BS_FINISH_DONE;
    /* If flushing and all input has been consumed, then done. */ if (flush !== Z_NO_FLUSH$2 && flush !== Z_FINISH$3 && s.strm.avail_in === 0 && s.strstart === s.block_start) return BS_BLOCK_DONE;
    /* Fill the window with any remaining input. */ have = s.window_size - s.strstart;
    if (s.strm.avail_in > have && s.block_start >= s.w_size) {
        /* Slide the window down. */ s.block_start -= s.w_size;
        s.strstart -= s.w_size;
        //zmemcpy(s->window, s->window + s->w_size, s->strstart);
        s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
        if (s.matches < 2) s.matches++; /* add a pending slide_hash() */ 
        have += s.w_size; /* more space now */ 
        if (s.insert > s.strstart) s.insert = s.strstart;
    }
    if (have > s.strm.avail_in) have = s.strm.avail_in;
    if (have) {
        read_buf(s.strm, s.window, s.strstart, have);
        s.strstart += have;
        s.insert += have > s.w_size - s.insert ? s.w_size - s.insert : have;
    }
    if (s.high_water < s.strstart) s.high_water = s.strstart;
    /* There was not enough avail_out to write a complete worthy or flushed
   * stored block to next_out. Write a stored block to pending instead, if we
   * have enough input for a worthy block, or if flushing and there is enough
   * room for the remaining input as a stored block in the pending buffer.
   */ have = s.bi_valid + 42 >> 3; /* number of header bytes */ 
    /* maximum stored block length that will fit in pending: */ have = s.pending_buf_size - have > 65535 /* MAX_STORED */  ? 65535 /* MAX_STORED */  : s.pending_buf_size - have;
    min_block = have > s.w_size ? s.w_size : have;
    left = s.strstart - s.block_start;
    if (left >= min_block || (left || flush === Z_FINISH$3) && flush !== Z_NO_FLUSH$2 && s.strm.avail_in === 0 && left <= have) {
        len = left > have ? have : left;
        last = flush === Z_FINISH$3 && s.strm.avail_in === 0 && len === left ? 1 : 0;
        _tr_stored_block(s, s.block_start, len, last);
        s.block_start += len;
        flush_pending(s.strm);
    }
    /* We've done all we can with the available input and output. */ return last ? BS_FINISH_STARTED : BS_NEED_MORE;
};
/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */ const deflate_fast = (s, flush)=>{
    let hash_head; /* head of the hash chain */ 
    let bflush; /* set if current block must be flushed */ 
    for(;;){
        /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */ if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);
            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
            if (s.lookahead === 0) break; /* flush the current block */ 
        }
        /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */ hash_head = 0 /*NIL*/ ;
        if (s.lookahead >= MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
        /***/ }
        /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */ if (hash_head !== 0 /*NIL*/  && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */ s.match_length = longest_match(s, hash_head);
        if (s.match_length >= MIN_MATCH) {
            // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only
            /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/ bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
            s.lookahead -= s.match_length;
            /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */ if (s.match_length <= s.max_lazy_match /*max_insert_length*/  && s.lookahead >= MIN_MATCH) {
                s.match_length--; /* string at strstart already in table */ 
                do {
                    s.strstart++;
                    /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
                    hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                    s.head[s.ins_h] = s.strstart;
                /***/ /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */ }while (--s.match_length !== 0);
                s.strstart++;
            } else {
                s.strstart += s.match_length;
                s.match_length = 0;
                s.ins_h = s.window[s.strstart];
                /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */ s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]);
            //#if MIN_MATCH != 3
            //                Call UPDATE_HASH() MIN_MATCH-3 more times
            //#endif
            /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */ }
        } else {
            /* No match, output a literal byte */ //Tracevv((stderr,"%c", s.window[s.strstart]));
            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/ bflush = _tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
        }
        if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        /***/ }
    }
    s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH$3) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.sym_next) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
};
/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */ const deflate_slow = (s, flush)=>{
    let hash_head; /* head of hash chain */ 
    let bflush; /* set if current block must be flushed */ 
    let max_insert;
    /* Process the input block. */ for(;;){
        /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */ if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);
            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
            if (s.lookahead === 0) break;
             /* flush the current block */ 
        }
        /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */ hash_head = 0 /*NIL*/ ;
        if (s.lookahead >= MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
        /***/ }
        /* Find the longest match, discarding those <= prev_length.
     */ s.prev_length = s.match_length;
        s.prev_match = s.match_start;
        s.match_length = MIN_MATCH - 1;
        if (hash_head !== 0 /*NIL*/  && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
            /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */ s.match_length = longest_match(s, hash_head);
            /* longest_match() sets match_start */ if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096 /*TOO_FAR*/ )) /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */ s.match_length = MIN_MATCH - 1;
        }
        /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */ if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
            max_insert = s.strstart + s.lookahead - MIN_MATCH;
            /* Do not insert strings in hash table beyond this. */ //check_match(s, s.strstart-1, s.prev_match, s.prev_length);
            /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/ bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
            /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */ s.lookahead -= s.prev_length - 1;
            s.prev_length -= 2;
            do if (++s.strstart <= max_insert) {
                /*** INSERT_STRING(s, s.strstart, hash_head); ***/ s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
                hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = s.strstart;
            /***/ }
            while (--s.prev_length !== 0);
            s.match_available = 0;
            s.match_length = MIN_MATCH - 1;
            s.strstart++;
            if (bflush) {
                /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
                if (s.strm.avail_out === 0) return BS_NEED_MORE;
            /***/ }
        } else if (s.match_available) {
            /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */ //Tracevv((stderr,"%c", s->window[s->strstart-1]));
            /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/ bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
            if (bflush) /*** FLUSH_BLOCK_ONLY(s, 0) ***/ flush_block_only(s, false);
            s.strstart++;
            s.lookahead--;
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        } else {
            /* There is no previous match to compare with, wait for
       * the next step to decide.
       */ s.match_available = 1;
            s.strstart++;
            s.lookahead--;
        }
    }
    //Assert (flush != Z_NO_FLUSH, "no flush?");
    if (s.match_available) {
        //Tracevv((stderr,"%c", s->window[s->strstart-1]));
        /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/ bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
        s.match_available = 0;
    }
    s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH$3) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.sym_next) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
};
/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */ const deflate_rle = (s, flush)=>{
    let bflush; /* set if current block must be flushed */ 
    let prev; /* byte at distance one to match */ 
    let scan, strend; /* scan goes up to strend for length of run */ 
    const _win = s.window;
    for(;;){
        /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */ if (s.lookahead <= MAX_MATCH) {
            fill_window(s);
            if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
            if (s.lookahead === 0) break;
             /* flush the current block */ 
        }
        /* See how many times the previous byte repeats */ s.match_length = 0;
        if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
            scan = s.strstart - 1;
            prev = _win[scan];
            if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
                strend = s.strstart + MAX_MATCH;
                do ;
                while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
                s.match_length = MAX_MATCH - (strend - scan);
                if (s.match_length > s.lookahead) s.match_length = s.lookahead;
            }
        //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
        }
        /* Emit match if have run of MIN_MATCH or longer, else emit literal */ if (s.match_length >= MIN_MATCH) {
            //check_match(s, s.strstart, s.strstart - 1, s.match_length);
            /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/ bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH);
            s.lookahead -= s.match_length;
            s.strstart += s.match_length;
            s.match_length = 0;
        } else {
            /* No match, output a literal byte */ //Tracevv((stderr,"%c", s->window[s->strstart]));
            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/ bflush = _tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
        }
        if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        /***/ }
    }
    s.insert = 0;
    if (flush === Z_FINISH$3) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.sym_next) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
};
/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */ const deflate_huff = (s, flush)=>{
    let bflush; /* set if current block must be flushed */ 
    for(;;){
        /* Make sure that we have a literal to write. */ if (s.lookahead === 0) {
            fill_window(s);
            if (s.lookahead === 0) {
                if (flush === Z_NO_FLUSH$2) return BS_NEED_MORE;
                break; /* flush the current block */ 
            }
        }
        /* Output a literal byte */ s.match_length = 0;
        //Tracevv((stderr,"%c", s->window[s->strstart]));
        /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/ bflush = _tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
        if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
            if (s.strm.avail_out === 0) return BS_NEED_MORE;
        /***/ }
    }
    s.insert = 0;
    if (flush === Z_FINISH$3) {
        /*** FLUSH_BLOCK(s, 1); ***/ flush_block_only(s, true);
        if (s.strm.avail_out === 0) return BS_FINISH_STARTED;
        /***/ return BS_FINISH_DONE;
    }
    if (s.sym_next) {
        /*** FLUSH_BLOCK(s, 0); ***/ flush_block_only(s, false);
        if (s.strm.avail_out === 0) return BS_NEED_MORE;
    /***/ }
    return BS_BLOCK_DONE;
};
/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */ function Config(good_length, max_lazy, nice_length, max_chain, func) {
    this.good_length = good_length;
    this.max_lazy = max_lazy;
    this.nice_length = nice_length;
    this.max_chain = max_chain;
    this.func = func;
}
const configuration_table = [
    /*      good lazy nice chain */ new Config(0, 0, 0, 0, deflate_stored),
    /* 0 store only */ new Config(4, 4, 8, 4, deflate_fast),
    /* 1 max speed, no lazy matches */ new Config(4, 5, 16, 8, deflate_fast),
    /* 2 */ new Config(4, 6, 32, 32, deflate_fast),
    /* 3 */ new Config(4, 4, 16, 16, deflate_slow),
    /* 4 lazy matches */ new Config(8, 16, 32, 32, deflate_slow),
    /* 5 */ new Config(8, 16, 128, 128, deflate_slow),
    /* 6 */ new Config(8, 32, 128, 256, deflate_slow),
    /* 7 */ new Config(32, 128, 258, 1024, deflate_slow),
    /* 8 */ new Config(32, 258, 258, 4096, deflate_slow)
];
/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */ const lm_init = (s)=>{
    s.window_size = 2 * s.w_size;
    /*** CLEAR_HASH(s); ***/ zero(s.head); // Fill with NIL (= 0);
    /* Set the default configuration parameters:
   */ s.max_lazy_match = configuration_table[s.level].max_lazy;
    s.good_match = configuration_table[s.level].good_length;
    s.nice_match = configuration_table[s.level].nice_length;
    s.max_chain_length = configuration_table[s.level].max_chain;
    s.strstart = 0;
    s.block_start = 0;
    s.lookahead = 0;
    s.insert = 0;
    s.match_length = s.prev_length = MIN_MATCH - 1;
    s.match_available = 0;
    s.ins_h = 0;
};
function DeflateState() {
    this.strm = null; /* pointer back to this zlib stream */ 
    this.status = 0; /* as the name implies */ 
    this.pending_buf = null; /* output still pending */ 
    this.pending_buf_size = 0; /* size of pending_buf */ 
    this.pending_out = 0; /* next pending byte to output to the stream */ 
    this.pending = 0; /* nb of bytes in the pending buffer */ 
    this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip */ 
    this.gzhead = null; /* gzip header information to write */ 
    this.gzindex = 0; /* where in extra, name, or comment */ 
    this.method = Z_DEFLATED$2; /* can only be DEFLATED */ 
    this.last_flush = -1; /* value of flush param for previous deflate call */ 
    this.w_size = 0; /* LZ77 window size (32K by default) */ 
    this.w_bits = 0; /* log2(w_size)  (8..16) */ 
    this.w_mask = 0; /* w_size - 1 */ 
    this.window = null;
    /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */ this.window_size = 0;
    /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */ this.prev = null;
    /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */ this.head = null; /* Heads of the hash chains or NIL. */ 
    this.ins_h = 0; /* hash index of string to be inserted */ 
    this.hash_size = 0; /* number of elements in hash table */ 
    this.hash_bits = 0; /* log2(hash_size) */ 
    this.hash_mask = 0; /* hash_size-1 */ 
    this.hash_shift = 0;
    /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */ this.block_start = 0;
    /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */ this.match_length = 0; /* length of best match */ 
    this.prev_match = 0; /* previous match */ 
    this.match_available = 0; /* set if previous match exists */ 
    this.strstart = 0; /* start of string to insert */ 
    this.match_start = 0; /* start of matching string */ 
    this.lookahead = 0; /* number of valid bytes ahead in window */ 
    this.prev_length = 0;
    /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */ this.max_chain_length = 0;
    /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */ this.max_lazy_match = 0;
    /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */ // That's alias to max_lazy_match, don't use directly
    //this.max_insert_length = 0;
    /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */ this.level = 0; /* compression level (1..9) */ 
    this.strategy = 0; /* favor or force Huffman coding*/ 
    this.good_match = 0;
    /* Use a faster search when the previous match is longer than this */ this.nice_match = 0; /* Stop searching when current match exceeds this */ 
    /* used by trees.c: */ /* Didn't use ct_data typedef below to suppress compiler warning */ // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
    // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
    // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */
    // Use flat array of DOUBLE size, with interleaved fata,
    // because JS does not support effective
    this.dyn_ltree = new Uint16Array(HEAP_SIZE * 2);
    this.dyn_dtree = new Uint16Array((2 * D_CODES + 1) * 2);
    this.bl_tree = new Uint16Array((2 * BL_CODES + 1) * 2);
    zero(this.dyn_ltree);
    zero(this.dyn_dtree);
    zero(this.bl_tree);
    this.l_desc = null; /* desc. for literal tree */ 
    this.d_desc = null; /* desc. for distance tree */ 
    this.bl_desc = null; /* desc. for bit length tree */ 
    //ush bl_count[MAX_BITS+1];
    this.bl_count = new Uint16Array(MAX_BITS + 1);
    /* number of codes at each bit length for an optimal tree */ //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
    this.heap = new Uint16Array(2 * L_CODES + 1); /* heap used to build the Huffman trees */ 
    zero(this.heap);
    this.heap_len = 0; /* number of elements in the heap */ 
    this.heap_max = 0; /* element of largest frequency */ 
    /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */ this.depth = new Uint16Array(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
    zero(this.depth);
    /* Depth of each subtree used as tie breaker for trees of equal frequency
   */ this.sym_buf = 0; /* buffer for distances and literals/lengths */ 
    this.lit_bufsize = 0;
    /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */ this.sym_next = 0; /* running index in sym_buf */ 
    this.sym_end = 0; /* symbol table full when sym_next reaches this */ 
    this.opt_len = 0; /* bit length of current block with optimal trees */ 
    this.static_len = 0; /* bit length of current block with static trees */ 
    this.matches = 0; /* number of string matches in current block */ 
    this.insert = 0; /* bytes at end of window left to insert */ 
    this.bi_buf = 0;
    /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */ this.bi_valid = 0;
/* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */ // Used for window memory init. We safely ignore it for JS. That makes
// sense only for pointers and memory check tools.
//this.high_water = 0;
/* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */ }
/* =========================================================================
 * Check for a valid deflate stream state. Return 0 if ok, 1 if not.
 */ const deflateStateCheck = (strm)=>{
    if (!strm) return 1;
    const s = strm.state;
    if (!s || s.strm !== strm || s.status !== INIT_STATE && //#ifdef GZIP
    s.status !== GZIP_STATE && //#endif
    s.status !== EXTRA_STATE && s.status !== NAME_STATE && s.status !== COMMENT_STATE && s.status !== HCRC_STATE && s.status !== BUSY_STATE && s.status !== FINISH_STATE) return 1;
    return 0;
};
const deflateResetKeep = (strm)=>{
    if (deflateStateCheck(strm)) return err(strm, Z_STREAM_ERROR$2);
    strm.total_in = strm.total_out = 0;
    strm.data_type = Z_UNKNOWN;
    const s = strm.state;
    s.pending = 0;
    s.pending_out = 0;
    if (s.wrap < 0) s.wrap = -s.wrap;
    s.status = //#ifdef GZIP
    s.wrap === 2 ? GZIP_STATE : //#endif
    s.wrap ? INIT_STATE : BUSY_STATE;
    strm.adler = s.wrap === 2 ? 0 // crc32(0, Z_NULL, 0)
     : 1; // adler32(0, Z_NULL, 0)
    s.last_flush = -2;
    _tr_init(s);
    return Z_OK$3;
};
const deflateReset = (strm)=>{
    const ret = deflateResetKeep(strm);
    if (ret === Z_OK$3) lm_init(strm.state);
    return ret;
};
const deflateSetHeader = (strm, head)=>{
    if (deflateStateCheck(strm) || strm.state.wrap !== 2) return Z_STREAM_ERROR$2;
    strm.state.gzhead = head;
    return Z_OK$3;
};
const deflateInit2 = (strm, level, method, windowBits, memLevel, strategy)=>{
    if (!strm) return Z_STREAM_ERROR$2;
    let wrap = 1;
    if (level === Z_DEFAULT_COMPRESSION$1) level = 6;
    if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
    } else if (windowBits > 15) {
        wrap = 2; /* write gzip wrapper instead */ 
        windowBits -= 16;
    }
    if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED$2 || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED || windowBits === 8 && wrap !== 1) return err(strm, Z_STREAM_ERROR$2);
    if (windowBits === 8) windowBits = 9;
    /* until 256-byte window bug fixed */ const s = new DeflateState();
    strm.state = s;
    s.strm = strm;
    s.status = INIT_STATE; /* to pass state test in deflateReset() */ 
    s.wrap = wrap;
    s.gzhead = null;
    s.w_bits = windowBits;
    s.w_size = 1 << s.w_bits;
    s.w_mask = s.w_size - 1;
    s.hash_bits = memLevel + 7;
    s.hash_size = 1 << s.hash_bits;
    s.hash_mask = s.hash_size - 1;
    s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
    s.window = new Uint8Array(s.w_size * 2);
    s.head = new Uint16Array(s.hash_size);
    s.prev = new Uint16Array(s.w_size);
    // Don't need mem init magic for JS.
    //s.high_water = 0;  /* nothing written to s->window yet */
    s.lit_bufsize = 1 << memLevel + 6; /* 16K elements by default */ 
    /* We overlay pending_buf and sym_buf. This works since the average size
   * for length/distance pairs over any compressed block is assured to be 31
   * bits or less.
   *
   * Analysis: The longest fixed codes are a length code of 8 bits plus 5
   * extra bits, for lengths 131 to 257. The longest fixed distance codes are
   * 5 bits plus 13 extra bits, for distances 16385 to 32768. The longest
   * possible fixed-codes length/distance pair is then 31 bits total.
   *
   * sym_buf starts one-fourth of the way into pending_buf. So there are
   * three bytes in sym_buf for every four bytes in pending_buf. Each symbol
   * in sym_buf is three bytes -- two for the distance and one for the
   * literal/length. As each symbol is consumed, the pointer to the next
   * sym_buf value to read moves forward three bytes. From that symbol, up to
   * 31 bits are written to pending_buf. The closest the written pending_buf
   * bits gets to the next sym_buf symbol to read is just before the last
   * code is written. At that time, 31*(n-2) bits have been written, just
   * after 24*(n-2) bits have been consumed from sym_buf. sym_buf starts at
   * 8*n bits into pending_buf. (Note that the symbol buffer fills when n-1
   * symbols are written.) The closest the writing gets to what is unread is
   * then n+14 bits. Here n is lit_bufsize, which is 16384 by default, and
   * can range from 128 to 32768.
   *
   * Therefore, at a minimum, there are 142 bits of space between what is
   * written and what is read in the overlain buffers, so the symbols cannot
   * be overwritten by the compressed data. That space is actually 139 bits,
   * due to the three-bit fixed-code block header.
   *
   * That covers the case where either Z_FIXED is specified, forcing fixed
   * codes, or when the use of fixed codes is chosen, because that choice
   * results in a smaller compressed block than dynamic codes. That latter
   * condition then assures that the above analysis also covers all dynamic
   * blocks. A dynamic-code block will only be chosen to be emitted if it has
   * fewer bits than a fixed-code block would for the same set of symbols.
   * Therefore its average symbol length is assured to be less than 31. So
   * the compressed data for a dynamic block also cannot overwrite the
   * symbols from which it is being constructed.
   */ s.pending_buf_size = s.lit_bufsize * 4;
    s.pending_buf = new Uint8Array(s.pending_buf_size);
    // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
    //s->sym_buf = s->pending_buf + s->lit_bufsize;
    s.sym_buf = s.lit_bufsize;
    //s->sym_end = (s->lit_bufsize - 1) * 3;
    s.sym_end = (s.lit_bufsize - 1) * 3;
    /* We avoid equality with lit_bufsize*3 because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */ s.level = level;
    s.strategy = strategy;
    s.method = method;
    return deflateReset(strm);
};
const deflateInit = (strm, level)=>{
    return deflateInit2(strm, level, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1);
};
/* ========================================================================= */ const deflate$2 = (strm, flush)=>{
    if (deflateStateCheck(strm) || flush > Z_BLOCK$1 || flush < 0) return strm ? err(strm, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
    const s = strm.state;
    if (!strm.output || strm.avail_in !== 0 && !strm.input || s.status === FINISH_STATE && flush !== Z_FINISH$3) return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR$1 : Z_STREAM_ERROR$2);
    const old_flush = s.last_flush;
    s.last_flush = flush;
    /* Flush as much pending output as possible */ if (s.pending !== 0) {
        flush_pending(strm);
        if (strm.avail_out === 0) {
            /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */ s.last_flush = -1;
            return Z_OK$3;
        }
    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */ } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH$3) return err(strm, Z_BUF_ERROR$1);
    /* User must not provide more input after the first FINISH: */ if (s.status === FINISH_STATE && strm.avail_in !== 0) return err(strm, Z_BUF_ERROR$1);
    /* Write the header */ if (s.status === INIT_STATE && s.wrap === 0) s.status = BUSY_STATE;
    if (s.status === INIT_STATE) {
        /* zlib header */ let header = Z_DEFLATED$2 + (s.w_bits - 8 << 4) << 8;
        let level_flags = -1;
        if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) level_flags = 0;
        else if (s.level < 6) level_flags = 1;
        else if (s.level === 6) level_flags = 2;
        else level_flags = 3;
        header |= level_flags << 6;
        if (s.strstart !== 0) header |= PRESET_DICT;
        header += 31 - header % 31;
        putShortMSB(s, header);
        /* Save the adler32 of the preset dictionary: */ if (s.strstart !== 0) {
            putShortMSB(s, strm.adler >>> 16);
            putShortMSB(s, strm.adler & 0xffff);
        }
        strm.adler = 1; // adler32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
        /* Compression must start with an empty pending buffer */ flush_pending(strm);
        if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
        }
    }
    //#ifdef GZIP
    if (s.status === GZIP_STATE) {
        /* gzip header */ strm.adler = 0; //crc32(0L, Z_NULL, 0);
        put_byte(s, 31);
        put_byte(s, 139);
        put_byte(s, 8);
        if (!s.gzhead) {
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
            put_byte(s, OS_CODE);
            s.status = BUSY_STATE;
            /* Compression must start with an empty pending buffer */ flush_pending(strm);
            if (s.pending !== 0) {
                s.last_flush = -1;
                return Z_OK$3;
            }
        } else {
            put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
            put_byte(s, s.gzhead.time & 0xff);
            put_byte(s, s.gzhead.time >> 8 & 0xff);
            put_byte(s, s.gzhead.time >> 16 & 0xff);
            put_byte(s, s.gzhead.time >> 24 & 0xff);
            put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
            put_byte(s, s.gzhead.os & 0xff);
            if (s.gzhead.extra && s.gzhead.extra.length) {
                put_byte(s, s.gzhead.extra.length & 0xff);
                put_byte(s, s.gzhead.extra.length >> 8 & 0xff);
            }
            if (s.gzhead.hcrc) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0);
            s.gzindex = 0;
            s.status = EXTRA_STATE;
        }
    }
    if (s.status === EXTRA_STATE) {
        if (s.gzhead.extra /* != Z_NULL*/ ) {
            let beg = s.pending; /* start of bytes to update crc */ 
            let left = (s.gzhead.extra.length & 0xffff) - s.gzindex;
            while(s.pending + left > s.pending_buf_size){
                let copy = s.pending_buf_size - s.pending;
                // zmemcpy(s.pending_buf + s.pending,
                //    s.gzhead.extra + s.gzindex, copy);
                s.pending_buf.set(s.gzhead.extra.subarray(s.gzindex, s.gzindex + copy), s.pending);
                s.pending = s.pending_buf_size;
                //--- HCRC_UPDATE(beg) ---//
                if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
                //---//
                s.gzindex += copy;
                flush_pending(strm);
                if (s.pending !== 0) {
                    s.last_flush = -1;
                    return Z_OK$3;
                }
                beg = 0;
                left -= copy;
            }
            // JS specific: s.gzhead.extra may be TypedArray or Array for backward compatibility
            //              TypedArray.slice and TypedArray.from don't exist in IE10-IE11
            let gzhead_extra = new Uint8Array(s.gzhead.extra);
            // zmemcpy(s->pending_buf + s->pending,
            //     s->gzhead->extra + s->gzindex, left);
            s.pending_buf.set(gzhead_extra.subarray(s.gzindex, s.gzindex + left), s.pending);
            s.pending += left;
            //--- HCRC_UPDATE(beg) ---//
            if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
            //---//
            s.gzindex = 0;
        }
        s.status = NAME_STATE;
    }
    if (s.status === NAME_STATE) {
        if (s.gzhead.name /* != Z_NULL*/ ) {
            let beg = s.pending; /* start of bytes to update crc */ 
            let val;
            do {
                if (s.pending === s.pending_buf_size) {
                    //--- HCRC_UPDATE(beg) ---//
                    if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
                    //---//
                    flush_pending(strm);
                    if (s.pending !== 0) {
                        s.last_flush = -1;
                        return Z_OK$3;
                    }
                    beg = 0;
                }
                // JS specific: little magic to add zero terminator to end of string
                if (s.gzindex < s.gzhead.name.length) val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
                else val = 0;
                put_byte(s, val);
            }while (val !== 0);
            //--- HCRC_UPDATE(beg) ---//
            if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
            //---//
            s.gzindex = 0;
        }
        s.status = COMMENT_STATE;
    }
    if (s.status === COMMENT_STATE) {
        if (s.gzhead.comment /* != Z_NULL*/ ) {
            let beg = s.pending; /* start of bytes to update crc */ 
            let val;
            do {
                if (s.pending === s.pending_buf_size) {
                    //--- HCRC_UPDATE(beg) ---//
                    if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
                    //---//
                    flush_pending(strm);
                    if (s.pending !== 0) {
                        s.last_flush = -1;
                        return Z_OK$3;
                    }
                    beg = 0;
                }
                // JS specific: little magic to add zero terminator to end of string
                if (s.gzindex < s.gzhead.comment.length) val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
                else val = 0;
                put_byte(s, val);
            }while (val !== 0);
            //--- HCRC_UPDATE(beg) ---//
            if (s.gzhead.hcrc && s.pending > beg) strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
        //---//
        }
        s.status = HCRC_STATE;
    }
    if (s.status === HCRC_STATE) {
        if (s.gzhead.hcrc) {
            if (s.pending + 2 > s.pending_buf_size) {
                flush_pending(strm);
                if (s.pending !== 0) {
                    s.last_flush = -1;
                    return Z_OK$3;
                }
            }
            put_byte(s, strm.adler & 0xff);
            put_byte(s, strm.adler >> 8 & 0xff);
            strm.adler = 0; //crc32(0L, Z_NULL, 0);
        }
        s.status = BUSY_STATE;
        /* Compression must start with an empty pending buffer */ flush_pending(strm);
        if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
        }
    }
    //#endif
    /* Start a new block or continue the current one.
   */ if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH$2 && s.status !== FINISH_STATE) {
        let bstate = s.level === 0 ? deflate_stored(s, flush) : s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
        if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) s.status = FINISH_STATE;
        if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
            if (strm.avail_out === 0) s.last_flush = -1;
            return Z_OK$3;
        /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */ }
        if (bstate === BS_BLOCK_DONE) {
            if (flush === Z_PARTIAL_FLUSH) _tr_align(s);
            else if (flush !== Z_BLOCK$1) {
                _tr_stored_block(s, 0, 0, false);
                /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */ if (flush === Z_FULL_FLUSH$1) {
                    /*** CLEAR_HASH(s); ***/ /* forget history */ zero(s.head); // Fill with NIL (= 0);
                    if (s.lookahead === 0) {
                        s.strstart = 0;
                        s.block_start = 0;
                        s.insert = 0;
                    }
                }
            }
            flush_pending(strm);
            if (strm.avail_out === 0) {
                s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */ 
                return Z_OK$3;
            }
        }
    }
    if (flush !== Z_FINISH$3) return Z_OK$3;
    if (s.wrap <= 0) return Z_STREAM_END$3;
    /* Write the trailer */ if (s.wrap === 2) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, strm.adler >> 8 & 0xff);
        put_byte(s, strm.adler >> 16 & 0xff);
        put_byte(s, strm.adler >> 24 & 0xff);
        put_byte(s, strm.total_in & 0xff);
        put_byte(s, strm.total_in >> 8 & 0xff);
        put_byte(s, strm.total_in >> 16 & 0xff);
        put_byte(s, strm.total_in >> 24 & 0xff);
    } else {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
    }
    flush_pending(strm);
    /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */ if (s.wrap > 0) s.wrap = -s.wrap;
    /* write the trailer only once! */ return s.pending !== 0 ? Z_OK$3 : Z_STREAM_END$3;
};
const deflateEnd = (strm)=>{
    if (deflateStateCheck(strm)) return Z_STREAM_ERROR$2;
    const status = strm.state.status;
    strm.state = null;
    return status === BUSY_STATE ? err(strm, Z_DATA_ERROR$2) : Z_OK$3;
};
/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */ const deflateSetDictionary = (strm, dictionary)=>{
    let dictLength = dictionary.length;
    if (deflateStateCheck(strm)) return Z_STREAM_ERROR$2;
    const s = strm.state;
    const wrap = s.wrap;
    if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) return Z_STREAM_ERROR$2;
    /* when using zlib wrappers, compute Adler-32 for provided dictionary */ if (wrap === 1) /* adler32(strm->adler, dictionary, dictLength); */ strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
    s.wrap = 0; /* avoid computing Adler-32 in read_buf */ 
    /* if dictionary would fill window, just replace the history */ if (dictLength >= s.w_size) {
        if (wrap === 0) {
            /*** CLEAR_HASH(s); ***/ zero(s.head); // Fill with NIL (= 0);
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
        }
        /* use the tail */ // dictionary = dictionary.slice(dictLength - s.w_size);
        let tmpDict = new Uint8Array(s.w_size);
        tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
        dictionary = tmpDict;
        dictLength = s.w_size;
    }
    /* insert dictionary into window and hash */ const avail = strm.avail_in;
    const next = strm.next_in;
    const input = strm.input;
    strm.avail_in = dictLength;
    strm.next_in = 0;
    strm.input = dictionary;
    fill_window(s);
    while(s.lookahead >= MIN_MATCH){
        let str = s.strstart;
        let n = s.lookahead - (MIN_MATCH - 1);
        do {
            /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */ s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);
            s.prev[str & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = str;
            str++;
        }while (--n);
        s.strstart = str;
        s.lookahead = MIN_MATCH - 1;
        fill_window(s);
    }
    s.strstart += s.lookahead;
    s.block_start = s.strstart;
    s.insert = s.lookahead;
    s.lookahead = 0;
    s.match_length = s.prev_length = MIN_MATCH - 1;
    s.match_available = 0;
    strm.next_in = next;
    strm.input = input;
    strm.avail_in = avail;
    s.wrap = wrap;
    return Z_OK$3;
};
var deflateInit_1 = deflateInit;
var deflateInit2_1 = deflateInit2;
var deflateReset_1 = deflateReset;
var deflateResetKeep_1 = deflateResetKeep;
var deflateSetHeader_1 = deflateSetHeader;
var deflate_2$1 = deflate$2;
var deflateEnd_1 = deflateEnd;
var deflateSetDictionary_1 = deflateSetDictionary;
var deflateInfo = "pako deflate (from Nodeca project)";
/* Not implemented
module.exports.deflateBound = deflateBound;
module.exports.deflateCopy = deflateCopy;
module.exports.deflateGetDictionary = deflateGetDictionary;
module.exports.deflateParams = deflateParams;
module.exports.deflatePending = deflatePending;
module.exports.deflatePrime = deflatePrime;
module.exports.deflateTune = deflateTune;
*/ var deflate_1$2 = {
    deflateInit: deflateInit_1,
    deflateInit2: deflateInit2_1,
    deflateReset: deflateReset_1,
    deflateResetKeep: deflateResetKeep_1,
    deflateSetHeader: deflateSetHeader_1,
    deflate: deflate_2$1,
    deflateEnd: deflateEnd_1,
    deflateSetDictionary: deflateSetDictionary_1,
    deflateInfo: deflateInfo
};
const _has = (obj, key)=>{
    return Object.prototype.hasOwnProperty.call(obj, key);
};
var assign = function(obj /*from1, from2, from3, ...*/ ) {
    const sources = Array.prototype.slice.call(arguments, 1);
    while(sources.length){
        const source = sources.shift();
        if (!source) continue;
        if (typeof source !== "object") throw new TypeError(source + "must be non-object");
        for(const p in source)if (_has(source, p)) obj[p] = source[p];
    }
    return obj;
};
// Join array of chunks to single array.
var flattenChunks = (chunks)=>{
    // calculate data length
    let len = 0;
    for(let i = 0, l = chunks.length; i < l; i++)len += chunks[i].length;
    // join chunks
    const result = new Uint8Array(len);
    for(let i = 0, pos = 0, l = chunks.length; i < l; i++){
        let chunk = chunks[i];
        result.set(chunk, pos);
        pos += chunk.length;
    }
    return result;
};
var common = {
    assign: assign,
    flattenChunks: flattenChunks
};
// String encode/decode helpers
// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
let STR_APPLY_UIA_OK = true;
try {
    String.fromCharCode.apply(null, new Uint8Array(1));
} catch (__) {
    STR_APPLY_UIA_OK = false;
}
// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
const _utf8len = new Uint8Array(256);
for(let q = 0; q < 256; q++)_utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start
// convert string to array (typed, when possible)
var string2buf = (str)=>{
    if (typeof TextEncoder === "function" && TextEncoder.prototype.encode) return new TextEncoder().encode(str);
    let buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
    // count binary size
    for(m_pos = 0; m_pos < str_len; m_pos++){
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
    }
    // allocate buffer
    buf = new Uint8Array(buf_len);
    // convert
    for(i = 0, m_pos = 0; i < buf_len; m_pos++){
        c = str.charCodeAt(m_pos);
        if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);
            if ((c2 & 0xfc00) === 0xdc00) {
                c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
                m_pos++;
            }
        }
        if (c < 0x80) /* one byte */ buf[i++] = c;
        else if (c < 0x800) {
            /* two bytes */ buf[i++] = 0xC0 | c >>> 6;
            buf[i++] = 0x80 | c & 0x3f;
        } else if (c < 0x10000) {
            /* three bytes */ buf[i++] = 0xE0 | c >>> 12;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
        } else {
            /* four bytes */ buf[i++] = 0xf0 | c >>> 18;
            buf[i++] = 0x80 | c >>> 12 & 0x3f;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
        }
    }
    return buf;
};
// Helper
const buf2binstring = (buf, len)=>{
    // On Chrome, the arguments in a function call that are allowed is `65534`.
    // If the length of the buffer is smaller than that, we can use this optimization,
    // otherwise we will take a slower path.
    if (len < 65534) {
        if (buf.subarray && STR_APPLY_UIA_OK) return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
    }
    let result = "";
    for(let i = 0; i < len; i++)result += String.fromCharCode(buf[i]);
    return result;
};
// convert array to string
var buf2string = (buf, max)=>{
    const len = max || buf.length;
    if (typeof TextDecoder === "function" && TextDecoder.prototype.decode) return new TextDecoder().decode(buf.subarray(0, max));
    let i, out;
    // Reserve max possible length (2 words per char)
    // NB: by unknown reasons, Array is significantly faster for
    //     String.fromCharCode.apply than Uint16Array.
    const utf16buf = new Array(len * 2);
    for(out = 0, i = 0; i < len;){
        let c = buf[i++];
        // quick process ascii
        if (c < 0x80) {
            utf16buf[out++] = c;
            continue;
        }
        let c_len = _utf8len[c];
        // skip 5 & 6 byte codes
        if (c_len > 4) {
            utf16buf[out++] = 0xfffd;
            i += c_len - 1;
            continue;
        }
        // apply mask on first byte
        c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
        // join the rest
        while(c_len > 1 && i < len){
            c = c << 6 | buf[i++] & 0x3f;
            c_len--;
        }
        // terminated by end of string?
        if (c_len > 1) {
            utf16buf[out++] = 0xfffd;
            continue;
        }
        if (c < 0x10000) utf16buf[out++] = c;
        else {
            c -= 0x10000;
            utf16buf[out++] = 0xd800 | c >> 10 & 0x3ff;
            utf16buf[out++] = 0xdc00 | c & 0x3ff;
        }
    }
    return buf2binstring(utf16buf, out);
};
// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
var utf8border = (buf, max)=>{
    max = max || buf.length;
    if (max > buf.length) max = buf.length;
    // go back from last position, until start of sequence found
    let pos = max - 1;
    while(pos >= 0 && (buf[pos] & 0xC0) === 0x80)pos--;
    // Very small and broken sequence,
    // return max, because we should return something anyway.
    if (pos < 0) return max;
    // If we came to start of buffer - that means buffer is too small,
    // return max too.
    if (pos === 0) return max;
    return pos + _utf8len[buf[pos]] > max ? pos : max;
};
var strings = {
    string2buf: string2buf,
    buf2string: buf2string,
    utf8border: utf8border
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function ZStream() {
    /* next input byte */ this.input = null; // JS specific, because we have no pointers
    this.next_in = 0;
    /* number of bytes available at input */ this.avail_in = 0;
    /* total number of input bytes read so far */ this.total_in = 0;
    /* next output byte should be put there */ this.output = null; // JS specific, because we have no pointers
    this.next_out = 0;
    /* remaining free space at output */ this.avail_out = 0;
    /* total number of bytes output so far */ this.total_out = 0;
    /* last error message, NULL if no error */ this.msg = "" /*Z_NULL*/ ;
    /* not visible by applications */ this.state = null;
    /* best guess about the data type: binary or text */ this.data_type = 2 /*Z_UNKNOWN*/ ;
    /* adler32 value of the uncompressed data */ this.adler = 0;
}
var zstream = ZStream;
const toString$1 = Object.prototype.toString;
/* Public constants ==========================================================*/ /* ===========================================================================*/ const { Z_NO_FLUSH: Z_NO_FLUSH$1, Z_SYNC_FLUSH, Z_FULL_FLUSH, Z_FINISH: Z_FINISH$2, Z_OK: Z_OK$2, Z_STREAM_END: Z_STREAM_END$2, Z_DEFAULT_COMPRESSION, Z_DEFAULT_STRATEGY, Z_DEFLATED: Z_DEFLATED$1 } = constants$2;
/* ===========================================================================*/ /**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/ /* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/ /**
 * Deflate.result -> Uint8Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
 **/ /**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/ /**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/ /**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 *   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/ function Deflate$1(options) {
    this.options = common.assign({
        level: Z_DEFAULT_COMPRESSION,
        method: Z_DEFLATED$1,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: Z_DEFAULT_STRATEGY
    }, options || {});
    let opt = this.options;
    if (opt.raw && opt.windowBits > 0) opt.windowBits = -opt.windowBits;
    else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) opt.windowBits += 16;
    this.err = 0; // error code, if happens (0 = Z_OK)
    this.msg = ""; // error message
    this.ended = false; // used to avoid multiple onEnd() calls
    this.chunks = []; // chunks of compressed data
    this.strm = new zstream();
    this.strm.avail_out = 0;
    let status = deflate_1$2.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);
    if (status !== Z_OK$2) throw new Error(messages[status]);
    if (opt.header) deflate_1$2.deflateSetHeader(this.strm, opt.header);
    if (opt.dictionary) {
        let dict;
        // Convert data if needed
        if (typeof opt.dictionary === "string") // If we need to compress text, change encoding to utf8.
        dict = strings.string2buf(opt.dictionary);
        else if (toString$1.call(opt.dictionary) === "[object ArrayBuffer]") dict = new Uint8Array(opt.dictionary);
        else dict = opt.dictionary;
        status = deflate_1$2.deflateSetDictionary(this.strm, dict);
        if (status !== Z_OK$2) throw new Error(messages[status]);
        this._dict_set = true;
    }
}
/**
 * Deflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must
 * have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
 * buffers and call [[Deflate#onEnd]].
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/ Deflate$1.prototype.push = function(data, flush_mode) {
    const strm = this.strm;
    const chunkSize = this.options.chunkSize;
    let status, _flush_mode;
    if (this.ended) return false;
    if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
    else _flush_mode = flush_mode === true ? Z_FINISH$2 : Z_NO_FLUSH$1;
    // Convert data if needed
    if (typeof data === "string") // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
    else if (toString$1.call(data) === "[object ArrayBuffer]") strm.input = new Uint8Array(data);
    else strm.input = data;
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    for(;;){
        if (strm.avail_out === 0) {
            strm.output = new Uint8Array(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
        }
        // Make sure avail_out > 6 to avoid repeating markers
        if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
            this.onData(strm.output.subarray(0, strm.next_out));
            strm.avail_out = 0;
            continue;
        }
        status = deflate_1$2.deflate(strm, _flush_mode);
        // Ended => flush and finish
        if (status === Z_STREAM_END$2) {
            if (strm.next_out > 0) this.onData(strm.output.subarray(0, strm.next_out));
            status = deflate_1$2.deflateEnd(this.strm);
            this.onEnd(status);
            this.ended = true;
            return status === Z_OK$2;
        }
        // Flush if out buffer full
        if (strm.avail_out === 0) {
            this.onData(strm.output);
            continue;
        }
        // Flush if requested and has data
        if (_flush_mode > 0 && strm.next_out > 0) {
            this.onData(strm.output.subarray(0, strm.next_out));
            strm.avail_out = 0;
            continue;
        }
        if (strm.avail_in === 0) break;
    }
    return true;
};
/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array): output data.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/ Deflate$1.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
};
/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/ Deflate$1.prototype.onEnd = function(status) {
    // On success - join
    if (status === Z_OK$2) this.result = common.flattenChunks(this.chunks);
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
};
/**
 * deflate(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const data = new Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/ function deflate$1(input, options) {
    const deflator = new Deflate$1(options);
    deflator.push(input, true);
    // That will never happens, if you don't cheat with options :)
    if (deflator.err) throw deflator.msg || messages[deflator.err];
    return deflator.result;
}
/**
 * deflateRaw(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/ function deflateRaw$1(input, options) {
    options = options || {};
    options.raw = true;
    return deflate$1(input, options);
}
/**
 * gzip(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/ function gzip$1(input, options) {
    options = options || {};
    options.gzip = true;
    return deflate$1(input, options);
}
var Deflate_1$1 = Deflate$1;
var deflate_2 = deflate$1;
var deflateRaw_1$1 = deflateRaw$1;
var gzip_1$1 = gzip$1;
var constants$1 = constants$2;
var deflate_1$1 = {
    Deflate: Deflate_1$1,
    deflate: deflate_2,
    deflateRaw: deflateRaw_1$1,
    gzip: gzip_1$1,
    constants: constants$1
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
// See state defs from inflate.js
const BAD$1 = 16209; /* got a data error -- remain here until reset */ 
const TYPE$1 = 16191; /* i: waiting for type bits, including last-flag bit */ 
/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */ var inffast = function inflate_fast(strm, start) {
    let _in; /* local strm.input */ 
    let last; /* have enough input while in < last */ 
    let _out; /* local strm.output */ 
    let beg; /* inflate()'s initial strm.output */ 
    let end; /* while out < end, enough space available */ 
    //#ifdef INFLATE_STRICT
    let dmax; /* maximum distance from zlib header */ 
    //#endif
    let wsize; /* window size or zero if not using window */ 
    let whave; /* valid bytes in the window */ 
    let wnext; /* window write index */ 
    // Use `s_window` instead `window`, avoid conflict with instrumentation tools
    let s_window; /* allocated sliding window, if wsize != 0 */ 
    let hold; /* local strm.hold */ 
    let bits; /* local strm.bits */ 
    let lcode; /* local strm.lencode */ 
    let dcode; /* local strm.distcode */ 
    let lmask; /* mask for first level of length codes */ 
    let dmask; /* mask for first level of distance codes */ 
    let here; /* retrieved table entry */ 
    let op; /* code bits, operation, extra bits, or */ 
    /*  window position, window bytes to copy */ let len; /* match length, unused bytes */ 
    let dist; /* match distance */ 
    let from; /* where to copy match from */ 
    let from_source;
    let input, output; // JS specific, because we have no pointers
    /* copy state to local variables */ const state = strm.state;
    //here = state.here;
    _in = strm.next_in;
    input = strm.input;
    last = _in + (strm.avail_in - 5);
    _out = strm.next_out;
    output = strm.output;
    beg = _out - (start - strm.avail_out);
    end = _out + (strm.avail_out - 257);
    //#ifdef INFLATE_STRICT
    dmax = state.dmax;
    //#endif
    wsize = state.wsize;
    whave = state.whave;
    wnext = state.wnext;
    s_window = state.window;
    hold = state.hold;
    bits = state.bits;
    lcode = state.lencode;
    dcode = state.distcode;
    lmask = (1 << state.lenbits) - 1;
    dmask = (1 << state.distbits) - 1;
    /* decode literals and length/distances until end-of-block or not enough
     input data or output space */ top: do {
        if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
        }
        here = lcode[hold & lmask];
        dolen: for(;;){
            op = here >>> 24 /*here.bits*/ ;
            hold >>>= op;
            bits -= op;
            op = here >>> 16 & 0xff /*here.op*/ ;
            if (op === 0) //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
            //        "inflate:         literal '%c'\n" :
            //        "inflate:         literal 0x%02x\n", here.val));
            output[_out++] = here & 0xffff /*here.val*/ ;
            else if (op & 16) {
                len = here & 0xffff /*here.val*/ ;
                op &= 15; /* number of extra bits */ 
                if (op) {
                    if (bits < op) {
                        hold += input[_in++] << bits;
                        bits += 8;
                    }
                    len += hold & (1 << op) - 1;
                    hold >>>= op;
                    bits -= op;
                }
                //Tracevv((stderr, "inflate:         length %u\n", len));
                if (bits < 15) {
                    hold += input[_in++] << bits;
                    bits += 8;
                    hold += input[_in++] << bits;
                    bits += 8;
                }
                here = dcode[hold & dmask];
                dodist: for(;;){
                    op = here >>> 24 /*here.bits*/ ;
                    hold >>>= op;
                    bits -= op;
                    op = here >>> 16 & 0xff /*here.op*/ ;
                    if (op & 16) {
                        dist = here & 0xffff /*here.val*/ ;
                        op &= 15; /* number of extra bits */ 
                        if (bits < op) {
                            hold += input[_in++] << bits;
                            bits += 8;
                            if (bits < op) {
                                hold += input[_in++] << bits;
                                bits += 8;
                            }
                        }
                        dist += hold & (1 << op) - 1;
                        //#ifdef INFLATE_STRICT
                        if (dist > dmax) {
                            strm.msg = "invalid distance too far back";
                            state.mode = BAD$1;
                            break top;
                        }
                        //#endif
                        hold >>>= op;
                        bits -= op;
                        //Tracevv((stderr, "inflate:         distance %u\n", dist));
                        op = _out - beg; /* max distance in output */ 
                        if (dist > op) {
                            op = dist - op; /* distance back in window */ 
                            if (op > whave) {
                                if (state.sane) {
                                    strm.msg = "invalid distance too far back";
                                    state.mode = BAD$1;
                                    break top;
                                }
                            }
                            from = 0; // window index
                            from_source = s_window;
                            if (wnext === 0) {
                                from += wsize - op;
                                if (op < len) {
                                    len -= op;
                                    do output[_out++] = s_window[from++];
                                    while (--op);
                                    from = _out - dist; /* rest from output */ 
                                    from_source = output;
                                }
                            } else if (wnext < op) {
                                from += wsize + wnext - op;
                                op -= wnext;
                                if (op < len) {
                                    len -= op;
                                    do output[_out++] = s_window[from++];
                                    while (--op);
                                    from = 0;
                                    if (wnext < len) {
                                        op = wnext;
                                        len -= op;
                                        do output[_out++] = s_window[from++];
                                        while (--op);
                                        from = _out - dist; /* rest from output */ 
                                        from_source = output;
                                    }
                                }
                            } else {
                                from += wnext - op;
                                if (op < len) {
                                    len -= op;
                                    do output[_out++] = s_window[from++];
                                    while (--op);
                                    from = _out - dist; /* rest from output */ 
                                    from_source = output;
                                }
                            }
                            while(len > 2){
                                output[_out++] = from_source[from++];
                                output[_out++] = from_source[from++];
                                output[_out++] = from_source[from++];
                                len -= 3;
                            }
                            if (len) {
                                output[_out++] = from_source[from++];
                                if (len > 1) output[_out++] = from_source[from++];
                            }
                        } else {
                            from = _out - dist; /* copy direct from output */ 
                            do {
                                output[_out++] = output[from++];
                                output[_out++] = output[from++];
                                output[_out++] = output[from++];
                                len -= 3;
                            }while (len > 2);
                            if (len) {
                                output[_out++] = output[from++];
                                if (len > 1) output[_out++] = output[from++];
                            }
                        }
                    } else if ((op & 64) === 0) {
                        here = dcode[(here & 0xffff) + (hold & (1 << op) - 1)];
                        continue dodist;
                    } else {
                        strm.msg = "invalid distance code";
                        state.mode = BAD$1;
                        break top;
                    }
                    break; // need to emulate goto via "continue"
                }
            } else if ((op & 64) === 0) {
                here = lcode[(here & 0xffff) + (hold & (1 << op) - 1)];
                continue dolen;
            } else if (op & 32) {
                //Tracevv((stderr, "inflate:         end of block\n"));
                state.mode = TYPE$1;
                break top;
            } else {
                strm.msg = "invalid literal/length code";
                state.mode = BAD$1;
                break top;
            }
            break; // need to emulate goto via "continue"
        }
    }while (_in < last && _out < end);
    /* return unused bytes (on entry, bits < 8, so in won't go too far back) */ len = bits >> 3;
    _in -= len;
    bits -= len << 3;
    hold &= (1 << bits) - 1;
    /* update state and return */ strm.next_in = _in;
    strm.next_out = _out;
    strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
    strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
    state.hold = hold;
    state.bits = bits;
    return;
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const MAXBITS = 15;
const ENOUGH_LENS$1 = 852;
const ENOUGH_DISTS$1 = 592;
//const ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);
const CODES$1 = 0;
const LENS$1 = 1;
const DISTS$1 = 2;
const lbase = new Uint16Array([
    /* Length codes 257..285 base */ 3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
]);
const lext = new Uint8Array([
    /* Length codes 257..285 extra */ 16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    16,
    72,
    78
]);
const dbase = new Uint16Array([
    /* Distance codes 0..29 base */ 1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577,
    0,
    0
]);
const dext = new Uint8Array([
    /* Distance codes 0..29 extra */ 16,
    16,
    16,
    16,
    17,
    17,
    18,
    18,
    19,
    19,
    20,
    20,
    21,
    21,
    22,
    22,
    23,
    23,
    24,
    24,
    25,
    25,
    26,
    26,
    27,
    27,
    28,
    28,
    29,
    29,
    64,
    64
]);
const inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts)=>{
    const bits = opts.bits;
    //here = opts.here; /* table entry for duplication */
    let len = 0; /* a code's length in bits */ 
    let sym = 0; /* index of code symbols */ 
    let min = 0, max = 0; /* minimum and maximum code lengths */ 
    let root = 0; /* number of index bits for root table */ 
    let curr = 0; /* number of index bits for current table */ 
    let drop = 0; /* code bits to drop for sub-table */ 
    let left = 0; /* number of prefix codes available */ 
    let used = 0; /* code entries in table used */ 
    let huff = 0; /* Huffman code */ 
    let incr; /* for incrementing code, index */ 
    let fill; /* index for replicating entries */ 
    let low; /* low bits for current root entry */ 
    let mask; /* mask for low root bits */ 
    let next; /* next available space in table */ 
    let base = null; /* base value table to use */ 
    //  let shoextra;    /* extra bits table to use */
    let match; /* use base and extra for symbol >= match */ 
    const count = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
    const offs = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
    let extra = null;
    let here_bits, here_op, here_val;
    /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */ /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */ for(len = 0; len <= MAXBITS; len++)count[len] = 0;
    for(sym = 0; sym < codes; sym++)count[lens[lens_index + sym]]++;
    /* bound code lengths, force root to be within code lengths */ root = bits;
    for(max = MAXBITS; max >= 1; max--){
        if (count[max] !== 0) break;
    }
    if (root > max) root = max;
    if (max === 0) {
        //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
        //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
        //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
        table[table_index++] = 20971520;
        //table.op[opts.table_index] = 64;
        //table.bits[opts.table_index] = 1;
        //table.val[opts.table_index++] = 0;
        table[table_index++] = 20971520;
        opts.bits = 1;
        return 0; /* no symbols, but wait for decoding to report error */ 
    }
    for(min = 1; min < max; min++){
        if (count[min] !== 0) break;
    }
    if (root < min) root = min;
    /* check for an over-subscribed or incomplete set of lengths */ left = 1;
    for(len = 1; len <= MAXBITS; len++){
        left <<= 1;
        left -= count[len];
        if (left < 0) return -1;
         /* over-subscribed */ 
    }
    if (left > 0 && (type === CODES$1 || max !== 1)) return -1; /* incomplete set */ 
    /* generate offsets into symbol table for each length for sorting */ offs[1] = 0;
    for(len = 1; len < MAXBITS; len++)offs[len + 1] = offs[len] + count[len];
    /* sort symbols by length, by symbol order within each length */ for(sym = 0; sym < codes; sym++)if (lens[lens_index + sym] !== 0) work[offs[lens[lens_index + sym]]++] = sym;
    /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */ /* set up for code type */ // poor man optimization - use if-else instead of switch,
    // to avoid deopts in old v8
    if (type === CODES$1) {
        base = extra = work; /* dummy value--not used */ 
        match = 20;
    } else if (type === LENS$1) {
        base = lbase;
        extra = lext;
        match = 257;
    } else {
        base = dbase;
        extra = dext;
        match = 0;
    }
    /* initialize opts for loop */ huff = 0; /* starting code */ 
    sym = 0; /* starting code symbol */ 
    len = min; /* starting code length */ 
    next = table_index; /* current table to fill in */ 
    curr = root; /* current table index bits */ 
    drop = 0; /* current bits to drop from code for index */ 
    low = -1; /* trigger new sub-table when len > root */ 
    used = 1 << root; /* use root table entries */ 
    mask = used - 1; /* mask for comparing low */ 
    /* check available table space */ if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) return 1;
    /* process all codes and make table entries */ for(;;){
        /* create table entry */ here_bits = len - drop;
        if (work[sym] + 1 < match) {
            here_op = 0;
            here_val = work[sym];
        } else if (work[sym] >= match) {
            here_op = extra[work[sym] - match];
            here_val = base[work[sym] - match];
        } else {
            here_op = 96; /* end of block */ 
            here_val = 0;
        }
        /* replicate for those indices with low len bits equal to huff */ incr = 1 << len - drop;
        fill = 1 << curr;
        min = fill; /* save offset to next table */ 
        do {
            fill -= incr;
            table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
        }while (fill !== 0);
        /* backwards increment the len-bit code huff */ incr = 1 << len - 1;
        while(huff & incr)incr >>= 1;
        if (incr !== 0) {
            huff &= incr - 1;
            huff += incr;
        } else huff = 0;
        /* go to next symbol, update count, len */ sym++;
        if (--count[len] === 0) {
            if (len === max) break;
            len = lens[lens_index + work[sym]];
        }
        /* create new sub-table if needed */ if (len > root && (huff & mask) !== low) {
            /* if first time, transition to sub-tables */ if (drop === 0) drop = root;
            /* increment past last table */ next += min; /* here min is 1 << curr */ 
            /* determine length of next table */ curr = len - drop;
            left = 1 << curr;
            while(curr + drop < max){
                left -= count[curr + drop];
                if (left <= 0) break;
                curr++;
                left <<= 1;
            }
            /* check for enough space */ used += 1 << curr;
            if (type === LENS$1 && used > ENOUGH_LENS$1 || type === DISTS$1 && used > ENOUGH_DISTS$1) return 1;
            /* point entry in root table to sub-table */ low = huff & mask;
            /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/ table[low] = root << 24 | curr << 16 | next - table_index | 0;
        }
    }
    /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */ if (huff !== 0) //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = len - drop << 24 | 4194304;
    /* set return parameters */ //opts.table_index += used;
    opts.bits = root;
    return 0;
};
var inftrees = inflate_table;
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
const CODES = 0;
const LENS = 1;
const DISTS = 2;
/* Public constants ==========================================================*/ /* ===========================================================================*/ const { Z_FINISH: Z_FINISH$1, Z_BLOCK, Z_TREES, Z_OK: Z_OK$1, Z_STREAM_END: Z_STREAM_END$1, Z_NEED_DICT: Z_NEED_DICT$1, Z_STREAM_ERROR: Z_STREAM_ERROR$1, Z_DATA_ERROR: Z_DATA_ERROR$1, Z_MEM_ERROR: Z_MEM_ERROR$1, Z_BUF_ERROR, Z_DEFLATED } = constants$2;
/* STATES ====================================================================*/ /* ===========================================================================*/ const HEAD = 16180; /* i: waiting for magic header */ 
const FLAGS = 16181; /* i: waiting for method and flags (gzip) */ 
const TIME = 16182; /* i: waiting for modification time (gzip) */ 
const OS = 16183; /* i: waiting for extra flags and operating system (gzip) */ 
const EXLEN = 16184; /* i: waiting for extra length (gzip) */ 
const EXTRA = 16185; /* i: waiting for extra bytes (gzip) */ 
const NAME = 16186; /* i: waiting for end of file name (gzip) */ 
const COMMENT = 16187; /* i: waiting for end of comment (gzip) */ 
const HCRC = 16188; /* i: waiting for header crc (gzip) */ 
const DICTID = 16189; /* i: waiting for dictionary check value */ 
const DICT = 16190; /* waiting for inflateSetDictionary() call */ 
const TYPE = 16191; /* i: waiting for type bits, including last-flag bit */ 
const TYPEDO = 16192; /* i: same, but skip check to exit inflate on new block */ 
const STORED = 16193; /* i: waiting for stored size (length and complement) */ 
const COPY_ = 16194; /* i/o: same as COPY below, but only first time in */ 
const COPY = 16195; /* i/o: waiting for input or output to copy stored block */ 
const TABLE = 16196; /* i: waiting for dynamic block table lengths */ 
const LENLENS = 16197; /* i: waiting for code length code lengths */ 
const CODELENS = 16198; /* i: waiting for length/lit and distance code lengths */ 
const LEN_ = 16199; /* i: same as LEN below, but only first time in */ 
const LEN = 16200; /* i: waiting for length/lit/eob code */ 
const LENEXT = 16201; /* i: waiting for length extra bits */ 
const DIST = 16202; /* i: waiting for distance code */ 
const DISTEXT = 16203; /* i: waiting for distance extra bits */ 
const MATCH = 16204; /* o: waiting for output space to copy string */ 
const LIT = 16205; /* o: waiting for output space to write literal */ 
const CHECK = 16206; /* i: waiting for 32-bit check value */ 
const LENGTH = 16207; /* i: waiting for 32-bit length (gzip) */ 
const DONE = 16208; /* finished check, done -- remain here until reset */ 
const BAD = 16209; /* got a data error -- remain here until reset */ 
const MEM = 16210; /* got an inflate() memory error -- remain here until reset */ 
const SYNC = 16211; /* looking for synchronization bytes to restart inflate() */ 
/* ===========================================================================*/ const ENOUGH_LENS = 852;
const ENOUGH_DISTS = 592;
//const ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);
const MAX_WBITS = 15;
/* 32K LZ77 window */ const DEF_WBITS = MAX_WBITS;
const zswap32 = (q)=>{
    return (q >>> 24 & 0xff) + (q >>> 8 & 0xff00) + ((q & 0xff00) << 8) + ((q & 0xff) << 24);
};
function InflateState() {
    this.strm = null; /* pointer back to this zlib stream */ 
    this.mode = 0; /* current inflate mode */ 
    this.last = false; /* true if processing last block */ 
    this.wrap = 0; /* bit 0 true for zlib, bit 1 true for gzip,
                                 bit 2 true to validate check value */ 
    this.havedict = false; /* true if dictionary provided */ 
    this.flags = 0; /* gzip header method and flags (0 if zlib), or
                                 -1 if raw or no header yet */ 
    this.dmax = 0; /* zlib header max distance (INFLATE_STRICT) */ 
    this.check = 0; /* protected copy of check value */ 
    this.total = 0; /* protected copy of output count */ 
    // TODO: may be {}
    this.head = null; /* where to save gzip header information */ 
    /* sliding window */ this.wbits = 0; /* log base 2 of requested window size */ 
    this.wsize = 0; /* window size or zero if not using window */ 
    this.whave = 0; /* valid bytes in the window */ 
    this.wnext = 0; /* window write index */ 
    this.window = null; /* allocated sliding window, if needed */ 
    /* bit accumulator */ this.hold = 0; /* input bit accumulator */ 
    this.bits = 0; /* number of bits in "in" */ 
    /* for string and stored block copying */ this.length = 0; /* literal or length of data to copy */ 
    this.offset = 0; /* distance back to copy string from */ 
    /* for table and code decoding */ this.extra = 0; /* extra bits needed */ 
    /* fixed and dynamic code tables */ this.lencode = null; /* starting table for length/literal codes */ 
    this.distcode = null; /* starting table for distance codes */ 
    this.lenbits = 0; /* index bits for lencode */ 
    this.distbits = 0; /* index bits for distcode */ 
    /* dynamic table building */ this.ncode = 0; /* number of code length code lengths */ 
    this.nlen = 0; /* number of length code lengths */ 
    this.ndist = 0; /* number of distance code lengths */ 
    this.have = 0; /* number of code lengths in lens[] */ 
    this.next = null; /* next available space in codes[] */ 
    this.lens = new Uint16Array(320); /* temporary storage for code lengths */ 
    this.work = new Uint16Array(288); /* work area for code table building */ 
    /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */ //this.codes = new Int32Array(ENOUGH);       /* space for code tables */
    this.lendyn = null; /* dynamic table for length/literal codes (JS specific) */ 
    this.distdyn = null; /* dynamic table for distance codes (JS specific) */ 
    this.sane = 0; /* if false, allow invalid distance too far */ 
    this.back = 0; /* bits back of last unprocessed length/lit */ 
    this.was = 0; /* initial length of match */ 
}
const inflateStateCheck = (strm)=>{
    if (!strm) return 1;
    const state = strm.state;
    if (!state || state.strm !== strm || state.mode < HEAD || state.mode > SYNC) return 1;
    return 0;
};
const inflateResetKeep = (strm)=>{
    if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
    const state = strm.state;
    strm.total_in = strm.total_out = state.total = 0;
    strm.msg = ""; /*Z_NULL*/ 
    if (state.wrap) strm.adler = state.wrap & 1;
    state.mode = HEAD;
    state.last = 0;
    state.havedict = 0;
    state.flags = -1;
    state.dmax = 32768;
    state.head = null /*Z_NULL*/ ;
    state.hold = 0;
    state.bits = 0;
    //state.lencode = state.distcode = state.next = state.codes;
    state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
    state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);
    state.sane = 1;
    state.back = -1;
    //Tracev((stderr, "inflate: reset\n"));
    return Z_OK$1;
};
const inflateReset = (strm)=>{
    if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
    const state = strm.state;
    state.wsize = 0;
    state.whave = 0;
    state.wnext = 0;
    return inflateResetKeep(strm);
};
const inflateReset2 = (strm, windowBits)=>{
    let wrap;
    /* get the state */ if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
    const state = strm.state;
    /* extract wrap request from windowBits parameter */ if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
    } else {
        wrap = (windowBits >> 4) + 5;
        if (windowBits < 48) windowBits &= 15;
    }
    /* set number of window bits, free window if different */ if (windowBits && (windowBits < 8 || windowBits > 15)) return Z_STREAM_ERROR$1;
    if (state.window !== null && state.wbits !== windowBits) state.window = null;
    /* update state and reset the rest of it */ state.wrap = wrap;
    state.wbits = windowBits;
    return inflateReset(strm);
};
const inflateInit2 = (strm, windowBits)=>{
    if (!strm) return Z_STREAM_ERROR$1;
    //strm.msg = Z_NULL;                 /* in case we return an error */
    const state = new InflateState();
    //if (state === Z_NULL) return Z_MEM_ERROR;
    //Tracev((stderr, "inflate: allocated\n"));
    strm.state = state;
    state.strm = strm;
    state.window = null /*Z_NULL*/ ;
    state.mode = HEAD; /* to pass state test in inflateReset2() */ 
    const ret = inflateReset2(strm, windowBits);
    if (ret !== Z_OK$1) strm.state = null /*Z_NULL*/ ;
    return ret;
};
const inflateInit = (strm)=>{
    return inflateInit2(strm, DEF_WBITS);
};
/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */ let virgin = true;
let lenfix, distfix; // We have no pointers in JS, so keep tables separate
const fixedtables = (state)=>{
    /* build fixed huffman tables if first call (may not be thread safe) */ if (virgin) {
        lenfix = new Int32Array(512);
        distfix = new Int32Array(32);
        /* literal/length table */ let sym = 0;
        while(sym < 144)state.lens[sym++] = 8;
        while(sym < 256)state.lens[sym++] = 9;
        while(sym < 280)state.lens[sym++] = 7;
        while(sym < 288)state.lens[sym++] = 8;
        inftrees(LENS, state.lens, 0, 288, lenfix, 0, state.work, {
            bits: 9
        });
        /* distance table */ sym = 0;
        while(sym < 32)state.lens[sym++] = 5;
        inftrees(DISTS, state.lens, 0, 32, distfix, 0, state.work, {
            bits: 5
        });
        /* do this just once */ virgin = false;
    }
    state.lencode = lenfix;
    state.lenbits = 9;
    state.distcode = distfix;
    state.distbits = 5;
};
/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */ const updatewindow = (strm, src, end, copy)=>{
    let dist;
    const state = strm.state;
    /* if it hasn't been done already, allocate space for the window */ if (state.window === null) {
        state.wsize = 1 << state.wbits;
        state.wnext = 0;
        state.whave = 0;
        state.window = new Uint8Array(state.wsize);
    }
    /* copy state->wsize or less output bytes into the circular window */ if (copy >= state.wsize) {
        state.window.set(src.subarray(end - state.wsize, end), 0);
        state.wnext = 0;
        state.whave = state.wsize;
    } else {
        dist = state.wsize - state.wnext;
        if (dist > copy) dist = copy;
        //zmemcpy(state->window + state->wnext, end - copy, dist);
        state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
        copy -= dist;
        if (copy) {
            //zmemcpy(state->window, end - copy, copy);
            state.window.set(src.subarray(end - copy, end), 0);
            state.wnext = copy;
            state.whave = state.wsize;
        } else {
            state.wnext += dist;
            if (state.wnext === state.wsize) state.wnext = 0;
            if (state.whave < state.wsize) state.whave += dist;
        }
    }
    return 0;
};
const inflate$2 = (strm, flush)=>{
    let state;
    let input, output; // input/output buffers
    let next; /* next input INDEX */ 
    let put; /* next output INDEX */ 
    let have, left; /* available input and output */ 
    let hold; /* bit buffer */ 
    let bits; /* bits in bit buffer */ 
    let _in, _out; /* save starting available input and output */ 
    let copy; /* number of stored or match bytes to copy */ 
    let from; /* where to copy match bytes from */ 
    let from_source;
    let here = 0; /* current decoding table entry */ 
    let here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
    //let last;                   /* parent table entry */
    let last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
    let len; /* length to copy for repeats, bits to drop */ 
    let ret; /* return code */ 
    const hbuf = new Uint8Array(4); /* buffer for gzip header crc calculation */ 
    let opts;
    let n; // temporary variable for NEED_BITS
    const order = /* permutation of code lengths */ new Uint8Array([
        16,
        17,
        18,
        0,
        8,
        7,
        9,
        6,
        10,
        5,
        11,
        4,
        12,
        3,
        13,
        2,
        14,
        1,
        15
    ]);
    if (inflateStateCheck(strm) || !strm.output || !strm.input && strm.avail_in !== 0) return Z_STREAM_ERROR$1;
    state = strm.state;
    if (state.mode === TYPE) state.mode = TYPEDO;
     /* skip check */ 
    //--- LOAD() ---
    put = strm.next_out;
    output = strm.output;
    left = strm.avail_out;
    next = strm.next_in;
    input = strm.input;
    have = strm.avail_in;
    hold = state.hold;
    bits = state.bits;
    //---
    _in = have;
    _out = left;
    ret = Z_OK$1;
    inf_leave: for(;;)switch(state.mode){
        case HEAD:
            if (state.wrap === 0) {
                state.mode = TYPEDO;
                break;
            }
            //=== NEEDBITS(16);
            while(bits < 16){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if (state.wrap & 2 && hold === 0x8b1f) {
                if (state.wbits === 0) state.wbits = 15;
                state.check = 0 /*crc32(0L, Z_NULL, 0)*/ ;
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32_1(state.check, hbuf, 2, 0);
                //===//
                //=== INITBITS();
                hold = 0;
                bits = 0;
                //===//
                state.mode = FLAGS;
                break;
            }
            if (state.head) state.head.done = false;
            if (!(state.wrap & 1) || /* check if zlib header allowed */ (((hold & 0xff) << 8) + (hold >> 8)) % 31) {
                strm.msg = "incorrect header check";
                state.mode = BAD;
                break;
            }
            if ((hold & 0x0f) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
            }
            //--- DROPBITS(4) ---//
            hold >>>= 4;
            bits -= 4;
            //---//
            len = (hold & 0x0f) + 8;
            if (state.wbits === 0) state.wbits = len;
            if (len > 15 || len > state.wbits) {
                strm.msg = "invalid window size";
                state.mode = BAD;
                break;
            }
            // !!! pako patch. Force use `options.windowBits` if passed.
            // Required to always use max window size by default.
            state.dmax = 1 << state.wbits;
            //state.dmax = 1 << len;
            state.flags = 0; /* indicate zlib header */ 
            //Tracev((stderr, "inflate:   zlib header ok\n"));
            strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/ ;
            state.mode = hold & 0x200 ? DICTID : TYPE;
            //=== INITBITS();
            hold = 0;
            bits = 0;
            break;
        case FLAGS:
            //=== NEEDBITS(16); */
            while(bits < 16){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            state.flags = hold;
            if ((state.flags & 0xff) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
            }
            if (state.flags & 0xe000) {
                strm.msg = "unknown header flags set";
                state.mode = BAD;
                break;
            }
            if (state.head) state.head.text = hold >> 8 & 1;
            if (state.flags & 0x0200 && state.wrap & 4) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32_1(state.check, hbuf, 2, 0);
            //===//
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = TIME;
        /* falls through */ case TIME:
            //=== NEEDBITS(32); */
            while(bits < 32){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if (state.head) state.head.time = hold;
            if (state.flags & 0x0200 && state.wrap & 4) {
                //=== CRC4(state.check, hold)
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                hbuf[2] = hold >>> 16 & 0xff;
                hbuf[3] = hold >>> 24 & 0xff;
                state.check = crc32_1(state.check, hbuf, 4, 0);
            //===
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = OS;
        /* falls through */ case OS:
            //=== NEEDBITS(16); */
            while(bits < 16){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if (state.head) {
                state.head.xflags = hold & 0xff;
                state.head.os = hold >> 8;
            }
            if (state.flags & 0x0200 && state.wrap & 4) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32_1(state.check, hbuf, 2, 0);
            //===//
            }
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = EXLEN;
        /* falls through */ case EXLEN:
            if (state.flags & 0x0400) {
                //=== NEEDBITS(16); */
                while(bits < 16){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.length = hold;
                if (state.head) state.head.extra_len = hold;
                if (state.flags & 0x0200 && state.wrap & 4) {
                    //=== CRC2(state.check, hold);
                    hbuf[0] = hold & 0xff;
                    hbuf[1] = hold >>> 8 & 0xff;
                    state.check = crc32_1(state.check, hbuf, 2, 0);
                //===//
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            } else if (state.head) state.head.extra = null /*Z_NULL*/ ;
            state.mode = EXTRA;
        /* falls through */ case EXTRA:
            if (state.flags & 0x0400) {
                copy = state.length;
                if (copy > have) copy = have;
                if (copy) {
                    if (state.head) {
                        len = state.head.extra_len - state.length;
                        if (!state.head.extra) // Use untyped array for more convenient processing later
                        state.head.extra = new Uint8Array(state.head.extra_len);
                        state.head.extra.set(input.subarray(next, // extra field is limited to 65536 bytes
                        // - no need for additional size check
                        next + copy), /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/ len);
                    //zmemcpy(state.head.extra + len, next,
                    //        len + copy > state.head.extra_max ?
                    //        state.head.extra_max - len : copy);
                    }
                    if (state.flags & 0x0200 && state.wrap & 4) state.check = crc32_1(state.check, input, copy, next);
                    have -= copy;
                    next += copy;
                    state.length -= copy;
                }
                if (state.length) break inf_leave;
            }
            state.length = 0;
            state.mode = NAME;
        /* falls through */ case NAME:
            if (state.flags & 0x0800) {
                if (have === 0) break inf_leave;
                copy = 0;
                do {
                    // TODO: 2 or 1 bytes?
                    len = input[next + copy++];
                    /* use constant limit because in js we should not preallocate memory */ if (state.head && len && state.length < 65536 /*state.head.name_max*/ ) state.head.name += String.fromCharCode(len);
                }while (len && copy < have);
                if (state.flags & 0x0200 && state.wrap & 4) state.check = crc32_1(state.check, input, copy, next);
                have -= copy;
                next += copy;
                if (len) break inf_leave;
            } else if (state.head) state.head.name = null;
            state.length = 0;
            state.mode = COMMENT;
        /* falls through */ case COMMENT:
            if (state.flags & 0x1000) {
                if (have === 0) break inf_leave;
                copy = 0;
                do {
                    len = input[next + copy++];
                    /* use constant limit because in js we should not preallocate memory */ if (state.head && len && state.length < 65536 /*state.head.comm_max*/ ) state.head.comment += String.fromCharCode(len);
                }while (len && copy < have);
                if (state.flags & 0x0200 && state.wrap & 4) state.check = crc32_1(state.check, input, copy, next);
                have -= copy;
                next += copy;
                if (len) break inf_leave;
            } else if (state.head) state.head.comment = null;
            state.mode = HCRC;
        /* falls through */ case HCRC:
            if (state.flags & 0x0200) {
                //=== NEEDBITS(16); */
                while(bits < 16){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                if (state.wrap & 4 && hold !== (state.check & 0xffff)) {
                    strm.msg = "header crc mismatch";
                    state.mode = BAD;
                    break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            }
            if (state.head) {
                state.head.hcrc = state.flags >> 9 & 1;
                state.head.done = true;
            }
            strm.adler = state.check = 0;
            state.mode = TYPE;
            break;
        case DICTID:
            //=== NEEDBITS(32); */
            while(bits < 32){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            strm.adler = state.check = zswap32(hold);
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = DICT;
        /* falls through */ case DICT:
            if (state.havedict === 0) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                //---
                return Z_NEED_DICT$1;
            }
            strm.adler = state.check = 1 /*adler32(0L, Z_NULL, 0)*/ ;
            state.mode = TYPE;
        /* falls through */ case TYPE:
            if (flush === Z_BLOCK || flush === Z_TREES) break inf_leave;
        /* falls through */ case TYPEDO:
            if (state.last) {
                //--- BYTEBITS() ---//
                hold >>>= bits & 7;
                bits -= bits & 7;
                //---//
                state.mode = CHECK;
                break;
            }
            //=== NEEDBITS(3); */
            while(bits < 3){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            state.last = hold & 0x01 /*BITS(1)*/ ;
            //--- DROPBITS(1) ---//
            hold >>>= 1;
            bits -= 1;
            //---//
            switch(hold & 0x03){
                case 0:
                    /* stored block */ //Tracev((stderr, "inflate:     stored block%s\n",
                    //        state.last ? " (last)" : ""));
                    state.mode = STORED;
                    break;
                case 1:
                    /* fixed block */ fixedtables(state);
                    //Tracev((stderr, "inflate:     fixed codes block%s\n",
                    //        state.last ? " (last)" : ""));
                    state.mode = LEN_; /* decode codes */ 
                    if (flush === Z_TREES) {
                        //--- DROPBITS(2) ---//
                        hold >>>= 2;
                        bits -= 2;
                        break inf_leave;
                    }
                    break;
                case 2:
                    /* dynamic block */ //Tracev((stderr, "inflate:     dynamic codes block%s\n",
                    //        state.last ? " (last)" : ""));
                    state.mode = TABLE;
                    break;
                case 3:
                    strm.msg = "invalid block type";
                    state.mode = BAD;
            }
            //--- DROPBITS(2) ---//
            hold >>>= 2;
            bits -= 2;
            break;
        case STORED:
            //--- BYTEBITS() ---// /* go to byte boundary */
            hold >>>= bits & 7;
            bits -= bits & 7;
            //---//
            //=== NEEDBITS(32); */
            while(bits < 32){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            if ((hold & 0xffff) !== (hold >>> 16 ^ 0xffff)) {
                strm.msg = "invalid stored block lengths";
                state.mode = BAD;
                break;
            }
            state.length = hold & 0xffff;
            //Tracev((stderr, "inflate:       stored length %u\n",
            //        state.length));
            //=== INITBITS();
            hold = 0;
            bits = 0;
            //===//
            state.mode = COPY_;
            if (flush === Z_TREES) break inf_leave;
        /* falls through */ case COPY_:
            state.mode = COPY;
        /* falls through */ case COPY:
            copy = state.length;
            if (copy) {
                if (copy > have) copy = have;
                if (copy > left) copy = left;
                if (copy === 0) break inf_leave;
                //--- zmemcpy(put, next, copy); ---
                output.set(input.subarray(next, next + copy), put);
                //---//
                have -= copy;
                next += copy;
                left -= copy;
                put += copy;
                state.length -= copy;
                break;
            }
            //Tracev((stderr, "inflate:       stored end\n"));
            state.mode = TYPE;
            break;
        case TABLE:
            //=== NEEDBITS(14); */
            while(bits < 14){
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            }
            //===//
            state.nlen = (hold & 0x1f) + 257;
            //--- DROPBITS(5) ---//
            hold >>>= 5;
            bits -= 5;
            //---//
            state.ndist = (hold & 0x1f) + 1;
            //--- DROPBITS(5) ---//
            hold >>>= 5;
            bits -= 5;
            //---//
            state.ncode = (hold & 0x0f) + 4;
            //--- DROPBITS(4) ---//
            hold >>>= 4;
            bits -= 4;
            //---//
            //#ifndef PKZIP_BUG_WORKAROUND
            if (state.nlen > 286 || state.ndist > 30) {
                strm.msg = "too many length or distance symbols";
                state.mode = BAD;
                break;
            }
            //#endif
            //Tracev((stderr, "inflate:       table sizes ok\n"));
            state.have = 0;
            state.mode = LENLENS;
        /* falls through */ case LENLENS:
            while(state.have < state.ncode){
                //=== NEEDBITS(3);
                while(bits < 3){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.lens[order[state.have++]] = hold & 0x07; //BITS(3);
                //--- DROPBITS(3) ---//
                hold >>>= 3;
                bits -= 3;
            //---//
            }
            while(state.have < 19)state.lens[order[state.have++]] = 0;
            // We have separate tables & no pointers. 2 commented lines below not needed.
            //state.next = state.codes;
            //state.lencode = state.next;
            // Switch to use dynamic table
            state.lencode = state.lendyn;
            state.lenbits = 7;
            opts = {
                bits: state.lenbits
            };
            ret = inftrees(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
            state.lenbits = opts.bits;
            if (ret) {
                strm.msg = "invalid code lengths set";
                state.mode = BAD;
                break;
            }
            //Tracev((stderr, "inflate:       code lengths ok\n"));
            state.have = 0;
            state.mode = CODELENS;
        /* falls through */ case CODELENS:
            while(state.have < state.nlen + state.ndist){
                for(;;){
                    here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/ 
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 0xff;
                    here_val = here & 0xffff;
                    if (here_bits <= bits) break;
                    //--- PULLBYTE() ---//
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                //---//
                }
                if (here_val < 16) {
                    //--- DROPBITS(here.bits) ---//
                    hold >>>= here_bits;
                    bits -= here_bits;
                    //---//
                    state.lens[state.have++] = here_val;
                } else {
                    if (here_val === 16) {
                        //=== NEEDBITS(here.bits + 2);
                        n = here_bits + 2;
                        while(bits < n){
                            if (have === 0) break inf_leave;
                            have--;
                            hold += input[next++] << bits;
                            bits += 8;
                        }
                        //===//
                        //--- DROPBITS(here.bits) ---//
                        hold >>>= here_bits;
                        bits -= here_bits;
                        //---//
                        if (state.have === 0) {
                            strm.msg = "invalid bit length repeat";
                            state.mode = BAD;
                            break;
                        }
                        len = state.lens[state.have - 1];
                        copy = 3 + (hold & 0x03); //BITS(2);
                        //--- DROPBITS(2) ---//
                        hold >>>= 2;
                        bits -= 2;
                    //---//
                    } else if (here_val === 17) {
                        //=== NEEDBITS(here.bits + 3);
                        n = here_bits + 3;
                        while(bits < n){
                            if (have === 0) break inf_leave;
                            have--;
                            hold += input[next++] << bits;
                            bits += 8;
                        }
                        //===//
                        //--- DROPBITS(here.bits) ---//
                        hold >>>= here_bits;
                        bits -= here_bits;
                        //---//
                        len = 0;
                        copy = 3 + (hold & 0x07); //BITS(3);
                        //--- DROPBITS(3) ---//
                        hold >>>= 3;
                        bits -= 3;
                    //---//
                    } else {
                        //=== NEEDBITS(here.bits + 7);
                        n = here_bits + 7;
                        while(bits < n){
                            if (have === 0) break inf_leave;
                            have--;
                            hold += input[next++] << bits;
                            bits += 8;
                        }
                        //===//
                        //--- DROPBITS(here.bits) ---//
                        hold >>>= here_bits;
                        bits -= here_bits;
                        //---//
                        len = 0;
                        copy = 11 + (hold & 0x7f); //BITS(7);
                        //--- DROPBITS(7) ---//
                        hold >>>= 7;
                        bits -= 7;
                    //---//
                    }
                    if (state.have + copy > state.nlen + state.ndist) {
                        strm.msg = "invalid bit length repeat";
                        state.mode = BAD;
                        break;
                    }
                    while(copy--)state.lens[state.have++] = len;
                }
            }
            /* handle error breaks in while */ if (state.mode === BAD) break;
            /* check for end-of-block code (better have one) */ if (state.lens[256] === 0) {
                strm.msg = "invalid code -- missing end-of-block";
                state.mode = BAD;
                break;
            }
            /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */ state.lenbits = 9;
            opts = {
                bits: state.lenbits
            };
            ret = inftrees(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
            // We have separate tables & no pointers. 2 commented lines below not needed.
            // state.next_index = opts.table_index;
            state.lenbits = opts.bits;
            // state.lencode = state.next;
            if (ret) {
                strm.msg = "invalid literal/lengths set";
                state.mode = BAD;
                break;
            }
            state.distbits = 6;
            //state.distcode.copy(state.codes);
            // Switch to use dynamic table
            state.distcode = state.distdyn;
            opts = {
                bits: state.distbits
            };
            ret = inftrees(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
            // We have separate tables & no pointers. 2 commented lines below not needed.
            // state.next_index = opts.table_index;
            state.distbits = opts.bits;
            // state.distcode = state.next;
            if (ret) {
                strm.msg = "invalid distances set";
                state.mode = BAD;
                break;
            }
            //Tracev((stderr, 'inflate:       codes ok\n'));
            state.mode = LEN_;
            if (flush === Z_TREES) break inf_leave;
        /* falls through */ case LEN_:
            state.mode = LEN;
        /* falls through */ case LEN:
            if (have >= 6 && left >= 258) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                //---
                inffast(strm, _out);
                //--- LOAD() ---
                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state.hold;
                bits = state.bits;
                //---
                if (state.mode === TYPE) state.back = -1;
                break;
            }
            state.back = 0;
            for(;;){
                here = state.lencode[hold & (1 << state.lenbits) - 1]; /*BITS(state.lenbits)*/ 
                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;
                if (here_bits <= bits) break;
                //--- PULLBYTE() ---//
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            //---//
            }
            if (here_op && (here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for(;;){
                    here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 0xff;
                    here_val = here & 0xffff;
                    if (last_bits + here_bits <= bits) break;
                    //--- PULLBYTE() ---//
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                //---//
                }
                //--- DROPBITS(last.bits) ---//
                hold >>>= last_bits;
                bits -= last_bits;
                //---//
                state.back += last_bits;
            }
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.back += here_bits;
            state.length = here_val;
            if (here_op === 0) {
                //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
                //        "inflate:         literal '%c'\n" :
                //        "inflate:         literal 0x%02x\n", here.val));
                state.mode = LIT;
                break;
            }
            if (here_op & 32) {
                //Tracevv((stderr, "inflate:         end of block\n"));
                state.back = -1;
                state.mode = TYPE;
                break;
            }
            if (here_op & 64) {
                strm.msg = "invalid literal/length code";
                state.mode = BAD;
                break;
            }
            state.extra = here_op & 15;
            state.mode = LENEXT;
        /* falls through */ case LENEXT:
            if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;
                while(bits < n){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.length += hold & (1 << state.extra) - 1 /*BITS(state.extra)*/ ;
                //--- DROPBITS(state.extra) ---//
                hold >>>= state.extra;
                bits -= state.extra;
                //---//
                state.back += state.extra;
            }
            //Tracevv((stderr, "inflate:         length %u\n", state.length));
            state.was = state.length;
            state.mode = DIST;
        /* falls through */ case DIST:
            for(;;){
                here = state.distcode[hold & (1 << state.distbits) - 1]; /*BITS(state.distbits)*/ 
                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;
                if (here_bits <= bits) break;
                //--- PULLBYTE() ---//
                if (have === 0) break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
            //---//
            }
            if ((here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for(;;){
                    here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                    here_bits = here >>> 24;
                    here_op = here >>> 16 & 0xff;
                    here_val = here & 0xffff;
                    if (last_bits + here_bits <= bits) break;
                    //--- PULLBYTE() ---//
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                //---//
                }
                //--- DROPBITS(last.bits) ---//
                hold >>>= last_bits;
                bits -= last_bits;
                //---//
                state.back += last_bits;
            }
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.back += here_bits;
            if (here_op & 64) {
                strm.msg = "invalid distance code";
                state.mode = BAD;
                break;
            }
            state.offset = here_val;
            state.extra = here_op & 15;
            state.mode = DISTEXT;
        /* falls through */ case DISTEXT:
            if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;
                while(bits < n){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                state.offset += hold & (1 << state.extra) - 1 /*BITS(state.extra)*/ ;
                //--- DROPBITS(state.extra) ---//
                hold >>>= state.extra;
                bits -= state.extra;
                //---//
                state.back += state.extra;
            }
            //#ifdef INFLATE_STRICT
            if (state.offset > state.dmax) {
                strm.msg = "invalid distance too far back";
                state.mode = BAD;
                break;
            }
            //#endif
            //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
            state.mode = MATCH;
        /* falls through */ case MATCH:
            if (left === 0) break inf_leave;
            copy = _out - left;
            if (state.offset > copy) {
                copy = state.offset - copy;
                if (copy > state.whave) {
                    if (state.sane) {
                        strm.msg = "invalid distance too far back";
                        state.mode = BAD;
                        break;
                    }
                }
                if (copy > state.wnext) {
                    copy -= state.wnext;
                    from = state.wsize - copy;
                } else from = state.wnext - copy;
                if (copy > state.length) copy = state.length;
                from_source = state.window;
            } else {
                from_source = output;
                from = put - state.offset;
                copy = state.length;
            }
            if (copy > left) copy = left;
            left -= copy;
            state.length -= copy;
            do output[put++] = from_source[from++];
            while (--copy);
            if (state.length === 0) state.mode = LEN;
            break;
        case LIT:
            if (left === 0) break inf_leave;
            output[put++] = state.length;
            left--;
            state.mode = LEN;
            break;
        case CHECK:
            if (state.wrap) {
                //=== NEEDBITS(32);
                while(bits < 32){
                    if (have === 0) break inf_leave;
                    have--;
                    // Use '|' instead of '+' to make sure that result is signed
                    hold |= input[next++] << bits;
                    bits += 8;
                }
                //===//
                _out -= left;
                strm.total_out += _out;
                state.total += _out;
                if (state.wrap & 4 && _out) strm.adler = state.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/ state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out);
                _out = left;
                // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
                if (state.wrap & 4 && (state.flags ? hold : zswap32(hold)) !== state.check) {
                    strm.msg = "incorrect data check";
                    state.mode = BAD;
                    break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            //Tracev((stderr, "inflate:   check matches trailer\n"));
            }
            state.mode = LENGTH;
        /* falls through */ case LENGTH:
            if (state.wrap && state.flags) {
                //=== NEEDBITS(32);
                while(bits < 32){
                    if (have === 0) break inf_leave;
                    have--;
                    hold += input[next++] << bits;
                    bits += 8;
                }
                //===//
                if (state.wrap & 4 && hold !== (state.total & 0xffffffff)) {
                    strm.msg = "incorrect length check";
                    state.mode = BAD;
                    break;
                }
                //=== INITBITS();
                hold = 0;
                bits = 0;
            //===//
            //Tracev((stderr, "inflate:   length matches trailer\n"));
            }
            state.mode = DONE;
        /* falls through */ case DONE:
            ret = Z_STREAM_END$1;
            break inf_leave;
        case BAD:
            ret = Z_DATA_ERROR$1;
            break inf_leave;
        case MEM:
            return Z_MEM_ERROR$1;
        case SYNC:
        /* falls through */ default:
            return Z_STREAM_ERROR$1;
    }
    // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"
    /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */ //--- RESTORE() ---
    strm.next_out = put;
    strm.avail_out = left;
    strm.next_in = next;
    strm.avail_in = have;
    state.hold = hold;
    state.bits = bits;
    //---
    if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH$1)) updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out);
    _in -= strm.avail_in;
    _out -= strm.avail_out;
    strm.total_in += _in;
    strm.total_out += _out;
    state.total += _out;
    if (state.wrap & 4 && _out) strm.adler = state.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/ state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out);
    strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
    if ((_in === 0 && _out === 0 || flush === Z_FINISH$1) && ret === Z_OK$1) ret = Z_BUF_ERROR;
    return ret;
};
const inflateEnd = (strm)=>{
    if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
    let state = strm.state;
    if (state.window) state.window = null;
    strm.state = null;
    return Z_OK$1;
};
const inflateGetHeader = (strm, head)=>{
    /* check state */ if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
    const state = strm.state;
    if ((state.wrap & 2) === 0) return Z_STREAM_ERROR$1;
    /* save header structure */ state.head = head;
    head.done = false;
    return Z_OK$1;
};
const inflateSetDictionary = (strm, dictionary)=>{
    const dictLength = dictionary.length;
    let state;
    let dictid;
    let ret;
    /* check state */ if (inflateStateCheck(strm)) return Z_STREAM_ERROR$1;
    state = strm.state;
    if (state.wrap !== 0 && state.mode !== DICT) return Z_STREAM_ERROR$1;
    /* check for correct dictionary identifier */ if (state.mode === DICT) {
        dictid = 1; /* adler32(0, null, 0)*/ 
        /* dictid = adler32(dictid, dictionary, dictLength); */ dictid = adler32_1(dictid, dictionary, dictLength, 0);
        if (dictid !== state.check) return Z_DATA_ERROR$1;
    }
    /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */ ret = updatewindow(strm, dictionary, dictLength, dictLength);
    if (ret) {
        state.mode = MEM;
        return Z_MEM_ERROR$1;
    }
    state.havedict = 1;
    // Tracev((stderr, "inflate:   dictionary set\n"));
    return Z_OK$1;
};
var inflateReset_1 = inflateReset;
var inflateReset2_1 = inflateReset2;
var inflateResetKeep_1 = inflateResetKeep;
var inflateInit_1 = inflateInit;
var inflateInit2_1 = inflateInit2;
var inflate_2$1 = inflate$2;
var inflateEnd_1 = inflateEnd;
var inflateGetHeader_1 = inflateGetHeader;
var inflateSetDictionary_1 = inflateSetDictionary;
var inflateInfo = "pako inflate (from Nodeca project)";
/* Not implemented
module.exports.inflateCodesUsed = inflateCodesUsed;
module.exports.inflateCopy = inflateCopy;
module.exports.inflateGetDictionary = inflateGetDictionary;
module.exports.inflateMark = inflateMark;
module.exports.inflatePrime = inflatePrime;
module.exports.inflateSync = inflateSync;
module.exports.inflateSyncPoint = inflateSyncPoint;
module.exports.inflateUndermine = inflateUndermine;
module.exports.inflateValidate = inflateValidate;
*/ var inflate_1$2 = {
    inflateReset: inflateReset_1,
    inflateReset2: inflateReset2_1,
    inflateResetKeep: inflateResetKeep_1,
    inflateInit: inflateInit_1,
    inflateInit2: inflateInit2_1,
    inflate: inflate_2$1,
    inflateEnd: inflateEnd_1,
    inflateGetHeader: inflateGetHeader_1,
    inflateSetDictionary: inflateSetDictionary_1,
    inflateInfo: inflateInfo
};
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.
function GZheader() {
    /* true if compressed data believed to be text */ this.text = 0;
    /* modification time */ this.time = 0;
    /* extra flags (not used when writing a gzip file) */ this.xflags = 0;
    /* operating system */ this.os = 0;
    /* pointer to extra field or Z_NULL if none */ this.extra = null;
    /* extra field length (valid if extra != Z_NULL) */ this.extra_len = 0; // Actually, we don't need it in JS,
    // but leave for few code modifications
    //
    // Setup limits is not necessary because in js we should not preallocate memory
    // for inflate use constant limit in 65536 bytes
    //
    /* space at extra (only when reading header) */ // this.extra_max  = 0;
    /* pointer to zero-terminated file name or Z_NULL */ this.name = "";
    /* space at name (only when reading header) */ // this.name_max   = 0;
    /* pointer to zero-terminated comment or Z_NULL */ this.comment = "";
    /* space at comment (only when reading header) */ // this.comm_max   = 0;
    /* true if there was or will be a header crc */ this.hcrc = 0;
    /* true when done reading gzip header (not used when writing a gzip file) */ this.done = false;
}
var gzheader = GZheader;
const toString = Object.prototype.toString;
/* Public constants ==========================================================*/ /* ===========================================================================*/ const { Z_NO_FLUSH, Z_FINISH, Z_OK, Z_STREAM_END, Z_NEED_DICT, Z_STREAM_ERROR, Z_DATA_ERROR, Z_MEM_ERROR } = constants$2;
/* ===========================================================================*/ /**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/ /* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/ /**
 * Inflate.result -> Uint8Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
 **/ /**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/ /**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/ /**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 * const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/ function Inflate$1(options) {
    this.options = common.assign({
        chunkSize: 65536,
        windowBits: 15,
        to: ""
    }, options || {});
    const opt = this.options;
    // Force window size for `raw` data, if not set directly,
    // because we have no header for autodetect.
    if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
        opt.windowBits = -opt.windowBits;
        if (opt.windowBits === 0) opt.windowBits = -15;
    }
    // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
    if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) opt.windowBits += 32;
    // Gzip header has no info about windows size, we can do autodetect only
    // for deflate. So, if window size not set, force it to max when gzip possible
    if (opt.windowBits > 15 && opt.windowBits < 48) // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    {
        if ((opt.windowBits & 15) === 0) opt.windowBits |= 15;
    }
    this.err = 0; // error code, if happens (0 = Z_OK)
    this.msg = ""; // error message
    this.ended = false; // used to avoid multiple onEnd() calls
    this.chunks = []; // chunks of compressed data
    this.strm = new zstream();
    this.strm.avail_out = 0;
    let status = inflate_1$2.inflateInit2(this.strm, opt.windowBits);
    if (status !== Z_OK) throw new Error(messages[status]);
    this.header = new gzheader();
    inflate_1$2.inflateGetHeader(this.strm, this.header);
    // Setup dictionary
    if (opt.dictionary) {
        // Convert data if needed
        if (typeof opt.dictionary === "string") opt.dictionary = strings.string2buf(opt.dictionary);
        else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") opt.dictionary = new Uint8Array(opt.dictionary);
        if (opt.raw) {
            status = inflate_1$2.inflateSetDictionary(this.strm, opt.dictionary);
            if (status !== Z_OK) throw new Error(messages[status]);
        }
    }
}
/**
 * Inflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer): input data
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
 *   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
 *   `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. If end of stream detected,
 * [[Inflate#onEnd]] will be called.
 *
 * `flush_mode` is not needed for normal operation, because end of stream
 * detected automatically. You may try to use it for advanced things, but
 * this functionality was not tested.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/ Inflate$1.prototype.push = function(data, flush_mode) {
    const strm = this.strm;
    const chunkSize = this.options.chunkSize;
    const dictionary = this.options.dictionary;
    let status, _flush_mode, last_avail_out;
    if (this.ended) return false;
    if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
    else _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;
    // Convert data if needed
    if (toString.call(data) === "[object ArrayBuffer]") strm.input = new Uint8Array(data);
    else strm.input = data;
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    for(;;){
        if (strm.avail_out === 0) {
            strm.output = new Uint8Array(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
        }
        status = inflate_1$2.inflate(strm, _flush_mode);
        if (status === Z_NEED_DICT && dictionary) {
            status = inflate_1$2.inflateSetDictionary(strm, dictionary);
            if (status === Z_OK) status = inflate_1$2.inflate(strm, _flush_mode);
            else if (status === Z_DATA_ERROR) // Replace code with more verbose
            status = Z_NEED_DICT;
        }
        // Skip snyc markers if more data follows and not raw mode
        while(strm.avail_in > 0 && status === Z_STREAM_END && strm.state.wrap > 0 && data[strm.next_in] !== 0){
            inflate_1$2.inflateReset(strm);
            status = inflate_1$2.inflate(strm, _flush_mode);
        }
        switch(status){
            case Z_STREAM_ERROR:
            case Z_DATA_ERROR:
            case Z_NEED_DICT:
            case Z_MEM_ERROR:
                this.onEnd(status);
                this.ended = true;
                return false;
        }
        // Remember real `avail_out` value, because we may patch out buffer content
        // to align utf8 strings boundaries.
        last_avail_out = strm.avail_out;
        if (strm.next_out) {
            if (strm.avail_out === 0 || status === Z_STREAM_END) {
                if (this.options.to === "string") {
                    let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
                    let tail = strm.next_out - next_out_utf8;
                    let utf8str = strings.buf2string(strm.output, next_out_utf8);
                    // move tail & realign counters
                    strm.next_out = tail;
                    strm.avail_out = chunkSize - tail;
                    if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);
                    this.onData(utf8str);
                } else this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
            }
        }
        // Must repeat iteration if out buffer is full
        if (status === Z_OK && last_avail_out === 0) continue;
        // Finalize if end of stream reached.
        if (status === Z_STREAM_END) {
            status = inflate_1$2.inflateEnd(this.strm);
            this.onEnd(status);
            this.ended = true;
            return true;
        }
        if (strm.avail_in === 0) break;
    }
    return true;
};
/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|String): output data. When string output requested,
 *   each chunk will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/ Inflate$1.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
};
/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/ Inflate$1.prototype.onEnd = function(status) {
    // On success - join
    if (status === Z_OK) {
        if (this.options.to === "string") this.result = this.chunks.join("");
        else this.result = common.flattenChunks(this.chunks);
    }
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
};
/**
 * inflate(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako');
 * const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
 * let output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err) {
 *   console.log(err);
 * }
 * ```
 **/ function inflate$1(input, options) {
    const inflator = new Inflate$1(options);
    inflator.push(input);
    // That will never happens, if you don't cheat with options :)
    if (inflator.err) throw inflator.msg || messages[inflator.err];
    return inflator.result;
}
/**
 * inflateRaw(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/ function inflateRaw$1(input, options) {
    options = options || {};
    options.raw = true;
    return inflate$1(input, options);
}
/**
 * ungzip(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/ var Inflate_1$1 = Inflate$1;
var inflate_2 = inflate$1;
var inflateRaw_1$1 = inflateRaw$1;
var ungzip$1 = inflate$1;
var constants = constants$2;
var inflate_1$1 = {
    Inflate: Inflate_1$1,
    inflate: inflate_2,
    inflateRaw: inflateRaw_1$1,
    ungzip: ungzip$1,
    constants: constants
};
const { Deflate, deflate, deflateRaw, gzip } = deflate_1$1;
const { Inflate, inflate, inflateRaw, ungzip } = inflate_1$1;
var Deflate_1 = Deflate;
var deflate_1 = deflate;
var deflateRaw_1 = deflateRaw;
var gzip_1 = gzip;
var Inflate_1 = Inflate;
var inflate_1 = inflate;
var inflateRaw_1 = inflateRaw;
var ungzip_1 = ungzip;
var constants_1 = constants$2;
var pako = {
    Deflate: Deflate_1,
    deflate: deflate_1,
    deflateRaw: deflateRaw_1,
    gzip: gzip_1,
    Inflate: Inflate_1,
    inflate: inflate_1,
    inflateRaw: inflateRaw_1,
    ungzip: ungzip_1,
    constants: constants_1
};

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
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"4Wc5b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GEOJSON_URL", ()=>GEOJSON_URL);
const GEOJSON_URL = "https://raw.githubusercontent.com/abhay1704/geojson/main/geocountries.geojson%20(2).gz";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fWIrw":[function(require,module,exports) {
module.exports = JSON.parse('{"AFG":"Afghanistan","ALB":"Albania","DZA":"Algeria","AND":"Andorra","AGO":"Angola","AIA":"Anguilla","ATA":"Antarctica","ATG":"Antigua and Barbuda","ARG":"Argentina","ARM":"Armenia","ABW":"Aruba","AUS":"Australia","AUT":"Austria","AZE":"Azerbaijan","BHS":"Bahamas","BHR":"Bahrain","BGD":"Bangladesh","BRB":"Barbados","BLR":"Belarus","BEL":"Belgium","BLZ":"Belize","BEN":"Benin","BMU":"Bermuda","BTN":"Bhutan","BOL":"Bolivia","BES":"Bonaire Sint Eustatius and Saba","BIH":"Bosnia and Herzegovina","BWA":"Botswana","BRA":"Brazil","VGB":"British Virgin Islands","BRN":"Brunei","BGR":"Bulgaria","BFA":"Burkina Faso","BDI":"Burundi","KHM":"Cambodia","CMR":"Cameroon","CAN":"Canada","CPV":"Cape Verde","CAF":"Central African Republic","TCD":"Chad","CHL":"Chile","CHN":"China","CXR":"Christmas Island","COL":"Colombia","COM":"Comoros","COG":"Congo","COK":"Cook Islands","CRI":"Costa Rica","CIV":"Cote d\'Ivoire","HRV":"Croatia","CUB":"Cuba","CUW":"Curacao","CYP":"Cyprus","CZE":"Czechia","COD":"Democratic Republic of Congo","DNK":"Denmark","DJI":"Djibouti","DMA":"Dominica","DOM":"Dominican Republic","TLS":"East Timor","ECU":"Ecuador","EGY":"Egypt","SLV":"El Salvador","GNQ":"Equatorial Guinea","ERI":"Eritrea","EST":"Estonia","SWZ":"Eswatini","ETH":"Ethiopia","FRO":"Faroe Islands","FJI":"Fiji","FIN":"Finland","FRA":"France","PYF":"French Polynesia","GAB":"Gabon","GMB":"Gambia","GEO":"Georgia","DEU":"Germany","GHA":"Ghana","GRC":"Greece","GRL":"Greenland","GRD":"Grenada","GTM":"Guatemala","GIN":"Guinea","GNB":"Guinea-Bissau","GUY":"Guyana","HTI":"Haiti","HND":"Honduras","HKG":"Hong Kong","HUN":"Hungary","ISL":"Iceland","IND":"India","IDN":"Indonesia","IRN":"Iran","IRQ":"Iraq","IRL":"Ireland","ISR":"Israel","ITA":"Italy","JAM":"Jamaica","JPN":"Japan","JOR":"Jordan","KAZ":"Kazakhstan","KEN":"Kenya","KIR":"Kiribati","OWID_KOS":"Kosovo","KWT":"Kuwait","KGZ":"Kyrgyzstan","LAO":"Laos","LVA":"Latvia","LBN":"Lebanon","LSO":"Lesotho","LBR":"Liberia","LBY":"Libya","LIE":"Liechtenstein","LTU":"Lithuania","LUX":"Luxembourg","MAC":"Macao","MDG":"Madagascar","MWI":"Malawi","MYS":"Malaysia","MDV":"Maldives","MLI":"Mali","MLT":"Malta","MHL":"Marshall Islands","MRT":"Mauritania","MUS":"Mauritius","MEX":"Mexico","FSM":"Micronesia (country)","MDA":"Moldova","MNG":"Mongolia","MNE":"Montenegro","MSR":"Montserrat","MAR":"Morocco","MOZ":"Mozambique","MMR":"Myanmar","NAM":"Namibia","NRU":"Nauru","NPL":"Nepal","NLD":"Netherlands","NCL":"New Caledonia","NZL":"New Zealand","NIC":"Nicaragua","NER":"Niger","NGA":"Nigeria","NIU":"Niue","PRK":"North Korea","MKD":"North Macedonia","NOR":"Norway","OMN":"Oman","PAK":"Pakistan","PLW":"Palau","PSE":"Palestine","PAN":"Panama","PNG":"Papua New Guinea","PRY":"Paraguay","PER":"Peru","PHL":"Philippines","POL":"Poland","PRT":"Portugal","QAT":"Qatar","ROU":"Romania","RUS":"Russia","RWA":"Rwanda","SHN":"Saint Helena","KNA":"Saint Kitts and Nevis","LCA":"Saint Lucia","SPM":"Saint Pierre and Miquelon","VCT":"Saint Vincent and the Grenadines","WSM":"Samoa","STP":"Sao Tome and Principe","SAU":"Saudi Arabia","SEN":"Senegal","SRB":"Serbia","SYC":"Seychelles","SLE":"Sierra Leone","SGP":"Singapore","SXM":"Sint Maarten (Dutch part)","SVK":"Slovakia","SVN":"Slovenia","SLB":"Solomon Islands","SOM":"Somalia","ZAF":"South Africa","KOR":"South Korea","SSD":"South Sudan","ESP":"Spain","LKA":"Sri Lanka","SDN":"Sudan","SUR":"Suriname","SWE":"Sweden","CHE":"Switzerland","SYR":"Syria","TWN":"Taiwan","TJK":"Tajikistan","TZA":"Tanzania","THA":"Thailand","TGO":"Togo","TON":"Tonga","TTO":"Trinidad and Tobago","TUN":"Tunisia","TUR":"Turkey","TKM":"Turkmenistan","TCA":"Turks and Caicos Islands","TUV":"Tuvalu","UGA":"Uganda","UKR":"Ukraine","ARE":"United Arab Emirates","GBR":"United Kingdom","USA":"United States","URY":"Uruguay","UZB":"Uzbekistan","VUT":"Vanuatu","VEN":"Venezuela","VNM":"Vietnam","WLF":"Wallis and Futuna","OWID_WRL":"World","YEM":"Yemen","ZMB":"Zambia","ZWE":"Zimbabwe"}');

},{}],"2GA9o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _imageErrorPng = require("../Image/image_error.png");
class ChoroplethView {
    #parentContainer = document.getElementById("graph");
    addMapRendorer(handler) {
        window.addEventListener("load", ()=>{
            const width = getComputedStyle(this.#parentContainer).width;
            const height = getComputedStyle(this.#parentContainer).height;
            handler(this.#parentContainer, height, width);
        });
    }
    rendorError(msg) {
        this.#parentContainer.innerHTML = "";
        const markup = `
    <div class="err">
      <img src="${_imageErrorPng}" alt="image" srcset="">
      <div class="err-msg">
        ${msg}
      </div>
    </div>
    `;
        this.#parentContainer.insertAdjacentHTML("beforeend", markup);
    }
    clear() {
        this.#parentContainer.innerHTML = "";
    }
    rendorSpinner() {
        this.#parentContainer.innerHTML = "";
        this.#parentContainer.insertAdjacentHTML("beforeend", ` <div id="spinner"> </div>`);
    }
    generateHoverMarkup(netEmmision, name, percapita, year) {
        return `<b>${name}</b> (${year}) <br><br>` + `Net CO<sub>2 &nbsp;</sub> :  ${netEmmision} Mt<br>` + (percapita ? `CO<sub>2</sub> PC  &nbsp;:  ${percapita} tonnes per capita<br>` : "") + `<extra></extra>`;
    }
}
exports.default = new ChoroplethView();

},{"../Image/image_error.png":"5Ks3N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Ks3N":[function(require,module,exports) {
module.exports = require("84accb00ecfa13f6").getBundleURL("f3nP6") + "image_error.d5c9a8cf.png" + "?" + Date.now();

},{"84accb00ecfa13f6":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"6J37z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class TimeScrollerView {
    #parentContainer = document.getElementById("time-scroll");
    #valueContainer = document.getElementById("show-value");
    #input = this.#parentContainer.querySelector("input");
    #graph = document.getElementById("graph");
    constructor(){
        this.addshowValue();
    }
    addshowValue() {
        this.#parentContainer.addEventListener("input", (e)=>{
            const value = +this.#input.value;
            const posX = Math.floor((value - 1970 - 1) * 90 / 53 + 5);
            this.#valueContainer.style.left = `calc(${posX}%)`;
            this.#valueContainer.innerText = value;
        });
    }
    addHandlerPloter(handler) {
        this.#parentContainer.addEventListener("change", (e)=>{
            e.preventDefault();
            const width = getComputedStyle(this.#graph).width;
            const height = getComputedStyle(this.#graph).height;
            const value = +this.#input.value;
            handler(this.#graph, height, width, "Accumulative", value);
        });
    }
}
exports.default = new TimeScrollerView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9cZS3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _imageErrorPng = require("../Image/image_error.png");
class BargraphView {
    #parentContainer = document.querySelector("#hover-info");
    #bargraph = document.querySelector("#bargraph");
    #countryName = this.#parentContainer.querySelector(".country-name");
    #closeGraph = this.#parentContainer.querySelector(".close-graph");
    constructor(){
        this.#closeGraph.addEventListener("click", ()=>{
            this.#parentContainer.classList.add("hidden");
        });
    }
    rendorSpinner() {
        this.#parentContainer.classList.remove("hidden");
        this.#bargraph.innerHTML = "";
        this.#bargraph.insertAdjacentHTML("beforeend", ` <div id="spinner"> </div>`);
    }
    rendorError(msg) {
        this.#bargraph.innerHTML = "";
        const markup = `
    <div class="err">
      <img src="${_imageErrorPng}" alt="image" srcset="">
      <div class="err-msg">
        ${msg}
      </div>
    </div>
    `;
        this.#bargraph.insertAdjacentHTML("beforeend", markup);
    }
    rendorGraph(countryData, plot, plotArgs) {
        this.#parentContainer.classList.remove("hidden");
        this.#countryName.innerHTML = countryData.name;
        this.#bargraph.innerHTML = "";
        plot.newPlot(this.#bargraph, ...plotArgs);
    }
}
exports.default = new BargraphView();

},{"../Image/image_error.png":"5Ks3N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aJxmJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class NavBarView {
    #parentContainer = document.getElementById("nav");
    #category = document.getElementById("categories");
    #emmisionType = document.getElementById("emmision-type");
    #selectedCategory = document.getElementById("selected-category");
    #timeScrollBtn = document.getElementById("time-btn");
    #timeScroll = document.getElementById("time-scroll");
    #dataSrc = document.querySelector(".data-src");
    // #dataSrcBtn = this.#dataSrc.querySelector(".logo");
    #links = this.#parentContainer.querySelectorAll(".nav-list-item");
    constructor(){
        window.addEventListener("load", ()=>{
            this.addTimeScrollerHandler();
            this.#addDataSrcToggler();
            this.#navlinks();
        });
    }
    #navlinks() {
        Array.from(this.#links).forEach((x, i, links)=>x.addEventListener("mouseover", (e)=>{
                links.forEach((element)=>{
                    element.style.opacity = 0.5;
                });
                links[i].style.opacity = 1;
            }));
        Array.from(this.#links).forEach((x, i, links)=>x.addEventListener("mouseout", (e)=>{
                links.forEach((element)=>{
                    element.style.opacity = 1;
                });
            }));
    }
    #addDataSrcToggler() {
        this.#dataSrc.addEventListener("click", ()=>{
            this.#dataSrc.classList.toggle("data-src--hide");
        });
    }
    navVisible() {
        this.#parentContainer.classList.remove("hidden");
    }
    addCategoryHandler(handler) {
        // Using Event delegation
        this.#category.addEventListener("click", (e)=>{
            const target = e.target.closest(".dropdown-content a");
            if (!target) return;
            // show selected category in navbar
            this.#category.querySelector(".dropdown-content--selected").classList.remove("dropdown-content--selected");
            target.classList.add("dropdown-content--selected");
            this.#selectedCategory.innerHTML = target.innerHTML;
            // handle category change in map
            const selectedCategory = target.dataset.category;
            console.log(selectedCategory);
            const container = document.getElementById("graph");
            const height = getComputedStyle(container).height;
            const width = getComputedStyle(container).width;
            handler(container, height, width, selectedCategory);
        });
    }
    addTimeScrollerHandler() {
        this.#timeScrollBtn.addEventListener("click", ()=>{
            this.#timeScroll.classList.toggle("time-scroll--hide");
            this.#timeScrollBtn.classList.toggle("time-btn--active");
            this.#dataSrc.classList.toggle("hidden");
        });
    }
}
exports.default = new NavBarView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7uCb0","1GgH0"], "1GgH0", "parcelRequire20e8")

//# sourceMappingURL=index.850bd9e5.js.map
