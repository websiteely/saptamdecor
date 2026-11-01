# Google Flow: Step-by-Step Production Guide for Saptam Decor Motion Assets

Google Flow (powered by **Google Veo** and **Gemini**) is ideal for generating cinematic 4K video clips, fluid animations, and exploded-layer reveals for Saptam Decor's scroll-motion website.

---

## 1. Access & Initial Project Setup

1. **Navigate to**: [flow.google](https://flow.google) (or Google Labs VideoFX).
2. **Sign In**: Use your Google account.
3. **Create New Project**: Click **New Video** / **New Project**.
4. **Canvas Settings**:
   - **Aspect Ratio**: Select **16:9 Landscape** (standard for desktop website scroll view).
   - **Resolution**: Set to **1080p** or **4K** (highest available).
   - **Model**: Ensure **Veo** is selected.

---

## 2. Step-by-Step Workflow: Creating the Core Assets

### Workflow A: The Hero 3D Exploded Layer Board (Recommended: Image-to-Video)

Because you already have the high-definition concept render generated in your workspace:
> **Source File**: `saptamdecor/assets/saptam_exploded_board.jpg`

1. In Google Flow, choose **Image-to-Video** (I2V) mode.
2. **Upload** `saptam_exploded_board.jpg`.
3. In the prompt field, instruct Veo on how the layers should move:
   ```text
   Cinematic product animation starting from this 3D board: The four floating parallel layers gently drift further apart along the vertical Z-axis with smooth, mechanical precision. The transparent top layer shimmers with subtle reflections, while the warm golden rim light slowly travels across the bevelled edges of the dark oak grain and the compressed fiber core. Slow subtle camera orbit around the layers, locked focus on the fibrous core texture, ultra slow-motion, 60fps luxury hardware reveal style.
   ```
4. **Camera Controls** (if available in interface):
   - **Motion**: Subtle Push In or Slight Orbit (3° to 5°).
   - **Speed**: Very Slow / Gentle.
5. Click **Generate**.

---

### Workflow B: SD Boilo Boiling Water Droplets (Text-to-Video)

1. Select **Text-to-Video**.
2. Paste this prompt:
   ```text
   High-speed macro 1000fps cinematic video: Crystal clear boiling water droplets fall onto a luxury dark matte oak engineered panel (SD Boilo). The water droplets bounce and bead into perfect spherical drops on the surface, repelling effortlessly across the textured wood grain without soaking in. Soft elegant steam wisps curling upward in a dark luxury studio with warm bronze rim lighting, photorealistic fluid dynamics, 4k.
   ```
3. Click **Generate**.

---

### Workflow C: Fire & Heat Thermal Shield (Text-to-Video)

1. Select **Text-to-Video**.
2. Paste this prompt:
   ```text
   Cinematic slow-motion product demonstration: A soft, controlled blue and orange flame sweeps smoothly across the surface of a dark architectural wood board. The surface warms with a subtle golden glow but remains completely unharmed with no burn marks, smoke, or scorch damage. Floating ember sparks drift in the dark luxury atmosphere with emerald green ambient shadows, 60fps.
   ```
3. Click **Generate**.

---

### Workflow D: Penthouse Architectural Space (Text-to-Video)

1. Select **Text-to-Video**.
2. Paste this prompt:
   ```text
   Slow cinematic camera glide through an ultra-luxurious modern penthouse living space featuring floor-to-ceiling dark fluted oak wall paneling and seamless kitchen cabinetry. Soft warm 2700K ambient cove lighting casting elegant highlights across the wood surfaces. Oversized glass windows with a misty forest view outside, calm and opulent mood, slow gimbal push forward, 4k.
   ```
3. Click **Generate**.

---

## 3. How to Refine Generations in Google Flow

If a generation is not 100% what you want on the first attempt, use these proven refinement tactics:

| Issue | How to Refine in Prompt |
| :--- | :--- |
| **Motion is too violent or warped** | Add: `rigid mechanical movement, no organic warping, minimal camera shake, slow floating drift`. |
| **Layers blend into each other** | Add: `keep distinct separation between layers, clear gaps between floating sheets, high structural definition`. |
| **Lighting feels too flat / generic** | Add: `moody low-key studio lighting, dramatic golden hour edge rim light, deep dark emerald ambient shadows (#0A1913)`. |
| **Pacing is too fast for scrolling** | Add: `ultra slow motion, 0.5x speed, smooth cinematic glide, locked camera`. |

### Using Google Flow's "Extend" Feature:
- If a 4-second clip ends before the motion completes, click **Extend** on the clip timeline to generate the next 4 seconds maintaining consistent lighting and materials.

---

## 4. Converting Google Flow Videos into Website Scroll Frames

When you download your preferred `.mp4` video from Google Flow, save it into `saptamdecor/assets/hero_motion.mp4`.

You can extract it into a scrollable WebP frame sequence with this Python command:

```bash
python3 -c "
import imageio
from PIL import Image
import os

video_path = 'assets/hero_motion.mp4'
output_dir = 'assets/sequence'
os.makedirs(output_dir, exist_ok=True)

reader = imageio.get_reader(video_path)
for i, frame in enumerate(reader):
    img = Image.fromarray(frame)
    # Save as high-quality lightweight WebP
    img.save(f'{output_dir}/frame_{i:03d}.webp', 'WEBP', quality=85)
print(f'Extracted {i+1} frames into {output_dir}/')
"
```

These frames are then instantly ready for the GSAP ScrollTrigger canvas scrub!
