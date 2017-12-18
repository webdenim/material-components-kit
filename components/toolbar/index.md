---
title: Toolbar
description: >
  A container for multiple rows of items such as application title, navigation menu, or tabs.
  MK Toolbar extends MDC Toolbar by providing more control over toolbar's height and theming.
layout: docs
section: components
date: 2017-10-19
lastmod: 2017-10-19
---

MK Toolbar provides SCSS variables and CSS classes for applying the custom height or light theme
to MDC Toolbar.

## Set the custom height for toolbar

By default, MDC Toolbar's height is set to 64px on desktop and 48px on tablet / mobile screen sizes.
MK Toolbar provides SCSS variables for setting the custom toolbar's height across multiple screen sizes.

First, set SCSS variables to desired height before importing the component. Then, add
`mdc-toolbar__row--custom-height` class to the toolbar row.

```scss
$mk-toolbar-row-height: 48px;
$mk-toolbar-mobile-row-height: 48px;
$mk-toolbar-mobile-landscape-row-height: 48px;

@import "@material-kit/lib/components/toolbar/toolbar";
```

{% snippet html %}
<div class="mdc-toolbar">
  <div class="mdc-toolbar__row mdc-toolbar__row--custom-height">
    <div class="mdc-toolbar__section mdc-toolbar__section--align-start">
      <button class="mdc-toolbar__menu-icon"><i class="material-icons">menu</i></button>
      <span class="mdc-toolbar__title">Material Kit</span>
    </div>
  </div>
</div>
{% endsnippet %}

<hr>

**Adjusting sibling elements of fixed toolbars**

Add `mdc-toolbar-fixed-adjust--custom-height` class to the toolbar's adjacent sibling element,
which will add required margin-top.

```html
<div class="mdc-toolbar mdc-toolbar--fixed">
  <div class="mdc-toolbar__row mdc-toolbar__row--custom-height">
    <div class="mdc-toolbar__section mdc-toolbar__section--align-start">
      <button class="mdc-toolbar__menu-icon"><i class="material-icons">menu</i></button>
      <span class="mdc-toolbar__title">Material Kit</span>
    </div>
  </div>
</div>
<div class="mdc-toolbar-fixed-adjust--custom-height"></div>
```

<hr class="mk-my--md">

## Set the light theme for toolbar

By default, MDC-Web uses primary theme color for toolbar's background.
You can set the light theme for toolbar by adding `mdc-toolbar--theme-light`
class to the toolbar row.

{% snippet html %}
<div class="mdc-toolbar">
  <div class="mdc-toolbar__row mdc-toolbar__row--theme-light">
    <div class="mdc-toolbar__section mdc-toolbar__section--align-start">
      <button class="mdc-toolbar__menu-icon"><i class="material-icons">menu</i></button>
      <span class="mdc-toolbar__title">Material Kit</span>
    </div>
  </div>
</div>
{% endsnippet %}

<hr class="mk-my--md">

## Mix toolbar rows for complex navigation

{% snippet html %}
<div class="mdc-toolbar">
  <div class="mdc-toolbar__row mdc-toolbar__row--theme-light">
    <div class="mdc-toolbar__section mdc-toolbar__section--align-start">
      <button class="mdc-toolbar__menu-icon"><i class="material-icons">menu</i></button>
      <span class="mdc-toolbar__title">Material Kit</span>
      <nav class="mk-toolbar-nav">
        <a class="mk-toolbar-nav__tab mk-toolbar-nav__tab--active" href="javascript:void(0)">Home</a>
        <a class="mk-toolbar-nav__tab" href="javascript:void(0)">Features</a>
        <a class="mk-toolbar-nav__tab" href="javascript:void(0)">Blog</a>
        <a class="mk-toolbar-nav__tab" href="javascript:void(0)">About</a>
      </nav>
    </div>
  </div>
  <div class="mdc-toolbar__row mdc-toolbar__row--custom-height">
    <div class="mdc-toolbar__section mdc-toolbar__section--align-start">
      <nav class="mk-toolbar-nav mk-tt--uppercase">
        <a class="mk-toolbar-nav__tab mk-toolbar-nav__tab--active" href="javascript:void(0)">Home</a>
        <a class="mk-toolbar-nav__tab" href="javascript:void(0)">Features</a>
        <a class="mk-toolbar-nav__tab" href="javascript:void(0)">Blog</a>
        <a class="mk-toolbar-nav__tab" href="javascript:void(0)">About</a>
      </nav>
    </div>
  </div>
</div>
{% endsnippet %}
