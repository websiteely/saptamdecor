# Saptam Decor: 3D & Hero Motion Visual Assets Production Guide

This guide provides ready-to-use, production-grade prompts and technical art direction for creating the core visual assets required for the luxury scroll-motion experience.

---

## 1. Asset 01: The Hero 3D Exploded Layer Board (Scroll Anatomy)

### Visual Concept
As the user scrolls down, an ultra-luxurious pre-laminated architectural board floats in mid-air in an ethereal dark-luxury studio. The board gracefully deconstructs along the Z-axis into 4 floating, illuminated layers:
1. **Layer 1 (Top)**: Ultra-thin, crystal-clear protective melamine overlay (scratch & UV shield, subtle glossy light sheen).
2. **Layer 2 (Decor Foil)**: High-definition architectural woodgrain decor paper (e.g., *5020 Naigra Oak Dark* or rich Italian smoked walnut).
3. **Layer 3 (Core)**: Ultra-dense compressed bagasse & agro-wood fiber core (>1000 kg/m³), showing cross-sectional fibrous density, resin bond, and precision bevelled edge.
4. **Layer 4 (Base)**: High-performance balancing barrier film (matte texture, moisture-proof underlay).

---

### A. Midjourney v6 / Flux.1 Pro Prompt (For Static Keyframes & Concept Art)
```text
Commercial 3D exploded render of a luxury architectural engineered wood board, deconstructed into 4 distinct floating parallel layers hovering along the Z-axis in mid-air: top layer is a translucent crystalline scratch-resistant protective overlay catching subtle soft reflections; second layer is an exquisite dark architectural oak woodgrain decor sheet (Naigra Oak); third layer is a dense, ultra-compressed fibrous agro-wood core slab showing rich cross-sectional fibrous texture and high-density material thickness; bottom layer is a sleek matte balancing moisture barrier sheet. Sleek luxury dark studio setting, deep emerald-green and warm charcoal gradient background (#0A1913), cinematic soft studio rim lighting, warm golden hour accent edge glow, raytraced ambient occlusion, photorealistic Octane Render, 8k resolution, architectural catalog quality, macro lens depth of field --ar 16:9 --style raw --v 6.1
```

---

### B. Runway Gen-3 Alpha / Luma Dream Machine / Sora Prompt (For Scroll-Scrubbed Video)
```text
Slow-motion cinematic 3D product commercial: A single monolithic luxury pre-laminated wood board slowly expands and separates into four floating illuminated layers in mid-air, moving smoothly away from each other on the Z-axis. Top layer is an ultra-sheer transparent protective coating, followed by a dark fluted oak veneer foil, revealing an ultra-dense solid fibrous core slab, and a sleek matte base barrier. Studio lighting with warm golden rim light and subtle floating micro dust motes in dark emerald ambient atmosphere, smooth mechanical precision, high-end Apple hardware product reveal style, 60fps ultra smooth, 4k.
```

---

### C. Blender / Cinema 4D + Octane / Redshift Technical Specs (For WebGL / 3D Artists)
* **Geometry**: 
  - Top Film: 0.15 mm thickness, slight edge chamfer (0.05 mm).
  - Decor Sheet: 0.2 mm thickness with 4K Diffuse & Normal maps.
  - Core Board: 18 mm thickness, procedural Voronoi fiber displacement on edges to represent compressed sugarcane bagasse/wood fibers.
  - Base Film: 0.2 mm thickness.
* **Camera Animation**: 
  - Focal length: 85 mm (flattens perspective for architectural elegance).
  - Orbit angle: 35° elevation, 25° lateral tilt.
  - Explode Distance: Layers separate linearly along the local normal axis from 0 mm to 120 mm across frames 0 to 120.
* **Lighting**:
  - Key Light: Soft area box (3200 K, warm golden-white) angled at 45°.
  - Rim/Back Light: Crisp cool-white (5600 K) along the top beveled edge.
  - Fill: Very low intensity deep forest green HDRI (0.1 strength) to tint ambient shadows.

---

## 2. Asset 02: SD Boilo — Boiling Water & Moisture Shield (Hydrophobic Scroll)

### Visual Concept
Demonstrating the boiling-water-proof (BWP) nature of SD Boilo. As the user reaches this section, boiling water drops splash and bead into perfect spheres on the board surface without penetrating or causing any swelling, illuminated by warm backlighting.

### A. Midjourney v6 / Flux.1 Prompt
```text
Extreme macro commercial photography of boiling water droplets resting on a luxury waterproof engineered wood surface (SD Boilo board), water droplets form perfect hydrophobic spherical beads on the dark textured woodgrain finish without absorbing, subtle rising steam wisps, crystal clear water reflections, dramatic high-contrast side lighting highlighting surface tension, rich dark slate and warm teak wood background, ultra-sharp focus, Hasselblad 100mm macro lens, 8k resolution, high-end interior material advertisement --ar 16:9 --style raw --v 6.1
```

