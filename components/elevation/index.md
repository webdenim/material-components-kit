---
title: Elevation
description: Shadows and elevation as Sass mixins and CSS classes.
layout: docs
section: components
date: 2017-10-19
lastmod: 2017-10-19
canonical: https://material.io/components/web/catalog/elevation/
---

MK Elevation is an **SCSS mixin** that allows you to set the color of components' box-shadows through variables.

```scss
// default values are rgba(0, 0, 0, .12)
$mk-elevation-umbra-color: rgba(67, 72, 77, .12);
$mk-elevation-penumbra-color: rgba(67, 72, 77, .12);
$mk-elevation-ambient-color: rgba(67, 72, 77, .12);

@import "material-components-kit/components/elevation/elevation";
```

For the rest, elevation's usage in Material Components Kit is the same as in MDC-Web.

[Learn more about MDC Elevation]({{ page.canonical }}).
