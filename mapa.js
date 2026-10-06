/* mapa.js — mapa de carreiras de Sistemas de Informação.
   Script clássico, sem bibliotecas: funciona abrindo index.html direto (file://).
   Lê apenas a constante global PPC_DATA (ppc-data.js).
   Determinismo: nenhuma posição usa Math.random; as mesmas entradas geram o mesmo mapa. */
(function () {
  'use strict';
  const D = PPC_DATA;
  const NS = 'http://www.w3.org/2000/svg';
  const REDUZ = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  const FUNDO = '#0a0f24';
  const COR_CENTRO = '#2de2c4';
  const COR_CARREIRA = '#ffe9a8';
  const COR_COMPONENTE = '#9fb0d9';
  /* Uma família de cor por eixo: base + matiz e saturação usados para gerar tons do claro ao escuro. */
  const FAMILIAS = {
    'matematica': { base: '#e63fb0', h: 322, s: 76 },
    'computacional': { base: '#ff6a2b', h: 17, s: 100 },
    'ti': { base: '#8b5cf6', h: 258, s: 90 },
    'administrativa': { base: '#2f7bff', h: 217, s: 100 },
    'profissional-social': { base: '#aab3c2', h: 215, s: 14 },
    'complementar': { base: '#9be12f', h: 82, s: 73 }
  };
  const EIXO_COR = {}; Object.keys(FAMILIAS).forEach(k => EIXO_COR[k] = FAMILIAS[k].base);
  const LH = 14;               // altura de linha dos rótulos
  const R1 = 250, R2 = 580;    // raios dos anéis de eixos e agrupamentos

  function hslHex(h, s, l) {
    s /= 100; l /= 100;
    const k = n => (n + h / 30) % 12, a = s * Math.min(l, 1 - l);
    const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return '#' + [f(0), f(8), f(4)].map(v => Math.round(v * 255).toString(16).padStart(2, '0')).join('');
  }
  function luminancia(hex) {
    const c = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255)
      .map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }
  function contraste(a, b) { const x = luminancia(a), y = luminancia(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); }
  /* tom do eixo: t = 0 (mais claro) ... 1 (mais escuro); nunca abaixo de 4,2:1 sobre o fundo */
  function tom(eixo, t, desloc) {
    const f = FAMILIAS[eixo], h = (f.h + (desloc || 0) + 360) % 360;
    let l = 84 - 46 * clamp(t, 0, 1), hex = hslHex(h, f.s, l);
    while (contraste(hex, FUNDO) < 4.2 && l < 90) { l += 1; hex = hslHex(h, f.s, l); }
    return hex;
  }
  function claro(hex, p) {
    const c = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
    return '#' + c.map(v => Math.round(v + (255 - v) * p).toString(16).padStart(2, '0')).join('');
  }
  /* contorno de flor: raio = R (1 + a cos(n·ângulo)) */
  function flor(R, n, a) {
    const N = n * 30; let d = '';
    for (let i = 0; i < N; i++) {
      const u = 2 * Math.PI * i / N, r = R * (1 + a * Math.cos(n * u)), q = u - Math.PI / 2;
      d += (i ? 'L' : 'M') + (r * Math.cos(q)).toFixed(2) + ' ' + (r * Math.sin(q)).toFixed(2);
    }
    return d + 'Z';
  }
  function circuloPath(R) { return `M${R} 0A${R} ${R} 0 1 0 ${-R} 0A${R} ${R} 0 1 0 ${R} 0Z`; }

  /* ---------- utilitários ---------- */
  function append(e, kids) {
    kids.flat(Infinity).forEach(k => {
      if (k == null || k === false) return;
      e.append(k.nodeType ? k : document.createTextNode(String(k)));
    });
    return e;
  }
  function mk(ns, tag, attrs, kids) {
    const e = ns ? document.createElementNS(NS, tag) : document.createElement(tag);
    for (const k in (attrs || {})) {
      const v = attrs[k];
      if (v == null || v === false) continue;
      if (k.slice(0, 2) === 'on' && typeof v === 'function') e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? '' : v);
    }
    return append(e, kids || []);
  }
  const s = (tag, attrs, ...kids) => mk(true, tag, attrs, kids);
  const h = (tag, attrs, ...kids) => mk(false, tag, attrs, kids);
  const norm = t => String(t).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  function wrap(text, max) {
    const out = []; let cur = '';
    String(text).split(/\s+/).forEach(w => {
      if (cur && (cur + ' ' + w).length > max) { out.push(cur); cur = w; }
      else cur = cur ? cur + ' ' + w : w;
    });
    if (cur) out.push(cur);
    return out;
  }
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const rad = d => d * Math.PI / 180;

  /* ---------- CourseMap: índices sobre os dados ---------- */
  class CourseMap {
    constructor(data) {
      this.D = data;
      this.eixos = data.eixos;
      this.eixoPorId = {}; data.eixos.forEach(e => this.eixoPorId[e.id] = e);
      this.grupos = {}; this.gruposDoEixo = {};
      data.eixos.forEach(e => this.gruposDoEixo[e.id] = []);
      data.agrupamentos.forEach(g => { this.grupos[g.id] = g; this.gruposDoEixo[g.eixo].push(g); });
      this.gruposDeCarreira = {}; this.gruposDeDisc = {};
      data.agrupamentos.forEach(g => {
        g.carreiras.forEach(c => (this.gruposDeCarreira[c] = this.gruposDeCarreira[c] || []).push(g.id));
        g.disciplinas.forEach(d => (this.gruposDeDisc[d.ref] = this.gruposDeDisc[d.ref] || []).push(g.id));
      });
      this.carreirasDeDisc = {};
      Object.values(data.carreiras).forEach(c => (c.relacaoCurso || []).forEach(r =>
        (this.carreirasDeDisc[r.disciplina] = this.carreirasDeDisc[r.disciplina] || []).push({ carreira: c.id, rel: r })));
      this.tomGrupo = {};
      data.eixos.forEach(e => {
        const gs = this.gruposDoEixo[e.id];
        gs.forEach((g, i) => { this.tomGrupo[g.id] = tom(e.id, gs.length > 1 ? i / (gs.length - 1) : 0.45, i % 2 ? 8 : -8); });
      });
      this.discDoCurso = {};
      Object.values(data.disciplinas).forEach(d => d.compartilhadaCom.forEach(e =>
        (this.discDoCurso[e.prefixo] = this.discDoCurso[e.prefixo] || []).push({ ref: d.id, equivalente: e.equivalente })));
    }
    homeGroup(ref) {
      const gs = this.gruposDeDisc[ref] || [];
      return gs.find(gid => this.grupos[gid].disciplinas.some(d => d.ref === ref && d.papel === 'home')) || gs[0];
    }
    tomDisc(gid, j, m) {
      const e = this.grupos[gid].eixo;
      return tom(e, m > 1 ? j / (m - 1) : 0.45, j % 2 ? 8 : -8);
    }
    entidade(ref) {
      return this.D.disciplinas[ref] || this.D.carreiras[ref] || this.D.componentes[ref] || null;
    }
  }

  /* ---------- RadialLayout: posições determinísticas ---------- */
  class RadialLayout {
    constructor(map) {
      this.map = map; this.pos = { root: { x: 0, y: 0 } }; this.cache = {}; this.base = [];
      const gs = map.D.agrupamentos, n = gs.length;
      // fatias iguais por agrupamento, com uma folga entre eixos (determinístico)
      const folga = 0.8, fatia = 360 / (n + folga * map.eixos.length);
      let acum = 0, ant = null;
      gs.forEach(g => {
        if (ant && g.eixo !== ant) acum += folga;
        ant = g.eixo;
        const a = rad(-90 + fatia * (acum + 0.5)); acum += 1;
        this.pos[g.id] = { x: R2 * Math.cos(a), y: R2 * Math.sin(a), a };
      });
      map.eixos.forEach(e => {
        const as = map.gruposDoEixo[e.id].map(g => this.pos[g.id].a);
        const a = as.reduce((p, c) => p + c, 0) / as.length;
        this.pos[e.id] = { x: R1 * Math.cos(a), y: R1 * Math.sin(a), a };
      });
      // rótulos dos nós fixos
      this.rot = {};
      this.rot.root = { lines: wrap(map.D.curso.rotulo, 17) };
      map.eixos.forEach(e => {
        const p = this.pos[e.id];
        this.rot[e.id] = this.rotulo(-Math.cos(p.a), -Math.sin(p.a), 40, wrap(e.rotulo, 16), 7.4);
      });
      gs.forEach(g => {
        const p = this.pos[g.id];
        this.rot[g.id] = this.rotulo(Math.cos(p.a), Math.sin(p.a), 24, wrap(g.rotulo, 20), 6.4);
      });
      // retângulos ocupados pelos nós fixos
      this.base.push({ x0: -86, y0: -86, x1: 86, y1: 86 });
      map.eixos.forEach(e => this.base.push(this.caixa(e.id, 36)));
      gs.forEach(g => { const q = this.pos[g.id]; this.base.push({ gid: g.id, x0: q.x - 20, y0: q.y - 20, x1: q.x + 20, y1: q.y + 20 }); });
    }
    rotulo(vx, vy, d, lines, cw) {
      const w = Math.max(...lines.map(l => l.length)) * cw, hg = lines.length * LH;
      const ax = vx > 0.35 ? 'start' : vx < -0.35 ? 'end' : 'middle';
      const x = vx * d;
      const top = vy > 0.35 ? vy * d : vy < -0.35 ? vy * d - hg : vy * d - hg / 2;
      const x0 = ax === 'start' ? x : ax === 'end' ? x - w : x - w / 2;
      return { lines, anchor: ax, x, top, box: { x0, y0: top, x1: x0 + w, y1: top + hg } };
    }
    caixa(id, r) {
      const p = this.pos[id], l = this.rot[id].box;
      return {
        x0: p.x + Math.min(-r, l.x0), y0: p.y + Math.min(-r, l.y0),
        x1: p.x + Math.max(r, l.x1), y1: p.y + Math.max(r, l.y1)
      };
    }
    static choca(a, b, m) { return a.x0 < b.x1 + m && a.x1 > b.x0 - m && a.y0 < b.y1 + m && a.y1 > b.y0 - m; }

    layoutGroup(gid) {
      if (this.cache[gid]) return this.cache[gid];
      const map = this.map, g = map.grupos[gid], G = this.pos[gid];
      const ocupados = this.base.filter(b => b.gid !== gid); ocupados.push(this.caixa(gid, 26));
      const itens = { disc: [], carr: [], sol: [] };
      g.disciplinas.forEach(d => itens.disc.push({ tipo: 'disciplina', ref: d.ref, papel: d.papel }));
      (g.componentes || []).forEach(c => itens.disc.push({ tipo: 'componente', ref: c }));
      g.carreiras.forEach(c => itens.carr.push({ tipo: 'carreira', ref: c }));
      g.resultados.forEach(r => itens.sol.push({ tipo: 'estrela', ref: r.id }));
      const nos = [];
      const lados = [['disc', -42], ['carr', 42], ['sol', 0]];
      lados.forEach(([lado, off]) => {
        const lista = itens[lado], n = lista.length, sol = lado === 'sol';
        const centro = G.a + rad(off);
        const passo = n > 1 ? (sol ? rad(9) : Math.min(rad(26), rad(96) / (n - 1))) : 0;
        lista.forEach((it, i) => {
          const a = centro + (i - (n - 1) / 2) * passo;
          const vx = Math.cos(a), vy = Math.sin(a);
          const lines = sol ? [] : wrap((map.entidade(it.ref) || {}).rotulo, 26);
          let escolhido = null;
          for (let k = 0; k < 14; k++) {
            const r = (sol ? 250 : n > 6 ? 175 : 150) + k * 40, mt = sol ? 5 : 15;
            const x = G.x + r * vx, y = G.y + r * vy;
            const lab = sol ? { lines: [], anchor: 'middle', x: 0, top: 0, box: { x0: 0, y0: 0, x1: 0, y1: 0 } } : this.rotulo(vx, vy, 18, lines, 6.7);
            const cx = { x0: x - mt, y0: y - mt, x1: x + mt, y1: y + mt };
            const lb = { x0: x + lab.box.x0, y0: y + lab.box.y0, x1: x + lab.box.x1, y1: y + lab.box.y1 };
            const caixa = { x0: Math.min(cx.x0, lb.x0), y0: Math.min(cx.y0, lb.y0), x1: Math.max(cx.x1, lb.x1), y1: Math.max(cx.y1, lb.y1) };
            escolhido = { x, y, lab, caixa };
            if (!ocupados.some(o => RadialLayout.choca(o, caixa, 3))) break;
          }
          ocupados.push(escolhido.caixa);
          nos.push(Object.assign({ id: gid + '~' + it.ref, gid, x: escolhido.x, y: escolhido.y,
            lab: escolhido.lab, lines, caixa: escolhido.caixa }, it));
        });
      });
      const gc = this.caixa(gid, 26);
      const bbox = nos.reduce((b, n) => ({
        x0: Math.min(b.x0, n.caixa.x0), y0: Math.min(b.y0, n.caixa.y0),
        x1: Math.max(b.x1, n.caixa.x1), y1: Math.max(b.y1, n.caixa.y1)
      }), gc);
      return (this.cache[gid] = { nos, bbox });
    }
  }

  /* ---------- ícones dos eixos (grade 24 × 24, traço simples) ---------- */
  const ICONES = {
    'matematica': () => [s('path', { d: 'M5 7h14M9.5 7v10M15 7v7.5c0 1.6.9 2.5 2.5 2.5' })],
    'computacional': () => [s('rect', { x: 7, y: 7, width: 10, height: 10, rx: 1.5 }), s('path', { d: 'M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4' })],
    'ti': () => [s('path', { d: 'M12 4l8 4-8 4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4' })],
    'administrativa': () => [s('path', { d: 'M5 20v-5M11 20v-8M17 20v-11M4 9l5-4 3.5 3L19 3M15.5 3H19v3.5' })],
    'profissional-social': () => [s('circle', { cx: 9, cy: 8, r: 3 }), s('path', { d: 'M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6' }), s('circle', { cx: 17, cy: 9.5, r: 2.4 }), s('path', { d: 'M16.4 14.2c2.7.2 4.6 2.3 4.6 5.3' })],
    'complementar': () => [s('path', { d: 'M5 8h4.2a2.3 2.3 0 1 1 4.6 0H18v4.2a2.3 2.3 0 1 1 0 4.6V20H5v-4.2a2.3 2.3 0 1 0 0-4.6z' })]
  };

  /* ---------- MapRenderer: desenha e atualiza elementos SVG ---------- */
  class MapRenderer {
    constructor(svg, map, layout) {
      this.svg = svg; this.map = map; this.layout = layout;
      this.mundo = s('g', { id: 'mundo' });
      this.camadaArestas = s('g', { class: 'arestas' });
      this.camadaNos = s('g', { class: 'nos' });
      this.mundo.append(this.camadaArestas, this.camadaNos);
      this.defs = s('defs');
      svg.append(this.defs, this.mundo);
      this.nos = new Map(); this.arestas = new Map(); this.gradientes = new Map();
      this.formas = { curso: flor(62, 12, 0.06), eixo: flor(26, 10, 0.09), agrupamento: flor(15, 8, 0.12), disciplina: circuloPath(7.5) };
      Object.keys(this.formas).forEach(k => this.defs.append(s('clipPath', { id: 'rec-' + k }, s('path', { d: this.formas[k] }))));
      this.defs.append(s('linearGradient', { id: 'grad-faixa', x1: 0, y1: 0, x2: 1, y2: 0 },
        s('stop', { offset: 0, 'stop-color': '#fff', 'stop-opacity': 0 }),
        s('stop', { offset: 0.5, 'stop-color': '#fff', 'stop-opacity': 0.6 }),
        s('stop', { offset: 1, 'stop-color': '#fff', 'stop-opacity': 0 })));
    }
    /* efeito de luz: pulso e faixa recortados pelo contorno da própria bolha (visíveis só quando selecionada) */
    luz(n) {
      const R = { curso: 70, eixo: 32, agrupamento: 20, disciplina: 12 }[n.tipo];
      if (!R) return null;
      return s('g', { class: 'luz', 'clip-path': 'url(#rec-' + n.tipo + ')' },
        s('rect', { class: 'pulso', x: -R, y: -R, width: 2 * R, height: 2 * R, fill: n.corLuz || '#fff' }),
        s('rect', { class: 'faixa', x: -R * 0.45, y: -R, width: R * 0.9, height: 2 * R, fill: 'url(#grad-faixa)' }));
    }
    icone(n) {
      if (n.tipo !== 'eixo' || !ICONES[n.ref]) return null;
      return s('g', { class: 'icone', transform: 'scale(1.19) translate(-12 -12)', fill: 'none', stroke: FUNDO, 'stroke-width': 2.3,
        'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, ...ICONES[n.ref]());
    }
    forma(n) {
      const t = n.tipo;
      if (t === 'curso') return [
        s('circle', { class: 'brilho', r: 84, fill: 'rgba(45,226,196,.10)' }),
        s('path', { class: 'forma', d: this.formas.curso, fill: '#05070d', stroke: COR_CENTRO, 'stroke-width': 2.5 })];
      if (t === 'eixo') return [s('path', { class: 'forma', d: this.formas.eixo, fill: n.cor, stroke: 'rgba(255,255,255,.55)', 'stroke-width': 2 })];
      if (t === 'agrupamento') return [
        s('path', { class: 'forma', d: this.formas.agrupamento, fill: FUNDO, stroke: n.cor, 'stroke-width': 3 })];
      if (t === 'disciplina') {
        const sol = n.natureza === 'obrigatoria';
        const out = [s('circle', { class: 'forma', r: 7.5, fill: sol ? n.cor : FUNDO, stroke: n.cor, 'stroke-width': 2.2 })];
        if (n.papel === 'relacionada') out.push(s('circle', { r: 12, fill: 'none', stroke: n.cor, 'stroke-width': 1.2, 'stroke-dasharray': '2.5 2.5' }));
        return out;
      }
      if (t === 'carreira') {
        const R = 12, r = 4.4; let d = '';
        for (let i = 0; i < 8; i++) {
          const a = rad(-90 + i * 45), rr = i % 2 ? r : R;
          d += (i ? 'L' : 'M') + (rr * Math.cos(a)).toFixed(2) + ' ' + (rr * Math.sin(a)).toFixed(2);
        }
        const out = [s('path', { class: 'forma', d: d + 'Z' })];
        if (n.ppcStatus === 'citado') out.push(s('circle', { r: 16, fill: 'none', stroke: COR_CARREIRA, 'stroke-width': 1.6 }));
        else if (n.cobertura === 'parcial') out.push(s('circle', { r: 16, fill: 'none', stroke: '#ffa94d', 'stroke-width': 1.4, 'stroke-dasharray': '3 3' }));
        return out;
      }
      return [s('path', { class: 'forma', d: 'M0 -9L9 0L0 9L-9 0Z' })];   // resultado / componente
    }
    raioAnel(n) { return { curso: 76, eixo: 35, agrupamento: 25, disciplina: 15, carreira: 20 }[n.tipo] || 15; }
    criar(n) {
      if (n.tipo === 'estrela') {
        const e = s('g', { class: 'no estrela', transform: `translate(${n.x.toFixed(1)} ${n.y.toFixed(1)})`, 'aria-hidden': 'true', 'data-id': n.id },
          s('g', { class: 'corpo' }, s('circle', { r: 2.4, fill: COR_COMPONENTE, opacity: 0.55 })));
        return e;
      }
      const g = s('g', { class: 'no ' + n.tipo + ' entrando', transform: `translate(${n.x.toFixed(1)} ${n.y.toFixed(1)})`,
        tabindex: 0, role: 'button', 'data-id': n.id, 'aria-label': n.aria });
      if (n.expansivel) g.setAttribute('aria-expanded', 'false');
      const corpo = s('g', { class: 'corpo' });
      corpo.append(s('circle', { class: 'alvo', r: Math.max(16, this.raioAnel(n) - 4), fill: 'transparent' }));
      corpo.append(...this.forma(n));
      const luz = this.luz(n); if (luz) corpo.append(luz);
      const ic = this.icone(n); if (ic) corpo.append(ic);
      corpo.append(s('circle', { class: 'anel', r: this.raioAnel(n) }));
      if (n.tipo === 'curso') {
        const t = s('text', { class: 'rotulo', 'text-anchor': 'middle' });
        const top = -(n.lab.lines.length * LH) / 2 + 11;
        n.lab.lines.forEach((l, i) => t.append(s('tspan', { x: 0, y: top + i * LH }, l)));
        corpo.append(t);
      } else {
        const L = n.lab, t = s('text', { class: 'rotulo', 'text-anchor': L.anchor });
        L.lines.forEach((l, i) => t.append(s('tspan', { x: L.x.toFixed(1), y: (L.top + 11 + i * LH).toFixed(1) }, l)));
        corpo.append(t);
      }
      g.append(corpo);
      if (!REDUZ) setTimeout(() => g.classList.remove('entrando'), 520); else g.classList.remove('entrando');
      return g;
    }
    selo(g, valor) {
      let b = g.querySelector('.contagem');
      if (valor == null) { if (b) b.remove(); return; }
      if (!b) {
        b = s('g', { class: 'contagem', transform: 'translate(15 -15)' },
          s('circle', { r: 9, fill: '#ffe9a8' }), s('text', { 'text-anchor': 'middle', y: 3.8, 'font-size': 11, 'font-weight': 700, fill: '#1b1b1b' }, String(valor)));
        g.querySelector('.corpo').append(b);
      } else b.querySelector('text').textContent = String(valor);
    }
    sync(nos, arestas) {
      const idsN = new Set(nos.map(n => n.id)), idsA = new Set(arestas.map(a => a.id));
      for (const [id, el] of this.nos) if (!idsN.has(id)) { el.remove(); this.nos.delete(id); }
      for (const [id, el] of this.arestas) if (!idsA.has(id)) {
        el.remove(); this.arestas.delete(id);
        const gr = this.gradientes.get(id); if (gr) { gr.remove(); this.gradientes.delete(id); }
      }
      arestas.forEach(a => {
        let el = this.arestas.get(a.id);
        if (!el) {
          const gid = 'gr-' + a.id.replace(/[^a-zA-Z0-9]/g, '_');
          const gr = s('linearGradient', { id: gid, gradientUnits: 'userSpaceOnUse', x1: a.x1.toFixed(1), y1: a.y1.toFixed(1), x2: a.x2.toFixed(1), y2: a.y2.toFixed(1) },
            s('stop', { offset: 0, 'stop-color': a.c1 }), s('stop', { offset: 1, 'stop-color': a.c2 }));
          this.defs.append(gr); this.gradientes.set(a.id, gr);
          el = s('line', { class: 'aresta', x1: a.x1.toFixed(1), y1: a.y1.toFixed(1), x2: a.x2.toFixed(1), y2: a.y2.toFixed(1) });
          el.style.stroke = 'url(#' + gid + ')';
          this.camadaArestas.append(el); this.arestas.set(a.id, el);
        }
        el.setAttribute('class', 'aresta' + (a.cls ? ' ' + a.cls : ''));
      });
      nos.forEach(n => {
        let el = this.nos.get(n.id);
        if (!el) { el = this.criar(n); this.camadaNos.append(el); this.nos.set(n.id, el); }
        const antigo = el.classList.contains('entrando');
        el.setAttribute('class', 'no ' + n.tipo + (n.cls ? ' ' + n.cls : '') + (antigo ? ' entrando' : ''));
        if (n.expansivel) el.setAttribute('aria-expanded', n.aberto ? 'true' : 'false');
        if (n.tipo === 'agrupamento') this.selo(el, n.badge);
      });
    }
  }

  /* ---------- InfoCard: conteúdo do cartão flutuante ---------- */
  class InfoCard {
    constructor(ctl, map, el) { this.ctl = ctl; this.map = map; this.el = el; }
    link(texto, fn) { return h('button', { class: 'link', type: 'button', onclick: fn }, texto); }
    etq(texto, cls, cor) { return h('span', { class: 'etq ' + (cls || '') }, cor ? h('i', { style: 'background:' + cor }) : null, texto); }
    sec(titulo, ...kids) { return [h('h3', null, titulo), ...kids]; }
    lista(itens) { return h('ul', null, itens.map(i => h('li', { class: 'lig' }, i))); }
    nomeEixo(id) { return (this.map.eixoPorId[id] || {}).rotulo || id; }
    rotasDe(gids, ref, tipo) {
      return this.sec('Rotas em que aparece', this.lista(gids.map(gid => {
        const g = this.map.grupos[gid];
        return this.link(g.rotulo + ' · ' + this.nomeEixo(g.eixo), () => this.ctl.abrirNa(gid, ref, tipo));
      })));
    }
    mostrar(c) {
      const el = this.el; el.replaceChildren();
      const fechar = h('button', { class: 'fechar', type: 'button', 'aria-label': 'Fechar cartão', onclick: () => this.ctl.fecharCartao() }, '✕');
      let corpo = [];
      const f = this['c_' + c.tipo];
      if (f) corpo = f.call(this, c);
      el.append(fechar, ...corpo);
      el.scrollTop = 0; el.hidden = false;
    }
    c_curso() {
      const m = D.meta;
      return [h('div', { class: 'tipo' }, 'Curso'), h('h2', null, D.curso.rotulo), h('p', null, D.curso.descricao),
        h('div', { class: 'etiquetas' }, this.etq(m.cargaHorariaTotal.toLocaleString('pt-BR') + ' h no total'),
          this.etq(m.cargaObrigatorias.toLocaleString('pt-BR') + ' h obrigatórias'),
          this.etq(m.cargaOptativas + ' h optativas'), this.etq(m.cargaComponentes + ' h de componentes')),
        ...this.sec('Seis eixos de formação', this.lista(D.eixos.map(e =>
          h('span', null, h('i', { style: 'display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:8px;background:' + EIXO_COR[e.id] }), this.link(e.rotulo + ' · ' + e.percentualCarga + '%', () => this.ctl.abrirEixo(e.id, true)))))),
        h('p', null, 'Percentuais sobre a carga horária total do curso.')];
    }
    c_eixo(c) {
      const e = this.map.eixoPorId[c.ref];
      return [h('div', { class: 'tipo' }, 'Eixo de formação'), h('h2', null, e.rotulo), h('p', null, e.descricao),
        h('div', { class: 'etiquetas' }, this.etq(e.percentualCarga + '% da carga horária total', '', EIXO_COR[e.id])),
        ...this.sec('Agrupamentos deste eixo', this.lista(this.map.gruposDoEixo[e.id].map(g =>
          this.link(g.rotulo, () => this.ctl.abrirGrupo(g.id, true)))))];
    }
    c_agrupamento(c) {
      const g = this.map.grupos[c.ref], D_ = D.disciplinas;
      const out = [h('div', { class: 'tipo' }, 'Agrupamento · eixo ' + this.nomeEixo(g.eixo)), h('h2', null, g.rotulo), h('p', null, g.descricao),
        h('p', { class: 'aviso-cartao', style: 'border:0;margin:0;padding:0' }, 'Descrição escrita para este mapa, a partir das disciplinas do curso.')];
      if (g.disciplinas.length) out.push(...this.sec('Disciplinas', this.lista(g.disciplinas.map(x => {
        const d = D_[x.ref];
        return h('span', null, this.link(d.rotulo, () => this.ctl.abrirNa(g.id, x.ref, 'disciplina')),
          ' ', h('small', null, d.natureza === 'optativa' ? '(optativa)' : '(' + d.periodo + 'º per.)'),
          x.papel === 'relacionada' ? h('small', null, ' · vem de outra área') : null);
      }))));
      if (g.carreiras.length) out.push(...this.sec('Carreiras possíveis', this.lista(g.carreiras.map(cid =>
        this.link(D.carreiras[cid].rotulo, () => this.ctl.abrirNa(g.id, cid, 'carreira'))))));
      if (g.componentes) out.push(...this.sec('Outras partes do curso', this.lista(g.componentes.map(k =>
        this.link(D.componentes[k].rotulo + ' · ' + D.componentes[k].cargaHoraria + ' h', () => this.ctl.abrirNa(g.id, k, 'componente'))))));
      return out;
    }
    linhaTempo(d) {
      const cel = [];
      for (let p = 1; p <= 8; p++) {
        let cls = '';
        if (d.natureza === 'obrigatoria' && d.periodo === p) cls = 'on';
        else if (d.natureza === 'optativa' && p >= 5) cls = 'faixa';
        cel.push(h('span', { class: cls, title: p + 'º período' }, p + 'º'));
      }
      return h('div', { class: 'linha-tempo', role: 'img',
        'aria-label': d.natureza === 'obrigatoria' ? 'Cursada no ' + d.periodo + 'º período' : 'Optativa, cursada do 5º ao 8º período' }, cel);
    }
    c_disciplina(c) {
      const d = D.disciplinas[c.ref], m = this.map;
      const out = [h('div', { class: 'tipo' }, 'Disciplina · eixo ' + this.nomeEixo(d.eixoPpc)), h('h2', null, d.rotulo),
        h('div', { class: 'etiquetas' },
          this.etq(d.natureza === 'optativa' ? 'Optativa' : 'Obrigatória', '', EIXO_COR[d.eixoPpc]),
          this.etq(d.periodo ? d.periodo + 'º período' : 'Do 5º ao 8º período'),
          this.etq(d.cargaHoraria + ' h'),
          ...d.compartilhadaCom.map(e => h('span', { class: 'etq selo', role: 'button', tabindex: 0, title: 'Ver o curso e as outras disciplinas em comum',
            onclick: () => this.ctl.mostrarCurso(e.prefixo, d.id),
            onkeydown: ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); this.ctl.mostrarCurso(e.prefixo, d.id); } } },
            'também cursada em ' + e.curso)))];
      out.push(...this.sec('Quando é cursada', this.linhaTempo(d)));
      if (d.codigo) out.push(h('p', null, h('small', null, 'Código da disciplina: ' + d.codigo)));
      const rel = m.carreirasDeDisc[d.id] || [];
      if (rel.length) out.push(...this.sec('Carreiras que usam esta disciplina', h('ul', null,
        rel.slice().sort((a, b) => (a.rel.forca !== 'principal') - (b.rel.forca !== 'principal')).map(r => {
          const car = D.carreiras[r.carreira];
          return h('li', { class: 'lig' }, h('span', { class: 'pe ' + (r.rel.forca === 'principal' ? 'p' : '') }, r.rel.forca === 'principal' ? 'Base' : 'Complementa'),
            this.link(car.rotulo, () => this.ctl.revelarCarreira(car.id)), h('span', { class: 'porque' }, r.rel.porque));
        }))));
      if (rel.length) out.push(h('p', null, h('small', null, 'Base: esta disciplina é o fundamento da carreira. Complementa: ajuda, mas não é o centro dela.')));
      const gs = m.gruposDeDisc[d.id] || [];
      if (gs.length) out.push(...this.rotasDe(gs, d.id, 'disciplina'));
      if (d.ementa) out.push(h('details', null, h('summary', null, 'Conteúdo da disciplina (ementa)'), h('p', null, d.ementa)));
      else if (d.ementaNota) out.push(h('p', null, h('small', null, d.ementaNota)));
      return out;
    }
    c_carreira(c) {
      const car = D.carreiras[c.ref], m = this.map;
      const status = car.ppcStatus === 'citado' ? this.etq('Profissão indicada pelo curso', 'citada')
        : car.ppcStatus === 'variante' ? this.etq('Variação de uma profissão indicada pelo curso', 'citada')
          : this.etq(car.cobertura === 'parcial' ? 'Deduzida do conteúdo das disciplinas · o curso cobre só parte dela' : 'Deduzida do conteúdo das disciplinas', car.cobertura === 'parcial' ? 'parcial' : '');
      const out = [h('div', { class: 'tipo' }, 'Carreira'), h('h2', null, car.rotulo), h('div', { class: 'etiquetas' }, status),
        h('p', null, car.descricao)];
      if (car.atividades.length) out.push(...this.sec('O que a profissão faz', this.lista(car.atividades)));
      if (car.habilidades.length) out.push(...this.sec('Habilidades centrais', this.lista(car.habilidades)));
      if (car.relacaoCurso.length) out.push(...this.sec('Disciplinas do curso relacionadas', h('ul', null,
        car.relacaoCurso.slice().sort((a, b) => (a.forca !== 'principal') - (b.forca !== 'principal')).map(r => {
          const d = D.disciplinas[r.disciplina];
          return h('li', { class: 'lig' }, h('span', { class: 'pe ' + (r.forca === 'principal' ? 'p' : '') }, r.forca === 'principal' ? 'Base' : 'Complementa'),
            this.link(d.rotulo, () => this.ctl.revelarDisciplina(d.id)),
            h('small', null, d.natureza === 'optativa' ? ' (optativa)' : ' (' + d.periodo + 'º per.)'),
            h('span', { class: 'porque' }, r.porque), r.trecho ? h('span', { class: 'trecho' }, '“' + r.trecho + '”') : null);
        })), h('p', null, h('small', null, 'Base: o conteúdo da disciplina é o fundamento da carreira. Complementa: ajuda, mas não é o centro dela. Os trechos em itálico foram copiados do conteúdo oficial da disciplina.'))));
      const gs = m.gruposDeCarreira[car.id] || [];
      if (gs.length) out.push(...this.rotasDe(gs, car.id, 'carreira'));
      if (car.fontesInfo.length) out.push(h('details', null, h('summary', null, 'Fontes das informações da profissão'),
        h('ul', null, car.fontesInfo.map(f => h('li', null, h('a', { href: f.url, target: '_blank', rel: 'noopener noreferrer' }, f.rotulo)))),
        h('p', null, 'Textos parafraseados das fontes; a relação com as disciplinas vem do conteúdo delas.')));
      else out.push(h('p', null, h('small', null, 'Sem fonte externa: esta carreira foi ligada ao curso apenas pelo conteúdo das disciplinas.')));
      return out;
    }
    c_componente(c) {
      const k = D.componentes[c.ref];
      return [h('div', { class: 'tipo' }, 'Parte do curso'), h('h2', null, k.rotulo),
        h('div', { class: 'etiquetas' }, this.etq(k.cargaHoraria + ' h')), h('p', null, k.descricao)];
    }
    c_cursoviz(c) {
      const v = D.cursosVizinhos[c.prefixo], lista = this.map.discDoCurso[c.prefixo] || [];
      return [h('div', { class: 'tipo' }, 'Outro curso do campus'), h('h2', null, v.nome), h('p', null, v.nota),
        ...this.sec('Disciplinas deste curso em comum (' + lista.length + ')', this.lista(lista.map(x => {
          const d = D.disciplinas[x.ref];
          return h('span', null, this.link(d.rotulo, () => this.ctl.revelarDisciplina(d.id)),
            h('span', { class: 'porque', style: 'margin-left:0' }, 'Equivalente no outro curso: ' + x.equivalente));
        }))), h('p', null, 'Os agrupamentos que contêm essas disciplinas estão destacados no mapa, com a contagem.')];
    }
  }

  /* ---------- MapController: estado, ações, câmera e interação ---------- */
  class MapController {
    constructor() {
      this.map = new CourseMap(D); this.layout = new RadialLayout(this.map);
      this.svg = document.getElementById('mapa');
      this.rend = new MapRenderer(this.svg, this.map, this.layout);
      this.card = new InfoCard(this, this.map, document.getElementById('cartao'));
      this.st = { raiz: false, eixos: new Set(), grupo: null, sel: null, cartao: null, trilha: null,
        filtro: { natureza: 'todas', periodo: '' } };
      this.cam = { x: 0, y: 0, k: 1 }; this.anim = null;
      this.ui = {
        chip: document.getElementById('chip-destaque'), dica: document.getElementById('dica'),
        anuncio: document.getElementById('anuncio'), estrelas: document.getElementById('estrelas')
      };
      this.estrelas(); this.render(); this.aplicar(); this.ligarEventos();
      this.busca(); this.filtros(); this.legenda();
    }

    /* --- helpers de estado --- */
    centro() {
      const W = innerWidth, H = innerHeight, aberto = !this.ui.cartaoEl && !document.getElementById('cartao').hidden;
      if (aberto && W >= 900) { const aw = W - 400; return { cx: aw / 2, cy: H / 2 + 8, aw: aw - 30, ah: H - 150 }; }
      if (aberto && W < 760) { const ah = H * 0.46 - 60; return { cx: W / 2, cy: 70 + ah / 2, aw: W - 20, ah }; }
      if (aberto) { const aw = W - 400; return { cx: Math.max(aw, 300) / 2, cy: H / 2 + 8, aw: Math.max(aw, 300) - 30, ah: H - 150 }; }
      return { cx: W / 2, cy: H / 2 + 8, aw: W - 40, ah: H - 150 };
    }
    anunciar(t) { this.ui.anuncio.textContent = t; }

    /* --- câmera --- */
    aplicar() {
      const c = this.centro(), k = this.cam.k;
      this.rend.mundo.setAttribute('transform', `translate(${(c.cx - this.cam.x * k).toFixed(2)} ${(c.cy - this.cam.y * k).toFixed(2)}) scale(${k.toFixed(4)})`);
      (this.camadasFundo || []).forEach(c => c.g.setAttribute('transform',
        `translate(${clamp(-this.cam.x * c.f, -c.lim, c.lim).toFixed(1)} ${clamp(-this.cam.y * c.f, -c.lim, c.lim).toFixed(1)})`));
    }
    ir(x, y, k, ms) {
      if (this.anim) cancelAnimationFrame(this.anim);
      ms = ms == null ? 520 : ms;
      const a = Object.assign({}, this.cam);
      if (REDUZ || ms <= 0) { this.cam = { x, y, k }; this.aplicar(); return; }
      const t0 = performance.now();
      const passo = t => {
        const p = clamp((t - t0) / ms, 0, 1), e = 1 - Math.pow(1 - p, 3);
        this.cam = { x: a.x + (x - a.x) * e, y: a.y + (y - a.y) * e, k: a.k + (k - a.k) * e };
        this.aplicar();
        this.anim = p < 1 ? requestAnimationFrame(passo) : null;
      };
      this.anim = requestAnimationFrame(passo);
    }
    enquadrar(rects, minK, maxK) {
      if (!rects.length) return;
      const b = rects.reduce((p, r) => ({ x0: Math.min(p.x0, r.x0), y0: Math.min(p.y0, r.y0), x1: Math.max(p.x1, r.x1), y1: Math.max(p.y1, r.y1) }),
        { x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity });
      const c = this.centro(), bw = b.x1 - b.x0 + 60, bh = b.y1 - b.y0 + 60;
      const k = clamp(Math.min(c.aw / bw, c.ah / bh), minK || 0.3, maxK || 1.25);
      this.ir((b.x0 + b.x1) / 2, (b.y0 + b.y1) / 2, k);
    }
    zoomEm(fator, sx, sy) {
      const c = this.centro(), k0 = this.cam.k, k1 = clamp(k0 * fator, 0.25, 2.6);
      if (sx == null) { sx = c.cx; sy = c.cy; }
      const px = this.cam.x + (sx - c.cx) / k0, py = this.cam.y + (sy - c.cy) / k0;
      this.cam = { k: k1, x: px - (sx - c.cx) / k1, y: py - (sy - c.cy) / k1 };
      this.aplicar();
    }
    caixaNo(id) { return this.layout.caixa(id, id === 'root' ? 86 : this.map.eixoPorId[id] ? 36 : 26); }

    /* --- visibilidade e classes --- */
    noInfo(tipo, base) { return base; }
    nosVisiveis() {
      const st = this.st, L = this.layout, m = this.map, nos = [], ar = [];
      const root = { id: 'root', tipo: 'curso', ref: 'curso-bsi', x: 0, y: 0, lab: L.rot.root, expansivel: true, aberto: st.raiz,
        cor: COR_CENTRO, corLuz: claro(COR_CENTRO, 0.35),
        aria: D.curso.rotulo + ' — ' + (st.raiz ? 'aberto' : 'clique para abrir') };
      nos.push(root);
      if (st.raiz) m.eixos.forEach(e => {
        const p = L.pos[e.id];
        nos.push({ id: e.id, tipo: 'eixo', ref: e.id, x: p.x, y: p.y, lab: L.rot[e.id], cor: EIXO_COR[e.id], corLuz: claro(EIXO_COR[e.id], 0.55), expansivel: true,
          aberto: st.eixos.has(e.id), aria: 'Eixo ' + e.rotulo });
        ar.push({ id: 'root>' + e.id, a: 'root', b: e.id, x1: 0, y1: 0, x2: p.x, y2: p.y, c1: COR_CENTRO, c2: EIXO_COR[e.id] });
        if (st.eixos.has(e.id)) m.gruposDoEixo[e.id].forEach(g => {
          const q = L.pos[g.id];
          nos.push({ id: g.id, tipo: 'agrupamento', ref: g.id, gid: g.id, x: q.x, y: q.y, lab: L.rot[g.id], cor: m.tomGrupo[g.id], corLuz: claro(m.tomGrupo[g.id], 0.5), expansivel: true,
            aberto: st.grupo === g.id, aria: 'Agrupamento ' + g.rotulo });
          ar.push({ id: e.id + '>' + g.id, a: e.id, b: g.id, x1: p.x, y1: p.y, x2: q.x, y2: q.y, c1: EIXO_COR[e.id], c2: m.tomGrupo[g.id] });
          const nd = g.disciplinas.length; let jd = 0;
          if (st.grupo === g.id) L.layoutGroup(g.id).nos.forEach(n => {
            const nn = Object.assign({}, n); let c2 = COR_COMPONENTE;
            if (n.tipo === 'estrela') { nos.push(nn); return; }
            if (n.tipo === 'disciplina') {
              const d = D.disciplinas[n.ref]; nn.natureza = d.natureza; nn.cor = m.tomDisc(g.id, jd++, nd); nn.corLuz = claro(nn.cor, 0.5); c2 = nn.cor;
              nn.aria = 'Disciplina ' + d.rotulo + (d.natureza === 'optativa' ? ', optativa' : ', ' + d.periodo + 'º período');
            } else if (n.tipo === 'carreira') {
              const c = D.carreiras[n.ref]; nn.ppcStatus = c.ppcStatus; nn.cobertura = c.cobertura; nn.aria = 'Carreira ' + c.rotulo; c2 = COR_CARREIRA;
            } else nn.aria = 'Componente ' + n.lines.join(' ');
            nos.push(nn);
            ar.push({ id: g.id + '>' + n.id, a: g.id, b: n.id, x1: q.x, y1: q.y, x2: n.x, y2: n.y, c1: m.tomGrupo[g.id], c2 });
          });
        });
      });
      this.classes(nos, ar);
      return { nos, ar };
    }
    passaFiltro(ref) {
      const f = this.st.filtro, d = D.disciplinas[ref];
      return (f.natureza === 'todas' || d.natureza === f.natureza) && (!f.periodo || d.periodo === +f.periodo);
    }
    filtroAtivo() { return this.st.filtro.natureza !== 'todas' || !!this.st.filtro.periodo; }
    noNaTrilha(n) {
      const t = this.st.trilha; if (!t) return null;
      switch (n.tipo) {
        case 'curso': return true;
        case 'eixo': return t.eixos.has(n.id);
        case 'agrupamento': return t.grupos.has(n.id);
        case 'disciplina': return t.discRefs.has(n.ref);
        case 'carreira': return t.tipo === 'carreira' && n.ref === t.carreiraRef;
        default: return false;
      }
    }
    classes(nos, ar) {
      const st = this.st, filtro = this.filtroAtivo(), mapa = {};
      nos.forEach(n => {
        const c = [];
        const tr = this.noNaTrilha(n);
        if (tr === true && n.tipo !== 'curso') c.push('trilha'); else if (tr === false) c.push('apagado');
        if (n.id === st.sel) c.push('selecionado');
        if (n.tipo === 'agrupamento' && st.grupo && st.grupo !== n.id) c.push('rotulo-off');
        if (n.papel === 'relacionada') c.push('relacionada');
        if (filtro) {
          if (n.tipo === 'disciplina' && !this.passaFiltro(n.ref)) c.push('filtrado');
          if (n.tipo === 'agrupamento') {
            const ds = this.map.grupos[n.id].disciplinas;
            if (ds.length && !ds.some(d => this.passaFiltro(d.ref))) c.push('filtrado');
          }
        }
        if (n.tipo === 'agrupamento' && st.trilha && st.trilha.contagem[n.id]) n.badge = st.trilha.contagem[n.id];
        n.cls = c.join(' '); mapa[n.id] = n;
      });
      ar.forEach(a => {
        const tr = this.noNaTrilha(mapa[a.b]);
        a.cls = tr === true ? 'trilha' : tr === false ? 'apagado' : '';
      });
    }
    render() {
      const { nos, ar } = this.nosVisiveis();
      this.rend.sync(nos, ar);
      this.ui.dica.hidden = this.st.raiz;
      this.chip();
      const f = this.filtroAtivo(), b = document.getElementById('btn-filtros');
      b.classList.toggle('ativo', f);
    }

    /* --- trilha (S1) --- */
    trilhaCarreira(cid) {
      const car = D.carreiras[cid], grupos = new Set(this.map.gruposDeCarreira[cid] || []);
      const discRefs = new Set(car.relacaoCurso.map(r => r.disciplina)), contagem = {};
      grupos.forEach(gid => { contagem[gid] = this.map.grupos[gid].disciplinas.filter(d => discRefs.has(d.ref)).length || null; });
      return { tipo: 'carreira', carreiraRef: cid, grupos, discRefs, contagem, eixos: new Set([...grupos].map(g => this.map.grupos[g].eixo)),
        texto: `Trilha: ${car.rotulo} · ${grupos.size} ${grupos.size === 1 ? 'rota' : 'rotas'}, ${discRefs.size} disciplinas` };
    }
    trilhaCurso(prefixo) {
      const refs = (this.map.discDoCurso[prefixo] || []).map(x => x.ref), discRefs = new Set(refs), grupos = new Set(), contagem = {};
      refs.forEach(r => (this.map.gruposDeDisc[r] || []).forEach(g => { grupos.add(g); }));
      grupos.forEach(gid => { contagem[gid] = this.map.grupos[gid].disciplinas.filter(d => discRefs.has(d.ref)).length || null; });
      return { tipo: 'curso', prefixo, grupos, discRefs, contagem, eixos: new Set([...grupos].map(g => this.map.grupos[g].eixo)),
        texto: `Também cursadas em ${D.cursosVizinhos[prefixo].nome}: ${refs.length} disciplinas do BSI` };
    }
    chip() {
      const c = this.ui.chip, t = this.st.trilha;
      if (!t) { c.hidden = true; return; }
      c.replaceChildren(h('span', null, t.texto),
        h('button', { type: 'button', onclick: () => this.enquadrarTrilha() }, 'Enquadrar'),
        h('button', { type: 'button', 'aria-label': 'Limpar destaque', onclick: () => this.limparTrilha() }, '✕'));
      c.hidden = false;
      const ce = this.centro(); c.style.left = ce.cx + 'px'; c.style.maxWidth = Math.max(280, ce.aw) + 'px';
    }
    abrirEixosDaTrilha() { const t = this.st.trilha; this.st.raiz = true; t.eixos.forEach(e => this.st.eixos.add(e)); }
    enquadrarTrilha() {
      const t = this.st.trilha; if (!t) return;
      this.abrirEixosDaTrilha(); this.render();
      const r = [...t.grupos].map(g => this.layout.caixa(g, 26));
      t.eixos.forEach(e => r.push(this.layout.caixa(e, 36)));
      if (this.st.grupo && t.grupos.has(this.st.grupo)) r.push(this.layout.layoutGroup(this.st.grupo).bbox);
      this.enquadrar(r, 0.3, 1.1);
    }
    limparTrilha() { this.st.trilha = null; this.render(); this.anunciar('Destaque removido'); }

    /* --- cartão --- */
    setCartao(c) {
      const antes = this.centro(); this.st.cartao = c;
      if (c) this.card.mostrar(c); else document.getElementById('cartao').hidden = true;
      const bl = document.getElementById('btn-legenda'), cx = document.getElementById('legenda');
      bl.hidden = !!c; if (c) { cx.hidden = true; bl.setAttribute('aria-expanded', 'false'); }
      const depois = this.centro();
      this.cam.x += (depois.cx - antes.cx) / this.cam.k; this.cam.y += (depois.cy - antes.cy) / this.cam.k;
      this.aplicar(); this.chip();
      if (c) this.anunciar('Cartão aberto');
    }
    fecharCartao() { this.st.sel = null; this.setCartao(null); this.render(); }
    cartaoDoNo(n) {
      if (n.tipo === 'curso') return { tipo: 'curso' };
      return { tipo: n.tipo, ref: n.ref, gid: n.gid };
    }

    /* --- ações --- */
    inicio() {
      Object.assign(this.st, { raiz: false, grupo: null, sel: null, trilha: null }); this.st.eixos.clear();
      this.setCartao(null); this.render(); this.ir(0, 0, 1);
      this.anunciar('Mapa recolhido; voltou ao início');
    }
    cliqueRaiz() {
      const st = this.st;
      if (!st.raiz) { st.raiz = true; st.sel = 'root'; this.setCartao({ tipo: 'curso' }); this.render(); this.enquadrar(D.eixos.map(e => this.layout.caixa(e.id, 36)), 0.5, 1.1); }
      else this.inicio();
    }
    visaoGeral() { this.enquadrar(D.eixos.map(e => this.layout.caixa(e.id, 36)), 0.5, 1.1); }
    abrirEixo(id, forcar) {
      const st = this.st; st.raiz = true;
      if (!st.eixos.has(id) || forcar) {
        st.eixos.add(id); st.sel = id; this.setCartao({ tipo: 'eixo', ref: id }); this.render();
        const r = this.map.gruposDoEixo[id].map(g => this.layout.caixa(g.id, 26)); r.push(this.layout.caixa(id, 36));
        this.enquadrar(r, 0.45, 1.1);
      } else {
        st.eixos.delete(id); if (st.grupo && this.map.grupos[st.grupo].eixo === id) st.grupo = null;
        st.sel = null; this.setCartao(null); this.render(); this.visaoGeral();
      }
    }
    abrirGrupo(gid, forcar) {
      const st = this.st, g = this.map.grupos[gid]; st.raiz = true; st.eixos.add(g.eixo);
      if (st.grupo !== gid || forcar) {
        st.grupo = gid; st.sel = gid; this.setCartao({ tipo: 'agrupamento', ref: gid }); this.render();
        this.enquadrar([this.layout.layoutGroup(gid).bbox], 0.45, 1.15);
      } else {
        st.grupo = null; st.sel = null; this.setCartao(null); this.render();
        const r = this.map.gruposDoEixo[g.eixo].map(x => this.layout.caixa(x.id, 26)); r.push(this.layout.caixa(g.eixo, 36));
        this.enquadrar(r, 0.45, 1.1);
      }
    }
    /* abre o agrupamento e seleciona um nó dele (disciplina, carreira, componente) */
    abrirNa(gid, ref, tipo) {
      const st = this.st, g = this.map.grupos[gid]; st.raiz = true; st.eixos.add(g.eixo);
      const mudou = st.grupo !== gid; st.grupo = gid; st.sel = gid + '~' + ref;
      if (tipo === 'carreira') st.trilha = this.trilhaCarreira(ref);
      if (st.trilha) this.abrirEixosDaTrilha();
      this.setCartao({ tipo, ref, gid }); this.render();
      if (mudou || true) this.enquadrar([this.layout.layoutGroup(gid).bbox], 0.45, 1.15);
    }
    revelarCarreira(cid, gid) {
      gid = gid || (this.map.gruposDeCarreira[cid] || [])[0];
      if (this.st.trilha && this.st.trilha.carreiraRef === cid && !gid) return;
      if (!gid) { this.setCartao({ tipo: 'carreira', ref: cid }); return; }
      this.abrirNa(gid, cid, 'carreira');
    }
    revelarDisciplina(ref) {
      const atual = this.st.grupo, gs = this.map.gruposDeDisc[ref] || [];
      const gid = gs.includes(atual) ? atual : this.map.homeGroup(ref);
      this.abrirNa(gid, ref, 'disciplina');
    }
    mostrarCurso(prefixo, daDisciplina) {
      const st = this.st; st.trilha = this.trilhaCurso(prefixo); this.abrirEixosDaTrilha();
      st.grupo = null; st.sel = null; this.setCartao({ tipo: 'cursoviz', prefixo }); this.render();
      this.enquadrarTrilha(); this.anunciar('Destacadas as disciplinas em comum com ' + D.cursosVizinhos[prefixo].nome);
    }
    cliqueNo(id) {
      const n = this.nosVisiveis().nos.find(x => x.id === id); if (!n) return;
      const st = this.st;
      if (n.tipo === 'curso') return this.cliqueRaiz();
      if (n.tipo === 'eixo') return this.abrirEixo(id);
      if (n.tipo === 'agrupamento') return this.abrirGrupo(id);
      st.sel = id;
      if (n.tipo === 'carreira') { st.trilha = this.trilhaCarreira(n.ref); this.abrirEixosDaTrilha(); }
      this.setCartao(this.cartaoDoNo(n)); this.render();
    }

    /* --- interação (pointer, roda, teclado) --- */
    ligarEventos() {
      const svg = this.svg, ptrs = new Map(); let arrasto = null, pinca = null;
      svg.addEventListener('pointerdown', e => {
        ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
        if (this.anim) { cancelAnimationFrame(this.anim); this.anim = null; }
        if (ptrs.size === 1) arrasto = { x: e.clientX, y: e.clientY, cx: this.cam.x, cy: this.cam.y, no: e.target.closest('.no'), moveu: false };
        else if (ptrs.size === 2) {
          const [a, b] = [...ptrs.values()]; arrasto = null;
          pinca = { d: Math.hypot(a.x - b.x, a.y - b.y) };
        }
      });
      svg.addEventListener('pointermove', e => {
        if (!ptrs.has(e.pointerId)) return;
        const ant = ptrs.get(e.pointerId); ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
        if (pinca && ptrs.size === 2) {
          const [a, b] = [...ptrs.values()], d = Math.hypot(a.x - b.x, a.y - b.y);
          this.zoomEm(d / pinca.d, (a.x + b.x) / 2, (a.y + b.y) / 2); pinca.d = d; return;
        }
        if (!arrasto) return;
        const dx = e.clientX - arrasto.x, dy = e.clientY - arrasto.y;
        if (!arrasto.moveu && Math.hypot(dx, dy) > 5) { arrasto.moveu = true; svg.classList.add('arrastando'); try { svg.setPointerCapture(e.pointerId); } catch (_) { } }
        if (arrasto.moveu) { this.cam.x = arrasto.cx - dx / this.cam.k; this.cam.y = arrasto.cy - dy / this.cam.k; this.aplicar(); }
      });
      const fim = e => {
        const a = arrasto; ptrs.delete(e.pointerId); if (ptrs.size < 2) pinca = null;
        svg.classList.remove('arrastando');
        if (a && !a.moveu && a.no && e.type === 'pointerup') this.cliqueNo(a.no.getAttribute('data-id'));
        if (ptrs.size === 0) arrasto = null;
      };
      svg.addEventListener('pointerup', fim); svg.addEventListener('pointercancel', fim);
      svg.addEventListener('wheel', e => {
        e.preventDefault();
        if (this.anim) { cancelAnimationFrame(this.anim); this.anim = null; }
        this.zoomEm(Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0015)), e.clientX, e.clientY);
      }, { passive: false });
      svg.addEventListener('keydown', e => {
        const no = e.target.closest && e.target.closest('.no');
        if (no && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); this.cliqueNo(no.getAttribute('data-id')); }
      });
      document.addEventListener('keydown', e => {
        const dig = /^(INPUT|SELECT|TEXTAREA)$/.test((e.target.tagName || ''));
        if (e.key === 'Escape') {
          const f = document.getElementById('filtros'), l = document.getElementById('legenda');
          if (!f.hidden) { f.hidden = true; document.getElementById('btn-filtros').setAttribute('aria-expanded', 'false'); }
          else if (!l.hidden) { l.hidden = true; document.getElementById('btn-legenda').setAttribute('aria-expanded', 'false'); }
          else if (!document.getElementById('cartao').hidden) this.fecharCartao();
          else if (this.st.trilha) this.limparTrilha();
        } else if (e.key === 'Home' && !dig) { e.preventDefault(); this.inicio(); }
      });
      document.getElementById('btn-inicio').addEventListener('click', () => this.inicio());
      const ligarZoom = (id, passo) => {
        const b = document.getElementById(id); let tm = null, laco = null, seguro = false, ult = 0;
        const parar = () => { clearTimeout(tm); if (laco) cancelAnimationFrame(laco); laco = null; };
        const rodar = tt => {
          const dt = Math.min(50, tt - ult); ult = tt;
          this.zoomEm(Math.pow(passo, dt / 140)); laco = requestAnimationFrame(rodar);
        };
        b.addEventListener('pointerdown', () => {
          seguro = false; parar();
          if (this.anim) { cancelAnimationFrame(this.anim); this.anim = null; }
          tm = setTimeout(() => { seguro = true; ult = performance.now(); laco = requestAnimationFrame(rodar); }, 250);
        });
        ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => b.addEventListener(ev, parar));
        b.addEventListener('contextmenu', e => e.preventDefault());
        b.addEventListener('click', () => { if (seguro) { seguro = false; return; } this.zoomEm(passo); });
      };
      ligarZoom('zoom-mais', 1.25); ligarZoom('zoom-menos', 0.8);
      addEventListener('resize', () => { this.estrelas(); this.aplicar(); });
    }

    /* --- legenda --- */
    legenda() {
      const box = document.getElementById('legenda'), btn = document.getElementById('btn-legenda');
      const ico = (...k) => { const v = s('svg', { width: 30, height: 30, viewBox: '-17 -17 34 34' }); v.append(...k); return v; };
      const estrela = (extra) => {
        let d = ''; for (let i = 0; i < 8; i++) { const a = rad(-90 + i * 45), r = i % 2 ? 4.4 : 12; d += (i ? 'L' : 'M') + (r * Math.cos(a)).toFixed(1) + ' ' + (r * Math.sin(a)).toFixed(1); }
        return [s('path', { d: d + 'Z', fill: COR_CARREIRA }), extra].filter(Boolean);
      };
      const item = (i, t) => h('div', { class: 'item' }, i, h('span', null, t));
      box.append(h('h3', null, 'Como ler o mapa'),
        item(ico(s('circle', { r: 11, fill: '#8b5cf6' })), 'Disciplina obrigatória (tons da cor do eixo)'),
        item(ico(s('circle', { r: 9, fill: 'none', stroke: '#8b5cf6', 'stroke-width': 2.2 })), 'Disciplina optativa'),
        item(ico(s('circle', { r: 7, fill: '#8b5cf6' }), s('circle', { r: 12, fill: 'none', stroke: '#8b5cf6', 'stroke-dasharray': '2.5 2.5' })), 'Disciplina de outra área que também ajuda aqui'),
        item(ico(...estrela(s('circle', { r: 15, fill: 'none', stroke: COR_CARREIRA, 'stroke-width': 1.6 }))), 'Carreira indicada pelo curso'),
        item(ico(...estrela(s('circle', { r: 15, fill: 'none', stroke: '#ffa94d', 'stroke-dasharray': '3 3' }))), 'Carreira deduzida; o curso cobre só parte dela'),
        item(ico(...estrela()), 'Carreira deduzida do conteúdo das disciplinas'),
        h('p', null, 'Clique num círculo para abrir. Ao clicar numa carreira, todas as rotas que levam a ela se acendem; o número amarelo conta as disciplinas relacionadas.'),
        h('div', { class: 'cores' }, D.eixos.map(e => h('span', null, h('i', { style: 'background:' + EIXO_COR[e.id] }), e.rotulo))));
      btn.addEventListener('click', () => {
        box.hidden = !box.hidden; btn.setAttribute('aria-expanded', String(!box.hidden));
      });
      document.addEventListener('pointerdown', e => {
        if (!box.hidden && !box.contains(e.target) && !btn.contains(e.target)) { box.hidden = true; btn.setAttribute('aria-expanded', 'false'); }
      });
    }

    /* --- filtros (S5): só esmaecem, não movem --- */
    filtros() {
      const nat = document.getElementById('f-natureza'), per = document.getElementById('f-periodo'), btn = document.getElementById('btn-filtros'), box = document.getElementById('filtros');
      const mudou = () => { this.st.filtro = { natureza: nat.value, periodo: per.value }; this.render(); };
      nat.addEventListener('change', mudou); per.addEventListener('change', mudou);
      document.getElementById('f-limpar').addEventListener('click', () => { nat.value = 'todas'; per.value = ''; mudou(); });
      btn.addEventListener('click', () => { box.hidden = !box.hidden; btn.setAttribute('aria-expanded', String(!box.hidden)); });
    }

    /* --- busca (S2) --- */
    busca() {
      const inp = document.getElementById('busca'), lista = document.getElementById('busca-lista');
      const idx = [];
      Object.values(D.carreiras).forEach(c => { if (this.map.gruposDeCarreira[c.id]) idx.push({ t: c.rotulo, k: 'Carreira', n: norm(c.rotulo), f: () => this.revelarCarreira(c.id) }); });
      Object.values(D.disciplinas).forEach(d => { if (this.map.gruposDeDisc[d.id]) idx.push({ t: d.rotulo, k: 'Disciplina', n: norm(d.rotulo + ' ' + (d.codigo || '')), f: () => this.revelarDisciplina(d.id) }); });
      D.agrupamentos.forEach(g => idx.push({ t: g.rotulo, k: 'Agrupamento', n: norm(g.rotulo), f: () => this.abrirGrupo(g.id, true) }));
      D.eixos.forEach(e => idx.push({ t: e.rotulo, k: 'Eixo', n: norm('formação eixo ' + e.rotulo), f: () => this.abrirEixo(e.id, true) }));
      let atual = [], sel = -1;
      const fechar = () => { lista.hidden = true; inp.setAttribute('aria-expanded', 'false'); sel = -1; inp.removeAttribute('aria-activedescendant'); };
      const marcar = () => {
        [...lista.children].forEach((li, i) => li.setAttribute('aria-selected', String(i === sel)));
        if (sel >= 0) inp.setAttribute('aria-activedescendant', 'busca-op-' + sel);
      };
      const escolher = i => { const r = atual[i]; if (!r) return; fechar(); inp.value = ''; r.f(); inp.blur(); };
      const mostrar = () => {
        const q = norm(inp.value.trim());
        if (!q) { fechar(); return; }
        const ps = q.split(/\s+/);
        atual = idx.filter(x => ps.every(p => x.n.includes(p)))
          .sort((a, b) => (b.n.startsWith(q) - a.n.startsWith(q)) || a.t.localeCompare(b.t, 'pt-BR')).slice(0, 9);
        lista.replaceChildren();
        if (!atual.length) lista.append(h('li', { class: 'vazio' }, 'Nada encontrado'));
        atual.forEach((r, i) => lista.append(h('li', { role: 'option', id: 'busca-op-' + i, 'aria-selected': 'false',
          onmousedown: ev => { ev.preventDefault(); escolher(i); } }, r.t, h('small', null, r.k))));
        lista.hidden = false; inp.setAttribute('aria-expanded', 'true'); sel = atual.length ? 0 : -1; marcar();
      };
      inp.addEventListener('input', mostrar);
      inp.addEventListener('keydown', e => {
        if (e.key === 'ArrowDown') { e.preventDefault(); if (atual.length) { sel = (sel + 1) % atual.length; marcar(); } }
        else if (e.key === 'ArrowUp') { e.preventDefault(); if (atual.length) { sel = (sel - 1 + atual.length) % atual.length; marcar(); } }
        else if (e.key === 'Enter') { e.preventDefault(); escolher(Math.max(sel, 0)); }
        else if (e.key === 'Escape') { if (!lista.hidden) { e.stopPropagation(); fechar(); } }
      });
      inp.addEventListener('blur', () => setTimeout(fechar, 120));
    }

    /* --- fundo: nebulosas, círculo zodiacal e três camadas de estrelas (semente fixa) --- */
    estrelas() {
      const svg = this.ui.estrelas, W = innerWidth, H = innerHeight; svg.replaceChildren();
      svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
      let seed = 20200;
      const rnd = () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;
      const grad = (id, cor) => s('radialGradient', { id },
        s('stop', { offset: 0, 'stop-color': cor, 'stop-opacity': 0.26 }), s('stop', { offset: 1, 'stop-color': cor, 'stop-opacity': 0 }));
      svg.append(s('defs', null, grad('neb1', '#6d3fd6'), grad('neb2', '#1f8fb0'), grad('neb3', '#b0348f')));
      this.camadasFundo = [];
      const camada = f => { const g = s('g'); svg.append(g); this.camadasFundo.push({ g, f, lim: 40 + f * 900 }); return g; };
      const m = Math.max(W, H);
      const neb = camada(0.015);
      [['neb1', 0.2, 0.3, 0.55], ['neb2', 0.82, 0.72, 0.5], ['neb3', 0.6, 0.08, 0.38]].forEach(([id, x, y, r]) =>
        neb.append(s('circle', { cx: (x * W).toFixed(0), cy: (y * H).toFixed(0), r: (r * m).toFixed(0), fill: 'url(#' + id + ')' })));
      const zod = camada(0.04), R = 0.42 * Math.min(W, H), cx = W / 2, cy = H / 2 + 8;
      zod.append(s('circle', { cx, cy, r: R, fill: 'none', stroke: 'rgba(190,170,255,.16)', 'stroke-width': 1 }),
        s('circle', { cx, cy, r: R * 0.86, fill: 'none', stroke: 'rgba(190,170,255,.10)', 'stroke-width': 1 }));
      const pts = [];
      for (let i = 0; i < 12; i++) {
        const a = rad(i * 30 - 90), c = Math.cos(a), sn = Math.sin(a);
        zod.append(s('line', { x1: (cx + c * R * 0.86).toFixed(1), y1: (cy + sn * R * 0.86).toFixed(1), x2: (cx + c * R).toFixed(1), y2: (cy + sn * R).toFixed(1), stroke: 'rgba(190,170,255,.16)', 'stroke-width': 1 }));
        const rr = R * (0.93 + (rnd() - 0.5) * 0.04), b = rad(i * 30 - 75);
        pts.push([cx + Math.cos(b) * rr, cy + Math.sin(b) * rr]);
      }
      zod.append(s('polyline', { points: pts.concat([pts[0]]).map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' '), fill: 'none', stroke: 'rgba(190,170,255,.12)', 'stroke-width': 1, 'stroke-dasharray': '2 5' }));
      pts.forEach(p => zod.append(s('circle', { cx: p[0].toFixed(1), cy: p[1].toFixed(1), r: 2.2, fill: '#d9ccff', opacity: 0.55 })));
      const total = Math.round(W * H / 8000);
      [[0.02, 0.55, 0.4, 0.9, 0.25, 0.6], [0.05, 0.3, 0.7, 1.2, 0.35, 0.75], [0.1, 0.15, 1.0, 1.8, 0.5, 0.9]].forEach(([f, frac, r0, r1, o0, o1]) => {
        const g = camada(f), n = Math.round(total * frac);
        for (let i = 0; i < n; i++) {
          const x = -160 + rnd() * (W + 320), y = -160 + rnd() * (H + 320), r = r0 + rnd() * (r1 - r0), o = o0 + rnd() * (o1 - o0);
          g.append(s('circle', { cx: x.toFixed(1), cy: y.toFixed(1), r: r.toFixed(2), fill: rnd() < 0.18 ? '#ffe9c4' : '#cfd8ff', opacity: o.toFixed(2) }));
        }
      });
    }
  }

  const ctl = new MapController();
  window.MapaBSI = {
    ctl, map: ctl.map, layout: ctl.layout, estado: ctl.st,
    posicoes() {   // posições calculadas, para conferir o layout
      const o = {}; D.agrupamentos.forEach(g => {
        const r = ctl.layout.layoutGroup(g.id); o[g.id] = r.nos.map(n => [n.id, +n.x.toFixed(2), +n.y.toFixed(2)]);
      });
      return JSON.stringify([ctl.layout.pos, o]);
    }
  };
})();
