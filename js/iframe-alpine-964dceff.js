import './iframe-a81dc9a8.js';
import { c as st } from './_commonjsHelpers-87174ba5.js';
var Oe = {},
  at = {
    get exports() {
      return Oe;
    },
    set exports(C) {
      Oe = C;
    },
  };
(function (C, ot) {
  (function (q, S) {
    C.exports = S();
  })(st, function () {
    function q(n, e, t) {
      return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (n[e] = t), n;
    }
    function S(n, e) {
      var t = Object.keys(n);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(n);
        e &&
          (i = i.filter(function (r) {
            return Object.getOwnPropertyDescriptor(n, r).enumerable;
          })),
          t.push.apply(t, i);
      }
      return t;
    }
    function p(n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e] != null ? arguments[e] : {};
        e % 2
          ? S(Object(t), !0).forEach(function (i) {
              q(n, i, t[i]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
          : S(Object(t)).forEach(function (i) {
              Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(t, i));
            });
      }
      return n;
    }
    function Ee() {
      return new Promise((n) => {
        document.readyState == 'loading' ? document.addEventListener('DOMContentLoaded', n) : n();
      });
    }
    function H(n) {
      return Array.from(new Set(n));
    }
    function D() {
      return navigator.userAgent.includes('Node.js') || navigator.userAgent.includes('jsdom');
    }
    function k(n, e) {
      return n == e;
    }
    function W(n, e) {
      n.tagName.toLowerCase() !== 'template'
        ? console.warn(`Alpine: [${e}] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#${e}`)
        : n.content.childElementCount !== 1 && console.warn(`Alpine: <template> tag with [${e}] encountered with an unexpected number of root elements. Make sure <template> has a single root element. `);
    }
    function Ae(n) {
      return n
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[_\s]/, '-')
        .toLowerCase();
    }
    function G(n) {
      return n.toLowerCase().replace(/-(\w)/g, (e, t) => t.toUpperCase());
    }
    function X(n, e) {
      if (e(n) === !1) return;
      let t = n.firstElementChild;
      for (; t; ) X(t, e), (t = t.nextElementSibling);
    }
    function Y(n, e) {
      var t;
      return function () {
        var i = this,
          r = arguments,
          s = function () {
            (t = null), n.apply(i, r);
          };
        clearTimeout(t), (t = setTimeout(s, e));
      };
    }
    const Z = (n, e, t) => {
      if (
        (console.warn(
          `Alpine Error: "${t}"

Expression: "${e}"
Element:`,
          n
        ),
        !D())
      )
        throw (Object.assign(t, { el: n, expression: e }), t);
    };
    function J(n, { el: e, expression: t }) {
      try {
        const i = n();
        return i instanceof Promise ? i.catch((r) => Z(e, t, r)) : i;
      } catch (i) {
        Z(e, t, i);
      }
    }
    function P(n, e, t, i = {}) {
      return J(() => (typeof e == 'function' ? e.call(t) : new Function(['$data', ...Object.keys(i)], `var __alpine_result; with($data) { __alpine_result = ${e} }; return __alpine_result`)(t, ...Object.values(i))), {
        el: n,
        expression: e,
      });
    }
    function Se(n, e, t, i = {}) {
      return J(
        () => {
          if (typeof e == 'function') return Promise.resolve(e.call(t, i.$event));
          let r = Function;
          if (((r = Object.getPrototypeOf(async function () {}).constructor), Object.keys(t).includes(e))) {
            let s = new Function(['dataContext', ...Object.keys(i)], `with(dataContext) { return ${e} }`)(t, ...Object.values(i));
            return typeof s == 'function' ? Promise.resolve(s.call(t, i.$event)) : Promise.resolve();
          }
          return Promise.resolve(new r(['dataContext', ...Object.keys(i)], `with(dataContext) { ${e} }`)(t, ...Object.values(i)));
        },
        { el: n, expression: e }
      );
    }
    const Q = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;
    function Pe(n) {
      const e = ee(n.name);
      return Q.test(e);
    }
    function m(n, e, t) {
      let i = Array.from(n.attributes).filter(Pe).map(V),
        r = i.filter((s) => s.type === 'spread')[0];
      if (r) {
        let s = P(n, r.expression, e.$data);
        i = i.concat(Object.entries(s).map(([o, a]) => V({ name: o, value: a })));
      }
      return t ? i.filter((s) => s.type === t) : Te(i);
    }
    function Te(n) {
      let e = ['bind', 'model', 'show', 'catch-all'];
      return n.sort((t, i) => {
        let r = e.indexOf(t.type) === -1 ? 'catch-all' : t.type,
          s = e.indexOf(i.type) === -1 ? 'catch-all' : i.type;
        return e.indexOf(r) - e.indexOf(s);
      });
    }
    function V({ name: n, value: e }) {
      const t = ee(n),
        i = t.match(Q),
        r = t.match(/:([a-zA-Z0-9\-:]+)/),
        s = t.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
      return { type: i ? i[1] : null, value: r ? r[1] : null, modifiers: s.map((o) => o.replace('.', '')), expression: e };
    }
    function $e(n) {
      return [
        'disabled',
        'checked',
        'required',
        'readonly',
        'hidden',
        'open',
        'selected',
        'autofocus',
        'itemscope',
        'multiple',
        'novalidate',
        'allowfullscreen',
        'allowpaymentrequest',
        'formnovalidate',
        'autoplay',
        'controls',
        'loop',
        'muted',
        'playsinline',
        'default',
        'ismap',
        'reversed',
        'async',
        'defer',
        'nomodule',
      ].includes(n);
    }
    function ee(n) {
      return n.startsWith('@') ? n.replace('@', 'x-on:') : n.startsWith(':') ? n.replace(':', 'x-bind:') : n;
    }
    function h(n, e = Boolean) {
      return n.split(' ').filter(e);
    }
    const j = 'in',
      I = 'out',
      te = 'cancelled';
    function R(n, e, t, i, r = !1) {
      if (r) return e();
      if (n.__x_transition && n.__x_transition.type === j) return;
      const s = m(n, i, 'transition'),
        o = m(n, i, 'show')[0];
      if (o && o.modifiers.includes('transition')) {
        let a = o.modifiers;
        if (a.includes('out') && !a.includes('in')) return e();
        (a = a.includes('in') && a.includes('out') ? a.filter((u, l) => l < a.indexOf('out')) : a), Ce(n, a, e, t);
      } else s.some((a) => ['enter', 'enter-start', 'enter-end'].includes(a.value)) ? ke(n, i, s, e, t) : e();
    }
    function L(n, e, t, i, r = !1) {
      if (r) return e();
      if (n.__x_transition && n.__x_transition.type === I) return;
      const s = m(n, i, 'transition'),
        o = m(n, i, 'show')[0];
      if (o && o.modifiers.includes('transition')) {
        let a = o.modifiers;
        if (a.includes('in') && !a.includes('out')) return e();
        const c = a.includes('in') && a.includes('out');
        (a = c ? a.filter((u, l) => l > a.indexOf('out')) : a), De(n, a, c, e, t);
      } else s.some((a) => ['leave', 'leave-start', 'leave-end'].includes(a.value)) ? je(n, i, s, e, t) : e();
    }
    function Ce(n, e, t, i) {
      const r = { duration: g(e, 'duration', 150), origin: g(e, 'origin', 'center'), first: { opacity: 0, scale: g(e, 'scale', 95) }, second: { opacity: 1, scale: 100 } };
      ne(n, e, t, () => {}, i, r, j);
    }
    function De(n, e, t, i, r) {
      const o = { duration: t ? g(e, 'duration', 150) : g(e, 'duration', 150) / 2, origin: g(e, 'origin', 'center'), first: { opacity: 1, scale: 100 }, second: { opacity: 0, scale: g(e, 'scale', 95) } };
      ne(n, e, () => {}, i, r, o, I);
    }
    function g(n, e, t) {
      if (n.indexOf(e) === -1) return t;
      const i = n[n.indexOf(e) + 1];
      if (!i || (e === 'scale' && !E(i))) return t;
      if (e === 'duration') {
        let r = i.match(/([0-9]+)ms/);
        if (r) return r[1];
      }
      return e === 'origin' && ['top', 'right', 'left', 'center', 'bottom'].includes(n[n.indexOf(e) + 2]) ? [i, n[n.indexOf(e) + 2]].join(' ') : i;
    }
    function ne(n, e, t, i, r, s, o) {
      n.__x_transition && n.__x_transition.cancel && n.__x_transition.cancel();
      const a = n.style.opacity,
        c = n.style.transform,
        u = n.style.transformOrigin,
        l = !e.includes('opacity') && !e.includes('scale'),
        d = l || e.includes('opacity'),
        f = l || e.includes('scale');
      re(
        n,
        {
          start() {
            d && (n.style.opacity = s.first.opacity), f && (n.style.transform = `scale(${s.first.scale / 100})`);
          },
          during() {
            f && (n.style.transformOrigin = s.origin),
              (n.style.transitionProperty = [d ? 'opacity' : '', f ? 'transform' : ''].join(' ').trim()),
              (n.style.transitionDuration = `${s.duration / 1e3}s`),
              (n.style.transitionTimingFunction = 'cubic-bezier(0.4, 0.0, 0.2, 1)');
          },
          show() {
            t();
          },
          end() {
            d && (n.style.opacity = s.second.opacity), f && (n.style.transform = `scale(${s.second.scale / 100})`);
          },
          hide() {
            i();
          },
          cleanup() {
            d && (n.style.opacity = a), f && (n.style.transform = c), f && (n.style.transformOrigin = u), (n.style.transitionProperty = null), (n.style.transitionDuration = null), (n.style.transitionTimingFunction = null);
          },
        },
        o,
        r
      );
    }
    const _ = (n, e, t) => (typeof n == 'function' ? t.evaluateReturnExpression(e, n) : n);
    function ke(n, e, t, i, r) {
      const s = h(_((t.find((c) => c.value === 'enter') || { expression: '' }).expression, n, e)),
        o = h(_((t.find((c) => c.value === 'enter-start') || { expression: '' }).expression, n, e)),
        a = h(_((t.find((c) => c.value === 'enter-end') || { expression: '' }).expression, n, e));
      ie(n, s, o, a, i, () => {}, j, r);
    }
    function je(n, e, t, i, r) {
      const s = h(_((t.find((c) => c.value === 'leave') || { expression: '' }).expression, n, e)),
        o = h(_((t.find((c) => c.value === 'leave-start') || { expression: '' }).expression, n, e)),
        a = h(_((t.find((c) => c.value === 'leave-end') || { expression: '' }).expression, n, e));
      ie(n, s, o, a, () => {}, i, I, r);
    }
    function ie(n, e, t, i, r, s, o, a) {
      n.__x_transition && n.__x_transition.cancel && n.__x_transition.cancel();
      const c = n.__x_original_classes || [];
      re(
        n,
        {
          start() {
            n.classList.add(...t);
          },
          during() {
            n.classList.add(...e);
          },
          show() {
            r();
          },
          end() {
            n.classList.remove(...t.filter((l) => !c.includes(l))), n.classList.add(...i);
          },
          hide() {
            s();
          },
          cleanup() {
            n.classList.remove(...e.filter((l) => !c.includes(l))), n.classList.remove(...i.filter((l) => !c.includes(l)));
          },
        },
        o,
        a
      );
    }
    function re(n, e, t, i) {
      const r = se(() => {
        e.hide(), n.isConnected && e.cleanup(), delete n.__x_transition;
      });
      (n.__x_transition = {
        type: t,
        cancel: se(() => {
          i(te), r();
        }),
        finish: r,
        nextFrame: null,
      }),
        e.start(),
        e.during(),
        (n.__x_transition.nextFrame = requestAnimationFrame(() => {
          let s = Number(getComputedStyle(n).transitionDuration.replace(/,.*/, '').replace('s', '')) * 1e3;
          s === 0 && (s = Number(getComputedStyle(n).animationDuration.replace('s', '')) * 1e3),
            e.show(),
            (n.__x_transition.nextFrame = requestAnimationFrame(() => {
              e.end(), setTimeout(n.__x_transition.finish, s);
            }));
        }));
    }
    function E(n) {
      return !Array.isArray(n) && !isNaN(n);
    }
    function se(n) {
      let e = !1;
      return function () {
        e || ((e = !0), n.apply(this, arguments));
      };
    }
    function Ie(n, e, t, i, r) {
      W(e, 'x-for');
      let s = ae(typeof t == 'function' ? n.evaluateReturnExpression(e, t) : t),
        o = Me(n, e, s, r),
        a = e;
      o.forEach((c, u) => {
        let l = Re(s, c, u, o, r()),
          d = Le(n, e, u, l),
          f = Ne(a.nextElementSibling, d);
        f
          ? (delete f.__x_for_key, (f.__x_for = l), n.updateElements(f, () => f.__x_for))
          : ((f = ze(e, a)),
            R(
              f,
              () => {},
              () => {},
              n,
              i
            ),
            (f.__x_for = l),
            n.initializeElements(f, () => f.__x_for)),
          (a = f),
          (a.__x_for_key = d);
      }),
        Fe(a, n);
    }
    function ae(n) {
      let e = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        t = /^\(|\)$/g,
        i = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        r = String(n).match(i);
      if (!r) return;
      let s = {};
      s.items = r[2].trim();
      let o = r[1].trim().replace(t, ''),
        a = o.match(e);
      return a ? ((s.item = o.replace(e, '').trim()), (s.index = a[1].trim()), a[2] && (s.collection = a[2].trim())) : (s.item = o), s;
    }
    function Re(n, e, t, i, r) {
      let s = r ? p({}, r) : {};
      return (s[n.item] = e), n.index && (s[n.index] = t), n.collection && (s[n.collection] = i), s;
    }
    function Le(n, e, t, i) {
      let r = m(e, n, 'bind').filter((s) => s.value === 'key')[0];
      return r ? n.evaluateReturnExpression(e, r.expression, () => i) : t;
    }
    function Me(n, e, t, i) {
      let r = m(e, n, 'if')[0];
      if (r && !n.evaluateReturnExpression(e, r.expression)) return [];
      let s = n.evaluateReturnExpression(e, t.items, i);
      return E(s) && s >= 0 && (s = Array.from(Array(s).keys(), (o) => o + 1)), s;
    }
    function ze(n, e) {
      let t = document.importNode(n.content, !0);
      return e.parentElement.insertBefore(t, e.nextElementSibling), e.nextElementSibling;
    }
    function Ne(n, e) {
      if (!n || n.__x_for_key === void 0) return;
      if (n.__x_for_key === e) return n;
      let t = n;
      for (; t; ) {
        if (t.__x_for_key === e) return t.parentElement.insertBefore(t, n);
        t = t.nextElementSibling && t.nextElementSibling.__x_for_key !== void 0 ? t.nextElementSibling : !1;
      }
    }
    function Fe(n, e) {
      for (var t = n.nextElementSibling && n.nextElementSibling.__x_for_key !== void 0 ? n.nextElementSibling : !1; t; ) {
        let i = t,
          r = t.nextElementSibling;
        L(
          t,
          () => {
            i.remove();
          },
          () => {},
          e
        ),
          (t = r && r.__x_for_key !== void 0 ? r : !1);
      }
    }
    function oe(n, e, t, i, r, s, o) {
      var a = n.evaluateReturnExpression(e, i, r);
      if (t === 'value') {
        if (y.ignoreFocusedForValueBinding && document.activeElement.isSameNode(e)) return;
        if ((a === void 0 && String(i).match(/\./) && (a = ''), e.type === 'radio')) e.attributes.value === void 0 && s === 'bind' ? (e.value = a) : s !== 'bind' && (e.checked = k(e.value, a));
        else if (e.type === 'checkbox') typeof a != 'boolean' && ![null, void 0].includes(a) && s === 'bind' ? (e.value = String(a)) : s !== 'bind' && (Array.isArray(a) ? (e.checked = a.some((c) => k(c, e.value))) : (e.checked = !!a));
        else if (e.tagName === 'SELECT') Be(e, a);
        else {
          if (e.value === a) return;
          e.value = a;
        }
      } else if (t === 'class')
        if (Array.isArray(a)) {
          const c = e.__x_original_classes || [];
          e.setAttribute('class', H(c.concat(a)).join(' '));
        } else if (typeof a == 'object')
          Object.keys(a)
            .sort((u, l) => a[u] - a[l])
            .forEach((u) => {
              a[u] ? h(u).forEach((l) => e.classList.add(l)) : h(u).forEach((l) => e.classList.remove(l));
            });
        else {
          const c = e.__x_original_classes || [],
            u = a ? h(a) : [];
          e.setAttribute('class', H(c.concat(u)).join(' '));
        }
      else (t = o.includes('camel') ? G(t) : t), [null, void 0, !1].includes(a) ? e.removeAttribute(t) : $e(t) ? ce(e, t, t) : ce(e, t, a);
    }
    function ce(n, e, t) {
      n.getAttribute(e) != t && n.setAttribute(e, t);
    }
    function Be(n, e) {
      const t = [].concat(e).map((i) => i + '');
      Array.from(n.options).forEach((i) => {
        i.selected = t.includes(i.value || i.text);
      });
    }
    function Ke(n, e, t) {
      e === void 0 && String(t).match(/\./) && (e = ''), (n.textContent = e);
    }
    function Ue(n, e, t, i) {
      e.innerHTML = n.evaluateReturnExpression(e, t, i);
    }
    function qe(n, e, t, i, r = !1) {
      const s = () => {
          (e.style.display = 'none'), (e.__x_is_shown = !1);
        },
        o = () => {
          e.style.length === 1 && e.style.display === 'none' ? e.removeAttribute('style') : e.style.removeProperty('display'), (e.__x_is_shown = !0);
        };
      if (r === !0) {
        t ? o() : s();
        return;
      }
      const a = (c, u) => {
        t
          ? ((e.style.display === 'none' || e.__x_transition) &&
              R(
                e,
                () => {
                  o();
                },
                u,
                n
              ),
            c(() => {}))
          : e.style.display !== 'none'
          ? L(
              e,
              () => {
                c(() => {
                  s();
                });
              },
              u,
              n
            )
          : c(() => {});
      };
      if (i.includes('immediate')) {
        a(
          (c) => c(),
          () => {}
        );
        return;
      }
      n.showDirectiveLastElement && !n.showDirectiveLastElement.contains(e) && n.executeAndClearRemainingShowDirectiveStack(), n.showDirectiveStack.push(a), (n.showDirectiveLastElement = e);
    }
    function He(n, e, t, i, r) {
      W(e, 'x-if');
      const s = e.nextElementSibling && e.nextElementSibling.__x_inserted_me === !0;
      if (t && (!s || e.__x_transition)) {
        const o = document.importNode(e.content, !0);
        e.parentElement.insertBefore(o, e.nextElementSibling),
          R(
            e.nextElementSibling,
            () => {},
            () => {},
            n,
            i
          ),
          n.initializeElements(e.nextElementSibling, r),
          (e.nextElementSibling.__x_inserted_me = !0);
      } else
        !t &&
          s &&
          L(
            e.nextElementSibling,
            () => {
              e.nextElementSibling.remove();
            },
            () => {},
            n,
            i
          );
    }
    function ue(n, e, t, i, r, s = {}) {
      const o = { passive: i.includes('passive') };
      i.includes('camel') && (t = G(t));
      let a, c;
      if (
        (i.includes('away')
          ? ((c = document),
            (a = (u) => {
              e.contains(u.target) || (e.offsetWidth < 1 && e.offsetHeight < 1) || (le(n, r, u, s), i.includes('once') && document.removeEventListener(t, a, o));
            }))
          : ((c = i.includes('window') ? window : i.includes('document') ? document : e),
            (a = (u) => {
              if ((c === window || c === document) && !document.body.contains(e)) {
                c.removeEventListener(t, a, o);
                return;
              }
              (We(t) && Ge(u, i)) ||
                (i.includes('prevent') && u.preventDefault(),
                i.includes('stop') && u.stopPropagation(),
                (!i.includes('self') || u.target === e) &&
                  le(n, r, u, s).then((d) => {
                    d === !1 ? u.preventDefault() : i.includes('once') && c.removeEventListener(t, a, o);
                  }));
            })),
        i.includes('debounce'))
      ) {
        let u = i[i.indexOf('debounce') + 1] || 'invalid-wait',
          l = E(u.split('ms')[0]) ? Number(u.split('ms')[0]) : 250;
        a = Y(a, l);
      }
      c.addEventListener(t, a, o);
    }
    function le(n, e, t, i) {
      return n.evaluateCommandExpression(t.target, e, () => p(p({}, i()), {}, { $event: t }));
    }
    function We(n) {
      return ['keydown', 'keyup'].includes(n);
    }
    function Ge(n, e) {
      let t = e.filter((s) => !['window', 'document', 'prevent', 'stop'].includes(s));
      if (t.includes('debounce')) {
        let s = t.indexOf('debounce');
        t.splice(s, E((t[s + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1);
      }
      if (t.length === 0 || (t.length === 1 && t[0] === fe(n.key))) return !1;
      const r = ['ctrl', 'shift', 'alt', 'meta', 'cmd', 'super'].filter((s) => t.includes(s));
      return (t = t.filter((s) => !r.includes(s))), !(r.length > 0 && r.filter((o) => ((o === 'cmd' || o === 'super') && (o = 'meta'), n[`${o}Key`])).length === r.length && t[0] === fe(n.key));
    }
    function fe(n) {
      switch (n) {
        case '/':
          return 'slash';
        case ' ':
        case 'Spacebar':
          return 'space';
        default:
          return n && Ae(n);
      }
    }
    function Xe(n, e, t, i, r) {
      var s = e.tagName.toLowerCase() === 'select' || ['checkbox', 'radio'].includes(e.type) || t.includes('lazy') ? 'change' : 'input';
      const o = `${i} = rightSideOfExpression($event, ${i})`;
      ue(n, e, s, t, o, () => p(p({}, r()), {}, { rightSideOfExpression: Ye(e, t, i) }));
    }
    function Ye(n, e, t) {
      return (
        n.type === 'radio' && (n.hasAttribute('name') || n.setAttribute('name', t)),
        (i, r) => {
          if (i instanceof CustomEvent && i.detail) return i.detail;
          if (n.type === 'checkbox')
            if (Array.isArray(r)) {
              const s = e.includes('number') ? M(i.target.value) : i.target.value;
              return i.target.checked ? r.concat([s]) : r.filter((o) => !k(o, s));
            } else return i.target.checked;
          else {
            if (n.tagName.toLowerCase() === 'select' && n.multiple)
              return e.includes('number')
                ? Array.from(i.target.selectedOptions).map((s) => {
                    const o = s.value || s.text;
                    return M(o);
                  })
                : Array.from(i.target.selectedOptions).map((s) => s.value || s.text);
            {
              const s = i.target.value;
              return e.includes('number') ? M(s) : e.includes('trim') ? s.trim() : s;
            }
          }
        }
      );
    }
    function M(n) {
      const e = n ? parseFloat(n) : null;
      return E(e) ? e : n;
    }
    const { isArray: z } = Array,
      { getPrototypeOf: N, create: ct, defineProperty: b, defineProperties: ut, isExtensible: de, getOwnPropertyDescriptor: w, getOwnPropertyNames: F, getOwnPropertySymbols: B, preventExtensions: he, hasOwnProperty: A } = Object,
      { push: lt, concat: K, map: ft } = Array.prototype;
    function v(n) {
      return n === void 0;
    }
    function T(n) {
      return typeof n == 'function';
    }
    function Ze(n) {
      return typeof n == 'object';
    }
    const pe = new WeakMap();
    function me(n, e) {
      pe.set(n, e);
    }
    const x = (n) => pe.get(n) || n;
    function U(n, e) {
      return n.valueIsObservable(e) ? n.getProxy(e) : e;
    }
    function Je(n) {
      return A.call(n, 'value') && (n.value = x(n.value)), n;
    }
    function ge(n, e, t) {
      K.call(F(t), B(t)).forEach((r) => {
        let s = w(t, r);
        s.configurable || (s = $(n, s, U)), b(e, r, s);
      }),
        he(e);
    }
    class Qe {
      constructor(e, t) {
        (this.originalTarget = t), (this.membrane = e);
      }
      get(e, t) {
        const { originalTarget: i, membrane: r } = this,
          s = i[t],
          { valueObserved: o } = r;
        return o(i, t), r.getProxy(s);
      }
      set(e, t, i) {
        const {
          originalTarget: r,
          membrane: { valueMutated: s },
        } = this;
        return r[t] !== i ? ((r[t] = i), s(r, t)) : t === 'length' && z(r) && s(r, t), !0;
      }
      deleteProperty(e, t) {
        const {
          originalTarget: i,
          membrane: { valueMutated: r },
        } = this;
        return delete i[t], r(i, t), !0;
      }
      apply(e, t, i) {}
      construct(e, t, i) {}
      has(e, t) {
        const {
          originalTarget: i,
          membrane: { valueObserved: r },
        } = this;
        return r(i, t), t in i;
      }
      ownKeys(e) {
        const { originalTarget: t } = this;
        return K.call(F(t), B(t));
      }
      isExtensible(e) {
        const t = de(e);
        if (!t) return t;
        const { originalTarget: i, membrane: r } = this,
          s = de(i);
        return s || ge(r, e, i), s;
      }
      setPrototypeOf(e, t) {}
      getPrototypeOf(e) {
        const { originalTarget: t } = this;
        return N(t);
      }
      getOwnPropertyDescriptor(e, t) {
        const { originalTarget: i, membrane: r } = this,
          { valueObserved: s } = this.membrane;
        s(i, t);
        let o = w(i, t);
        if (v(o)) return o;
        const a = w(e, t);
        return v(a) ? ((o = $(r, o, U)), o.configurable || b(e, t, o), o) : a;
      }
      preventExtensions(e) {
        const { originalTarget: t, membrane: i } = this;
        return ge(i, e, t), he(t), !0;
      }
      defineProperty(e, t, i) {
        const { originalTarget: r, membrane: s } = this,
          { valueMutated: o } = s,
          { configurable: a } = i;
        if (A.call(i, 'writable') && !A.call(i, 'value')) {
          const c = w(r, t);
          i.value = c.value;
        }
        return b(r, t, Je(i)), a === !1 && b(e, t, $(s, i, U)), o(r, t), !0;
      }
    }
    function Ve(n, e) {
      return n.valueIsObservable(e) ? n.getReadOnlyProxy(e) : e;
    }
    class et {
      constructor(e, t) {
        (this.originalTarget = t), (this.membrane = e);
      }
      get(e, t) {
        const { membrane: i, originalTarget: r } = this,
          s = r[t],
          { valueObserved: o } = i;
        return o(r, t), i.getReadOnlyProxy(s);
      }
      set(e, t, i) {
        return !1;
      }
      deleteProperty(e, t) {
        return !1;
      }
      apply(e, t, i) {}
      construct(e, t, i) {}
      has(e, t) {
        const {
          originalTarget: i,
          membrane: { valueObserved: r },
        } = this;
        return r(i, t), t in i;
      }
      ownKeys(e) {
        const { originalTarget: t } = this;
        return K.call(F(t), B(t));
      }
      setPrototypeOf(e, t) {}
      getOwnPropertyDescriptor(e, t) {
        const { originalTarget: i, membrane: r } = this,
          { valueObserved: s } = r;
        s(i, t);
        let o = w(i, t);
        if (v(o)) return o;
        const a = w(e, t);
        return v(a) ? ((o = $(r, o, Ve)), A.call(o, 'set') && (o.set = void 0), o.configurable || b(e, t, o), o) : a;
      }
      preventExtensions(e) {
        return !1;
      }
      defineProperty(e, t, i) {
        return !1;
      }
    }
    function be(n) {
      let e;
      return z(n) ? (e = []) : Ze(n) && (e = {}), e;
    }
    const tt = Object.prototype;
    function ve(n) {
      if (n === null || typeof n != 'object') return !1;
      if (z(n)) return !0;
      const e = N(n);
      return e === tt || e === null || N(e) === null;
    }
    const ye = (n, e) => {},
      _e = (n, e) => {},
      we = (n) => n;
    function $(n, e, t) {
      const { set: i, get: r } = e;
      return (
        A.call(e, 'value')
          ? (e.value = t(n, e.value))
          : (v(r) ||
              (e.get = function () {
                return t(n, r.call(x(this)));
              }),
            v(i) ||
              (e.set = function (s) {
                i.call(x(this), n.unwrapProxy(s));
              })),
        e
      );
    }
    class nt {
      constructor(e) {
        if (((this.valueDistortion = we), (this.valueMutated = _e), (this.valueObserved = ye), (this.valueIsObservable = ve), (this.objectGraph = new WeakMap()), !v(e))) {
          const { valueDistortion: t, valueMutated: i, valueObserved: r, valueIsObservable: s } = e;
          (this.valueDistortion = T(t) ? t : we), (this.valueMutated = T(i) ? i : _e), (this.valueObserved = T(r) ? r : ye), (this.valueIsObservable = T(s) ? s : ve);
        }
      }
      getProxy(e) {
        const t = x(e),
          i = this.valueDistortion(t);
        if (this.valueIsObservable(i)) {
          const r = this.getReactiveState(t, i);
          return r.readOnly === e ? e : r.reactive;
        }
        return i;
      }
      getReadOnlyProxy(e) {
        e = x(e);
        const t = this.valueDistortion(e);
        return this.valueIsObservable(t) ? this.getReactiveState(e, t).readOnly : t;
      }
      unwrapProxy(e) {
        return x(e);
      }
      getReactiveState(e, t) {
        const { objectGraph: i } = this;
        let r = i.get(t);
        if (r) return r;
        const s = this;
        return (
          (r = {
            get reactive() {
              const o = new Qe(s, t),
                a = new Proxy(be(t), o);
              return me(a, e), b(this, 'reactive', { value: a }), a;
            },
            get readOnly() {
              const o = new et(s, t),
                a = new Proxy(be(t), o);
              return me(a, e), b(this, 'readOnly', { value: a }), a;
            },
          }),
          i.set(t, r),
          r
        );
      }
    }
    function it(n, e) {
      let t = new nt({
        valueMutated(i, r) {
          e(i, r);
        },
      });
      return { data: t.getProxy(n), membrane: t };
    }
    function rt(n, e) {
      let t = n.unwrapProxy(e),
        i = {};
      return (
        Object.keys(t).forEach((r) => {
          ['$el', '$refs', '$nextTick', '$watch'].includes(r) || (i[r] = t[r]);
        }),
        i
      );
    }
    class O {
      constructor(e, t = null) {
        this.$el = e;
        const i = this.$el.getAttribute('x-data'),
          r = i === '' ? '{}' : i,
          s = this.$el.getAttribute('x-init');
        let o = { $el: this.$el },
          a = t ? t.$el : this.$el;
        Object.entries(y.magicProperties).forEach(([d, f]) => {
          Object.defineProperty(o, `$${d}`, {
            get: function () {
              return f(a);
            },
          });
        }),
          (this.unobservedData = t ? t.getUnobservedData() : P(e, r, o));
        let { membrane: c, data: u } = this.wrapDataInObservable(this.unobservedData);
        (this.$data = u),
          (this.membrane = c),
          (this.unobservedData.$el = this.$el),
          (this.unobservedData.$refs = this.getRefsProxy()),
          (this.nextTickStack = []),
          (this.unobservedData.$nextTick = (d) => {
            this.nextTickStack.push(d);
          }),
          (this.watchers = {}),
          (this.unobservedData.$watch = (d, f) => {
            this.watchers[d] || (this.watchers[d] = []), this.watchers[d].push(f);
          }),
          Object.entries(y.magicProperties).forEach(([d, f]) => {
            Object.defineProperty(this.unobservedData, `$${d}`, {
              get: function () {
                return f(a, this.$el);
              },
            });
          }),
          (this.showDirectiveStack = []),
          this.showDirectiveLastElement,
          t || y.onBeforeComponentInitializeds.forEach((d) => d(this));
        var l;
        s && !t && ((this.pauseReactivity = !0), (l = this.evaluateReturnExpression(this.$el, s)), (this.pauseReactivity = !1)),
          this.initializeElements(this.$el, () => {}, t),
          this.listenForNewElementsToInitialize(),
          typeof l == 'function' && l.call(this.$data),
          t ||
            setTimeout(() => {
              y.onComponentInitializeds.forEach((d) => d(this));
            }, 0);
      }
      getUnobservedData() {
        return rt(this.membrane, this.$data);
      }
      wrapDataInObservable(e) {
        var t = this;
        let i = Y(function () {
          t.updateElements(t.$el);
        }, 0);
        return it(e, (r, s) => {
          t.watchers[s]
            ? t.watchers[s].forEach((o) => o(r[s]))
            : Array.isArray(r)
            ? Object.keys(t.watchers).forEach((o) => {
                let a = o.split('.');
                s !== 'length' && a.reduce((c, u) => (Object.is(r, c[u]) && t.watchers[o].forEach((l) => l(r)), c[u]), t.unobservedData);
              })
            : Object.keys(t.watchers)
                .filter((o) => o.includes('.'))
                .forEach((o) => {
                  let a = o.split('.');
                  s === a[a.length - 1] && a.reduce((c, u) => (Object.is(r, c) && t.watchers[o].forEach((l) => l(r[s])), c[u]), t.unobservedData);
                }),
            !t.pauseReactivity && i();
        });
      }
      walkAndSkipNestedComponents(e, t, i = () => {}) {
        X(e, (r) => (r.hasAttribute('x-data') && !r.isSameNode(this.$el) ? (r.__x || i(r), !1) : t(r)));
      }
      initializeElements(e, t = () => {}, i = !1) {
        this.walkAndSkipNestedComponents(
          e,
          (r) => {
            if (r.__x_for_key !== void 0 || r.__x_inserted_me !== void 0) return !1;
            this.initializeElement(r, t, !i);
          },
          (r) => {
            i || (r.__x = new O(r));
          }
        ),
          this.executeAndClearRemainingShowDirectiveStack(),
          this.executeAndClearNextTickStack(e);
      }
      initializeElement(e, t, i = !0) {
        e.hasAttribute('class') && m(e, this).length > 0 && (e.__x_original_classes = h(e.getAttribute('class'))), i && this.registerListeners(e, t), this.resolveBoundAttributes(e, !0, t);
      }
      updateElements(e, t = () => {}) {
        this.walkAndSkipNestedComponents(
          e,
          (i) => {
            if (i.__x_for_key !== void 0 && !i.isSameNode(this.$el)) return !1;
            this.updateElement(i, t);
          },
          (i) => {
            i.__x = new O(i);
          }
        ),
          this.executeAndClearRemainingShowDirectiveStack(),
          this.executeAndClearNextTickStack(e);
      }
      executeAndClearNextTickStack(e) {
        e === this.$el &&
          this.nextTickStack.length > 0 &&
          requestAnimationFrame(() => {
            for (; this.nextTickStack.length > 0; ) this.nextTickStack.shift()();
          });
      }
      executeAndClearRemainingShowDirectiveStack() {
        this.showDirectiveStack
          .reverse()
          .map(
            (e) =>
              new Promise((t, i) => {
                e(t, i);
              })
          )
          .reduce(
            (e, t) =>
              e.then(() =>
                t.then((i) => {
                  i();
                })
              ),
            Promise.resolve(() => {})
          )
          .catch((e) => {
            if (e !== te) throw e;
          }),
          (this.showDirectiveStack = []),
          (this.showDirectiveLastElement = void 0);
      }
      updateElement(e, t) {
        this.resolveBoundAttributes(e, !1, t);
      }
      registerListeners(e, t) {
        m(e, this).forEach(({ type: i, value: r, modifiers: s, expression: o }) => {
          switch (i) {
            case 'on':
              ue(this, e, r, s, o, t);
              break;
            case 'model':
              Xe(this, e, s, o, t);
              break;
          }
        });
      }
      resolveBoundAttributes(e, t = !1, i) {
        let r = m(e, this);
        r.forEach(({ type: s, value: o, modifiers: a, expression: c }) => {
          switch (s) {
            case 'model':
              oe(this, e, 'value', c, i, s, a);
              break;
            case 'bind':
              if (e.tagName.toLowerCase() === 'template' && o === 'key') return;
              oe(this, e, o, c, i, s, a);
              break;
            case 'text':
              var u = this.evaluateReturnExpression(e, c, i);
              Ke(e, u, c);
              break;
            case 'html':
              Ue(this, e, c, i);
              break;
            case 'show':
              var u = this.evaluateReturnExpression(e, c, i);
              qe(this, e, u, a, t);
              break;
            case 'if':
              if (r.some((l) => l.type === 'for')) return;
              var u = this.evaluateReturnExpression(e, c, i);
              He(this, e, u, t, i);
              break;
            case 'for':
              Ie(this, e, c, t, i);
              break;
            case 'cloak':
              e.removeAttribute('x-cloak');
              break;
          }
        });
      }
      evaluateReturnExpression(e, t, i = () => {}) {
        return P(e, t, this.$data, p(p({}, i()), {}, { $dispatch: this.getDispatchFunction(e) }));
      }
      evaluateCommandExpression(e, t, i = () => {}) {
        return Se(e, t, this.$data, p(p({}, i()), {}, { $dispatch: this.getDispatchFunction(e) }));
      }
      getDispatchFunction(e) {
        return (t, i = {}) => {
          e.dispatchEvent(new CustomEvent(t, { detail: i, bubbles: !0 }));
        };
      }
      listenForNewElementsToInitialize() {
        const e = this.$el,
          t = { childList: !0, attributes: !0, subtree: !0 };
        new MutationObserver((r) => {
          for (let s = 0; s < r.length; s++) {
            const o = r[s].target.closest('[x-data]');
            if (o && o.isSameNode(this.$el)) {
              if (r[s].type === 'attributes' && r[s].attributeName === 'x-data') {
                const a = r[s].target.getAttribute('x-data') || '{}',
                  c = P(this.$el, a, { $el: this.$el });
                Object.keys(c).forEach((u) => {
                  this.$data[u] !== c[u] && (this.$data[u] = c[u]);
                });
              }
              r[s].addedNodes.length > 0 &&
                r[s].addedNodes.forEach((a) => {
                  if (!(a.nodeType !== 1 || a.__x_inserted_me)) {
                    if (a.matches('[x-data]') && !a.__x) {
                      a.__x = new O(a);
                      return;
                    }
                    this.initializeElements(a);
                  }
                });
            }
          }
        }).observe(e, t);
      }
      getRefsProxy() {
        var e = this,
          t = {};
        return new Proxy(t, {
          get(i, r) {
            if (r === '$isAlpineProxy') return !0;
            var s;
            return (
              e.walkAndSkipNestedComponents(e.$el, (o) => {
                o.hasAttribute('x-ref') && o.getAttribute('x-ref') === r && (s = o);
              }),
              s
            );
          },
        });
      }
    }
    const y = {
      version: '2.8.2',
      pauseMutationObserver: !1,
      magicProperties: {},
      onComponentInitializeds: [],
      onBeforeComponentInitializeds: [],
      ignoreFocusedForValueBinding: !1,
      start: async function () {
        D() || (await Ee()),
          this.discoverComponents((e) => {
            this.initializeComponent(e);
          }),
          document.addEventListener('turbolinks:load', () => {
            this.discoverUninitializedComponents((e) => {
              this.initializeComponent(e);
            });
          }),
          this.listenForNewUninitializedComponentsAtRunTime();
      },
      discoverComponents: function (e) {
        document.querySelectorAll('[x-data]').forEach((i) => {
          e(i);
        });
      },
      discoverUninitializedComponents: function (e, t = null) {
        const i = (t || document).querySelectorAll('[x-data]');
        Array.from(i)
          .filter((r) => r.__x === void 0)
          .forEach((r) => {
            e(r);
          });
      },
      listenForNewUninitializedComponentsAtRunTime: function () {
        const e = document.querySelector('body'),
          t = { childList: !0, attributes: !0, subtree: !0 };
        new MutationObserver((r) => {
          if (!this.pauseMutationObserver)
            for (let s = 0; s < r.length; s++)
              r[s].addedNodes.length > 0 &&
                r[s].addedNodes.forEach((o) => {
                  o.nodeType === 1 &&
                    ((o.parentElement && o.parentElement.closest('[x-data]')) ||
                      this.discoverUninitializedComponents((a) => {
                        this.initializeComponent(a);
                      }, o.parentElement));
                });
        }).observe(e, t);
      },
      initializeComponent: function (e) {
        if (!e.__x)
          try {
            e.__x = new O(e);
          } catch (t) {
            setTimeout(() => {
              throw t;
            }, 0);
          }
      },
      clone: function (e, t) {
        t.__x || (t.__x = new O(t, e));
      },
      addMagicProperty: function (e, t) {
        this.magicProperties[e] = t;
      },
      onComponentInitialized: function (e) {
        this.onComponentInitializeds.push(e);
      },
      onBeforeComponentInitialized: function (e) {
        this.onBeforeComponentInitializeds.push(e);
      },
    };
    return (
      D() ||
        ((window.Alpine = y),
        window.deferLoadingAlpine
          ? window.deferLoadingAlpine(function () {
              window.Alpine.start();
            })
          : window.Alpine.start()),
      y
    );
  });
})(at);
