---
title: Section
description: Building block of page's content.
layout: docs
section: components
date: 2017-10-25
lastmod: 2017-12-18
---

Section is an exclusive Material Components Kit's component. It's a composing metaphor which lets you create a focused, attention-grabbing unit of content.

Any section requires to use `mdc-layout-grid` as a direct child. This acts like "container" in the
Bootstrap framework and sets the maximum allowed width of inner content. Section in this case can
be used for coloring background in theme palette or for adjusting the vertical padding of content.

{% snippet html %}
<div class="mk-section mk-ta--center mk-py--lg" style="background: #fff;">
  <div class="mdc-layout-grid">
    <h1 class="mk-section__title mk-section__title--large">Welcome to Material Components Kit</h1>
    <p class="mk-section__description">SCSS toolkit for MDC Web.</p>
    <p class="mk-section__actions">
      <button class="mdc-button mdc-button--unelevated">Get started</button>
      <button class="mdc-button">Learn more</button>
    </p>
  </div>
</div>
{% endsnippet %}

<hr class="mk-my--md">

## CSS classes

Section can be composed of multiple elements. As mentioned above, `mdc-layout-grid` is required
but there are also optional elements: section title, section description and section call-to-action block.

| Class                      | Description                                                      |
| -------------------------- | -----------------------------------------------------------------|
| `mk-section`               | Mandatory. Needs to be set on the root element of the component.  |
| `mdc-layout-grid`          | Mandatory. Needs to be set on the child node of "mk-section".     |
| `mk-section__title`        | Optional. A title block.                                         |
| `mk-section__title--large` | An option for the title, to make it larger.                      |
| `mk-section__title--small` | An option for the title, to make it smaller.                     |
| `mk-section__description`  | Optional. A description block.                                   |
| `mk-section__actions`      | Optional. An action block.                                       |

<hr class="mk-my--md">

## Section's height

By default section doesn't include explicit padding except one's that comes from `mdc-layout-grid`:

{% snippet html %}
<div class="mk-section" style="background: #fff;">
  <div class="mdc-layout-grid">
    <h1 class="mk-section__title">Welcome to Material Components Kit</h1>
    <p class="mk-section__description">SCSS toolkit for MDC Web.</p>
    <p class="mk-section__actions">
      <button class="mdc-button mdc-button--unelevated">Get started</button>
      <button class="mdc-button">Learn more</button>
    </p>
  </div>
</div>
{% endsnippet %}

You can adjust the height of the section by adding [spacing utility classes](../utilities/spacing/):

{% snippet html %}
<div class="mk-section mk-py--lg" style="background: #fff;">
  <div class="mdc-layout-grid">
    <h1 class="mk-section__title">Welcome to Material Components Kit</h1>
    <p class="mk-section__description">SCSS toolkit for MDC Web.</p>
    <p class="mk-section__actions">
      <button class="mdc-button mdc-button--unelevated">Get started</button>
      <button class="mdc-button">Learn more</button>
    </p>
  </div>
</div>
<hr>
<div class="mk-section mk-py--xl" style="background: #fff;">
  <div class="mdc-layout-grid">
    <h1 class="mk-section__title mk-section__title--large">Welcome to Material Components Kit</h1>
    <p class="mk-section__description">SCSS toolkit for MDC Web.</p>
    <p class="mk-section__actions">
      <button class="mdc-button mdc-button--unelevated">Get started</button>
      <button class="mdc-button">Learn more</button>
    </p>
  </div>
</div>
{% endsnippet %}

<hr class="mk-my--md">

## Section's background

Section can be used with [MDC Theme background colors](https://material.io/components/web/catalog/theme/#css-classes).

**Dark section background**

If your background is dark, add `mk-section--theme-dark` class.

{% snippet html %}
<div class="mk-section mk-section--theme-dark mdc-theme--primary-bg mk-py--md">
  <div class="mdc-layout-grid">
    <h1 class="mk-section__title">Welcome to Material Components Kit</h1>
    <p class="mk-section__description">SCSS toolkit for MDC Web.</p>
    <p class="mk-section__actions">
      <button class="mdc-button mdc-theme--text-primary-on-secondary mdc-theme--secondary-bg">Get started</button>
      <button class="mdc-button mdc-button--unelevated">Learn more</button>
    </p>
  </div>
</div>
{% endsnippet %}

<hr class="mk-my--md">

## Section's text alignment

You can align text in the section by adding [text utility classes](../utilities/text/):

{% snippet html %}
<div class="mk-section mk-py--lg mk-ta--center" style="background: #fff;">
  <div class="mdc-layout-grid">
    <h1 class="mk-section__title">Welcome to Material Components Kit</h1>
    <p class="mk-section__description">SCSS toolkit for MDC Web.</p>
    <p class="mk-section__actions">
      <button class="mdc-button mdc-button--unelevated">Get started</button>
      <button class="mdc-button">Learn more</button>
    </p>
  </div>
</div>
{% endsnippet %}
