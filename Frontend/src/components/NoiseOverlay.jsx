// ============================
// NoiseOverlay
// ============================
// PURPOSE: Adds a subtle film-grain / paper-texture effect over the entire page.
//
// HOW IT WORKS:
//   1. A fixed <div> covers the full viewport (inset-0)
//   2. Inside, an SVG uses <feTurbulence> to generate procedural noise
//   3. The <rect> fills 100% and applies that noise as a filter
//   4. Very low opacity (0.035) so it's barely visible — just enough to feel "textured"
//   5. pointer-events-none so it doesn't block clicks
//   6. z-[100] so it sits on top of everything visually
//
// KEY CONCEPTS:
//   - <feTurbulence>: An SVG filter that generates Perlin noise or fractal noise
//     - type="fractalNoise": smoother, cloud-like pattern (vs "turbulence" which is harsher)
//     - baseFrequency: how "zoomed in" the noise is (higher = finer grain)
//     - numOctaves: how many layers of detail (more = richer texture)
//     - stitchTiles="stitch": makes the pattern tile seamlessly

export default function NoiseOverlay() {
  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        pointer-events-none
        opacity-[0.035]
        contrast-150
        brightness-100
      "
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
