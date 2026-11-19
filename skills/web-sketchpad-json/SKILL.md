---
name: web-sketchpad-json
description: Author, debug, and validate Web Sketchpad (WSP v4.8.0 / Q4 2026) declarative JSON geometric constructions, interactive HTML5 embeds, and dynamic math sketches. Activate whenever creating or editing Web Sketch JSON, plotting functions/intersections, building fractal iterations, or integrating WSP widgets and multi-page controls in HTML.
---

# Web Sketchpad JSON Construction Skill (Q4 2026)

Use this skill to write valid, zero-template Web Sketchpad JSON documents and embed them cleanly in HTML pages without relying on desktop Sketchpad export templates.

## 1. Core Construction Rules

1. **Topological dependency order**: Define objects in `pages[0].objects` strictly from independent parents to dependent children (Free points/parameters → Lines/Circles → Intersections/Polygons → Measures/Loci/Buttons). Every ID referenced in `parents` must already exist.
2. **Coordinate & unit conventions**:
   - Canvas origin `(0, 0)` is at the **top-left**; `+x` goes right, `+y` goes **down**.
   - `1 inch = 72 px`, `1 cm = 72 / 2.54 ≈ 28.3464567 px`.
   - `Rotate.angle` is always in **radians** (`Math.PI = 180°`). Although positive angles are mathematically counterclockwise, remember the canvas origin is top-left with **`+y` pointing down**—double-check the sign of `±π/2` when rotating polygons outward from an edge.
3. **Four mandatory validation gates (preventing silent blank canvas)**:
   - `metadata["wsp-version"]` must be `"4.8.0"` (or `"4.9.0"`, major version `4`).
   - `pages[i].preferences.text.textTypes` must exist (at least `{}`).
   - `pages[i].preferences.colorableComponents.Background` must exist (e.g. `{"color": "white"}`).
   - Use `data-var="mySketch"` on `<div class="sketch_canvas">` for local `file://` compatibility.
4. **Hard-won runtime pitfalls (blind-test verified)**:
   - **Labels are hidden by default**: Setting `"label": "A"` alone does NOT display point/segment labels on canvas—always include `"style": {"label": {"showLabel": true}}`.
   - **Measurements MUST use `kind: "Measure"` + `nameOrigin`**: Use `"kind": "Measure"` (NEVER `"Expression"`) for `MeasurementLength`, `MeasurementAngle`, `MeasurementArea`, `MeasurementValueOfPointOnPath`, etc., and set `"style": {"nameOrigin": "namedFromTemplate"}` (for auto labels like `m∠BAC = 55.4°`) or `"nameOrigin": "namedFromLabel"` with `"label"` (otherwise it renders blank `Expression N =`).
   - **Editable Parameters & Calculations MUST set `nameOrigin: "namedFromLabel"`**: Define an editable parameter as `"kind": "Expression", "genus": "ScalarMeasure", "constraint": "Calculation", "parents": {}, "expressionType": "UniMeasure_ExprType", "expression": "0.45", "label": "a", "style": {"nameOrigin": "namedFromLabel", "precision": 2}` (do NOT put `value` at top level on `constraint: "Free"`, which evaluates to `undefined`). For derived `Calculation` objects, also include `"style": {"nameOrigin": "namedFromLabel"}` with `"label"` so it displays your label instead of `Expression N`.
   - **`GeomLocus` requires full `DriveChain` parents + `driverDomain`**: Besides `"driverObject"`, `"drivenObject"`, and `"domainObject"`, you MUST list every intermediate object along the drive chain (including `"drivenObject"` itself) as numbered keys `"0"`, `"1"`, … in `parents`, and explicitly set `"isDiscrete": false` and `"driverDomain": {"low": 0, "high": 1}` (missing chain throws `isDiscrete` TypeError; missing `driverDomain` draws nothing).
   - **Axes block dragging unless locked**: Always set `"selectable": false` in `style` on `Axis` and `CoordSys` objects so free points remain draggable.
   - **Infinite dashed/dotted lines cause GPU drag lag**: For infinite lines (`Line`, `Perpendicular`, `Parallel`), prefer light-colored thin `"line-style": "solid"` strokes over dense `"dotted"` lines.
   - **AngleBisector vertex**: In `parents: {"A", "B", "C"}`, `"B"` (the middle key) is the vertex of `∠ABC`.
   - **Readable labels for teaching sketches**: Give parameters and calculations clear, self-explanatory `label` strings with units (e.g., `"Horizontal Angle α (rad)"` or `"a/sin(A)"`) instead of bare single letters, and group them in a dedicated top-left margin.
   - **Clean unmount in SPAs**: Before replacing a `.sketch_canvas` container, call `jQuery(node).data("document").stop()` to stop background `JobScheduler` loops and release listeners.

