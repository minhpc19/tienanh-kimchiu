/* @ds-bundle: {"format":4,"namespace":"VietnamWeddingDesignSystem_e89e9f","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ICONS","sourcePath":"components/core/iconData.js"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FieldLabel","sourcePath":"components/forms/Input.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Countdown","sourcePath":"components/invitation/Countdown.jsx"},{"name":"DateBlock","sourcePath":"components/invitation/DateBlock.jsx"},{"name":"EventCard","sourcePath":"components/invitation/EventCard.jsx"},{"name":"Monogram","sourcePath":"components/invitation/Monogram.jsx"},{"name":"SongHy","sourcePath":"components/invitation/SongHy.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"PhotoFrame","sourcePath":"components/layout/PhotoFrame.jsx"},{"name":"SectionHeading","sourcePath":"components/layout/SectionHeading.jsx"}],"sourceHashes":{"components/core/Button.jsx":"44d9330645ad","components/core/Divider.jsx":"5298adf6b9bd","components/core/Icon.jsx":"35228d7f8e07","components/core/IconButton.jsx":"2180e40ae78f","components/core/Tabs.jsx":"96fc32814d68","components/core/Tag.jsx":"e16b0b05586a","components/core/iconData.js":"670a498a4afd","components/feedback/Dialog.jsx":"b486295f64bb","components/feedback/Toast.jsx":"9f7a5eafa4c4","components/forms/Checkbox.jsx":"98b2e63aa0ae","components/forms/Input.jsx":"4dac1e7e4ec8","components/forms/RadioGroup.jsx":"5776ecccbeb4","components/forms/Select.jsx":"a24b57802fd3","components/invitation/Countdown.jsx":"aa5c276c5559","components/invitation/DateBlock.jsx":"bed99caca4cc","components/invitation/EventCard.jsx":"ad496c8ebd6c","components/invitation/Monogram.jsx":"7eed268c84a0","components/invitation/SongHy.jsx":"b6467c279ae5","components/layout/Card.jsx":"8c01edeb31d6","components/layout/PhotoFrame.jsx":"6a3719caf3cb","components/layout/SectionHeading.jsx":"67dc21168d45","ui_kits/wedding_card/Envelope.jsx":"6d4de21b649e","ui_kits/wedding_card/Events.jsx":"99deb84052c7","ui_kits/wedding_card/Kit.jsx":"7fd739cf9de7","ui_kits/wedding_card/Rsvp.jsx":"034bb55d05f0","ui_kits/wedding_card/Story.jsx":"6f08c9835090","ui_kits/wedding_card/data.js":"7a4c475b8356"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VietnamWeddingDesignSystem_e89e9f = window.VietnamWeddingDesignSystem_e89e9f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Divider.jsx
try { (() => {
const line = (grow, c) => ({
  flex: grow ? 1 : '0 0 auto',
  height: 0,
  borderTop: `var(--hairline) solid ${c || 'var(--line-hair)'}`
});
function Divider({
  variant = 'ornament',
  label,
  width = '100%',
  color,
  style
}) {
  const wrap = {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    width,
    margin: '0 auto',
    color: color || 'var(--ornament)',
    ...style
  };
  if (variant === 'line') return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: {
      ...wrap
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: line(true, color)
  }));
  if (variant === 'text') return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: wrap
  }, /*#__PURE__*/React.createElement("span", {
    style: line(true, color)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      whiteSpace: 'nowrap'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: line(true, color)
  }));
  if (variant === 'dots') return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: {
      ...wrap,
      justifyContent: 'center',
      gap: 10
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: i === 1 ? 4 : 3,
      height: i === 1 ? 4 : 3,
      borderRadius: 999,
      background: 'currentColor'
    }
  })));
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    style: wrap
  }, /*#__PURE__*/React.createElement("span", {
    style: line(true, color)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: 999,
      background: 'currentColor'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      transform: 'rotate(45deg)',
      border: 'var(--border-thin) solid currentColor'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: 999,
      background: 'currentColor'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: line(true, color)
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
const {
  useState
} = React;
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  fullWidth = false,
  style
}) {
  const [inner, setInner] = useState(items[0] && items[0].value);
  const cur = value !== undefined ? value : inner;
  const pick = v => {
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  const pill = variant === 'pill';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: pill ? 4 : 28,
      padding: pill ? 4 : 0,
      borderRadius: pill ? 'var(--radius-pill)' : 0,
      boxShadow: pill ? 'inset 0 0 0 var(--hairline) var(--line-hair)' : `inset 0 calc(-1 * var(--hairline)) 0 var(--line-soft)`,
      width: fullWidth ? '100%' : 'fit-content',
      margin: '0 auto',
      ...style
    }
  }, items.map(it => {
    const on = it.value === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => pick(it.value),
      style: {
        flex: fullWidth ? 1 : '0 0 auto',
        border: 'none',
        cursor: 'pointer',
        font: 'var(--weight-regular) 11px/1 var(--font-sans)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        transition: 'all var(--dur-base) var(--ease-soft)',
        ...(pill ? {
          height: 36,
          padding: '0 20px',
          borderRadius: 'var(--radius-pill)',
          background: on ? 'var(--accent)' : 'transparent',
          color: on ? 'var(--text-on-accent)' : 'var(--text-muted)'
        } : {
          height: 40,
          padding: '0 2px',
          background: 'transparent',
          color: on ? 'var(--text-accent)' : 'var(--text-muted)',
          boxShadow: on ? 'inset 0 -1px 0 var(--line-strong)' : 'none'
        })
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/iconData.js
try { (() => {
// Lucide v0.460.0 (ISC) — inner SVG markup, copied programmatically.
const ICONS = {
  "heart": "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\" />",
  "calendar": "<path d=\"M8 2v4\" /><path d=\"M16 2v4\" /><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" /><path d=\"M3 10h18\" />",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\" /><polyline points=\"12 6 12 12 16 14\" />",
  "map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\" /><circle cx=\"12\" cy=\"10\" r=\"3\" />",
  "phone": "<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\" />",
  "gift": "<rect x=\"3\" y=\"8\" width=\"18\" height=\"4\" rx=\"1\" /><path d=\"M12 8v13\" /><path d=\"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7\" /><path d=\"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5\" />",
  "music": "<path d=\"M9 18V5l12-2v13\" /><circle cx=\"6\" cy=\"18\" r=\"3\" /><circle cx=\"18\" cy=\"16\" r=\"3\" />",
  "volume-2": "<path d=\"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z\" /><path d=\"M16 9a5 5 0 0 1 0 6\" /><path d=\"M19.364 18.364a9 9 0 0 0 0-12.728\" />",
  "volume-x": "<path d=\"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z\" /><line x1=\"22\" x2=\"16\" y1=\"9\" y2=\"15\" /><line x1=\"16\" x2=\"22\" y1=\"9\" y2=\"15\" />",
  "copy": "<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\" /><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\" />",
  "check": "<path d=\"M20 6 9 17l-5-5\" />",
  "x": "<path d=\"M18 6 6 18\" /><path d=\"m6 6 12 12\" />",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\" />",
  "chevron-left": "<path d=\"m15 18-6-6 6-6\" />",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\" />",
  "arrow-right": "<path d=\"M5 12h14\" /><path d=\"m12 5 7 7-7 7\" />",
  "camera": "<path d=\"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z\" /><circle cx=\"12\" cy=\"13\" r=\"3\" />",
  "image": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\" /><circle cx=\"9\" cy=\"9\" r=\"2\" /><path d=\"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\" />",
  "mail": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\" /><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\" />",
  "send": "<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\" /><path d=\"m21.854 2.147-10.94 10.939\" />",
  "users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /><circle cx=\"9\" cy=\"7\" r=\"4\" /><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\" /><path d=\"M16 3.13a4 4 0 0 1 0 7.75\" />",
  "utensils": "<path d=\"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2\" /><path d=\"M7 2v20\" /><path d=\"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7\" />",
  "car": "<path d=\"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2\" /><circle cx=\"7\" cy=\"17\" r=\"2\" /><path d=\"M9 17h6\" /><circle cx=\"17\" cy=\"17\" r=\"2\" />",
  "qr-code": "<rect width=\"5\" height=\"5\" x=\"3\" y=\"3\" rx=\"1\" /><rect width=\"5\" height=\"5\" x=\"16\" y=\"3\" rx=\"1\" /><rect width=\"5\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\" /><path d=\"M21 16h-3a2 2 0 0 0-2 2v3\" /><path d=\"M21 21v.01\" /><path d=\"M12 7v3a2 2 0 0 1-2 2H7\" /><path d=\"M3 12h.01\" /><path d=\"M12 3h.01\" /><path d=\"M12 16v.01\" /><path d=\"M16 12h1\" /><path d=\"M21 12v.01\" /><path d=\"M12 21v-1\" />",
  "play": "<polygon points=\"6 3 20 12 6 21 6 3\" />",
  "pause": "<rect x=\"14\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\" /><rect x=\"6\" y=\"4\" width=\"4\" height=\"16\" rx=\"1\" />",
  "navigation": "<polygon points=\"3 11 22 2 13 21 11 13 3 11\" />",
  "flower-2": "<path d=\"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1\" /><circle cx=\"12\" cy=\"8\" r=\"2\" /><path d=\"M12 10v12\" /><path d=\"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z\" /><path d=\"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z\" />",
  "gem": "<path d=\"M6 3h12l4 6-10 13L2 9Z\" /><path d=\"M11 3 8 9l4 13 4-13-3-6\" /><path d=\"M2 9h20\" />",
  "sparkle": "<path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\" />",
  "house": "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\" /><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" />",
  "plus": "<path d=\"M5 12h14\" /><path d=\"M12 5v14\" />",
  "minus": "<path d=\"M5 12h14\" />",
  "external-link": "<path d=\"M15 3h6v6\" /><path d=\"M10 14 21 3\" /><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />",
  "landmark": "<line x1=\"3\" x2=\"21\" y1=\"22\" y2=\"22\" /><line x1=\"6\" x2=\"6\" y1=\"18\" y2=\"11\" /><line x1=\"10\" x2=\"10\" y1=\"18\" y2=\"11\" /><line x1=\"14\" x2=\"14\" y1=\"18\" y2=\"11\" /><line x1=\"18\" x2=\"18\" y1=\"18\" y2=\"11\" /><polygon points=\"12 2 20 7 4 7\" />",
  "wine": "<path d=\"M8 22h8\" /><path d=\"M7 10h10\" /><path d=\"M12 15v7\" /><path d=\"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z\" />"
};
Object.assign(__ds_scope, { ICONS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/iconData.js", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICON_NAMES = Object.keys(__ds_scope.ICONS);
function Icon({
  name,
  size = 20,
  strokeWidth = 1.25,
  color = 'currentColor',
  title,
  style,
  ...rest
}) {
  const inner = (title ? `<title>${title}</title>` : '') + (__ds_scope.ICONS[name] || '');
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: title ? 'img' : undefined,
    "aria-hidden": title ? undefined : true,
    style: {
      display: 'inline-block',
      flexShrink: 0,
      verticalAlign: 'middle',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: inner
    }
  }, rest));
}
Object.assign(__ds_scope, { ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    h: 36,
    px: 18,
    fs: 10.5,
    ic: 14
  },
  md: {
    h: 46,
    px: 28,
    fs: 11.5,
    ic: 16
  },
  lg: {
    h: 54,
    px: 36,
    fs: 12.5,
    ic: 18
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  href,
  type = 'button',
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const h = hover && !disabled;
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    height: s.h,
    padding: `0 ${s.px}px`,
    boxSizing: 'border-box',
    borderRadius: 'var(--radius-none)',
    font: `var(--weight-regular) ${s.fs}px/1 var(--font-sans)`,
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.45 : press ? 0.82 : 1,
    transition: 'background var(--dur-base) var(--ease-soft), color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), opacity var(--dur-fast)'
  };
  const variants = {
    primary: {
      background: h ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: 'none'
    },
    outline: {
      background: h ? 'var(--accent-wash)' : 'transparent',
      color: 'var(--text-accent)',
      border: 'none',
      boxShadow: 'inset 0 0 0 var(--border-thin) var(--line-strong)'
    },
    soft: {
      background: h ? 'var(--blush-200)' : 'var(--blush-100)',
      color: 'var(--blush-700)',
      border: 'none'
    },
    light: {
      background: h ? 'var(--gold-100)' : 'var(--ivory-50)',
      color: 'var(--red-700)',
      border: 'none'
    },
    goldline: {
      background: h ? 'rgba(217,197,156,.14)' : 'transparent',
      color: 'var(--gold-200)',
      border: 'none',
      boxShadow: 'inset 0 0 0 var(--border-thin) var(--gold-300)'
    },
    ghost: {
      background: 'transparent',
      color: h ? 'var(--accent-press)' : 'var(--text-accent)',
      border: 'none',
      height: 'auto',
      padding: '6px 2px',
      boxShadow: `inset 0 calc(-1 * var(--hairline)) 0 ${h ? 'var(--line-strong)' : 'var(--line-hair)'}`
    }
  };
  const El = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(El, _extends({
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.ic
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.ic
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function IconButton({
  icon,
  label,
  variant = 'outline',
  size = 44,
  active = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const h = (hover || active) && !disabled;
  const v = {
    outline: {
      background: h ? 'var(--accent-wash)' : 'transparent',
      color: 'var(--text-accent)',
      boxShadow: 'inset 0 0 0 var(--border-thin) var(--line-hair)'
    },
    glass: {
      background: 'var(--surface-glass)',
      backdropFilter: 'blur(var(--blur-glass))',
      WebkitBackdropFilter: 'blur(var(--blur-glass))',
      color: 'var(--text-accent)',
      boxShadow: `inset 0 0 0 var(--hairline) var(--line-hair), ${h ? 'var(--shadow-float)' : 'var(--shadow-paper)'}`
    },
    solid: {
      background: h ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--text-on-accent)'
    },
    plain: {
      background: 'transparent',
      color: h ? 'var(--accent-press)' : 'var(--text-muted)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      padding: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'all var(--dur-base) var(--ease-soft)',
      flexShrink: 0,
      ...v,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.42)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const TONES = {
  red: {
    color: 'var(--red-600)',
    background: 'transparent',
    boxShadow: 'inset 0 0 0 var(--hairline) var(--red-300)'
  },
  gold: {
    color: 'var(--gold-600)',
    background: 'transparent',
    boxShadow: 'inset 0 0 0 var(--hairline) var(--line-strong)'
  },
  blush: {
    color: 'var(--blush-700)',
    background: 'var(--blush-100)'
  },
  sage: {
    color: 'var(--sage-600)',
    background: 'var(--sage-100)'
  },
  hy: {
    color: 'var(--hy-500)',
    background: 'var(--hy-100)'
  },
  neutral: {
    color: 'var(--ink-500)',
    background: 'var(--ivory-200)'
  }
};
function Tag({
  tone = 'red',
  icon,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '0 12px',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--weight-regular) 10px/1 var(--font-sans)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...(TONES[tone] || TONES.red),
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const {
  useState,
  useEffect
} = React;
function Dialog({
  open,
  onClose,
  eyebrow,
  title,
  children,
  footer,
  width = 420,
  style
}) {
  const [mounted, setMounted] = useState(open);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (open) {
      setMounted(true);
      const r = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
      return () => cancelAnimationFrame(r);
    }
    setShown(false);
    const t = setTimeout(() => setMounted(false), 320);
    return () => clearTimeout(t);
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const k = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!mounted) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)',
      opacity: shown ? 1 : 0,
      transition: 'opacity var(--dur-base) var(--ease-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: width,
      maxHeight: '90vh',
      overflow: 'auto',
      background: 'var(--surface-card)',
      padding: '44px 32px 32px',
      textAlign: 'center',
      boxShadow: 'var(--shadow-float)',
      transform: shown ? 'translateY(0)' : 'translateY(14px)',
      transition: 'transform var(--dur-slow) var(--ease-soft)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 'var(--frame-inset)',
      boxShadow: 'inset 0 0 0 var(--hairline) var(--line-hair)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "\u0110\xF3ng",
    variant: "plain",
    size: 36,
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 12,
      right: 12
    }
  }), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-regular) var(--fs-script-sm)/1 var(--font-script)',
      color: 'var(--text-accent)',
      marginBottom: 8
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 16px',
      font: 'var(--weight-light) var(--fs-display-sm)/1.2 var(--font-serif)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 24,
      display: 'flex',
      gap: 10,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const {
  useEffect
} = React;
const TONES = {
  default: {
    icon: 'heart',
    color: 'var(--accent)'
  },
  success: {
    icon: 'check',
    color: 'var(--sage-600)'
  },
  error: {
    icon: 'x',
    color: 'var(--hy-500)'
  }
};
function Toast({
  open = true,
  message,
  tone = 'default',
  icon,
  duration = 3200,
  onClose,
  position = 'fixed',
  style
}) {
  useEffect(() => {
    if (!open || !duration || !onClose) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [open, duration, onClose]);
  const t = TONES[tone] || TONES.default;
  const fixed = position === 'fixed';
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-live": "polite",
    style: {
      ...(fixed ? {
        position: 'fixed',
        left: '50%',
        bottom: 28,
        zIndex: 1100,
        transform: `translate(-50%, ${open ? 0 : 16}px)`
      } : {
        position: 'relative'
      }),
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity var(--dur-base) var(--ease-soft), transform var(--dur-slow) var(--ease-soft)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      maxWidth: 'calc(100vw - 40px)',
      padding: '12px 20px',
      boxSizing: 'border-box',
      background: 'var(--surface-glass)',
      backdropFilter: 'blur(var(--blur-glass))',
      WebkitBackdropFilter: 'blur(var(--blur-glass))',
      boxShadow: 'inset 0 0 0 var(--hairline) var(--line-hair), var(--shadow-float)',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--weight-light) 17px/1.4 var(--font-serif)',
      color: 'var(--text-strong)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 16,
    color: t.color
  }), /*#__PURE__*/React.createElement("span", null, message));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const {
  useState
} = React;
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
  style
}) {
  const [inner, setInner] = useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      font: 'var(--weight-light) 18px/1.4 var(--font-serif)',
      color: 'var(--text-strong)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-xs)',
      background: on ? 'var(--accent)' : 'transparent',
      boxShadow: on ? 'none' : 'inset 0 0 0 1px var(--line-hair)',
      color: 'var(--text-on-accent)',
      transition: 'all var(--dur-base) var(--ease-soft)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    strokeWidth: 1.75
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const {
  useState
} = React;
function FieldLabel({
  children,
  htmlFor
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'block',
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, children);
}
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  multiline = false,
  rows = 3,
  hint,
  error,
  disabled = false,
  id,
  name,
  style
}) {
  const [focus, setFocus] = useState(false);
  const fid = id || name;
  const lineColor = error ? 'var(--state-error)' : focus ? 'var(--line-strong)' : 'var(--line-hair)';
  const field = {
    width: '100%',
    boxSizing: 'border-box',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    borderRadius: 0,
    padding: multiline ? '8px 0' : '0',
    height: multiline ? 'auto' : 40,
    resize: 'vertical',
    font: 'var(--weight-light) 19px/1.5 var(--font-serif)',
    color: 'var(--text-strong)',
    boxShadow: `inset 0 ${focus ? -1 : -0.75}px 0 ${lineColor}`,
    transition: 'box-shadow var(--dur-base) var(--ease-soft)'
  };
  const El = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement(FieldLabel, {
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement(El, {
    id: fid,
    name: name,
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: field
  }), (error || hint) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      font: 'var(--type-small)',
      fontSize: 12,
      color: error ? 'var(--state-error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { FieldLabel, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
const {
  useState
} = React;
function RadioGroup({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  variant = 'default',
  direction = 'column',
  name = 'radio',
  style
}) {
  const [inner, setInner] = useState(defaultValue);
  const cur = value !== undefined ? value : inner;
  const pick = v => {
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: style
  }, label && /*#__PURE__*/React.createElement(__ds_scope.FieldLabel, null, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: variant === 'choice' ? 'row' : direction,
      gap: variant === 'choice' ? 8 : direction === 'row' ? 24 : 12,
      flexWrap: 'wrap',
      marginTop: 6
    }
  }, opts.map(o => {
    const on = o.value === cur;
    if (variant === 'choice') return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      role: "radio",
      "aria-checked": on,
      onClick: () => pick(o.value),
      style: {
        flex: 1,
        minWidth: 120,
        minHeight: 48,
        padding: '10px 16px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-none)',
        font: 'var(--weight-regular) 18px/1.3 var(--font-serif)',
        color: on ? 'var(--text-accent)' : 'var(--text-body)',
        background: on ? 'var(--accent-wash)' : 'transparent',
        boxShadow: `inset 0 0 0 ${on ? '1px var(--line-strong)' : 'var(--hairline) var(--line-hair)'}`,
        transition: 'all var(--dur-base) var(--ease-soft)'
      }
    }, o.label);
    return /*#__PURE__*/React.createElement("label", {
      key: o.value,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        cursor: 'pointer',
        font: 'var(--weight-light) 18px/1.4 var(--font-serif)',
        color: 'var(--text-strong)'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      checked: on,
      onChange: () => pick(o.value),
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: 999,
        boxShadow: `inset 0 0 0 1px ${on ? 'var(--line-strong)' : 'var(--line-hair)'}`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'box-shadow var(--dur-base)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 999,
        background: 'var(--accent)',
        transform: on ? 'scale(1)' : 'scale(0)',
        transition: 'transform var(--dur-base) var(--ease-soft)'
      }
    })), o.label);
  })));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useState
} = React;
function Select({
  label,
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder,
  disabled = false,
  id,
  name,
  style
}) {
  const [focus, setFocus] = useState(false);
  const fid = id || name;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement(__ds_scope.FieldLabel, {
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: fid,
    name: name,
    value: value,
    defaultValue: defaultValue === undefined && value === undefined && placeholder ? '' : defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 40,
      padding: '0 28px 0 0',
      border: 'none',
      outline: 'none',
      borderRadius: 0,
      background: 'transparent',
      cursor: 'pointer',
      font: 'var(--weight-light) 19px/1.5 var(--font-serif)',
      color: 'var(--text-strong)',
      boxShadow: `inset 0 ${focus ? -1 : -0.75}px 0 ${focus ? 'var(--line-strong)' : 'var(--line-hair)'}`,
      transition: 'box-shadow var(--dur-base) var(--ease-soft)'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const op = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: op.value,
      value: op.value
    }, op.label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--accent)",
    style: {
      position: 'absolute',
      right: 2,
      top: 12,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/invitation/Countdown.jsx
try { (() => {
const {
  useState,
  useEffect
} = React;
const DEFAULT_LABELS = ['Ngày', 'Giờ', 'Phút', 'Giây'];
function diff(to) {
  const ms = Math.max(0, new Date(to).getTime() - Date.now());
  const s = Math.floor(ms / 1000);
  return [Math.floor(s / 86400), Math.floor(s / 3600) % 24, Math.floor(s / 60) % 60, s % 60];
}
function Countdown({
  to,
  labels = DEFAULT_LABELS,
  variant = 'plain',
  style
}) {
  const [v, setV] = useState(() => diff(to));
  useEffect(() => {
    setV(diff(to));
    const t = setInterval(() => setV(diff(to)), 1000);
    return () => clearInterval(t);
  }, [to]);
  const boxed = variant === 'boxed';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'stretch',
      gap: boxed ? 10 : 0,
      ...style
    }
  }, v.map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: '1 1 0',
      maxWidth: 96,
      padding: boxed ? '16px 6px 14px' : '4px 6px',
      textAlign: 'center',
      background: boxed ? 'var(--surface-card)' : 'transparent',
      boxShadow: boxed ? 'inset 0 0 0 var(--hairline) var(--line-hair)' : i > 0 ? 'inset var(--hairline) 0 0 var(--line-hair)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-light) 44px/1 var(--font-serif)',
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums lining-nums'
    }
  }, String(n).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      font: 'var(--weight-regular) 10px/1 var(--font-sans)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, labels[i]))));
}
Object.assign(__ds_scope, { Countdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/invitation/Countdown.jsx", error: String((e && e.message) || e) }); }

// components/invitation/DateBlock.jsx
try { (() => {
function DateBlock({
  weekday,
  day,
  month,
  year,
  size = 'md',
  style
}) {
  const big = size === 'lg' ? 76 : size === 'sm' ? 44 : 60;
  const side = {
    flex: '1 1 0',
    minWidth: 0,
    padding: '9px 0',
    boxShadow: 'inset 0 var(--hairline) 0 var(--line-hair), inset 0 calc(-1 * var(--hairline)) 0 var(--line-hair)',
    font: `var(--weight-regular) ${size === 'sm' ? 10 : 11}px/1.3 var(--font-sans)`,
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    color: 'var(--text-body)',
    textAlign: 'center'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: size === 'sm' ? 14 : 20,
      width: '100%',
      maxWidth: size === 'sm' ? 280 : 360,
      margin: '0 auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: side
  }, weekday), /*#__PURE__*/React.createElement("div", {
    style: {
      font: `var(--weight-light) ${big}px/1 var(--font-serif)`,
      color: 'var(--text-accent)',
      letterSpacing: '-.01em',
      fontVariantNumeric: 'lining-nums'
    }
  }, day), /*#__PURE__*/React.createElement("div", {
    style: side
  }, month, year && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), year)));
}
Object.assign(__ds_scope, { DateBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/invitation/DateBlock.jsx", error: String((e && e.message) || e) }); }

// components/invitation/Monogram.jsx
try { (() => {
function Monogram({
  a,
  b,
  size = 120,
  ring = true,
  color = 'var(--accent)',
  style
}) {
  const fs = size * 0.36;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color,
      boxShadow: ring ? `inset 0 0 0 var(--hairline) ${color}` : 'none',
      flexShrink: 0,
      ...style
    }
  }, ring && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: Math.max(3, size * 0.04),
      borderRadius: 999,
      boxShadow: 'inset 0 0 0 var(--hairline) var(--line-soft)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--weight-regular) ${fs}px/1 var(--font-script)`,
      transform: `translateY(${size * 0.02}px)`
    }
  }, a), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--weight-light) ${fs * 0.5}px/1 var(--font-serif)`,
      fontStyle: 'italic',
      margin: `0 ${size * 0.03}px`,
      color: 'var(--text-muted)'
    }
  }, "&"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--weight-regular) ${fs}px/1 var(--font-script)`,
      transform: `translateY(${size * 0.02}px)`
    }
  }, b));
}
Object.assign(__ds_scope, { Monogram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/invitation/Monogram.jsx", error: String((e && e.message) || e) }); }

// components/invitation/SongHy.jsx
try { (() => {
function SongHy({
  size = 56,
  tone = 'hy',
  ring = false,
  style
}) {
  const color = tone === 'gold' ? 'var(--gold-500)' : 'var(--hy-500)';
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "Song H\u1EF7",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: ring ? size * 1.5 : size,
      height: ring ? size * 1.5 : size,
      borderRadius: 999,
      boxShadow: ring ? `inset 0 0 0 var(--hairline) ${color}` : 'none',
      color,
      font: `300 ${size}px/1 'Noto Serif SC','Songti SC','SimSun',serif`,
      flexShrink: 0,
      ...style
    }
  }, "\u56CD");
}
Object.assign(__ds_scope, { SongHy });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/invitation/SongHy.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function Card({
  variant = 'frame',
  padding = 'var(--card-pad)',
  align = 'center',
  children,
  style
}) {
  const base = {
    position: 'relative',
    background: variant === 'tint' ? 'var(--surface-tint)' : 'var(--surface-card)',
    padding,
    textAlign: align,
    borderRadius: 'var(--radius-none)',
    boxSizing: 'border-box'
  };
  const v = {
    frame: {
      boxShadow: 'inset 0 0 0 var(--hairline) var(--line-hair)'
    },
    plain: {
      boxShadow: 'inset 0 0 0 var(--hairline) var(--line-soft)'
    },
    paper: {
      boxShadow: 'var(--shadow-paper)'
    },
    tint: {}
  }[variant] || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...base,
      ...v,
      ...style
    }
  }, variant === 'frame' && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 'var(--frame-inset)',
      boxShadow: 'inset 0 0 0 var(--hairline) var(--line-soft)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/invitation/EventCard.jsx
try { (() => {
function EventCard({
  tag,
  tagTone = 'red',
  title,
  time,
  weekday,
  day,
  month,
  year,
  lunar,
  venue,
  address,
  mapHref,
  cardVariant = 'frame',
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    variant: cardVariant,
    padding: "40px 28px",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 18
    }
  }, tag && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: tagTone
  }, tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--weight-light) var(--fs-display-sm)/1.2 var(--font-serif)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--text-strong)'
    }
  }, title), time && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--weight-regular) 12px/1 var(--font-sans)',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--text-muted)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 14,
    color: "var(--accent)"
  }), "V\xE0o l\xFAc ", time), day && /*#__PURE__*/React.createElement(__ds_scope.DateBlock, {
    weekday: weekday,
    day: day,
    month: month,
    year: year
  }), lunar && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-light) 16px/1.5 var(--font-serif)',
      fontStyle: 'italic',
      color: 'var(--text-muted)'
    }
  }, lunar), (venue || address) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      marginTop: 4
    }
  }, venue && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-regular) 20px/1.35 var(--font-serif)',
      color: 'var(--text-strong)'
    }
  }, venue), address && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-light) 16px/1.55 var(--font-serif)',
      color: 'var(--text-body)',
      maxWidth: 320,
      textWrap: 'pretty'
    }
  }, address)), mapHref && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "sm",
    iconLeft: "map-pin",
    href: mapHref,
    target: "_blank",
    rel: "noreferrer"
  }, "Ch\u1EC9 \u0111\u01B0\u1EDDng")));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/invitation/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/layout/PhotoFrame.jsx
