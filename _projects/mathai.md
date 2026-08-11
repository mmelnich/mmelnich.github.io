---
layout: page
title: Computational Mathematics for and with AI/ML
description: "Companion page for our group poster at the Math & AI workshop in Seattle (August 18-20, 2026)."
img: assets/img/mathai-thumb.png
importance: 1
category: presentations
related_publications: false
_styles: >
  .mathai-diagram { background: #ffffff; border: 1px solid #d9d9d9; border-radius: 12px;
    padding: 14px 8px 8px 8px; overflow-x: auto; }
  .mathai-diagram svg { display: block; min-width: 640px; width: 100%; height: auto; }
  .mathai-svg rect.ours { fill: #a8d6ff; stroke: #2e6da4; stroke-width: 2; }
  .mathai-svg rect.ref { fill: #ffffff; stroke: #c9c9c9; stroke-width: 2; }
  .mathai-svg text { pointer-events: none; }
  .mathai-svg text.t { fill: #1a5693; font-weight: bold; text-anchor: middle; }
  .mathai-svg text.d { fill: #55779b; text-anchor: middle; }
  .mathai-svg a rect { transition: filter 0.12s ease, stroke-width 0.12s ease; }
  .mathai-svg a:hover rect, .mathai-svg a:focus rect { filter: brightness(0.93); stroke-width: 3; }
  .mathai-index ul { columns: 2; column-gap: 2.5rem; padding-left: 1.2rem; }
  .mathai-index li { margin-bottom: 0.3rem; break-inside: avoid; }
  .mathai-paper { background: #d3e9ea; border-radius: 12px; padding: 12px 14px; }
  .mathai-paper .mp-title { color: #0e7c7b; font-weight: bold; }
  .mathai-paper .mp-ref, .mathai-paper .mp-ref a { color: #55716f; font-size: 0.9rem; }
  .mathai-paper .mp-ref a:hover { color: #0e7c7b; }
  .mathai-credit { color: var(--global-text-color-light); font-size: 0.85rem; margin-top: 1.5rem; }
---

<p>
  This page accompanies our poster at the
  <a href="https://amazonmeetingsandevents.com/mathaisummerinseattle" target="_blank" rel="noopener"><b>Math &amp; AI Summer in Seattle</b></a>
  workshop (August 18-20, 2026), which brings together the themes of the DARPA
  <a href="https://www.darpa.mil/research/programs/expmath-exponential-mathematics" target="_blank" rel="noopener">expMath</a>
  and
  <a href="https://www.darpa.mil/research/programs/aiq-artificial-intelligence-quantified" target="_blank" rel="noopener">AIQ</a>
  programs. The map below is the poster's centerpiece: <b>every box is a link</b> to the
  corresponding paper, library, or note, and the application papers from the poster's bottom
  strip follow underneath.
</p>

<div class="mathai-diagram">
<svg class="mathai-svg" viewBox="0 0 1080 660" role="img" aria-label="Poster map: our projects and reference points arranged on two axes, mathematics for AI versus AI for mathematics, and foundations versus applications" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#8c8c8c"/></marker></defs>
  <g font-family="'Helvetica Neue', Helvetica, Arial, sans-serif">
    <g fill="none" stroke="#1a1a1a" stroke-width="1.8" stroke-dasharray="6 5">
      <polyline points="368,221 368,465"/>
      <polyline points="288,250 368,250"/>
      <polyline points="322,422 368,422"/>
      <polyline points="389,375 502,375 502,359"/>
      <polyline points="221,276 221,320"/>
      <polyline points="476,208 611,208"/>
      <polyline points="640,106 640,193"/>
    </g>
    <g stroke="#8c8c8c" stroke-width="3.5" marker-start="url(#arr)" marker-end="url(#arr)">
      <line x1="128" y1="303" x2="938" y2="303"/>
      <line x1="530" y1="30" x2="530" y2="572"/>
    </g>
    <g fill="#6e6e6e" font-weight="bold">
      <text class="ax" x="530" y="18" font-size="19" text-anchor="middle">Applications</text>
      <text class="ax" x="530" y="600" font-size="19" text-anchor="middle">Foundations</text>
      <text class="ax" x="62" y="296" font-size="19" text-anchor="middle">Mathematics</text>
      <text class="ax" x="62" y="318" font-size="19" text-anchor="middle">for AI</text>
      <text class="ax" x="1012" y="296" font-size="19" text-anchor="middle">AI for</text>
      <text class="ax" x="1012" y="318" font-size="19" text-anchor="middle">Mathematics</text>
    </g>
    <g fill="#b3b3b3" font-weight="bold" letter-spacing="1">
      <text class="corner" x="77" y="24" font-size="12" text-anchor="start">THEORY OF AI MODELS</text>
      <text class="corner" x="1053" y="24" font-size="12" text-anchor="end">AI SOLVES SCIENCE PROBLEMS</text>
      <text class="corner" x="27" y="602" font-size="12" text-anchor="start">KERNELS &amp; STANDARDS AI RUNS ON</text>
      <text class="corner" x="1053" y="602" font-size="12" text-anchor="end">AI WRITES &amp; CHECKS MATH</text>
    </g>
      <a href="https://github.com/BallisticLA" target="_blank" rel="noopener" aria-label="RandBLAS and RandLAPACK randomized matrix computation libraries on GitHub">
        <title>RandBLAS and RandLAPACK randomized matrix computation libraries on GitHub</title>
        <rect class="ours" x="277" y="465" width="506" height="38" rx="9" fill="#a8d6ff" stroke="#2e6da4" stroke-width="2"/>
        <text x="530" y="482.0" font-size="12" text-anchor="middle" fill="#1a5693" font-weight="bold">RandBLAS + RandLAPACK</text>
        <text x="530" y="494.3" font-size="9.5" text-anchor="middle" fill="#55779b">randomized matrix computation libraries</text>
      </a>
      <a href="https://arxiv.org/abs/2509.19747" target="_blank" rel="noopener" aria-label="RandRAND randomized preconditioning paper on arXiv">
        <title>RandRAND randomized preconditioning paper on arXiv</title>
        <rect class="ours" x="233" y="401" width="89" height="49" rx="9" fill="#a8d6ff" stroke="#2e6da4" stroke-width="2"/>
        <text x="278" y="417.7" font-size="12" text-anchor="middle" fill="#1a5693" font-weight="bold">RandRAND</text>
        <text x="278" y="430.0" font-size="9.5" text-anchor="middle" fill="#55779b">randomized</text>
        <text x="278" y="441.6" font-size="9.5" text-anchor="middle" fill="#55779b">preconditioning</text>
      </a>
      <a href="https://arxiv.org/abs/2601.22137" target="_blank" rel="noopener" aria-label="PRISM spectrum-aware matrix iterations paper on arXiv">
        <title>PRISM spectrum-aware matrix iterations paper on arXiv</title>
        <rect class="ours" x="300" y="336" width="89" height="49" rx="9" fill="#a8d6ff" stroke="#2e6da4" stroke-width="2"/>
        <text x="344" y="352.7" font-size="12" text-anchor="middle" fill="#1a5693" font-weight="bold">PRISM</text>
        <text x="344" y="365.0" font-size="9.5" text-anchor="middle" fill="#55779b">spectrum-aware</text>
        <text x="344" y="376.6" font-size="9.5" text-anchor="middle" fill="#55779b">matrix iterations</text>
      </a>
      <a href="https://arxiv.org/abs/2602.09530" target="_blank" rel="noopener" aria-label="AutoSpec automated discovery of numerical algorithms paper on arXiv">
        <title>AutoSpec automated discovery of numerical algorithms paper on arXiv</title>
        <rect class="ours" x="611" y="193" width="109" height="49" rx="9" fill="#a8d6ff" stroke="#2e6da4" stroke-width="2"/>
        <text x="666" y="209.7" font-size="12" text-anchor="middle" fill="#1a5693" font-weight="bold">AutoSpec</text>
        <text x="666" y="222.0" font-size="9.5" text-anchor="middle" fill="#55779b">automated numerical</text>
        <text x="666" y="233.6" font-size="9.5" text-anchor="middle" fill="#55779b">algorithms</text>
      </a>
      <a href="https://arxiv.org/abs/2605.18004" target="_blank" rel="noopener" aria-label="RL4RLA paper on arXiv">
        <title>RL4RLA paper on arXiv</title>
        <rect class="ours" x="739" y="193" width="121" height="49" rx="9" fill="#a8d6ff" stroke="#2e6da4" stroke-width="2"/>
        <text x="800" y="209.7" font-size="12" text-anchor="middle" fill="#1a5693" font-weight="bold">RL4RLA</text>
        <text x="800" y="222.0" font-size="9.5" text-anchor="middle" fill="#55779b">teaching ML to discover</text>
        <text x="800" y="233.6" font-size="9.5" text-anchor="middle" fill="#55779b">RandNLA algorithms</text>
      </a>
      <a href="#veritas" aria-label="VERITAS: description below on this page">
        <title>VERITAS: description below on this page</title>
        <rect class="ours" x="706" y="270" width="81" height="90" rx="9" fill="#a8d6ff" stroke="#2e6da4" stroke-width="2"/>
        <text x="746" y="289.8" font-size="12" text-anchor="middle" fill="#1a5693" font-weight="bold">VERITAS</text>
        <text x="746" y="302.2" font-size="9.5" text-anchor="middle" fill="#55779b">automated</text>
        <text x="746" y="313.7" font-size="9.5" text-anchor="middle" fill="#55779b">testing &amp;</text>
        <text x="746" y="325.3" font-size="9.5" text-anchor="middle" fill="#55779b">certification of</text>
        <text x="746" y="336.9" font-size="9.5" text-anchor="middle" fill="#55779b">AI-generated</text>
        <text x="746" y="348.5" font-size="9.5" text-anchor="middle" fill="#55779b">NLA code</text>
      </a>
      <a href="#vscl" aria-label="VSCL: description below on this page">
        <title>VSCL: description below on this page</title>
        <rect class="ours" x="811" y="360" width="94" height="65" rx="9" fill="#a8d6ff" stroke="#2e6da4" stroke-width="2"/>
        <text x="858" y="378.9" font-size="12" text-anchor="middle" fill="#1a5693" font-weight="bold">VSCL</text>
        <text x="858" y="391.2" font-size="9.5" text-anchor="middle" fill="#55779b">machine-checked</text>
        <text x="858" y="402.8" font-size="9.5" text-anchor="middle" fill="#55779b">numerical stability</text>
        <text x="858" y="414.4" font-size="9.5" text-anchor="middle" fill="#55779b">proofs in Lean</text>
      </a>
      <a href="https://arxiv.org/abs/1810.01075" target="_blank" rel="noopener" aria-label="Heavy-tailed self-regularization paper on arXiv">
        <title>Heavy-tailed self-regularization paper on arXiv</title>
        <rect class="ours" x="177" y="227" width="111" height="49" rx="9" fill="#a8d6ff" stroke="#2e6da4" stroke-width="2"/>
        <text x="232" y="243.7" font-size="12" text-anchor="middle" fill="#1a5693" font-weight="bold">HTSR</text>
        <text x="232" y="256.0" font-size="9.5" text-anchor="middle" fill="#55779b">weight matrix spectral</text>
        <text x="232" y="267.6" font-size="9.5" text-anchor="middle" fill="#55779b">self-regularization</text>
      </a>
      <a href="https://arxiv.org/abs/2603.10067" target="_blank" rel="noopener" aria-label="HTMuon paper on arXiv; RMNP linked in the index below">
        <title>HTMuon paper on arXiv; RMNP linked in the index below</title>
        <rect class="ours" x="343" y="183" width="133" height="38" rx="9" fill="#a8d6ff" stroke="#2e6da4" stroke-width="2"/>
        <text x="410" y="200.0" font-size="12" text-anchor="middle" fill="#1a5693" font-weight="bold">HTMuon | RMNP</text>
        <text x="410" y="212.3" font-size="9.5" text-anchor="middle" fill="#55779b">matrix-based optimizers</text>
      </a>
      <a href="https://arxiv.org/abs/2606.04980" target="_blank" rel="noopener" aria-label="AlphaQ paper on arXiv; KVQuant and SqueezeLLM linked in the index below">
        <title>AlphaQ paper on arXiv; KVQuant and SqueezeLLM linked in the index below</title>
        <rect class="ours" x="178" y="320" width="87" height="68" rx="9" fill="#a8d6ff" stroke="#2e6da4" stroke-width="2"/>
        <text x="222" y="337.4" font-size="12" text-anchor="middle" fill="#1a5693" font-weight="bold">AlphaQ |</text>
        <text x="222" y="352.0" font-size="12" text-anchor="middle" fill="#1a5693" font-weight="bold">KVQuant |</text>
        <text x="222" y="366.7" font-size="12" text-anchor="middle" fill="#1a5693" font-weight="bold">SqueezeLLM</text>
        <text x="222" y="379.0" font-size="9.5" text-anchor="middle" fill="#55779b">quantization</text>
      </a>
      <a href="https://arxiv.org/abs/2506.03470" target="_blank" rel="noopener" aria-label="Models of heavy-tailed mechanistic universality paper on arXiv">
        <title>Models of heavy-tailed mechanistic universality paper on arXiv</title>
        <rect class="ours" x="407" y="247" width="113" height="112" rx="9" fill="#a8d6ff" stroke="#2e6da4" stroke-width="2"/>
        <text x="464" y="274.8" font-size="12" text-anchor="middle" fill="#1a5693" font-weight="bold">Heavy-tailed</text>
        <text x="464" y="289.4" font-size="12" text-anchor="middle" fill="#1a5693" font-weight="bold">Random Matrix</text>
        <text x="464" y="304.1" font-size="12" text-anchor="middle" fill="#1a5693" font-weight="bold">Models</text>
        <text x="464" y="316.4" font-size="9.5" text-anchor="middle" fill="#55779b">spectral properties of</text>
        <text x="464" y="328.0" font-size="9.5" text-anchor="middle" fill="#55779b">trained neural</text>
        <text x="464" y="339.6" font-size="9.5" text-anchor="middle" fill="#55779b">networks</text>
      </a>
      <a href="https://arxiv.org/abs/2502.06151" target="_blank" rel="noopener" aria-label="Powerformer recency-biased causal attention paper on arXiv">
        <title>Powerformer recency-biased causal attention paper on arXiv</title>
        <rect class="ours" x="387" y="83" width="97" height="49" rx="9" fill="#a8d6ff" stroke="#2e6da4" stroke-width="2"/>
        <text x="436" y="99.7" font-size="12" text-anchor="middle" fill="#1a5693" font-weight="bold">Powerformer</text>
        <text x="436" y="112.0" font-size="9.5" text-anchor="middle" fill="#55779b">power-law</text>
        <text x="436" y="123.6" font-size="9.5" text-anchor="middle" fill="#55779b">causal attention</text>
      </a>
      <a href="https://arxiv.org/abs/2602.09170" target="_blank" rel="noopener" aria-label="FLARE epistemic uncertainty in diffusion models paper on arXiv">
        <title>FLARE epistemic uncertainty in diffusion models paper on arXiv</title>
        <rect class="ours" x="226" y="155" width="67" height="49" rx="9" fill="#a8d6ff" stroke="#2e6da4" stroke-width="2"/>
        <text x="260" y="171.7" font-size="12" text-anchor="middle" fill="#1a5693" font-weight="bold">FLARE</text>
        <text x="260" y="184.0" font-size="9.5" text-anchor="middle" fill="#55779b">uncertainty</text>
        <text x="260" y="195.6" font-size="9.5" text-anchor="middle" fill="#55779b">estimation</text>
      </a>
      <a href="https://arxiv.org/abs/2501.06933" target="_blank" rel="noopener" aria-label="NeurDE neural equilibria for conservation laws paper on arXiv">
        <title>NeurDE neural equilibria for conservation laws paper on arXiv</title>
        <rect class="ours" x="557" y="57" width="95" height="49" rx="9" fill="#a8d6ff" stroke="#2e6da4" stroke-width="2"/>
        <text x="604" y="73.7" font-size="12" text-anchor="middle" fill="#1a5693" font-weight="bold">NeurDE</text>
        <text x="604" y="86.0" font-size="9.5" text-anchor="middle" fill="#55779b">neural</text>
        <text x="604" y="97.6" font-size="9.5" text-anchor="middle" fill="#55779b">conservation laws</text>
      </a>
      <a href="https://arxiv.org/abs/2011.13456" target="_blank" rel="noopener" aria-label="Score-based generative modeling through stochastic differential equations paper on arXiv (reference, not ours)">
        <title>Score-based generative modeling through stochastic differential equations paper on arXiv (reference, not ours)</title>
        <rect class="ref" x="136" y="55" width="123" height="38" rx="9" fill="#ffffff" stroke="#c9c9c9" stroke-width="2"/>
        <text x="198" y="70.8" font-size="11" text-anchor="middle" fill="#222222" font-weight="bold">Mathematics of</text>
        <text x="198" y="84.2" font-size="11" text-anchor="middle" fill="#222222" font-weight="bold">Diffusion Models</text>
      </a>
      <a href="https://arxiv.org/abs/1806.07366" target="_blank" rel="noopener" aria-label="Neural ordinary differential equations paper on arXiv (reference, not ours)">
        <title>Neural ordinary differential equations paper on arXiv (reference, not ours)</title>
        <rect class="ref" x="252" y="113" width="91" height="22" rx="9" fill="#ffffff" stroke="#c9c9c9" stroke-width="2"/>
        <text x="298" y="127.5" font-size="11" text-anchor="middle" fill="#222222" font-weight="bold">Neural ODEs</text>
      </a>
      <a href="https://arxiv.org/abs/2010.08895" target="_blank" rel="noopener" aria-label="Fourier neural operator paper on arXiv; PINNs linked in the index below (reference, not ours)">
        <title>Fourier neural operator paper on arXiv; PINNs linked in the index below (reference, not ours)</title>
        <rect class="ref" x="673" y="83" width="162" height="54" rx="9" fill="#ffffff" stroke="#c9c9c9" stroke-width="2"/>
        <text x="754" y="100.1" font-size="11" text-anchor="middle" fill="#222222" font-weight="bold">Neural Operators |</text>
        <text x="754" y="113.5" font-size="11" text-anchor="middle" fill="#222222" font-weight="bold">Physics-Informed Neural</text>
        <text x="754" y="126.9" font-size="11" text-anchor="middle" fill="#222222" font-weight="bold">Networks (PINNs)</text>
      </a>
      <a href="https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/" target="_blank" rel="noopener" aria-label="DeepMind AlphaProof announcement (reference, not ours)">
        <title>DeepMind AlphaProof announcement (reference, not ours)</title>
        <rect class="ref" x="812" y="256" width="88" height="20" rx="9" fill="#ffffff" stroke="#c9c9c9" stroke-width="2"/>
        <text x="856" y="269.5" font-size="11" text-anchor="middle" fill="#222222" font-weight="bold">AlphaProof</text>
      </a>
      <a href="https://standards.ieee.org/ieee/3109/11165/" target="_blank" rel="noopener" aria-label="IEEE P3109 working group page (reference, not ours)">
        <title>IEEE P3109 working group page (reference, not ours)</title>
        <rect class="ref" x="123" y="516" width="157" height="33" rx="9" fill="#ffffff" stroke="#c9c9c9" stroke-width="2"/>
        <text x="202" y="529.3" font-size="11" text-anchor="middle" fill="#222222" font-weight="bold">IEEE Low-Precision</text>
        <text x="202" y="542.7" font-size="11" text-anchor="middle" fill="#222222" font-weight="bold">Arithmetic Standards</text>
      </a>
      <a href="https://www.netlib.org/lapack/" target="_blank" rel="noopener" aria-label="BLAS and LAPACK at Netlib (reference, not ours)">
        <title>BLAS and LAPACK at Netlib (reference, not ours)</title>
        <rect class="ref" x="395" y="522" width="279" height="24" rx="9" fill="#ffffff" stroke="#c9c9c9" stroke-width="2"/>
        <text x="534" y="537.5" font-size="11" text-anchor="middle" fill="#222222" font-weight="bold">BLAS | LAPACK</text>
      </a>
      <a href="https://github.com/leanprover-community/mathlib4" target="_blank" rel="noopener" aria-label="Lean mathlib4 on GitHub (reference, not ours)">
        <title>Lean mathlib4 on GitHub (reference, not ours)</title>
        <rect class="ref" x="784" y="516" width="129" height="33" rx="9" fill="#ffffff" stroke="#c9c9c9" stroke-width="2"/>
        <text x="848" y="529.3" font-size="11" text-anchor="middle" fill="#222222" font-weight="bold">Lean Formalization</text>
        <text x="848" y="542.7" font-size="11" text-anchor="middle" fill="#222222" font-weight="bold">of Mathematics</text>
      </a>
    <g font-size="11.5" fill="#3c3c3c" font-weight="bold">
      <rect x="205" y="630" width="34" height="16" rx="6" fill="#a8d6ff" stroke="#2e6da4" stroke-width="2"/>
      <text x="248" y="642" text-anchor="start">our recent projects</text>
      <rect x="425" y="630" width="34" height="16" rx="6" fill="#ffffff" stroke="#c9c9c9" stroke-width="2"/>
      <text x="468" y="642" text-anchor="start">familiar reference (not ours)</text>
      <line x1="695" y1="638" x2="740" y2="638" stroke="#1a1a1a" stroke-width="2" stroke-dasharray="6 5"/>
      <text x="750" y="642" text-anchor="start">planned integration</text>
    </g>
  </g>
</svg>
</div>

<h2 id="index">All projects on the map</h2>
<div class="mathai-index">
  <ul>
    <li><b>RandBLAS + RandLAPACK</b>: <a href="https://github.com/BallisticLA/RandBLAS" target="_blank" rel="noopener">RandBLAS (GitHub)</a>, <a href="https://github.com/BallisticLA/RandLAPACK" target="_blank" rel="noopener">RandLAPACK (GitHub)</a>, <a href="https://arxiv.org/abs/2302.11474" target="_blank" rel="noopener">RandNLA monograph</a></li>
    <li><b>RandRAND</b>: <a href="https://arxiv.org/abs/2509.19747" target="_blank" rel="noopener">paper</a></li>
    <li><b>PRISM</b>: <a href="https://arxiv.org/abs/2601.22137" target="_blank" rel="noopener">paper</a></li>
    <li><b>AutoSpec</b>: <a href="https://arxiv.org/abs/2602.09530" target="_blank" rel="noopener">paper</a></li>
    <li><b>VERITAS</b>: <a href="#veritas">about</a></li>
    <li><b>VSCL</b>: <a href="#vscl">about</a></li>
    <li><b>HTMuon | RMNP</b>: <a href="https://arxiv.org/abs/2603.10067" target="_blank" rel="noopener">HTMuon</a>, <a href="https://arxiv.org/abs/2603.20527" target="_blank" rel="noopener">RMNP</a></li>
    <li><b>HTSR</b>: <a href="https://arxiv.org/abs/1810.01075" target="_blank" rel="noopener">paper I</a>, <a href="https://arxiv.org/abs/2002.06716" target="_blank" rel="noopener">paper II</a></li>
    <li><b>NeurDE</b>: <a href="https://arxiv.org/abs/2501.06933" target="_blank" rel="noopener">paper</a></li>
    <li><b>Powerformer</b>: <a href="https://arxiv.org/abs/2502.06151" target="_blank" rel="noopener">paper</a></li>
    <li><b>RL4RLA</b>: <a href="https://arxiv.org/abs/2605.18004" target="_blank" rel="noopener">paper</a></li>
    <li><b>FLARE</b>: <a href="https://arxiv.org/abs/2602.09170" target="_blank" rel="noopener">paper</a></li>
    <li><b>Heavy-tailed Random Matrix Models</b>: <a href="https://arxiv.org/abs/2506.03470" target="_blank" rel="noopener">paper</a></li>
    <li><b>AlphaQ | KVQuant | SqueezeLLM</b>: <a href="https://arxiv.org/abs/2606.04980" target="_blank" rel="noopener">AlphaQ</a>, <a href="https://arxiv.org/abs/2401.18079" target="_blank" rel="noopener">KVQuant</a>, <a href="https://arxiv.org/abs/2306.07629" target="_blank" rel="noopener">SqueezeLLM</a></li>
    <li><b>References on the map</b>: <a href="https://www.netlib.org/blas/" target="_blank" rel="noopener">BLAS</a>, <a href="https://www.netlib.org/lapack/" target="_blank" rel="noopener">LAPACK</a>, <a href="https://standards.ieee.org/ieee/3109/11165/" target="_blank" rel="noopener">IEEE P3109</a>, <a href="https://github.com/leanprover-community/mathlib4" target="_blank" rel="noopener">mathlib4</a>, <a href="https://deepmind.google/discover/blog/ai-solves-imo-problems-at-silver-medal-level/" target="_blank" rel="noopener">AlphaProof</a>, <a href="https://arxiv.org/abs/1806.07366" target="_blank" rel="noopener">Neural ODEs</a>, <a href="https://arxiv.org/abs/1711.10561" target="_blank" rel="noopener">PINNs</a>, <a href="https://arxiv.org/abs/2010.08895" target="_blank" rel="noopener">Neural operators</a>, <a href="https://arxiv.org/abs/2011.13456" target="_blank" rel="noopener">Score-based diffusion (SDE)</a></li>
  </ul>
</div>

<h2 id="veritas">VERITAS</h2>
<p>
  VERITAS (Verification Engine for Reliable and Intelligent Testing of Algebra Systems) is our
  framework for automated testing and certification of AI-generated numerical
  linear algebra code: LLM recognition and behavioural fingerprinting route any kernel to a
  testing harness covering correctness, reproducibility, performance, and uncertainty, ending in
  a certificate of trust. The project is in its pre-award phase and has no public artifact yet;
  this entry will link to it when one exists.
</p>

<h2 id="vscl">VSCL</h2>
<p>
  The Verified Scientific Computing Library (VSCL) is a Lean 4 library of machine-checked
  numerical stability proofs in the style of Higham's error analysis, built so that AI-generated
  numerical mathematics can be verified at the speed it is generated. A public release is being
  consolidated; this entry will link to the repository when it lands.
</p>

<h2 id="papers">Application papers</h2>
<p>Real problems we have solved, from the poster's bottom strip:</p>
<div class="row row-cols-1 row-cols-md-2 mathai-papers">
    <div class="col mb-3"><div class="mathai-paper h-100"><div class="mp-title">Model Quality Diagnostics</div><div class="mp-ref"><a href="https://arxiv.org/abs/1810.01075" target="_blank" rel="noopener">HTSR I: arXiv:1810.01075</a> &middot; <a href="https://arxiv.org/abs/2002.06716" target="_blank" rel="noopener">HTSR II: arXiv:2002.06716</a></div></div></div>
    <div class="col mb-3"><div class="mathai-paper h-100"><div class="mp-title">Time Series Foundation Model</div><div class="mp-ref"><a href="https://arxiv.org/abs/2403.07815" target="_blank" rel="noopener">Chronos: arXiv:2403.07815</a></div></div></div>
    <div class="col mb-3"><div class="mathai-paper h-100"><div class="mp-title">Chemistry Foundation Model</div><div class="mp-ref"><a href="https://arxiv.org/abs/2510.18900" target="_blank" rel="noopener">MIST: arXiv:2510.18900</a></div></div></div>
    <div class="col mb-3"><div class="mathai-paper h-100"><div class="mp-title">LLM for Material Science</div><div class="mp-ref"><a href="https://arxiv.org/abs/2502.13107" target="_blank" rel="noopener">MatterChat: arXiv:2502.13107</a></div></div></div>
    <div class="col mb-3"><div class="mathai-paper h-100"><div class="mp-title">Conservation Law Simulation</div><div class="mp-ref"><a href="https://arxiv.org/abs/2501.06933" target="_blank" rel="noopener">NeurDE: arXiv:2501.06933</a></div></div></div>
    <div class="col mb-3"><div class="mathai-paper h-100"><div class="mp-title">Earthquake Simulation</div><div class="mp-ref"><a href="https://arxiv.org/abs/2407.15089" target="_blank" rel="noopener">CGM-GM: arXiv:2407.15089</a></div></div></div>
    <div class="col mb-3"><div class="mathai-paper h-100"><div class="mp-title">Earthquake Forecast</div><div class="mp-ref"><a href="https://arxiv.org/abs/2405.20516" target="_blank" rel="noopener">WaveCastNet: arXiv:2405.20516</a></div></div></div>
    <div class="col mb-3"><div class="mathai-paper h-100"><div class="mp-title">Weather Emulation</div><div class="mp-ref"><a href="https://arxiv.org/abs/2603.25687" target="_blank" rel="noopener">paper: arXiv:2603.25687</a></div></div></div>
    <div class="col mb-3"><div class="mathai-paper h-100"><div class="mp-title">Chemical Property Prediction</div><div class="mp-ref">chemrxiv.10001648</div></div></div>
    <div class="col mb-3"><div class="mathai-paper h-100"><div class="mp-title">Supply Chain Optimization</div><div class="mp-ref"><a href="https://arxiv.org/abs/2408.16462" target="_blank" rel="noopener">Consensus Planning: arXiv:2408.16462</a></div></div></div>
</div>

<p class="mathai-credit">
  Poster by Shenghao Yang, Maksim Melnichenko, and Oleg Balabanov. PI: Michael Mahoney
  (UCB/ICSI/LBNL); co-PIs: Ben Erichson (ICSI/LBNL), Yaoqing Yang (Dartmouth), Yujun Yang
  (Dartmouth). Page maintained by Maksim Melnichenko.
</p>