## 2. Minimal Valid Document Skeleton

```json
{
  "metadata": { "width": 640, "height": 360, "wsp-version": "4.8.0", "start-page": "1" },
  "resources": { "fontList": ["\"Arial\", sans-serif", "\"Times New Roman\", serif"] },
  "pages": [{
    "metadata": { "title": "Page 1", "id": "1", "sketchRect": { "top": 0, "left": 0, "bottom": 360, "right": 640 } },
    "preferences": {
      "units": { "length": "cm", "angle": "deg" },
      "precision": { "length": 2, "angle": 2, "scalar": 2 },
      "colorableComponents": { "Background": { "color": "white" } },
      "text": { "mathItalicization": true, "textTypes": {} }
    },
    "objects": {}
  }]
}
```

## 3. High-Frequency Object Recipes

- **Free Point (with visible label)**: `{"kind":"Point","genus":"Point","constraint":"Free","geom":{"loc":{"x":160,"y":200}},"label":"A","style":{"color":"#d63628","label":{"showLabel":true}}}`
- **Segment / Perpendicular / Parallel / Bisector**:
  - `Segment`: `kind:"Straight", genus:"Segment", constraint:"Segment", parents:{"p0":"1","p1":"2"}`
  - `Perpendicular`: `kind:"Straight", genus:"Perpendicular", constraint:"Perpendicular", parents:{"p0":"3","line":"5"}`
  - `Parallel`: `kind:"Straight", genus:"Parallel", constraint:"Parallel", parents:{"p0":"3","line":"5"}`
  - `AngleBisector`: `kind:"Straight", genus:"Bisector", constraint:"AngleBisector", parents:{"A":"2","B":"1","C":"3"}`
- **Intersections**:
  - Line–Line: `constraint:"Intersection", parents:{"line0":"5","line1":"9"}`
  - Circle–Line/Circle: `constraint:"Intersection1"` / `"Intersection2"`, `parents:{"circle":"3","obj":"4"}`
  - **FunctionPlot / GeomLocus Intersection (Q4 2026)**: `constraint:"InterApproxPathStitchedPath_C", parents:{"0":"9","1":"12"}` (declare multiple points with identical `parents` to auto-assign the 1st, 2nd, … crossings; tapping crossings in Web Sketchpad is enabled by default since Nov 19, 2026—disable via `window.GSPConfig.Intersections = { options: { tapPlotIntersections: false } }`).
- **Circles, Arcs & Polygons**:
  - `CircleFromTwoPoints` (`parents:{"p0","p1"}`), `CircleByRadius` (`parents:{"p0","radius"}`)
  - `ArcOnCircle` (`parents:{"circle","p0","p1"}`), `Arc3Points` (`parents:{"p0","p1","p2"}`), `ArcSector` (`kind:"ArcInterior", parents:{"arc"}`)
  - `PolygonFromPoints` (`kind:"Polygon", genus:"Triangle", parents:{"0":"1","1":"2","2":"3"}`)
- **Measures, Parameters & Calculations**:
  - `MeasurementLength`: `kind:"Measure", genus:"DistanceMeasure", constraint:"MeasurementLength", parents:{"path":"3"}, geom:{"loc":{"x":24,"y":36}}, style:{"font-size":14,"precision":2,"nameOrigin":"namedFromTemplate"}`
  - `MeasurementAngle`: `kind:"Measure", genus:"AngleMeasure", constraint:"MeasurementAngle", parents:{"p0":"1","p1":"2","p2":"3"}, geom:{"loc":{"x":24,"y":64}}, style:{"font-size":14,"precision":1,"nameOrigin":"namedFromTemplate"}`
  - `MeasurementArea`: `kind:"Measure", genus:"AreaMeasure", constraint:"MeasurementArea", parents:{"shape":"8"}, geom:{"loc":{"x":24,"y":92}}, style:{"font-size":14,"precision":2,"nameOrigin":"namedFromTemplate"}`
  - `Calculation`: `kind:"Expression", genus:"ScalarMeasure", constraint:"Calculation", parents:{"0":"13","1":"14"}, expressionType:"UniMeasure_ExprType", expression:"@0/@1", label:"Ratio", geom:{"loc":{"x":24,"y":120}}, style:{"font-size":14,"precision":2,"nameOrigin":"namedFromLabel"}`
  - Editable Parameter: `kind:"Expression", genus:"ScalarMeasure", constraint:"Calculation", parents:{}, expressionType:"UniMeasure_ExprType", expression:"0.45", label:"a", geom:{"loc":{"x":24,"y":36}}, style:{"font-size":14,"precision":2,"nameOrigin":"namedFromLabel"}`
