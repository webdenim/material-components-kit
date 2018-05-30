---
title: Introduction
description: What is Material Components Kit.
layout: docs
section: getting-started
date: 2017-10-25
lastmod: 2017-11-02
---

## Overview

Material Components Kit is an SCSS toolkit for building websites and web apps with Material Design.

Material Components Kit is built on top of [Material Components for the Web]({{ site.mdc_url }}) (MDC Web)
and complements it with useful components and utility classes. Material Components Kit doesn't provide any
JavaScript components because it serves another purpose. It's aimed to work with any JavaScript
wrapper around MDC Web as styling helper.

## MDC Web and Material Components Kit

If you're familiar with MDC Web, that's great, because you already know the basics! You don't need
to relearn anything. Essentially you'd use the same classes in your Material Components Kit markup as for MDC Web:

{% snippet html %}
<div class="mdc-toolbar">
  <div class="mdc-toolbar__row">
    <div class="mdc-toolbar__section mdc-toolbar__section--align-start">
      <button class="mdc-toolbar__menu-icon"><i class="material-icons">menu</i></button>
      <span class="mdc-toolbar__title">Material Components Kit</span>
    </div>
  </div>
</div>
{% endsnippet %}

So what's the point of Material Components Kit, you may ask?

Material Components for the Web
[lacks of simple and easy-to-use "Bootstrap-like" utility classes](https://github.com/material-components/material-components-web/issues/23#issuecomment-316414839).
Material Components Kit lives as a helper toolkit which provides such utilities to the parent library.
Additionally, Material Components Kit brings components which are not presented in the MDC Web and can be used
without JavaScript.

{% snippet html %}
<div class="mdc-toolbar">
  <div class="mdc-toolbar__row">
    <div class="mdc-toolbar__section mdc-toolbar__section--align-start">
      <button class="mdc-toolbar__menu-icon"><i class="material-icons">menu</i></button>
      <span class="mdc-toolbar__title">Material Components Kit</span>
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

If you're new to MDC Web, that's okay! Here's the detailed documentation for using Material Components Kit
in your project.

## Features

- Responsive
- Modular
- RTL-aware
- Accurately crafted
- Constantly updated
- Well documented

## Browser support

Material Components for the Web officially supports the last two versions of every major browser.
Therefore, Material Components Kit gets the same browser support.
