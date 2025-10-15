---
layout: page
title: project 1
description: with background image
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

{% assign pdf = "assets/img/RandNLA_Dice.jpg" | relative_url %}

<div class="container-fluid p-0" style="height:100vh;">
  <object
    data="{{ pdf }}#view=FitH"
    type="application/pdf"
    width="100%"
    height="100%">
    <p>
      Your browser cannot display this PDF inline.
      <a href="{{ pdf }}">Download the PDF</a>.
    </p>
  </object>
</div>