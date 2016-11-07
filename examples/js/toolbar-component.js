// toolbar-component v1.0.0 https://github.com/viewdir/component-boilerplate#readme
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.toolbarComponent = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IIIFComponents;
(function (IIIFComponents) {
    var ToolbarComponent = (function (_super) {
        __extends(ToolbarComponent, _super);
        function ToolbarComponent(options) {
            _super.call(this, options);
            this._init();
            this._resize();
        }
        ToolbarComponent.prototype.test = function () {
            this._emit(ToolbarComponent.Events.TEST, [1, 2, 'three']);
        };
        ToolbarComponent.prototype._init = function () {
            var success = _super.prototype._init.call(this);
            if (!success) {
                console.error("Component failed to initialise");
            }
            this._$element.append("I am an example component");
            return success;
        };
        ToolbarComponent.prototype._getDefaultOptions = function () {
            return {};
        };
        ToolbarComponent.prototype._resize = function () {
        };
        return ToolbarComponent;
    }(_Components.BaseComponent));
    IIIFComponents.ToolbarComponent = ToolbarComponent;
})(IIIFComponents || (IIIFComponents = {}));
var IIIFComponents;
(function (IIIFComponents) {
    var ToolbarComponent;
    (function (ToolbarComponent) {
        var Events = (function () {
            function Events() {
            }
            Events.TEST = 'test';
            return Events;
        }());
        ToolbarComponent.Events = Events;
    })(ToolbarComponent = IIIFComponents.ToolbarComponent || (IIIFComponents.ToolbarComponent = {}));
})(IIIFComponents || (IIIFComponents = {}));
(function (w) {
    if (!w.IIIFComponents) {
        w.IIIFComponents = IIIFComponents;
    }
    else {
        w.IIIFComponents.ToolbarComponent = IIIFComponents.ToolbarComponent;
    }
})(window);

},{}]},{},[1])(1)
});