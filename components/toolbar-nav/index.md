---
title: Toolbar Nav
description: Material Design-styled Toolbar navigation.
layout: docs
section: components
date: 2017-10-19
lastmod: 2017-10-19
---

MK Toolbar Nav is an exclusive component that allows you to easily create
tabbed navigation in the toolbar. This approach doesn't require JavaScript, therefore
it's simpler than [using MDC Tabs within the toolbar](http://material-components-web.appspot.com/tabs.html).

## Toolbar Nav in the start of the toolbar

{% snippet html %}
<div class="mdc-toolbar">
  <div class="mdc-toolbar__row">
    <div class="mdc-toolbar__section mdc-toolbar__section--align-start">
      <button class="mdc-toolbar__menu-icon"><i class="material-icons">menu</i></button>
      <span class="mdc-toolbar__title">Webdenim</span>
      <nav class="mk-toolbar-nav">
        <a class="mk-toolbar-nav__tab mk-toolbar-nav__tab--active" href="javascript:void(0)">Home</a>
        <a class="mk-toolbar-nav__tab" href="javascript:void(0)">Features</a>
        <a class="mk-toolbar-nav__tab" href="javascript:void(0)">Blog</a>
        <a class="mk-toolbar-nav__tab" href="javascript:void(0)">About</a>
      </nav>
    </div>
  </div>
</div>
{% endsnippet %}

## Toolbar Nav in the end of the toolbar

{% snippet html %}
<div class="mdc-toolbar">
  <div class="mdc-toolbar__row">
    <div class="mdc-toolbar__section mdc-toolbar__section--align-start">
      <button class="mdc-toolbar__menu-icon"><i class="material-icons">menu</i></button>
      <span class="mdc-toolbar__title">Webdenim</span>
    </div>
    <div class="mdc-toolbar__section mdc-toolbar__section--align-end">
      <nav class="mk-toolbar-nav">
        <a class="mk-toolbar-nav__tab mk-toolbar-nav__tab--active" href="javascript:void(0)">Home</a>
        <a class="mk-toolbar-nav__tab" href="javascript:void(0)">Features</a>
        <a class="mk-toolbar-nav__tab" href="javascript:void(0)">Blog</a>
        <a class="mk-toolbar-nav__tab" href="javascript:void(0)">About</a>
      </nav>
    </div>
  </div>
</div>
{% endsnippet %}

## Toolbar Nav with uppercase tabs

Add `mk-tt--uppercase` class to `mk-toolbar-nav` to have uppercase tabs.

{% snippet html %}
<div class="mdc-toolbar">
  <div class="mdc-toolbar__row">
    <div class="mdc-toolbar__section mdc-toolbar__section--align-start">
      <button class="mdc-toolbar__menu-icon"><i class="material-icons">menu</i></button>
      <span class="mdc-toolbar__title">Webdenim</span>
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

## CSS classes

| Class                         | Description                                                               |
| ----------------------------- | ------------------------------------------------------------------------- |
| `mk-toolbar-nav`              | Mandatory. Needs to be set on the child node of "mdc-toolbar__section".   |
| `mk-toolbar-nav__tab`         | Mandatory. Needs to be set on the child nodes of "mk-toolab-nav".         |
| `mk-toolbar-nav__tab--active` | Modifier class for setting tab to the active state.                       |
