/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-properties */
/* eslint-disable no-param-reassign */
/* eslint-disable no-void */
/* eslint-disable no-cond-assign */
/* eslint-disable no-return-assign */
// t: current time, b: beginning value, _c: final value, d: total duration
export function linear(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  return (c * t) / d + b
}
export function easeInQuad(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  return c * (t /= d) * t + b
}
export function easeOutQuad(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  return -c * (t /= d) * (t - 2) + b
}
export function easeInOutQuad(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  if ((t /= d / 2) < 1) {
    return (c / 2) * t * t + b
  }
  return (-c / 2) * (--t * (t - 2) - 1) + b
}
export function easeInCubic(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  return c * (t /= d) * t * t + b
}
export function easeOutCubic(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  return c * ((t = t / d - 1) * t * t + 1) + b
}
export function easeInOutCubic(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  if ((t /= d / 2) < 1) {
    return (c / 2) * t * t * t + b
  }
  return (c / 2) * ((t -= 2) * t * t + 2) + b
}
export function easeInQuart(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  return c * (t /= d) * t * t * t + b
}
export function easeOutQuart(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  return -c * ((t = t / d - 1) * t * t * t - 1) + b
}
export function easeInOutQuart(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  if ((t /= d / 2) < 1) {
    return (c / 2) * t * t * t * t + b
  }
  return (-c / 2) * ((t -= 2) * t * t * t - 2) + b
}
export function easeInQuint(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  return c * (t /= d) * t * t * t * t + b
}
export function easeOutQuint(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b
}
export function easeInOutQuint(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  if ((t /= d / 2) < 1) {
    return (c / 2) * t * t * t * t * t + b
  }
  return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b
}
export function easeInSine(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b
}
export function easeOutSine(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  return c * Math.sin((t / d) * (Math.PI / 2)) + b
}
export function easeInOutSine(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b
}
export function easeInExpo(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
}
export function easeOutExpo(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b
}
export function easeInOutExpo(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  if (t === 0) {
    return b
  }
  if (t === d) {
    return b + c
  }
  if ((t /= d / 2) < 1) {
    return (c / 2) * Math.pow(2, 10 * (t - 1)) + b
  }
  return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b
}
export function easeInCirc(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
}
export function easeOutCirc(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
}
export function easeInOutCirc(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  if ((t /= d / 2) < 1) {
    return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b
  }
  return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
}
export function easeInElastic(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  let a: number
  let p: number
  let s: number
  s = 1.70158
  p = 0
  a = c
  if (t === 0) {
    return b
  }
  if ((t /= d) === 1) {
    return b + c
  }
  if (!p) {
    p = d * 0.3
  }
  if (a < Math.abs(c)) {
    a = c
    s = p / 4
  } else {
    s = (p / (2 * Math.PI)) * Math.asin(c / a)
  }
  return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b
}
export function easeOutElastic(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  let a: number
  let p: number
  let s: number
  s = 1.70158
  p = 0
  a = c
  if (t === 0) {
    return b
  }
  if ((t /= d) === 1) {
    return b + c
  }
  if (!p) {
    p = d * 0.3
  }
  if (a < Math.abs(c)) {
    a = c
    s = p / 4
  } else {
    s = (p / (2 * Math.PI)) * Math.asin(c / a)
  }
  return a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b
}
export function easeInOutElastic(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  let a: number
  let p: number
  let s: number
  s = 1.70158
  p = 0
  a = c
  if (t === 0) {
    return b
  }
  if ((t /= d / 2) === 2) {
    return b + c
  }
  if (!p) {
    p = d * (0.3 * 1.5)
  }
  if (a < Math.abs(c)) {
    a = c
    s = p / 4
  } else {
    s = (p / (2 * Math.PI)) * Math.asin(c / a)
  }
  if (t < 1) {
    return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b
  }
  return a * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) * 0.5 + c + b
}
export function easeInBack(t: number, b: number, _c: number, d: number, s: number) {
  const c = _c - b
  if (s === void 0) {
    s = 1.70158
  }
  return c * (t /= d) * t * ((s + 1) * t - s) + b
}
export function easeOutBack(t: number, b: number, _c: number, d: number, s: number) {
  const c = _c - b
  if (s === void 0) {
    s = 1.70158
  }
  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
}
export function easeInOutBack(t: number, b: number, _c: number, d: number, s: number) {
  const c = _c - b
  if (s === void 0) {
    s = 1.70158
  }
  if ((t /= d / 2) < 1) {
    return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b
  }
  return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
}
export function easeOutBounce(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  if ((t /= d) < 1 / 2.75) {
    return c * (7.5625 * t * t) + b
  }
  if (t < 2 / 2.75) {
    return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b
  }
  if (t < 2.5 / 2.75) {
    return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b
  }
  return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b
}
export function easeInBounce(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  const v = easeOutBounce(d - t, 0, c, d)
  return c - v + b
}
export function easeInOutBounce(t: number, b: number, _c: number, d: number) {
  const c = _c - b
  let v: number
  if (t < d / 2) {
    v = easeInBounce(t * 2, 0, c, d)
    return v * 0.5 + b
  }
  v = easeOutBounce(t * 2 - d, 0, c, d)
  return v * 0.5 + c * 0.5 + b
}
