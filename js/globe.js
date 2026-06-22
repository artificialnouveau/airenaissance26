// Rotating orthographic globe, ported from the Airbus-for-AI / Public AI site.
// Loads a low-res world atlas (TopoJSON) from a CDN, projects it onto a sphere,
// slowly spins, and lights up a set of countries by ISO numeric id.
// Usage: var g = AIRGlobe(svgEl, {lit:['840','250'], spin:true, speed:0.08});
//        g.highlight(['840','276', ...]);  // update lit countries any time
window.AIRGlobe = function(svg, opts){
  opts = opts || {};
  var R = opts.radius || 140, CX = opts.cx || 180, CY = opts.cy || 160, DEG = Math.PI/180;
  var viewLng = opts.lng != null ? opts.lng : -15;
  var viewLat = opts.lat != null ? opts.lat : 30;
  var speed = opts.speed != null ? opts.speed : 0.1;
  var NS = 'http://www.w3.org/2000/svg';
  var group = svg.querySelector('.cm-countries');
  if(!group) return { highlight:function(){} };
  var ATLAS = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';
  var countryData = [], lit = {};

  function project(lng, lat){
    var dl=(lng-viewLng)*DEG, phi=lat*DEG, phi0=viewLat*DEG;
    var sP=Math.sin(phi), cP=Math.cos(phi), sP0=Math.sin(phi0), cP0=Math.cos(phi0), cdl=Math.cos(dl), sdl=Math.sin(dl);
    var cosC=sP0*sP+cP0*cP*cdl;
    var x=cP*sdl, y=cP0*sP-sP0*cP*cdl;
    return [CX+x*R, CY-y*R, cosC>0];
  }
  function decode(t){
    var s=t.transform.scale, tr=t.transform.translate;
    return t.arcs.map(function(arc){var x=0,y=0;return arc.map(function(d){x+=d[0];y+=d[1];return [x*s[0]+tr[0], y*s[1]+tr[1]];});});
  }
  function expand(g, arcs){
    function dec(idx){var rev=idx<0,a=rev?~idx:idx,pts=arcs[a].slice();return rev?pts.reverse():pts;}
    function abs(refs){var ring=[];refs.forEach(function(idx,i){var pts=dec(idx);if(i===0)ring.push.apply(ring,pts);else ring.push.apply(ring,pts.slice(1));});return ring;}
    if(g.type==='Polygon')return g.arcs.map(abs);
    if(g.type==='MultiPolygon')return g.arcs.reduce(function(acc,p){return acc.concat(p.map(abs));},[]);
    return [];
  }
  function centroid(rings){if(!rings.length)return[0,0];var r=rings[0],lx=0,ly=0;r.forEach(function(p){lx+=p[0];ly+=p[1];});return[lx/r.length, ly/r.length];}
  function projRing(ring){
    var d='', inSub=false;
    for(var i=0;i<ring.length;i++){var pr=project(ring[i][0],ring[i][1]);if(pr[2]){d+=(inSub?'L':'M')+pr[0].toFixed(1)+','+pr[1].toFixed(1);inSub=true;}else if(inSub){d+='Z';inSub=false;}}
    if(inSub)d+='Z';return d;
  }
  function redraw(){
    countryData.forEach(function(c){
      var dl=(c.centroid[0]-viewLng)*DEG;
      var cosC=Math.sin(viewLat*DEG)*Math.sin(c.centroid[1]*DEG)+Math.cos(viewLat*DEG)*Math.cos(c.centroid[1]*DEG)*Math.cos(dl);
      if(cosC<-0.15){c.el.setAttribute('d','');return;}
      var d='';c.rings.forEach(function(r){d+=projRing(r);});c.el.setAttribute('d',d);
    });
  }
  function applyLit(){countryData.forEach(function(c){c.el.classList.toggle('is-lit', !!lit[c.id]);});}
  function highlight(ids){lit={};(ids||[]).forEach(function(id){lit[String(id)]=true;});applyLit();}

  var spinning=false;
  function step(){if(!spinning)return;viewLng+=speed;if(viewLng>180)viewLng-=360;redraw();requestAnimationFrame(step);}
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  fetch(ATLAS).then(function(r){return r.json();}).then(function(topo){
    var arcs=decode(topo);
    countryData=topo.objects.countries.geometries.map(function(g){
      var rings=expand(g,arcs);
      var el=document.createElementNS(NS,'path');
      el.setAttribute('class','cm-country');
      el.setAttribute('data-id',String(g.id));
      group.appendChild(el);
      return {id:String(g.id), rings:rings, centroid:centroid(rings), el:el};
    });
    if(opts.lit)highlight(opts.lit);
    applyLit();redraw();
    if(opts.spin!==false && !reduce){spinning=true;requestAnimationFrame(step);}
  }).catch(function(e){if(window.console)console.warn('Globe failed to load',e);});

  return { highlight: highlight };
};
