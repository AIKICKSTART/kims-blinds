# Kim's Blinds Codex Image Generation Targets

Use these still-image prompts for replacement web assets, service-card images, transition plates and video keyframes. Keep every output photorealistic, text-free and aligned to Kim's blue, orange, chrome and charcoal palette.

Primary references:

- Current public assets: `public/brand/kims/*`
- Captured source images: `contents/kimsblinds/images/*`
- Logo reference: `contents/kimsblinds/images/kims-blinds-logo-reference.png`
- Better roller-blind room reference: `contents/kimsblinds/images/light-filter-roller-blinds-living-85453f4d.jpg`

Current implementation status:

- Active website assets are in `public/brand/kims/generated/`.
- Final target filenames now exist and are wired into the product-card map where product-correct.
- Some final targets are source-enhanced Kim's photography rather than fresh native image-generation outputs; keep the source manifest honest.
- `local-hero-product-showroom.webp` has been replaced with a native generated showroom wall candidate using Kim's blue, orange, charcoal and chrome palette.
- Keep these prompts as the next native Codex/Omni generation brief for replacing source-enhanced fallbacks with stronger motion-ready originals.

## Global Still Negative Prompt

```text
No fake text, no invented phone numbers, no unreadable signage, no warped blinds, no distorted mesh, no impossible window geometry, no people posing to camera, no AI-looking hands, no clutter, no purple palette, no beige monochrome grading, no over-dark luxury render, no cartoon or illustration style, no fake brand logos.
```

## Global Photography Direction

```text
Photorealistic Australian coastal home photography, clean real-estate editorial lighting, practical premium installation detail, natural daylight, crisp product geometry, subtle Kim's Blinds cues through electric blue reflections, warm orange sunlight and charcoal/chrome edges only. Use realistic lens perspective and leave clean negative space for website copy where requested.
```

## Global Output Specs

- Service card stills: 1600 x 1067 WebP, 3:2 crop, product centered with 10% safe area on all sides.
- Website hero stills: 1920 x 1080 WebP, 16:9 crop, leave headline-safe negative space on the requested side.
- Detail stills: 1600 x 1200 WebP, 4:3 crop, product texture remains sharp at desktop card size.
- Transition plates: 1920 x 1080 WebP, 16:9 crop, abstract only, no readable marks.
- Reference images are product/layout references only; do not copy text, logos, watermarks, people or exact rooms unless explicitly requested.

## Global Omni Video Fields

Use these fields when turning any still target into Google Omni-style video prompts.

```text
Duration: 6 to 8 seconds.
Format: 16:9, 4K-ready, photorealistic, no text overlays.
Camera move: slow controlled dolly, slider, parallax or push-in only; no fast spins or handheld wobble.
First frame: stable wide/readable product view matching the website crop.
Last frame: resolves to a clean hero/card composition with safe negative space for UI copy.
Motion constraints: blinds, panels, mesh and awnings must keep straight geometry; fabric can move subtly from airflow only where realistic.
Transition behavior: suitable for crossfade or masked wipe into the matching still asset; no hard cuts, no logo reveal unless using the supplied full Kim's Blinds logo as a separate overlay in the website, not generated into footage.
Forbidden: invented text, fake signage, fake phone numbers, fake logos, distorted hardware, impossible tracks, warped mesh, people posing to camera.
```

## 1. Homepage Roller-Blind Hero

Target output: `public/brand/kims/generated/homepage-roller-blind-hero.webp`

Still spec: 1920 x 1080, 16:9 hero, headline-safe space on the left.

Omni motion: 7 second slow left-to-right slider move across the living room, sunlight gently shifting through the roller fabric, ending on a stable wide hero frame with the blind geometry perfectly straight.

```text
Photorealistic Australian coastal living room with custom light-filter roller blinds on tall windows, warm morning sunlight filtering through textured fabric, clean white walls, timber floor, premium but practical family-home styling, subtle electric-blue reflection on a chrome window pull and warm orange sunrise edge light, no people, no text. Shot on full-frame camera, 28mm lens, f/5.6, ISO 100, natural daylight, wide 16:9 website hero composition with clean negative space on the left for headline, crisp vertical blind geometry, realistic fabric translucency.
```

Reference note: use `light-filter-roller-blinds-living-85453f4d.jpg` for real room feel. Current `hero-roller-blinds.webp` is usable, but over-reused across blind routes.

