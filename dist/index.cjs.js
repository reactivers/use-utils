'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var isBrowser = function () {
    return typeof window !== "undefined";
};
var emptyFunction = function () { };
var setIfNotEqual = function (variable, value) {
};
var tryJSONparse = function (obj) {
    try {
        return JSON.parse(obj);
    }
    catch (_a) {
        return obj;
    }
};
var tryJSONStringify = function (obj) {
    if (typeof obj === "string")
        return obj;
    try {
        return JSON.stringify(obj);
    }
    catch (_a) {
        return obj;
    }
};
var transform = function (value, actualRange, targetRange) {
    var minActualRange = actualRange[0], maxActualRange = actualRange[1];
    var minTargetRange = targetRange[0], maxTargetRange = targetRange[1];
    if (value >= maxActualRange)
        return maxTargetRange;
    if (value <= minActualRange)
        return minTargetRange;
    var tranformedValue = ((value - minActualRange) / (maxActualRange - minActualRange)) *
        (maxTargetRange - minTargetRange) +
        minTargetRange;
    return tranformedValue;
};
var memoComparer = function (prevProps, nextProps, props) {
    if (Object.keys(prevProps).length !== Object.keys(nextProps).length)
        return false;
    var isEqual = true;
    props.forEach(function (prop) {
        if (isEqual) {
            isEqual = prevProps[prop] === nextProps[prop];
        }
    });
    return isEqual;
};
var isPointInRect = function (point, rect, includeBorders) {
    if (includeBorders === void 0) { includeBorders = false; }
    var x = point.x, y = point.y;
    var top = rect.top, right = rect.right, bottom = rect.bottom, left = rect.left;
    if (top === bottom || right === left)
        return false;
    if (includeBorders)
        return x >= left && x <= right && y >= top && y <= bottom;
    return x > left && x < right && y > top && y < bottom;
};
var isInRange = function (range, num, includeFrom, includeTo) {
    if (includeFrom === void 0) { includeFrom = true; }
    if (includeTo === void 0) { includeTo = true; }
    var from = range[0], to = range[1];
    var checkFrom = includeFrom ? num >= from : num > from;
    var checkTo = includeTo ? num <= to : num < to;
    return checkFrom && checkTo;
};
var deepCompare = function (obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
};
var getIsWebkit = function () {
    var UA = navigator.userAgent;
    return (/\b(iPad|iPhone|iPod)\b/.test(UA) && /WebKit/.test(UA) && !/Edge/.test(UA) && !window.MSStream);
};
var isEqualJSON = function (json1, json2) {
    if (json1 === void 0) { json1 = {}; }
    if (json2 === void 0) { json2 = {}; }
    return JSON.stringify(json1) === JSON.stringify(json2);
};
var deepCopy = function (json) {
    if (json === void 0) { json = {}; }
    return JSON.parse(JSON.stringify(json));
};
var combineReducers = function (reducers) {
    return function (state, action) {
        if (state === void 0) { state = {}; }
        var newState = {};
        for (var key in reducers) {
            newState[key] = reducers[key](state[key], action);
        }
        return newState;
    };
};
var transformObj = function (obj) {
    return Object.keys(obj).reduce(function (acc, key) {
        if (key.indexOf('.') >= 0) {
            var _a = key.split('.'), parentKey = _a[0], childKey = _a[1];
            acc[parentKey] = acc[parentKey] || {};
            acc[parentKey][childKey] = obj[key];
        }
        else {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
};
var JSONToArray = function (json, key, valueKey) {
    if (json === void 0) { json = {}; }
    return Object.keys(json).map(function (_key) {
        var _a, _b;
        return (__assign(__assign({}, (valueKey ? (_a = {}, _a[valueKey] = json[_key], _a) : json[_key])), (_b = {}, _b[key] = _key, _b)));
    });
};
var EnumToArray = function (enums, valueKey, descriptionKey) {
    return Object.keys(enums).map(function (_key) {
        var _a;
        return (_a = {},
            _a[valueKey] = _key,
            _a[descriptionKey] = enums[_key],
            _a);
    });
};
var download = function (newBlob, type) {
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
    }
    var url = window.URL || window.webkitURL || window;
    var dataURL = url.createObjectURL(newBlob);
    downloadByDataURL(dataURL, type);
};
var downloadQRCodeById = function (id) {
    var QRCodeSVGElement = document.getElementById(id);
    downloadQRCodeBySVGElement(QRCodeSVGElement);
};
var downloadQRCodeBySVGElement = function (QRCodeSVGElement, type, size) {
    if (type === void 0) { type = 'png'; }
    var _width = size.width, _height = size.height;
    var width = _width || 300, height = _height || 300;
    var clonedQRCodeSVGElement = QRCodeSVGElement.cloneNode(true);
    var outerHTML = clonedQRCodeSVGElement.outerHTML;
    var blob = new Blob([outerHTML], { type: 'image/svg+xml;charset=utf-8' });
    var URL = window.URL || window.webkitURL || window;
    var blobURL = URL.createObjectURL(blob);
    if (type === "svg") {
        downloadByDataURL(blobURL, "svg");
        return;
    }
    var img = new Image();
    img.width = width;
    img.height = height;
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext('2d');
    img.onload = function () {
        // draw image in canvas starting left-0 , top - 0
        context.drawImage(img, 0, 0, width, height);
        var dataURL = canvas.toDataURL("image/png");
        //return;
        downloadByDataURL(dataURL, "png");
        document.body.removeChild(canvas);
    };
    img.src = blobURL;
};
var downloadByDataURL = function (dataURL, type) {
    var link = document.createElement('a');
    var n = dataURL.lastIndexOf('/');
    //debugger;
    var filname = dataURL.substring(n + 1, dataURL.length);
    link.href = dataURL;
    link.target = '_blank_';
    if (type) {
        link.download = filname + "." + type;
    }
    else {
        link.download = filname + ".jpg";
    }
    link.click();
    var URL = window.URL || window.webkitURL || window;
    setTimeout(function () {
        // For Firefox it is necessary to delay revoking the ObjectURL
        URL.revokeObjectURL(dataURL);
    }, 100);
};
var bytesToSize = function (bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0)
        return '0 Byte';
    var i = parseInt("" + Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
};
var sum = function (array) {
    if (array === void 0) { array = []; }
    if (!array.length)
        return 0;
    if (array.length === 1)
        return array[0];
    return array.reduce(function (i1, i2) { return i1 + i2; });
};
var ArrayToJSON = function (array, keyName, valueName) {
    var json = {};
    array.forEach(function (i) {
        json[i[keyName]] = valueName ? i[valueName] : i;
    });
    return json;
};
var isJSONEmpty = function (json) {
    if (json === void 0) { json = {}; }
    return !Object.keys(json).length;
};
var isArrayEmpty = function (array) {
    if (array === void 0) { array = []; }
    return !array.length;
};
var guid = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
var getAddressText = function (address) {
    var province = address.province, district = address.district;
    var provinceName = (province || {}).name;
    var districtName = (district || {}).name;
    return (provinceName || "") + " - " + (districtName || "");
};
var getUriFromImageObject = function (host, image) {
    if (image === void 0) { image = { base64Data: undefined, fileType: undefined, id: undefined }; }
    if (image.base64Data) {
        return "data:" + image.fileType + ";base64," + image.base64Data;
    }
    else if (image.id) {
        return host + "/attachments/" + image.id;
    }
    else {
        return undefined;
    }
};
var updateObjectByName = function (oldObject, name, value) {
    if (oldObject === void 0) { oldObject = {}; }
    var newObject = __assign({}, deepCopy(oldObject));
    newObject[name] = value;
    return transformObj(newObject);
};
var getFirstLetters = function (string) {
    if (string === void 0) { string = ""; }
    return string.split(" ").map(function (i) { return i[0]; }).join("");
};
var hashCode = function (str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
};
var generatedColorFromString = function (_i) {
    var i = hashCode(_i);
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();
    return "#" + "00000".substring(0, 6 - c.length) + c;
};
var destructArray = function (array) {
    if (array === void 0) { array = []; }
    var result = [];
    array.forEach(function (i) {
        result.push.apply(result, i);
    });
    return result;
};
var takeUndefinedAsTrue = function (parameter) {
    return parameter === undefined ? true : parameter;
};
var applicationJSONHeader = { "Content-Type": "application/json" };
var iFetch = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var url, _body, _a, stringify, onSuccess, onError, _b, responseContentType, _c, method, rest, body, httpResponse, _d, responseJson, responseBlob, responseFormData, responseText, responseArrayBuffer, error_1;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                url = payload.url, _body = payload.body, _a = payload.stringify, stringify = _a === void 0 ? true : _a, onSuccess = payload.onSuccess, onError = payload.onError, _b = payload.responseContentType, responseContentType = _b === void 0 ? "JSON" : _b, _c = payload.method, method = _c === void 0 ? "GET" : _c, rest = __rest(payload, ["url", "body", "stringify", "onSuccess", "onError", "responseContentType", "method"]);
                if (url === undefined) {
                    throw new Error("No URL Found in the request");
                }
                body = stringify ? JSON.stringify(_body) : _body;
                _e.label = 1;
            case 1:
                _e.trys.push([1, 15, , 16]);
                return [4 /*yield*/, fetch(url, __assign({ body: body,
                        method: method }, rest))];
            case 2:
                httpResponse = _e.sent();
                _d = responseContentType;
                switch (_d) {
                    case "JSON": return [3 /*break*/, 3];
                    case "BLOB": return [3 /*break*/, 5];
                    case "FORM-DATA": return [3 /*break*/, 7];
                    case "TEXT": return [3 /*break*/, 9];
                    case "ARRAY-BUFFER": return [3 /*break*/, 11];
                }
                return [3 /*break*/, 13];
            case 3: return [4 /*yield*/, httpResponse.json()];
            case 4:
                responseJson = _e.sent();
                onSuccess(responseJson);
                return [3 /*break*/, 14];
            case 5: return [4 /*yield*/, httpResponse.blob()];
            case 6:
                responseBlob = _e.sent();
                onSuccess(responseBlob);
                return [3 /*break*/, 14];
            case 7: return [4 /*yield*/, httpResponse.formData()];
            case 8:
                responseFormData = _e.sent();
                onSuccess(responseFormData);
                return [3 /*break*/, 14];
            case 9: return [4 /*yield*/, httpResponse.text()];
            case 10:
                responseText = _e.sent();
                onSuccess(responseText);
                return [3 /*break*/, 14];
            case 11: return [4 /*yield*/, httpResponse.arrayBuffer()];
            case 12:
                responseArrayBuffer = _e.sent();
                onSuccess(responseArrayBuffer);
                return [3 /*break*/, 14];
            case 13:
                onSuccess(httpResponse);
                _e.label = 14;
            case 14: return [2 /*return*/, httpResponse];
            case 15:
                error_1 = _e.sent();
                onError(error_1);
                return [3 /*break*/, 16];
            case 16: return [2 /*return*/];
        }
    });
}); };
var changeColor = function (color, amt) {
    var usePound = false;
    var col = color + "";
    if (col[0] === "#") {
        col = col.slice(1);
        usePound = true;
    }
    var num = parseInt(col, 16);
    var r = (num >> 16) + amt;
    if (r > 255) {
        r = 255;
    }
    else if (r < 0) {
        r = 0;
    }
    var b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) {
        b = 255;
    }
    else if (b < 0) {
        b = 0;
    }
    var g = (num & 0x0000FF) + amt;
    if (g > 255) {
        g = 255;
    }
    else if (g < 0) {
        g = 0;
    }
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};
var takeIf = function (condition, value, defaultValue) {
    if (defaultValue === void 0) { defaultValue = undefined; }
    if (condition) {
        return value;
    }
    else {
        return defaultValue;
    }
};
var spliceString = function (string, startCount, deleteCount) {
    return string.split("").splice(startCount, deleteCount).join("");
};
var isNullOrUndefined = function (item) {
    return item === null || item === undefined;
};
var coalasce = function (first, second) {
    if (isNullOrUndefined(first))
        return second;
    return first;
};
var numberShouldStartWithZero = function (number) {
    return parseInt(number) < 10 ? "0" + number : number;
};
var getTodayYear = function () {
    return new Date().getFullYear();
};
var getTodayMonth = function () {
    return new Date().getMonth() + 1;
};
var monthsNumberArray = Array(12).fill(0).map(function (_, index) { return ((index) % 12) + 1; });
var isArrayContains = function (array, value, key) {
    return !!array.filter(function (i) { return i[key] === value; }).length;
};
var JSONArrayIndexOf = function (array, value, key) {
    return array.map(function (i) { return i[key]; }).indexOf(value);
};
var cos = function (degree) {
    var value = Math.cos((degree * Math.PI) / 180);
    return parseFloat(value.toFixed(2));
};
var insertOrUpdateElementInArrayByKey = function (array, idKey, id, item) {
    var idKeys = array.map(function (i) { return i[idKey]; });
    var indexOfElement = idKeys.indexOf(id);
    if (indexOfElement > -1)
        array[indexOfElement] = item;
    else
        array.push(item);
    return array;
};
var deleteElementFromArrayByKey = function (array, idKey, id) {
    var idKeys = array.map(function (i) { return i[idKey]; });
    var indexOfElement = idKeys.indexOf(id);
    if (indexOfElement > -1)
        array.splice(indexOfElement, 1);
    return array;
};
var findLastIndex = function (array, predicate) {
    if (!array)
        return -1;
    var index = array.length - 1;
    if (!predicate)
        return index;
    for (var i = index; i > -1; i--) {
        if (predicate(array[i])) {
            return i;
        }
    }
    return -1;
};

