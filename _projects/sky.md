---
layout: page
title: "Numerical Linear Algebra Software in the AI Era: Present and Future"
description: "Companion page for our poster at the Sky Computing Lab End-of-Project meeting (UC Berkeley, October 21, 2026)."
img: assets/img/sky-ring-thumb.png
importance: 0
category: presentations
related_publications: false
_styles: >
  @import url("https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=DM+Sans:wght@400;500;700&display=swap");
  .sky-poster { background: #ffffff; border: 1px solid var(--global-divider-color); border-radius: 14px; padding: 10px; }
  .sky-poster img { width: 100%; height: auto; display: block; border-radius: 6px; }
  .sky-actions { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0.8rem 0 0.4rem; }
  .sky-pills { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: auto; padding-top: 0.6rem; }
  .sky-pills a, .sky-actions a { display: inline-block; padding: 0.28rem 0.85rem; border-radius: 999px; background: #0072B2; color: #ffffff !important; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 0.86rem; line-height: 1.3; text-decoration: none !important; transition: filter 0.12s ease; }
  .sky-pills a:hover, .sky-actions a:hover, .sky-pills a:focus, .sky-actions a:focus { filter: brightness(1.15); }
  .sky-actions a.ghost { background: transparent; color: #0072B2 !important; box-shadow: inset 0 0 0 2px #0072B2; }
  .sky-group { font-family: Sora, sans-serif; font-weight: 600; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--global-text-color-light); margin: 1.4rem 0 0.6rem; }
  .sky-bubbles { display: grid; grid-template-columns: repeat(auto-fit, minmax(205px, 1fr)); gap: 0.9rem; }
  .sky-bubbles.two { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
  .sky-bubble { display: flex; flex-direction: column; border-radius: 18px; padding: 15px 17px 16px; border: 2px solid rgba(0, 114, 178, 0.32); background: rgba(0, 114, 178, 0.07); }
  .sky-bubble.trust { border-color: rgba(213, 94, 0, 0.36); background: rgba(213, 94, 0, 0.07); }
  .sky-bubble.trust .sky-pills a { background: #B34D00; }
  .sky-bubble .kind { font-family: Sora, sans-serif; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #0072B2; }
  .sky-bubble.trust .kind { color: #B34D00; }
  .sky-bubble h3 { font-family: Sora, sans-serif; font-weight: 700; font-size: 1.15rem; line-height: 1.25; margin: 0.25rem 0 0.35rem; }
  .sky-bubble p { margin: 0; font-size: 0.92rem; line-height: 1.45; }
  .sky-thumb { display: block; margin: -4px -6px 0.7rem; border-radius: 12px; overflow: hidden; aspect-ratio: 16 / 9; background: #000; }
  .sky-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.2s ease; }
  .sky-thumb:hover img { transform: scale(1.03); }
  .sky-cover { display: flex; flex-direction: column; justify-content: flex-end; aspect-ratio: 16 / 9; margin: -4px -6px 0.7rem; padding: 18px 20px; border-radius: 12px; background: radial-gradient(circle at 85% 15%, rgba(255, 255, 255, 0.18) 0, rgba(255, 255, 255, 0) 45%), linear-gradient(135deg, #0A86CC 0%, #0072B2 45%, #004B78 100%); color: #ffffff !important; text-decoration: none !important; transition: filter 0.12s ease; }
  .sky-cover:hover { filter: brightness(1.08); }
  .sky-cover .t { font-family: Sora, sans-serif; font-weight: 700; font-size: 1.6rem; line-height: 1.12; letter-spacing: -0.01em; }
  .sky-cover .s { font-family: 'DM Sans', sans-serif; font-size: 0.95rem; line-height: 1.3; margin-top: 0.45rem; opacity: 0.92; }
  .sky-note { color: var(--global-text-color-light); font-size: 0.92rem; }
  .sky-sources { padding-left: 2.2rem; }
  .sky-sources li { margin-bottom: 0.55rem; line-height: 1.5; }
  .sky-sources li.ours { background: rgba(0, 114, 178, 0.08); border-left: 4px solid #0072B2; border-radius: 0 10px 10px 0; padding: 0.45rem 0.7rem; }
  .sky-sources li.ours.trust { background: rgba(213, 94, 0, 0.08); border-left-color: #D55E00; }
  .sky-ours { display: inline-block; font-family: Sora, sans-serif; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #ffffff; background: #0072B2; border-radius: 999px; padding: 0.05rem 0.55rem; margin-right: 0.35rem; vertical-align: 0.1em; }
  .sky-sources li.ours.trust .sky-ours { background: #B34D00; }
  .sky-ai li { margin-bottom: 0.35rem; }
  .sky-credit { color: var(--global-text-color-light); font-size: 0.85rem; margin-top: 1.5rem; }
  html[data-theme="dark"] .sky-bubble .kind, html[data-theme="dark"] .sky-actions a.ghost { color: #6CB4E4 !important; }
  html[data-theme="dark"] .sky-actions a.ghost { box-shadow: inset 0 0 0 2px #6CB4E4; }
  html[data-theme="dark"] .sky-bubble.trust .kind { color: #F0A060; }
  html[data-theme="dark"] .sky-bubble { background: rgba(0, 114, 178, 0.14); }
  html[data-theme="dark"] .sky-bubble.trust { background: rgba(213, 94, 0, 0.13); }
  html[data-theme="dark"] .sky-sources li.ours { background: rgba(0, 114, 178, 0.16); }
  html[data-theme="dark"] .sky-sources li.ours.trust { background: rgba(213, 94, 0, 0.15); }
---

<p>
  This page accompanies our poster at the
  <a href="https://sky.cs.berkeley.edu/" target="_blank" rel="noopener"><b>Sky Computing Lab</b></a>
  End-of-Project meeting at UC Berkeley on October 21, 2026. It holds the poster as a PDF, links to
  our projects and to an introduction to randomized numerical linear algebra (RandNLA), and the full
  list of sources behind the poster's numbered markers.
</p>

<h2 id="poster">The poster</h2>
<div class="sky-poster">
  <a href="/assets/pdf/sky-poster-2026-10-21.pdf" target="_blank" rel="noopener">
    <img src="/assets/img/sky-poster-preview.png" alt="The poster: Numerical Linear Algebra Software in the AI Era, Present and Future. Left: RandBLAS and RandLAPACK. Centre: the thesis, a ring diagram joining the two halves through the kernel contract, and result tiles. Right: VERITAS and VSCL."/>
  </a>
</div>
<div class="sky-actions">
  <a href="/assets/pdf/sky-poster-2026-10-21.pdf" target="_blank" rel="noopener">Open the PDF</a>
  <a class="ghost" href="/assets/pdf/sky-poster-2026-10-21.pdf" download>Download (48 x 36 in)</a>
</div>

<h2 id="links">Project links</h2>
<div class="sky-group">Software</div>
<div class="sky-bubbles">
  <div class="sky-bubble build">
    <div class="kind">C++ library</div>
    <h3>RandBLAS</h3>
    <p>Sketching operators behind a BLAS-style API.</p>
    <div class="sky-pills"><a href="https://github.com/BallisticLA/RandBLAS" target="_blank" rel="noopener">GitHub</a><a href="https://randblas.readthedocs.io/en/latest/" target="_blank" rel="noopener">Docs</a><a href="https://github.com/BallisticLA/RandBLAS/releases/tag/1.1.0" target="_blank" rel="noopener">Release 1.1.0</a></div>
  </div>
  <div class="sky-bubble build">
    <div class="kind">C++ library</div>
    <h3>RandLAPACK</h3>
    <p>RandNLA methods built on RandBLAS, tested and benchmarked.</p>
    <div class="sky-pills"><a href="https://github.com/BallisticLA/RandLAPACK" target="_blank" rel="noopener">GitHub</a><a href="https://github.com/BallisticLA/RandLAPACK/blob/main/INSTALL_SCRIPT.md" target="_blank" rel="noopener">One-command install</a><a href="https://discord.gg/R4qj8Er9YW" target="_blank" rel="noopener">Discord</a></div>
  </div>
  <div class="sky-bubble build">
    <div class="kind">Bindings</div>
    <h3>MATLAB and Python</h3>
    <p>Interfaces to RandLAPACK from MATLAB and Python.</p>
    <div class="sky-pills"><a href="https://github.com/BallisticLA/randlapack-bindings" target="_blank" rel="noopener">GitHub</a></div>
  </div>
  <div class="sky-bubble trust">
    <div class="kind">Lean 4 library</div>
    <h3>VSCL</h3>
    <p>The Verified Scientific Computing Library: numerical analysis, formalized.</p>
    <div class="sky-pills"><a href="https://github.com/VSCL-x-VERITAS/lean-computational-mathematics" target="_blank" rel="noopener">GitHub</a></div>
  </div>
</div>
<div class="sky-group">Learn about RandNLA</div>
<div class="sky-bubbles two">
  <div class="sky-bubble build">
    <a class="sky-cover" href="https://arxiv.org/abs/2302.11474" target="_blank" rel="noopener" aria-label="The RandNLA book on arXiv"><span class="t">Randomized Numerical Linear Algebra</span><span class="s">A Perspective on the Field With an Eye to Software</span></a>
    <div class="kind">The RandNLA book</div>
    <h3>Murray et al., 2023</h3>
    <p>The monograph behind RandBLAS and RandLAPACK [3].</p>
    <div class="sky-pills"><a href="https://arxiv.org/abs/2302.11474" target="_blank" rel="noopener">arXiv</a><a href="https://arxiv.org/pdf/2302.11474" target="_blank" rel="noopener">PDF</a></div>
  </div>
  <div class="sky-bubble build">
    <a class="sky-thumb" href="https://www.youtube.com/watch?v=6htbyY3rH1w" target="_blank" rel="noopener" aria-label="Watch on YouTube"><img src="https://i.ytimg.com/vi/6htbyY3rH1w/maxresdefault.jpg" alt="Video thumbnail: Is the Future of Linear Algebra.. Random?" loading="lazy"/></a>
    <div class="kind">Video</div>
    <h3>Is the Future of Linear Algebra.. Random?</h3>
    <p>An introduction to RandNLA by the Mutual Information channel; from 22:30 it benchmarks our CQRRPT [2].</p>
    <div class="sky-pills"><a href="https://www.youtube.com/watch?v=6htbyY3rH1w" target="_blank" rel="noopener">Watch on YouTube</a><a href="https://www.youtube.com/watch?v=6htbyY3rH1w&amp;t=1350s" target="_blank" rel="noopener">Jump to 22:30</a></div>
  </div>
</div>

<h2 id="sources">Sources</h2>
<p class="sky-note">
  Numbers match the markers on the poster; highlighted entries are our own work.
</p>
<ol class="sky-sources">
  <li id="s1" class="ours build"><span class="sky-ours">Our work</span> M. Melnichenko, R. J. Murray, W. Killian, J. Demmel, M. W. Mahoney, P. Luszczek, M. Gates. <a href="https://arxiv.org/abs/2507.00976" target="_blank" rel="noopener">Anatomy of High-Performance Column-Pivoted QR Decomposition</a> (BQRRP), arXiv:2507.00976, 2025. The poster's chart plots our raw data from the paper's benchmark campaign: a dual AMD EPYC 9734 (Zen4c) at n = 64,000 (best of three runs per block size; the paper reports best of five) and an NVIDIA H100 at n = 32,768 (block sizes 32 to 2048, one run each); in that sweep BQRRP reaches 55 percent of cuSOLVER's unpivoted QR rate on the H100 at block size 2048, still rising; the paper's abstract reports about 65 percent at its own settings.</li>
  <li id="s2" class="ours build"><span class="sky-ours">Our work</span> M. Melnichenko, O. Balabanov, R. J. Murray, J. Demmel, M. W. Mahoney, P. Luszczek. <a href="https://arxiv.org/abs/2311.08316" target="_blank" rel="noopener">CholeskyQR with Randomization and Pivoting for Tall Matrices</a> (CQRRPT), arXiv:2311.08316, 2023. Cited for the CQRRPT row of the methods table.</li>
  <li id="s3" class="ours build"><span class="sky-ours">Our work</span> R. Murray et al. <a href="https://arxiv.org/abs/2302.11474" target="_blank" rel="noopener">Randomized Numerical Linear Algebra: A Perspective on the Field With an Eye to Software</a>, arXiv:2302.11474, 2023. The monograph behind RandBLAS and RandLAPACK.</li>
  <li id="s4">GPU MODE fast-QR competition, 2026: <a href="https://www.gpumode.com/leaderboard/774" target="_blank" rel="noopener">round 2</a> (leaderboard 774, the poster's table) and <a href="https://www.gpumode.com/leaderboard/773" target="_blank" rel="noopener">round 1</a> (773). Submissions were run unmodified through the organizers' own checkers on a B200. The speedups on the poster divide the leaderboard time of a plain torch.geqrf entry (130.4 ms, cuSOLVER one matrix at a time) by each top-5 kernel's leaderboard time (1.22 to 1.50 ms).</li>
  <li id="s5" class="ours build"><span class="sky-ours">Our work</span> funNystr&ouml;m++: accelerated estimation of spectral sums tr f(A) of large positive semidefinite matrices, implemented in RandLAPACK. The paper is approaching arXiv submission.</li>
  <li id="s6">J. K. Salmon, M. A. Moraes, R. O. Dror, D. E. Shaw. <a href="https://doi.org/10.1145/2063384.2063405" target="_blank" rel="noopener">Parallel random numbers: as easy as 1, 2, 3</a>, SC 2011 (the Random123 library). RandBLAS draws every random number from a Random123 counter-based generator, Philox by default with Threefry supported, so a draw is addressable by key and counter and does not depend on the thread count.</li>
  <li id="s7" class="ours build"><span class="sky-ours">Our work</span> O. Balabanov, M. Melnichenko, M. W. Mahoney. <a href="https://arxiv.org/abs/2610.16101" target="_blank" rel="noopener">Stable Matrix-Free Q-less QR via Preconditioning and Randomization</a>, arXiv:2610.16101, October 2026. The Q-less QR implementation on the poster: randomized preconditioning makes a single Cholesky QR pass numerically safe for any numerically full-rank operator, with a componentwise stability analysis that also covers Cholesky QR2 and shifted Cholesky QR3; implemented in RandLAPACK.</li>
  <li id="s8">N. J. Higham. <a href="https://doi.org/10.1137/1.9780898718027" target="_blank" rel="noopener">Accuracy and Stability of Numerical Algorithms</a>, 2nd ed., SIAM, 2002. All 28 chapters are formalized in VSCL within an audited scope.</li>
  <li id="s9">R. J. LeVeque. <a href="https://doi.org/10.1017/CBO9780511791253" target="_blank" rel="noopener">Finite Volume Methods for Hyperbolic Problems</a>, Cambridge University Press, 2002. Chapters 1 to 3 are formalized.</li>
  <li id="s10">R. Vershynin. <a href="https://doi.org/10.1017/9781108231596" target="_blank" rel="noopener">High-Dimensional Probability: An Introduction with Applications in Data Science</a>, Cambridge University Press, 2018. Chapters 1 and 2 are formalized; Chapter 3 is in progress.</li>
  <li id="s11">P. Drineas, M. W. Mahoney. <a href="https://doi.org/10.1145/2842602" target="_blank" rel="noopener">RandNLA: Randomized Numerical Linear Algebra</a>, Communications of the ACM 59(6), 2016. The RandNLA case study in VSCL: sampling, matrix concentration, low-rank approximation, least-squares sketching, randomized preconditioning.</li>
  <li id="s12">J. Nocedal, S. J. Wright. <a href="https://doi.org/10.1007/978-0-387-40065-5" target="_blank" rel="noopener">Numerical Optimization</a>, 2nd ed., Springer, 2006. Formalization in progress.</li>
  <li id="s13">R. Bhatia. <a href="https://doi.org/10.1007/978-1-4612-0653-8" target="_blank" rel="noopener">Matrix Analysis</a>, Graduate Texts in Mathematics 169, Springer, 1997. Formalization in progress (started October 2026).</li>
  <li id="s14">A. Greenbaum. <a href="https://doi.org/10.1137/1.9781611970937" target="_blank" rel="noopener">Iterative Methods for Solving Linear Systems</a>, SIAM, 1997. Next in the queue.</li>
  <li id="s15">Y. Saad. <a href="https://doi.org/10.1137/1.9780898718003" target="_blank" rel="noopener">Iterative Methods for Sparse Linear Systems</a>, 2nd ed., SIAM, 2003. Next in the queue.</li>
  <li id="s16">S. Boyd, L. Vandenberghe. <a href="https://doi.org/10.1017/CBO9780511804441" target="_blank" rel="noopener">Convex Optimization</a>, Cambridge University Press, 2004. Next in the queue.</li>
  <li id="s17">The mathlib Community. <a href="https://doi.org/10.1145/3372885.3373824" target="_blank" rel="noopener">The Lean mathematical library</a>, CPP 2020; the library today is <a href="https://github.com/leanprover-community/mathlib4" target="_blank" rel="noopener">mathlib4</a>. Counts use one theorem/lemma-line regex at commit 021ce68 (2026-10-07). Under a strict rule (finite-precision and approximation results only) Mathlib has 13 lines on numerical analysis, a floating-point model and the trapezoidal rule, and none on numerical linear algebra. Under the broad rule of the printed poster's comparison, which also counts exact-arithmetic matrix algorithms, it has 104 lines on numerical linear algebra (Gram-Schmidt, LDL, row echelon form, Hessenberg matrices and reduction by transvections) and 117 on numerical analysis; none concern rounding error, stability or conditioning. VSCL builds on Mathlib; the poster's VSCL theorem counts use the same regex and rules on VSCL's main branch at commit e821e55 (2026-10-09).</li>
  <li id="s18">N. Halko, P. G. Martinsson, J. A. Tropp. <a href="https://doi.org/10.1137/090771806" target="_blank" rel="noopener">Finding structure with randomness: probabilistic algorithms for constructing approximate matrix decompositions</a>, SIAM Review 53(2), 2011. The randomized SVD, the QB factorization and randomized range finders.</li>
  <li id="s19">Y. Chen, E. N. Epperly, J. A. Tropp, R. J. Webber. <a href="https://arxiv.org/abs/2207.06503" target="_blank" rel="noopener">Randomly pivoted Cholesky: practical approximation of a kernel matrix with few entry evaluations</a>, Communications on Pure and Applied Mathematics 78(5), 2025; arXiv:2207.06503. RPCholesky; the poster's 1700x tile is from our June 2025 RandLAPACK report: RPCholesky in RandLAPACK against scikit-learn's kernel PCA [25] on the codrna dataset at 100,000 points on an Apple M2 Max (RBF kernel, bandwidth 3, eigenvector identities verified to 1e-8; RandLAPACK with p = 4 against scikit-learn with p = 2, as in the source slide).</li>
  <li id="s20">P. G. Martinsson, G. Quintana-Ort&iacute;, N. Heavner, R. van de Geijn. <a href="https://doi.org/10.1137/16M1081270" target="_blank" rel="noopener">Householder QR factorization with randomization for column pivoting (HQRRP)</a>, SIAM Journal on Scientific Computing 39(2), 2017.</li>
  <li id="s21">T. Fukaya, R. Kannan, Y. Nakatsukasa, Y. Yamamoto, Y. Yanagisawa. <a href="https://doi.org/10.1137/18M1218212" target="_blank" rel="noopener">Shifted Cholesky QR for computing the QR factorization of ill-conditioned matrices</a>, SIAM Journal on Scientific Computing 42(1), 2020. Shifted CholeskyQR3 (sCholQR3).</li>
  <li id="s22">M. D&iacute;az, E. N. Epperly, Z. Frangella, J. A. Tropp, R. J. Webber. <a href="https://arxiv.org/abs/2304.12465" target="_blank" rel="noopener">Robust, randomized preconditioning for kernel ridge regression</a>, arXiv:2304.12465, 2023. KRILL.</li>
  <li id="s23">H. Avron, P. Maymounkov, S. Toledo. <a href="https://doi.org/10.1137/090767911" target="_blank" rel="noopener">Blendenpik: supercharging LAPACK's least-squares solver</a>, SIAM Journal on Scientific Computing 32(3), 2010.</li>
  <li id="s24">C. C. Paige, M. A. Saunders. <a href="https://doi.org/10.1145/355984.355989" target="_blank" rel="noopener">LSQR: an algorithm for sparse linear equations and sparse least squares</a>, ACM Transactions on Mathematical Software 8(1), 1982.</li>
  <li id="s25">F. Pedregosa et al. <a href="https://jmlr.org/papers/v12/pedregosa11a.html" target="_blank" rel="noopener">Scikit-learn: machine learning in Python</a>, Journal of Machine Learning Research 12, 2011. The kernel PCA baseline of the 1700x tile.</li>
  <li id="s26">L. de Moura, S. Ullrich. <a href="https://doi.org/10.1007/978-3-030-79876-5_37" target="_blank" rel="noopener">The Lean 4 theorem prover and programming language</a>, Automated Deduction, CADE 28, Lecture Notes in Computer Science, Springer, 2021, pp. 625-635.</li>
  <li id="s27">M. Gates, P. Luszczek, A. Abdelfattah, J. Kurzak, J. Dongarra, K. Arturov, C. Cecka, C. Freitag. C++ API for BLAS and LAPACK, SLATE Working Note 2, Innovative Computing Laboratory, University of Tennessee; the libraries: <a href="https://github.com/icl-utk-edu/blaspp" target="_blank" rel="noopener">BLAS++</a> and <a href="https://github.com/icl-utk-edu/lapackpp" target="_blank" rel="noopener">LAPACK++</a>.</li>
  <li id="s28">Z. Frangella, J. A. Tropp, M. Udell. <a href="https://doi.org/10.1137/21M1466244" target="_blank" rel="noopener">Randomized Nystr&ouml;m preconditioning</a>, SIAM Journal on Matrix Analysis and Applications 44(2), 2023; arXiv:2110.02820. RandLAPACK's REVD2 follows its Algorithm E.2 (adaptive randomized Nystr&ouml;m approximation), with the error estimate of Algorithm E.1.</li>
  <li id="s29">X. Zhang, Q. Wang, Y. Zhang. <a href="https://doi.org/10.1109/ICPADS.2012.97" target="_blank" rel="noopener">Model-driven level 3 BLAS performance optimization on Loongson 3A processor</a>, ICPADS 2012; the library: <a href="https://github.com/OpenMathLib/OpenBLAS" target="_blank" rel="noopener">OpenBLAS</a>.</li>
  <li id="s30">Intel. <a href="https://www.intel.com/content/www/us/en/developer/tools/oneapi/onemkl.html" target="_blank" rel="noopener">Intel oneAPI Math Kernel Library (oneMKL)</a>, developer reference.</li>
  <li id="s31">Apple. <a href="https://developer.apple.com/documentation/accelerate" target="_blank" rel="noopener">Accelerate framework</a>, developer documentation (BLAS and LAPACK interfaces).</li>
  <li id="s32">AMD. <a href="https://www.amd.com/en/developer/aocl.html" target="_blank" rel="noopener">AMD Optimizing CPU Libraries (AOCL)</a>, user guide; AOCL-BLAS is built on <a href="https://doi.org/10.1145/2764454" target="_blank" rel="noopener">BLIS</a> and AOCL-LAPACK on <a href="https://doi.org/10.1109/MCSE.2009.207" target="_blank" rel="noopener">libflame</a>.</li>
  <li id="s33">J. A. Tropp, R. J. Webber. <a href="https://arxiv.org/abs/2306.12418" target="_blank" rel="noopener">Randomized algorithms for low-rank matrix approximation: design, analysis, and applications</a>, arXiv:2306.12418, 2023. The randomized SVD and randomized block Krylov iteration (RBKI).</li>
  <li id="s34">T. Chen. <a href="https://arxiv.org/abs/2410.11090" target="_blank" rel="noopener">The Lanczos algorithm for matrix functions: a handbook for scientists</a>, arXiv:2410.11090, 2024. Lanczos-FA and Lanczos-QF; block Lanczos-FA in funNystr&ouml;m++.</li>
</ol>

<h3 id="ai-tasks">Behind the AI tasks column</h3>
<p class="sky-note">
  Examples of AI systems that rely on each method family's computation; none of them runs
  RandLAPACK's own code.
</p>
<ul class="sky-ai">
  <li><b>LLM compression</b> (low-rank approximation): <a href="https://arxiv.org/abs/2404.02948" target="_blank" rel="noopener">PiSSA</a>, <a href="https://arxiv.org/abs/2504.20437" target="_blank" rel="noopener">GaLore 2</a>; both run randomized SVD in practice.</li>
  <li><b>Kernel PCA, clustering</b> (symmetric eigen, PSD): <a href="https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.KernelPCA.html" target="_blank" rel="noopener">scikit-learn&#39;s randomized kernel PCA</a> [25].</li>
  <li><b>Structured pruning</b> (QR with pivoting): pruning by interpolative decomposition, <a href="https://arxiv.org/abs/2108.00065" target="_blank" rel="noopener">Chee et al.</a></li>
  <li><b>Distributed optimizers</b> (tall and Q-less QR): <a href="https://arxiv.org/abs/2504.05295" target="_blank" rel="noopener">Dion</a>, whose reference implementation defaults to a randomized Cholesky QR.</li>
  <li><b>Kernel ridge regression</b> (least squares, regression): KRILL [22].</li>
  <li><b>GP likelihoods, Hessians</b> (matrix functions, traces): stochastic Lanczos quadrature in <a href="https://arxiv.org/abs/1809.11165" target="_blank" rel="noopener">GPyTorch</a>; Hessian spectra of neural networks in <a href="https://arxiv.org/abs/1912.07145" target="_blank" rel="noopener">PyHessian</a>.</li>
</ul>

<p>
  Related: the companion page for our <a href="/projects/mathai/">Math &amp; AI Summer in Seattle poster</a>.
</p>

<p class="sky-credit">
  Presented by Maksim Melnichenko. PIs: Michael W. Mahoney, Riley Murray and Kimon
  Fountoulakis. The work spans UC Berkeley, the International Computer Science Institute, Sandia
  National Laboratories, the University of Tennessee, Knoxville, and the University of Waterloo.
  Page maintained by Maksim Melnichenko.
</p>
