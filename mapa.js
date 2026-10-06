/* mapa.js — Mapa Digital de Carreiras (BSI · IFMG Ouro Branco).
   Script clássico, sem bibliotecas: funciona abrindo index.html direto (file://).
   Lê apenas a constante global PPC_DATA (ppc-data.js).
   Determinismo: nenhuma posição usa Math.random; as mesmas entradas geram o mesmo mapa. */
(function () {
  'use strict';
  const D = PPC_DATA;
  const NS = 'http://www.w3.org/2000/svg';
  const REDUZ = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  const EIXO_COR = {
    'matematica': '#ff7ab6', 'computacional': '#ffa94d', 'ti': '#4cd38a',
    'administrativa': '#4dabf7', 'profissional-social': '#b8c0cc', 'complementar': '#ffe066'
  };
  const COR_CARREIRA = '#ffe9a8';
  const LH = 14;               // altura de linha dos rótulos
  const R1 = 250, R2 = 580;    // raios dos anéis de eixos e agrupamentos

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
      this.discDoCurso = {};
      Object.values(data.disciplinas).forEach(d => d.compartilhadaCom.forEach(e =>
        (this.discDoCurso[e.prefixo] = this.discDoCurso[e.prefixo] || []).push({ ref: d.id, equivalente: e.equivalente })));
    }
    homeGroup(ref) {
      const gs = this.gruposDeDisc[ref] || [];
      return gs.find(gid => this.grupos[gid].disciplinas.some(d => d.ref === ref && d.papel === 'home')) || gs[0];
    }
    corDisc(d) { return EIXO_COR[d.eixoPpc] || '#9fb0d9'; }
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
      this.rot.root = { lines: wrap(map.D.curso.rotulo, 15) };
      map.eixos.forEach(e => {
        const p = this.pos[e.id];
        this.rot[e.id] = this.rotulo(-Math.cos(p.a), -Math.sin(p.a), 34, wrap(e.rotulo, 16), 7.4);
      });
      gs.forEach(g => {
        const p = this.pos[g.id];
        this.rot[g.id] = this.rotulo(Math.cos(p.a), Math.sin(p.a), 24, wrap(g.rotulo, 20), 6.4);
      });
      // retângulos ocupados pelos nós fixos
      this.base.push({ x0: -80, y0: -80, x1: 80, y1: 80 });
      map.eixos.forEach(e => this.base.push(this.caixa(e.id, 28)));
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
      const ocupados = this.base.filter(b => b.gid !== gid); ocupados.push(this.caixa(gid, 18));
      const itens = { disc: [], carr: [] };
      g.disciplinas.forEach(d => itens.disc.push({ tipo: 'disciplina', ref: d.ref, papel: d.papel }));
      (g.componentes || []).forEach(c => itens.disc.push({ tipo: 'componente', ref: c }));
      g.carreiras.forEach(c => itens.carr.push({ tipo: 'carreira', ref: c }));
      g.resultados.forEach(r => itens.carr.push({ tipo: 'resultado', ref: r.id, resultado: r }));
      const nos = [];
      const lados = [['disc', -42], ['carr', 42]];
      lados.forEach(([lado, off]) => {
        const lista = itens[lado], n = lista.length;
        const centro = G.a + rad(off);
        const passo = n > 1 ? Math.min(rad(26), rad(96) / (n - 1)) : 0;
        lista.forEach((it, i) => {
          const a = centro + (i - (n - 1) / 2) * passo;
          const vx = Math.cos(a), vy = Math.sin(a);
          const rotulo = it.tipo === 'resultado' ? it.resultado.rotulo
            : (map.entidade(it.ref) || {}).rotulo;
          const lines = wrap(rotulo, 26);
          let escolhido = null;
          for (let k = 0; k < 14; k++) {
            const r = (n > 6 ? 175 : 150) + k * 40;
            const x = G.x + r * vx, y = G.y + r * vy;
            const lab = this.rotulo(vx, vy, 18, lines, 6.7);
            const cx = { x0: x - 15, y0: y - 15, x1: x + 15, y1: y + 15 };
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
      const gc = this.caixa(gid, 18);
      const bbox = nos.reduce((b, n) => ({
        x0: Math.min(b.x0, n.caixa.x0), y0: Math.min(b.y0, n.caixa.y0),
        x1: Math.max(b.x1, n.caixa.x1), y1: Math.max(b.y1, n.caixa.y1)
      }), gc);
      return (this.cache[gid] = { nos, bbox });
    }
  }

  /* ---------- MapRenderer: desenha e atualiza elementos SVG ---------- */
  class MapRenderer {
    constructor(svg, map, layout) {
      this.svg = svg; this.map = map; this.layout = layout;
      this.mundo = s('g', { id: 'mundo' });
      this.camadaArestas = s('g', { class: 'arestas' });
      this.camadaNos = s('g', { class: 'nos' });
      this.mundo.append(this.camadaArestas, this.camadaNos);
      svg.append(this.mundo);
      this.nos = new Map(); this.arestas = new Map();
    }
    forma(n) {
      const t = n.tipo;
      if (t === 'curso') return [
        s('circle', { class: 'brilho', r: 84, fill: 'rgba(255,233,168,.10)' }),
        s('circle', { class: 'forma', r: 62, fill: '#26327a', stroke: '#ffe9a8', 'stroke-width': 2.5 })];
      if (t === 'eixo') return [s('circle', { class: 'forma', r: 24, fill: n.cor, stroke: 'rgba(255,255,255,.55)', 'stroke-width': 2 })];
      if (t === 'agrupamento') return [
        s('circle', { class: 'forma', r: 14, fill: '#0a0f24', stroke: n.cor, 'stroke-width': 3 }),
        s('circle', { r: 4.5, fill: n.cor })];
      if (t === 'disciplina') {
        const sol = n.natureza === 'obrigatoria';
        const out = [s('circle', { class: 'forma', r: 7.5, fill: sol ? n.cor : '#0a0f24', stroke: n.cor, 'stroke-width': 2.2 })];
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
    raioAnel(n) { return { curso: 70, eixo: 31, agrupamento: 22, disciplina: 15, carreira: 20 }[n.tipo] || 15; }
    criar(n) {
      const g = s('g', { class: 'no ' + n.tipo + ' entrando', transform: `translate(${n.x.toFixed(1)} ${n.y.toFixed(1)})`,
        tabindex: 0, role: 'button', 'data-id': n.id, 'aria-label': n.aria });
      if (n.expansivel) g.setAttribute('aria-expanded', 'false');
      const corpo = s('g', { class: 'corpo' });
      corpo.append(s('circle', { class: 'alvo', r: Math.max(16, this.raioAnel(n) - 4), fill: 'transparent' }));
      corpo.append(...this.forma(n));
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
      for (const [id, el] of this.arestas) if (!idsA.has(id)) { el.remove(); this.arestas.delete(id); }
      arestas.forEach(a => {
        let el = this.arestas.get(a.id);
        if (!el) {
          el = s('line', { class: 'aresta', x1: a.x1.toFixed(1), y1: a.y1.toFixed(1), x2: a.x2.toFixed(1), y2: a.y2.toFixed(1) });
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
      el.append(fechar, ...corpo, h('p', { class: 'aviso-cartao' }, D.meta.aviso));
      el.scrollTop = 0; el.hidden = false;
    }
    c_curso() {
      const m = D.meta;
      return [h('div', { class: 'tipo' }, 'Curso'), h('h2', null, D.curso.rotulo), h('p', null, D.curso.descricao),
        h('div', { class: 'etiquetas' }, this.etq(m.cargaHorariaTotal.toLocaleString('pt-BR') + ' h no total'),
          this.etq(m.cargaObrigatorias.toLocaleString('pt-BR') + ' h obrigatórias'),
          this.etq(m.cargaOptativas + ' h optativas'), this.etq(m.cargaComponentes + ' h de componentes')),
        ...this.sec('Seis eixos de formação', this.lista(D.eixos.map(e =>
          h('span', null, h('i', { style: 'display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:8px;background:' + EIXO_COR[e.id] }), this.link(e.rotulo + ' · ' + e.percentualCarga + '%', () => this.ctl.abrirEixo(e.id)))))),
        h('p', null, 'Percentuais conforme a Figura 2 do PPC.')];
    }
    c_eixo(c) {
      const e = this.map.eixoPorId[c.ref];
      return [h('div', { class: 'tipo' }, 'Eixo de formação'), h('h2', null, e.rotulo), h('p', null, e.descricao),
        h('div', { class: 'etiquetas' }, this.etq(e.percentualCarga + '% da carga (PPC, Figura 2)', '', EIXO_COR[e.id])),
        ...this.sec('Agrupamentos deste eixo', this.lista(this.map.gruposDoEixo[e.id].map(g =>
          this.link(g.rotulo, () => this.ctl.abrirGrupo(g.id)))))];
    }
    c_agrupamento(c) {
      const g = this.map.grupos[c.ref], D_ = D.disciplinas;
      const out = [h('div', { class: 'tipo' }, 'Agrupamento · ' + this.nomeEixo(g.eixo)), h('h2', null, g.rotulo), h('p', null, g.descricao),
        h('p', { class: 'aviso-cartao', style: 'border:0;margin:0;padding:0' }, 'Agrupamento organizado para o mapa a partir do PPC (descrição editorial).')];
      if (g.disciplinas.length) out.push(...this.sec('Disciplinas', this.lista(g.disciplinas.map(x => {
        const d = D_[x.ref];
        return h('span', null, this.link(d.rotulo, () => this.ctl.abrirNa(g.id, x.ref, 'disciplina')),
          ' ', h('small', null, d.natureza === 'optativa' ? '(optativa)' : '(' + d.periodo + 'º per.)'),
          x.papel === 'relacionada' ? h('small', null, ' · relacionada') : null);
      }))));
      if (g.carreiras.length) out.push(...this.sec('Carreiras possíveis', this.lista(g.carreiras.map(cid =>
        this.link(D.carreiras[cid].rotulo, () => this.ctl.abrirNa(g.id, cid, 'carreira'))))));
      if (g.resultados.length) out.push(...this.sec('O que isso entrega', this.lista(g.resultados.map(r =>
        h('span', null, h('strong', null, r.rotulo), h('span', { class: 'porque', style: 'margin-left:0' }, r.descricao))))));
      if (g.componentes) out.push(...this.sec('Componentes curriculares', this.lista(g.componentes.map(k =>
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
      const out = [h('div', { class: 'tipo' }, 'Disciplina · ' + this.nomeEixo(d.eixoPpc)), h('h2', null, d.rotulo),
        h('div', { class: 'etiquetas' },
          this.etq(d.natureza === 'optativa' ? 'Optativa' : 'Obrigatória', '', EIXO_COR[d.eixoPpc]),
          this.etq(d.periodo ? d.periodo + 'º período' : 'Do 5º ao 8º período'),
          this.etq(d.cargaHoraria + ' h'),
          ...d.compartilhadaCom.map(e => h('span', { class: 'etq selo', role: 'button', tabindex: 0, title: 'Ver o curso e as outras disciplinas em comum',
            onclick: () => this.ctl.mostrarCurso(e.prefixo, d.id),
            onkeydown: ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); this.ctl.mostrarCurso(e.prefixo, d.id); } } },
            'também cursada em ' + e.curso)))];
      out.push(...this.sec('Quando é cursada', this.linhaTempo(d)));
      if (d.codigo) out.push(h('p', null, h('small', null, 'Código no PPC: ' + d.codigo)));
      const rel = m.carreirasDeDisc[d.id] || [];
      if (rel.length) out.push(...this.sec('Carreiras que usam esta disciplina', h('ul', null,
        rel.slice().sort((a, b) => (a.rel.forca !== 'principal') - (b.rel.forca !== 'principal')).map(r => {
          const car = D.carreiras[r.carreira];
          return h('li', { class: 'lig' }, h('span', { class: 'pe ' + (r.rel.forca === 'principal' ? 'p' : '') }, r.rel.forca === 'principal' ? 'P' : 'A'),
            this.link(car.rotulo, () => this.ctl.revelarCarreira(car.id)), h('span', { class: 'porque' }, r.rel.porque));
        }))));
      const gs = m.gruposDeDisc[d.id] || [];
      if (gs.length) out.push(...this.rotasDe(gs, d.id, 'disciplina'));
      if (d.ementa) out.push(h('details', null, h('summary', null, 'Ementa (PPC)'), h('p', null, d.ementa)));
      else if (d.ementaNota) out.push(h('p', null, h('small', null, d.ementaNota)));
      return out;
    }
    c_carreira(c) {
      const car = D.carreiras[c.ref], m = this.map;
      const status = car.ppcStatus === 'citado' ? this.etq('Citada no PPC', 'citada')
        : car.ppcStatus === 'variante' ? this.etq('Variante de função citada', 'citada')
          : this.etq(car.cobertura === 'parcial' ? 'Derivada das ementas · cobertura parcial' : 'Derivada das ementas', car.cobertura === 'parcial' ? 'parcial' : '');
      const out = [h('div', { class: 'tipo' }, 'Carreira'), h('h2', null, car.rotulo), h('div', { class: 'etiquetas' }, status),
        h('p', null, car.descricao)];
      if (car.atividades.length) out.push(...this.sec('O que a profissão faz', this.lista(car.atividades)));
      if (car.habilidades.length) out.push(...this.sec('Habilidades centrais', this.lista(car.habilidades)));
      if (car.relacaoCurso.length) out.push(...this.sec('Disciplinas do curso relacionadas', h('ul', null,
        car.relacaoCurso.slice().sort((a, b) => (a.forca !== 'principal') - (b.forca !== 'principal')).map(r => {
          const d = D.disciplinas[r.disciplina];
          return h('li', { class: 'lig' }, h('span', { class: 'pe ' + (r.forca === 'principal' ? 'p' : '') }, r.forca === 'principal' ? 'P' : 'A'),
            this.link(d.rotulo, () => this.ctl.revelarDisciplina(d.id)),
            h('small', null, d.natureza === 'optativa' ? ' (optativa)' : ' (' + d.periodo + 'º per.)'),
            h('span', { class: 'porque' }, r.porque), r.trecho ? h('span', { class: 'trecho' }, '“' + r.trecho + '”') : null);
        })), h('p', null, h('small', null, 'P = principal, A = apoio. O trecho é literal da ementa no PPC.'))));
      const gs = m.gruposDeCarreira[car.id] || [];
      if (gs.length) out.push(...this.rotasDe(gs, car.id, 'carreira'));
      if (car.fontesInfo.length) out.push(h('details', null, h('summary', null, 'Fontes das informações da profissão'),
        h('ul', null, car.fontesInfo.map(f => h('li', null, h('a', { href: f.url, target: '_blank', rel: 'noopener noreferrer' }, f.rotulo)))),
        h('p', null, 'Textos parafraseados; a relação com as disciplinas vem do PPC.')));
      else out.push(h('p', null, h('small', null, 'Sem fonte externa: esta carreira se apoia apenas nas ementas do PPC.')));
      return out;
    }
    c_resultado(c) {
      const g = this.map.grupos[c.gid]; const r = g.resultados.find(x => x.id === c.ref);
      return [h('div', { class: 'tipo' }, 'Resultado · ' + g.rotulo), h('h2', null, r.rotulo), h('p', null, r.descricao)];
    }
    c_componente(c) {
      const k = D.componentes[c.ref];
      return [h('div', { class: 'tipo' }, 'Componente curricular'), h('h2', null, k.rotulo),
        h('div', { class: 'etiquetas' }, this.etq(k.cargaHoraria + ' h')), h('p', null, k.descricao)];
    }
    c_cursoviz(c) {
      const v = D.cursosVizinhos[c.prefixo], lista = this.map.discDoCurso[c.prefixo] || [];
      return [h('div', { class: 'tipo' }, 'Outro curso do campus'), h('h2', null, v.nome), h('p', null, v.nota),
        ...this.sec('Disciplinas do BSI em comum (' + lista.length + ')', this.lista(lista.map(x => {
          const d = D.disciplinas[x.ref];
          return h('span', null, this.link(d.rotulo, () => this.ctl.revelarDisciplina(d.id)),
            h('span', { class: 'porque', style: 'margin-left:0' }, 'Equivalente lá: ' + x.equivalente));
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
      if (this.gEstrelas) this.gEstrelas.setAttribute('transform', `translate(${(-this.cam.x * 0.03).toFixed(1)} ${(-this.cam.y * 0.03).toFixed(1)})`);
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
    caixaNo(id) { return this.layout.caixa(id, id === 'root' ? 80 : this.map.eixoPorId[id] ? 28 : 18); }

    /* --- visibilidade e classes --- */
    noInfo(tipo, base) { return base; }
    nosVisiveis() {
      const st = this.st, L = this.layout, m = this.map, nos = [], ar = [];
      const root = { id: 'root', tipo: 'curso', ref: 'curso-bsi', x: 0, y: 0, lab: L.rot.root, expansivel: true, aberto: st.raiz,
        aria: D.curso.rotulo + ' — ' + (st.raiz ? 'aberto' : 'clique para abrir') };
      nos.push(root);
      if (st.raiz) m.eixos.forEach(e => {
        const p = L.pos[e.id];
        nos.push({ id: e.id, tipo: 'eixo', ref: e.id, x: p.x, y: p.y, lab: L.rot[e.id], cor: EIXO_COR[e.id], expansivel: true,
          aberto: st.eixos.has(e.id), aria: 'Eixo ' + e.rotulo });
        ar.push({ id: 'root>' + e.id, a: 'root', b: e.id, x1: 0, y1: 0, x2: p.x, y2: p.y });
        if (st.eixos.has(e.id)) m.gruposDoEixo[e.id].forEach(g => {
          const q = L.pos[g.id];
          nos.push({ id: g.id, tipo: 'agrupamento', ref: g.id, gid: g.id, x: q.x, y: q.y, lab: L.rot[g.id], cor: EIXO_COR[e.id], expansivel: true,
            aberto: st.grupo === g.id, aria: 'Agrupamento ' + g.rotulo });
          ar.push({ id: e.id + '>' + g.id, a: e.id, b: g.id, x1: p.x, y1: p.y, x2: q.x, y2: q.y });
          if (st.grupo === g.id) L.layoutGroup(g.id).nos.forEach(n => {
            const nn = Object.assign({}, n);
            if (n.tipo === 'disciplina') {
              const d = D.disciplinas[n.ref]; nn.natureza = d.natureza; nn.cor = m.corDisc(d);
              nn.aria = 'Disciplina ' + d.rotulo + (d.natureza === 'optativa' ? ', optativa' : ', ' + d.periodo + 'º período');
            } else if (n.tipo === 'carreira') {
              const c = D.carreiras[n.ref]; nn.ppcStatus = c.ppcStatus; nn.cobertura = c.cobertura; nn.aria = 'Carreira ' + c.rotulo;
            } else nn.aria = (n.tipo === 'componente' ? 'Componente ' : 'Resultado ') + n.lines.join(' ');
            nos.push(nn);
            ar.push({ id: g.id + '>' + n.id, a: g.id, b: n.id, x1: q.x, y1: q.y, x2: n.x, y2: n.y });
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
      const r = [...t.grupos].map(g => this.layout.caixa(g, 18));
      t.eixos.forEach(e => r.push(this.layout.caixa(e, 28)));
      if (this.st.grupo && t.grupos.has(this.st.grupo)) r.push(this.layout.layoutGroup(this.st.grupo).bbox);
      this.enquadrar(r, 0.3, 1.1);
    }
    limparTrilha() { this.st.trilha = null; this.render(); this.anunciar('Destaque removido'); }

    /* --- cartão --- */
    setCartao(c) {
      const antes = this.centro(); this.st.cartao = c;
      if (c) this.card.mostrar(c); else document.getElementById('cartao').hidden = true;
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
      if (!st.raiz) { st.raiz = true; st.sel = 'root'; this.setCartao({ tipo: 'curso' }); this.render(); this.enquadrar(D.eixos.map(e => this.layout.caixa(e.id, 28)), 0.5, 1.1); }
      else if (st.sel !== 'root') { st.sel = 'root'; this.setCartao({ tipo: 'curso' }); this.render(); }
      else this.inicio();
    }
    abrirEixo(id, forcar) {
      const st = this.st; st.raiz = true;
      if (!st.eixos.has(id) || forcar) {
        st.eixos.add(id); st.sel = id; this.setCartao({ tipo: 'eixo', ref: id }); this.render();
        const r = this.map.gruposDoEixo[id].map(g => this.layout.caixa(g.id, 18)); r.push(this.layout.caixa(id, 28));
        this.enquadrar(r, 0.45, 1.1);
      } else if (st.sel !== id) { st.sel = id; this.setCartao({ tipo: 'eixo', ref: id }); this.render(); }
      else {
        st.eixos.delete(id); if (st.grupo && this.map.grupos[st.grupo].eixo === id) st.grupo = null;
        st.sel = null; this.setCartao(null); this.render();
        this.enquadrar(D.eixos.map(e => this.layout.caixa(e.id, 28)), 0.5, 1.1);
      }
    }
    abrirGrupo(gid, forcar) {
      const st = this.st, g = this.map.grupos[gid]; st.raiz = true; st.eixos.add(g.eixo);
      if (st.grupo !== gid || forcar) {
        st.grupo = gid; st.sel = gid; this.setCartao({ tipo: 'agrupamento', ref: gid }); this.render();
        this.enquadrar([this.layout.layoutGroup(gid).bbox], 0.45, 1.15);
      } else if (st.sel !== gid) { st.sel = gid; this.setCartao({ tipo: 'agrupamento', ref: gid }); this.render(); }
      else { st.grupo = null; st.sel = null; this.setCartao(null); this.render(); }
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
      document.getElementById('zoom-mais').addEventListener('click', () => this.zoomEm(1.25));
      document.getElementById('zoom-menos').addEventListener('click', () => this.zoomEm(0.8));
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
        item(ico(s('circle', { r: 11, fill: '#4cd38a' })), 'Disciplina obrigatória (a cor é o eixo do PPC)'),
        item(ico(s('circle', { r: 9, fill: 'none', stroke: '#4cd38a', 'stroke-width': 2.2 })), 'Disciplina optativa'),
        item(ico(s('circle', { r: 7, fill: '#4cd38a' }), s('circle', { r: 12, fill: 'none', stroke: '#4cd38a', 'stroke-dasharray': '2.5 2.5' })), 'Aparece aqui como apoio (casa em outra rota)'),
        item(ico(...estrela(s('circle', { r: 15, fill: 'none', stroke: COR_CARREIRA, 'stroke-width': 1.6 }))), 'Carreira citada no PPC'),
        item(ico(...estrela(s('circle', { r: 15, fill: 'none', stroke: '#ffa94d', 'stroke-dasharray': '3 3' }))), 'Carreira derivada, cobertura parcial'),
        item(ico(...estrela()), 'Carreira derivada das ementas'),
        h('p', null, 'Clique num círculo para abrir. Ao clicar numa carreira, todas as rotas que levam a ela se acendem; o número amarelo conta as disciplinas relacionadas.'),
        h('div', { class: 'cores' }, D.eixos.map(e => h('span', null, h('i', { style: 'background:' + EIXO_COR[e.id] }), e.rotulo))));
      btn.addEventListener('click', () => {
        box.hidden = !box.hidden; btn.setAttribute('aria-expanded', String(!box.hidden));
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
      D.eixos.forEach(e => idx.push({ t: e.rotulo, k: 'Eixo', n: norm(e.rotulo), f: () => this.abrirEixo(e.id, true) }));
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

    /* --- fundo de estrelas (semente fixa) --- */
    estrelas() {
      const svg = this.ui.estrelas, W = innerWidth, H = innerHeight; svg.replaceChildren();
      svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
      let seed = 20200;
      const rnd = () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;
      const g = s('g'); this.gEstrelas = g;
      const n = Math.round(W * H / 9000);
      for (let i = 0; i < n; i++) {
        const x = -40 + rnd() * (W + 80), y = -40 + rnd() * (H + 80), r = 0.4 + rnd() * 1.1, o = 0.25 + rnd() * 0.55;
        g.append(s('circle', { cx: x.toFixed(1), cy: y.toFixed(1), r: r.toFixed(2), fill: '#cfd8ff', opacity: o.toFixed(2) }));
      }
      svg.append(g);
    }
  }

  const ctl = new MapController();
  window.MapaBSI = {
    ctl, map: ctl.map, layout: ctl.layout, estado: ctl.st,
    posicoes() {   // usado nos testes de determinismo
      const o = {}; D.agrupamentos.forEach(g => {
        const r = ctl.layout.layoutGroup(g.id); o[g.id] = r.nos.map(n => [n.id, +n.x.toFixed(2), +n.y.toFixed(2)]);
      });
      return JSON.stringify([ctl.layout.pos, o]);
    }
  };
})();