## 2. Generic Local Hero Replacement

Target output: `public/brand/kims/generated/local-hero-product-showroom.webp`

Still spec: 1920 x 1080, 16:9 hero/card crop, product samples readable but not busy.

Omni motion: 6 second subtle push-in over the showroom sample wall with shallow parallax across fabric, slats and mesh; finish on a clean, calm product-detail frame with no signage.

```text
Photorealistic close editorial view of a Kim's Blinds-style showroom product wall without visible signage or text: roller blind fabric, venetian slats, curtain fabric and mesh screen samples arranged cleanly with charcoal metal edges, electric-blue accent reflection and warm orange highlight, premium local trade showroom feel. Shot on 35mm lens, f/4, soft window light from the right, shallow but readable depth of field, wide 16:9 crop with calm background texture, no people, no text.
```

Use this to avoid every internal/local page reusing security-door imagery.

## 3. Security Doors And Windows

Target output: `public/brand/kims/generated/security-doors-windows-hero.webp`

Still spec: 1920 x 1080, 16:9 service hero, door and adjacent window screen both visible.

Current status: replaced with native Codex-generated source `C:/Users/verri/.codex/generated_images/019ef4b0-ec87-7e80-90e5-f6ec118cc324/ig_0f846055030b3d94016a3b29f4f67c81918919456f9db14922.png`, exported to WebP at 1920 x 1080. The current still is approved for the security service hero because the mesh, lock, frame and bottom track read clearly.

Omni motion: 7 second slow dolly from the entry path toward the mesh door, with a tiny glint across the powder-coated frame; end on a trustworthy installation-wide frame, not a crime-scene mood.

```text
Premium black mesh security screen door and adjacent security window screen installed on a bright modern Australian coastal home entry, crisp mesh detail, perfectly straight powder-coated frame alignment, clean handle hardware, timber threshold and white exterior finishes, practical family-home trust rather than crime mood, subtle electric-blue chrome highlight along the frame and warm orange sunlight on the wall, no text, no people. Shot on 35mm lens, f/5.6, polarised daylight, three-quarter angle showing both door and window, photorealistic service page hero.
```

Reference note: use the current WebP as the visual reference. Any replacement must keep the security mesh, lock hardware, bottom track and charcoal frame at least as readable as the current approved asset.

## 4. Security Screen Detail

Target output: `public/brand/kims/generated/security-mesh-detail.webp`

Still spec: 1600 x 1200, 4:3 detail crop, mesh readable without moire.

Omni motion: 6 second macro rack-focus from frame edge to mesh texture, ending with patio light softly visible beyond the screen.

```text
Macro-to-context still of black security mesh in a powder-coated frame, fine mesh texture sharply resolved with a softly visible bright patio beyond, clean mitred frame corner, subtle chrome screw detail, electric-blue glint on frame edge, warm outdoor light, no text, no people. Shot on 85mm macro lens, f/8, high-detail product photography, realistic mesh pattern with no moire distortion.
```

Use for security screen cards, proof modules and close-up hover states.

## 5. Vision Blinds

Target output: `public/brand/kims/generated/vision-blinds-living-room.webp`

Still spec: 1600 x 1067, 3:2 service-card crop, horizontal zebra bands must stay parallel and evenly spaced.

Omni motion: 6 second slow push-in while the dual-layer bands subtly align from open privacy to softer filtered light; no visible mechanism mistakes.

```text
Modern living room with dual-layer zebra vision blinds aligned cleanly across a wide window, alternating sheer and opaque bands creating controlled privacy, soft coastal daylight, clean sofa edge and timber floor, subtle electric-blue reflection in window glass and warm orange side light, no text, no people. Shot on 35mm lens, f/5, straight-on architectural composition, crisp horizontal band geometry, photorealistic. Not roller blinds, not venetian slats, not vertical blinds, not curtains.
```

The current route now uses a distinct captured shade asset; generate this zebra-vision slot before final polish for product-perfect accuracy.

## 6. Panel Glides

Target output: `public/brand/kims/generated/panel-glides-large-door.webp`

Still spec: 1600 x 1067, 3:2 service-card crop, broad vertical panels and top track must be visible.

Omni motion: 7 second slow parallax slide parallel to the glass door while one broad panel shifts slightly along the track; finish with panels overlapped neatly and no fabric distortion.

