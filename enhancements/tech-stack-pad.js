// Shared by the Next.js portfolio and its prebuilt Pages export.
(() => {
  if (document.getElementById('jk-pad-style')) return;
  const style = document.createElement('style');
  style.id = 'jk-pad-style';
  style.textContent = "\nsection#skills[data-pad-ready] {display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100svh;padding:5.5rem .85rem 3rem;isolation:isolate;overflow:clip}\n#skills[data-pad-ready] > ul,body:has(#skills[data-pad-ready]) :is(.keyboard-viewport--skills,.keyboard-caption){display:none}\n#skills[data-pad-ready] > :first-child{margin-bottom:1.2rem}\n.jk-pad-sky{position:absolute;z-index:-1;inset:0;overflow:hidden;pointer-events:none;background:linear-gradient(transparent,hsl(var(--scene-halo-b)/.68) 45%,transparent)}\n.jk-pad-sky::before,.jk-pad-sky::after{content:\"\";position:absolute;inset:-30%;background:radial-gradient(ellipse at 32% 50%,hsl(var(--card)/.84) 0%,transparent 26%),radial-gradient(ellipse at 64% 44%,hsl(var(--scene-halo-a)/.9) 2%,transparent 34%);animation:jk-cloud 16s ease-in-out infinite alternate}\n.jk-pad-sky::after{rotate:178deg;animation-delay:-8s}\n@keyframes jk-cloud{to{transform:translate(8%,4%) rotate(8deg)}}\n.jk-pad-wrap{position:relative;width:min(89vw,26rem);margin-top:2rem;perspective:900px;pointer-events:auto}\n.jk-pad-board{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:clamp(5px,1.2vw,9px);padding:clamp(9px,2vw,17px);border-radius:1.35rem;background:linear-gradient(145deg,hsl(var(--card)),hsl(var(--scene-halo-a)));border:1px solid hsl(var(--foreground)/.18);box-shadow:0 7px 0 hsl(var(--muted-foreground)),0 18px 28px hsl(var(--foreground)/.15);transform:rotateX(13deg) rotateZ(var(--turn,-3deg));transition:transform .45s ease}\n.jk-pad-key{position:relative;aspect-ratio:1;display:grid;place-items:center;border-radius:20%;border:1px solid hsl(220 10% 55%/.45);background:linear-gradient(150deg,#fff,#eeeae4);box-shadow:0 4px 0 #9c9994;transition:transform .12s,box-shadow .12s}\n.jk-pad-key img{width:52%;height:52%;object-fit:contain}\n.jk-pad-key small{position:absolute;top:1px;left:5px;font:600 clamp(9px,2.1vw,12px)/1.2 monospace;color:#37383c}\n.jk-pad-key[aria-pressed=true]{outline:2px solid var(--accent-solid);transform:translateY(3px);box-shadow:0 1px 0 #888}\n.jk-pad-key:focus-visible,.jk-pad-next:focus-visible{outline:3px solid var(--accent-solid);outline-offset:3px}\n.jk-pad-cat{position:absolute;right:3%;top:-38px;width:56px;height:47px;pointer-events:none;z-index:1;filter:drop-shadow(0 2px 2px #47362f44);transform-origin:bottom center}\n.jk-pad-cat .paw{transform-origin:39px 29px;animation:jk-paw 2.6s ease-in-out infinite}\n@keyframes jk-paw{0%,55%,100%{transform:rotate(-12deg)}68%,86%{transform:rotate(18deg) translateY(4px)}}\n.jk-pad-detail{text-align:center;margin:1.4rem auto 0;max-width:32rem;min-height:3rem;color:hsl(var(--foreground))}\n.jk-pad-detail strong{display:block;font-size:1.15rem}.jk-pad-detail p{font-size:.85rem;margin:.2rem 0}\n.jk-pad-next{margin:.5rem auto 0;min-height:44px;padding:0 .9rem;border:1px solid hsl(var(--border));border-radius:2rem;color:hsl(var(--foreground));background:hsl(var(--card))}\n@media(prefers-reduced-motion:reduce){.jk-pad-board,.jk-pad-key{transition:none;transform:none}.jk-pad-cat .paw,.jk-pad-sky::before,.jk-pad-sky::after{animation:none}}\n";
  document.head.append(style);
  const descriptions = new Map([["JavaScript","yeeting code into the DOM since '95, no cap! 💯🚀"],["TypeScript","JavaScript's overachieving cousin who's always flexing 💯🔒"],["React","\"use using\" \nusing use = useUsing(\"use\")"],["Next.js","the drama queen of front-end frameworks, and we stan! 👑📜"],["Vue","the chill pill for your frontend, it hits different! 🟢😌"],["Expo","one codebase, every screen, zero Xcode tears 📱✨"],["Tailwind","utility classes hitting different fr fr 🌪️🔥"],["Node.js","JavaScript said 'sike, I'm backend now', deadass! 🔙🔚"],["Express","middlewares go dummy hard, no cap! 🚂💨"],["Bun","node but it chugged three energy drinks 🥟⚡"],["PostgreSQL","SQL but make it fashion, purr 💅🐘"],["MongoDB","flexin' with that NoSQL drip, respectfully! 💪🍃"],["Linux","where 'chmod 777' is the ultimate flex 🔓🙌"],["Git","the code's personal bodyguard, no cap! 🕵️‍♂️🔄"],["Vim","exit? In this economy? Ight, imma head out! 🚪🏃"],["Docker","The best containerization! 🐳🔥"],["NginX","reverse proxy go zoom zoom, sheesh! 🚗💨"],["Claude","my pair programmer that never asks for a coffee break 🤖☕"],["ChatGPT","my rubber duck learned to talk, debug, and politely roast my code 🦆🤖"],["Cloudflare","edge go brrr, my homelab hides behind this orange cloud ☁️🛡️"],["Google Cloud","cloud computing but make it Google vibes, living rent free! ☁️🔥"],["AWS","always extra, making everything more complicated, period! 🌐👨‍💻"],["Home Assistant","my house runs on YAML and vibes, lights obey me fr 🏠💡"],["Proxmox","a whole datacenter in my closet, power bill said ouch 🖥️🔥"],["Steam","\"just one more match\" at 3am, every night 🎮🌙"]]);
  const shortcuts = '1234567890QWERTYUIOPASDFG';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let current;
  function mount(section, list) {
    const items = Array.from(list.querySelectorAll('li img'));
    if (!items.length) return;
    const root = document.createElement('div');
    root.className = 'jk-pad-wrap';
    root.innerHTML = "<svg class=\"jk-pad-cat\" aria-hidden=\"true\" viewBox=\"0 0 58 49\"><g fill=\"#e9ae79\" stroke=\"#664837\" stroke-width=\"1.8\" stroke-linejoin=\"round\"><path d=\"M7 34Q2 30 4 21Q5 17 8 21Q8 29 17 27L26 36Q14 42 7 34Z\"/><ellipse cx=\"27\" cy=\"32\" rx=\"17\" ry=\"11\"/><path d=\"M21 23L20 5L30 11Q36 8 41 11L50 5L49 22Q51 33 37 34Q23 35 21 23Z\"/><path d=\"M22 35Q17 42 23 44Q29 46 31 36\"/><path class=\"paw\" d=\"M37 29Q34 38 41 43Q45 46 48 42Q50 39 44 33\"/></g><path fill=\"#ee9190\" d=\"M23 10l1 7 4-4zm23 0-5 4 5 2z\"/><path fill=\"none\" stroke=\"#61412f\" stroke-width=\"1.8\" stroke-linecap=\"round\" d=\"M26 22q2 3 5 0m8 0q2 3 5-1m-11 5 2 1 2-2m-5-14 2 5m3-5-1 4\"/></svg><div class=\"jk-pad-board\" role=\"group\" aria-label=\"Tech stack pads\"></div>";
    const sky = document.createElement('div');
    sky.className = 'jk-pad-sky';
    sky.setAttribute('aria-hidden','true');
    const detail = document.createElement('div');
    detail.className = 'jk-pad-detail';
    detail.setAttribute('role','status');
    detail.innerHTML = '<strong>Explore my skills</strong><p>Hover, tap, or press a labelled key.</p>';
    const next = document.createElement('button');
    next.type = 'button';
    next.className = 'jk-pad-next';
    next.textContent = 'Next pad →';
    const board = root.querySelector('.jk-pad-board');
    const keys = [];
    let selected = -1;
    let bounce;
    // Forward pointer presses to the existing scene for sound and press accounting.
    function play(index) {
      select(index);
      const char = shortcuts[index];
      const code = (/\d/.test(char) ? 'Digit' : 'Key') + char;
      window.dispatchEvent(new KeyboardEvent('keydown',{key:char,code}));
      window.dispatchEvent(new KeyboardEvent('keyup',{key:char,code}));
    }
    function select(index) {
      if (selected >= 0) keys[selected].setAttribute('aria-pressed','false');
      selected = index;
      const key = keys[index];
      key.setAttribute('aria-pressed','true');
      detail.firstElementChild.textContent = String(index + 1).padStart(2,'0') + ' · ' + items[index].alt;
      detail.lastElementChild.textContent = descriptions.get(items[index].alt) || '';
      if (!reduced.matches) {
        board.style.setProperty('--turn', ((index % 5) - 2) * 1.4 + 'deg');
        bounce?.cancel();
        bounce = root.querySelector('.jk-pad-cat').animate([
          {transform:'rotate(0)'},{transform:'translateY(3px) rotate(8deg)'},{transform:'rotate(0)'}
        ], {duration:300});
      }
    }
    items.forEach((img,index) => {
      const key = document.createElement('button');
      const hint = document.createElement('small');
      const icon = img.cloneNode(false);
      icon.removeAttribute('class');
      icon.alt = '';
      key.type = 'button';
      key.className = 'jk-pad-key';
      key.setAttribute('aria-label', (index + 1) + '. ' + img.alt + ', shortcut ' + shortcuts[index]);
      key.setAttribute('aria-pressed','false');
      hint.textContent = shortcuts[index];
      key.append(hint,icon);
      key.onpointerenter = event => { if (event.pointerType === 'mouse') play(index); };
      key.onclick = () => play(index);
      board.append(key);
      keys.push(key);
    });
    next.onclick = () => play((selected + 1) % keys.length);
    section.append(sky,root,detail,next);
    section.dataset.padReady = '';
    current = {section, select, count:keys.length, root};
  }
  // Navigation and hydration can mount the skills section after the script loads.
  function attach() {
    if (current?.root.isConnected) return;
    current = undefined;
    const section = document.querySelector('section#skills');
    const list = section?.querySelector('ul');
    if (list) mount(section,list);
  }
  attach();
  new MutationObserver(attach).observe(document.body,{childList:true,subtree:true});
  function visible() {
    if (!current) return false;
    const rect = current.section.getBoundingClientRect();
    return rect.top < innerHeight * .5 && rect.bottom > innerHeight * .5;
  }
  window.addEventListener('keydown',event => {
    if (!event.isTrusted || !visible() || event.defaultPrevented || event.repeat || event.ctrlKey || event.metaKey || event.altKey ||
        event.target?.closest?.('input,select,textarea,[contenteditable="true"],[role="dialog"]')) return;
    const index = shortcuts.indexOf(event.key.toUpperCase());
    if (event.key.length === 1 && index >= 0 && index < current.count) current.select(index);
  });
  // Couple the tilt to normal document scrolling without consuming the gesture.
  let frame = 0;
  window.addEventListener('scroll',() => {
    if (frame || reduced.matches || !visible()) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      if (!current) return;
      const rect = current.section.getBoundingClientRect();
      const progress = (innerHeight * .5 - rect.top) / rect.height;
      current.root.querySelector('.jk-pad-board').style.setProperty('--turn',(progress - .5) * 14 + 'deg');
    });
  },{passive:true});
})();