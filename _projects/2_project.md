---
layout: page
title: project 1
description: with background image
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

<style>
/* Remove default padding/margins from this page */
.page-content, .wrapper, .container, .container-fluid {
  padding: 0 !important;
  margin: 0 !important;
  max-width: 100% !important;
}

/* Make image fill viewport */
.fullscreen-image {
  width: 100vw;
  height: 100vh;
  object-fit: contain; /* use 'cover' to crop instead */
  display: block;
}
</style>

<img src="{{ 'assets/img/RandNLA_Dice-1.png' | relative_url }}" 
     alt="RandNLA Dice" 
     class="fullscreen-image">