### B. Runway Gen-3 Alpha / Kling Prompt (Video Loop)
```text
Ultra slow motion 1000fps macro shot: Crystal clear boiling water droplets fall onto a luxury dark wood textured engineered panel and immediately bounce and bead into perfect spherical drops, repelling effortlessly across the surface without soaking in. Soft elegant steam curling upwards against a moody dark studio background with warm bronze edge lighting, ultra realistic fluid dynamics, 8k resolution, cinematic commercial product cinematography.
```

---

## 3. Asset 03: Fire & Heat Resistance Shield (SDHDMR / Boilo)

### Visual Concept
A scroll-triggered sequence showcasing the fire-retardant standard. A wave of glowing thermal embers and soft blue-orange flame brushes across the board surface, leaving the finish pristine, unburned, and intact.

### A. Midjourney v6 / Flux.1 Prompt
```text
Cinematic architectural product photography, luxury fire-retardant engineered wood board tested against heat, soft controlled flame licking harmlessly across a dark matte oak panel with zero scorch marks, glowing ember particles floating softly in the air, dramatic rim light, moody dark luxury aesthetic, golden sparks, shot on Arri Alexa, masterclass lighting, photorealistic material science visualization --ar 16:9 --v 6.1
```

### B. Runway Gen-3 / Sora Video Prompt
```text
Cinematic slow motion: A gentle stream of orange and blue flame sweeps gracefully across the surface of a dark architectural wood board. The surface glows warmly but remains completely unharmed with no burn marks or smoke damage. Soft floating embers drift in the dark studio atmosphere with deep emerald shadows and warm golden reflections, premium tech commercial aesthetic, ultra smooth 60fps.
```

---

## 4. Asset 04: Macro Tactile Woodgrain Swatch Renders (5000 & 4000 Series)

### Visual Concept
Interactive swatch cards require tactile, high-texture macro close-ups where you can see the natural pores, wood ticking, and matte-suede sheen.

### A. Midjourney v6 / Flux.1 Prompt (Naigra Oak Dark - 5020)
```text
Extreme close-up macro texture photograph of luxury architectural wood laminate, 5020 Naigra Oak Dark, intricate natural deep woodgrain pores, synchronized pore tactile texture, matte suede finish, grazing low-angle raking light highlighting the surface relief and tactile ridges, rich dark chocolate brown and warm walnut undertones, professional interior design material catalog, 8k resolution, razor sharp optical clarity, shot with 100mm f/2.8 Macro lens --ar 1:1 --v 6.1
```

### B. Midjourney v6 / Flux.1 Prompt (Solid Contemporary Matt - 1004 Red & 1000 Series)
```text
Minimalist macro texture of a premium soft-touch architectural matte surface, vibrant deep vermilion burgundy red (1004 series), velvety anti-fingerprint silky texture, subtle micro-grain diffused light falloff, contemporary Italian furniture finish, studio softbox illumination, clean ultra-high resolution --ar 1:1 --v 6.1
```

---

## 5. Asset 05: Architectural Spatial Hero (The Finished Space)

### Visual Concept
The emotional climax of the scroll experience. A wide, tranquil, multi-million-dollar penthouse living room and open modular kitchen made entirely with Saptam Decor panels (fluted wall paneling, floating credenza, kitchen island with concealed storage).

### A. Midjourney v6 / Flux.1 Prompt
```text
Breathtaking architectural interior photography of a multi-million dollar modern minimalist luxury residence, featuring bespoke wall paneling crafted from dark fluted oak boards, seamless floor-to-ceiling cabinetry, minimalist kitchen island with matching wood and matte marble waterfall counter. Recessed warm 2700K LED linear cove lighting, oversized floor-to-ceiling glass windows overlooking a serene misty pine forest, designer minimalist furniture, calm sophisticated atmosphere, Architectural Digest cover quality, Hasselblad H6D-100c, balanced natural daylight and warm accent lighting --ar 16:9 --style raw --v 6.1
```

---

## 6. How to Use These Assets in the Website Code

Once generated, these assets are integrated into the web experience via two primary techniques:

1. **Scrubbable Frame Sequences (The "Apple Product Page" canvas technique)**:
   - Export 60 to 90 JPEG/WebP frames from the 3D animation (e.g., `frame-001.webp` to `frame-090.webp`).
   - Draw them onto an HTML `<canvas>` synchronized to scroll position using **GSAP ScrollTrigger**:
     ```javascript
     gsap.to(boardAnimation, {
       frame: totalFrames - 1,
       snap: "frame",
       ease: "none",
       scrollTrigger: {
         scrub: 0.5,
         trigger: "#hero-scroll-container",
         start: "top top",
         end: "+=3000"
       },
       onUpdate: renderCanvasFrame
     });
     ```
2. **Interactive 3D WebGL (Three.js / React Three Fiber)**:
   - Export a lightweight `.glb` model of the 4 board layers.
   - Use scroll position to interpolate layer offsets: `layer.position.z = scrollProgress * 0.15`.
