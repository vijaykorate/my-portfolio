// Pointer-driven 3D tilt + spotlight helpers.
// Mutate the DOM node directly (no React re-render) for smooth 60fps motion.

export function handleTilt(e, { max = 8, lift = 6 } = {}) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width;
  const py = (e.clientY - r.top) / r.height;
  el.style.setProperty("--mx", `${px * 100}%`);
  el.style.setProperty("--my", `${py * 100}%`);
  el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${
    (px - 0.5) * max
  }deg) translateY(-${lift}px)`;
}

export function resetTilt(e) {
  e.currentTarget.style.transform = "";
}

// Spotlight only — moves the glow without tilting.
export function handleSpotlight(e) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
  el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
}
