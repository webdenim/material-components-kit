---
title: Text utilities
description: RTL-aware text utility classes.
layout: detail
section: utilities
date: 2017-10-19
lastmod: 2017-10-19
---

## Text alignment

Realign text in components. Text alignment classes are RTL-aware
by default, so instead of "left" and "right" directions we are using "start" and "end" respectively.

{% snippet html %}
<p class="mk-ta--start">Start-aligned text (which is left-aligned in LTR layouts and right-aligned in RTL)</p>
<p class="mk-ta--center">Center aligned text.</p>
<p class="mk-ta--end">End-aligned text (which is right-aligned in LTR layouts and left-aligned in RTL)</p>
{% endsnippet %}

<hr class="mk-my--md">

## Text decoration

Decorate text in components.

{% snippet html %}
<p class="mk-td--underline">Underline text.</p>
<p class="mk-td--overline">Overline text.</p>
<p class="mk-td--line-through">Line through.</p>
{% endsnippet %}

<hr class="mk-my--md">

## Text transform

Transform text in components with text capitalization classes.

{% snippet html %}
<p class="mk-tt--lowercase">Lowercased text.</p>
<p class="mk-tt--uppercase">Uppercased text.</p>
<p class="mk-tt--capitalize">CapiTaliZed text.</p>
{% endsnippet %}
