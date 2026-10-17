(() => {
  // Only introduce the home page once per tab; deep links stay immediately usable.
  try { if (sessionStorage.getItem('portfolio-opened')) return; } catch {}
  if (location.hash && location.hash !== '#home') return;
  const loader = document.createElement('div');
  loader.className = 'loading-screen';
  loader.setAttribute('role', 'region');
  loader.setAttribute('aria-label', '作品集加载页');
  loader.innerHTML = `<div class="loading-paper"><span class="loading-tape" aria-hidden="true"></span><div class="loading-meta"><span>李诺谣 / 设计档案</span><span>第一章</span></div><div class="loading-art" aria-hidden="true"><span class="loading-sheet sheet-one"></span><span class="loading-sheet sheet-two"></span><span class="loading-folder"><span>灵感 · 细节 · 表达</span><strong>PORTFOLIO</strong><i>✳</i></span></div><p class="loading-kicker">每个想法，都值得落在纸上。</p><h2>正在翻开作品集<span aria-hidden="true">…</span></h2><div class="loading-track" aria-hidden="true"><span></span></div><p class="loading-status" role="status">正在准备页面与作品图片</p><button class="loading-skip" type="button">直接进入 ↗</button><div class="loading-bottom"><span>保持好奇，认真设计。</span><span aria-hidden="true">✦</span></div></div>`;
  document.body.append(loader);
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let finished = false;
  let fallback;
  function finish() {
    if (finished) return;
    finished = true;
    clearTimeout(fallback);
    window.removeEventListener('load', finish);
    try { sessionStorage.setItem('portfolio-opened', '1'); } catch {}
    const main = document.querySelector('main');
    if (main) main.inert = false;
    document.body.classList.remove('is-loading');
    const focused = loader.contains(document.activeElement);
    if (focused && main) { main.tabIndex = -1; main.focus({preventScroll:true}); }
    loader.classList.add('is-finished');
    setTimeout(() => loader.remove(), reducedMotion ? 0 : 400);
  }
  loader.querySelector('button').addEventListener('click', finish);
  document.body.classList.add('is-loading');
  document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    if (main && !finished) main.inert = true;
  }, {once:true});
  // Real page readiness, without a simulated percentage or a minimum wait.
  fallback = setTimeout(finish, 6000);
  if (document.readyState === 'complete') finish();
  else window.addEventListener('load', finish, {once:true});
})();