try { (() => {
const RADII = {
  rect: 'var(--radius-none)',
  arch: 'var(--radius-arch)',
  circle: '999px',
  oval: '50%'
};
function PhotoFrame({
  src,
  alt = '',
  shape = 'rect',
  ratio = '3 / 4',
  matted = false,
  placeholder = 'Ảnh cưới',
  width = '100%',
  style
}) {
  const r = RADII[shape] || RADII.rect;
  const img = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: shape === 'circle' ? '1 / 1' : ratio,
      borderRadius: r,
      overflow: 'hidden',
      background: 'var(--ivory-200)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      color: 'var(--accent)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "camera",
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, placeholder)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      boxSizing: 'border-box',
      ...(matted ? {
        padding: 8,
        borderRadius: r,
        boxShadow: 'inset 0 0 0 var(--hairline) var(--line-hair)'
      } : {}),
      ...style
    }
  }, img);
}
Object.assign(__ds_scope, { PhotoFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PhotoFrame.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  eyebrowStyle = 'script',
  ornament = true,
  align = 'center',
  style
}) {
  const center = align === 'center';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      display: 'flex',
      flexDirection: 'column',
      alignItems: center ? 'center' : 'flex-start',
      gap: 10,
      ...style
    }
  }, eyebrow && (eyebrowStyle === 'script' ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-regular) var(--fs-script-sm)/1 var(--font-script)',
      color: 'var(--text-accent)'
    }
  }, eyebrow) : /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, eyebrow)), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--weight-light) var(--fs-display-md)/var(--lh-snug) var(--font-serif)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-strong)',
      textWrap: 'balance'
    }
  }, title), ornament && /*#__PURE__*/React.createElement(__ds_scope.Divider, {
    width: 140,
    style: {
      margin: center ? '4px auto' : '4px 0'
    }
  }), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 440,
      font: 'var(--weight-light) var(--fs-body)/var(--lh-body) var(--font-serif)',
      fontStyle: 'italic',
      color: 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding_card/Envelope.jsx
