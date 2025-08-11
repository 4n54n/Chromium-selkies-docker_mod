(function() {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload")) return;
    for (const c of document.querySelectorAll('link[rel="modulepreload"]')) u(c);
    new MutationObserver(c => {
        for (const f of c)
            if (f.type === "childList")
                for (const g of f.addedNodes) g.tagName === "LINK" && g.rel === "modulepreload" && u(g)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(c) {
        const f = {};
        return c.integrity && (f.integrity = c.integrity), c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? f.credentials = "include" : c.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f
    }

    function u(c) {
        if (c.ep) return;
        c.ep = !0;
        const f = r(c);
        fetch(c.href, f)
    }
})();

function Nf(i) {
    return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i
}
var tf = {
        exports: {}
    },
    Ns = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e0;

function ob() {
    if (e0) return Ns;
    e0 = 1;
    var i = Symbol.for("react.transitional.element"),
        o = Symbol.for("react.fragment");

    function r(u, c, f) {
        var g = null;
        if (f !== void 0 && (g = "" + f), c.key !== void 0 && (g = "" + c.key), "key" in c) {
            f = {};
            for (var _ in c) _ !== "key" && (f[_] = c[_])
        } else f = c;
        return c = f.ref, {
            $$typeof: i,
            type: u,
            key: g,
            ref: c !== void 0 ? c : null,
            props: f
        }
    }
    return Ns.Fragment = o, Ns.jsx = r, Ns.jsxs = r, Ns
}
var t0;

function sb() {
    return t0 || (t0 = 1, tf.exports = ob()), tf.exports
}
var p = sb(),
    af = {
        exports: {}
    },
    ye = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var a0;

function rb() {
    if (a0) return ye;
    a0 = 1;
    var i = Symbol.for("react.transitional.element"),
        o = Symbol.for("react.portal"),
        r = Symbol.for("react.fragment"),
        u = Symbol.for("react.strict_mode"),
        c = Symbol.for("react.profiler"),
        f = Symbol.for("react.consumer"),
        g = Symbol.for("react.context"),
        _ = Symbol.for("react.forward_ref"),
        y = Symbol.for("react.suspense"),
        v = Symbol.for("react.memo"),
        S = Symbol.for("react.lazy"),
        m = Symbol.iterator;

    function A(w) {
        return w === null || typeof w != "object" ? null : (w = m && w[m] || w["@@iterator"], typeof w == "function" ? w : null)
    }
    var E = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        D = Object.assign,
        F = {};

    function R(w, I, ee) {
        this.props = w, this.context = I, this.refs = F, this.updater = ee || E
    }
    R.prototype.isReactComponent = {}, R.prototype.setState = function(w, I) {
        if (typeof w != "object" && typeof w != "function" && w != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, w, I, "setState")
    }, R.prototype.forceUpdate = function(w) {
        this.updater.enqueueForceUpdate(this, w, "forceUpdate")
    };

    function Q() {}
    Q.prototype = R.prototype;

    function q(w, I, ee) {
        this.props = w, this.context = I, this.refs = F, this.updater = ee || E
    }
    var K = q.prototype = new Q;
    K.constructor = q, D(K, R.prototype), K.isPureReactComponent = !0;
    var be = Array.isArray,
        ve = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        },
        Ue = Object.prototype.hasOwnProperty;

    function ie(w, I, ee, $, se, Ee) {
        return ee = Ee.ref, {
            $$typeof: i,
            type: w,
            key: I,
            ref: ee !== void 0 ? ee : null,
            props: Ee
        }
    }

    function me(w, I) {
        return ie(w.type, I, void 0, void 0, void 0, w.props)
    }

    function $e(w) {
        return typeof w == "object" && w !== null && w.$$typeof === i
    }

    function Ba(w) {
        var I = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + w.replace(/[=:]/g, function(ee) {
            return I[ee]
        })
    }
    var kt = /\/+/g;

    function Tt(w, I) {
        return typeof w == "object" && w !== null && w.key != null ? Ba("" + w.key) : I.toString(36)
    }

    function Na() {}

    function ei(w) {
        switch (w.status) {
            case "fulfilled":
                return w.value;
            case "rejected":
                throw w.reason;
            default:
                switch (typeof w.status == "string" ? w.then(Na, Na) : (w.status = "pending", w.then(function(I) {
                        w.status === "pending" && (w.status = "fulfilled", w.value = I)
                    }, function(I) {
                        w.status === "pending" && (w.status = "rejected", w.reason = I)
                    })), w.status) {
                    case "fulfilled":
                        return w.value;
                    case "rejected":
                        throw w.reason
                }
        }
        throw w
    }

    function ut(w, I, ee, $, se) {
        var Ee = typeof w;
        (Ee === "undefined" || Ee === "boolean") && (w = null);
        var ge = !1;
        if (w === null) ge = !0;
        else switch (Ee) {
            case "bigint":
            case "string":
            case "number":
                ge = !0;
                break;
            case "object":
                switch (w.$$typeof) {
                    case i:
                    case o:
                        ge = !0;
                        break;
                    case S:
                        return ge = w._init, ut(ge(w._payload), I, ee, $, se)
                }
        }
        if (ge) return se = se(w), ge = $ === "" ? "." + Tt(w, 0) : $, be(se) ? (ee = "", ge != null && (ee = ge.replace(kt, "$&/") + "/"), ut(se, I, ee, "", function(Qt) {
            return Qt
        })) : se != null && ($e(se) && (se = me(se, ee + (se.key == null || w && w.key === se.key ? "" : ("" + se.key).replace(kt, "$&/") + "/") + ge)), I.push(se)), 1;
        ge = 0;
        var Rt = $ === "" ? "." : $ + ":";
        if (be(w))
            for (var Ve = 0; Ve < w.length; Ve++) $ = w[Ve], Ee = Rt + Tt($, Ve), ge += ut($, I, ee, Ee, se);
        else if (Ve = A(w), typeof Ve == "function")
            for (w = Ve.call(w), Ve = 0; !($ = w.next()).done;) $ = $.value, Ee = Rt + Tt($, Ve++), ge += ut($, I, ee, Ee, se);
        else if (Ee === "object") {
            if (typeof w.then == "function") return ut(ei(w), I, ee, $, se);
            throw I = String(w), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ge
    }

    function X(w, I, ee) {
        if (w == null) return w;
        var $ = [],
            se = 0;
        return ut(w, $, "", "", function(Ee) {
            return I.call(ee, Ee, se++)
        }), $
    }

    function W(w) {
        if (w._status === -1) {
            var I = w._result;
            I = I(), I.then(function(ee) {
                (w._status === 0 || w._status === -1) && (w._status = 1, w._result = ee)
            }, function(ee) {
                (w._status === 0 || w._status === -1) && (w._status = 2, w._result = ee)
            }), w._status === -1 && (w._status = 0, w._result = I)
        }
        if (w._status === 1) return w._result.default;
        throw w._result
    }
    var re = typeof reportError == "function" ? reportError : function(w) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var I = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
                error: w
            });
            if (!window.dispatchEvent(I)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", w);
            return
        }
        console.error(w)
    };

    function Fe() {}
    return ye.Children = {
        map: X,
        forEach: function(w, I, ee) {
            X(w, function() {
                I.apply(this, arguments)
            }, ee)
        },
        count: function(w) {
            var I = 0;
            return X(w, function() {
                I++
            }), I
        },
        toArray: function(w) {
            return X(w, function(I) {
                return I
            }) || []
        },
        only: function(w) {
            if (!$e(w)) throw Error("React.Children.only expected to receive a single React element child.");
            return w
        }
    }, ye.Component = R, ye.Fragment = r, ye.Profiler = c, ye.PureComponent = q, ye.StrictMode = u, ye.Suspense = y, ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ve, ye.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(w) {
            return ve.H.useMemoCache(w)
        }
    }, ye.cache = function(w) {
        return function() {
            return w.apply(null, arguments)
        }
    }, ye.cloneElement = function(w, I, ee) {
        if (w == null) throw Error("The argument must be a React element, but you passed " + w + ".");
        var $ = D({}, w.props),
            se = w.key,
            Ee = void 0;
        if (I != null)
            for (ge in I.ref !== void 0 && (Ee = void 0), I.key !== void 0 && (se = "" + I.key), I) !Ue.call(I, ge) || ge === "key" || ge === "__self" || ge === "__source" || ge === "ref" && I.ref === void 0 || ($[ge] = I[ge]);
        var ge = arguments.length - 2;
        if (ge === 1) $.children = ee;
        else if (1 < ge) {
            for (var Rt = Array(ge), Ve = 0; Ve < ge; Ve++) Rt[Ve] = arguments[Ve + 2];
            $.children = Rt
        }
        return ie(w.type, se, void 0, void 0, Ee, $)
    }, ye.createContext = function(w) {
        return w = {
            $$typeof: g,
            _currentValue: w,
            _currentValue2: w,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, w.Provider = w, w.Consumer = {
            $$typeof: f,
            _context: w
        }, w
    }, ye.createElement = function(w, I, ee) {
        var $, se = {},
            Ee = null;
        if (I != null)
            for ($ in I.key !== void 0 && (Ee = "" + I.key), I) Ue.call(I, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (se[$] = I[$]);
        var ge = arguments.length - 2;
        if (ge === 1) se.children = ee;
        else if (1 < ge) {
            for (var Rt = Array(ge), Ve = 0; Ve < ge; Ve++) Rt[Ve] = arguments[Ve + 2];
            se.children = Rt
        }
        if (w && w.defaultProps)
            for ($ in ge = w.defaultProps, ge) se[$] === void 0 && (se[$] = ge[$]);
        return ie(w, Ee, void 0, void 0, null, se)
    }, ye.createRef = function() {
        return {
            current: null
        }
    }, ye.forwardRef = function(w) {
        return {
            $$typeof: _,
            render: w
        }
    }, ye.isValidElement = $e, ye.lazy = function(w) {
        return {
            $$typeof: S,
            _payload: {
                _status: -1,
                _result: w
            },
            _init: W
        }
    }, ye.memo = function(w, I) {
        return {
            $$typeof: v,
            type: w,
            compare: I === void 0 ? null : I
        }
    }, ye.startTransition = function(w) {
        var I = ve.T,
            ee = {};
        ve.T = ee;
        try {
            var $ = w(),
                se = ve.S;
            se !== null && se(ee, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(Fe, re)
        } catch (Ee) {
            re(Ee)
        } finally {
            ve.T = I
        }
    }, ye.unstable_useCacheRefresh = function() {
        return ve.H.useCacheRefresh()
    }, ye.use = function(w) {
        return ve.H.use(w)
    }, ye.useActionState = function(w, I, ee) {
        return ve.H.useActionState(w, I, ee)
    }, ye.useCallback = function(w, I) {
        return ve.H.useCallback(w, I)
    }, ye.useContext = function(w) {
        return ve.H.useContext(w)
    }, ye.useDebugValue = function() {}, ye.useDeferredValue = function(w, I) {
        return ve.H.useDeferredValue(w, I)
    }, ye.useEffect = function(w, I, ee) {
        var $ = ve.H;
        if (typeof ee == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return $.useEffect(w, I)
    }, ye.useId = function() {
        return ve.H.useId()
    }, ye.useImperativeHandle = function(w, I, ee) {
        return ve.H.useImperativeHandle(w, I, ee)
    }, ye.useInsertionEffect = function(w, I) {
        return ve.H.useInsertionEffect(w, I)
    }, ye.useLayoutEffect = function(w, I) {
        return ve.H.useLayoutEffect(w, I)
    }, ye.useMemo = function(w, I) {
        return ve.H.useMemo(w, I)
    }, ye.useOptimistic = function(w, I) {
        return ve.H.useOptimistic(w, I)
    }, ye.useReducer = function(w, I, ee) {
        return ve.H.useReducer(w, I, ee)
    }, ye.useRef = function(w) {
        return ve.H.useRef(w)
    }, ye.useState = function(w) {
        return ve.H.useState(w)
    }, ye.useSyncExternalStore = function(w, I, ee) {
        return ve.H.useSyncExternalStore(w, I, ee)
    }, ye.useTransition = function() {
        return ve.H.useTransition()
    }, ye.version = "19.1.1", ye
}
var i0;

function Of() {
    return i0 || (i0 = 1, af.exports = rb()), af.exports
}
var Y = Of();
const ub = Nf(Y);
var lf = {
        exports: {}
    },
    Os = {},
    nf = {
        exports: {}
    },
    of = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l0;

function cb() {
    return l0 || (l0 = 1, function(i) {
        function o(X, W) {
            var re = X.length;
            X.push(W);
            e: for (; 0 < re;) {
                var Fe = re - 1 >>> 1,
                    w = X[Fe];
                if (0 < c(w, W)) X[Fe] = W, X[re] = w, re = Fe;
                else break e
            }
        }

        function r(X) {
            return X.length === 0 ? null : X[0]
        }

        function u(X) {
            if (X.length === 0) return null;
            var W = X[0],
                re = X.pop();
            if (re !== W) {
                X[0] = re;
                e: for (var Fe = 0, w = X.length, I = w >>> 1; Fe < I;) {
                    var ee = 2 * (Fe + 1) - 1,
                        $ = X[ee],
                        se = ee + 1,
                        Ee = X[se];
                    if (0 > c($, re)) se < w && 0 > c(Ee, $) ? (X[Fe] = Ee, X[se] = re, Fe = se) : (X[Fe] = $, X[ee] = re, Fe = ee);
                    else if (se < w && 0 > c(Ee, re)) X[Fe] = Ee, X[se] = re, Fe = se;
                    else break e
                }
            }
            return W
        }

        function c(X, W) {
            var re = X.sortIndex - W.sortIndex;
            return re !== 0 ? re : X.id - W.id
        }
        if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            i.unstable_now = function() {
                return f.now()
            }
        } else {
            var g = Date,
                _ = g.now();
            i.unstable_now = function() {
                return g.now() - _
            }
        }
        var y = [],
            v = [],
            S = 1,
            m = null,
            A = 3,
            E = !1,
            D = !1,
            F = !1,
            R = !1,
            Q = typeof setTimeout == "function" ? setTimeout : null,
            q = typeof clearTimeout == "function" ? clearTimeout : null,
            K = typeof setImmediate < "u" ? setImmediate : null;

        function be(X) {
            for (var W = r(v); W !== null;) {
                if (W.callback === null) u(v);
                else if (W.startTime <= X) u(v), W.sortIndex = W.expirationTime, o(y, W);
                else break;
                W = r(v)
            }
        }

        function ve(X) {
            if (F = !1, be(X), !D)
                if (r(y) !== null) D = !0, Ue || (Ue = !0, Tt());
                else {
                    var W = r(v);
                    W !== null && ut(ve, W.startTime - X)
                }
        }
        var Ue = !1,
            ie = -1,
            me = 5,
            $e = -1;

        function Ba() {
            return R ? !0 : !(i.unstable_now() - $e < me)
        }

        function kt() {
            if (R = !1, Ue) {
                var X = i.unstable_now();
                $e = X;
                var W = !0;
                try {
                    e: {
                        D = !1,
                        F && (F = !1, q(ie), ie = -1),
                        E = !0;
                        var re = A;
                        try {
                            t: {
                                for (be(X), m = r(y); m !== null && !(m.expirationTime > X && Ba());) {
                                    var Fe = m.callback;
                                    if (typeof Fe == "function") {
                                        m.callback = null, A = m.priorityLevel;
                                        var w = Fe(m.expirationTime <= X);
                                        if (X = i.unstable_now(), typeof w == "function") {
                                            m.callback = w, be(X), W = !0;
                                            break t
                                        }
                                        m === r(y) && u(y), be(X)
                                    } else u(y);
                                    m = r(y)
                                }
                                if (m !== null) W = !0;
                                else {
                                    var I = r(v);
                                    I !== null && ut(ve, I.startTime - X), W = !1
                                }
                            }
                            break e
                        }
                        finally {
                            m = null, A = re, E = !1
                        }
                        W = void 0
                    }
                }
                finally {
                    W ? Tt() : Ue = !1
                }
            }
        }
        var Tt;
        if (typeof K == "function") Tt = function() {
            K(kt)
        };
        else if (typeof MessageChannel < "u") {
            var Na = new MessageChannel,
                ei = Na.port2;
            Na.port1.onmessage = kt, Tt = function() {
                ei.postMessage(null)
            }
        } else Tt = function() {
            Q(kt, 0)
        };

        function ut(X, W) {
            ie = Q(function() {
                X(i.unstable_now())
            }, W)
        }
        i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(X) {
            X.callback = null
        }, i.unstable_forceFrameRate = function(X) {
            0 > X || 125 < X ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : me = 0 < X ? Math.floor(1e3 / X) : 5
        }, i.unstable_getCurrentPriorityLevel = function() {
            return A
        }, i.unstable_next = function(X) {
            switch (A) {
                case 1:
                case 2:
                case 3:
                    var W = 3;
                    break;
                default:
                    W = A
            }
            var re = A;
            A = W;
            try {
                return X()
            } finally {
                A = re
            }
        }, i.unstable_requestPaint = function() {
            R = !0
        }, i.unstable_runWithPriority = function(X, W) {
            switch (X) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    X = 3
            }
            var re = A;
            A = X;
            try {
                return W()
            } finally {
                A = re
            }
        }, i.unstable_scheduleCallback = function(X, W, re) {
            var Fe = i.unstable_now();
            switch (typeof re == "object" && re !== null ? (re = re.delay, re = typeof re == "number" && 0 < re ? Fe + re : Fe) : re = Fe, X) {
                case 1:
                    var w = -1;
                    break;
                case 2:
                    w = 250;
                    break;
                case 5:
                    w = 1073741823;
                    break;
                case 4:
                    w = 1e4;
                    break;
                default:
                    w = 5e3
            }
            return w = re + w, X = {
                id: S++,
                callback: W,
                priorityLevel: X,
                startTime: re,
                expirationTime: w,
                sortIndex: -1
            }, re > Fe ? (X.sortIndex = re, o(v, X), r(y) === null && X === r(v) && (F ? (q(ie), ie = -1) : F = !0, ut(ve, re - Fe))) : (X.sortIndex = w, o(y, X), D || E || (D = !0, Ue || (Ue = !0, Tt()))), X
        }, i.unstable_shouldYield = Ba, i.unstable_wrapCallback = function(X) {
            var W = A;
            return function() {
                var re = A;
                A = W;
                try {
                    return X.apply(this, arguments)
                } finally {
                    A = re
                }
            }
        }
    }(of)), of
}
var n0;

function db() {
    return n0 || (n0 = 1, nf.exports = cb()), nf.exports
}
var sf = {
        exports: {}
    },
    Ht = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o0;

function fb() {
    if (o0) return Ht;
    o0 = 1;
    var i = Of();

    function o(y) {
        var v = "https://react.dev/errors/" + y;
        if (1 < arguments.length) {
            v += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var S = 2; S < arguments.length; S++) v += "&args[]=" + encodeURIComponent(arguments[S])
        }
        return "Minified React error #" + y + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function r() {}
    var u = {
            d: {
                f: r,
                r: function() {
                    throw Error(o(522))
                },
                D: r,
                C: r,
                L: r,
                m: r,
                X: r,
                S: r,
                M: r
            },
            p: 0,
            findDOMNode: null
        },
        c = Symbol.for("react.portal");

    function f(y, v, S) {
        var m = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: c,
            key: m == null ? null : "" + m,
            children: y,
            containerInfo: v,
            implementation: S
        }
    }
    var g = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function _(y, v) {
        if (y === "font") return "";
        if (typeof v == "string") return v === "use-credentials" ? v : ""
    }
    return Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, Ht.createPortal = function(y, v) {
        var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11) throw Error(o(299));
        return f(y, v, null, S)
    }, Ht.flushSync = function(y) {
        var v = g.T,
            S = u.p;
        try {
            if (g.T = null, u.p = 2, y) return y()
        } finally {
            g.T = v, u.p = S, u.d.f()
        }
    }, Ht.preconnect = function(y, v) {
        typeof y == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, u.d.C(y, v))
    }, Ht.prefetchDNS = function(y) {
        typeof y == "string" && u.d.D(y)
    }, Ht.preinit = function(y, v) {
        if (typeof y == "string" && v && typeof v.as == "string") {
            var S = v.as,
                m = _(S, v.crossOrigin),
                A = typeof v.integrity == "string" ? v.integrity : void 0,
                E = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
            S === "style" ? u.d.S(y, typeof v.precedence == "string" ? v.precedence : void 0, {
                crossOrigin: m,
                integrity: A,
                fetchPriority: E
            }) : S === "script" && u.d.X(y, {
                crossOrigin: m,
                integrity: A,
                fetchPriority: E,
                nonce: typeof v.nonce == "string" ? v.nonce : void 0
            })
        }
    }, Ht.preinitModule = function(y, v) {
        if (typeof y == "string")
            if (typeof v == "object" && v !== null) {
                if (v.as == null || v.as === "script") {
                    var S = _(v.as, v.crossOrigin);
                    u.d.M(y, {
                        crossOrigin: S,
                        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                        nonce: typeof v.nonce == "string" ? v.nonce : void 0
                    })
                }
            } else v == null && u.d.M(y)
    }, Ht.preload = function(y, v) {
        if (typeof y == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
            var S = v.as,
                m = _(S, v.crossOrigin);
            u.d.L(y, S, {
                crossOrigin: m,
                integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                nonce: typeof v.nonce == "string" ? v.nonce : void 0,
                type: typeof v.type == "string" ? v.type : void 0,
                fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
                referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
                imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
                imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
                media: typeof v.media == "string" ? v.media : void 0
            })
        }
    }, Ht.preloadModule = function(y, v) {
        if (typeof y == "string")
            if (v) {
                var S = _(v.as, v.crossOrigin);
                u.d.m(y, {
                    as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
                    crossOrigin: S,
                    integrity: typeof v.integrity == "string" ? v.integrity : void 0
                })
            } else u.d.m(y)
    }, Ht.requestFormReset = function(y) {
        u.d.r(y)
    }, Ht.unstable_batchedUpdates = function(y, v) {
        return y(v)
    }, Ht.useFormState = function(y, v, S) {
        return g.H.useFormState(y, v, S)
    }, Ht.useFormStatus = function() {
        return g.H.useHostTransitionStatus()
    }, Ht.version = "19.1.1", Ht
}
var s0;

function G0() {
    if (s0) return sf.exports;
    s0 = 1;

    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
        } catch (o) {
            console.error(o)
        }
    }
    return i(), sf.exports = fb(), sf.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r0;

function pb() {
    if (r0) return Os;
    r0 = 1;
    var i = db(),
        o = Of(),
        r = G0();

    function u(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function c(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function f(e) {
        var t = e,
            a = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? a : null
    }

    function g(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function _(e) {
        if (f(e) !== e) throw Error(u(188))
    }

    function y(e) {
        var t = e.alternate;
        if (!t) {
            if (t = f(e), t === null) throw Error(u(188));
            return t !== e ? null : e
        }
        for (var a = e, l = t;;) {
            var n = a.return;
            if (n === null) break;
            var s = n.alternate;
            if (s === null) {
                if (l = n.return, l !== null) {
                    a = l;
                    continue
                }
                break
            }
            if (n.child === s.child) {
                for (s = n.child; s;) {
                    if (s === a) return _(n), e;
                    if (s === l) return _(n), t;
                    s = s.sibling
                }
                throw Error(u(188))
            }
            if (a.return !== l.return) a = n, l = s;
            else {
                for (var d = !1, h = n.child; h;) {
                    if (h === a) {
                        d = !0, a = n, l = s;
                        break
                    }
                    if (h === l) {
                        d = !0, l = n, a = s;
                        break
                    }
                    h = h.sibling
                }
                if (!d) {
                    for (h = s.child; h;) {
                        if (h === a) {
                            d = !0, a = s, l = n;
                            break
                        }
                        if (h === l) {
                            d = !0, l = s, a = n;
                            break
                        }
                        h = h.sibling
                    }
                    if (!d) throw Error(u(189))
                }
            }
            if (a.alternate !== l) throw Error(u(190))
        }
        if (a.tag !== 3) throw Error(u(188));
        return a.stateNode.current === a ? e : t
    }

    function v(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null;) {
            if (t = v(e), t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var S = Object.assign,
        m = Symbol.for("react.element"),
        A = Symbol.for("react.transitional.element"),
        E = Symbol.for("react.portal"),
        D = Symbol.for("react.fragment"),
        F = Symbol.for("react.strict_mode"),
        R = Symbol.for("react.profiler"),
        Q = Symbol.for("react.provider"),
        q = Symbol.for("react.consumer"),
        K = Symbol.for("react.context"),
        be = Symbol.for("react.forward_ref"),
        ve = Symbol.for("react.suspense"),
        Ue = Symbol.for("react.suspense_list"),
        ie = Symbol.for("react.memo"),
        me = Symbol.for("react.lazy"),
        $e = Symbol.for("react.activity"),
        Ba = Symbol.for("react.memo_cache_sentinel"),
        kt = Symbol.iterator;

    function Tt(e) {
        return e === null || typeof e != "object" ? null : (e = kt && e[kt] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var Na = Symbol.for("react.client.reference");

    function ei(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.$$typeof === Na ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case D:
                return "Fragment";
            case R:
                return "Profiler";
            case F:
                return "StrictMode";
            case ve:
                return "Suspense";
            case Ue:
                return "SuspenseList";
            case $e:
                return "Activity"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case E:
                return "Portal";
            case K:
                return (e.displayName || "Context") + ".Provider";
            case q:
                return (e._context.displayName || "Context") + ".Consumer";
            case be:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case ie:
                return t = e.displayName || null, t !== null ? t : ei(e.type) || "Memo";
            case me:
                t = e._payload, e = e._init;
                try {
                    return ei(e(t))
                } catch {}
        }
        return null
    }
    var ut = Array.isArray,
        X = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        W = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        re = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        Fe = [],
        w = -1;

    function I(e) {
        return {
            current: e
        }
    }

    function ee(e) {
        0 > w || (e.current = Fe[w], Fe[w] = null, w--)
    }

    function $(e, t) {
        w++, Fe[w] = e.current, e.current = t
    }
    var se = I(null),
        Ee = I(null),
        ge = I(null),
        Rt = I(null);

    function Ve(e, t) {
        switch ($(ge, t), $(Ee, e), $(se, null), t.nodeType) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? Cg(e) : 0;
                break;
            default:
                if (e = t.tagName, t = t.namespaceURI) t = Cg(t), e = Lg(t, e);
                else switch (e) {
                    case "svg":
                        e = 1;
                        break;
                    case "math":
                        e = 2;
                        break;
                    default:
                        e = 0
                }
        }
        ee(se), $(se, e)
    }

    function Qt() {
        ee(se), ee(Ee), ee(ge)
    }

    function wo(e) {
        e.memoizedState !== null && $(Rt, e);
        var t = se.current,
            a = Lg(t, e.type);
        t !== a && ($(Ee, e), $(se, a))
    }

    function Oa(e) {
        Ee.current === e && (ee(se), ee(Ee)), Rt.current === e && (ee(Rt), Cs._currentValue = re)
    }
    var Ao = Object.prototype.hasOwnProperty,
        Mo = i.unstable_scheduleCallback,
        Eo = i.unstable_cancelCallback,
        Zs = i.unstable_shouldYield,
        on = i.unstable_requestPaint,
        la = i.unstable_now,
        sn = i.unstable_getCurrentPriorityLevel,
        Tl = i.unstable_ImmediatePriority,
        Ws = i.unstable_UserBlockingPriority,
        Fa = i.unstable_NormalPriority,
        zu = i.unstable_LowPriority,
        Js = i.unstable_IdlePriority,
        _l = i.log,
        rn = i.unstable_setDisableYieldValue,
        xl = null,
        _t = null;

    function Ka(e) {
        if (typeof _l == "function" && rn(e), _t && typeof _t.setStrictMode == "function") try {
            _t.setStrictMode(xl, e)
        } catch {}
    }
    var xt = Math.clz32 ? Math.clz32 : Hu,
        Pu = Math.log,
        un = Math.LN2;

    function Hu(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (Pu(e) / un | 0) | 0
    }
    var wl = 256,
        cn = 4194304;

    function Ra(e) {
        var t = e & 42;
        if (t !== 0) return t;
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
        }
    }

    function dn(e, t, a) {
        var l = e.pendingLanes;
        if (l === 0) return 0;
        var n = 0,
            s = e.suspendedLanes,
            d = e.pingedLanes;
        e = e.warmLanes;
        var h = l & 134217727;
        return h !== 0 ? (l = h & ~s, l !== 0 ? n = Ra(l) : (d &= h, d !== 0 ? n = Ra(d) : a || (a = h & ~e, a !== 0 && (n = Ra(a))))) : (h = l & ~s, h !== 0 ? n = Ra(h) : d !== 0 ? n = Ra(d) : a || (a = l & ~e, a !== 0 && (n = Ra(a)))), n === 0 ? 0 : t !== 0 && t !== n && (t & s) === 0 && (s = n & -n, a = t & -t, s >= a || s === 32 && (a & 4194048) !== 0) ? t : n
    }

    function ti(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }

    function ju(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function fn() {
        var e = wl;
        return wl <<= 1, (wl & 4194048) === 0 && (wl = 256), e
    }

    function er() {
        var e = cn;
        return cn <<= 1, (cn & 62914560) === 0 && (cn = 4194304), e
    }

    function Al(e) {
        for (var t = [], a = 0; 31 > a; a++) t.push(e);
        return t
    }

    function Ml(e, t) {
        e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
    }

    function Co(e, t, a, l, n, s) {
        var d = e.pendingLanes;
        e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
        var h = e.entanglements,
            x = e.expirationTimes,
            k = e.hiddenUpdates;
        for (a = d & ~a; 0 < a;) {
            var U = 31 - xt(a),
                G = 1 << U;
            h[U] = 0, x[U] = -1;
            var B = k[U];
            if (B !== null)
                for (k[U] = null, U = 0; U < B.length; U++) {
                    var N = B[U];
                    N !== null && (N.lane &= -536870913)
                }
            a &= ~G
        }
        l !== 0 && tr(e, l, 0), s !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(d & ~t))
    }

    function tr(e, t, a) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var l = 31 - xt(t);
        e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 4194090
    }

    function Lo(e, t) {
        var a = e.entangledLanes |= t;
        for (e = e.entanglements; a;) {
            var l = 31 - xt(a),
                n = 1 << l;
            n & t | e[l] & t && (e[l] |= t), a &= ~n
        }
    }

    function pn(e) {
        switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0
        }
        return e
    }

    function hn(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function ar() {
        var e = W.p;
        return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Qg(e.type))
    }

    function ko(e, t) {
        var a = W.p;
        try {
            return W.p = e, t()
        } finally {
            W.p = a
        }
    }
    var xa = Math.random().toString(36).slice(2),
        ct = "__reactFiber$" + xa,
        Dt = "__reactProps$" + xa,
        Xa = "__reactContainer$" + xa,
        gn = "__reactEvents$" + xa,
        Do = "__reactListeners$" + xa,
        ir = "__reactHandles$" + xa,
        lr = "__reactResources$" + xa,
        Ni = "__reactMarker$" + xa;

    function Bo(e) {
        delete e[ct], delete e[Dt], delete e[gn], delete e[Do], delete e[ir]
    }

    function ai(e) {
        var t = e[ct];
        if (t) return t;
        for (var a = e.parentNode; a;) {
            if (t = a[Xa] || a[ct]) {
                if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
                    for (e = Ng(e); e !== null;) {
                        if (a = e[ct]) return a;
                        e = Ng(e)
                    }
                return t
            }
            e = a, a = e.parentNode
        }
        return null
    }

    function Oi(e) {
        if (e = e[ct] || e[Xa]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e
        }
        return null
    }

    function Fi(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
        throw Error(u(33))
    }

    function Ki(e) {
        var t = e[lr];
        return t || (t = e[lr] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t
    }

    function at(e) {
        e[Ni] = !0
    }
    var nr = new Set,
        mn = {};

    function Ua(e, t) {
        Ri(e, t), Ri(e + "Capture", t)
    }

    function Ri(e, t) {
        for (mn[e] = t, e = 0; e < t.length; e++) nr.add(t[e])
    }
    var El = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        No = {},
        Cl = {};

    function or(e) {
        return Ao.call(Cl, e) ? !0 : Ao.call(No, e) ? !1 : El.test(e) ? Cl[e] = !0 : (No[e] = !0, !1)
    }

    function Xi(e, t, a) {
        if (or(t))
            if (a === null) e.removeAttribute(t);
            else {
                switch (typeof a) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var l = t.toLowerCase().slice(0, 5);
                        if (l !== "data-" && l !== "aria-") {
                            e.removeAttribute(t);
                            return
                        }
                }
                e.setAttribute(t, "" + a)
            }
    }

    function bn(e, t, a) {
        if (a === null) e.removeAttribute(t);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(t);
                    return
            }
            e.setAttribute(t, "" + a)
        }
    }

    function ha(e, t, a, l) {
        if (l === null) e.removeAttribute(a);
        else {
            switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(a);
                    return
            }
            e.setAttributeNS(t, a, "" + l)
        }
    }
    var Oo, Be;

    function ii(e) {
        if (Oo === void 0) try {
            throw Error()
        } catch (a) {
            var t = a.stack.trim().match(/\n( *(at )?)/);
            Oo = t && t[1] || "", Be = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + Oo + e + Be
    }
    var Fo = !1;

    function za(e, t) {
        if (!e || Fo) return "";
        Fo = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var G = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(G.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(G, [])
                                } catch (N) {
                                    var B = N
                                }
                                Reflect.construct(e, [], G)
                            } else {
                                try {
                                    G.call()
                                } catch (N) {
                                    B = N
                                }
                                e.call(G.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (N) {
                                B = N
                            }(G = e()) && typeof G.catch == "function" && G.catch(function() {})
                        }
                    } catch (N) {
                        if (N && B && typeof N.stack == "string") return [N.stack, B.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var n = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            n && n.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var s = l.DetermineComponentFrameRoot(),
                d = s[0],
                h = s[1];
            if (d && h) {
                var x = d.split(`
`),
                    k = h.split(`
`);
                for (n = l = 0; l < x.length && !x[l].includes("DetermineComponentFrameRoot");) l++;
                for (; n < k.length && !k[n].includes("DetermineComponentFrameRoot");) n++;
                if (l === x.length || n === k.length)
                    for (l = x.length - 1, n = k.length - 1; 1 <= l && 0 <= n && x[l] !== k[n];) n--;
                for (; 1 <= l && 0 <= n; l--, n--)
                    if (x[l] !== k[n]) {
                        if (l !== 1 || n !== 1)
                            do
                                if (l--, n--, 0 > n || x[l] !== k[n]) {
                                    var U = `
` + x[l].replace(" at new ", " at ");
                                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), U
                                } while (1 <= l && 0 <= n);
                        break
                    }
            }
        } finally {
            Fo = !1, Error.prepareStackTrace = a
        }
        return (a = e ? e.displayName || e.name : "") ? ii(a) : ""
    }

    function Xt(e) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return ii(e.type);
            case 16:
                return ii("Lazy");
            case 13:
                return ii("Suspense");
            case 19:
                return ii("SuspenseList");
            case 0:
            case 15:
                return za(e.type, !1);
            case 11:
                return za(e.type.render, !1);
            case 1:
                return za(e.type, !0);
            case 31:
                return ii("Activity");
            default:
                return ""
        }
    }

    function Ko(e) {
        try {
            var t = "";
            do t += Xt(e), e = e.return; while (e);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }

    function qt(e) {
        switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function vn(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function Gu(e) {
        var t = vn(e) ? "checked" : "value",
            a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            l = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var n = a.get,
                s = a.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return n.call(this)
                },
                set: function(d) {
                    l = "" + d, s.call(this, d)
                }
            }), Object.defineProperty(e, t, {
                enumerable: a.enumerable
            }), {
                getValue: function() {
                    return l
                },
                setValue: function(d) {
                    l = "" + d
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function li(e) {
        e._valueTracker || (e._valueTracker = Gu(e))
    }

    function sr(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var a = t.getValue(),
            l = "";
        return e && (l = vn(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1
    }

    function qe(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var wa = /[\n"\\]/g;

    function $t(e) {
        return e.replace(wa, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }

    function Ro(e, t, a, l, n, s, d, h) {
        e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + qt(t)) : e.value !== "" + qt(t) && (e.value = "" + qt(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Xo(e, d, qt(t)) : a != null ? Xo(e, d, qt(a)) : l != null && e.removeAttribute("value"), n == null && s != null && (e.defaultChecked = !!s), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.name = "" + qt(h) : e.removeAttribute("name")
    }

    function rr(e, t, a, l, n, s, d, h) {
        if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.type = s), t != null || a != null) {
            if (!(s !== "submit" && s !== "reset" || t != null)) return;
            a = a != null ? "" + qt(a) : "", t = t != null ? "" + qt(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t
        }
        l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = h ? e.checked : !!l, e.defaultChecked = !!l, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d)
    }

    function Xo(e, t, a) {
        t === "number" && qe(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a)
    }

    function Ui(e, t, a, l) {
        if (e = e.options, t) {
            t = {};
            for (var n = 0; n < a.length; n++) t["$" + a[n]] = !0;
            for (a = 0; a < e.length; a++) n = t.hasOwnProperty("$" + e[a].value), e[a].selected !== n && (e[a].selected = n), n && l && (e[a].defaultSelected = !0)
        } else {
            for (a = "" + qt(a), t = null, n = 0; n < e.length; n++) {
                if (e[n].value === a) {
                    e[n].selected = !0, l && (e[n].defaultSelected = !0);
                    return
                }
                t !== null || e[n].disabled || (t = e[n])
            }
            t !== null && (t.selected = !0)
        }
    }

    function ur(e, t, a) {
        if (t != null && (t = "" + qt(t), t !== e.value && (e.value = t), a == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = a != null ? "" + qt(a) : ""
    }

    function cr(e, t, a, l) {
        if (t == null) {
            if (l != null) {
                if (a != null) throw Error(u(92));
                if (ut(l)) {
                    if (1 < l.length) throw Error(u(93));
                    l = l[0]
                }
                a = l
            }
            a == null && (a = ""), t = a
        }
        a = qt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l)
    }

    function zi(e, t) {
        if (t) {
            var a = e.firstChild;
            if (a && a === e.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Iu = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function dr(e, t, a) {
        var l = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Iu.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px"
    }

    function Uo(e, t, a) {
        if (t != null && typeof t != "object") throw Error(u(62));
        if (e = e.style, a != null) {
            for (var l in a) !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
            for (var n in t) l = t[n], t.hasOwnProperty(n) && a[n] !== l && dr(e, n, l)
        } else
            for (var s in t) t.hasOwnProperty(s) && dr(e, s, t[s])
    }

    function zo(e) {
        if (e.indexOf("-") === -1) return !1;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var Vu = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        fr = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function yn(e) {
        return fr.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var Sn = null;

    function Tn(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var Pi = null,
        ni = null;

    function nt(e) {
        var t = Oi(e);
        if (t && (e = t.stateNode)) {
            var a = e[Dt] || null;
            e: switch (e = t.stateNode, t.type) {
                case "input":
                    if (Ro(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
                        for (a = e; a.parentNode;) a = a.parentNode;
                        for (a = a.querySelectorAll('input[name="' + $t("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
                            var l = a[t];
                            if (l !== e && l.form === e.form) {
                                var n = l[Dt] || null;
                                if (!n) throw Error(u(90));
                                Ro(l, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
                            }
                        }
                        for (t = 0; t < a.length; t++) l = a[t], l.form === e.form && sr(l)
                    }
                    break e;
                case "textarea":
                    ur(e, a.value, a.defaultValue);
                    break e;
                case "select":
                    t = a.value, t != null && Ui(e, !!a.multiple, t, !1)
            }
        }
    }
    var Po = !1;

    function pr(e, t, a) {
        if (Po) return e(t, a);
        Po = !0;
        try {
            var l = e(t);
            return l
        } finally {
            if (Po = !1, (Pi !== null || ni !== null) && (eu(), Pi && (t = Pi, e = ni, ni = Pi = null, nt(t), e)))
                for (t = 0; t < e.length; t++) nt(e[t])
        }
    }

    function Ll(e, t) {
        var a = e.stateNode;
        if (a === null) return null;
        var l = a[Dt] || null;
        if (l === null) return null;
        a = l[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (a && typeof a != "function") throw Error(u(231, t, typeof a));
        return a
    }
    var Aa = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Ho = !1;
    if (Aa) try {
        var kl = {};
        Object.defineProperty(kl, "passive", {
            get: function() {
                Ho = !0
            }
        }), window.addEventListener("test", kl, kl), window.removeEventListener("test", kl, kl)
    } catch {
        Ho = !1
    }
    var Pa = null,
        jo = null,
        _n = null;

    function hr() {
        if (_n) return _n;
        var e, t = jo,
            a = t.length,
            l, n = "value" in Pa ? Pa.value : Pa.textContent,
            s = n.length;
        for (e = 0; e < a && t[e] === n[e]; e++);
        var d = a - e;
        for (l = 1; l <= d && t[a - l] === n[s - l]; l++);
        return _n = n.slice(e, 1 < l ? 1 - l : void 0)
    }

    function xn(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function wn() {
        return !0
    }

    function gr() {
        return !1
    }

    function Ut(e) {
        function t(a, l, n, s, d) {
            this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = s, this.target = d, this.currentTarget = null;
            for (var h in e) e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(s) : s[h]);
            return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? wn : gr, this.isPropagationStopped = gr, this
        }
        return S(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = wn)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = wn)
            },
            persist: function() {},
            isPersistent: wn
        }), t
    }
    var oi = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        An = Ut(oi),
        Dl = S({}, oi, {
            view: 0,
            detail: 0
        }),
        Yu = Ut(Dl),
        Go, Io, Bl, Mn = S({}, Dl, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Ha,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== Bl && (Bl && e.type === "mousemove" ? (Go = e.screenX - Bl.screenX, Io = e.screenY - Bl.screenY) : Io = Go = 0, Bl = e), Go)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : Io
            }
        }),
        mr = Ut(Mn),
        Qu = S({}, Mn, {
            dataTransfer: 0
        }),
        qu = Ut(Qu),
        $u = S({}, Dl, {
            relatedTarget: 0
        }),
        Vo = Ut($u),
        Zu = S({}, oi, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Wu = Ut(Zu),
        Ju = S({}, oi, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        ec = Ut(Ju),
        Hi = S({}, oi, {
            data: 0
        }),
        si = Ut(Hi),
        tc = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        ac = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        ic = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function En(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = ic[e]) ? !!t[e] : !1
    }

    function Ha() {
        return En
    }
    var lc = S({}, Dl, {
            key: function(e) {
                if (e.key) {
                    var t = tc[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = xn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ac[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Ha,
            charCode: function(e) {
                return e.type === "keypress" ? xn(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? xn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        nc = Ut(lc),
        Ce = S({}, Mn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        zt = Ut(Ce),
        ot = S({}, Dl, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Ha
        }),
        Zt = Ut(ot),
        ce = S({}, oi, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        oc = Ut(ce),
        sc = S({}, Mn, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        rc = Ut(sc),
        uc = S({}, oi, {
            newState: 0,
            oldState: 0
        }),
        cc = Ut(uc),
        dc = [9, 13, 27, 32],
        Yo = Aa && "CompositionEvent" in window,
        Nl = null;
    Aa && "documentMode" in document && (Nl = document.documentMode);
    var fc = Aa && "TextEvent" in window && !Nl,
        br = Aa && (!Yo || Nl && 8 < Nl && 11 >= Nl),
        vr = " ",
        yr = !1;

    function Sr(e, t) {
        switch (e) {
            case "keyup":
                return dc.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Cn(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var ji = !1;

    function T(e, t) {
        switch (e) {
            case "compositionend":
                return Cn(t);
            case "keypress":
                return t.which !== 32 ? null : (yr = !0, vr);
            case "textInput":
                return e = t.data, e === vr && yr ? null : e;
            default:
                return null
        }
    }

    function j(e, t) {
        if (ji) return e === "compositionend" || !Yo && Sr(e, t) ? (e = hr(), _n = jo = Pa = null, ji = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return br && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var z = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function ne(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!z[e.type] : t === "textarea"
    }

    function Te(e, t, a, l) {
        Pi ? ni ? ni.push(l) : ni = [l] : Pi = l, t = ou(t, "onChange"), 0 < t.length && (a = new An("onChange", "change", null, a, l), e.push({
            event: a,
            listeners: t
        }))
    }
    var de = null,
        ht = null;

    function na(e) {
        xg(e, 0)
    }

    function wt(e) {
        var t = Fi(e);
        if (sr(t)) return e
    }

    function ri(e, t) {
        if (e === "change") return t
    }
    var ui = !1;
    if (Aa) {
        var Ma;
        if (Aa) {
            var Ol = "oninput" in document;
            if (!Ol) {
                var Tr = document.createElement("div");
                Tr.setAttribute("oninput", "return;"), Ol = typeof Tr.oninput == "function"
            }
            Ma = Ol
        } else Ma = !1;
        ui = Ma && (!document.documentMode || 9 < document.documentMode)
    }

    function Yf() {
        de && (de.detachEvent("onpropertychange", Qf), ht = de = null)
    }

    function Qf(e) {
        if (e.propertyName === "value" && wt(ht)) {
            var t = [];
            Te(t, ht, e, Tn(e)), pr(na, t)
        }
    }

    function Km(e, t, a) {
        e === "focusin" ? (Yf(), de = t, ht = a, de.attachEvent("onpropertychange", Qf)) : e === "focusout" && Yf()
    }

    function Rm(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return wt(ht)
    }

    function Xm(e, t) {
        if (e === "click") return wt(t)
    }

    function Um(e, t) {
        if (e === "input" || e === "change") return wt(t)
    }

    function zm(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var oa = typeof Object.is == "function" ? Object.is : zm;

    function Qo(e, t) {
        if (oa(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var a = Object.keys(e),
            l = Object.keys(t);
        if (a.length !== l.length) return !1;
        for (l = 0; l < a.length; l++) {
            var n = a[l];
            if (!Ao.call(t, n) || !oa(e[n], t[n])) return !1
        }
        return !0
    }

    function qf(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function $f(e, t) {
        var a = qf(e);
        e = 0;
        for (var l; a;) {
            if (a.nodeType === 3) {
                if (l = e + a.textContent.length, e <= t && l >= t) return {
                    node: a,
                    offset: t - e
                };
                e = l
            }
            e: {
                for (; a;) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = qf(a)
        }
    }

    function Zf(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function Wf(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = qe(e.document); t instanceof e.HTMLIFrameElement;) {
            try {
                var a = typeof t.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a) e = t.contentWindow;
            else break;
            t = qe(e.document)
        }
        return t
    }

    function pc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var Pm = Aa && "documentMode" in document && 11 >= document.documentMode,
        Ln = null,
        hc = null,
        qo = null,
        gc = !1;

    function Jf(e, t, a) {
        var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        gc || Ln == null || Ln !== qe(l) || (l = Ln, "selectionStart" in l && pc(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }), qo && Qo(qo, l) || (qo = l, l = ou(hc, "onSelect"), 0 < l.length && (t = new An("onSelect", "select", null, t, a), e.push({
            event: t,
            listeners: l
        }), t.target = Ln)))
    }

    function Fl(e, t) {
        var a = {};
        return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a
    }
    var kn = {
            animationend: Fl("Animation", "AnimationEnd"),
            animationiteration: Fl("Animation", "AnimationIteration"),
            animationstart: Fl("Animation", "AnimationStart"),
            transitionrun: Fl("Transition", "TransitionRun"),
            transitionstart: Fl("Transition", "TransitionStart"),
            transitioncancel: Fl("Transition", "TransitionCancel"),
            transitionend: Fl("Transition", "TransitionEnd")
        },
        mc = {},
        ep = {};
    Aa && (ep = document.createElement("div").style, "AnimationEvent" in window || (delete kn.animationend.animation, delete kn.animationiteration.animation, delete kn.animationstart.animation), "TransitionEvent" in window || delete kn.transitionend.transition);

    function Kl(e) {
        if (mc[e]) return mc[e];
        if (!kn[e]) return e;
        var t = kn[e],
            a;
        for (a in t)
            if (t.hasOwnProperty(a) && a in ep) return mc[e] = t[a];
        return e
    }
    var tp = Kl("animationend"),
        ap = Kl("animationiteration"),
        ip = Kl("animationstart"),
        Hm = Kl("transitionrun"),
        jm = Kl("transitionstart"),
        Gm = Kl("transitioncancel"),
        lp = Kl("transitionend"),
        np = new Map,
        bc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    bc.push("scrollEnd");

    function Ea(e, t) {
        np.set(e, t), Ua(t, [e])
    }
    var op = new WeakMap;

    function ga(e, t) {
        if (typeof e == "object" && e !== null) {
            var a = op.get(e);
            return a !== void 0 ? a : (t = {
                value: e,
                source: t,
                stack: Ko(t)
            }, op.set(e, t), t)
        }
        return {
            value: e,
            source: t,
            stack: Ko(t)
        }
    }
    var ma = [],
        Dn = 0,
        vc = 0;

    function _r() {
        for (var e = Dn, t = vc = Dn = 0; t < e;) {
            var a = ma[t];
            ma[t++] = null;
            var l = ma[t];
            ma[t++] = null;
            var n = ma[t];
            ma[t++] = null;
            var s = ma[t];
            if (ma[t++] = null, l !== null && n !== null) {
                var d = l.pending;
                d === null ? n.next = n : (n.next = d.next, d.next = n), l.pending = n
            }
            s !== 0 && sp(a, n, s)
        }
    }

    function xr(e, t, a, l) {
        ma[Dn++] = e, ma[Dn++] = t, ma[Dn++] = a, ma[Dn++] = l, vc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l)
    }

    function yc(e, t, a, l) {
        return xr(e, t, a, l), wr(e)
    }

    function Bn(e, t) {
        return xr(e, null, null, t), wr(e)
    }

    function sp(e, t, a) {
        e.lanes |= a;
        var l = e.alternate;
        l !== null && (l.lanes |= a);
        for (var n = !1, s = e.return; s !== null;) s.childLanes |= a, l = s.alternate, l !== null && (l.childLanes |= a), s.tag === 22 && (e = s.stateNode, e === null || e._visibility & 1 || (n = !0)), e = s, s = s.return;
        return e.tag === 3 ? (s = e.stateNode, n && t !== null && (n = 31 - xt(a), e = s.hiddenUpdates, l = e[n], l === null ? e[n] = [t] : l.push(t), t.lane = a | 536870912), s) : null
    }

    function wr(e) {
        if (50 < Ss) throw Ss = 0, Ad = null, Error(u(185));
        for (var t = e.return; t !== null;) e = t, t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var Nn = {};

    function Im(e, t, a, l) {
        this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function sa(e, t, a, l) {
        return new Im(e, t, a, l)
    }

    function Sc(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function ci(e, t) {
        var a = e.alternate;
        return a === null ? (a = sa(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a
    }

    function rp(e, t) {
        e.flags &= 65011714;
        var a = e.alternate;
        return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), e
    }

    function Ar(e, t, a, l, n, s) {
        var d = 0;
        if (l = e, typeof e == "function") Sc(e) && (d = 1);
        else if (typeof e == "string") d = Y1(e, a, se.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else e: switch (e) {
            case $e:
                return e = sa(31, a, t, n), e.elementType = $e, e.lanes = s, e;
            case D:
                return Rl(a.children, n, s, t);
            case F:
                d = 8, n |= 24;
                break;
            case R:
                return e = sa(12, a, t, n | 2), e.elementType = R, e.lanes = s, e;
            case ve:
                return e = sa(13, a, t, n), e.elementType = ve, e.lanes = s, e;
            case Ue:
                return e = sa(19, a, t, n), e.elementType = Ue, e.lanes = s, e;
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case Q:
                    case K:
                        d = 10;
                        break e;
                    case q:
                        d = 9;
                        break e;
                    case be:
                        d = 11;
                        break e;
                    case ie:
                        d = 14;
                        break e;
                    case me:
                        d = 16, l = null;
                        break e
                }
                d = 29, a = Error(u(130, e === null ? "null" : typeof e, "")), l = null
        }
        return t = sa(d, a, t, n), t.elementType = e, t.type = l, t.lanes = s, t
    }

    function Rl(e, t, a, l) {
        return e = sa(7, e, l, t), e.lanes = a, e
    }

    function Tc(e, t, a) {
        return e = sa(6, e, null, t), e.lanes = a, e
    }

    function _c(e, t, a) {
        return t = sa(4, e.children !== null ? e.children : [], e.key, t), t.lanes = a, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }
    var On = [],
        Fn = 0,
        Mr = null,
        Er = 0,
        ba = [],
        va = 0,
        Xl = null,
        di = 1,
        fi = "";

    function Ul(e, t) {
        On[Fn++] = Er, On[Fn++] = Mr, Mr = e, Er = t
    }

    function up(e, t, a) {
        ba[va++] = di, ba[va++] = fi, ba[va++] = Xl, Xl = e;
        var l = di;
        e = fi;
        var n = 32 - xt(l) - 1;
        l &= ~(1 << n), a += 1;
        var s = 32 - xt(t) + n;
        if (30 < s) {
            var d = n - n % 5;
            s = (l & (1 << d) - 1).toString(32), l >>= d, n -= d, di = 1 << 32 - xt(t) + n | a << n | l, fi = s + e
        } else di = 1 << s | a << n | l, fi = e
    }

    function xc(e) {
        e.return !== null && (Ul(e, 1), up(e, 1, 0))
    }

    function wc(e) {
        for (; e === Mr;) Mr = On[--Fn], On[Fn] = null, Er = On[--Fn], On[Fn] = null;
        for (; e === Xl;) Xl = ba[--va], ba[va] = null, fi = ba[--va], ba[va] = null, di = ba[--va], ba[va] = null
    }
    var Gt = null,
        it = null,
        Ke = !1,
        zl = null,
        ja = !1,
        Ac = Error(u(519));

    function Pl(e) {
        var t = Error(u(418, ""));
        throw Wo(ga(t, e)), Ac
    }

    function cp(e) {
        var t = e.stateNode,
            a = e.type,
            l = e.memoizedProps;
        switch (t[ct] = e, t[Dt] = l, a) {
            case "dialog":
                we("cancel", t), we("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                we("load", t);
                break;
            case "video":
            case "audio":
                for (a = 0; a < _s.length; a++) we(_s[a], t);
                break;
            case "source":
                we("error", t);
                break;
            case "img":
            case "image":
            case "link":
                we("error", t), we("load", t);
                break;
            case "details":
                we("toggle", t);
                break;
            case "input":
                we("invalid", t), rr(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0), li(t);
                break;
            case "select":
                we("invalid", t);
                break;
            case "textarea":
                we("invalid", t), cr(t, l.value, l.defaultValue, l.children), li(t)
        }
        a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || Eg(t.textContent, a) ? (l.popover != null && (we("beforetoggle", t), we("toggle", t)), l.onScroll != null && we("scroll", t), l.onScrollEnd != null && we("scrollend", t), l.onClick != null && (t.onclick = su), t = !0) : t = !1, t || Pl(e)
    }

    function dp(e) {
        for (Gt = e.return; Gt;) switch (Gt.tag) {
            case 5:
            case 13:
                ja = !1;
                return;
            case 27:
            case 3:
                ja = !0;
                return;
            default:
                Gt = Gt.return
        }
    }

    function $o(e) {
        if (e !== Gt) return !1;
        if (!Ke) return dp(e), Ke = !0, !1;
        var t = e.tag,
            a;
        if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Pd(e.type, e.memoizedProps)), a = !a), a && it && Pl(e), dp(e), t === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8)
                        if (a = e.data, a === "/$") {
                            if (t === 0) {
                                it = La(e.nextSibling);
                                break e
                            }
                            t--
                        } else a !== "$" && a !== "$!" && a !== "$?" || t++;
                    e = e.nextSibling
                }
                it = null
            }
        } else t === 27 ? (t = it, nl(e.type) ? (e = Id, Id = null, it = e) : it = t) : it = Gt ? La(e.stateNode.nextSibling) : null;
        return !0
    }

    function Zo() {
        it = Gt = null, Ke = !1
    }

    function fp() {
        var e = zl;
        return e !== null && (ea === null ? ea = e : ea.push.apply(ea, e), zl = null), e
    }

    function Wo(e) {
        zl === null ? zl = [e] : zl.push(e)
    }
    var Mc = I(null),
        Hl = null,
        pi = null;

    function Gi(e, t, a) {
        $(Mc, t._currentValue), t._currentValue = a
    }

    function hi(e) {
        e._currentValue = Mc.current, ee(Mc)
    }

    function Ec(e, t, a) {
        for (; e !== null;) {
            var l = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
            e = e.return
        }
    }

    function Cc(e, t, a, l) {
        var n = e.child;
        for (n !== null && (n.return = e); n !== null;) {
            var s = n.dependencies;
            if (s !== null) {
                var d = n.child;
                s = s.firstContext;
                e: for (; s !== null;) {
                    var h = s;
                    s = n;
                    for (var x = 0; x < t.length; x++)
                        if (h.context === t[x]) {
                            s.lanes |= a, h = s.alternate, h !== null && (h.lanes |= a), Ec(s.return, a, e), l || (d = null);
                            break e
                        } s = h.next
                }
            } else if (n.tag === 18) {
                if (d = n.return, d === null) throw Error(u(341));
                d.lanes |= a, s = d.alternate, s !== null && (s.lanes |= a), Ec(d, a, e), d = null
            } else d = n.child;
            if (d !== null) d.return = n;
            else
                for (d = n; d !== null;) {
                    if (d === e) {
                        d = null;
                        break
                    }
                    if (n = d.sibling, n !== null) {
                        n.return = d.return, d = n;
                        break
                    }
                    d = d.return
                }
            n = d
        }
    }

    function Jo(e, t, a, l) {
        e = null;
        for (var n = t, s = !1; n !== null;) {
            if (!s) {
                if ((n.flags & 524288) !== 0) s = !0;
                else if ((n.flags & 262144) !== 0) break
            }
            if (n.tag === 10) {
                var d = n.alternate;
                if (d === null) throw Error(u(387));
                if (d = d.memoizedProps, d !== null) {
                    var h = n.type;
                    oa(n.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h])
                }
            } else if (n === Rt.current) {
                if (d = n.alternate, d === null) throw Error(u(387));
                d.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Cs) : e = [Cs])
            }
            n = n.return
        }
        e !== null && Cc(t, e, a, l), t.flags |= 262144
    }

    function Cr(e) {
        for (e = e.firstContext; e !== null;) {
            if (!oa(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next
        }
        return !1
    }

    function jl(e) {
        Hl = e, pi = null, e = e.dependencies, e !== null && (e.firstContext = null)
    }

    function Pt(e) {
        return pp(Hl, e)
    }

    function Lr(e, t) {
        return Hl === null && jl(e), pp(e, t)
    }

    function pp(e, t) {
        var a = t._currentValue;
        if (t = {
                context: t,
                memoizedValue: a,
                next: null
            }, pi === null) {
            if (e === null) throw Error(u(308));
            pi = t, e.dependencies = {
                lanes: 0,
                firstContext: t
            }, e.flags |= 524288
        } else pi = pi.next = t;
        return a
    }
    var Vm = typeof AbortController < "u" ? AbortController : function() {
            var e = [],
                t = this.signal = {
                    aborted: !1,
                    addEventListener: function(a, l) {
                        e.push(l)
                    }
                };
            this.abort = function() {
                t.aborted = !0, e.forEach(function(a) {
                    return a()
                })
            }
        },
        Ym = i.unstable_scheduleCallback,
        Qm = i.unstable_NormalPriority,
        gt = {
            $$typeof: K,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function Lc() {
        return {
            controller: new Vm,
            data: new Map,
            refCount: 0
        }
    }

    function es(e) {
        e.refCount--, e.refCount === 0 && Ym(Qm, function() {
            e.controller.abort()
        })
    }
    var ts = null,
        kc = 0,
        Kn = 0,
        Rn = null;

    function qm(e, t) {
        if (ts === null) {
            var a = ts = [];
            kc = 0, Kn = Bd(), Rn = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    a.push(l)
                }
            }
        }
        return kc++, t.then(hp, hp), t
    }

    function hp() {
        if (--kc === 0 && ts !== null) {
            Rn !== null && (Rn.status = "fulfilled");
            var e = ts;
            ts = null, Kn = 0, Rn = null;
            for (var t = 0; t < e.length; t++)(0, e[t])()
        }
    }

    function $m(e, t) {
        var a = [],
            l = {
                status: "pending",
                value: null,
                reason: null,
                then: function(n) {
                    a.push(n)
                }
            };
        return e.then(function() {
            l.status = "fulfilled", l.value = t;
            for (var n = 0; n < a.length; n++)(0, a[n])(t)
        }, function(n) {
            for (l.status = "rejected", l.reason = n, n = 0; n < a.length; n++)(0, a[n])(void 0)
        }), l
    }
    var gp = X.S;
    X.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && qm(e, t), gp !== null && gp(e, t)
    };
    var Gl = I(null);

    function Dc() {
        var e = Gl.current;
        return e !== null ? e : Ye.pooledCache
    }

    function kr(e, t) {
        t === null ? $(Gl, Gl.current) : $(Gl, t.pool)
    }

    function mp() {
        var e = Dc();
        return e === null ? null : {
            parent: gt._currentValue,
            pool: e
        }
    }
    var as = Error(u(460)),
        bp = Error(u(474)),
        Dr = Error(u(542)),
        Bc = {
            then: function() {}
        };

    function vp(e) {
        return e = e.status, e === "fulfilled" || e === "rejected"
    }

    function Br() {}

    function yp(e, t, a) {
        switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(Br, Br), t = a), t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason, Tp(e), e;
            default:
                if (typeof t.status == "string") t.then(Br, Br);
                else {
                    if (e = Ye, e !== null && 100 < e.shellSuspendCounter) throw Error(u(482));
                    e = t, e.status = "pending", e.then(function(l) {
                        if (t.status === "pending") {
                            var n = t;
                            n.status = "fulfilled", n.value = l
                        }
                    }, function(l) {
                        if (t.status === "pending") {
                            var n = t;
                            n.status = "rejected", n.reason = l
                        }
                    })
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw e = t.reason, Tp(e), e
                }
                throw is = t, as
        }
    }
    var is = null;

    function Sp() {
        if (is === null) throw Error(u(459));
        var e = is;
        return is = null, e
    }

    function Tp(e) {
        if (e === as || e === Dr) throw Error(u(483))
    }
    var Ii = !1;

    function Nc(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function Oc(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }

    function Vi(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function Yi(e, t, a) {
        var l = e.updateQueue;
        if (l === null) return null;
        if (l = l.shared, (Re & 2) !== 0) {
            var n = l.pending;
            return n === null ? t.next = t : (t.next = n.next, n.next = t), l.pending = t, t = wr(e), sp(e, null, a), t
        }
        return xr(e, l, t, a), wr(e)
    }

    function ls(e, t, a) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
            var l = t.lanes;
            l &= e.pendingLanes, a |= l, t.lanes = a, Lo(e, a)
        }
    }

    function Fc(e, t) {
        var a = e.updateQueue,
            l = e.alternate;
        if (l !== null && (l = l.updateQueue, a === l)) {
            var n = null,
                s = null;
            if (a = a.firstBaseUpdate, a !== null) {
                do {
                    var d = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    s === null ? n = s = d : s = s.next = d, a = a.next
                } while (a !== null);
                s === null ? n = s = t : s = s.next = t
            } else n = s = t;
            a = {
                baseState: l.baseState,
                firstBaseUpdate: n,
                lastBaseUpdate: s,
                shared: l.shared,
                callbacks: l.callbacks
            }, e.updateQueue = a;
            return
        }
        e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t
    }
    var Kc = !1;

    function ns() {
        if (Kc) {
            var e = Rn;
            if (e !== null) throw e
        }
    }

    function os(e, t, a, l) {
        Kc = !1;
        var n = e.updateQueue;
        Ii = !1;
        var s = n.firstBaseUpdate,
            d = n.lastBaseUpdate,
            h = n.shared.pending;
        if (h !== null) {
            n.shared.pending = null;
            var x = h,
                k = x.next;
            x.next = null, d === null ? s = k : d.next = k, d = x;
            var U = e.alternate;
            U !== null && (U = U.updateQueue, h = U.lastBaseUpdate, h !== d && (h === null ? U.firstBaseUpdate = k : h.next = k, U.lastBaseUpdate = x))
        }
        if (s !== null) {
            var G = n.baseState;
            d = 0, U = k = x = null, h = s;
            do {
                var B = h.lane & -536870913,
                    N = B !== h.lane;
                if (N ? (Le & B) === B : (l & B) === B) {
                    B !== 0 && B === Kn && (Kc = !0), U !== null && (U = U.next = {
                        lane: 0,
                        tag: h.tag,
                        payload: h.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var pe = e,
                            ue = h;B = t;
                        var He = a;
                        switch (ue.tag) {
                            case 1:
                                if (pe = ue.payload, typeof pe == "function") {
                                    G = pe.call(He, G, B);
                                    break e
                                }
                                G = pe;
                                break e;
                            case 3:
                                pe.flags = pe.flags & -65537 | 128;
                            case 0:
                                if (pe = ue.payload, B = typeof pe == "function" ? pe.call(He, G, B) : pe, B == null) break e;
                                G = S({}, G, B);
                                break e;
                            case 2:
                                Ii = !0
                        }
                    }
                    B = h.callback, B !== null && (e.flags |= 64, N && (e.flags |= 8192), N = n.callbacks, N === null ? n.callbacks = [B] : N.push(B))
                } else N = {
                    lane: B,
                    tag: h.tag,
                    payload: h.payload,
                    callback: h.callback,
                    next: null
                }, U === null ? (k = U = N, x = G) : U = U.next = N, d |= B;
                if (h = h.next, h === null) {
                    if (h = n.shared.pending, h === null) break;
                    N = h, h = N.next, N.next = null, n.lastBaseUpdate = N, n.shared.pending = null
                }
            } while (!0);
            U === null && (x = G), n.baseState = x, n.firstBaseUpdate = k, n.lastBaseUpdate = U, s === null && (n.shared.lanes = 0), tl |= d, e.lanes = d, e.memoizedState = G
        }
    }

    function _p(e, t) {
        if (typeof e != "function") throw Error(u(191, e));
        e.call(t)
    }

    function xp(e, t) {
        var a = e.callbacks;
        if (a !== null)
            for (e.callbacks = null, e = 0; e < a.length; e++) _p(a[e], t)
    }
    var Xn = I(null),
        Nr = I(0);

    function wp(e, t) {
        e = Ti, $(Nr, e), $(Xn, t), Ti = e | t.baseLanes
    }

    function Rc() {
        $(Nr, Ti), $(Xn, Xn.current)
    }

    function Xc() {
        Ti = Nr.current, ee(Xn), ee(Nr)
    }
    var Qi = 0,
        Se = null,
        ze = null,
        dt = null,
        Or = !1,
        Un = !1,
        Il = !1,
        Fr = 0,
        ss = 0,
        zn = null,
        Zm = 0;

    function st() {
        throw Error(u(321))
    }

    function Uc(e, t) {
        if (t === null) return !1;
        for (var a = 0; a < t.length && a < e.length; a++)
            if (!oa(e[a], t[a])) return !1;
        return !0
    }

    function zc(e, t, a, l, n, s) {
        return Qi = s, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, X.H = e === null || e.memoizedState === null ? sh : rh, Il = !1, s = a(l, n), Il = !1, Un && (s = Mp(t, a, l, n)), Ap(e), s
    }

    function Ap(e) {
        X.H = Pr;
        var t = ze !== null && ze.next !== null;
        if (Qi = 0, dt = ze = Se = null, Or = !1, ss = 0, zn = null, t) throw Error(u(300));
        e === null || At || (e = e.dependencies, e !== null && Cr(e) && (At = !0))
    }

    function Mp(e, t, a, l) {
        Se = e;
        var n = 0;
        do {
            if (Un && (zn = null), ss = 0, Un = !1, 25 <= n) throw Error(u(301));
            if (n += 1, dt = ze = null, e.updateQueue != null) {
                var s = e.updateQueue;
                s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0)
            }
            X.H = l1, s = t(a, l)
        } while (Un);
        return s
    }

    function Wm() {
        var e = X.H,
            t = e.useState()[0];
        return t = typeof t.then == "function" ? rs(t) : t, e = e.useState()[0], (ze !== null ? ze.memoizedState : null) !== e && (Se.flags |= 1024), t
    }

    function Pc() {
        var e = Fr !== 0;
        return Fr = 0, e
    }

    function Hc(e, t, a) {
        t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a
    }

    function jc(e) {
        if (Or) {
            for (e = e.memoizedState; e !== null;) {
                var t = e.queue;
                t !== null && (t.pending = null), e = e.next
            }
            Or = !1
        }
        Qi = 0, dt = ze = Se = null, Un = !1, ss = Fr = 0, zn = null
    }

    function Wt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return dt === null ? Se.memoizedState = dt = e : dt = dt.next = e, dt
    }

    function ft() {
        if (ze === null) {
            var e = Se.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = ze.next;
        var t = dt === null ? Se.memoizedState : dt.next;
        if (t !== null) dt = t, ze = e;
        else {
            if (e === null) throw Se.alternate === null ? Error(u(467)) : Error(u(310));
            ze = e, e = {
                memoizedState: ze.memoizedState,
                baseState: ze.baseState,
                baseQueue: ze.baseQueue,
                queue: ze.queue,
                next: null
            }, dt === null ? Se.memoizedState = dt = e : dt = dt.next = e
        }
        return dt
    }

    function Gc() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function rs(e) {
        var t = ss;
        return ss += 1, zn === null && (zn = []), e = yp(zn, e, t), t = Se, (dt === null ? t.memoizedState : dt.next) === null && (t = t.alternate, X.H = t === null || t.memoizedState === null ? sh : rh), e
    }

    function Kr(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function") return rs(e);
            if (e.$$typeof === K) return Pt(e)
        }
        throw Error(u(438, String(e)))
    }

    function Ic(e) {
        var t = null,
            a = Se.updateQueue;
        if (a !== null && (t = a.memoCache), t == null) {
            var l = Se.alternate;
            l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
                data: l.data.map(function(n) {
                    return n.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
                data: [],
                index: 0
            }), a === null && (a = Gc(), Se.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
            for (a = t.data[t.index] = Array(e), l = 0; l < e; l++) a[l] = Ba;
        return t.index++, a
    }

    function gi(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function Rr(e) {
        var t = ft();
        return Vc(t, ze, e)
    }

    function Vc(e, t, a) {
        var l = e.queue;
        if (l === null) throw Error(u(311));
        l.lastRenderedReducer = a;
        var n = e.baseQueue,
            s = l.pending;
        if (s !== null) {
            if (n !== null) {
                var d = n.next;
                n.next = s.next, s.next = d
            }
            t.baseQueue = n = s, l.pending = null
        }
        if (s = e.baseState, n === null) e.memoizedState = s;
        else {
            t = n.next;
            var h = d = null,
                x = null,
                k = t,
                U = !1;
            do {
                var G = k.lane & -536870913;
                if (G !== k.lane ? (Le & G) === G : (Qi & G) === G) {
                    var B = k.revertLane;
                    if (B === 0) x !== null && (x = x.next = {
                        lane: 0,
                        revertLane: 0,
                        action: k.action,
                        hasEagerState: k.hasEagerState,
                        eagerState: k.eagerState,
                        next: null
                    }), G === Kn && (U = !0);
                    else if ((Qi & B) === B) {
                        k = k.next, B === Kn && (U = !0);
                        continue
                    } else G = {
                        lane: 0,
                        revertLane: k.revertLane,
                        action: k.action,
                        hasEagerState: k.hasEagerState,
                        eagerState: k.eagerState,
                        next: null
                    }, x === null ? (h = x = G, d = s) : x = x.next = G, Se.lanes |= B, tl |= B;
                    G = k.action, Il && a(s, G), s = k.hasEagerState ? k.eagerState : a(s, G)
                } else B = {
                    lane: G,
                    revertLane: k.revertLane,
                    action: k.action,
                    hasEagerState: k.hasEagerState,
                    eagerState: k.eagerState,
                    next: null
                }, x === null ? (h = x = B, d = s) : x = x.next = B, Se.lanes |= G, tl |= G;
                k = k.next
            } while (k !== null && k !== t);
            if (x === null ? d = s : x.next = h, !oa(s, e.memoizedState) && (At = !0, U && (a = Rn, a !== null))) throw a;
            e.memoizedState = s, e.baseState = d, e.baseQueue = x, l.lastRenderedState = s
        }
        return n === null && (l.lanes = 0), [e.memoizedState, l.dispatch]
    }

    function Yc(e) {
        var t = ft(),
            a = t.queue;
        if (a === null) throw Error(u(311));
        a.lastRenderedReducer = e;
        var l = a.dispatch,
            n = a.pending,
            s = t.memoizedState;
        if (n !== null) {
            a.pending = null;
            var d = n = n.next;
            do s = e(s, d.action), d = d.next; while (d !== n);
            oa(s, t.memoizedState) || (At = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), a.lastRenderedState = s
        }
        return [s, l]
    }

    function Ep(e, t, a) {
        var l = Se,
            n = ft(),
            s = Ke;
        if (s) {
            if (a === void 0) throw Error(u(407));
            a = a()
        } else a = t();
        var d = !oa((ze || n).memoizedState, a);
        d && (n.memoizedState = a, At = !0), n = n.queue;
        var h = kp.bind(null, l, n, e);
        if (us(2048, 8, h, [e]), n.getSnapshot !== t || d || dt !== null && dt.memoizedState.tag & 1) {
            if (l.flags |= 2048, Pn(9, Xr(), Lp.bind(null, l, n, a, t), null), Ye === null) throw Error(u(349));
            s || (Qi & 124) !== 0 || Cp(l, t, a)
        }
        return a
    }

    function Cp(e, t, a) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: a
        }, t = Se.updateQueue, t === null ? (t = Gc(), Se.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e))
    }

    function Lp(e, t, a, l) {
        t.value = a, t.getSnapshot = l, Dp(t) && Bp(e)
    }

    function kp(e, t, a) {
        return a(function() {
            Dp(t) && Bp(e)
        })
    }

    function Dp(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var a = t();
            return !oa(e, a)
        } catch {
            return !0
        }
    }

    function Bp(e) {
        var t = Bn(e, 2);
        t !== null && fa(t, e, 2)
    }

    function Qc(e) {
        var t = Wt();
        if (typeof e == "function") {
            var a = e;
            if (e = a(), Il) {
                Ka(!0);
                try {
                    a()
                } finally {
                    Ka(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: gi,
            lastRenderedState: e
        }, t
    }

    function Np(e, t, a, l) {
        return e.baseState = a, Vc(e, ze, typeof l == "function" ? l : gi)
    }

    function Jm(e, t, a, l, n) {
        if (zr(e)) throw Error(u(485));
        if (e = t.action, e !== null) {
            var s = {
                payload: n,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(d) {
                    s.listeners.push(d)
                }
            };
            X.T !== null ? a(!0) : s.isTransition = !1, l(s), a = t.pending, a === null ? (s.next = t.pending = s, Op(t, s)) : (s.next = a.next, t.pending = a.next = s)
        }
    }

    function Op(e, t) {
        var a = t.action,
            l = t.payload,
            n = e.state;
        if (t.isTransition) {
            var s = X.T,
                d = {};
            X.T = d;
            try {
                var h = a(n, l),
                    x = X.S;
                x !== null && x(d, h), Fp(e, t, h)
            } catch (k) {
                qc(e, t, k)
            } finally {
                X.T = s
            }
        } else try {
            s = a(n, l), Fp(e, t, s)
        } catch (k) {
            qc(e, t, k)
        }
    }

    function Fp(e, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(l) {
            Kp(e, t, l)
        }, function(l) {
            return qc(e, t, l)
        }) : Kp(e, t, a)
    }

    function Kp(e, t, a) {
        t.status = "fulfilled", t.value = a, Rp(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Op(e, a)))
    }

    function qc(e, t, a) {
        var l = e.pending;
        if (e.pending = null, l !== null) {
            l = l.next;
            do t.status = "rejected", t.reason = a, Rp(t), t = t.next; while (t !== l)
        }
        e.action = null
    }

    function Rp(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)(0, e[t])()
    }

    function Xp(e, t) {
        return t
    }

    function Up(e, t) {
        if (Ke) {
            var a = Ye.formState;
            if (a !== null) {
                e: {
                    var l = Se;
                    if (Ke) {
                        if (it) {
                            t: {
                                for (var n = it, s = ja; n.nodeType !== 8;) {
                                    if (!s) {
                                        n = null;
                                        break t
                                    }
                                    if (n = La(n.nextSibling), n === null) {
                                        n = null;
                                        break t
                                    }
                                }
                                s = n.data,
                                n = s === "F!" || s === "F" ? n : null
                            }
                            if (n) {
                                it = La(n.nextSibling), l = n.data === "F!";
                                break e
                            }
                        }
                        Pl(l)
                    }
                    l = !1
                }
                l && (t = a[0])
            }
        }
        return a = Wt(), a.memoizedState = a.baseState = t, l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Xp,
            lastRenderedState: t
        }, a.queue = l, a = lh.bind(null, Se, l), l.dispatch = a, l = Qc(!1), s = ed.bind(null, Se, !1, l.queue), l = Wt(), n = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        }, l.queue = n, a = Jm.bind(null, Se, n, s, a), n.dispatch = a, l.memoizedState = e, [t, a, !1]
    }

    function zp(e) {
        var t = ft();
        return Pp(t, ze, e)
    }

    function Pp(e, t, a) {
        if (t = Vc(e, t, Xp)[0], e = Rr(gi)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
            var l = rs(t)
        } catch (d) {
            throw d === as ? Dr : d
        } else l = t;
        t = ft();
        var n = t.queue,
            s = n.dispatch;
        return a !== t.memoizedState && (Se.flags |= 2048, Pn(9, Xr(), e1.bind(null, n, a), null)), [l, s, e]
    }

    function e1(e, t) {
        e.action = t
    }

    function Hp(e) {
        var t = ft(),
            a = ze;
        if (a !== null) return Pp(t, a, e);
        ft(), t = t.memoizedState, a = ft();
        var l = a.queue.dispatch;
        return a.memoizedState = e, [t, l, !1]
    }

    function Pn(e, t, a, l) {
        return e = {
            tag: e,
            create: a,
            deps: l,
            inst: t,
            next: null
        }, t = Se.updateQueue, t === null && (t = Gc(), Se.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e
    }

    function Xr() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }

    function jp() {
        return ft().memoizedState
    }

    function Ur(e, t, a, l) {
        var n = Wt();
        l = l === void 0 ? null : l, Se.flags |= e, n.memoizedState = Pn(1 | t, Xr(), a, l)
    }

    function us(e, t, a, l) {
        var n = ft();
        l = l === void 0 ? null : l;
        var s = n.memoizedState.inst;
        ze !== null && l !== null && Uc(l, ze.memoizedState.deps) ? n.memoizedState = Pn(t, s, a, l) : (Se.flags |= e, n.memoizedState = Pn(1 | t, s, a, l))
    }

    function Gp(e, t) {
        Ur(8390656, 8, e, t)
    }

    function Ip(e, t) {
        us(2048, 8, e, t)
    }

    function Vp(e, t) {
        return us(4, 2, e, t)
    }

    function Yp(e, t) {
        return us(4, 4, e, t)
    }

    function Qp(e, t) {
        if (typeof t == "function") {
            e = e();
            var a = t(e);
            return function() {
                typeof a == "function" ? a() : t(null)
            }
        }
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function qp(e, t, a) {
        a = a != null ? a.concat([e]) : null, us(4, 4, Qp.bind(null, t, e), a)
    }

    function $c() {}

    function $p(e, t) {
        var a = ft();
        t = t === void 0 ? null : t;
        var l = a.memoizedState;
        return t !== null && Uc(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e)
    }

    function Zp(e, t) {
        var a = ft();
        t = t === void 0 ? null : t;
        var l = a.memoizedState;
        if (t !== null && Uc(t, l[1])) return l[0];
        if (l = e(), Il) {
            Ka(!0);
            try {
                e()
            } finally {
                Ka(!1)
            }
        }
        return a.memoizedState = [l, t], l
    }

    function Zc(e, t, a) {
        return a === void 0 || (Qi & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = eg(), Se.lanes |= e, tl |= e, a)
    }

    function Wp(e, t, a, l) {
        return oa(a, t) ? a : Xn.current !== null ? (e = Zc(e, a, l), oa(e, t) || (At = !0), e) : (Qi & 42) === 0 ? (At = !0, e.memoizedState = a) : (e = eg(), Se.lanes |= e, tl |= e, t)
    }

    function Jp(e, t, a, l, n) {
        var s = W.p;
        W.p = s !== 0 && 8 > s ? s : 8;
        var d = X.T,
            h = {};
        X.T = h, ed(e, !1, t, a);
        try {
            var x = n(),
                k = X.S;
            if (k !== null && k(h, x), x !== null && typeof x == "object" && typeof x.then == "function") {
                var U = $m(x, l);
                cs(e, t, U, da(e))
            } else cs(e, t, l, da(e))
        } catch (G) {
            cs(e, t, {
                then: function() {},
                status: "rejected",
                reason: G
            }, da())
        } finally {
            W.p = s, X.T = d
        }
    }

    function t1() {}

    function Wc(e, t, a, l) {
        if (e.tag !== 5) throw Error(u(476));
        var n = eh(e).queue;
        Jp(e, n, t, re, a === null ? t1 : function() {
            return th(e), a(l)
        })
    }

    function eh(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: re,
            baseState: re,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: gi,
                lastRenderedState: re
            },
            next: null
        };
        var a = {};
        return t.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: gi,
                lastRenderedState: a
            },
            next: null
        }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
    }

    function th(e) {
        var t = eh(e).next.queue;
        cs(e, t, {}, da())
    }

    function Jc() {
        return Pt(Cs)
    }

    function ah() {
        return ft().memoizedState
    }

    function ih() {
        return ft().memoizedState
    }

    function a1(e) {
        for (var t = e.return; t !== null;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var a = da();
                    e = Vi(a);
                    var l = Yi(t, e, a);
                    l !== null && (fa(l, t, a), ls(l, t, a)), t = {
                        cache: Lc()
                    }, e.payload = t;
                    return
            }
            t = t.return
        }
    }

    function i1(e, t, a) {
        var l = da();
        a = {
            lane: l,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, zr(e) ? nh(t, a) : (a = yc(e, t, a, l), a !== null && (fa(a, e, l), oh(a, t, l)))
    }

    function lh(e, t, a) {
        var l = da();
        cs(e, t, a, l)
    }

    function cs(e, t, a, l) {
        var n = {
            lane: l,
            revertLane: 0,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (zr(e)) nh(t, n);
        else {
            var s = e.alternate;
            if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
                var d = t.lastRenderedState,
                    h = s(d, a);
                if (n.hasEagerState = !0, n.eagerState = h, oa(h, d)) return xr(e, t, n, 0), Ye === null && _r(), !1
            } catch {} finally {}
            if (a = yc(e, t, n, l), a !== null) return fa(a, e, l), oh(a, t, l), !0
        }
        return !1
    }

    function ed(e, t, a, l) {
        if (l = {
                lane: 2,
                revertLane: Bd(),
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, zr(e)) {
            if (t) throw Error(u(479))
        } else t = yc(e, a, l, 2), t !== null && fa(t, e, 2)
    }

    function zr(e) {
        var t = e.alternate;
        return e === Se || t !== null && t === Se
    }

    function nh(e, t) {
        Un = Or = !0;
        var a = e.pending;
        a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t
    }

    function oh(e, t, a) {
        if ((a & 4194048) !== 0) {
            var l = t.lanes;
            l &= e.pendingLanes, a |= l, t.lanes = a, Lo(e, a)
        }
    }
    var Pr = {
            readContext: Pt,
            use: Kr,
            useCallback: st,
            useContext: st,
            useEffect: st,
            useImperativeHandle: st,
            useLayoutEffect: st,
            useInsertionEffect: st,
            useMemo: st,
            useReducer: st,
            useRef: st,
            useState: st,
            useDebugValue: st,
            useDeferredValue: st,
            useTransition: st,
            useSyncExternalStore: st,
            useId: st,
            useHostTransitionStatus: st,
            useFormState: st,
            useActionState: st,
            useOptimistic: st,
            useMemoCache: st,
            useCacheRefresh: st
        },
        sh = {
            readContext: Pt,
            use: Kr,
            useCallback: function(e, t) {
                return Wt().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: Pt,
            useEffect: Gp,
            useImperativeHandle: function(e, t, a) {
                a = a != null ? a.concat([e]) : null, Ur(4194308, 4, Qp.bind(null, t, e), a)
            },
            useLayoutEffect: function(e, t) {
                return Ur(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                Ur(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var a = Wt();
                t = t === void 0 ? null : t;
                var l = e();
                if (Il) {
                    Ka(!0);
                    try {
                        e()
                    } finally {
                        Ka(!1)
                    }
                }
                return a.memoizedState = [l, t], l
            },
            useReducer: function(e, t, a) {
                var l = Wt();
                if (a !== void 0) {
                    var n = a(t);
                    if (Il) {
                        Ka(!0);
                        try {
                            a(t)
                        } finally {
                            Ka(!1)
                        }
                    }
                } else n = t;
                return l.memoizedState = l.baseState = n, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: n
                }, l.queue = e, e = e.dispatch = i1.bind(null, Se, e), [l.memoizedState, e]
            },
            useRef: function(e) {
                var t = Wt();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: function(e) {
                e = Qc(e);
                var t = e.queue,
                    a = lh.bind(null, Se, t);
                return t.dispatch = a, [e.memoizedState, a]
            },
            useDebugValue: $c,
            useDeferredValue: function(e, t) {
                var a = Wt();
                return Zc(a, e, t)
            },
            useTransition: function() {
                var e = Qc(!1);
                return e = Jp.bind(null, Se, e.queue, !0, !1), Wt().memoizedState = e, [!1, e]
            },
            useSyncExternalStore: function(e, t, a) {
                var l = Se,
                    n = Wt();
                if (Ke) {
                    if (a === void 0) throw Error(u(407));
                    a = a()
                } else {
                    if (a = t(), Ye === null) throw Error(u(349));
                    (Le & 124) !== 0 || Cp(l, t, a)
                }
                n.memoizedState = a;
                var s = {
                    value: a,
                    getSnapshot: t
                };
                return n.queue = s, Gp(kp.bind(null, l, s, e), [e]), l.flags |= 2048, Pn(9, Xr(), Lp.bind(null, l, s, a, t), null), a
            },
            useId: function() {
                var e = Wt(),
                    t = Ye.identifierPrefix;
                if (Ke) {
                    var a = fi,
                        l = di;
                    a = (l & ~(1 << 32 - xt(l) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = Fr++, 0 < a && (t += "H" + a.toString(32)), t += "»"
                } else a = Zm++, t = "«" + t + "r" + a.toString(32) + "»";
                return e.memoizedState = t
            },
            useHostTransitionStatus: Jc,
            useFormState: Up,
            useActionState: Up,
            useOptimistic: function(e) {
                var t = Wt();
                t.memoizedState = t.baseState = e;
                var a = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = a, t = ed.bind(null, Se, !0, a), a.dispatch = t, [e, t]
            },
            useMemoCache: Ic,
            useCacheRefresh: function() {
                return Wt().memoizedState = a1.bind(null, Se)
            }
        },
        rh = {
            readContext: Pt,
            use: Kr,
            useCallback: $p,
            useContext: Pt,
            useEffect: Ip,
            useImperativeHandle: qp,
            useInsertionEffect: Vp,
            useLayoutEffect: Yp,
            useMemo: Zp,
            useReducer: Rr,
            useRef: jp,
            useState: function() {
                return Rr(gi)
            },
            useDebugValue: $c,
            useDeferredValue: function(e, t) {
                var a = ft();
                return Wp(a, ze.memoizedState, e, t)
            },
            useTransition: function() {
                var e = Rr(gi)[0],
                    t = ft().memoizedState;
                return [typeof e == "boolean" ? e : rs(e), t]
            },
            useSyncExternalStore: Ep,
            useId: ah,
            useHostTransitionStatus: Jc,
            useFormState: zp,
            useActionState: zp,
            useOptimistic: function(e, t) {
                var a = ft();
                return Np(a, ze, e, t)
            },
            useMemoCache: Ic,
            useCacheRefresh: ih
        },
        l1 = {
            readContext: Pt,
            use: Kr,
            useCallback: $p,
            useContext: Pt,
            useEffect: Ip,
            useImperativeHandle: qp,
            useInsertionEffect: Vp,
            useLayoutEffect: Yp,
            useMemo: Zp,
            useReducer: Yc,
            useRef: jp,
            useState: function() {
                return Yc(gi)
            },
            useDebugValue: $c,
            useDeferredValue: function(e, t) {
                var a = ft();
                return ze === null ? Zc(a, e, t) : Wp(a, ze.memoizedState, e, t)
            },
            useTransition: function() {
                var e = Yc(gi)[0],
                    t = ft().memoizedState;
                return [typeof e == "boolean" ? e : rs(e), t]
            },
            useSyncExternalStore: Ep,
            useId: ah,
            useHostTransitionStatus: Jc,
            useFormState: Hp,
            useActionState: Hp,
            useOptimistic: function(e, t) {
                var a = ft();
                return ze !== null ? Np(a, ze, e, t) : (a.baseState = e, [e, a.queue.dispatch])
            },
            useMemoCache: Ic,
            useCacheRefresh: ih
        },
        Hn = null,
        ds = 0;

    function Hr(e) {
        var t = ds;
        return ds += 1, Hn === null && (Hn = []), yp(Hn, e, t)
    }

    function fs(e, t) {
        t = t.props.ref, e.ref = t !== void 0 ? t : null
    }

    function jr(e, t) {
        throw t.$$typeof === m ? Error(u(525)) : (e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }

    function uh(e) {
        var t = e._init;
        return t(e._payload)
    }

    function ch(e) {
        function t(C, M) {
            if (e) {
                var L = C.deletions;
                L === null ? (C.deletions = [M], C.flags |= 16) : L.push(M)
            }
        }

        function a(C, M) {
            if (!e) return null;
            for (; M !== null;) t(C, M), M = M.sibling;
            return null
        }

        function l(C) {
            for (var M = new Map; C !== null;) C.key !== null ? M.set(C.key, C) : M.set(C.index, C), C = C.sibling;
            return M
        }

        function n(C, M) {
            return C = ci(C, M), C.index = 0, C.sibling = null, C
        }

        function s(C, M, L) {
            return C.index = L, e ? (L = C.alternate, L !== null ? (L = L.index, L < M ? (C.flags |= 67108866, M) : L) : (C.flags |= 67108866, M)) : (C.flags |= 1048576, M)
        }

        function d(C) {
            return e && C.alternate === null && (C.flags |= 67108866), C
        }

        function h(C, M, L, H) {
            return M === null || M.tag !== 6 ? (M = Tc(L, C.mode, H), M.return = C, M) : (M = n(M, L), M.return = C, M)
        }

        function x(C, M, L, H) {
            var ae = L.type;
            return ae === D ? U(C, M, L.props.children, H, L.key) : M !== null && (M.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === me && uh(ae) === M.type) ? (M = n(M, L.props), fs(M, L), M.return = C, M) : (M = Ar(L.type, L.key, L.props, null, C.mode, H), fs(M, L), M.return = C, M)
        }

        function k(C, M, L, H) {
            return M === null || M.tag !== 4 || M.stateNode.containerInfo !== L.containerInfo || M.stateNode.implementation !== L.implementation ? (M = _c(L, C.mode, H), M.return = C, M) : (M = n(M, L.children || []), M.return = C, M)
        }

        function U(C, M, L, H, ae) {
            return M === null || M.tag !== 7 ? (M = Rl(L, C.mode, H, ae), M.return = C, M) : (M = n(M, L), M.return = C, M)
        }

        function G(C, M, L) {
            if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint") return M = Tc("" + M, C.mode, L), M.return = C, M;
            if (typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                    case A:
                        return L = Ar(M.type, M.key, M.props, null, C.mode, L), fs(L, M), L.return = C, L;
                    case E:
                        return M = _c(M, C.mode, L), M.return = C, M;
                    case me:
                        var H = M._init;
                        return M = H(M._payload), G(C, M, L)
                }
                if (ut(M) || Tt(M)) return M = Rl(M, C.mode, L, null), M.return = C, M;
                if (typeof M.then == "function") return G(C, Hr(M), L);
                if (M.$$typeof === K) return G(C, Lr(C, M), L);
                jr(C, M)
            }
            return null
        }

        function B(C, M, L, H) {
            var ae = M !== null ? M.key : null;
            if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint") return ae !== null ? null : h(C, M, "" + L, H);
            if (typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                    case A:
                        return L.key === ae ? x(C, M, L, H) : null;
                    case E:
                        return L.key === ae ? k(C, M, L, H) : null;
                    case me:
                        return ae = L._init, L = ae(L._payload), B(C, M, L, H)
                }
                if (ut(L) || Tt(L)) return ae !== null ? null : U(C, M, L, H, null);
                if (typeof L.then == "function") return B(C, M, Hr(L), H);
                if (L.$$typeof === K) return B(C, M, Lr(C, L), H);
                jr(C, L)
            }
            return null
        }

        function N(C, M, L, H, ae) {
            if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint") return C = C.get(L) || null, h(M, C, "" + H, ae);
            if (typeof H == "object" && H !== null) {
                switch (H.$$typeof) {
                    case A:
                        return C = C.get(H.key === null ? L : H.key) || null, x(M, C, H, ae);
                    case E:
                        return C = C.get(H.key === null ? L : H.key) || null, k(M, C, H, ae);
                    case me:
                        var _e = H._init;
                        return H = _e(H._payload), N(C, M, L, H, ae)
                }
                if (ut(H) || Tt(H)) return C = C.get(L) || null, U(M, C, H, ae, null);
                if (typeof H.then == "function") return N(C, M, L, Hr(H), ae);
                if (H.$$typeof === K) return N(C, M, L, Lr(M, H), ae);
                jr(M, H)
            }
            return null
        }

        function pe(C, M, L, H) {
            for (var ae = null, _e = null, le = M, fe = M = 0, Et = null; le !== null && fe < L.length; fe++) {
                le.index > fe ? (Et = le, le = null) : Et = le.sibling;
                var Ne = B(C, le, L[fe], H);
                if (Ne === null) {
                    le === null && (le = Et);
                    break
                }
                e && le && Ne.alternate === null && t(C, le), M = s(Ne, M, fe), _e === null ? ae = Ne : _e.sibling = Ne, _e = Ne, le = Et
            }
            if (fe === L.length) return a(C, le), Ke && Ul(C, fe), ae;
            if (le === null) {
                for (; fe < L.length; fe++) le = G(C, L[fe], H), le !== null && (M = s(le, M, fe), _e === null ? ae = le : _e.sibling = le, _e = le);
                return Ke && Ul(C, fe), ae
            }
            for (le = l(le); fe < L.length; fe++) Et = N(le, C, fe, L[fe], H), Et !== null && (e && Et.alternate !== null && le.delete(Et.key === null ? fe : Et.key), M = s(Et, M, fe), _e === null ? ae = Et : _e.sibling = Et, _e = Et);
            return e && le.forEach(function(cl) {
                return t(C, cl)
            }), Ke && Ul(C, fe), ae
        }

        function ue(C, M, L, H) {
            if (L == null) throw Error(u(151));
            for (var ae = null, _e = null, le = M, fe = M = 0, Et = null, Ne = L.next(); le !== null && !Ne.done; fe++, Ne = L.next()) {
                le.index > fe ? (Et = le, le = null) : Et = le.sibling;
                var cl = B(C, le, Ne.value, H);
                if (cl === null) {
                    le === null && (le = Et);
                    break
                }
                e && le && cl.alternate === null && t(C, le), M = s(cl, M, fe), _e === null ? ae = cl : _e.sibling = cl, _e = cl, le = Et
            }
            if (Ne.done) return a(C, le), Ke && Ul(C, fe), ae;
            if (le === null) {
                for (; !Ne.done; fe++, Ne = L.next()) Ne = G(C, Ne.value, H), Ne !== null && (M = s(Ne, M, fe), _e === null ? ae = Ne : _e.sibling = Ne, _e = Ne);
                return Ke && Ul(C, fe), ae
            }
            for (le = l(le); !Ne.done; fe++, Ne = L.next()) Ne = N(le, C, fe, Ne.value, H), Ne !== null && (e && Ne.alternate !== null && le.delete(Ne.key === null ? fe : Ne.key), M = s(Ne, M, fe), _e === null ? ae = Ne : _e.sibling = Ne, _e = Ne);
            return e && le.forEach(function(nb) {
                return t(C, nb)
            }), Ke && Ul(C, fe), ae
        }

        function He(C, M, L, H) {
            if (typeof L == "object" && L !== null && L.type === D && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
                switch (L.$$typeof) {
                    case A:
                        e: {
                            for (var ae = L.key; M !== null;) {
                                if (M.key === ae) {
                                    if (ae = L.type, ae === D) {
                                        if (M.tag === 7) {
                                            a(C, M.sibling), H = n(M, L.props.children), H.return = C, C = H;
                                            break e
                                        }
                                    } else if (M.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === me && uh(ae) === M.type) {
                                        a(C, M.sibling), H = n(M, L.props), fs(H, L), H.return = C, C = H;
                                        break e
                                    }
                                    a(C, M);
                                    break
                                } else t(C, M);
                                M = M.sibling
                            }
                            L.type === D ? (H = Rl(L.props.children, C.mode, H, L.key), H.return = C, C = H) : (H = Ar(L.type, L.key, L.props, null, C.mode, H), fs(H, L), H.return = C, C = H)
                        }
                        return d(C);
                    case E:
                        e: {
                            for (ae = L.key; M !== null;) {
                                if (M.key === ae)
                                    if (M.tag === 4 && M.stateNode.containerInfo === L.containerInfo && M.stateNode.implementation === L.implementation) {
                                        a(C, M.sibling), H = n(M, L.children || []), H.return = C, C = H;
                                        break e
                                    } else {
                                        a(C, M);
                                        break
                                    }
                                else t(C, M);
                                M = M.sibling
                            }
                            H = _c(L, C.mode, H),
                            H.return = C,
                            C = H
                        }
                        return d(C);
                    case me:
                        return ae = L._init, L = ae(L._payload), He(C, M, L, H)
                }
                if (ut(L)) return pe(C, M, L, H);
                if (Tt(L)) {
                    if (ae = Tt(L), typeof ae != "function") throw Error(u(150));
                    return L = ae.call(L), ue(C, M, L, H)
                }
                if (typeof L.then == "function") return He(C, M, Hr(L), H);
                if (L.$$typeof === K) return He(C, M, Lr(C, L), H);
                jr(C, L)
            }
            return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L, M !== null && M.tag === 6 ? (a(C, M.sibling), H = n(M, L), H.return = C, C = H) : (a(C, M), H = Tc(L, C.mode, H), H.return = C, C = H), d(C)) : a(C, M)
        }
        return function(C, M, L, H) {
            try {
                ds = 0;
                var ae = He(C, M, L, H);
                return Hn = null, ae
            } catch (le) {
                if (le === as || le === Dr) throw le;
                var _e = sa(29, le, null, C.mode);
                return _e.lanes = H, _e.return = C, _e
            } finally {}
        }
    }
    var jn = ch(!0),
        dh = ch(!1),
        ya = I(null),
        Ga = null;

    function qi(e) {
        var t = e.alternate;
        $(mt, mt.current & 1), $(ya, e), Ga === null && (t === null || Xn.current !== null || t.memoizedState !== null) && (Ga = e)
    }

    function fh(e) {
        if (e.tag === 22) {
            if ($(mt, mt.current), $(ya, e), Ga === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (Ga = e)
            }
        } else $i()
    }

    function $i() {
        $(mt, mt.current), $(ya, ya.current)
    }

    function mi(e) {
        ee(ya), Ga === e && (Ga = null), ee(mt)
    }
    var mt = I(0);

    function Gr(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var a = t.memoizedState;
                if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Gd(a))) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    function td(e, t, a, l) {
        t = e.memoizedState, a = a(l, t), a = a == null ? t : S({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a)
    }
    var ad = {
        enqueueSetState: function(e, t, a) {
            e = e._reactInternals;
            var l = da(),
                n = Vi(l);
            n.payload = t, a != null && (n.callback = a), t = Yi(e, n, l), t !== null && (fa(t, e, l), ls(t, e, l))
        },
        enqueueReplaceState: function(e, t, a) {
            e = e._reactInternals;
            var l = da(),
                n = Vi(l);
            n.tag = 1, n.payload = t, a != null && (n.callback = a), t = Yi(e, n, l), t !== null && (fa(t, e, l), ls(t, e, l))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var a = da(),
                l = Vi(a);
            l.tag = 2, t != null && (l.callback = t), t = Yi(e, l, a), t !== null && (fa(t, e, a), ls(t, e, a))
        }
    };

    function ph(e, t, a, l, n, s, d) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, s, d) : t.prototype && t.prototype.isPureReactComponent ? !Qo(a, l) || !Qo(n, s) : !0
    }

    function hh(e, t, a, l) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && ad.enqueueReplaceState(t, t.state, null)
    }

    function Vl(e, t) {
        var a = t;
        if ("ref" in t) {
            a = {};
            for (var l in t) l !== "ref" && (a[l] = t[l])
        }
        if (e = e.defaultProps) {
            a === t && (a = S({}, a));
            for (var n in e) a[n] === void 0 && (a[n] = e[n])
        }
        return a
    }
    var Ir = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    };

    function gh(e) {
        Ir(e)
    }

    function mh(e) {
        console.error(e)
    }

    function bh(e) {
        Ir(e)
    }

    function Vr(e, t) {
        try {
            var a = e.onUncaughtError;
            a(t.value, {
                componentStack: t.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }

    function vh(e, t, a) {
        try {
            var l = e.onCaughtError;
            l(a.value, {
                componentStack: a.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }

    function id(e, t, a) {
        return a = Vi(a), a.tag = 3, a.payload = {
            element: null
        }, a.callback = function() {
            Vr(e, t)
        }, a
    }

    function yh(e) {
        return e = Vi(e), e.tag = 3, e
    }

    function Sh(e, t, a, l) {
        var n = a.type.getDerivedStateFromError;
        if (typeof n == "function") {
            var s = l.value;
            e.payload = function() {
                return n(s)
            }, e.callback = function() {
                vh(t, a, l)
            }
        }
        var d = a.stateNode;
        d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
            vh(t, a, l), typeof n != "function" && (al === null ? al = new Set([this]) : al.add(this));
            var h = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: h !== null ? h : ""
            })
        })
    }

    function n1(e, t, a, l, n) {
        if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
            if (t = a.alternate, t !== null && Jo(t, a, n, !0), a = ya.current, a !== null) {
                switch (a.tag) {
                    case 13:
                        return Ga === null ? Ed() : a.alternate === null && lt === 0 && (lt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === Bc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = new Set([l]) : t.add(l), Ld(e, l, n)), !1;
                    case 22:
                        return a.flags |= 65536, l === Bc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([l])
                        }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = new Set([l]) : a.add(l)), Ld(e, l, n)), !1
                }
                throw Error(u(435, a.tag))
            }
            return Ld(e, l, n), Ed(), !1
        }
        if (Ke) return t = ya.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, l !== Ac && (e = Error(u(422), {
            cause: l
        }), Wo(ga(e, a)))) : (l !== Ac && (t = Error(u(423), {
            cause: l
        }), Wo(ga(t, a))), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, l = ga(l, a), n = id(e.stateNode, l, n), Fc(e, n), lt !== 4 && (lt = 2)), !1;
        var s = Error(u(520), {
            cause: l
        });
        if (s = ga(s, a), ys === null ? ys = [s] : ys.push(s), lt !== 4 && (lt = 2), t === null) return !0;
        l = ga(l, a), a = t;
        do {
            switch (a.tag) {
                case 3:
                    return a.flags |= 65536, e = n & -n, a.lanes |= e, e = id(a.stateNode, l, e), Fc(a, e), !1;
                case 1:
                    if (t = a.type, s = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (al === null || !al.has(s)))) return a.flags |= 65536, n &= -n, a.lanes |= n, n = yh(n), Sh(n, e, a, l), Fc(a, n), !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var Th = Error(u(461)),
        At = !1;

    function Bt(e, t, a, l) {
        t.child = e === null ? dh(t, null, a, l) : jn(t, e.child, a, l)
    }

    function _h(e, t, a, l, n) {
        a = a.render;
        var s = t.ref;
        if ("ref" in l) {
            var d = {};
            for (var h in l) h !== "ref" && (d[h] = l[h])
        } else d = l;
        return jl(t), l = zc(e, t, a, d, s, n), h = Pc(), e !== null && !At ? (Hc(e, t, n), bi(e, t, n)) : (Ke && h && xc(t), t.flags |= 1, Bt(e, t, l, n), t.child)
    }

    function xh(e, t, a, l, n) {
        if (e === null) {
            var s = a.type;
            return typeof s == "function" && !Sc(s) && s.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = s, wh(e, t, s, l, n)) : (e = Ar(a.type, null, l, t, t.mode, n), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (s = e.child, !dd(e, n)) {
            var d = s.memoizedProps;
            if (a = a.compare, a = a !== null ? a : Qo, a(d, l) && e.ref === t.ref) return bi(e, t, n)
        }
        return t.flags |= 1, e = ci(s, l), e.ref = t.ref, e.return = t, t.child = e
    }

    function wh(e, t, a, l, n) {
        if (e !== null) {
            var s = e.memoizedProps;
            if (Qo(s, l) && e.ref === t.ref)
                if (At = !1, t.pendingProps = l = s, dd(e, n))(e.flags & 131072) !== 0 && (At = !0);
                else return t.lanes = e.lanes, bi(e, t, n)
        }
        return ld(e, t, a, l, n)
    }

    function Ah(e, t, a) {
        var l = t.pendingProps,
            n = l.children,
            s = e !== null ? e.memoizedState : null;
        if (l.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (l = s !== null ? s.baseLanes | a : a, e !== null) {
                    for (n = t.child = e.child, s = 0; n !== null;) s = s | n.lanes | n.childLanes, n = n.sibling;
                    t.childLanes = s & ~l
                } else t.childLanes = 0, t.child = null;
                return Mh(e, t, l, a)
            }
            if ((a & 536870912) !== 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, e !== null && kr(t, s !== null ? s.cachePool : null), s !== null ? wp(t, s) : Rc(), fh(t);
            else return t.lanes = t.childLanes = 536870912, Mh(e, t, s !== null ? s.baseLanes | a : a, a)
        } else s !== null ? (kr(t, s.cachePool), wp(t, s), $i(), t.memoizedState = null) : (e !== null && kr(t, null), Rc(), $i());
        return Bt(e, t, n, a), t.child
    }

    function Mh(e, t, a, l) {
        var n = Dc();
        return n = n === null ? null : {
            parent: gt._currentValue,
            pool: n
        }, t.memoizedState = {
            baseLanes: a,
            cachePool: n
        }, e !== null && kr(t, null), Rc(), fh(t), e !== null && Jo(e, t, l, !0), null
    }

    function Yr(e, t) {
        var a = t.ref;
        if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object") throw Error(u(284));
            (e === null || e.ref !== a) && (t.flags |= 4194816)
        }
    }

    function ld(e, t, a, l, n) {
        return jl(t), a = zc(e, t, a, l, void 0, n), l = Pc(), e !== null && !At ? (Hc(e, t, n), bi(e, t, n)) : (Ke && l && xc(t), t.flags |= 1, Bt(e, t, a, n), t.child)
    }

    function Eh(e, t, a, l, n, s) {
        return jl(t), t.updateQueue = null, a = Mp(t, l, a, n), Ap(e), l = Pc(), e !== null && !At ? (Hc(e, t, s), bi(e, t, s)) : (Ke && l && xc(t), t.flags |= 1, Bt(e, t, a, s), t.child)
    }

    function Ch(e, t, a, l, n) {
        if (jl(t), t.stateNode === null) {
            var s = Nn,
                d = a.contextType;
            typeof d == "object" && d !== null && (s = Pt(d)), s = new a(l, s), t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = ad, t.stateNode = s, s._reactInternals = t, s = t.stateNode, s.props = l, s.state = t.memoizedState, s.refs = {}, Nc(t), d = a.contextType, s.context = typeof d == "object" && d !== null ? Pt(d) : Nn, s.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (td(t, a, d, l), s.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (d = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), d !== s.state && ad.enqueueReplaceState(s, s.state, null), os(t, l, s, n), ns(), s.state = t.memoizedState), typeof s.componentDidMount == "function" && (t.flags |= 4194308), l = !0
        } else if (e === null) {
            s = t.stateNode;
            var h = t.memoizedProps,
                x = Vl(a, h);
            s.props = x;
            var k = s.context,
                U = a.contextType;
            d = Nn, typeof U == "object" && U !== null && (d = Pt(U));
            var G = a.getDerivedStateFromProps;
            U = typeof G == "function" || typeof s.getSnapshotBeforeUpdate == "function", h = t.pendingProps !== h, U || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (h || k !== d) && hh(t, s, l, d), Ii = !1;
            var B = t.memoizedState;
            s.state = B, os(t, l, s, n), ns(), k = t.memoizedState, h || B !== k || Ii ? (typeof G == "function" && (td(t, a, G, l), k = t.memoizedState), (x = Ii || ph(t, a, x, l, B, k, d)) ? (U || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = k), s.props = l, s.state = k, s.context = d, l = x) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), l = !1)
        } else {
            s = t.stateNode, Oc(e, t), d = t.memoizedProps, U = Vl(a, d), s.props = U, G = t.pendingProps, B = s.context, k = a.contextType, x = Nn, typeof k == "object" && k !== null && (x = Pt(k)), h = a.getDerivedStateFromProps, (k = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (d !== G || B !== x) && hh(t, s, l, x), Ii = !1, B = t.memoizedState, s.state = B, os(t, l, s, n), ns();
            var N = t.memoizedState;
            d !== G || B !== N || Ii || e !== null && e.dependencies !== null && Cr(e.dependencies) ? (typeof h == "function" && (td(t, a, h, l), N = t.memoizedState), (U = Ii || ph(t, a, U, l, B, N, x) || e !== null && e.dependencies !== null && Cr(e.dependencies)) ? (k || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(l, N, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(l, N, x)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || d === e.memoizedProps && B === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = N), s.props = l, s.state = N, s.context = x, l = U) : (typeof s.componentDidUpdate != "function" || d === e.memoizedProps && B === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024), l = !1)
        }
        return s = l, Yr(e, t), l = (t.flags & 128) !== 0, s || l ? (s = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : s.render(), t.flags |= 1, e !== null && l ? (t.child = jn(t, e.child, null, n), t.child = jn(t, null, a, n)) : Bt(e, t, a, n), t.memoizedState = s.state, e = t.child) : e = bi(e, t, n), e
    }

    function Lh(e, t, a, l) {
        return Zo(), t.flags |= 256, Bt(e, t, a, l), t.child
    }
    var nd = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function od(e) {
        return {
            baseLanes: e,
            cachePool: mp()
        }
    }

    function sd(e, t, a) {
        return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Sa), e
    }

    function kh(e, t, a) {
        var l = t.pendingProps,
            n = !1,
            s = (t.flags & 128) !== 0,
            d;
        if ((d = s) || (d = e !== null && e.memoizedState === null ? !1 : (mt.current & 2) !== 0), d && (n = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
            if (Ke) {
                if (n ? qi(t) : $i(), Ke) {
                    var h = it,
                        x;
                    if (x = h) {
                        e: {
                            for (x = h, h = ja; x.nodeType !== 8;) {
                                if (!h) {
                                    h = null;
                                    break e
                                }
                                if (x = La(x.nextSibling), x === null) {
                                    h = null;
                                    break e
                                }
                            }
                            h = x
                        }
                        h !== null ? (t.memoizedState = {
                            dehydrated: h,
                            treeContext: Xl !== null ? {
                                id: di,
                                overflow: fi
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, x = sa(18, null, null, 0), x.stateNode = h, x.return = t, t.child = x, Gt = t, it = null, x = !0) : x = !1
                    }
                    x || Pl(t)
                }
                if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null)) return Gd(h) ? t.lanes = 32 : t.lanes = 536870912, null;
                mi(t)
            }
            return h = l.children, l = l.fallback, n ? ($i(), n = t.mode, h = Qr({
                mode: "hidden",
                children: h
            }, n), l = Rl(l, n, a, null), h.return = t, l.return = t, h.sibling = l, t.child = h, n = t.child, n.memoizedState = od(a), n.childLanes = sd(e, d, a), t.memoizedState = nd, l) : (qi(t), rd(t, h))
        }
        if (x = e.memoizedState, x !== null && (h = x.dehydrated, h !== null)) {
            if (s) t.flags & 256 ? (qi(t), t.flags &= -257, t = ud(e, t, a)) : t.memoizedState !== null ? ($i(), t.child = e.child, t.flags |= 128, t = null) : ($i(), n = l.fallback, h = t.mode, l = Qr({
                mode: "visible",
                children: l.children
            }, h), n = Rl(n, h, a, null), n.flags |= 2, l.return = t, n.return = t, l.sibling = n, t.child = l, jn(t, e.child, null, a), l = t.child, l.memoizedState = od(a), l.childLanes = sd(e, d, a), t.memoizedState = nd, t = n);
            else if (qi(t), Gd(h)) {
                if (d = h.nextSibling && h.nextSibling.dataset, d) var k = d.dgst;
                d = k, l = Error(u(419)), l.stack = "", l.digest = d, Wo({
                    value: l,
                    source: null,
                    stack: null
                }), t = ud(e, t, a)
            } else if (At || Jo(e, t, a, !1), d = (a & e.childLanes) !== 0, At || d) {
                if (d = Ye, d !== null && (l = a & -a, l = (l & 42) !== 0 ? 1 : pn(l), l = (l & (d.suspendedLanes | a)) !== 0 ? 0 : l, l !== 0 && l !== x.retryLane)) throw x.retryLane = l, Bn(e, l), fa(d, e, l), Th;
                h.data === "$?" || Ed(), t = ud(e, t, a)
            } else h.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = x.treeContext, it = La(h.nextSibling), Gt = t, Ke = !0, zl = null, ja = !1, e !== null && (ba[va++] = di, ba[va++] = fi, ba[va++] = Xl, di = e.id, fi = e.overflow, Xl = t), t = rd(t, l.children), t.flags |= 4096);
            return t
        }
        return n ? ($i(), n = l.fallback, h = t.mode, x = e.child, k = x.sibling, l = ci(x, {
            mode: "hidden",
            children: l.children
        }), l.subtreeFlags = x.subtreeFlags & 65011712, k !== null ? n = ci(k, n) : (n = Rl(n, h, a, null), n.flags |= 2), n.return = t, l.return = t, l.sibling = n, t.child = l, l = n, n = t.child, h = e.child.memoizedState, h === null ? h = od(a) : (x = h.cachePool, x !== null ? (k = gt._currentValue, x = x.parent !== k ? {
            parent: k,
            pool: k
        } : x) : x = mp(), h = {
            baseLanes: h.baseLanes | a,
            cachePool: x
        }), n.memoizedState = h, n.childLanes = sd(e, d, a), t.memoizedState = nd, l) : (qi(t), a = e.child, e = a.sibling, a = ci(a, {
            mode: "visible",
            children: l.children
        }), a.return = t, a.sibling = null, e !== null && (d = t.deletions, d === null ? (t.deletions = [e], t.flags |= 16) : d.push(e)), t.child = a, t.memoizedState = null, a)
    }

    function rd(e, t) {
        return t = Qr({
            mode: "visible",
            children: t
        }, e.mode), t.return = e, e.child = t
    }

    function Qr(e, t) {
        return e = sa(22, e, null, t), e.lanes = 0, e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, e
    }

    function ud(e, t, a) {
        return jn(t, e.child, null, a), e = rd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function Dh(e, t, a) {
        e.lanes |= t;
        var l = e.alternate;
        l !== null && (l.lanes |= t), Ec(e.return, t, a)
    }

    function cd(e, t, a, l, n) {
        var s = e.memoizedState;
        s === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: a,
            tailMode: n
        } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = l, s.tail = a, s.tailMode = n)
    }

    function Bh(e, t, a) {
        var l = t.pendingProps,
            n = l.revealOrder,
            s = l.tail;
        if (Bt(e, t, l.children, a), l = mt.current, (l & 2) !== 0) l = l & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && Dh(e, a, t);
                else if (e.tag === 19) Dh(e, a, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            l &= 1
        }
        switch ($(mt, l), n) {
            case "forwards":
                for (a = t.child, n = null; a !== null;) e = a.alternate, e !== null && Gr(e) === null && (n = a), a = a.sibling;
                a = n, a === null ? (n = t.child, t.child = null) : (n = a.sibling, a.sibling = null), cd(t, !1, n, a, s);
                break;
            case "backwards":
                for (a = null, n = t.child, t.child = null; n !== null;) {
                    if (e = n.alternate, e !== null && Gr(e) === null) {
                        t.child = n;
                        break
                    }
                    e = n.sibling, n.sibling = a, a = n, n = e
                }
                cd(t, !0, a, null, s);
                break;
            case "together":
                cd(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function bi(e, t, a) {
        if (e !== null && (t.dependencies = e.dependencies), tl |= t.lanes, (a & t.childLanes) === 0)
            if (e !== null) {
                if (Jo(e, t, a, !1), (a & t.childLanes) === 0) return null
            } else return null;
        if (e !== null && t.child !== e.child) throw Error(u(153));
        if (t.child !== null) {
            for (e = t.child, a = ci(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null;) e = e.sibling, a = a.sibling = ci(e, e.pendingProps), a.return = t;
            a.sibling = null
        }
        return t.child
    }

    function dd(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Cr(e)))
    }

    function o1(e, t, a) {
        switch (t.tag) {
            case 3:
                Ve(t, t.stateNode.containerInfo), Gi(t, gt, e.memoizedState.cache), Zo();
                break;
            case 27:
            case 5:
                wo(t);
                break;
            case 4:
                Ve(t, t.stateNode.containerInfo);
                break;
            case 10:
                Gi(t, t.type, t.memoizedProps.value);
                break;
            case 13:
                var l = t.memoizedState;
                if (l !== null) return l.dehydrated !== null ? (qi(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? kh(e, t, a) : (qi(t), e = bi(e, t, a), e !== null ? e.sibling : null);
                qi(t);
                break;
            case 19:
                var n = (e.flags & 128) !== 0;
                if (l = (a & t.childLanes) !== 0, l || (Jo(e, t, a, !1), l = (a & t.childLanes) !== 0), n) {
                    if (l) return Bh(e, t, a);
                    t.flags |= 128
                }
                if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), $(mt, mt.current), l) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Ah(e, t, a);
            case 24:
                Gi(t, gt, e.memoizedState.cache)
        }
        return bi(e, t, a)
    }

    function Nh(e, t, a) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps) At = !0;
            else {
                if (!dd(e, a) && (t.flags & 128) === 0) return At = !1, o1(e, t, a);
                At = (e.flags & 131072) !== 0
            }
        else At = !1, Ke && (t.flags & 1048576) !== 0 && up(t, Er, t.index);
        switch (t.lanes = 0, t.tag) {
            case 16:
                e: {
                    e = t.pendingProps;
                    var l = t.elementType,
                        n = l._init;
                    if (l = n(l._payload), t.type = l, typeof l == "function") Sc(l) ? (e = Vl(l, e), t.tag = 1, t = Ch(null, t, l, e, a)) : (t.tag = 0, t = ld(null, t, l, e, a));
                    else {
                        if (l != null) {
                            if (n = l.$$typeof, n === be) {
                                t.tag = 11, t = _h(null, t, l, e, a);
                                break e
                            } else if (n === ie) {
                                t.tag = 14, t = xh(null, t, l, e, a);
                                break e
                            }
                        }
                        throw t = ei(l) || l, Error(u(306, t, ""))
                    }
                }
                return t;
            case 0:
                return ld(e, t, t.type, t.pendingProps, a);
            case 1:
                return l = t.type, n = Vl(l, t.pendingProps), Ch(e, t, l, n, a);
            case 3:
                e: {
                    if (Ve(t, t.stateNode.containerInfo), e === null) throw Error(u(387));l = t.pendingProps;
                    var s = t.memoizedState;n = s.element,
                    Oc(e, t),
                    os(t, l, null, a);
                    var d = t.memoizedState;
                    if (l = d.cache, Gi(t, gt, l), l !== s.cache && Cc(t, [gt], a, !0), ns(), l = d.element, s.isDehydrated)
                        if (s = {
                                element: l,
                                isDehydrated: !1,
                                cache: d.cache
                            }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
                            t = Lh(e, t, l, a);
                            break e
                        } else if (l !== n) {
                        n = ga(Error(u(424)), t), Wo(n), t = Lh(e, t, l, a);
                        break e
                    } else {
                        switch (e = t.stateNode.containerInfo, e.nodeType) {
                            case 9:
                                e = e.body;
                                break;
                            default:
                                e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (it = La(e.firstChild), Gt = t, Ke = !0, zl = null, ja = !0, a = dh(t, null, l, a), t.child = a; a;) a.flags = a.flags & -3 | 4096, a = a.sibling
                    } else {
                        if (Zo(), l === n) {
                            t = bi(e, t, a);
                            break e
                        }
                        Bt(e, t, l, a)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return Yr(e, t), e === null ? (a = Rg(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : Ke || (a = t.type, e = t.pendingProps, l = ru(ge.current).createElement(a), l[ct] = t, l[Dt] = e, Ot(l, a, e), at(l), t.stateNode = l) : t.memoizedState = Rg(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
                return wo(t), e === null && Ke && (l = t.stateNode = Og(t.type, t.pendingProps, ge.current), Gt = t, ja = !0, n = it, nl(t.type) ? (Id = n, it = La(l.firstChild)) : it = n), Bt(e, t, t.pendingProps.children, a), Yr(e, t), e === null && (t.flags |= 4194304), t.child;
            case 5:
                return e === null && Ke && ((n = l = it) && (l = O1(l, t.type, t.pendingProps, ja), l !== null ? (t.stateNode = l, Gt = t, it = La(l.firstChild), ja = !1, n = !0) : n = !1), n || Pl(t)), wo(t), n = t.type, s = t.pendingProps, d = e !== null ? e.memoizedProps : null, l = s.children, Pd(n, s) ? l = null : d !== null && Pd(n, d) && (t.flags |= 32), t.memoizedState !== null && (n = zc(e, t, Wm, null, null, a), Cs._currentValue = n), Yr(e, t), Bt(e, t, l, a), t.child;
            case 6:
                return e === null && Ke && ((e = a = it) && (a = F1(a, t.pendingProps, ja), a !== null ? (t.stateNode = a, Gt = t, it = null, e = !0) : e = !1), e || Pl(t)), null;
            case 13:
                return kh(e, t, a);
            case 4:
                return Ve(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = jn(t, null, l, a) : Bt(e, t, l, a), t.child;
            case 11:
                return _h(e, t, t.type, t.pendingProps, a);
            case 7:
                return Bt(e, t, t.pendingProps, a), t.child;
            case 8:
                return Bt(e, t, t.pendingProps.children, a), t.child;
            case 12:
                return Bt(e, t, t.pendingProps.children, a), t.child;
            case 10:
                return l = t.pendingProps, Gi(t, t.type, l.value), Bt(e, t, l.children, a), t.child;
            case 9:
                return n = t.type._context, l = t.pendingProps.children, jl(t), n = Pt(n), l = l(n), t.flags |= 1, Bt(e, t, l, a), t.child;
            case 14:
                return xh(e, t, t.type, t.pendingProps, a);
            case 15:
                return wh(e, t, t.type, t.pendingProps, a);
            case 19:
                return Bh(e, t, a);
            case 31:
                return l = t.pendingProps, a = t.mode, l = {
                    mode: l.mode,
                    children: l.children
                }, e === null ? (a = Qr(l, a), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = ci(e.child, l), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
            case 22:
                return Ah(e, t, a);
            case 24:
                return jl(t), l = Pt(gt), e === null ? (n = Dc(), n === null && (n = Ye, s = Lc(), n.pooledCache = s, s.refCount++, s !== null && (n.pooledCacheLanes |= a), n = s), t.memoizedState = {
                    parent: l,
                    cache: n
                }, Nc(t), Gi(t, gt, n)) : ((e.lanes & a) !== 0 && (Oc(e, t), os(t, null, null, a), ns()), n = e.memoizedState, s = t.memoizedState, n.parent !== l ? (n = {
                    parent: l,
                    cache: l
                }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), Gi(t, gt, l)) : (l = s.cache, Gi(t, gt, l), l !== n.cache && Cc(t, [gt], a, !0))), Bt(e, t, t.pendingProps.children, a), t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(u(156, t.tag))
    }

    function vi(e) {
        e.flags |= 4
    }

    function Oh(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
        else if (e.flags |= 16777216, !Hg(t)) {
            if (t = ya.current, t !== null && ((Le & 4194048) === Le ? Ga !== null : (Le & 62914560) !== Le && (Le & 536870912) === 0 || t !== Ga)) throw is = Bc, bp;
            e.flags |= 8192
        }
    }

    function qr(e, t) {
        t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? er() : 536870912, e.lanes |= t, Yn |= t)
    }

    function ps(e, t) {
        if (!Ke) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var a = null; t !== null;) t.alternate !== null && (a = t), t = t.sibling;
                a === null ? e.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = e.tail;
                for (var l = null; a !== null;) a.alternate !== null && (l = a), a = a.sibling;
                l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null
        }
    }

    function et(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            a = 0,
            l = 0;
        if (t)
            for (var n = e.child; n !== null;) a |= n.lanes | n.childLanes, l |= n.subtreeFlags & 65011712, l |= n.flags & 65011712, n.return = e, n = n.sibling;
        else
            for (n = e.child; n !== null;) a |= n.lanes | n.childLanes, l |= n.subtreeFlags, l |= n.flags, n.return = e, n = n.sibling;
        return e.subtreeFlags |= l, e.childLanes = a, t
    }

    function s1(e, t, a) {
        var l = t.pendingProps;
        switch (wc(t), t.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return et(t), null;
            case 1:
                return et(t), null;
            case 3:
                return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), hi(gt), Qt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && ($o(t) ? vi(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, fp())), et(t), null;
            case 26:
                return a = t.memoizedState, e === null ? (vi(t), a !== null ? (et(t), Oh(t, a)) : (et(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (vi(t), et(t), Oh(t, a)) : (et(t), t.flags &= -16777217) : (e.memoizedProps !== l && vi(t), et(t), t.flags &= -16777217), null;
            case 27:
                Oa(t), a = ge.current;
                var n = t.type;
                if (e !== null && t.stateNode != null) e.memoizedProps !== l && vi(t);
                else {
                    if (!l) {
                        if (t.stateNode === null) throw Error(u(166));
                        return et(t), null
                    }
                    e = se.current, $o(t) ? cp(t) : (e = Og(n, l, a), t.stateNode = e, vi(t))
                }
                return et(t), null;
            case 5:
                if (Oa(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && vi(t);
                else {
                    if (!l) {
                        if (t.stateNode === null) throw Error(u(166));
                        return et(t), null
                    }
                    if (e = se.current, $o(t)) cp(t);
                    else {
                        switch (n = ru(ge.current), e) {
                            case 1:
                                e = n.createElementNS("http://www.w3.org/2000/svg", a);
                                break;
                            case 2:
                                e = n.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                break;
                            default:
                                switch (a) {
                                    case "svg":
                                        e = n.createElementNS("http://www.w3.org/2000/svg", a);
                                        break;
                                    case "math":
                                        e = n.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                        break;
                                    case "script":
                                        e = n.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                                        break;
                                    case "select":
                                        e = typeof l.is == "string" ? n.createElement("select", {
                                            is: l.is
                                        }) : n.createElement("select"), l.multiple ? e.multiple = !0 : l.size && (e.size = l.size);
                                        break;
                                    default:
                                        e = typeof l.is == "string" ? n.createElement(a, {
                                            is: l.is
                                        }) : n.createElement(a)
                                }
                        }
                        e[ct] = t, e[Dt] = l;
                        e: for (n = t.child; n !== null;) {
                            if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
                            else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                                n.child.return = n, n = n.child;
                                continue
                            }
                            if (n === t) break e;
                            for (; n.sibling === null;) {
                                if (n.return === null || n.return === t) break e;
                                n = n.return
                            }
                            n.sibling.return = n.return, n = n.sibling
                        }
                        t.stateNode = e;
                        e: switch (Ot(e, a, l), a) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                e = !!l.autoFocus;
                                break e;
                            case "img":
                                e = !0;
                                break e;
                            default:
                                e = !1
                        }
                        e && vi(t)
                    }
                }
                return et(t), t.flags &= -16777217, null;
            case 6:
                if (e && t.stateNode != null) e.memoizedProps !== l && vi(t);
                else {
                    if (typeof l != "string" && t.stateNode === null) throw Error(u(166));
                    if (e = ge.current, $o(t)) {
                        if (e = t.stateNode, a = t.memoizedProps, l = null, n = Gt, n !== null) switch (n.tag) {
                            case 27:
                            case 5:
                                l = n.memoizedProps
                        }
                        e[ct] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Eg(e.nodeValue, a)), e || Pl(t)
                    } else e = ru(e).createTextNode(l), e[ct] = t, t.stateNode = e
                }
                return et(t), null;
            case 13:
                if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (n = $o(t), l !== null && l.dehydrated !== null) {
                        if (e === null) {
                            if (!n) throw Error(u(318));
                            if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(u(317));
                            n[ct] = t
                        } else Zo(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        et(t), n = !1
                    } else n = fp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
                    if (!n) return t.flags & 256 ? (mi(t), t) : (mi(t), null)
                }
                if (mi(t), (t.flags & 128) !== 0) return t.lanes = a, t;
                if (a = l !== null, e = e !== null && e.memoizedState !== null, a) {
                    l = t.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool);
                    var s = null;
                    l.memoizedState !== null && l.memoizedState.cachePool !== null && (s = l.memoizedState.cachePool.pool), s !== n && (l.flags |= 2048)
                }
                return a !== e && a && (t.child.flags |= 8192), qr(t, t.updateQueue), et(t), null;
            case 4:
                return Qt(), e === null && Kd(t.stateNode.containerInfo), et(t), null;
            case 10:
                return hi(t.type), et(t), null;
            case 19:
                if (ee(mt), n = t.memoizedState, n === null) return et(t), null;
                if (l = (t.flags & 128) !== 0, s = n.rendering, s === null)
                    if (l) ps(n, !1);
                    else {
                        if (lt !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = t.child; e !== null;) {
                                if (s = Gr(e), s !== null) {
                                    for (t.flags |= 128, ps(n, !1), e = s.updateQueue, t.updateQueue = e, qr(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null;) rp(a, e), a = a.sibling;
                                    return $(mt, mt.current & 1 | 2), t.child
                                }
                                e = e.sibling
                            }
                        n.tail !== null && la() > Wr && (t.flags |= 128, l = !0, ps(n, !1), t.lanes = 4194304)
                    }
                else {
                    if (!l)
                        if (e = Gr(s), e !== null) {
                            if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, qr(t, e), ps(n, !0), n.tail === null && n.tailMode === "hidden" && !s.alternate && !Ke) return et(t), null
                        } else 2 * la() - n.renderingStartTime > Wr && a !== 536870912 && (t.flags |= 128, l = !0, ps(n, !1), t.lanes = 4194304);
                    n.isBackwards ? (s.sibling = t.child, t.child = s) : (e = n.last, e !== null ? e.sibling = s : t.child = s, n.last = s)
                }
                return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = la(), t.sibling = null, e = mt.current, $(mt, l ? e & 1 | 2 : e & 1), t) : (et(t), null);
            case 22:
            case 23:
                return mi(t), Xc(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (et(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : et(t), a = t.updateQueue, a !== null && qr(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && ee(Gl), null;
            case 24:
                return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), hi(gt), et(t), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(u(156, t.tag))
    }

    function r1(e, t) {
        switch (wc(t), t.tag) {
            case 1:
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return hi(gt), Qt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return Oa(t), null;
            case 13:
                if (mi(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(u(340));
                    Zo()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return ee(mt), null;
            case 4:
                return Qt(), null;
            case 10:
                return hi(t.type), null;
            case 22:
            case 23:
                return mi(t), Xc(), e !== null && ee(Gl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 24:
                return hi(gt), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function Fh(e, t) {
        switch (wc(t), t.tag) {
            case 3:
                hi(gt), Qt();
                break;
            case 26:
            case 27:
            case 5:
                Oa(t);
                break;
            case 4:
                Qt();
                break;
            case 13:
                mi(t);
                break;
            case 19:
                ee(mt);
                break;
            case 10:
                hi(t.type);
                break;
            case 22:
            case 23:
                mi(t), Xc(), e !== null && ee(Gl);
                break;
            case 24:
                hi(gt)
        }
    }

    function hs(e, t) {
        try {
            var a = t.updateQueue,
                l = a !== null ? a.lastEffect : null;
            if (l !== null) {
                var n = l.next;
                a = n;
                do {
                    if ((a.tag & e) === e) {
                        l = void 0;
                        var s = a.create,
                            d = a.inst;
                        l = s(), d.destroy = l
                    }
                    a = a.next
                } while (a !== n)
            }
        } catch (h) {
            Ie(t, t.return, h)
        }
    }

    function Zi(e, t, a) {
        try {
            var l = t.updateQueue,
                n = l !== null ? l.lastEffect : null;
            if (n !== null) {
                var s = n.next;
                l = s;
                do {
                    if ((l.tag & e) === e) {
                        var d = l.inst,
                            h = d.destroy;
                        if (h !== void 0) {
                            d.destroy = void 0, n = t;
                            var x = a,
                                k = h;
                            try {
                                k()
                            } catch (U) {
                                Ie(n, x, U)
                            }
                        }
                    }
                    l = l.next
                } while (l !== s)
            }
        } catch (U) {
            Ie(t, t.return, U)
        }
    }

    function Kh(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var a = e.stateNode;
            try {
                xp(t, a)
            } catch (l) {
                Ie(e, e.return, l)
            }
        }
    }

    function Rh(e, t, a) {
        a.props = Vl(e.type, e.memoizedProps), a.state = e.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (l) {
            Ie(e, t, l)
        }
    }

    function gs(e, t) {
        try {
            var a = e.ref;
            if (a !== null) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var l = e.stateNode;
                        break;
                    case 30:
                        l = e.stateNode;
                        break;
                    default:
                        l = e.stateNode
                }
                typeof a == "function" ? e.refCleanup = a(l) : a.current = l
            }
        } catch (n) {
            Ie(e, t, n)
        }
    }

    function Ia(e, t) {
        var a = e.ref,
            l = e.refCleanup;
        if (a !== null)
            if (typeof l == "function") try {
                l()
            } catch (n) {
                Ie(e, t, n)
            } finally {
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
            } else if (typeof a == "function") try {
                a(null)
            } catch (n) {
                Ie(e, t, n)
            } else a.current = null
    }

    function Xh(e) {
        var t = e.type,
            a = e.memoizedProps,
            l = e.stateNode;
        try {
            e: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    a.autoFocus && l.focus();
                    break e;
                case "img":
                    a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet)
            }
        }
        catch (n) {
            Ie(e, e.return, n)
        }
    }

    function fd(e, t, a) {
        try {
            var l = e.stateNode;
            L1(l, e.type, a, t), l[Dt] = t
        } catch (n) {
            Ie(e, e.return, n)
        }
    }

    function Uh(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && nl(e.type) || e.tag === 4
    }

    function pd(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || Uh(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.tag === 27 && nl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function hd(e, t, a) {
        var l = e.tag;
        if (l === 5 || l === 6) e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = su));
        else if (l !== 4 && (l === 27 && nl(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
            for (hd(e, t, a), e = e.sibling; e !== null;) hd(e, t, a), e = e.sibling
    }

    function $r(e, t, a) {
        var l = e.tag;
        if (l === 5 || l === 6) e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
        else if (l !== 4 && (l === 27 && nl(e.type) && (a = e.stateNode), e = e.child, e !== null))
            for ($r(e, t, a), e = e.sibling; e !== null;) $r(e, t, a), e = e.sibling
    }

    function zh(e) {
        var t = e.stateNode,
            a = e.memoizedProps;
        try {
            for (var l = e.type, n = t.attributes; n.length;) t.removeAttributeNode(n[0]);
            Ot(t, l, a), t[ct] = e, t[Dt] = a
        } catch (s) {
            Ie(e, e.return, s)
        }
    }
    var yi = !1,
        rt = !1,
        gd = !1,
        Ph = typeof WeakSet == "function" ? WeakSet : Set,
        Mt = null;

    function u1(e, t) {
        if (e = e.containerInfo, Ud = hu, e = Wf(e), pc(e)) {
            if ("selectionStart" in e) var a = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                a = (a = e.ownerDocument) && a.defaultView || window;
                var l = a.getSelection && a.getSelection();
                if (l && l.rangeCount !== 0) {
                    a = l.anchorNode;
                    var n = l.anchorOffset,
                        s = l.focusNode;
                    l = l.focusOffset;
                    try {
                        a.nodeType, s.nodeType
                    } catch {
                        a = null;
                        break e
                    }
                    var d = 0,
                        h = -1,
                        x = -1,
                        k = 0,
                        U = 0,
                        G = e,
                        B = null;
                    t: for (;;) {
                        for (var N; G !== a || n !== 0 && G.nodeType !== 3 || (h = d + n), G !== s || l !== 0 && G.nodeType !== 3 || (x = d + l), G.nodeType === 3 && (d += G.nodeValue.length), (N = G.firstChild) !== null;) B = G, G = N;
                        for (;;) {
                            if (G === e) break t;
                            if (B === a && ++k === n && (h = d), B === s && ++U === l && (x = d), (N = G.nextSibling) !== null) break;
                            G = B, B = G.parentNode
                        }
                        G = N
                    }
                    a = h === -1 || x === -1 ? null : {
                        start: h,
                        end: x
                    }
                } else a = null
            }
            a = a || {
                start: 0,
                end: 0
            }
        } else a = null;
        for (zd = {
                focusedElem: e,
                selectionRange: a
            }, hu = !1, Mt = t; Mt !== null;)
            if (t = Mt, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, Mt = e;
            else
                for (; Mt !== null;) {
                    switch (t = Mt, s = t.alternate, e = t.flags, t.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((e & 1024) !== 0 && s !== null) {
                                e = void 0, a = t, n = s.memoizedProps, s = s.memoizedState, l = a.stateNode;
                                try {
                                    var pe = Vl(a.type, n, a.elementType === a.type);
                                    e = l.getSnapshotBeforeUpdate(pe, s), l.__reactInternalSnapshotBeforeUpdate = e
                                } catch (ue) {
                                    Ie(a, a.return, ue)
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9) jd(e);
                                else if (a === 1) switch (e.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        jd(e);
                                        break;
                                    default:
                                        e.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((e & 1024) !== 0) throw Error(u(163))
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, Mt = e;
                        break
                    }
                    Mt = t.return
                }
    }

    function Hh(e, t, a) {
        var l = a.flags;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                Wi(e, a), l & 4 && hs(5, a);
                break;
            case 1:
                if (Wi(e, a), l & 4)
                    if (e = a.stateNode, t === null) try {
                        e.componentDidMount()
                    } catch (d) {
                        Ie(a, a.return, d)
                    } else {
                        var n = Vl(a.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (d) {
                            Ie(a, a.return, d)
                        }
                    }
                l & 64 && Kh(a), l & 512 && gs(a, a.return);
                break;
            case 3:
                if (Wi(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
                    if (t = null, a.child !== null) switch (a.child.tag) {
                        case 27:
                        case 5:
                            t = a.child.stateNode;
                            break;
                        case 1:
                            t = a.child.stateNode
                    }
                    try {
                        xp(e, t)
                    } catch (d) {
                        Ie(a, a.return, d)
                    }
                }
                break;
            case 27:
                t === null && l & 4 && zh(a);
            case 26:
            case 5:
                Wi(e, a), t === null && l & 4 && Xh(a), l & 512 && gs(a, a.return);
                break;
            case 12:
                Wi(e, a);
                break;
            case 13:
                Wi(e, a), l & 4 && Ih(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = v1.bind(null, a), K1(e, a))));
                break;
            case 22:
                if (l = a.memoizedState !== null || yi, !l) {
                    t = t !== null && t.memoizedState !== null || rt, n = yi;
                    var s = rt;
                    yi = l, (rt = t) && !s ? Ji(e, a, (a.subtreeFlags & 8772) !== 0) : Wi(e, a), yi = n, rt = s
                }
                break;
            case 30:
                break;
            default:
                Wi(e, a)
        }
    }

    function jh(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, jh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Bo(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }
    var Ze = null,
        Jt = !1;

    function Si(e, t, a) {
        for (a = a.child; a !== null;) Gh(e, t, a), a = a.sibling
    }

    function Gh(e, t, a) {
        if (_t && typeof _t.onCommitFiberUnmount == "function") try {
            _t.onCommitFiberUnmount(xl, a)
        } catch {}
        switch (a.tag) {
            case 26:
                rt || Ia(a, t), Si(e, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
                break;
            case 27:
                rt || Ia(a, t);
                var l = Ze,
                    n = Jt;
                nl(a.type) && (Ze = a.stateNode, Jt = !1), Si(e, t, a), ws(a.stateNode), Ze = l, Jt = n;
                break;
            case 5:
                rt || Ia(a, t);
            case 6:
                if (l = Ze, n = Jt, Ze = null, Si(e, t, a), Ze = l, Jt = n, Ze !== null)
                    if (Jt) try {
                        (Ze.nodeType === 9 ? Ze.body : Ze.nodeName === "HTML" ? Ze.ownerDocument.body : Ze).removeChild(a.stateNode)
                    } catch (s) {
                        Ie(a, t, s)
                    } else try {
                        Ze.removeChild(a.stateNode)
                    } catch (s) {
                        Ie(a, t, s)
                    }
                break;
            case 18:
                Ze !== null && (Jt ? (e = Ze, Bg(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), Bs(e)) : Bg(Ze, a.stateNode));
                break;
            case 4:
                l = Ze, n = Jt, Ze = a.stateNode.containerInfo, Jt = !0, Si(e, t, a), Ze = l, Jt = n;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                rt || Zi(2, a, t), rt || Zi(4, a, t), Si(e, t, a);
                break;
            case 1:
                rt || (Ia(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Rh(a, t, l)), Si(e, t, a);
                break;
            case 21:
                Si(e, t, a);
                break;
            case 22:
                rt = (l = rt) || a.memoizedState !== null, Si(e, t, a), rt = l;
                break;
            default:
                Si(e, t, a)
        }
    }

    function Ih(e, t) {
        if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
            Bs(e)
        } catch (a) {
            Ie(t, t.return, a)
        }
    }

    function c1(e) {
        switch (e.tag) {
            case 13:
            case 19:
                var t = e.stateNode;
                return t === null && (t = e.stateNode = new Ph), t;
            case 22:
                return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Ph), t;
            default:
                throw Error(u(435, e.tag))
        }
    }

    function md(e, t) {
        var a = c1(e);
        t.forEach(function(l) {
            var n = y1.bind(null, e, l);
            a.has(l) || (a.add(l), l.then(n, n))
        })
    }

    function ra(e, t) {
        var a = t.deletions;
        if (a !== null)
            for (var l = 0; l < a.length; l++) {
                var n = a[l],
                    s = e,
                    d = t,
                    h = d;
                e: for (; h !== null;) {
                    switch (h.tag) {
                        case 27:
                            if (nl(h.type)) {
                                Ze = h.stateNode, Jt = !1;
                                break e
                            }
                            break;
                        case 5:
                            Ze = h.stateNode, Jt = !1;
                            break e;
                        case 3:
                        case 4:
                            Ze = h.stateNode.containerInfo, Jt = !0;
                            break e
                    }
                    h = h.return
                }
                if (Ze === null) throw Error(u(160));
                Gh(s, d, n), Ze = null, Jt = !1, s = n.alternate, s !== null && (s.return = null), n.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null;) Vh(t, e), t = t.sibling
    }
    var Ca = null;

    function Vh(e, t) {
        var a = e.alternate,
            l = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ra(t, e), ua(e), l & 4 && (Zi(3, e, e.return), hs(3, e), Zi(5, e, e.return));
                break;
            case 1:
                ra(t, e), ua(e), l & 512 && (rt || a === null || Ia(a, a.return)), l & 64 && yi && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
                break;
            case 26:
                var n = Ca;
                if (ra(t, e), ua(e), l & 512 && (rt || a === null || Ia(a, a.return)), l & 4) {
                    var s = a !== null ? a.memoizedState : null;
                    if (l = e.memoizedState, a === null)
                        if (l === null)
                            if (e.stateNode === null) {
                                e: {
                                    l = e.type,
                                    a = e.memoizedProps,
                                    n = n.ownerDocument || n;t: switch (l) {
                                        case "title":
                                            s = n.getElementsByTagName("title")[0], (!s || s[Ni] || s[ct] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = n.createElement(l), n.head.insertBefore(s, n.querySelector("head > title"))), Ot(s, l, a), s[ct] = e, at(s), l = s;
                                            break e;
                                        case "link":
                                            var d = zg("link", "href", n).get(l + (a.href || ""));
                                            if (d) {
                                                for (var h = 0; h < d.length; h++)
                                                    if (s = d[h], s.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && s.getAttribute("rel") === (a.rel == null ? null : a.rel) && s.getAttribute("title") === (a.title == null ? null : a.title) && s.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                        d.splice(h, 1);
                                                        break t
                                                    }
                                            }
                                            s = n.createElement(l), Ot(s, l, a), n.head.appendChild(s);
                                            break;
                                        case "meta":
                                            if (d = zg("meta", "content", n).get(l + (a.content || ""))) {
                                                for (h = 0; h < d.length; h++)
                                                    if (s = d[h], s.getAttribute("content") === (a.content == null ? null : "" + a.content) && s.getAttribute("name") === (a.name == null ? null : a.name) && s.getAttribute("property") === (a.property == null ? null : a.property) && s.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && s.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                        d.splice(h, 1);
                                                        break t
                                                    }
                                            }
                                            s = n.createElement(l), Ot(s, l, a), n.head.appendChild(s);
                                            break;
                                        default:
                                            throw Error(u(468, l))
                                    }
                                    s[ct] = e,
                                    at(s),
                                    l = s
                                }
                                e.stateNode = l
                            }
                    else Pg(n, e.type, e.stateNode);
                    else e.stateNode = Ug(n, l, e.memoizedProps);
                    else s !== l ? (s === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : s.count--, l === null ? Pg(n, e.type, e.stateNode) : Ug(n, l, e.memoizedProps)) : l === null && e.stateNode !== null && fd(e, e.memoizedProps, a.memoizedProps)
                }
                break;
            case 27:
                ra(t, e), ua(e), l & 512 && (rt || a === null || Ia(a, a.return)), a !== null && l & 4 && fd(e, e.memoizedProps, a.memoizedProps);
                break;
            case 5:
                if (ra(t, e), ua(e), l & 512 && (rt || a === null || Ia(a, a.return)), e.flags & 32) {
                    n = e.stateNode;
                    try {
                        zi(n, "")
                    } catch (N) {
                        Ie(e, e.return, N)
                    }
                }
                l & 4 && e.stateNode != null && (n = e.memoizedProps, fd(e, n, a !== null ? a.memoizedProps : n)), l & 1024 && (gd = !0);
                break;
            case 6:
                if (ra(t, e), ua(e), l & 4) {
                    if (e.stateNode === null) throw Error(u(162));
                    l = e.memoizedProps, a = e.stateNode;
                    try {
                        a.nodeValue = l
                    } catch (N) {
                        Ie(e, e.return, N)
                    }
                }
                break;
            case 3:
                if (du = null, n = Ca, Ca = uu(t.containerInfo), ra(t, e), Ca = n, ua(e), l & 4 && a !== null && a.memoizedState.isDehydrated) try {
                    Bs(t.containerInfo)
                } catch (N) {
                    Ie(e, e.return, N)
                }
                gd && (gd = !1, Yh(e));
                break;
            case 4:
                l = Ca, Ca = uu(e.stateNode.containerInfo), ra(t, e), ua(e), Ca = l;
                break;
            case 12:
                ra(t, e), ua(e);
                break;
            case 13:
                ra(t, e), ua(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (_d = la()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, md(e, l)));
                break;
            case 22:
                n = e.memoizedState !== null;
                var x = a !== null && a.memoizedState !== null,
                    k = yi,
                    U = rt;
                if (yi = k || n, rt = U || x, ra(t, e), rt = U, yi = k, ua(e), l & 8192) e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (a === null || x || yi || rt || Yl(e)), a = null, t = e;;) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (a === null) {
                            x = a = t;
                            try {
                                if (s = x.stateNode, n) d = s.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                                else {
                                    h = x.stateNode;
                                    var G = x.memoizedProps.style,
                                        B = G != null && G.hasOwnProperty("display") ? G.display : null;
                                    h.style.display = B == null || typeof B == "boolean" ? "" : ("" + B).trim()
                                }
                            } catch (N) {
                                Ie(x, x.return, N)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (a === null) {
                            x = t;
                            try {
                                x.stateNode.nodeValue = n ? "" : x.memoizedProps
                            } catch (N) {
                                Ie(x, x.return, N)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break e;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === e) break e;
                        a === t && (a = null), t = t.return
                    }
                    a === t && (a = null), t.sibling.return = t.return, t = t.sibling
                }
                l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, md(e, a))));
                break;
            case 19:
                ra(t, e), ua(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, md(e, l)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                ra(t, e), ua(e)
        }
    }

    function ua(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var a, l = e.return; l !== null;) {
                    if (Uh(l)) {
                        a = l;
                        break
                    }
                    l = l.return
                }
                if (a == null) throw Error(u(160));
                switch (a.tag) {
                    case 27:
                        var n = a.stateNode,
                            s = pd(e);
                        $r(e, s, n);
                        break;
                    case 5:
                        var d = a.stateNode;
                        a.flags & 32 && (zi(d, ""), a.flags &= -33);
                        var h = pd(e);
                        $r(e, h, d);
                        break;
                    case 3:
                    case 4:
                        var x = a.stateNode.containerInfo,
                            k = pd(e);
                        hd(e, k, x);
                        break;
                    default:
                        throw Error(u(161))
                }
            } catch (U) {
                Ie(e, e.return, U)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function Yh(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null;) {
                var t = e;
                Yh(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling
            }
    }

    function Wi(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null;) Hh(e, t.alternate, t), t = t.sibling
    }

    function Yl(e) {
        for (e = e.child; e !== null;) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    Zi(4, t, t.return), Yl(t);
                    break;
                case 1:
                    Ia(t, t.return);
                    var a = t.stateNode;
                    typeof a.componentWillUnmount == "function" && Rh(t, t.return, a), Yl(t);
                    break;
                case 27:
                    ws(t.stateNode);
                case 26:
                case 5:
                    Ia(t, t.return), Yl(t);
                    break;
                case 22:
                    t.memoizedState === null && Yl(t);
                    break;
                case 30:
                    Yl(t);
                    break;
                default:
                    Yl(t)
            }
            e = e.sibling
        }
    }

    function Ji(e, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
            var l = t.alternate,
                n = e,
                s = t,
                d = s.flags;
            switch (s.tag) {
                case 0:
                case 11:
                case 15:
                    Ji(n, s, a), hs(4, s);
                    break;
                case 1:
                    if (Ji(n, s, a), l = s, n = l.stateNode, typeof n.componentDidMount == "function") try {
                        n.componentDidMount()
                    } catch (k) {
                        Ie(l, l.return, k)
                    }
                    if (l = s, n = l.updateQueue, n !== null) {
                        var h = l.stateNode;
                        try {
                            var x = n.shared.hiddenCallbacks;
                            if (x !== null)
                                for (n.shared.hiddenCallbacks = null, n = 0; n < x.length; n++) _p(x[n], h)
                        } catch (k) {
                            Ie(l, l.return, k)
                        }
                    }
                    a && d & 64 && Kh(s), gs(s, s.return);
                    break;
                case 27:
                    zh(s);
                case 26:
                case 5:
                    Ji(n, s, a), a && l === null && d & 4 && Xh(s), gs(s, s.return);
                    break;
                case 12:
                    Ji(n, s, a);
                    break;
                case 13:
                    Ji(n, s, a), a && d & 4 && Ih(n, s);
                    break;
                case 22:
                    s.memoizedState === null && Ji(n, s, a), gs(s, s.return);
                    break;
                case 30:
                    break;
                default:
                    Ji(n, s, a)
            }
            t = t.sibling
        }
    }

    function bd(e, t) {
        var a = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && es(a))
    }

    function vd(e, t) {
        e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && es(e))
    }

    function Va(e, t, a, l) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) Qh(e, t, a, l), t = t.sibling
    }

    function Qh(e, t, a, l) {
        var n = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Va(e, t, a, l), n & 2048 && hs(9, t);
                break;
            case 1:
                Va(e, t, a, l);
                break;
            case 3:
                Va(e, t, a, l), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && es(e)));
                break;
            case 12:
                if (n & 2048) {
                    Va(e, t, a, l), e = t.stateNode;
                    try {
                        var s = t.memoizedProps,
                            d = s.id,
                            h = s.onPostCommit;
                        typeof h == "function" && h(d, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (x) {
                        Ie(t, t.return, x)
                    }
                } else Va(e, t, a, l);
                break;
            case 13:
                Va(e, t, a, l);
                break;
            case 23:
                break;
            case 22:
                s = t.stateNode, d = t.alternate, t.memoizedState !== null ? s._visibility & 2 ? Va(e, t, a, l) : ms(e, t) : s._visibility & 2 ? Va(e, t, a, l) : (s._visibility |= 2, Gn(e, t, a, l, (t.subtreeFlags & 10256) !== 0)), n & 2048 && bd(d, t);
                break;
            case 24:
                Va(e, t, a, l), n & 2048 && vd(t.alternate, t);
                break;
            default:
                Va(e, t, a, l)
        }
    }

    function Gn(e, t, a, l, n) {
        for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;) {
            var s = e,
                d = t,
                h = a,
                x = l,
                k = d.flags;
            switch (d.tag) {
                case 0:
                case 11:
                case 15:
                    Gn(s, d, h, x, n), hs(8, d);
                    break;
                case 23:
                    break;
                case 22:
                    var U = d.stateNode;
                    d.memoizedState !== null ? U._visibility & 2 ? Gn(s, d, h, x, n) : ms(s, d) : (U._visibility |= 2, Gn(s, d, h, x, n)), n && k & 2048 && bd(d.alternate, d);
                    break;
                case 24:
                    Gn(s, d, h, x, n), n && k & 2048 && vd(d.alternate, d);
                    break;
                default:
                    Gn(s, d, h, x, n)
            }
            t = t.sibling
        }
    }

    function ms(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) {
                var a = e,
                    l = t,
                    n = l.flags;
                switch (l.tag) {
                    case 22:
                        ms(a, l), n & 2048 && bd(l.alternate, l);
                        break;
                    case 24:
                        ms(a, l), n & 2048 && vd(l.alternate, l);
                        break;
                    default:
                        ms(a, l)
                }
                t = t.sibling
            }
    }
    var bs = 8192;

    function In(e) {
        if (e.subtreeFlags & bs)
            for (e = e.child; e !== null;) qh(e), e = e.sibling
    }

    function qh(e) {
        switch (e.tag) {
            case 26:
                In(e), e.flags & bs && e.memoizedState !== null && q1(Ca, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                In(e);
                break;
            case 3:
            case 4:
                var t = Ca;
                Ca = uu(e.stateNode.containerInfo), In(e), Ca = t;
                break;
            case 22:
                e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = bs, bs = 16777216, In(e), bs = t) : In(e));
                break;
            default:
                In(e)
        }
    }

    function $h(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child, e !== null)) {
            t.child = null;
            do t = e.sibling, e.sibling = null, e = t; while (e !== null)
        }
    }

    function vs(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var l = t[a];
                    Mt = l, Wh(l, e)
                }
            $h(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) Zh(e), e = e.sibling
    }

    function Zh(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                vs(e), e.flags & 2048 && Zi(9, e, e.return);
                break;
            case 3:
                vs(e);
                break;
            case 12:
                vs(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Zr(e)) : vs(e);
                break;
            default:
                vs(e)
        }
    }

    function Zr(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var l = t[a];
                    Mt = l, Wh(l, e)
                }
            $h(e)
        }
        for (e = e.child; e !== null;) {
            switch (t = e, t.tag) {
                case 0:
                case 11:
                case 15:
                    Zi(8, t, t.return), Zr(t);
                    break;
                case 22:
                    a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Zr(t));
                    break;
                default:
                    Zr(t)
            }
            e = e.sibling
        }
    }

    function Wh(e, t) {
        for (; Mt !== null;) {
            var a = Mt;
            switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    Zi(8, a, t);
                    break;
                case 23:
                case 22:
                    if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                        var l = a.memoizedState.cachePool.pool;
                        l != null && l.refCount++
                    }
                    break;
                case 24:
                    es(a.memoizedState.cache)
            }
            if (l = a.child, l !== null) l.return = a, Mt = l;
            else e: for (a = e; Mt !== null;) {
                l = Mt;
                var n = l.sibling,
                    s = l.return;
                if (jh(l), l === a) {
                    Mt = null;
                    break e
                }
                if (n !== null) {
                    n.return = s, Mt = n;
                    break e
                }
                Mt = s
            }
        }
    }
    var d1 = {
            getCacheForType: function(e) {
                var t = Pt(gt),
                    a = t.data.get(e);
                return a === void 0 && (a = e(), t.data.set(e, a)), a
            }
        },
        f1 = typeof WeakMap == "function" ? WeakMap : Map,
        Re = 0,
        Ye = null,
        xe = null,
        Le = 0,
        Xe = 0,
        ca = null,
        el = !1,
        Vn = !1,
        yd = !1,
        Ti = 0,
        lt = 0,
        tl = 0,
        Ql = 0,
        Sd = 0,
        Sa = 0,
        Yn = 0,
        ys = null,
        ea = null,
        Td = !1,
        _d = 0,
        Wr = 1 / 0,
        Jr = null,
        al = null,
        Nt = 0,
        il = null,
        Qn = null,
        qn = 0,
        xd = 0,
        wd = null,
        Jh = null,
        Ss = 0,
        Ad = null;

    function da() {
        if ((Re & 2) !== 0 && Le !== 0) return Le & -Le;
        if (X.T !== null) {
            var e = Kn;
            return e !== 0 ? e : Bd()
        }
        return ar()
    }

    function eg() {
        Sa === 0 && (Sa = (Le & 536870912) === 0 || Ke ? fn() : 536870912);
        var e = ya.current;
        return e !== null && (e.flags |= 32), Sa
    }

    function fa(e, t, a) {
        (e === Ye && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null) && ($n(e, 0), ll(e, Le, Sa, !1)), Ml(e, a), ((Re & 2) === 0 || e !== Ye) && (e === Ye && ((Re & 2) === 0 && (Ql |= a), lt === 4 && ll(e, Le, Sa, !1)), Ya(e))
    }

    function tg(e, t, a) {
        if ((Re & 6) !== 0) throw Error(u(327));
        var l = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || ti(e, t),
            n = l ? g1(e, t) : Cd(e, t, !0),
            s = l;
        do {
            if (n === 0) {
                Vn && !l && ll(e, t, 0, !1);
                break
            } else {
                if (a = e.current.alternate, s && !p1(a)) {
                    n = Cd(e, t, !1), s = !1;
                    continue
                }
                if (n === 2) {
                    if (s = t, e.errorRecoveryDisabledLanes & s) var d = 0;
                    else d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
                    if (d !== 0) {
                        t = d;
                        e: {
                            var h = e;n = ys;
                            var x = h.current.memoizedState.isDehydrated;
                            if (x && ($n(h, d).flags |= 256), d = Cd(h, d, !1), d !== 2) {
                                if (yd && !x) {
                                    h.errorRecoveryDisabledLanes |= s, Ql |= s, n = 4;
                                    break e
                                }
                                s = ea, ea = n, s !== null && (ea === null ? ea = s : ea.push.apply(ea, s))
                            }
                            n = d
                        }
                        if (s = !1, n !== 2) continue
                    }
                }
                if (n === 1) {
                    $n(e, 0), ll(e, t, 0, !0);
                    break
                }
                e: {
                    switch (l = e, s = n, s) {
                        case 0:
                        case 1:
                            throw Error(u(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            ll(l, t, Sa, !el);
                            break e;
                        case 2:
                            ea = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(u(329))
                    }
                    if ((t & 62914560) === t && (n = _d + 300 - la(), 10 < n)) {
                        if (ll(l, t, Sa, !el), dn(l, 0, !0) !== 0) break e;
                        l.timeoutHandle = kg(ag.bind(null, l, a, ea, Jr, Td, t, Sa, Ql, Yn, el, s, 2, -0, 0), n);
                        break e
                    }
                    ag(l, a, ea, Jr, Td, t, Sa, Ql, Yn, el, s, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Ya(e)
    }

    function ag(e, t, a, l, n, s, d, h, x, k, U, G, B, N) {
        if (e.timeoutHandle = -1, G = t.subtreeFlags, (G & 8192 || (G & 16785408) === 16785408) && (Es = {
                stylesheets: null,
                count: 0,
                unsuspend: Q1
            }, qh(t), G = $1(), G !== null)) {
            e.cancelPendingCommit = G(ug.bind(null, e, t, s, a, l, n, d, h, x, U, 1, B, N)), ll(e, s, d, !k);
            return
        }
        ug(e, t, s, a, l, n, d, h, x)
    }

    function p1(e) {
        for (var t = e;;) {
            var a = t.tag;
            if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
                for (var l = 0; l < a.length; l++) {
                    var n = a[l],
                        s = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!oa(s(), n)) return !1
                    } catch {
                        return !1
                    }
                }
            if (a = t.child, t.subtreeFlags & 16384 && a !== null) a.return = t, t = a;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function ll(e, t, a, l) {
        t &= ~Sd, t &= ~Ql, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
        for (var n = t; 0 < n;) {
            var s = 31 - xt(n),
                d = 1 << s;
            l[s] = -1, n &= ~d
        }
        a !== 0 && tr(e, a, t)
    }

    function eu() {
        return (Re & 6) === 0 ? (Ts(0), !1) : !0
    }

    function Md() {
        if (xe !== null) {
            if (Xe === 0) var e = xe.return;
            else e = xe, pi = Hl = null, jc(e), Hn = null, ds = 0, e = xe;
            for (; e !== null;) Fh(e.alternate, e), e = e.return;
            xe = null
        }
    }

    function $n(e, t) {
        var a = e.timeoutHandle;
        a !== -1 && (e.timeoutHandle = -1, D1(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Md(), Ye = e, xe = a = ci(e.current, null), Le = t, Xe = 0, ca = null, el = !1, Vn = ti(e, t), yd = !1, Yn = Sa = Sd = Ql = tl = lt = 0, ea = ys = null, Td = !1, (t & 8) !== 0 && (t |= t & 32);
        var l = e.entangledLanes;
        if (l !== 0)
            for (e = e.entanglements, l &= t; 0 < l;) {
                var n = 31 - xt(l),
                    s = 1 << n;
                t |= e[n], l &= ~s
            }
        return Ti = t, _r(), a
    }

    function ig(e, t) {
        Se = null, X.H = Pr, t === as || t === Dr ? (t = Sp(), Xe = 3) : t === bp ? (t = Sp(), Xe = 4) : Xe = t === Th ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ca = t, xe === null && (lt = 1, Vr(e, ga(t, e.current)))
    }

    function lg() {
        var e = X.H;
        return X.H = Pr, e === null ? Pr : e
    }

    function ng() {
        var e = X.A;
        return X.A = d1, e
    }

    function Ed() {
        lt = 4, el || (Le & 4194048) !== Le && ya.current !== null || (Vn = !0), (tl & 134217727) === 0 && (Ql & 134217727) === 0 || Ye === null || ll(Ye, Le, Sa, !1)
    }

    function Cd(e, t, a) {
        var l = Re;
        Re |= 2;
        var n = lg(),
            s = ng();
        (Ye !== e || Le !== t) && (Jr = null, $n(e, t)), t = !1;
        var d = lt;
        e: do try {
                if (Xe !== 0 && xe !== null) {
                    var h = xe,
                        x = ca;
                    switch (Xe) {
                        case 8:
                            Md(), d = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            ya.current === null && (t = !0);
                            var k = Xe;
                            if (Xe = 0, ca = null, Zn(e, h, x, k), a && Vn) {
                                d = 0;
                                break e
                            }
                            break;
                        default:
                            k = Xe, Xe = 0, ca = null, Zn(e, h, x, k)
                    }
                }
                h1(), d = lt;
                break
            } catch (U) {
                ig(e, U)
            }
            while (!0);
            return t && e.shellSuspendCounter++, pi = Hl = null, Re = l, X.H = n, X.A = s, xe === null && (Ye = null, Le = 0, _r()), d
    }

    function h1() {
        for (; xe !== null;) og(xe)
    }

    function g1(e, t) {
        var a = Re;
        Re |= 2;
        var l = lg(),
            n = ng();
        Ye !== e || Le !== t ? (Jr = null, Wr = la() + 500, $n(e, t)) : Vn = ti(e, t);
        e: do try {
                if (Xe !== 0 && xe !== null) {
                    t = xe;
                    var s = ca;
                    t: switch (Xe) {
                        case 1:
                            Xe = 0, ca = null, Zn(e, t, s, 1);
                            break;
                        case 2:
                        case 9:
                            if (vp(s)) {
                                Xe = 0, ca = null, sg(t);
                                break
                            }
                            t = function() {
                                Xe !== 2 && Xe !== 9 || Ye !== e || (Xe = 7), Ya(e)
                            }, s.then(t, t);
                            break e;
                        case 3:
                            Xe = 7;
                            break e;
                        case 4:
                            Xe = 5;
                            break e;
                        case 7:
                            vp(s) ? (Xe = 0, ca = null, sg(t)) : (Xe = 0, ca = null, Zn(e, t, s, 7));
                            break;
                        case 5:
                            var d = null;
                            switch (xe.tag) {
                                case 26:
                                    d = xe.memoizedState;
                                case 5:
                                case 27:
                                    var h = xe;
                                    if (!d || Hg(d)) {
                                        Xe = 0, ca = null;
                                        var x = h.sibling;
                                        if (x !== null) xe = x;
                                        else {
                                            var k = h.return;
                                            k !== null ? (xe = k, tu(k)) : xe = null
                                        }
                                        break t
                                    }
                            }
                            Xe = 0, ca = null, Zn(e, t, s, 5);
                            break;
                        case 6:
                            Xe = 0, ca = null, Zn(e, t, s, 6);
                            break;
                        case 8:
                            Md(), lt = 6;
                            break e;
                        default:
                            throw Error(u(462))
                    }
                }
                m1();
                break
            } catch (U) {
                ig(e, U)
            }
            while (!0);
            return pi = Hl = null, X.H = l, X.A = n, Re = a, xe !== null ? 0 : (Ye = null, Le = 0, _r(), lt)
    }

    function m1() {
        for (; xe !== null && !Zs();) og(xe)
    }

    function og(e) {
        var t = Nh(e.alternate, e, Ti);
        e.memoizedProps = e.pendingProps, t === null ? tu(e) : xe = t
    }

    function sg(e) {
        var t = e,
            a = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = Eh(a, t, t.pendingProps, t.type, void 0, Le);
                break;
            case 11:
                t = Eh(a, t, t.pendingProps, t.type.render, t.ref, Le);
                break;
            case 5:
                jc(t);
            default:
                Fh(a, t), t = xe = rp(t, Ti), t = Nh(a, t, Ti)
        }
        e.memoizedProps = e.pendingProps, t === null ? tu(e) : xe = t
    }

    function Zn(e, t, a, l) {
        pi = Hl = null, jc(t), Hn = null, ds = 0;
        var n = t.return;
        try {
            if (n1(e, n, t, a, Le)) {
                lt = 1, Vr(e, ga(a, e.current)), xe = null;
                return
            }
        } catch (s) {
            if (n !== null) throw xe = n, s;
            lt = 1, Vr(e, ga(a, e.current)), xe = null;
            return
        }
        t.flags & 32768 ? (Ke || l === 1 ? e = !0 : Vn || (Le & 536870912) !== 0 ? e = !1 : (el = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = ya.current, l !== null && l.tag === 13 && (l.flags |= 16384))), rg(t, e)) : tu(t)
    }

    function tu(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                rg(t, el);
                return
            }
            e = t.return;
            var a = s1(t.alternate, t, Ti);
            if (a !== null) {
                xe = a;
                return
            }
            if (t = t.sibling, t !== null) {
                xe = t;
                return
            }
            xe = t = e
        } while (t !== null);
        lt === 0 && (lt = 5)
    }

    function rg(e, t) {
        do {
            var a = r1(e.alternate, e);
            if (a !== null) {
                a.flags &= 32767, xe = a;
                return
            }
            if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
                xe = e;
                return
            }
            xe = e = a
        } while (e !== null);
        lt = 6, xe = null
    }

    function ug(e, t, a, l, n, s, d, h, x) {
        e.cancelPendingCommit = null;
        do au(); while (Nt !== 0);
        if ((Re & 6) !== 0) throw Error(u(327));
        if (t !== null) {
            if (t === e.current) throw Error(u(177));
            if (s = t.lanes | t.childLanes, s |= vc, Co(e, a, s, d, h, x), e === Ye && (xe = Ye = null, Le = 0), Qn = t, il = e, qn = a, xd = s, wd = n, Jh = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, S1(Fa, function() {
                    return hg(), null
                })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
                l = X.T, X.T = null, n = W.p, W.p = 2, d = Re, Re |= 4;
                try {
                    u1(e, t, a)
                } finally {
                    Re = d, W.p = n, X.T = l
                }
            }
            Nt = 1, cg(), dg(), fg()
        }
    }

    function cg() {
        if (Nt === 1) {
            Nt = 0;
            var e = il,
                t = Qn,
                a = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || a) {
                a = X.T, X.T = null;
                var l = W.p;
                W.p = 2;
                var n = Re;
                Re |= 4;
                try {
                    Vh(t, e);
                    var s = zd,
                        d = Wf(e.containerInfo),
                        h = s.focusedElem,
                        x = s.selectionRange;
                    if (d !== h && h && h.ownerDocument && Zf(h.ownerDocument.documentElement, h)) {
                        if (x !== null && pc(h)) {
                            var k = x.start,
                                U = x.end;
                            if (U === void 0 && (U = k), "selectionStart" in h) h.selectionStart = k, h.selectionEnd = Math.min(U, h.value.length);
                            else {
                                var G = h.ownerDocument || document,
                                    B = G && G.defaultView || window;
                                if (B.getSelection) {
                                    var N = B.getSelection(),
                                        pe = h.textContent.length,
                                        ue = Math.min(x.start, pe),
                                        He = x.end === void 0 ? ue : Math.min(x.end, pe);
                                    !N.extend && ue > He && (d = He, He = ue, ue = d);
                                    var C = $f(h, ue),
                                        M = $f(h, He);
                                    if (C && M && (N.rangeCount !== 1 || N.anchorNode !== C.node || N.anchorOffset !== C.offset || N.focusNode !== M.node || N.focusOffset !== M.offset)) {
                                        var L = G.createRange();
                                        L.setStart(C.node, C.offset), N.removeAllRanges(), ue > He ? (N.addRange(L), N.extend(M.node, M.offset)) : (L.setEnd(M.node, M.offset), N.addRange(L))
                                    }
                                }
                            }
                        }
                        for (G = [], N = h; N = N.parentNode;) N.nodeType === 1 && G.push({
                            element: N,
                            left: N.scrollLeft,
                            top: N.scrollTop
                        });
                        for (typeof h.focus == "function" && h.focus(), h = 0; h < G.length; h++) {
                            var H = G[h];
                            H.element.scrollLeft = H.left, H.element.scrollTop = H.top
                        }
                    }
                    hu = !!Ud, zd = Ud = null
                } finally {
                    Re = n, W.p = l, X.T = a
                }
            }
            e.current = t, Nt = 2
        }
    }

    function dg() {
        if (Nt === 2) {
            Nt = 0;
            var e = il,
                t = Qn,
                a = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || a) {
                a = X.T, X.T = null;
                var l = W.p;
                W.p = 2;
                var n = Re;
                Re |= 4;
                try {
                    Hh(e, t.alternate, t)
                } finally {
                    Re = n, W.p = l, X.T = a
                }
            }
            Nt = 3
        }
    }

    function fg() {
        if (Nt === 4 || Nt === 3) {
            Nt = 0, on();
            var e = il,
                t = Qn,
                a = qn,
                l = Jh;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Nt = 5 : (Nt = 0, Qn = il = null, pg(e, e.pendingLanes));
            var n = e.pendingLanes;
            if (n === 0 && (al = null), hn(a), t = t.stateNode, _t && typeof _t.onCommitFiberRoot == "function") try {
                _t.onCommitFiberRoot(xl, t, void 0, (t.current.flags & 128) === 128)
            } catch {}
            if (l !== null) {
                t = X.T, n = W.p, W.p = 2, X.T = null;
                try {
                    for (var s = e.onRecoverableError, d = 0; d < l.length; d++) {
                        var h = l[d];
                        s(h.value, {
                            componentStack: h.stack
                        })
                    }
                } finally {
                    X.T = t, W.p = n
                }
            }(qn & 3) !== 0 && au(), Ya(e), n = e.pendingLanes, (a & 4194090) !== 0 && (n & 42) !== 0 ? e === Ad ? Ss++ : (Ss = 0, Ad = e) : Ss = 0, Ts(0)
        }
    }

    function pg(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, es(t)))
    }

    function au(e) {
        return cg(), dg(), fg(), hg()
    }

    function hg() {
        if (Nt !== 5) return !1;
        var e = il,
            t = xd;
        xd = 0;
        var a = hn(qn),
            l = X.T,
            n = W.p;
        try {
            W.p = 32 > a ? 32 : a, X.T = null, a = wd, wd = null;
            var s = il,
                d = qn;
            if (Nt = 0, Qn = il = null, qn = 0, (Re & 6) !== 0) throw Error(u(331));
            var h = Re;
            if (Re |= 4, Zh(s.current), Qh(s, s.current, d, a), Re = h, Ts(0, !1), _t && typeof _t.onPostCommitFiberRoot == "function") try {
                _t.onPostCommitFiberRoot(xl, s)
            } catch {}
            return !0
        } finally {
            W.p = n, X.T = l, pg(e, t)
        }
    }

    function gg(e, t, a) {
        t = ga(a, t), t = id(e.stateNode, t, 2), e = Yi(e, t, 2), e !== null && (Ml(e, 2), Ya(e))
    }

    function Ie(e, t, a) {
        if (e.tag === 3) gg(e, e, a);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    gg(t, e, a);
                    break
                } else if (t.tag === 1) {
                    var l = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (al === null || !al.has(l))) {
                        e = ga(a, e), a = yh(2), l = Yi(t, a, 2), l !== null && (Sh(a, l, t, e), Ml(l, 2), Ya(l));
                        break
                    }
                }
                t = t.return
            }
    }

    function Ld(e, t, a) {
        var l = e.pingCache;
        if (l === null) {
            l = e.pingCache = new f1;
            var n = new Set;
            l.set(t, n)
        } else n = l.get(t), n === void 0 && (n = new Set, l.set(t, n));
        n.has(a) || (yd = !0, n.add(a), e = b1.bind(null, e, t, a), t.then(e, e))
    }

    function b1(e, t, a) {
        var l = e.pingCache;
        l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Ye === e && (Le & a) === a && (lt === 4 || lt === 3 && (Le & 62914560) === Le && 300 > la() - _d ? (Re & 2) === 0 && $n(e, 0) : Sd |= a, Yn === Le && (Yn = 0)), Ya(e)
    }

    function mg(e, t) {
        t === 0 && (t = er()), e = Bn(e, t), e !== null && (Ml(e, t), Ya(e))
    }

    function v1(e) {
        var t = e.memoizedState,
            a = 0;
        t !== null && (a = t.retryLane), mg(e, a)
    }

    function y1(e, t) {
        var a = 0;
        switch (e.tag) {
            case 13:
                var l = e.stateNode,
                    n = e.memoizedState;
                n !== null && (a = n.retryLane);
                break;
            case 19:
                l = e.stateNode;
                break;
            case 22:
                l = e.stateNode._retryCache;
                break;
            default:
                throw Error(u(314))
        }
        l !== null && l.delete(t), mg(e, a)
    }

    function S1(e, t) {
        return Mo(e, t)
    }
    var iu = null,
        Wn = null,
        kd = !1,
        lu = !1,
        Dd = !1,
        ql = 0;

    function Ya(e) {
        e !== Wn && e.next === null && (Wn === null ? iu = Wn = e : Wn = Wn.next = e), lu = !0, kd || (kd = !0, _1())
    }

    function Ts(e, t) {
        if (!Dd && lu) {
            Dd = !0;
            do
                for (var a = !1, l = iu; l !== null;) {
                    if (e !== 0) {
                        var n = l.pendingLanes;
                        if (n === 0) var s = 0;
                        else {
                            var d = l.suspendedLanes,
                                h = l.pingedLanes;
                            s = (1 << 31 - xt(42 | e) + 1) - 1, s &= n & ~(d & ~h), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0
                        }
                        s !== 0 && (a = !0, Sg(l, s))
                    } else s = Le, s = dn(l, l === Ye ? s : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (s & 3) === 0 || ti(l, s) || (a = !0, Sg(l, s));
                    l = l.next
                }
            while (a);
            Dd = !1
        }
    }

    function T1() {
        bg()
    }

    function bg() {
        lu = kd = !1;
        var e = 0;
        ql !== 0 && (k1() && (e = ql), ql = 0);
        for (var t = la(), a = null, l = iu; l !== null;) {
            var n = l.next,
                s = vg(l, t);
            s === 0 ? (l.next = null, a === null ? iu = n : a.next = n, n === null && (Wn = a)) : (a = l, (e !== 0 || (s & 3) !== 0) && (lu = !0)), l = n
        }
        Ts(e)
    }

    function vg(e, t) {
        for (var a = e.suspendedLanes, l = e.pingedLanes, n = e.expirationTimes, s = e.pendingLanes & -62914561; 0 < s;) {
            var d = 31 - xt(s),
                h = 1 << d,
                x = n[d];
            x === -1 ? ((h & a) === 0 || (h & l) !== 0) && (n[d] = ju(h, t)) : x <= t && (e.expiredLanes |= h), s &= ~h
        }
        if (t = Ye, a = Le, a = dn(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l = e.callbackNode, a === 0 || e === t && (Xe === 2 || Xe === 9) || e.cancelPendingCommit !== null) return l !== null && l !== null && Eo(l), e.callbackNode = null, e.callbackPriority = 0;
        if ((a & 3) === 0 || ti(e, a)) {
            if (t = a & -a, t === e.callbackPriority) return t;
            switch (l !== null && Eo(l), hn(a)) {
                case 2:
                case 8:
                    a = Ws;
                    break;
                case 32:
                    a = Fa;
                    break;
                case 268435456:
                    a = Js;
                    break;
                default:
                    a = Fa
            }
            return l = yg.bind(null, e), a = Mo(a, l), e.callbackPriority = t, e.callbackNode = a, t
        }
        return l !== null && l !== null && Eo(l), e.callbackPriority = 2, e.callbackNode = null, 2
    }

    function yg(e, t) {
        if (Nt !== 0 && Nt !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
        var a = e.callbackNode;
        if (au() && e.callbackNode !== a) return null;
        var l = Le;
        return l = dn(e, e === Ye ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l === 0 ? null : (tg(e, l, t), vg(e, la()), e.callbackNode != null && e.callbackNode === a ? yg.bind(null, e) : null)
    }

    function Sg(e, t) {
        if (au()) return null;
        tg(e, t, !0)
    }

    function _1() {
        B1(function() {
            (Re & 6) !== 0 ? Mo(Tl, T1) : bg()
        })
    }

    function Bd() {
        return ql === 0 && (ql = fn()), ql
    }

    function Tg(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yn("" + e)
    }

    function _g(e, t) {
        var a = t.ownerDocument.createElement("input");
        return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e
    }

    function x1(e, t, a, l, n) {
        if (t === "submit" && a && a.stateNode === n) {
            var s = Tg((n[Dt] || null).action),
                d = l.submitter;
            d && (t = (t = d[Dt] || null) ? Tg(t.formAction) : d.getAttribute("formAction"), t !== null && (s = t, d = null));
            var h = new An("action", "action", null, l, n);
            e.push({
                event: h,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (ql !== 0) {
                                var x = d ? _g(n, d) : new FormData(n);
                                Wc(a, {
                                    pending: !0,
                                    data: x,
                                    method: n.method,
                                    action: s
                                }, null, x)
                            }
                        } else typeof s == "function" && (h.preventDefault(), x = d ? _g(n, d) : new FormData(n), Wc(a, {
                            pending: !0,
                            data: x,
                            method: n.method,
                            action: s
                        }, s, x))
                    },
                    currentTarget: n
                }]
            })
        }
    }
    for (var Nd = 0; Nd < bc.length; Nd++) {
        var Od = bc[Nd],
            w1 = Od.toLowerCase(),
            A1 = Od[0].toUpperCase() + Od.slice(1);
        Ea(w1, "on" + A1)
    }
    Ea(tp, "onAnimationEnd"), Ea(ap, "onAnimationIteration"), Ea(ip, "onAnimationStart"), Ea("dblclick", "onDoubleClick"), Ea("focusin", "onFocus"), Ea("focusout", "onBlur"), Ea(Hm, "onTransitionRun"), Ea(jm, "onTransitionStart"), Ea(Gm, "onTransitionCancel"), Ea(lp, "onTransitionEnd"), Ri("onMouseEnter", ["mouseout", "mouseover"]), Ri("onMouseLeave", ["mouseout", "mouseover"]), Ri("onPointerEnter", ["pointerout", "pointerover"]), Ri("onPointerLeave", ["pointerout", "pointerover"]), Ua("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ua("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ua("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ua("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ua("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ua("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var _s = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        M1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_s));

    function xg(e, t) {
        t = (t & 4) !== 0;
        for (var a = 0; a < e.length; a++) {
            var l = e[a],
                n = l.event;
            l = l.listeners;
            e: {
                var s = void 0;
                if (t)
                    for (var d = l.length - 1; 0 <= d; d--) {
                        var h = l[d],
                            x = h.instance,
                            k = h.currentTarget;
                        if (h = h.listener, x !== s && n.isPropagationStopped()) break e;
                        s = h, n.currentTarget = k;
                        try {
                            s(n)
                        } catch (U) {
                            Ir(U)
                        }
                        n.currentTarget = null, s = x
                    } else
                        for (d = 0; d < l.length; d++) {
                            if (h = l[d], x = h.instance, k = h.currentTarget, h = h.listener, x !== s && n.isPropagationStopped()) break e;
                            s = h, n.currentTarget = k;
                            try {
                                s(n)
                            } catch (U) {
                                Ir(U)
                            }
                            n.currentTarget = null, s = x
                        }
            }
        }
    }

    function we(e, t) {
        var a = t[gn];
        a === void 0 && (a = t[gn] = new Set);
        var l = e + "__bubble";
        a.has(l) || (wg(t, e, 2, !1), a.add(l))
    }

    function Fd(e, t, a) {
        var l = 0;
        t && (l |= 4), wg(a, e, l, t)
    }
    var nu = "_reactListening" + Math.random().toString(36).slice(2);

    function Kd(e) {
        if (!e[nu]) {
            e[nu] = !0, nr.forEach(function(a) {
                a !== "selectionchange" && (M1.has(a) || Fd(a, !1, e), Fd(a, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[nu] || (t[nu] = !0, Fd("selectionchange", !1, t))
        }
    }

    function wg(e, t, a, l) {
        switch (Qg(t)) {
            case 2:
                var n = J1;
                break;
            case 8:
                n = eb;
                break;
            default:
                n = $d
        }
        a = n.bind(null, t, a, e), n = void 0, !Ho || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), l ? n !== void 0 ? e.addEventListener(t, a, {
            capture: !0,
            passive: n
        }) : e.addEventListener(t, a, !0) : n !== void 0 ? e.addEventListener(t, a, {
            passive: n
        }) : e.addEventListener(t, a, !1)
    }

    function Rd(e, t, a, l, n) {
        var s = l;
        if ((t & 1) === 0 && (t & 2) === 0 && l !== null) e: for (;;) {
            if (l === null) return;
            var d = l.tag;
            if (d === 3 || d === 4) {
                var h = l.stateNode.containerInfo;
                if (h === n) break;
                if (d === 4)
                    for (d = l.return; d !== null;) {
                        var x = d.tag;
                        if ((x === 3 || x === 4) && d.stateNode.containerInfo === n) return;
                        d = d.return
                    }
                for (; h !== null;) {
                    if (d = ai(h), d === null) return;
                    if (x = d.tag, x === 5 || x === 6 || x === 26 || x === 27) {
                        l = s = d;
                        continue e
                    }
                    h = h.parentNode
                }
            }
            l = l.return
        }
        pr(function() {
            var k = s,
                U = Tn(a),
                G = [];
            e: {
                var B = np.get(e);
                if (B !== void 0) {
                    var N = An,
                        pe = e;
                    switch (e) {
                        case "keypress":
                            if (xn(a) === 0) break e;
                        case "keydown":
                        case "keyup":
                            N = nc;
                            break;
                        case "focusin":
                            pe = "focus", N = Vo;
                            break;
                        case "focusout":
                            pe = "blur", N = Vo;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            N = Vo;
                            break;
                        case "click":
                            if (a.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            N = mr;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            N = qu;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            N = Zt;
                            break;
                        case tp:
                        case ap:
                        case ip:
                            N = Wu;
                            break;
                        case lp:
                            N = oc;
                            break;
                        case "scroll":
                        case "scrollend":
                            N = Yu;
                            break;
                        case "wheel":
                            N = rc;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            N = ec;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            N = zt;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            N = cc
                    }
                    var ue = (t & 4) !== 0,
                        He = !ue && (e === "scroll" || e === "scrollend"),
                        C = ue ? B !== null ? B + "Capture" : null : B;
                    ue = [];
                    for (var M = k, L; M !== null;) {
                        var H = M;
                        if (L = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || L === null || C === null || (H = Ll(M, C), H != null && ue.push(xs(M, H, L))), He) break;
                        M = M.return
                    }
                    0 < ue.length && (B = new N(B, pe, null, a, U), G.push({
                        event: B,
                        listeners: ue
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (B = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", B && a !== Sn && (pe = a.relatedTarget || a.fromElement) && (ai(pe) || pe[Xa])) break e;
                    if ((N || B) && (B = U.window === U ? U : (B = U.ownerDocument) ? B.defaultView || B.parentWindow : window, N ? (pe = a.relatedTarget || a.toElement, N = k, pe = pe ? ai(pe) : null, pe !== null && (He = f(pe), ue = pe.tag, pe !== He || ue !== 5 && ue !== 27 && ue !== 6) && (pe = null)) : (N = null, pe = k), N !== pe)) {
                        if (ue = mr, H = "onMouseLeave", C = "onMouseEnter", M = "mouse", (e === "pointerout" || e === "pointerover") && (ue = zt, H = "onPointerLeave", C = "onPointerEnter", M = "pointer"), He = N == null ? B : Fi(N), L = pe == null ? B : Fi(pe), B = new ue(H, M + "leave", N, a, U), B.target = He, B.relatedTarget = L, H = null, ai(U) === k && (ue = new ue(C, M + "enter", pe, a, U), ue.target = L, ue.relatedTarget = He, H = ue), He = H, N && pe) t: {
                            for (ue = N, C = pe, M = 0, L = ue; L; L = Jn(L)) M++;
                            for (L = 0, H = C; H; H = Jn(H)) L++;
                            for (; 0 < M - L;) ue = Jn(ue),
                            M--;
                            for (; 0 < L - M;) C = Jn(C),
                            L--;
                            for (; M--;) {
                                if (ue === C || C !== null && ue === C.alternate) break t;
                                ue = Jn(ue), C = Jn(C)
                            }
                            ue = null
                        }
                        else ue = null;
                        N !== null && Ag(G, B, N, ue, !1), pe !== null && He !== null && Ag(G, He, pe, ue, !0)
                    }
                }
                e: {
                    if (B = k ? Fi(k) : window, N = B.nodeName && B.nodeName.toLowerCase(), N === "select" || N === "input" && B.type === "file") var ae = ri;
                    else if (ne(B))
                        if (ui) ae = Um;
                        else {
                            ae = Rm;
                            var _e = Km
                        }
                    else N = B.nodeName,
                    !N || N.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? k && zo(k.elementType) && (ae = ri) : ae = Xm;
                    if (ae && (ae = ae(e, k))) {
                        Te(G, ae, a, U);
                        break e
                    }
                    _e && _e(e, B, k),
                    e === "focusout" && k && B.type === "number" && k.memoizedProps.value != null && Xo(B, "number", B.value)
                }
                switch (_e = k ? Fi(k) : window, e) {
                    case "focusin":
                        (ne(_e) || _e.contentEditable === "true") && (Ln = _e, hc = k, qo = null);
                        break;
                    case "focusout":
                        qo = hc = Ln = null;
                        break;
                    case "mousedown":
                        gc = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        gc = !1, Jf(G, a, U);
                        break;
                    case "selectionchange":
                        if (Pm) break;
                    case "keydown":
                    case "keyup":
                        Jf(G, a, U)
                }
                var le;
                if (Yo) e: {
                    switch (e) {
                        case "compositionstart":
                            var fe = "onCompositionStart";
                            break e;
                        case "compositionend":
                            fe = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            fe = "onCompositionUpdate";
                            break e
                    }
                    fe = void 0
                }
                else ji ? Sr(e, a) && (fe = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (fe = "onCompositionStart");fe && (br && a.locale !== "ko" && (ji || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && ji && (le = hr()) : (Pa = U, jo = "value" in Pa ? Pa.value : Pa.textContent, ji = !0)), _e = ou(k, fe), 0 < _e.length && (fe = new si(fe, e, null, a, U), G.push({
                    event: fe,
                    listeners: _e
                }), le ? fe.data = le : (le = Cn(a), le !== null && (fe.data = le)))),
                (le = fc ? T(e, a) : j(e, a)) && (fe = ou(k, "onBeforeInput"), 0 < fe.length && (_e = new si("onBeforeInput", "beforeinput", null, a, U), G.push({
                    event: _e,
                    listeners: fe
                }), _e.data = le)),
                x1(G, e, k, a, U)
            }
            xg(G, t)
        })
    }

    function xs(e, t, a) {
        return {
            instance: e,
            listener: t,
            currentTarget: a
        }
    }

    function ou(e, t) {
        for (var a = t + "Capture", l = []; e !== null;) {
            var n = e,
                s = n.stateNode;
            if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || s === null || (n = Ll(e, a), n != null && l.unshift(xs(e, n, s)), n = Ll(e, t), n != null && l.push(xs(e, n, s))), e.tag === 3) return l;
            e = e.return
        }
        return []
    }

    function Jn(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }

    function Ag(e, t, a, l, n) {
        for (var s = t._reactName, d = []; a !== null && a !== l;) {
            var h = a,
                x = h.alternate,
                k = h.stateNode;
            if (h = h.tag, x !== null && x === l) break;
            h !== 5 && h !== 26 && h !== 27 || k === null || (x = k, n ? (k = Ll(a, s), k != null && d.unshift(xs(a, k, x))) : n || (k = Ll(a, s), k != null && d.push(xs(a, k, x)))), a = a.return
        }
        d.length !== 0 && e.push({
            event: t,
            listeners: d
        })
    }
    var E1 = /\r\n?/g,
        C1 = /\u0000|\uFFFD/g;

    function Mg(e) {
        return (typeof e == "string" ? e : "" + e).replace(E1, `
`).replace(C1, "")
    }

    function Eg(e, t) {
        return t = Mg(t), Mg(e) === t
    }

    function su() {}

    function Pe(e, t, a, l, n, s) {
        switch (a) {
            case "children":
                typeof l == "string" ? t === "body" || t === "textarea" && l === "" || zi(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && zi(e, "" + l);
                break;
            case "className":
                bn(e, "class", l);
                break;
            case "tabIndex":
                bn(e, "tabindex", l);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                bn(e, a, l);
                break;
            case "style":
                Uo(e, l, s);
                break;
            case "data":
                if (t !== "object") {
                    bn(e, "data", l);
                    break
                }
            case "src":
            case "href":
                if (l === "" && (t !== "a" || a !== "href")) {
                    e.removeAttribute(a);
                    break
                }
                if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                    e.removeAttribute(a);
                    break
                }
                l = yn("" + l), e.setAttribute(a, l);
                break;
            case "action":
            case "formAction":
                if (typeof l == "function") {
                    e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof s == "function" && (a === "formAction" ? (t !== "input" && Pe(e, t, "name", n.name, n, null), Pe(e, t, "formEncType", n.formEncType, n, null), Pe(e, t, "formMethod", n.formMethod, n, null), Pe(e, t, "formTarget", n.formTarget, n, null)) : (Pe(e, t, "encType", n.encType, n, null), Pe(e, t, "method", n.method, n, null), Pe(e, t, "target", n.target, n, null)));
                if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                    e.removeAttribute(a);
                    break
                }
                l = yn("" + l), e.setAttribute(a, l);
                break;
            case "onClick":
                l != null && (e.onclick = su);
                break;
            case "onScroll":
                l != null && we("scroll", e);
                break;
            case "onScrollEnd":
                l != null && we("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (l != null) {
                    if (typeof l != "object" || !("__html" in l)) throw Error(u(61));
                    if (a = l.__html, a != null) {
                        if (n.children != null) throw Error(u(60));
                        e.innerHTML = a
                    }
                }
                break;
            case "multiple":
                e.multiple = l && typeof l != "function" && typeof l != "symbol";
                break;
            case "muted":
                e.muted = l && typeof l != "function" && typeof l != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                    e.removeAttribute("xlink:href");
                    break
                }
                a = yn("" + l), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "" + l) : e.removeAttribute(a);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
                break;
            case "capture":
            case "download":
                l === !0 ? e.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, l) : e.removeAttribute(a);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(a, l) : e.removeAttribute(a);
                break;
            case "rowSpan":
            case "start":
                l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(a) : e.setAttribute(a, l);
                break;
            case "popover":
                we("beforetoggle", e), we("toggle", e), Xi(e, "popover", l);
                break;
            case "xlinkActuate":
                ha(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
                break;
            case "xlinkArcrole":
                ha(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
                break;
            case "xlinkRole":
                ha(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
                break;
            case "xlinkShow":
                ha(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
                break;
            case "xlinkTitle":
                ha(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
                break;
            case "xlinkType":
                ha(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
                break;
            case "xmlBase":
                ha(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
                break;
            case "xmlLang":
                ha(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
                break;
            case "xmlSpace":
                ha(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
                break;
            case "is":
                Xi(e, "is", l);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Vu.get(a) || a, Xi(e, a, l))
        }
    }

    function Xd(e, t, a, l, n, s) {
        switch (a) {
            case "style":
                Uo(e, l, s);
                break;
            case "dangerouslySetInnerHTML":
                if (l != null) {
                    if (typeof l != "object" || !("__html" in l)) throw Error(u(61));
                    if (a = l.__html, a != null) {
                        if (n.children != null) throw Error(u(60));
                        e.innerHTML = a
                    }
                }
                break;
            case "children":
                typeof l == "string" ? zi(e, l) : (typeof l == "number" || typeof l == "bigint") && zi(e, "" + l);
                break;
            case "onScroll":
                l != null && we("scroll", e);
                break;
            case "onScrollEnd":
                l != null && we("scrollend", e);
                break;
            case "onClick":
                l != null && (e.onclick = su);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!mn.hasOwnProperty(a)) e: {
                    if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), t = a.slice(2, n ? a.length - 7 : void 0), s = e[Dt] || null, s = s != null ? s[a] : null, typeof s == "function" && e.removeEventListener(t, s, n), typeof l == "function")) {
                        typeof s != "function" && s !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, n);
                        break e
                    }
                    a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : Xi(e, a, l)
                }
        }
    }

    function Ot(e, t, a) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                we("error", e), we("load", e);
                var l = !1,
                    n = !1,
                    s;
                for (s in a)
                    if (a.hasOwnProperty(s)) {
                        var d = a[s];
                        if (d != null) switch (s) {
                            case "src":
                                l = !0;
                                break;
                            case "srcSet":
                                n = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(u(137, t));
                            default:
                                Pe(e, t, s, d, a, null)
                        }
                    } n && Pe(e, t, "srcSet", a.srcSet, a, null), l && Pe(e, t, "src", a.src, a, null);
                return;
            case "input":
                we("invalid", e);
                var h = s = d = n = null,
                    x = null,
                    k = null;
                for (l in a)
                    if (a.hasOwnProperty(l)) {
                        var U = a[l];
                        if (U != null) switch (l) {
                            case "name":
                                n = U;
                                break;
                            case "type":
                                d = U;
                                break;
                            case "checked":
                                x = U;
                                break;
                            case "defaultChecked":
                                k = U;
                                break;
                            case "value":
                                s = U;
                                break;
                            case "defaultValue":
                                h = U;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (U != null) throw Error(u(137, t));
                                break;
                            default:
                                Pe(e, t, l, U, a, null)
                        }
                    } rr(e, s, h, x, k, d, n, !1), li(e);
                return;
            case "select":
                we("invalid", e), l = d = s = null;
                for (n in a)
                    if (a.hasOwnProperty(n) && (h = a[n], h != null)) switch (n) {
                        case "value":
                            s = h;
                            break;
                        case "defaultValue":
                            d = h;
                            break;
                        case "multiple":
                            l = h;
                        default:
                            Pe(e, t, n, h, a, null)
                    }
                t = s, a = d, e.multiple = !!l, t != null ? Ui(e, !!l, t, !1) : a != null && Ui(e, !!l, a, !0);
                return;
            case "textarea":
                we("invalid", e), s = n = l = null;
                for (d in a)
                    if (a.hasOwnProperty(d) && (h = a[d], h != null)) switch (d) {
                        case "value":
                            l = h;
                            break;
                        case "defaultValue":
                            n = h;
                            break;
                        case "children":
                            s = h;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (h != null) throw Error(u(91));
                            break;
                        default:
                            Pe(e, t, d, h, a, null)
                    }
                cr(e, l, n, s), li(e);
                return;
            case "option":
                for (x in a)
                    if (a.hasOwnProperty(x) && (l = a[x], l != null)) switch (x) {
                        case "selected":
                            e.selected = l && typeof l != "function" && typeof l != "symbol";
                            break;
                        default:
                            Pe(e, t, x, l, a, null)
                    }
                return;
            case "dialog":
                we("beforetoggle", e), we("toggle", e), we("cancel", e), we("close", e);
                break;
            case "iframe":
            case "object":
                we("load", e);
                break;
            case "video":
            case "audio":
                for (l = 0; l < _s.length; l++) we(_s[l], e);
                break;
            case "image":
                we("error", e), we("load", e);
                break;
            case "details":
                we("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                we("error", e), we("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (k in a)
                    if (a.hasOwnProperty(k) && (l = a[k], l != null)) switch (k) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(u(137, t));
                        default:
                            Pe(e, t, k, l, a, null)
                    }
                return;
            default:
                if (zo(t)) {
                    for (U in a) a.hasOwnProperty(U) && (l = a[U], l !== void 0 && Xd(e, t, U, l, a, void 0));
                    return
                }
        }
        for (h in a) a.hasOwnProperty(h) && (l = a[h], l != null && Pe(e, t, h, l, a, null))
    }

    function L1(e, t, a, l) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var n = null,
                    s = null,
                    d = null,
                    h = null,
                    x = null,
                    k = null,
                    U = null;
                for (N in a) {
                    var G = a[N];
                    if (a.hasOwnProperty(N) && G != null) switch (N) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            x = G;
                        default:
                            l.hasOwnProperty(N) || Pe(e, t, N, null, l, G)
                    }
                }
                for (var B in l) {
                    var N = l[B];
                    if (G = a[B], l.hasOwnProperty(B) && (N != null || G != null)) switch (B) {
                        case "type":
                            s = N;
                            break;
                        case "name":
                            n = N;
                            break;
                        case "checked":
                            k = N;
                            break;
                        case "defaultChecked":
                            U = N;
                            break;
                        case "value":
                            d = N;
                            break;
                        case "defaultValue":
                            h = N;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (N != null) throw Error(u(137, t));
                            break;
                        default:
                            N !== G && Pe(e, t, B, N, l, G)
                    }
                }
                Ro(e, d, h, x, k, U, s, n);
                return;
            case "select":
                N = d = h = B = null;
                for (s in a)
                    if (x = a[s], a.hasOwnProperty(s) && x != null) switch (s) {
                        case "value":
                            break;
                        case "multiple":
                            N = x;
                        default:
                            l.hasOwnProperty(s) || Pe(e, t, s, null, l, x)
                    }
                for (n in l)
                    if (s = l[n], x = a[n], l.hasOwnProperty(n) && (s != null || x != null)) switch (n) {
                        case "value":
                            B = s;
                            break;
                        case "defaultValue":
                            h = s;
                            break;
                        case "multiple":
                            d = s;
                        default:
                            s !== x && Pe(e, t, n, s, l, x)
                    }
                t = h, a = d, l = N, B != null ? Ui(e, !!a, B, !1) : !!l != !!a && (t != null ? Ui(e, !!a, t, !0) : Ui(e, !!a, a ? [] : "", !1));
                return;
            case "textarea":
                N = B = null;
                for (h in a)
                    if (n = a[h], a.hasOwnProperty(h) && n != null && !l.hasOwnProperty(h)) switch (h) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Pe(e, t, h, null, l, n)
                    }
                for (d in l)
                    if (n = l[d], s = a[d], l.hasOwnProperty(d) && (n != null || s != null)) switch (d) {
                        case "value":
                            B = n;
                            break;
                        case "defaultValue":
                            N = n;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (n != null) throw Error(u(91));
                            break;
                        default:
                            n !== s && Pe(e, t, d, n, l, s)
                    }
                ur(e, B, N);
                return;
            case "option":
                for (var pe in a)
                    if (B = a[pe], a.hasOwnProperty(pe) && B != null && !l.hasOwnProperty(pe)) switch (pe) {
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            Pe(e, t, pe, null, l, B)
                    }
                for (x in l)
                    if (B = l[x], N = a[x], l.hasOwnProperty(x) && B !== N && (B != null || N != null)) switch (x) {
                        case "selected":
                            e.selected = B && typeof B != "function" && typeof B != "symbol";
                            break;
                        default:
                            Pe(e, t, x, B, l, N)
                    }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var ue in a) B = a[ue], a.hasOwnProperty(ue) && B != null && !l.hasOwnProperty(ue) && Pe(e, t, ue, null, l, B);
                for (k in l)
                    if (B = l[k], N = a[k], l.hasOwnProperty(k) && B !== N && (B != null || N != null)) switch (k) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (B != null) throw Error(u(137, t));
                            break;
                        default:
                            Pe(e, t, k, B, l, N)
                    }
                return;
            default:
                if (zo(t)) {
                    for (var He in a) B = a[He], a.hasOwnProperty(He) && B !== void 0 && !l.hasOwnProperty(He) && Xd(e, t, He, void 0, l, B);
                    for (U in l) B = l[U], N = a[U], !l.hasOwnProperty(U) || B === N || B === void 0 && N === void 0 || Xd(e, t, U, B, l, N);
                    return
                }
        }
        for (var C in a) B = a[C], a.hasOwnProperty(C) && B != null && !l.hasOwnProperty(C) && Pe(e, t, C, null, l, B);
        for (G in l) B = l[G], N = a[G], !l.hasOwnProperty(G) || B === N || B == null && N == null || Pe(e, t, G, B, l, N)
    }
    var Ud = null,
        zd = null;

    function ru(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }

    function Cg(e) {
        switch (e) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function Lg(e, t) {
        if (e === 0) switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return e === 1 && t === "foreignObject" ? 0 : e
    }

    function Pd(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Hd = null;

    function k1() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Hd ? !1 : (Hd = e, !0) : (Hd = null, !1)
    }
    var kg = typeof setTimeout == "function" ? setTimeout : void 0,
        D1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Dg = typeof Promise == "function" ? Promise : void 0,
        B1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Dg < "u" ? function(e) {
            return Dg.resolve(null).then(e).catch(N1)
        } : kg;

    function N1(e) {
        setTimeout(function() {
            throw e
        })
    }

    function nl(e) {
        return e === "head"
    }

    function Bg(e, t) {
        var a = t,
            l = 0,
            n = 0;
        do {
            var s = a.nextSibling;
            if (e.removeChild(a), s && s.nodeType === 8)
                if (a = s.data, a === "/$") {
                    if (0 < l && 8 > l) {
                        a = l;
                        var d = e.ownerDocument;
                        if (a & 1 && ws(d.documentElement), a & 2 && ws(d.body), a & 4)
                            for (a = d.head, ws(a), d = a.firstChild; d;) {
                                var h = d.nextSibling,
                                    x = d.nodeName;
                                d[Ni] || x === "SCRIPT" || x === "STYLE" || x === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = h
                            }
                    }
                    if (n === 0) {
                        e.removeChild(s), Bs(t);
                        return
                    }
                    n--
                } else a === "$" || a === "$?" || a === "$!" ? n++ : l = a.charCodeAt(0) - 48;
            else l = 0;
            a = s
        } while (a);
        Bs(t)
    }

    function jd(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var a = t;
            switch (t = t.nextSibling, a.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    jd(a), Bo(a);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (a.rel.toLowerCase() === "stylesheet") continue
            }
            e.removeChild(a)
        }
    }

    function O1(e, t, a, l) {
        for (; e.nodeType === 1;) {
            var n = a;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
            } else if (l) {
                if (!e[Ni]) switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop")) break;
                        return e;
                    case "link":
                        if (s = e.getAttribute("rel"), s === "stylesheet" && e.hasAttribute("data-precedence")) break;
                        if (s !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title)) break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence")) break;
                        return e;
                    case "script":
                        if (s = e.getAttribute("src"), (s !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && s && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                        return e;
                    default:
                        return e
                }
            } else if (t === "input" && e.type === "hidden") {
                var s = n.name == null ? null : "" + n.name;
                if (n.type === "hidden" && e.getAttribute("name") === s) return e
            } else return e;
            if (e = La(e.nextSibling), e === null) break
        }
        return null
    }

    function F1(e, t, a) {
        if (t === "") return null;
        for (; e.nodeType !== 3;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = La(e.nextSibling), e === null)) return null;
        return e
    }

    function Gd(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }

    function K1(e, t) {
        var a = e.ownerDocument;
        if (e.data !== "$?" || a.readyState === "complete") t();
        else {
            var l = function() {
                t(), a.removeEventListener("DOMContentLoaded", l)
            };
            a.addEventListener("DOMContentLoaded", l), e._reactRetry = l
        }
    }

    function La(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
                if (t === "/$") return null
            }
        }
        return e
    }
    var Id = null;

    function Ng(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var a = e.data;
                if (a === "$" || a === "$!" || a === "$?") {
                    if (t === 0) return e;
                    t--
                } else a === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }

    function Og(e, t, a) {
        switch (t = ru(a), e) {
            case "html":
                if (e = t.documentElement, !e) throw Error(u(452));
                return e;
            case "head":
                if (e = t.head, !e) throw Error(u(453));
                return e;
            case "body":
                if (e = t.body, !e) throw Error(u(454));
                return e;
            default:
                throw Error(u(451))
        }
    }

    function ws(e) {
        for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
        Bo(e)
    }
    var Ta = new Map,
        Fg = new Set;

    function uu(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var _i = W.d;
    W.d = {
        f: R1,
        r: X1,
        D: U1,
        C: z1,
        L: P1,
        m: H1,
        X: G1,
        S: j1,
        M: I1
    };

    function R1() {
        var e = _i.f(),
            t = eu();
        return e || t
    }

    function X1(e) {
        var t = Oi(e);
        t !== null && t.tag === 5 && t.type === "form" ? th(t) : _i.r(e)
    }
    var eo = typeof document > "u" ? null : document;

    function Kg(e, t, a) {
        var l = eo;
        if (l && typeof t == "string" && t) {
            var n = $t(t);
            n = 'link[rel="' + e + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), Fg.has(n) || (Fg.add(n), e = {
                rel: e,
                crossOrigin: a,
                href: t
            }, l.querySelector(n) === null && (t = l.createElement("link"), Ot(t, "link", e), at(t), l.head.appendChild(t)))
        }
    }

    function U1(e) {
        _i.D(e), Kg("dns-prefetch", e, null)
    }

    function z1(e, t) {
        _i.C(e, t), Kg("preconnect", e, t)
    }

    function P1(e, t, a) {
        _i.L(e, t, a);
        var l = eo;
        if (l && e && t) {
            var n = 'link[rel="preload"][as="' + $t(t) + '"]';
            t === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + $t(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + $t(a.imageSizes) + '"]')) : n += '[href="' + $t(e) + '"]';
            var s = n;
            switch (t) {
                case "style":
                    s = to(e);
                    break;
                case "script":
                    s = ao(e)
            }
            Ta.has(s) || (e = S({
                rel: "preload",
                href: t === "image" && a && a.imageSrcSet ? void 0 : e,
                as: t
            }, a), Ta.set(s, e), l.querySelector(n) !== null || t === "style" && l.querySelector(As(s)) || t === "script" && l.querySelector(Ms(s)) || (t = l.createElement("link"), Ot(t, "link", e), at(t), l.head.appendChild(t)))
        }
    }

    function H1(e, t) {
        _i.m(e, t);
        var a = eo;
        if (a && e) {
            var l = t && typeof t.as == "string" ? t.as : "script",
                n = 'link[rel="modulepreload"][as="' + $t(l) + '"][href="' + $t(e) + '"]',
                s = n;
            switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    s = ao(e)
            }
            if (!Ta.has(s) && (e = S({
                    rel: "modulepreload",
                    href: e
                }, t), Ta.set(s, e), a.querySelector(n) === null)) {
                switch (l) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (a.querySelector(Ms(s))) return
                }
                l = a.createElement("link"), Ot(l, "link", e), at(l), a.head.appendChild(l)
            }
        }
    }

    function j1(e, t, a) {
        _i.S(e, t, a);
        var l = eo;
        if (l && e) {
            var n = Ki(l).hoistableStyles,
                s = to(e);
            t = t || "default";
            var d = n.get(s);
            if (!d) {
                var h = {
                    loading: 0,
                    preload: null
                };
                if (d = l.querySelector(As(s))) h.loading = 5;
                else {
                    e = S({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, a), (a = Ta.get(s)) && Vd(e, a);
                    var x = d = l.createElement("link");
                    at(x), Ot(x, "link", e), x._p = new Promise(function(k, U) {
                        x.onload = k, x.onerror = U
                    }), x.addEventListener("load", function() {
                        h.loading |= 1
                    }), x.addEventListener("error", function() {
                        h.loading |= 2
                    }), h.loading |= 4, cu(d, t, l)
                }
                d = {
                    type: "stylesheet",
                    instance: d,
                    count: 1,
                    state: h
                }, n.set(s, d)
            }
        }
    }

    function G1(e, t) {
        _i.X(e, t);
        var a = eo;
        if (a && e) {
            var l = Ki(a).hoistableScripts,
                n = ao(e),
                s = l.get(n);
            s || (s = a.querySelector(Ms(n)), s || (e = S({
                src: e,
                async: !0
            }, t), (t = Ta.get(n)) && Yd(e, t), s = a.createElement("script"), at(s), Ot(s, "link", e), a.head.appendChild(s)), s = {
                type: "script",
                instance: s,
                count: 1,
                state: null
            }, l.set(n, s))
        }
    }

    function I1(e, t) {
        _i.M(e, t);
        var a = eo;
        if (a && e) {
            var l = Ki(a).hoistableScripts,
                n = ao(e),
                s = l.get(n);
            s || (s = a.querySelector(Ms(n)), s || (e = S({
                src: e,
                async: !0,
                type: "module"
            }, t), (t = Ta.get(n)) && Yd(e, t), s = a.createElement("script"), at(s), Ot(s, "link", e), a.head.appendChild(s)), s = {
                type: "script",
                instance: s,
                count: 1,
                state: null
            }, l.set(n, s))
        }
    }

    function Rg(e, t, a, l) {
        var n = (n = ge.current) ? uu(n) : null;
        if (!n) throw Error(u(446));
        switch (e) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof a.precedence == "string" && typeof a.href == "string" ? (t = to(a.href), a = Ki(n).hoistableStyles, l = a.get(t), l || (l = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, a.set(t, l)), l) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                    e = to(a.href);
                    var s = Ki(n).hoistableStyles,
                        d = s.get(e);
                    if (d || (n = n.ownerDocument || n, d = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, s.set(e, d), (s = n.querySelector(As(e))) && !s._p && (d.instance = s, d.state.loading = 5), Ta.has(e) || (a = {
                            rel: "preload",
                            as: "style",
                            href: a.href,
                            crossOrigin: a.crossOrigin,
                            integrity: a.integrity,
                            media: a.media,
                            hrefLang: a.hrefLang,
                            referrerPolicy: a.referrerPolicy
                        }, Ta.set(e, a), s || V1(n, e, a, d.state))), t && l === null) throw Error(u(528, ""));
                    return d
                }
                if (t && l !== null) throw Error(u(529, ""));
                return null;
            case "script":
                return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ao(a), a = Ki(n).hoistableScripts, l = a.get(t), l || (l = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, a.set(t, l)), l) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(u(444, e))
        }
    }

    function to(e) {
        return 'href="' + $t(e) + '"'
    }

    function As(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }

    function Xg(e) {
        return S({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }

    function V1(e, t, a, l) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
            return l.loading |= 1
        }), t.addEventListener("error", function() {
            return l.loading |= 2
        }), Ot(t, "link", a), at(t), e.head.appendChild(t))
    }

    function ao(e) {
        return '[src="' + $t(e) + '"]'
    }

    function Ms(e) {
        return "script[async]" + e
    }

    function Ug(e, t, a) {
        if (t.count++, t.instance === null) switch (t.type) {
            case "style":
                var l = e.querySelector('style[data-href~="' + $t(a.href) + '"]');
                if (l) return t.instance = l, at(l), l;
                var n = S({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return l = (e.ownerDocument || e).createElement("style"), at(l), Ot(l, "style", n), cu(l, a.precedence, e), t.instance = l;
            case "stylesheet":
                n = to(a.href);
                var s = e.querySelector(As(n));
                if (s) return t.state.loading |= 4, t.instance = s, at(s), s;
                l = Xg(a), (n = Ta.get(n)) && Vd(l, n), s = (e.ownerDocument || e).createElement("link"), at(s);
                var d = s;
                return d._p = new Promise(function(h, x) {
                    d.onload = h, d.onerror = x
                }), Ot(s, "link", l), t.state.loading |= 4, cu(s, a.precedence, e), t.instance = s;
            case "script":
                return s = ao(a.src), (n = e.querySelector(Ms(s))) ? (t.instance = n, at(n), n) : (l = a, (n = Ta.get(s)) && (l = S({}, a), Yd(l, n)), e = e.ownerDocument || e, n = e.createElement("script"), at(n), Ot(n, "link", l), e.head.appendChild(n), t.instance = n);
            case "void":
                return null;
            default:
                throw Error(u(443, t.type))
        } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, cu(l, a.precedence, e));
        return t.instance
    }

    function cu(e, t, a) {
        for (var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = l.length ? l[l.length - 1] : null, s = n, d = 0; d < l.length; d++) {
            var h = l[d];
            if (h.dataset.precedence === t) s = h;
            else if (s !== n) break
        }
        s ? s.parentNode.insertBefore(e, s.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild))
    }

    function Vd(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title)
    }

    function Yd(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity)
    }
    var du = null;

    function zg(e, t, a) {
        if (du === null) {
            var l = new Map,
                n = du = new Map;
            n.set(a, l)
        } else n = du, l = n.get(a), l || (l = new Map, n.set(a, l));
        if (l.has(e)) return l;
        for (l.set(e, null), a = a.getElementsByTagName(e), n = 0; n < a.length; n++) {
            var s = a[n];
            if (!(s[Ni] || s[ct] || e === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
                var d = s.getAttribute(t) || "";
                d = e + d;
                var h = l.get(d);
                h ? h.push(s) : l.set(d, [s])
            }
        }
        return l
    }

    function Pg(e, t, a) {
        e = e.ownerDocument || e, e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null)
    }

    function Y1(e, t, a) {
        if (a === 1 || t.itemProp != null) return !1;
        switch (e) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                return !0;
            case "link":
                if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                switch (t.rel) {
                    case "stylesheet":
                        return e = t.disabled, typeof t.precedence == "string" && e == null;
                    default:
                        return !0
                }
            case "script":
                if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
        }
        return !1
    }

    function Hg(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var Es = null;

    function Q1() {}

    function q1(e, t, a) {
        if (Es === null) throw Error(u(475));
        var l = Es;
        if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var n = to(a.href),
                    s = e.querySelector(As(n));
                if (s) {
                    e = s._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = fu.bind(l), e.then(l, l)), t.state.loading |= 4, t.instance = s, at(s);
                    return
                }
                s = e.ownerDocument || e, a = Xg(a), (n = Ta.get(n)) && Vd(a, n), s = s.createElement("link"), at(s);
                var d = s;
                d._p = new Promise(function(h, x) {
                    d.onload = h, d.onerror = x
                }), Ot(s, "link", a), t.instance = s
            }
            l.stylesheets === null && (l.stylesheets = new Map), l.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, t = fu.bind(l), e.addEventListener("load", t), e.addEventListener("error", t))
        }
    }

    function $1() {
        if (Es === null) throw Error(u(475));
        var e = Es;
        return e.stylesheets && e.count === 0 && Qd(e, e.stylesheets), 0 < e.count ? function(t) {
            var a = setTimeout(function() {
                if (e.stylesheets && Qd(e, e.stylesheets), e.unsuspend) {
                    var l = e.unsuspend;
                    e.unsuspend = null, l()
                }
            }, 6e4);
            return e.unsuspend = t,
                function() {
                    e.unsuspend = null, clearTimeout(a)
                }
        } : null
    }

    function fu() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) Qd(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null, e()
            }
        }
    }
    var pu = null;

    function Qd(e, t) {
        e.stylesheets = null, e.unsuspend !== null && (e.count++, pu = new Map, t.forEach(Z1, e), pu = null, fu.call(e))
    }

    function Z1(e, t) {
        if (!(t.state.loading & 4)) {
            var a = pu.get(e);
            if (a) var l = a.get(null);
            else {
                a = new Map, pu.set(e, a);
                for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), s = 0; s < n.length; s++) {
                    var d = n[s];
                    (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), l = d)
                }
                l && a.set(null, l)
            }
            n = t.instance, d = n.getAttribute("data-precedence"), s = a.get(d) || l, s === l && a.set(null, n), a.set(d, n), this.count++, l = fu.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), s ? s.parentNode.insertBefore(n, s.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4
        }
    }
    var Cs = {
        $$typeof: K,
        Provider: null,
        Consumer: null,
        _currentValue: re,
        _currentValue2: re,
        _threadCount: 0
    };

    function W1(e, t, a, l, n, s, d, h) {
        this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Al(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Al(0), this.hiddenUpdates = Al(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = s, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = new Map
    }

    function jg(e, t, a, l, n, s, d, h, x, k, U, G) {
        return e = new W1(e, t, a, d, h, x, k, G), t = 1, s === !0 && (t |= 24), s = sa(3, null, null, t), e.current = s, s.stateNode = e, t = Lc(), t.refCount++, e.pooledCache = t, t.refCount++, s.memoizedState = {
            element: l,
            isDehydrated: a,
            cache: t
        }, Nc(s), e
    }

    function Gg(e) {
        return e ? (e = Nn, e) : Nn
    }

    function Ig(e, t, a, l, n, s) {
        n = Gg(n), l.context === null ? l.context = n : l.pendingContext = n, l = Vi(t), l.payload = {
            element: a
        }, s = s === void 0 ? null : s, s !== null && (l.callback = s), a = Yi(e, l, t), a !== null && (fa(a, e, t), ls(a, e, t))
    }

    function Vg(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var a = e.retryLane;
            e.retryLane = a !== 0 && a < t ? a : t
        }
    }

    function qd(e, t) {
        Vg(e, t), (e = e.alternate) && Vg(e, t)
    }

    function Yg(e) {
        if (e.tag === 13) {
            var t = Bn(e, 67108864);
            t !== null && fa(t, e, 67108864), qd(e, 67108864)
        }
    }
    var hu = !0;

    function J1(e, t, a, l) {
        var n = X.T;
        X.T = null;
        var s = W.p;
        try {
            W.p = 2, $d(e, t, a, l)
        } finally {
            W.p = s, X.T = n
        }
    }

    function eb(e, t, a, l) {
        var n = X.T;
        X.T = null;
        var s = W.p;
        try {
            W.p = 8, $d(e, t, a, l)
        } finally {
            W.p = s, X.T = n
        }
    }

    function $d(e, t, a, l) {
        if (hu) {
            var n = Zd(l);
            if (n === null) Rd(e, t, l, gu, a), qg(e, l);
            else if (ab(n, e, t, a, l)) l.stopPropagation();
            else if (qg(e, l), t & 4 && -1 < tb.indexOf(e)) {
                for (; n !== null;) {
                    var s = Oi(n);
                    if (s !== null) switch (s.tag) {
                        case 3:
                            if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                                var d = Ra(s.pendingLanes);
                                if (d !== 0) {
                                    var h = s;
                                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; d;) {
                                        var x = 1 << 31 - xt(d);
                                        h.entanglements[1] |= x, d &= ~x
                                    }
                                    Ya(s), (Re & 6) === 0 && (Wr = la() + 500, Ts(0))
                                }
                            }
                            break;
                        case 13:
                            h = Bn(s, 2), h !== null && fa(h, s, 2), eu(), qd(s, 2)
                    }
                    if (s = Zd(l), s === null && Rd(e, t, l, gu, a), s === n) break;
                    n = s
                }
                n !== null && l.stopPropagation()
            } else Rd(e, t, l, null, a)
        }
    }

    function Zd(e) {
        return e = Tn(e), Wd(e)
    }
    var gu = null;

    function Wd(e) {
        if (gu = null, e = ai(e), e !== null) {
            var t = f(e);
            if (t === null) e = null;
            else {
                var a = t.tag;
                if (a === 13) {
                    if (e = g(t), e !== null) return e;
                    e = null
                } else if (a === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null)
            }
        }
        return gu = e, null
    }

    function Qg(e) {
        switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (sn()) {
                    case Tl:
                        return 2;
                    case Ws:
                        return 8;
                    case Fa:
                    case zu:
                        return 32;
                    case Js:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var Jd = !1,
        ol = null,
        sl = null,
        rl = null,
        Ls = new Map,
        ks = new Map,
        ul = [],
        tb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function qg(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                ol = null;
                break;
            case "dragenter":
            case "dragleave":
                sl = null;
                break;
            case "mouseover":
            case "mouseout":
                rl = null;
                break;
            case "pointerover":
            case "pointerout":
                Ls.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                ks.delete(t.pointerId)
        }
    }

    function Ds(e, t, a, l, n, s) {
        return e === null || e.nativeEvent !== s ? (e = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: l,
            nativeEvent: s,
            targetContainers: [n]
        }, t !== null && (t = Oi(t), t !== null && Yg(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e)
    }

    function ab(e, t, a, l, n) {
        switch (t) {
            case "focusin":
                return ol = Ds(ol, e, t, a, l, n), !0;
            case "dragenter":
                return sl = Ds(sl, e, t, a, l, n), !0;
            case "mouseover":
                return rl = Ds(rl, e, t, a, l, n), !0;
            case "pointerover":
                var s = n.pointerId;
                return Ls.set(s, Ds(Ls.get(s) || null, e, t, a, l, n)), !0;
            case "gotpointercapture":
                return s = n.pointerId, ks.set(s, Ds(ks.get(s) || null, e, t, a, l, n)), !0
        }
        return !1
    }

    function $g(e) {
        var t = ai(e.target);
        if (t !== null) {
            var a = f(t);
            if (a !== null) {
                if (t = a.tag, t === 13) {
                    if (t = g(a), t !== null) {
                        e.blockedOn = t, ko(e.priority, function() {
                            if (a.tag === 13) {
                                var l = da();
                                l = pn(l);
                                var n = Bn(a, l);
                                n !== null && fa(n, a, l), qd(a, l)
                            }
                        });
                        return
                    }
                } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function mu(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var a = Zd(e.nativeEvent);
            if (a === null) {
                a = e.nativeEvent;
                var l = new a.constructor(a.type, a);
                Sn = l, a.target.dispatchEvent(l), Sn = null
            } else return t = Oi(a), t !== null && Yg(t), e.blockedOn = a, !1;
            t.shift()
        }
        return !0
    }

    function Zg(e, t, a) {
        mu(e) && a.delete(t)
    }

    function ib() {
        Jd = !1, ol !== null && mu(ol) && (ol = null), sl !== null && mu(sl) && (sl = null), rl !== null && mu(rl) && (rl = null), Ls.forEach(Zg), ks.forEach(Zg)
    }

    function bu(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Jd || (Jd = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, ib)))
    }
    var vu = null;

    function Wg(e) {
        vu !== e && (vu = e, i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
            vu === e && (vu = null);
            for (var t = 0; t < e.length; t += 3) {
                var a = e[t],
                    l = e[t + 1],
                    n = e[t + 2];
                if (typeof l != "function") {
                    if (Wd(l || a) === null) continue;
                    break
                }
                var s = Oi(a);
                s !== null && (e.splice(t, 3), t -= 3, Wc(s, {
                    pending: !0,
                    data: n,
                    method: a.method,
                    action: l
                }, l, n))
            }
        }))
    }

    function Bs(e) {
        function t(x) {
            return bu(x, e)
        }
        ol !== null && bu(ol, e), sl !== null && bu(sl, e), rl !== null && bu(rl, e), Ls.forEach(t), ks.forEach(t);
        for (var a = 0; a < ul.length; a++) {
            var l = ul[a];
            l.blockedOn === e && (l.blockedOn = null)
        }
        for (; 0 < ul.length && (a = ul[0], a.blockedOn === null);) $g(a), a.blockedOn === null && ul.shift();
        if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
            for (l = 0; l < a.length; l += 3) {
                var n = a[l],
                    s = a[l + 1],
                    d = n[Dt] || null;
                if (typeof s == "function") d || Wg(a);
                else if (d) {
                    var h = null;
                    if (s && s.hasAttribute("formAction")) {
                        if (n = s, d = s[Dt] || null) h = d.formAction;
                        else if (Wd(n) !== null) continue
                    } else h = d.action;
                    typeof h == "function" ? a[l + 1] = h : (a.splice(l, 3), l -= 3), Wg(a)
                }
            }
    }

    function ef(e) {
        this._internalRoot = e
    }
    yu.prototype.render = ef.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(u(409));
        var a = t.current,
            l = da();
        Ig(a, l, e, t, null, null)
    }, yu.prototype.unmount = ef.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Ig(e.current, 2, null, e, null, null), eu(), t[Xa] = null
        }
    };

    function yu(e) {
        this._internalRoot = e
    }
    yu.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = ar();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var a = 0; a < ul.length && t !== 0 && t < ul[a].priority; a++);
            ul.splice(a, 0, e), a === 0 && $g(e)
        }
    };
    var Jg = o.version;
    if (Jg !== "19.1.1") throw Error(u(527, Jg, "19.1.1"));
    W.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
        return e = y(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e
    };
    var lb = {
        bundleType: 0,
        version: "19.1.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: X,
        reconcilerVersion: "19.1.1"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Su.isDisabled && Su.supportsFiber) try {
            xl = Su.inject(lb), _t = Su
        } catch {}
    }
    return Os.createRoot = function(e, t) {
        if (!c(e)) throw Error(u(299));
        var a = !1,
            l = "",
            n = gh,
            s = mh,
            d = bh,
            h = null;
        return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = jg(e, 1, !1, null, null, a, l, n, s, d, h, null), e[Xa] = t.current, Kd(e), new ef(t)
    }, Os.hydrateRoot = function(e, t, a) {
        if (!c(e)) throw Error(u(299));
        var l = !1,
            n = "",
            s = gh,
            d = mh,
            h = bh,
            x = null,
            k = null;
        return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (s = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (x = a.unstable_transitionCallbacks), a.formState !== void 0 && (k = a.formState)), t = jg(e, 1, !0, t, a ?? null, l, n, s, d, h, x, k), t.context = Gg(null), a = t.current, l = da(), l = pn(l), n = Vi(l), n.callback = null, Yi(a, n, l), a = l, t.current.lanes = a, Ml(t, a), Ya(t), e[Xa] = t.current, Kd(e), new yu(t)
    }, Os.version = "19.1.1", Os
}
var u0;

function hb() {
    if (u0) return lf.exports;
    u0 = 1;

    function i() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)
        } catch (o) {
            console.error(o)
        }
    }
    return i(), lf.exports = pb(), lf.exports
}
var gb = hb();
const mb = Nf(gb);
var bb = G0();
const vb = Nf(bb),
    yb = .1,
    c0 = 10;

function Sb({
    gamepadState: i,
    gamepadIndex: o
}) {
    if (!i) return p.jsxs("div", {
        children: ["Loading Gamepad ", o, "..."]
    });
    const r = i.buttons || {},
        u = i.axes || {},
        c = v => (r[v] || 0) > yb ? v >= 12 && v <= 15 ? "gp-vis-dpad-pressed" : v === 4 || v === 5 ? "gp-vis-bumper-pressed" : "gp-vis-button-pressed" : "",
        f = v => v !== 6 && v !== 7 ? {} : {
            opacity: .5 + (r[v] || 0) * .5
        },
        g = (v, S) => {
            const m = u[v] || 0,
                A = u[S] || 0,
                E = m * c0,
                D = A * c0;
            return `translate(${E}px, ${D}px)`
        },
        _ = g(0, 1),
        y = g(2, 3);
    return p.jsxs("div", {
        className: "gamepad-visualizer-instance",
        children: [p.jsxs("h4", {
            children: ["Gamepad ", o]
        }), p.jsxs("svg", {
            viewBox: "0 0 260 100",
            width: "100%",
            height: "100",
            className: "gamepad-svg-vis",
            children: [p.jsx("rect", {
                className: "gp-vis-base",
                x: "30",
                y: "10",
                width: "200",
                height: "80",
                rx: "10",
                ry: "10"
            }), p.jsx("rect", {
                id: `gp-${o}-btn-4`,
                className: `gp-vis-bumper ${c(4)}`,
                x: "40",
                y: "0",
                width: "40",
                height: "8",
                rx: "2"
            }), p.jsx("rect", {
                id: `gp-${o}-btn-5`,
                className: `gp-vis-bumper ${c(5)}`,
                x: "180",
                y: "0",
                width: "40",
                height: "8",
                rx: "2"
            }), p.jsx("rect", {
                id: `gp-${o}-btn-6`,
                className: "gp-vis-trigger",
                style: f(6),
                x: "40",
                y: "10",
                width: "40",
                height: "10",
                rx: "2"
            }), p.jsx("rect", {
                id: `gp-${o}-btn-7`,
                className: "gp-vis-trigger",
                style: f(7),
                x: "180",
                y: "10",
                width: "40",
                height: "10",
                rx: "2"
            }), p.jsx("circle", {
                id: `gp-${o}-btn-0`,
                className: `gp-vis-button ${c(0)}`,
                cx: "185",
                cy: "55",
                r: "6"
            }), " ", p.jsx("circle", {
                id: `gp-${o}-btn-1`,
                className: `gp-vis-button ${c(1)}`,
                cx: "205",
                cy: "40",
                r: "6"
            }), " ", p.jsx("circle", {
                id: `gp-${o}-btn-2`,
                className: `gp-vis-button ${c(2)}`,
                cx: "165",
                cy: "40",
                r: "6"
            }), " ", p.jsx("circle", {
                id: `gp-${o}-btn-3`,
                className: `gp-vis-button ${c(3)}`,
                cx: "185",
                cy: "25",
                r: "6"
            }), " ", p.jsx("rect", {
                id: `gp-${o}-btn-8`,
                className: `gp-vis-button ${c(8)}`,
                x: "105",
                y: "25",
                width: "10",
                height: "5"
            }), " ", p.jsx("rect", {
                id: `gp-${o}-btn-9`,
                className: `gp-vis-button ${c(9)}`,
                x: "145",
                y: "25",
                width: "10",
                height: "5"
            }), " ", p.jsx("rect", {
                id: `gp-${o}-btn-12`,
                className: `gp-vis-dpad ${c(12)}`,
                x: "70",
                y: "50",
                width: "10",
                height: "10"
            }), " ", p.jsx("rect", {
                id: `gp-${o}-btn-13`,
                className: `gp-vis-dpad ${c(13)}`,
                x: "70",
                y: "70",
                width: "10",
                height: "10"
            }), " ", p.jsx("rect", {
                id: `gp-${o}-btn-14`,
                className: `gp-vis-dpad ${c(14)}`,
                x: "60",
                y: "60",
                width: "10",
                height: "10"
            }), " ", p.jsx("rect", {
                id: `gp-${o}-btn-15`,
                className: `gp-vis-dpad ${c(15)}`,
                x: "80",
                y: "60",
                width: "10",
                height: "10"
            }), " ", p.jsxs("g", {
                children: [" ", p.jsx("circle", {
                    className: "gp-vis-stick-base",
                    cx: "75",
                    cy: "30",
                    r: "12"
                }), p.jsx("circle", {
                    id: `gp-${o}-stick-left`,
                    className: "gp-vis-stick-top",
                    cx: "75",
                    cy: "30",
                    r: "8",
                    style: {
                        transform: _
                    }
                }), p.jsx("circle", {
                    id: `gp-${o}-btn-10`,
                    className: `gp-vis-button ${c(10)}`,
                    cx: "75",
                    cy: "30",
                    r: "3"
                }), " "]
            }), p.jsxs("g", {
                children: [" ", p.jsx("circle", {
                    className: "gp-vis-stick-base",
                    cx: "155",
                    cy: "65",
                    r: "12"
                }), p.jsx("circle", {
                    id: `gp-${o}-stick-right`,
                    className: "gp-vis-stick-top",
                    cx: "155",
                    cy: "65",
                    r: "8",
                    style: {
                        transform: y
                    }
                }), p.jsx("circle", {
                    id: `gp-${o}-btn-11`,
                    className: `gp-vis-button ${c(11)}`,
                    cx: "155",
                    cy: "65",
                    r: "3"
                }), " "]
            })]
        })]
    })
}
const Tb = (i, o) => o ? i.replace(/\{(\w+)\}/g, (r, u) => o.hasOwnProperty(u) ? o[u] : r) : i,
    _b = {
        selkiesLogoAlt: "Selkies Logo",
        selkiesTitle: "Selkies",
        toggleThemeTitle: "Toggle Theme",
        fullscreenTitle: "Enter Fullscreen",
        gamingModeTitle: "Gaming Mode",
        trackpadModeTitle: "Trackpad Mode",
        buttons: {
            videoStreamEnableTitle: "Enable Video Stream",
            videoStreamDisableTitle: "Disable Video Stream",
            audioStreamEnableTitle: "Enable Audio Stream",
            audioStreamDisableTitle: "Disable Audio Stream",
            microphoneEnableTitle: "Enable Microphone",
            microphoneDisableTitle: "Disable Microphone",
            gamepadEnableTitle: "Enable Gamepad Input",
            gamepadDisableTitle: "Disable Gamepad Input",
            virtualKeyboardButtonTitle: "Pop Keyboard",
            h264FullColorEnableTitle: "Enable H.264 Full Color",
            h264FullColorDisableTitle: "Disable H.264 Full Color",
            h264StreamingModeDisableTitle: "Disable Turbo",
            h264StreamingModeEnableTitle: "Enable Turbo",
            useCpuEnableTitle: "Enable Force CPU Encoding (Overrides nvenc/vaapi)",
            useCpuDisableTitle: "Disable Force CPU Encoding (Overrides nvenc/vaapi)"
        },
        sections: {
            video: {
                title: "Video Settings",
                encoderLabel: "Encoder:",
                framerateLabel: "Frames per second ({framerate} FPS):",
                bitrateLabel: "Video Bitrate ({bitrate} Mbps):",
                bufferLabelImmediate: "Video Buffer Size (0 (Immediate)):",
                bufferLabelFrames: "Video Buffer Size ({videoBufferSize} frames):",
                crfLabel: "Video CRF ({crf}):",
                fullColorLabel: "FullColor 4:4:4",
                streamingModeDetails: "Turbo mode disables all VNC logic and encodes all frames like a traditional video encoder.",
                streamingModeLabel: "Turbo",
                useCpuLabel: "CPU Encoding",
                jpegQualityLabel: "Base Quality: {jpegQuality}",
                paintOverJpegQualityLabel: "Paintover Quality: {paintOverJpegQuality}"
            },
            audio: {
                title: "Audio Settings",
                bitrateLabel: "Audio Bitrate ({bitrate} kbps):",
                inputLabel: "Input (Microphone):",
                outputLabel: "Output (Speaker):",
                outputNotSupported: "Output device selection not supported by this browser.",
                deviceErrorDefault: "Error listing audio devices: {errorName}",
                deviceErrorPermission: "Permission denied. Please allow microphone access in browser settings to select devices.",
                deviceErrorNotFound: "No audio devices found.",
                defaultInputLabelFallback: "Input Device {index}",
                defaultOutputLabelFallback: "Output Device {index}"
            },
            screen: {
                title: "Screen Settings",
                presetLabel: "Preset:",
                resolutionPresetSelect: "-- Select Preset --",
                widthLabel: "Width:",
                heightLabel: "Height:",
                widthPlaceholder: "e.g., 1920",
                heightPlaceholder: "e.g., 1080",
                setManualButton: "Set Manual Resolution",
                resetButton: "Reset to Window",
                scaleLocallyLabel: "Scale Locally:",
                scaleLocallyOn: "ON",
                scaleLocallyOff: "OFF",
                scaleLocallyTitleEnable: "Enable Local Scaling (Maintain Aspect Ratio)",
                scaleLocallyTitleDisable: "Disable Local Scaling (Use Exact Resolution)",
                uiScalingLabel: "UI Scaling",
                hidpiLabel: "HiDPI (Pixel Perfect)",
                hidpiEnableTitle: "Enable HiDPI (Pixel Perfect)",
                hidpiDisableTitle: "Disable HiDPI (Use CSS Scaling)"
            },
            stats: {
                title: "Stats",
                cpuLabel: "CPU",
                gpuLabel: "GPU Usage",
                sysMemLabel: "Sys Mem",
                gpuMemLabel: "GPU Mem",
                fpsLabel: "FPS",
                audioLabel: "Audio",
                tooltipCpu: "CPU Usage: {value}%",
                tooltipGpu: "GPU Usage: {value}%",
                tooltipSysMem: "System Memory: {used} / {total}",
                tooltipGpuMem: "GPU Memory: {used} / {total}",
                tooltipFps: "Client FPS: {value}",
                tooltipAudio: "Audio Buffers: {value}",
                tooltipMemoryNA: "N/A"
            },
            clipboard: {
                title: "Clipboard",
                label: "Server Clipboard:",
                placeholder: "Clipboard content from server..."
            },
            files: {
                title: "Files",
                uploadButton: "Upload Files",
                uploadButtonTitle: "Upload files to the remote session",
                downloadButtonTitle: "Download Files"
            },
            gamepads: {
                title: "Gamepads",
                noActivity: "No physical gamepad activity detected yet...",
                touchEnableTitle: "Enable Touch Gamepad",
                touchDisableTitle: "Disable Touch Gamepad",
                touchActiveLabel: "Touch Gamepad: ON",
                touchInactiveLabel: "Touch Gamepad: OFF",
                physicalHiddenForTouch: "Physical gamepad display is hidden while touch gamepad is active.",
                noActivityMobileOrEnableTouch: "No physical gamepads. Enable touch gamepad or connect a controller."
            },
            apps: {
                title: "Apps",
                openButtonTitle: "Manage Apps",
                openButton: "Manage Apps"
            },
            sharing: {
                title: "Sharing"
            }
        },
        resolutionPresets: {
            "1920x1080": "1920 x 1080 (FHD)",
            "1280x720": "1280 x 720 (HD)",
            "1366x768": "1366 x 768 (Laptop)",
            "1920x1200": "1920 x 1200 (16:10)",
            "2560x1440": "2560 x 1440 (QHD)",
            "3840x2160": "3840 x 2160 (4K UHD)",
            "1024x768": "1024 x 768 (XGA 4:3)",
            "800x600": "800 x 600 (SVGA 4:3)",
            "640x480": "640 x 480 (VGA 4:3)",
            "320x240": "320 x 240 (QVGA 4:3)"
        },
        appsModal: {
            closeAlt: "Close apps modal",
            loading: "Loading apps...",
            errorLoading: "Failed to load app data. Please try again.",
            searchPlaceholder: "Search apps...",
            noAppsFound: "No apps found matching your search.",
            backButton: "Back to list",
            installButton: "Install",
            updateButton: "Update",
            removeButton: "Remove",
            installingMessage: "Simulating install for: {{appName}}",
            removingMessage: "Simulating removal for: {{appName}}",
            updatingMessage: "Simulating update for: {{appName}}",
            installedBadge: "Installed"
        },
        notifications: {
            closeButtonAlt: "Close notification for {fileName}",
            uploading: "Uploading... {progress}%",
            uploadComplete: "Upload Complete",
            uploadFailed: "Upload Failed",
            errorPrefix: "Error:",
            unknownError: "An unknown error occurred.",
            copiedTitle: "Copied: {label}",
            copiedMessage: "Link copied to clipboard: {textToCopy}",
            copyFailedTitle: "Copy Failed: {label}",
            copyFailedError: "Could not copy link to clipboard.",
            scalingTitle: "Scaling Updated: Action Required",
            scalingMessage: "New scaling applied. To see changes, restart: the container, your desktop session by logging out, or the running application."
        },
        alerts: {
            invalidResolution: "Please enter valid positive integers for Width and Height."
        },
        byteUnits: ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        zeroBytes: "0 Bytes",
        filesModal: {
            closeAlt: "Close files modal",
            iframeTitle: "Downloadable Files"
        }
    },
    xb = {
        selkiesLogoAlt: "Logo de Selkies",
        selkiesTitle: "Selkies",
        toggleThemeTitle: "Cambiar Tema",
        fullscreenTitle: "Entrar en Pantalla Completa",
        gamingModeTitle: "Modo Juego",
        trackpadModeTitle: "Modo Trackpad",
        buttons: {
            videoStreamEnableTitle: "Activar Stream de Vídeo",
            videoStreamDisableTitle: "Desactivar Stream de Vídeo",
            audioStreamEnableTitle: "Activar Stream de Audio",
            audioStreamDisableTitle: "Desactivar Stream de Audio",
            microphoneEnableTitle: "Activar Micrófono",
            microphoneDisableTitle: "Desactivar Micrófono",
            gamepadEnableTitle: "Activar Entrada de Mando",
            gamepadDisableTitle: "Desactivar Entrada de Mando",
            virtualKeyboardButtonTitle: "Mostrar Teclado",
            h264FullColorEnableTitle: "Activar H.264 Color Completo",
            h264FullColorDisableTitle: "Desactivar H.264 Color Completo",
            h264StreamingModeDisableTitle: "Desactivar Turbo",
            h264StreamingModeEnableTitle: "Activar Turbo",
            useCpuEnableTitle: "Activar Codificación Forzada por CPU (Sobrescribe nvenc/vaapi)",
            useCpuDisableTitle: "Desactivar Codificación Forzada por CPU (Sobrescribe nvenc/vaapi)"
        },
        sections: {
            video: {
                title: "Configuración de Vídeo",
                encoderLabel: "Codificador:",
                framerateLabel: "Fotogramas por segundo ({framerate} FPS):",
                bitrateLabel: "Tasa de bits de vídeo ({bitrate} Mbps):",
                bufferLabelImmediate: "Tamaño del Búfer de Vídeo (0 (Inmediato)):",
                bufferLabelFrames: "Tamaño del Búfer de Vídeo ({videoBufferSize} fotogramas):",
                crfLabel: "CRF de Vídeo ({crf}):",
                fullColorLabel: "Color Completo 4:4:4",
                streamingModeDetails: "El modo Turbo desactiva toda la lógica VNC y codifica todos los fotogramas como un codificador de vídeo tradicional.",
                streamingModeLabel: "Turbo",
                useCpuLabel: "Codificación por CPU",
                jpegQualityLabel: "Calidad Base: {jpegQuality}",
                paintOverJpegQualityLabel: "Calidad de Sobrepintado: {paintOverJpegQuality}"
            },
            audio: {
                title: "Configuración de Audio",
                bitrateLabel: "Tasa de bits de audio ({bitrate} kbps):",
                inputLabel: "Entrada (Micrófono):",
                outputLabel: "Salida (Altavoz):",
                outputNotSupported: "La selección de dispositivo de salida no es compatible con este navegador.",
                deviceErrorDefault: "Error al listar dispositivos de audio: {errorName}",
                deviceErrorPermission: "Permiso denegado. Permita el acceso al micrófono en la configuración del navegador para seleccionar dispositivos.",
                deviceErrorNotFound: "No se encontraron dispositivos de audio.",
                defaultInputLabelFallback: "Dispositivo de Entrada {index}",
                defaultOutputLabelFallback: "Dispositivo de Salida {index}"
            },
            screen: {
                title: "Configuración de Pantalla",
                presetLabel: "Preajuste:",
                resolutionPresetSelect: "-- Seleccionar Preajuste --",
                widthLabel: "Ancho:",
                heightLabel: "Alto:",
                widthPlaceholder: "ej., 1920",
                heightPlaceholder: "ej., 1080",
                setManualButton: "Establecer Resolución Manual",
                resetButton: "Restablecer a Ventana",
                scaleLocallyLabel: "Escalar Localmente:",
                scaleLocallyOn: "SÍ",
                scaleLocallyOff: "NO",
                scaleLocallyTitleEnable: "Activar Escalado Local (Mantener Relación de Aspecto)",
                scaleLocallyTitleDisable: "Desactivar Escalado Local (Usar Resolución Exacta)",
                uiScalingLabel: "Escalado de Interfaz:",
                hidpiLabel: "HiDPI (Píxel Perfecto)",
                hidpiEnableTitle: "Activar HiDPI (Píxel Perfecto)",
                hidpiDisableTitle: "Desactivar HiDPI (Usar escalado CSS)"
            },
            stats: {
                title: "Estadísticas",
                cpuLabel: "CPU",
                gpuLabel: "Uso de GPU",
                sysMemLabel: "Mem Sistema",
                gpuMemLabel: "Mem GPU",
                fpsLabel: "FPS",
                audioLabel: "Audio",
                tooltipCpu: "Uso de CPU: {value}%",
                tooltipGpu: "Uso de GPU: {value}%",
                tooltipSysMem: "Memoria del Sistema: {used} / {total}",
                tooltipGpuMem: "Memoria GPU: {used} / {total}",
                tooltipFps: "FPS del Cliente: {value}",
                tooltipAudio: "Búferes de Audio: {value}",
                tooltipMemoryNA: "N/D"
            },
            clipboard: {
                title: "Portapapeles",
                label: "Portapapeles del Servidor:",
                placeholder: "Contenido del portapapeles del servidor..."
            },
            files: {
                title: "Archivos",
                uploadButton: "Subir Archivos",
                uploadButtonTitle: "Subir archivos a la sesión remota",
                downloadButtonTitle: "Descargar Archivos"
            },
            gamepads: {
                title: "Mandos",
                noActivity: "Aún no se ha detectado actividad del mando...",
                touchEnableTitle: "Activar Mando Táctil",
                touchDisableTitle: "Desactivar Mando Táctil",
                touchActiveLabel: "Mando Táctil: ENCENDIDO",
                touchInactiveLabel: "Mando Táctil: APAGADO",
                physicalHiddenForTouch: "La visualización de mandos físicos está oculta mientras el mando táctil está activo.",
                noActivityMobileOrEnableTouch: "No hay mandos físicos. Active el mando táctil o conecte un controlador."
            },
            apps: {
                title: "Aplicaciones",
                openButtonTitle: "Gestionar Aplicaciones",
                openButton: "Gestionar Aplicaciones"
            },
            sharing: {
                title: "Compartir"
            }
        },
        resolutionPresets: {
            "1920x1080": "1920 x 1080 (FHD)",
            "1280x720": "1280 x 720 (HD)",
            "1366x768": "1366 x 768 (Portátil)",
            "1920x1200": "1920 x 1200 (16:10)",
            "2560x1440": "2560 x 1440 (QHD)",
            "3840x2160": "3840 x 2160 (4K UHD)",
            "1024x768": "1024 x 768 (XGA 4:3)",
            "800x600": "800 x 600 (SVGA 4:3)",
            "640x480": "640 x 480 (VGA 4:3)",
            "320x240": "320 x 240 (QVGA 4:3)"
        },
        appsModal: {
            closeAlt: "Cerrar modal de aplicaciones",
            loading: "Cargando aplicaciones...",
            errorLoading: "Error al cargar los datos de las aplicaciones. Por favor, inténtalo de nuevo.",
            searchPlaceholder: "Buscar aplicaciones...",
            noAppsFound: "No se encontraron aplicaciones que coincidan con tu búsqueda.",
            backButton: "Volver a la lista",
            installButton: "Instalar",
            updateButton: "Actualizar",
            removeButton: "Eliminar",
            installingMessage: "Simulando instalación para: {{appName}}",
            removingMessage: "Simulando eliminación para: {{appName}}",
            updatingMessage: "Simulando actualización para: {{appName}}",
            installedBadge: "Instalado"
        },
        notifications: {
            closeButtonAlt: "Cerrar notificación para {fileName}",
            uploading: "Subiendo... {progress}%",
            uploadComplete: "Subida Completa",
            uploadFailed: "Subida Fallida",
            errorPrefix: "Error:",
            unknownError: "Ocurrió un error desconocido.",
            copiedTitle: "Copiado: {label}",
            copiedMessage: "Enlace copiado al portapapeles: {textToCopy}",
            copyFailedTitle: "Error al Copiar: {label}",
            copyFailedError: "No se pudo copiar el enlace al portapapeles.",
            scalingTitle: "Escalado Actualizado: Acción Requerida",
            scalingMessage: "Nuevo escalado aplicado. Para ver los cambios, reinicie: el contenedor, su sesión de escritorio cerrando sesión, o la aplicación en ejecución."
        },
        alerts: {
            invalidResolution: "Por favor, introduzca números enteros positivos válidos para Ancho y Alto."
        },
        byteUnits: ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        zeroBytes: "0 Bytes",
        filesModal: {
            closeAlt: "Cerrar modal de archivos",
            iframeTitle: "Archivos Descargables"
        }
    },
    wb = {
        selkiesLogoAlt: "Selkies 徽标",
        selkiesTitle: "Selkies",
        toggleThemeTitle: "切换主题",
        fullscreenTitle: "进入全屏",
        gamingModeTitle: "游戏模式",
        trackpadModeTitle: "触控板模式",
        buttons: {
            videoStreamEnableTitle: "启用视频流",
            videoStreamDisableTitle: "禁用视频流",
            audioStreamEnableTitle: "启用音频流",
            audioStreamDisableTitle: "禁用音频流",
            microphoneEnableTitle: "启用麦克风",
            microphoneDisableTitle: "禁用麦克风",
            gamepadEnableTitle: "启用游戏手柄输入",
            gamepadDisableTitle: "禁用游戏手柄输入",
            virtualKeyboardButtonTitle: "弹出键盘",
            h264FullColorEnableTitle: "启用 H.264 全彩",
            h264FullColorDisableTitle: "禁用 H.264 全彩",
            h264StreamingModeDisableTitle: "禁用 Turbo",
            h264StreamingModeEnableTitle: "启用 Turbo",
            useCpuEnableTitle: "启用强制 CPU 编码 (覆盖 nvenc/vaapi)",
            useCpuDisableTitle: "禁用强制 CPU 编码 (覆盖 nvenc/vaapi)"
        },
        sections: {
            video: {
                title: "视频设置",
                encoderLabel: "编码器:",
                framerateLabel: "帧率 ({framerate} FPS):",
                bitrateLabel: "视频比特率 ({bitrate} Mbps):",
                bufferLabelImmediate: "视频缓冲大小 (0 (立即)):",
                bufferLabelFrames: "视频缓冲大小 ({videoBufferSize} 帧):",
                crfLabel: "视频 CRF ({crf}):",
                fullColorLabel: "全彩 4:4:4",
                streamingModeDetails: "Turbo 模式会禁用所有 VNC 逻辑，并像传统视频编码器一样对所有帧进行编码。",
                streamingModeLabel: "Turbo",
                useCpuLabel: "CPU 编码",
                jpegQualityLabel: "基础质量: {jpegQuality}",
                paintOverJpegQualityLabel: "覆盖图质量: {paintOverJpegQuality}"
            },
            audio: {
                title: "音频设置",
                bitrateLabel: "音频比特率 ({bitrate} kbps):",
                inputLabel: "输入 (麦克风):",
                outputLabel: "输出 (扬声器):",
                outputNotSupported: "此浏览器不支持输出设备选择。",
                deviceErrorDefault: "列出音频设备时出错: {errorName}",
                deviceErrorPermission: "权限被拒绝。请在浏览器设置中允许麦克风访问以选择设备。",
                deviceErrorNotFound: "未找到音频设备。",
                defaultInputLabelFallback: "输入设备 {index}",
                defaultOutputLabelFallback: "输出设备 {index}"
            },
            screen: {
                title: "屏幕设置",
                presetLabel: "预设:",
                resolutionPresetSelect: "-- 选择预设 --",
                widthLabel: "宽度:",
                heightLabel: "高度:",
                widthPlaceholder: "例如 1920",
                heightPlaceholder: "例如 1080",
                setManualButton: "设置手动分辨率",
                resetButton: "重置为窗口大小",
                scaleLocallyLabel: "本地缩放:",
                scaleLocallyOn: "开",
                scaleLocallyOff: "关",
                scaleLocallyTitleEnable: "启用本地缩放 (保持宽高比)",
                scaleLocallyTitleDisable: "禁用本地缩放 (使用精确分辨率)",
                uiScalingLabel: "界面缩放:",
                hidpiLabel: "HiDPI (像素完美)",
                hidpiEnableTitle: "启用 HiDPI (像素完美)",
                hidpiDisableTitle: "禁用 HiDPI (使用 CSS 缩放)"
            },
            stats: {
                title: "统计信息",
                cpuLabel: "CPU",
                gpuLabel: "GPU 使用率",
                sysMemLabel: "系统内存",
                gpuMemLabel: "GPU 内存",
                fpsLabel: "FPS",
                audioLabel: "音频",
                tooltipCpu: "CPU 使用率: {value}%",
                tooltipGpu: "GPU 使用率: {value}%",
                tooltipSysMem: "系统内存: {used} / {total}",
                tooltipGpuMem: "GPU 内存: {used} / {total}",
                tooltipFps: "客户端 FPS: {value}",
                tooltipAudio: "音频缓冲区: {value}",
                tooltipMemoryNA: "不可用"
            },
            clipboard: {
                title: "剪贴板",
                label: "服务器剪贴板:",
                placeholder: "来自服务器的剪贴板内容..."
            },
            files: {
                title: "文件",
                uploadButton: "上传文件",
                uploadButtonTitle: "上传文件到远程会话",
                downloadButtonTitle: "下载文件"
            },
            gamepads: {
                title: "游戏手柄",
                noActivity: "尚未检测到游戏手柄活动...",
                touchEnableTitle: "启用触摸手柄",
                touchDisableTitle: "禁用触摸手柄",
                touchActiveLabel: "触摸手柄: 开",
                touchInactiveLabel: "触摸手柄: 关",
                physicalHiddenForTouch: "触摸手柄激活时，物理手柄显示将被隐藏。",
                noActivityMobileOrEnableTouch: "没有物理手柄。请启用触摸手柄或连接控制器。"
            },
            apps: {
                title: "应用程序",
                openButtonTitle: "管理应用程序",
                openButton: "管理应用程序"
            },
            sharing: {
                title: "共享"
            }
        },
        resolutionPresets: {
            "1920x1080": "1920 x 1080 (FHD)",
            "1280x720": "1280 x 720 (HD)",
            "1366x768": "1366 x 768 (笔记本)",
            "1920x1200": "1920 x 1200 (16:10)",
            "2560x1440": "2560 x 1440 (QHD)",
            "3840x2160": "3840 x 2160 (4K UHD)",
            "1024x768": "1024 x 768 (XGA 4:3)",
            "800x600": "800 x 600 (SVGA 4:3)",
            "640x480": "640 x 480 (VGA 4:3)",
            "320x240": "320 x 240 (QVGA 4:3)"
        },
        appsModal: {
            closeAlt: "关闭应用程序模态框",
            loading: "正在加载应用程序...",
            errorLoading: "加载应用程序数据失败。请重试。",
            searchPlaceholder: "搜索应用程序...",
            noAppsFound: "未找到与您的搜索匹配的应用程序。",
            backButton: "返回列表",
            installButton: "安装",
            updateButton: "更新",
            removeButton: "移除",
            installingMessage: "模拟安装: {{appName}}",
            removingMessage: "模拟移除: {{appName}}",
            updatingMessage: "模拟更新: {{appName}}",
            installedBadge: "已安装"
        },
        notifications: {
            closeButtonAlt: "关闭 {fileName} 的通知",
            uploading: "正在上传... {progress}%",
            uploadComplete: "上传完成",
            uploadFailed: "上传失败",
            errorPrefix: "错误:",
            unknownError: "发生未知错误。",
            copiedTitle: "已复制: {label}",
            copiedMessage: "链接已复制到剪贴板: {textToCopy}",
            copyFailedTitle: "复制失败: {label}",
            copyFailedError: "无法将链接复制到剪贴板。",
            scalingTitle: "缩放已更新：需要操作",
            scalingMessage: "新的缩放已应用。要查看更改，请重启：容器、通过注销重启您的桌面会话，或重启正在运行的应用程序。"
        },
        alerts: {
            invalidResolution: "请输入有效的正整数作为宽度和高度。"
        },
        byteUnits: ["字节", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        zeroBytes: "0 字节",
        filesModal: {
            closeAlt: "关闭文件模态框",
            iframeTitle: "可下载文件"
        }
    },
    Ab = {
        selkiesLogoAlt: "सेल्कीस लोगो",
        selkiesTitle: "Selkies",
        toggleThemeTitle: "थीम बदलें",
        fullscreenTitle: "फुलस्क्रीन दर्ज करें",
        gamingModeTitle: "गेमिंग मोड",
        trackpadModeTitle: "ट्रैकपैड मोड",
        buttons: {
            videoStreamEnableTitle: "वीडियो स्ट्रीम सक्षम करें",
            videoStreamDisableTitle: "वीडियो स्ट्रीम अक्षम करें",
            audioStreamEnableTitle: "ऑडियो स्ट्रीम सक्षम करें",
            audioStreamDisableTitle: "ऑडियो स्ट्रीम अक्षम करें",
            microphoneEnableTitle: "माइक्रोफ़ोन सक्षम करें",
            microphoneDisableTitle: "माइक्रोफ़ोन अक्षम करें",
            gamepadEnableTitle: "गेमपैड इनपुट सक्षम करें",
            gamepadDisableTitle: "गेमपैड इनपुट अक्षम करें",
            virtualKeyboardButtonTitle: "कीबोर्ड दिखाएँ",
            h264FullColorEnableTitle: "H.264 फुल कलर सक्षम करें",
            h264FullColorDisableTitle: "H.264 फुल कलर अक्षम करें",
            h264StreamingModeDisableTitle: "टर्बो अक्षम करें",
            h264StreamingModeEnableTitle: "टर्बो सक्षम करें",
            useCpuEnableTitle: "फोर्स सीपीयू एन्कोडिंग सक्षम करें (nvenc/vaapi को ओवरराइड करता है)",
            useCpuDisableTitle: "फोर्स सीपीयू एन्कोडिंग अक्षम करें (nvenc/vaapi को ओवरराइड करता है)"
        },
        sections: {
            video: {
                title: "वीडियो सेटिंग्स",
                encoderLabel: "एन्कोडर:",
                framerateLabel: "फ्रेम प्रति सेकंड ({framerate} FPS):",
                bitrateLabel: "वीडियो बिटरेट ({bitrate} Mbps):",
                bufferLabelImmediate: "वीडियो बफर आकार (0 (तत्काल)):",
                bufferLabelFrames: "वीडियो बफर आकार ({videoBufferSize} फ्रेम):",
                crfLabel: "वीडियो CRF ({crf}):",
                fullColorLabel: "फुल कलर 4:4:4",
                streamingModeDetails: "टर्बो मोड सभी VNC लॉजिक को अक्षम कर देता है और सभी फ्रेम को एक पारंपरिक वीडियो एन्कोडर की तरह एन्कोड करता है।",
                streamingModeLabel: "टर्बो",
                useCpuLabel: "सीपीयू एन्कोडिंग",
                jpegQualityLabel: "आधार गुणवत्ता: {jpegQuality}",
                paintOverJpegQualityLabel: "पेंटओवर गुणवत्ता: {paintOverJpegQuality}"
            },
            audio: {
                title: "ऑडियो सेटिंग्स",
                bitrateLabel: "ऑडियो बिटरेट ({bitrate} kbps):",
                inputLabel: "इनपुट (माइक्रोफ़ोन):",
                outputLabel: "आउटपुट (स्पीकर):",
                outputNotSupported: "इस ब्राउज़र द्वारा आउटपुट डिवाइस चयन समर्थित नहीं है।",
                deviceErrorDefault: "ऑडियो डिवाइस सूचीबद्ध करने में त्रुटि: {errorName}",
                deviceErrorPermission: "अनुमति अस्वीकृत। डिवाइस चुनने के लिए कृपया ब्राउज़र सेटिंग्स में माइक्रोफ़ोन एक्सेस की अनुमति दें।",
                deviceErrorNotFound: "कोई ऑडियो डिवाइस नहीं मिला।",
                defaultInputLabelFallback: "इनपुट डिवाइस {index}",
                defaultOutputLabelFallback: "आउटपुट डिवाइस {index}"
            },
            screen: {
                title: "स्क्रीन सेटिंग्स",
                presetLabel: "प्रीसेट:",
                resolutionPresetSelect: "-- प्रीसेट चुनें --",
                widthLabel: "चौड़ाई:",
                heightLabel: "ऊंचाई:",
                widthPlaceholder: "उदा. 1920",
                heightPlaceholder: "उदा. 1080",
                setManualButton: "मैनुअल रिज़ॉल्यूशन सेट करें",
                resetButton: "विंडो पर रीसेट करें",
                scaleLocallyLabel: "स्थानीय रूप से स्केल करें:",
                scaleLocallyOn: "चालू",
                scaleLocallyOff: "बंद",
                scaleLocallyTitleEnable: "स्थानीय स्केलिंग सक्षम करें (पहलू अनुपात बनाए रखें)",
                scaleLocallyTitleDisable: "स्थानीय स्केलिंग अक्षम करें (सटीक रिज़ॉल्यूशन का उपयोग करें)",
                uiScalingLabel: "यूआई स्केलिंग:",
                hidpiLabel: "HiDPI (पिक्सेल परफेक्ट)",
                hidpiEnableTitle: "HiDPI सक्षम करें (पिक्सेल परफेक्ट)",
                hidpiDisableTitle: "HiDPI अक्षम करें (CSS स्केलिंग का उपयोग करें)"
            },
            stats: {
                title: "आँकड़े",
                cpuLabel: "CPU",
                gpuLabel: "GPU उपयोग",
                sysMemLabel: "सिस्टम मेम",
                gpuMemLabel: "GPU मेम",
                fpsLabel: "FPS",
                audioLabel: "ऑडियो",
                tooltipCpu: "CPU उपयोग: {value}%",
                tooltipGpu: "GPU उपयोग: {value}%",
                tooltipSysMem: "सिस्टम मेमोरी: {used} / {total}",
                tooltipGpuMem: "GPU मेमोरी: {used} / {total}",
                tooltipFps: "क्लाइंट FPS: {value}",
                tooltipAudio: "ऑडियो बफ़र्स: {value}",
                tooltipMemoryNA: "लागू नहीं"
            },
            clipboard: {
                title: "क्लिपबोर्ड",
                label: "सर्वर क्लिपबोर्ड:",
                placeholder: "सर्वर से क्लिपबोर्ड सामग्री..."
            },
            files: {
                title: "फ़ाइलें",
                uploadButton: "फ़ाइलें अपलोड करें",
                uploadButtonTitle: "रिमोट सेशन में फ़ाइलें अपलोड करें",
                downloadButtonTitle: "फ़ाइलें डाउनलोड करें"
            },
            gamepads: {
                title: "गेमपैड",
                noActivity: "अभी तक कोई गेमपैड गतिविधि का पता नहीं चला है...",
                touchEnableTitle: "टच गेमपैड सक्षम करें",
                touchDisableTitle: "टच गेमपैड अक्षम करें",
                touchActiveLabel: "टच गेमपैड: चालू",
                touchInactiveLabel: "टच गेमपैड: बंद",
                physicalHiddenForTouch: "टच गेमपैड सक्रिय होने पर भौतिक गेमपैड डिस्प्ले छिपा रहता है।",
                noActivityMobileOrEnableTouch: "कोई भौतिक गेमपैड नहीं। टच गेमपैड सक्षम करें या नियंत्रक कनेक्ट करें।"
            },
            apps: {
                title: "ऐप्स",
                openButtonTitle: "ऐप्स प्रबंधित करें",
                openButton: "ऐप्स प्रबंधित करें"
            },
            sharing: {
                title: "साझा करना"
            }
        },
        resolutionPresets: {
            "1920x1080": "1920 x 1080 (FHD)",
            "1280x720": "1280 x 720 (HD)",
            "1366x768": "1366 x 768 (लैपटॉप)",
            "1920x1200": "1920 x 1200 (16:10)",
            "2560x1440": "2560 x 1440 (QHD)",
            "3840x2160": "3840 x 2160 (4K UHD)",
            "1024x768": "1024 x 768 (XGA 4:3)",
            "800x600": "800 x 600 (SVGA 4:3)",
            "640x480": "640 x 480 (VGA 4:3)",
            "320x240": "320 x 240 (QVGA 4:3)"
        },
        appsModal: {
            closeAlt: "ऐप्स मोडल बंद करें",
            loading: "ऐप्स लोड हो रहे हैं...",
            errorLoading: "ऐप डेटा लोड करने में विफल। कृपया पुनः प्रयास करें।",
            searchPlaceholder: "ऐप्स खोजें...",
            noAppsFound: "आपकी खोज से मेल खाने वाले कोई ऐप्स नहीं मिले।",
            backButton: "सूची पर वापस जाएं",
            installButton: "इंस्टॉल करें",
            updateButton: "अपडेट करें",
            removeButton: "हटाएं",
            installingMessage: "इसके लिए इंस्टॉलेशन का अनुकरण किया जा रहा है: {{appName}}",
            removingMessage: "इसके लिए हटाने का अनुकरण किया जा रहा है: {{appName}}",
            updatingMessage: "इसके लिए अपडेट का अनुकरण किया जा रहा है: {{appName}}",
            installedBadge: "इंस्टॉल किया गया"
        },
        notifications: {
            closeButtonAlt: "{fileName} के लिए अधिसूचना बंद करें",
            uploading: "अपलोड हो रहा है... {progress}%",
            uploadComplete: "अपलोड पूर्ण",
            uploadFailed: "अपलोड विफल",
            errorPrefix: "त्रुटि:",
            unknownError: "एक अज्ञात त्रुटि हुई।",
            copiedTitle: "कॉपी किया गया: {label}",
            copiedMessage: "लिंक क्लिपबोर्ड पर कॉपी किया गया: {textToCopy}",
            copyFailedTitle: "कॉपी करने में विफल: {label}",
            copyFailedError: "लिंक क्लिपबोर्ड पर कॉपी नहीं किया जा सका।",
            scalingTitle: "स्केलिंग अपडेट किया गया: कार्रवाई आवश्यक है",
            scalingMessage: "नई स्केलिंग लागू की गई है। परिवर्तन देखने के लिए, पुनरारंभ करें: कंटेनर, लॉग आउट करके अपना डेस्कटॉप सत्र, या चल रहा एप्लिकेशन।"
        },
        alerts: {
            invalidResolution: "कृपया चौड़ाई और ऊंचाई के लिए मान्य धनात्मक पूर्णांक दर्ज करें।"
        },
        byteUnits: ["बाइट्स", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        zeroBytes: "0 बाइट्स",
        filesModal: {
            closeAlt: "फ़ाइलें मोडल बंद करें",
            iframeTitle: "डाउनलोड करने योग्य फ़ाइलें"
        }
    },
    Mb = {
        selkiesLogoAlt: "Logo Selkies",
        selkiesTitle: "Selkies",
        toggleThemeTitle: "Alternar Tema",
        fullscreenTitle: "Entrar em Tela Cheia",
        gamingModeTitle: "Modo de Jogo",
        trackpadModeTitle: "Modo Trackpad",
        buttons: {
            videoStreamEnableTitle: "Ativar Stream de Vídeo",
            videoStreamDisableTitle: "Desativar Stream de Vídeo",
            audioStreamEnableTitle: "Ativar Stream de Áudio",
            audioStreamDisableTitle: "Desativar Stream de Áudio",
            microphoneEnableTitle: "Ativar Microfone",
            microphoneDisableTitle: "Desativar Microfone",
            gamepadEnableTitle: "Ativar Entrada de Gamepad",
            gamepadDisableTitle: "Desativar Entrada de Gamepad",
            virtualKeyboardButtonTitle: "Exibir Teclado",
            h264FullColorEnableTitle: "Ativar H.264 Cor Completa",
            h264FullColorDisableTitle: "Desativar H.264 Cor Completa",
            h264StreamingModeDisableTitle: "Desativar Turbo",
            h264StreamingModeEnableTitle: "Ativar Turbo",
            useCpuEnableTitle: "Ativar Codificação Forçada por CPU (Substitui nvenc/vaapi)",
            useCpuDisableTitle: "Desativar Codificação Forçada por CPU (Substitui nvenc/vaapi)"
        },
        sections: {
            video: {
                title: "Configurações de Vídeo",
                encoderLabel: "Codificador:",
                framerateLabel: "Quadros por segundo ({framerate} FPS):",
                bitrateLabel: "Bitrate de Vídeo ({bitrate} Mbps):",
                bufferLabelImmediate: "Tamanho do Buffer de Vídeo (0 (Imediato)):",
                bufferLabelFrames: "Tamanho do Buffer de Vídeo ({videoBufferSize} quadros):",
                crfLabel: "CRF de Vídeo ({crf}):",
                fullColorLabel: "Cor Completa 4:4:4",
                streamingModeDetails: "O modo Turbo desativa toda a lógica VNC e codifica todos os quadros como um codificador de vídeo tradicional.",
                streamingModeLabel: "Turbo",
                useCpuLabel: "Codificação por CPU",
                jpegQualityLabel: "Qualidade Base: {jpegQuality}",
                paintOverJpegQualityLabel: "Qualidade de Sobreposição: {paintOverJpegQuality}"
            },
            audio: {
                title: "Configurações de Áudio",
                bitrateLabel: "Bitrate de Áudio ({bitrate} kbps):",
                inputLabel: "Entrada (Microfone):",
                outputLabel: "Saída (Alto-falante):",
                outputNotSupported: "A seleção de dispositivo de saída não é suportada por este navegador.",
                deviceErrorDefault: "Erro ao listar dispositivos de áudio: {errorName}",
                deviceErrorPermission: "Permissão negada. Permita o acesso ao microfone nas configurações do navegador para selecionar dispositivos.",
                deviceErrorNotFound: "Nenhum dispositivo de áudio encontrado.",
                defaultInputLabelFallback: "Dispositivo de Entrada {index}",
                defaultOutputLabelFallback: "Dispositivo de Saída {index}"
            },
            screen: {
                title: "Configurações de Tela",
                presetLabel: "Predefinição:",
                resolutionPresetSelect: "-- Selecionar Predefinição --",
                widthLabel: "Largura:",
                heightLabel: "Altura:",
                widthPlaceholder: "ex: 1920",
                heightPlaceholder: "ex: 1080",
                setManualButton: "Definir Resolução Manual",
                resetButton: "Redefinir para Janela",
                scaleLocallyLabel: "Escalar Localmente:",
                scaleLocallyOn: "LIGADO",
                scaleLocallyOff: "DESLIGADO",
                scaleLocallyTitleEnable: "Ativar Escala Local (Manter Proporção)",
                scaleLocallyTitleDisable: "Desativar Escala Local (Usar Resolução Exata)",
                uiScalingLabel: "Escala da Interface:",
                hidpiLabel: "HiDPI (Pixel Perfeito)",
                hidpiEnableTitle: "Ativar HiDPI (Pixel Perfeito)",
                hidpiDisableTitle: "Desativar HiDPI (Usar dimensionamento CSS)"
            },
            stats: {
                title: "Estatísticas",
                cpuLabel: "CPU",
                gpuLabel: "Uso de GPU",
                sysMemLabel: "Mem Sistema",
                gpuMemLabel: "Mem GPU",
                fpsLabel: "FPS",
                audioLabel: "Áudio",
                tooltipCpu: "Uso de CPU: {value}%",
                tooltipGpu: "Uso de GPU: {value}%",
                tooltipSysMem: "Memória do Sistema: {used} / {total}",
                tooltipGpuMem: "Memória da GPU: {used} / {total}",
                tooltipFps: "FPS do Cliente: {value}",
                tooltipAudio: "Buffers de Áudio: {value}",
                tooltipMemoryNA: "N/D"
            },
            clipboard: {
                title: "Área de Transferência",
                label: "Área de Transferência do Servidor:",
                placeholder: "Conteúdo da área de transferência do servidor..."
            },
            files: {
                title: "Arquivos",
                uploadButton: "Carregar Arquivos",
                uploadButtonTitle: "Carregar arquivos para a sessão remota",
                downloadButtonTitle: "Baixar Arquivos"
            },
            gamepads: {
                title: "Gamepads",
                noActivity: "Nenhuma atividade de gamepad detectada ainda...",
                touchEnableTitle: "Ativar Gamepad Tátil",
                touchDisableTitle: "Desativar Gamepad Tátil",
                touchActiveLabel: "Gamepad Tátil: LIGADO",
                touchInactiveLabel: "Gamepad Tátil: DESLIGADO",
                physicalHiddenForTouch: "A exibição de gamepads físicos fica oculta enquanto o gamepad tátil está ativo.",
                noActivityMobileOrEnableTouch: "Sem gamepads físicos. Ative o gamepad tátil ou conecte um controle."
            },
            apps: {
                title: "Aplicativos",
                openButtonTitle: "Gerenciar Aplicativos",
                openButton: "Gerenciar Aplicativos"
            },
            sharing: {
                title: "Compartilhamento"
            }
        },
        resolutionPresets: {
            "1920x1080": "1920 x 1080 (FHD)",
            "1280x720": "1280 x 720 (HD)",
            "1366x768": "1366 x 768 (Laptop)",
            "1920x1200": "1920 x 1200 (16:10)",
            "2560x1440": "2560 x 1440 (QHD)",
            "3840x2160": "3840 x 2160 (4K UHD)",
            "1024x768": "1024 x 768 (XGA 4:3)",
            "800x600": "800 x 600 (SVGA 4:3)",
            "640x480": "640 x 480 (VGA 4:3)",
            "320x240": "320 x 240 (QVGA 4:3)"
        },
        appsModal: {
            closeAlt: "Fechar modal de aplicativos",
            loading: "Carregando aplicativos...",
            errorLoading: "Falha ao carregar dados dos aplicativos. Por favor, tente novamente.",
            searchPlaceholder: "Buscar aplicativos...",
            noAppsFound: "Nenhum aplicativo encontrado correspondente à sua busca.",
            backButton: "Voltar para a lista",
            installButton: "Instalar",
            updateButton: "Atualizar",
            removeButton: "Remover",
            installingMessage: "Simulando instalação para: {{appName}}",
            removingMessage: "Simulando remoção para: {{appName}}",
            updatingMessage: "Simulando atualização para: {{appName}}",
            installedBadge: "Instalado"
        },
        notifications: {
            closeButtonAlt: "Fechar notificação para {fileName}",
            uploading: "Carregando... {progress}%",
            uploadComplete: "Carregamento Completo",
            uploadFailed: "Falha no Carregamento",
            errorPrefix: "Erro:",
            unknownError: "Ocorreu um erro desconhecido.",
            copiedTitle: "Copiado: {label}",
            copiedMessage: "Link copiado para a área de transferência: {textToCopy}",
            copyFailedTitle: "Falha ao Copiar: {label}",
            copyFailedError: "Não foi possível copiar o link para a área de transferência.",
            scalingTitle: "Escala Atualizada: Ação Necessária",
            scalingMessage: "Nova escala aplicada. Para ver as alterações, reinicie: o contêiner, sua sessão de desktop fazendo logout, ou o aplicativo em execução."
        },
        alerts: {
            invalidResolution: "Por favor, insira inteiros positivos válidos para Largura e Altura."
        },
        byteUnits: ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        zeroBytes: "0 Bytes",
        filesModal: {
            closeAlt: "Fechar modal de arquivos",
            iframeTitle: "Arquivos para Download"
        }
    },
    Eb = {
        selkiesLogoAlt: "Logo Selkies",
        selkiesTitle: "Selkies",
        toggleThemeTitle: "Changer de thème",
        fullscreenTitle: "Passer en plein écran",
        gamingModeTitle: "Mode Jeu",
        trackpadModeTitle: "Mode Trackpad",
        buttons: {
            videoStreamEnableTitle: "Activer le flux vidéo",
            videoStreamDisableTitle: "Désactiver le flux vidéo",
            audioStreamEnableTitle: "Activer le flux audio",
            audioStreamDisableTitle: "Désactiver le flux audio",
            microphoneEnableTitle: "Activer le microphone",
            microphoneDisableTitle: "Désactiver le microphone",
            gamepadEnableTitle: "Activer l'entrée manette",
            gamepadDisableTitle: "Désactiver l'entrée manette",
            virtualKeyboardButtonTitle: "Afficher le Clavier",
            h264FullColorEnableTitle: "Activer H.264 Couleur Complète",
            h264FullColorDisableTitle: "Désactiver H.264 Couleur Complète",
            h264StreamingModeDisableTitle: "Désactiver le mode Turbo",
            h264StreamingModeEnableTitle: "Activer le mode Turbo",
            useCpuEnableTitle: "Activer l'encodage forcé par CPU (Remplace nvenc/vaapi)",
            useCpuDisableTitle: "Désactiver l'encodage forcé par CPU (Remplace nvenc/vaapi)"
        },
        sections: {
            video: {
                title: "Paramètres vidéo",
                encoderLabel: "Encodeur :",
                framerateLabel: "Images par seconde ({framerate} FPS) :",
                bitrateLabel: "Débit vidéo ({bitrate} Mbps) :",
                bufferLabelImmediate: "Taille du tampon vidéo (0 (Immédiat)) :",
                bufferLabelFrames: "Taille du tampon vidéo ({videoBufferSize} images) :",
                crfLabel: "CRF Vidéo ({crf}) :",
                fullColorLabel: "Couleur Complète 4:4:4",
                streamingModeDetails: "Le mode Turbo désactive toute la logique VNC et encode toutes les trames comme un encodeur vidéo traditionnel.",
                streamingModeLabel: "Turbo",
                useCpuLabel: "Encodage CPU",
                jpegQualityLabel: "Qualité de base : {jpegQuality}",
                paintOverJpegQualityLabel: "Qualité de la surimpression : {paintOverJpegQuality}"
            },
            audio: {
                title: "Paramètres audio",
                bitrateLabel: "Débit audio ({bitrate} kbps) :",
                inputLabel: "Entrée (Microphone) :",
                outputLabel: "Sortie (Haut-parleur) :",
                outputNotSupported: "La sélection du périphérique de sortie n'est pas prise en charge par ce navigateur.",
                deviceErrorDefault: "Erreur lors de l'énumération des périphériques audio : {errorName}",
                deviceErrorPermission: "Autorisation refusée. Veuillez autoriser l'accès au microphone dans les paramètres du navigateur pour sélectionner des périphériques.",
                deviceErrorNotFound: "Aucun périphérique audio trouvé.",
                defaultInputLabelFallback: "Périphérique d'entrée {index}",
                defaultOutputLabelFallback: "Périphérique de sortie {index}"
            },
            screen: {
                title: "Paramètres d'écran",
                presetLabel: "Préréglage :",
                resolutionPresetSelect: "-- Sélectionner un préréglage --",
                widthLabel: "Largeur :",
                heightLabel: "Hauteur :",
                widthPlaceholder: "ex: 1920",
                heightPlaceholder: "ex: 1080",
                setManualButton: "Définir la résolution manuelle",
                resetButton: "Réinitialiser à la fenêtre",
                scaleLocallyLabel: "Mise à l'échelle locale :",
                scaleLocallyOn: "OUI",
                scaleLocallyOff: "NON",
                scaleLocallyTitleEnable: "Activer la mise à l'échelle locale (Conserver les proportions)",
                scaleLocallyTitleDisable: "Désactiver la mise à l'échelle locale (Utiliser la résolution exacte)",
                uiScalingLabel: "Mise à l'échelle de l'interface :",
                hidpiLabel: "HiDPI (Pixel Perfect)",
                hidpiEnableTitle: "Activer HiDPI (Pixel Perfect)",
                hidpiDisableTitle: "Désactiver HiDPI (Utiliser la mise à l'échelle CSS)"
            },
            stats: {
                title: "Statistiques",
                cpuLabel: "CPU",
                gpuLabel: "Utilisation GPU",
                sysMemLabel: "Mém. Système",
                gpuMemLabel: "Mém. GPU",
                fpsLabel: "FPS",
                audioLabel: "Audio",
                tooltipCpu: "Utilisation CPU : {value}%",
                tooltipGpu: "Utilisation GPU : {value}%",
                tooltipSysMem: "Mémoire système : {used} / {total}",
                tooltipGpuMem: "Mémoire GPU : {used} / {total}",
                tooltipFps: "FPS Client : {value}",
                tooltipAudio: "Tampons audio : {value}",
                tooltipMemoryNA: "N/D"
            },
            clipboard: {
                title: "Presse-papiers",
                label: "Presse-papiers du serveur :",
                placeholder: "Contenu du presse-papiers depuis le serveur..."
            },
            files: {
                title: "Fichiers",
                uploadButton: "Téléverser des fichiers",
                uploadButtonTitle: "Téléverser des fichiers vers la session distante",
                downloadButtonTitle: "Télécharger les Fichiers"
            },
            gamepads: {
                title: "Manettes",
                noActivity: "Aucune activité de manette détectée pour le moment...",
                touchEnableTitle: "Activer la manette tactile",
                touchDisableTitle: "Désactiver la manette tactile",
                touchActiveLabel: "Manette tactile : ACTIVÉE",
                touchInactiveLabel: "Manette tactile : DÉSACTIVÉE",
                physicalHiddenForTouch: "L'affichage des manettes physiques est masqué lorsque la manette tactile est active.",
                noActivityMobileOrEnableTouch: "Aucune manette physique. Activez la manette tactile ou connectez un contrôleur."
            },
            apps: {
                title: "Applications",
                openButtonTitle: "Gérer les applications",
                openButton: "Gérer les applications"
            },
            sharing: {
                title: "Partage"
            }
        },
        resolutionPresets: {
            "1920x1080": "1920 x 1080 (FHD)",
            "1280x720": "1280 x 720 (HD)",
            "1366x768": "1366 x 768 (Portable)",
            "1920x1200": "1920 x 1200 (16:10)",
            "2560x1440": "2560 x 1440 (QHD)",
            "3840x2160": "3840 x 2160 (4K UHD)",
            "1024x768": "1024 x 768 (XGA 4:3)",
            "800x600": "800 x 600 (SVGA 4:3)",
            "640x480": "640 x 480 (VGA 4:3)",
            "320x240": "320 x 240 (QVGA 4:3)"
        },
        appsModal: {
            closeAlt: "Fermer la modale des applications",
            loading: "Chargement des applications...",
            errorLoading: "Échec du chargement des données des applications. Veuillez réessayer.",
            searchPlaceholder: "Rechercher des applications...",
            noAppsFound: "Aucune application trouvée correspondant à votre recherche.",
            backButton: "Retour à la liste",
            installButton: "Installer",
            updateButton: "Mettre à jour",
            removeButton: "Supprimer",
            installingMessage: "Simulation de l'installation pour : {{appName}}",
            removingMessage: "Simulation de la suppression pour : {{appName}}",
            updatingMessage: "Simulation de la mise à jour pour : {{appName}}",
            installedBadge: "Installé"
        },
        notifications: {
            closeButtonAlt: "Fermer la notification pour {fileName}",
            uploading: "Téléversement... {progress}%",
            uploadComplete: "Téléversement terminé",
            uploadFailed: "Échec du téléversement",
            errorPrefix: "Erreur :",
            unknownError: "Une erreur inconnue s'est produite.",
            copiedTitle: "Copié : {label}",
            copiedMessage: "Lien copié dans le presse-papiers : {textToCopy}",
            copyFailedTitle: "Échec de la copie : {label}",
            copyFailedError: "Impossible de copier le lien dans le presse-papiers.",
            scalingTitle: "Mise à l'échelle mise à jour : Action requise",
            scalingMessage: "Nouvelle mise à l'échelle appliquée. Pour voir les changements, redémarrez : le conteneur, votre session de bureau en vous déconnectant, ou l'application en cours d'exécution."
        },
        alerts: {
            invalidResolution: "Veuillez entrer des entiers positifs valides pour la Largeur et la Hauteur."
        },
        byteUnits: ["Octets", "Ko", "Mo", "Go", "To", "Po", "Eo", "Zo", "Yo"],
        zeroBytes: "0 Octets",
        filesModal: {
            closeAlt: "Fermer la modale des fichiers",
            iframeTitle: "Fichiers téléchargeables"
        }
    },
    Cb = {
        selkiesLogoAlt: "Логотип Selkies",
        selkiesTitle: "Selkies",
        toggleThemeTitle: "Переключить тему",
        fullscreenTitle: "Войти в полноэкранный режим",
        gamingModeTitle: "Игровой режим",
        trackpadModeTitle: "Режим трекпада",
        buttons: {
            videoStreamEnableTitle: "Включить видеопоток",
            videoStreamDisableTitle: "Отключить видеопоток",
            audioStreamEnableTitle: "Включить аудиопоток",
            audioStreamDisableTitle: "Отключить аудиопоток",
            microphoneEnableTitle: "Включить микрофон",
            microphoneDisableTitle: "Отключить микрофон",
            gamepadEnableTitle: "Включить ввод с геймпада",
            gamepadDisableTitle: "Отключить ввод с геймпада",
            virtualKeyboardButtonTitle: "Показать Клавиатуру",
            h264FullColorEnableTitle: "Включить H.264 Полный цвет",
            h264FullColorDisableTitle: "Отключить H.264 Полный цвет",
            h264StreamingModeDisableTitle: "Отключить Турбо",
            h264StreamingModeEnableTitle: "Включить Турбо",
            useCpuEnableTitle: "Включить принудительное кодирование ЦП (Переопределяет nvenc/vaapi)",
            useCpuDisableTitle: "Отключить принудительное кодирование ЦП (Переопределяет nvenc/vaapi)"
        },
        sections: {
            video: {
                title: "Настройки видео",
                encoderLabel: "Кодировщик:",
                framerateLabel: "Кадров в секунду ({framerate} FPS):",
                bitrateLabel: "Битрейт видео ({bitrate} Мбит/с):",
                bufferLabelImmediate: "Размер буфера видео (0 (Немедленно)):",
                bufferLabelFrames: "Размер буфера видео ({videoBufferSize} кадров):",
                crfLabel: "CRF видео ({crf}):",
                fullColorLabel: "Полный цвет 4:4:4",
                streamingModeDetails: "Режим Турбо отключает всю логику VNC и кодирует все кадры как традиционный видеокодер.",
                streamingModeLabel: "Турбо",
                useCpuLabel: "Кодирование ЦП",
                jpegQualityLabel: "Базовое качество: {jpegQuality}",
                paintOverJpegQualityLabel: "Качество дорисовки: {paintOverJpegQuality}"
            },
            audio: {
                title: "Настройки аудио",
                bitrateLabel: "Битрейт аудио ({bitrate} кбит/с):",
                inputLabel: "Вход (Микрофон):",
                outputLabel: "Выход (Динамик):",
                outputNotSupported: "Выбор устройства вывода не поддерживается этим браузером.",
                deviceErrorDefault: "Ошибка при перечислении аудиоустройств: {errorName}",
                deviceErrorPermission: "Доступ запрещен. Пожалуйста, разрешите доступ к микрофону в настройках браузера для выбора устройств.",
                deviceErrorNotFound: "Аудиоустройства не найдены.",
                defaultInputLabelFallback: "Устройство ввода {index}",
                defaultOutputLabelFallback: "Устройство вывода {index}"
            },
            screen: {
                title: "Настройки экрана",
                presetLabel: "Предустановка:",
                resolutionPresetSelect: "-- Выбрать предустановку --",
                widthLabel: "Ширина:",
                heightLabel: "Высота:",
                widthPlaceholder: "напр., 1920",
                heightPlaceholder: "напр., 1080",
                setManualButton: "Установить ручное разрешение",
                resetButton: "Сбросить до окна",
                scaleLocallyLabel: "Масштабировать локально:",
                scaleLocallyOn: "ВКЛ",
                scaleLocallyOff: "ВЫКЛ",
                scaleLocallyTitleEnable: "Включить локальное масштабирование (Сохранять пропорции)",
                scaleLocallyTitleDisable: "Отключить локальное масштабирование (Использовать точное разрешение)",
                uiScalingLabel: "Масштаб интерфейса:",
                hidpiLabel: "HiDPI (Пиксельная точность)",
                hidpiEnableTitle: "Включить HiDPI (Пиксельная точность)",
                hidpiDisableTitle: "Отключить HiDPI (Использовать масштабирование CSS)"
            },
            stats: {
                title: "Статистика",
                cpuLabel: "ЦП",
                gpuLabel: "Загрузка ГП",
                sysMemLabel: "Память сист.",
                gpuMemLabel: "Память ГП",
                fpsLabel: "FPS",
                audioLabel: "Аудио",
                tooltipCpu: "Загрузка ЦП: {value}%",
                tooltipGpu: "Загрузка ГП: {value}%",
                tooltipSysMem: "Системная память: {used} / {total}",
                tooltipGpuMem: "Память ГП: {used} / {total}",
                tooltipFps: "FPS клиента: {value}",
                tooltipAudio: "Аудиобуферы: {value}",
                tooltipMemoryNA: "Н/Д"
            },
            clipboard: {
                title: "Буфер обмена",
                label: "Буфер обмена сервера:",
                placeholder: "Содержимое буфера обмена с сервера..."
            },
            files: {
                title: "Файлы",
                uploadButton: "Загрузить файлы",
                uploadButtonTitle: "Загрузить файлы в удаленную сессию",
                downloadButtonTitle: "Скачать Файлы"
            },
            gamepads: {
                title: "Геймпады",
                noActivity: "Активность геймпада пока не обнаружена...",
                touchEnableTitle: "Включить сенсорный геймпад",
                touchDisableTitle: "Отключить сенсорный геймпад",
                touchActiveLabel: "Сенсорный геймпад: ВКЛ",
                touchInactiveLabel: "Сенсорный геймпад: ВЫКЛ",
                physicalHiddenForTouch: "Отображение физических геймпадов скрыто, пока активен сенсорный геймпад.",
                noActivityMobileOrEnableTouch: "Физические геймпады отсутствуют. Включите сенсорный геймпад или подключите контроллер."
            },
            apps: {
                title: "Приложения",
                openButtonTitle: "Управление приложениями",
                openButton: "Управление приложениями"
            },
            sharing: {
                title: "Общий доступ"
            }
        },
        resolutionPresets: {
            "1920x1080": "1920 x 1080 (FHD)",
            "1280x720": "1280 x 720 (HD)",
            "1366x768": "1366 x 768 (Ноутбук)",
            "1920x1200": "1920 x 1200 (16:10)",
            "2560x1440": "2560 x 1440 (QHD)",
            "3840x2160": "3840 x 2160 (4K UHD)",
            "1024x768": "1024 x 768 (XGA 4:3)",
            "800x600": "800 x 600 (SVGA 4:3)",
            "640x480": "640 x 480 (VGA 4:3)",
            "320x240": "320 x 240 (QVGA 4:3)"
        },
        appsModal: {
            closeAlt: "Закрыть модальное окно приложений",
            loading: "Загрузка приложений...",
            errorLoading: "Не удалось загрузить данные приложений. Пожалуйста, попробуйте еще раз.",
            searchPlaceholder: "Поиск приложений...",
            noAppsFound: "Приложения, соответствующие вашему поиску, не найдены.",
            backButton: "Назад к списку",
            installButton: "Установить",
            updateButton: "Обновить",
            removeButton: "Удалить",
            installingMessage: "Симуляция установки для: {{appName}}",
            removingMessage: "Симуляция удаления для: {{appName}}",
            updatingMessage: "Симуляция обновления для: {{appName}}",
            installedBadge: "Установлено"
        },
        notifications: {
            closeButtonAlt: "Закрыть уведомление для {fileName}",
            uploading: "Загрузка... {progress}%",
            uploadComplete: "Загрузка завершена",
            uploadFailed: "Ошибка загрузки",
            errorPrefix: "Ошибка:",
            unknownError: "Произошла неизвестная ошибка.",
            copiedTitle: "Скопировано: {label}",
            copiedMessage: "Ссылка скопирована в буфер обмена: {textToCopy}",
            copyFailedTitle: "Ошибка копирования: {label}",
            copyFailedError: "Не удалось скопировать ссылку в буфер обмена.",
            scalingTitle: "Масштабирование обновлено: Требуется действие",
            scalingMessage: "Новое масштабирование применено. Чтобы увидеть изменения, перезапустите: контейнер, ваш сеанс рабочего стола путем выхода из системы, или запущенное приложение."
        },
        alerts: {
            invalidResolution: "Пожалуйста, введите действительные положительные целые числа для Ширины и Высоты."
        },
        byteUnits: ["Байты", "КБ", "МБ", "ГБ", "ТБ", "ПБ", "ЭБ", "ЗБ", "ЙБ"],
        zeroBytes: "0 Байт",
        filesModal: {
            closeAlt: "Закрыть модальное окно файлов",
            iframeTitle: "Файлы для скачивания"
        }
    },
    Lb = {
        selkiesLogoAlt: "Selkies Logo",
        selkiesTitle: "Selkies",
        toggleThemeTitle: "Theme wechseln",
        fullscreenTitle: "Vollbildmodus aktivieren",
        gamingModeTitle: "Gaming-Modus",
        trackpadModeTitle: "Trackpad-Modus",
        buttons: {
            videoStreamEnableTitle: "Videostream aktivieren",
            videoStreamDisableTitle: "Videostream deaktivieren",
            audioStreamEnableTitle: "Audiostream aktivieren",
            audioStreamDisableTitle: "Audiostream deaktivieren",
            microphoneEnableTitle: "Mikrofon aktivieren",
            microphoneDisableTitle: "Mikrofon deaktivieren",
            gamepadEnableTitle: "Gamepad-Eingabe aktivieren",
            gamepadDisableTitle: "Gamepad-Eingabe deaktivieren",
            virtualKeyboardButtonTitle: "Tastatur einblenden",
            h264FullColorEnableTitle: "H.264 Vollfarbe aktivieren",
            h264FullColorDisableTitle: "H.264 Vollfarbe deaktivieren",
            h264StreamingModeDisableTitle: "Turbo deaktivieren",
            h264StreamingModeEnableTitle: "Turbo aktivieren",
            useCpuEnableTitle: "Erzwungene CPU-Kodierung aktivieren (Überschreibt nvenc/vaapi)",
            useCpuDisableTitle: "Erzwungene CPU-Kodierung deaktivieren (Überschreibt nvenc/vaapi)"
        },
        sections: {
            video: {
                title: "Videoeinstellungen",
                encoderLabel: "Encoder:",
                framerateLabel: "Bilder pro Sekunde ({framerate} FPS):",
                bitrateLabel: "Video-Bitrate ({bitrate} Mbps):",
                bufferLabelImmediate: "Video-Puffergröße (0 (Sofort)):",
                bufferLabelFrames: "Video-Puffergröße ({videoBufferSize} Frames):",
                crfLabel: "Video CRF ({crf}):",
                fullColorLabel: "Vollfarbe 4:4:4",
                streamingModeDetails: "Der Turbo-Modus deaktiviert die gesamte VNC-Logik und kodiert alle Frames wie ein herkömmlicher Video-Encoder.",
                streamingModeLabel: "Turbo",
                useCpuLabel: "CPU-Kodierung",
                jpegQualityLabel: "Basisqualität: {jpegQuality}",
                paintOverJpegQualityLabel: "Übermalungsqualität: {paintOverJpegQuality}"
            },
            audio: {
                title: "Audioeinstellungen",
                bitrateLabel: "Audio-Bitrate ({bitrate} kbps):",
                inputLabel: "Eingang (Mikrofon):",
                outputLabel: "Ausgang (Lautsprecher):",
                outputNotSupported: "Die Auswahl des Ausgabegeräts wird von diesem Browser nicht unterstützt.",
                deviceErrorDefault: "Fehler beim Auflisten der Audiogeräte: {errorName}",
                deviceErrorPermission: "Berechtigung verweigert. Bitte erlauben Sie den Mikrofonzugriff in den Browsereinstellungen, um Geräte auszuwählen.",
                deviceErrorNotFound: "Keine Audiogeräte gefunden.",
                defaultInputLabelFallback: "Eingabegerät {index}",
                defaultOutputLabelFallback: "Ausgabegerät {index}"
            },
            screen: {
                title: "Bildschirmeinstellungen",
                presetLabel: "Voreinstellung:",
                resolutionPresetSelect: "-- Voreinstellung wählen --",
                widthLabel: "Breite:",
                heightLabel: "Höhe:",
                widthPlaceholder: "z.B. 1920",
                heightPlaceholder: "z.B. 1080",
                setManualButton: "Manuelle Auflösung festlegen",
                resetButton: "Auf Fenster zurücksetzen",
                scaleLocallyLabel: "Lokal skalieren:",
                scaleLocallyOn: "AN",
                scaleLocallyOff: "AUS",
                scaleLocallyTitleEnable: "Lokale Skalierung aktivieren (Seitenverhältnis beibehalten)",
                scaleLocallyTitleDisable: "Lokale Skalierung deaktivieren (Genaue Auflösung verwenden)",
                uiScalingLabel: "UI-Skalierung:",
                hidpiLabel: "HiDPI (Pixelgenau)",
                hidpiEnableTitle: "HiDPI aktivieren (Pixelgenau)",
                hidpiDisableTitle: "HiDPI deaktivieren (CSS-Skalierung verwenden)"
            },
            stats: {
                title: "Statistiken",
                cpuLabel: "CPU",
                gpuLabel: "GPU-Auslastung",
                sysMemLabel: "Sys-Speicher",
                gpuMemLabel: "GPU-Speicher",
                fpsLabel: "FPS",
                audioLabel: "Audio",
                tooltipCpu: "CPU-Auslastung: {value}%",
                tooltipGpu: "GPU-Auslastung: {value}%",
                tooltipSysMem: "Systemspeicher: {used} / {total}",
                tooltipGpuMem: "GPU-Speicher: {used} / {total}",
                tooltipFps: "Client FPS: {value}",
                tooltipAudio: "Audio-Puffer: {value}",
                tooltipMemoryNA: "N/V"
            },
            clipboard: {
                title: "Zwischenablage",
                label: "Server-Zwischenablage:",
                placeholder: "Inhalt der Zwischenablage vom Server..."
            },
            files: {
                title: "Dateien",
                uploadButton: "Dateien hochladen",
                uploadButtonTitle: "Dateien zur Remote-Sitzung hochladen",
                downloadButtonTitle: "Dateien herunterladen"
            },
            gamepads: {
                title: "Gamepads",
                noActivity: "Bisher keine Gamepad-Aktivität erkannt...",
                touchEnableTitle: "Touch-Gamepad aktivieren",
                touchDisableTitle: "Touch-Gamepad deaktivieren",
                touchActiveLabel: "Touch-Gamepad: AN",
                touchInactiveLabel: "Touch-Gamepad: AUS",
                physicalHiddenForTouch: "Die Anzeige physischer Gamepads ist ausgeblendet, während das Touch-Gamepad aktiv ist.",
                noActivityMobileOrEnableTouch: "Keine physischen Gamepads. Aktivieren Sie das Touch-Gamepad oder schließen Sie einen Controller an."
            },
            apps: {
                title: "Anwendungen",
                openButtonTitle: "Anwendungen verwalten",
                openButton: "Anwendungen verwalten"
            },
            sharing: {
                title: "Teilen"
            }
        },
        resolutionPresets: {
            "1920x1080": "1920 x 1080 (FHD)",
            "1280x720": "1280 x 720 (HD)",
            "1366x768": "1366 x 768 (Laptop)",
            "1920x1200": "1920 x 1200 (16:10)",
            "2560x1440": "2560 x 1440 (QHD)",
            "3840x2160": "3840 x 2160 (4K UHD)",
            "1024x768": "1024 x 768 (XGA 4:3)",
            "800x600": "800 x 600 (SVGA 4:3)",
            "640x480": "640 x 480 (VGA 4:3)",
            "320x240": "320 x 240 (QVGA 4:3)"
        },
        appsModal: {
            closeAlt: "Anwendungsmodal schließen",
            loading: "Anwendungen werden geladen...",
            errorLoading: "Fehler beim Laden der Anwendungsdaten. Bitte versuchen Sie es erneut.",
            searchPlaceholder: "Anwendungen suchen...",
            noAppsFound: "Keine Anwendungen gefunden, die Ihrer Suche entsprechen.",
            backButton: "Zurück zur Liste",
            installButton: "Installieren",
            updateButton: "Aktualisieren",
            removeButton: "Entfernen",
            installingMessage: "Simulation der Installation für: {{appName}}",
            removingMessage: "Simulation der Entfernung für: {{appName}}",
            updatingMessage: "Simulation der Aktualisierung für: {{appName}}",
            installedBadge: "Installiert"
        },
        notifications: {
            closeButtonAlt: "Benachrichtigung für {fileName} schließen",
            uploading: "Hochladen... {progress}%",
            uploadComplete: "Hochladen abgeschlossen",
            uploadFailed: "Hochladen fehlgeschlagen",
            errorPrefix: "Fehler:",
            unknownError: "Ein unbekannter Fehler ist aufgetreten.",
            copiedTitle: "Kopiert: {label}",
            copiedMessage: "Link in die Zwischenablage kopiert: {textToCopy}",
            copyFailedTitle: "Kopieren fehlgeschlagen: {label}",
            copyFailedError: "Link konnte nicht in die Zwischenablage kopiert werden.",
            scalingTitle: "Skalierung aktualisiert: Aktion erforderlich",
            scalingMessage: "Neue Skalierung angewendet. Um Änderungen zu sehen, starten Sie neu: den Container, Ihre Desktop-Sitzung durch Abmelden oder die laufende Anwendung."
        },
        alerts: {
            invalidResolution: "Bitte geben Sie gültige positive ganze Zahlen für Breite und Höhe ein."
        },
        byteUnits: ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        zeroBytes: "0 Bytes",
        filesModal: {
            closeAlt: "Dateimodal schließen",
            iframeTitle: "Herunterladbare Dateien"
        }
    },
    kb = {
        selkiesLogoAlt: "Selkies Logosu",
        selkiesTitle: "Selkies",
        toggleThemeTitle: "Temayı Değiştir",
        fullscreenTitle: "Tam Ekrana Gir",
        gamingModeTitle: "Oyun Modu",
        trackpadModeTitle: "Dokunmatik Yüzey Modu",
        buttons: {
            videoStreamEnableTitle: "Video Akışını Etkinleştir",
            videoStreamDisableTitle: "Video Akışını Devre Dışı Bırak",
            audioStreamEnableTitle: "Ses Akışını Etkinleştir",
            audioStreamDisableTitle: "Ses Akışını Devre Dışı Bırak",
            microphoneEnableTitle: "Mikrofonu Etkinleştir",
            microphoneDisableTitle: "Mikrofonu Devre Dışı Bırak",
            gamepadEnableTitle: "Oyun Kumandası Girişini Etkinleştir",
            gamepadDisableTitle: "Oyun Kumandası Girişini Devre Dışı Bırak",
            virtualKeyboardButtonTitle: "Klavyeyi Göster",
            h264FullColorEnableTitle: "H.264 Tam Renk Etkinleştir",
            h264FullColorDisableTitle: "H.264 Tam Renk Devre Dışı Bırak",
            h264StreamingModeDisableTitle: "Turbo'yu Devre Dışı Bırak",
            h264StreamingModeEnableTitle: "Turbo'yu Etkinleştir",
            useCpuEnableTitle: "CPU Kodlamasını Zorla Etkinleştir (nvenc/vaapi'yi geçersiz kılar)",
            useCpuDisableTitle: "CPU Kodlamasını Zorla Devre Dışı Bırak (nvenc/vaapi'yi geçersiz kılar)"
        },
        sections: {
            video: {
                title: "Video Ayarları",
                encoderLabel: "Kodlayıcı:",
                framerateLabel: "Saniyedeki Kare Sayısı ({framerate} FPS):",
                bitrateLabel: "Video Bit Hızı ({bitrate} Mbps):",
                bufferLabelImmediate: "Video Tampon Boyutu (0 (Anında)):",
                bufferLabelFrames: "Video Tampon Boyutu ({videoBufferSize} kare):",
                crfLabel: "Video CRF ({crf}):",
                fullColorLabel: "Tam Renk 4:4:4",
                streamingModeDetails: "Turbo modu, tüm VNC mantığını devre dışı bırakır ve tüm kareleri geleneksel bir video kodlayıcı gibi kodlar.",
                streamingModeLabel: "Turbo",
                useCpuLabel: "CPU Kodlaması",
                jpegQualityLabel: "Temel Kalite: {jpegQuality}",
                paintOverJpegQualityLabel: "Üzerine Boyama Kalitesi: {paintOverJpegQuality}"
            },
            audio: {
                title: "Ses Ayarları",
                bitrateLabel: "Ses Bit Hızı ({bitrate} kbps):",
                inputLabel: "Giriş (Mikrofon):",
                outputLabel: "Çıkış (Hoparlör):",
                outputNotSupported: "Çıkış aygıtı seçimi bu tarayıcı tarafından desteklenmiyor.",
                deviceErrorDefault: "Ses aygıtları listelenirken hata oluştu: {errorName}",
                deviceErrorPermission: "İzin reddedildi. Aygıtları seçmek için lütfen tarayıcı ayarlarında mikrofon erişimine izin verin.",
                deviceErrorNotFound: "Ses aygıtı bulunamadı.",
                defaultInputLabelFallback: "Giriş Aygıtı {index}",
                defaultOutputLabelFallback: "Çıkış Aygıtı {index}"
            },
            screen: {
                title: "Ekran Ayarları",
                presetLabel: "Ön Ayar:",
                resolutionPresetSelect: "-- Ön Ayar Seç --",
                widthLabel: "Genişlik:",
                heightLabel: "Yükseklik:",
                widthPlaceholder: "örneğin, 1920",
                heightPlaceholder: "örneğin, 1080",
                setManualButton: "Manuel Çözünürlüğü Ayarla",
                resetButton: "Pencereye Sıfırla",
                scaleLocallyLabel: "Yerel Olarak Ölçekle:",
                scaleLocallyOn: "AÇIK",
                scaleLocallyOff: "KAPALI",
                scaleLocallyTitleEnable: "Yerel Ölçeklendirmeyi Etkinleştir (En Boy Oranını Koru)",
                scaleLocallyTitleDisable: "Yerel Ölçeklendirmeyi Devre Dışı Bırak (Tam Çözünürlüğü Kullan)",
                uiScalingLabel: "Arayüz Ölçekleme:",
                hidpiLabel: "HiDPI (Piksel Mükemmelliği)",
                hidpiEnableTitle: "HiDPI'yi Etkinleştir (Piksel Mükemmelliği)",
                hidpiDisableTitle: "HiDPI'yi Devre Dışı Bırak (CSS Ölçeklendirme Kullan)"
            },
            stats: {
                title: "İstatistikler",
                cpuLabel: "CPU",
                gpuLabel: "GPU Kullanımı",
                sysMemLabel: "Sis Belleği",
                gpuMemLabel: "GPU Belleği",
                fpsLabel: "FPS",
                audioLabel: "Ses",
                tooltipCpu: "CPU Kullanımı: {value}%",
                tooltipGpu: "GPU Kullanımı: {value}%",
                tooltipSysMem: "Sistem Belleği: {used} / {total}",
                tooltipGpuMem: "GPU Belleği: {used} / {total}",
                tooltipFps: "İstemci FPS: {value}",
                tooltipAudio: "Ses Tamponları: {value}",
                tooltipMemoryNA: "N/A"
            },
            clipboard: {
                title: "Pano",
                label: "Sunucu Panosu:",
                placeholder: "Sunucudan pano içeriği..."
            },
            files: {
                title: "Dosyalar",
                uploadButton: "Dosya Yükle",
                uploadButtonTitle: "Uzak oturuma dosya yükle",
                downloadButtonTitle: "Dosyaları İndir"
            },
            gamepads: {
                title: "Oyun Kumandaları",
                noActivity: "Henüz oyun kumandası etkinliği algılanmadı...",
                touchEnableTitle: "Dokunmatik Oyun Kumandasını Etkinleştir",
                touchDisableTitle: "Dokunmatik Oyun Kumandasını Devre Dışı Bırak",
                touchActiveLabel: "Dokunmatik Kumanda: AÇIK",
                touchInactiveLabel: "Dokunmatik Kumanda: KAPALI",
                physicalHiddenForTouch: "Dokunmatik oyun kumandası etkinken fiziksel oyun kumandası ekranı gizlenir.",
                noActivityMobileOrEnableTouch: "Fiziksel oyun kumandası yok. Dokunmatik oyun kumandasını etkinleştirin veya bir denetleyici bağlayın."
            },
            apps: {
                title: "Uygulamalar",
                openButtonTitle: "Uygulamaları Yönet",
                openButton: "Uygulamaları Yönet"
            },
            sharing: {
                title: "Paylaşım"
            }
        },
        resolutionPresets: {
            "1920x1080": "1920 x 1080 (FHD)",
            "1280x720": "1280 x 720 (HD)",
            "1366x768": "1366 x 768 (Dizüstü)",
            "1920x1200": "1920 x 1200 (16:10)",
            "2560x1440": "2560 x 1440 (QHD)",
            "3840x2160": "3840 x 2160 (4K UHD)",
            "1024x768": "1024 x 768 (XGA 4:3)",
            "800x600": "800 x 600 (SVGA 4:3)",
            "640x480": "640 x 480 (VGA 4:3)",
            "320x240": "320 x 240 (QVGA 4:3)"
        },
        appsModal: {
            closeAlt: "Uygulama modalını kapat",
            loading: "Uygulamalar yükleniyor...",
            errorLoading: "Uygulama verileri yüklenemedi. Lütfen tekrar deneyin.",
            searchPlaceholder: "Uygulama ara...",
            noAppsFound: "Aramanızla eşleşen uygulama bulunamadı.",
            backButton: "Listeye geri dön",
            installButton: "Yükle",
            updateButton: "Güncelle",
            removeButton: "Kaldır",
            installingMessage: "Şunun için yükleme simüle ediliyor: {{appName}}",
            removingMessage: "Şunun için kaldırma simüle ediliyor: {{appName}}",
            updatingMessage: "Şunun için güncelleme simüle ediliyor: {{appName}}",
            installedBadge: "Yüklendi"
        },
        notifications: {
            closeButtonAlt: "{fileName} için bildirimi kapat",
            uploading: "Yükleniyor... {progress}%",
            uploadComplete: "Yükleme Tamamlandı",
            uploadFailed: "Yükleme Başarısız Oldu",
            errorPrefix: "Hata:",
            unknownError: "Bilinmeyen bir hata oluştu.",
            copiedTitle: "Kopyalandı: {label}",
            copiedMessage: "Bağlantı panoya kopyalandı: {textToCopy}",
            copyFailedTitle: "Kopyalama Başarısız: {label}",
            copyFailedError: "Bağlantı panoya kopyalanamadı.",
            scalingTitle: "Ölçekleme Güncellendi: Eylem Gerekli",
            scalingMessage: "Yeni ölçekleme uygulandı. Değişiklikleri görmek için yeniden başlatın: kapsayıcıyı, oturumu kapatarak masaüstü oturumunuzu veya çalışan uygulamayı."
        },
        alerts: {
            invalidResolution: "Lütfen Genişlik ve Yükseklik için geçerli pozitif tam sayılar girin."
        },
        byteUnits: ["Bayt", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        zeroBytes: "0 Bayt",
        filesModal: {
            closeAlt: "Dosya modalını kapat",
            iframeTitle: "İndirilebilir Dosyalar"
        }
    },
    Db = {
        selkiesLogoAlt: "Logo Selkies",
        selkiesTitle: "Selkies",
        toggleThemeTitle: "Cambia Tema",
        fullscreenTitle: "Entra in Schermo Intero",
        gamingModeTitle: "Modalità Gioco",
        trackpadModeTitle: "Modalità Trackpad",
        buttons: {
            videoStreamEnableTitle: "Abilita Stream Video",
            videoStreamDisableTitle: "Disabilita Stream Video",
            audioStreamEnableTitle: "Abilita Stream Audio",
            audioStreamDisableTitle: "Disabilita Stream Audio",
            microphoneEnableTitle: "Abilita Microfono",
            microphoneDisableTitle: "Disabilita Microfono",
            gamepadEnableTitle: "Abilita Input Gamepad",
            gamepadDisableTitle: "Disabilita Input Gamepad",
            virtualKeyboardButtonTitle: "Mostra Tastiera",
            h264FullColorEnableTitle: "Abilita H.264 Colore Completo",
            h264FullColorDisableTitle: "Disabilita H.264 Colore Completo",
            h264StreamingModeDisableTitle: "Disabilita Turbo",
            h264StreamingModeEnableTitle: "Abilita Turbo",
            useCpuEnableTitle: "Abilita Codifica CPU Forzata (Sovrascrive nvenc/vaapi)",
            useCpuDisableTitle: "Disabilita Codifica CPU Forzata (Sovrascrive nvenc/vaapi)"
        },
        sections: {
            video: {
                title: "Impostazioni Video",
                encoderLabel: "Encoder:",
                framerateLabel: "Frame al secondo ({framerate} FPS):",
                bitrateLabel: "Bitrate Video ({bitrate} Mbps):",
                bufferLabelImmediate: "Dimensione Buffer Video (0 (Immediato)):",
                bufferLabelFrames: "Dimensione Buffer Video ({videoBufferSize} frame):",
                crfLabel: "CRF Video ({crf}):",
                fullColorLabel: "Colore Completo 4:4:4",
                streamingModeDetails: "La modalità Turbo disabilita tutta la logica VNC e codifica tutti i fotogrammi come un codificatore video tradizionale.",
                streamingModeLabel: "Turbo",
                useCpuLabel: "Codifica CPU",
                jpegQualityLabel: "Qualità di Base: {jpegQuality}",
                paintOverJpegQualityLabel: "Qualità Sovrapposizione: {paintOverJpegQuality}"
            },
            audio: {
                title: "Impostazioni Audio",
                bitrateLabel: "Bitrate Audio ({bitrate} kbps):",
                inputLabel: "Input (Microfono):",
                outputLabel: "Output (Altoparlante):",
                outputNotSupported: "La selezione del dispositivo di output non è supportata da questo browser.",
                deviceErrorDefault: "Errore nell'elencare i dispositivi audio: {errorName}",
                deviceErrorPermission: "Permesso negato. Consenti l'accesso al microfono nelle impostazioni del browser per selezionare i dispositivi.",
                deviceErrorNotFound: "Nessun dispositivo audio trovato.",
                defaultInputLabelFallback: "Dispositivo di Input {index}",
                defaultOutputLabelFallback: "Dispositivo di Output {index}"
            },
            screen: {
                title: "Impostazioni Schermo",
                presetLabel: "Preimpostazione:",
                resolutionPresetSelect: "-- Seleziona Preimpostazione --",
                widthLabel: "Larghezza:",
                heightLabel: "Altezza:",
                widthPlaceholder: "es. 1920",
                heightPlaceholder: "es. 1080",
                setManualButton: "Imposta Risoluzione Manuale",
                resetButton: "Ripristina a Finestra",
                scaleLocallyLabel: "Scala Localmente:",
                scaleLocallyOn: "ON",
                scaleLocallyOff: "OFF",
                scaleLocallyTitleEnable: "Abilita Scala Locale (Mantieni Proporzioni)",
                scaleLocallyTitleDisable: "Disabilita Scala Locale (Usa Risoluzione Esatta)",
                uiScalingLabel: "Scala Interfaccia:",
                hidpiLabel: "HiDPI (Pixel Perfect)",
                hidpiEnableTitle: "Abilita HiDPI (Pixel Perfect)",
                hidpiDisableTitle: "Disabilita HiDPI (Usa ridimensionamento CSS)"
            },
            stats: {
                title: "Statistiche",
                cpuLabel: "CPU",
                gpuLabel: "Utilizzo GPU",
                sysMemLabel: "Mem Sistema",
                gpuMemLabel: "Mem GPU",
                fpsLabel: "FPS",
                audioLabel: "Audio",
                tooltipCpu: "Utilizzo CPU: {value}%",
                tooltipGpu: "Utilizzo GPU: {value}%",
                tooltipSysMem: "Memoria di Sistema: {used} / {total}",
                tooltipGpuMem: "Memoria GPU: {used} / {total}",
                tooltipFps: "FPS Client: {value}",
                tooltipAudio: "Buffer Audio: {value}",
                tooltipMemoryNA: "N/D"
            },
            clipboard: {
                title: "Appunti",
                label: "Appunti del Server:",
                placeholder: "Contenuto degli appunti dal server..."
            },
            files: {
                title: "File",
                uploadButton: "Carica File",
                uploadButtonTitle: "Carica file nella sessione remota",
                downloadButtonTitle: "Scarica File"
            },
            gamepads: {
                title: "Gamepad",
                noActivity: "Nessuna attività del gamepad ancora rilevata...",
                touchEnableTitle: "Abilita Gamepad Touch",
                touchDisableTitle: "Disabilita Gamepad Touch",
                touchActiveLabel: "Gamepad Touch: ON",
                touchInactiveLabel: "Gamepad Touch: OFF",
                physicalHiddenForTouch: "La visualizzazione dei gamepad fisici è nascosta mentre il gamepad touch è attivo.",
                noActivityMobileOrEnableTouch: "Nessun gamepad fisico. Abilita il gamepad touch o collega un controller."
            },
            apps: {
                title: "Applicazioni",
                openButtonTitle: "Gestisci Applicazioni",
                openButton: "Gestisci Applicazioni"
            },
            sharing: {
                title: "Condivisione"
            }
        },
        resolutionPresets: {
            "1920x1080": "1920 x 1080 (FHD)",
            "1280x720": "1280 x 720 (HD)",
            "1366x768": "1366 x 768 (Laptop)",
            "1920x1200": "1920 x 1200 (16:10)",
            "2560x1440": "2560 x 1440 (QHD)",
            "3840x2160": "3840 x 2160 (4K UHD)",
            "1024x768": "1024 x 768 (XGA 4:3)",
            "800x600": "800 x 600 (SVGA 4:3)",
            "640x480": "640 x 480 (VGA 4:3)",
            "320x240": "320 x 240 (QVGA 4:3)"
        },
        appsModal: {
            closeAlt: "Chiudi modale applicazioni",
            loading: "Caricamento applicazioni...",
            errorLoading: "Errore nel caricamento dei dati delle applicazioni. Riprova.",
            searchPlaceholder: "Cerca applicazioni...",
            noAppsFound: "Nessuna applicazione trovata corrispondente alla tua ricerca.",
            backButton: "Torna alla lista",
            installButton: "Installa",
            updateButton: "Aggiorna",
            removeButton: "Rimuovi",
            installingMessage: "Simulazione installazione per: {{appName}}",
            removingMessage: "Simulazione rimozione per: {{appName}}",
            updatingMessage: "Simulazione aggiornamento per: {{appName}}",
            installedBadge: "Installato"
        },
        notifications: {
            closeButtonAlt: "Chiudi notifica per {fileName}",
            uploading: "Caricamento... {progress}%",
            uploadComplete: "Caricamento Completato",
            uploadFailed: "Caricamento Fallito",
            errorPrefix: "Errore:",
            unknownError: "Si è verificato un errore sconosciuto.",
            copiedTitle: "Copiato: {label}",
            copiedMessage: "Link copiato negli appunti: {textToCopy}",
            copyFailedTitle: "Copia Fallita: {label}",
            copyFailedError: "Impossibile copiare il link negli appunti.",
            scalingTitle: "Scalabilità Aggiornata: Azione Richiesta",
            scalingMessage: "Nuova scalabilità applicata. Per visualizzare le modifiche, riavviare: il contenitore, la sessione del desktop disconnettendosi, o l'applicazione in esecuzione."
        },
        alerts: {
            invalidResolution: "Inserisci numeri interi positivi validi per Larghezza e Altezza."
        },
        byteUnits: ["Byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        zeroBytes: "0 Byte",
        filesModal: {
            closeAlt: "Chiudi modale file",
            iframeTitle: "File Scaricabili"
        }
    },
    Bb = {
        selkiesLogoAlt: "Selkies Logo",
        selkiesTitle: "Selkies",
        toggleThemeTitle: "Thema wisselen",
        fullscreenTitle: "Volledig scherm openen",
        gamingModeTitle: "Gaming Modus",
        trackpadModeTitle: "Trackpad-modus",
        buttons: {
            videoStreamEnableTitle: "Videostream inschakelen",
            videoStreamDisableTitle: "Videostream uitschakelen",
            audioStreamEnableTitle: "Audiostream inschakelen",
            audioStreamDisableTitle: "Audiostream uitschakelen",
            microphoneEnableTitle: "Microfoon inschakelen",
            microphoneDisableTitle: "Microfoon uitschakelen",
            gamepadEnableTitle: "Gamepad-invoer inschakelen",
            gamepadDisableTitle: "Gamepad-invoer uitschakelen",
            virtualKeyboardButtonTitle: "Toetsenbord Weergeven",
            h264FullColorEnableTitle: "H.264 Volledige Kleur inschakelen",
            h264FullColorDisableTitle: "H.264 Volledige Kleur uitschakelen",
            h264StreamingModeDisableTitle: "Turbo uitschakelen",
            h264StreamingModeEnableTitle: "Turbo inschakelen",
            useCpuEnableTitle: "Forceer CPU-codering inschakelen (Overschrijft nvenc/vaapi)",
            useCpuDisableTitle: "Forceer CPU-codering uitschakelen (Overschrijft nvenc/vaapi)"
        },
        sections: {
            video: {
                title: "Video-instellingen",
                encoderLabel: "Encoder:",
                framerateLabel: "Frames per seconde ({framerate} FPS):",
                bitrateLabel: "Video Bitrate ({bitrate} Mbps):",
                bufferLabelImmediate: "Video Buffergrootte (0 (Onmiddellijk)):",
                bufferLabelFrames: "Video Buffergrootte ({videoBufferSize} frames):",
                crfLabel: "Video CRF ({crf}):",
                fullColorLabel: "Volledige Kleur 4:4:4",
                streamingModeDetails: "De Turbo-modus schakelt alle VNC-logica uit en codeert alle frames zoals een traditionele video-encoder.",
                streamingModeLabel: "Turbo",
                useCpuLabel: "CPU-codering",
                jpegQualityLabel: "Basiskwaliteit: {jpegQuality}",
                paintOverJpegQualityLabel: "Overschilderkwaliteit: {paintOverJpegQuality}"
            },
            audio: {
                title: "Audio-instellingen",
                bitrateLabel: "Audio Bitrate ({bitrate} kbps):",
                inputLabel: "Invoer (Microfoon):",
                outputLabel: "Uitvoer (Luidspreker):",
                outputNotSupported: "Selectie van uitvoerapparaat wordt niet ondersteund door deze browser.",
                deviceErrorDefault: "Fout bij het ophalen van audioapparaten: {errorName}",
                deviceErrorPermission: "Toestemming geweigerd. Sta microfoontoegang toe in browserinstellingen om apparaten te selecteren.",
                deviceErrorNotFound: "Geen audioapparaten gevonden.",
                defaultInputLabelFallback: "Invoerapparaat {index}",
                defaultOutputLabelFallback: "Uitvoerapparaat {index}"
            },
            screen: {
                title: "Scherminstellingen",
                presetLabel: "Voorinstelling:",
                resolutionPresetSelect: "-- Selecteer Voorinstelling --",
                widthLabel: "Breedte:",
                heightLabel: "Hoogte:",
                widthPlaceholder: "bijv. 1920",
                heightPlaceholder: "bijv. 1080",
                setManualButton: "Handmatige Resolutie Instellen",
                resetButton: "Terugzetten naar Venster",
                scaleLocallyLabel: "Lokaal Schalen:",
                scaleLocallyOn: "AAN",
                scaleLocallyOff: "UIT",
                scaleLocallyTitleEnable: "Lokaal Schalen Inschakelen (Beeldverhouding Behouden)",
                scaleLocallyTitleDisable: "Lokaal Schalen Uitschakelen (Exacte Resolutie Gebruiken)",
                uiScalingLabel: "UI Schalen:",
                hidpiLabel: "HiDPI (Pixel Perfect)",
                hidpiEnableTitle: "HiDPI inschakelen (Pixel Perfect)",
                hidpiDisableTitle: "HiDPI uitschakelen (CSS-schaling gebruiken)"
            },
            stats: {
                title: "Statistieken",
                cpuLabel: "CPU",
                gpuLabel: "GPU Gebruik",
                sysMemLabel: "Sys Geheugen",
                gpuMemLabel: "GPU Geheugen",
                fpsLabel: "FPS",
                audioLabel: "Audio",
                tooltipCpu: "CPU Gebruik: {value}%",
                tooltipGpu: "GPU Gebruik: {value}%",
                tooltipSysMem: "Systeemgeheugen: {used} / {total}",
                tooltipGpuMem: "GPU Geheugen: {used} / {total}",
                tooltipFps: "Client FPS: {value}",
                tooltipAudio: "Audio Buffers: {value}",
                tooltipMemoryNA: "N.v.t."
            },
            clipboard: {
                title: "Klembord",
                label: "Server Klembord:",
                placeholder: "Klembord inhoud van server..."
            },
            files: {
                title: "Bestanden",
                uploadButton: "Bestanden Uploaden",
                uploadButtonTitle: "Upload bestanden naar de externe sessie",
                downloadButtonTitle: "Bestanden Downloaden"
            },
            gamepads: {
                title: "Gamepads",
                noActivity: "Nog geen gamepad activiteit gedetecteerd...",
                touchEnableTitle: "Touch Gamepad inschakelen",
                touchDisableTitle: "Touch Gamepad uitschakelen",
                touchActiveLabel: "Touch Gamepad: AAN",
                touchInactiveLabel: "Touch Gamepad: UIT",
                physicalHiddenForTouch: "Weergave van fysieke gamepads is verborgen terwijl de touch gamepad actief is.",
                noActivityMobileOrEnableTouch: "Geen fysieke gamepads. Schakel de touch gamepad in of sluit een controller aan."
            },
            apps: {
                title: "Applicaties",
                openButtonTitle: "Applicaties beheren",
                openButton: "Applicaties beheren"
            },
            sharing: {
                title: "Delen"
            }
        },
        resolutionPresets: {
            "1920x1080": "1920 x 1080 (FHD)",
            "1280x720": "1280 x 720 (HD)",
            "1366x768": "1366 x 768 (Laptop)",
            "1920x1200": "1920 x 1200 (16:10)",
            "2560x1440": "2560 x 1440 (QHD)",
            "3840x2160": "3840 x 2160 (4K UHD)",
            "1024x768": "1024 x 768 (XGA 4:3)",
            "800x600": "800 x 600 (SVGA 4:3)",
            "640x480": "640 x 480 (VGA 4:3)",
            "320x240": "320 x 240 (QVGA 4:3)"
        },
        appsModal: {
            closeAlt: "Applicatiemodal sluiten",
            loading: "Applicaties laden...",
            errorLoading: "Fout bij het laden van applicatiegegevens. Probeer het opnieuw.",
            searchPlaceholder: "Zoek applicaties...",
            noAppsFound: "Geen applicaties gevonden die overeenkomen met uw zoekopdracht.",
            backButton: "Terug naar lijst",
            installButton: "Installeren",
            updateButton: "Bijwerken",
            removeButton: "Verwijderen",
            installingMessage: "Simulatie van installatie voor: {{appName}}",
            removingMessage: "Simulatie van verwijdering voor: {{appName}}",
            updatingMessage: "Simulatie van update voor: {{appName}}",
            installedBadge: "Geïnstalleerd"
        },
        notifications: {
            closeButtonAlt: "Melding sluiten voor {fileName}",
            uploading: "Uploaden... {progress}%",
            uploadComplete: "Upload Voltooid",
            uploadFailed: "Upload Mislukt",
            errorPrefix: "Fout:",
            unknownError: "Er is een onbekende fout opgetreden.",
            copiedTitle: "Gekopieerd: {label}",
            copiedMessage: "Link gekopieerd naar klembord: {textToCopy}",
            copyFailedTitle: "Kopiëren Mislukt: {label}",
            copyFailedError: "Kon link niet naar klembord kopiëren.",
            scalingTitle: "Schalen bijgewerkt: Actie vereist",
            scalingMessage: "Nieuwe schaling toegepast. Om wijzigingen te zien, herstart: de container, uw bureaubladsessie door uit te loggen, of de actieve applicatie."
        },
        alerts: {
            invalidResolution: "Voer geldige positieve gehele getallen in voor Breedte en Hoogte."
        },
        byteUnits: ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        zeroBytes: "0 Bytes",
        filesModal: {
            closeAlt: "Bestandsmodal sluiten",
            iframeTitle: "Downloadbare bestanden"
        }
    },
    Nb = {
        selkiesLogoAlt: "شعار Selkies",
        selkiesTitle: "Selkies",
        toggleThemeTitle: "تبديل السمة",
        fullscreenTitle: "الدخول في وضع ملء الشاشة",
        gamingModeTitle: "وضع الألعاب",
        trackpadModeTitle: "وضع لوحة اللمس",
        buttons: {
            videoStreamEnableTitle: "تمكين بث الفيديو",
            videoStreamDisableTitle: "تعطيل بث الفيديو",
            audioStreamEnableTitle: "تمكين بث الصوت",
            audioStreamDisableTitle: "تعطيل بث الصوت",
            microphoneEnableTitle: "تمكين الميكروفون",
            microphoneDisableTitle: "تعطيل الميكروفون",
            gamepadEnableTitle: "تمكين إدخال لوحة الألعاب",
            gamepadDisableTitle: "تعطيل إدخال لوحة الألعاب",
            virtualKeyboardButtonTitle: "إظهار لوحة المفاتيح",
            h264FullColorEnableTitle: "تمكين H.264 ألوان كاملة",
            h264FullColorDisableTitle: "تعطيل H.264 ألوان كاملة",
            h264StreamingModeDisableTitle: "تعطيل وضع التوربو",
            h264StreamingModeEnableTitle: "تمكين وضع التوربو",
            useCpuEnableTitle: "تمكين فرض ترميز CPU (يتجاوز nvenc/vaapi)",
            useCpuDisableTitle: "تعطيل فرض ترميز CPU (يتجاوز nvenc/vaapi)"
        },
        sections: {
            video: {
                title: "إعدادات الفيديو",
                encoderLabel: "المُرمّز:",
                framerateLabel: "إطارات في الثانية ({framerate} FPS):",
                bitrateLabel: "معدل بت الفيديو ({bitrate} Mbps):",
                bufferLabelImmediate: "حجم مخزن الفيديو المؤقت (0 (فوري)):",
                bufferLabelFrames: "حجم مخزن الفيديو المؤقت ({videoBufferSize} إطارات):",
                crfLabel: "CRF الفيديو ({crf}):",
                fullColorLabel: "ألوان كاملة 4:4:4",
                streamingModeDetails: "يعطل وضع التوربو كل منطق VNC ويقوم بترميز جميع الإطارات مثل مرمّز الفيديو التقليدي.",
                streamingModeLabel: "توربو",
                useCpuLabel: "ترميز CPU",
                jpegQualityLabel: "الجودة الأساسية: {jpegQuality}",
                paintOverJpegQualityLabel: "جودة الرسم فوق الصورة: {paintOverJpegQuality}"
            },
            audio: {
                title: "إعدادات الصوت",
                bitrateLabel: "معدل بت الصوت ({bitrate} kbps):",
                inputLabel: "الإدخال (الميكروفون):",
                outputLabel: "الإخراج (مكبر الصوت):",
                outputNotSupported: "اختيار جهاز الإخراج غير مدعوم بواسطة هذا المتصفح.",
                deviceErrorDefault: "خطأ في سرد أجهزة الصوت: {errorName}",
                deviceErrorPermission: "تم رفض الإذن. يرجى السماح بالوصول إلى الميكروفون في إعدادات المتصفح لتحديد الأجهزة.",
                deviceErrorNotFound: "لم يتم العثور على أجهزة صوت.",
                defaultInputLabelFallback: "جهاز الإدخال {index}",
                defaultOutputLabelFallback: "جهاز الإخراج {index}"
            },
            screen: {
                title: "إعدادات الشاشة",
                presetLabel: "إعداد مسبق:",
                resolutionPresetSelect: "-- تحديد إعداد مسبق --",
                widthLabel: "العرض:",
                heightLabel: "الارتفاع:",
                widthPlaceholder: "مثال، 1920",
                heightPlaceholder: "مثال، 1080",
                setManualButton: "تعيين دقة يدوية",
                resetButton: "إعادة التعيين إلى النافذة",
                scaleLocallyLabel: "تغيير الحجم محليًا:",
                scaleLocallyOn: "تشغيل",
                scaleLocallyOff: "إيقاف",
                scaleLocallyTitleEnable: "تمكين تغيير الحجم المحلي (الحفاظ على نسبة العرض إلى الارتفاع)",
                scaleLocallyTitleDisable: "تعطيل تغيير الحجم المحلي (استخدام الدقة الدقيقة)",
                uiScalingLabel: "مقياس واجهة المستخدم:",
                hidpiLabel: "HiDPI (دقة بكسل مثالية)",
                hidpiEnableTitle: "تمكين HiDPI (دقة بكسل مثالية)",
                hidpiDisableTitle: "تعطيل HiDPI (استخدام تحجيم CSS)"
            },
            stats: {
                title: "الإحصائيات",
                cpuLabel: "CPU",
                gpuLabel: "استخدام GPU",
                sysMemLabel: "ذاكرة النظام",
                gpuMemLabel: "ذاكرة GPU",
                fpsLabel: "FPS",
                audioLabel: "الصوت",
                tooltipCpu: "استخدام CPU: {value}%",
                tooltipGpu: "استخدام GPU: {value}%",
                tooltipSysMem: "ذاكرة النظام: {used} / {total}",
                tooltipGpuMem: "ذاكرة GPU: {used} / {total}",
                tooltipFps: "FPS العميل: {value}",
                tooltipAudio: "مخازن الصوت المؤقتة: {value}",
                tooltipMemoryNA: "غير متاح"
            },
            clipboard: {
                title: "الحافظة",
                label: "حافظة الخادم:",
                placeholder: "محتوى الحافظة من الخادم..."
            },
            files: {
                title: "الملفات",
                uploadButton: "تحميل الملفات",
                uploadButtonTitle: "تحميل الملفات إلى الجلسة البعيدة",
                downloadButtonTitle: "تحميل الملفات"
            },
            gamepads: {
                title: "لوحات الألعاب",
                noActivity: "لم يتم اكتشاف أي نشاط للوحة الألعاب بعد...",
                touchEnableTitle: "تمكين لوحة ألعاب اللمس",
                touchDisableTitle: "تعطيل لوحة ألعاب اللمس",
                touchActiveLabel: "لوحة ألعاب اللمس: تشغيل",
                touchInactiveLabel: "لوحة ألعاب اللمس: إيقاف",
                physicalHiddenForTouch: "يتم إخفاء عرض لوحة الألعاب الفعلية أثناء تنشيط لوحة ألعاب اللمس.",
                noActivityMobileOrEnableTouch: "لا توجد لوحات ألعاب فعلية. قم بتمكين لوحة ألعاب اللمس أو قم بتوصيل وحدة تحكم."
            },
            apps: {
                title: "التطبيقات",
                openButtonTitle: "إدارة التطبيقات",
                openButton: "إدارة التطبيقات"
            },
            sharing: {
                title: "المشاركة"
            }
        },
        resolutionPresets: {
            "1920x1080": "1920 × 1080 (FHD)",
            "1280x720": "1280 × 720 (HD)",
            "1366x768": "1366 × 768 (لابتوب)",
            "1920x1200": "1920 × 1200 (16:10)",
            "2560x1440": "2560 × 1440 (QHD)",
            "3840x2160": "3840 × 2160 (4K UHD)",
            "1024x768": "1024 × 768 (XGA 4:3)",
            "800x600": "800 × 600 (SVGA 4:3)",
            "640x480": "640 × 480 (VGA 4:3)",
            "320x240": "320 × 240 (QVGA 4:3)"
        },
        appsModal: {
            closeAlt: "إغلاق نافذة التطبيقات",
            loading: "جارٍ تحميل التطبيقات...",
            errorLoading: "فشل تحميل بيانات التطبيقات. يرجى المحاولة مرة أخرى.",
            searchPlaceholder: "البحث في التطبيقات...",
            noAppsFound: "لم يتم العثور على تطبيقات تطابق بحثك.",
            backButton: "العودة إلى القائمة",
            installButton: "تثبيت",
            updateButton: "تحديث",
            removeButton: "إزالة",
            installingMessage: "محاكاة التثبيت لـ: {{appName}}",
            removingMessage: "محاكاة الإزالة لـ: {{appName}}",
            updatingMessage: "محاكاة التحديث لـ: {{appName}}",
            installedBadge: "مثبت"
        },
        notifications: {
            closeButtonAlt: "إغلاق الإشعار لـ {fileName}",
            uploading: "جارٍ التحميل... {progress}%",
            uploadComplete: "اكتمل التحميل",
            uploadFailed: "فشل التحميل",
            errorPrefix: "خطأ:",
            unknownError: "حدث خطأ غير معروف.",
            copiedTitle: "تم النسخ: {label}",
            copiedMessage: "تم نسخ الرابط إلى الحافظة: {textToCopy}",
            copyFailedTitle: "فشل النسخ: {label}",
            copyFailedError: "تعذر نسخ الرابط إلى الحافظة.",
            scalingTitle: "تم تحديث القياس: الإجراء مطلوب",
            scalingMessage: "تم تطبيق القياس الجديد. لرؤية التغييرات، أعد تشغيل: الحاوية، أو جلسة سطح المكتب الخاصة بك عن طريق تسجيل الخروج، أو التطبيق قيد التشغيل."
        },
        alerts: {
            invalidResolution: "الرجاء إدخال أعداد صحيحة موجبة صالحة للعرض والارتفاع."
        },
        byteUnits: ["بايت", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        zeroBytes: "0 بايت",
        filesModal: {
            closeAlt: "إغلاق نافذة الملفات",
            iframeTitle: "ملفات قابلة للتحميل"
        }
    },
    Ob = {
        selkiesLogoAlt: "Selkies 로고",
        selkiesTitle: "Selkies",
        toggleThemeTitle: "테마 전환",
        fullscreenTitle: "전체 화면 시작",
        gamingModeTitle: "게임 모드",
        trackpadModeTitle: "트랙패드 모드",
        buttons: {
            videoStreamEnableTitle: "비디오 스트림 활성화",
            videoStreamDisableTitle: "비디오 스트림 비활성화",
            audioStreamEnableTitle: "오디오 스트림 활성화",
            audioStreamDisableTitle: "오디오 스트림 비활성화",
            microphoneEnableTitle: "마이크 활성화",
            microphoneDisableTitle: "마이크 비활성화",
            gamepadEnableTitle: "게임패드 입력 활성화",
            gamepadDisableTitle: "게임패드 입력 비활성화",
            virtualKeyboardButtonTitle: "키보드 표시",
            h264FullColorEnableTitle: "H.264 전체 색상 활성화",
            h264FullColorDisableTitle: "H.264 전체 색상 비활성화",
            h264StreamingModeDisableTitle: "터보 비활성화",
            h264StreamingModeEnableTitle: "터보 활성화",
            useCpuEnableTitle: "강제 CPU 인코딩 활성화 (nvenc/vaapi 재정의)",
            useCpuDisableTitle: "강제 CPU 인코딩 비활성화 (nvenc/vaapi 재정의)"
        },
        sections: {
            video: {
                title: "비디오 설정",
                encoderLabel: "인코더:",
                framerateLabel: "초당 프레임 ({framerate} FPS):",
                bitrateLabel: "비디오 비트 전송률 ({bitrate} Mbps):",
                bufferLabelImmediate: "비디오 버퍼 크기 (0 (즉시)):",
                bufferLabelFrames: "비디오 버퍼 크기 ({videoBufferSize} 프레임):",
                crfLabel: "비디오 CRF ({crf}):",
                fullColorLabel: "전체 색상 4:4:4",
                streamingModeDetails: "터보 모드는 모든 VNC 로직을 비활성화하고 모든 프레임을 기존 비디오 인코더처럼 인코딩합니다.",
                streamingModeLabel: "터보",
                useCpuLabel: "CPU 인코딩",
                jpegQualityLabel: "기본 품질: {jpegQuality}",
                paintOverJpegQualityLabel: "덧칠 품질: {paintOverJpegQuality}"
            },
            audio: {
                title: "오디오 설정",
                bitrateLabel: "오디오 비트 전송률 ({bitrate} kbps):",
                inputLabel: "입력 (마이크):",
                outputLabel: "출력 (스피커):",
                outputNotSupported: "이 브라우저에서는 출력 장치 선택을 지원하지 않습니다.",
                deviceErrorDefault: "오디오 장치 목록 오류: {errorName}",
                deviceErrorPermission: "권한이 거부되었습니다. 장치를 선택하려면 브라우저 설정에서 마이크 액세스를 허용하십시오.",
                deviceErrorNotFound: "오디오 장치를 찾을 수 없습니다.",
                defaultInputLabelFallback: "입력 장치 {index}",
                defaultOutputLabelFallback: "출력 장치 {index}"
            },
            screen: {
                title: "화면 설정",
                presetLabel: "프리셋:",
                resolutionPresetSelect: "-- 프리셋 선택 --",
                widthLabel: "너비:",
                heightLabel: "높이:",
                widthPlaceholder: "예: 1920",
                heightPlaceholder: "예: 1080",
                setManualButton: "수동 해상도 설정",
                resetButton: "창으로 재설정",
                scaleLocallyLabel: "로컬 스케일링:",
                scaleLocallyOn: "켜짐",
                scaleLocallyOff: "꺼짐",
                scaleLocallyTitleEnable: "로컬 스케일링 활성화 (종횡비 유지)",
                scaleLocallyTitleDisable: "로컬 스케일링 비활성화 (정확한 해상도 사용)",
                uiScalingLabel: "UI 스케일링:",
                hidpiLabel: "HiDPI (픽셀 퍼펙트)",
                hidpiEnableTitle: "HiDPI 활성화 (픽셀 퍼펙트)",
                hidpiDisableTitle: "HiDPI 비활성화 (CSS 스케일링 사용)"
            },
            stats: {
                title: "통계",
                cpuLabel: "CPU",
                gpuLabel: "GPU 사용량",
                sysMemLabel: "시스템 메모리",
                gpuMemLabel: "GPU 메모리",
                fpsLabel: "FPS",
                audioLabel: "오디오",
                tooltipCpu: "CPU 사용량: {value}%",
                tooltipGpu: "GPU 사용량: {value}%",
                tooltipSysMem: "시스템 메모리: {used} / {total}",
                tooltipGpuMem: "GPU 메모리: {used} / {total}",
                tooltipFps: "클라이언트 FPS: {value}",
                tooltipAudio: "오디오 버퍼: {value}",
                tooltipMemoryNA: "해당 없음"
            },
            clipboard: {
                title: "클립보드",
                label: "서버 클립보드:",
                placeholder: "서버의 클립보드 내용..."
            },
            files: {
                title: "파일",
                uploadButton: "파일 업로드",
                uploadButtonTitle: "원격 세션에 파일 업로드",
                downloadButtonTitle: "파일 다운로드"
            },
            gamepads: {
                title: "게임패드",
                noActivity: "아직 게임패드 활동이 감지되지 않았습니다...",
                touchEnableTitle: "터치 게임패드 활성화",
                touchDisableTitle: "터치 게임패드 비활성화",
                touchActiveLabel: "터치 게임패드: 켜짐",
                touchInactiveLabel: "터치 게임패드: 꺼짐",
                physicalHiddenForTouch: "터치 게임패드가 활성화되어 있는 동안에는 물리적 게임패드 표시가 숨겨집니다.",
                noActivityMobileOrEnableTouch: "물리적 게임패드가 없습니다. 터치 게임패드를 활성화하거나 컨트롤러를 연결하십시오."
            },
            apps: {
                title: "앱",
                openButtonTitle: "앱 관리",
                openButton: "앱 관리"
            },
            sharing: {
                title: "공유"
            }
        },
        resolutionPresets: {
            "1920x1080": "1920 x 1080 (FHD)",
            "1280x720": "1280 x 720 (HD)",
            "1366x768": "1366 x 768 (노트북)",
            "1920x1200": "1920 x 1200 (16:10)",
            "2560x1440": "2560 x 1440 (QHD)",
            "3840x2160": "3840 x 2160 (4K UHD)",
            "1024x768": "1024 x 768 (XGA 4:3)",
            "800x600": "800 x 600 (SVGA 4:3)",
            "640x480": "640 x 480 (VGA 4:3)",
            "320x240": "320 x 240 (QVGA 4:3)"
        },
        appsModal: {
            closeAlt: "앱 모달 닫기",
            loading: "앱 로드 중...",
            errorLoading: "앱 데이터 로드 실패. 다시 시도하십시오.",
            searchPlaceholder: "앱 검색...",
            noAppsFound: "검색과 일치하는 앱을 찾을 수 없습니다.",
            backButton: "목록으로 돌아가기",
            installButton: "설치",
            updateButton: "업데이트",
            removeButton: "제거",
            installingMessage: "{{appName}} 설치 시뮬레이션 중",
            removingMessage: "{{appName}} 제거 시뮬레이션 중",
            updatingMessage: "{{appName}} 업데이트 시뮬레이션 중",
            installedBadge: "설치됨"
        },
        notifications: {
            closeButtonAlt: "{fileName} 알림 닫기",
            uploading: "업로드 중... {progress}%",
            uploadComplete: "업로드 완료",
            uploadFailed: "업로드 실패",
            errorPrefix: "오류:",
            unknownError: "알 수 없는 오류가 발생했습니다.",
            copiedTitle: "복사됨: {label}",
            copiedMessage: "링크가 클립보드에 복사되었습니다: {textToCopy}",
            copyFailedTitle: "복사 실패: {label}",
            copyFailedError: "링크를 클립보드에 복사할 수 없습니다.",
            scalingTitle: "확장/축소 업데이트됨: 작업 필요",
            scalingMessage: "새로운 확장이 적용되었습니다. 변경 사항을 보려면 다음을 다시 시작하십시오: 컨테이너, 로그아웃하여 데스크톱 세션, 또는 실행 중인 애플리케이션."
        },
        alerts: {
            invalidResolution: "너비와 높이에 유효한 양의 정수를 입력하십시오."
        },
        byteUnits: ["바이트", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        zeroBytes: "0 바이트",
        filesModal: {
            closeAlt: "파일 모달 닫기",
            iframeTitle: "다운로드 가능한 파일"
        }
    },
    Fb = {
        selkiesLogoAlt: "Selkies ロゴ",
        selkiesTitle: "Selkies",
        toggleThemeTitle: "テーマを切り替え",
        fullscreenTitle: "フルスクリーンに入る",
        gamingModeTitle: "ゲームモード",
        trackpadModeTitle: "トラックパッドモード",
        buttons: {
            videoStreamEnableTitle: "ビデオストリームを有効にする",
            videoStreamDisableTitle: "ビデオストリームを無効にする",
            audioStreamEnableTitle: "オーディオストリームを有効にする",
            audioStreamDisableTitle: "オーディオストリームを無効にする",
            microphoneEnableTitle: "マイクを有効にする",
            microphoneDisableTitle: "マイクを無効にする",
            gamepadEnableTitle: "ゲームパッド入力を有効にする",
            gamepadDisableTitle: "ゲームパッド入力を無効にする",
            virtualKeyboardButtonTitle: "キーボードを表示",
            h264FullColorEnableTitle: "H.264 フルカラーを有効にする",
            h264FullColorDisableTitle: "H.264 フルカラーを無効にする",
            h264StreamingModeDisableTitle: "ターボを無効にする",
            h264StreamingModeEnableTitle: "ターボを有効にする",
            useCpuEnableTitle: "強制 CPU エンコーディングを有効にする (nvenc/vaapi を上書き)",
            useCpuDisableTitle: "強制 CPU エンコーディングを無効にする (nvenc/vaapi を上書き)"
        },
        sections: {
            video: {
                title: "ビデオ設定",
                encoderLabel: "エンコーダー:",
                framerateLabel: "フレーム/秒 ({framerate} FPS):",
                bitrateLabel: "ビデオビットレート ({bitrate} Mbps):",
                bufferLabelImmediate: "ビデオバッファサイズ (0 (即時)):",
                bufferLabelFrames: "ビデオバッファサイズ ({videoBufferSize} フレーム):",
                crfLabel: "ビデオ CRF ({crf}):",
                fullColorLabel: "フルカラー 4:4:4",
                streamingModeDetails: "ターボモードはすべてのVNCロジックを無効にし、すべてのフレームを従来のビデオエンコーダーのようにエンコードします。",
                streamingModeLabel: "ターボ",
                useCpuLabel: "CPU エンコーディング",
                jpegQualityLabel: "基本品質: {jpegQuality}",
                paintOverJpegQualityLabel: "ペイントオーバー品質: {paintOverJpegQuality}"
            },
            audio: {
                title: "オーディオ設定",
                bitrateLabel: "オーディオビットレート ({bitrate} kbps):",
                inputLabel: "入力 (マイク):",
                outputLabel: "出力 (スピーカー):",
                outputNotSupported: "このブラウザでは出力デバイスの選択はサポートされていません。",
                deviceErrorDefault: "オーディオデバイスのリスト表示エラー: {errorName}",
                deviceErrorPermission: "権限が拒否されました。デバイスを選択するには、ブラウザ設定でマイクへのアクセスを許可してください。",
                deviceErrorNotFound: "オーディオデバイスが見つかりません。",
                defaultInputLabelFallback: "入力デバイス {index}",
                defaultOutputLabelFallback: "出力デバイス {index}"
            },
            screen: {
                title: "画面設定",
                presetLabel: "プリセット:",
                resolutionPresetSelect: "-- プリセットを選択 --",
                widthLabel: "幅:",
                heightLabel: "高さ:",
                widthPlaceholder: "例: 1920",
                heightPlaceholder: "例: 1080",
                setManualButton: "手動解像度を設定",
                resetButton: "ウィンドウにリセット",
                scaleLocallyLabel: "ローカルでスケーリング:",
                scaleLocallyOn: "オン",
                scaleLocallyOff: "オフ",
                scaleLocallyTitleEnable: "ローカルスケーリングを有効にする (アスペクト比を維持)",
                scaleLocallyTitleDisable: "ローカルスケーリングを無効にする (正確な解像度を使用)",
                uiScalingLabel: "UI スケーリング:",
                hidpiLabel: "HiDPI (ピクセルパーフェクト)",
                hidpiEnableTitle: "HiDPI を有効にする (ピクセルパーフェクト)",
                hidpiDisableTitle: "HiDPI を無効にする (CSS スケーリングを使用)"
            },
            stats: {
                title: "統計",
                cpuLabel: "CPU",
                gpuLabel: "GPU 使用率",
                sysMemLabel: "システムメモリ",
                gpuMemLabel: "GPU メモリ",
                fpsLabel: "FPS",
                audioLabel: "オーディオ",
                tooltipCpu: "CPU 使用率: {value}%",
                tooltipGpu: "GPU 使用率: {value}%",
                tooltipSysMem: "システムメモリ: {used} / {total}",
                tooltipGpuMem: "GPU メモリ: {used} / {total}",
                tooltipFps: "クライアント FPS: {value}",
                tooltipAudio: "オーディオバッファ: {value}",
                tooltipMemoryNA: "N/A"
            },
            clipboard: {
                title: "クリップボード",
                label: "サーバークリップボード:",
                placeholder: "サーバーからのクリップボードの内容..."
            },
            files: {
                title: "ファイル",
                uploadButton: "ファイルをアップロード",
                uploadButtonTitle: "リモートセッションにファイルをアップロード",
                downloadButtonTitle: "ファイルをダウンロード"
            },
            gamepads: {
                title: "ゲームパッド",
                noActivity: "まだゲームパッドのアクティビティが検出されていません...",
                touchEnableTitle: "タッチゲームパッドを有効にする",
                touchDisableTitle: "タッチゲームパッドを無効にする",
                touchActiveLabel: "タッチゲームパッド: オン",
                touchInactiveLabel: "タッチゲームパッド: オフ",
                physicalHiddenForTouch: "タッチゲームパッドがアクティブな間、物理ゲームパッドの表示は非表示になります。",
                noActivityMobileOrEnableTouch: "物理ゲームパッドがありません。タッチゲームパッドを有効にするか、コントローラーを接続してください。"
            },
            apps: {
                title: "アプリ",
                openButtonTitle: "アプリを管理",
                openButton: "アプリを管理"
            },
            sharing: {
                title: "共有"
            }
        },
        resolutionPresets: {
            "1920x1080": "1920 x 1080 (FHD)",
            "1280x720": "1280 x 720 (HD)",
            "1366x768": "1366 x 768 (ラップトップ)",
            "1920x1200": "1920 x 1200 (16:10)",
            "2560x1440": "2560 x 1440 (QHD)",
            "3840x2160": "3840 x 2160 (4K UHD)",
            "1024x768": "1024 x 768 (XGA 4:3)",
            "800x600": "800 x 600 (SVGA 4:3)",
            "640x480": "640 x 480 (VGA 4:3)",
            "320x240": "320 x 240 (QVGA 4:3)"
        },
        appsModal: {
            closeAlt: "アプリモーダルを閉じる",
            loading: "アプリを読み込み中...",
            errorLoading: "アプリデータの読み込みに失敗しました。もう一度お試しください。",
            searchPlaceholder: "アプリを検索...",
            noAppsFound: "検索に一致するアプリが見つかりません。",
            backButton: "リストに戻る",
            installButton: "インストール",
            updateButton: "更新",
            removeButton: "削除",
            installingMessage: "{{appName}} のインストールをシミュレートしています",
            removingMessage: "{{appName}} の削除をシミュレートしています",
            updatingMessage: "{{appName}} の更新をシミュレートしています",
            installedBadge: "インストール済み"
        },
        notifications: {
            closeButtonAlt: "{fileName} の通知を閉じる",
            uploading: "アップロード中... {progress}%",
            uploadComplete: "アップロード完了",
            uploadFailed: "アップロード失敗",
            errorPrefix: "エラー:",
            unknownError: "不明なエラーが発生しました。",
            copiedTitle: "コピーしました: {label}",
            copiedMessage: "リンクをクリップボードにコピーしました: {textToCopy}",
            copyFailedTitle: "コピーに失敗しました: {label}",
            copyFailedError: "リンクをクリップボードにコピーできませんでした。",
            scalingTitle: "スケーリング更新：アクションが必要です",
            scalingMessage: "新しいスケーリングが適用されました。変更を確認するには、コンテナ、ログアウトによるデスクトップセッション、または実行中のアプリケーションを再起動してください。"
        },
        alerts: {
            invalidResolution: "幅と高さに有効な正の整数を入力してください。"
        },
        byteUnits: ["バイト", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        zeroBytes: "0 バイト",
        filesModal: {
            closeAlt: "ファイルモーダルを閉じる",
            iframeTitle: "ダウンロード可能なファイル"
        }
    },
    Kb = {
        selkiesLogoAlt: "Logo Selkies",
        selkiesTitle: "Selkies",
        toggleThemeTitle: "Chuyển đổi Chủ đề",
        fullscreenTitle: "Vào Toàn màn hình",
        gamingModeTitle: "Chế độ Chơi game",
        trackpadModeTitle: "Chế độ Bàn di chuột",
        buttons: {
            videoStreamEnableTitle: "Bật Luồng Video",
            videoStreamDisableTitle: "Tắt Luồng Video",
            audioStreamEnableTitle: "Bật Luồng Âm thanh",
            audioStreamDisableTitle: "Tắt Luồng Âm thanh",
            microphoneEnableTitle: "Bật Micro",
            microphoneDisableTitle: "Tắt Micro",
            gamepadEnableTitle: "Bật Đầu vào Tay cầm chơi game",
            gamepadDisableTitle: "Tắt Đầu vào Tay cầm chơi game",
            virtualKeyboardButtonTitle: "Hiển thị Bàn phím",
            h264FullColorEnableTitle: "Bật H.264 Đầy đủ Màu sắc",
            h264FullColorDisableTitle: "Tắt H.264 Đầy đủ Màu sắc",
            h264StreamingModeDisableTitle: "Tắt chế độ Turbo",
            h264StreamingModeEnableTitle: "Bật chế độ Turbo",
            useCpuEnableTitle: "Bật Mã hóa CPU Bắt buộc (Ghi đè nvenc/vaapi)",
            useCpuDisableTitle: "Tắt Mã hóa CPU Bắt buộc (Ghi đè nvenc/vaapi)"
        },
        sections: {
            video: {
                title: "Cài đặt Video",
                encoderLabel: "Bộ mã hóa:",
                framerateLabel: "Khung hình mỗi giây ({framerate} FPS):",
                bitrateLabel: "Tốc độ bit Video ({bitrate} Mbps):",
                bufferLabelImmediate: "Kích thước Bộ đệm Video (0 (Ngay lập tức)):",
                bufferLabelFrames: "Kích thước Bộ đệm Video ({videoBufferSize} khung hình):",
                crfLabel: "CRF Video ({crf}):",
                fullColorLabel: "Đầy đủ Màu sắc 4:4:4",
                streamingModeDetails: "Chế độ Turbo tắt tất cả logic VNC và mã hóa tất cả các khung hình như một bộ mã hóa video truyền thống.",
                streamingModeLabel: "Turbo",
                useCpuLabel: "Mã hóa CPU",
                jpegQualityLabel: "Chất lượng Cơ bản: {jpegQuality}",
                paintOverJpegQualityLabel: "Chất lượng Vẽ đè: {paintOverJpegQuality}"
            },
            audio: {
                title: "Cài đặt Âm thanh",
                bitrateLabel: "Tốc độ bit Âm thanh ({bitrate} kbps):",
                inputLabel: "Đầu vào (Micro):",
                outputLabel: "Đầu ra (Loa):",
                outputNotSupported: "Trình duyệt này không hỗ trợ chọn thiết bị đầu ra.",
                deviceErrorDefault: "Lỗi liệt kê thiết bị âm thanh: {errorName}",
                deviceErrorPermission: "Quyền bị từ chối. Vui lòng cho phép truy cập micro trong cài đặt trình duyệt để chọn thiết bị.",
                deviceErrorNotFound: "Không tìm thấy thiết bị âm thanh nào.",
                defaultInputLabelFallback: "Thiết bị Đầu vào {index}",
                defaultOutputLabelFallback: "Thiết bị Đầu ra {index}"
            },
            screen: {
                title: "Cài đặt Màn hình",
                presetLabel: "Cài đặt sẵn:",
                resolutionPresetSelect: "-- Chọn Cài đặt sẵn --",
                widthLabel: "Chiều rộng:",
                heightLabel: "Chiều cao:",
                widthPlaceholder: "ví dụ: 1920",
                heightPlaceholder: "ví dụ: 1080",
                setManualButton: "Đặt Độ phân giải Thủ công",
                resetButton: "Đặt lại về Cửa sổ",
                scaleLocallyLabel: "Co giãn Cục bộ:",
                scaleLocallyOn: "BẬT",
                scaleLocallyOff: "TẮT",
                scaleLocallyTitleEnable: "Bật Co giãn Cục bộ (Giữ Tỷ lệ khung hình)",
                scaleLocallyTitleDisable: "Tắt Co giãn Cục bộ (Sử dụng Độ phân giải Chính xác)",
                uiScalingLabel: "Tỷ lệ Giao diện:",
                hidpiLabel: "HiDPI (Hoàn hảo đến từng Pixel)",
                hidpiEnableTitle: "Bật HiDPI (Hoàn hảo đến từng Pixel)",
                hidpiDisableTitle: "Tắt HiDPI (Sử dụng CSS Scaling)"
            },
            stats: {
                title: "Thống kê",
                cpuLabel: "CPU",
                gpuLabel: "Sử dụng GPU",
                sysMemLabel: "Bộ nhớ Hệ thống",
                gpuMemLabel: "Bộ nhớ GPU",
                fpsLabel: "FPS",
                audioLabel: "Âm thanh",
                tooltipCpu: "Sử dụng CPU: {value}%",
                tooltipGpu: "Sử dụng GPU: {value}%",
                tooltipSysMem: "Bộ nhớ Hệ thống: {used} / {total}",
                tooltipGpuMem: "Bộ nhớ GPU: {used} / {total}",
                tooltipFps: "FPS Máy khách: {value}",
                tooltipAudio: "Bộ đệm Âm thanh: {value}",
                tooltipMemoryNA: "Không có"
            },
            clipboard: {
                title: "Bộ nhớ tạm",
                label: "Bộ nhớ tạm Máy chủ:",
                placeholder: "Nội dung bộ nhớ tạm từ máy chủ..."
            },
            files: {
                title: "Tệp",
                uploadButton: "Tải lên Tệp",
                uploadButtonTitle: "Tải tệp lên phiên làm việc từ xa",
                downloadButtonTitle: "Tải xuống Tệp"
            },
            gamepads: {
                title: "Tay cầm chơi game",
                noActivity: "Chưa phát hiện hoạt động nào của tay cầm chơi game...",
                touchEnableTitle: "Bật Tay cầm cảm ứng",
                touchDisableTitle: "Tắt Tay cầm cảm ứng",
                touchActiveLabel: "Tay cầm cảm ứng: BẬT",
                touchInactiveLabel: "Tay cầm cảm ứng: TẮT",
                physicalHiddenForTouch: "Màn hình tay cầm vật lý bị ẩn khi tay cầm cảm ứng đang hoạt động.",
                noActivityMobileOrEnableTouch: "Không có tay cầm vật lý. Bật tay cầm cảm ứng hoặc kết nối bộ điều khiển."
            },
            apps: {
                title: "Ứng dụng",
                openButtonTitle: "Quản lý Ứng dụng",
                openButton: "Quản lý Ứng dụng"
            },
            sharing: {
                title: "Chia sẻ"
            }
        },
        resolutionPresets: {
            "1920x1080": "1920 x 1080 (FHD)",
            "1280x720": "1280 x 720 (HD)",
            "1366x768": "1366 x 768 (Máy tính xách tay)",
            "1920x1200": "1920 x 1200 (16:10)",
            "2560x1440": "2560 x 1440 (QHD)",
            "3840x2160": "3840 x 2160 (4K UHD)",
            "1024x768": "1024 x 768 (XGA 4:3)",
            "800x600": "800 x 600 (SVGA 4:3)",
            "640x480": "640 x 480 (VGA 4:3)",
            "320x240": "320 x 240 (QVGA 4:3)"
        },
        appsModal: {
            closeAlt: "Đóng modal ứng dụng",
            loading: "Đang tải ứng dụng...",
            errorLoading: "Tải dữ liệu ứng dụng thất bại. Vui lòng thử lại.",
            searchPlaceholder: "Tìm kiếm ứng dụng...",
            noAppsFound: "Không tìm thấy ứng dụng nào khớp với tìm kiếm của bạn.",
            backButton: "Quay lại danh sách",
            installButton: "Cài đặt",
            updateButton: "Cập nhật",
            removeButton: "Gỡ bỏ",
            installingMessage: "Mô phỏng cài đặt cho: {{appName}}",
            removingMessage: "Mô phỏng gỡ bỏ cho: {{appName}}",
            updatingMessage: "Mô phỏng cập nhật cho: {{appName}}",
            installedBadge: "Đã cài đặt"
        },
        notifications: {
            closeButtonAlt: "Đóng thông báo cho {fileName}",
            uploading: "Đang tải lên... {progress}%",
            uploadComplete: "Tải lên Hoàn tất",
            uploadFailed: "Tải lên Thất bại",
            errorPrefix: "Lỗi:",
            unknownError: "Đã xảy ra lỗi không xác định.",
            copiedTitle: "Đã sao chép: {label}",
            copiedMessage: "Đã sao chép liên kết vào bộ nhớ tạm: {textToCopy}",
            copyFailedTitle: "Sao chép Thất bại: {label}",
            copyFailedError: "Không thể sao chép liên kết vào bộ nhớ tạm.",
            scalingTitle: "Đã cập nhật tỷ lệ: Cần hành động",
            scalingMessage: "Đã áp dụng tỷ lệ mới. Để xem các thay đổi, vui lòng khởi động lại: container, phiên làm việc máy tính của bạn bằng cách đăng xuất, hoặc ứng dụng đang chạy."
        },
        alerts: {
            invalidResolution: "Vui lòng nhập số nguyên dương hợp lệ cho Chiều rộng và Chiều cao."
        },
        byteUnits: ["Byte", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        zeroBytes: "0 Byte",
        filesModal: {
            closeAlt: "Đóng modal tệp",
            iframeTitle: "Tệp có thể tải xuống"
        }
    },
    Rb = {
        selkiesLogoAlt: "โลโก้ Selkies",
        selkiesTitle: "Selkies",
        toggleThemeTitle: "สลับธีม",
        fullscreenTitle: "เข้าสู่โหมดเต็มหน้าจอ",
        gamingModeTitle: "โหมดเกมมิ่ง",
        trackpadModeTitle: "โหมดแทร็คแพด",
        buttons: {
            videoStreamEnableTitle: "เปิดใช้งานสตรีมวิดีโอ",
            videoStreamDisableTitle: "ปิดใช้งานสตรีมวิดีโอ",
            audioStreamEnableTitle: "เปิดใช้งานสตรีมเสียง",
            audioStreamDisableTitle: "ปิดใช้งานสตรีมเสียง",
            microphoneEnableTitle: "เปิดใช้งานไมโครโฟน",
            microphoneDisableTitle: "ปิดใช้งานไมโครโฟน",
            gamepadEnableTitle: "เปิดใช้งานอินพุตเกมแพด",
            gamepadDisableTitle: "ปิดใช้งานอินพุตเกมแพด",
            virtualKeyboardButtonTitle: "แสดงแป้นพิมพ์",
            h264FullColorEnableTitle: "เปิดใช้งาน H.264 สีสมบูรณ์",
            h264FullColorDisableTitle: "ปิดใช้งาน H.264 สีสมบูรณ์",
            h264StreamingModeDisableTitle: "ปิดใช้งานเทอร์โบ",
            h264StreamingModeEnableTitle: "เปิดใช้งานเทอร์โบ",
            useCpuEnableTitle: "เปิดใช้งานการเข้ารหัส CPU แบบบังคับ (เขียนทับ nvenc/vaapi)",
            useCpuDisableTitle: "ปิดใช้งานการเข้ารหัส CPU แบบบังคับ (เขียนทับ nvenc/vaapi)"
        },
        sections: {
            video: {
                title: "การตั้งค่าวิดีโอ",
                encoderLabel: "ตัวเข้ารหัส:",
                framerateLabel: "เฟรมต่อวินาที ({framerate} FPS):",
                bitrateLabel: "บิตเรตวิดีโอ ({bitrate} Mbps):",
                bufferLabelImmediate: "ขนาดบัฟเฟอร์วิดีโอ (0 (ทันที)):",
                bufferLabelFrames: "ขนาดบัฟเฟอร์วิดีโอ ({videoBufferSize} เฟรม):",
                crfLabel: "วิดีโอ CRF ({crf}):",
                fullColorLabel: "สีสมบูรณ์ 4:4:4",
                streamingModeDetails: "โหมดเทอร์โบจะปิดการทำงานของ VNC ทั้งหมดและเข้ารหัสเฟรมทั้งหมดเหมือนตัวเข้ารหัสวิดีโอแบบดั้งเดิม",
                streamingModeLabel: "เทอร์โบ",
                useCpuLabel: "การเข้ารหัส CPU",
                jpegQualityLabel: "คุณภาพพื้นฐาน: {jpegQuality}",
                paintOverJpegQualityLabel: "คุณภาพการวาดทับ: {paintOverJpegQuality}"
            },
            audio: {
                title: "การตั้งค่าเสียง",
                bitrateLabel: "บิตเรตเสียง ({bitrate} kbps):",
                inputLabel: "อินพุต (ไมโครโฟน):",
                outputLabel: "เอาต์พุต (ลำโพง):",
                outputNotSupported: "เบราว์เซอร์นี้ไม่รองรับการเลือกอุปกรณ์เอาต์พุต",
                deviceErrorDefault: "ข้อผิดพลาดในการแสดงรายการอุปกรณ์เสียง: {errorName}",
                deviceErrorPermission: "การอนุญาตถูกปฏิเสธ โปรดอนุญาตการเข้าถึงไมโครโฟนในการตั้งค่าเบราว์เซอร์เพื่อเลือกอุปกรณ์",
                deviceErrorNotFound: "ไม่พบอุปกรณ์เสียง",
                defaultInputLabelFallback: "อุปกรณ์อินพุต {index}",
                defaultOutputLabelFallback: "อุปกรณ์เอาต์พุต {index}"
            },
            screen: {
                title: "การตั้งค่าหน้าจอ",
                presetLabel: "ค่าที่ตั้งไว้ล่วงหน้า:",
                resolutionPresetSelect: "-- เลือกค่าที่ตั้งไว้ --",
                widthLabel: "ความกว้าง:",
                heightLabel: "ความสูง:",
                widthPlaceholder: "เช่น 1920",
                heightPlaceholder: "เช่น 1080",
                setManualButton: "ตั้งค่าความละเอียดด้วยตนเอง",
                resetButton: "รีเซ็ตเป็นหน้าต่าง",
                scaleLocallyLabel: "ปรับขนาดในเครื่อง:",
                scaleLocallyOn: "เปิด",
                scaleLocallyOff: "ปิด",
                scaleLocallyTitleEnable: "เปิดใช้งานการปรับขนาดในเครื่อง (รักษาสัดส่วนภาพ)",
                scaleLocallyTitleDisable: "ปิดใช้งานการปรับขนาดในเครื่อง (ใช้ความละเอียดที่แน่นอน)",
                uiScalingLabel: "การปรับขนาด UI:",
                hidpiLabel: "HiDPI (ความคมชัดระดับพิกเซล)",
                hidpiEnableTitle: "เปิดใช้งาน HiDPI (ความคมชัดระดับพิกเซล)",
                hidpiDisableTitle: "ปิดใช้งาน HiDPI (ใช้การปรับขนาด CSS)"
            },
            stats: {
                title: "สถิติ",
                cpuLabel: "CPU",
                gpuLabel: "การใช้งาน GPU",
                sysMemLabel: "หน่วยความจำระบบ",
                gpuMemLabel: "หน่วยความจำ GPU",
                fpsLabel: "FPS",
                audioLabel: "เสียง",
                tooltipCpu: "การใช้งาน CPU: {value}%",
                tooltipGpu: "การใช้งาน GPU: {value}%",
                tooltipSysMem: "หน่วยความจำระบบ: {used} / {total}",
                tooltipGpuMem: "หน่วยความจำ GPU: {used} / {total}",
                tooltipFps: "FPS ไคลเอ็นต์: {value}",
                tooltipAudio: "บัฟเฟอร์เสียง: {value}",
                tooltipMemoryNA: "ไม่มีข้อมูล"
            },
            clipboard: {
                title: "คลิปบอร์ด",
                label: "คลิปบอร์ดเซิร์ฟเวอร์:",
                placeholder: "เนื้อหาคลิปบอร์ดจากเซิร์ฟเวอร์..."
            },
            files: {
                title: "ไฟล์",
                uploadButton: "อัปโหลดไฟล์",
                uploadButtonTitle: "อัปโหลดไฟล์ไปยังเซสชันระยะไกล",
                downloadButtonTitle: "ดาวน์โหลดไฟล์"
            },
            gamepads: {
                title: "เกมแพด",
                noActivity: "ยังไม่พบกิจกรรมของเกมแพด...",
                touchEnableTitle: "เปิดใช้งานทัชเกมแพด",
                touchDisableTitle: "ปิดใช้งานทัชเกมแพด",
                touchActiveLabel: "ทัชเกมแพด: เปิด",
                touchInactiveLabel: "ทัชเกมแพด: ปิด",
                physicalHiddenForTouch: "การแสดงผลเกมแพดจริงจะถูกซ่อนขณะที่ทัชเกมแพดทำงานอยู่",
                noActivityMobileOrEnableTouch: "ไม่มีเกมแพดจริง เปิดใช้งานทัชเกมแพดหรือเชื่อมต่อคอนโทรลเลอร์"
            },
            apps: {
                title: "แอป",
                openButtonTitle: "จัดการแอป",
                openButton: "จัดการแอป"
            },
            sharing: {
                title: "การแชร์"
            }
        },
        resolutionPresets: {
            "1920x1080": "1920 x 1080 (FHD)",
            "1280x720": "1280 x 720 (HD)",
            "1366x768": "1366 x 768 (แล็ปท็อป)",
            "1920x1200": "1920 x 1200 (16:10)",
            "2560x1440": "2560 x 1440 (QHD)",
            "3840x2160": "3840 x 2160 (4K UHD)",
            "1024x768": "1024 x 768 (XGA 4:3)",
            "800x600": "800 x 600 (SVGA 4:3)",
            "640x480": "640 x 480 (VGA 4:3)",
            "320x240": "320 x 240 (QVGA 4:3)"
        },
        appsModal: {
            closeAlt: "ปิดหน้าต่างแอป",
            loading: "กำลังโหลดแอป...",
            errorLoading: "โหลดข้อมูลแอปไม่สำเร็จ โปรดลองอีกครั้ง",
            searchPlaceholder: "ค้นหาแอป...",
            noAppsFound: "ไม่พบแอปที่ตรงกับการค้นหาของคุณ",
            backButton: "กลับไปที่รายการ",
            installButton: "ติดตั้ง",
            updateButton: "อัปเดต",
            removeButton: "ลบ",
            installingMessage: "กำลังจำลองการติดตั้งสำหรับ: {{appName}}",
            removingMessage: "กำลังจำลองการลบสำหรับ: {{appName}}",
            updatingMessage: "กำลังจำลองการอัปเดตสำหรับ: {{appName}}",
            installedBadge: "ติดตั้งแล้ว"
        },
        notifications: {
            closeButtonAlt: "ปิดการแจ้งเตือนสำหรับ {fileName}",
            uploading: "กำลังอัปโหลด... {progress}%",
            uploadComplete: "อัปโหลดเสร็จสมบูรณ์",
            uploadFailed: "การอัปโหลดล้มเหลว",
            errorPrefix: "ข้อผิดพลาด:",
            unknownError: "เกิดข้อผิดพลาดที่ไม่รู้จัก",
            copiedTitle: "คัดลอกแล้ว: {label}",
            copiedMessage: "คัดลอกลิงก์ไปยังคลิปบอร์ดแล้ว: {textToCopy}",
            copyFailedTitle: "การคัดลอกล้มเหลว: {label}",
            copyFailedError: "ไม่สามารถคัดลอกลิงก์ไปยังคลิปบอร์ดได้",
            scalingTitle: "ปรับขนาดแล้ว: ต้องการการดำเนินการ",
            scalingMessage: "ใช้การปรับขนาดใหม่แล้ว หากต้องการดูการเปลี่ยนแปลง โปรดรีสตาร์ท: คอนเทนเนอร์, เซสชันเดสก์ท็อปของคุณโดยการออกจากระบบ, หรือแอปพลิเคชันที่กำลังทำงานอยู่"
        },
        alerts: {
            invalidResolution: "โปรดป้อนจำนวนเต็มบวกที่ถูกต้องสำหรับความกว้างและความสูง"
        },
        byteUnits: ["ไบต์", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        zeroBytes: "0 ไบต์",
        filesModal: {
            closeAlt: "ปิดหน้าต่างไฟล์",
            iframeTitle: "ไฟล์ที่สามารถดาวน์โหลดได้"
        }
    },
    Xb = {
        selkiesLogoAlt: "Logo ng Selkies",
        selkiesTitle: "Selkies",
        toggleThemeTitle: "I-toggle ang Tema",
        fullscreenTitle: "Pumasok sa Fullscreen",
        gamingModeTitle: "Gaming Mode",
        trackpadModeTitle: "Modo ng Trackpad",
        buttons: {
            videoStreamEnableTitle: "Paganahin ang Video Stream",
            videoStreamDisableTitle: "Huwag paganahin ang Video Stream",
            audioStreamEnableTitle: "Paganahin ang Audio Stream",
            audioStreamDisableTitle: "Huwag paganahin ang Audio Stream",
            microphoneEnableTitle: "Paganahin ang Mikropono",
            microphoneDisableTitle: "Huwag paganahin ang Mikropono",
            gamepadEnableTitle: "Paganahin ang Gamepad Input",
            gamepadDisableTitle: "Huwag paganahin ang Gamepad Input",
            virtualKeyboardButtonTitle: "Ipakita ang Keyboard",
            h264FullColorEnableTitle: "Paganahin ang H.264 Buong Kulay",
            h264FullColorDisableTitle: "Huwag paganahin ang H.264 Buong Kulay",
            h264StreamingModeDisableTitle: "Huwag paganahin ang Turbo",
            h264StreamingModeEnableTitle: "Paganahin ang Turbo",
            useCpuEnableTitle: "Paganahin ang Puwersahang CPU Encoding (Pinapalitan ang nvenc/vaapi)",
            useCpuDisableTitle: "Huwag paganahin ang Puwersahang CPU Encoding (Pinapalitan ang nvenc/vaapi)"
        },
        sections: {
            video: {
                title: "Mga Setting ng Video",
                encoderLabel: "Encoder:",
                framerateLabel: "Mga frame bawat segundo ({framerate} FPS):",
                bitrateLabel: "Video Bitrate ({bitrate} Mbps):",
                bufferLabelImmediate: "Laki ng Video Buffer (0 (Agad)):",
                bufferLabelFrames: "Laki ng Video Buffer ({videoBufferSize} frames):",
                crfLabel: "Video CRF ({crf}):",
                fullColorLabel: "Buong Kulay 4:4:4",
                streamingModeDetails: "Ang Turbo mode ay hindi pinapagana ang lahat ng lohika ng VNC at ini-encode ang lahat ng mga frame tulad ng isang tradisyonal na video encoder.",
                streamingModeLabel: "Turbo",
                useCpuLabel: "CPU Encoding",
                jpegQualityLabel: "Batayang Kalidad: {jpegQuality}",
                paintOverJpegQualityLabel: "Kalidad ng Paintover: {paintOverJpegQuality}"
            },
            audio: {
                title: "Mga Setting ng Audio",
                bitrateLabel: "Audio Bitrate ({bitrate} kbps):",
                inputLabel: "Input (Mikropono):",
                outputLabel: "Output (Speaker):",
                outputNotSupported: "Hindi suportado ng browser na ito ang pagpili ng output device.",
                deviceErrorDefault: "Error sa paglista ng mga audio device: {errorName}",
                deviceErrorPermission: "Tinanggihan ang pahintulot. Mangyaring payagan ang access sa mikropono sa mga setting ng browser upang pumili ng mga device.",
                deviceErrorNotFound: "Walang nahanap na mga audio device.",
                defaultInputLabelFallback: "Input Device {index}",
                defaultOutputLabelFallback: "Output Device {index}"
            },
            screen: {
                title: "Mga Setting ng Screen",
                presetLabel: "Preset:",
                resolutionPresetSelect: "-- Pumili ng Preset --",
                widthLabel: "Lapad:",
                heightLabel: "Taas:",
                widthPlaceholder: "hal., 1920",
                heightPlaceholder: "hal., 1080",
                setManualButton: "Itakda ang Manual na Resolusyon",
                resetButton: "I-reset sa Window",
                scaleLocallyLabel: "I-scale Lokal:",
                scaleLocallyOn: "ON",
                scaleLocallyOff: "OFF",
                scaleLocallyTitleEnable: "Paganahin ang Lokal na Pag-scale (Panatilihin ang Aspect Ratio)",
                scaleLocallyTitleDisable: "Huwag paganahin ang Lokal na Pag-scale (Gamitin ang Eksaktong Resolusyon)",
                uiScalingLabel: "Pag-scale ng UI:",
                hidpiLabel: "HiDPI (Pixel Perfect)",
                hidpiEnableTitle: "Paganahin ang HiDPI (Pixel Perfect)",
                hidpiDisableTitle: "Huwag paganahin ang HiDPI (Gamitin ang CSS Scaling)"
            },
            stats: {
                title: "Stats",
                cpuLabel: "CPU",
                gpuLabel: "Paggamit ng GPU",
                sysMemLabel: "Sys Mem",
                gpuMemLabel: "GPU Mem",
                fpsLabel: "FPS",
                audioLabel: "Audio",
                tooltipCpu: "Paggamit ng CPU: {value}%",
                tooltipGpu: "Paggamit ng GPU: {value}%",
                tooltipSysMem: "Memorya ng System: {used} / {total}",
                tooltipGpuMem: "Memorya ng GPU: {used} / {total}",
                tooltipFps: "Client FPS: {value}",
                tooltipAudio: "Mga Audio Buffer: {value}",
                tooltipMemoryNA: "N/A"
            },
            clipboard: {
                title: "Clipboard",
                label: "Server Clipboard:",
                placeholder: "Nilalaman ng clipboard mula sa server..."
            },
            files: {
                title: "Mga File",
                uploadButton: "Mag-upload ng mga File",
                uploadButtonTitle: "Mag-upload ng mga file sa remote session",
                downloadButtonTitle: "I-download ang mga File"
            },
            gamepads: {
                title: "Mga Gamepad",
                noActivity: "Wala pang aktibidad ng gamepad na natukoy...",
                touchEnableTitle: "Paganahin ang Touch Gamepad",
                touchDisableTitle: "Huwag paganahin ang Touch Gamepad",
                touchActiveLabel: "Touch Gamepad: ON",
                touchInactiveLabel: "Touch Gamepad: OFF",
                physicalHiddenForTouch: "Nakatago ang display ng pisikal na gamepad habang aktibo ang touch gamepad.",
                noActivityMobileOrEnableTouch: "Walang pisikal na gamepad. Paganahin ang touch gamepad o kumonekta ng controller."
            },
            apps: {
                title: "Mga App",
                openButtonTitle: "Pamahalaan ang mga App",
                openButton: "Pamahalaan ang mga App"
            },
            sharing: {
                title: "Pagbabahagi"
            }
        },
        resolutionPresets: {
            "1920x1080": "1920 x 1080 (FHD)",
            "1280x720": "1280 x 720 (HD)",
            "1366x768": "1366 x 768 (Laptop)",
            "1920x1200": "1920 x 1200 (16:10)",
            "2560x1440": "2560 x 1440 (QHD)",
            "3840x2160": "3840 x 2160 (4K UHD)",
            "1024x768": "1024 x 768 (XGA 4:3)",
            "800x600": "800 x 600 (SVGA 4:3)",
            "640x480": "640 x 480 (VGA 4:3)",
            "320x240": "320 x 240 (QVGA 4:3)"
        },
        appsModal: {
            closeAlt: "Isara ang modal ng mga app",
            loading: "Nilo-load ang mga app...",
            errorLoading: "Nabigo ang pag-load ng data ng app. Pakisubukang muli.",
            searchPlaceholder: "Maghanap ng mga app...",
            noAppsFound: "Walang nahanap na app na tumutugma sa iyong paghahanap.",
            backButton: "Bumalik sa listahan",
            installButton: "I-install",
            updateButton: "I-update",
            removeButton: "Alisin",
            installingMessage: "Sinusubukan ang pag-install para sa: {{appName}}",
            removingMessage: "Sinusubukan ang pag-alis para sa: {{appName}}",
            updatingMessage: "Sinusubukan ang pag-update para sa: {{appName}}",
            installedBadge: "Naka-install"
        },
        notifications: {
            closeButtonAlt: "Isara ang notification para sa {fileName}",
            uploading: "Nag-a-upload... {progress}%",
            uploadComplete: "Kumpleto ang Pag-upload",
            uploadFailed: "Nabigo ang Pag-upload",
            errorPrefix: "Error:",
            unknownError: "May naganap na hindi kilalang error.",
            copiedTitle: "Kinopya: {label}",
            copiedMessage: "Nakopya ang link sa clipboard: {textToCopy}",
            copyFailedTitle: "Nabigo ang Pagkopya: {label}",
            copyFailedError: "Hindi makopya ang link sa clipboard.",
            scalingTitle: "Na-update ang Pag-scale: Kinakailangan ang Aksyon",
            scalingMessage: "Inilapat ang bagong pag-scale. Upang makita ang mga pagbabago, i-restart ang: container, iyong desktop session sa pamamagitan ng pag-log out, o ang tumatakbong application."
        },
        alerts: {
            invalidResolution: "Mangyaring maglagay ng mga wastong positibong integer para sa Lapad at Taas."
        },
        byteUnits: ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        zeroBytes: "0 Bytes",
        filesModal: {
            closeAlt: "Isara ang modal ng mga file",
            iframeTitle: "Mga Nada-download na File"
        }
    },
    Ub = {
        selkiesLogoAlt: "Selkies Logo",
        selkiesTitle: "Selkies",
        toggleThemeTitle: "Skift tema",
        fullscreenTitle: "Start Fuldskærm",
        gamingModeTitle: "Spiltilstand",
        trackpadModeTitle: "Trackpad-tilstand",
        buttons: {
            videoStreamEnableTitle: "Aktiver videostream",
            videoStreamDisableTitle: "Deaktiver videostream",
            audioStreamEnableTitle: "Aktiver lydstream",
            audioStreamDisableTitle: "Deaktiver lydstream",
            microphoneEnableTitle: "Aktiver mikrofon",
            microphoneDisableTitle: "Deaktiver mikrofon",
            gamepadEnableTitle: "Aktiver Gamepad-input",
            gamepadDisableTitle: "Deaktiver Gamepad-input",
            virtualKeyboardButtonTitle: "Vis tastatur",
            h264FullColorEnableTitle: "Paganahin ang H.264 Buong Kulay",
            h264FullColorDisableTitle: "Huwag paganahin ang H.264 Buong Kulay",
            h264StreamingModeDisableTitle: "Deaktiver Turbo",
            h264StreamingModeEnableTitle: "Aktiver Turbo",
            useCpuEnableTitle: "Aktiver Tvungen CPU-kodning (Tilsidesætter nvenc/vaapi)",
            useCpuDisableTitle: "Deaktiver Tvungen CPU-kodning (Tilsidesætter nvenc/vaapi)"
        },
        sections: {
            video: {
                title: "Videoindstillinger",
                encoderLabel: "Encoder:",
                framerateLabel: "Billeder pr. sekund ({framerate} FPS):",
                bitrateLabel: "Video Bitrate ({bitrate} Mbps):",
                bufferLabelImmediate: "Videobufferstørrelse (0 (Øjeblikkelig)):",
                bufferLabelFrames: "Videobufferstørrelse ({videoBufferSize} billeder):",
                crfLabel: "Video CRF ({crf}):",
                fullColorLabel: "Fuld Farve 4:4:4",
                streamingModeDetails: "Turbo-tilstand deaktiverer al VNC-logik og koder alle billeder som en traditionel video-encoder.",
                streamingModeLabel: "Turbo",
                useCpuLabel: "CPU-kodning",
                jpegQualityLabel: "Grundkvalitet: {jpegQuality}",
                paintOverJpegQualityLabel: "Overmalingskvalitet: {paintOverJpegQuality}"
            },
            audio: {
                title: "Lydindstillinger",
                bitrateLabel: "Lyd bitrate ({bitrate} kbps):",
                inputLabel: "Input (Mikrofon):",
                outputLabel: "Output (Højttaler):",
                outputNotSupported: "Valg af outputenhed understøttes ikke af denne browser.",
                deviceErrorDefault: "Fejl ved visning af lydenheder: {errorName}",
                deviceErrorPermission: "Adgang nægtet. Tillad venligst mikrofonadgang i browserindstillinger for at vælge enheder.",
                deviceErrorNotFound: "Ingen lydenheder fundet.",
                defaultInputLabelFallback: "Inputenhed {index}",
                defaultOutputLabelFallback: "Outputenhed {index}"
            },
            screen: {
                title: "Skærmindstillinger",
                presetLabel: "Forudindstilling:",
                resolutionPresetSelect: "-- Vælg forudindstilling --",
                widthLabel: "Bredde:",
                heightLabel: "Højde:",
                widthPlaceholder: "f.eks. 1920",
                heightPlaceholder: "f.eks. 1080",
                setManualButton: "Indstil opløsning manuelt",
                resetButton: "Nulstil til Vindue",
                scaleLocallyLabel: "Skaler lokalt:",
                scaleLocallyOn: "TIL",
                scaleLocallyOff: "FRA",
                scaleLocallyTitleEnable: "Aktiver lokal skalering (Bevar aspektforhold)",
                scaleLocallyTitleDisable: "Deaktiver lokal skalering (Brug præcis opløsning)",
                uiScalingLabel: "UI-skalering:",
                hidpiLabel: "HiDPI (Pixel Perfekt)",
                hidpiEnableTitle: "Aktivér HiDPI (Pixel Perfekt)",
                hidpiDisableTitle: "Deaktivér HiDPI (Brug CSS-skalering)"
            },
            stats: {
                title: "Statistik",
                cpuLabel: "CPU",
                gpuLabel: "GPU",
                sysMemLabel: "Systemhuk.",
                gpuMemLabel: "GPU-huk.",
                fpsLabel: "FPS",
                audioLabel: "Lyd",
                tooltipCpu: "CPU-brug: {value}%",
                tooltipGpu: "GPU-brug: {value}%",
                tooltipSysMem: "Systemhukommelse: {used} / {total}",
                tooltipGpuMem: "GPU-hukommelse: {used} / {total}",
                tooltipFps: "Klient FPS: {value}",
                tooltipAudio: "Lydbuffere: {value}",
                tooltipMemoryNA: "Utilgængelig"
            },
            clipboard: {
                title: "Udklipsholder",
                label: "Server Udklipsholder:",
                placeholder: "Indhold fra serverens udklipsholder..."
            },
            files: {
                title: "Filer",
                uploadButton: "Upload Filer",
                uploadButtonTitle: "Upload filer til den eksterne session",
                downloadButtonTitle: "Download Filer"
            },
            gamepads: {
                title: "Gamepads",
                noActivity: "Ingen fysisk gamepad-aktivitet registreret endnu...",
                touchEnableTitle: "Aktiver Touch Gamepad",
                touchDisableTitle: "Deaktiver Touch Gamepad",
                touchActiveLabel: "Touch Gamepad: TIL",
                touchInactiveLabel: "Touch Gamepad: FRA",
                physicalHiddenForTouch: "Visning af fysisk gamepad er skjult, mens touch gamepad er aktiv.",
                noActivityMobileOrEnableTouch: "Ingen fysiske gamepads. Aktiver touch gamepad eller tilslut en controller."
            },
            apps: {
                title: "Apps",
                openButtonTitle: "Administrer Apps",
                openButton: "Administrer Apps"
            },
            sharing: {
                title: "Deling"
            }
        },
        resolutionPresets: {
            "1920x1080": "1920 x 1080 (FHD)",
            "1280x720": "1280 x 720 (HD)",
            "1366x768": "1366 x 768 (Bærbar)",
            "1920x1200": "1920 x 1200 (16:10)",
            "2560x1440": "2560 x 1440 (QHD)",
            "3840x2160": "3840 x 2160 (4K UHD)",
            "1024x768": "1024 x 768 (XGA 4:3)",
            "800x600": "800 x 600 (SVGA 4:3)",
            "640x480": "640 x 480 (VGA 4:3)",
            "320x240": "320 x 240 (QVGA 4:3)"
        },
        appsModal: {
            closeAlt: "Luk app-modal",
            loading: "Indlæser apps...",
            errorLoading: "Kunne ikke indlæse app-data. Prøv venligst igen.",
            searchPlaceholder: "Søg efter apps...",
            noAppsFound: "Ingen apps fundet, der matcher din søgning.",
            backButton: "Tilbage til listen",
            installButton: "Installer",
            updateButton: "Opdater",
            removeButton: "Fjern",
            installingMessage: "Simulerer installation for: {{appName}}",
            removingMessage: "Simulerer fjernelse for: {{appName}}",
            updatingMessage: "Simulerer opdatering for: {{appName}}",
            installedBadge: "Installeret"
        },
        notifications: {
            closeButtonAlt: "Luk notifikation for {fileName}",
            uploading: "Uploader... {progress}%",
            uploadComplete: "Upload Fuldført",
            uploadFailed: "Upload Mislykkedes",
            errorPrefix: "Fejl:",
            unknownError: "Der opstod en ukendt fejl.",
            copiedTitle: "Kopieret: {label}",
            copiedMessage: "Link kopieret til udklipsholder: {textToCopy}",
            copyFailedTitle: "Kopiering Mislykkedes: {label}",
            copyFailedError: "Kunne ikke kopiere link til udklipsholder.",
            scalingTitle: "Skalering Opdateret: Handling Påkrævet",
            scalingMessage: "Ny skalering anvendt. For at se ændringer, genstart: containeren, din skrivebordssession ved at logge ud, eller den kørende applikation."
        },
        alerts: {
            invalidResolution: "Indtast venligst gyldige positive heltal for Bredde og Højde."
        },
        byteUnits: ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        zeroBytes: "0 Bytes",
        filesModal: {
            closeAlt: "Luk fil-modal",
            iframeTitle: "Downloadbare Filer"
        }
    },
    rf = {
        en: _b,
        es: xb,
        zh: wb,
        hi: Ab,
        pt: Mb,
        fr: Eb,
        ru: Cb,
        de: Lb,
        tr: kb,
        it: Db,
        nl: Bb,
        ar: Nb,
        ko: Ob,
        ja: Fb,
        vi: Kb,
        th: Rb,
        fil: Xb,
        da: Ub
    },
    d0 = (i = "en") => {
        const o = i.split("-")[0].toLowerCase(),
            r = rf[o] || rf.en,
            u = rf.en;
        return {
            t: (g, _) => {
                const y = g.split(".");
                let v = r,
                    S = u,
                    m = !0;
                for (const A of y)
                    if (v && typeof v == "object" && v.hasOwnProperty(A)) v = v[A];
                    else {
                        v = null, m = !1;
                        break
                    } if (!m || v === null) {
                    let A = !0;
                    for (const E of y)
                        if (S && typeof S == "object" && S.hasOwnProperty(E)) S = S[E];
                        else {
                            S = null, A = !1;
                            break
                        } A && S !== null ? v = S : v = null
                }
                return typeof v == "string" ? Tb(v, _) : (console.warn(`Translation key not found or invalid: ${g}`), g)
            },
            raw: r
        }
    }; /*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function I0(i) {
    return typeof i > "u" || i === null
}

function zb(i) {
    return typeof i == "object" && i !== null
}

function Pb(i) {
    return Array.isArray(i) ? i : I0(i) ? [] : [i]
}

function Hb(i, o) {
    var r, u, c, f;
    if (o)
        for (f = Object.keys(o), r = 0, u = f.length; r < u; r += 1) c = f[r], i[c] = o[c];
    return i
}

function jb(i, o) {
    var r = "",
        u;
    for (u = 0; u < o; u += 1) r += i;
    return r
}

function Gb(i) {
    return i === 0 && Number.NEGATIVE_INFINITY === 1 / i
}
var Ib = I0,
    Vb = zb,
    Yb = Pb,
    Qb = jb,
    qb = Gb,
    $b = Hb,
    yt = {
        isNothing: Ib,
        isObject: Vb,
        toArray: Yb,
        repeat: Qb,
        isNegativeZero: qb,
        extend: $b
    };

function V0(i, o) {
    var r = "",
        u = i.reason || "(unknown reason)";
    return i.mark ? (i.mark.name && (r += 'in "' + i.mark.name + '" '), r += "(" + (i.mark.line + 1) + ":" + (i.mark.column + 1) + ")", !o && i.mark.snippet && (r += `

` + i.mark.snippet), u + " " + r) : u
}

function Vs(i, o) {
    Error.call(this), this.name = "YAMLException", this.reason = i, this.mark = o, this.message = V0(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || ""
}
Vs.prototype = Object.create(Error.prototype);
Vs.prototype.constructor = Vs;
Vs.prototype.toString = function(o) {
    return this.name + ": " + V0(this, o)
};
var Yt = Vs;

function uf(i, o, r, u, c) {
    var f = "",
        g = "",
        _ = Math.floor(c / 2) - 1;
    return u - o > _ && (f = " ... ", o = u - _ + f.length), r - u > _ && (g = " ...", r = u + _ - g.length), {
        str: f + i.slice(o, r).replace(/\t/g, "→") + g,
        pos: u - o + f.length
    }
}

function cf(i, o) {
    return yt.repeat(" ", o - i.length) + i
}

function Zb(i, o) {
    if (o = Object.create(o || null), !i.buffer) return null;
    o.maxLength || (o.maxLength = 79), typeof o.indent != "number" && (o.indent = 1), typeof o.linesBefore != "number" && (o.linesBefore = 3), typeof o.linesAfter != "number" && (o.linesAfter = 2);
    for (var r = /\r?\n|\r|\0/g, u = [0], c = [], f, g = -1; f = r.exec(i.buffer);) c.push(f.index), u.push(f.index + f[0].length), i.position <= f.index && g < 0 && (g = u.length - 2);
    g < 0 && (g = u.length - 1);
    var _ = "",
        y, v, S = Math.min(i.line + o.linesAfter, c.length).toString().length,
        m = o.maxLength - (o.indent + S + 3);
    for (y = 1; y <= o.linesBefore && !(g - y < 0); y++) v = uf(i.buffer, u[g - y], c[g - y], i.position - (u[g] - u[g - y]), m), _ = yt.repeat(" ", o.indent) + cf((i.line - y + 1).toString(), S) + " | " + v.str + `
` + _;
    for (v = uf(i.buffer, u[g], c[g], i.position, m), _ += yt.repeat(" ", o.indent) + cf((i.line + 1).toString(), S) + " | " + v.str + `
`, _ += yt.repeat("-", o.indent + S + 3 + v.pos) + `^
`, y = 1; y <= o.linesAfter && !(g + y >= c.length); y++) v = uf(i.buffer, u[g + y], c[g + y], i.position - (u[g] - u[g + y]), m), _ += yt.repeat(" ", o.indent) + cf((i.line + y + 1).toString(), S) + " | " + v.str + `
`;
    return _.replace(/\n$/, "")
}
var Wb = Zb,
    Jb = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"],
    ev = ["scalar", "sequence", "mapping"];

function tv(i) {
    var o = {};
    return i !== null && Object.keys(i).forEach(function(r) {
        i[r].forEach(function(u) {
            o[String(u)] = r
        })
    }), o
}

function av(i, o) {
    if (o = o || {}, Object.keys(o).forEach(function(r) {
            if (Jb.indexOf(r) === -1) throw new Yt('Unknown option "' + r + '" is met in definition of "' + i + '" YAML type.')
        }), this.options = o, this.tag = i, this.kind = o.kind || null, this.resolve = o.resolve || function() {
            return !0
        }, this.construct = o.construct || function(r) {
            return r
        }, this.instanceOf = o.instanceOf || null, this.predicate = o.predicate || null, this.represent = o.represent || null, this.representName = o.representName || null, this.defaultStyle = o.defaultStyle || null, this.multi = o.multi || !1, this.styleAliases = tv(o.styleAliases || null), ev.indexOf(this.kind) === -1) throw new Yt('Unknown kind "' + this.kind + '" is specified for "' + i + '" YAML type.')
}
var Kt = av;

function f0(i, o) {
    var r = [];
    return i[o].forEach(function(u) {
        var c = r.length;
        r.forEach(function(f, g) {
            f.tag === u.tag && f.kind === u.kind && f.multi === u.multi && (c = g)
        }), r[c] = u
    }), r
}

function iv() {
    var i = {
            scalar: {},
            sequence: {},
            mapping: {},
            fallback: {},
            multi: {
                scalar: [],
                sequence: [],
                mapping: [],
                fallback: []
            }
        },
        o, r;

    function u(c) {
        c.multi ? (i.multi[c.kind].push(c), i.multi.fallback.push(c)) : i[c.kind][c.tag] = i.fallback[c.tag] = c
    }
    for (o = 0, r = arguments.length; o < r; o += 1) arguments[o].forEach(u);
    return i
}

function Tf(i) {
    return this.extend(i)
}
Tf.prototype.extend = function(o) {
    var r = [],
        u = [];
    if (o instanceof Kt) u.push(o);
    else if (Array.isArray(o)) u = u.concat(o);
    else if (o && (Array.isArray(o.implicit) || Array.isArray(o.explicit))) o.implicit && (r = r.concat(o.implicit)), o.explicit && (u = u.concat(o.explicit));
    else throw new Yt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    r.forEach(function(f) {
        if (!(f instanceof Kt)) throw new Yt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
        if (f.loadKind && f.loadKind !== "scalar") throw new Yt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
        if (f.multi) throw new Yt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")
    }), u.forEach(function(f) {
        if (!(f instanceof Kt)) throw new Yt("Specified list of YAML types (or a single Type object) contains a non-Type object.")
    });
    var c = Object.create(Tf.prototype);
    return c.implicit = (this.implicit || []).concat(r), c.explicit = (this.explicit || []).concat(u), c.compiledImplicit = f0(c, "implicit"), c.compiledExplicit = f0(c, "explicit"), c.compiledTypeMap = iv(c.compiledImplicit, c.compiledExplicit), c
};
var Y0 = Tf,
    Q0 = new Kt("tag:yaml.org,2002:str", {
        kind: "scalar",
        construct: function(i) {
            return i !== null ? i : ""
        }
    }),
    q0 = new Kt("tag:yaml.org,2002:seq", {
        kind: "sequence",
        construct: function(i) {
            return i !== null ? i : []
        }
    }),
    $0 = new Kt("tag:yaml.org,2002:map", {
        kind: "mapping",
        construct: function(i) {
            return i !== null ? i : {}
        }
    }),
    Z0 = new Y0({
        explicit: [Q0, q0, $0]
    });

function lv(i) {
    if (i === null) return !0;
    var o = i.length;
    return o === 1 && i === "~" || o === 4 && (i === "null" || i === "Null" || i === "NULL")
}

function nv() {
    return null
}

function ov(i) {
    return i === null
}
var W0 = new Kt("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: lv,
    construct: nv,
    predicate: ov,
    represent: {
        canonical: function() {
            return "~"
        },
        lowercase: function() {
            return "null"
        },
        uppercase: function() {
            return "NULL"
        },
        camelcase: function() {
            return "Null"
        },
        empty: function() {
            return ""
        }
    },
    defaultStyle: "lowercase"
});

function sv(i) {
    if (i === null) return !1;
    var o = i.length;
    return o === 4 && (i === "true" || i === "True" || i === "TRUE") || o === 5 && (i === "false" || i === "False" || i === "FALSE")
}

function rv(i) {
    return i === "true" || i === "True" || i === "TRUE"
}

function uv(i) {
    return Object.prototype.toString.call(i) === "[object Boolean]"
}
var J0 = new Kt("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: sv,
    construct: rv,
    predicate: uv,
    represent: {
        lowercase: function(i) {
            return i ? "true" : "false"
        },
        uppercase: function(i) {
            return i ? "TRUE" : "FALSE"
        },
        camelcase: function(i) {
            return i ? "True" : "False"
        }
    },
    defaultStyle: "lowercase"
});

function cv(i) {
    return 48 <= i && i <= 57 || 65 <= i && i <= 70 || 97 <= i && i <= 102
}

function dv(i) {
    return 48 <= i && i <= 55
}

function fv(i) {
    return 48 <= i && i <= 57
}

function pv(i) {
    if (i === null) return !1;
    var o = i.length,
        r = 0,
        u = !1,
        c;
    if (!o) return !1;
    if (c = i[r], (c === "-" || c === "+") && (c = i[++r]), c === "0") {
        if (r + 1 === o) return !0;
        if (c = i[++r], c === "b") {
            for (r++; r < o; r++)
                if (c = i[r], c !== "_") {
                    if (c !== "0" && c !== "1") return !1;
                    u = !0
                } return u && c !== "_"
        }
        if (c === "x") {
            for (r++; r < o; r++)
                if (c = i[r], c !== "_") {
                    if (!cv(i.charCodeAt(r))) return !1;
                    u = !0
                } return u && c !== "_"
        }
        if (c === "o") {
            for (r++; r < o; r++)
                if (c = i[r], c !== "_") {
                    if (!dv(i.charCodeAt(r))) return !1;
                    u = !0
                } return u && c !== "_"
        }
    }
    if (c === "_") return !1;
    for (; r < o; r++)
        if (c = i[r], c !== "_") {
            if (!fv(i.charCodeAt(r))) return !1;
            u = !0
        } return !(!u || c === "_")
}

function hv(i) {
    var o = i,
        r = 1,
        u;
    if (o.indexOf("_") !== -1 && (o = o.replace(/_/g, "")), u = o[0], (u === "-" || u === "+") && (u === "-" && (r = -1), o = o.slice(1), u = o[0]), o === "0") return 0;
    if (u === "0") {
        if (o[1] === "b") return r * parseInt(o.slice(2), 2);
        if (o[1] === "x") return r * parseInt(o.slice(2), 16);
        if (o[1] === "o") return r * parseInt(o.slice(2), 8)
    }
    return r * parseInt(o, 10)
}

function gv(i) {
    return Object.prototype.toString.call(i) === "[object Number]" && i % 1 === 0 && !yt.isNegativeZero(i)
}
var em = new Kt("tag:yaml.org,2002:int", {
        kind: "scalar",
        resolve: pv,
        construct: hv,
        predicate: gv,
        represent: {
            binary: function(i) {
                return i >= 0 ? "0b" + i.toString(2) : "-0b" + i.toString(2).slice(1)
            },
            octal: function(i) {
                return i >= 0 ? "0o" + i.toString(8) : "-0o" + i.toString(8).slice(1)
            },
            decimal: function(i) {
                return i.toString(10)
            },
            hexadecimal: function(i) {
                return i >= 0 ? "0x" + i.toString(16).toUpperCase() : "-0x" + i.toString(16).toUpperCase().slice(1)
            }
        },
        defaultStyle: "decimal",
        styleAliases: {
            binary: [2, "bin"],
            octal: [8, "oct"],
            decimal: [10, "dec"],
            hexadecimal: [16, "hex"]
        }
    }),
    mv = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");

function bv(i) {
    return !(i === null || !mv.test(i) || i[i.length - 1] === "_")
}

function vv(i) {
    var o, r;
    return o = i.replace(/_/g, "").toLowerCase(), r = o[0] === "-" ? -1 : 1, "+-".indexOf(o[0]) >= 0 && (o = o.slice(1)), o === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : o === ".nan" ? NaN : r * parseFloat(o, 10)
}
var yv = /^[-+]?[0-9]+e/;

function Sv(i, o) {
    var r;
    if (isNaN(i)) switch (o) {
        case "lowercase":
            return ".nan";
        case "uppercase":
            return ".NAN";
        case "camelcase":
            return ".NaN"
    } else if (Number.POSITIVE_INFINITY === i) switch (o) {
        case "lowercase":
            return ".inf";
        case "uppercase":
            return ".INF";
        case "camelcase":
            return ".Inf"
    } else if (Number.NEGATIVE_INFINITY === i) switch (o) {
        case "lowercase":
            return "-.inf";
        case "uppercase":
            return "-.INF";
        case "camelcase":
            return "-.Inf"
    } else if (yt.isNegativeZero(i)) return "-0.0";
    return r = i.toString(10), yv.test(r) ? r.replace("e", ".e") : r
}

function Tv(i) {
    return Object.prototype.toString.call(i) === "[object Number]" && (i % 1 !== 0 || yt.isNegativeZero(i))
}
var tm = new Kt("tag:yaml.org,2002:float", {
        kind: "scalar",
        resolve: bv,
        construct: vv,
        predicate: Tv,
        represent: Sv,
        defaultStyle: "lowercase"
    }),
    am = Z0.extend({
        implicit: [W0, J0, em, tm]
    }),
    im = am,
    lm = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),
    nm = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");

function _v(i) {
    return i === null ? !1 : lm.exec(i) !== null || nm.exec(i) !== null
}

function xv(i) {
    var o, r, u, c, f, g, _, y = 0,
        v = null,
        S, m, A;
    if (o = lm.exec(i), o === null && (o = nm.exec(i)), o === null) throw new Error("Date resolve error");
    if (r = +o[1], u = +o[2] - 1, c = +o[3], !o[4]) return new Date(Date.UTC(r, u, c));
    if (f = +o[4], g = +o[5], _ = +o[6], o[7]) {
        for (y = o[7].slice(0, 3); y.length < 3;) y += "0";
        y = +y
    }
    return o[9] && (S = +o[10], m = +(o[11] || 0), v = (S * 60 + m) * 6e4, o[9] === "-" && (v = -v)), A = new Date(Date.UTC(r, u, c, f, g, _, y)), v && A.setTime(A.getTime() - v), A
}

function wv(i) {
    return i.toISOString()
}
var om = new Kt("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: _v,
    construct: xv,
    instanceOf: Date,
    represent: wv
});

function Av(i) {
    return i === "<<" || i === null
}
var sm = new Kt("tag:yaml.org,2002:merge", {
        kind: "scalar",
        resolve: Av
    }),
    Ff = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;

function Mv(i) {
    if (i === null) return !1;
    var o, r, u = 0,
        c = i.length,
        f = Ff;
    for (r = 0; r < c; r++)
        if (o = f.indexOf(i.charAt(r)), !(o > 64)) {
            if (o < 0) return !1;
            u += 6
        } return u % 8 === 0
}

function Ev(i) {
    var o, r, u = i.replace(/[\r\n=]/g, ""),
        c = u.length,
        f = Ff,
        g = 0,
        _ = [];
    for (o = 0; o < c; o++) o % 4 === 0 && o && (_.push(g >> 16 & 255), _.push(g >> 8 & 255), _.push(g & 255)), g = g << 6 | f.indexOf(u.charAt(o));
    return r = c % 4 * 6, r === 0 ? (_.push(g >> 16 & 255), _.push(g >> 8 & 255), _.push(g & 255)) : r === 18 ? (_.push(g >> 10 & 255), _.push(g >> 2 & 255)) : r === 12 && _.push(g >> 4 & 255), new Uint8Array(_)
}

function Cv(i) {
    var o = "",
        r = 0,
        u, c, f = i.length,
        g = Ff;
    for (u = 0; u < f; u++) u % 3 === 0 && u && (o += g[r >> 18 & 63], o += g[r >> 12 & 63], o += g[r >> 6 & 63], o += g[r & 63]), r = (r << 8) + i[u];
    return c = f % 3, c === 0 ? (o += g[r >> 18 & 63], o += g[r >> 12 & 63], o += g[r >> 6 & 63], o += g[r & 63]) : c === 2 ? (o += g[r >> 10 & 63], o += g[r >> 4 & 63], o += g[r << 2 & 63], o += g[64]) : c === 1 && (o += g[r >> 2 & 63], o += g[r << 4 & 63], o += g[64], o += g[64]), o
}

function Lv(i) {
    return Object.prototype.toString.call(i) === "[object Uint8Array]"
}
var rm = new Kt("tag:yaml.org,2002:binary", {
        kind: "scalar",
        resolve: Mv,
        construct: Ev,
        predicate: Lv,
        represent: Cv
    }),
    kv = Object.prototype.hasOwnProperty,
    Dv = Object.prototype.toString;

function Bv(i) {
    if (i === null) return !0;
    var o = [],
        r, u, c, f, g, _ = i;
    for (r = 0, u = _.length; r < u; r += 1) {
        if (c = _[r], g = !1, Dv.call(c) !== "[object Object]") return !1;
        for (f in c)
            if (kv.call(c, f))
                if (!g) g = !0;
                else return !1;
        if (!g) return !1;
        if (o.indexOf(f) === -1) o.push(f);
        else return !1
    }
    return !0
}

function Nv(i) {
    return i !== null ? i : []
}
var um = new Kt("tag:yaml.org,2002:omap", {
        kind: "sequence",
        resolve: Bv,
        construct: Nv
    }),
    Ov = Object.prototype.toString;

function Fv(i) {
    if (i === null) return !0;
    var o, r, u, c, f, g = i;
    for (f = new Array(g.length), o = 0, r = g.length; o < r; o += 1) {
        if (u = g[o], Ov.call(u) !== "[object Object]" || (c = Object.keys(u), c.length !== 1)) return !1;
        f[o] = [c[0], u[c[0]]]
    }
    return !0
}

function Kv(i) {
    if (i === null) return [];
    var o, r, u, c, f, g = i;
    for (f = new Array(g.length), o = 0, r = g.length; o < r; o += 1) u = g[o], c = Object.keys(u), f[o] = [c[0], u[c[0]]];
    return f
}
var cm = new Kt("tag:yaml.org,2002:pairs", {
        kind: "sequence",
        resolve: Fv,
        construct: Kv
    }),
    Rv = Object.prototype.hasOwnProperty;

function Xv(i) {
    if (i === null) return !0;
    var o, r = i;
    for (o in r)
        if (Rv.call(r, o) && r[o] !== null) return !1;
    return !0
}

function Uv(i) {
    return i !== null ? i : {}
}
var dm = new Kt("tag:yaml.org,2002:set", {
        kind: "mapping",
        resolve: Xv,
        construct: Uv
    }),
    Kf = im.extend({
        implicit: [om, sm],
        explicit: [rm, um, cm, dm]
    }),
    Sl = Object.prototype.hasOwnProperty,
    Bu = 1,
    fm = 2,
    pm = 3,
    Nu = 4,
    df = 1,
    zv = 2,
    p0 = 3,
    Pv = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
    Hv = /[\x85\u2028\u2029]/,
    jv = /[,\[\]\{\}]/,
    hm = /^(?:!|!!|![a-z\-]+!)$/i,
    gm = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;

function h0(i) {
    return Object.prototype.toString.call(i)
}

function Wa(i) {
    return i === 10 || i === 13
}

function en(i) {
    return i === 9 || i === 32
}

function ia(i) {
    return i === 9 || i === 32 || i === 10 || i === 13
}

function ro(i) {
    return i === 44 || i === 91 || i === 93 || i === 123 || i === 125
}

function Gv(i) {
    var o;
    return 48 <= i && i <= 57 ? i - 48 : (o = i | 32, 97 <= o && o <= 102 ? o - 97 + 10 : -1)
}

function Iv(i) {
    return i === 120 ? 2 : i === 117 ? 4 : i === 85 ? 8 : 0
}

function Vv(i) {
    return 48 <= i && i <= 57 ? i - 48 : -1
}

function g0(i) {
    return i === 48 ? "\0" : i === 97 ? "\x07" : i === 98 ? "\b" : i === 116 || i === 9 ? "	" : i === 110 ? `
` : i === 118 ? "\v" : i === 102 ? "\f" : i === 114 ? "\r" : i === 101 ? "\x1B" : i === 32 ? " " : i === 34 ? '"' : i === 47 ? "/" : i === 92 ? "\\" : i === 78 ? "" : i === 95 ? " " : i === 76 ? "\u2028" : i === 80 ? "\u2029" : ""
}

function Yv(i) {
    return i <= 65535 ? String.fromCharCode(i) : String.fromCharCode((i - 65536 >> 10) + 55296, (i - 65536 & 1023) + 56320)
}
var mm = new Array(256),
    bm = new Array(256);
for (var io = 0; io < 256; io++) mm[io] = g0(io) ? 1 : 0, bm[io] = g0(io);

function Qv(i, o) {
    this.input = i, this.filename = o.filename || null, this.schema = o.schema || Kf, this.onWarning = o.onWarning || null, this.legacy = o.legacy || !1, this.json = o.json || !1, this.listener = o.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = i.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = []
}

function vm(i, o) {
    var r = {
        name: i.filename,
        buffer: i.input.slice(0, -1),
        position: i.position,
        line: i.line,
        column: i.position - i.lineStart
    };
    return r.snippet = Wb(r), new Yt(o, r)
}

function oe(i, o) {
    throw vm(i, o)
}

function Ou(i, o) {
    i.onWarning && i.onWarning.call(null, vm(i, o))
}
var m0 = {
    YAML: function(o, r, u) {
        var c, f, g;
        o.version !== null && oe(o, "duplication of %YAML directive"), u.length !== 1 && oe(o, "YAML directive accepts exactly one argument"), c = /^([0-9]+)\.([0-9]+)$/.exec(u[0]), c === null && oe(o, "ill-formed argument of the YAML directive"), f = parseInt(c[1], 10), g = parseInt(c[2], 10), f !== 1 && oe(o, "unacceptable YAML version of the document"), o.version = u[0], o.checkLineBreaks = g < 2, g !== 1 && g !== 2 && Ou(o, "unsupported YAML version of the document")
    },
    TAG: function(o, r, u) {
        var c, f;
        u.length !== 2 && oe(o, "TAG directive accepts exactly two arguments"), c = u[0], f = u[1], hm.test(c) || oe(o, "ill-formed tag handle (first argument) of the TAG directive"), Sl.call(o.tagMap, c) && oe(o, 'there is a previously declared suffix for "' + c + '" tag handle'), gm.test(f) || oe(o, "ill-formed tag prefix (second argument) of the TAG directive");
        try {
            f = decodeURIComponent(f)
        } catch {
            oe(o, "tag prefix is malformed: " + f)
        }
        o.tagMap[c] = f
    }
};

function yl(i, o, r, u) {
    var c, f, g, _;
    if (o < r) {
        if (_ = i.input.slice(o, r), u)
            for (c = 0, f = _.length; c < f; c += 1) g = _.charCodeAt(c), g === 9 || 32 <= g && g <= 1114111 || oe(i, "expected valid JSON character");
        else Pv.test(_) && oe(i, "the stream contains non-printable characters");
        i.result += _
    }
}

function b0(i, o, r, u) {
    var c, f, g, _;
    for (yt.isObject(r) || oe(i, "cannot merge mappings; the provided source object is unacceptable"), c = Object.keys(r), g = 0, _ = c.length; g < _; g += 1) f = c[g], Sl.call(o, f) || (o[f] = r[f], u[f] = !0)
}

function uo(i, o, r, u, c, f, g, _, y) {
    var v, S;
    if (Array.isArray(c))
        for (c = Array.prototype.slice.call(c), v = 0, S = c.length; v < S; v += 1) Array.isArray(c[v]) && oe(i, "nested arrays are not supported inside keys"), typeof c == "object" && h0(c[v]) === "[object Object]" && (c[v] = "[object Object]");
    if (typeof c == "object" && h0(c) === "[object Object]" && (c = "[object Object]"), c = String(c), o === null && (o = {}), u === "tag:yaml.org,2002:merge")
        if (Array.isArray(f))
            for (v = 0, S = f.length; v < S; v += 1) b0(i, o, f[v], r);
        else b0(i, o, f, r);
    else !i.json && !Sl.call(r, c) && Sl.call(o, c) && (i.line = g || i.line, i.lineStart = _ || i.lineStart, i.position = y || i.position, oe(i, "duplicated mapping key")), c === "__proto__" ? Object.defineProperty(o, c, {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: f
    }) : o[c] = f, delete r[c];
    return o
}

function Rf(i) {
    var o;
    o = i.input.charCodeAt(i.position), o === 10 ? i.position++ : o === 13 ? (i.position++, i.input.charCodeAt(i.position) === 10 && i.position++) : oe(i, "a line break is expected"), i.line += 1, i.lineStart = i.position, i.firstTabInLine = -1
}

function pt(i, o, r) {
    for (var u = 0, c = i.input.charCodeAt(i.position); c !== 0;) {
        for (; en(c);) c === 9 && i.firstTabInLine === -1 && (i.firstTabInLine = i.position), c = i.input.charCodeAt(++i.position);
        if (o && c === 35)
            do c = i.input.charCodeAt(++i.position); while (c !== 10 && c !== 13 && c !== 0);
        if (Wa(c))
            for (Rf(i), c = i.input.charCodeAt(i.position), u++, i.lineIndent = 0; c === 32;) i.lineIndent++, c = i.input.charCodeAt(++i.position);
        else break
    }
    return r !== -1 && u !== 0 && i.lineIndent < r && Ou(i, "deficient indentation"), u
}

function Uu(i) {
    var o = i.position,
        r;
    return r = i.input.charCodeAt(o), !!((r === 45 || r === 46) && r === i.input.charCodeAt(o + 1) && r === i.input.charCodeAt(o + 2) && (o += 3, r = i.input.charCodeAt(o), r === 0 || ia(r)))
}

function Xf(i, o) {
    o === 1 ? i.result += " " : o > 1 && (i.result += yt.repeat(`
`, o - 1))
}

function qv(i, o, r) {
    var u, c, f, g, _, y, v, S, m = i.kind,
        A = i.result,
        E;
    if (E = i.input.charCodeAt(i.position), ia(E) || ro(E) || E === 35 || E === 38 || E === 42 || E === 33 || E === 124 || E === 62 || E === 39 || E === 34 || E === 37 || E === 64 || E === 96 || (E === 63 || E === 45) && (c = i.input.charCodeAt(i.position + 1), ia(c) || r && ro(c))) return !1;
    for (i.kind = "scalar", i.result = "", f = g = i.position, _ = !1; E !== 0;) {
        if (E === 58) {
            if (c = i.input.charCodeAt(i.position + 1), ia(c) || r && ro(c)) break
        } else if (E === 35) {
            if (u = i.input.charCodeAt(i.position - 1), ia(u)) break
        } else {
            if (i.position === i.lineStart && Uu(i) || r && ro(E)) break;
            if (Wa(E))
                if (y = i.line, v = i.lineStart, S = i.lineIndent, pt(i, !1, -1), i.lineIndent >= o) {
                    _ = !0, E = i.input.charCodeAt(i.position);
                    continue
                } else {
                    i.position = g, i.line = y, i.lineStart = v, i.lineIndent = S;
                    break
                }
        }
        _ && (yl(i, f, g, !1), Xf(i, i.line - y), f = g = i.position, _ = !1), en(E) || (g = i.position + 1), E = i.input.charCodeAt(++i.position)
    }
    return yl(i, f, g, !1), i.result ? !0 : (i.kind = m, i.result = A, !1)
}

function $v(i, o) {
    var r, u, c;
    if (r = i.input.charCodeAt(i.position), r !== 39) return !1;
    for (i.kind = "scalar", i.result = "", i.position++, u = c = i.position;
        (r = i.input.charCodeAt(i.position)) !== 0;)
        if (r === 39)
            if (yl(i, u, i.position, !0), r = i.input.charCodeAt(++i.position), r === 39) u = i.position, i.position++, c = i.position;
            else return !0;
    else Wa(r) ? (yl(i, u, c, !0), Xf(i, pt(i, !1, o)), u = c = i.position) : i.position === i.lineStart && Uu(i) ? oe(i, "unexpected end of the document within a single quoted scalar") : (i.position++, c = i.position);
    oe(i, "unexpected end of the stream within a single quoted scalar")
}

function Zv(i, o) {
    var r, u, c, f, g, _;
    if (_ = i.input.charCodeAt(i.position), _ !== 34) return !1;
    for (i.kind = "scalar", i.result = "", i.position++, r = u = i.position;
        (_ = i.input.charCodeAt(i.position)) !== 0;) {
        if (_ === 34) return yl(i, r, i.position, !0), i.position++, !0;
        if (_ === 92) {
            if (yl(i, r, i.position, !0), _ = i.input.charCodeAt(++i.position), Wa(_)) pt(i, !1, o);
            else if (_ < 256 && mm[_]) i.result += bm[_], i.position++;
            else if ((g = Iv(_)) > 0) {
                for (c = g, f = 0; c > 0; c--) _ = i.input.charCodeAt(++i.position), (g = Gv(_)) >= 0 ? f = (f << 4) + g : oe(i, "expected hexadecimal character");
                i.result += Yv(f), i.position++
            } else oe(i, "unknown escape sequence");
            r = u = i.position
        } else Wa(_) ? (yl(i, r, u, !0), Xf(i, pt(i, !1, o)), r = u = i.position) : i.position === i.lineStart && Uu(i) ? oe(i, "unexpected end of the document within a double quoted scalar") : (i.position++, u = i.position)
    }
    oe(i, "unexpected end of the stream within a double quoted scalar")
}

function Wv(i, o) {
    var r = !0,
        u, c, f, g = i.tag,
        _, y = i.anchor,
        v, S, m, A, E, D = Object.create(null),
        F, R, Q, q;
    if (q = i.input.charCodeAt(i.position), q === 91) S = 93, E = !1, _ = [];
    else if (q === 123) S = 125, E = !0, _ = {};
    else return !1;
    for (i.anchor !== null && (i.anchorMap[i.anchor] = _), q = i.input.charCodeAt(++i.position); q !== 0;) {
        if (pt(i, !0, o), q = i.input.charCodeAt(i.position), q === S) return i.position++, i.tag = g, i.anchor = y, i.kind = E ? "mapping" : "sequence", i.result = _, !0;
        r ? q === 44 && oe(i, "expected the node content, but found ','") : oe(i, "missed comma between flow collection entries"), R = F = Q = null, m = A = !1, q === 63 && (v = i.input.charCodeAt(i.position + 1), ia(v) && (m = A = !0, i.position++, pt(i, !0, o))), u = i.line, c = i.lineStart, f = i.position, To(i, o, Bu, !1, !0), R = i.tag, F = i.result, pt(i, !0, o), q = i.input.charCodeAt(i.position), (A || i.line === u) && q === 58 && (m = !0, q = i.input.charCodeAt(++i.position), pt(i, !0, o), To(i, o, Bu, !1, !0), Q = i.result), E ? uo(i, _, D, R, F, Q, u, c, f) : m ? _.push(uo(i, null, D, R, F, Q, u, c, f)) : _.push(F), pt(i, !0, o), q = i.input.charCodeAt(i.position), q === 44 ? (r = !0, q = i.input.charCodeAt(++i.position)) : r = !1
    }
    oe(i, "unexpected end of the stream within a flow collection")
}

function Jv(i, o) {
    var r, u, c = df,
        f = !1,
        g = !1,
        _ = o,
        y = 0,
        v = !1,
        S, m;
    if (m = i.input.charCodeAt(i.position), m === 124) u = !1;
    else if (m === 62) u = !0;
    else return !1;
    for (i.kind = "scalar", i.result = ""; m !== 0;)
        if (m = i.input.charCodeAt(++i.position), m === 43 || m === 45) df === c ? c = m === 43 ? p0 : zv : oe(i, "repeat of a chomping mode identifier");
        else if ((S = Vv(m)) >= 0) S === 0 ? oe(i, "bad explicit indentation width of a block scalar; it cannot be less than one") : g ? oe(i, "repeat of an indentation width identifier") : (_ = o + S - 1, g = !0);
    else break;
    if (en(m)) {
        do m = i.input.charCodeAt(++i.position); while (en(m));
        if (m === 35)
            do m = i.input.charCodeAt(++i.position); while (!Wa(m) && m !== 0)
    }
    for (; m !== 0;) {
        for (Rf(i), i.lineIndent = 0, m = i.input.charCodeAt(i.position);
            (!g || i.lineIndent < _) && m === 32;) i.lineIndent++, m = i.input.charCodeAt(++i.position);
        if (!g && i.lineIndent > _ && (_ = i.lineIndent), Wa(m)) {
            y++;
            continue
        }
        if (i.lineIndent < _) {
            c === p0 ? i.result += yt.repeat(`
`, f ? 1 + y : y) : c === df && f && (i.result += `
`);
            break
        }
        for (u ? en(m) ? (v = !0, i.result += yt.repeat(`
`, f ? 1 + y : y)) : v ? (v = !1, i.result += yt.repeat(`
`, y + 1)) : y === 0 ? f && (i.result += " ") : i.result += yt.repeat(`
`, y) : i.result += yt.repeat(`
`, f ? 1 + y : y), f = !0, g = !0, y = 0, r = i.position; !Wa(m) && m !== 0;) m = i.input.charCodeAt(++i.position);
        yl(i, r, i.position, !1)
    }
    return !0
}

function v0(i, o) {
    var r, u = i.tag,
        c = i.anchor,
        f = [],
        g, _ = !1,
        y;
    if (i.firstTabInLine !== -1) return !1;
    for (i.anchor !== null && (i.anchorMap[i.anchor] = f), y = i.input.charCodeAt(i.position); y !== 0 && (i.firstTabInLine !== -1 && (i.position = i.firstTabInLine, oe(i, "tab characters must not be used in indentation")), !(y !== 45 || (g = i.input.charCodeAt(i.position + 1), !ia(g))));) {
        if (_ = !0, i.position++, pt(i, !0, -1) && i.lineIndent <= o) {
            f.push(null), y = i.input.charCodeAt(i.position);
            continue
        }
        if (r = i.line, To(i, o, pm, !1, !0), f.push(i.result), pt(i, !0, -1), y = i.input.charCodeAt(i.position), (i.line === r || i.lineIndent > o) && y !== 0) oe(i, "bad indentation of a sequence entry");
        else if (i.lineIndent < o) break
    }
    return _ ? (i.tag = u, i.anchor = c, i.kind = "sequence", i.result = f, !0) : !1
}

function ey(i, o, r) {
    var u, c, f, g, _, y, v = i.tag,
        S = i.anchor,
        m = {},
        A = Object.create(null),
        E = null,
        D = null,
        F = null,
        R = !1,
        Q = !1,
        q;
    if (i.firstTabInLine !== -1) return !1;
    for (i.anchor !== null && (i.anchorMap[i.anchor] = m), q = i.input.charCodeAt(i.position); q !== 0;) {
        if (!R && i.firstTabInLine !== -1 && (i.position = i.firstTabInLine, oe(i, "tab characters must not be used in indentation")), u = i.input.charCodeAt(i.position + 1), f = i.line, (q === 63 || q === 58) && ia(u)) q === 63 ? (R && (uo(i, m, A, E, D, null, g, _, y), E = D = F = null), Q = !0, R = !0, c = !0) : R ? (R = !1, c = !0) : oe(i, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), i.position += 1, q = u;
        else {
            if (g = i.line, _ = i.lineStart, y = i.position, !To(i, r, fm, !1, !0)) break;
            if (i.line === f) {
                for (q = i.input.charCodeAt(i.position); en(q);) q = i.input.charCodeAt(++i.position);
                if (q === 58) q = i.input.charCodeAt(++i.position), ia(q) || oe(i, "a whitespace character is expected after the key-value separator within a block mapping"), R && (uo(i, m, A, E, D, null, g, _, y), E = D = F = null), Q = !0, R = !1, c = !1, E = i.tag, D = i.result;
                else if (Q) oe(i, "can not read an implicit mapping pair; a colon is missed");
                else return i.tag = v, i.anchor = S, !0
            } else if (Q) oe(i, "can not read a block mapping entry; a multiline key may not be an implicit key");
            else return i.tag = v, i.anchor = S, !0
        }
        if ((i.line === f || i.lineIndent > o) && (R && (g = i.line, _ = i.lineStart, y = i.position), To(i, o, Nu, !0, c) && (R ? D = i.result : F = i.result), R || (uo(i, m, A, E, D, F, g, _, y), E = D = F = null), pt(i, !0, -1), q = i.input.charCodeAt(i.position)), (i.line === f || i.lineIndent > o) && q !== 0) oe(i, "bad indentation of a mapping entry");
        else if (i.lineIndent < o) break
    }
    return R && uo(i, m, A, E, D, null, g, _, y), Q && (i.tag = v, i.anchor = S, i.kind = "mapping", i.result = m), Q
}

function ty(i) {
    var o, r = !1,
        u = !1,
        c, f, g;
    if (g = i.input.charCodeAt(i.position), g !== 33) return !1;
    if (i.tag !== null && oe(i, "duplication of a tag property"), g = i.input.charCodeAt(++i.position), g === 60 ? (r = !0, g = i.input.charCodeAt(++i.position)) : g === 33 ? (u = !0, c = "!!", g = i.input.charCodeAt(++i.position)) : c = "!", o = i.position, r) {
        do g = i.input.charCodeAt(++i.position); while (g !== 0 && g !== 62);
        i.position < i.length ? (f = i.input.slice(o, i.position), g = i.input.charCodeAt(++i.position)) : oe(i, "unexpected end of the stream within a verbatim tag")
    } else {
        for (; g !== 0 && !ia(g);) g === 33 && (u ? oe(i, "tag suffix cannot contain exclamation marks") : (c = i.input.slice(o - 1, i.position + 1), hm.test(c) || oe(i, "named tag handle cannot contain such characters"), u = !0, o = i.position + 1)), g = i.input.charCodeAt(++i.position);
        f = i.input.slice(o, i.position), jv.test(f) && oe(i, "tag suffix cannot contain flow indicator characters")
    }
    f && !gm.test(f) && oe(i, "tag name cannot contain such characters: " + f);
    try {
        f = decodeURIComponent(f)
    } catch {
        oe(i, "tag name is malformed: " + f)
    }
    return r ? i.tag = f : Sl.call(i.tagMap, c) ? i.tag = i.tagMap[c] + f : c === "!" ? i.tag = "!" + f : c === "!!" ? i.tag = "tag:yaml.org,2002:" + f : oe(i, 'undeclared tag handle "' + c + '"'), !0
}

function ay(i) {
    var o, r;
    if (r = i.input.charCodeAt(i.position), r !== 38) return !1;
    for (i.anchor !== null && oe(i, "duplication of an anchor property"), r = i.input.charCodeAt(++i.position), o = i.position; r !== 0 && !ia(r) && !ro(r);) r = i.input.charCodeAt(++i.position);
    return i.position === o && oe(i, "name of an anchor node must contain at least one character"), i.anchor = i.input.slice(o, i.position), !0
}

function iy(i) {
    var o, r, u;
    if (u = i.input.charCodeAt(i.position), u !== 42) return !1;
    for (u = i.input.charCodeAt(++i.position), o = i.position; u !== 0 && !ia(u) && !ro(u);) u = i.input.charCodeAt(++i.position);
    return i.position === o && oe(i, "name of an alias node must contain at least one character"), r = i.input.slice(o, i.position), Sl.call(i.anchorMap, r) || oe(i, 'unidentified alias "' + r + '"'), i.result = i.anchorMap[r], pt(i, !0, -1), !0
}

function To(i, o, r, u, c) {
    var f, g, _, y = 1,
        v = !1,
        S = !1,
        m, A, E, D, F, R;
    if (i.listener !== null && i.listener("open", i), i.tag = null, i.anchor = null, i.kind = null, i.result = null, f = g = _ = Nu === r || pm === r, u && pt(i, !0, -1) && (v = !0, i.lineIndent > o ? y = 1 : i.lineIndent === o ? y = 0 : i.lineIndent < o && (y = -1)), y === 1)
        for (; ty(i) || ay(i);) pt(i, !0, -1) ? (v = !0, _ = f, i.lineIndent > o ? y = 1 : i.lineIndent === o ? y = 0 : i.lineIndent < o && (y = -1)) : _ = !1;
    if (_ && (_ = v || c), (y === 1 || Nu === r) && (Bu === r || fm === r ? F = o : F = o + 1, R = i.position - i.lineStart, y === 1 ? _ && (v0(i, R) || ey(i, R, F)) || Wv(i, F) ? S = !0 : (g && Jv(i, F) || $v(i, F) || Zv(i, F) ? S = !0 : iy(i) ? (S = !0, (i.tag !== null || i.anchor !== null) && oe(i, "alias node should not have any properties")) : qv(i, F, Bu === r) && (S = !0, i.tag === null && (i.tag = "?")), i.anchor !== null && (i.anchorMap[i.anchor] = i.result)) : y === 0 && (S = _ && v0(i, R))), i.tag === null) i.anchor !== null && (i.anchorMap[i.anchor] = i.result);
    else if (i.tag === "?") {
        for (i.result !== null && i.kind !== "scalar" && oe(i, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + i.kind + '"'), m = 0, A = i.implicitTypes.length; m < A; m += 1)
            if (D = i.implicitTypes[m], D.resolve(i.result)) {
                i.result = D.construct(i.result), i.tag = D.tag, i.anchor !== null && (i.anchorMap[i.anchor] = i.result);
                break
            }
    } else if (i.tag !== "!") {
        if (Sl.call(i.typeMap[i.kind || "fallback"], i.tag)) D = i.typeMap[i.kind || "fallback"][i.tag];
        else
            for (D = null, E = i.typeMap.multi[i.kind || "fallback"], m = 0, A = E.length; m < A; m += 1)
                if (i.tag.slice(0, E[m].tag.length) === E[m].tag) {
                    D = E[m];
                    break
                } D || oe(i, "unknown tag !<" + i.tag + ">"), i.result !== null && D.kind !== i.kind && oe(i, "unacceptable node kind for !<" + i.tag + '> tag; it should be "' + D.kind + '", not "' + i.kind + '"'), D.resolve(i.result, i.tag) ? (i.result = D.construct(i.result, i.tag), i.anchor !== null && (i.anchorMap[i.anchor] = i.result)) : oe(i, "cannot resolve a node with !<" + i.tag + "> explicit tag")
    }
    return i.listener !== null && i.listener("close", i), i.tag !== null || i.anchor !== null || S
}

function ly(i) {
    var o = i.position,
        r, u, c, f = !1,
        g;
    for (i.version = null, i.checkLineBreaks = i.legacy, i.tagMap = Object.create(null), i.anchorMap = Object.create(null);
        (g = i.input.charCodeAt(i.position)) !== 0 && (pt(i, !0, -1), g = i.input.charCodeAt(i.position), !(i.lineIndent > 0 || g !== 37));) {
        for (f = !0, g = i.input.charCodeAt(++i.position), r = i.position; g !== 0 && !ia(g);) g = i.input.charCodeAt(++i.position);
        for (u = i.input.slice(r, i.position), c = [], u.length < 1 && oe(i, "directive name must not be less than one character in length"); g !== 0;) {
            for (; en(g);) g = i.input.charCodeAt(++i.position);
            if (g === 35) {
                do g = i.input.charCodeAt(++i.position); while (g !== 0 && !Wa(g));
                break
            }
            if (Wa(g)) break;
            for (r = i.position; g !== 0 && !ia(g);) g = i.input.charCodeAt(++i.position);
            c.push(i.input.slice(r, i.position))
        }
        g !== 0 && Rf(i), Sl.call(m0, u) ? m0[u](i, u, c) : Ou(i, 'unknown document directive "' + u + '"')
    }
    if (pt(i, !0, -1), i.lineIndent === 0 && i.input.charCodeAt(i.position) === 45 && i.input.charCodeAt(i.position + 1) === 45 && i.input.charCodeAt(i.position + 2) === 45 ? (i.position += 3, pt(i, !0, -1)) : f && oe(i, "directives end mark is expected"), To(i, i.lineIndent - 1, Nu, !1, !0), pt(i, !0, -1), i.checkLineBreaks && Hv.test(i.input.slice(o, i.position)) && Ou(i, "non-ASCII line breaks are interpreted as content"), i.documents.push(i.result), i.position === i.lineStart && Uu(i)) {
        i.input.charCodeAt(i.position) === 46 && (i.position += 3, pt(i, !0, -1));
        return
    }
    if (i.position < i.length - 1) oe(i, "end of the stream or a document separator is expected");
    else return
}

function ym(i, o) {
    i = String(i), o = o || {}, i.length !== 0 && (i.charCodeAt(i.length - 1) !== 10 && i.charCodeAt(i.length - 1) !== 13 && (i += `
`), i.charCodeAt(0) === 65279 && (i = i.slice(1)));
    var r = new Qv(i, o),
        u = i.indexOf("\0");
    for (u !== -1 && (r.position = u, oe(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32;) r.lineIndent += 1, r.position += 1;
    for (; r.position < r.length - 1;) ly(r);
    return r.documents
}

function ny(i, o, r) {
    o !== null && typeof o == "object" && typeof r > "u" && (r = o, o = null);
    var u = ym(i, r);
    if (typeof o != "function") return u;
    for (var c = 0, f = u.length; c < f; c += 1) o(u[c])
}

function oy(i, o) {
    var r = ym(i, o);
    if (r.length !== 0) {
        if (r.length === 1) return r[0];
        throw new Yt("expected a single document in the stream, but found more")
    }
}
var sy = ny,
    ry = oy,
    Sm = {
        loadAll: sy,
        load: ry
    },
    Tm = Object.prototype.toString,
    _m = Object.prototype.hasOwnProperty,
    Uf = 65279,
    uy = 9,
    Ys = 10,
    cy = 13,
    dy = 32,
    fy = 33,
    py = 34,
    _f = 35,
    hy = 37,
    gy = 38,
    my = 39,
    by = 42,
    xm = 44,
    vy = 45,
    Fu = 58,
    yy = 61,
    Sy = 62,
    Ty = 63,
    _y = 64,
    wm = 91,
    Am = 93,
    xy = 96,
    Mm = 123,
    wy = 124,
    Em = 125,
    jt = {};
jt[0] = "\\0";
jt[7] = "\\a";
jt[8] = "\\b";
jt[9] = "\\t";
jt[10] = "\\n";
jt[11] = "\\v";
jt[12] = "\\f";
jt[13] = "\\r";
jt[27] = "\\e";
jt[34] = '\\"';
jt[92] = "\\\\";
jt[133] = "\\N";
jt[160] = "\\_";
jt[8232] = "\\L";
jt[8233] = "\\P";
var Ay = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"],
    My = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;

function Ey(i, o) {
    var r, u, c, f, g, _, y;
    if (o === null) return {};
    for (r = {}, u = Object.keys(o), c = 0, f = u.length; c < f; c += 1) g = u[c], _ = String(o[g]), g.slice(0, 2) === "!!" && (g = "tag:yaml.org,2002:" + g.slice(2)), y = i.compiledTypeMap.fallback[g], y && _m.call(y.styleAliases, _) && (_ = y.styleAliases[_]), r[g] = _;
    return r
}

function Cy(i) {
    var o, r, u;
    if (o = i.toString(16).toUpperCase(), i <= 255) r = "x", u = 2;
    else if (i <= 65535) r = "u", u = 4;
    else if (i <= 4294967295) r = "U", u = 8;
    else throw new Yt("code point within a string may not be greater than 0xFFFFFFFF");
    return "\\" + r + yt.repeat("0", u - o.length) + o
}
var Ly = 1,
    Qs = 2;

function ky(i) {
    this.schema = i.schema || Kf, this.indent = Math.max(1, i.indent || 2), this.noArrayIndent = i.noArrayIndent || !1, this.skipInvalid = i.skipInvalid || !1, this.flowLevel = yt.isNothing(i.flowLevel) ? -1 : i.flowLevel, this.styleMap = Ey(this.schema, i.styles || null), this.sortKeys = i.sortKeys || !1, this.lineWidth = i.lineWidth || 80, this.noRefs = i.noRefs || !1, this.noCompatMode = i.noCompatMode || !1, this.condenseFlow = i.condenseFlow || !1, this.quotingType = i.quotingType === '"' ? Qs : Ly, this.forceQuotes = i.forceQuotes || !1, this.replacer = typeof i.replacer == "function" ? i.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null
}

function y0(i, o) {
    for (var r = yt.repeat(" ", o), u = 0, c = -1, f = "", g, _ = i.length; u < _;) c = i.indexOf(`
`, u), c === -1 ? (g = i.slice(u), u = _) : (g = i.slice(u, c + 1), u = c + 1), g.length && g !== `
` && (f += r), f += g;
    return f
}

function xf(i, o) {
    return `
` + yt.repeat(" ", i.indent * o)
}

function Dy(i, o) {
    var r, u, c;
    for (r = 0, u = i.implicitTypes.length; r < u; r += 1)
        if (c = i.implicitTypes[r], c.resolve(o)) return !0;
    return !1
}

function Ku(i) {
    return i === dy || i === uy
}

function qs(i) {
    return 32 <= i && i <= 126 || 161 <= i && i <= 55295 && i !== 8232 && i !== 8233 || 57344 <= i && i <= 65533 && i !== Uf || 65536 <= i && i <= 1114111
}

function S0(i) {
    return qs(i) && i !== Uf && i !== cy && i !== Ys
}

function T0(i, o, r) {
    var u = S0(i),
        c = u && !Ku(i);
    return (r ? u : u && i !== xm && i !== wm && i !== Am && i !== Mm && i !== Em) && i !== _f && !(o === Fu && !c) || S0(o) && !Ku(o) && i === _f || o === Fu && c
}

function By(i) {
    return qs(i) && i !== Uf && !Ku(i) && i !== vy && i !== Ty && i !== Fu && i !== xm && i !== wm && i !== Am && i !== Mm && i !== Em && i !== _f && i !== gy && i !== by && i !== fy && i !== wy && i !== yy && i !== Sy && i !== my && i !== py && i !== hy && i !== _y && i !== xy
}

function Ny(i) {
    return !Ku(i) && i !== Fu
}

function Xs(i, o) {
    var r = i.charCodeAt(o),
        u;
    return r >= 55296 && r <= 56319 && o + 1 < i.length && (u = i.charCodeAt(o + 1), u >= 56320 && u <= 57343) ? (r - 55296) * 1024 + u - 56320 + 65536 : r
}

function Cm(i) {
    var o = /^\n* /;
    return o.test(i)
}
var Lm = 1,
    wf = 2,
    km = 3,
    Dm = 4,
    no = 5;

function Oy(i, o, r, u, c, f, g, _) {
    var y, v = 0,
        S = null,
        m = !1,
        A = !1,
        E = u !== -1,
        D = -1,
        F = By(Xs(i, 0)) && Ny(Xs(i, i.length - 1));
    if (o || g)
        for (y = 0; y < i.length; v >= 65536 ? y += 2 : y++) {
            if (v = Xs(i, y), !qs(v)) return no;
            F = F && T0(v, S, _), S = v
        } else {
            for (y = 0; y < i.length; v >= 65536 ? y += 2 : y++) {
                if (v = Xs(i, y), v === Ys) m = !0, E && (A = A || y - D - 1 > u && i[D + 1] !== " ", D = y);
                else if (!qs(v)) return no;
                F = F && T0(v, S, _), S = v
            }
            A = A || E && y - D - 1 > u && i[D + 1] !== " "
        }
    return !m && !A ? F && !g && !c(i) ? Lm : f === Qs ? no : wf : r > 9 && Cm(i) ? no : g ? f === Qs ? no : wf : A ? Dm : km
}

function Fy(i, o, r, u, c) {
    i.dump = function() {
        if (o.length === 0) return i.quotingType === Qs ? '""' : "''";
        if (!i.noCompatMode && (Ay.indexOf(o) !== -1 || My.test(o))) return i.quotingType === Qs ? '"' + o + '"' : "'" + o + "'";
        var f = i.indent * Math.max(1, r),
            g = i.lineWidth === -1 ? -1 : Math.max(Math.min(i.lineWidth, 40), i.lineWidth - f),
            _ = u || i.flowLevel > -1 && r >= i.flowLevel;

        function y(v) {
            return Dy(i, v)
        }
        switch (Oy(o, _, i.indent, g, y, i.quotingType, i.forceQuotes && !u, c)) {
            case Lm:
                return o;
            case wf:
                return "'" + o.replace(/'/g, "''") + "'";
            case km:
                return "|" + _0(o, i.indent) + x0(y0(o, f));
            case Dm:
                return ">" + _0(o, i.indent) + x0(y0(Ky(o, g), f));
            case no:
                return '"' + Ry(o) + '"';
            default:
                throw new Yt("impossible error: invalid scalar style")
        }
    }()
}

function _0(i, o) {
    var r = Cm(i) ? String(o) : "",
        u = i[i.length - 1] === `
`,
        c = u && (i[i.length - 2] === `
` || i === `
`),
        f = c ? "+" : u ? "" : "-";
    return r + f + `
`
}

function x0(i) {
    return i[i.length - 1] === `
` ? i.slice(0, -1) : i
}

function Ky(i, o) {
    for (var r = /(\n+)([^\n]*)/g, u = function() {
            var v = i.indexOf(`
`);
            return v = v !== -1 ? v : i.length, r.lastIndex = v, w0(i.slice(0, v), o)
        }(), c = i[0] === `
` || i[0] === " ", f, g; g = r.exec(i);) {
        var _ = g[1],
            y = g[2];
        f = y[0] === " ", u += _ + (!c && !f && y !== "" ? `
` : "") + w0(y, o), c = f
    }
    return u
}

function w0(i, o) {
    if (i === "" || i[0] === " ") return i;
    for (var r = / [^ ]/g, u, c = 0, f, g = 0, _ = 0, y = ""; u = r.exec(i);) _ = u.index, _ - c > o && (f = g > c ? g : _, y += `
` + i.slice(c, f), c = f + 1), g = _;
    return y += `
`, i.length - c > o && g > c ? y += i.slice(c, g) + `
` + i.slice(g + 1) : y += i.slice(c), y.slice(1)
}

function Ry(i) {
    for (var o = "", r = 0, u, c = 0; c < i.length; r >= 65536 ? c += 2 : c++) r = Xs(i, c), u = jt[r], !u && qs(r) ? (o += i[c], r >= 65536 && (o += i[c + 1])) : o += u || Cy(r);
    return o
}

function Xy(i, o, r) {
    var u = "",
        c = i.tag,
        f, g, _;
    for (f = 0, g = r.length; f < g; f += 1) _ = r[f], i.replacer && (_ = i.replacer.call(r, String(f), _)), (Bi(i, o, _, !1, !1) || typeof _ > "u" && Bi(i, o, null, !1, !1)) && (u !== "" && (u += "," + (i.condenseFlow ? "" : " ")), u += i.dump);
    i.tag = c, i.dump = "[" + u + "]"
}

function A0(i, o, r, u) {
    var c = "",
        f = i.tag,
        g, _, y;
    for (g = 0, _ = r.length; g < _; g += 1) y = r[g], i.replacer && (y = i.replacer.call(r, String(g), y)), (Bi(i, o + 1, y, !0, !0, !1, !0) || typeof y > "u" && Bi(i, o + 1, null, !0, !0, !1, !0)) && ((!u || c !== "") && (c += xf(i, o)), i.dump && Ys === i.dump.charCodeAt(0) ? c += "-" : c += "- ", c += i.dump);
    i.tag = f, i.dump = c || "[]"
}

function Uy(i, o, r) {
    var u = "",
        c = i.tag,
        f = Object.keys(r),
        g, _, y, v, S;
    for (g = 0, _ = f.length; g < _; g += 1) S = "", u !== "" && (S += ", "), i.condenseFlow && (S += '"'), y = f[g], v = r[y], i.replacer && (v = i.replacer.call(r, y, v)), Bi(i, o, y, !1, !1) && (i.dump.length > 1024 && (S += "? "), S += i.dump + (i.condenseFlow ? '"' : "") + ":" + (i.condenseFlow ? "" : " "), Bi(i, o, v, !1, !1) && (S += i.dump, u += S));
    i.tag = c, i.dump = "{" + u + "}"
}

function zy(i, o, r, u) {
    var c = "",
        f = i.tag,
        g = Object.keys(r),
        _, y, v, S, m, A;
    if (i.sortKeys === !0) g.sort();
    else if (typeof i.sortKeys == "function") g.sort(i.sortKeys);
    else if (i.sortKeys) throw new Yt("sortKeys must be a boolean or a function");
    for (_ = 0, y = g.length; _ < y; _ += 1) A = "", (!u || c !== "") && (A += xf(i, o)), v = g[_], S = r[v], i.replacer && (S = i.replacer.call(r, v, S)), Bi(i, o + 1, v, !0, !0, !0) && (m = i.tag !== null && i.tag !== "?" || i.dump && i.dump.length > 1024, m && (i.dump && Ys === i.dump.charCodeAt(0) ? A += "?" : A += "? "), A += i.dump, m && (A += xf(i, o)), Bi(i, o + 1, S, !0, m) && (i.dump && Ys === i.dump.charCodeAt(0) ? A += ":" : A += ": ", A += i.dump, c += A));
    i.tag = f, i.dump = c || "{}"
}

function M0(i, o, r) {
    var u, c, f, g, _, y;
    for (c = r ? i.explicitTypes : i.implicitTypes, f = 0, g = c.length; f < g; f += 1)
        if (_ = c[f], (_.instanceOf || _.predicate) && (!_.instanceOf || typeof o == "object" && o instanceof _.instanceOf) && (!_.predicate || _.predicate(o))) {
            if (r ? _.multi && _.representName ? i.tag = _.representName(o) : i.tag = _.tag : i.tag = "?", _.represent) {
                if (y = i.styleMap[_.tag] || _.defaultStyle, Tm.call(_.represent) === "[object Function]") u = _.represent(o, y);
                else if (_m.call(_.represent, y)) u = _.represent[y](o, y);
                else throw new Yt("!<" + _.tag + '> tag resolver accepts not "' + y + '" style');
                i.dump = u
            }
            return !0
        } return !1
}

function Bi(i, o, r, u, c, f, g) {
    i.tag = null, i.dump = r, M0(i, r, !1) || M0(i, r, !0);
    var _ = Tm.call(i.dump),
        y = u,
        v;
    u && (u = i.flowLevel < 0 || i.flowLevel > o);
    var S = _ === "[object Object]" || _ === "[object Array]",
        m, A;
    if (S && (m = i.duplicates.indexOf(r), A = m !== -1), (i.tag !== null && i.tag !== "?" || A || i.indent !== 2 && o > 0) && (c = !1), A && i.usedDuplicates[m]) i.dump = "*ref_" + m;
    else {
        if (S && A && !i.usedDuplicates[m] && (i.usedDuplicates[m] = !0), _ === "[object Object]") u && Object.keys(i.dump).length !== 0 ? (zy(i, o, i.dump, c), A && (i.dump = "&ref_" + m + i.dump)) : (Uy(i, o, i.dump), A && (i.dump = "&ref_" + m + " " + i.dump));
        else if (_ === "[object Array]") u && i.dump.length !== 0 ? (i.noArrayIndent && !g && o > 0 ? A0(i, o - 1, i.dump, c) : A0(i, o, i.dump, c), A && (i.dump = "&ref_" + m + i.dump)) : (Xy(i, o, i.dump), A && (i.dump = "&ref_" + m + " " + i.dump));
        else if (_ === "[object String]") i.tag !== "?" && Fy(i, i.dump, o, f, y);
        else {
            if (_ === "[object Undefined]") return !1;
            if (i.skipInvalid) return !1;
            throw new Yt("unacceptable kind of an object to dump " + _)
        }
        i.tag !== null && i.tag !== "?" && (v = encodeURI(i.tag[0] === "!" ? i.tag.slice(1) : i.tag).replace(/!/g, "%21"), i.tag[0] === "!" ? v = "!" + v : v.slice(0, 18) === "tag:yaml.org,2002:" ? v = "!!" + v.slice(18) : v = "!<" + v + ">", i.dump = v + " " + i.dump)
    }
    return !0
}

function Py(i, o) {
    var r = [],
        u = [],
        c, f;
    for (Af(i, r, u), c = 0, f = u.length; c < f; c += 1) o.duplicates.push(r[u[c]]);
    o.usedDuplicates = new Array(f)
}

function Af(i, o, r) {
    var u, c, f;
    if (i !== null && typeof i == "object")
        if (c = o.indexOf(i), c !== -1) r.indexOf(c) === -1 && r.push(c);
        else if (o.push(i), Array.isArray(i))
        for (c = 0, f = i.length; c < f; c += 1) Af(i[c], o, r);
    else
        for (u = Object.keys(i), c = 0, f = u.length; c < f; c += 1) Af(i[u[c]], o, r)
}

function Hy(i, o) {
    o = o || {};
    var r = new ky(o);
    r.noRefs || Py(i, r);
    var u = i;
    return r.replacer && (u = r.replacer.call({
        "": u
    }, "", u)), Bi(r, 0, u, !0, !0) ? r.dump + `
` : ""
}
var jy = Hy,
    Gy = {
        dump: jy
    };

function zf(i, o) {
    return function() {
        throw new Error("Function yaml." + i + " is removed in js-yaml 4. Use yaml." + o + " instead, which is now safe by default.")
    }
}
var Iy = Kt,
    Vy = Y0,
    Yy = Z0,
    Qy = am,
    qy = im,
    $y = Kf,
    Zy = Sm.load,
    Wy = Sm.loadAll,
    Jy = Gy.dump,
    e2 = Yt,
    t2 = {
        binary: rm,
        float: tm,
        map: $0,
        null: W0,
        pairs: cm,
        set: dm,
        timestamp: om,
        bool: J0,
        int: em,
        merge: sm,
        omap: um,
        seq: q0,
        str: Q0
    },
    a2 = zf("safeLoad", "load"),
    i2 = zf("safeLoadAll", "loadAll"),
    l2 = zf("safeDump", "dump"),
    E0 = {
        Type: Iy,
        Schema: Vy,
        FAILSAFE_SCHEMA: Yy,
        JSON_SCHEMA: Qy,
        CORE_SCHEMA: qy,
        DEFAULT_SCHEMA: $y,
        load: Zy,
        loadAll: Wy,
        dump: Jy,
        YAMLException: e2,
        types: t2,
        safeLoad: a2,
        safeLoadAll: i2,
        safeDump: l2
    };
const Mf = ["x264enc", "x264enc-striped", "jpeg"],
    ff = [8, 12, 15, 24, 25, 30, 48, 50, 60, 90, 100, 120, 144, 165],
    pf = [1e3, 2e3, 4e3, 8e3, 1e4, 12e3, 14e3, 16e3, 18e3, 2e4, 25e3, 3e4, 35e3, 4e4, 45e3, 5e4, 6e4, 7e4, 8e4, 9e4, 1e5],
    hf = Array.from({
        length: 16
    }, (i, o) => o),
    gf = [50, 45, 40, 35, 30, 25, 20, 10, 1],
    mf = Array.from({
        length: 95 / 5 + 1
    }, (i, o) => 5 + o * 5),
    bf = Array.from({
        length: 95 / 5 + 1
    }, (i, o) => 5 + o * 5),
    n2 = ["", "1920x1080", "1280x720", "1366x768", "1920x1200", "2560x1440", "3840x2160", "1024x768", "800x600", "640x480", "320x240"],
    o2 = [{
        label: "100%",
        value: 96
    }, {
        label: "125%",
        value: 120
    }, {
        label: "150%",
        value: 144
    }, {
        label: "175%",
        value: 168
    }, {
        label: "200%",
        value: 192
    }, {
        label: "225%",
        value: 216
    }, {
        label: "250%",
        value: 240
    }, {
        label: "275%",
        value: 264
    }, {
        label: "300%",
        value: 288
    }],
    s2 = 96,
    r2 = 100,
    u2 = 10,
    C0 = 60,
    c2 = 8e3,
    d2 = 60,
    f2 = 90,
    p2 = 0,
    h2 = Mf[0],
    g2 = 25,
    m2 = !0,
    Bm = "https://raw.githubusercontent.com/linuxserver/proot-apps/master/metadata/",
    b2 = `${Bm}metadata.yml`,
    L0 = `${Bm}img/`,
    Tu = 3,
    k0 = 5e3,
    vf = 8e3,
    v2 = 500,
    _u = "touch-gamepad-host";

function xu(i, o = 2, r) {
    const u = r?.zeroBytes || "0 Bytes";
    if (i == null || i === 0) return u;
    const c = 1024,
        f = o < 0 ? 0 : o,
        g = r?.byteUnits || ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        _ = Math.floor(Math.log(i) / Math.log(c)),
        y = Math.min(_, g.length - 1);
    return parseFloat((i / Math.pow(c, _)).toFixed(f)) + " " + g[y]
}
const lo = (i, o, r) => {
        const u = Math.max(0, Math.min(100, i || 0));
        return r * (1 - u / 100)
    },
    wu = i => {
        const o = parseInt(i, 10);
        return isNaN(o) ? 0 : Math.floor(o / 2) * 2
    };

function xi(i, o) {
    let r;
    return function(...u) {
        const c = this;
        clearTimeout(r), r = setTimeout(() => {
            i.apply(c, u)
        }, o)
    }
}
const y2 = () => p.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "16",
        height: "16",
        style: {
            display: "block"
        },
        children: p.jsx("path", {
            d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
        })
    }),
    S2 = () => p.jsxs("svg", {
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: "2",
        fill: "none",
        width: "18",
        height: "18",
        children: [p.jsx("circle", {
            cx: "12",
            cy: "12",
            r: "1.5",
            fill: "currentColor"
        }), p.jsx("path", {
            d: "M12 5V9M12 15V19M5 12H9M15 12H19",
            strokeLinecap: "round"
        })]
    }),
    T2 = () => p.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "20",
        height: "20",
        children: p.jsx("path", {
            d: "M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
        })
    }),
    D0 = () => p.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 490 490",
        fill: "currentColor",
        width: "24",
        height: "24",
        children: p.jsx("path", {
            d: "M251.2 193.5v-53.7a10.5 10.5 0 0 1 10.5-10.5h119.4c21 0 38.1-17.1 38.1-38.1s-17.1-38.1-38.1-38.1H129.5c-5.4 0-10.1 4.3-10.1 10.1s4.3 10.1 10.1 10.1h251.6c10.1 0 17.9 8.2 17.9 17.9 0 10.1-8.2 17.9-17.9 17.9H261.7c-16.7 0-30.3 13.6-30.3 30.3v53.3H0v244.2h490V193.5H251.2zm-19 28h15.6c5.4 0 10.1 4.3 10.1 10.1s-4.3 10.1-10.1 10.1h-15.6c-5.4 0-10.1-4.3-10.1-10.1s4.6-10.1 10.1-10.1zm-28.8 104.2h-15.6c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1 0 5.4-4.7 10.1-10.1 10.1zm10.1 27.2c0 5.4-4.3 10.1-10.1 10.1h-15.6c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.7 10.1 10.1zM203.4 288h-15.6c-5.4 0-10.1-4.3-10.1-10.1s4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1s-4.7 10.1-10.1 10.1zm-17.1-66.5h15.6c5.4 0 10.1 4.3 10.1 10.1s-4.3 10.1-10.1 10.1h-15.6c-5.4 0-10.1-4.3-10.1-10.1s4.6-10.1 10.1-10.1zm-45.9 0H156c5.4 0 10.1 4.3 10.1 10.1s-4.3 10.1-10.1 10.1h-15.6c-5.4 0-10.1-4.3-10.1-10.1s4.6-10.1 10.1-10.1zm-1.6 46.6h15.6c5.4 0 10.1 4.3 10.1 10.1s-4.3 10.1-10.1 10.1h-15.6c-5.4 0-10.1-4.3-10.1-10.1s4.7-10.1 10.1-10.1zm0 37.4h15.6c5.4 0 10.1 4.3 10.1 10.1 0 5.4-4.3 10.1-10.1 10.1h-15.6c-5.4 0-10.1-4.3-10.1-10.1 0-5.5 4.7-10.1 10.1-10.1zm0 37.3h15.6c5.4 0 10.1 4.3 10.1 10.1 0 5.4-4.3 10.1-10.1 10.1h-15.6c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.7-10.1 10.1-10.1zM94.5 221.5h15.6c5.4 0 10.1 4.3 10.1 10.1s-4.3 10.1-10.1 10.1H94.5c-5.4 0-10.1-4.3-10.1-10.1s4.7-10.1 10.1-10.1zm-5.1 46.6H105c5.4 0 10.1 4.3 10.1 10.1s-4.3 10.1-10.1 10.1H89.4c-5.4 0-10.1-4.3-10.1-10.1s4.7-10.1 10.1-10.1zm0 37.4H105c5.4 0 10.1 4.3 10.1 10.1 0 5.4-4.3 10.1-10.1 10.1H89.4c-5.4 0-10.1-4.3-10.1-10.1.4-5.5 4.7-10.1 10.1-10.1zm0 37.3H105c5.4 0 10.1 4.3 10.1 10.1 0 5.4-4.3 10.1-10.1 10.1H89.4c-5.4 0-10.1-4.3-10.1-10.1.4-5.4 4.7-10.1 10.1-10.1zM56 400.4H40.4c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1H56c5.4 0 10.1 4.3 10.1 10.1-.4 5.4-4.7 10.1-10.1 10.1zm0-37.4H40.4c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1H56c5.4 0 10.1 4.3 10.1 10.1-.4 5.5-4.7 10.1-10.1 10.1zm0-37.3H40.4c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1H56c5.4 0 10.1 4.3 10.1 10.1-.4 5.4-4.7 10.1-10.1 10.1zm0-37.7H40.4c-5.4 0-10.1-4.3-10.1-10.1s4.3-10.1 10.1-10.1H56c5.4 0 10.1 4.3 10.1 10.1S61.4 288 56 288zm0-46.7H40.4c-5.4 0-10.1-4.3-10.1-10.1s4.3-10.1 10.1-10.1H56c5.4 0 10.1 4.3 10.1 10.1s-4.7 10.1-10.1 10.1zm196.8 159.1H89.4c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1h163.3c5.4 0 10.1 4.3 10.1 10.1.1 5.4-4.6 10.1-10 10.1zm0-37.4h-15.6c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1 0 5.5-4.7 10.1-10.1 10.1zm0-37.3h-15.6c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1 0 5.4-4.7 10.1-10.1 10.1zm0-37.7h-15.6c-5.4 0-10.1-4.3-10.1-10.1s4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1s-4.7 10.1-10.1 10.1zm49.4 112.4h-15.6c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1-.4 5.4-4.7 10.1-10.1 10.1zm0-37.4h-15.6c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1-.4 5.5-4.7 10.1-10.1 10.1zm0-37.3h-15.6c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1-.4 5.4-4.7 10.1-10.1 10.1zm0-37.7h-15.6c-5.4 0-10.1-4.3-10.1-10.1s4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1s-4.7 10.1-10.1 10.1zm10.1-46.7h-15.6c-5.4 0-10.1-4.3-10.1-10.1s4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1s-4.7 10.1-10.1 10.1zm38.9 159.1h-15.6c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1 0 5.4-4.7 10.1-10.1 10.1zm0-37.4h-15.6c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1 0 5.5-4.7 10.1-10.1 10.1zm0-37.3h-15.6c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1 0 5.4-4.7 10.1-10.1 10.1zm0-37.7h-15.6c-5.4 0-10.1-4.3-10.1-10.1s4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1s-4.7 10.1-10.1 10.1zm6.6-46.7h-15.6c-5.4 0-10.1-4.3-10.1-10.1s4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1s-4.3 10.1-10.1 10.1zm42.8 159.1H385c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1-.4 5.4-4.7 10.1-10.1 10.1zm0-37.4H385c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1-.4 5.5-4.7 10.1-10.1 10.1zm0-37.3H385c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1-.4 5.4-4.7 10.1-10.1 10.1zm0-37.7H385c-5.4 0-10.1-4.3-10.1-10.1s4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1S406 288 400.6 288zm3.1-46.7h-15.6c-5.4 0-10.1-4.3-10.1-10.1s4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1s-4.3 10.1-10.1 10.1zm45.9 159.1H434c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1 0 5.4-4.7 10.1-10.1 10.1zm0-37.4H434c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1 0 5.5-4.7 10.1-10.1 10.1zm0-37.3H434c-5.4 0-10.1-4.3-10.1-10.1 0-5.4 4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1 0 5.4-4.7 10.1-10.1 10.1zm0-37.7H434c-5.4 0-10.1-4.3-10.1-10.1s4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1S455 288 449.6 288zm0-46.7H434c-5.4 0-10.1-4.3-10.1-10.1s4.3-10.1 10.1-10.1h15.6c5.4 0 10.1 4.3 10.1 10.1s-4.7 10.1-10.1 10.1z"
        })
    }),
    _2 = () => p.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "20",
        height: "20",
        children: p.jsx("path", {
            d: "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
        })
    }),
    x2 = () => p.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "20",
        height: "20",
        children: p.jsx("path", {
            d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
        })
    }),
    w2 = () => p.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "20",
        height: "20",
        children: p.jsx("path", {
            d: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"
        })
    }),
    B0 = () => p.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "20",
        height: "20",
        children: p.jsx("path", {
            d: "M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"
        })
    }),
    A2 = () => p.jsxs("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "18",
        height: "18",
        children: [p.jsx("path", {
            d: "M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15H3V5Z"
        }), p.jsx("path", {
            d: "M3 16H11V21H5C3.89543 21 3 20.1046 3 19V16Z"
        }), p.jsx("path", {
            d: "M13 16H21V19C21 20.1046 20.1046 21 19 21H13V16Z"
        })]
    }),
    M2 = () => p.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "18",
        height: "18",
        children: p.jsx("path", {
            d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
        })
    }),
    wi = () => p.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "18",
        height: "18",
        style: {
            display: "block"
        },
        children: p.jsx("path", {
            d: "M7 10l5 5 5-5H7z"
        })
    }),
    Ai = () => p.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        width: "18",
        height: "18",
        style: {
            display: "block"
        },
        children: p.jsx("path", {
            d: "M7 14l5-5 5 5H7z"
        })
    }),
    Nm = () => p.jsx("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "currentColor",
        children: p.jsx("g", {
            fill: "none",
            fillRule: "evenodd",
            children: p.jsxs("g", {
                transform: "translate(1 1)",
                strokeWidth: "3",
                children: [p.jsx("circle", {
                    strokeOpacity: ".3",
                    cx: "18",
                    cy: "18",
                    r: "18"
                }), p.jsx("path", {
                    d: "M36 18c0-9.94-8.06-18-18-18",
                    children: p.jsx("animateTransform", {
                        attributeName: "transform",
                        type: "rotate",
                        from: "0 18 18",
                        to: "360 18 18",
                        dur: "0.8s",
                        repeatCount: "indefinite"
                    })
                })]
            })
        })
    }),
    E2 = ({
        width: i = 30,
        height: o = 30,
        className: r,
        t: u,
        ...c
    }) => p.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 200 200",
        width: i,
        height: o,
        className: r,
        role: "img",
        "aria-label": u("selkiesLogoAlt"),
        ...c,
        children: [p.jsx("path", {
            fill: "#61dafb",
            d: "M156.825 120.999H5.273l-.271-1.13 87.336-43.332-7.278 17.696c4 1.628 6.179.541 7.907-2.974l26.873-53.575c1.198-2.319 3.879-4.593 6.358-5.401 9.959-3.249 20.065-6.091 30.229-8.634 1.9-.475 4.981.461 6.368 1.873 4.067 4.142 7.32 9.082 11.379 13.233 1.719 1.758 4.572 2.964 7.058 3.29 4.094.536 8.311.046 12.471.183 5.2.171 6.765 2.967 4.229 7.607-2.154 3.942-4.258 7.97-6.94 11.542-1.264 1.684-3.789 3.274-5.82 3.377-7.701.391-15.434.158-23.409 1.265 2.214 1.33 4.301 2.981 6.67 3.919 4.287 1.698 5.76 4.897 6.346 9.162 1.063 7.741 2.609 15.417 3.623 23.164.22 1.677-.464 3.971-1.579 5.233-3.521 3.987-7.156 7.989-11.332 11.232-2.069 1.607-5.418 1.565-8.664 2.27m-3.804-69.578c5.601.881 6.567-5.024 11.089-6.722l-9.884-7.716-11.299 9.983 10.094 4.455z"
        }), p.jsx("path", {
            fill: "#61dafb",
            d: "M86 131.92c7.491 0 14.495.261 21.467-.1 4.011-.208 6.165 1.249 7.532 4.832 1.103 2.889 2.605 5.626 4.397 9.419h-93.41l5.163 24.027-1.01.859c-3.291-2.273-6.357-5.009-9.914-6.733-11.515-5.581-17.057-14.489-16.403-27.286.073-1.423-.287-2.869-.525-5.019H86z"
        }), p.jsx("path", {
            fill: "#61dafb",
            d: "M129.004 164.999l1.179-1.424c9.132-10.114 9.127-10.11 2.877-22.425l-4.552-9.232c4.752 0 8.69.546 12.42-.101 11.96-2.075 20.504 1.972 25.74 13.014.826 1.743 2.245 3.205 3.797 5.361-9.923 7.274-19.044 15.174-29.357 20.945-4.365 2.443-11.236.407-17.714.407l5.611-6.545z"
        }), p.jsx("path", {
            fill: "#FFFFFF",
            d: "M152.672 51.269l-9.745-4.303 11.299-9.983 9.884 7.716c-4.522 1.698-5.488 7.602-11.439 6.57z"
        })]
    }),
    Au = "prootInstalledApps";

function C2({
    isOpen: i,
    onClose: o,
    t: r
}) {
    const [u, c] = Y.useState(null), [f, g] = Y.useState(!1), [_, y] = Y.useState(null), [v, S] = Y.useState(""), [m, A] = Y.useState(null), [E, D] = Y.useState(() => {
        const ie = localStorage.getItem(Au);
        if (ie) try {
            const me = JSON.parse(ie);
            if (Array.isArray(me) && me.every($e => typeof $e == "string")) return me;
            console.warn("Invalid data found in localStorage for installed apps. Resetting."), localStorage.removeItem(Au)
        } catch (me) {
            console.error("Failed to parse installed apps from localStorage:", me), localStorage.removeItem(Au)
        }
        return []
    });
    Y.useEffect(() => {
        localStorage.setItem(Au, JSON.stringify(E))
    }, [E]), Y.useEffect(() => {
        i && !u && !f && (async () => {
            g(!0), y(null);
            try {
                const me = await fetch(b2);
                if (!me.ok) throw new Error(`HTTP error! status: ${me.status}`);
                const $e = await me.text(),
                    Ba = E0.load($e);
                c(Ba)
            } catch (me) {
                console.error("Failed to fetch or parse app data:", me), y(r("appsModal.errorLoading", "Failed to load app data. Please try again."))
            } finally {
                g(!1)
            }
        })()
    }, [i, u, f, r, E0]);
    const F = ie => S(ie.target.value.toLowerCase()),
        R = ie => A(ie),
        Q = () => A(null),
        q = ie => {
            console.log(`Install app: ${ie}`), window.postMessage({
                type: "command",
                value: `st ~/.local/bin/proot-apps install ${ie}`
            }, window.location.origin), D(me => me.includes(ie) ? me : [...me, ie])
        },
        K = ie => {
            console.log(`Remove app: ${ie}`), window.postMessage({
                type: "command",
                value: `st ~/.local/bin/proot-apps remove ${ie}`
            }, window.location.origin), D(me => me.filter($e => $e !== ie))
        },
        be = ie => {
            console.log(`Update app: ${ie}`), window.postMessage({
                type: "command",
                value: `st ~/.local/bin/proot-apps update ${ie}`
            }, window.location.origin)
        },
        ve = u?.include?.filter(ie => !ie.disabled && (ie.full_name?.toLowerCase().includes(v) || ie.name?.toLowerCase().includes(v) || ie.description?.toLowerCase().includes(v))) || [],
        Ue = ie => E.includes(ie);
    return i ? p.jsxs("div", {
        className: "apps-modal",
        children: [p.jsx("button", {
            className: "apps-modal-close",
            onClick: o,
            "aria-label": r("appsModal.closeAlt", "Close apps modal"),
            children: "×"
        }), p.jsxs("div", {
            className: "apps-modal-content",
            children: [f && p.jsxs("div", {
                className: "apps-modal-loading",
                children: [p.jsx(Nm, {}), p.jsx("p", {
                    children: r("appsModal.loading", "Loading apps...")
                })]
            }), _ && p.jsx("p", {
                className: "apps-modal-error",
                children: _
            }), !f && !_ && u && p.jsx(p.Fragment, {
                children: m ? p.jsxs("div", {
                    className: "app-detail-view",
                    children: [p.jsxs("button", {
                        onClick: Q,
                        className: "app-detail-back-button",
                        children: ["← ", r("appsModal.backButton", "Back to list")]
                    }), p.jsx("img", {
                        src: `${L0}${m.icon}`,
                        alt: m.full_name,
                        className: "app-detail-icon",
                        onError: ie => {
                            ie.target.style.display = "none"
                        }
                    }), p.jsx("h2", {
                        children: m.full_name
                    }), p.jsx("p", {
                        className: "app-detail-description",
                        children: m.description
                    }), p.jsx("div", {
                        className: "app-action-buttons",
                        children: Ue(m.name) ? p.jsxs(p.Fragment, {
                            children: [p.jsxs("button", {
                                onClick: () => be(m.name),
                                className: "app-action-button update",
                                children: [r("appsModal.updateButton", "Update"), " ", m.name]
                            }), p.jsxs("button", {
                                onClick: () => K(m.name),
                                className: "app-action-button remove",
                                children: [r("appsModal.removeButton", "Remove"), " ", m.name]
                            })]
                        }) : p.jsxs("button", {
                            onClick: () => q(m.name),
                            className: "app-action-button install",
                            children: [r("appsModal.installButton", "Install"), " ", m.name]
                        })
                    })]
                }) : p.jsxs(p.Fragment, {
                    children: [p.jsx("input", {
                        type: "text",
                        className: "apps-search-bar allow-native-input",
                        placeholder: r("appsModal.searchPlaceholder", "Search apps..."),
                        value: v,
                        onChange: F
                    }), p.jsx("div", {
                        className: "apps-grid",
                        children: ve.length > 0 ? ve.map(ie => p.jsxs("div", {
                            className: "app-card",
                            onClick: () => R(ie),
                            children: [p.jsx("img", {
                                src: `${L0}${ie.icon}`,
                                alt: ie.full_name,
                                className: "app-card-icon",
                                loading: "lazy",
                                onError: me => {
                                    me.target.style.visibility = "hidden"
                                }
                            }), p.jsx("p", {
                                className: "app-card-name",
                                children: ie.full_name
                            }), Ue(ie.name) && p.jsx("div", {
                                className: "app-card-installed-badge",
                                children: r("appsModal.installedBadge", "Installed")
                            })]
                        }, ie.name)) : p.jsx("p", {
                            children: r("appsModal.noAppsFound", "No apps found matching your search.")
                        })
                    })]
                })
            })]
        })]
    }) : null
}
const L2 = () => typeof window > "u" ? "" : window.location.href.split("#")[0].replace(/[^a-zA-Z0-9.-_]/g, "_"),
    k2 = L2(),
    ta = i => `${k2}_${i}`;

function D2({
    isOpen: i
}) {
    const [o, r] = Y.useState("en"), [u, c] = Y.useState(() => d0("en")), [f, g] = Y.useState(!1), [_, y] = Y.useState(!1), [v, S] = Y.useState(!1), [m, A] = Y.useState({
        Control: !1,
        Alt: !1,
        Meta: !1
    }), [E, D] = Y.useState(!0), [F, R] = Y.useState(!1), [Q, q] = Y.useState(!1);
    Y.useEffect(() => {
        const T = navigator.language || navigator.userLanguage || "en",
            j = T.split("-")[0].toLowerCase();
        console.log(`Dashboard: Detected browser language: ${T}, using primary: ${j}`), r(j), c(d0(j))
    }, []), Y.useEffect(() => {
        const T = typeof window < "u" && (navigator.userAgentData && navigator.userAgentData.mobile || /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        g(!!T), T && ii(j => ({
            ...j,
            gamepads: !0
        })), navigator.userAgentData && navigator.userAgentData.mobile !== void 0 ? console.log("Dashboard: Mobile detected via userAgentData.mobile:", navigator.userAgentData.mobile) : typeof navigator.userAgent == "string" ? console.log("Dashboard: Mobile detected via userAgent string match:", /Mobi|Android/i.test(navigator.userAgent)) : console.warn("Dashboard: Mobile detection methods not fully available. Mobile status set to:", !!T)
    }, []), Y.useEffect(() => {
        const T = () => {
            console.log("Dashboard: First touch detected. Enabling touch-specific features."), S(!0)
        };
        return window.addEventListener("touchstart", T, {
            once: !0,
            passive: !0
        }), () => {
            window.removeEventListener("touchstart", T, {
                once: !0,
                passive: !0
            })
        }
    }, []);
    const {
        t: K,
        raw: be
    } = u, ve = (T, j, z, ne) => {
        const Te = new KeyboardEvent(T, {
            key: j,
            code: z,
            ctrlKey: ne.Control,
            altKey: ne.Alt,
            metaKey: ne.Meta,
            bubbles: !0,
            cancelable: !0
        });
        window.dispatchEvent(Te)
    }, Ue = (T, j) => {
        const z = m[T],
            ne = Object.values(m).filter(Boolean).length;
        !z && ne === 0 ? window.postMessage({
            type: "setSynth",
            value: !0
        }, window.location.origin) : z && ne === 1 && window.postMessage({
            type: "setSynth",
            value: !1
        }, window.location.origin);
        const Te = {
            ...m,
            [T]: !z
        };
        A(Te), z ? (ve("keyup", T, j, Te), console.log(`Dashboard: Dispatched keyup for ${T} with state:`, Te)) : (ve("keydown", T, j, Te), console.log(`Dashboard: Dispatched keydown for ${T} with state:`, Te))
    }, ie = (T, j) => {
        console.log(`Dashboard: Dispatching key press for ${T} with modifiers:`, m), ve("keydown", T, j, m), setTimeout(() => {
            ve("keyup", T, j, m)
        }, 50)
    }, me = () => {
        D(T => !T)
    }, [$e, Ba] = Y.useState(localStorage.getItem("theme") || "dark"), [kt, Tt] = Y.useState(localStorage.getItem(ta("encoder")) || h2), [Na, ei] = Y.useState(Mf), [ut, X] = Y.useState(parseInt(localStorage.getItem(ta("videoFramerate")), 10) || C0), [W, re] = Y.useState(parseInt(localStorage.getItem(ta("videoBitRate")), 10) || c2), [Fe, w] = Y.useState(parseInt(localStorage.getItem(ta("videoBufferSize")), 10) || p2), [I, ee] = Y.useState(parseInt(localStorage.getItem(ta("videoCRF")), 10) || g2), [$, se] = Y.useState(localStorage.getItem(ta("h264_fullcolor")) === "true"), [Ee, ge] = Y.useState(parseInt(localStorage.getItem(ta("jpegQuality")), 10) || d2), [Rt, Ve] = Y.useState(parseInt(localStorage.getItem(ta("paintOverJpegQuality")), 10) || f2), [Qt, wo] = Y.useState(localStorage.getItem(ta("useCpu")) === "true"), [Oa, Ao] = Y.useState(localStorage.getItem(ta("h264_streaming_mode")) === "true"), [Mo, Eo] = Y.useState(parseInt(localStorage.getItem("scalingDPI"), 10) || s2), [Zs, on] = Y.useState(localStorage.getItem(ta("manualWidth")) || ""), [la, sn] = Y.useState(localStorage.getItem(ta("manualHeight")) || ""), [Tl, Ws] = Y.useState(() => {
        const T = localStorage.getItem(ta("scaleLocallyManual"));
        return T !== null ? T === "true" : m2
    }), [Fa, zu] = Y.useState(() => localStorage.getItem(ta("useCssScaling")) !== "true"), [Js, _l] = Y.useState(""), [rn, xl] = Y.useState(0), [_t, Ka] = Y.useState(0), [xt, Pu] = Y.useState(0), [un, Hu] = Y.useState(0), [wl, cn] = Y.useState(0), [Ra, dn] = Y.useState(0), [ti, ju] = Y.useState(null), [fn, er] = Y.useState(null), [Al, Ml] = Y.useState(null), [Co, tr] = Y.useState(null), [Lo, pn] = Y.useState(null), [hn, ar] = Y.useState({
        x: 0,
        y: 0
    }), [ko, xa] = Y.useState(!0), [ct, Dt] = Y.useState(!0), [Xa, gn] = Y.useState(!1), [Do, ir] = Y.useState(!0), [lr, Ni] = Y.useState(""), [Bo, ai] = Y.useState([]), [Oi, Fi] = Y.useState([]), [Ki, at] = Y.useState("default"), [nr, mn] = Y.useState("default"), [Ua, Ri] = Y.useState(!1), [El, No] = Y.useState(null), [Cl, or] = Y.useState(!1), [Xi, bn] = Y.useState({}), [ha, Oo] = Y.useState(!1), [Be, ii] = Y.useState({
        settings: !1,
        audioSettings: !1,
        screenSettings: !1,
        stats: !1,
        clipboard: !1,
        gamepads: !1,
        files: !0,
        apps: !1,
        sharing: !1
    }), [Fo, za] = Y.useState([]), Xt = Y.useRef({}), [Ko, qt] = Y.useState(!1), [vn, Gu] = Y.useState(!1), [li, sr] = Y.useState({
        bottom: 20,
        right: 20
    }), qe = Y.useRef({
        isDragging: !1,
        hasDragged: !1,
        pointerId: null,
        startX: 0,
        startY: 0,
        initialBottom: 0,
        initialRight: 0
    }), wa = 500, $t = Y.useCallback(xi(T => {
        window.postMessage({
            type: "settings",
            settings: {
                videoFramerate: T
            }
        }, window.location.origin)
    }, wa), []), Ro = Y.useCallback(xi(T => {
        window.postMessage({
            type: "settings",
            settings: {
                videoBitRate: T
            }
        }, window.location.origin)
    }, wa), []), rr = Y.useCallback(xi(T => {
        window.postMessage({
            type: "settings",
            settings: {
                videoBufferSize: T
            }
        }, window.location.origin)
    }, wa), []), Xo = Y.useCallback(xi(T => {
        window.postMessage({
            type: "settings",
            settings: {
                videoCRF: T
            }
        }, window.location.origin)
    }, wa), []), Ui = Y.useCallback(xi(T => {
        window.postMessage({
            type: "settings",
            settings: {
                h264_fullcolor: T
            }
        }, window.location.origin)
    }, wa), []), ur = Y.useCallback(xi(T => {
        window.postMessage({
            type: "settings",
            settings: {
                h264_streaming_mode: T
            }
        }, window.location.origin)
    }, wa), []), cr = Y.useCallback(xi(T => {
        window.postMessage({
            type: "settings",
            settings: {
                jpegQuality: T
            }
        }, window.location.origin)
    }, wa), []), zi = Y.useCallback(xi(T => {
        window.postMessage({
            type: "settings",
            settings: {
                paintOverJpegQuality: T
            }
        }, window.location.origin)
    }, wa), []), Iu = Y.useCallback(xi(T => {
        window.postMessage({
            type: "settings",
            settings: {
                useCpu: T
            }
        }, window.location.origin)
    }, wa), []), dr = T => {
        const j = parseInt(T.target.value, 10);
        Eo(j), window.postMessage({
            type: "settings",
            settings: {
                SCALING_DPI: j
            }
        }, window.location.origin);
        const z = `scaling-action-required-${Date.now()}`,
            ne = K("notifications.scalingTitle", "Scaling Updated: Action Required"),
            Te = K("notifications.scalingMessage", "New scaling applied. To see changes, restart: the container, your desktop session by logging out, or the running application.");
        za(de => [...de, {
            id: z,
            fileName: ne,
            status: "end",
            message: Te,
            timestamp: Date.now(),
            fadingOut: !1
        }].slice(-Tu)), Ha(z, vf)
    }, Uo = 10, zo = T => {
        qe.current.isDragging = !0, qe.current.hasDragged = !1, qe.current.pointerId = T.pointerId, qe.current.startX = T.clientX, qe.current.startY = T.clientY, qe.current.initialBottom = li.bottom, qe.current.initialRight = li.right, T.currentTarget.setPointerCapture(T.pointerId)
    }, Vu = T => {
        if (!qe.current.isDragging) return;
        const j = T.clientX - qe.current.startX,
            z = T.clientY - qe.current.startY;
        !qe.current.hasDragged && (Math.abs(j) > Uo || Math.abs(z) > Uo) && (qe.current.hasDragged = !0), qe.current.hasDragged && sr({
            bottom: qe.current.initialBottom - z,
            right: qe.current.initialRight - j
        })
    }, fr = T => {
        T.currentTarget.hasPointerCapture(qe.current.pointerId) && T.currentTarget.releasePointerCapture(T.pointerId), qe.current.isDragging = !1, qe.current.pointerId = null
    }, yn = T => {
        if (qe.current.hasDragged) {
            T.preventDefault(), T.stopPropagation(), qe.current.hasDragged = !1;
            return
        }
        Pi()
    }, Sn = () => Gu(!vn), Tn = () => qt(!Ko), Pi = Y.useCallback(() => {
        console.log("Dashboard: Directly handling virtual keyboard pop.");
        const T = document.getElementById("keyboard-input-assist"),
            j = document.getElementById("overlayInput");
        T ? (T.removeAttribute("aria-hidden"), T.value = "", T.focus(), console.log("Focused #keyboard-input-assist element to pop keyboard."), j ? j.addEventListener("touchstart", () => {
            document.activeElement === T && (T.blur(), console.log("Blurred #keyboard-input-assist on main overlay touch."), T.setAttribute("aria-hidden", "true"))
        }, {
            once: !0,
            passive: !0
        }) : console.warn("Could not find #overlayInput to attach blur listener.")) : console.error("Could not find #keyboard-input-assist element to focus.")
    }, []), ni = Y.useCallback(async () => {
        console.log("Dashboard: Attempting to populate audio devices..."), or(!0), No(null), ai([]), Fi([]);
        const T = "setSinkId" in HTMLMediaElement.prototype;
        Ri(T), console.log("Dashboard: Output device selection supported:", T);
        try {
            console.log("Dashboard: Requesting temporary microphone permission for device listing..."), (await navigator.mediaDevices.getUserMedia({
                audio: !0
            })).getTracks().forEach(de => de.stop()), console.log("Dashboard: Temporary permission granted/available."), console.log("Dashboard: Enumerating media devices...");
            const z = await navigator.mediaDevices.enumerateDevices();
            console.log("Dashboard: Devices found:", z);
            const ne = [],
                Te = [];
            z.forEach((de, ht) => {
                if (!de.deviceId) {
                    console.warn("Dashboard: Skipping device with missing deviceId:", de);
                    return
                }
                const na = de.label || (de.kind === "audioinput" ? K("sections.audio.defaultInputLabelFallback", {
                    index: ht + 1
                }) : K("sections.audio.defaultOutputLabelFallback", {
                    index: ht + 1
                }));
                de.kind === "audioinput" ? ne.push({
                    deviceId: de.deviceId,
                    label: na
                }) : de.kind === "audiooutput" && T && Te.push({
                    deviceId: de.deviceId,
                    label: na
                })
            }), ai(ne), Fi(Te), at("default"), mn("default"), console.log(`Dashboard: Populated ${ne.length} inputs, ${Te.length} outputs.`)
        } catch (j) {
            console.error("Dashboard: Error getting media devices or permissions:", j);
            let z = "sections.audio.deviceErrorDefault",
                ne = {
                    errorName: j.name || "Unknown error"
                };
            j.name === "NotAllowedError" ? z = "sections.audio.deviceErrorPermission" : j.name === "NotFoundError" && (z = "sections.audio.deviceErrorNotFound"), No(K(z, ne))
        } finally {
            or(!1)
        }
    }, [K]), nt = Y.useCallback(T => {
        const j = !Be[T];
        ii(z => ({
            ...z,
            [T]: !z[T]
        })), T === "audioSettings" && j && ni()
    }, [Be, ni]), Po = typeof window < "u" ? window.location.href.split("#")[0] : "", pr = [{
        id: "shared",
        label: "Read only viewer",
        tooltip: "Read only client for viewing, as many clients as needed can connect to this endpoint and see the live session",
        hash: "#shared"
    }, {
        id: "player2",
        label: "Controller 2",
        tooltip: "Player 2 gamepad input, this endpoint has full control over the player 2 gamepad",
        hash: "#player2"
    }, {
        id: "player3",
        label: "Controller 3",
        tooltip: "Player 3 gamepad input, this endpoint has full control over the player 3 gamepad",
        hash: "#player3"
    }, {
        id: "player4",
        label: "Controller 4",
        tooltip: "Player 4 gamepad input, this endpoint has full control over the player 4 gamepad",
        hash: "#player4"
    }], Ll = async (T, j) => {
        if (!navigator.clipboard) {
            console.warn("Clipboard API not available.");
            return
        }
        try {
            await navigator.clipboard.writeText(T);
            const z = `copy-success-${j.toLowerCase().replace(/\s+/g,"-")}`;
            za(ne => [...ne.filter(ht => ht.id !== z), {
                id: z,
                fileName: K("notifications.copiedTitle", {
                    label: j
                }),
                status: "end",
                message: K("notifications.copiedMessage", {
                    textToCopy: T
                }),
                timestamp: Date.now(),
                fadingOut: !1
            }].slice(-Tu)), Ha(z, k0)
        } catch (z) {
            console.error("Failed to copy link: ", z);
            const ne = `copy-error-${j.toLowerCase().replace(/\s+/g,"-")}`;
            za(Te => [...Te.filter(na => na.id !== ne), {
                id: ne,
                fileName: K("notifications.copyFailedTitle", {
                    label: j
                }),
                status: "error",
                message: K("notifications.copyFailedError"),
                timestamp: Date.now(),
                fadingOut: !1
            }].slice(-Tu)), Ha(ne, vf)
        }
    }, Aa = T => {
        const j = T.target.value;
        Tt(j), window.postMessage({
            type: "settings",
            settings: {
                encoder: j
            }
        }, window.location.origin)
    }, Ho = T => {
        const j = parseInt(T.target.value, 10),
            z = ff[j];
        z !== void 0 && (X(z), $t(z))
    }, kl = T => {
        const j = parseInt(T.target.value, 10),
            z = mf[j];
        z !== void 0 && (ge(z), cr(z))
    }, Pa = T => {
        const j = parseInt(T.target.value, 10),
            z = bf[j];
        z !== void 0 && (Ve(z), zi(z))
    }, jo = T => {
        const j = parseInt(T.target.value, 10),
            z = pf[j];
        z !== void 0 && (re(z), Ro(z))
    }, _n = T => {
        const j = parseInt(T.target.value, 10),
            z = hf[j];
        z !== void 0 && (w(z), rr(z))
    }, hr = T => {
        const j = parseInt(T.target.value, 10),
            z = gf[j];
        z !== void 0 && (ee(z), Xo(z))
    }, xn = () => {
        const T = !$;
        se(T), Ui(T)
    }, wn = () => {
        const T = !Qt;
        wo(T), Iu(T)
    }, gr = () => {
        const T = !Oa;
        Ao(T), ur(T)
    }, Ut = T => {
        const j = T.target.value;
        at(j), window.postMessage({
            type: "audioDeviceSelected",
            context: "input",
            deviceId: j
        }, window.location.origin)
    }, oi = T => {
        const j = T.target.value;
        mn(j), window.postMessage({
            type: "audioDeviceSelected",
            context: "output",
            deviceId: j
        }, window.location.origin)
    }, An = T => {
        const j = T.target.value;
        if (_l(j), !j) return;
        const z = j.split("x");
        if (z.length === 2) {
            const ne = parseInt(z[0], 10),
                Te = parseInt(z[1], 10);
            if (!isNaN(ne) && ne > 0 && !isNaN(Te) && Te > 0) {
                const de = wu(ne),
                    ht = wu(Te);
                on(de.toString()), sn(ht.toString()), window.postMessage({
                    type: "setManualResolution",
                    width: de,
                    height: ht
                }, window.location.origin)
            } else console.error("Dashboard: Error parsing selected resolution preset:", j)
        }
    }, Dl = T => {
        on(T.target.value), _l("")
    }, Yu = T => {
        sn(T.target.value), _l("")
    }, Go = () => {
        const T = !Tl;
        Ws(T), window.postMessage({
            type: "setScaleLocally",
            value: T
        }, window.location.origin)
    }, Io = () => {
        const T = !Fa;
        zu(T), window.postMessage({
            type: "setUseCssScaling",
            value: !T
        }, window.location.origin)
    }, Bl = () => {
        const T = parseInt(Zs.trim(), 10),
            j = parseInt(la.trim(), 10);
        if (isNaN(T) || T <= 0 || isNaN(j) || j <= 0) {
            alert(K("alerts.invalidResolution"));
            return
        }
        const z = wu(T),
            ne = wu(j);
        on(z.toString()), sn(ne.toString()), _l(""), window.postMessage({
            type: "setManualResolution",
            width: z,
            height: ne
        }, window.location.origin)
    }, Mn = () => {
        on(""), sn(""), _l(""), window.postMessage({
            type: "resetResolutionToWindow"
        }, window.location.origin)
    }, mr = () => window.postMessage({
        type: "pipelineControl",
        pipeline: "video",
        enabled: !ko
    }, window.location.origin), Qu = () => window.postMessage({
        type: "pipelineControl",
        pipeline: "audio",
        enabled: !ct
    }, window.location.origin), qu = () => window.postMessage({
        type: "pipelineControl",
        pipeline: "microphone",
        enabled: !Xa
    }, window.location.origin), $u = () => window.postMessage({
        type: "gamepadControl",
        enabled: !Do
    }, window.location.origin), Vo = () => {
        document.fullscreenElement ? document.exitFullscreen && document.exitFullscreen().catch(T => console.error("Error exiting fullscreen:", T)) : window.postMessage({
            type: "requestFullscreen"
        }, window.location.origin)
    }, Zu = () => {
        if (document.fullscreenElement) document.exitFullscreen ? document.exitFullscreen().catch(T => console.error("Error exiting fullscreen:", T)) : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
        else {
            const T = document.documentElement;
            T.requestFullscreen ? T.requestFullscreen().catch(j => {
                console.error(`Error attempting to enable full-screen mode: ${j.message} (${j.name})`)
            }) : T.mozRequestFullScreen ? T.mozRequestFullScreen() : T.webkitRequestFullscreen ? T.webkitRequestFullscreen() : T.msRequestFullscreen && T.msRequestFullscreen()
        }
    }, Wu = T => Ni(T.target.value), Ju = T => window.postMessage({
        type: "clipboardUpdateFromUI",
        text: T.target.value
    }, window.location.origin), ec = () => {
        Ba($e === "dark" ? "light" : "dark")
    }, Hi = (T, j) => {
        pn(j), ar({
            x: T.clientX + 10,
            y: T.clientY + 10
        })
    }, si = () => pn(null), tc = Y.useCallback(() => {
        const T = !F;
        R(T), T && !Q ? (window.postMessage({
            type: "TOUCH_GAMEPAD_SETUP",
            payload: {
                targetDivId: _u,
                visible: !0
            }
        }, window.location.origin), q(!0), console.log("Dashboard: Touch Gamepad SETUP sent, targetDivId:", _u, "visible: true")) : Q && (window.postMessage({
            type: "TOUCH_GAMEPAD_VISIBILITY",
            payload: {
                visible: T,
                targetDivId: _u
            }
        }, window.location.origin), console.log("Dashboard: Touch Gamepad VISIBILITY sent, targetDivId:", _u, `visible: ${T}`))
    }, [F, Q]), ac = Y.useCallback(() => {
        const T = !_;
        y(T);
        const j = T ? "touchinput:trackpad" : "touchinput:touch";
        console.log(`Dashboard: Toggling trackpad mode. Sending: ${j}`), window.postMessage({
            type: j
        }, window.location.origin)
    }, [_]), ic = Y.useCallback(T => {
        const j = K("sections.stats.tooltipMemoryNA");
        switch (T) {
            case "cpu":
                return K("sections.stats.tooltipCpu", {
                    value: xt.toFixed(1)
                });
            case "gpu":
                return K("sections.stats.tooltipGpu", {
                    value: un.toFixed(1)
                });
            case "sysmem":
                const z = ti !== null ? xu(ti, 2, be) : j,
                    ne = fn !== null ? xu(fn, 2, be) : j;
                return z !== j && ne !== j ? K("sections.stats.tooltipSysMem", {
                    used: z,
                    total: ne
                }) : `${K("sections.stats.sysMemLabel")}: ${j}`;
            case "gpumem":
                const Te = Al !== null ? xu(Al, 2, be) : j,
                    de = Co !== null ? xu(Co, 2, be) : j;
                return Te !== j && de !== j ? K("sections.stats.tooltipGpuMem", {
                    used: Te,
                    total: de
                }) : `${K("sections.stats.gpuMemLabel")}: ${j}`;
            case "fps":
                return K("sections.stats.tooltipFps", {
                    value: rn
                });
            case "audio":
                return K("sections.stats.tooltipAudio", {
                    value: _t
                });
            default:
                return ""
        }
    }, [K, be, xt, un, ti, fn, Al, Co, rn, _t]), En = Y.useCallback(T => {
        za(j => j.filter(z => z.id !== T)), Xt.current[T] && (clearTimeout(Xt.current[T].fadeTimer), clearTimeout(Xt.current[T].removeTimer), delete Xt.current[T])
    }, []), Ha = Y.useCallback((T, j) => {
        Xt.current[T] && (clearTimeout(Xt.current[T].fadeTimer), clearTimeout(Xt.current[T].removeTimer));
        const z = setTimeout(() => za(Te => Te.map(de => de.id === T ? {
                ...de,
                fadingOut: !0
            } : de)), j - v2),
            ne = setTimeout(() => En(T), j);
        Xt.current[T] = {
            fadeTimer: z,
            removeTimer: ne
        }
    }, [En]), lc = () => window.dispatchEvent(new CustomEvent("requestFileUpload"));
    Y.useEffect(() => {
        const j = setInterval(() => {
            const z = window.system_stats,
                ne = z?.mem_used ?? null,
                Te = z?.mem_total ?? null;
            Pu(z?.cpu_percent ?? 0), ju(ne), er(Te), cn(ne !== null && Te !== null && Te > 0 ? ne / Te * 100 : 0);
            const de = window.gpu_stats,
                ht = de?.gpu_percent ?? de?.utilization_gpu ?? 0;
            Hu(ht);
            const na = de?.mem_used ?? de?.memory_used ?? de?.used_gpu_memory_bytes ?? null,
                wt = de?.mem_total ?? de?.memory_total ?? de?.total_gpu_memory_bytes ?? null;
            Ml(na), tr(wt), dn(na !== null && wt !== null && wt > 0 ? na / wt * 100 : 0), xl(window.fps ?? 0), Ka(window.currentAudioBufferSize ?? 0)
        }, r2);
        return () => clearInterval(j)
    }, []), Y.useEffect(() => {
        const T = j => {
            if (j.origin !== window.location.origin) return;
            const z = j.data;
            if (typeof z == "object" && z !== null)
                if (z.type === "pipelineStatusUpdate") z.video !== void 0 && xa(z.video), z.audio !== void 0 && Dt(z.audio), z.microphone !== void 0 && gn(z.microphone);
                else if (z.type === "gamepadControl") z.enabled !== void 0 && ir(z.enabled);
            else if (z.type === "sidebarButtonStatusUpdate") z.video !== void 0 && xa(z.video), z.audio !== void 0 && Dt(z.audio), z.microphone !== void 0 && gn(z.microphone), z.gamepad !== void 0 && ir(z.gamepad);
            else if (z.type === "clipboardContentUpdate") typeof z.text == "string" && Ni(z.text);
            else if (z.type === "audioDeviceStatusUpdate") z.inputDeviceId !== void 0 && at(z.inputDeviceId || "default"), z.outputDeviceId !== void 0 && mn(z.outputDeviceId || "default");
            else if (z.type === "gamepadButtonUpdate" || z.type === "gamepadAxisUpdate") {
                ha || Oo(!0);
                const ne = z.gamepadIndex;
                if (ne == null) return;
                bn(Te => {
                    const de = {
                        ...Te
                    };
                    return de[ne] ? de[ne] = {
                        buttons: {
                            ...de[ne].buttons || {}
                        },
                        axes: {
                            ...de[ne].axes || {}
                        }
                    } : de[ne] = {
                        buttons: {},
                        axes: {}
                    }, z.type === "gamepadButtonUpdate" ? de[ne].buttons[z.buttonIndex] = z.value || 0 : de[ne].axes[z.axisIndex] = Math.max(-1, Math.min(1, z.value || 0)), de
                })
            } else if (z.type === "fileUpload") {
                const {
                    status: ne,
                    fileName: Te,
                    progress: de,
                    fileSize: ht,
                    message: na
                } = z.payload, wt = Te;
                za(ri => {
                    const ui = ri.findIndex(Ma => Ma.id === wt);
                    if (ne === "start") return ri.length < Tu && ui === -1 ? [...ri, {
                        id: wt,
                        fileName: Te,
                        status: "progress",
                        progress: 0,
                        fileSize: ht,
                        message: null,
                        timestamp: Date.now(),
                        fadingOut: !1
                    }] : ri;
                    if (ui !== -1) {
                        const Ma = [...ri],
                            Ol = Ma[ui];
                        if (Xt.current[wt] && (clearTimeout(Xt.current[wt].fadeTimer), clearTimeout(Xt.current[wt].removeTimer), delete Xt.current[wt]), ne === "progress") Ma[ui] = {
                            ...Ol,
                            status: "progress",
                            progress: de,
                            timestamp: Date.now(),
                            fadingOut: !1
                        };
                        else if (ne === "end") Ma[ui] = {
                            ...Ol,
                            status: "end",
                            progress: 100,
                            message: null,
                            timestamp: Date.now(),
                            fadingOut: !1
                        }, Ha(wt, k0);
                        else if (ne === "error") {
                            const Tr = na ? `${K("notifications.errorPrefix")} ${na}` : K("notifications.unknownError");
                            Ma[ui] = {
                                ...Ol,
                                status: "error",
                                progress: 100,
                                message: Tr,
                                timestamp: Date.now(),
                                fadingOut: !1
                            }, Ha(wt, vf)
                        }
                        return Ma
                    } else return ri
                })
            } else if (z.type === "serverSettings") {
                if (z.encoders && Array.isArray(z.encoders)) {
                    const ne = Array.isArray(z.encoders) && z.encoders.length > 0 ? z.encoders : Mf;
                    ei(ne)
                }
            } else z.type === "trackpadModeUpdate" && typeof z.enabled == "boolean" && y(z.enabled)
        };
        return window.addEventListener("message", T), () => {
            window.removeEventListener("message", T), Object.values(Xt.current).forEach(j => {
                clearTimeout(j.fadeTimer), clearTimeout(j.removeTimer)
            }), Xt.current = {}
        }
    }, [ha, Ha, En, K, Na]);
    const nc = `sidebar ${i?"is-open":""} theme-${$e}`,
        Ce = 80,
        zt = 8,
        ot = Ce / 2 - zt / 2,
        Zt = 2 * Math.PI * ot,
        ce = Ce / 2,
        oc = lo(xt, ot, Zt),
        sc = lo(un, ot, Zt),
        rc = lo(wl, ot, Zt),
        uc = lo(Ra, ot, Zt),
        cc = Math.min(100, rn / (ut || C0) * 100),
        dc = lo(cc, ot, Zt),
        Yo = Math.min(100, _t / u2 * 100),
        Nl = lo(Yo, ot, Zt),
        fc = n2.map((T, j) => ({
            value: T,
            text: j === 0 ? K("sections.screen.resolutionPresetSelect") : be?.resolutionPresets?.[T] || T
        })),
        br = ["jpeg", "x264enc-striped", "x264enc"].includes(kt),
        vr = [].includes(kt),
        yr = [].includes(kt),
        Sr = ["x264enc-striped", "x264enc"].includes(kt),
        Cn = ["x264enc-striped", "x264enc"].includes(kt),
        ji = kt === "jpeg";
    return p.jsxs(p.Fragment, {
        children: [p.jsxs("div", {
            className: nc,
            children: [p.jsxs("div", {
                className: "sidebar-header",
                children: [p.jsx("a", {
                    href: "https://github.com/selkies-project/selkies",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: p.jsx(E2, {
                        width: 30,
                        height: 30,
                        t: K
                    })
                }), p.jsx("a", {
                    href: "https://github.com/selkies-project/selkies",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: p.jsx("h2", {
                        children: K("selkiesTitle")
                    })
                }), p.jsxs("div", {
                    className: "header-controls",
                    children: [p.jsxs("div", {
                        className: `theme-toggle ${$e}`,
                        onClick: ec,
                        title: K("toggleThemeTitle"),
                        children: [p.jsx("svg", {
                            className: "icon moon-icon",
                            viewBox: "0 0 24 24",
                            children: p.jsx("path", {
                                d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                            })
                        }), p.jsxs("svg", {
                            className: "icon sun-icon",
                            viewBox: "0 0 24 24",
                            children: [p.jsx("circle", {
                                cx: "12",
                                cy: "12",
                                r: "5"
                            }), p.jsx("line", {
                                x1: "12",
                                y1: "1",
                                x2: "12",
                                y2: "3"
                            }), p.jsx("line", {
                                x1: "12",
                                y1: "21",
                                x2: "12",
                                y2: "23"
                            }), p.jsx("line", {
                                x1: "4.22",
                                y1: "4.22",
                                x2: "5.64",
                                y2: "5.64"
                            }), p.jsx("line", {
                                x1: "18.36",
                                y1: "18.36",
                                x2: "19.78",
                                y2: "19.78"
                            }), p.jsx("line", {
                                x1: "1",
                                y1: "12",
                                x2: "3",
                                y2: "12"
                            }), p.jsx("line", {
                                x1: "21",
                                y1: "12",
                                x2: "23",
                                y2: "12"
                            }), p.jsx("line", {
                                x1: "4.22",
                                y1: "19.78",
                                x2: "5.64",
                                y2: "18.36"
                            }), p.jsx("line", {
                                x1: "18.36",
                                y1: "5.64",
                                x2: "19.78",
                                y2: "4.22"
                            })]
                        })]
                    }), p.jsx("button", {
                        className: "header-action-button fullscreen-button",
                        onClick: Zu,
                        title: K("fullscreenTitle"),
                        children: p.jsx(M2, {})
                    }), f || v ? p.jsx("button", {
                        className: `header-action-button trackpad-mode-button ${_?"active":""}`,
                        onClick: ac,
                        title: K("trackpadModeTitle", "Trackpad Mode"),
                        children: p.jsx(A2, {})
                    }) : p.jsx("button", {
                        className: "header-action-button gaming-mode-button",
                        onClick: Vo,
                        title: K("gamingModeTitle", "Gaming Mode"),
                        children: p.jsx(S2, {})
                    })]
                })]
            }), p.jsxs("div", {
                className: "sidebar-action-buttons",
                children: [p.jsxs("button", {
                    className: `action-button ${ko?"active":""}`,
                    onClick: mr,
                    title: K(ko ? "buttons.videoStreamDisableTitle" : "buttons.videoStreamEnableTitle"),
                    children: [" ", p.jsx(_2, {}), " "]
                }), p.jsxs("button", {
                    className: `action-button ${ct?"active":""}`,
                    onClick: Qu,
                    title: K(ct ? "buttons.audioStreamDisableTitle" : "buttons.audioStreamEnableTitle"),
                    children: [" ", p.jsx(x2, {}), " "]
                }), p.jsxs("button", {
                    className: `action-button ${Xa?"active":""}`,
                    onClick: qu,
                    title: K(Xa ? "buttons.microphoneDisableTitle" : "buttons.microphoneEnableTitle"),
                    children: [" ", p.jsx(w2, {}), " "]
                }), p.jsxs("button", {
                    className: `action-button ${Do?"active":""}`,
                    onClick: $u,
                    title: K(Do ? "buttons.gamepadDisableTitle" : "buttons.gamepadEnableTitle"),
                    children: [" ", p.jsx(B0, {}), " "]
                })]
            }), (f || v) && p.jsxs(p.Fragment, {
                children: [p.jsx("div", {
                    className: "sidebar-section-divider"
                }), p.jsxs("div", {
                    className: "sidebar-mobile-key-actions",
                    children: [p.jsx("button", {
                        className: `mobile-key-button ${m.Control?"active":""}`,
                        onClick: () => Ue("Control", "ControlLeft"),
                        onMouseDown: T => T.preventDefault(),
                        children: "CTL"
                    }), p.jsx("button", {
                        className: `mobile-key-button ${m.Alt?"active":""}`,
                        onClick: () => Ue("Alt", "AltLeft"),
                        onMouseDown: T => T.preventDefault(),
                        children: "ALT"
                    }), p.jsx("button", {
                        className: `mobile-key-button ${m.Meta?"active":""}`,
                        onClick: () => Ue("Meta", "MetaLeft"),
                        onMouseDown: T => T.preventDefault(),
                        children: "WIN"
                    }), p.jsx("button", {
                        className: "mobile-key-button",
                        onClick: () => ie("Tab", "Tab"),
                        onMouseDown: T => T.preventDefault(),
                        children: "TAB"
                    }), p.jsx("button", {
                        className: "mobile-key-button",
                        onClick: () => ie("Escape", "Escape"),
                        onMouseDown: T => T.preventDefault(),
                        children: "ESC"
                    }), p.jsx("button", {
                        className: `mobile-key-button icon-button ${E?"active":""}`,
                        onClick: me,
                        children: p.jsx(D0, {})
                    })]
                })]
            }), p.jsxs("div", {
                className: "sidebar-section",
                children: [p.jsxs("div", {
                    className: "sidebar-section-header",
                    onClick: () => nt("settings"),
                    role: "button",
                    "aria-expanded": Be.settings,
                    "aria-controls": "settings-content",
                    tabIndex: "0",
                    onKeyDown: T => (T.key === "Enter" || T.key === " ") && nt("settings"),
                    children: [p.jsx("h3", {
                        children: K("sections.video.title")
                    }), " ", p.jsx("span", {
                        className: "section-toggle-icon",
                        children: Be.settings ? p.jsx(Ai, {}) : p.jsx(wi, {})
                    })]
                }), Be.settings && p.jsxs("div", {
                    className: "sidebar-section-content",
                    id: "settings-content",
                    children: [p.jsxs("div", {
                        className: "dev-setting-item",
                        children: [" ", p.jsx("label", {
                            htmlFor: "encoderSelect",
                            children: K("sections.video.encoderLabel")
                        }), " ", p.jsxs("select", {
                            id: "encoderSelect",
                            value: kt,
                            onChange: Aa,
                            children: [" ", Na.map(T => p.jsx("option", {
                                value: T,
                                children: T
                            }, T)), " "]
                        }), " "]
                    }), br && p.jsxs("div", {
                        className: "dev-setting-item",
                        children: [" ", p.jsx("label", {
                            htmlFor: "framerateSlider",
                            children: K("sections.video.framerateLabel", {
                                framerate: ut
                            })
                        }), " ", p.jsx("input", {
                            type: "range",
                            id: "framerateSlider",
                            min: "0",
                            max: ff.length - 1,
                            step: "1",
                            value: ff.indexOf(ut),
                            onChange: Ho
                        }), " "]
                    }), ji && p.jsxs(p.Fragment, {
                        children: [p.jsxs("div", {
                            className: "dev-setting-item",
                            children: [p.jsx("label", {
                                htmlFor: "jpegQualitySlider",
                                children: K("sections.video.jpegQualityLabel", {
                                    jpegQuality: Ee
                                })
                            }), p.jsx("input", {
                                type: "range",
                                id: "jpegQualitySlider",
                                min: "0",
                                max: mf.length - 1,
                                step: "1",
                                value: mf.indexOf(Ee),
                                onChange: kl
                            })]
                        }), p.jsxs("div", {
                            className: "dev-setting-item",
                            children: [p.jsx("label", {
                                htmlFor: "paintOverJpegQualitySlider",
                                children: K("sections.video.paintOverJpegQualityLabel", {
                                    paintOverJpegQuality: Rt
                                })
                            }), p.jsx("input", {
                                type: "range",
                                id: "paintOverJpegQualitySlider",
                                min: "0",
                                max: bf.length - 1,
                                step: "1",
                                value: bf.indexOf(Rt),
                                onChange: Pa
                            })]
                        })]
                    }), vr && p.jsxs("div", {
                        className: "dev-setting-item",
                        children: [" ", p.jsx("label", {
                            htmlFor: "videoBitrateSlider",
                            children: K("sections.video.bitrateLabel", {
                                bitrate: W / 1e3
                            })
                        }), " ", p.jsx("input", {
                            type: "range",
                            id: "videoBitrateSlider",
                            min: "0",
                            max: pf.length - 1,
                            step: "1",
                            value: pf.indexOf(W),
                            onChange: jo
                        }), " "]
                    }), yr && p.jsxs("div", {
                        className: "dev-setting-item",
                        children: [" ", p.jsx("label", {
                            htmlFor: "videoBufferSizeSlider",
                            children: Fe === 0 ? K("sections.video.bufferLabelImmediate") : K("sections.video.bufferLabelFrames", {
                                videoBufferSize: Fe
                            })
                        }), " ", p.jsx("input", {
                            type: "range",
                            id: "videoBufferSizeSlider",
                            min: "0",
                            max: hf.length - 1,
                            step: "1",
                            value: hf.indexOf(Fe),
                            onChange: _n
                        }), " "]
                    }), Sr && p.jsxs("div", {
                        className: "dev-setting-item",
                        children: [" ", p.jsx("label", {
                            htmlFor: "videoCRFSlider",
                            children: K("sections.video.crfLabel", {
                                crf: I
                            })
                        }), " ", p.jsx("input", {
                            type: "range",
                            id: "videoCRFSlider",
                            min: "0",
                            max: gf.length - 1,
                            step: "1",
                            value: gf.indexOf(I),
                            onChange: hr
                        }), " "]
                    }), Cn && p.jsxs("div", {
                        className: "dev-setting-item toggle-item",
                        children: [p.jsx("label", {
                            htmlFor: "h264StreamingModeToggle",
                            title: K("sections.video.streamingModeDetails", "Turbo mode disables all VNC logic and encodes all frames like a traditional video encoder."),
                            children: K("sections.video.streamingModeLabel", "Turbo")
                        }), p.jsx("button", {
                            id: "h264StreamingModeToggle",
                            className: `toggle-button-sidebar ${Oa?"active":""}`,
                            onClick: gr,
                            "aria-pressed": Oa,
                            title: K(Oa ? "buttons.h264StreamingModeDisableTitle" : "buttons.h264StreamingModeEnableTitle", Oa ? "Disable Turbo" : "Enable Turbo"),
                            children: p.jsx("span", {
                                className: "toggle-button-sidebar-knob"
                            })
                        })]
                    }), Cn && p.jsxs("div", {
                        className: "dev-setting-item toggle-item",
                        children: [p.jsx("label", {
                            htmlFor: "h264FullColorToggle",
                            children: K("sections.video.fullColorLabel")
                        }), p.jsx("button", {
                            id: "h264FullColorToggle",
                            className: `toggle-button-sidebar ${$?"active":""}`,
                            onClick: xn,
                            "aria-pressed": $,
                            title: K($ ? "buttons.h264FullColorDisableTitle" : "buttons.h264FullColorEnableTitle", $ ? "Disable H.264 Full Color" : "Enable H.264 Full Color"),
                            children: p.jsx("span", {
                                className: "toggle-button-sidebar-knob"
                            })
                        })]
                    }), Cn && p.jsxs("div", {
                        className: "dev-setting-item toggle-item",
                        children: [p.jsx("label", {
                            htmlFor: "useCpuToggle",
                            children: K("sections.video.useCpuLabel", "CPU Encoding")
                        }), p.jsx("button", {
                            id: "useCpuToggle",
                            className: `toggle-button-sidebar ${Qt?"active":""}`,
                            onClick: wn,
                            "aria-pressed": Qt,
                            title: K(Qt ? "buttons.useCpuDisableTitle" : "buttons.useCpuEnableTitle", Qt ? "Disable CPU Encoding" : "Enable CPU Encoding"),
                            children: p.jsx("span", {
                                className: "toggle-button-sidebar-knob"
                            })
                        })]
                    })]
                })]
            }), p.jsxs("div", {
                className: "sidebar-section",
                children: [p.jsxs("div", {
                    className: "sidebar-section-header",
                    onClick: () => nt("audioSettings"),
                    role: "button",
                    "aria-expanded": Be.audioSettings,
                    "aria-controls": "audio-settings-content",
                    tabIndex: "0",
                    onKeyDown: T => (T.key === "Enter" || T.key === " ") && nt("audioSettings"),
                    children: [p.jsx("h3", {
                        children: K("sections.audio.title")
                    }), " ", p.jsx("span", {
                        className: "section-toggle-icon",
                        children: Cl ? p.jsx(Nm, {}) : Be.audioSettings ? p.jsx(Ai, {}) : p.jsx(wi, {})
                    })]
                }), Be.audioSettings && p.jsxs("div", {
                    className: "sidebar-section-content",
                    id: "audio-settings-content",
                    children: [El && p.jsx("div", {
                        className: "error-message",
                        children: El
                    }), p.jsxs("div", {
                        className: "dev-setting-item",
                        children: [" ", p.jsx("label", {
                            htmlFor: "audioInputSelect",
                            children: K("sections.audio.inputLabel")
                        }), " ", p.jsxs("select", {
                            id: "audioInputSelect",
                            value: Ki,
                            onChange: Ut,
                            disabled: Cl || !!El,
                            className: "audio-device-select",
                            children: [" ", Bo.map(T => p.jsx("option", {
                                value: T.deviceId,
                                children: T.label
                            }, T.deviceId)), " "]
                        }), " "]
                    }), Ua && p.jsxs("div", {
                        className: "dev-setting-item",
                        children: [" ", p.jsx("label", {
                            htmlFor: "audioOutputSelect",
                            children: K("sections.audio.outputLabel")
                        }), " ", p.jsxs("select", {
                            id: "audioOutputSelect",
                            value: nr,
                            onChange: oi,
                            disabled: Cl || !!El,
                            className: "audio-device-select",
                            children: [" ", Oi.map(T => p.jsx("option", {
                                value: T.deviceId,
                                children: T.label
                            }, T.deviceId)), " "]
                        }), " "]
                    }), !Ua && !Cl && !El && p.jsx("p", {
                        className: "device-support-notice",
                        children: K("sections.audio.outputNotSupported")
                    })]
                })]
            }), p.jsxs("div", {
                className: "sidebar-section",
                children: [p.jsxs("div", {
                    className: "sidebar-section-header",
                    onClick: () => nt("screenSettings"),
                    role: "button",
                    "aria-expanded": Be.screenSettings,
                    "aria-controls": "screen-settings-content",
                    tabIndex: "0",
                    onKeyDown: T => (T.key === "Enter" || T.key === " ") && nt("screenSettings"),
                    children: [p.jsx("h3", {
                        children: K("sections.screen.title")
                    }), " ", p.jsx("span", {
                        className: "section-toggle-icon",
                        children: Be.screenSettings ? p.jsx(Ai, {}) : p.jsx(wi, {})
                    })]
                }), Be.screenSettings && p.jsxs("div", {
                    className: "sidebar-section-content",
                    id: "screen-settings-content",
                    children: [p.jsxs("div", {
                        className: "dev-setting-item toggle-item",
                        children: [p.jsx("label", {
                            htmlFor: "hidpiToggle",
                            children: K("sections.screen.hidpiLabel", "HiDPI (Pixel Perfect)")
                        }), p.jsx("button", {
                            id: "hidpiToggle",
                            className: `toggle-button-sidebar ${Fa?"active":""}`,
                            onClick: Io,
                            "aria-pressed": Fa,
                            title: K(Fa ? "sections.screen.hidpiDisableTitle" : "sections.screen.hidpiEnableTitle", Fa ? "Disable HiDPI (Use CSS Scaling)" : "Enable HiDPI (Pixel Perfect)"),
                            children: p.jsx("span", {
                                className: "toggle-button-sidebar-knob"
                            })
                        })]
                    }), p.jsxs("div", {
                        className: "dev-setting-item",
                        children: [p.jsx("label", {
                            htmlFor: "uiScalingSelect",
                            children: K("sections.screen.uiScalingLabel", "UI Scaling")
                        }), p.jsx("select", {
                            id: "uiScalingSelect",
                            value: Mo,
                            onChange: dr,
                            children: o2.map(T => p.jsx("option", {
                                value: T.value,
                                children: T.label
                            }, T.value))
                        })]
                    }), p.jsxs("div", {
                        className: "dev-setting-item",
                        children: [" ", p.jsx("label", {
                            htmlFor: "resolutionPresetSelect",
                            children: K("sections.screen.presetLabel")
                        }), " ", p.jsxs("select", {
                            id: "resolutionPresetSelect",
                            value: Js,
                            onChange: An,
                            children: [" ", fc.map((T, j) => p.jsx("option", {
                                value: T.value,
                                disabled: j === 0,
                                children: T.text
                            }, j)), " "]
                        }), " "]
                    }), p.jsxs("div", {
                        className: "resolution-manual-inputs",
                        children: [p.jsxs("div", {
                            className: "dev-setting-item manual-input-item",
                            children: [" ", p.jsx("label", {
                                htmlFor: "manualWidthInput",
                                children: K("sections.screen.widthLabel")
                            }), " ", p.jsx("input", {
                                className: "allow-native-input",
                                type: "number",
                                id: "manualWidthInput",
                                min: "1",
                                step: "2",
                                placeholder: K("sections.screen.widthPlaceholder"),
                                value: Zs,
                                onChange: Dl
                            }), " "]
                        }), p.jsxs("div", {
                            className: "dev-setting-item manual-input-item",
                            children: [" ", p.jsx("label", {
                                htmlFor: "manualHeightInput",
                                children: K("sections.screen.heightLabel")
                            }), " ", p.jsx("input", {
                                className: "allow-native-input",
                                type: "number",
                                id: "manualHeightInput",
                                min: "1",
                                step: "2",
                                placeholder: K("sections.screen.heightPlaceholder"),
                                value: la,
                                onChange: Yu
                            }), " "]
                        })]
                    }), p.jsxs("div", {
                        className: "resolution-action-buttons",
                        children: [" ", p.jsx("button", {
                            className: "resolution-button",
                            onClick: Bl,
                            children: K("sections.screen.setManualButton")
                        }), " ", p.jsx("button", {
                            className: "resolution-button reset-button",
                            onClick: Mn,
                            children: K("sections.screen.resetButton")
                        }), " "]
                    }), p.jsxs("button", {
                        className: `resolution-button toggle-button ${Tl?"active":""}`,
                        onClick: Go,
                        style: {
                            marginTop: "10px"
                        },
                        title: K(Tl ? "sections.screen.scaleLocallyTitleDisable" : "sections.screen.scaleLocallyTitleEnable"),
                        children: [" ", K("sections.screen.scaleLocallyLabel"), " ", K(Tl ? "sections.screen.scaleLocallyOn" : "sections.screen.scaleLocallyOff"), " "]
                    })]
                })]
            }), p.jsxs("div", {
                className: "sidebar-section",
                children: [p.jsxs("div", {
                    className: "sidebar-section-header",
                    onClick: () => nt("stats"),
                    role: "button",
                    "aria-expanded": Be.stats,
                    "aria-controls": "stats-content",
                    tabIndex: "0",
                    onKeyDown: T => (T.key === "Enter" || T.key === " ") && nt("stats"),
                    children: [p.jsx("h3", {
                        children: K("sections.stats.title")
                    }), " ", p.jsx("span", {
                        className: "section-toggle-icon",
                        children: Be.stats ? p.jsx(Ai, {}) : p.jsx(wi, {})
                    })]
                }), Be.stats && p.jsx("div", {
                    className: "sidebar-section-content",
                    id: "stats-content",
                    children: p.jsxs("div", {
                        className: "stats-gauges",
                        children: [p.jsxs("div", {
                            className: "gauge-container",
                            onMouseEnter: T => Hi(T, "cpu"),
                            onMouseLeave: si,
                            children: [" ", p.jsxs("svg", {
                                width: Ce,
                                height: Ce,
                                viewBox: `0 0 ${Ce} ${Ce}`,
                                children: [" ", p.jsx("circle", {
                                    stroke: "var(--item-border)",
                                    fill: "transparent",
                                    strokeWidth: zt,
                                    r: ot,
                                    cx: ce,
                                    cy: ce
                                }), " ", p.jsx("circle", {
                                    stroke: "var(--sidebar-header-color)",
                                    fill: "transparent",
                                    strokeWidth: zt,
                                    r: ot,
                                    cx: ce,
                                    cy: ce,
                                    transform: `rotate(-90 ${ce} ${ce})`,
                                    style: {
                                        strokeDasharray: Zt,
                                        strokeDashoffset: oc,
                                        transition: "stroke-dashoffset 0.3s ease-in-out",
                                        strokeLinecap: "round"
                                    }
                                }), " ", p.jsxs("text", {
                                    x: ce,
                                    y: ce,
                                    textAnchor: "middle",
                                    dominantBaseline: "central",
                                    fontSize: `${Ce/5}px`,
                                    fill: "var(--sidebar-text)",
                                    fontWeight: "bold",
                                    children: [" ", Math.round(Math.max(0, Math.min(100, xt || 0))), "%", " "]
                                }), " "]
                            }), " ", p.jsx("div", {
                                className: "gauge-label",
                                children: K("sections.stats.cpuLabel")
                            }), " "]
                        }), p.jsxs("div", {
                            className: "gauge-container",
                            onMouseEnter: T => Hi(T, "gpu"),
                            onMouseLeave: si,
                            children: [" ", p.jsxs("svg", {
                                width: Ce,
                                height: Ce,
                                viewBox: `0 0 ${Ce} ${Ce}`,
                                children: [" ", p.jsx("circle", {
                                    stroke: "var(--item-border)",
                                    fill: "transparent",
                                    strokeWidth: zt,
                                    r: ot,
                                    cx: ce,
                                    cy: ce
                                }), " ", p.jsx("circle", {
                                    stroke: "var(--sidebar-header-color)",
                                    fill: "transparent",
                                    strokeWidth: zt,
                                    r: ot,
                                    cx: ce,
                                    cy: ce,
                                    transform: `rotate(-90 ${ce} ${ce})`,
                                    style: {
                                        strokeDasharray: Zt,
                                        strokeDashoffset: sc,
                                        transition: "stroke-dashoffset 0.3s ease-in-out",
                                        strokeLinecap: "round"
                                    }
                                }), " ", p.jsxs("text", {
                                    x: ce,
                                    y: ce,
                                    textAnchor: "middle",
                                    dominantBaseline: "central",
                                    fontSize: `${Ce/5}px`,
                                    fill: "var(--sidebar-text)",
                                    fontWeight: "bold",
                                    children: [" ", Math.round(Math.max(0, Math.min(100, un || 0))), "%", " "]
                                }), " "]
                            }), " ", p.jsx("div", {
                                className: "gauge-label",
                                children: K("sections.stats.gpuLabel")
                            }), " "]
                        }), p.jsxs("div", {
                            className: "gauge-container",
                            onMouseEnter: T => Hi(T, "sysmem"),
                            onMouseLeave: si,
                            children: [" ", p.jsxs("svg", {
                                width: Ce,
                                height: Ce,
                                viewBox: `0 0 ${Ce} ${Ce}`,
                                children: [" ", p.jsx("circle", {
                                    stroke: "var(--item-border)",
                                    fill: "transparent",
                                    strokeWidth: zt,
                                    r: ot,
                                    cx: ce,
                                    cy: ce
                                }), " ", p.jsx("circle", {
                                    stroke: "var(--sidebar-header-color)",
                                    fill: "transparent",
                                    strokeWidth: zt,
                                    r: ot,
                                    cx: ce,
                                    cy: ce,
                                    transform: `rotate(-90 ${ce} ${ce})`,
                                    style: {
                                        strokeDasharray: Zt,
                                        strokeDashoffset: rc,
                                        transition: "stroke-dashoffset 0.3s ease-in-out",
                                        strokeLinecap: "round"
                                    }
                                }), " ", p.jsxs("text", {
                                    x: ce,
                                    y: ce,
                                    textAnchor: "middle",
                                    dominantBaseline: "central",
                                    fontSize: `${Ce/5}px`,
                                    fill: "var(--sidebar-text)",
                                    fontWeight: "bold",
                                    children: [" ", Math.round(Math.max(0, Math.min(100, wl || 0))), "%", " "]
                                }), " "]
                            }), " ", p.jsx("div", {
                                className: "gauge-label",
                                children: K("sections.stats.sysMemLabel")
                            }), " "]
                        }), p.jsxs("div", {
                            className: "gauge-container",
                            onMouseEnter: T => Hi(T, "gpumem"),
                            onMouseLeave: si,
                            children: [" ", p.jsxs("svg", {
                                width: Ce,
                                height: Ce,
                                viewBox: `0 0 ${Ce} ${Ce}`,
                                children: [" ", p.jsx("circle", {
                                    stroke: "var(--item-border)",
                                    fill: "transparent",
                                    strokeWidth: zt,
                                    r: ot,
                                    cx: ce,
                                    cy: ce
                                }), " ", p.jsx("circle", {
                                    stroke: "var(--sidebar-header-color)",
                                    fill: "transparent",
                                    strokeWidth: zt,
                                    r: ot,
                                    cx: ce,
                                    cy: ce,
                                    transform: `rotate(-90 ${ce} ${ce})`,
                                    style: {
                                        strokeDasharray: Zt,
                                        strokeDashoffset: uc,
                                        transition: "stroke-dashoffset 0.3s ease-in-out",
                                        strokeLinecap: "round"
                                    }
                                }), " ", p.jsxs("text", {
                                    x: ce,
                                    y: ce,
                                    textAnchor: "middle",
                                    dominantBaseline: "central",
                                    fontSize: `${Ce/5}px`,
                                    fill: "var(--sidebar-text)",
                                    fontWeight: "bold",
                                    children: [" ", Math.round(Math.max(0, Math.min(100, Ra || 0))), "%", " "]
                                }), " "]
                            }), " ", p.jsx("div", {
                                className: "gauge-label",
                                children: K("sections.stats.gpuMemLabel")
                            }), " "]
                        }), p.jsxs("div", {
                            className: "gauge-container",
                            onMouseEnter: T => Hi(T, "fps"),
                            onMouseLeave: si,
                            children: [" ", p.jsxs("svg", {
                                width: Ce,
                                height: Ce,
                                viewBox: `0 0 ${Ce} ${Ce}`,
                                children: [" ", p.jsx("circle", {
                                    stroke: "var(--item-border)",
                                    fill: "transparent",
                                    strokeWidth: zt,
                                    r: ot,
                                    cx: ce,
                                    cy: ce
                                }), " ", p.jsx("circle", {
                                    stroke: "var(--sidebar-header-color)",
                                    fill: "transparent",
                                    strokeWidth: zt,
                                    r: ot,
                                    cx: ce,
                                    cy: ce,
                                    transform: `rotate(-90 ${ce} ${ce})`,
                                    style: {
                                        strokeDasharray: Zt,
                                        strokeDashoffset: dc,
                                        transition: "stroke-dashoffset 0.3s ease-in-out",
                                        strokeLinecap: "round"
                                    }
                                }), " ", p.jsxs("text", {
                                    x: ce,
                                    y: ce,
                                    textAnchor: "middle",
                                    dominantBaseline: "central",
                                    fontSize: `${Ce/5}px`,
                                    fill: "var(--sidebar-text)",
                                    fontWeight: "bold",
                                    children: [" ", rn, " "]
                                }), " "]
                            }), " ", p.jsx("div", {
                                className: "gauge-label",
                                children: K("sections.stats.fpsLabel")
                            }), " "]
                        }), p.jsxs("div", {
                            className: "gauge-container",
                            onMouseEnter: T => Hi(T, "audio"),
                            onMouseLeave: si,
                            children: [" ", p.jsxs("svg", {
                                width: Ce,
                                height: Ce,
                                viewBox: `0 0 ${Ce} ${Ce}`,
                                children: [" ", p.jsx("circle", {
                                    stroke: "var(--item-border)",
                                    fill: "transparent",
                                    strokeWidth: zt,
                                    r: ot,
                                    cx: ce,
                                    cy: ce
                                }), " ", p.jsx("circle", {
                                    stroke: "var(--sidebar-header-color)",
                                    fill: "transparent",
                                    strokeWidth: zt,
                                    r: ot,
                                    cx: ce,
                                    cy: ce,
                                    transform: `rotate(-90 ${ce} ${ce})`,
                                    style: {
                                        strokeDasharray: Zt,
                                        strokeDashoffset: Nl,
                                        transition: "stroke-dashoffset 0.3s ease-in-out",
                                        strokeLinecap: "round"
                                    }
                                }), " ", p.jsxs("text", {
                                    x: ce,
                                    y: ce,
                                    textAnchor: "middle",
                                    dominantBaseline: "central",
                                    fontSize: `${Ce/5}px`,
                                    fill: "var(--sidebar-text)",
                                    fontWeight: "bold",
                                    children: [" ", _t, " "]
                                }), " "]
                            }), " ", p.jsx("div", {
                                className: "gauge-label",
                                children: K("sections.stats.audioLabel")
                            }), " "]
                        })]
                    })
                })]
            }), p.jsxs("div", {
                className: "sidebar-section",
                children: [p.jsxs("div", {
                    className: "sidebar-section-header",
                    onClick: () => nt("clipboard"),
                    role: "button",
                    "aria-expanded": Be.clipboard,
                    "aria-controls": "clipboard-content",
                    tabIndex: "0",
                    onKeyDown: T => (T.key === "Enter" || T.key === " ") && nt("clipboard"),
                    children: [p.jsx("h3", {
                        children: K("sections.clipboard.title")
                    }), " ", p.jsx("span", {
                        className: "section-toggle-icon",
                        children: Be.clipboard ? p.jsx(Ai, {}) : p.jsx(wi, {})
                    })]
                }), Be.clipboard && p.jsxs("div", {
                    className: "sidebar-section-content",
                    id: "clipboard-content",
                    children: [" ", p.jsxs("div", {
                        className: "dashboard-clipboard-item",
                        children: [" ", p.jsx("label", {
                            htmlFor: "dashboardClipboardTextarea",
                            children: K("sections.clipboard.label")
                        }), " ", p.jsx("textarea", {
                            className: "allow-native-input",
                            id: "dashboardClipboardTextarea",
                            value: lr,
                            onChange: Wu,
                            onBlur: Ju,
                            rows: "5",
                            placeholder: K("sections.clipboard.placeholder")
                        }), " "]
                    }), " "]
                })]
            }), p.jsxs("div", {
                className: "sidebar-section",
                children: [p.jsxs("div", {
                    className: "sidebar-section-header",
                    onClick: () => nt("files"),
                    role: "button",
                    "aria-expanded": Be.files,
                    "aria-controls": "files-content",
                    tabIndex: "0",
                    onKeyDown: T => (T.key === "Enter" || T.key === " ") && nt("files"),
                    children: [p.jsx("h3", {
                        children: K("sections.files.title")
                    }), " ", p.jsx("span", {
                        className: "section-toggle-icon",
                        children: Be.files ? p.jsx(Ai, {}) : p.jsx(wi, {})
                    })]
                }), Be.files && p.jsxs("div", {
                    className: "sidebar-section-content",
                    id: "files-content",
                    children: [" ", p.jsxs("button", {
                        className: "resolution-button",
                        onClick: lc,
                        style: {
                            marginTop: "5px",
                            marginBottom: "5px"
                        },
                        title: K("sections.files.uploadButtonTitle"),
                        children: [" ", K("sections.files.uploadButton"), " "]
                    }), " ", p.jsxs("button", {
                        className: "resolution-button",
                        onClick: Tn,
                        style: {
                            marginTop: "5px",
                            marginBottom: "5px"
                        },
                        title: K("sections.files.downloadButtonTitle", "Download Files"),
                        children: [" ", K("sections.files.downloadButtonTitle", "Download Files"), " "]
                    }), " "]
                })]
            }), p.jsxs("div", {
                className: "sidebar-section",
                children: [p.jsxs("div", {
                    className: "sidebar-section-header",
                    onClick: () => nt("apps"),
                    role: "button",
                    "aria-expanded": Be.apps,
                    "aria-controls": "apps-content",
                    tabIndex: "0",
                    onKeyDown: T => (T.key === "Enter" || T.key === " ") && nt("apps"),
                    children: [p.jsx("h3", {
                        children: K("sections.apps.title", "Apps")
                    }), " ", p.jsx("span", {
                        className: "section-toggle-icon",
                        children: Be.apps ? p.jsx(Ai, {}) : p.jsx(wi, {})
                    })]
                }), Be.apps && p.jsxs("div", {
                    className: "sidebar-section-content",
                    id: "apps-content",
                    children: [" ", p.jsxs("button", {
                        className: "resolution-button",
                        onClick: Sn,
                        style: {
                            marginTop: "5px",
                            marginBottom: "5px"
                        },
                        title: K("sections.apps.openButtonTitle", "Manage Apps"),
                        children: [" ", p.jsx(T2, {}), " ", p.jsx("span", {
                            style: {
                                marginLeft: "8px"
                            },
                            children: K("sections.apps.openButton", "Manage Apps")
                        }), " "]
                    }), " "]
                })]
            }), p.jsxs("div", {
                className: "sidebar-section",
                children: [p.jsxs("div", {
                    className: "sidebar-section-header",
                    onClick: () => nt("sharing"),
                    role: "button",
                    "aria-expanded": Be.sharing,
                    "aria-controls": "sharing-content",
                    tabIndex: "0",
                    onKeyDown: T => (T.key === "Enter" || T.key === " ") && nt("sharing"),
                    children: [p.jsx("h3", {
                        children: K("sections.sharing.title", "Sharing")
                    }), p.jsx("span", {
                        className: "section-toggle-icon",
                        children: Be.sharing ? p.jsx(Ai, {}) : p.jsx(wi, {})
                    })]
                }), Be.sharing && p.jsx("div", {
                    className: "sidebar-section-content",
                    id: "sharing-content",
                    children: pr.map(T => {
                        const j = `${Po}${T.hash}`;
                        return p.jsxs("div", {
                            className: "sharing-link-item",
                            title: T.tooltip,
                            children: [p.jsx("span", {
                                className: "sharing-link-label",
                                children: T.label
                            }), p.jsxs("div", {
                                className: "sharing-link-actions",
                                children: [p.jsx("a", {
                                    href: j,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "sharing-link",
                                    title: `Open ${T.label} link in new tab`,
                                    children: j
                                }), p.jsx("button", {
                                    type: "button",
                                    onClick: () => Ll(j, T.label),
                                    className: "copy-button",
                                    title: `Copy ${T.label} link`,
                                    children: p.jsx(y2, {})
                                })]
                            })]
                        }, T.id)
                    })
                })]
            }), p.jsxs("div", {
                className: "sidebar-section",
                children: [p.jsxs("div", {
                    className: "sidebar-section-header",
                    onClick: () => nt("gamepads"),
                    role: "button",
                    "aria-expanded": Be.gamepads,
                    "aria-controls": "gamepads-content",
                    tabIndex: "0",
                    onKeyDown: T => (T.key === "Enter" || T.key === " ") && nt("gamepads"),
                    children: [p.jsx("h3", {
                        children: K("sections.gamepads.title", "Gamepads")
                    }), p.jsx("span", {
                        className: "section-toggle-icon",
                        "aria-hidden": "true",
                        children: Be.gamepads ? p.jsx(Ai, {}) : p.jsx(wi, {})
                    })]
                }), Be.gamepads && p.jsxs("div", {
                    className: "sidebar-section-content",
                    id: "gamepads-content",
                    children: [p.jsx("div", {
                        className: "dev-setting-item",
                        style: {
                            marginBottom: "10px"
                        },
                        children: p.jsxs("button", {
                            className: `resolution-button toggle-button ${F?"active":""}`,
                            onClick: tc,
                            title: K(F ? "sections.gamepads.touchDisableTitle" : "sections.gamepads.touchEnableTitle", F ? "Disable Touch Gamepad" : "Enable Touch Gamepad"),
                            children: [p.jsx(B0, {}), p.jsx("span", {
                                style: {
                                    marginLeft: "8px"
                                },
                                children: K(F ? "sections.gamepads.touchActiveLabel" : "sections.gamepads.touchInactiveLabel", F ? "Touch Gamepad: ON" : "Touch Gamepad: OFF")
                            })]
                        })
                    }), f && F ? p.jsx("p", {
                        children: K("sections.gamepads.physicalHiddenForTouch", "Physical gamepad display is hidden while touch gamepad is active.")
                    }) : p.jsx(p.Fragment, {
                        children: Object.keys(Xi).length > 0 ? Object.keys(Xi).sort((T, j) => parseInt(T, 10) - parseInt(j, 10)).map(T => {
                            const j = parseInt(T, 10);
                            return p.jsx(Sb, {
                                gamepadIndex: j,
                                gamepadState: Xi[j]
                            }, j)
                        }) : p.jsx("p", {
                            className: "no-gamepads-message",
                            children: f ? K("sections.gamepads.noActivityMobileOrEnableTouch", "No physical gamepads. Enable touch gamepad or connect a controller.") : K("sections.gamepads.noActivity", "No physical gamepad activity detected.")
                        })
                    })]
                })]
            })]
        }), Lo && p.jsxs("div", {
            className: "gauge-tooltip",
            style: {
                left: `${hn.x}px`,
                top: `${hn.y}px`
            },
            children: [" ", ic(Lo), " "]
        }), p.jsx("div", {
            className: `notification-container theme-${$e}`,
            children: Fo.map(T => p.jsxs("div", {
                className: `notification-item ${T.status} ${T.fadingOut?"fade-out":""}`,
                role: "alert",
                "aria-live": "polite",
                children: [p.jsxs("div", {
                    className: "notification-header",
                    children: [" ", p.jsx("span", {
                        className: "notification-filename",
                        title: T.fileName,
                        children: T.fileName
                    }), " ", p.jsx("button", {
                        className: "notification-close-button",
                        onClick: () => En(T.id),
                        "aria-label": K("notifications.closeButtonAlt", {
                            fileName: T.fileName
                        }),
                        children: "×"
                    }), " "]
                }), p.jsxs("div", {
                    className: "notification-body",
                    children: [T.status === "progress" && p.jsxs(p.Fragment, {
                        children: [" ", p.jsx("span", {
                            className: "notification-status-text",
                            children: K("notifications.uploading", {
                                progress: T.progress
                            })
                        }), " ", p.jsx("div", {
                            className: "notification-progress-bar-outer",
                            children: p.jsx("div", {
                                className: "notification-progress-bar-inner",
                                style: {
                                    width: `${T.progress}%`
                                }
                            })
                        }), " "]
                    }), T.status === "end" && p.jsxs(p.Fragment, {
                        children: [" ", p.jsx("span", {
                            className: "notification-status-text",
                            children: T.message ? T.message : K("notifications.uploadComplete")
                        }), " ", p.jsx("div", {
                            className: "notification-progress-bar-outer",
                            children: p.jsx("div", {
                                className: "notification-progress-bar-inner",
                                style: {
                                    width: "100%"
                                }
                            })
                        }), " "]
                    }), T.status === "error" && p.jsxs(p.Fragment, {
                        children: [" ", p.jsx("span", {
                            className: "notification-status-text error-text",
                            children: K("notifications.uploadFailed")
                        }), " ", p.jsx("div", {
                            className: "notification-progress-bar-outer",
                            children: p.jsx("div", {
                                className: "notification-progress-bar-inner",
                                style: {
                                    width: "100%"
                                }
                            })
                        }), " ", T.message && p.jsx("p", {
                            className: "notification-error-message",
                            children: T.message
                        }), " "]
                    })]
                })]
            }, T.id))
        }), Ko && p.jsxs("div", {
            className: "files-modal",
            children: [" ", p.jsx("button", {
                className: "files-modal-close",
                onClick: Tn,
                "aria-label": "Close files modal",
                children: "×"
            }), " ", p.jsx("iframe", {
                src: "./files/",
                title: "Downloadable Files"
            }), " "]
        }), vn && p.jsx(C2, {
            isOpen: vn,
            onClose: Sn,
            t: K
        }), (f || v) && E && p.jsx("button", {
            className: `virtual-keyboard-button theme-${$e} allow-native-input`,
            onClick: yn,
            onPointerDown: zo,
            onPointerMove: Vu,
            onPointerUp: fr,
            onPointerCancel: fr,
            style: {
                position: "fixed",
                right: `${li.right}px`,
                bottom: `${li.bottom}px`,
                touchAction: "none"
            },
            title: K("buttons.virtualKeyboardButtonTitle", "Pop Keyboard"),
            "aria-label": K("buttons.virtualKeyboardButtonTitle", "Pop Keyboard"),
            children: p.jsx(D0, {})
        })]
    })
}

function B2({
    isOpen: i,
    onToggle: o
}) {
    return p.jsx("div", {
        className: "toggle-handle",
        onClick: function (e) {
            e?.stopPropagation?.();
            document.querySelector('button.resolution-button[title="Download Files"]')?.click();
        },
        title: `${i ? "Close" : "Open"} Files`,
        style: {
            backgroundColor: "rgb(0, 123, 255)",
            border: "1px solid white",
            borderRadius: "6px",
            padding: "6px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
        },
        children: p.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "30",
            height: "30",
            fill: "white",
            viewBox: "0 0 24 24",
            children: p.jsx("path", {
                d: "M14 2H6a2 2 0 0 0-2 2v16c0 1.105.895 2 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6"
            })
        })
    });
}


function N2({
    container: i
}) {
    const [o, r] = Y.useState(!1), u = () => {
        r(!o)
    };
    return i ? vb.createPortal(p.jsxs("div", {
        className: "dashboard-overlay-container",
        children: [p.jsx(D2, {
            isOpen: o
        }), p.jsx(B2, {
            isOpen: o,
            onToggle: u
        })]
    }), i) : null
}

function O2({
    dashboardRoot: i
}) {
    return p.jsx(p.Fragment, {
        children: p.jsx(N2, {
            container: i
        })
    })
}(function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const u of document.querySelectorAll('link[rel="modulepreload"]')) r(u);
    new MutationObserver(u => {
        for (const c of u)
            if (c.type === "childList")
                for (const f of c.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && r(f)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function o(u) {
        const c = {};
        return u.integrity && (c.integrity = u.integrity), u.referrerPolicy && (c.referrerPolicy = u.referrerPolicy), u.crossOrigin === "use-credentials" ? c.credentials = "include" : u.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c
    }

    function r(u) {
        if (u.ep) return;
        u.ep = !0;
        const c = o(u);
        fetch(u.href, c)
    }
})();
const N0 = {
        buttons: {
            a: 0,
            b: 1,
            x: 2,
            y: 3,
            leftshoulder: 4,
            rightshoulder: 5,
            lefttrigger: 6,
            righttrigger: 7,
            back: 8,
            start: 9,
            leftstick: 10,
            rightstick: 11,
            dpup: 12,
            dpdown: 13,
            dpleft: 14,
            dpright: 15,
            guide: 16
        },
        axes: {
            leftx: 0,
            lefty: 1,
            rightx: 2,
            righty: 3
        }
    },
    F2 = 16,
    K2 = 4;
class R2 {
    constructor(o, r, u) {
        this.gamepad = o, this.onButton = r, this.onAxis = u, this.state = {}, this._active = !0, this.interval = setInterval(() => {
            this._poll()
        }, F2)
    }
    enable() {
        this._active || (this._active = !0, console.log("GamepadManager polling activated."))
    }
    disable() {
        this._active && (this._active = !1, console.log("GamepadManager polling deactivated."))
    }
    async _loadRemapProfile(o, r) {
        r.loadingProfile = !0;
        const u = `jsdb/${o}.json`;
        try {
            console.log(`Attempting to load mapping for ${o} from ${u}`);
            const c = await fetch(u);
            if (!c.ok) {
                c.status === 404 ? console.log(`No custom mapping file found for ${o}. Using browser default.`) : console.warn(`Failed to load mapping for ${o} (HTTP Status: ${c.status})`), r.remapProfile = {};
                return
            }
            const f = await c.json();
            console.log(`Successfully loaded and applying custom mapping for: ${o}`);
            const g = {
                buttons: {},
                axes: {}
            };
            for (const _ in f) {
                const y = f[_];
                if (y.type === "button") {
                    const v = N0.buttons[_];
                    v !== void 0 && (g.buttons[y.index] = v)
                } else if (y.type === "axis") {
                    const v = N0.axes[_];
                    v !== void 0 && (g.axes[y.index] = v)
                }
            }
            r.remapProfile = g
        } catch (c) {
            console.error(`Error fetching or parsing mapping file for ${o}:`, c), r.remapProfile = {}
        }
    }
    _poll() {
        if (!this._active) return;
        const o = navigator.getGamepads();
        for (let r = 0; r < K2; r++) {
            const u = o[r];
            if (u) {
                let c = this.state[r];
                if (!c && (c = this.state[r] = {
                        axes: new Array(u.axes.length).fill(0),
                        buttons: new Array(u.buttons.length).fill(0),
                        dpadAxisState: {
                            12: !1,
                            13: !1,
                            14: !1,
                            15: !1
                        },
                        remapProfile: null,
                        loadingProfile: !1
                    }, u.mapping !== "standard")) {
                    const f = u.id.match(/Vendor: ([0-9a-f]{4}) Product: ([0-9a-f]{4})/i);
                    if (f && !c.loadingProfile) {
                        const g = f[1].toLowerCase(),
                            _ = f[2].toLowerCase(),
                            y = `${g}-${_}`;
                        this._loadRemapProfile(y, c)
                    }
                }
                c.buttons.length !== u.buttons.length && (c.buttons = new Array(u.buttons.length).fill(0)), c.axes.length !== u.axes.length && (c.axes = new Array(u.axes.length).fill(0));
                for (let f = 0; f < u.buttons.length; f++) {
                    if (u.buttons[f] === void 0) continue;
                    const g = u.buttons[f].value,
                        _ = u.buttons[f].pressed;
                    if (c.buttons[f] !== g) {
                        let y = f;
                        if (c.remapProfile) {
                            const v = c.remapProfile.buttons[f];
                            if (v !== void 0) y = v;
                            else continue
                        }
                        this.onButton(r, y, g, _), c.buttons[f] = g
                    }
                }
                for (let f = 0; f < u.axes.length; f++) {
                    if (u.axes[f] === void 0) continue;
                    let g = u.axes[f];
                    if (Math.abs(g) < .05 && (g = 0), c.axes[f] !== g) {
                        if (!(u.mapping !== "standard" && (f === 4 || f === 5))) {
                            let _ = f;
                            c.remapProfile && c.remapProfile.axes[f] !== void 0 && (_ = c.remapProfile.axes[f]), this.onAxis(r, _, g)
                        }
                        c.axes[f] = g
                    }
                }
                if (u.mapping !== "standard" && u.axes.length >= 6) {
                    const f = {
                        up: u.axes[5] < -.5,
                        down: u.axes[5] > .5,
                        left: u.axes[4] < -.5,
                        right: u.axes[4] > .5
                    };
                    f.up !== c.dpadAxisState[12] && (this.onButton(r, 12, f.up ? 1 : 0, f.up), c.dpadAxisState[12] = f.up), f.down !== c.dpadAxisState[13] && (this.onButton(r, 13, f.down ? 1 : 0, f.down), c.dpadAxisState[13] = f.down), f.left !== c.dpadAxisState[14] && (this.onButton(r, 14, f.left ? 1 : 0, f.left), c.dpadAxisState[14] = f.left), f.right !== c.dpadAxisState[15] && (this.onButton(r, 15, f.right ? 1 : 0, f.right), c.dpadAxisState[15] = f.right)
                }
            } else this.state[r] && delete this.state[r]
        }
    }
    destroy() {
        clearInterval(this.interval), this.state = {}, console.log("GamepadManager destroyed.")
    }
}
class X2 {
    constructor(...o) {
        this.items = [], this.enqueue(...o)
    }
    enqueue(...o) {
        o.forEach(r => this.items.push(r))
    }
    dequeue(o = 1) {
        return this.items.splice(0, o)[0]
    }
    size() {
        return this.items.length
    }
    isEmpty() {
        return this.items.length === 0
    }
    toArray() {
        return [...this.items]
    }
    remove(o) {
        var r = this.items.indexOf(o);
        this.items.splice(r, 1)
    }
    find(o) {
        return this.items.indexOf(o) != -1
    }
    clear() {
        this.items.length = 0
    }
}
const Fs = "allow-native-input",
    b = {
        XK_BackSpace: 65288,
        XK_Tab: 65289,
        XK_Clear: 65291,
        XK_Return: 65293,
        XK_Pause: 65299,
        XK_Scroll_Lock: 65300,
        XK_Escape: 65307,
        XK_Delete: 65535,
        XK_Multi_key: 65312,
        XK_Codeinput: 65335,
        XK_SingleCandidate: 65340,
        XK_MultipleCandidate: 65341,
        XK_PreviousCandidate: 65342,
        XK_Kanji: 65313,
        XK_Muhenkan: 65314,
        XK_Henkan: 65315,
        XK_Romaji: 65316,
        XK_Hiragana: 65317,
        XK_Katakana: 65318,
        XK_Hiragana_Katakana: 65319,
        XK_Zenkaku: 65320,
        XK_Hankaku: 65321,
        XK_Zenkaku_Hankaku: 65322,
        XK_Kana_Shift: 65326,
        XK_Eisu_toggle: 65328,
        XK_Home: 65360,
        XK_Left: 65361,
        XK_Up: 65362,
        XK_Right: 65363,
        XK_Down: 65364,
        XK_Prior: 65365,
        XK_Page_Up: 65365,
        XK_Next: 65366,
        XK_Page_Down: 65366,
        XK_End: 65367,
        XK_Select: 65376,
        XK_Print: 65377,
        XK_Execute: 65378,
        XK_Insert: 65379,
        XK_Undo: 65381,
        XK_Redo: 65382,
        XK_Menu: 65383,
        XK_Find: 65384,
        XK_Cancel: 65385,
        XK_Help: 65386,
        XK_Mode_switch: 65406,
        XK_Num_Lock: 65407,
        XK_KP_Space: 65408,
        XK_KP_Enter: 65421,
        XK_KP_Home: 65429,
        XK_KP_Left: 65430,
        XK_KP_Up: 65431,
        XK_KP_Right: 65432,
        XK_KP_Down: 65433,
        XK_KP_Prior: 65434,
        XK_KP_Page_Up: 65434,
        XK_KP_Next: 65435,
        XK_KP_Page_Down: 65435,
        XK_KP_End: 65436,
        XK_KP_Begin: 65437,
        XK_KP_Insert: 65438,
        XK_KP_Delete: 65439,
        XK_KP_Equal: 65469,
        XK_KP_Multiply: 65450,
        XK_KP_Add: 65451,
        XK_KP_Separator: 65452,
        XK_KP_Subtract: 65453,
        XK_KP_Decimal: 65454,
        XK_KP_Divide: 65455,
        XK_KP_0: 65456,
        XK_KP_1: 65457,
        XK_KP_2: 65458,
        XK_KP_3: 65459,
        XK_KP_4: 65460,
        XK_KP_5: 65461,
        XK_KP_6: 65462,
        XK_KP_7: 65463,
        XK_KP_8: 65464,
        XK_KP_9: 65465,
        XK_F1: 65470,
        XK_F2: 65471,
        XK_F3: 65472,
        XK_F4: 65473,
        XK_F5: 65474,
        XK_F6: 65475,
        XK_F7: 65476,
        XK_F8: 65477,
        XK_F9: 65478,
        XK_F10: 65479,
        XK_F11: 65480,
        XK_F12: 65481,
        XK_F13: 65482,
        XK_F14: 65483,
        XK_F15: 65484,
        XK_F16: 65485,
        XK_F17: 65486,
        XK_F18: 65487,
        XK_F19: 65488,
        XK_F20: 65489,
        XK_F21: 65490,
        XK_F22: 65491,
        XK_F23: 65492,
        XK_F24: 65493,
        XK_F25: 65494,
        XK_F26: 65495,
        XK_F27: 65496,
        XK_F28: 65497,
        XK_F29: 65498,
        XK_F30: 65499,
        XK_F31: 65500,
        XK_F32: 65501,
        XK_F33: 65502,
        XK_F34: 65503,
        XK_F35: 65504,
        XK_Shift_L: 65505,
        XK_Shift_R: 65506,
        XK_Control_L: 65507,
        XK_Control_R: 65508,
        XK_Caps_Lock: 65509,
        XK_Meta_L: 65511,
        XK_Meta_R: 65512,
        XK_Alt_L: 65513,
        XK_Alt_R: 65514,
        XK_Super_L: 65515,
        XK_Super_R: 65516,
        XK_ISO_Level3_Shift: 65027,
        XK_ISO_Next_Group: 65032,
        XK_ISO_Prev_Group: 65034,
        XK_ISO_First_Group: 65036,
        XK_ISO_Last_Group: 65038,
        XK_space: 32,
        XK_asterisk: 42,
        XK_plus: 43,
        XK_comma: 44,
        XK_minus: 45,
        XK_period: 46,
        XK_slash: 47,
        XK_0: 48,
        XK_1: 49,
        XK_2: 50,
        XK_3: 51,
        XK_4: 52,
        XK_5: 53,
        XK_6: 54,
        XK_7: 55,
        XK_8: 56,
        XK_9: 57,
        XK_equal: 61,
        XK_Hangul: 65329,
        XK_Hangul_Hanja: 65332,
        XK_Hangul_Jeonja: 65336,
        XF86XK_MonBrightnessUp: 269025026,
        XF86XK_MonBrightnessDown: 269025027,
        XF86XK_Standby: 269025040,
        XF86XK_AudioLowerVolume: 269025041,
        XF86XK_AudioMute: 269025042,
        XF86XK_AudioRaiseVolume: 269025043,
        XF86XK_AudioPlay: 269025044,
        XF86XK_AudioStop: 269025045,
        XF86XK_AudioPrev: 269025046,
        XF86XK_AudioNext: 269025047,
        XF86XK_HomePage: 269025048,
        XF86XK_Mail: 269025049,
        XF86XK_Search: 269025051,
        XF86XK_AudioRecord: 269025052,
        XF86XK_Calculator: 269025053,
        XF86XK_Calendar: 269025056,
        XF86XK_PowerDown: 269025057,
        XF86XK_Back: 269025062,
        XF86XK_Forward: 269025063,
        XF86XK_Stop: 269025064,
        XF86XK_Refresh: 269025065,
        XF86XK_PowerOff: 269025066,
        XF86XK_WakeUp: 269025067,
        XF86XK_Eject: 269025068,
        XF86XK_ScreenSaver: 269025069,
        XF86XK_WWW: 269025070,
        XF86XK_Favorites: 269025072,
        XF86XK_AudioPause: 269025073,
        XF86XK_AudioMedia: 269025074,
        XF86XK_MyComputer: 269025075,
        XF86XK_BrightnessAdjust: 269025083,
        XF86XK_AudioRewind: 269025086,
        XF86XK_Close: 269025110,
        XF86XK_Copy: 269025111,
        XF86XK_Cut: 269025112,
        XF86XK_Excel: 269025116,
        XF86XK_LogOff: 269025121,
        XF86XK_New: 269025128,
        XF86XK_Open: 269025131,
        XF86XK_Paste: 269025133,
        XF86XK_Phone: 269025134,
        XF86XK_Reply: 269025138,
        XF86XK_Save: 269025143,
        XF86XK_Send: 269025147,
        XF86XK_Spell: 269025148,
        XF86XK_SplitScreen: 269025149,
        XF86XK_Word: 269025161,
        XF86XK_ZoomIn: 269025163,
        XF86XK_ZoomOut: 269025164,
        XF86XK_WebCam: 269025167,
        XF86XK_MailForward: 269025168,
        XF86XK_Music: 269025170,
        XF86XK_AudioForward: 269025175,
        XF86XK_AudioRandomPlay: 269025177,
        XF86XK_Subtitle: 269025178,
        XF86XK_AudioCycleTrack: 269025179,
        XF86XK_Hibernate: 269025192,
        XF86XK_AudioMicMute: 269025202,
        XF86XK_Next_VMode: 269024802
    },
    U2 = {
        256: 960,
        257: 992,
        258: 451,
        259: 483,
        260: 417,
        261: 433,
        262: 454,
        263: 486,
        264: 710,
        265: 742,
        266: 709,
        267: 741,
        268: 456,
        269: 488,
        270: 463,
        271: 495,
        272: 464,
        273: 496,
        274: 938,
        275: 954,
        278: 972,
        279: 1004,
        280: 458,
        281: 490,
        282: 460,
        283: 492,
        284: 728,
        285: 760,
        286: 683,
        287: 699,
        288: 725,
        289: 757,
        290: 939,
        291: 955,
        292: 678,
        293: 694,
        294: 673,
        295: 689,
        296: 933,
        297: 949,
        298: 975,
        299: 1007,
        302: 967,
        303: 999,
        304: 681,
        305: 697,
        308: 684,
        309: 700,
        310: 979,
        311: 1011,
        312: 930,
        313: 453,
        314: 485,
        315: 934,
        316: 950,
        317: 421,
        318: 437,
        321: 419,
        322: 435,
        323: 465,
        324: 497,
        325: 977,
        326: 1009,
        327: 466,
        328: 498,
        330: 957,
        331: 959,
        332: 978,
        333: 1010,
        336: 469,
        337: 501,
        338: 5052,
        339: 5053,
        340: 448,
        341: 480,
        342: 931,
        343: 947,
        344: 472,
        345: 504,
        346: 422,
        347: 438,
        348: 734,
        349: 766,
        350: 426,
        351: 442,
        352: 425,
        353: 441,
        354: 478,
        355: 510,
        356: 427,
        357: 443,
        358: 940,
        359: 956,
        360: 989,
        361: 1021,
        362: 990,
        363: 1022,
        364: 733,
        365: 765,
        366: 473,
        367: 505,
        368: 475,
        369: 507,
        370: 985,
        371: 1017,
        376: 5054,
        377: 428,
        378: 444,
        379: 431,
        380: 447,
        381: 430,
        382: 446,
        402: 2294,
        466: 16777681,
        711: 439,
        728: 418,
        729: 511,
        731: 434,
        733: 445,
        901: 1966,
        902: 1953,
        904: 1954,
        905: 1955,
        906: 1956,
        908: 1959,
        910: 1960,
        911: 1963,
        912: 1974,
        913: 1985,
        914: 1986,
        915: 1987,
        916: 1988,
        917: 1989,
        918: 1990,
        919: 1991,
        920: 1992,
        921: 1993,
        922: 1994,
        923: 1995,
        924: 1996,
        925: 1997,
        926: 1998,
        927: 1999,
        928: 2e3,
        929: 2001,
        931: 2002,
        932: 2004,
        933: 2005,
        934: 2006,
        935: 2007,
        936: 2008,
        937: 2009,
        938: 1957,
        939: 1961,
        940: 1969,
        941: 1970,
        942: 1971,
        943: 1972,
        944: 1978,
        945: 2017,
        946: 2018,
        947: 2019,
        948: 2020,
        949: 2021,
        950: 2022,
        951: 2023,
        952: 2024,
        953: 2025,
        954: 2026,
        955: 2027,
        956: 2028,
        957: 2029,
        958: 2030,
        959: 2031,
        960: 2032,
        961: 2033,
        962: 2035,
        963: 2034,
        964: 2036,
        965: 2037,
        966: 2038,
        967: 2039,
        968: 2040,
        969: 2041,
        970: 1973,
        971: 1977,
        972: 1975,
        973: 1976,
        974: 1979,
        1025: 1715,
        1026: 1713,
        1027: 1714,
        1028: 1716,
        1029: 1717,
        1030: 1718,
        1031: 1719,
        1032: 1720,
        1033: 1721,
        1034: 1722,
        1035: 1723,
        1036: 1724,
        1038: 1726,
        1039: 1727,
        1040: 1761,
        1041: 1762,
        1042: 1783,
        1043: 1767,
        1044: 1764,
        1045: 1765,
        1046: 1782,
        1047: 1786,
        1048: 1769,
        1049: 1770,
        1050: 1771,
        1051: 1772,
        1052: 1773,
        1053: 1774,
        1054: 1775,
        1055: 1776,
        1056: 1778,
        1057: 1779,
        1058: 1780,
        1059: 1781,
        1060: 1766,
        1061: 1768,
        1062: 1763,
        1063: 1790,
        1064: 1787,
        1065: 1789,
        1066: 1791,
        1067: 1785,
        1068: 1784,
        1069: 1788,
        1070: 1760,
        1071: 1777,
        1072: 1729,
        1073: 1730,
        1074: 1751,
        1075: 1735,
        1076: 1732,
        1077: 1733,
        1078: 1750,
        1079: 1754,
        1080: 1737,
        1081: 1738,
        1082: 1739,
        1083: 1740,
        1084: 1741,
        1085: 1742,
        1086: 1743,
        1087: 1744,
        1088: 1746,
        1089: 1747,
        1090: 1748,
        1091: 1749,
        1092: 1734,
        1093: 1736,
        1094: 1731,
        1095: 1758,
        1096: 1755,
        1097: 1757,
        1098: 1759,
        1099: 1753,
        1100: 1752,
        1101: 1756,
        1102: 1728,
        1103: 1745,
        1105: 1699,
        1106: 1697,
        1107: 1698,
        1108: 1700,
        1109: 1701,
        1110: 1702,
        1111: 1703,
        1112: 1704,
        1113: 1705,
        1114: 1706,
        1115: 1707,
        1116: 1708,
        1118: 1710,
        1119: 1711,
        1168: 1725,
        1169: 1709,
        1488: 3296,
        1489: 3297,
        1490: 3298,
        1491: 3299,
        1492: 3300,
        1493: 3301,
        1494: 3302,
        1495: 3303,
        1496: 3304,
        1497: 3305,
        1498: 3306,
        1499: 3307,
        1500: 3308,
        1501: 3309,
        1502: 3310,
        1503: 3311,
        1504: 3312,
        1505: 3313,
        1506: 3314,
        1507: 3315,
        1508: 3316,
        1509: 3317,
        1510: 3318,
        1511: 3319,
        1512: 3320,
        1513: 3321,
        1514: 3322,
        1548: 1452,
        1563: 1467,
        1567: 1471,
        1569: 1473,
        1570: 1474,
        1571: 1475,
        1572: 1476,
        1573: 1477,
        1574: 1478,
        1575: 1479,
        1576: 1480,
        1577: 1481,
        1578: 1482,
        1579: 1483,
        1580: 1484,
        1581: 1485,
        1582: 1486,
        1583: 1487,
        1584: 1488,
        1585: 1489,
        1586: 1490,
        1587: 1491,
        1588: 1492,
        1589: 1493,
        1590: 1494,
        1591: 1495,
        1592: 1496,
        1593: 1497,
        1594: 1498,
        1600: 1504,
        1601: 1505,
        1602: 1506,
        1603: 1507,
        1604: 1508,
        1605: 1509,
        1606: 1510,
        1607: 1511,
        1608: 1512,
        1609: 1513,
        1610: 1514,
        1611: 1515,
        1612: 1516,
        1613: 1517,
        1614: 1518,
        1615: 1519,
        1616: 1520,
        1617: 1521,
        1618: 1522,
        3585: 3489,
        3586: 3490,
        3587: 3491,
        3588: 3492,
        3589: 3493,
        3590: 3494,
        3591: 3495,
        3592: 3496,
        3593: 3497,
        3594: 3498,
        3595: 3499,
        3596: 3500,
        3597: 3501,
        3598: 3502,
        3599: 3503,
        3600: 3504,
        3601: 3505,
        3602: 3506,
        3603: 3507,
        3604: 3508,
        3605: 3509,
        3606: 3510,
        3607: 3511,
        3608: 3512,
        3609: 3513,
        3610: 3514,
        3611: 3515,
        3612: 3516,
        3613: 3517,
        3614: 3518,
        3615: 3519,
        3616: 3520,
        3617: 3521,
        3618: 3522,
        3619: 3523,
        3620: 3524,
        3621: 3525,
        3622: 3526,
        3623: 3527,
        3624: 3528,
        3625: 3529,
        3626: 3530,
        3627: 3531,
        3628: 3532,
        3629: 3533,
        3630: 3534,
        3631: 3535,
        3632: 3536,
        3633: 3537,
        3634: 3538,
        3635: 3539,
        3636: 3540,
        3637: 3541,
        3638: 3542,
        3639: 3543,
        3640: 3544,
        3641: 3545,
        3642: 3546,
        3647: 3551,
        3648: 3552,
        3649: 3553,
        3650: 3554,
        3651: 3555,
        3652: 3556,
        3653: 3557,
        3654: 3558,
        3655: 3559,
        3656: 3560,
        3657: 3561,
        3658: 3562,
        3659: 3563,
        3660: 3564,
        3661: 3565,
        3664: 3568,
        3665: 3569,
        3666: 3570,
        3667: 3571,
        3668: 3572,
        3669: 3573,
        3670: 3574,
        3671: 3575,
        3672: 3576,
        3673: 3577,
        8194: 2722,
        8195: 2721,
        8196: 2723,
        8197: 2724,
        8199: 2725,
        8200: 2726,
        8201: 2727,
        8202: 2728,
        8210: 2747,
        8211: 2730,
        8212: 2729,
        8213: 1967,
        8215: 3295,
        8216: 2768,
        8217: 2769,
        8218: 2813,
        8220: 2770,
        8221: 2771,
        8222: 2814,
        8224: 2801,
        8225: 2802,
        8226: 2790,
        8229: 2735,
        8230: 2734,
        8240: 2773,
        8242: 2774,
        8243: 2775,
        8248: 2812,
        8254: 1150,
        8361: 3839,
        8364: 8364,
        8453: 2744,
        8470: 1712,
        8471: 2811,
        8478: 2772,
        8482: 2761,
        8531: 2736,
        8532: 2737,
        8533: 2738,
        8534: 2739,
        8535: 2740,
        8536: 2741,
        8537: 2742,
        8538: 2743,
        8539: 2755,
        8540: 2756,
        8541: 2757,
        8542: 2758,
        8592: 2299,
        8593: 2300,
        8594: 2301,
        8595: 2302,
        8658: 2254,
        8660: 2253,
        8706: 2287,
        8711: 2245,
        8728: 3018,
        8730: 2262,
        8733: 2241,
        8734: 2242,
        8743: 2270,
        8744: 2271,
        8745: 2268,
        8746: 2269,
        8747: 2239,
        8756: 2240,
        8764: 2248,
        8771: 2249,
        8773: 16785992,
        8800: 2237,
        8801: 2255,
        8804: 2236,
        8805: 2238,
        8834: 2266,
        8835: 2267,
        8866: 3068,
        8867: 3036,
        8868: 3010,
        8869: 3022,
        8968: 3027,
        8970: 3012,
        8981: 2810,
        8992: 2212,
        8993: 2213,
        9109: 3020,
        9115: 2219,
        9117: 2220,
        9118: 2221,
        9120: 2222,
        9121: 2215,
        9123: 2216,
        9124: 2217,
        9126: 2218,
        9128: 2223,
        9132: 2224,
        9143: 2209,
        9146: 2543,
        9147: 2544,
        9148: 2546,
        9149: 2547,
        9225: 2530,
        9226: 2533,
        9227: 2537,
        9228: 2531,
        9229: 2532,
        9251: 2732,
        9252: 2536,
        9472: 2211,
        9474: 2214,
        9484: 2210,
        9488: 2539,
        9492: 2541,
        9496: 2538,
        9500: 2548,
        9508: 2549,
        9516: 2551,
        9524: 2550,
        9532: 2542,
        9618: 2529,
        9642: 2791,
        9643: 2785,
        9644: 2779,
        9645: 2786,
        9646: 2783,
        9647: 2767,
        9650: 2792,
        9651: 2787,
        9654: 2781,
        9655: 2765,
        9660: 2793,
        9661: 2788,
        9664: 2780,
        9665: 2764,
        9670: 2528,
        9675: 2766,
        9679: 2782,
        9702: 2784,
        9734: 2789,
        9742: 2809,
        9747: 2762,
        9756: 2794,
        9758: 2795,
        9792: 2808,
        9794: 2807,
        9827: 2796,
        9829: 2798,
        9830: 2797,
        9837: 2806,
        9839: 2805,
        10003: 2803,
        10007: 2804,
        10013: 2777,
        10016: 2800,
        10216: 2748,
        10217: 2750,
        12289: 1188,
        12290: 1185,
        12300: 1186,
        12301: 1187,
        12443: 1246,
        12444: 1247,
        12449: 1191,
        12450: 1201,
        12451: 1192,
        12452: 1202,
        12453: 1193,
        12454: 1203,
        12455: 1194,
        12456: 1204,
        12457: 1195,
        12458: 1205,
        12459: 1206,
        12461: 1207,
        12463: 1208,
        12465: 1209,
        12467: 1210,
        12469: 1211,
        12471: 1212,
        12473: 1213,
        12475: 1214,
        12477: 1215,
        12479: 1216,
        12481: 1217,
        12483: 1199,
        12484: 1218,
        12486: 1219,
        12488: 1220,
        12490: 1221,
        12491: 1222,
        12492: 1223,
        12493: 1224,
        12494: 1225,
        12495: 1226,
        12498: 1227,
        12501: 1228,
        12504: 1229,
        12507: 1230,
        12510: 1231,
        12511: 1232,
        12512: 1233,
        12513: 1234,
        12514: 1235,
        12515: 1196,
        12516: 1236,
        12517: 1197,
        12518: 1237,
        12519: 1198,
        12520: 1238,
        12521: 1239,
        12522: 1240,
        12523: 1241,
        12524: 1242,
        12525: 1243,
        12527: 1244,
        12530: 1190,
        12531: 1245,
        12539: 1189,
        12540: 1200
    },
    Ef = {
        lookup: function(i) {
            if (i >= 32 && i <= 255) return i;
            const o = U2[i];
            return o !== void 0 ? o : 16777216 | i
        }
    },
    fl = {};
(function() {
    function i(u, c) {
        if (c === void 0) throw new Error('Undefined keysym for key "' + u + '"');
        if (u in fl) throw new Error('Duplicate entry for key "' + u + '"');
        fl[u] = [c, c, c, c]
    }

    function o(u, c, f) {
        if (c === void 0) throw new Error('Undefined keysym for key "' + u + '"');
        if (f === void 0) throw new Error('Undefined keysym for key "' + u + '"');
        if (u in fl) throw new Error('Duplicate entry for key "' + u + '"');
        fl[u] = [c, c, f, c]
    }

    function r(u, c, f) {
        if (c === void 0) throw new Error('Undefined keysym for key "' + u + '"');
        if (f === void 0) throw new Error('Undefined keysym for key "' + u + '"');
        if (u in fl) throw new Error('Duplicate entry for key "' + u + '"');
        fl[u] = [c, c, c, f]
    }
    o("Alt", b.XK_Alt_L, b.XK_Alt_R), i("AltGraph", b.XK_ISO_Level3_Shift), i("CapsLock", b.XK_Caps_Lock), o("Control", b.XK_Control_L, b.XK_Control_R), o("Meta", b.XK_Super_L, b.XK_Super_R), i("NumLock", b.XK_Num_Lock), i("ScrollLock", b.XK_Scroll_Lock), o("Shift", b.XK_Shift_L, b.XK_Shift_R), r("Enter", b.XK_Return, b.XK_KP_Enter), i("Tab", b.XK_Tab), r(" ", b.XK_space, b.XK_KP_Space), r("ArrowDown", b.XK_Down, b.XK_KP_Down), r("ArrowLeft", b.XK_Left, b.XK_KP_Left), r("ArrowRight", b.XK_Right, b.XK_KP_Right), r("ArrowUp", b.XK_Up, b.XK_KP_Up), r("End", b.XK_End, b.XK_KP_End), r("Home", b.XK_Home, b.XK_KP_Home), r("PageDown", b.XK_Next, b.XK_KP_Next), r("PageUp", b.XK_Prior, b.XK_KP_Prior), i("Backspace", b.XK_BackSpace), r("Clear", b.XK_Clear, b.XK_KP_Begin), i("Copy", b.XF86XK_Copy), i("Cut", b.XF86XK_Cut), r("Delete", b.XK_Delete, b.XK_KP_Delete), r("Insert", b.XK_Insert, b.XK_KP_Insert), i("Paste", b.XF86XK_Paste), i("Redo", b.XK_Redo), i("Undo", b.XK_Undo), i("Cancel", b.XK_Cancel), i("ContextMenu", b.XK_Menu), i("Escape", b.XK_Escape), i("Execute", b.XK_Execute), i("Find", b.XK_Find), i("Help", b.XK_Help), i("Pause", b.XK_Pause), i("Select", b.XK_Select), i("ZoomIn", b.XF86XK_ZoomIn), i("ZoomOut", b.XF86XK_ZoomOut), i("BrightnessDown", b.XF86XK_MonBrightnessDown), i("BrightnessUp", b.XF86XK_MonBrightnessUp), i("Eject", b.XF86XK_Eject), i("LogOff", b.XF86XK_LogOff), i("Power", b.XF86XK_PowerOff), i("PowerOff", b.XF86XK_PowerDown), i("PrintScreen", b.XK_Print), i("Hibernate", b.XF86XK_Hibernate), i("Standby", b.XF86XK_Standby), i("WakeUp", b.XF86XK_WakeUp), i("AllCandidates", b.XK_MultipleCandidate), i("Alphanumeric", b.XK_Eisu_toggle), i("CodeInput", b.XK_Codeinput), i("Compose", b.XK_Multi_key), i("Convert", b.XK_Henkan), i("GroupFirst", b.XK_ISO_First_Group), i("GroupLast", b.XK_ISO_Last_Group), i("GroupNext", b.XK_ISO_Next_Group), i("GroupPrevious", b.XK_ISO_Prev_Group), i("NonConvert", b.XK_Muhenkan), i("PreviousCandidate", b.XK_PreviousCandidate), i("SingleCandidate", b.XK_SingleCandidate), i("HangulMode", b.XK_Hangul), i("HanjaMode", b.XK_Hangul_Hanja), i("JunjaMode", b.XK_Hangul_Jeonja), i("Eisu", b.XK_Eisu_toggle), i("Hankaku", b.XK_Hankaku), i("Hiragana", b.XK_Hiragana), i("HiraganaKatakana", b.XK_Hiragana_Katakana), i("KanaMode", b.XK_Kana_Shift), i("KanjiMode", b.XK_Kanji), i("Katakana", b.XK_Katakana), i("Romaji", b.XK_Romaji), i("Zenkaku", b.XK_Zenkaku), i("ZenkakuHankaku", b.XK_Zenkaku_Hankaku), i("F1", b.XK_F1), i("F2", b.XK_F2), i("F3", b.XK_F3), i("F4", b.XK_F4), i("F5", b.XK_F5), i("F6", b.XK_F6), i("F7", b.XK_F7), i("F8", b.XK_F8), i("F9", b.XK_F9), i("F10", b.XK_F10), i("F11", b.XK_F11), i("F12", b.XK_F12), i("F13", b.XK_F13), i("F14", b.XK_F14), i("F15", b.XK_F15), i("F16", b.XK_F16), i("F17", b.XK_F17), i("F18", b.XK_F18), i("F19", b.XK_F19), i("F20", b.XK_F20), i("F21", b.XK_F21), i("F22", b.XK_F22), i("F23", b.XK_F23), i("F24", b.XK_F24), i("F25", b.XK_F25), i("F26", b.XK_F26), i("F27", b.XK_F27), i("F28", b.XK_F28), i("F29", b.XK_F29), i("F30", b.XK_F30), i("F31", b.XK_F31), i("F32", b.XK_F32), i("F33", b.XK_F33), i("F34", b.XK_F34), i("F35", b.XK_F35), i("Close", b.XF86XK_Close), i("MailForward", b.XF86XK_MailForward), i("MailReply", b.XF86XK_Reply), i("MailSend", b.XF86XK_Send), i("MediaFastForward", b.XF86XK_AudioForward), i("MediaPause", b.XF86XK_AudioPause), i("MediaPlay", b.XF86XK_AudioPlay), i("MediaRecord", b.XF86XK_AudioRecord), i("MediaRewind", b.XF86XK_AudioRewind), i("MediaStop", b.XF86XK_AudioStop), i("MediaTrackNext", b.XF86XK_AudioNext), i("MediaTrackPrevious", b.XF86XK_AudioPrev), i("New", b.XF86XK_New), i("Open", b.XF86XK_Open), i("Print", b.XK_Print), i("Save", b.XF86XK_Save), i("SpellCheck", b.XF86XK_Spell), i("AudioVolumeDown", b.XF86XK_AudioLowerVolume), i("AudioVolumeUp", b.XF86XK_AudioRaiseVolume), i("AudioVolumeMute", b.XF86XK_AudioMute), i("MicrophoneVolumeMute", b.XF86XK_AudioMicMute), i("LaunchApplication1", b.XF86XK_MyComputer), i("LaunchApplication2", b.XF86XK_Calculator), i("LaunchCalendar", b.XF86XK_Calendar), i("LaunchMail", b.XF86XK_Mail), i("LaunchMediaPlayer", b.XF86XK_AudioMedia), i("LaunchMusicPlayer", b.XF86XK_Music), i("LaunchPhone", b.XF86XK_Phone), i("LaunchScreenSaver", b.XF86XK_ScreenSaver), i("LaunchSpreadsheet", b.XF86XK_Excel), i("LaunchWebBrowser", b.XF86XK_WWW), i("LaunchWebCam", b.XF86XK_WebCam), i("LaunchWordProcessor", b.XF86XK_Word), i("BrowserBack", b.XF86XK_Back), i("BrowserFavorites", b.XF86XK_Favorites), i("BrowserForward", b.XF86XK_Forward), i("BrowserHome", b.XF86XK_HomePage), i("BrowserRefresh", b.XF86XK_Refresh), i("BrowserSearch", b.XF86XK_Search), i("BrowserStop", b.XF86XK_Stop), i("Dimmer", b.XF86XK_BrightnessAdjust), i("MediaAudioTrack", b.XF86XK_AudioCycleTrack), i("RandomToggle", b.XF86XK_AudioRandomPlay), i("SplitScreenToggle", b.XF86XK_SplitScreen), i("Subtitle", b.XF86XK_Subtitle), i("VideoModeNext", b.XF86XK_Next_VMode), r("=", b.XK_equal, b.XK_KP_Equal), r("+", b.XK_plus, b.XK_KP_Add), r("-", b.XK_minus, b.XK_KP_Subtract), r("*", b.XK_asterisk, b.XK_KP_Multiply), r("/", b.XK_slash, b.XK_KP_Divide), r(".", b.XK_period, b.XK_KP_Decimal), r(",", b.XK_comma, b.XK_KP_Separator), r("0", b.XK_0, b.XK_KP_0), r("1", b.XK_1, b.XK_KP_1), r("2", b.XK_2, b.XK_KP_2), r("3", b.XK_3, b.XK_KP_3), r("4", b.XK_4, b.XK_KP_4), r("5", b.XK_5, b.XK_KP_5), r("6", b.XK_6, b.XK_KP_6), r("7", b.XK_7, b.XK_KP_7), r("8", b.XK_8, b.XK_KP_8), r("9", b.XK_9, b.XK_KP_9)
})();
const O0 = {
        8: "Backspace",
        9: "Tab",
        10: "NumpadClear",
        13: "Enter",
        16: "ShiftLeft",
        17: "ControlLeft",
        18: "AltLeft",
        19: "Pause",
        20: "CapsLock",
        21: "Lang1",
        25: "Lang2",
        27: "Escape",
        28: "Convert",
        29: "NonConvert",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        41: "Select",
        44: "PrintScreen",
        45: "Insert",
        46: "Delete",
        47: "Help",
        48: "Digit0",
        49: "Digit1",
        50: "Digit2",
        51: "Digit3",
        52: "Digit4",
        53: "Digit5",
        54: "Digit6",
        55: "Digit7",
        56: "Digit8",
        57: "Digit9",
        91: "MetaLeft",
        92: "MetaRight",
        93: "ContextMenu",
        95: "Sleep",
        96: "Numpad0",
        97: "Numpad1",
        98: "Numpad2",
        99: "Numpad3",
        100: "Numpad4",
        101: "Numpad5",
        102: "Numpad6",
        103: "Numpad7",
        104: "Numpad8",
        105: "Numpad9",
        106: "NumpadMultiply",
        107: "NumpadAdd",
        108: "NumpadDecimal",
        109: "NumpadSubtract",
        110: "NumpadDecimal",
        111: "NumpadDivide",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        124: "F13",
        125: "F14",
        126: "F15",
        127: "F16",
        128: "F17",
        129: "F18",
        130: "F19",
        131: "F20",
        132: "F21",
        133: "F22",
        134: "F23",
        135: "F24",
        144: "NumLock",
        145: "ScrollLock",
        166: "BrowserBack",
        167: "BrowserForward",
        168: "BrowserRefresh",
        169: "BrowserStop",
        170: "BrowserSearch",
        171: "BrowserFavorites",
        172: "BrowserHome",
        173: "AudioVolumeMute",
        174: "AudioVolumeDown",
        175: "AudioVolumeUp",
        176: "MediaTrackNext",
        177: "MediaTrackPrevious",
        178: "MediaStop",
        179: "MediaPlayPause",
        180: "LaunchMail",
        181: "MediaSelect",
        182: "LaunchApp1",
        183: "LaunchApp2",
        225: "AltRight"
    },
    F0 = {
        Backspace: "Backspace",
        AltLeft: "Alt",
        AltRight: "Alt",
        CapsLock: "CapsLock",
        ContextMenu: "ContextMenu",
        ControlLeft: "Control",
        ControlRight: "Control",
        Enter: "Enter",
        MetaLeft: "Meta",
        MetaRight: "Meta",
        ShiftLeft: "Shift",
        ShiftRight: "Shift",
        Tab: "Tab",
        Delete: "Delete",
        End: "End",
        Help: "Help",
        Home: "Home",
        Insert: "Insert",
        PageDown: "PageDown",
        PageUp: "PageUp",
        ArrowDown: "ArrowDown",
        ArrowLeft: "ArrowLeft",
        ArrowRight: "ArrowRight",
        ArrowUp: "ArrowUp",
        NumLock: "NumLock",
        NumpadBackspace: "Backspace",
        NumpadClear: "Clear",
        Escape: "Escape",
        F1: "F1",
        F2: "F2",
        F3: "F3",
        F4: "F4",
        F5: "F5",
        F6: "F6",
        F7: "F7",
        F8: "F8",
        F9: "F9",
        F10: "F10",
        F11: "F11",
        F12: "F12",
        F13: "F13",
        F14: "F14",
        F15: "F15",
        F16: "F16",
        F17: "F17",
        F18: "F18",
        F19: "F19",
        F20: "F20",
        F21: "F21",
        F22: "F22",
        F23: "F23",
        F24: "F24",
        F25: "F25",
        F26: "F26",
        F27: "F27",
        F28: "F28",
        F29: "F29",
        F30: "F30",
        F31: "F31",
        F32: "F32",
        F33: "F33",
        F34: "F34",
        F35: "F35",
        PrintScreen: "PrintScreen",
        ScrollLock: "ScrollLock",
        Pause: "Pause",
        BrowserBack: "BrowserBack",
        BrowserFavorites: "BrowserFavorites",
        BrowserForward: "BrowserForward",
        BrowserHome: "BrowserHome",
        BrowserRefresh: "BrowserRefresh",
        BrowserSearch: "BrowserSearch",
        BrowserStop: "BrowserStop",
        Eject: "Eject",
        LaunchApp1: "LaunchMyComputer",
        LaunchApp2: "LaunchCalendar",
        LaunchMail: "LaunchMail",
        MediaPlayPause: "MediaPlay",
        MediaStop: "MediaStop",
        MediaTrackNext: "MediaTrackNext",
        MediaTrackPrevious: "MediaTrackPrevious",
        Power: "Power",
        Sleep: "Sleep",
        AudioVolumeDown: "AudioVolumeDown",
        AudioVolumeMute: "AudioVolumeMute",
        AudioVolumeUp: "AudioVolumeUp",
        WakeUp: "WakeUp"
    },
    It = {
        isMac: function() {
            return /Mac|iPod|iPhone|iPad/.test(navigator.platform)
        },
        isIOS: function() {
            return /iPod|iPhone|iPad/.test(navigator.platform)
        },
        isWindows: function() {
            return /Win/.test(navigator.platform)
        },
        isChrome: function() {
            return !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)
        },
        isSafari: function() {
            return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
        }
    },
    K0 = {
        [b.XK_KP_Space]: b.XK_space,
        [b.XK_KP_Enter]: b.XK_Return,
        [b.XK_KP_Equal]: b.XK_equal,
        [b.XK_KP_Multiply]: b.XK_asterisk,
        [b.XK_KP_Add]: b.XK_plus,
        [b.XK_KP_Separator]: b.XK_comma,
        [b.XK_KP_Subtract]: b.XK_minus,
        [b.XK_KP_Decimal]: b.XK_period,
        [b.XK_KP_Divide]: b.XK_slash,
        [b.XK_KP_0]: b.XK_0,
        [b.XK_KP_1]: b.XK_1,
        [b.XK_KP_2]: b.XK_2,
        [b.XK_KP_3]: b.XK_3,
        [b.XK_KP_4]: b.XK_4,
        [b.XK_KP_5]: b.XK_5,
        [b.XK_KP_6]: b.XK_6,
        [b.XK_KP_7]: b.XK_7,
        [b.XK_KP_8]: b.XK_8,
        [b.XK_KP_9]: b.XK_9
    },
    R0 = {
        [b.XK_KP_Home]: b.XK_Home,
        [b.XK_KP_Up]: b.XK_Up,
        [b.XK_KP_Page_Up]: b.XK_Page_Up,
        [b.XK_KP_Prior]: b.XK_Prior,
        [b.XK_KP_Left]: b.XK_Left,
        [b.XK_KP_Begin]: b.XK_Clear,
        [b.XK_KP_Right]: b.XK_Right,
        [b.XK_KP_End]: b.XK_End,
        [b.XK_KP_Down]: b.XK_Down,
        [b.XK_KP_Page_Down]: b.XK_Page_Down,
        [b.XK_KP_Next]: b.XK_Next,
        [b.XK_KP_Insert]: b.XK_Insert,
        [b.XK_KP_Delete]: b.XK_Delete,
        [b.XK_KP_Enter]: b.XK_Return
    },
    Qa = {
        getKeyCode: function(i) {
            if (i.code) {
                switch (i.code) {
                    case "OSLeft":
                        return "MetaLeft";
                    case "OSRight":
                        return "MetaRight"
                }
                return i.code
            }
            if (i.keyCode in O0) {
                let o = O0[i.keyCode];
                if (It.isMac() && o === "ContextMenu" && (o = "MetaRight"), i.location === 2) switch (o) {
                    case "ShiftLeft":
                        return "ShiftRight";
                    case "ControlLeft":
                        return "ControlRight";
                    case "AltLeft":
                        return "AltRight"
                }
                if (i.location === 3) switch (o) {
                    case "Delete":
                        return "NumpadDecimal";
                    case "Insert":
                        return "Numpad0";
                    case "End":
                        return "Numpad1";
                    case "ArrowDown":
                        return "Numpad2";
                    case "PageDown":
                        return "Numpad3";
                    case "ArrowLeft":
                        return "Numpad4";
                    case "ArrowRight":
                        return "Numpad6";
                    case "Home":
                        return "Numpad7";
                    case "ArrowUp":
                        return "Numpad8";
                    case "PageUp":
                        return "Numpad9";
                    case "Enter":
                        return "NumpadEnter"
                }
                return o
            }
            return "Unidentified"
        },
        getKey: function(i) {
            if (i.key !== void 0 && i.key !== "Unidentified" && i.key !== "Dead") {
                switch (i.key) {
                    case "OS":
                        return "Meta";
                    case "LaunchMyComputer":
                        return "LaunchApplication1";
                    case "LaunchCalculator":
                        return "LaunchApplication2";
                    case "UIKeyInputUpArrow":
                        return "ArrowUp";
                    case "UIKeyInputDownArrow":
                        return "ArrowDown";
                    case "UIKeyInputLeftArrow":
                        return "ArrowLeft";
                    case "UIKeyInputRightArrow":
                        return "ArrowRight";
                    case "UIKeyInputEscape":
                        return "Escape"
                }
                return i.key === "\0" && Qa.getKeyCode(i) === "NumpadDecimal" ? "Delete" : i.key
            }
            const o = Qa.getKeyCode(i);
            return o in F0 ? F0[o] : i.charCode ? String.fromCharCode(i.charCode) : "Unidentified"
        },
        getKeysym: function(i) {
            const o = Qa.getKey(i);
            if (o === "Unidentified") return null;
            if (o in fl) {
                let u = i.location;
                if ((It.isSafari() && o === "Meta" && u === 0 || It.isChrome() && o === "Meta" && u === 0 && Qa.getKeyCode(i) === "MetaRight") && (u = 2), o === "Clear" && u === 3 && Qa.getKeyCode(i) === "NumLock" && (u = 0), (u === void 0 || u > 3) && (u = 0), o === "Meta") {
                    let c = Qa.getKeyCode(i);
                    if (c === "AltLeft") return b.XK_Meta_L;
                    if (c === "AltRight") return b.XK_Meta_R
                }
                if (o === "Clear" && Qa.getKeyCode(i) === "NumLock") return b.XK_Num_Lock;
                if (It.isWindows()) switch (o) {
                    case "Zenkaku":
                    case "Hankaku":
                        return b.XK_Zenkaku_Hankaku;
                    case "Romaji":
                    case "KanaMode":
                        return b.XK_Romaji
                }
                return fl[o][u]
            }
            if (o.length !== 1) return null;
            const r = o.charCodeAt();
            return r ? Ef.lookup(r) : null
        }
    },
    dl = function(i) {
        i.stopPropagation(), i.preventDefault()
    };
class Pf {
    constructor(o, r, u = !1, c = 0, f = !1) {
        this.element = o, this.send = r, this.isSharedMode = u, this.playerIndex = c, this.cursorDiv = document.createElement("canvas"), this.cursorDiv.style.position = "fixed", this.cursorDiv.style.pointerEvents = "none", this.cursorDiv.style.zIndex = "999999", this.cursorDiv.style.display = "none", this.cursorDiv.style.left = "0px", this.cursorDiv.style.top = "0px", this.cursorImg = this.cursorDiv.getContext("2d"), document.body.appendChild(this.cursorDiv), this.cursorHotspot = {
            x: 0,
            y: 0
        }, this._cursorImageBitmap = null, this._rawHotspotX = 0, this._rawHotspotY = 0, this._latestMouseX = 0, this._latestMouseY = 0, this.useCssScaling = f, this.mouseRelative = !1, this.m = null, this.buttonMask = 0, this.gamepadManager = null, this.x = 0, this.y = 0, this.onmenuhotkey = null, this.onfullscreenhotkey = this.enterFullscreen, this.ongamepadconnected = null, this.ongamepaddisconneceted = null, this.listeners = [], this.listeners_context = [], this._queue = new X2, this._allowTrackpadScrolling = !0, this._allowThreshold = !0, this._smallestDeltaY = 1e4, this._wheelThreshold = 100, this._scrollMagnitude = 10, this.cursorScaleFactor = null, this._guacKeyboardID = Pf._nextGuacID++, this._EVENT_MARKER = "_GUAC_KEYBOARD_HANDLED_BY_" + this._guacKeyboardID, this._keyDownList = {}, this._altGrArmed = !1, this._altGrTimeout = null, this._altGrCtrlTime = 0, this._macCmdSwapped = !1, this._isSynth = !1, this.isComposing = !1, this.compositionString = "", this.keyboardInputAssist = document.getElementById("keyboard-input-assist"), this._activeTouches = new Map, this._activeTouchIdentifier = null, this._isTwoFingerGesture = !1, this._MIN_SWIPE_DISTANCE = 30, this._MAX_SWIPE_DURATION = 600, this._VERTICAL_SWIPE_RATIO = 1.5, this._SCROLL_PIXELS_PER_TICK = 40, this._MAX_SCROLL_MAGNITUDE = 8, this._TAP_THRESHOLD_DISTANCE_SQ = 100, this._TAP_MAX_DURATION = 250, this._trackpadMode = !1, this._trackpadTouches = new Map, this._trackpadLastTapTime = 0, this._trackpadIsDragging = !1, this._trackpadTapTimeout = null, this._trackpadLastScrollCentroid = null, this._touchScrollLastCentroid = null
    }
    static _nextGuacID = 0;
    _drawAndScaleCursor() {
        if (!this._cursorImageBitmap) return;
        const o = this.useCssScaling ? 1 : window.devicePixelRatio || 1,
            r = this._cursorImageBitmap;
        this.cursorDiv.width = r.width, this.cursorDiv.height = r.height, this.cursorDiv.style.width = `${r.width/o}px`, this.cursorDiv.style.height = `${r.height/o}px`, this.cursorImg.clearRect(0, 0, r.width, r.height), this.cursorImg.drawImage(r, 0, 0), this.cursorHotspot.x = this._rawHotspotX / o, this.cursorHotspot.y = this._rawHotspotY / o, this._updateCursorPosition(this._latestMouseX, this._latestMouseY)
    }
    _handleOutsideClick(o) {
        this.element.contains(o.target) || (this.cursorDiv.style.display = "none")
    }
    _updateCursorPosition(o, r) {
        if (this.cursorDiv.style.display !== "none") {
            const u = o - this.cursorHotspot.x,
                c = r - this.cursorHotspot.y;
            this.cursorDiv.style.transform = `translate(${u}px, ${c}px)`
        }
    }
    async updateServerCursor(o) {
        if (!o.curdata || parseInt(o.handle, 10) === 0 || this._trackpadMode) {
            this.cursorDiv.style.display = "none", this._cursorImageBitmap = null;
            return
        }
        this._rawHotspotX = parseInt(o.hotx) || 0, this._rawHotspotY = parseInt(o.hoty) || 0;
        const r = await (await fetch(`data:image/png;base64,${o.curdata}`)).blob();
        this._cursorImageBitmap = await createImageBitmap(r), this.cursorDiv.style.display = "block", this._drawAndScaleCursor()
    }
    setSynth(o) {
        console.log(`Input: Synthetic mode ${o?"enabled":"disabled"}.`), this._isSynth = o
    }
    updateCssScaling(o) {
        this.useCssScaling !== o && (console.log(`Input: Updating useCssScaling from ${this.useCssScaling} to ${o}`), this.useCssScaling = o, this._windowMath(), this._drawAndScaleCursor())
    }
    _sendKeyEvent(o, r, u) {
        if (o === null) return;
        let c = o;
        if (K0.hasOwnProperty(o) ? c = K0[o] : R0.hasOwnProperty(o) && (c = R0[o]), u) this._keyDownList[r] = c;
        else {
            if (!(r in this._keyDownList)) return;
            c = this._keyDownList[r], delete this._keyDownList[r]
        }
        this.send((u ? "kd," : "ku,") + c)
    }
    resetKeyboard() {
        for (const o in this._keyDownList) this._sendKeyEvent(this._keyDownList[o], o, !1);
        this._keyDownList = {}
    }
    _guac_markEvent(o) {
        return o[this._EVENT_MARKER] ? !1 : (o[this._EVENT_MARKER] = !0, !0)
    }
    _handleKeyDown(o) {
        if (this._targetHasClass(o.target, Fs) || !this._guac_markEvent(o)) return;
        if (this.isComposing || o.isComposing || o.keyCode === 229) {
            dl(o);
            return
        }
        if (!this._isSynth)
            for (const f in this._keyDownList) {
                const g = this._keyDownList[f];
                (f === "ControlLeft" || f === "ControlRight") && !o.ctrlKey && this._sendKeyEvent(g, f, !1), (f === "MetaLeft" || f === "MetaRight") && !o.metaKey && this._sendKeyEvent(g, f, !1), (f === "AltLeft" || f === "AltRight") && !o.altKey && this._sendKeyEvent(g, f, !1), (f === "ShiftLeft" || f === "ShiftRight") && !o.shiftKey && this._sendKeyEvent(g, f, !1)
            }
        if (o.code === "KeyM" && o.ctrlKey && o.shiftKey && document.fullscreenElement === null && this.onmenuhotkey !== null) {
            this.onmenuhotkey(), dl(o);
            return
        }
        if (o.code === "KeyF" && o.ctrlKey && o.shiftKey && document.fullscreenElement === null && this.onfullscreenhotkey !== null) {
            this.onfullscreenhotkey(), dl(o);
            return
        }
        const r = Qa.getKeyCode(o);
        let u = Qa.getKeysym(o);
        if (this._altGrArmed && (this._altGrArmed = !1, clearTimeout(this._altGrTimeout), r === "AltRight" && o.timeStamp - this._altGrCtrlTime < 50 ? u = b.XK_ISO_Level3_Shift : this._sendKeyEvent(b.XK_Control_L, "ControlLeft", !0)), r === "Unidentified" && u) {
            this._sendKeyEvent(u, r, !0), this._sendKeyEvent(u, r, !1), dl(o);
            return
        }
        if (It.isMac() && r !== "MetaLeft" && r !== "MetaRight" && o.metaKey && !o.ctrlKey && !o.altKey && (this._keyDownList.MetaLeft || this._keyDownList.MetaRight) && (console.log(`macOS: Cmd+key detected for code '${r}'. Remapping Cmd to Ctrl.`), this._keyDownList.MetaLeft && this._sendKeyEvent(this._keyDownList.MetaLeft, "MetaLeft", !1), this._keyDownList.MetaRight && this._sendKeyEvent(this._keyDownList.MetaRight, "MetaRight", !1), this._sendKeyEvent(b.XK_Control_L, "ControlLeft", !0), this._macCmdSwapped = !0), It.isMac() || It.isIOS()) switch (u) {
            case b.XK_Super_L:
                u = b.XK_Alt_L;
                break;
            case b.XK_Super_R:
                u = b.XK_Super_L;
                break;
            case b.XK_Alt_L:
                u = b.XK_Mode_switch;
                break;
            case b.XK_Alt_R:
                u = b.XK_ISO_Level3_Shift;
                break
        }
        if (r in this._keyDownList && (u = this._keyDownList[r]), (It.isMac() || It.isIOS()) && r === "CapsLock") {
            this._sendKeyEvent(b.XK_Caps_Lock, "CapsLock", !0), this._sendKeyEvent(b.XK_Caps_Lock, "CapsLock", !1), dl(o);
            return
        }
        const c = [b.XK_Zenkaku_Hankaku, b.XK_Eisu_toggle, b.XK_Katakana, b.XK_Hiragana, b.XK_Romaji];
        if (It.isWindows() && c.includes(u)) {
            this._sendKeyEvent(u, r, !0), this._sendKeyEvent(u, r, !1), dl(o);
            return
        }
        if (dl(o), r === "ControlLeft" && It.isWindows() && !(r in this._keyDownList)) {
            this._altGrArmed = !0, this._altGrCtrlTime = o.timeStamp, this._altGrTimeout = setTimeout(() => {
                this._altGrArmed = !1, this._sendKeyEvent(b.XK_Control_L, "ControlLeft", !0)
            }, 100);
            return
        }
        this._sendKeyEvent(u, r, !0)
    }
    _handleKeyPress(o) {
        this._targetHasClass(o.target, Fs) || this._guac_markEvent(o)
    }
    _handleKeyUp(o) {
        if (this._targetHasClass(o.target, Fs) || !this._guac_markEvent(o)) return;
        dl(o);
        const r = Qa.getKeyCode(o);
        if (It.isMac() && (r === "MetaLeft" || r === "MetaRight")) {
            console.log(`macOS: Command key ('${r}') released. Cleaning up potentially stuck keys.`);
            const c = Object.keys(this._keyDownList);
            for (const f of c) f === "ShiftLeft" || f === "ShiftRight" || f === "ControlLeft" || f === "ControlRight" || f === "AltLeft" || f === "AltRight" || f === "MetaLeft" || f === "MetaRight" || (console.log(`macOS: Force-releasing stuck key: ${f}`), this._sendKeyEvent(this._keyDownList[f], f, !1));
            this._macCmdSwapped && (console.log("macOS: Releasing the swapped virtual Ctrl key."), "ControlLeft" in this._keyDownList && this._sendKeyEvent(this._keyDownList.ControlLeft, "ControlLeft", !1), this._macCmdSwapped = !1)
        }
        if (this._altGrArmed && (this._altGrArmed = !1, clearTimeout(this._altGrTimeout), this._sendKeyEvent(b.XK_Control_L, "ControlLeft", !0)), (It.isMac() || It.isIOS()) && r === "CapsLock") return;
        const u = this._keyDownList[r];
        this._sendKeyEvent(u, r, !1), It.isWindows() && (r === "ShiftLeft" || r === "ShiftRight") && ("ShiftRight" in this._keyDownList && this._sendKeyEvent(this._keyDownList.ShiftRight, "ShiftRight", !1), "ShiftLeft" in this._keyDownList && this._sendKeyEvent(this._keyDownList.ShiftLeft, "ShiftLeft", !1))
    }
    _updateCompositionText(o) {
        const r = this.compositionString,
            u = o || "";
        let c = 0;
        for (; c < r.length && c < u.length && r[c] === u[c];) c++;
        const f = r.length - c;
        for (let _ = 0; _ < f; _++) this._sendKeyEvent(b.XK_BackSpace, "Backspace", !0), this._sendKeyEvent(b.XK_BackSpace, "Backspace", !1);
        const g = u.substring(c);
        for (let _ = 0; _ < g.length; _++) {
            const y = Ef.lookup(g.charCodeAt(_));
            y && (this._sendKeyEvent(y, "Unidentified", !0), this._sendKeyEvent(y, "Unidentified", !1))
        }
        this.compositionString = u
    }
    _compositionStart(o) {
        this._guac_markEvent(o) && (this.isComposing = !0, this.compositionString = "")
    }
    _compositionUpdate(o) {
        this._guac_markEvent(o) && this.isComposing && this._updateCompositionText(o.data)
    }
    _compositionEnd(o) {
        this._guac_markEvent(o) && this.isComposing && (this._updateCompositionText(o.data), this.isComposing = !1, this.compositionString = "")
    }
    _handleMobileInput(o) {
        const r = o.target.value;
        if (r) {
            for (let u = 0; u < r.length; u++) {
                const c = Ef.lookup(r.charCodeAt(u));
                c && (this.send("kd," + c), this.send("ku," + c))
            }
            o.target.value = ""
        }
    }
    _mouseButtonMovement(o) {
        this.cursorDiv.style.display = "block", this.element.style.cursor !== "none" && (this.element.style.cursor = "none");
        let r = o.clientX,
            u = o.clientY;
        if (o.getPredictedEvents && typeof o.getPredictedEvents == "function") {
            const m = o.getPredictedEvents();
            if (m.length > 0) {
                const A = m[m.length - 1];
                r = A.clientX, u = A.clientY
            }
        }
        if (this._updateCursorPosition(r, u), this._latestMouseX = r, this._latestMouseY = u, this._trackpadMode) return;
        const c = window.devicePixelRatio || 1,
            f = this.useCssScaling ? 1 : c,
            g = o.type === "mousedown" || o.type === "pointerdown" ? 1 : 0;
        var _ = "m";
        let y = document.getElementById("videoCanvas");
        if ((o.type === "mousedown" || o.type === "mouseup" || o.type === "pointerdown" || o.type === "pointerup" || o.type === "pointercancel") && (o.button === 3 || o.button === 4) && o.preventDefault(), g && o.button === 0 && o.ctrlKey && o.shiftKey) {
            (o.target.requestPointerLock ? o.target : this.element).requestPointerLock().catch(m => console.error("Pointer lock failed:", m)), o.preventDefault();
            return
        }
        if (document.pointerLockElement === this.element || document.pointerLockElement === y) {
            _ = "m2";
            let m = o.movementX || 0,
                A = o.movementY || 0;
            this.x = Math.round(m * f), this.y = Math.round(A * f)
        } else if (o.type === "mousemove" || o.type === "pointermove")
            if (window.isManualResolutionMode && y) {
                const m = y.getBoundingClientRect();
                if (m.width > 0 && m.height > 0 && y.width > 0 && y.height > 0) {
                    const A = o.clientX - m.left,
                        E = o.clientY - m.top,
                        D = y.width / m.width,
                        F = y.height / m.height;
                    let R = A * D,
                        Q = E * F;
                    this.x = Math.max(0, Math.min(y.width, Math.round(R))), this.y = Math.max(0, Math.min(y.height, Math.round(Q)))
                } else this.x = 0, this.y = 0
            } else if (this.m || this._windowMath(), this.m) {
            let m = this._clientToServerX(o.clientX),
                A = this._clientToServerY(o.clientY);
            this.x = Math.round(m * f), this.y = Math.round(A * f)
        } else this.x = 0, this.y = 0;
        if (o.type === "mousedown" || o.type === "mouseup") {
            var v = 1 << o.button;
            g ? this.buttonMask |= v : this.buttonMask &= ~v
        }
        var S = [_, this.x, this.y, this.buttonMask, 0];
        this.send(S.join(","))
    }
    _handlePointerDown(o) {
        o.pointerType === "pen" && (o.preventDefault(), this._mouseButtonMovement(o))
    }
    _handlePointerMove(o) {
        o.pointerType === "pen" && this._mouseButtonMovement(o)
    }
    _handlePointerUp(o) {
        o.pointerType === "pen" && this._mouseButtonMovement(o)
    }
    _handleTrackpadEvent(o) {
        if (this._targetHasClass(o.target, Fs)) return;
        o.preventDefault(), o.stopPropagation();
        const r = Date.now(),
            u = this.useCssScaling ? 1 : window.devicePixelRatio || 1,
            c = 300,
            f = o.type,
            g = o.changedTouches;
        if (f === "touchstart") {
            this._trackpadTapTimeout && (clearTimeout(this._trackpadTapTimeout), this._trackpadTapTimeout = null);
            for (const y of g) this._trackpadTouches.set(y.identifier, {
                id: y.identifier,
                startX: y.clientX,
                startY: y.clientY,
                lastX: y.clientX,
                lastY: y.clientY,
                moved: !1
            });
            const _ = this._trackpadTouches.size;
            if (_ === 1) r - this._trackpadLastTapTime < c ? (this._trackpadGestureMode = "dragging", this.buttonMask |= 1, this.send(`m2,0,0,${this.buttonMask},0`), this._trackpadLastTapTime = 0) : this._trackpadGestureMode = "moving";
            else if (_ === 2) {
                this._trackpadGestureMode = "scrolling", this._trackpadLastTapTime = 0;
                const y = Array.from(this._trackpadTouches.values());
                this._trackpadLastScrollCentroid = {
                    x: (y[0].lastX + y[1].lastX) / 2,
                    y: (y[0].lastY + y[1].lastY) / 2
                }
            }
        } else if (f === "touchmove") {
            let _ = !1;
            for (const y of this._trackpadTouches.values()) {
                if (!y.moved) {
                    const v = Array.from(g).find(S => S.identifier === y.id) || y;
                    if (v) {
                        const S = v.clientX - y.startX,
                            m = v.clientY - y.startY;
                        S * S + m * m > this._TAP_THRESHOLD_DISTANCE_SQ && (y.moved = !0)
                    }
                }
                y.moved && (_ = !0)
            }
            if (_ && (this._trackpadLastTapTime = 0), this._trackpadGestureMode === "moving" || this._trackpadGestureMode === "dragging") {
                const y = this._trackpadTouches.values().next().value;
                if (y) {
                    const v = Array.from(g).find(S => S.identifier === y.id);
                    if (v) {
                        const S = (v.clientX - y.lastX) * u,
                            m = (v.clientY - y.lastY) * u;
                        (Math.abs(S) >= .5 || Math.abs(m) >= .5) && this.send(`m2,${Math.round(S)},${Math.round(m)},${this.buttonMask},0`), y.lastX = v.clientX, y.lastY = v.clientY
                    }
                }
            } else if (this._trackpadGestureMode === "scrolling") {
                const y = Array.from(this._trackpadTouches.values());
                if (y.length === 2) {
                    for (const m of g) {
                        const A = this._trackpadTouches.get(m.identifier);
                        A && (A.lastX = m.clientX, A.lastY = m.clientY)
                    }
                    const v = (y[0].lastX + y[1].lastX) / 2,
                        S = (y[0].lastY + y[1].lastY) / 2;
                    if (this._trackpadLastScrollCentroid) {
                        const m = v - this._trackpadLastScrollCentroid.x,
                            A = S - this._trackpadLastScrollCentroid.y,
                            E = 2;
                        Math.abs(A) > E && this._triggerMouseWheel(A < 0 ? "down" : "up", 1), Math.abs(m) > E && this._triggerHorizontalMouseWheel(m < 0 ? "left" : "right", 1)
                    }
                    this._trackpadLastScrollCentroid = {
                        x: v,
                        y: S
                    }
                }
            }
        } else if (f === "touchend" || f === "touchcancel") {
            const _ = this._trackpadTouches.size,
                y = !Array.from(this._trackpadTouches.values()).some(v => v.moved);
            _ === 2 && y ? (this.buttonMask |= 4, this.send(`m2,0,0,${this.buttonMask},0`), setTimeout(() => {
                this.buttonMask &= -5, this.send(`m2,0,0,${this.buttonMask},0`)
            }, 50), this._trackpadGestureMode = "completed", this._trackpadLastTapTime = 0) : _ === 1 && y && this._trackpadGestureMode !== "completed" && this._trackpadGestureMode !== "dragging" && (this._trackpadLastTapTime = r, this._trackpadTapTimeout = setTimeout(() => {
                this.buttonMask |= 1, this.send(`m2,0,0,${this.buttonMask},0`), setTimeout(() => {
                    this.buttonMask &= -2, this.send(`m2,0,0,${this.buttonMask},0`)
                }, 50)
            }, 200));
            for (const v of g) this._trackpadTouches.delete(v.identifier);
            this._trackpadTouches.size === 0 && (this._trackpadGestureMode === "dragging" && (this.buttonMask &= -2, this.send(`m2,0,0,${this.buttonMask},0`)), this._trackpadGestureMode = null, this._trackpadLastScrollCentroid = null)
        }
    }
    _calculateTouchCoordinates(o) {
        this._updateCursorPosition(o.clientX, o.clientY), this._latestMouseX = o.clientX, this._latestMouseY = o.clientY;
        const r = window.devicePixelRatio || 1,
            u = this.useCssScaling ? 1 : r;
        let c = document.getElementById("videoCanvas");
        if (window.isManualResolutionMode && c) {
            const f = c.getBoundingClientRect();
            if (f.width > 0 && f.height > 0 && c.width > 0 && c.height > 0) {
                const g = o.clientX - f.left,
                    _ = o.clientY - f.top,
                    y = c.width / f.width,
                    v = c.height / f.height;
                let S = g * y,
                    m = _ * v;
                this.x = Math.max(0, Math.min(c.width, Math.round(S))), this.y = Math.max(0, Math.min(c.height, Math.round(m)))
            } else this.x = 0, this.y = 0
        } else if (this.m || this._windowMath(), this.m) {
            let f = this._clientToServerX(o.clientX),
                g = this._clientToServerY(o.clientY);
            this.x = Math.round(f * u), this.y = Math.round(g * u)
        } else this.x = Math.round(o.clientX * u), this.y = Math.round(o.clientY * u)
    }
    _sendMouseState() {
        const o = [document.pointerLockElement === this.element || this.mouseRelative ? "m2" : "m", this.x, this.y, this.buttonMask, 0];
        this.send(o.join(","))
    }
    setTrackpadMode(o) {
        const r = !!o;
        this._trackpadMode !== r && (console.log(`Input: Trackpad mode ${r?"enabled":"disabled"}.`), this._trackpadMode = r, this._activeTouches.clear(), this._activeTouchIdentifier = null, this._isTwoFingerGesture = !1, this._touchScrollLastCentroid = null, this._longPressTimer && (clearTimeout(this._longPressTimer), this._longPressTimer = null, this._longPressTouchIdentifier = null), this.buttonMask !== 0 && (this.buttonMask = 0, this._sendMouseState()), this._trackpadMode ? (this.cursorDiv.style.display = "none", this.element.style.cursor = "default") : (this.element.style.cursor = "none", this.cursorDiv.style.display = "none"))
    }
    _handleTouchEvent(o) {
        if (this._trackpadMode) {
            this._handleTrackpadEvent(o);
            return
        }
        if (this._targetHasClass(o.target, Fs) || !this._guac_markEvent(o)) return;
        const r = o.type,
            u = Date.now();
        let c = !1;
        const f = 750;
        let g = !1;
        const _ = 225,
            y = this._TAP_THRESHOLD_DISTANCE_SQ;
        if (r === "touchstart") {
            this.cursorDiv.style.display = "block";
            for (let S = 0; S < o.changedTouches.length; S++) {
                const m = o.changedTouches[S];
                this._activeTouches.has(m.identifier) || (this._activeTouches.set(m.identifier, {
                    startX: m.clientX,
                    startY: m.clientY,
                    currentX: m.clientX,
                    currentY: m.clientY,
                    startTime: u,
                    identifier: m.identifier,
                    longPressCompleted: !1
                }), S === 0 && this._calculateTouchCoordinates(m))
            }
            const v = this._activeTouches.size;
            if (v === 1 && !this._isTwoFingerGesture) {
                c = !0;
                const [S] = this._activeTouches.keys(), m = this._activeTouches.get(S), A = {
                    clientX: m.currentX,
                    clientY: m.currentY
                };
                this._calculateTouchCoordinates(A);
                const E = this.x,
                    D = this.y;
                m && !m.longPressCompleted && (this._longPressTouchIdentifier = S, this._longPressTimer && clearTimeout(this._longPressTimer), this._longPressTimer = setTimeout(() => {
                    const F = this._activeTouches.get(this._longPressTouchIdentifier);
                    if (F && this._activeTouches.size === 1 && this._longPressTouchIdentifier === F.identifier && !this._isTwoFingerGesture && this._activeTouchIdentifier === null && !F.longPressCompleted) {
                        const R = F.currentX - F.startX,
                            Q = F.currentY - F.startY;
                        R * R + Q * Q < _ && (F.longPressCompleted = !0, this.x = E, this.y = D, this.buttonMask |= 4, this._sendMouseState(), setTimeout(() => {
                            (this.buttonMask & 4) !== 0 && (this.buttonMask &= -5, this._sendMouseState())
                        }, 50))
                    }
                    this._longPressTimer = null
                }, f))
            } else {
                if (this._longPressTimer && (clearTimeout(this._longPressTimer), this._longPressTimer = null), v === 2) {
                    this.cursorDiv.style.visibility = "hidden", this._isTwoFingerGesture = !0, this._activeTouchIdentifier = null;
                    const S = Array.from(this._activeTouches.values());
                    this._touchScrollLastCentroid = {
                        x: (S[0].currentX + S[1].currentX) / 2,
                        y: (S[0].currentY + S[1].currentY) / 2
                    }, (this.buttonMask & 1) === 1 && (this.buttonMask &= -2), c = !0
                } else v > 2 && (this._isTwoFingerGesture && (this._isTwoFingerGesture = !1), this._activeTouchIdentifier !== null && (this.buttonMask &= -2, this._sendMouseState(), this._activeTouchIdentifier = null));
                v !== 1 && (this._longPressTouchIdentifier = null)
            }
        } else if (r === "touchmove")
            for (let v = 0; v < o.changedTouches.length; v++) {
                const S = o.changedTouches[v],
                    m = this._activeTouches.get(S.identifier);
                if (m && (m.currentX = S.clientX, m.currentY = S.clientY, this._longPressTimer && S.identifier === this._longPressTouchIdentifier)) {
                    const A = m.currentX - m.startX,
                        E = m.currentY - m.startY;
                    A * A + E * E >= _ && (clearTimeout(this._longPressTimer), this._longPressTimer = null)
                }
            }
        if (this._isTwoFingerGesture && this._activeTouches.size === 2) {
            c = !0;
            const v = Array.from(this._activeTouches.values()),
                S = (v[0].currentX + v[1].currentX) / 2,
                m = (v[0].currentY + v[1].currentY) / 2;
            if (this._touchScrollLastCentroid) {
                const A = S - this._touchScrollLastCentroid.x,
                    E = m - this._touchScrollLastCentroid.y,
                    D = 2;
                Math.abs(E) > D && this._triggerMouseWheel(E < 0 ? "down" : "up", 1), Math.abs(A) > D && this._triggerHorizontalMouseWheel(A < 0 ? "left" : "right", 1)
            }
            this._touchScrollLastCentroid = {
                x: S,
                y: m
            }
        } else if (this._activeTouches.size === 1) {
            const [v] = this._activeTouches.keys(), S = this._activeTouches.get(v);
            if (this._activeTouchIdentifier === v) this._calculateTouchCoordinates({
                clientX: S.currentX,
                clientY: S.currentY
            }), this._sendMouseState(), g = !0, c = !0;
            else if (this._activeTouchIdentifier === null && !S.longPressCompleted) {
                const m = S.currentX - S.startX,
                    A = S.currentY - S.startY;
                m * m + A * A >= y && (this._longPressTimer && v === this._longPressTouchIdentifier && (clearTimeout(this._longPressTimer), this._longPressTimer = null), this._activeTouchIdentifier = v, this._calculateTouchCoordinates({
                    clientX: S.currentX,
                    clientY: S.currentY
                }), this.buttonMask |= 1, this._sendMouseState(), g = !0), c = !0
            }
        }
        if (this._activeTouchIdentifier !== null && !g && this._activeTouches.size > 0) c = !0;
        else if (r === "touchend" || r === "touchcancel") {
            const v = o.changedTouches;
            for (let S = 0; S < v.length; S++) {
                const m = v[S],
                    A = m.identifier,
                    E = this._activeTouches.get(A);
                if (!E) continue;
                if (this._longPressTimer && A === this._longPressTouchIdentifier && (clearTimeout(this._longPressTimer), this._longPressTimer = null), E.longPressCompleted) {
                    this._activeTouches.delete(A), A === this._longPressTouchIdentifier && (this._longPressTouchIdentifier = null), c = !0;
                    continue
                }
                E.currentX = m.clientX, E.currentY = m.clientY;
                const D = u - E.startTime,
                    F = E.currentX - E.startX,
                    R = E.currentY - E.startY,
                    Q = F * F + R * R;
                this._isTwoFingerGesture || (this._activeTouchIdentifier === null && this._activeTouches.size === 1 && this._activeTouches.has(A) ? D < this._TAP_MAX_DURATION && Q < y && (this._calculateTouchCoordinates(m), this.buttonMask |= 1, this._sendMouseState(), c = !0, setTimeout(() => {
                    this.buttonMask &= -2, this._sendMouseState()
                }, 10)) : A === this._activeTouchIdentifier && (this._calculateTouchCoordinates(m), this.buttonMask &= -2, this._sendMouseState(), this._activeTouchIdentifier = null, c = !0)), this._activeTouches.delete(A), A === this._longPressTouchIdentifier && (this._longPressTouchIdentifier = null)
            } {
                const S = this._activeTouches.size;
                if (this._isTwoFingerGesture && S < 2 && (this._trackpadMode || (this.cursorDiv.style.visibility = "visible"), this._isTwoFingerGesture = !1, this._touchScrollLastCentroid = null), S === 0 && (this._activeTouchIdentifier = null, this._isTwoFingerGesture = !1, this._touchScrollLastCentroid = null, this._longPressTimer && (clearTimeout(this._longPressTimer), this._longPressTimer = null), this._longPressTouchIdentifier = null), S > 0 && this._longPressTouchIdentifier && !this._activeTouches.has(this._longPressTouchIdentifier) && (this._longPressTimer && clearTimeout(this._longPressTimer), this._longPressTimer = null, this._longPressTouchIdentifier = null), S === 1) {
                    const [m] = this._activeTouches.keys();
                    if (this._longPressTouchIdentifier !== m) {
                        this._longPressTimer && clearTimeout(this._longPressTimer), this._longPressTimer = null, this._longPressTouchIdentifier = null;
                        const A = this._activeTouches.get(m);
                        if (A && !A.longPressCompleted) {
                            const E = {
                                clientX: A.currentX,
                                clientY: A.currentY,
                                identifier: m
                            };
                            this._calculateTouchCoordinates(E);
                            const D = this.x,
                                F = this.y;
                            this._longPressTouchIdentifier = m, this._longPressTimer = setTimeout(() => {
                                const R = this._activeTouches.get(this._longPressTouchIdentifier);
                                if (R && this._activeTouches.size === 1 && this._longPressTouchIdentifier === R.identifier && !this._isTwoFingerGesture && this._activeTouchIdentifier === null && !R.longPressCompleted) {
                                    const Q = R.currentX - R.startX,
                                        q = R.currentY - R.startY;
                                    Q * Q + q * q < _ && (R.longPressCompleted = !0, this.x = D, this.y = F, this.buttonMask |= 4, this._sendMouseState(), setTimeout(() => {
                                        (this.buttonMask & 4) !== 0 && (this.buttonMask &= -5, this._sendMouseState())
                                    }, 50))
                                }
                                this._longPressTimer = null
                            }, f)
                        }
                    }
                } else S !== 1 && (this._longPressTimer && clearTimeout(this._longPressTimer), this._longPressTimer = null, this._longPressTouchIdentifier = null)
            }
        }
        c && this.element.contains(o.target) && o.preventDefault()
    }
    _triggerMouseWheel(o, r) {
        r = Math.max(1, Math.round(r));
        const u = 1 << (o === "up" ? 4 : 3),
            c = "m2",
            f = 0,
            g = 0;
        this.buttonMask |= u, this.send([c, f, g, this.buttonMask, r].join(",")), setTimeout(() => {
            (this.buttonMask & u) !== 0 && (this.buttonMask &= ~u, this.send([c, f, g, this.buttonMask, r].join(",")))
        }, 10)
    }
    _triggerHorizontalMouseWheel(o, r) {
        r = Math.max(1, Math.round(r));
        const u = 1 << (o === "left" ? 6 : 7),
            c = "m2",
            f = 0,
            g = 0;
        this.buttonMask |= u, this.send([c, f, g, this.buttonMask, r].join(",")), setTimeout(() => {
            (this.buttonMask & u) !== 0 && (this.buttonMask &= ~u, this.send([c, f, g, this.buttonMask, r].join(",")))
        }, 10)
    }
    _dropThreshold() {
        for (var o = 0, r = this._queue.dequeue(); !this._queue.isEmpty();) {
            var u = this._queue.dequeue();
            u >= 80 && r == u && o++, r = u
        }
        return o >= 2
    }
    _mouseWheelWrapper(o) {
        var r = Math.trunc(Math.abs(o.deltaY));
        this._queue.size() < 4 && this._queue.enqueue(r), this._queue.size() == 4 && (this._dropThreshold() ? (this._allowThreshold = !1, this._smallestDeltaY = 1e4) : this._allowThreshold = !0), this._allowThreshold && this._allowTrackpadScrolling ? (this._allowTrackpadScrolling = !1, this._mouseWheel(o), setTimeout(() => this._allowTrackpadScrolling = !0, this._wheelThreshold)) : this._allowThreshold || this._mouseWheel(o), o.preventDefault()
    }
    _mouseWheel(o) {
        if (o.deltaY !== 0) {
            const r = o.deltaY < 0 ? "up" : "down";
            let u = Math.abs(Math.trunc(o.deltaY));
            u < this._smallestDeltaY && u !== 0 && (this._smallestDeltaY = u);
            const c = Math.max(1, Math.floor(u / this._smallestDeltaY)),
                f = Math.min(c, this._scrollMagnitude);
            this._triggerMouseWheel(r, f)
        }
        if (o.deltaX !== 0) {
            const r = o.deltaX < 0 ? "left" : "right",
                u = Math.max(1, Math.round(Math.abs(o.deltaX) / 100)),
                c = Math.min(u, this._scrollMagnitude);
            this._triggerHorizontalMouseWheel(r, c)
        }
    }
    _contextMenu(o) {
        this.element.contains(o.target) && o.preventDefault()
    }
    _pointerLock() {
        document.pointerLockElement === this.element ? this.send("p,1") : (this.send("p,0"), this.resetKeyboard())
    }
    _windowMath() {
        const o = this.element.getBoundingClientRect(),
            r = o.width,
            u = o.height,
            c = this.element.offsetWidth,
            f = this.element.offsetHeight;
        if (r <= 0 || u <= 0 || c <= 0 || f <= 0) {
            this.m = null;
            return
        }
        const g = r / c,
            _ = u / f,
            y = Math.min(g, _),
            v = c * y,
            S = f * y,
            m = (r - v) / 2,
            A = (u - S) / 2,
            E = v > 0 ? c / v : 1,
            D = S > 0 ? f / S : 1;
        this.m = {
            mouseMultiX: E,
            mouseMultiY: D,
            mouseOffsetX: m,
            mouseOffsetY: A,
            elementClientX: o.left,
            elementClientY: o.top,
            frameW: c,
            frameH: f
        }
    }
    _clientToServerX(o) {
        if (!this.m) return 0;
        let r = (o - this.m.elementClientX - this.m.mouseOffsetX) * this.m.mouseMultiX;
        return Math.max(0, Math.min(this.m.frameW, Math.round(r)))
    }
    _clientToServerY(o) {
        if (!this.m) return 0;
        let r = (o - this.m.elementClientY - this.m.mouseOffsetY) * this.m.mouseMultiY;
        return Math.max(0, Math.min(this.m.frameH, Math.round(r)))
    }
    _gamepadConnected(o) {
        this.gamepadManager || (this.gamepadManager = new R2(o.gamepad, this._gamepadButton.bind(this), this._gamepadAxis.bind(this)));
        const r = "js,c," + this.playerIndex + "," + btoa(o.gamepad.id) + "," + o.gamepad.axes.length + "," + o.gamepad.buttons.length;
        this.send(r), this.ongamepadconnected !== null && this.ongamepadconnected(o.gamepad.id)
    }
    _gamepadDisconnect(o) {
        this.ongamepaddisconneceted !== null && this.ongamepaddisconneceted();
        const r = this.playerIndex;
        this.send("js,d," + r)
    }
    _gamepadButton(o, r, u) {
        const c = this.playerIndex;
        this.send("js,b," + c + "," + r + "," + u), window.postMessage({
            type: "gamepadButtonUpdate",
            gamepadIndex: c,
            buttonIndex: r,
            value: u
        }, window.location.origin)
    }
    _gamepadAxis(o, r, u) {
        const c = this.playerIndex;
        this.send("js,a," + c + "," + r + "," + u), window.postMessage({
            type: "gamepadAxisUpdate",
            gamepadIndex: c,
            axisIndex: r,
            value: u
        }, window.location.origin)
    }
    _onFullscreenChange() {
        document.fullscreenElement === this.element.parentElement ? (document.pointerLockElement !== this.element && this.element.requestPointerLock().catch(o => console.warn("Pointer lock failed on fullscreen:", o)), this.requestKeyboardLock()) : (document.pointerLockElement === this.element && document.exitPointerLock(), this.send("kr"), this.resetKeyboard())
    }
    _targetHasClass(o, r) {
        let u = o;
        for (; u && u.classList;) {
            if (u.classList.contains(r)) return !0;
            u = u.parentElement
        }
        return !1
    }
    getWindowResolution() {
        const o = document.body ? document.body.offsetWidth : window.innerWidth,
            r = document.body ? document.body.offsetHeight : window.innerHeight,
            u = window.devicePixelRatio || 1,
            c = o * u,
            f = r * u;
        return [Math.max(1, parseInt(c - c % 2)), Math.max(1, parseInt(f - f % 2))]
    }
    attach() {
        this.listeners.push(je(this.element, "resize", this._windowMath, this)), this.listeners.push(je(document, "pointerlockchange", this._pointerLock, this)), this.listeners.push(je(document, "fullscreenchange", this._onFullscreenChange, this)), this.listeners.push(je(window, "resize", this._windowMath, this)), this.listeners.push(je(window, "gamepadconnected", this._gamepadConnected, this)), this.listeners.push(je(window, "gamepaddisconnected", this._gamepadDisconnect, this)), this.isSharedMode || this.attach_context()
    }
    attach_context() {
        this.listeners_context.push(je(window, "keydown", this._handleKeyDown, this, !0)), this.listeners_context.push(je(window, "keyup", this._handleKeyUp, this, !0)), this.listeners_context.push(je(window, "blur", this.resetKeyboard, this)), this.listeners_context.push(je(this.keyboardInputAssist, "input", this._handleMobileInput, this)), this.listeners_context.push(je(document, "mousedown", this._handleOutsideClick, this, !0)), this.listeners_context.push(je(document, "touchstart", this._handleOutsideClick, this, !0)), this.listeners_context.push(je(this.element, "wheel", this._mouseWheelWrapper, this)), this.listeners_context.push(je(this.element, "contextmenu", this._contextMenu, this));
        const o = this.element;
        this.listeners_context.push(je(o, "compositionstart", this._compositionStart, this)), this.listeners_context.push(je(o, "compositionupdate", this._compositionUpdate, this)), this.listeners_context.push(je(o, "compositionend", this._compositionEnd, this)), this.listeners_context.push(je(this.element, "pointerdown", this._handlePointerDown, this)), this.listeners_context.push(je(this.element, "pointermove", this._handlePointerMove, this)), this.listeners_context.push(je(this.element, "pointerup", this._handlePointerUp, this)), this.listeners_context.push(je(this.element, "pointercancel", this._handlePointerUp, this)), "ontouchstart" in window && (this.listeners_context.push(je(this.element, "touchstart", this._handleTouchEvent, this, !1)), this.listeners_context.push(je(this.element, "touchend", this._handleTouchEvent, this, !1)), this.listeners_context.push(je(this.element, "touchmove", this._handleTouchEvent, this, !1)), this.listeners_context.push(je(this.element, "touchcancel", this._handleTouchEvent, this, !1))), this.listeners_context.push(je(this.element, "mousemove", this._mouseButtonMovement, this)), this.listeners_context.push(je(this.element, "mousedown", this._mouseButtonMovement, this)), this.listeners_context.push(je(this.element, "mouseup", this._mouseButtonMovement, this)), document.fullscreenElement === this.element.parentElement ? (document.pointerLockElement !== this.element && this.element.requestPointerLock().catch(() => {}), this.requestKeyboardLock()) : document.pointerLockElement === this.element && this._pointerLock(), this._windowMath()
    }
    detach() {
        X0(this.listeners), this.listeners = [], this.gamepadManager && (this.gamepadManager.destroy(), this.gamepadManager = null), this.detach_context()
    }
    detach_context() {
        X0(this.listeners_context), this.listeners_context = [], this.send("kr"), this.resetKeyboard(), this._activeTouches.clear(), this._activeTouchIdentifier = null, this._isTwoFingerGesture = !1, (this.buttonMask & 1) === 1 && (this.buttonMask &= -2, this._sendMouseState()), this._exitPointerLock()
    }
    _exitPointerLock() {
        document.pointerLockElement === this.element && document.exitPointerLock()
    }
    enterFullscreen() {
        this.element.parentElement && document.fullscreenElement === null ? this.element.parentElement.requestFullscreen().catch(o => console.error("Fullscreen request failed:", o)) : document.fullscreenElement !== null && document.pointerLockElement !== this.element && this.element.requestPointerLock().catch(() => {})
    }
    requestKeyboardLock() {
        if (document.fullscreenElement && "keyboard" in navigator && "lock" in navigator.keyboard) {
            const o = ["AltLeft", "AltRight", "Tab", "Escape", "MetaLeft", "MetaRight", "ContextMenu"];
            navigator.keyboard.lock(o).then(() => {}).catch(r => {})
        }
    }
}

function je(i, o, r, u, c = !1) {
    if (!i || typeof i.addEventListener != "function") return console.error("addListener: Invalid target object", i), null;
    const f = u ? r.bind(u) : r,
        g = {
            capture: c,
            passive: !1
        };
    return i.addEventListener(o, f, g), [i, o, f, g]
}

function X0(i) {
    for (const o of i) o && o[0] && typeof o[0].removeEventListener == "function" && o[0].removeEventListener(o[1], o[2], o[3]);
    i.length = 0
}
let he, Oe = null,
    V = null,
    Me = null,
    O, Ks = null,
    Ge, Us, Mi;
window.currentAudioBufferSize = 0;
let go = [],
    Ei = [],
    mo = 0,
    bo = () => {
        console.error("initializeDecoder function not yet assigned!")
    },
    Qe = !0,
    bt = !0,
    vt = !1,
    ka, qa = -1,
    Om = !1,
    Zl = null,
    Vt = null,
    js = null,
    Ci = null,
    co = null,
    fo = null,
    aa = null;
const U0 = 50,
    z2 = 1024 * 1024 - 1;
window.isManualResolutionMode = !1;
let Z = null,
    J = null,
    tn = null,
    Cf = null,
    _a = {},
    vl = null,
    te = "x264enc-stiped",
    St = !1,
    an = !1;

function z0() {
    const i = window.innerHeight * .01;
    document.documentElement.style.setProperty("--vh", `${i}px`)
}
let Za = null,
    zs = 0;
const Mu = window.location.hash;
Mu === "#shared" ? (Za = "shared", zs = void 0) : Mu === "#player2" ? (Za = "player2", zs = 1) : Mu === "#player3" ? (Za = "player3", zs = 2) : Mu === "#player4" && (Za = "player4", zs = 3);
let Ae = "idle",
    We = null;
const P2 = 7e3;
let Ru = null,
    hl = 0;
const P0 = 3,
    P = Za !== null;
let Ps = !1;
P && console.log(`Client is running in ${Za} mode.`);
window.onload = () => {};
const H2 = window.location.href.split("#")[0],
    nn = H2.replace(/[^a-zA-Z0-9.-_]/g, "_");
document.title = "Selkies";
fetch("manifest.json").then(i => i.json()).then(i => {
    i.name && (document.title = i.name)
}).catch(() => {});
let $a = 8e3,
    vo = 60,
    Wl = 25,
    Li = !1,
    ki = !1,
    gl = 60,
    ml = 90,
    bl = !1,
    Lf = 32e4,
    po = "connecting",
    $l = "";
const j2 = {
        connectionStatType: "unknown",
        connectionLatency: 0,
        connectionVideoLatency: 0,
        connectionAudioLatency: 0,
        connectionAudioCodecName: "NA",
        connectionAudioBitrate: 0,
        connectionPacketsReceived: 0,
        connectionPacketsLost: 0,
        connectionBytesReceived: 0,
        connectionBytesSent: 0,
        connectionCodec: "unknown",
        connectionVideoDecoder: "unknown",
        connectionResolution: "",
        connectionFrameRate: 0,
        connectionVideoBitrate: 0,
        connectionAvailableBandwidth: 0
    },
    G2 = {
        gpuLoad: 0,
        gpuMemoryTotal: 0,
        gpuMemoryUsed: 0
    },
    I2 = {
        serverCPUUsage: 0,
        serverMemoryTotal: 0,
        serverMemoryUsed: 0
    };
let $s = !0,
    yo = !1,
    So = !1,
    Jl = !1,
    pa;
window.fps = 0;
let oo = 0,
    Eu = new Set,
    Cu = performance.now(),
    Hs = performance.now(),
    De, Lu, ho, Ct, Ft;
const Da = (i, o) => {
        const r = `${nn}_${i}`,
            u = window.localStorage.getItem(r);
        return u == null ? o : parseInt(u)
    },
    tt = (i, o) => {
        const r = `${nn}_${i}`;
        o == null ? window.localStorage.removeItem(r) : window.localStorage.setItem(r, o.toString())
    },
    Ja = (i, o) => {
        const r = `${nn}_${i}`,
            u = window.localStorage.getItem(r);
        return u === null ? o : u.toString().toLowerCase() === "true"
    },
    Je = (i, o) => {
        const r = `${nn}_${i}`;
        o == null ? window.localStorage.removeItem(r) : window.localStorage.setItem(r, o.toString())
    },
    V2 = (i, o) => {
        const r = `${nn}_${i}`;
        return window.localStorage.getItem(r) ?? o
    },
    Hf = (i, o) => {
        const r = `${nn}_${i}`;
        o == null ? window.localStorage.removeItem(r) : window.localStorage.setItem(r, o.toString())
    };
$a = Da("videoBitRate", $a);
tt("videoBitRate", $a);
vo = Da("videoFramerate", vo);
tt("videoFramerate", vo);
Wl = Da("videoCRF", Wl);
tt("videoCRF", Wl);
Li = Ja("h264_fullcolor", Li);
Je("h264_fullcolor", Li);
ki = Ja("h264_streaming_mode", ki);
Je("h264_streaming_mode", ki);
gl = Da("jpegQuality", gl);
tt("jpegQuality", gl);
ml = Da("paintOverJpegQuality", ml);
tt("paintOverJpegQuality", ml);
bl = Ja("useCpu", bl);
Je("useCpu", bl);
Lf = Da("audioBitRate", Lf);
tt("audioBitRate", Lf);
$s = Ja("resizeRemote", $s);
Je("resizeRemote", $s);
yo = Ja("debug", yo);
Je("debug", yo);
mo = Da("videoBufferSize", 0);
tt("videoBufferSize", mo);
te = V2("encoder", "x264enc");
Hf("encoder", te);
pa = Ja("scaleLocallyManual", !0);
Je("scaleLocallyManual", pa);
isManualResolutionMode = Ja("isManualResolutionMode", !1);
Je("isManualResolutionMode", isManualResolutionMode);
ka = Ja("isGamepadEnabled", !0);
Je("isGamepadEnabled", ka);
St = Ja("useCssScaling", !1);
Je("useCssScaling", St);
an = Ja("trackpadMode", !1);
Je("trackpadMode", an);
P ? (Z = 1280, J = 720, console.log(`Shared mode: Initialized manualWidth/Height to ${Z}x${J}`)) : (Z = Da("manualWidth", null), tt("manualWidth", Z), J = Da("manualHeight", null), tt("manualHeight", J));
const Y2 = () => {
        "webrtcInput" in window && window.webrtcInput && typeof window.webrtcInput.enterFullscreen == "function" && window.webrtcInput.enterFullscreen()
    },
    Q2 = () => {
        Ct && Ct.classList.add("hidden"), De && De.classList.add("hidden"), If(), console.log("playStream called in WebSocket mode - UI elements hidden.")
    },
    so = () => {
        De && (De.textContent = $l || po)
    };
window.applyTimestamp = i => {
    const o = new Date;
    return `[${`${o.getHours()}:${o.getMinutes()}:${o.getSeconds()}`}] ${i}`
};
const ke = i => Math.floor(i / 2) * 2,
    jf = () => {
        if (!V) return;
        const i = window.devicePixelRatio || 1;
        !St || St && i <= 1 ? V.style.imageRendering !== "pixelated" && (console.log("Setting canvas rendering to 'pixelated' for 1:1 display."), V.style.imageRendering = "pixelated", V.style.setProperty("image-rendering", "crisp-edges", "")) : V.style.imageRendering !== "auto" && (console.log("Setting canvas rendering to 'auto' for smooth upscaling."), V.style.imageRendering = "auto")
    },
    q2 = () => {
        const i = document.createElement("style");
        i.textContent = `
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #000;
  color: #fff;
}
#app {
  display: flex;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
}
.video-container {
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.video-container video,
.video-container canvas,
.video-container #overlayInput {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.video-container video {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: none;
}
.video-container #videoCanvas {
    z-index: 2;
    pointer-events: none;
    display: block;
}
.video-container #overlayInput {
    opacity: 0;
    z-index: 3;
    caret-color: transparent;
    background-color: transparent;
    color: transparent;
    pointer-events: auto;
    -webkit-user-select: none;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
}
.video-container #playButton {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}
.hidden {
  display: none !important;
}
.video-container .status-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  text-align: center;
  z-index: 5;
}
#playButton {
  padding: 15px 30px;
  font-size: 1.5em;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  backdrop-filter: blur(5px);
}
  `, document.head.appendChild(i)
    };

function Du(i, o) {
    if (P) {
        console.log("Shared mode: Resolution sending to server is blocked.");
        return
    }
    const r = St ? 1 : window.devicePixelRatio || 1,
        u = ke(i * r),
        c = ke(o * r),
        f = `${u}x${c}`;
    console.log(`Sending resolution to server: ${f}, Pixel Ratio Used: ${r}, useCssScaling: ${St}`), O && O.readyState === WebSocket.OPEN ? O.send(`r,${f}`) : console.warn("Cannot send resolution via WebSocket: Connection not open.")
}

function Lt(i, o, r) {
    if (!V || !V.parentElement) {
        console.error("Cannot apply manual canvas style: Canvas or parent container not found.");
        return
    }
    if (i <= 0 || o <= 0) {
        console.warn(`Cannot apply manual canvas style: Invalid target dimensions ${i}x${o}`);
        return
    }
    const u = window.isManualResolutionMode || St ? 1 : window.devicePixelRatio || 1,
        c = ke(i * u),
        f = ke(o * u);
    (V.width !== c || V.height !== f) && (V.width = c, V.height = f, console.log(`Canvas internal buffer set to: ${c}x${f}`));
    const g = V.parentElement,
        _ = g.clientWidth,
        y = g.clientHeight;
    if (r) {
        const v = i / o,
            S = _ / y;
        let m, A;
        v > S ? (m = _, A = _ / v) : (A = y, m = y * v);
        const E = (y - A) / 2,
            D = (_ - m) / 2;
        V.style.position = "absolute", V.style.width = `${m}px`, V.style.height = `${A}px`, V.style.top = `${E}px`, V.style.left = `${D}px`, V.style.objectFit = "contain", console.log(`Applied manual style (Scaled): CSS ${m.toFixed(2)}x${A.toFixed(2)}, Buffer ${c}x${f}, Pos ${D.toFixed(2)},${E.toFixed(2)}`)
    } else V.style.position = "absolute", V.style.width = `${i}px`, V.style.height = `${o}px`, V.style.top = "0px", V.style.left = "0px", V.style.objectFit = "fill", console.log(`Applied manual style (Exact): CSS ${i}x${o}, Buffer ${c}x${f}, Pos 0,0`);
    V.style.display = "block", jf()
}

function _o(i, o) {
    if (!V) return;
    if (i <= 0 || o <= 0) {
        console.warn(`Cannot reset canvas style: Invalid stream dimensions ${i}x${o}`);
        return
    }
    const r = St ? 1 : window.devicePixelRatio || 1,
        u = ke(i * r),
        c = ke(o * r);
    (V.width !== u || V.height !== c) && (V.width = u, V.height = c, console.log(`Canvas internal buffer reset to: ${u}x${c}`)), V.style.width = `${i}px`, V.style.height = `${o}px`;
    const f = V.parentElement;
    if (f) {
        const g = f.clientWidth,
            _ = f.clientHeight,
            y = Math.floor((g - i) / 2),
            v = Math.floor((_ - o) / 2);
        V.style.position = "absolute", V.style.top = `${v}px`, V.style.left = `${y}px`, console.log(`Reset canvas CSS to ${i}px x ${o}px, Pos ${y},${v}, object-fit: fill. Buffer: ${u}x${c}`)
    } else V.style.position = "absolute", V.style.top = "0px", V.style.left = "0px", console.log(`Reset canvas CSS to ${i}px x ${o}px, Pos 0,0 (no parent metrics), object-fit: fill. Buffer: ${u}x${c}`);
    V.style.objectFit = "fill", V.style.display = "block", jf()
}

function $2() {
    Xu && (console.log("Switching to Auto Mode: Removing direct manual local scaling listener."), window.removeEventListener("resize", Xu)), tn ? (console.log("Switching to Auto Mode: Adding original (auto) debounced resize listener."), window.removeEventListener("resize", tn), window.addEventListener("resize", tn), typeof Cf == "function" ? (console.log("Triggering immediate auto-resize calculation for auto mode."), Cf()) : console.warn("handleResizeUI function not directly callable from enableAutoResize. Auto-resize will occur on next event.")) : console.warn("Cannot enable auto-resize: originalWindowResizeHandler not found.")
}
const Xu = () => {
    window.isManualResolutionMode && !P && Z != null && J != null && Z > 0 && J > 0 && Lt(Z, J, pa)
};

function Gf() {
    tn && (console.log("Switching to Manual Mode Local Scaling: Removing original (auto) resize listener."), window.removeEventListener("resize", tn)), console.log("Switching to Manual Mode Local Scaling: Adding direct manual scaling listener."), window.removeEventListener("resize", Xu), window.addEventListener("resize", Xu), window.isManualResolutionMode && !P && Z != null && J != null && Z > 0 && J > 0 && (console.log("Applying current manual canvas style after enabling direct manual resize handler."), Lt(Z, J, pa))
}

function Z2() {
    if (!P) return;
    const i = document.getElementById("globalFileInput");
    i && (i.disabled = !0, console.log("Shared mode: Disabled globalFileInput."))
}
const W2 = () => {
    q2(), z0(), window.addEventListener("resize", z0), window.addEventListener("requestFileUpload", t4);
    const i = document.getElementById("app");
    if (!i) {
        console.error("FATAL: Could not find #app element.");
        return
    }
    const o = document.createElement("div");
    o.className = "video-container", De = document.createElement("div"), De.id = "status-display", De.className = "status-bar", De.textContent = "Connecting...", o.appendChild(De), Ft = document.createElement("input"), Ft.type = "text", Ft.readOnly = !1, Ft.id = "overlayInput", o.appendChild(Ft), Lu = document.createElement("video"), Lu.id = "stream", Lu.style.display = "none", o.appendChild(Lu), V = document.getElementById("videoCanvas"), V || (V = document.createElement("canvas"), V.id = "videoCanvas"), o.appendChild(V), P ? ((!Z || Z <= 0 || !J || J <= 0) && (Z = 1280, J = 720), Lt(Z, J, !0), window.addEventListener("resize", () => {
        P && Z && J && Z > 0 && J > 0 && Lt(Z, J, !0)
    }), console.log(`Initialized UI in Shared Mode: Canvas buffer target ${Z}x${J} (logical), will scale to fit viewport.`)) : isManualResolutionMode && Z != null && J != null && Z > 0 && J > 0 ? (Lt(Z, J, pa), Gf(), console.log(`Initialized UI in Manual Resolution Mode: ${Z}x${J} (logical), ScaleLocally: ${pa}`)) : (_o(1024, 768), console.log("Initialized UI in Auto Resolution Mode (defaulting to 1024x768 logical for now)")), Me = V.getContext("2d"), Me || console.error("Failed to get 2D rendering context"), ho = document.createElement("audio"), ho.id = "audio_stream", ho.style.display = "none", o.appendChild(ho), Ct = document.createElement("button"), Ct.id = "playButton", Ct.textContent = "Play Stream", o.appendChild(Ct), Ct.classList.add("hidden"), De.classList.remove("hidden");
    const r = document.createElement("div");
    r.id = "dev-sidebar";
    const u = document.createElement("input");
    if (u.type = "file", u.id = "globalFileInput", u.multiple = !0, u.style.display = "none", document.body.appendChild(u), u.addEventListener("change", a4), !document.getElementById("keyboard-input-assist")) {
        const c = document.createElement("input");
        c.type = "text", c.id = "keyboard-input-assist", c.style.position = "absolute", c.style.left = "-9999px", c.style.top = "-9999px", c.style.width = "1px", c.style.height = "1px", c.style.opacity = "0", c.style.border = "0", c.style.padding = "0", c.style.caretColor = "transparent", c.setAttribute("aria-hidden", "true"), c.setAttribute("autocomplete", "off"), c.setAttribute("autocorrect", "off"), c.setAttribute("autocapitalize", "off"), c.setAttribute("spellcheck", "false"), document.body.appendChild(c), console.log("Dynamically added #keyboard-input-assist element.")
    }
    i.appendChild(o), so(), Ct.addEventListener("click", Q2), P && Z2()
};

function Di() {
    console.log("Clearing all VNC stripe decoders.");
    for (const i in _a)
        if (_a.hasOwnProperty(i)) {
            const o = _a[i];
            if (o.decoder && o.decoder.state !== "closed") try {
                o.decoder.close(), console.log(`Closed VNC stripe decoder for Y=${i}`)
            } catch (r) {
                console.error(`Error closing VNC stripe decoder for Y=${i}:`, r)
            }
        } _a = {}, console.log("All VNC stripe decoders and metadata cleared.")
}

function J2(i) {
    const o = _a[i];
    if (!(!o || o.decoder.state !== "configured" || !o.pendingChunks))
        for (console.log(`Processing ${o.pendingChunks.length} pending chunks for stripe Y=${i}`); o.pendingChunks.length > 0;) {
            const r = o.pendingChunks.shift(),
                u = new EncodedVideoChunk({
                    type: r.type,
                    timestamp: r.timestamp,
                    data: r.data
                });
            try {
                o.decoder.decode(u)
            } catch (c) {
                console.error(`Error decoding pending chunk for stripe Y=${i}:`, c, u)
            }
        }
}
let pl = [];

function e4(i, o, r) {
    pl.push({
        yPos: i,
        frame: r,
        vncFrameID: o
    })
}

function t4() {
    if (P) {
        console.log("Shared mode: File upload via requestFileUpload blocked.");
        return
    }
    const i = document.getElementById("globalFileInput");
    if (!i) {
        console.error("Global file input not found!");
        return
    }
    if (!O || O.readyState !== WebSocket.OPEN) {
        console.warn("WebSocket is not open. File upload cannot be initiated.");
        return
    }
    console.log("Triggering click on hidden file input."), i.click()
}
async function a4(i) {
    if (P) {
        console.log("Shared mode: File upload via fileInputChange blocked."), i.target.value = null;
        return
    }
    const o = i.target.files;
    if (!o || o.length === 0) {
        i.target.value = null;
        return
    }
    if (console.log(`File input changed, processing ${o.length} files sequentially.`), !O || O.readyState !== WebSocket.OPEN) {
        console.error("WebSocket is not open. Cannot upload selected files."), window.postMessage({
            type: "fileUpload",
            payload: {
                status: "error",
                fileName: "N/A",
                message: "WebSocket not open for upload."
            }
        }, window.location.origin), i.target.value = null;
        return
    }
    try {
        for (let r = 0; r < o.length; r++) {
            const u = o[r],
                c = u.name;
            console.log(`Uploading file ${r+1}/${o.length}: ${c}`), await Vf(u, c)
        }
        console.log("Finished processing all files from input.")
    } catch (r) {
        const u = `An error occurred during the file input upload process: ${r.message||r}`;
        if (console.error(u), window.postMessage({
                type: "fileUpload",
                payload: {
                    status: "error",
                    fileName: "N/A",
                    message: u
                }
            }, window.location.origin), O && O.readyState === WebSocket.OPEN) try {
            O.send("FILE_UPLOAD_ERROR:GENERAL:File input processing failed")
        } catch {}
    } finally {
        i.target.value = null
    }
}
const If = async () => {
    if (vl === null)
        if ("wakeLock" in navigator) try {
            vl = await navigator.wakeLock.request("screen"), vl.addEventListener("release", () => {
                console.log("Screen Wake Lock was released automatically."), vl = null
            }), console.log("Screen Wake Lock is active.")
        } catch (i) {
            console.error(`Could not acquire Wake Lock: ${i.name}, ${i.message}`)
        } else console.warn("Wake Lock API is not supported by this browser.")
}, kf = async () => {
    vl !== null && (await vl.release(), vl = null)
};

function i4(i, o) {
    let r;
    return function(...u) {
        clearTimeout(r), r = setTimeout(() => {
            i.apply(this, u)
        }, o)
    }
}
const yf = () => {
        So || (So = !0, De && De.classList.add("hidden"), Ct && Ct.classList.add("hidden"), console.log("Stream started (UI elements hidden)."))
    },
    Sf = () => {
        if (Jl) {
            console.log("Input already initialized. Skipping.");
            return
        }
        if (Za === "shared") {
            Jl = !0, console.log("Generic #shared mode: Input system instance creation skipped.");
            return
        }
        Jl = !0, console.log("Initializing Input system...");
        let i;
        const o = c => {
            O && O.readyState === WebSocket.OPEN ? O.send(c) : console.warn("initializeInput: WebSocket not open, cannot send input message:", c)
        };
        if (!Ft) {
            console.error("initializeInput: overlayInput element not found. Cannot initialize input handling."), Jl = !1;
            return
        }
        if (i = new Pf(Ft, o, P, zs, St), i.getWindowResolution = () => {
                const c = document.querySelector(".video-container");
                if (!c) return console.warn("initializeInput: .video-container not found, using window inner dimensions for resolution calculation."), [window.innerWidth, window.innerHeight];
                const f = c.getBoundingClientRect();
                return [f.width, f.height]
            }, i.ongamepadconnected = c => {
                console.log(`Client: Gamepad "${c}" connected. isSharedMode: ${P}, isGamepadEnabled (global toggle): ${ka}`), window.webrtcInput && window.webrtcInput.gamepadManager ? P ? (window.webrtcInput.gamepadManager.enable(), console.log("Shared mode: Gamepad connected, ensuring its GamepadManager is active for polling.")) : ka ? (window.webrtcInput.gamepadManager.enable(), console.log("Primary mode: Gamepad connected, master gamepad toggle is ON. Ensuring its GamepadManager is active.")) : (window.webrtcInput.gamepadManager.disable(), console.log("Primary mode: Gamepad connected, but master gamepad toggle is OFF. Disabling its GamepadManager.")) : console.warn("Client: window.webrtcInput.gamepadManager not found in ongamepadconnected. Cannot control its polling state.")
            }, i.ongamepaddisconnected = () => {
                console.log("Gamepad disconnected.")
            }, i.attach(), Ft) {
            const c = f => {
                If()
            };
            Ft.removeEventListener("pointerdown", c), Ft.addEventListener("pointerdown", c), Ft.addEventListener("contextmenu", f => {
                f.preventDefault()
            })
        }
        const r = () => {
            if (!Om) return;
            if (P) {
                console.log("Shared mode: handleResizeUI (auto-resize logic) skipped."), Z && J && Z > 0 && J > 0 && Lt(Z, J, !0);
                return
            }
            if (window.isManualResolutionMode) {
                console.log("handleResizeUI: Auto-resize skipped, manual resolution mode is active.");
                return
            }
            console.log("handleResizeUI: Auto-resize triggered (e.g., by window resize event).");
            const c = i.getWindowResolution(),
                f = ke(c[0]),
                g = ke(c[1]);
            if (f <= 0 || g <= 0) {
                console.warn(`handleResizeUI: Calculated invalid dimensions (${f}x${g}). Skipping resize send.`);
                return
            }
            Du(f, g), _o(f, g)
        };
        if (Cf = r, tn = i4(r, 500), P) console.log("Shared mode: Auto-resize event listener (originalWindowResizeHandler) NOT attached.");
        else if (window.isManualResolutionMode) console.log("initializeInput: Manual resolution mode active. Initial resolution already sent by onopen."), Z != null && J != null && Z > 0 && J > 0 ? Gf() : console.warn("initializeInput: Manual mode is set, but manualWidth/Height are invalid. Canvas might not display correctly.");
        else {
            console.log("initializeInput: Auto-resolution mode. Attaching 'resize' event listener for subsequent changes."), window.addEventListener("resize", tn);
            const c = document.querySelector(".video-container");
            let f, g;
            if (c) {
                const _ = c.getBoundingClientRect();
                f = ke(_.width), g = ke(_.height)
            } else f = ke(window.innerWidth), g = ke(window.innerHeight);
            (f <= 0 || g <= 0) && (console.warn(`initializeInput: Current auto-calculated dimensions are invalid (${f}x${g}). Defaulting canvas style to 1024x768 (logical) for initial setup. The resolution sent by onopen should prevail on the server.`), f = 1024, g = 768), _o(f, g), console.log(`initializeInput: Canvas style reset to reflect current auto-dimensions: ${f}x${g} (logical). Initial resolution was already sent by onopen.`)
        }
        Ft && !P ? (Ft.addEventListener("dragover", c4), Ft.addEventListener("drop", d4)) : Ft && P ? console.log("Shared mode: Drag/drop file upload listeners NOT attached to overlayInput.") : console.warn("initializeInput: overlayInput not found, cannot attach drag/drop listeners."), window.webrtcInput = i;
        const u = document.getElementById("keyboard-input-assist");
        u && i && !P ? (u.addEventListener("input", c => {
            const f = u.value;
            f && (i._typeString(f), u.value = "")
        }), u.addEventListener("keydown", c => {
            c.key === "Enter" || c.keyCode === 13 ? (i._guac_press(65293), setTimeout(() => i._guac_release(65293), 5), c.preventDefault(), u.value = "") : (c.key === "Backspace" || c.keyCode === 8) && (i._guac_press(65288), setTimeout(() => i._guac_release(65288), 5), c.preventDefault())
        }), console.log("initializeInput: Added 'input' and 'keydown' listeners to #keyboard-input-assist.")) : P ? console.log("Shared mode: Keyboard input assist listeners NOT attached.") : console.error("initializeInput: Could not add listeners to keyboard assist: Element or Input handler instance not found."), console.log("Input system initialized.")
    };
async function Df() {
    if (!fo) {
        console.log("No preferred output device set, using default.");
        return
    }
    if (!(typeof AudioContext < "u" && "setSinkId" in AudioContext.prototype || ho && typeof ho.setSinkId == "function")) {
        console.warn("Browser does not support setSinkId, cannot apply output device preference."), audioOutputSelectElement && audioOutputSelectElement.classList.add("hidden");
        const i = document.getElementById("audioOutputLabel");
        i && i.classList.add("hidden");
        return
    }
    if (Ge)
        if (Ge.state === "running") try {
            await Ge.setSinkId(fo), console.log(`Playback AudioContext output set to device: ${fo}`)
        } catch (i) {
            console.error(`Error setting sinkId on Playback AudioContext (ID: ${fo}): ${i.name}`, i)
        } else console.warn(`Playback AudioContext not running (state: ${Ge.state}), cannot set sinkId yet.`);
        else console.log("Playback AudioContext doesn't exist yet, sinkId will be applied on initialization.")
}
window.addEventListener("message", l4, !1);

function ln() {
    const i = {
        type: "sidebarButtonStatusUpdate",
        video: Qe,
        audio: bt,
        microphone: vt,
        gamepad: ka
    };
    console.log("Posting sidebarButtonStatusUpdate:", i), window.postMessage(i, window.location.origin)
}

function l4(i) {
    if (i.origin !== window.location.origin) {
        console.warn(`Received message from unexpected origin: ${i.origin}. Expected ${window.location.origin}. Ignoring.`);
        return
    }
    const o = i.data;
    if (typeof o != "object" || o === null) {
        console.warn("Received non-object message via window.postMessage:", o);
        return
    }
    if (!o.type) {
        console.warn("Received message without a type property:", o);
        return
    }
    switch (o.type) {
        case "setScaleLocally":
            if (P) {
                console.log("Shared mode: setScaleLocally message ignored (forced true behavior).");
                break
            }
            typeof o.value == "boolean" ? (pa = o.value, Je("scaleLocallyManual", pa), console.log(`Set scaleLocallyManual to ${pa} and persisted.`), window.isManualResolutionMode && Z !== null && J !== null && (console.log("Applying new scaling style in manual mode."), Lt(Z, J, pa))) : console.warn("Invalid value received for setScaleLocally:", o.value);
            break;
        case "setSynth":
            window.webrtcInput && typeof window.webrtcInput.setSynth == "function" && window.webrtcInput.setSynth(o.value);
            break;
        case "showVirtualKeyboard":
            if (P) {
                console.log("Shared mode: showVirtualKeyboard message ignored.");
                break
            }
            console.log("Received 'showVirtualKeyboard' message.");
            const r = document.getElementById("keyboard-input-assist"),
                u = document.getElementById("overlayInput");
            r ? (r.value = "", r.focus(), console.log("Focused #keyboard-input-assist element."), u.addEventListener("touchstart", () => {
                document.activeElement === r && r.blur()
            }, {
                once: !0,
                passive: !0
            })) : console.error("Could not find #keyboard-input-assist element to focus.");
            break;
        case "setUseCssScaling":
            if (typeof o.value == "boolean") {
                const Q = St !== o.value;
                if (St = o.value, Je("useCssScaling", St), console.log(`Set useCssScaling to ${St} and persisted.`), window.webrtcInput && typeof window.webrtcInput.updateCssScaling == "function" && window.webrtcInput.updateCssScaling(St), Q) {
                    if (jf(), window.isManualResolutionMode && Z != null && J != null) Du(Z, J), Lt(Z, J, pa);
                    else if (P) Z && J && Lt(Z, J, !0);
                    else {
                        const q = window.webrtcInput ? window.webrtcInput.getWindowResolution() : [window.innerWidth, window.innerHeight],
                            K = ke(q[0]),
                            be = ke(q[1]);
                        Du(K, be), _o(K, be)
                    }
                    te !== "jpeg" && te !== "x264enc" && te !== "x264enc-striped" && bo()
                }
            } else console.warn("Invalid value received for setUseCssScaling:", o.value);
            break;
        case "setManualResolution":
            if (P) {
                console.log("Shared mode: setManualResolution message ignored.");
                break
            }
            const c = parseInt(o.width, 10),
                f = parseInt(o.height, 10);
            if (isNaN(c) || c <= 0 || isNaN(f) || f <= 0) {
                console.error("Received invalid width/height for setManualResolution:", o);
                break
            }
            console.log(`Setting manual resolution: ${c}x${f} (logical)`), window.isManualResolutionMode = !0, Z = ke(c), J = ke(f), console.log(`Rounded logical resolution to even numbers: ${Z}x${J}`), tt("manualWidth", Z), tt("manualHeight", J), Je("isManualResolutionMode", !0), Gf(), Du(Z, J), Lt(Z, J, pa), (te === "x264enc" || te === "x264enc-striped") && (console.log("Clearing VNC stripe decoders due to manual resolution change."), Di(), Me && Me.setTransform(1, 0, 0, 1, 0, 0), Me.clearRect(0, 0, V.width, V.height));
            break;
        case "resetResolutionToWindow":
            if (P) {
                console.log("Shared mode: resetResolutionToWindow message ignored.");
                break
            }
            console.log("Resetting resolution to window size."), window.isManualResolutionMode = !1, Z = null, J = null, tt("manualWidth", null), tt("manualHeight", null), Je("isManualResolutionMode", !1);
            const g = window.webrtcInput ? window.webrtcInput.getWindowResolution() : [window.innerWidth, window.innerHeight],
                _ = ke(g[0]),
                y = ke(g[1]);
            _o(_, y), (te === "x264enc" || te === "x264enc-striped") && (console.log("Clearing VNC stripe decoders due to resolution reset to window."), Di(), Me && Me.setTransform(1, 0, 0, 1, 0, 0), Me.clearRect(0, 0, V.width, V.height)), $2();
            break;
        case "settings":
            console.log("Received settings message:", o.settings), n4(o.settings);
            break;
        case "getStats":
            console.log("Received getStats message."), o4();
            break;
        case "clipboardUpdateFromUI":
            if (console.log("Received clipboardUpdateFromUI message."), P) {
                console.log("Shared mode: Clipboard write to server blocked.");
                break
            }
            const v = o.text;
            if (O && O.readyState === WebSocket.OPEN) try {
                const Q = new TextEncoder().encode(v);
                let q = "";
                for (let be = 0; be < Q.length; be++) q += String.fromCharCode(Q[be]);
                const K = `cw,${btoa(q)}`;
                O.send(K), console.log("Sent clipboard update from UI to server (UTF-8 Base64): cw,...")
            } catch (Q) {
                console.error("Failed to encode or send clipboard text from UI:", Q)
            } else console.warn("Cannot send clipboard update from UI: Not connected.");
            break;
        case "pipelineStatusUpdate":
            console.log("Received pipelineStatusUpdate message:", o);
            let S = !1;
            o.video !== void 0 && Qe !== o.video && (Qe = o.video, S = !0), o.audio !== void 0 && bt !== o.audio && (bt = o.audio, S = !0), o.microphone !== void 0 && vt !== o.microphone && (vt = o.microphone, S = !0), o.gamepad !== void 0 && ka !== o.gamepad && (ka = o.gamepad, S = !0), S && ln();
            break;
        case "fileUpload":
            console.log("Received fileUpload message:", o.payload);
            break;
        case "pipelineControl":
            console.log(`Received pipeline control message: pipeline=${o.pipeline}, enabled=${o.enabled}`);
            const m = o.pipeline,
                A = o.enabled;
            let E = "";
            if (m === "video") {
                if (P) {
                    console.log("Shared mode: Video pipelineControl blocked.");
                    break
                }
                if (Qe !== A) {
                    if (Qe = A, E = A ? "START_VIDEO" : "STOP_VIDEO", A) {
                        if (console.log("Client: START_VIDEO requested via pipelineControl. Clearing canvas visually. Server will send PIPELINE_RESETTING for full state reset."), Me && V) try {
                            Me.setTransform(1, 0, 0, 1, 0, 0), Me.clearRect(0, 0, V.width, V.height)
                        } catch (Q) {
                            console.error("Error clearing canvas on START_VIDEO request:", Q)
                        }
                    } else if (console.log("Client: STOP_VIDEO requested via pipelineControl. Clearing canvas visually. Server will send PIPELINE_RESETTING for full state reset."), Me && V) try {
                        Me.setTransform(1, 0, 0, 1, 0, 0), Me.clearRect(0, 0, V.width, V.height)
                    } catch (Q) {
                        console.error("Error clearing canvas on STOP_VIDEO request:", Q)
                    }
                }
            } else if (m === "audio") bt !== A && (bt = A, E = A ? "START_AUDIO" : "STOP_AUDIO", Oe && Oe.postMessage({
                type: "updatePipelineStatus",
                data: {
                    isActive: bt
                }
            }));
            else if (m === "microphone") {
                if (P) {
                    console.log("Shared mode: Microphone control blocked.");
                    break
                }
                A ? H0() : xo()
            } else console.warn(`Received pipelineControl message for unknown pipeline: ${m}`);
            if (E && O && O.readyState === WebSocket.OPEN) try {
                O.send(E), console.log(`Sent command to server via WebSocket: ${E}`)
            } catch (Q) {
                console.error(`Error sending ${E} to WebSocket:`, Q)
            }
            break;
        case "audioDeviceSelected":
            if (console.log("Received audioDeviceSelected message:", o), P && o.context === "input") {
                console.log("Shared mode: Audio input device selection ignored.");
                break
            }
            const {
                context: D, deviceId: F
            } = o;
            if (!F) {
                console.warn("Received audioDeviceSelected message without a deviceId.");
                break
            }
            D === "input" ? (co = F, vt && (xo(), setTimeout(H0, 150))) : D === "output" ? (fo = F, Df()) : console.warn(`Unknown context in audioDeviceSelected message: ${D}`);
            break;
        case "gamepadControl":
            console.log(`Received gamepad control message: enabled=${o.enabled}`);
            const R = o.enabled;
            ka !== R && (ka = R, Je("isGamepadEnabled", ka), ln(), window.webrtcInput && window.webrtcInput.gamepadManager ? P ? (window.webrtcInput.gamepadManager.enable(), console.log("Shared mode: Gamepad control message received, ensuring its GamepadManager remains active for polling.")) : ka ? (window.webrtcInput.gamepadManager.enable(), console.log("Primary mode: Gamepad toggle ON. Enabling GamepadManager polling.")) : (window.webrtcInput.gamepadManager.disable(), console.log("Primary mode: Gamepad toggle OFF. Disabling GamepadManager polling.")) : console.warn("Client: window.webrtcInput.gamepadManager not found in 'gamepadControl' message handler."));
            break;
        case "requestFullscreen":
            Y2();
            break;
        case "command":
            if (P) {
                console.log("Shared mode: Arbitrary command sending to server blocked.");
                break
            }
            if (typeof o.value == "string") {
                const Q = o.value;
                if (console.log(`Received 'command' message with value: "${Q}". Forwarding to WebSocket.`), O && O.readyState === WebSocket.OPEN) try {
                    O.send(`cmd,${Q}`), console.log(`Sent command to server via WebSocket: cmd,${Q}`)
                } catch (q) {
                    console.error("Failed to send command via WebSocket:", q)
                } else console.warn("Cannot send command: WebSocket is not open or not available.")
            } else console.warn("Received 'command' message without a string value:", o);
            break;
        case "touchinput:trackpad":
            window.webrtcInput && typeof window.webrtcInput.setTrackpadMode == "function" && (an = !0, Je("trackpadMode", !0), window.webrtcInput.setTrackpadMode(!0), O && O.readyState === WebSocket.OPEN && O.send("SET_NATIVE_CURSOR_RENDERING,1"));
            break;
        case "touchinput:touch":
            window.webrtcInput && typeof window.webrtcInput.setTrackpadMode == "function" && (an = !1, Je("trackpadMode", !1), window.webrtcInput.setTrackpadMode(!1), O && O.readyState === WebSocket.OPEN && O.send("SET_NATIVE_CURSOR_RENDERING,0"));
            break
    }
}

function n4(i) {
    if (console.log("Applying settings:", i), i.videoBitRate !== void 0)
        if ($a = parseInt(i.videoBitRate), tt("videoBitRate", $a), !P && O && O.readyState === WebSocket.OPEN) {
            const o = `SET_VIDEO_BITRATE,${$a}`;
            console.log(`Sent websocket message: ${o}`), O.send(o)
        } else P || console.warn("Websocket connection not open, cannot send video bitrate setting.");
    if (i.videoFramerate !== void 0)
        if (vo = parseInt(i.videoFramerate), tt("videoFramerate", vo), !P && O && O.readyState === WebSocket.OPEN) {
            const o = `SET_FRAMERATE,${vo}`;
            console.log(`Sent websocket message: ${o}`), O.send(o)
        } else P || console.warn("Websocket connection not open, cannot send framerate setting.");
    if (i.resizeRemote !== void 0 && ($s = i.resizeRemote, Je("resizeRemote", $s), console.warn("ResizeRemote setting received; for websockets, server ENABLE_RESIZE and client 'r,' messages control resizing.")), i.encoder !== void 0) {
        const o = i.encoder,
            r = te;
        if (r !== o) {
            if (te = o, Hf("encoder", te), !P && O && O.readyState === WebSocket.OPEN) {
                const S = `SET_ENCODER,${te}`;
                console.log(`Sent websocket message: ${S}`), O.send(S)
            } else P || console.warn("Websocket connection not open, cannot send encoder setting.");
            const u = o === "x264enc" || o === "x264enc-striped",
                c = r === "x264enc" || r === "x264enc-striped",
                f = o === "jpeg",
                g = r === "jpeg",
                _ = !f && !u,
                y = !g && !c,
                v = r === "x264enc-striped";
            if (v && o !== "x264enc-striped" && Di(), (y || v) && f && he && he.state !== "closed" && (console.log(`Switching from ${r} to JPEG, closing main video decoder.`), he.close(), he = null), u) Me && (Me.setTransform(1, 0, 0, 1, 0, 0), Me.clearRect(0, 0, V.width, V.height), console.log("Switched to x264enc-striped, cleared canvas.")), he && he.state !== "closed" && (console.log("Switching to x264enc-striped, closing main video decoder."), he.close(), he = null);
            else if (f) {
                console.log("Encoder changed to JPEG. Ensuring canvas buffer is correctly sized.");
                let S, m;
                if (P) S = Z, m = J, S && m && Lt(S, m, !0);
                else if (window.isManualResolutionMode && Z != null && J != null) S = Z, m = J, Lt(S, m, pa);
                else if (window.webrtcInput && typeof window.webrtcInput.getWindowResolution == "function") {
                    const A = window.webrtcInput.getWindowResolution();
                    S = ke(A[0]), m = ke(A[1]), _o(S, m)
                } else console.warn("Cannot determine auto resolution for JPEG switch: webrtcInput or getWindowResolution not available.")
            } else _ && (console.log(`Switching to video pipeline ${o}. Ensuring main decoder is initialized/reconfigured.`), bo());
            if ((g || v) && _ && (console.log(`Switched from ${r} (striped/jpeg) to ${o} (video pipeline). Resending video bitrate ${$a} kbit/s.`), !P && O && O.readyState === WebSocket.OPEN)) {
                const S = `SET_VIDEO_BITRATE,${$a}`;
                O.send(S)
            }
        } else console.log(`Encoder setting received (${o}), but it's the same as current (${r}). No change.`)
    }
    if (i.videoBufferSize !== void 0 && (mo = parseInt(i.videoBufferSize), tt("videoBufferSize", mo), console.log(`Applied Video buffer size setting: ${mo} frames.`)), i.videoCRF !== void 0)
        if (Wl = parseInt(i.videoCRF, 10), tt("videoCRF", Wl), console.log(`Applied Video CRF setting: ${Wl}.`), !P && O && O.readyState === WebSocket.OPEN) {
            const o = `SET_CRF,${Wl}`;
            console.log(`Sent websocket message: ${o}`), O.send(o)
        } else P || console.warn("Websocket connection not open, cannot send CRF setting.");
    if (i.h264_fullcolor !== void 0) {
        const o = !!i.h264_fullcolor;
        if (Li !== o)
            if (Li = o, Je("h264_fullcolor", Li), console.log(`Applied H.264 Full Color setting: ${Li}.`), !P && O && O.readyState === WebSocket.OPEN && (te === "x264enc" || te === "x264enc-striped")) {
                const r = `SET_H264_FULLCOLOR,${Li}`;
                console.log(`Sent websocket message: ${r}`), O.send(r)
            } else !P && te !== "x264enc" && te !== "x264enc-striped" ? console.log("H.264 Full Color setting changed, but current encoder is not x264enc-striped. WebSocket command not sent.") : P || console.warn("Websocket connection not open, cannot send H.264 Full Color setting.");
        else console.log(`H.264 Full Color setting received (${o}), but it's the same as current. No change.`)
    }
    if (i.h264_streaming_mode !== void 0) {
        const o = !!i.h264_streaming_mode;
        if (ki !== o)
            if (ki = o, Je("h264_streaming_mode", ki), console.log(`Applied H.264 Streaming Mode setting: ${ki}.`), !P && O && O.readyState === WebSocket.OPEN && (te === "x264enc" || te === "x264enc-striped")) {
                const r = `SET_H264_STREAMING_MODE,${ki}`;
                console.log(`Sent websocket message: ${r}`), O.send(r)
            } else !P && te !== "x264enc" && te !== "x264enc-striped" ? console.log("H.264 Streaming Mode setting changed, but current encoder is not x264enc-striped. WebSocket command not sent.") : P || console.warn("Websocket connection not open, cannot send H.264 Streaming Mode setting.");
        else console.log(`H.264 Streaming Mode setting received (${o}), but it's the same as current. No change.`)
    }
    if (i.jpegQuality !== void 0) {
        const o = parseInt(i.jpegQuality, 10);
        if (gl !== o)
            if (gl = o, tt("jpegQuality", gl), console.log(`Applied JPEG Quality setting: ${gl}.`), !P && O && O.readyState === WebSocket.OPEN && te === "jpeg") {
                const r = `SET_JPEG_QUALITY,${gl}`;
                console.log(`Sent websocket message: ${r}`), O.send(r)
            } else !P && te !== "jpeg" ? console.log("JPEG Quality setting changed, but current encoder is not 'jpeg'. WebSocket command not sent.") : P || console.warn("Websocket connection not open, cannot send JPEG Quality setting.");
        else console.log(`JPEG Quality setting received (${o}), but it's the same as current. No change.`)
    }
    if (i.paintOverJpegQuality !== void 0) {
        const o = parseInt(i.paintOverJpegQuality, 10);
        if (ml !== o)
            if (ml = o, tt("paintOverJpegQuality", ml), console.log(`Applied Paint-Over JPEG Quality setting: ${ml}.`), !P && O && O.readyState === WebSocket.OPEN && te === "jpeg") {
                const r = `SET_PAINT_OVER_JPEG_QUALITY,${ml}`;
                console.log(`Sent websocket message: ${r}`), O.send(r)
            } else !P && te !== "jpeg" ? console.log("Paint-Over JPEG Quality setting changed, but current encoder is not 'jpeg'. WebSocket command not sent.") : P || console.warn("Websocket connection not open, cannot send Paint-Over JPEG Quality setting.");
        else console.log(`Paint-Over JPEG Quality setting received (${o}), but it's the same as current. No change.`)
    }
    if (i.useCpu !== void 0) {
        const o = !!i.useCpu;
        if (bl !== o) {
            bl = o, Je("useCpu", bl), console.log(`Applied Use CPU setting: ${bl}.`);
            const r = te === "x264enc" || te === "x264enc-striped";
            if (!P && O && O.readyState === WebSocket.OPEN && r) {
                const u = `SET_USE_CPU,${bl}`;
                console.log(`Sent websocket message: ${u}`), O.send(u)
            } else !P && !r ? console.log("Use CPU setting changed, but current encoder is not a Pixelflux H.264 encoder. WebSocket command not sent.") : P || console.warn("Websocket connection not open, cannot send Use CPU setting.")
        } else console.log(`Use CPU setting received (${o}), but it's the same as current. No change.`)
    }
    if (i.SCALING_DPI !== void 0) {
        const o = parseInt(i.SCALING_DPI, 10);
        if (isNaN(o)) console.warn(`Invalid SCALING_DPI value received: ${i.SCALING_DPI}`);
        else if (console.log(`Applied SCALING_DPI setting: ${o}.`), !P && O && O.readyState === WebSocket.OPEN) {
            const r = `s,${o}`;
            console.log(`Sent websocket message: ${r}`), O.send(r)
        } else P ? console.log("SCALING_DPI setting ignored in shared mode.") : console.warn("Websocket connection not open, cannot send SCALING_DPI setting.")
    }
    i.turnSwitch !== void 0 && console.log(`turnSwitch setting received (WebRTC specific): ${i.turnSwitch}. No action in WebSocket mode.`), i.debug !== void 0 && (yo = i.debug, Je("debug", yo), console.log(`Applied debug setting: ${yo}. Reloading...`), setTimeout(() => {
        window.location.reload()
    }, 700))
}

function o4() {
    const i = {
        connection: j2,
        gpu: G2,
        cpu: I2,
        clientFps: window.fps,
        audioBuffer: window.currentAudioBufferSize,
        videoBuffer: go.length,
        isVideoPipelineActive: Qe,
        isAudioPipelineActive: bt,
        isMicrophoneActive: vt
    };
    i.encoderName = te, i.h264_fullcolor = Li, i.h264_streaming_mode = ki, window.parent.postMessage({
        type: "stats",
        data: i
    }, window.location.origin), console.log("Sent stats message via window.postMessage:", i)
}

function Bf() {
    clearTimeout(Ru), Ru = setTimeout(() => {
        console.warn(`Shared mode (${Za}): Timeout waiting for video identification packet (attempt ${hl+1}/${P0}).`), hl++, hl < P0 ? Ae === "awaiting_identification" ? (console.log(`Shared mode (${Za}): Probing timeout. Attempting to re-trigger stream with STOP/START_VIDEO.`), O && O.readyState === WebSocket.OPEN && (O.send("STOP_VIDEO"), setTimeout(() => {
            O && O.readyState === WebSocket.OPEN && (O.send("START_VIDEO"), console.log(`Shared mode (${Za}): Sent START_VIDEO after probing timeout.`))
        }, 250)), Bf()) : console.log(`Shared mode: Probing timeout fired but state is ${Ae}. Not retrying automatically.`) : (console.error("Shared mode: Failed to identify video type after multiple attempts. Entering error state. Stream may not be active or correctly configured on server/primary client."), Ae = "error", De && (De.textContent = "Error: Could not identify video stream.", De.classList.remove("hidden")))
    }, P2)
}

function ku() {
    clearTimeout(Ru), Ru = null
}
document.addEventListener("DOMContentLoaded", () => {
    async function i() {
        he && he.state !== "closed" && (console.warn("VideoDecoder already exists, closing before re-initializing."), he.close());
        let S = 1024,
            m = 768;
        if (P) S = Z > 0 ? Z : 1024, m = J > 0 ? J : 768;
        else if (window.isManualResolutionMode && Z != null && J != null) S = Z, m = J;
        else if (window.webrtcInput && typeof window.webrtcInput.getWindowResolution == "function") try {
            const R = window.webrtcInput.getWindowResolution(),
                Q = ke(R[0]),
                q = ke(R[1]);
            Q > 0 && q > 0 && (S = Q, m = q)
        } catch {}
        const A = St ? 1 : window.devicePixelRatio || 1,
            E = ke(S * A),
            D = ke(m * A);
        he = new VideoDecoder({
            output: u,
            error: R => Rs(R, "main_decoder")
        });
        const F = {
            codec: "avc1.42E01E",
            codedWidth: E,
            codedHeight: D,
            optimizeForLatency: !0
        };
        try {
            if (!(await VideoDecoder.isConfigSupported(F)).supported) throw new Error(`Configuration not supported: ${JSON.stringify(F)}`);
            return await he.configure(F), console.log("Main VideoDecoder configured successfully with config:", F), !0
        } catch (R) {
            return Rs(R, "main_decoder_configure"), !1
        }
    }
    if (!h4()) return;
    const o = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/") + 1);
    window.addEventListener("focus", () => {
        P || navigator.clipboard.readText().then(S => {
            const m = new TextEncoder().encode(S);
            let A = "";
            for (let D = 0; D < m.length; D++) A += String.fromCharCode(m[D]);
            const E = btoa(A);
            O && O.readyState === WebSocket.OPEN && (O.send(`cw,${E}`), console.log("Sent clipboard on focus (UTF-8 Base64)"))
        }).catch(S => {
            console.error(`Failed to read clipboard contents on focus: ${S}`)
        })
    }), document.addEventListener("visibilitychange", async () => {
        if (P) {
            console.log("Shared mode: Tab visibility changed, stream control bypassed. Current state:", document.hidden ? "hidden" : "visible");
            return
        }
        if (document.hidden) {
            if (console.log("Tab is hidden, stopping video pipeline if active."), O && O.readyState === WebSocket.OPEN && Qe && (O.send("STOP_VIDEO"), Qe = !1, window.postMessage({
                    type: "pipelineStatusUpdate",
                    video: !1
                }, window.location.origin), console.log("Tab hidden: Sent STOP_VIDEO. Clearing canvas visually. Server will send PIPELINE_RESETTING for full state reset."), Me && V)) try {
                Me.setTransform(1, 0, 0, 1, 0, 0), Me.clearRect(0, 0, V.width, V.height)
            } catch (S) {
                console.error("Error clearing canvas on tab hidden:", S)
            }
        } else if (console.log("Tab is visible, requesting video pipeline start if it was inactive."), O && O.readyState === WebSocket.OPEN && !Qe && (O.send("START_VIDEO"), vl === null && (console.log("Tab is visible again, re-acquiring Wake Lock."), await If()), Qe = !0, window.postMessage({
                type: "pipelineStatusUpdate",
                video: !0
            }, window.location.origin), console.log("Tab visible: Sent START_VIDEO. Clearing canvas visually. Server will send PIPELINE_RESETTING for full state reset."), Me && V)) try {
            Me.setTransform(1, 0, 0, 1, 0, 0), Me.clearRect(0, 0, V.width, V.height)
        } catch (S) {
            console.error("Error clearing canvas on tab visible/start:", S)
        }
    });
    async function r(S, m) {
        if (typeof ImageDecoder > "u") {
            console.warn("ImageDecoder API not supported. Cannot decode JPEG stripes.");
            return
        }
        try {
            const A = new ImageDecoder({
                    data: m,
                    type: "image/jpeg"
                }),
                E = await A.decode();
            Ei.push({
                image: E.image,
                startY: S
            }), A.close()
        } catch (A) {
            console.error("Error decoding JPEG stripe:", A, "startY:", S, "dataLength:", m.byteLength)
        }
    }

    function u(S) {
        const m = te !== "jpeg" && te !== "x264enc-striped" && te !== "x264enc" && !P || P && We === "h264_full_frame";
        if (document.hidden && m) {
            S.close();
            return
        }
        if (!P && Ks === "websockets" && !Qe) {
            S.close();
            return
        }
        if (P && We === "h264_full_frame" && Ae === "ready") {
            const A = S.codedWidth,
                E = S.codedHeight,
                D = A / dpr,
                F = E / dpr;
            (Z !== D || J !== F) && D > 0 && F > 0 && (Z = D, J = F, console.log(`Shared mode (decoded H264): Updated manual (logical) dimensions from H.264 frame to ${Z.toFixed(2)}x${J.toFixed(2)} (Physical: ${A}x${E})`), Lt(Z, J, !0))
        }
        m ? go.push(S) : (console.warn(`[handleDecodedFrame] Frame received but not for a GStreamer H.264 mode that uses videoFrameBuffer. isSharedMode: ${P}, currentEncoderMode: ${te}, identifiedEncoderModeForShared: ${We}. Closing frame to be safe.`), S.close())
    }
    bo = i, console.log("initializeDecoder function assigned to triggerInitializeDecoder.");

    function c() {
        if (!V || !Me) {
            requestAnimationFrame(c);
            return
        }
        const S = window.devicePixelRatio || 1,
            m = St ? 1 : S;
        if (P && Z && J && Z > 0 && J > 0) {
            const E = ke(Z * S),
                D = ke(J * S);
            (V.width !== E || V.height !== D) && (console.log(`Shared mode (paintVideoFrame): Canvas buffer ${V.width}x${V.height} out of sync with expected physical ${E}x${D} (logical: ${Z}x${J}). Re-applying style.`), Lt(Z, J, !0))
        }
        let A = !1;
        if (te === "x264enc" || te === "x264enc-striped") {
            if (P && Ae === "ready" && pl.length > 0) {
                const D = pl[0].frame;
                if (D && D.codedWidth > 0) {
                    const F = D.codedWidth,
                        R = F / m;
                    Z !== R && R > 0 && (Z = R, console.log(`Shared mode (VNC stripe paint): Updated manual (logical) Width from VNC stripe to ${Z.toFixed(2)} (Stripe Coded: ${F}, DPR for conversion: ${m})`), J && Z > 0 && J > 0 && Lt(Z, J, !0))
                }
            }
            let E = !1;
            for (const D of pl) V.width > 0 && V.height > 0 && Me.drawImage(D.frame, 0, D.yPos), D.frame.close(), E = !0;
            pl = [], E && !So && yf()
        } else if (te === "jpeg") {
            if (Me && Ei.length > 0) {
                if (P && Ae === "ready" && Ei.length > 0) {
                    const E = Ei[0].image;
                    if (E && E.codedWidth > 0) {
                        const D = E.codedWidth,
                            F = D / m;
                        Z !== F && F > 0 && (Z = F, console.log(`Shared mode (JPEG stripe paint): Updated manual (logical) Width from JPEG stripe to ${Z.toFixed(2)} (Image Coded: ${D}, DPR for conversion: ${m})`), J && Z > 0 && J > 0 && Lt(Z, J, !0))
                    }
                }
                if (V.width === 0 || V.height === 0 || V.width === 300 && V.height === 150) {
                    const E = Ei[0];
                    E && E.image && (E.startY + E.image.height > V.height || E.image.width > V.width) && console.warn(`[paintVideoFrame] Canvas dimensions (${V.width}x${V.height}) may be too small for JPEG stripes.`)
                }
                for (; Ei.length > 0;) {
                    const E = Ei.shift();
                    if (E && E.image) try {
                        V.width > 0 && V.height > 0 && Me.drawImage(E.image, 0, E.startY), E.image.close(), A = !0
                    } catch (D) {
                        if (console.error("[paintVideoFrame] Error drawing JPEG segment:", D, E), E.image && typeof E.image.close == "function") try {
                            E.image.close()
                        } catch {}
                    }
                }
                A && !So && (yf(), !Jl && !P && Sf())
            }
        } else if ((P && te === "h264_full_frame" && Ae === "ready" || !P && te !== "jpeg" && te !== "x264enc" && te !== "x264enc-striped") && (!document.hidden || P && Ae === "ready") && (P && Ae === "ready" || !P && Qe)) {
            const E = P && Ae === "ready" ? 0 : mo;
            if (go.length > E) {
                const D = go.shift();
                D && (V.width > 0 && V.height > 0 && Me.drawImage(D, 0, 0), D.close(), oo++, So || (yf(), !Jl && !P && Sf()))
            }
        }
        requestAnimationFrame(c)
    }
    async function f() {
        if (!Ge) {
            const S = {
                sampleRate: 48e3
            };
            Ge = new(window.AudioContext || window.webkitAudioContext)(S), console.log("Playback AudioContext initialized. Actual sampleRate:", Ge.sampleRate, "Initial state:", Ge.state), Ge.onstatechange = () => {
                console.log(`Playback AudioContext state changed to: ${Ge.state}`), Ge.state === "running" && Df()
            }
        }
        try {
            const S = `
        class AudioFrameProcessor extends AudioWorkletProcessor {
            constructor(options) {
                super();
                this.audioBufferQueue = [];
                this.currentAudioData = null;
                this.currentDataOffset = 0;

                this.TARGET_BUFFER_PACKETS = 3;
                this.MAX_BUFFER_PACKETS = 8;

                this.port.onmessage = (event) => {
                    if (event.data.audioData) {
                        const pcmData = new Float32Array(event.data.audioData);
                        if (this.audioBufferQueue.length >= this.MAX_BUFFER_PACKETS) {
                            this.audioBufferQueue.shift();
                        }
                        this.audioBufferQueue.push(pcmData);
                    } else if (event.data.type === 'getBufferSize') {
                        const bufferMillis = this.audioBufferQueue.reduce((total, buf) => total + (buf.length / 2 / sampleRate) * 1000, 0);
                        this.port.postMessage({
                            type: 'audioBufferSize',
                            size: this.audioBufferQueue.length,
                            durationMs: bufferMillis
                        });
                    }
                };
            }

            process(inputs, outputs, parameters) {
                const output = outputs[0];
                const leftChannel = output ? output[0] : undefined;

                if (!leftChannel) {
                    return true;
                }
                
                const rightChannel = output ? output[1] : leftChannel;
                const samplesPerBuffer = leftChannel.length;

                if (this.audioBufferQueue.length === 0 && this.currentAudioData === null) {
                    leftChannel.fill(0);
                    rightChannel.fill(0);
                    return true;
                }

                let data = this.currentAudioData;
                let offset = this.currentDataOffset;

                for (let sampleIndex = 0; sampleIndex < samplesPerBuffer; sampleIndex++) {
                    if (!data || offset >= data.length) {
                        if (this.audioBufferQueue.length > 0) {
                            data = this.currentAudioData = this.audioBufferQueue.shift();
                            offset = this.currentDataOffset = 0;
                        } else {
                            this.currentAudioData = null;
                            this.currentDataOffset = 0;
                            leftChannel.fill(0, sampleIndex);
                            rightChannel.fill(0, sampleIndex);
                            return true;
                        }
                    }
                    
                    leftChannel[sampleIndex] = data[offset++];
                    if (offset < data.length) {
                        rightChannel[sampleIndex] = data[offset++];
                    } else {
                        rightChannel[sampleIndex] = leftChannel[sampleIndex];
                    }
                }

                this.currentDataOffset = offset;
                if (data && offset >= data.length) {
                    this.currentAudioData = null;
                    this.currentDataOffset = 0;
                }

                return true;
            }
        }
        registerProcessor('audio-frame-processor', AudioFrameProcessor);
      `,
                m = new Blob([S], {
                    type: "text/javascript"
                }),
                A = URL.createObjectURL(m);
            await Ge.audioWorklet.addModule(A), URL.revokeObjectURL(A), Us = new AudioWorkletNode(Ge, "audio-frame-processor", {
                numberOfOutputs: 1,
                outputChannelCount: [2]
            }), Mi = Us.port, Mi.onmessage = F => {
                F.data.type === "audioBufferSize" && (window.currentAudioBufferSize = F.data.size, window.currentAudioBufferDuration = F.data.durationMs)
            }, Us.connect(Ge.destination), console.log("Playback AudioWorkletProcessor initialized and connected."), await Df(), Oe && (console.warn("[Main] Terminating existing audio decoder worker before creating a new one."), Oe.postMessage({
                type: "close"
            }), await new Promise(F => setTimeout(F, 50)), Oe && Oe.terminate(), Oe = null);
            const E = new Blob([s4], {
                    type: "application/javascript"
                }),
                D = URL.createObjectURL(E);
            Oe = new Worker(D), URL.revokeObjectURL(D), Oe.onmessage = F => {
                const {
                    type: R,
                    reason: Q,
                    message: q
                } = F.data;
                if (R === "decoderInitFailed") console.error(`[Main] Audio Decoder Worker failed to initialize: ${Q}`);
                else if (R === "decoderError") console.error(`[Main] Audio Decoder Worker reported error: ${q}`);
                else if (R === "decoderInitialized") console.log("[Main] Audio Decoder Worker confirmed its decoder is initialized.");
                else if (R === "decodedAudioData") {
                    const K = F.data.pcmBuffer;
                    K && Mi && Ge && Ge.state === "running" && window.currentAudioBufferSize < 10 && Mi.postMessage({
                        audioData: K
                    }, [K])
                }
            }, Oe.onerror = F => {
                console.error("[Main] Uncaught error in Audio Decoder Worker:", F.message, F), Oe && (Oe.terminate(), Oe = null)
            }, Mi ? (Oe.postMessage({
                type: "init",
                data: {
                    initialPipelineStatus: bt
                }
            }), console.log("[Main] Audio Decoder Worker created and init message sent.")) : console.error("[Main] audioWorkletProcessorPort is null, cannot initialize audioDecoderWorker correctly.")
        } catch (S) {
            console.error("Error initializing Playback AudioWorklet:", S), Ge && Ge.state !== "closed" && Ge.close(), Ge = null, Us = null, Mi = null
        }
    }
    async function g() {
        Oe ? (console.log("[Main] Requesting Audio Decoder Worker to reinitialize its decoder."), Oe.postMessage({
            type: "reinitialize"
        })) : (console.warn("[Main] Cannot initialize decoder audio: Audio Decoder Worker not available. Call initializeAudio() first."), Ks === "websockets" && !Ge && (console.log("[Main] Audio context missing, attempting to initialize full audio pipeline for websockets."), await f()))
    }
    const _ = location.protocol === "http:" ? "ws://" : "wss://",
        y = new URL(`${_}${window.location.host}${o}websockets`);
    O = new WebSocket(y.href), O.binaryType = "arraybuffer";
    const v = () => {
        if (P) return;
        const S = performance.now(),
            m = S - Cu,
            A = S - Hs,
            E = 1e3;
        if (Eu.size > 0) {
            if (m >= E) {
                const D = Eu.size * 1e3 / m;
                window.fps = Math.round(D), Eu.clear(), Cu = S, oo = 0, Hs = S
            }
        } else if (oo > 0) {
            if (A >= E) {
                const D = oo * 1e3 / A;
                window.fps = Math.round(D), oo = 0, Hs = S, Cu = S
            }
        } else(m >= E || A >= E) && (window.fps = 0, Hs = S, Cu = S);
        if (O && O.readyState === WebSocket.OPEN) {
            Mi && Mi.postMessage({
                type: "getBufferSize"
            });
            try {
                qa !== -1 && O.send(`CLIENT_FRAME_ACK ${qa}`)
            } catch (D) {
                console.error("[websockets] Error sending client metrics (ACK):", D)
            }
        }
    };
    O.onopen = () => {
        if (console.log("[websockets] Connection opened!"), po = "connected_waiting_mode", $l = "Connection established. Waiting for server mode...", so(), window.postMessage({
                type: "trackpadModeUpdate",
                enabled: an
            }, window.location.origin), P) console.log("Shared mode: WebSocket opened. Waiting for 'MODE websockets' from server to start identification sequence.");
        else {
            const S = `${nn}_`,
                m = {};
            let A, E;
            const D = St ? 1 : window.devicePixelRatio || 1;
            for (const F in localStorage)
                if (Object.hasOwnProperty.call(localStorage, F) && F.startsWith(S)) {
                    const R = F.substring(S.length);
                    let Q = null;
                    if (R === "videoBitRate" ? Q = "webrtc_videoBitRate" : R === "videoFramerate" ? Q = "webrtc_videoFramerate" : R === "videoCRF" ? Q = "webrtc_videoCRF" : R === "encoder" ? Q = "webrtc_encoder" : R === "resizeRemote" ? Q = "webrtc_resizeRemote" : R === "isManualResolutionMode" ? Q = "webrtc_isManualResolutionMode" : R === "audioBitRate" ? Q = "webrtc_audioBitRate" : R === "videoBufferSize" ? Q = "webrtc_videoBufferSize" : R === "h264_fullcolor" ? Q = "webrtc_h264_fullcolor" : R === "h264_streaming_mode" ? Q = "webrtc_h264_streaming_mode" : R === "jpegQuality" ? Q = "pixelflux_jpeg_quality" : R === "paintOverJpegQuality" ? Q = "pixelflux_paint_over_jpeg_quality" : R === "useCpu" && (Q = "pixelflux_use_cpu"), Q) {
                        let q = localStorage.getItem(F);
                        Q === "webrtc_resizeRemote" || Q === "webrtc_isManualResolutionMode" || Q === "webrtc_h264_fullcolor" || Q === "webrtc_h264_streaming_mode" || Q === "pixelflux_use_cpu" ? q = q === "true" : ["webrtc_videoBitRate", "webrtc_videoFramerate", "webrtc_videoCRF", "webrtc_audioBitRate", "webrtc_videoBufferSize", "pixelflux_jpeg_quality", "pixelflux_paint_over_jpeg_quality"].includes(Q) && (q = parseInt(q, 10), isNaN(q) && (q = localStorage.getItem(F))), m[Q] = q
                    }
                } if (isManualResolutionMode && Z != null && J != null) m.webrtc_isManualResolutionMode = !0, m.webrtc_manualWidth = ke(Z * D), m.webrtc_manualHeight = ke(J * D);
            else {
                const F = document.querySelector(".video-container"),
                    R = F ? F.getBoundingClientRect() : {
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                A = R.width, E = R.height, m.webrtc_isManualResolutionMode = !1, m.webrtc_initialClientWidth = ke(A * D), m.webrtc_initialClientHeight = ke(E * D)
            }
            if (m.webrtc_isManualResolutionMode === !0) {
                const F = Da("manualWidth", null),
                    R = Da("manualHeight", null);
                F !== null && R !== null && (m.webrtc_manualWidth = ke(F * D), m.webrtc_manualHeight = ke(R * D))
            }
            m.webrtc_useCssScaling = St;
            try {
                const F = `SETTINGS,${JSON.stringify(m)}`;
                O.send(F), console.log("[websockets] Sent initial settings (resolutions are physical) to server:", m)
            } catch (F) {
                console.error("[websockets] Error constructing or sending initial settings:", F)
            }
            if (!(te === "x264enc" || te === "x264enc-striped") && te !== "jpeg" && O && O.readyState === WebSocket.OPEN) {
                const F = `SET_VIDEO_BITRATE,${$a}`;
                O.send(F), console.log(`[websockets] Sent initial SET_VIDEO_BITRATE,${$a} for GStreamer encoder.`)
            }
        }
        O.send("cr"), console.log("[websockets] Sent initial clipboard request (cr) to server."), Qe = !0, bt = !0, window.postMessage({
            type: "pipelineStatusUpdate",
            video: !0,
            audio: !0
        }, window.location.origin), P || (vt = !1, aa === null && (aa = setInterval(v, U0), console.log(`[websockets] Started sending client metrics every ${U0}ms.`)))
    }, O.onmessage = S => {
        if (S.data instanceof ArrayBuffer) {
            const m = S.data,
                A = new DataView(m);
            if (m.byteLength < 1) return;
            const E = A.getUint8(0);
            if (P) {
                if (Ae === "awaiting_identification") {
                    let D = null;
                    if (E === 0 ? D = "h264_full_frame" : E === 3 ? D = "jpeg" : E === 4 && (D = "x264enc-striped"), D) {
                        if (ku(), hl = 0, We = D, console.log(`Shared mode: Identified video encoding type as '${We}' from first packet (type 0x${E.toString(16)}). State: configuring.`), Ae = "configuring", console.log("Shared mode: Cleaning up existing video pipeline elements for reconfiguration."), he && he.state !== "closed") {
                            try {
                                he.close()
                            } catch (F) {
                                console.warn("Shared mode: Error closing main H.264 decoder during cleanup:", F)
                            }
                            he = null
                        }
                        Di(), Gs(), Is(), pl = [], Me && V && (console.log("Shared mode: Resetting canvas display."), Me.setTransform(1, 0, 0, 1, 0, 0), Me.clearRect(0, 0, V.width, V.height)), te = We, console.log(`Shared mode: Set global currentEncoderMode to '${te}'.`), We === "h264_full_frame" ? (console.log("Shared mode: Initializing main H.264 decoder for the identified type."), bo().then(F => {
                            F ? (console.log("Shared mode: H.264 decoder configured. Requesting fresh video stream."), Ae = "ready", console.log(`Shared mode: Client is now ready to process video of type '${We}'.`)) : (console.error("Shared mode: Main H.264 decoder failed to initialize or configure. Entering error state."), Ae = "error")
                        }).catch(F => {
                            console.error("Shared mode: Exception during H.264 decoder initialization. Entering error state.", F), Ae = "error"
                        })) : (We === "jpeg" || We === "x264enc-striped") && (console.log(`Shared mode: Configured for ${We}. Specific decoders (if any) are managed on-demand or not needed centrally.`), Z && J && Z > 0 && J > 0 && Lt(Z, J, !0), console.log("Shared mode: Reconfiguration process for non-H264 initiated. Requesting fresh video stream from server."), Ae = "ready", console.log(`Shared mode: Client is now ready to process video of type '${We}'.`))
                    } else if (E !== 1) {
                        console.warn(`Shared mode (awaiting_identification): Received non-identifying binary packet type 0x${E.toString(16)}. Still waiting for a video packet.`);
                        return
                    }
                } else if (Ae === "ready") {
                    if (E === 0 || E === 3 || E === 4) {
                        let D = !1;
                        if ((We === "h264_full_frame" && E === 0 || We === "jpeg" && E === 3 || We === "x264enc-striped" && E === 4) && (D = !0), !D) {
                            console.warn(`Shared mode (ready): Received video packet type 0x${E.toString(16)} which does NOT match identified type '${We}'. Discarding packet.`);
                            return
                        }
                    }
                } else if ((Ae === "configuring" || Ae === "error" || Ae === "idle") && (E === 0 || E === 3 || E === 4)) {
                    console.log(`Shared mode: Video packet (type 0x${E.toString(16)}) received while in state '${Ae}'. Discarding.`);
                    return
                }
            }
            if (E === 0) {
                const D = P ? 2 : 4;
                if (m.byteLength < D) return;
                const F = A.getUint8(1);
                P || (qa = A.getUint16(2, !1));
                const R = m.slice(D);
                if (P && Ae === "ready" && te === "h264_full_frame" || !P && Qe && te !== "jpeg" && te !== "x264enc" && te !== "x264enc-striped") {
                    if (P && !Ps)
                        if (F === 1) console.log("Shared mode: First keyframe received. Opening the gate for video decoding."), Ps = !0;
                        else {
                            console.log("Shared mode: Gate is closed. Discarding non-keyframe packet.");
                            return
                        } if (he && he.state === "configured") {
                        const Q = new EncodedVideoChunk({
                            type: F === 1 ? "key" : "delta",
                            timestamp: performance.now() * 1e3,
                            data: R
                        });
                        try {
                            he.decode(Q)
                        } catch (q) {
                            Rs(q, "main_decoder_decode")
                        }
                    } else !P && (!he || he.state === "closed" || he.state === "unconfigured") ? (console.warn(`Main decoder not ready for Full H.264 frame (mode: ${te}, state: ${he?he.state:"null"}). Attempting init. Frame might be dropped.`), i()) : P && (!he || he.state === "closed" || he.state === "unconfigured") ? (console.error(`Shared mode: Main H.264 decoder not available or not configured when expected. State: ${Ae}. Decoder state: ${he?he.state:"null"}. Entering error state.`), Ae = "error") : console.warn(`Main decoder exists but not configured (state: ${he.state}). Full H.264 frame dropped.`)
                }
            } else if (E === 1) {
                if (m.byteLength < 2) return;
                if (bt || P)
                    if (Oe) {
                        Ge && Ge.state !== "running" && Ge.resume().catch(F => console.error("Error resuming audio context", F));
                        const D = m.slice(2);
                        if (D.byteLength > 0) {
                            if (!P && window.currentAudioBufferSize >= 5) return;
                            Oe.postMessage({
                                type: "decode",
                                data: {
                                    opusBuffer: D,
                                    timestamp: performance.now() * 1e3
                                }
                            }, [D])
                        }
                    } else console.warn("AudioDecoderWorker not ready. Attempting to initialize audio pipeline."), f().then(() => {
                        if (Oe) {
                            const D = m.slice(2);
                            if (D.byteLength > 0) {
                                if (!P && window.currentAudioBufferSize >= 5) return;
                                Oe.postMessage({
                                    type: "decode",
                                    data: {
                                        opusBuffer: D,
                                        timestamp: performance.now() * 1e3
                                    }
                                }, [D])
                            }
                        }
                    })
            } else if (E === 3) {
                const D = P ? 4 : 6;
                if (m.byteLength < D) return;
                P || (qa = A.getUint16(2, !1));
                const F = A.getUint16(P ? 2 : 4, !1),
                    R = m.slice(D);
                if (P && Ae === "ready" && te === "jpeg" || !P && Qe && te === "jpeg") {
                    if (R.byteLength === 0) return;
                    r(F, R)
                }
            } else if (E === 4) {
                if (m.byteLength < 10) return;
                const D = A.getUint8(1),
                    F = A.getUint16(2, !1);
                P || (qa = F, Eu.add(qa));
                const R = A.getUint16(4, !1),
                    Q = A.getUint16(6, !1),
                    q = A.getUint16(8, !1),
                    K = m.slice(10);
                if (P && Ae === "ready" && (te === "x264enc" || te === "x264enc-striped") || !P && Qe && (te === "x264enc" || te === "x264enc-striped")) {
                    if (P && !Ps)
                        if (D === 1) console.log("Shared mode: First keyframe received for striped video. Opening the gate."), Ps = !0;
                        else {
                            console.log("Shared mode: Gate is closed. Discarding non-keyframe striped packet.");
                            return
                        } if (K.byteLength === 0) return;
                    let be = _a[R];
                    const ve = D === 1 ? "key" : "delta";
                    if (!be || be.decoder.state === "closed" || be.decoder.state === "configured" && (be.width !== Q || be.height !== q)) {
                        if (be && be.decoder.state !== "closed") try {
                            be.decoder.close()
                        } catch (me) {
                            console.warn("Error closing old VNC stripe decoder:", me)
                        }
                        const Ue = new VideoDecoder({
                                output: e4.bind(null, R, F),
                                error: me => Rs(me, `stripe_decoder_Y=${R}`)
                            }),
                            ie = {
                                codec: "avc1.42E01E",
                                codedWidth: Q,
                                codedHeight: q,
                                optimizeForLatency: !0
                            };
                        _a[R] = {
                            decoder: Ue,
                            pendingChunks: [],
                            width: Q,
                            height: q
                        }, be = _a[R], VideoDecoder.isConfigSupported(ie).then(me => me.supported ? Ue.configure(ie) : (console.error(`VNC stripe decoder config not supported for Y=${R}:`, ie), delete _a[R], Promise.reject("Config not supported"))).then(() => {
                            J2(R)
                        }).catch(me => {
                            if (console.error(`Error configuring VNC stripe decoder Y=${R}:`, me), _a[R] && _a[R].decoder === Ue) {
                                try {
                                    Ue.state !== "closed" && Ue.close()
                                } catch {}
                                delete _a[R]
                            }
                        })
                    }
                    if (be) {
                        const Ue = performance.now() * 1e3,
                            ie = {
                                type: ve,
                                timestamp: Ue,
                                data: K
                            };
                        if (be.decoder.state === "configured") {
                            const me = new EncodedVideoChunk(ie);
                            try {
                                be.decoder.decode(me)
                            } catch ($e) {
                                Rs($e, `stripe_decode_Y=${R}`)
                            }
                        } else be.decoder.state === "unconfigured" || be.decoder.state === "configuring" ? be.pendingChunks.push(ie) : console.warn(`VNC stripe decoder for Y=${R} in unexpected state: ${be.decoder.state}. Dropping chunk.`)
                    }
                }
            } else console.warn("Unknown binary data payload type received:", E)
        } else if (typeof S.data == "string") {
            if (S.data === "MODE websockets") {
                if (Ks = "websockets", console.log("[websockets] Switched to websockets mode."), po = "initializing", $l = "Initializing WebSocket mode...", so(), he && he.state !== "closed") {
                    try {
                        he.close()
                    } catch {}
                    he = null
                }
                Di(), Gs(), Is(), pl = [], P || (xo(), te !== "jpeg" && te !== "x264enc" && te !== "x264enc-striped" && i()), f().then(() => {
                    g()
                }), Sf(), window.webrtcInput && typeof window.webrtcInput.setTrackpadMode == "function" && window.webrtcInput.setTrackpadMode(an), an && O && O.readyState === WebSocket.OPEN && (O.send("SET_NATIVE_CURSOR_RENDERING,1"), console.log("[websockets] Applied trackpad mode on initialization.")), Ct && Ct.classList.add("hidden"), De && De.classList.remove("hidden"), requestAnimationFrame(c), P ? (Ae = "awaiting_identification", hl = 0, We = null, console.log("Shared mode: Received 'MODE websockets'. Requesting initial stream with STOP/START_VIDEO. State: awaiting_identification."), O && O.readyState === WebSocket.OPEN && (O.send("STOP_VIDEO"), setTimeout(() => {
                    O && O.readyState === WebSocket.OPEN && (O.send("START_VIDEO"), console.log("Shared mode: Sent START_VIDEO after initial STOP_VIDEO."))
                }, 250)), Bf()) : O && O.readyState === WebSocket.OPEN && (!document.hidden && Qe && O.send("START_VIDEO"), bt && O.send("START_AUDIO")), $l = "Waiting for stream...", so(), Om = !0
            } else if (Ks === "websockets")
                if (S.data.startsWith("{")) {
                    let m;
                    try {
                        m = JSON.parse(S.data)
                    } catch (A) {
                        console.error("Error parsing JSON:", A);
                        return
                    }
                    if (m.type === "system_stats") window.system_stats = m;
                    else if (m.type === "gpu_stats") window.gpu_stats = m;
                    else if (m.type === "server_settings") window.postMessage({
                        type: "serverSettings",
                        encoders: m.encoders
                    }, window.location.origin);
                    else if (m.type === "server_apps") m.apps && Array.isArray(m.apps) && window.postMessage({
                        type: "systemApps",
                        apps: m.apps
                    }, window.location.origin);
                    else if (m.type === "pipeline_status") {
                        let A = !1;
                        m.video !== void 0 && m.video !== Qe && (Qe = m.video, A = !0, !Qe && (te === "x264enc" || te === "x264enc-striped") && !P && Di()), m.audio !== void 0 && m.audio !== bt && (bt = m.audio, A = !0, Oe && Oe.postMessage({
                            type: "updatePipelineStatus",
                            data: {
                                isActive: bt
                            }
                        })), A && window.postMessage({
                            type: "pipelineStatusUpdate",
                            video: Qe,
                            audio: bt
                        }, window.location.origin)
                    } else if (m.type === "stream_resolution") {
                        const A = St ? 1 : window.devicePixelRatio || 1;
                        if (P)
                            if (Ae === "error" || Ae === "idle") console.log(`Shared mode: Received stream_resolution while in state '${Ae}'. Ignoring.`);
                            else {
                                const E = parseInt(m.width, 10),
                                    D = parseInt(m.height, 10);
                                if (E > 0 && D > 0) {
                                    const F = ke(E),
                                        R = ke(D),
                                        Q = F / A,
                                        q = R / A;
                                    let K = Z !== Q || J !== q;
                                    K && (console.log(`Shared mode: Received stream_resolution from server: ${E}x${D} (physical, rounded to ${F}x${R}). Current manual (logical): ${Z?Z.toFixed(2):"null"}x${J?J.toFixed(2):"null"}. New logical: ${Q.toFixed(2)}x${q.toFixed(2)}. Current state: ${Ae}.`), Z = Q, J = q, Lt(Z, J, !0)), Ae === "ready" && K && We === "h264_full_frame" ? (console.log(`Shared mode (stream_resolution, ready state): Identified mode is h264_full_frame. Triggering main decoder re-init for new logical resolution ${Z.toFixed(2)}x${J.toFixed(2)}.`), bo()) : Ae === "ready" && K && (We === "x264enc-striped" || We === "jpeg") && (console.log(`Shared mode (stream_resolution, ready state): Mode is ${We}. Clearing canvas due to base resolution change.`), Me && V.width > 0 && V.height > 0 && (Me.setTransform(1, 0, 0, 1, 0, 0), Me.clearRect(0, 0, V.width, V.height)))
                                } else console.warn(`Shared mode: Received invalid stream_resolution dimensions: ${m.width}x${m.height}`)
                            }
                        else console.log(`Non-shared mode: Received stream_resolution (ignored for control): ${m.width}x${m.height}`)
                    } else console.warn("Unexpected JSON message type:", m.type, m)
                } else if (S.data.startsWith("cursor,")) try {
                const m = JSON.parse(S.data.substring(7));
                window.webrtcInput && typeof window.webrtcInput.updateServerCursor == "function" && window.webrtcInput.updateServerCursor(m)
            } catch (m) {
                console.error("Error parsing cursor data:", m)
            } else if (S.data.startsWith("clipboard,")) try {
                const m = S.data.substring(10),
                    A = atob(m),
                    E = A.length,
                    D = new Uint8Array(E);
                for (let R = 0; R < E; R++) D[R] = A.charCodeAt(R);
                const F = new TextDecoder().decode(D);
                navigator.clipboard.writeText(F).catch(R => console.error("Could not copy server clipboard to local: " + R)), window.postMessage({
                    type: "clipboardContentUpdate",
                    text: F
                }, window.location.origin)
            } catch (m) {
                console.error("Error processing clipboard data:", m)
            } else if (S.data.startsWith("system,")) try {
                    JSON.parse(S.data.substring(7)).action === "reload" && window.location.reload()
                } catch (m) {
                    console.error("Error parsing system data:", m)
                } else if (S.data === "VIDEO_STARTED" && !P) Qe = !0, window.postMessage({
                    type: "pipelineStatusUpdate",
                    video: !0
                }, window.location.origin);
                else if (S.data === "VIDEO_STOPPED" && !P) console.log("Client: Received VIDEO_STOPPED. Updating isVideoPipelineActive=false. Expecting PIPELINE_RESETTING from server for full state reset."), Qe = !1, window.postMessage({
                type: "pipelineStatusUpdate",
                video: !1
            }, window.location.origin);
            else if (S.data.startsWith("PIPELINE_RESETTING ")) {
                const m = S.data.split(" "),
                    A = m.length > 1 ? parseInt(m[1], 10) : 0;
                console.log(`[websockets] Received PIPELINE_RESETTING. New epoch start ID: ${A}. Current lastReceivedVideoFrameId: ${qa}`), p4(`PIPELINE_RESETTING from server, new epoch ${A}`), P ? (console.log(`Shared mode: PIPELINE_RESETTING received. Current state: ${Ae}, Identified encoder: ${We}`), Ae = "awaiting_identification", ku(), We = null, hl = 0, console.log("Shared mode: Transitioned to 'awaiting_identification'. Passively waiting for new video data."), Bf()) : console.log("Non-shared mode: Video reset complete. Decoder (if applicable) will be re-initialized if pipeline is active.")
            } else S.data === "AUDIO_STARTED" && !P ? (bt = !0, window.postMessage({
                type: "pipelineStatusUpdate",
                audio: !0
            }, window.location.origin), Oe && Oe.postMessage({
                type: "updatePipelineStatus",
                data: {
                    isActive: !0
                }
            })) : S.data === "AUDIO_STOPPED" && !P ? (bt = !1, window.postMessage({
                type: "pipelineStatusUpdate",
                audio: !1
            }, window.location.origin), Oe && Oe.postMessage({
                type: "updatePipelineStatus",
                data: {
                    isActive: !1
                }
            })) : window.webrtcInput && window.webrtcInput.on_message && !P && window.webrtcInput.on_message(S.data)
        }
    }, O.onerror = S => {
        console.error("[websockets] Error:", S), po = "error", $l = "WebSocket connection error.", so(), aa && (clearInterval(aa), aa = null), kf(), P && (console.error("Shared mode: WebSocket error. Resetting shared state to 'error'."), Ae = "error", ku(), hl = 0)
    }, O.onclose = S => {
        console.log("[websockets] Connection closed", S), po = "disconnected", $l = "WebSocket disconnected. Attempting to reconnect...", so(), aa && (clearInterval(aa), aa = null), kf(), Gs(), Is(), he && he.state !== "closed" && he.close(), Di(), he = null, Oe && (Oe.postMessage({
            type: "close"
        }), Oe = null), P || xo(), Qe = !1, bt = !1, vt = !1, window.postMessage({
            type: "pipelineStatusUpdate",
            video: !1,
            audio: !1
        }, window.location.origin), P && (console.log("Shared mode: WebSocket closed. Resetting shared state to 'idle'."), Ae = "idle", ku(), hl = 0, We = null)
    }, setInterval(() => {
        Ks === "websockets" && O && O.readyState === WebSocket.OPEN || (console.log("WebSocket not open or not in WebSocket mode, reloading page to reconnect."), location.reload())
    }, 3e3)
});

function Gs() {
    let i = 0;
    for (; go.length > 0;) {
        const o = go.shift();
        try {
            o.close(), i++
        } catch {}
    }
    i > 0 && console.log(`Cleanup: Closed ${i} video frames from main buffer.`)
}

function Is() {
    let i = 0;
    for (; Ei.length > 0;) {
        const o = Ei.shift();
        if (o && o.image && typeof o.image.close == "function") try {
            o.image.close(), i++
        } catch {}
    }
    i > 0 && console.log(`Cleanup: Closed ${i} JPEG stripe images.`)
}
const s4 = `
  let decoderAudio;
  let pipelineActive = true;
  let currentDecodeQueueSize = 0;
  const decoderConfig = {
    codec: 'opus',
    numberOfChannels: 2,
    sampleRate: 48000,
  };

  async function initializeDecoderInWorker() {
    if (decoderAudio && decoderAudio.state !== 'closed') {
      try { decoderAudio.close(); } catch (e) { /* ignore */ }
    }
    currentDecodeQueueSize = 0;
    decoderAudio = new AudioDecoder({
      output: handleDecodedAudioFrameInWorker,
      error: (e) => {
        console.error('[AudioWorker] AudioDecoder error:', e.message, e);
        currentDecodeQueueSize = Math.max(0, currentDecodeQueueSize -1);
        if (e.message.includes('fatal') || (decoderAudio && (decoderAudio.state === 'closed' || decoderAudio.state === 'unconfigured'))) {
          // initializeDecoderInWorker(); // Avoid rapid re-init loops on persistent errors
        }
      },
    });
    try {
      const support = await AudioDecoder.isConfigSupported(decoderConfig);
      if (support.supported) {
        await decoderAudio.configure(decoderConfig);
        self.postMessage({ type: 'decoderInitialized' });
      } else {
        decoderAudio = null;
        self.postMessage({ type: 'decoderInitFailed', reason: 'configNotSupported' });
      }
    } catch (e) {
      decoderAudio = null;
      self.postMessage({ type: 'decoderInitFailed', reason: e.message });
    }
  }

  async function handleDecodedAudioFrameInWorker(frame) {
    currentDecodeQueueSize = Math.max(0, currentDecodeQueueSize - 1);
    if (!frame || typeof frame.copyTo !== 'function' || typeof frame.allocationSize !== 'function' || typeof frame.close !== 'function') {
        if(frame && typeof frame.close === 'function') { try { frame.close(); } catch(e) { /* ignore */ } }
        return;
    }
    // In shared mode, pipelineActive is effectively always true from worker's perspective for processing
    // if (!pipelineActive) {
    //   try { frame.close(); } catch(e) { /* ignore */ }
    //   return;
    // }
    let pcmDataArrayBuffer;
    try {
      const requiredByteLength = frame.allocationSize({ planeIndex: 0, format: 'f32' });
      if (requiredByteLength === 0) {
          try { frame.close(); } catch(e) { /* ignore */ }
          return;
      }
      pcmDataArrayBuffer = new ArrayBuffer(requiredByteLength);
      const pcmDataView = new Float32Array(pcmDataArrayBuffer);
      await frame.copyTo(pcmDataView, { planeIndex: 0, format: 'f32' });
      self.postMessage({ type: 'decodedAudioData', pcmBuffer: pcmDataArrayBuffer }, [pcmDataArrayBuffer]);
      pcmDataArrayBuffer = null;
    } catch (error) { /* console.error */ }
    finally {
      if (frame && typeof frame.close === 'function') {
        try { frame.close(); } catch (e) { /* ignore */ }
      }
    }
  }

  self.onmessage = async (event) => {
    const { type, data } = event.data;
    switch (type) {
      case 'init':
        pipelineActive = data.initialPipelineStatus;
        await initializeDecoderInWorker();
        break;
      case 'decode':
        // if (!pipelineActive) return; // Allow decode even if main thread says inactive, for shared mode to always process
        if (decoderAudio && decoderAudio.state === 'configured') {
          const chunk = new EncodedAudioChunk({ type: 'key', timestamp: data.timestamp || (performance.now() * 1000), data: data.opusBuffer });
          try {
            if (currentDecodeQueueSize < 20) { // Limit queue to prevent OOM with bad data
                 decoderAudio.decode(chunk); currentDecodeQueueSize++;
            } else {
                // console.warn('[AudioWorker] Decode queue full, dropping audio chunk.');
            }
          } catch (e) {
              currentDecodeQueueSize = Math.max(0, currentDecodeQueueSize - 1);
              if (decoderAudio.state === 'closed' || decoderAudio.state === 'unconfigured') await initializeDecoderInWorker();
          }
        } else if (!decoderAudio || (decoderAudio && decoderAudio.state !== 'configuring')) {
          await initializeDecoderInWorker(); // Try to reinit if not configured
        }
        break;
      case 'reinitialize': await initializeDecoderInWorker(); break;
      case 'updatePipelineStatus': pipelineActive = data.isActive; break;
      case 'close':
        if (decoderAudio && decoderAudio.state !== 'closed') { try { decoderAudio.close(); } catch (e) { /* ignore */ } }
        decoderAudio = null; self.close(); break;
      default: break;
    }
  };
`,
    r4 = `
class MicWorkletProcessor extends AudioWorkletProcessor {
  constructor() { super(); }
  process(inputs, outputs, parameters) {
    const input = inputs[0];
    if (input && input[0]) {
      const inputChannelData = input[0];
      const int16Array = Int16Array.from(inputChannelData, x => x * 32767);
      if (! int16Array.every(item => item === 0)) {
        this.port.postMessage(int16Array.buffer, [int16Array.buffer]);
      }
    }
    return true;
  }
}
registerProcessor('mic-worklet-processor', MicWorkletProcessor);
`;
async function H0() {
    if (P) {
        console.log("Shared mode: Microphone capture blocked."), vt = !1, ln();
        return
    }
    if (vt || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        vt || (vt = !1), ln();
        return
    }
    let i;
    try {
        i = {
            audio: {
                deviceId: co ? {
                    exact: co
                } : void 0,
                sampleRate: 24e3,
                channelCount: 1,
                echoCancellation: !0,
                noiseSuppression: !0,
                autoGainControl: !0
            },
            video: !1
        }, Zl = await navigator.mediaDevices.getUserMedia(i);
        const o = Zl.getAudioTracks();
        if (o.length > 0) {
            const c = o[0].getSettings();
            !co && c.deviceId && (co = c.deviceId)
        }
        Vt && Vt.state !== "closed" && await Vt.close(), Vt = new AudioContext({
            sampleRate: 24e3
        }), Vt.state === "suspended" && await Vt.resume();
        const r = new Blob([r4], {
                type: "application/javascript"
            }),
            u = URL.createObjectURL(r);
        try {
            await Vt.audioWorklet.addModule(u)
        } finally {
            URL.revokeObjectURL(u)
        }
        js = Vt.createMediaStreamSource(Zl), Ci = new AudioWorkletNode(Vt, "mic-worklet-processor"), Ci.port.onmessage = c => {
            const f = c.data;
            if (O && O.readyState === WebSocket.OPEN && vt) {
                if (!f || !(f instanceof ArrayBuffer) || f.byteLength === 0) return;
                const g = new ArrayBuffer(1 + f.byteLength);
                new DataView(g).setUint8(0, 2), new Uint8Array(g, 1).set(new Uint8Array(f));
                try {
                    O.send(g)
                } catch (_) {
                    console.error("Error sending mic data:", _)
                }
            }
        }, Ci.port.onmessageerror = c => console.error("Error from mic worklet:", c), js.connect(Ci), vt = !0, ln()
    } catch (o) {
        console.error("Failed to start microphone capture:", o), alert(`Microphone error: ${o.name} - ${o.message}`), xo()
    }
}

function xo() {
    if (!vt && !Zl && !Vt) {
        vt && (vt = !1, ln());
        return
    }
    if (Zl && (Zl.getTracks().forEach(i => i.stop()), Zl = null), Ci) {
        Ci.port.onmessage = null, Ci.port.onmessageerror = null;
        try {
            Ci.disconnect()
        } catch {}
        Ci = null
    }
    if (js) {
        try {
            js.disconnect()
        } catch {}
        js = null
    }
    Vt && (Vt.state !== "closed" ? Vt.close().catch(i => console.error("Error closing mic AudioContext:", i)).finally(() => Vt = null) : Vt = null), vt && (vt = !1, ln())
}

function u4() {
    aa && (clearInterval(aa), aa = null), kf(), !window.isCleaningUp && (window.isCleaningUp = !0, console.log("Cleanup: Starting cleanup process..."), P || xo(), O && (O.onopen = null, O.onmessage = null, O.onerror = null, O.onclose = null, (O.readyState === WebSocket.OPEN || O.readyState === WebSocket.CONNECTING) && O.close(), O = null), Ge && (Ge.state !== "closed" && Ge.close().catch(i => console.error("Cleanup error:", i)), Ge = null, Us = null, Mi = null, window.currentAudioBufferSize = 0, Oe && (Oe.postMessage({
        type: "close"
    }), Oe = null)), he && he.state !== "closed" && (he.close(), he = null), Gs(), Is(), Di(), co = null, fo = null, po = "connecting", $l = "", So = !1, Jl = !1, De && (De.textContent = "Connecting..."), De && De.classList.remove("hidden"), Ct && Ct.classList.remove("hidden"), Ft && (Ft.style.cursor = "auto"), serverClipboardContent = "", Qe = !0, bt = !0, vt = !1, window.fps = 0, oo = 0, Hs = performance.now(), console.log("Cleanup: Finished cleanup process."), window.isCleaningUp = !1)
}

function c4(i) {
    if (P) {
        i.preventDefault(), i.dataTransfer.dropEffect = "none";
        return
    }
    i.preventDefault(), i.dataTransfer.dropEffect = "copy"
}
async function d4(i) {
    if (i.preventDefault(), i.stopPropagation(), P) {
        console.log("Shared mode: File upload via drag-drop blocked.");
        return
    }
    if (!O || O.readyState !== WebSocket.OPEN) {
        window.postMessage({
            type: "fileUpload",
            payload: {
                status: "error",
                fileName: "N/A",
                message: "WebSocket not open."
            }
        }, window.location.origin);
        return
    }
    const o = [];
    if (i.dataTransfer.items)
        for (let r = 0; r < i.dataTransfer.items.length; r++) {
            const u = i.dataTransfer.items[r].webkitGetAsEntry() || i.dataTransfer.items[r].getAsEntry();
            u && o.push(u)
        } else if (i.dataTransfer.files.length > 0) {
            for (let r = 0; r < i.dataTransfer.files.length; r++) await Vf(i.dataTransfer.files[r], i.dataTransfer.files[r].name);
            return
        } try {
        for (const r of o) await Fm(r)
    } catch (r) {
        const u = `Error during sequential upload: ${r.message||r}`;
        window.postMessage({
            type: "fileUpload",
            payload: {
                status: "error",
                fileName: "N/A",
                message: u
            }
        }, window.location.origin), O && O.readyState === WebSocket.OPEN && O.send("FILE_UPLOAD_ERROR:GENERAL:Processing failed")
    }
}

function f4(i) {
    return new Promise((o, r) => i.file(o, r))
}
async function Fm(i, o = "") {
    let r;
    if (i.fullPath && typeof i.fullPath == "string" && i.fullPath !== i.name && (i.fullPath.includes("/") || i.fullPath.includes("\\")) ? (r = i.fullPath, r.startsWith("/") && (r = r.substring(1)), console.log(`Using entry.fullPath: "${r}" for entry.name: "${i.name}"`)) : (r = o ? `${o}/${i.name}` : i.name, console.log(`Constructed path: "${r}" for entry.name: "${i.name}" (basePathFallback: "${o}")`)), i.isFile) try {
        const u = await f4(i);
        await Vf(u, r)
    } catch (u) {
        console.error(`Error processing file ${r}: ${u}`), window.postMessage({
            type: "fileUpload",
            payload: {
                status: "error",
                fileName: r,
                message: `Error processing file: ${u.message||u}`
            }
        }, window.location.origin), O && O.readyState === WebSocket.OPEN && O.send(`FILE_UPLOAD_ERROR:${r}:Client-side file processing error`)
    } else if (i.isDirectory) {
        console.log(`Processing directory: ${r}`);
        const u = i.createReader();
        let c;
        do {
            c = await new Promise((f, g) => u.readEntries(f, g));
            for (const f of c) await Fm(f, r)
        } while (c.length > 0)
    }
}

function Vf(i, o) {
    return new Promise((r, u) => {
        if (!O || O.readyState !== WebSocket.OPEN) {
            const _ = `WS closed for ${o}.`;
            window.postMessage({
                type: "fileUpload",
                payload: {
                    status: "error",
                    fileName: o,
                    message: _
                }
            }, window.location.origin), u(new Error(_));
            return
        }
        window.postMessage({
            type: "fileUpload",
            payload: {
                status: "start",
                fileName: o,
                fileSize: i.size
            }
        }, window.location.origin), O.send(`FILE_UPLOAD_START:${o}:${i.size}`);
        let c = 0;
        const f = new FileReader;
        f.onload = function(_) {
            if (!O || O.readyState !== WebSocket.OPEN) {
                const y = `WS closed during upload of ${o}`;
                window.postMessage({
                    type: "fileUpload",
                    payload: {
                        status: "error",
                        fileName: o,
                        message: y
                    }
                }, window.location.origin), u(new Error(y));
                return
            }
            if (_.target.error) {
                const y = `File read error for ${o}: ${_.target.error}`;
                window.postMessage({
                    type: "fileUpload",
                    payload: {
                        status: "error",
                        fileName: o,
                        message: y
                    }
                }, window.location.origin), O.send(`FILE_UPLOAD_ERROR:${o}:File read error`), u(_.target.error);
                return
            }
            try {
                const y = new Uint8Array(1 + _.target.result.byteLength);
                y[0] = 1, y.set(new Uint8Array(_.target.result), 1), O.send(y.buffer), c += _.target.result.byteLength;
                const v = i.size > 0 ? Math.round(c / i.size * 100) : 100;
                window.postMessage({
                    type: "fileUpload",
                    payload: {
                        status: "progress",
                        fileName: o,
                        progress: v,
                        fileSize: i.size
                    }
                }, window.location.origin), c < i.size ? g(c) : (O.send(`FILE_UPLOAD_END:${o}`), window.postMessage({
                    type: "fileUpload",
                    payload: {
                        status: "end",
                        fileName: o,
                        fileSize: i.size
                    }
                }, window.location.origin), r())
            } catch (y) {
                const v = `WS send error during upload of ${o}: ${y.message||y}`;
                window.postMessage({
                    type: "fileUpload",
                    payload: {
                        status: "error",
                        fileName: o,
                        message: v
                    }
                }, window.location.origin), O.send(`FILE_UPLOAD_ERROR:${o}:WS send error`), u(y)
            }
        }, f.onerror = function(_) {
            const y = `General file reader error for ${o}: ${_.target.error}`;
            window.postMessage({
                type: "fileUpload",
                payload: {
                    status: "error",
                    fileName: o,
                    message: y
                }
            }, window.location.origin), O.send(`FILE_UPLOAD_ERROR:${o}:General file reader error`), u(_.target.error)
        };

        function g(_) {
            if (!O || O.readyState !== WebSocket.OPEN) {
                const v = `WS closed before reading next chunk of ${o}`;
                window.postMessage({
                    type: "fileUpload",
                    payload: {
                        status: "error",
                        fileName: o,
                        message: v
                    }
                }, window.location.origin), u(new Error(v));
                return
            }
            const y = i.slice(_, Math.min(_ + z2, i.size));
            f.readAsArrayBuffer(y)
        }
        g(0)
    })
}

function p4(i = "unknown") {
    if (console.log(`Performing server-initiated video reset. Reason: ${i}. Current lastReceivedVideoFrameId before reset: ${qa}`), P && (Ps = !1, console.log("  Shared mode reset: Gate closed. Waiting for a new keyframe.")), qa = -1, console.log(`  Reset lastReceivedVideoFrameId to ${qa}.`), Gs(), Is(), pl = [], te === "x264enc" || te === "x264enc-striped") Di();
    else if (te !== "jpeg") {
        if (he && he.state !== "closed") {
            console.log("  Closing main video decoder due to server reset.");
            try {
                he.close()
            } catch (o) {
                console.warn("  Error closing main video decoder during reset:", o)
            }
        }
        he = null, console.log("  Main video decoder instance set to null.")
    }
    if (Me && V && !(te === "x264enc" || te === "x264enc-striped")) try {
        Me.setTransform(1, 0, 0, 1, 0, 0), Me.clearRect(0, 0, V.width, V.height), console.log("  Cleared canvas during server-initiated reset.")
    } catch (o) {
        console.error("  Error clearing canvas during server-initiated reset:", o)
    }
    P || te !== "jpeg" && te !== "x264enc" && te !== "x264enc-striped" && (console.log("  Ensuring main video decoder is re-initialized after server reset."), Qe ? bo() : console.log("  isVideoPipelineActive is false, decoder re-initialization deferred until video is enabled by user."))
}

function Rs(i, o) {
    console.error(`FATAL DECODER ERROR (Context: ${o}).`, i), !window.isFallingBack && (window.isFallingBack = !0, O && O.readyState === WebSocket.OPEN && (O.onclose = null, O.close()), aa && (clearInterval(aa), aa = null), P ? (console.log("Shared client fallback: Reloading page to re-sync with the stream."), De && (De.textContent = "A video error occurred. Reloading to re-sync with the stream...", De.classList.remove("hidden"))) : (console.log("Primary client fallback: Forcing client settings to safe defaults."), Hf("encoder", "x264enc"), Je("h264_fullcolor", !1), tt("videoFramerate", 60), tt("videoCRF", 25), Je("isManualResolutionMode", !1), tt("manualWidth", null), tt("manualHeight", null), De && (De.textContent = "A critical video error occurred. Resetting to default settings and reloading...", De.classList.remove("hidden"))), setTimeout(() => {
        window.location.reload()
    }, 3e3))
}

function h4() {
    return W2(), window.isSecureContext ? typeof window.VideoDecoder > "u" ? (console.error("FATAL: Browser does not support the VideoDecoder API."), De && (De.textContent = "Error: Your browser does not support the WebCodecs API required for video streaming.", De.classList.remove("hidden")), Ct && Ct.classList.add("hidden"), !1) : (console.log("Pre-flight checks passed: Secure context and VideoDecoder API are available."), !0) : (console.error("FATAL: Not in a secure context. WebCodecs require HTTPS."), De && (De.textContent = "Error: This application requires a secure connection (HTTPS). Please check the URL.", De.classList.remove("hidden")), Ct && Ct.classList.add("hidden"), !1)
}
window.addEventListener("beforeunload", u4);
window.webrtcInput = null;
const j0 = window.location.hash,
    g4 = ["#shared", "#player2", "#player3", "#player4"];
if (g4.includes(j0)) console.log(`Dashboard UI rendering skipped for mode: ${j0}`);
else {
    const i = document.createElement("div");
    i.id = "dashboard-root", document.body.appendChild(i);
    const o = document.getElementById("root");
    o ? mb.createRoot(o).render(p.jsx(ub.StrictMode, {
        children: p.jsx(O2, {
            dashboardRoot: i
        })
    })) : console.error("CRITICAL: Dashboard mount point #root not found. Primary dashboard will not render.")
}