```text
Large sliding glass door with true panel glide blinds: broad vertical fabric panels hanging from a clean ceiling track, panels partly overlapped and aligned across the opening, modern Illawarra apartment interior, filtered daylight and controlled privacy, minimal decor, outdoor balcony softly visible, no text, no people. Shot on 28mm lens, f/5.6, straight architectural perspective, wide service-card composition, crisp vertical panels. Not honeycomb, not cellular, not pleated, not venetian slats, not narrow vertical blinds.
```

The current route now uses a captured panel-track product image; replace it with this generated slot before final polish for a more premium room scene.

## 7. Curtains

Target output: `public/brand/kims/generated/curtains-soft-track.webp`

Still spec: 1600 x 1067, 3:2 crop, curtain folds readable across desktop cards.

Omni motion: 6 second slow push across sheer fabric with very subtle airflow; finish with the track and layered curtain detail readable.

```text
Elegant sheer and block-out curtains beside a large sliding door in an Australian coastal home, layered fabric with visible soft folds, discreet chrome curtain track, warm afternoon light, subtle electric-blue reflected sky tone on glass, calm premium but practical room, no text, no people. Shot on 50mm lens, f/4, natural window light, photorealistic fabric detail and clean vertical drape.
```

## 8. Plantation Shutters

Target output: `public/brand/kims/generated/plantation-shutters-light-control.webp`

Still spec: 1600 x 1067, 3:2 crop, louvre spacing and frame rails accurate.

Omni motion: 6 second gentle tilt/push-in as sunlight lines shift across the floor; shutter blades remain mechanically consistent and straight.

```text
Bright kitchen or living room with white plantation shutters, blades partly open with clean sunlight lines across timber floor and benchtop, accurate louvre spacing and frame rails, premium practical family-home interior, subtle blue-white reflected daylight and a warm orange sun edge, no text, no people. Shot on 35mm lens, f/5.6, architectural interior photography, straight geometry, photorealistic.
```

## 9. Awnings And Outdoor Shade

Target output: `public/brand/kims/generated/folding-arm-awning-patio.webp`

Still spec: 1600 x 1067, 3:2 exterior crop, articulated arms and fabric tension readable.

Omni motion: 8 second slow exterior slider move under the awning edge with soft shade movement; awning remains fully installed and structurally accurate.

```text
Modern coastal patio with folding arm awning extended over an outdoor dining area, clean white facade, blue sky, warm orange sunlight softened into shade, accurate articulated awning arms, straight fabric tension, practical installation detail, no branding text, no people. Shot on 28mm lens, f/8, bright daylight, real-estate exterior photography, wide service-card composition.
```

## 10. Fly Screens

Target output: `public/brand/kims/generated/fly-screen-airflow-patio.webp`

Still spec: 1600 x 1067, 3:2 crop, mesh and track detail clear without moire.

Omni motion: 6 second rack-focus from mesh track to bright patio beyond, with only a slight curtain movement suggesting airflow.

```text
Fine mesh fly screen sliding door on a sunny family patio, crisp mesh and track detail in the foreground with bright backyard softly visible beyond, clean installation, airflow suggested by a light curtain inside, subtle electric-blue edge reflection and warm outdoor sunlight, no insects in closeup, no text, no people. Shot on 50mm lens, f/5.6, realistic mesh and track geometry, photorealistic.
```

## 11. Brand Transition Plate

Target output: `public/brand/kims/generated/kims-brand-transition-plate.webp`

Still spec: 1920 x 1080, 16:9 transition plate, no readable logo or text.

Omni motion: 6 second abstract chrome/blue/orange light sweep suitable for masking between website sections; no generated words, no generated logo, no spinning emblem.

```text
Abstract premium background inspired by the Kim's Blinds logo colours only: glossy black chrome strokes, electric blue lower glow, warm orange sun streaks, brushed metal reflections, soft charcoal vertical texture, shallow depth of field, no words, no logo, no readable marks, seamless website transition plate, high contrast but elegant.
```

## Replacement Priority

1. `panel-glides.webp` because the current visual reads as the wrong product.
2. `vision-blinds` because the route currently reuses roller blind imagery.
3. `homepage-roller-blind-hero` for a stronger first impression.
4. `security-mesh-detail` for the current `/services/security-doors` close-up polish pass.
5. `local-hero-product-showroom` only if the current showroom wall needs a second motion-friendly variant.