try { (() => {
(() => {
  const {
    Monogram,
    Button,
    Divider
  } = window.VietnamWeddingDesignSystem_e89e9f;
  function Envelope({
    open,
    onOpen
  }) {
    const W = window.WEDDING;
    return /*#__PURE__*/React.createElement("div", {
      "data-screen-label": "Envelope",
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        overflowY: 'auto',
        background: 'var(--surface-brand-deep)',
        opacity: open ? 0 : 1,
        pointerEvents: open ? 'none' : 'auto',
        transform: open ? 'scale(1.02)' : 'none',
        transition: 'opacity 900ms var(--ease-soft), transform 900ms var(--ease-soft)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        maxWidth: 'var(--width-card)',
        minHeight: '100%',
        height: 'max-content',
        background: 'var(--surface-brand)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '48px 36px',
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: 16,
        boxShadow: 'inset 0 0 0 var(--hairline) var(--gold-300)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: 22,
        boxShadow: 'inset 0 0 0 var(--hairline) rgba(217,197,156,.45)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...window.kitLabel,
        color: 'var(--gold-200)'
      }
    }, "Thi\u1EC7p m\u1EDDi c\u01B0\u1EDBi"), /*#__PURE__*/React.createElement(Monogram, {
      a: W.groom.initial,
      b: W.bride.initial,
      size: Math.round(Math.min(128, Math.max(88, (window.innerHeight || 800) * 0.15))),
      color: "var(--gold-300)",
      style: {
        margin: 'clamp(18px, 4vh, 36px) 0 clamp(14px, 3vh, 28px)',
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-regular) 52px/1.05 var(--font-script)',
        color: 'var(--ivory-50)'
      }
    }, W.groom.name), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-light) italic 22px/1 var(--font-serif)',
        color: 'var(--gold-200)',
        margin: '4px 0'
      }
    }, "&"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-regular) 52px/1.05 var(--font-script)',
        color: 'var(--ivory-50)'
      }
    }, W.bride.name), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-regular) 12px/1 var(--font-sans)',
        letterSpacing: 'var(--tracking-label)',
        color: 'var(--gold-100)',
        marginTop: 20
      }
    }, W.dateShort), /*#__PURE__*/React.createElement(Divider, {
      width: 200,
      color: "var(--gold-300)",
      style: {
        margin: 'clamp(20px, 4.5vh, 40px) auto clamp(14px, 2.5vh, 22px)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-light) italic 17px/1.5 var(--font-serif)',
        color: 'var(--gold-200)'
      }
    }, "Tr\xE2n tr\u1ECDng k\xEDnh m\u1EDDi"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-regular) 24px/1.3 var(--font-serif)',
        color: 'var(--ivory-50)',
        margin: '6px 0 clamp(20px, 3.5vh, 32px)'
      }
    }, W.guest), /*#__PURE__*/React.createElement(Button, {
      variant: "light",
      iconRight: "arrow-right",
      onClick: onOpen,
      style: {
        flexShrink: 0
      }
    }, "M\u1EDF thi\u1EC7p")));
  }
  window.Envelope = Envelope;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding_card/Envelope.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding_card/Events.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const {
    SectionHeading,
    Tabs,
    EventCard,
    PhotoFrame,
    Dialog,
    IconButton
  } = window.VietnamWeddingDesignSystem_e89e9f;
  const {
    useState
  } = React;
  function Events() {
    const W = window.WEDDING;
    const [side, setSide] = useState('trai');
    return /*#__PURE__*/React.createElement(Section, {
      id: "Events"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Wedding day",
      title: "L\u1EC5 c\u01B0\u1EDBi",
      subtitle: "Tr\xE2n tr\u1ECDng k\xEDnh m\u1EDDi qu\xFD kh\xE1ch \u0111\u1EBFn d\u1EF1 bu\u1ED5i l\u1EC5 chung vui c\xF9ng gia \u0111\xECnh ch\xFAng t\xF4i."
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 100
    }, /*#__PURE__*/React.createElement(Tabs, {
      items: [{
        value: 'trai',
        label: 'Nhà trai'
      }, {
        value: 'gai',
        label: 'Nhà gái'
      }],
      value: side,
      onChange: setSide,
      style: {
        margin: '40px auto 28px'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, W.events[side].map((e, i) => /*#__PURE__*/React.createElement(EventCard, _extends({
      key: side + i
    }, e, {
      tagTone: side === 'gai' ? 'blush' : 'red',
      cardVariant: i === 0 ? 'frame' : 'plain'
    }))))));
  }
  function Gallery() {
    const W = window.WEDDING;
    const [idx, setIdx] = useState(null);
    const shapes = [['arch', '3 / 4'], ['rect', '3 / 4'], ['rect', '4 / 5'], ['rect', '4 / 5'], ['rect', '3 / 4'], ['arch', '3 / 4']];
    const go = d => setIdx(i => (i + d + W.gallery.length) % W.gallery.length);
    return /*#__PURE__*/React.createElement(Section, {
      id: "Gallery",
      tint: true
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Our moments",
      title: "Kho\u1EA3nh kh\u1EAFc",
      ornament: false
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 100
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12,
        marginTop: 36
      }
    }, W.gallery.map((g, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: () => setIdx(i),
      style: {
        border: 'none',
        padding: 0,
        background: 'none',
        cursor: 'zoom-in',
        marginTop: i % 2 ? 28 : 0
      }
    }, /*#__PURE__*/React.createElement(PhotoFrame, {
      shape: shapes[i][0],
      ratio: shapes[i][1],
      placeholder: g
    }))))), /*#__PURE__*/React.createElement(Dialog, {
      open: idx !== null,
      onClose: () => setIdx(null),
      width: 440,
      title: idx !== null ? W.gallery[idx] : '',
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
        icon: "chevron-left",
        label: "\u1EA2nh tr\u01B0\u1EDBc",
        onClick: () => go(-1)
      }), /*#__PURE__*/React.createElement(IconButton, {
        icon: "chevron-right",
        label: "\u1EA2nh sau",
        onClick: () => go(1)
      }))
    }, /*#__PURE__*/React.createElement(PhotoFrame, {
      ratio: "4 / 5",
      placeholder: idx !== null ? W.gallery[idx] : ''
    })));
  }
  Object.assign(window, {
    Events,
    Gallery
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding_card/Events.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding_card/Kit.jsx
try { (() => {
(() => {
  const {
    useEffect,
    useRef,
    useState
  } = React;
  function Reveal({
    children,
    delay = 0,
    style
  }) {
    const ref = useRef(null);
    const [on, setOn] = useState(false);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      }, {
        threshold: 0.12
      });
      io.observe(el);
      return () => io.disconnect();
    }, []);
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      style: {
        opacity: on ? 1 : 0,
        transform: on ? 'none' : 'translateY(14px)',
        transition: `opacity var(--dur-reveal) var(--ease-soft) ${delay}ms, transform var(--dur-reveal) var(--ease-soft) ${delay}ms`,
        ...style
      }
    }, children);
  }
  function Section({
    children,
    tint = false,
    id,
    style
  }) {
    return /*#__PURE__*/React.createElement("section", {
      id: id,
      "data-screen-label": id,
      style: {
        padding: 'var(--space-9) var(--space-5)',
        background: tint ? 'var(--surface-tint)' : 'transparent',
        ...style
      }
    }, children);
  }
  const label = {
    font: 'var(--type-label)',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    color: 'var(--text-accent)'
  };
  Object.assign(window, {
    Reveal,
    Section,
    kitLabel: label
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding_card/Kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding_card/Rsvp.jsx
try { (() => {
(() => {
  const {
    SectionHeading,
    Card,
    Input,
    Select,
    RadioGroup,
    Button,
    Dialog,
    IconButton,
    Divider,
    Icon
  } = window.VietnamWeddingDesignSystem_e89e9f;
  const {
    useState
  } = React;
  function Rsvp({
    onToast
  }) {
    const [attend, setAttend] = useState('yes');
    const [name, setName] = useState('');
    const [err, setErr] = useState('');
    const [sent, setSent] = useState(false);
    const submit = e => {
      e.preventDefault();
      if (!name.trim()) {
        setErr('Vui lòng nhập họ tên');
        return;
      }
      setSent(true);
      onToast('Cảm ơn bạn đã xác nhận', 'success');
    };
    return /*#__PURE__*/React.createElement(Section, {
      id: "RSVP"
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "R.S.V.P",
      title: "X\xE1c nh\u1EADn tham d\u1EF1",
      subtitle: "Vui l\xF2ng ph\u1EA3n h\u1ED3i tr\u01B0\u1EDBc ng\xE0y 20.11.2026 \u0111\u1EC3 ch\xFAng t\xF4i chu\u1EA9n b\u1ECB chu \u0111\xE1o."
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 100
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "40px 28px",
      align: "left",
      style: {
        marginTop: 40
      }
    }, sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: '24px 0'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "heart",
      size: 28,
      color: "var(--blush-500)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-regular) 40px/1.1 var(--font-script)',
        color: 'var(--accent)',
        margin: '14px 0 8px'
      }
    }, "C\u1EA3m \u01A1n ", name.trim().split(' ').pop()), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--type-body)',
        color: 'var(--text-body)'
      }
    }, attend === 'yes' ? 'Hẹn gặp bạn trong ngày vui của chúng mình.' : 'Cảm ơn lời chúc của bạn. Chúng mình sẽ nhớ đến bạn trong ngày vui.'), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      style: {
        marginTop: 20
      },
      onClick: () => setSent(false)
    }, "S\u1EEDa ph\u1EA3n h\u1ED3i")) : /*#__PURE__*/React.createElement("form", {
      onSubmit: submit,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "H\u1ECD v\xE0 t\xEAn",
      placeholder: "Nguy\u1EC5n V\u0103n A",
      value: name,
      onChange: e => {
        setName(e.target.value);
        setErr('');
      },
      error: err
    }), /*#__PURE__*/React.createElement(RadioGroup, {
      variant: "choice",
      label: "B\u1EA1n s\u1EBD tham d\u1EF1 ch\u1EE9?",
      value: attend,
      onChange: setAttend,
      options: [{
        value: 'yes',
        label: 'Sẽ tham dự'
      }, {
        value: 'no',
        label: 'Rất tiếc, không thể'
      }]
    }), attend === 'yes' && /*#__PURE__*/React.createElement(Select, {
      label: "S\u1ED1 ng\u01B0\u1EDDi tham d\u1EF1",
      defaultValue: "1",
      options: [{
        value: '1',
        label: '1 người'
      }, {
        value: '2',
        label: '2 người'
      }, {
        value: '3',
        label: '3 người'
      }, {
        value: '4',
        label: '4 người trở lên'
      }]
    }), /*#__PURE__*/React.createElement(Input, {
      label: "L\u1EDDi ch\xFAc",
      multiline: true,
      rows: 3,
      placeholder: "G\u1EEDi l\u1EDDi ch\xFAc \u0111\u1EBFn c\xF4 d\xE2u ch\xFA r\u1EC3\u2026"
    }), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      fullWidth: true,
      iconRight: "send"
    }, "G\u1EEDi x\xE1c nh\u1EADn")))));
  }
  function GiftBox({
    onToast
  }) {
    const W = window.WEDDING;
    const [open, setOpen] = useState(null);
    const copy = g => {
      try {
        navigator.clipboard.writeText(g.number.replace(/\s/g, ''));
      } catch (e) {}
      onToast('Đã sao chép số tài khoản', 'success');
    };
    return /*#__PURE__*/React.createElement(Section, {
      id: "Gift",
      tint: true
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "With love",
      title: "H\u1ED9p m\u1EEBng c\u01B0\u1EDBi",
      subtitle: "N\u1EBFu kh\xF4ng th\u1EC3 \u0111\u1EBFn chung vui, qu\xFD kh\xE1ch c\xF3 th\u1EC3 g\u1EEDi l\u1EDDi ch\xFAc qua t\xE0i kho\u1EA3n d\u01B0\u1EDBi \u0111\xE2y."
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 100
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 12,
        marginTop: 40
      }
    }, W.gifts.map((g, i) => /*#__PURE__*/React.createElement(Card, {
      key: i,
      variant: "plain",
      padding: "28px 16px"
    }, /*#__PURE__*/React.createElement("div", {
      style: window.kitLabel
    }, g.who), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-regular) 20px/1.3 var(--font-serif)',
        color: 'var(--text-strong)',
        margin: '12px 0 18px'
      }
    }, g.bank), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      iconLeft: "gift",
      onClick: () => setOpen(g)
    }, "M\u1EEBng c\u01B0\u1EDBi"))))), /*#__PURE__*/React.createElement(Dialog, {
      open: !!open,
      onClose: () => setOpen(null),
      eyebrow: "With love",
      title: open ? `Mừng cưới ${open.who.toLowerCase()}` : ''
    }, open && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 180,
        height: 180,
        margin: '4px auto 20px',
        background: 'var(--ivory-100)',
        boxShadow: 'inset 0 0 0 var(--hairline) var(--line-hair)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        color: 'var(--accent)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "qr-code",
      size: 40
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        ...window.kitLabel,
        color: 'var(--text-muted)'
      }
    }, "M\xE3 QR")), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-label)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, open.bank), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        margin: '8px 0 4px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--weight-regular) 26px/1 var(--font-serif)',
        letterSpacing: '.04em',
        color: 'var(--text-strong)'
      }
    }, open.number), /*#__PURE__*/React.createElement(IconButton, {
      icon: "copy",
      label: "Sao ch\xE9p s\u1ED1 t\xE0i kho\u1EA3n",
      size: 36,
      onClick: () => copy(open)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-small)',
        letterSpacing: '.1em',
        color: 'var(--text-body)'
      }
    }, open.holder))));
  }
  Object.assign(window, {
    Rsvp,
    GiftBox
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding_card/Rsvp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding_card/Story.jsx
try { (() => {
(() => {
  const {
    PhotoFrame,
    Countdown,
    Divider,
    SongHy,
    Monogram
  } = window.VietnamWeddingDesignSystem_e89e9f;
  function Hero() {
    const W = window.WEDDING;
    return /*#__PURE__*/React.createElement(Section, {
      id: "Hero",
      style: {
        paddingTop: 'var(--space-8)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      style: window.kitLabel
    }, "Save the date"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-regular) 64px/1 var(--font-script)',
        color: 'var(--accent)',
        marginTop: 22
      }
    }, W.groom.name), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-light) italic 24px/1 var(--font-serif)',
        color: 'var(--text-muted)',
        margin: '6px 0'
      }
    }, "&"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-regular) 64px/1 var(--font-script)',
        color: 'var(--accent)'
      }
    }, W.bride.name)), /*#__PURE__*/React.createElement(Reveal, {
      delay: 150
    }, /*#__PURE__*/React.createElement(PhotoFrame, {
      shape: "arch",
      matted: true,
      width: 300,
      style: {
        margin: '40px auto 0'
      },
      placeholder: "\u1EA2nh c\u01B0\u1EDBi"
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 250
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-light) 30px/1 var(--font-serif)',
        letterSpacing: '.18em',
        color: 'var(--text-strong)',
        margin: '40px 0 28px'
      }
    }, W.dateShort), /*#__PURE__*/React.createElement(Countdown, {
      to: W.countdownTo
    })));
  }
  function Family({
    f
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1 1 0',
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...window.kitLabel,
        marginBottom: 8
      }
    }, f.label), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-regular) 18px/1.4 var(--font-serif)',
        color: 'var(--text-strong)'
      }
    }, f.father), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-regular) 18px/1.4 var(--font-serif)',
        color: 'var(--text-strong)'
      }
    }, f.mother), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--type-small)',
        color: 'var(--text-muted)',
        marginTop: 4
      }
    }, f.place));
  }
  function Person({
    role,
    full
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1 1 0',
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(PhotoFrame, {
      shape: "circle",
      matted: true,
      width: 150,
      placeholder: role
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...window.kitLabel,
        color: 'var(--text-muted)',
        marginTop: 6
      }
    }, role), /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-regular) 38px/1 var(--font-script)',
        color: 'var(--accent)'
      }
    }, full.split(' ').slice(-2).join(' ')));
  }
  function Families() {
    const W = window.WEDDING;
    return /*#__PURE__*/React.createElement(Section, {
      id: "Families",
      tint: true,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SongHy, {
      size: 40
    })), /*#__PURE__*/React.createElement(Reveal, {
      delay: 100
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 20,
        marginTop: 36
      }
    }, /*#__PURE__*/React.createElement(Family, {
      f: W.families.trai
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 0,
        borderLeft: 'var(--hairline) solid var(--line-hair)'
      }
    }), /*#__PURE__*/React.createElement(Family, {
      f: W.families.gai
    }))), /*#__PURE__*/React.createElement(Reveal, {
      delay: 150
    }, /*#__PURE__*/React.createElement(Divider, {
      width: 180,
      style: {
        margin: '48px auto 28px'
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--weight-light) 19px/1.65 var(--font-serif)',
        color: 'var(--text-body)',
        maxWidth: 360,
        margin: '0 auto'
      }
    }, "Tr\xE2n tr\u1ECDng b\xE1o tin l\u1EC5 th\xE0nh h\xF4n c\u1EE7a con ch\xFAng t\xF4i")), /*#__PURE__*/React.createElement(Reveal, {
      delay: 200
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 16,
        marginTop: 40
      }
    }, /*#__PURE__*/React.createElement(Person, {
      role: "Ch\xFA r\u1EC3",
      full: W.groom.full
    }), /*#__PURE__*/React.createElement(Person, {
      role: "C\xF4 d\xE2u",
      full: W.bride.full
    }))));
  }
  function Footer() {
    const W = window.WEDDING;
    return /*#__PURE__*/React.createElement("footer", {
      "data-screen-label": "Footer",
      style: {
        padding: 'var(--space-9) var(--space-5) var(--space-8)',
        textAlign: 'center',
        background: 'var(--surface-brand)'
      }
    }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--weight-regular) 56px/1 var(--font-script)',
        color: 'var(--ivory-50)'
      }
    }, "Thank you"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: 'var(--weight-light) italic 18px/1.65 var(--font-serif)',
        color: 'var(--gold-100)',
        maxWidth: 340,
        margin: '20px auto 36px'
      }
    }, "S\u1EF1 hi\u1EC7n di\u1EC7n c\u1EE7a qu\xFD kh\xE1ch l\xE0 ni\u1EC1m vinh h\u1EA1nh cho gia \u0111\xECnh ch\xFAng t\xF4i."), /*#__PURE__*/React.createElement(Monogram, {
      a: W.groom.initial,
      b: W.bride.initial,
      size: 72,
      color: "var(--gold-300)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        ...window.kitLabel,
        color: 'var(--gold-200)',
        marginTop: 20
      }
    }, W.groom.name, " & ", W.bride.name, " \xB7 ", W.dateShort)));
  }
  Object.assign(window, {
    Hero,
    Families,
    Footer
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding_card/Story.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wedding_card/data.js
try { (() => {
// Sample content for the wedding card UI kit. Replace with the real couple's details.
window.WEDDING = {
  groom: {
    name: 'Minh Khôi',
    full: 'Nguyễn Minh Khôi',
    initial: 'K'
  },
  bride: {
    name: 'Bảo Ngọc',
    full: 'Trần Bảo Ngọc',
    initial: 'N'
  },
  dateShort: '06 · 12 · 2026',
  countdownTo: '2026-12-06T10:00:00+07:00',
  guest: 'Anh Tuấn & Gia đình',
  families: {
    trai: {
      label: 'Nhà trai',
      father: 'Ông Nguyễn Văn Hùng',
      mother: 'Bà Lê Thị Mai',
      place: 'Ba Đình, Hà Nội'
    },
    gai: {
      label: 'Nhà gái',
      father: 'Ông Trần Quốc Bảo',
      mother: 'Bà Phạm Thu Hương',
      place: 'Tây Hồ, Hà Nội'
    }
  },
  events: {
    gai: [{
      tag: 'Nhà gái',
      title: 'Lễ Vu Quy',
      time: '08:30',
      weekday: 'Chủ nhật',
      day: '06',
      month: 'Tháng 12',
      year: '2026',
      lunar: 'Tức ngày 27 tháng 10 năm Bính Ngọ',
      venue: 'Tư gia nhà gái',
      address: '28 Đường Thụy Khuê, Tây Hồ, Hà Nội',
      mapHref: 'https://maps.google.com'
    }, {
      tag: 'Nhà gái',
      title: 'Tiệc cưới',
      time: '17:30',
      weekday: 'Thứ bảy',
      day: '05',
      month: 'Tháng 12',
      year: '2026',
      lunar: 'Tức ngày 26 tháng 10 năm Bính Ngọ',
      venue: 'Sảnh Ngọc Lan · Trung tâm Tiệc cưới Hoa Sen',
      address: '15 Lạc Long Quân, Tây Hồ, Hà Nội',
      mapHref: 'https://maps.google.com'
    }],
    trai: [{
      tag: 'Nhà trai',
      title: 'Lễ Thành Hôn',
      time: '10:00',
      weekday: 'Chủ nhật',
      day: '06',
      month: 'Tháng 12',
      year: '2026',
      lunar: 'Tức ngày 27 tháng 10 năm Bính Ngọ',
      venue: 'Tư gia nhà trai',
      address: '12 Phan Đình Phùng, Ba Đình, Hà Nội',
      mapHref: 'https://maps.google.com'
    }, {
      tag: 'Nhà trai',
      title: 'Tiệc cưới',
      time: '11:30',
      weekday: 'Chủ nhật',
      day: '06',
      month: 'Tháng 12',
      year: '2026',
      lunar: 'Tức ngày 27 tháng 10 năm Bính Ngọ',
      venue: 'Sảnh Bạch Hạc · Trung tâm Tiệc cưới Hoa Sen',
      address: '15 Lạc Long Quân, Tây Hồ, Hà Nội',
      mapHref: 'https://maps.google.com'
    }]
  },
  gifts: [{
    who: 'Chú rể',
    bank: 'Vietcombank',
    number: '0123 456 789',
    holder: 'NGUYEN MINH KHOI'
  }, {
    who: 'Cô dâu',
    bank: 'Techcombank',
    number: '1903 8888 6789',
    holder: 'TRAN BAO NGOC'
  }],
  gallery: ['Chân dung', 'Khoảnh khắc', 'Hà Nội mùa thu', 'Ngày cầu hôn', 'Đà Lạt', 'Hai chúng mình']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wedding_card/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FieldLabel = __ds_scope.FieldLabel;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Countdown = __ds_scope.Countdown;

__ds_ns.DateBlock = __ds_scope.DateBlock;

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.Monogram = __ds_scope.Monogram;

__ds_ns.SongHy = __ds_scope.SongHy;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.PhotoFrame = __ds_scope.PhotoFrame;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

})();