- **Coordinate System, Functions, Dynamic Plotting & Loci**:
  - Chain: `OriginPoint` (`Free`) → `HorizontalUnitPoint` (`parents:{"origin"}`, `value:44`) → `AxisInternalDist` (`horizontal`, `style.selectable:false`) → `UnitPointInternalSquare` → `AxisInternalDist` (`vertical`, `style.selectable:false`) → `CoordSys` (`parents:{"axisX","axisY"}`, `style.selectable:false`).
  - `FunctionPlot`: `kind:"Sampler", parents:{"function","coordSys"}, numSamples:180, driverDomain:{"low":-6,"high":6}`
  - Dynamic Coordinate Point: `PlotMarkedXMarkedY` (`parents:{"coordSys","coordX","coordY"}`)
  - Locus: `GeomLocus` (`kind:"Sampler", genus:"PointLocus", constraint:"GeomLocus", parents:{"driverObject":"5","drivenObject":"10","domainObject":"3","0":"6","1":"7","2":"8","3":"9","4":"10"}, numSamples:180, isDiscrete:false, driverDomain:{"low":0,"high":1}`)
- **Transforms & 2-Branch Fractals**:
  - `Reflect` (`source, mirror`), `Rotate` (`source, center`, `angle` in rad), `RotateMeasureAngle` (`source, center, angle`), `DilateMeasureFactor` (`source, center, measure`), `TranslateVector` (`source, p0, p1`).
  - 2-Branch Fractal Tree: `IterateMap` with `parents:{"preimage0":"1","preimage1":"2","map0image0":"2","map0image1":"5","map1image0":"2","map1image1":"6","0":"3"}` + `IterateImage` (`source, map`).
- **Action Buttons & Host HTML Integration**:
  - `ActionButtonAnimate`: `kind:"Button", genus:"Action", constraint:"ActionButtonAnimate", parents:{"0":"9"}, label:"Animate", messages:["Animate"], animationStates:[{"rate":0.4,"timeInterval":0,"repeat":true,"motionType":"both"}], geom:{"loc":{"x":24,"y":140}}` (note: `genus` MUST be `"Action"`, NOT `"Button"`, and `label` is required; to animate an angle/parameter smoothly, animate a `PointOnPath` slider and read it via `MeasurementValueOfPointOnPath` with BOTH `parents:{"point":"...","path":"..."}`).
  - Also available: `ActionButtonToggleHideShow`, `ActionButtonMove` (pairs of `[point, target]` in `parents`), `ActionButtonPresentSimultaneously`.
  - Host page prefs: `WSP.PREF.setWebPagePrefs([...])`; Trace Widget (`traceWidget`) now includes a `Construct Locus` button for constructing point/line/circle/polygon loci and envelopes directly in the browser; multi-page DOM sync: `<div class="page_toggle p_2">` and `PAGENUM.gotoPage(this, 2)`; in-sketch reset via `PressButton.WSP` + `ctx.document.undo("all")`.
  - Accessibility hidden `Hide/Show` buttons: `WSP-TABS`, `WSP-SAYS`, `WSP-ON-BUTTON-DOWN-SAYS`, `WSP-ON-BUTTON-UP-SAYS`.

## 4. Standalone Interactive HTML Wrapper

- Output **pure `.json`** when the user wants data for further editing or uploading to the official Web Sketchpad Tool Library (`https://sineofthetimes.org/fc/tools/library`, Utility Menu → Upload).
- Output a **single self-contained `.html` file** when the user wants an interactive math sketch they can double-click and drag immediately in any browser:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Web Sketchpad Interactive Construction</title>
  <!-- Load official non-commercial runtime directly, or point to local engine/ for offline personal study -->
  <script src="https://sineofthetimes.org/includes/v4.6/js/jquery-2.1.0.js"></script>
  <script src="https://sineofthetimes.org/includes/v4.6/js/wsp.js"></script>
  <script src="https://sineofthetimes.org/includes/v4.6/js/wsp-runner.js"></script>
  <style>.sketch_canvas { display: inline-block; border: 1px solid #e5e7eb; }</style>
</head>
<body>
  <div class="sketch_canvas" data-var="mySketch"></div>
  <script>
    window.mySketch = { /* paste valid Web Sketch JSON here */ };
  </script>
</body>
</html>
```

> **Licensing note**: Never bundle or redistribute proprietary Web Sketchpad runtime scripts (`wsp.js`, `wsp-runner.js`, `widgets.js`) in public repositories or shared archives; load them from the official host or keep local copies strictly for private offline study.

## 5. Full Schema Reference

When you need exact `parents` keys, `kinds`, inheritance, or existence rules for any of the 21 concrete object kinds and 155 registered constraints, read `references/wsp-schema.json` inside this skill folder.
