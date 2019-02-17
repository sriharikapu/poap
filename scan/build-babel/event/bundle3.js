"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t) {
  var e = {};function n(r) {
    if (e[r]) return e[r].exports;var o = e[r] = { i: r, l: !1, exports: {} };return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }n.m = t, n.c = e, n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;if (4 & e && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t && t.__esModule) return t;var r = Object.create(null);if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var o in t) {
      n.d(r, o, function (e) {
        return t[e];
      }.bind(null, o));
    }return r;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 574);
}({ 128: function _(t, e, n) {
    var r, o, i, a;
    /*!
     * mustache.js - Logic-less {{mustache}} templates with JavaScript
     * http://github.com/janl/mustache.js
     */
    /*!
     * mustache.js - Logic-less {{mustache}} templates with JavaScript
     * http://github.com/janl/mustache.js
     */
    a = function a(t) {
      var e = Object.prototype.toString,
          n = Array.isArray || function (t) {
        return "[object Array]" === e.call(t);
      };function r(t) {
        return "function" == typeof t;
      }function o(t) {
        return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      }function i(t, e) {
        return null != t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && e in t;
      }var a = RegExp.prototype.test,
          s = /\S/;function u(t) {
        return !function (t, e) {
          return a.call(t, e);
        }(s, t);
      }var c = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" },
          l = /\s*/,
          p = /\s+/,
          f = /\s*=/,
          h = /\s*\}/,
          d = /#|\^|\/|>|\{|&|=|!/;function y(t) {
        this.string = t, this.tail = t, this.pos = 0;
      }function v(t, e) {
        this.view = t, this.cache = { ".": this.view }, this.parent = e;
      }function w() {
        this.cache = {};
      }y.prototype.eos = function () {
        return "" === this.tail;
      }, y.prototype.scan = function (t) {
        var e = this.tail.match(t);if (!e || 0 !== e.index) return "";var n = e[0];return this.tail = this.tail.substring(n.length), this.pos += n.length, n;
      }, y.prototype.scanUntil = function (t) {
        var e,
            n = this.tail.search(t);switch (n) {case -1:
            e = this.tail, this.tail = "";break;case 0:
            e = "";break;default:
            e = this.tail.substring(0, n), this.tail = this.tail.substring(n);}return this.pos += e.length, e;
      }, v.prototype.push = function (t) {
        return new v(t, this);
      }, v.prototype.lookup = function (t) {
        var e,
            n,
            o,
            a = this.cache;if (a.hasOwnProperty(t)) e = a[t];else {
          for (var s, u, c, l = this, p = !1; l;) {
            if (t.indexOf(".") > 0) for (s = l.view, u = t.split("."), c = 0; null != s && c < u.length;) {
              c === u.length - 1 && (p = i(s, u[c]) || (n = s, o = u[c], null != n && "object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) && n.hasOwnProperty && n.hasOwnProperty(o))), s = s[u[c++]];
            } else s = l.view[t], p = i(l.view, t);if (p) {
              e = s;break;
            }l = l.parent;
          }a[t] = e;
        }return r(e) && (e = e.call(this.view)), e;
      }, w.prototype.clearCache = function () {
        this.cache = {};
      }, w.prototype.parse = function (e, r) {
        var i = this.cache,
            a = e + ":" + (r || t.tags).join(":"),
            s = i[a];return null == s && (s = i[a] = function (e, r) {
          if (!e) return [];var i,
              a,
              s,
              c = [],
              v = [],
              w = [],
              g = !1,
              m = !1;function b() {
            if (g && !m) for (; w.length;) {
              delete v[w.pop()];
            } else w = [];g = !1, m = !1;
          }function x(t) {
            if ("string" == typeof t && (t = t.split(p, 2)), !n(t) || 2 !== t.length) throw new Error("Invalid tags: " + t);i = new RegExp(o(t[0]) + "\\s*"), a = new RegExp("\\s*" + o(t[1])), s = new RegExp("\\s*" + o("}" + t[1]));
          }x(r || t.tags);for (var k, T, E, S, j, O, P = new y(e); !P.eos();) {
            if (k = P.pos, E = P.scanUntil(i)) for (var U = 0, _ = E.length; U < _; ++U) {
              u(S = E.charAt(U)) ? w.push(v.length) : m = !0, v.push(["text", S, k, k + 1]), k += 1, "\n" === S && b();
            }if (!P.scan(i)) break;if (g = !0, T = P.scan(d) || "name", P.scan(l), "=" === T ? (E = P.scanUntil(f), P.scan(f), P.scanUntil(a)) : "{" === T ? (E = P.scanUntil(s), P.scan(h), P.scanUntil(a), T = "&") : E = P.scanUntil(a), !P.scan(a)) throw new Error("Unclosed tag at " + P.pos);if (j = [T, E, k, P.pos], v.push(j), "#" === T || "^" === T) c.push(j);else if ("/" === T) {
              if (!(O = c.pop())) throw new Error('Unopened section "' + E + '" at ' + k);if (O[1] !== E) throw new Error('Unclosed section "' + O[1] + '" at ' + k);
            } else "name" === T || "{" === T || "&" === T ? m = !0 : "=" === T && x(E);
          }if (O = c.pop()) throw new Error('Unclosed section "' + O[1] + '" at ' + P.pos);return function (t) {
            for (var e, n = [], r = n, o = [], i = 0, a = t.length; i < a; ++i) {
              switch ((e = t[i])[0]) {case "#":case "^":
                  r.push(e), o.push(e), r = e[4] = [];break;case "/":
                  o.pop()[5] = e[2], r = o.length > 0 ? o[o.length - 1][4] : n;break;default:
                  r.push(e);}
            }return n;
          }(function (t) {
            for (var e, n, r = [], o = 0, i = t.length; o < i; ++o) {
              (e = t[o]) && ("text" === e[0] && n && "text" === n[0] ? (n[1] += e[1], n[3] = e[3]) : (r.push(e), n = e));
            }return r;
          }(v));
        }(e, r)), s;
      }, w.prototype.render = function (t, e, n, r) {
        var o = this.parse(t, r),
            i = e instanceof v ? e : new v(e);return this.renderTokens(o, i, n, t, r);
      }, w.prototype.renderTokens = function (t, e, n, r, o) {
        for (var i, a, s, u = "", c = 0, l = t.length; c < l; ++c) {
          s = void 0, "#" === (a = (i = t[c])[0]) ? s = this.renderSection(i, e, n, r) : "^" === a ? s = this.renderInverted(i, e, n, r) : ">" === a ? s = this.renderPartial(i, e, n, o) : "&" === a ? s = this.unescapedValue(i, e) : "name" === a ? s = this.escapedValue(i, e) : "text" === a && (s = this.rawValue(i)), void 0 !== s && (u += s);
        }return u;
      }, w.prototype.renderSection = function (t, e, o, i) {
        var a = this,
            s = "",
            u = e.lookup(t[1]);if (u) {
          if (n(u)) for (var c = 0, l = u.length; c < l; ++c) {
            s += this.renderTokens(t[4], e.push(u[c]), o, i);
          } else if ("object" == (typeof u === "undefined" ? "undefined" : _typeof(u)) || "string" == typeof u || "number" == typeof u) s += this.renderTokens(t[4], e.push(u), o, i);else if (r(u)) {
            if ("string" != typeof i) throw new Error("Cannot use higher-order sections without the original template");null != (u = u.call(e.view, i.slice(t[3], t[5]), function (t) {
              return a.render(t, e, o);
            })) && (s += u);
          } else s += this.renderTokens(t[4], e, o, i);return s;
        }
      }, w.prototype.renderInverted = function (t, e, r, o) {
        var i = e.lookup(t[1]);if (!i || n(i) && 0 === i.length) return this.renderTokens(t[4], e, r, o);
      }, w.prototype.renderPartial = function (t, e, n, o) {
        if (n) {
          var i = r(n) ? n(t[1]) : n[t[1]];return null != i ? this.renderTokens(this.parse(i, o), e, n, i) : void 0;
        }
      }, w.prototype.unescapedValue = function (t, e) {
        var n = e.lookup(t[1]);if (null != n) return n;
      }, w.prototype.escapedValue = function (e, n) {
        var r = n.lookup(e[1]);if (null != r) return t.escape(r);
      }, w.prototype.rawValue = function (t) {
        return t[1];
      }, t.name = "mustache.js", t.version = "3.0.1", t.tags = ["{{", "}}"];var g = new w();return t.clearCache = function () {
        return g.clearCache();
      }, t.parse = function (t, e) {
        return g.parse(t, e);
      }, t.render = function (t, e, r, o) {
        if ("string" != typeof t) throw new TypeError('Invalid template! Template should be a "string" but "' + (n(i = t) ? "array" : typeof i === "undefined" ? "undefined" : _typeof(i)) + '" was given as the first argument for mustache#render(template, view, partials)');var i;return g.render(t, e, r, o);
      }, t.to_html = function (e, n, o, i) {
        var a = t.render(e, n, o);if (!r(i)) return a;i(a);
      }, t.escape = function (t) {
        return String(t).replace(/[&<>"'`=\/]/g, function (t) {
          return c[t];
        });
      }, t.Scanner = y, t.Context = v, t.Writer = w, t;
    }, e && "string" != typeof e.nodeName ? a(e) : (o = [e], void 0 === (i = "function" == typeof (r = a) ? r.apply(e, o) : r) || (t.exports = i));
  }, 574: function _(t, e, n) {
    t.exports = n(575);
  }, 575: function _(t, e, n) {
    "use strict";
    var r = this && this.__awaiter || function (t, e, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(t) {
          try {
            u(r.next(t));
          } catch (t) {
            i(t);
          }
        }function s(t) {
          try {
            u(r.throw(t));
          } catch (t) {
            i(t);
          }
        }function u(t) {
          t.done ? o(t.value) : new n(function (e) {
            e(t.value);
          }).then(a, s);
        }u((r = r.apply(t, e || [])).next());
      });
    },
        o = this && this.__generator || function (t, e) {
      var n,
          r,
          o,
          i,
          a = { label: 0, sent: function sent() {
          if (1 & o[0]) throw o[1];return o[1];
        }, trys: [], ops: [] };return i = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
        return this;
      }), i;function s(i) {
        return function (s) {
          return function (i) {
            if (n) throw new TypeError("Generator is already executing.");for (; a;) {
              try {
                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {case 0:case 1:
                    o = i;break;case 4:
                    return a.label++, { value: i[1], done: !1 };case 5:
                    a.label++, r = i[1], i = [0];continue;case 7:
                    i = a.ops.pop(), a.trys.pop();continue;default:
                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                      a = 0;continue;
                    }if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      a.label = i[1];break;
                    }if (6 === i[0] && a.label < o[1]) {
                      a.label = o[1], o = i;break;
                    }if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(i);break;
                    }o[2] && a.ops.pop(), a.trys.pop();continue;}i = e.call(t, a);
              } catch (t) {
                i = [6, t], r = 0;
              } finally {
                n = o = 0;
              }
            }if (5 & i[0]) throw i[1];return { value: i[0] ? i[1] : void 0, done: !0 };
          }([i, s]);
        };
      }
    },
        i = this;Object.defineProperty(e, "__esModule", { value: !0 });var a = n(128),
        s = function s(t) {
      return r(i, void 0, void 0, function () {
        return o(this, function (e) {
          return [2, new Promise(function (e, n) {
            var r = new XMLHttpRequest();r.overrideMimeType("application/json"), r.open("GET", t, !0), r.onload = function () {
              this.status >= 200 && this.status < 300 ? e(JSON.parse(r.response)) : n({ status: this.status, statusText: r.statusText });
            }, r.onerror = function () {
              n({ status: this.status, statusText: r.statusText });
            }, r.send();
          })];
        });
      });
    },
        u = function u(t) {
      return (0, new Intl.DateTimeFormat("en-US", { day: "numeric" }).format)(t);
    },
        c = function c(t) {
      return (0, new Intl.DateTimeFormat("en-US", { month: "long" }).format)(t);
    },
        l = function l(t, e) {
      var n = t.attributes.find(function (t) {
        return t.trait_type === e;
      });return n ? n.value : null;
    };window.addEventListener("load", function () {
      return r(i, void 0, void 0, function () {
        var t, e, n;return o(this, function (p) {
          switch (p.label) {case 0:
              return t = new URLSearchParams(window.location.search).get("tokenId"), [4, s("https://admin.poap.xyz/token?id=" + t)];case 1:
              return e = p.sent(), h = e.owner, document.getElementById("owner").textContent = h, document.getElementById("owner").setAttribute("href", "https://scan.poap.xyz/badges/badge/?address=" + h), [4, (f = e.uri, r(i, void 0, void 0, function () {
                var t;return o(this, function (e) {
                  switch (e.label) {case 0:
                      return [4, s(f)];case 1:
                      return (t = e.sent()).uri = f, [2, t];}
                });
              }))];case 2:
              return function (t) {
                var e = document.getElementById("template").innerHTML;a.parse(e);var n = c(new Date(l(t, "startDate"))),
                    r = c(new Date(l(t, "endDate"))),
                    o = a.render(e, { name: t.name, startDay: u(new Date(l(t, "startDate"))), startMonth: n, endDay: u(new Date(l(t, "endDate"))), endMonth: n === r ? "" : r + " ", year: t.year, city: l(t, "city"), country: l(t, "country"), image: t.image });document.getElementById("event").innerHTML = o;
              }(n = p.sent()), function (t, e) {
                var n = document.getElementById("twitter-link");n.setAttribute("data-text", "Look at my " + e.name + " badge!"), n.setAttribute("data-url", "https://scan.poap.xyz/event/?tokenId=" + t);var r = document.createElement("script");r.setAttribute("src", "https://platform.twitter.com/widgets.js"), n.parentNode.insertBefore(r, n.nextSibling);
              }(t, n), [2];}var f, h;
        });
      });
    });
  } });