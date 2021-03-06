"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  var t = {};function n(r) {
    if (t[r]) return t[r].exports;var o = t[r] = { i: r, l: !1, exports: {} };return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;if (4 & t && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.__esModule) return e;var r = Object.create(null);if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
    }return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 572);
}({ 128: function _(e, t, n) {
    var r, o, i, a;
    /*!
     * mustache.js - Logic-less {{mustache}} templates with JavaScript
     * http://github.com/janl/mustache.js
     */
    /*!
     * mustache.js - Logic-less {{mustache}} templates with JavaScript
     * http://github.com/janl/mustache.js
     */
    a = function a(e) {
      var t = Object.prototype.toString,
          n = Array.isArray || function (e) {
        return "[object Array]" === t.call(e);
      };function r(e) {
        return "function" == typeof e;
      }function o(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      }function i(e, t) {
        return null != e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && t in e;
      }var a = RegExp.prototype.test,
          s = /\S/;function u(e) {
        return !function (e, t) {
          return a.call(e, t);
        }(s, e);
      }var c = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;" },
          l = /\s*/,
          p = /\s+/,
          f = /\s*=/,
          h = /\s*\}/,
          d = /#|\^|\/|>|\{|&|=|!/;function y(e) {
        this.string = e, this.tail = e, this.pos = 0;
      }function v(e, t) {
        this.view = e, this.cache = { ".": this.view }, this.parent = t;
      }function g() {
        this.cache = {};
      }y.prototype.eos = function () {
        return "" === this.tail;
      }, y.prototype.scan = function (e) {
        var t = this.tail.match(e);if (!t || 0 !== t.index) return "";var n = t[0];return this.tail = this.tail.substring(n.length), this.pos += n.length, n;
      }, y.prototype.scanUntil = function (e) {
        var t,
            n = this.tail.search(e);switch (n) {case -1:
            t = this.tail, this.tail = "";break;case 0:
            t = "";break;default:
            t = this.tail.substring(0, n), this.tail = this.tail.substring(n);}return this.pos += t.length, t;
      }, v.prototype.push = function (e) {
        return new v(e, this);
      }, v.prototype.lookup = function (e) {
        var t,
            n,
            o,
            a = this.cache;if (a.hasOwnProperty(e)) t = a[e];else {
          for (var s, u, c, l = this, p = !1; l;) {
            if (e.indexOf(".") > 0) for (s = l.view, u = e.split("."), c = 0; null != s && c < u.length;) {
              c === u.length - 1 && (p = i(s, u[c]) || (n = s, o = u[c], null != n && "object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) && n.hasOwnProperty && n.hasOwnProperty(o))), s = s[u[c++]];
            } else s = l.view[e], p = i(l.view, e);if (p) {
              t = s;break;
            }l = l.parent;
          }a[e] = t;
        }return r(t) && (t = t.call(this.view)), t;
      }, g.prototype.clearCache = function () {
        this.cache = {};
      }, g.prototype.parse = function (t, r) {
        var i = this.cache,
            a = t + ":" + (r || e.tags).join(":"),
            s = i[a];return null == s && (s = i[a] = function (t, r) {
          if (!t) return [];var i,
              a,
              s,
              c = [],
              v = [],
              g = [],
              b = !1,
              w = !1;function m() {
            if (b && !w) for (; g.length;) {
              delete v[g.pop()];
            } else g = [];b = !1, w = !1;
          }function x(e) {
            if ("string" == typeof e && (e = e.split(p, 2)), !n(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);i = new RegExp(o(e[0]) + "\\s*"), a = new RegExp("\\s*" + o(e[1])), s = new RegExp("\\s*" + o("}" + e[1]));
          }x(r || e.tags);for (var k, E, T, j, S, O, P = new y(t); !P.eos();) {
            if (k = P.pos, T = P.scanUntil(i)) for (var I = 0, _ = T.length; I < _; ++I) {
              u(j = T.charAt(I)) ? g.push(v.length) : w = !0, v.push(["text", j, k, k + 1]), k += 1, "\n" === j && m();
            }if (!P.scan(i)) break;if (b = !0, E = P.scan(d) || "name", P.scan(l), "=" === E ? (T = P.scanUntil(f), P.scan(f), P.scanUntil(a)) : "{" === E ? (T = P.scanUntil(s), P.scan(h), P.scanUntil(a), E = "&") : T = P.scanUntil(a), !P.scan(a)) throw new Error("Unclosed tag at " + P.pos);if (S = [E, T, k, P.pos], v.push(S), "#" === E || "^" === E) c.push(S);else if ("/" === E) {
              if (!(O = c.pop())) throw new Error('Unopened section "' + T + '" at ' + k);if (O[1] !== T) throw new Error('Unclosed section "' + O[1] + '" at ' + k);
            } else "name" === E || "{" === E || "&" === E ? w = !0 : "=" === E && x(T);
          }if (O = c.pop()) throw new Error('Unclosed section "' + O[1] + '" at ' + P.pos);return function (e) {
            for (var t, n = [], r = n, o = [], i = 0, a = e.length; i < a; ++i) {
              switch ((t = e[i])[0]) {case "#":case "^":
                  r.push(t), o.push(t), r = t[4] = [];break;case "/":
                  o.pop()[5] = t[2], r = o.length > 0 ? o[o.length - 1][4] : n;break;default:
                  r.push(t);}
            }return n;
          }(function (e) {
            for (var t, n, r = [], o = 0, i = e.length; o < i; ++o) {
              (t = e[o]) && ("text" === t[0] && n && "text" === n[0] ? (n[1] += t[1], n[3] = t[3]) : (r.push(t), n = t));
            }return r;
          }(v));
        }(t, r)), s;
      }, g.prototype.render = function (e, t, n, r) {
        var o = this.parse(e, r),
            i = t instanceof v ? t : new v(t);return this.renderTokens(o, i, n, e, r);
      }, g.prototype.renderTokens = function (e, t, n, r, o) {
        for (var i, a, s, u = "", c = 0, l = e.length; c < l; ++c) {
          s = void 0, "#" === (a = (i = e[c])[0]) ? s = this.renderSection(i, t, n, r) : "^" === a ? s = this.renderInverted(i, t, n, r) : ">" === a ? s = this.renderPartial(i, t, n, o) : "&" === a ? s = this.unescapedValue(i, t) : "name" === a ? s = this.escapedValue(i, t) : "text" === a && (s = this.rawValue(i)), void 0 !== s && (u += s);
        }return u;
      }, g.prototype.renderSection = function (e, t, o, i) {
        var a = this,
            s = "",
            u = t.lookup(e[1]);if (u) {
          if (n(u)) for (var c = 0, l = u.length; c < l; ++c) {
            s += this.renderTokens(e[4], t.push(u[c]), o, i);
          } else if ("object" == (typeof u === "undefined" ? "undefined" : _typeof(u)) || "string" == typeof u || "number" == typeof u) s += this.renderTokens(e[4], t.push(u), o, i);else if (r(u)) {
            if ("string" != typeof i) throw new Error("Cannot use higher-order sections without the original template");null != (u = u.call(t.view, i.slice(e[3], e[5]), function (e) {
              return a.render(e, t, o);
            })) && (s += u);
          } else s += this.renderTokens(e[4], t, o, i);return s;
        }
      }, g.prototype.renderInverted = function (e, t, r, o) {
        var i = t.lookup(e[1]);if (!i || n(i) && 0 === i.length) return this.renderTokens(e[4], t, r, o);
      }, g.prototype.renderPartial = function (e, t, n, o) {
        if (n) {
          var i = r(n) ? n(e[1]) : n[e[1]];return null != i ? this.renderTokens(this.parse(i, o), t, n, i) : void 0;
        }
      }, g.prototype.unescapedValue = function (e, t) {
        var n = t.lookup(e[1]);if (null != n) return n;
      }, g.prototype.escapedValue = function (t, n) {
        var r = n.lookup(t[1]);if (null != r) return e.escape(r);
      }, g.prototype.rawValue = function (e) {
        return e[1];
      }, e.name = "mustache.js", e.version = "3.0.1", e.tags = ["{{", "}}"];var b = new g();return e.clearCache = function () {
        return b.clearCache();
      }, e.parse = function (e, t) {
        return b.parse(e, t);
      }, e.render = function (e, t, r, o) {
        if ("string" != typeof e) throw new TypeError('Invalid template! Template should be a "string" but "' + (n(i = e) ? "array" : typeof i === "undefined" ? "undefined" : _typeof(i)) + '" was given as the first argument for mustache#render(template, view, partials)');var i;return b.render(e, t, r, o);
      }, e.to_html = function (t, n, o, i) {
        var a = e.render(t, n, o);if (!r(i)) return a;i(a);
      }, e.escape = function (e) {
        return String(e).replace(/[&<>"'`=\/]/g, function (e) {
          return c[e];
        });
      }, e.Scanner = y, e.Context = v, e.Writer = g, e;
    }, t && "string" != typeof t.nodeName ? a(t) : (o = [t], void 0 === (i = "function" == typeof (r = a) ? r.apply(t, o) : r) || (e.exports = i));
  }, 572: function _(e, t, n) {
    e.exports = n(573);
  }, 573: function _(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function (e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function a(e) {
          try {
            u(r.next(e));
          } catch (e) {
            i(e);
          }
        }function s(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            i(e);
          }
        }function u(e) {
          e.done ? o(e.value) : new n(function (t) {
            t(e.value);
          }).then(a, s);
        }u((r = r.apply(e, t || [])).next());
      });
    },
        o = this && this.__generator || function (e, t) {
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
                    }o[2] && a.ops.pop(), a.trys.pop();continue;}i = t.call(e, a);
              } catch (e) {
                i = [6, e], r = 0;
              } finally {
                n = o = 0;
              }
            }if (5 & i[0]) throw i[1];return { value: i[0] ? i[1] : void 0, done: !0 };
          }([i, s]);
        };
      }
    },
        i = this;Object.defineProperty(t, "__esModule", { value: !0 });var a = n(128),
        s = function s(e) {
      return r(i, void 0, void 0, function () {
        var t, n, r, i;return o(this, function (o) {
          switch (o.label) {case 0:
              return t = [], [4, u("https://admin.poap.xyz/badges?address=" + e)];case 1:
              n = o.sent(), r = 0, o.label = 2;case 2:
              return r < n.length ? [4, u(n[r].uri)] : [3, 5];case 3:
              (i = o.sent()).tokenId = n[r].tokenId, i.uri = n[r].uri, t.push(i), o.label = 4;case 4:
              return r++, [3, 2];case 5:
              return [2, t];}
        });
      });
    },
        u = function u(e) {
      return r(i, void 0, void 0, function () {
        return o(this, function (t) {
          return [2, new Promise(function (t, n) {
            var r = new XMLHttpRequest();r.overrideMimeType("application/json"), r.open("GET", e, !0), r.onload = function () {
              this.status >= 200 && this.status < 300 ? t(JSON.parse(r.response)) : n({ status: this.status, statusText: r.statusText });
            }, r.onerror = function () {
              n({ status: this.status, statusText: r.statusText });
            }, r.send();
          })];
        });
      });
    },
        c = function c(e, t, n) {
      if (n.length > 0) {
        var r = a.render(e, { badges: n });document.getElementById(t).innerHTML = r;
      } else document.getElementById(t).style.display = "none";
    };window.addEventListener("load", function () {
      return r(i, void 0, void 0, function () {
        var e;return o(this, function (t) {
          switch (t.label) {case 0:
              return function (e) {
                document.getElementById("account").textContent = e;
              }(e = new URLSearchParams(window.location.search).get("address")), [4, s(e)];case 1:
              return function (e) {
                for (var t = { year2014: [], year2015: [], year2016: [], year2017: [], year2018: [], year2019: [] }, n = 0; n < e.length; n++) {
                  t["year" + e[n].year].push({ url: "/event?tokenId=" + e[n].tokenId, image: e[n].image });
                }var r = document.getElementById("template").innerHTML;a.parse(r), c(r, "badges-2014", t.year2014), c(r, "badges-2015", t.year2015), c(r, "badges-2016", t.year2016), c(r, "badges-2017", t.year2017), c(r, "badges-2018", t.year2018), c(r, "badges-2019", t.year2019);
              }(t.sent()), function (e, t) {
                var n = document.getElementById("twitter-link");n.setAttribute("data-text", "Check out my badge shelf!"), n.setAttribute("data-url", "https://scan.poap.xyz/badges/badge/?address=" + e);var r = document.createElement("script");r.setAttribute("src", "https://platform.twitter.com/widgets.js"), n.parentNode.insertBefore(r, n.nextSibling);
              }(e, event), [2];}
        });
      });
    });
  } });