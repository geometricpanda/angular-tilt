[![Netlify Status](https://api.netlify.com/api/v1/badges/69d9522b-e3e8-43ea-b899-0be2084a752e/deploy-status)](https://app.netlify.com/sites/angular-tilt/deploys)
[![npm version](https://badge.fury.io/js/@geometricpanda%2Fangular-tilt.svg)](https://www.npmjs.com/package/@geometricpanda/angular-tilt)

# Angular Tilt

An Angular port of [Tilt.js](https://gijsroge.github.io/tilt.js/).

Angular tilt is an easy way to apply parallax and depth micro-transitions to HTML elements.

Note: This does not require any jQuery.

## Installation

Angular Tilt is available from [npmjs.com](https://npmjs.com/package/@geometricpanda/angular-tilt)

### NPM

`npm install @geometricpanda/angular-tilt --save`

### Yarn

`yarn add @geometricpanda/angular-tilt`

### Compatibility

| Version | Angular Version |
|---------|-----------------|
| `0.3.x` | `^14.0.0`       |
| `0.4.x` | `^15.0.0`       |

## Getting Started

You'll need to add the `NgTiltModule` to the relevant parts of your application:

```typescript
// Your NgModule

import {NgTiltModule} from '@geometricpanda/angular-tilt';

@NgModule({
  declarations: [...],
  imports: [NgTiltModule],
  exports: [...],
})

```

## Usage

```html
// Your Template

<div class="gradient" ngTilt>

  <div class="square" ngTiltParallax></div>

</div>
```

## Directives

### `[ngTilt]`

This is the main `ngTilt` directive which you apply to your order HTML element.

#### Inputs

| Name          | Type      | Default                         | Description                                                                     |
|---------------|-----------|---------------------------------|---------------------------------------------------------------------------------|
| `maxTilt`     | `number`  | `20`                            | The maximum number of degrees to tilt                                           |
| `perspective` | `number`  | `300`                           | Sets the perspective of the plane, lower numbers will appear to transition more |
| `glare`       | `boolean` | `false`                         | Applies a glare to the tilted element                                           |
| `maxGlare`    | `number`  | `0.4`                           | Maximum amount of glare                                                         |
| `easing`      | `string`  | `cubic-bezier(.03,.98,.52,.99)` | CSS Easing effect on mouse enter / exit                                         |
| `scale`       | `number`  | `1`                             | CSS Scale transformation applied on mouseover, 1 = 100%, 2 = 200% ...           |
| `speed`       | `number`  | `400`                           | Time taken in `ms` for reset transition                                         |
| `disableAxix` | `x` / `y` | `undefined`                     | Prevent the tilt from applying to a specific axis                               |
| `reset`       | `boolean` | `true`                          | Whether the tilt should reset to 0 degrees when the mouse leaves the area       | 

### `[ngTiltParallax]`

This is a sub directive, which can be applied to children of the `ngTilt` directive.
It will allow the child element to parallax (appear as if it's on a different plane) against the `ngTilt` element.

#### Inputs

| Name          | Type      | Default | Description                                      |
|---------------|-----------|---------|--------------------------------------------------|
| `distance`    | `number`  | `50`    | Configures distance in front of the parent plane | 

## Recognitions

- Thanks go to Gijs Roge, the original author of [Tilt.js](https://gijsroge.github.io/tilt.js/)