var utils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isBrowser: isBrowser,
    emptyFunction: emptyFunction,
    setIfNotEqual: setIfNotEqual,
    tryJSONparse: tryJSONparse,
    tryJSONStringify: tryJSONStringify,
    transform: transform,
    memoComparer: memoComparer,
    isPointInRect: isPointInRect,
    isInRange: isInRange,
    deepCompare: deepCompare,
    getIsWebkit: getIsWebkit,
    isEqualJSON: isEqualJSON,
    deepCopy: deepCopy,
    combineReducers: combineReducers,
    transformObj: transformObj,
    JSONToArray: JSONToArray,
    EnumToArray: EnumToArray,
    download: download,
    downloadQRCodeById: downloadQRCodeById,
    downloadQRCodeBySVGElement: downloadQRCodeBySVGElement,
    downloadByDataURL: downloadByDataURL,
    bytesToSize: bytesToSize,
    sum: sum,
    ArrayToJSON: ArrayToJSON,
    isJSONEmpty: isJSONEmpty,
    isArrayEmpty: isArrayEmpty,
    guid: guid,
    getAddressText: getAddressText,
    getUriFromImageObject: getUriFromImageObject,
    updateObjectByName: updateObjectByName,
    getFirstLetters: getFirstLetters,
    hashCode: hashCode,
    generatedColorFromString: generatedColorFromString,
    destructArray: destructArray,
    takeUndefinedAsTrue: takeUndefinedAsTrue,
    applicationJSONHeader: applicationJSONHeader,
    iFetch: iFetch,
    changeColor: changeColor,
    takeIf: takeIf,
    spliceString: spliceString,
    isNullOrUndefined: isNullOrUndefined,
    coalasce: coalasce,
    numberShouldStartWithZero: numberShouldStartWithZero,
    getTodayYear: getTodayYear,
    getTodayMonth: getTodayMonth,
    monthsNumberArray: monthsNumberArray,
    isArrayContains: isArrayContains,
    JSONArrayIndexOf: JSONArrayIndexOf,
    cos: cos,
    insertOrUpdateElementInArrayByKey: insertOrUpdateElementInArrayByKey,
    deleteElementFromArrayByKey: deleteElementFromArrayByKey,
    findLastIndex: findLastIndex
});

var useUtils = function () {
    return utils;
};

exports.useUtils = useUtils;
